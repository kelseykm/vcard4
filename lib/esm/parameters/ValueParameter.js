import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _valueType = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var ValueParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(ValueParameter, _BaseParameter);

  var _super = _createSuper(ValueParameter);

  function ValueParameter(_valueType2) {
    var _this;

    _classCallCheck(this, ValueParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _valueType, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _valueType2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _valueType, _valueType2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ValueParameter, [{
    key: "value",
    get: function get() {
      var type = _classPrivateFieldGet(this, _valueType).type || _classPrivateFieldGet(this, _valueType).constructor.type;

      return type.toLowerCase();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "";
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [];
    }
  }]);

  return ValueParameter;
}(BaseParameter);

function _validate2(valueType) {
  if (typeof valueType === "undefined") throw new MissingArgument("Value for ValueParameter must be supplied");
  if (!Object.prototype.hasOwnProperty.call(valueType, "type") && !Object.prototype.hasOwnProperty.call(valueType.constructor, "type")) throw new InvalidArgument("Value for ValueParameter not recognized");
}

_defineProperty(ValueParameter, "param", "VALUE");

_defineProperty(ValueParameter, "identifier", "ValueParameter");

Object.freeze(ValueParameter);

export { ValueParameter };
//# sourceMappingURL=ValueParameter.js.map
