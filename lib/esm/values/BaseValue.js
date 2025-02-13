import { createClass as _createClass, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, classPrivateFieldInitSpec as _classPrivateFieldInitSpec } from '../_virtual/_rollupPluginBabelHelpers.js';

var _abstractPropertiesAndMethods = /*#__PURE__*/new WeakMap();
var BaseValue = /*#__PURE__*/function () {
  function BaseValue() {
    _classCallCheck(this, BaseValue);
    _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods, ["type", "value", "valueXML", "valueJSON", "identifier"]);
    if (this.constructor === BaseValue) throw new Error("Cannot create instance of base class");
  }
  return _createClass(BaseValue, [{
    key: "checkAbstractPropertiesAndMethods",
    value: function checkAbstractPropertiesAndMethods() {
      var _this = this;
      if (!_classPrivateFieldGet2(_abstractPropertiesAndMethods, this).every(function (abstractPropertyOrMethod) {
        return Object.prototype.hasOwnProperty.call(_this, abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(_this), abstractPropertyOrMethod) || Object.prototype.hasOwnProperty.call(_this.constructor, abstractPropertyOrMethod);
      })) throw new Error("All abstract properties and methods in abstract base class must be defined in child class");
    }
  }, {
    key: "repr",
    value: function repr() {
      return this.value;
    }
  }, {
    key: "reprXML",
    value: function reprXML() {
      return this.valueXML;
    }
  }, {
    key: "reprJSON",
    value: function reprJSON() {
      return this.valueJSON;
    }
  }]);
}();
Object.freeze(BaseValue);

export { BaseValue };
//# sourceMappingURL=BaseValue.js.map
