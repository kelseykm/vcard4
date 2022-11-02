import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _prefValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var PrefParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(PrefParameter, _BaseParameter);

  var _super = _createSuper(PrefParameter);

  function PrefParameter(_prefValue2) {
    var _this;

    _classCallCheck(this, PrefParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _prefValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _prefValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _prefValue, _prefValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PrefParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _prefValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _prefValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _prefValue).reprJSON();
    }
  }]);

  return PrefParameter;
}(BaseParameter);

function _validate2(prefValue) {
  if (typeof prefValue === "undefined") throw new MissingArgument("Value for PrefParameter must be supplied");else if (prefValue.constructor.identifier !== "IntegerType") throw new TypeError("Value for PrefParameter should be of type IntegerType");else if (Number(prefValue.repr()) < 1 || Number(prefValue.repr()) > 100) throw new InvalidArgument("Value for PrefParameter must be between 1 and 100");
}

_defineProperty(PrefParameter, "param", "PREF");

_defineProperty(PrefParameter, "identifier", "PrefParameter");

Object.freeze(PrefParameter);

export { PrefParameter };
//# sourceMappingURL=PrefParameter.js.map
