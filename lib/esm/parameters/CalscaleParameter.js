import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _calscaleValue = /*#__PURE__*/new WeakMap();

var _calscaleRegExp = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var CalscaleParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(CalscaleParameter, _BaseParameter);

  var _super = _createSuper(CalscaleParameter);

  function CalscaleParameter(_calscaleValue2) {
    var _this;

    _classCallCheck(this, CalscaleParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _calscaleValue, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _calscaleRegExp, {
      writable: true,
      value: /^(?:gregorian|x-[A-Za-z0-9]+)$/
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _calscaleValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _calscaleValue, _calscaleValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalscaleParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _calscaleValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _calscaleValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _calscaleValue).reprJSON();
    }
  }]);

  return CalscaleParameter;
}(BaseParameter);

function _validate2(calscaleValue) {
  if (typeof calscaleValue === "undefined") throw new MissingArgument("Value for CalscaleParameter must be supplied");else if (calscaleValue.constructor.identifier !== "TextType") throw new MissingArgument("Value for CalscaleParameter must of type TextType");else if (!_classPrivateFieldGet(this, _calscaleRegExp).test(calscaleValue.repr())) throw new InvalidArgument("Invalid calscale value");
}

_defineProperty(CalscaleParameter, "param", "CALSCALE");

_defineProperty(CalscaleParameter, "identifier", "CalscaleParameter");

Object.freeze(CalscaleParameter);

export { CalscaleParameter };
//# sourceMappingURL=CalscaleParameter.js.map
