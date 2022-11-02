import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseProperty } from './BaseProperty.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _propRegExp = /*#__PURE__*/new WeakMap();

var _params = /*#__PURE__*/new WeakMap();

var _value = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var ExtendedProperty = /*#__PURE__*/function (_BaseProperty) {
  _inherits(ExtendedProperty, _BaseProperty);

  var _super = _createSuper(ExtendedProperty);

  function ExtendedProperty(_prop, _params2, _value2) {
    var _this;

    _classCallCheck(this, ExtendedProperty);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propRegExp, {
      writable: true,
      value: /^[Xx]-[A-Za-z0-9]+$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _prop, _params2, _value2);

    _this.prop = _prop.toString().toUpperCase();

    _classPrivateFieldSet(_assertThisInitialized(_this), _params, _params2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _value, _value2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ExtendedProperty, [{
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

  return ExtendedProperty;
}(BaseProperty);

function _validate2(prop, params, value) {
  var _this2 = this;

  if (typeof prop === "undefined" || typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Property, parameter and value for ExtendedProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ExtendedProperty must be passed in an array");else if (!_classPrivateFieldGet(this, _propRegExp).test(prop)) throw new InvalidArgument("Invalid property for ExtendedProperty");
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
