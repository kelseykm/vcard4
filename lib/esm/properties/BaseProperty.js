import { createClass as _createClass, classPrivateFieldGet as _classPrivateFieldGet, toConsumableArray as _toConsumableArray, classCallCheck as _classCallCheck, classPrivateFieldInitSpec as _classPrivateFieldInitSpec } from '../_virtual/_rollupPluginBabelHelpers.js';

var _abstractPropertiesAndMethods = /*#__PURE__*/new WeakMap();

var BaseProperty = /*#__PURE__*/function () {
  function BaseProperty() {
    _classCallCheck(this, BaseProperty);

    _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods, {
      writable: true,
      value: ["prop", "cardinality", "acceptableParamTypes", "acceptableValTypes", "params", "paramsXML", "paramsJSON", "value", "valueXML", "valueJSON", "identifier"]
    });

    if (this.constructor === BaseProperty) throw new Error("Cannot create instance of base class");
  }

  _createClass(BaseProperty, [{
    key: "checkAbstractPropertiesAndMethods",
    value: function checkAbstractPropertiesAndMethods() {
      var _this = this;

      if (!_classPrivateFieldGet(this, _abstractPropertiesAndMethods).every(function (abstractPropertyOrMethod) {
        return Object.prototype.hasOwnProperty.call(_this, abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(_this), abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(_this.constructor, abstractPropertyOrMethod);
      })) throw new Error("All abstract properties and methods in base class must be defined in child class");
    }
  }, {
    key: "repr",
    value: function repr() {
      var contentLine = this.params === "" ? "".concat(this.constructor.prop || this.prop, ":").concat(this.value) : "".concat(this.constructor.prop || this.prop, ";").concat(this.params, ":").concat(this.value);
      var LINEBREAK = "\r\n" + " ";
      var MAXWIDTH = 75;
      if (contentLine.length <= MAXWIDTH) return contentLine;
      var foldedContentLine = "";

      for (var index = 0; index < contentLine.length; index++) {
        if (index > 0 && index % MAXWIDTH === 0) foldedContentLine += LINEBREAK + contentLine[index];else foldedContentLine += contentLine[index];
      }

      return foldedContentLine;
    }
  }, {
    key: "reprXML",
    value: function reprXML() {
      var _this$constructor$pro, _this$prop;

      var tag = ((_this$constructor$pro = this.constructor.prop) === null || _this$constructor$pro === void 0 ? void 0 : _this$constructor$pro.toLowerCase()) || ((_this$prop = this.prop) === null || _this$prop === void 0 ? void 0 : _this$prop.toLowerCase());
      if (tag === "xml") return this.valueXML;
      return this.paramsXML === "" ? "<".concat(tag, ">").concat(this.valueXML, "</").concat(tag, ">") : "<".concat(tag, "><parameters>").concat(this.paramsXML, "</parameters>").concat(this.valueXML, "</").concat(tag, ">");
    }
  }, {
    key: "reprJSON",
    value: function reprJSON() {
      var _this$constructor$pro2, _this$prop2;

      return [((_this$constructor$pro2 = this.constructor.prop) === null || _this$constructor$pro2 === void 0 ? void 0 : _this$constructor$pro2.toLowerCase()) || ((_this$prop2 = this.prop) === null || _this$prop2 === void 0 ? void 0 : _this$prop2.toLowerCase()), this.paramsJSON].concat(_toConsumableArray(this.valueJSON));
    }
  }]);

  return BaseProperty;
}();
Object.freeze(BaseProperty);

export { BaseProperty };
//# sourceMappingURL=BaseProperty.js.map
