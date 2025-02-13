import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, toConsumableArray as _toConsumableArray, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _sortValue = /*#__PURE__*/new WeakMap();
var _SortAsParameter_brand = /*#__PURE__*/new WeakSet();
var SortAsParameter = /*#__PURE__*/function (_BaseParameter) {
  function SortAsParameter(_sortValue2) {
    var _this;
    _classCallCheck(this, SortAsParameter);
    _this = _callSuper(this, SortAsParameter);
    _classPrivateMethodInitSpec(_this, _SortAsParameter_brand);
    _classPrivateFieldInitSpec(_this, _sortValue, void 0);
    _assertClassBrand(_SortAsParameter_brand, _this, _validate).call(_this, _sortValue2);
    _classPrivateFieldSet2(_sortValue, _this, _sortValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(SortAsParameter, _BaseParameter);
  return _createClass(SortAsParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? "\"".concat(_classPrivateFieldGet2(_sortValue, this).map(function (val) {
        return val.repr();
      }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet2(_sortValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? _classPrivateFieldGet2(_sortValue, this).map(function (val) {
        return val.reprXML();
      }).join("") : _classPrivateFieldGet2(_sortValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet2(_sortValue, this).map(function (val) {
        return val._unsafe_raw_value;
      }))) : _classPrivateFieldGet2(_sortValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(sortValue) {
  if (typeof sortValue === "undefined") throw new MissingArgument("Value for SortAsParameter must be supplied");else if (!(!Array.isArray(sortValue) && sortValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(sortValue) && sortValue.every(function (val) {
    return val.constructor.identifier === "ParameterValueType";
  }))) throw new TypeError("Value for SortAsParameter must be of type ParameterValueType or an array of ParameterValueTypes");
}
_defineProperty(SortAsParameter, "param", "SORT-AS");
_defineProperty(SortAsParameter, "identifier", "SortAsParameter");
Object.freeze(SortAsParameter);

export { SortAsParameter };
//# sourceMappingURL=SortAsParameter.js.map
