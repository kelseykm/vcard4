import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _pidValue = /*#__PURE__*/new WeakMap();

var _pidRegExp = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var PIDParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(PIDParameter, _BaseParameter);

  var _super = _createSuper(PIDParameter);

  function PIDParameter(_pidValue2) {
    var _this;

    _classCallCheck(this, PIDParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pidValue, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pidRegExp, {
      writable: true,
      value: /^\d+(?:\.\d+)?$/
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _pidValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _pidValue, _pidValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PIDParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _pidValue)) ? "".concat(_classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
        if (Array.isArray(currentType)) {
          accumulatedTypes.push(currentType.reduce(function (accumType, currType) {
            accumType.push(currType.repr());
            return accumType;
          }, []).join("."));
        } else accumulatedTypes.push(currentType.repr());

        return accumulatedTypes;
      }, []).join(",")) : _classPrivateFieldGet(this, _pidValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      var xml = Array.isArray(_classPrivateFieldGet(this, _pidValue)) ? "".concat(_classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
        if (Array.isArray(currentType)) {
          accumulatedTypes.push("<integer>" + currentType.reduce(function (accumType, currType) {
            accumType.push(currType.repr());
            return accumType;
          }, []).join(".") + "</integer>");
        } else accumulatedTypes.push(currentType.reprXML());

        return accumulatedTypes;
      }, []).join("")) : _classPrivateFieldGet(this, _pidValue).reprXML();
      return xml.replaceAll("integer", "text");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      if (Array.isArray(_classPrivateFieldGet(this, _pidValue))) {
        var json = _classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
          if (Array.isArray(currentType)) {
            accumulatedTypes.push(currentType.reduce(function (accumType, currType) {
              accumType.push(currType.repr());
              return accumType;
            }, []).join("."));
          } else accumulatedTypes.push(currentType.repr());

          return accumulatedTypes;
        }, []);

        json.unshift("integer");
        return json;
      }

      return _classPrivateFieldGet(this, _pidValue).reprJSON();
    }
  }]);

  return PIDParameter;
}(BaseParameter);

function _validate2(pidValue) {
  if (typeof pidValue === "undefined") throw new MissingArgument("Value for PIDParameter must be supplied");else if (!Array.isArray(pidValue) && pidValue.constructor.identifier !== "IntegerType") throw new InvalidArgument("Invalid value for PIDParameter");else if (Array.isArray(pidValue) && !pidValue.every(function (val1) {
    if (Array.isArray(val1)) return val1.every(function (val2) {
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
