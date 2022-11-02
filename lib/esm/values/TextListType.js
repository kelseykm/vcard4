import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _textlist = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var TextListType = /*#__PURE__*/function (_BaseValue) {
  _inherits(TextListType, _BaseValue);

  var _super = _createSuper(TextListType);

  function TextListType(_textlist2) {
    var _this;

    _classCallCheck(this, TextListType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textlist, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _textlist2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _textlist, _textlist2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _textlist).reduce(function (accumulatedTextTypes, currentTextType) {
        accumulatedTextTypes.push(currentTextType.repr());
        return accumulatedTextTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _textlist).reduce(function (accumulatedTextTypes, currentTextType) {
        return accumulatedTextTypes + currentTextType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet(this, _textlist).reduce(function (accumulatedTextTypes, currentTextType) {
        accumulatedTextTypes.push(currentTextType.reprJSON().pop());
        return accumulatedTextTypes;
      }, []);

      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);

  return TextListType;
}(BaseValue);

function _validate2(textlist) {
  if (typeof textlist === "undefined") throw new MissingArgument("Value for TextListType must be supplied");else if (!Array.isArray(textlist)) throw new TypeError("Value for TextListType must be passed in an array");

  var _iterator = _createForOfIteratorHelper(textlist),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var text = _step.value;
      if (text.constructor.identifier !== "TextType") throw new TypeError("Invalid type for value of TextListType. It should be an array of TextTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

_defineProperty(TextListType, "type", "TEXT");

_defineProperty(TextListType, "identifier", "TextListType");

Object.freeze(TextListType);

export { TextListType };
//# sourceMappingURL=TextListType.js.map
