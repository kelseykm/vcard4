import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _expertiseRegExp = /*#__PURE__*/new WeakMap();
var _hobbyInterestRegExp = /*#__PURE__*/new WeakMap();
var _levelValue = /*#__PURE__*/new WeakMap();
var _LevelParameter_brand = /*#__PURE__*/new WeakSet();
var LevelParameter = /*#__PURE__*/function (_BaseParameter) {
  function LevelParameter(_targetProp, _levelValue2) {
    var _this;
    _classCallCheck(this, LevelParameter);
    _this = _callSuper(this, LevelParameter);
    _classPrivateMethodInitSpec(_this, _LevelParameter_brand);
    _classPrivateFieldInitSpec(_this, _expertiseRegExp, /^(?:beginner|average|expert)$/);
    _classPrivateFieldInitSpec(_this, _hobbyInterestRegExp, /^(?:high|medium|low)$/);
    _classPrivateFieldInitSpec(_this, _levelValue, void 0);
    _assertClassBrand(_LevelParameter_brand, _this, _validate).call(_this, _targetProp, _levelValue2);
    _classPrivateFieldSet2(_levelValue, _this, _levelValue2);
    _this.targetProp = _targetProp.toUpperCase();
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(LevelParameter, _BaseParameter);
  return _createClass(LevelParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_levelValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_levelValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_levelValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(targetProp, levelValue) {
  if (typeof levelValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for LevelParameter must be supplied");else if (levelValue.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Invalid value for LevelParameter");
  switch (true) {
    case /^expertiseProperty$/i.test(targetProp) && _classPrivateFieldGet2(_expertiseRegExp, this).test(levelValue.repr()):
      break;
    case /^(?:hobby|interest)Property$/i.test(targetProp) && _classPrivateFieldGet2(_hobbyInterestRegExp, this).test(levelValue.repr()):
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
