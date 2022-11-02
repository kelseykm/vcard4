import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _geoValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var GeoParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(GeoParameter, _BaseParameter);

  var _super = _createSuper(GeoParameter);

  function GeoParameter(_geoValue2) {
    var _this;

    _classCallCheck(this, GeoParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _geoValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _geoValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _geoValue, _geoValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GeoParameter, [{
    key: "value",
    get: function get() {
      return "\"".concat(_classPrivateFieldGet(this, _geoValue).repr(), "\"");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _geoValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _geoValue).reprJSON();
    }
  }]);

  return GeoParameter;
}(BaseParameter);

function _validate2(geoValue) {
  if (typeof geoValue === "undefined") throw new MissingArgument("Value for GeoParameter must be supplied");else if (geoValue.constructor.identifier !== "URIType") throw new TypeError("Value for GeoParameter must be of type URIType");
}

_defineProperty(GeoParameter, "param", "GEO");

_defineProperty(GeoParameter, "identifier", "GeoParameter");

Object.freeze(GeoParameter);

export { GeoParameter };
//# sourceMappingURL=GeoParameter.js.map
