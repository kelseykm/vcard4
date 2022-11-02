import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _floatValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var FloatType = /*#__PURE__*/function (_BaseValue) {
  _inherits(FloatType, _BaseValue);

  var _super = _createSuper(FloatType);

  function FloatType(_floatValue2) {
    var _this;

    _classCallCheck(this, FloatType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _floatValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _floatValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _floatValue, _floatValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FloatType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _floatValue));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _floatValue), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _floatValue)];
    }
  }]);

  return FloatType;
}(BaseValue);

function _validate2(floatValue) {
  if (typeof floatValue === "undefined") throw new MissingArgument("Value for FloatType must be supplied");
  if (!(typeof floatValue === "number") && !/\./.test(floatValue) || !/^[-+]?\d+\.\d+$/.test(floatValue)) throw new TypeError("Invalid value for FloatType");
}

_defineProperty(FloatType, "type", "FLOAT");

_defineProperty(FloatType, "identifier", "FloatType");

Object.freeze(FloatType);

export { FloatType };
//# sourceMappingURL=FloatType.js.map
