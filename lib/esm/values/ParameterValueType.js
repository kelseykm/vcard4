import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _parameterValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var _cleanUp = /*#__PURE__*/new WeakSet();

var _cleanUpXML = /*#__PURE__*/new WeakSet();

var ParameterValueType = /*#__PURE__*/function (_BaseValue) {
  _inherits(ParameterValueType, _BaseValue);

  var _super = _createSuper(ParameterValueType);

  function ParameterValueType(_parameterValue2) {
    var _this;

    _classCallCheck(this, ParameterValueType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUpXML);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _parameterValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _parameterValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _parameterValue, _parameterValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ParameterValueType, [{
    key: "value",
    get: function get() {
      var cleanVal = _classPrivateMethodGet(this, _cleanUp, _cleanUp2).call(this, _classPrivateFieldGet(this, _parameterValue));

      return /[:;]/.test(cleanVal) ? "\"".concat(cleanVal, "\"") : cleanVal;
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateMethodGet(this, _cleanUpXML, _cleanUpXML2).call(this, _classPrivateFieldGet(this, _parameterValue)), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _parameterValue)];
    }
  }, {
    key: "_unsafe_raw_value",
    get: function get() {
      return _classPrivateFieldGet(this, _parameterValue);
    }
  }]);

  return ParameterValueType;
}(BaseValue);

function _validate2(parameterValue) {
  if (typeof parameterValue === "undefined" || parameterValue === "") throw new MissingArgument("Value for ParameterValueType must be supplied");else if (typeof parameterValue !== "string") throw new TypeError("Only type string allowed for ParameterValueType value");else if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(parameterValue)) {
    throw new InvalidArgument("Value includes forbidden characters");
  }
}

function _cleanUp2(parameterValue) {
  return parameterValue.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
}

function _cleanUpXML2(parameterValue) {
  return parameterValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

_defineProperty(ParameterValueType, "type", "TEXT");

_defineProperty(ParameterValueType, "identifier", "ParameterValueType");

Object.freeze(ParameterValueType);

export { ParameterValueType };
//# sourceMappingURL=ParameterValueType.js.map
