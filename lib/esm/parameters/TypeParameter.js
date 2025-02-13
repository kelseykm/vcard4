import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, toConsumableArray as _toConsumableArray, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _typeValue = /*#__PURE__*/new WeakMap();
var _typeRegExp = /*#__PURE__*/new WeakMap();
var _telTypeRegExp = /*#__PURE__*/new WeakMap();
var _relatedTypeRegExp = /*#__PURE__*/new WeakMap();
var _TypeParameter_brand = /*#__PURE__*/new WeakSet();
var TypeParameter = /*#__PURE__*/function (_BaseParameter) {
  function TypeParameter(_targetProp, _typeValue2) {
    var _this;
    _classCallCheck(this, TypeParameter);
    _this = _callSuper(this, TypeParameter);
    _classPrivateMethodInitSpec(_this, _TypeParameter_brand);
    _classPrivateFieldInitSpec(_this, _typeValue, void 0);
    _classPrivateFieldInitSpec(_this, _typeRegExp, /^(?:work|home|x-[a-z0-9-]+)$/i);
    _classPrivateFieldInitSpec(_this, _telTypeRegExp, /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i);
    _classPrivateFieldInitSpec(_this, _relatedTypeRegExp, /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i);
    _assertClassBrand(_TypeParameter_brand, _this, _validate).call(_this, _targetProp, _typeValue2);
    _classPrivateFieldSet2(_typeValue, _this, _typeValue2);
    _this.targetProp = _targetProp.toUpperCase();
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(TypeParameter, _BaseParameter);
  return _createClass(TypeParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? "\"".concat(_classPrivateFieldGet2(_typeValue, this).map(function (val) {
        return val.repr();
      }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet2(_typeValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? _classPrivateFieldGet2(_typeValue, this).map(function (val) {
        return val.reprXML();
      }).join("") : _classPrivateFieldGet2(_typeValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet2(_typeValue, this).map(function (val) {
        return val._unsafe_raw_value;
      }))) : _classPrivateFieldGet2(_typeValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(targetProp, typeValue) {
  var _this2 = this;
  if (typeof typeValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for TypeParameter must be supplied");else if (!(!Array.isArray(typeValue) && typeValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(typeValue) && typeValue.every(function (val) {
    return val.constructor.identifier === "ParameterValueType";
  }))) throw new TypeError("Value for TypeParameter must be of type ParameterValueType or an array of ParameterValueTypes");
  var telre = new RegExp("(?:".concat(_classPrivateFieldGet2(_telTypeRegExp, this).source, "|").concat(_classPrivateFieldGet2(_typeRegExp, this).source, ")"), "i");
  var relatedre = new RegExp("(?:".concat(_classPrivateFieldGet2(_relatedTypeRegExp, this).source, "|").concat(_classPrivateFieldGet2(_typeRegExp, this).source, ")"), "i");
  switch (true) {
    case /^TelProperty$/i.test(targetProp):
      if (!(!Array.isArray(typeValue) && telre.test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
        return telre.test(type.repr());
      }))) throw new InvalidArgument("Invalid value for TypeParameter for TelProperty");
      break;
    case /^RelatedProperty$/i.test(targetProp):
      if (!(!Array.isArray(typeValue) && relatedre.test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
        return relatedre.test(type.repr());
      }))) throw new InvalidArgument("Invalid value for TypeParameter for RelatedProperty");
      break;
    default:
      if (!(!Array.isArray(typeValue) && _classPrivateFieldGet2(_typeRegExp, this).test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
        return _classPrivateFieldGet2(_typeRegExp, _this2).test(type.repr());
      }))) throw new InvalidArgument("Invalid value for TypeParameter");
  }
}
_defineProperty(TypeParameter, "param", "TYPE");
_defineProperty(TypeParameter, "identifier", "TypeParameter");
Object.freeze(TypeParameter);

export { TypeParameter };
//# sourceMappingURL=TypeParameter.js.map
