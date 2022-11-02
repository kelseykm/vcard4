import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _intValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var IntegerType = /*#__PURE__*/function (_BaseValue) {
  _inherits(IntegerType, _BaseValue);

  var _super = _createSuper(IntegerType);

  function IntegerType(_intValue2) {
    var _this;

    _classCallCheck(this, IntegerType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _intValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _intValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _intValue, _intValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IntegerType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _intValue));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _intValue), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _intValue)];
    }
  }]);

  return IntegerType;
}(BaseValue);

function _validate2(intValue) {
  if (typeof intValue === "undefined") throw new MissingArgument("Value for IntegerType must be supplied");else if (typeof intValue !== "number" && typeof intValue !== "bigint") throw new TypeError("Value for IntegerType must be of type number or bigint");else if (/\./.test(intValue.toString())) throw new InvalidArgument("Invalid value for IntegerType");else if (typeof intValue === "number" && !(-Number.MAX_SAFE_INTEGER < intValue && intValue < Number.MAX_SAFE_INTEGER)) throw new InvalidArgument("The maximum value is ".concat(Number.MAX_SAFE_INTEGER, ", and the minimum value is ").concat(Number.MIN_SAFE_INTEGER, " for number IntegerType"));else if (typeof intValue === "bigint" && !(-9223372036854775809n < intValue && intValue < 9223372036854775808n)) throw new InvalidArgument("The maximum value is 9223372036854775807n, and the minimum value is -9223372036854775808n for bigint IntegerType");
}

_defineProperty(IntegerType, "type", "INTEGER");

_defineProperty(IntegerType, "identifier", "IntegerType");

Object.freeze(IntegerType);

export { IntegerType };
//# sourceMappingURL=IntegerType.js.map
