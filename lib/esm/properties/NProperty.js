import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _params = /*#__PURE__*/new WeakMap();

var _value = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var NProperty = /*#__PURE__*/function (_BaseProperty) {
  _inherits(NProperty, _BaseProperty);

  var _super = _createSuper(NProperty);

  function NProperty(_params2, val) {
    var _this;

    _classCallCheck(this, NProperty);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _params2, val);

    _classPrivateFieldSet(_assertThisInitialized(_this), _params, _params2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _value, val);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NProperty, [{
    key: "params",
    get: function get() {
      return _classPrivateFieldGet(this, _params).reduce(function (parametersArray, currentParameter) {
        parametersArray.push(currentParameter.repr());
        return parametersArray;
      }, []).join(";");
    }
  }, {
    key: "paramsXML",
    get: function get() {
      return _classPrivateFieldGet(this, _params).reduce(function (accumulatedParameters, currentParameter) {
        return accumulatedParameters + currentParameter.reprXML();
      }, "");
    }
  }, {
    key: "paramsJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _params).reduce(function (accumulatedParameters, currentParameter) {
        return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
      }, {});
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _value).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprJSON();
    }
  }]);

  return NProperty;
}(BaseProperty);

function _validate2(params, value) {
  var _this2 = this;

  if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for NProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for NProperty must be passed in an array");
  var parameterInstanceCount = new Set();
  if (!params.every(function (param) {
    if (param.constructor.identifier !== "AnyParameter") {
      if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
    } else {
      if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
    }

    if (param.constructor.identifier === "ValueParameter") return param.value === "text";
    return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
  })) throw new TypeError("Some of the parameters passed are not valid parameters for NProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || !/^NProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of NProperty");
}

_defineProperty(NProperty, "identifier", "NProperty");

_defineProperty(NProperty, "prop", "N");

_defineProperty(NProperty, "cardinality", "*1");

_defineProperty(NProperty, "acceptableParamTypes", new Set(["ValueParameter", "SortAsParameter", "LanguageParameter", "AltidParameter", "AnyParameter"]));

_defineProperty(NProperty, "acceptableValTypes", "SpecialValueType");

Object.freeze(NProperty);

export { NProperty };
//# sourceMappingURL=NProperty.js.map
