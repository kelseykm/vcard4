import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _altidValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var AltidParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(AltidParameter, _BaseParameter);

  var _super = _createSuper(AltidParameter);

  function AltidParameter(_altidValue2) {
    var _this;

    _classCallCheck(this, AltidParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _altidValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _altidValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _altidValue, _altidValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AltidParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _altidValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _altidValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _altidValue).reprJSON();
    }
  }]);

  return AltidParameter;
}(BaseParameter);

function _validate2(altidValue) {
  if (typeof altidValue === "undefined") throw new MissingArgument("Value for AltidParameter must be supplied");else if (altidValue.constructor.identifier !== "TextType") throw new InvalidArgument("Value for AltidParameter must be of type TextType");
}

_defineProperty(AltidParameter, "param", "ALTID");

_defineProperty(AltidParameter, "identifier", "AltidParameter");

Object.freeze(AltidParameter);

export { AltidParameter };
//# sourceMappingURL=AltidParameter.js.map
