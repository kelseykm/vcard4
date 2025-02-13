import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _params = /*#__PURE__*/new WeakMap();
var _value = /*#__PURE__*/new WeakMap();
var _EmailProperty_brand = /*#__PURE__*/new WeakSet();
var EmailProperty = /*#__PURE__*/function (_BaseProperty) {
  function EmailProperty(_params2, val) {
    var _this;
    _classCallCheck(this, EmailProperty);
    _this = _callSuper(this, EmailProperty);
    _classPrivateMethodInitSpec(_this, _EmailProperty_brand);
    _classPrivateFieldInitSpec(_this, _params, void 0);
    _classPrivateFieldInitSpec(_this, _value, void 0);
    _assertClassBrand(_EmailProperty_brand, _this, _validate).call(_this, _params2, val);
    _classPrivateFieldSet2(_params, _this, _params2);
    _classPrivateFieldSet2(_value, _this, val);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(EmailProperty, _BaseProperty);
  return _createClass(EmailProperty, [{
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
  if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for EmailProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for EmailProperty must be passed in an array");
  var parameterInstanceCount = new Set();
  if (!params.every(function (param) {
    if (param.constructor.identifier !== "AnyParameter") {
      if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
    } else {
      if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
    }
    if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
    return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
  })) throw new TypeError("Some of the parameters passed are not valid parameters for EmailProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of EmailProperty");
}
_defineProperty(EmailProperty, "identifier", "EmailProperty");
_defineProperty(EmailProperty, "prop", "EMAIL");
_defineProperty(EmailProperty, "cardinality", "*");
_defineProperty(EmailProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AltidParameter", "AnyParameter"]));
_defineProperty(EmailProperty, "acceptableValTypes", "TextType");
Object.freeze(EmailProperty);

export { EmailProperty };
//# sourceMappingURL=EmailProperty.js.map
