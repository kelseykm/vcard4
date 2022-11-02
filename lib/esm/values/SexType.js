import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _sexRegExp = /*#__PURE__*/new WeakMap();

var _sexValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var SexType = /*#__PURE__*/function (_BaseValue) {
  _inherits(SexType, _BaseValue);

  var _super = _createSuper(SexType);

  function SexType(_sexValue2) {
    var _this;

    _classCallCheck(this, SexType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sexRegExp, {
      writable: true,
      value: /^[MFONU]$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sexValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _sexValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _sexValue, _sexValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SexType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _sexValue);
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<sex>".concat(_classPrivateFieldGet(this, _sexValue), "</sex>");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _sexValue)];
    }
  }]);

  return SexType;
}(BaseValue);

function _validate2(sexValue) {
  if (typeof sexValue === "undefined") throw new MissingArgument("Value for SEXType must be supplied");else if (!_classPrivateFieldGet(this, _sexRegExp).test(sexValue)) throw new InvalidArgument("Invalid sex");
}

_defineProperty(SexType, "type", "TEXT");

_defineProperty(SexType, "identifier", "SexType");

Object.freeze(SexType);

export { SexType };
//# sourceMappingURL=SexType.js.map
