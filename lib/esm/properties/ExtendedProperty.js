import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _propRegExp = /*#__PURE__*/new WeakMap();
var _params = /*#__PURE__*/new WeakMap();
var _value = /*#__PURE__*/new WeakMap();
var _ExtendedProperty_brand = /*#__PURE__*/new WeakSet();
var ExtendedProperty = /*#__PURE__*/function (_BaseProperty) {
  function ExtendedProperty(_prop, _params2, _value2) {
    var _this;
    _classCallCheck(this, ExtendedProperty);
    _this = _callSuper(this, ExtendedProperty);
    _classPrivateMethodInitSpec(_this, _ExtendedProperty_brand);
    _classPrivateFieldInitSpec(_this, _propRegExp, /^x-[a-z0-9-]+$/i);
    _classPrivateFieldInitSpec(_this, _params, void 0);
    _classPrivateFieldInitSpec(_this, _value, void 0);
    _assertClassBrand(_ExtendedProperty_brand, _this, _validate).call(_this, _prop, _params2, _value2);
    _this.prop = _prop.toString().toUpperCase();
    _classPrivateFieldSet2(_params, _this, _params2);
    _classPrivateFieldSet2(_value, _this, _value2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(ExtendedProperty, _BaseProperty);
  return _createClass(ExtendedProperty, [{
    key: "params",
    get: function get() {
      return _classPrivateFieldGet2(_params, this).reduce(function (parametersArray, currentParameter) {
        parametersArray.push(currentParameter.repr());
        return parametersArray;
      }, []).join(";");
    }
  }, {
    key: "paramsXML",
    get: function get() {
      return _classPrivateFieldGet2(_params, this).reduce(function (accumulatedParameters, currentParameter) {
        return accumulatedParameters + currentParameter.reprXML();
      }, "");
    }
  }, {
    key: "paramsJSON",
    get: function get() {
      return _classPrivateFieldGet2(_params, this).reduce(function (accumulatedParameters, currentParameter) {
        return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
      }, {});
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).reprJSON();
    }
  }]);
}(BaseProperty);
function _validate(prop, params, value) {
  var _this2 = this;
  if (typeof prop === "undefined" || typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Property, parameter and value for ExtendedProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ExtendedProperty must be passed in an array");else if (!_classPrivateFieldGet2(_propRegExp, this).test(prop)) throw new InvalidArgument("Invalid property for ExtendedProperty");
  var parameterInstanceCount = new Set();
  if (!params.every(function (param) {
    if (param.constructor.identifier !== "AnyParameter") {
      if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
    } else {
      if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
    }
    if (param.constructor.identifier === "ValueParameter") return param.value === value.repr().toLowerCase();
    return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
  })) throw new TypeError("Some of the parameters passed are not valid parameters for ExtendedProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of ExtendedProperty");
}
_defineProperty(ExtendedProperty, "identifier", "ExtendedProperty");
_defineProperty(ExtendedProperty, "cardinality", "*");
_defineProperty(ExtendedProperty, "acceptableParamTypes", new Set(["LanguageParameter", "ValueParameter", "PrefParameter", "AltidParameter", "PIDParameter", "TypeParameter", "MediatypeParameter", "CalscaleParameter", "SortAsParameter", "GeoParameter", "TzParameter", "AnyParameter", "LabelParameter", "CCParameter", "IndexParameter", "LevelParameter"]));
_defineProperty(ExtendedProperty, "acceptableValTypes", new Set(["TextType", "TextListType", "BooleanType", "DateTimeType", "DateTimeListType", "IntegerType", "IntegerListType", "FloatType", "FloatListType", "LanguageTagType", "URIType", "SexType", "SpecialValueType"]));
Object.freeze(ExtendedProperty);

export { ExtendedProperty };
//# sourceMappingURL=ExtendedProperty.js.map
