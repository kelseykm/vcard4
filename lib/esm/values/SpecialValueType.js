import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateMethodGet as _classPrivateMethodGet, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _validateAndSet = /*#__PURE__*/new WeakSet();

var SpecialValueType = /*#__PURE__*/function (_BaseValue) {
  _inherits(SpecialValueType, _BaseValue);

  var _super = _createSuper(SpecialValueType);

  function SpecialValueType(_value, _targetProp) {
    var _this;

    _classCallCheck(this, SpecialValueType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validateAndSet);

    _classPrivateMethodGet(_assertThisInitialized(_this), _validateAndSet, _validateAndSet2).call(_assertThisInitialized(_this), _value, _targetProp);

    _this.targetProp = _targetProp.toUpperCase();

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  return _createClass(SpecialValueType);
}(BaseValue);

function _validateAndSet2(value, targetProp) {
  var _value$, _value$$constructor, _value$2, _value$2$constructor;

  if (typeof value === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for SpecialValueType must be supplied");
  var valueRegExp = /^(?:individual|group|org|location|application|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;
  var valueCopy;

  var _tempValue;

  switch (true) {
    case /^KindProperty$/i.test(targetProp):
      if (typeof value !== "string" || !valueRegExp.test(value)) throw new InvalidArgument("Invalid value for SpecialValueType for KindProperty");
      this.value = value;
      this.valueXML = "<text>".concat(value, "</text>");
      this.valueJSON = [this.constructor.type.toLowerCase(), value];
      break;

    case /^NProperty$/i.test(targetProp):
      if (!Array.isArray(value) || value.length !== 5) throw new InvalidArgument("Invalid value for SpecialValueType for NProperty. It should be an array with a length of 5");

      for (var index = 0; index < value.length; index++) {
        if (value[index]) if (value[index].constructor.identifier !== "TextType" && value[index].constructor.identifier !== "TextListType") throw new TypeError("Invalid value for SpecialValueType for NProperty. The items in the array, if present, should be of type TextType or TextListType");
      }

      valueCopy = _toConsumableArray(value);

      for (var _index = 0; _index < valueCopy.length; _index++) {
        if (valueCopy[_index]) valueCopy[_index] = valueCopy[_index].repr();
      }

      this.value = valueCopy.join(";");
      this.valueXML = "";
      this.valueJSON = [];

      for (var _index2 = 0; _index2 < value.length; _index2++) {
        switch (_index2) {
          case 0:
            if (!value[_index2]) {
              this.valueXML += "<surname/>";
              this.valueJSON[_index2] = "";
            } else {
              this.valueXML += value[_index2].reprXML().replaceAll("text>", "surname>");
              _tempValue = value[_index2].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index2] = _tempValue;
              }
            }

            break;

          case 1:
            if (!value[_index2]) {
              this.valueXML += "<given/>";
              this.valueJSON[_index2] = "";
            } else {
              this.valueXML += value[_index2].reprXML().replaceAll("text>", "given>");
              _tempValue = value[_index2].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index2] = _tempValue;
              }
            }

            break;

          case 2:
            if (!value[_index2]) {
              this.valueXML += "<additional/>";
              this.valueJSON[_index2] = "";
            } else {
              this.valueXML += value[_index2].reprXML().replaceAll("text>", "additional>");
              _tempValue = value[_index2].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index2] = _tempValue;
              }
            }

            break;

          case 3:
            if (!value[_index2]) {
              this.valueXML += "<prefix/>";
              this.valueJSON[_index2] = "";
            } else {
              this.valueXML += value[_index2].reprXML().replaceAll("text>", "prefix>");
              _tempValue = value[_index2].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index2] = _tempValue;
              }
            }

            break;

          case 4:
            if (!value[_index2]) {
              this.valueXML += "<suffix/>";
              this.valueJSON[_index2] = "";
            } else {
              this.valueXML += value[_index2].reprXML().replaceAll("text>", "suffix>");
              _tempValue = value[_index2].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index2] = _tempValue;
              }
            }

        }
      }

      this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
      break;

    case /^GenderProperty$/i.test(targetProp):
      if (!Array.isArray(value) || value.length !== 2) throw new InvalidArgument("Invalid value for SpecialValueType for GenderProperty. It should be an array with a length of 2");else if (value[0] && value[0].constructor.identifier !== "SexType") throw new TypeError("Invalid value for SpecialValueType for GenderProperty. The first item in the array, if present, should be of type SexType");else if (!value[0] && !value[1] || value[1] && value[1].constructor.identifier !== "TextType") throw new TypeError("Invalid value for SpecialValueType for GenderProperty. The second item in the array, if present, should be of type TextType");
      this.value = value.reduce(function (accumulated, current) {
        return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
      }, "");
      this.valueXML = value.reduce(function (accumulated, current) {
        return accumulated + current.reprXML();
      }, "");
      this.valueJSON = value.reduce(function (accumulated, current) {
        accumulated.push(current.reprJSON().pop());
        return accumulated;
      }, []);
      if (this.valueJSON.length === 1) this.valueJSON.unshift(this.constructor.type.toLowerCase());else this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
      break;

    case /^AdrProperty$/i.test(targetProp):
      if (!Array.isArray(value) || value.length !== 7) throw new InvalidArgument("Invalid value for SpecialValueType for AdrProperty. It should be an array with a length of 7");

      for (var _index3 = 0; _index3 < value.length; _index3++) {
        if (value[_index3]) if (value[_index3].constructor.identifier !== "TextType") throw new TypeError("Invalid value for SpecialValueType for AdrProperty. The items in the array, if present, should be of type TextType");
      }

      valueCopy = _toConsumableArray(value);

      for (var _index4 = 0; _index4 < valueCopy.length; _index4++) {
        if (valueCopy[_index4]) valueCopy[_index4] = valueCopy[_index4].repr();
      }

      this.value = valueCopy.join(";");
      this.valueXML = "";
      this.valueJSON = [];

      for (var _index5 = 0; _index5 < value.length; _index5++) {
        switch (_index5) {
          case 0:
            if (!value[_index5]) {
              this.valueXML += "<pobox/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "pobox>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 1:
            if (!value[_index5]) {
              this.valueXML += "<ext/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "ext>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 2:
            if (!value[_index5]) {
              this.valueXML += "<street/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "street>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 3:
            if (!value[_index5]) {
              this.valueXML += "<locality/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "locality>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 4:
            if (!value[_index5]) {
              this.valueXML += "<region/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "region>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 5:
            if (!value[_index5]) {
              this.valueXML += "<code/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "code>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

            break;

          case 6:
            if (!value[_index5]) {
              this.valueXML += "<country/>";
              this.valueJSON[_index5] = "";
            } else {
              this.valueXML += value[_index5].reprXML().replaceAll("text>", "country>");
              _tempValue = value[_index5].reprJSON();
              if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                _tempValue.shift();

                this.valueJSON[_index5] = _tempValue;
              }
            }

        }
      }

      this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
      break;

    case /^OrgProperty$/i.test(targetProp):
      if (!Array.isArray(value) || !(value.length >= 1)) throw new InvalidArgument("Invalid value for SpecialValueType for OrgProperty. It should be an array with at least one item");

      for (var _index6 = 0; _index6 < value.length; _index6++) {
        var _value$_index, _value$_index$constru;

        if (((_value$_index = value[_index6]) === null || _value$_index === void 0 ? void 0 : (_value$_index$constru = _value$_index.constructor) === null || _value$_index$constru === void 0 ? void 0 : _value$_index$constru.identifier) !== "TextType") throw new TypeError("Invalid value for SpecialValueType for OrgProperty. The items in the array should be of type TextType");
      }

      this.value = value.reduce(function (accumulated, current) {
        return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
      }, "");
      this.valueXML = value.reduce(function (accumulated, current) {
        return accumulated + current.reprXML();
      }, "");
      this.valueJSON = value.reduce(function (accumulated, current) {
        accumulated.push(current.reprJSON().pop());
        return accumulated;
      }, []);
      if (this.valueJSON.length === 1) this.valueJSON.unshift(this.constructor.type.toLowerCase());else this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
      break;

    case /^ClientpidmapProperty$/i.test(targetProp):
      if (!Array.isArray(value) || value.length !== 2) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2");else if (((_value$ = value[0]) === null || _value$ === void 0 ? void 0 : (_value$$constructor = _value$.constructor) === null || _value$$constructor === void 0 ? void 0 : _value$$constructor.identifier) !== "IntegerType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType");else if (0 >= Number(value[0].repr())) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType. Zero is not allowed");else if (((_value$2 = value[1]) === null || _value$2 === void 0 ? void 0 : (_value$2$constructor = _value$2.constructor) === null || _value$2$constructor === void 0 ? void 0 : _value$2$constructor.identifier) !== "URIType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType");
      this.value = value.reduce(function (accumulated, current) {
        return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
      }, "");
      this.valueXML = value.reduce(function (accumulated, current) {
        return accumulated + current.reprXML();
      }, "");
      this.valueJSON = ["unknown", value.reduce(function (accumulated, current) {
        accumulated.push(current.reprJSON().pop());
        return accumulated;
      }, [])];
      break;

    default:
      throw new InvalidArgument("Invalid target property for SpecialValueType");
  }
}

_defineProperty(SpecialValueType, "identifier", "SpecialValueType");

_defineProperty(SpecialValueType, "type", "TEXT");

Object.freeze(SpecialValueType);

export { SpecialValueType };
//# sourceMappingURL=SpecialValueType.js.map
