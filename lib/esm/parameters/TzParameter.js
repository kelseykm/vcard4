import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _tzValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var TzParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(TzParameter, _BaseParameter);

  var _super = _createSuper(TzParameter);

  function TzParameter(_tzValue2) {
    var _this;

    _classCallCheck(this, TzParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _tzValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _tzValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _tzValue, _tzValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TzParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _tzValue).constructor.identifier === "URIType" ? "\"".concat(_classPrivateFieldGet(this, _tzValue).repr(), "\"") : _classPrivateFieldGet(this, _tzValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _tzValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _tzValue).reprJSON();
    }
  }]);

  return TzParameter;
}(BaseParameter);

function _validate2(tzValue) {
  if (typeof tzValue === "undefined") throw new MissingArgument("Value for TzParameter must be supplied");
  if (tzValue.constructor.identifier !== "TextType" && tzValue.constructor.identifier !== "URIType" && !(tzValue.constructor.identifier === "DateTimeType" && tzValue.type === "UTC-OFFSET")) throw new TypeError("Invalid type for value for TzParameter");
}

_defineProperty(TzParameter, "param", "TZ");

_defineProperty(TzParameter, "identifier", "TzParameter");

Object.freeze(TzParameter);

export { TzParameter };
//# sourceMappingURL=TzParameter.js.map
