import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _boolValue = /*#__PURE__*/new WeakMap();
var _BooleanType_brand = /*#__PURE__*/new WeakSet();
var BooleanType = /*#__PURE__*/function (_BaseValue) {
  function BooleanType(_boolValue2) {
    var _this;
    _classCallCheck(this, BooleanType);
    _this = _callSuper(this, BooleanType);
    _classPrivateMethodInitSpec(_this, _BooleanType_brand);
    _classPrivateFieldInitSpec(_this, _boolValue, void 0);
    _assertClassBrand(_BooleanType_brand, _this, _validate).call(_this, _boolValue2);
    _classPrivateFieldSet2(_boolValue, _this, _boolValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(BooleanType, _BaseValue);
  return _createClass(BooleanType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet2(_boolValue, this));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_boolValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_boolValue, this)];
    }
  }]);
}(BaseValue);
function _validate(boolValue) {
  if (typeof boolValue === "undefined") throw new MissingArgument("boolValue must be supplied");else if (typeof boolValue !== "boolean") throw new TypeError("Value for BooleanType should be of type boolean");
}
_defineProperty(BooleanType, "type", "BOOLEAN");
_defineProperty(BooleanType, "identifier", "BooleanType");
Object.freeze(BooleanType);

export { BooleanType };
//# sourceMappingURL=BooleanType.js.map
