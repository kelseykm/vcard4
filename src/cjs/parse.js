const {
  MissingArgument,
  InvalidArgument
} = require('./errors');

function backCountBackslash(str) {
  const chr = '\\';
  let count = 0;

  for (let index = str.length - 1; index >= 0; index--) {
    if (str[index] === chr) count ++;
    else break;
  }

  return count;
}

function valueParser(value, prop) {
  if (typeof value === 'undefined')
  throw new MissingArgument('Value for valueParser must be supplied');

  if (typeof value !== 'string')
  throw new InvalidArgument('Value for valueParser must be of type string');

  const quotedValues = [];
  let quotedValueIndex = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] !== 'object')
      quotedValues[quotedValueIndex] = {
        start: index,
      };
      else if (typeof quotedValues[quotedValueIndex] === 'object') {
        quotedValues[quotedValueIndex]['stop'] = index;
        quotedValueIndex++;
      }
    }
  }

  const parsedValue = [];

  let continueFrom = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === ';') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

      const backslashCount = backCountBackslash(value.substring(continueFrom, index));
      if (backslashCount % 2 !== 0) continue;

      parsedValue.push(value.substring(continueFrom, index));
      continueFrom = index + 1;
    }

    if (index === value.length - 1)
    parsedValue.push(value.substring(continueFrom));
  }

  for (let index = 0; index < parsedValue.length; index++) {
    const component = parsedValue[index];

    const quotedComponents = [];
    let quotedComponentIndex = 0;
    for (let index = 0; index < component.length; index++) {
      if (component[index] === '"') {
        if (typeof quotedComponents[quotedComponentIndex] !== 'object')
        quotedComponents[quotedComponentIndex] = {
          start: index,
        };
        else if (typeof quotedComponents[quotedComponentIndex] === 'object') {
          quotedComponents[quotedComponentIndex]['stop'] = index;
          quotedComponentIndex++;
        }
      }
    }

    const holdParsedComponent = [];
    let continueFrom = 0;
    for (let index2 = 0; index2 < component.length; index2++) {
      if (component[index2] === ',') {
        if (
          quotedComponents.some(quotedComponent => {
            return (index > quotedComponent.start) && (index < quotedComponent.stop);
          })
        ) continue;

        const backslashCount = backCountBackslash(component.substring(continueFrom, index2));
        if (backslashCount % 2 !== 0) continue;

        holdParsedComponent.push(component.substring(continueFrom, index2));
        continueFrom = index2 + 1;
      }

      if (index2 === component.length - 1)
      holdParsedComponent.push(component.substring(continueFrom));
    }

    if (holdParsedComponent.length > 1)
    parsedValue[index] = holdParsedComponent;
  }

  switch (prop) {
    case 'N':
      return {
        familyNames: parsedValue[0],
        givenNames: parsedValue[1],
        additionalNames: parsedValue[2],
        honorificPrefixes: parsedValue[3],
        honorificSuffixes: parsedValue[4],
      };
    case 'ADR':
      return {
        postOfficeBox: parsedValue[0],
        extendedAddress: parsedValue[1],
        streetAddress: parsedValue[2],
        locality: parsedValue[3],
        region: parsedValue[4],
        postalCode: parsedValue[5],
        countryName: parsedValue[6],
      };
    case 'GENDER':
      return {
        sex: parsedValue[0],
        gender: parsedValue[1],
      };
    default:
      return parsedValue.length > 1 ? parsedValue : parsedValue.pop();
  }
}

function parameterParser(params) {
  const paramList = params ? [] : params;

  const quotedParams = [];
  let quotedParamIndex = 0;
  for (let index = 0; index < params?.length; index++) {
    if (params[index] === '"') {
      if (typeof quotedParams[quotedParamIndex] !== 'object')
      quotedParams[quotedParamIndex] = {
        start: index,
      };
      else if (typeof quotedParams[quotedParamIndex] === 'object') {
        quotedParams[quotedParamIndex]['stop'] = index;
        quotedParamIndex++;
      }
    }
  }

  let continueFrom = 0;
  for (let index = 0; index < params?.length; index++) {
    if (params[index] === ';') {
      if (
        quotedParams.some(quotedParam => {
          return (index > quotedParam.start) && (index < quotedParam.stop);
        })
      ) continue;

      const backslashCount = backCountBackslash(params.substring(continueFrom, index));
      if (backslashCount % 2 !== 0) continue;

      paramList.push(params.substring(continueFrom, index));
      continueFrom = index + 1;
    }

    if (index === params.length - 1)
    paramList.push(params.substring(continueFrom));
  }

  for (let index = 0; index < paramList?.length; index++) {
    const joinedParam = paramList[index];

    const holdJoinedParam = [];
    let continueFrom = 0;
    for (let index2 = 0; index2 < joinedParam.length; index2++) {
      if (joinedParam[index2] === '=') {
        if (
          quotedParams.some(quotedParam => {
            return (index > quotedParam.start) && (index < quotedParam.stop);
          })
        ) continue;

        const backslashCount = backCountBackslash(joinedParam.substring(continueFrom, index2));
        if (backslashCount % 2 !== 0) continue;

        holdJoinedParam.push(joinedParam.substring(continueFrom, index2));
        continueFrom = index2 + 1;
      }

      if (index2 === joinedParam.length - 1)
      holdJoinedParam.push(joinedParam.substring(continueFrom));
    }

    const parsedParam = {};
    for (let index = 0; index < holdJoinedParam.length; index++) {
      if (index % 2 === 0)
      parsedParam[holdJoinedParam[index]] = holdJoinedParam[index + 1]
      else continue;
    }

    paramList[index] = parsedParam;
  }

  return paramList ?
    (paramList.length > 1 ? paramList : paramList.pop()) :
    paramList;
}

