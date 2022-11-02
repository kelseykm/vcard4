import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _integerlist = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var IntegerListType = /*#__PURE__*/function (_BaseValue) {
  _inherits(IntegerListType, _BaseValue);

  var _super = _createSuper(IntegerListType);

  function IntegerListType(_integerlist2) {
    var _this;

    _classCallCheck(this, IntegerListType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _integerlist, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _integerlist2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _integerlist, _integerlist2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IntegerListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _integerlist).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.repr());
        return accumulatedIntegerTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _integerlist).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        return accumulatedIntegerTypes + currentIntegerType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet(this, _integerlist).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
        return accumulatedIntegerTypes;
      }, []);

      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);

  return IntegerListType;
}(BaseValue);

function _validate2(integerlist) {
  if (typeof integerlist === "undefined") throw new MissingArgument("Value for IntegerListType must be supplied");else if (!Array.isArray(integerlist)) throw new TypeError("Value for IntegerListType must be passed in an array");

  var _iterator = _createForOfIteratorHelper(integerlist),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var integer = _step.value;
      if (integer.constructor.identifier !== "IntegerType") throw new TypeError("Invalid type for value of IntegerListType. It should be an array of IntegerTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

_defineProperty(IntegerListType, "type", "INTEGER");

_defineProperty(IntegerListType, "identifier", "IntegerListType");

Object.freeze(IntegerListType);

export { IntegerListType };
//# sourceMappingURL=IntegerListType.js.map
