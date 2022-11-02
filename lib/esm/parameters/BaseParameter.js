import { createClass as _createClass, classPrivateFieldGet as _classPrivateFieldGet, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateFieldInitSpec as _classPrivateFieldInitSpec } from '../_virtual/_rollupPluginBabelHelpers.js';

var _abstractPropertiesAndMethods = /*#__PURE__*/new WeakMap();

var BaseParameter = /*#__PURE__*/function () {
  function BaseParameter() {
    _classCallCheck(this, BaseParameter);

    _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods, {
      writable: true,
      value: ["param", "value", "valueXML", "valueJSON", "identifier"]
    });

    if (this.constructor === BaseParameter) throw new Error("Cannot create instance of base class");
  }

  _createClass(BaseParameter, [{
    key: "checkAbstractPropertiesAndMethods",
    value: function checkAbstractPropertiesAndMethods() {
      var _this = this;

      if (!_classPrivateFieldGet(this, _abstractPropertiesAndMethods).every(function (abstractPropertyOrMethod) {
        return Object.prototype.hasOwnProperty.call(_this, abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(_this), abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(_this.constructor, abstractPropertyOrMethod);
      })) throw new Error("All abstract properties and methods in abstract base class must be defined in child class");
    }
  }, {
    key: "repr",
    value: function repr() {
      return "".concat(this.constructor.param || this.param, "=").concat(this.value);
    }
  }, {
    key: "reprXML",
    value: function reprXML() {
      var _this$constructor$par, _this$param;

      var tag = ((_this$constructor$par = this.constructor.param) === null || _this$constructor$par === void 0 ? void 0 : _this$constructor$par.toLowerCase()) || ((_this$param = this.param) === null || _this$param === void 0 ? void 0 : _this$param.toLowerCase());
      var knownTagRegExp = /^(?:altid|base|calscale|cc|geo|index|label|language|level|mediatype|pid|pref|sort-as|type|tz|value|x-[A-Za-z0-9]+)$/;
      if (!knownTagRegExp.test(tag)) return "<unknown>".concat(this.valueXML.replace(/<[a-z\-]+?>/g, "<text>").replace(/<\/[a-z\-]+?>/g, "</text>"), "</unknown>");else if (tag === "value") return "";
      return "<".concat(tag, ">").concat(this.valueXML, "</").concat(tag, ">");
    }
  }, {
    key: "reprJSON",
    value: function reprJSON() {
      var _this$constructor$par2, _this$param2;

      var key = ((_this$constructor$par2 = this.constructor.param) === null || _this$constructor$par2 === void 0 ? void 0 : _this$constructor$par2.toLowerCase()) || ((_this$param2 = this.param) === null || _this$param2 === void 0 ? void 0 : _this$param2.toLowerCase());
      if (key === "value") return {};
      var value = this.valueJSON;
      value.shift();
      value = value.map(function (val) {
        return val.toString();
      });
      if (value.length === 1) value = value.pop();
      return _defineProperty({}, key, value);
    }
  }]);

  return BaseParameter;
}();
Object.freeze(BaseParameter);

export { BaseParameter };
//# sourceMappingURL=BaseParameter.js.map
