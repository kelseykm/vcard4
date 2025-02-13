import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _labelValue = /*#__PURE__*/new WeakMap();
var _LabelParameter_brand = /*#__PURE__*/new WeakSet();
var LabelParameter = /*#__PURE__*/function (_BaseParameter) {
  function LabelParameter(_labelValue2) {
    var _this;
    _classCallCheck(this, LabelParameter);
    _this = _callSuper(this, LabelParameter);
    _classPrivateMethodInitSpec(_this, _LabelParameter_brand);
    _classPrivateFieldInitSpec(_this, _labelValue, void 0);
    _assertClassBrand(_LabelParameter_brand, _this, _validate).call(_this, _labelValue2);
    _classPrivateFieldSet2(_labelValue, _this, _labelValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(LabelParameter, _BaseParameter);
  return _createClass(LabelParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_labelValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_labelValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_labelValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(labelValue) {
  if (typeof labelValue === "undefined") throw new MissingArgument("Value for LabelParameter must be supplied");else if (labelValue.constructor.identifier !== "ParameterValueType") throw new TypeError("Value for LabelParameter should be of type ParameterValueType");
}
_defineProperty(LabelParameter, "param", "LABEL");
_defineProperty(LabelParameter, "identifier", "LabelParameter");
Object.freeze(LabelParameter);

export { LabelParameter };
//# sourceMappingURL=LabelParameter.js.map
