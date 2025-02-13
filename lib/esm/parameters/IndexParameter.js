import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _indexValue = /*#__PURE__*/new WeakMap();
var _IndexParameter_brand = /*#__PURE__*/new WeakSet();
var IndexParameter = /*#__PURE__*/function (_BaseParameter) {
  function IndexParameter(_indexValue2) {
    var _this;
    _classCallCheck(this, IndexParameter);
    _this = _callSuper(this, IndexParameter);
    _classPrivateMethodInitSpec(_this, _IndexParameter_brand);
    _classPrivateFieldInitSpec(_this, _indexValue, void 0);
    _assertClassBrand(_IndexParameter_brand, _this, _validate).call(_this, _indexValue2);
    _classPrivateFieldSet2(_indexValue, _this, _indexValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(IndexParameter, _BaseParameter);
  return _createClass(IndexParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_indexValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_indexValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_indexValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(indexValue) {
  if (typeof indexValue === "undefined") throw new MissingArgument("Value for IndexParameter must be supplied");else if (indexValue.constructor.identifier !== "IntegerType" || !(Number(indexValue.repr()) > 0)) throw new InvalidArgument("Invalid value for IndexParameter. Must be a positive integer");
}
_defineProperty(IndexParameter, "param", "INDEX");
_defineProperty(IndexParameter, "identifier", "IndexParameter");
Object.freeze(IndexParameter);

export { IndexParameter };
//# sourceMappingURL=IndexParameter.js.map
