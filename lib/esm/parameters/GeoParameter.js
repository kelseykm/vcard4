import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _geoValue = /*#__PURE__*/new WeakMap();
var _GeoParameter_brand = /*#__PURE__*/new WeakSet();
var GeoParameter = /*#__PURE__*/function (_BaseParameter) {
  function GeoParameter(_geoValue2) {
    var _this;
    _classCallCheck(this, GeoParameter);
    _this = _callSuper(this, GeoParameter);
    _classPrivateMethodInitSpec(_this, _GeoParameter_brand);
    _classPrivateFieldInitSpec(_this, _geoValue, void 0);
    _assertClassBrand(_GeoParameter_brand, _this, _validate).call(_this, _geoValue2);
    _classPrivateFieldSet2(_geoValue, _this, _geoValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(GeoParameter, _BaseParameter);
  return _createClass(GeoParameter, [{
    key: "value",
    get: function get() {
      return "\"".concat(_classPrivateFieldGet2(_geoValue, this).repr(), "\"");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_geoValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_geoValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(geoValue) {
  if (typeof geoValue === "undefined") throw new MissingArgument("Value for GeoParameter must be supplied");else if (geoValue.constructor.identifier !== "URIType") throw new TypeError("Value for GeoParameter must be of type URIType");
}
_defineProperty(GeoParameter, "param", "GEO");
_defineProperty(GeoParameter, "identifier", "GeoParameter");
Object.freeze(GeoParameter);

export { GeoParameter };
//# sourceMappingURL=GeoParameter.js.map
