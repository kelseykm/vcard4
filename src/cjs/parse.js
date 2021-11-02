const {
  MissingArgument,
  InvalidArgument
} = require('./errors');

function valueParser(value, prop) {
  if (typeof value === 'undefined')
  throw new MissingArgument('Value for valueParser must be supplied');

  if (typeof value !== 'string')
  throw new InvalidArgument('Value for valueParser must be of type string');

  let quotedValues = [];
  let quotedValueIndex = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] !== 'object') {
        quotedValues[quotedValueIndex] = {
          start: index,
        };
        continue;
      }
    }

    if (value[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] === 'object') {
        quotedValues[quotedValueIndex]['stop'] = index;
        quotedValueIndex++;
      }
    }
  }

  let parsedValue = [];

  let continueFrom = 0;
  for (let index = 0; index < value.length; index++) {
    if (value[index] === ';' && value[index - 1] !== '\\') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

      parsedValue.push(value.substring(continueFrom, index));
      continueFrom = index + 1;
    }

    if (index === value.length - 1) {
      if (continueFrom === value.length)
      parsedValue.push('');
      else parsedValue.push(value.substring(continueFrom));
    }
  }

  for (let index = 0; index < parsedValue.length; index++) {
    let component = parsedValue[index];

    let quotedComponents = [];
    let quotedComponentIndex = 0;
    for (let index = 0; index < component.length; index++) {
      if (component[index] === '"') {
        if (typeof quotedComponents[quotedComponentIndex] !== 'object') {
          quotedComponents[quotedComponentIndex] = {
            start: index,
          };
          continue;
        }
      }

      if (component[index] === '"') {
        if (typeof quotedComponents[quotedComponentIndex] === 'object') {
          quotedComponents[quotedComponentIndex]['stop'] = index;
          quotedComponentIndex++;
        }
      }
    }

    let holdParsedComponent = [];
    let continueFrom = 0;
    for (let index2 = 0; index2 < component.length; index2++) {
      if (component[index2] === ',' && component[index2 - 1] !== '\\') {
        if (
          quotedComponents.some(quotedComponent => {
            return (index > quotedComponent.start) && (index < quotedComponent.stop);
          })
        ) continue;

        holdParsedComponent.push(component.substring(continueFrom, index2));
        continueFrom = index2 + 1;
      }

      if (index2 === component.length - 1) {
        if (continueFrom === component.length)
        holdParsedComponent.push('');
        else holdParsedComponent.push(component.substring(continueFrom));
      }
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
  let paramList = params ? [] : params;

  let quotedParams = [];
  let quotedParamIndex = 0;
  for (let index = 0; index < params?.length; index++) {
    if (params[index] === '"') {
      if (typeof quotedParams[quotedParamIndex] !== 'object') {
        quotedParams[quotedParamIndex] = {
          start: index,
        };
        continue;
      }
    }

    if (params[index] === '"') {
      if (typeof quotedParams[quotedParamIndex] === 'object') {
        quotedParams[quotedParamIndex]['stop'] = index;
        quotedParamIndex++;
      }
    }
  }

  let continueFrom = 0;
  for (let index = 0; index < params?.length; index++) {
    if (params[index] === ';' && params[index - 1] !== '\\') {
      if (
        quotedParams.some(quotedParam => {
          return (index > quotedParam.start) && (index < quotedParam.stop);
        })
      ) continue;

      paramList.push(params.substring(continueFrom, index));
      continueFrom = index + 1;
    }

    if (index === params.length - 1) {
      if (continueFrom === params.length)
      paramList.push('');
      else paramList.push(params.substring(continueFrom));
    }
  }

  for (let index = 0; index < paramList?.length; index++) {
    let joinedParam = paramList[index];

    let holdJoinedParam = [];
    let continueFrom = 0;
    for (let index2 = 0; index2 < joinedParam.length; index2++) {
      if (joinedParam[index2] === '=' && joinedParam[index2 - 1] !== '\\') {
        if (
          quotedParams.some(quotedParam => {
            return (index > quotedParam.start) && (index < quotedParam.stop);
          })
        ) continue;

        holdJoinedParam.push(joinedParam.substring(continueFrom, index2));
        continueFrom = index2 + 1;
      }

      if (index2 === joinedParam.length - 1) {
        if (continueFrom === joinedParam.length)
        holdJoinedParam.push('');
        else holdJoinedParam.push(joinedParam.substring(continueFrom));
      }
    }

    let parsedParam = {};
    for (let index = 0; index < holdJoinedParam.length; index++) {
      if (index % 2 === 0)
      parsedParam[holdJoinedParam[index]] = holdJoinedParam[index+1]
      else continue;
    }

    paramList[index] = parsedParam;
  }

  return paramList ?
    (paramList.length > 1 ? paramList : paramList.pop()) :
    paramList;
}

function contentLineParser(contentLine) {
  let quotedValues = [];
  let quotedValueIndex = 0;
  for (let index = 0; index < contentLine.length; index++) {
    if (contentLine[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] !== 'object') {
        quotedValues[quotedValueIndex] = {
          start: index,
        };
        continue;
      }
    }

    if (contentLine[index] === '"') {
      if (typeof quotedValues[quotedValueIndex] === 'object') {
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
    if (contentLine[index] === ':' && contentLine[index - 1] !== '\\') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

      value = contentLine.substring(index + 1);
      propAndParams = contentLine.substring(0, index);
      break;
    }
  }

  if (typeof propAndParams === 'undefined') return;

  for (let index = 0; index < propAndParams.length; index++) {
    if (contentLine[index] === ';' && contentLine[index - 1] !== '\\') {
      if (
        quotedValues.some(quotedValue => {
          return (index > quotedValue.start) && (index < quotedValue.stop);
        })
      ) continue;

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
    let stop = vcBeginIndices[index + 1];
    return allContentLines.slice(vcBeginIndex, stop);
  });

  if (!separatedVcards.length)
  throw new InvalidArgument('Invalid vCard');

  const parsedVcards = [];

  for (let separatedVcard of separatedVcards) {
    let parsedVcard = {};

    for (let line of separatedVcard) {
      if (
        typeof line === 'undefined' ||
        line?.length === 0
      ) break;

      let { property, parameters, value } = contentLineParser(line);

      if (Object.prototype.hasOwnProperty.call(parsedVcard, property)) {
        if (Array.isArray(parsedVcard[property]))
        parsedVcard[property].push({
          parameters,
          value
        });
        else {
          let currentValue = parsedVcard[property];
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
