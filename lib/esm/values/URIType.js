import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _uriValue = /*#__PURE__*/new WeakMap();
var _URIType_brand = /*#__PURE__*/new WeakSet();
var URIType = /*#__PURE__*/function (_BaseValue) {
  function URIType(_uriValue2) {
    var _this;
    _classCallCheck(this, URIType);
    _this = _callSuper(this, URIType);
    _classPrivateMethodInitSpec(_this, _URIType_brand);
    _classPrivateFieldInitSpec(_this, _uriValue, void 0);
    _assertClassBrand(_URIType_brand, _this, _validate).call(_this, _uriValue2);
    _classPrivateFieldSet2(_uriValue, _this, _uriValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(URIType, _BaseValue);
  return _createClass(URIType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_uriValue, this);
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_uriValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_uriValue, this)];
    }
  }]);
}(BaseValue);
function _validate(uriValue) {
  if (typeof uriValue === "undefined") throw new MissingArgument("Value for URIType must be supplied");else if (typeof uriValue !== "string") throw new TypeError("Value for URIType should be of type string");else if (!URL.canParse(uriValue)) throw new InvalidArgument("Invalid URI");
}
_defineProperty(URIType, "type", "URI");
_defineProperty(URIType, "identifier", "URIType");
Object.freeze(URIType);

export { URIType };
//# sourceMappingURL=URIType.js.map
