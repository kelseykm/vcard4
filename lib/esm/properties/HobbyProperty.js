import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _params = /*#__PURE__*/new WeakMap();

var _value = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var HobbyProperty = /*#__PURE__*/function (_BaseProperty) {
  _inherits(HobbyProperty, _BaseProperty);

  var _super = _createSuper(HobbyProperty);

  function HobbyProperty(_params2, val) {
    var _this;

    _classCallCheck(this, HobbyProperty);

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

  _createClass(HobbyProperty, [{
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

  return HobbyProperty;
}(BaseProperty);

function _validate2(params, value) {
  var _this2 = this;

  if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for HobbyProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for HobbyProperty must be passed in an array");
  var parameterInstanceCount = new Set();
  if (!params.every(function (param) {
    if (param.constructor.identifier !== "AnyParameter") {
      if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
    } else {
      if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
    }

    if (param.constructor.identifier === "LevelParameter") return /^HobbyProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);
    return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
  })) throw new TypeError("Some of the parameters passed are not valid parameters for HobbyProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of HobbyProperty");
}

_defineProperty(HobbyProperty, "identifier", "HobbyProperty");

_defineProperty(HobbyProperty, "prop", "HOBBY");

_defineProperty(HobbyProperty, "cardinality", "*");

_defineProperty(HobbyProperty, "acceptableParamTypes", new Set(["LevelParameter", "IndexParameter", "LanguageParameter", "PrefParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

_defineProperty(HobbyProperty, "acceptableValTypes", "TextType");

Object.freeze(HobbyProperty);

export { HobbyProperty };
//# sourceMappingURL=HobbyProperty.js.map
