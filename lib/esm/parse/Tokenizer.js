import { createClass as _createClass, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper, classPrivateMethodGet as _classPrivateMethodGet, slicedToArray as _slicedToArray, typeof as _typeof, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldSet as _classPrivateFieldSet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidVcard } from '../errors/InvalidVcard.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _unfoldedVcard = /*#__PURE__*/new WeakMap();

var _uriRegExp = /*#__PURE__*/new WeakMap();

var _backCount = /*#__PURE__*/new WeakSet();

var _separateVcardContentLines = /*#__PURE__*/new WeakSet();

var _valueSeparator = /*#__PURE__*/new WeakSet();

var _parametersSeparator = /*#__PURE__*/new WeakSet();

var _contentLineTokenizer = /*#__PURE__*/new WeakSet();

var _initialValidation = /*#__PURE__*/new WeakSet();

var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(_vcard) {
    _classCallCheck(this, Tokenizer);

    _classPrivateMethodInitSpec(this, _initialValidation);

    _classPrivateMethodInitSpec(this, _contentLineTokenizer);

    _classPrivateMethodInitSpec(this, _parametersSeparator);

    _classPrivateMethodInitSpec(this, _valueSeparator);

    _classPrivateMethodInitSpec(this, _separateVcardContentLines);

    _classPrivateMethodInitSpec(this, _backCount);

    _classPrivateFieldInitSpec(this, _unfoldedVcard, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _uriRegExp, {
      writable: true,
      value: new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?")
    });

    _classPrivateMethodGet(this, _initialValidation, _initialValidation2).call(this, _vcard);

    _classPrivateFieldSet(this, _unfoldedVcard, _vcard.replace(/\r\n[\t ]/g, "")); //unfold


    Object.freeze(this);
  }

  _createClass(Tokenizer, [{
    key: "numberOfVcards",
    get: //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
    function get() {
      var _classPrivateFieldGet2;

      return ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _unfoldedVcard).match(/BEGIN:VCARD\r\n/gi)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : []).length || 1;
    }
  }, {
    key: "tokens",
    get: function get() {
      var tokens = [];

      if (this.numberOfVcards === 1) {
        var _iterator = _createForOfIteratorHelper(_classPrivateMethodGet(this, _separateVcardContentLines, _separateVcardContentLines2).call(this)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var contentLine = _step.value;
            tokens.push(_classPrivateMethodGet(this, _contentLineTokenizer, _contentLineTokenizer2).call(this, contentLine));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(_classPrivateMethodGet(this, _separateVcardContentLines, _separateVcardContentLines2).call(this)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var vcard = _step2.value;
            var _cardTokens = [];

            var _iterator3 = _createForOfIteratorHelper(vcard),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _contentLine = _step3.value;

                _cardTokens.push(_classPrivateMethodGet(this, _contentLineTokenizer, _contentLineTokenizer2).call(this, _contentLine));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            tokens.push(_cardTokens);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return tokens;
    }
  }]);

  return Tokenizer;
}();

function _backCount2(chr, str) {
  if (typeof chr === "undefined" || typeof str === "undefined") throw new MissingArgument("Character and string for this.#backCount must be supplied");
  if (typeof chr !== "string" || typeof str !== "string") throw new InvalidArgument("Character and string for this.#backCount must be of type string");
  var count = 0;

  for (var index = str.length - 1; index >= 0; index--) {
    if (str[index] === chr) count++;else break;
  }

  return count;
}

function _separateVcardContentLines2() {
  if (this.numberOfVcards === 1) return _classPrivateFieldGet(this, _unfoldedVcard).split("\r\n").filter(function (vcard) {
    return vcard !== "";
  });
  return _classPrivateFieldGet(this, _unfoldedVcard).split(/BEGIN:VCARD\r\n/gi).filter(function (vcard) {
    return vcard !== "";
  }).map(function (vcard) {
    return ("BEGIN:VCARD\r\n" + vcard).split("\r\n").filter(function (vcard) {
      return vcard !== "";
    });
  });
}

