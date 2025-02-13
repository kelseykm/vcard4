import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _altidValue = /*#__PURE__*/new WeakMap();
var _AltidParameter_brand = /*#__PURE__*/new WeakSet();
var AltidParameter = /*#__PURE__*/function (_BaseParameter) {
  function AltidParameter(_altidValue2) {
    var _this;
    _classCallCheck(this, AltidParameter);
    _this = _callSuper(this, AltidParameter);
    _classPrivateMethodInitSpec(_this, _AltidParameter_brand);
    _classPrivateFieldInitSpec(_this, _altidValue, void 0);
    _assertClassBrand(_AltidParameter_brand, _this, _validate).call(_this, _altidValue2);
    _classPrivateFieldSet2(_altidValue, _this, _altidValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(AltidParameter, _BaseParameter);
  return _createClass(AltidParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_altidValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_altidValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_altidValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(altidValue) {
  if (typeof altidValue === "undefined") throw new MissingArgument("Value for AltidParameter must be supplied");else if (altidValue.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Value for AltidParameter must be of type ParameterValueType");
}
_defineProperty(AltidParameter, "param", "ALTID");
_defineProperty(AltidParameter, "identifier", "AltidParameter");
Object.freeze(AltidParameter);

export { AltidParameter };
//# sourceMappingURL=AltidParameter.js.map
