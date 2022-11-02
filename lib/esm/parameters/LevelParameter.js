import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _expertiseRegExp = /*#__PURE__*/new WeakMap();

var _hobbyInterestRegExp = /*#__PURE__*/new WeakMap();

var _levelValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var LevelParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(LevelParameter, _BaseParameter);

  var _super = _createSuper(LevelParameter);

  function LevelParameter(_levelValue2, _targetProp) {
    var _this;

    _classCallCheck(this, LevelParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _expertiseRegExp, {
      writable: true,
      value: /^(?:beginner|average|expert)$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _hobbyInterestRegExp, {
      writable: true,
      value: /^(?:high|medium|low)$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _levelValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _levelValue2, _targetProp);

    _classPrivateFieldSet(_assertThisInitialized(_this), _levelValue, _levelValue2);

    _this.targetProp = _targetProp.toUpperCase();

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LevelParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _levelValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _levelValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _levelValue).reprJSON();
    }
  }]);

  return LevelParameter;
}(BaseParameter);

function _validate2(levelValue, targetProp) {
  if (typeof levelValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for LevelParameter must be supplied");else if (levelValue.constructor.identifier !== "TextType") throw new InvalidArgument("Invalid value for LevelParameter");

  switch (true) {
    case /^expertiseProperty$/i.test(targetProp) && _classPrivateFieldGet(this, _expertiseRegExp).test(levelValue.repr()):
      break;

    case /^(?:hobby|interest)Property$/i.test(targetProp) && _classPrivateFieldGet(this, _hobbyInterestRegExp).test(levelValue.repr()):
      break;

    default:
      throw new InvalidArgument("Invalid value for LevelParameter");
  }
}

_defineProperty(LevelParameter, "param", "LEVEL");

_defineProperty(LevelParameter, "identifier", "LevelParameter");

Object.freeze(LevelParameter);

export { LevelParameter };
//# sourceMappingURL=LevelParameter.js.map
