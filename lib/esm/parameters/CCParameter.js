import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _ccValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var CCParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(CCParameter, _BaseParameter);

  var _super = _createSuper(CCParameter);

  function CCParameter(_ccValue2) {
    var _this;

    _classCallCheck(this, CCParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _ccValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _ccValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _ccValue, _ccValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CCParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _ccValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _ccValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _ccValue).reprJSON();
    }
  }]);

  return CCParameter;
}(BaseParameter);

function _validate2(ccValue) {
  if (typeof ccValue === "undefined") throw new MissingArgument("Value for CCParameter must be supplied");else if (ccValue.constructor.identifier !== "TextType" || !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())) throw new InvalidArgument("Invalid value for CCParameter");
}

_defineProperty(CCParameter, "param", "CC");

_defineProperty(CCParameter, "identifier", "CCParameter");

Object.freeze(CCParameter);

export { CCParameter };
//# sourceMappingURL=CCParameter.js.map
