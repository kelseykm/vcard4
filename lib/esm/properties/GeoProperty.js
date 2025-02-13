import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _params = /*#__PURE__*/new WeakMap();
var _value = /*#__PURE__*/new WeakMap();
var _GeoProperty_brand = /*#__PURE__*/new WeakSet();
var GeoProperty = /*#__PURE__*/function (_BaseProperty) {
  function GeoProperty(_params2, val) {
    var _this;
    _classCallCheck(this, GeoProperty);
    _this = _callSuper(this, GeoProperty);
    _classPrivateMethodInitSpec(_this, _GeoProperty_brand);
    _classPrivateFieldInitSpec(_this, _params, void 0);
    _classPrivateFieldInitSpec(_this, _value, void 0);
    _assertClassBrand(_GeoProperty_brand, _this, _validate).call(_this, _params2, val);
    _classPrivateFieldSet2(_params, _this, _params2);
    _classPrivateFieldSet2(_value, _this, val);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(GeoProperty, _BaseProperty);
  return _createClass(GeoProperty, [{
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
function _validate(params, value) {
  var _this2 = this;
  if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for GeoProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for GeoProperty must be passed in an array");
  var parameterInstanceCount = new Set();
  if (!params.every(function (param) {
    if (param.constructor.identifier !== "AnyParameter") {
      if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
    } else {
      if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
    }
    if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
    return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
  })) throw new TypeError("Some of the parameters passed are not valid parameters for GeoProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of GeoProperty");
}
_defineProperty(GeoProperty, "identifier", "GeoProperty");
_defineProperty(GeoProperty, "prop", "GEO");
_defineProperty(GeoProperty, "cardinality", "*");
_defineProperty(GeoProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));
_defineProperty(GeoProperty, "acceptableValTypes", "URIType");
Object.freeze(GeoProperty);

export { GeoProperty };
//# sourceMappingURL=GeoProperty.js.map
