import { createClass as _createClass, classPrivateFieldGet as _classPrivateFieldGet, classCallCheck as _classCallCheck, classPrivateFieldInitSpec as _classPrivateFieldInitSpec } from '../_virtual/_rollupPluginBabelHelpers.js';

var _abstractPropertiesAndMethods = /*#__PURE__*/new WeakMap();

var BaseValue = /*#__PURE__*/function () {
  function BaseValue() {
    _classCallCheck(this, BaseValue);

    _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods, {
      writable: true,
      value: ["type", "value", "valueXML", "valueJSON", "identifier"]
    });

    if (this.constructor === BaseValue) throw new Error("Cannot create instance of base class");
  }

  _createClass(BaseValue, [{
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

  return BaseValue;
}();
Object.freeze(BaseValue);

export { BaseValue };
//# sourceMappingURL=BaseValue.js.map
