import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _value = /*#__PURE__*/new WeakMap();

var _param = /*#__PURE__*/new WeakMap();

var _paramRegExp = /*#__PURE__*/new WeakMap();

var _valueRegExp = /*#__PURE__*/new WeakMap();

var _cleanUp = /*#__PURE__*/new WeakSet();

var _validate = /*#__PURE__*/new WeakSet();

var AnyParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(AnyParameter, _BaseParameter);

  var _super = _createSuper(AnyParameter);

  function AnyParameter(_param2, _value2) {
    var _this;

    _classCallCheck(this, AnyParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _param, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _paramRegExp, {
      writable: true,
      value: /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _valueRegExp, {
      writable: true,
      value: /^(?:Boolean|DateTime(?:List)?|Float(?:List)?|Integer(?:List)?|LanguageTag|Sex|SpecialValue|Text(?:List)?|URI)Type$/
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _param2, _value2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _param, _param2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _value, _value2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AnyParameter, [{
    key: "param",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _param));
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateMethodGet(this, _cleanUp, _cleanUp2).call(this, _classPrivateFieldGet(this, _value).repr());
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprJSON();
    }
  }]);

  return AnyParameter;
}(BaseParameter);

function _cleanUp2(value) {
  return value.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
}

function _validate2(param, value) {
  var _value$constructor;

  if (typeof param === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameter name and value for AnyParameter must be supplied");else if (!_classPrivateFieldGet(this, _paramRegExp).test(param)) throw new InvalidArgument("Invalid parameter name for AnyParameter");else if (!_classPrivateFieldGet(this, _valueRegExp).test(value === null || value === void 0 ? void 0 : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.identifier)) throw new InvalidArgument("Invalid value for AnyParameter");
}

_defineProperty(AnyParameter, "identifier", "AnyParameter");

Object.freeze(AnyParameter);

export { AnyParameter };
//# sourceMappingURL=AnyParameter.js.map