function _valueSeparator2(value) {
  var _this = this;

  if (_classPrivateFieldGet(this, _uriRegExp).test(value)) return value;
  var quotedValues = [];
  var quotedValueIndex = 0;

  for (var index = 0; index < value.length; index++) {
    if (value[index] === '"') {
      var backslashCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "\\", value.slice(0, index));

      if (backslashCount % 2 !== 0) continue;
      if (_typeof(quotedValues[quotedValueIndex]) !== "object") quotedValues[quotedValueIndex] = {
        start: index
      };else if (_typeof(quotedValues[quotedValueIndex]) === "object") {
        quotedValues[quotedValueIndex]["stop"] = index;
        quotedValueIndex++;
      }
    }
  }

  var parsedValue = [];
  var continueFrom = 0;

  var _loop = function _loop(_index) {
    if (value[_index] === ";") {
      if (quotedValues.some(function (quotedValue) {
        return _index > quotedValue.start && _index < quotedValue.stop;
      })) return "continue";

      var _backslashCount3 = _classPrivateMethodGet(_this, _backCount, _backCount2).call(_this, "\\", value.substring(continueFrom, _index));

      if (_backslashCount3 % 2 !== 0) return "continue";
      parsedValue.push(value.substring(continueFrom, _index));
      continueFrom = _index + 1;
    }

    if (_index === value.length - 1) parsedValue.push(value.substring(continueFrom));
  };

  for (var _index = 0; _index < value.length; _index++) {
    var _ret = _loop(_index);

    if (_ret === "continue") continue;
  }

  for (var _index2 = 0; _index2 < parsedValue.length; _index2++) {
    var component = parsedValue[_index2];
    var quotedComponents = [];
    var quotedComponentIndex = 0;

    for (var _index3 = 0; _index3 < component.length; _index3++) {
      if (component[_index3] === '"') {
        var _backslashCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "\\", component.slice(0, _index3));

        if (_backslashCount % 2 !== 0) continue;
        if (_typeof(quotedComponents[quotedComponentIndex]) !== "object") quotedComponents[quotedComponentIndex] = {
          start: _index3
        };else if (_typeof(quotedComponents[quotedComponentIndex]) === "object") {
          quotedComponents[quotedComponentIndex]["stop"] = _index3;
          quotedComponentIndex++;
        }
      }
    }

    var holdParsedComponent = [];
    var _continueFrom = 0;

    var _loop2 = function _loop2(index2) {
      if (component[index2] === ",") {
        if (quotedComponents.some(function (quotedComponent) {
          return index2 > quotedComponent.start && index2 < quotedComponent.stop;
        })) return "continue";

        var _backslashCount2 = _classPrivateMethodGet(_this, _backCount, _backCount2).call(_this, "\\", component.substring(_continueFrom, index2));

        if (_backslashCount2 % 2 !== 0) return "continue";
        holdParsedComponent.push(component.substring(_continueFrom, index2));
        _continueFrom = index2 + 1;
      }

      if (index2 === component.length - 1) holdParsedComponent.push(component.substring(_continueFrom));
    };

    for (var index2 = 0; index2 < component.length; index2++) {
      var _ret2 = _loop2(index2);

      if (_ret2 === "continue") continue;
    }

    if (holdParsedComponent.length > 1) parsedValue[_index2] = holdParsedComponent;
  }

  parsedValue = parsedValue.map(function (val) {
    if (!Array.isArray(val)) return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    return val.map(function (innerVal) {
      return innerVal.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    });
  });
  return parsedValue.length > 1 ? parsedValue : parsedValue[0];
}

function _parametersSeparator2(params) {
  var _this2 = this;

  var paramList = [];
  var quotedParams = [];
  var quotedParamIndex = 0;

  for (var index = 0; index < params.length; index++) {
    if (params[index] === '"') {
      var backslashCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "\\", params.slice(0, index));

      if (backslashCount % 2 !== 0) continue;
      if (_typeof(quotedParams[quotedParamIndex]) !== "object") quotedParams[quotedParamIndex] = {
        start: index
      };else if (_typeof(quotedParams[quotedParamIndex]) === "object") {
        quotedParams[quotedParamIndex]["stop"] = index;
        quotedParamIndex++;
      }
    }
  }

  var continueFrom = 0;

  var _loop3 = function _loop3(_index4) {
    if (params[_index4] === ";") {
      if (quotedParams.some(function (quotedParam) {
        return _index4 > quotedParam.start && _index4 < quotedParam.stop;
      })) return "continue";

      var _backslashCount4 = _classPrivateMethodGet(_this2, _backCount, _backCount2).call(_this2, "\\", params.substring(continueFrom, _index4));

      if (_backslashCount4 % 2 !== 0) return "continue";
      paramList.push(params.substring(continueFrom, _index4));
      continueFrom = _index4 + 1;
    }

    if (_index4 === params.length - 1) paramList.push(params.substring(continueFrom));
  };

  for (var _index4 = 0; _index4 < params.length; _index4++) {
    var _ret3 = _loop3(_index4);

    if (_ret3 === "continue") continue;
  }

  var refParamList = [].concat(paramList);

  var _loop4 = function _loop4(_index5) {
    var joinedParam = paramList[_index5];
    var holdJoinedParam = [];
    var continueFrom = 0;

    var _loop5 = function _loop5(_index7) {
      if (joinedParam[_index7] === "=") {
        var actualIndex = _index5 ? function () {
          var count = 0;

          for (var index3 = 0; index3 < _index5; index3++) {
            count += refParamList[index3]["length"];
            count++; //for removed semicolon
          }

          count += _index7;
          return count;
        }() : _index7;
        if (quotedParams.some(function (quotedParam) {
          return actualIndex > quotedParam.start && actualIndex < quotedParam.stop;
        })) return "continue";

        var _backslashCount5 = _classPrivateMethodGet(_this2, _backCount, _backCount2).call(_this2, "\\", joinedParam.substring(continueFrom, _index7));

        if (_backslashCount5 % 2 !== 0) return "continue";
        holdJoinedParam.push(joinedParam.substring(continueFrom, _index7));
        continueFrom = _index7 + 1;
      }

      if (_index7 === joinedParam.length - 1) holdJoinedParam.push(joinedParam.substring(continueFrom));
    };

    for (var _index7 = 0; _index7 < joinedParam.length; _index7++) {
      var _ret4 = _loop5(_index7);

      if (_ret4 === "continue") continue;
    }

    var parsedParam = {};

    for (var _index8 = 0; _index8 < holdJoinedParam.length; _index8++) {
      if (_index8 % 2 === 0) parsedParam[holdJoinedParam[_index8]] = holdJoinedParam[_index8 + 1];else continue;
    }

    paramList[_index5] = parsedParam;
  };

  for (var _index5 = 0; _index5 < paramList.length; _index5++) {
    _loop4(_index5);
  }

  for (var _index6 = 0; _index6 < paramList.length; _index6++) {
    var currentParam = paramList[_index6];
    var currentParamKey = Object.keys(currentParam).pop();
    var currentParamValue = Object.values(currentParam).pop();
    var holdCurrentParamValue = "";
    var _continueFrom2 = 0;

    for (var index2 = 0; index2 < currentParamValue.length; index2++) {
      if (currentParamValue[index2] === "^") {
        var circumflexCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "^", currentParamValue.substring(_continueFrom2, index2));

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

      _continueFrom2 = index2 + 1;
    }

    if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"') && !_classPrivateFieldGet(this, _uriRegExp).test(holdCurrentParamValue.slice(1, -1))) holdCurrentParamValue = _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, holdCurrentParamValue.slice(1, -1));
    if (Array.isArray(holdCurrentParamValue)) holdCurrentParamValue.map(function (val) {
      return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    });else holdCurrentParamValue.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    currentParam[currentParamKey] = holdCurrentParamValue;
  }

  return paramList.reduce(function (accumulatedParams, currentParam) {
    var key = Object.keys(currentParam)[0].toUpperCase();
    var value = Object.values(currentParam)[0];
    accumulatedParams[key] = value;
    return accumulatedParams;
  }, {});
}

