import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _prefValue = /*#__PURE__*/new WeakMap();
var _PrefParameter_brand = /*#__PURE__*/new WeakSet();
var PrefParameter = /*#__PURE__*/function (_BaseParameter) {
  function PrefParameter(_prefValue2) {
    var _this;
    _classCallCheck(this, PrefParameter);
    _this = _callSuper(this, PrefParameter);
    _classPrivateMethodInitSpec(_this, _PrefParameter_brand);
    _classPrivateFieldInitSpec(_this, _prefValue, void 0);
    _assertClassBrand(_PrefParameter_brand, _this, _validate).call(_this, _prefValue2);
    _classPrivateFieldSet2(_prefValue, _this, _prefValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(PrefParameter, _BaseParameter);
  return _createClass(PrefParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_prefValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_prefValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_prefValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(prefValue) {
  if (typeof prefValue === "undefined") throw new MissingArgument("Value for PrefParameter must be supplied");else if (prefValue.constructor.identifier !== "IntegerType") throw new TypeError("Value for PrefParameter should be of type IntegerType");else if (Number(prefValue.repr()) < 1 || Number(prefValue.repr()) > 100) throw new InvalidArgument("Value for PrefParameter must be between 1 and 100");
}
_defineProperty(PrefParameter, "param", "PREF");
_defineProperty(PrefParameter, "identifier", "PrefParameter");
Object.freeze(PrefParameter);

export { PrefParameter };
//# sourceMappingURL=PrefParameter.js.map
