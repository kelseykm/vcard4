import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _ccValue = /*#__PURE__*/new WeakMap();
var _CCParameter_brand = /*#__PURE__*/new WeakSet();
var CCParameter = /*#__PURE__*/function (_BaseParameter) {
  function CCParameter(_ccValue2) {
    var _this;
    _classCallCheck(this, CCParameter);
    _this = _callSuper(this, CCParameter);
    _classPrivateMethodInitSpec(_this, _CCParameter_brand);
    _classPrivateFieldInitSpec(_this, _ccValue, void 0);
    _assertClassBrand(_CCParameter_brand, _this, _validate).call(_this, _ccValue2);
    _classPrivateFieldSet2(_ccValue, _this, _ccValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(CCParameter, _BaseParameter);
  return _createClass(CCParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_ccValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_ccValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_ccValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(ccValue) {
  if (typeof ccValue === "undefined") throw new MissingArgument("Value for CCParameter must be supplied");else if (ccValue.constructor.identifier !== "ParameterValueType" || !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())) throw new InvalidArgument("Invalid value for CCParameter");
}
_defineProperty(CCParameter, "param", "CC");
_defineProperty(CCParameter, "identifier", "CCParameter");
Object.freeze(CCParameter);

export { CCParameter };
//# sourceMappingURL=CCParameter.js.map
