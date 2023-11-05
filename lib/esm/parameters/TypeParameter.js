import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _typeValue = /*#__PURE__*/new WeakMap();
var _typeRegExp = /*#__PURE__*/new WeakMap();
var _telTypeRegExp = /*#__PURE__*/new WeakMap();
var _relatedTypeRegExp = /*#__PURE__*/new WeakMap();
var _validate = /*#__PURE__*/new WeakSet();
var TypeParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(TypeParameter, _BaseParameter);
  var _super = _createSuper(TypeParameter);
  function TypeParameter(_typeValue2, _targetProp) {
    var _this;
    _classCallCheck(this, TypeParameter);
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _typeValue, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _typeRegExp, {
      writable: true,
      value: /^(?:work|home|x-[a-z0-9-]+)$/i
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _telTypeRegExp, {
      writable: true,
      value: /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _relatedTypeRegExp, {
      writable: true,
      value: /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i
    });
    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _typeValue2, _targetProp);
    _classPrivateFieldSet(_assertThisInitialized(_this), _typeValue, _typeValue2);
    _this.targetProp = _targetProp.toUpperCase();
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(TypeParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _typeValue)) ? "\"".concat(_classPrivateFieldGet(this, _typeValue).map(function (val) {
        return val.repr();
      }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet(this, _typeValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _typeValue)) ? _classPrivateFieldGet(this, _typeValue).map(function (val) {
        return val.reprXML();
      }).join("") : _classPrivateFieldGet(this, _typeValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _typeValue)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet(this, _typeValue).map(function (val) {
        return val._unsafe_raw_value;
      }))) : _classPrivateFieldGet(this, _typeValue).reprJSON();
    }
  }]);
  return TypeParameter;
}(BaseParameter);
function _validate2(typeValue, targetProp) {
  var _this2 = this;
  if (typeof typeValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for TypeParameter must be supplied");else if (!(!Array.isArray(typeValue) && typeValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(typeValue) && typeValue.every(function (val) {
    return val.constructor.identifier === "ParameterValueType";
  }))) throw new TypeError("Value for TypeParameter must be of type ParameterValueType or an array of ParameterValueTypes");
  var telre = new RegExp("(?:".concat(_classPrivateFieldGet(this, _telTypeRegExp).source, "|").concat(_classPrivateFieldGet(this, _typeRegExp).source, ")"), "i");
  var relatedre = new RegExp("(?:".concat(_classPrivateFieldGet(this, _relatedTypeRegExp).source, "|").concat(_classPrivateFieldGet(this, _typeRegExp).source, ")"), "i");
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
      if (!(!Array.isArray(typeValue) && _classPrivateFieldGet(this, _typeRegExp).test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
        return _classPrivateFieldGet(_this2, _typeRegExp).test(type.repr());
      }))) throw new InvalidArgument("Invalid value for TypeParameter");
  }
}
_defineProperty(TypeParameter, "param", "TYPE");
_defineProperty(TypeParameter, "identifier", "TypeParameter");
Object.freeze(TypeParameter);

export { TypeParameter };
//# sourceMappingURL=TypeParameter.js.map