function _contentLineTokenizer2(contentLine) {
  var firstSemiColonIndex = contentLine.indexOf(";");
  var firstColonIndex = contentLine.indexOf(":");
  var propEndPoint = firstSemiColonIndex !== -1 ? firstColonIndex < firstSemiColonIndex ? firstColonIndex : firstSemiColonIndex : firstColonIndex;
  var property = contentLine.slice(0, propEndPoint);
  var group = null;

  if (property.indexOf(".") !== -1) {
    var _property$split = property.split(".");

    var _property$split2 = _slicedToArray(_property$split, 2);

    group = _property$split2[0];
    property = _property$split2[1];
  }

  if (firstSemiColonIndex === -1 || firstColonIndex < firstSemiColonIndex) return {
    group: group,
    property: property.toUpperCase(),
    parameters: {},
    value: _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, contentLine.slice(propEndPoint + 1))
  };
  var quotedParts = [];
  var quotedPartsIndex = 0;

  for (var index = 0; index < contentLine.length; index++) {
    if (contentLine[index] === '"') {
      var backslashCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "\\", contentLine.slice(0, index));

      if (backslashCount % 2 !== 0) continue;

      if (_typeof(quotedParts[quotedPartsIndex]) !== "object") {
        quotedParts[quotedPartsIndex] = {
          start: index
        };
      } else {
        quotedParts[quotedPartsIndex]["stop"] = index;
        quotedPartsIndex++;
      }
    }
  }

  if (quotedParts.some(function (part) {
    return part.start < firstColonIndex && part.stop > firstColonIndex;
  })) {
    var _loop6 = function _loop6(_index9) {
      if (contentLine[_index9] === ":") {
        if (quotedParts.some(function (part) {
          return part.start < _index9 && part.stop > _index9;
        })) return "continue";else {
          firstColonIndex = _index9;
          return "break";
        }
      }
    };

    for (var _index9 = firstColonIndex; _index9 < contentLine.length; _index9++) {
      var _ret5 = _loop6(_index9);

      if (_ret5 === "continue") continue;
      if (_ret5 === "break") break;
    }
  }

  return {
    group: group,
    property: property.toUpperCase(),
    parameters: _classPrivateMethodGet(this, _parametersSeparator, _parametersSeparator2).call(this, contentLine.slice(firstSemiColonIndex + 1, firstColonIndex)),
    value: _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, contentLine.slice(firstColonIndex + 1))
  };
}

function _initialValidation2(vcard) {
  var _vcard$match;

  if (typeof vcard === "undefined") throw new MissingArgument("vCard to be tokenized must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be tokenized must be of type string");
  if (((_vcard$match = vcard.match(/\r\n/g)) !== null && _vcard$match !== void 0 ? _vcard$match : []).length < 4) throw new InvalidVcard("vCard content lines must be delimited by CRLF (\\r\\n) sequence");
}

_defineProperty(Tokenizer, "identifier", "Tokenizer");

Object.freeze(Tokenizer);

export { Tokenizer };
//# sourceMappingURL=Tokenizer.js.map
