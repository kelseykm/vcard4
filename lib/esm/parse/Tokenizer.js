import { createClass as _createClass, classPrivateFieldGet2 as _classPrivateFieldGet2, createForOfIteratorHelper as _createForOfIteratorHelper, assertClassBrand as _assertClassBrand, slicedToArray as _slicedToArray, typeof as _typeof, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidVcard } from '../errors/InvalidVcard.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _unfoldedVcard = /*#__PURE__*/new WeakMap();
var _Tokenizer_brand = /*#__PURE__*/new WeakSet();
var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(_vcard) {
    _classCallCheck(this, Tokenizer);
    _classPrivateMethodInitSpec(this, _Tokenizer_brand);
    _classPrivateFieldInitSpec(this, _unfoldedVcard, void 0);
    _assertClassBrand(_Tokenizer_brand, this, _initialValidation).call(this, _vcard);
    _classPrivateFieldSet2(_unfoldedVcard, this, _vcard.replace(/\r\n[\t ]/g, "")); //unfold

    Object.freeze(this);
  }
  return _createClass(Tokenizer, [{
    key: "numberOfVcards",
    get: function get() {
      var _classPrivateFieldGet2$1;
      return ((_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_unfoldedVcard, this).match(/BEGIN:VCARD\r\n/gi)) !== null && _classPrivateFieldGet2$1 !== void 0 ? _classPrivateFieldGet2$1 : []).length || 1;
    }
  }, {
    key: "tokens",
    get: function get() {
      var tokens = [];
      if (this.numberOfVcards === 1) {
        var _iterator = _createForOfIteratorHelper(_assertClassBrand(_Tokenizer_brand, this, _separateVcardContentLines).call(this)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var contentLine = _step.value;
            tokens.push(_assertClassBrand(_Tokenizer_brand, this, _contentLineTokenizer).call(this, contentLine));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(_assertClassBrand(_Tokenizer_brand, this, _separateVcardContentLines).call(this)),
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
                _cardTokens.push(_assertClassBrand(_Tokenizer_brand, this, _contentLineTokenizer).call(this, _contentLine));
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
}();
function _backCount(chr, str) {
  if (typeof chr === "undefined" || typeof str === "undefined") throw new MissingArgument("Character and string for this.#backCount must be supplied");
  if (typeof chr !== "string" || typeof str !== "string") throw new InvalidArgument("Character and string for this.#backCount must be of type string");
  var count = 0;
  for (var index = str.length - 1; index >= 0; index--) {
    if (str[index] === chr) count++;else break;
  }
  return count;
}
function _separateVcardContentLines() {
  if (this.numberOfVcards === 1) return _classPrivateFieldGet2(_unfoldedVcard, this).split("\r\n").filter(function (vcard) {
    return vcard !== "";
  });
  return _classPrivateFieldGet2(_unfoldedVcard, this).split(/BEGIN:VCARD\r\n/gi).filter(function (vcard) {
    return vcard !== "";
  }).map(function (vcard) {
    return ("BEGIN:VCARD\r\n" + vcard).split("\r\n").filter(function (vcard) {
      return vcard !== "";
    });
  });
}
function _valueSeparator(value) {
  var _this = this;
  if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
  if (URL.canParse(value)) return value;
  var quotedValues = [];
  var quotedValueIndex = 0;
  for (var index = 0; index < value.length; index++) {
    if (value[index] === '"') {
      var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", value.slice(0, index));
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
        })) return 0; // continue
        var _backslashCount3 = _assertClassBrand(_Tokenizer_brand, _this, _backCount).call(_this, "\\", value.substring(continueFrom, _index));
        if (_backslashCount3 % 2 !== 0) return 0; // continue
        parsedValue.push(value.substring(continueFrom, _index));
        continueFrom = _index + 1;
      }
      if (_index === value.length - 1) parsedValue.push(value.substring(continueFrom));
    },
    _ret;
  for (var _index = 0; _index < value.length; _index++) {
    _ret = _loop(_index);
    if (_ret === 0) continue;
  }
  for (var _index2 = 0; _index2 < parsedValue.length; _index2++) {
    var component = parsedValue[_index2];
    var quotedComponents = [];
    var quotedComponentIndex = 0;
    for (var _index3 = 0; _index3 < component.length; _index3++) {
      if (component[_index3] === '"') {
        var _backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", component.slice(0, _index3));
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
          })) return 0; // continue
          var _backslashCount2 = _assertClassBrand(_Tokenizer_brand, _this, _backCount).call(_this, "\\", component.substring(_continueFrom, index2));
          if (_backslashCount2 % 2 !== 0) return 0; // continue
          holdParsedComponent.push(component.substring(_continueFrom, index2));
          _continueFrom = index2 + 1;
        }
        if (index2 === component.length - 1) holdParsedComponent.push(component.substring(_continueFrom));
      },
      _ret2;
    for (var index2 = 0; index2 < component.length; index2++) {
      _ret2 = _loop2(index2);
      if (_ret2 === 0) continue;
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
function _parametersSeparator(params) {
  var _this2 = this;
  var paramList = [];
  var quotedParams = [];
  var quotedParamIndex = 0;
  for (var index = 0; index < params.length; index++) {
    if (params[index] === '"') {
      var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", params.slice(0, index));
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
        })) return 0; // continue
        var _backslashCount4 = _assertClassBrand(_Tokenizer_brand, _this2, _backCount).call(_this2, "\\", params.substring(continueFrom, _index4));
        if (_backslashCount4 % 2 !== 0) return 0; // continue
        paramList.push(params.substring(continueFrom, _index4));
        continueFrom = _index4 + 1;
      }
      if (_index4 === params.length - 1) paramList.push(params.substring(continueFrom));
    },
    _ret3;
  for (var _index4 = 0; _index4 < params.length; _index4++) {
    _ret3 = _loop3(_index4);
    if (_ret3 === 0) continue;
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
          })) return 0; // continue
          var _backslashCount5 = _assertClassBrand(_Tokenizer_brand, _this2, _backCount).call(_this2, "\\", joinedParam.substring(continueFrom, _index7));
          if (_backslashCount5 % 2 !== 0) return 0; // continue
          holdJoinedParam.push(joinedParam.substring(continueFrom, _index7));
          continueFrom = _index7 + 1;
        }
        if (_index7 === joinedParam.length - 1) holdJoinedParam.push(joinedParam.substring(continueFrom));
      },
      _ret4;
    for (var _index7 = 0; _index7 < joinedParam.length; _index7++) {
      _ret4 = _loop5(_index7);
      if (_ret4 === 0) continue;
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
        var circumflexCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "^", currentParamValue.substring(_continueFrom2, index2));
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
    if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"') && !URL.canParse(holdCurrentParamValue.slice(1, -1))) holdCurrentParamValue = _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, holdCurrentParamValue.slice(1, -1));else if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"')) holdCurrentParamValue = holdCurrentParamValue.slice(1, -1);
    if (Array.isArray(holdCurrentParamValue)) holdCurrentParamValue = holdCurrentParamValue.map(function (val) {
      return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    });else holdCurrentParamValue = holdCurrentParamValue.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
    currentParam[currentParamKey] = holdCurrentParamValue;
  }
  return paramList.reduce(function (accumulatedParams, currentParam) {
    var key = Object.keys(currentParam)[0].toUpperCase();
    var value = Object.values(currentParam)[0];
    accumulatedParams[key] = value;
    return accumulatedParams;
  }, {});
}
function _contentLineTokenizer(contentLine) {
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
    value: _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, contentLine.slice(propEndPoint + 1))
  };
  var quotedParts = [];
  var quotedPartsIndex = 0;
  for (var index = 0; index < contentLine.length; index++) {
    if (contentLine[index] === '"') {
      var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", contentLine.slice(0, index));
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
          })) return 0; // continue
          else {
            firstColonIndex = _index9;
            return 1; // break
          }
        }
      },
      _ret5;
    for (var _index9 = firstColonIndex; _index9 < contentLine.length; _index9++) {
      _ret5 = _loop6(_index9);
      if (_ret5 === 0) continue;
      if (_ret5 === 1) break;
    }
  }
  return {
    group: group,
    property: property.toUpperCase(),
    parameters: _assertClassBrand(_Tokenizer_brand, this, _parametersSeparator).call(this, contentLine.slice(firstSemiColonIndex + 1, firstColonIndex)),
    value: _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, contentLine.slice(firstColonIndex + 1))
  };
}
function _initialValidation(vcard) {
  var _vcard$match;
  if (typeof vcard === "undefined") throw new MissingArgument("vCard to be tokenized must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be tokenized must be of type string");
  if (((_vcard$match = vcard.match(/\r\n/g)) !== null && _vcard$match !== void 0 ? _vcard$match : []).length < 4) throw new InvalidVcard("vCard content lines must be delimited by CRLF (\\r\\n) sequence");
}
_defineProperty(Tokenizer, "identifier", "Tokenizer");
Object.freeze(Tokenizer);

export { Tokenizer };
//# sourceMappingURL=Tokenizer.js.map
