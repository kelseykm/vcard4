import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _textlist = /*#__PURE__*/new WeakMap();
var _TextListType_brand = /*#__PURE__*/new WeakSet();
var TextListType = /*#__PURE__*/function (_BaseValue) {
  function TextListType(_textlist2) {
    var _this;
    _classCallCheck(this, TextListType);
    _this = _callSuper(this, TextListType);
    _classPrivateMethodInitSpec(_this, _TextListType_brand);
    _classPrivateFieldInitSpec(_this, _textlist, void 0);
    _assertClassBrand(_TextListType_brand, _this, _validate).call(_this, _textlist2);
    _classPrivateFieldSet2(_textlist, _this, _textlist2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(TextListType, _BaseValue);
  return _createClass(TextListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_textlist, this).reduce(function (accumulatedTextTypes, currentTextType) {
        accumulatedTextTypes.push(currentTextType.repr());
        return accumulatedTextTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_textlist, this).reduce(function (accumulatedTextTypes, currentTextType) {
        return accumulatedTextTypes + currentTextType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet2(_textlist, this).reduce(function (accumulatedTextTypes, currentTextType) {
        accumulatedTextTypes.push(currentTextType.reprJSON().pop());
        return accumulatedTextTypes;
      }, []);
      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);
}(BaseValue);
function _validate(textlist) {
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
