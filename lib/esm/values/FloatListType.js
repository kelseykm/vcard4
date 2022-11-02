import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _floatlist = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var FloatListType = /*#__PURE__*/function (_BaseValue) {
  _inherits(FloatListType, _BaseValue);

  var _super = _createSuper(FloatListType);

  function FloatListType(_floatlist2) {
    var _this;

    _classCallCheck(this, FloatListType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _floatlist, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _floatlist2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _floatlist, _floatlist2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FloatListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _floatlist).reduce(function (accumulatedFloatTypes, currentFloatType) {
        accumulatedFloatTypes.push(currentFloatType.repr());
        return accumulatedFloatTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _floatlist).reduce(function (accumulatedFloatTypes, currentFloatType) {
        return accumulatedFloatTypes + currentFloatType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet(this, _floatlist).reduce(function (accumulatedFloatTypes, currentFloatType) {
        accumulatedFloatTypes.push(currentFloatType.reprJSON().pop());
        return accumulatedFloatTypes;
      }, []);

      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);

  return FloatListType;
}(BaseValue);

function _validate2(floatlist) {
  if (typeof floatlist === "undefined") throw new MissingArgument("Value for FloatListType must be supplied");else if (!Array.isArray(floatlist)) throw new TypeError("Value of FloatListType should be passed in an array");

  var _iterator = _createForOfIteratorHelper(floatlist),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _float = _step.value;
      if (_float.constructor.identifier !== "FloatType") throw new TypeError("Value of FloatListType should be an array of FloatTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

_defineProperty(FloatListType, "type", "FLOAT");

_defineProperty(FloatListType, "identifier", "FloatListType");

Object.freeze(FloatListType);

export { FloatListType };
//# sourceMappingURL=FloatListType.js.map
