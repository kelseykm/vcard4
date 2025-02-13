import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, toConsumableArray as _toConsumableArray, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _pidValue = /*#__PURE__*/new WeakMap();
var _pidRegExp = /*#__PURE__*/new WeakMap();
var _PIDParameter_brand = /*#__PURE__*/new WeakSet();
var PIDParameter = /*#__PURE__*/function (_BaseParameter) {
  function PIDParameter(_pidValue2) {
    var _this;
    _classCallCheck(this, PIDParameter);
    _this = _callSuper(this, PIDParameter);
    _classPrivateMethodInitSpec(_this, _PIDParameter_brand);
    _classPrivateFieldInitSpec(_this, _pidValue, void 0);
    _classPrivateFieldInitSpec(_this, _pidRegExp, /^\d+(?:\.\d+)?$/);
    _assertClassBrand(_PIDParameter_brand, _this, _validate).call(_this, _pidValue2);
    _classPrivateFieldSet2(_pidValue, _this, _pidValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(PIDParameter, _BaseParameter);
  return _createClass(PIDParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? _classPrivateFieldGet2(_pidValue, this).map(function (val) {
        if (Array.isArray(val)) return val.map(function (innerVal) {
          return innerVal.repr();
        }).join(".");
        return val.repr();
      }).join(",") : _classPrivateFieldGet2(_pidValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      var xml = Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? _classPrivateFieldGet2(_pidValue, this).map(function (val) {
        if (Array.isArray(val)) return "<integer>" + val.map(function (innerVal) {
          return innerVal.repr();
        }).join(".") + "</integer>";
        return val.reprXML();
      }).join("") : _classPrivateFieldGet2(_pidValue, this).reprXML();
      return xml.replaceAll("integer", "text");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? ["integer"].concat(_toConsumableArray(_classPrivateFieldGet2(_pidValue, this).map(function (val) {
        if (Array.isArray(val)) return Number(val.map(function (innerVal) {
          return innerVal.repr();
        }).join("."));
        return val.reprJSON().pop();
      }))) : _classPrivateFieldGet2(_pidValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(pidValue) {
  if (typeof pidValue === "undefined") throw new MissingArgument("Value for PIDParameter must be supplied");else if (!Array.isArray(pidValue) && pidValue.constructor.identifier !== "IntegerType") throw new InvalidArgument("Invalid value for PIDParameter");else if (Array.isArray(pidValue) && !pidValue.every(function (val1) {
    if (Array.isArray(val1)) return val1.length === 2 && val1.every(function (val2) {
      return val2.constructor.identifier === "IntegerType";
    });
    return val1.constructor.identifier === "IntegerType";
  })) throw new InvalidArgument("Invalid value for PIDParameter");
}
_defineProperty(PIDParameter, "param", "PID");
_defineProperty(PIDParameter, "identifier", "PIDParameter");
Object.freeze(PIDParameter);

export { PIDParameter };
//# sourceMappingURL=PIDParameter.js.map
