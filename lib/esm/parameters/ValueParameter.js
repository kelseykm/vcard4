import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _valueType = /*#__PURE__*/new WeakMap();
var _ValueParameter_brand = /*#__PURE__*/new WeakSet();
var ValueParameter = /*#__PURE__*/function (_BaseParameter) {
  function ValueParameter(_valueType2) {
    var _this;
    _classCallCheck(this, ValueParameter);
    _this = _callSuper(this, ValueParameter);
    _classPrivateMethodInitSpec(_this, _ValueParameter_brand);
    _classPrivateFieldInitSpec(_this, _valueType, void 0);
    _assertClassBrand(_ValueParameter_brand, _this, _validate).call(_this, _valueType2);
    _classPrivateFieldSet2(_valueType, _this, _valueType2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(ValueParameter, _BaseParameter);
  return _createClass(ValueParameter, [{
    key: "value",
    get: function get() {
      var type = _classPrivateFieldGet2(_valueType, this).type || _classPrivateFieldGet2(_valueType, this).constructor.type;
      return type.toLowerCase();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "";
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [];
    }
  }]);
}(BaseParameter);
function _validate(valueType) {
  if (typeof valueType === "undefined") throw new MissingArgument("Value for ValueParameter must be supplied");
  if (!Object.prototype.hasOwnProperty.call(valueType, "type") && !Object.prototype.hasOwnProperty.call(valueType.constructor, "type")) throw new InvalidArgument("Value for ValueParameter not recognized");
}
_defineProperty(ValueParameter, "param", "VALUE");
_defineProperty(ValueParameter, "identifier", "ValueParameter");
Object.freeze(ValueParameter);

export { ValueParameter };
//# sourceMappingURL=ValueParameter.js.map
