import {
  MissingArgument,
  InvalidArgument,
  InvalidVcard,
} from "../errors/index.js";

export class Tokenizer {
  static identifier = "Tokenizer";

  #_unfoldedVcard;

  get numberOfVcards() {
    return (this.#_unfoldedVcard.match(/BEGIN:VCARD\r\n/gi) ?? []).length || 1;
  }

  #backCount(chr, str) {
    if (typeof chr === "undefined" || typeof str === "undefined")
      throw new MissingArgument(
        "Character and string for this.#backCount must be supplied"
      );

    if (typeof chr !== "string" || typeof str !== "string")
      throw new InvalidArgument(
        "Character and string for this.#backCount must be of type string"
      );

    let count = 0;

    for (let index = str.length - 1; index >= 0; index--) {
      if (str[index] === chr) count++;
      else break;
    }

    return count;
  }

  #separateVcardContentLines() {
    if (this.numberOfVcards === 1)
      return this.#_unfoldedVcard.split("\r\n").filter((vcard) => vcard !== "");

    return this.#_unfoldedVcard
      .split(/BEGIN:VCARD\r\n/gi)
      .filter((vcard) => vcard !== "")
      .map((vcard) =>
        ("BEGIN:VCARD\r\n" + vcard)
          .split("\r\n")
          .filter((vcard) => vcard !== "")
      );
  }

  #valueSeparator(value) {
    if (value.startsWith('"') && value.endsWith('"'))
      value = value.slice(1, -1);

    if (URL.canParse(value)) return value;

    const quotedValues = [];
    let quotedValueIndex = 0;
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '"') {
        const backslashCount = this.#backCount("\\", value.slice(0, index));

        if (backslashCount % 2 !== 0) continue;

        if (typeof quotedValues[quotedValueIndex] !== "object")
          quotedValues[quotedValueIndex] = {
            start: index,
          };
        else if (typeof quotedValues[quotedValueIndex] === "object") {
          quotedValues[quotedValueIndex]["stop"] = index;
          quotedValueIndex++;
        }
      }
    }

    let parsedValue = [];

    let continueFrom = 0;
    for (let index = 0; index < value.length; index++) {
      if (value[index] === ";") {
        if (
          quotedValues.some((quotedValue) => {
            return index > quotedValue.start && index < quotedValue.stop;
          })
        )
          continue;

        const backslashCount = this.#backCount(
          "\\",
          value.substring(continueFrom, index)
        );
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
          const backslashCount = this.#backCount(
            "\\",
            component.slice(0, index)
          );

          if (backslashCount % 2 !== 0) continue;

          if (typeof quotedComponents[quotedComponentIndex] !== "object")
            quotedComponents[quotedComponentIndex] = {
              start: index,
            };
          else if (typeof quotedComponents[quotedComponentIndex] === "object") {
            quotedComponents[quotedComponentIndex]["stop"] = index;
            quotedComponentIndex++;
          }
        }
      }

      const holdParsedComponent = [];
      let continueFrom = 0;
      for (let index2 = 0; index2 < component.length; index2++) {
        if (component[index2] === ",") {
          if (
            quotedComponents.some((quotedComponent) => {
              return (
                index2 > quotedComponent.start && index2 < quotedComponent.stop
              );
            })
          )
            continue;

          const backslashCount = this.#backCount(
            "\\",
            component.substring(continueFrom, index2)
          );
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

    parsedValue = parsedValue.map((val) => {
      if (!Array.isArray(val))
        return val
          .replaceAll("\\n", "\n")
          .replaceAll("\\;", ";")
          .replaceAll("\\:", ":")
          .replaceAll("\\,", ",")
          .replaceAll("\\\\", "\\");

      return val.map((innerVal) =>
        innerVal
          .replaceAll("\\n", "\n")
          .replaceAll("\\;", ";")
          .replaceAll("\\:", ":")
          .replaceAll("\\,", ",")
          .replaceAll("\\\\", "\\")
      );
    });

    return parsedValue.length > 1 ? parsedValue : parsedValue[0];
  }

  #parametersSeparator(params) {
    const paramList = [];

    const quotedParams = [];
    let quotedParamIndex = 0;
    for (let index = 0; index < params.length; index++) {
      if (params[index] === '"') {
        const backslashCount = this.#backCount("\\", params.slice(0, index));

        if (backslashCount % 2 !== 0) continue;

        if (typeof quotedParams[quotedParamIndex] !== "object")
          quotedParams[quotedParamIndex] = {
            start: index,
          };
        else if (typeof quotedParams[quotedParamIndex] === "object") {
          quotedParams[quotedParamIndex]["stop"] = index;
          quotedParamIndex++;
        }
      }
    }

    let continueFrom = 0;
    for (let index = 0; index < params.length; index++) {
      if (params[index] === ";") {
        if (
          quotedParams.some((quotedParam) => {
            return index > quotedParam.start && index < quotedParam.stop;
          })
        )
          continue;

        const backslashCount = this.#backCount(
          "\\",
          params.substring(continueFrom, index)
        );
        if (backslashCount % 2 !== 0) continue;

        paramList.push(params.substring(continueFrom, index));
        continueFrom = index + 1;
      }

      if (index === params.length - 1)
        paramList.push(params.substring(continueFrom));
    }

    const refParamList = [...paramList];
    for (let index = 0; index < paramList.length; index++) {
      const joinedParam = paramList[index];

      const holdJoinedParam = [];
      let continueFrom = 0;
      for (let index2 = 0; index2 < joinedParam.length; index2++) {
        if (joinedParam[index2] === "=") {
          const actualIndex = index
            ? (() => {
                let count = 0;

                for (let index3 = 0; index3 < index; index3++) {
                  count += refParamList[index3]["length"];
                  count++; //for removed semicolon
                }

                count += index2;

                return count;
              })()
            : index2;
          if (
            quotedParams.some((quotedParam) => {
              return (
                actualIndex > quotedParam.start &&
                actualIndex < quotedParam.stop
              );
            })
          )
            continue;

          const backslashCount = this.#backCount(
            "\\",
            joinedParam.substring(continueFrom, index2)
          );
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
          parsedParam[holdJoinedParam[index]] = holdJoinedParam[index + 1];
        else continue;
      }

      paramList[index] = parsedParam;
    }

    for (let index = 0; index < paramList.length; index++) {
      const currentParam = paramList[index];
      const currentParamKey = Object.keys(currentParam).pop();
      const currentParamValue = Object.values(currentParam).pop();

      let holdCurrentParamValue = "";
      let continueFrom = 0;
      for (let index2 = 0; index2 < currentParamValue.length; index2++) {
        if (currentParamValue[index2] === "^") {
          const circumflexCount = this.#backCount(
            "^",
            currentParamValue.substring(continueFrom, index2)
          );

          if (circumflexCount % 2 !== 0) {
            holdCurrentParamValue += currentParamValue[index2];
          } else {
            switch (true) {
              case currentParamValue[index2 + 1] === "n":
                holdCurrentParamValue += "\n";
                index2++;
                break;
              case currentParamValue[index2 + 1] === "’":
                holdCurrentParamValue += '"';
                index2++;
                break;
              case currentParamValue[index2 + 1] === "^":
                holdCurrentParamValue += "^";
                index2++;
                break;
            }
          }
        } else {
          holdCurrentParamValue += currentParamValue[index2];
        }
        continueFrom = index2 + 1;
      }

      if (
        holdCurrentParamValue.startsWith('"') &&
        holdCurrentParamValue.endsWith('"') &&
        !URL.canParse(holdCurrentParamValue.slice(1, -1))
      )
        holdCurrentParamValue = this.#valueSeparator(
          holdCurrentParamValue.slice(1, -1)
        );
      else if (
        holdCurrentParamValue.startsWith('"') &&
        holdCurrentParamValue.endsWith('"')
      )
        holdCurrentParamValue = holdCurrentParamValue.slice(1, -1);

      if (Array.isArray(holdCurrentParamValue))
        holdCurrentParamValue = holdCurrentParamValue.map((val) =>
          val
            .replaceAll("\\n", "\n")
            .replaceAll("\\;", ";")
            .replaceAll("\\:", ":")
            .replaceAll("\\,", ",")
            .replaceAll("\\\\", "\\")
        );
      else
        holdCurrentParamValue = holdCurrentParamValue
          .replaceAll("\\n", "\n")
          .replaceAll("\\;", ";")
          .replaceAll("\\:", ":")
          .replaceAll("\\,", ",")
          .replaceAll("\\\\", "\\");

      currentParam[currentParamKey] = holdCurrentParamValue;
    }

    return paramList.reduce((accumulatedParams, currentParam) => {
      const key = Object.keys(currentParam)[0].toUpperCase();
      const value = Object.values(currentParam)[0];
      accumulatedParams[key] = value;
      return accumulatedParams;
    }, {});
  }

  #contentLineTokenizer(contentLine) {
    const firstSemiColonIndex = contentLine.indexOf(";");
    let firstColonIndex = contentLine.indexOf(":");

    const propEndPoint =
      firstSemiColonIndex !== -1
        ? firstColonIndex < firstSemiColonIndex
          ? firstColonIndex
          : firstSemiColonIndex
        : firstColonIndex;

    let property = contentLine.slice(0, propEndPoint);
    let group = null;

    if (property.indexOf(".") !== -1) {
      [group, property] = property.split(".");
    }

    if (firstSemiColonIndex === -1 || firstColonIndex < firstSemiColonIndex)
      return {
        group,
        property: property.toUpperCase(),
        parameters: {},
        value: this.#valueSeparator(contentLine.slice(propEndPoint + 1)),
      };

    const quotedParts = [];
    let quotedPartsIndex = 0;
    for (let index = 0; index < contentLine.length; index++) {
      if (contentLine[index] === '"') {
        const backslashCount = this.#backCount(
          "\\",
          contentLine.slice(0, index)
        );

        if (backslashCount % 2 !== 0) continue;

        if (typeof quotedParts[quotedPartsIndex] !== "object") {
          quotedParts[quotedPartsIndex] = {
            start: index,
          };
        } else {
          quotedParts[quotedPartsIndex]["stop"] = index;
          quotedPartsIndex++;
        }
      }
    }

    if (
      quotedParts.some(
        (part) => part.start < firstColonIndex && part.stop > firstColonIndex
      )
    )
      for (let index = firstColonIndex; index < contentLine.length; index++) {
        if (contentLine[index] === ":") {
          if (
            quotedParts.some((part) => part.start < index && part.stop > index)
          )
            continue;
          else {
            firstColonIndex = index;
            break;
          }
        }
      }

    return {
      group,
      property: property.toUpperCase(),
      parameters: this.#parametersSeparator(
        contentLine.slice(firstSemiColonIndex + 1, firstColonIndex)
      ),
      value: this.#valueSeparator(contentLine.slice(firstColonIndex + 1)),
    };
  }

  #initialValidation(vcard) {
    if (typeof vcard === "undefined")
      throw new MissingArgument("vCard to be tokenized must be supplied");
    else if (typeof vcard !== "string")
      throw new TypeError("vCard to be tokenized must be of type string");

    if ((vcard.match(/\r\n/g) ?? []).length < 4)
      throw new InvalidVcard(
        "vCard content lines must be delimited by CRLF (\\r\\n) sequence"
      );
  }

  get tokens() {
    const tokens = [];

    if (this.numberOfVcards === 1) {
      for (const contentLine of this.#separateVcardContentLines())
        tokens.push(this.#contentLineTokenizer(contentLine));
    } else {
      for (const vcard of this.#separateVcardContentLines()) {
        const _cardTokens = [];

        for (const contentLine of vcard)
          _cardTokens.push(this.#contentLineTokenizer(contentLine));

        tokens.push(_cardTokens);
      }
    }

    return tokens;
  }

  constructor(vcard) {
    this.#initialValidation(vcard);
    this.#_unfoldedVcard = vcard.replace(/\r\n[\t ]/g, ""); //unfold

    Object.freeze(this);
  }
}

Object.freeze(Tokenizer);