function contentLineParser(contentLine) {
  const quotedValues = [];
  let quotedValueIndex = 0;
  for (let index = 0; index < contentLine.length; index++) {
    if (contentLine[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] !== 'object')
      quotedValues[quotedValueIndex] = {
        start: index,
      };
      else if (typeof quotedValues[quotedValueIndex] === 'object') {
        quotedValues[quotedValueIndex]['stop'] = index;
        quotedValueIndex++;
      }
    }
  }

  let prop;
  let params;
  let value;
  let propAndParams;

  for (let index = 0; index < contentLine.length; index++) {
    if (contentLine[index] === ':') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

      const backslashCount = backCountBackslash(contentLine.substring(0, index));
      if (backslashCount % 2 !== 0) continue;

      value = contentLine.substring(index + 1);
      propAndParams = contentLine.substring(0, index);
      break;
    }
  }

  if (typeof propAndParams === 'undefined') return;

  for (let index = 0; index < propAndParams.length; index++) {
    if (contentLine[index] === ';') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

      const backslashCount = backCountBackslash(propAndParams.substring(0, index));
      if (backslashCount % 2 !== 0) continue;

      params = propAndParams.substring(index + 1);
      prop = propAndParams.substring(0, index);
      break;
    }
  }

  if (typeof prop === 'undefined')
  prop = propAndParams;

  return {
    property: prop,
    parameters: parameterParser(params),
    value: valueParser(value, prop),
  };
}

function parse(vcard) {
  if (typeof vcard === 'undefined')
  throw new MissingArgument('vCard to be parsed must be supplied');

  else if (typeof vcard !== 'string')
  throw new TypeError('vCard to be parsed must be of type string');

  vcard = vcard.replace(/\r\n[\t ]/g, '');

  const allContentLines = vcard.split('\r\n');

  if (allContentLines.length < 4)
  throw new InvalidArgument('vCard content lines must be delimited by CRLF sequence');

  const vcBeginIndices = [];

  allContentLines.forEach((contentLine, index) => {
    if (/^BEGIN:VCARD$/i.test(contentLine))
    vcBeginIndices.push(index);
  });

  const separatedVcards = vcBeginIndices.map((vcBeginIndex, index) => {
    const stop = vcBeginIndices[index + 1];
    return allContentLines.slice(vcBeginIndex, stop);
  });

  if (!separatedVcards.length)
  throw new InvalidArgument('Invalid vCard');

  const parsedVcards = [];

  for (const separatedVcard of separatedVcards) {
    const parsedVcard = {};

    for (const line of separatedVcard) {
      if (
        typeof line === 'undefined' ||
        line?.length === 0
      ) break;

      let { property, parameters, value } = contentLineParser(line);

      property = property.split('.').slice(-1);

      if (Object.prototype.hasOwnProperty.call(parsedVcard, property)) {
        if (Array.isArray(parsedVcard[property]))
        parsedVcard[property].push({
          parameters,
          value
        });
        else {
          const currentValue = parsedVcard[property];
          parsedVcard[property] = [
            currentValue,
            {
              parameters,
              value
            }
          ];
        }
      }
      else parsedVcard[property] = {
        parameters,
        value
      };
    }

    if (
      (typeof parsedVcard['BEGIN'] === 'undefined') ||
      (typeof parsedVcard['VERSION'] === 'undefined') ||
      (typeof parsedVcard['END'] === 'undefined')
    )
    throw new InvalidArgument('Invalid vCard');

    parsedVcards.push(parsedVcard);
  }

  return parsedVcards.length === 1 ? parsedVcards.pop() : parsedVcards;
}

module.exports = parse;
