import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _boolValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var BooleanType = /*#__PURE__*/function (_BaseValue) {
  _inherits(BooleanType, _BaseValue);

  var _super = _createSuper(BooleanType);

  function BooleanType(_boolValue2) {
    var _this;

    _classCallCheck(this, BooleanType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _boolValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _boolValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _boolValue, _boolValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BooleanType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _boolValue));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _boolValue), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _boolValue)];
    }
  }]);

  return BooleanType;
}(BaseValue);

function _validate2(boolValue) {
  if (typeof boolValue === "undefined") throw new MissingArgument("boolValue must be supplied");else if (typeof boolValue !== "boolean") throw new TypeError("Value for BooleanType should be of type boolean");
}

_defineProperty(BooleanType, "type", "BOOLEAN");

_defineProperty(BooleanType, "identifier", "BooleanType");

Object.freeze(BooleanType);

export { BooleanType };
//# sourceMappingURL=BooleanType.js.map
