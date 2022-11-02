(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vcard4 = {}));
})(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return fn;
  }

  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);

    privateMap.set(obj, value);
  }

  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);

    privateSet.add(obj);
  }

  var MissingArgument = /*#__PURE__*/function (_Error) {
    _inherits(MissingArgument, _Error);

    var _super = _createSuper(MissingArgument);

    function MissingArgument(message) {
      var _this;

      _classCallCheck(this, MissingArgument);

      _this = _super.call(this, message);
      _this.name = "MissingArgument";
      return _this;
    }

    return _createClass(MissingArgument);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(MissingArgument);

  var InvalidArgument = /*#__PURE__*/function (_Error) {
    _inherits(InvalidArgument, _Error);

    var _super = _createSuper(InvalidArgument);

    function InvalidArgument(message) {
      var _this;

      _classCallCheck(this, InvalidArgument);

      _this = _super.call(this, message);
      _this.name = "InvalidArgument";
      return _this;
    }

    return _createClass(InvalidArgument);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(InvalidArgument);

  var InvalidVcard = /*#__PURE__*/function (_Error) {
    _inherits(InvalidVcard, _Error);

    var _super = _createSuper(InvalidVcard);

    function InvalidVcard(message) {
      var _this;

      _classCallCheck(this, InvalidVcard);

      _this = _super.call(this, message);
      _this.name = "InvalidVcard";
      return _this;
    }

    return _createClass(InvalidVcard);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(InvalidVcard);

  var _abstractPropertiesAndMethods$2 = /*#__PURE__*/new WeakMap();

  var BaseValue = /*#__PURE__*/function () {
    function BaseValue() {
      _classCallCheck(this, BaseValue);

      _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods$2, {
        writable: true,
        value: ["type", "value", "valueXML", "valueJSON", "identifier"]
      });

      if (this.constructor === BaseValue) throw new Error("Cannot create instance of base class");
    }

    _createClass(BaseValue, [{
      key: "checkAbstractPropertiesAndMethods",
      value: function checkAbstractPropertiesAndMethods() {
        var _this = this;

        if (!_classPrivateFieldGet(this, _abstractPropertiesAndMethods$2).every(function (abstractPropertyOrMethod) {
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

  var _textValue = /*#__PURE__*/new WeakMap();

  var _validate$18 = /*#__PURE__*/new WeakSet();

  var _cleanUp$2 = /*#__PURE__*/new WeakSet();

  var _cleanUpXML = /*#__PURE__*/new WeakSet();

  var TextType = /*#__PURE__*/function (_BaseValue) {
    _inherits(TextType, _BaseValue);

    var _super = _createSuper(TextType);

    function TextType(_textValue2) {
      var _this;

      _classCallCheck(this, TextType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUpXML);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp$2);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$18);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$18, _validate2$18).call(_assertThisInitialized(_this), _textValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _textValue, _textValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TextType, [{
      key: "value",
      get: function get() {
        return _classPrivateMethodGet(this, _cleanUp$2, _cleanUp2$2).call(this, _classPrivateFieldGet(this, _textValue));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateMethodGet(this, _cleanUpXML, _cleanUpXML2).call(this, _classPrivateFieldGet(this, _textValue)), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _textValue)];
      }
    }, {
      key: "_unsafe_raw_value",
      get: function get() {
        return _classPrivateFieldGet(this, _textValue);
      }
    }]);

    return TextType;
  }(BaseValue);

  function _validate2$18(textValue) {
    if (typeof textValue === "undefined") throw new MissingArgument("Value for TextType must be supplied");else if (typeof textValue !== "string") throw new TypeError("Only type string allowed for TextType value");
  }

  function _cleanUp2$2(textValue) {
    return textValue.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(":", "\\:").replaceAll(";", "\\;").replaceAll("\n", "\\n");
  }

  function _cleanUpXML2(textValue) {
    return textValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
  }

  _defineProperty(TextType, "type", "TEXT");

  _defineProperty(TextType, "identifier", "TextType");

  Object.freeze(TextType);

  var _textlist = /*#__PURE__*/new WeakMap();

  var _validate$17 = /*#__PURE__*/new WeakSet();

  var TextListType = /*#__PURE__*/function (_BaseValue) {
    _inherits(TextListType, _BaseValue);

    var _super = _createSuper(TextListType);

    function TextListType(_textlist2) {
      var _this;

      _classCallCheck(this, TextListType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$17);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textlist, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$17, _validate2$17).call(_assertThisInitialized(_this), _textlist2);

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

  function _validate2$17(textlist) {
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

  var _boolValue = /*#__PURE__*/new WeakMap();

  var _validate$16 = /*#__PURE__*/new WeakSet();

  var BooleanType = /*#__PURE__*/function (_BaseValue) {
    _inherits(BooleanType, _BaseValue);

    var _super = _createSuper(BooleanType);

    function BooleanType(_boolValue2) {
      var _this;

      _classCallCheck(this, BooleanType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$16);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _boolValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$16, _validate2$16).call(_assertThisInitialized(_this), _boolValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _boolValue, _boolValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(BooleanType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet(this, _boolValue));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _boolValue), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _boolValue)];
      }
    }]);

    return BooleanType;
  }(BaseValue);

  function _validate2$16(boolValue) {
    if (typeof boolValue === "undefined") throw new MissingArgument("boolValue must be supplied");else if (typeof boolValue !== "boolean") throw new TypeError("Value for BooleanType should be of type boolean");
  }

  _defineProperty(BooleanType, "type", "BOOLEAN");

  _defineProperty(BooleanType, "identifier", "BooleanType");

  Object.freeze(BooleanType);

  var _dateTimeValue = /*#__PURE__*/new WeakMap();

  var _dateRegExp = /*#__PURE__*/new WeakMap();

  var _timeRegExp = /*#__PURE__*/new WeakMap();

  var _dateTimeRegExp = /*#__PURE__*/new WeakMap();

  var _dateAndOrTimeRegExp = /*#__PURE__*/new WeakMap();

  var _timestampRegExp = /*#__PURE__*/new WeakMap();

  var _utcOffsetRegExp = /*#__PURE__*/new WeakMap();

  var _validateAndSetType = /*#__PURE__*/new WeakSet();

  var DateTimeType = /*#__PURE__*/function (_BaseValue) {
    _inherits(DateTimeType, _BaseValue);

    var _super = _createSuper(DateTimeType);

    function DateTimeType(_dateTimeValue2, _type) {
      var _this;

      _classCallCheck(this, DateTimeType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validateAndSetType);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateTimeValue, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateRegExp, {
        writable: true,
        value: /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _timeRegExp, {
        writable: true,
        value: /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateTimeRegExp, {
        writable: true,
        value: /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateAndOrTimeRegExp, {
        writable: true,
        value: new RegExp("(?:".concat(_classPrivateFieldGet(_assertThisInitialized(_this), _dateRegExp).source, "|").concat(_classPrivateFieldGet(_assertThisInitialized(_this), _timeRegExp).source.replace("^", "^T"), "|").concat(_classPrivateFieldGet(_assertThisInitialized(_this), _dateTimeRegExp).source, ")"))
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _timestampRegExp, {
        writable: true,
        value: /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _utcOffsetRegExp, {
        writable: true,
        value: /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validateAndSetType, _validateAndSetType2).call(_assertThisInitialized(_this), _dateTimeValue2, _type);

      _classPrivateFieldSet(_assertThisInitialized(_this), _dateTimeValue, _dateTimeValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DateTimeType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet(this, _dateTimeValue));
      }
    }, {
      key: "valueXML",
      get: function get() {
        var tag = this.type.toLowerCase();

        var value = _classPrivateFieldGet(this, _dateTimeValue);

        if (tag === "date-and-or-time") {
          switch (true) {
            case _classPrivateFieldGet(this, _dateRegExp).test(value):
              tag = "date";
              break;

            case _classPrivateFieldGet(this, _timeRegExp).test(value):
              tag = "time";
              break;

            case _classPrivateFieldGet(this, _dateTimeRegExp).test(value):
              tag = "date-time";
              break;
          }
        }

        return "<".concat(tag, ">").concat(value, "</").concat(tag, ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        var type = this.type.toLowerCase();
        var value;

        function _extendDate(date) {
          if (/^\d{8}$/.test(date)) {
            date = _toConsumableArray(date);
            date.splice(4, 0, "-");
            date.splice(7, 0, "-");
            return date.join("");
          } else if (/^-{2}\d{4}$/.test(date)) {
            date = _toConsumableArray(date);
            date.splice(4, 0, "-");
            return date.join("");
          }

          return date;
        }

        function _extendTime(time) {
          var timeModified = [];

          for (var index = 0; index < time.length; index += 2) {
            if (!/^\d$/.test(time[index])) {
              timeModified.push(time[index]);
              index--;
              continue;
            }

            timeModified.push(time[index]);
            timeModified.push(time[index + 1]);
            /^\d$/.test(time[index + 2]) && timeModified.push(":");
          }

          return timeModified.join("");
        }

        switch (type) {
          case "date":
            value = _extendDate(_classPrivateFieldGet(this, _dateTimeValue));
            break;

          case "time":
            value = _extendTime(_classPrivateFieldGet(this, _dateTimeValue));
            break;

          case "date-time":
            value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            break;

          case "date-and-or-time":
            if (_classPrivateFieldGet(this, _dateTimeValue).includes("T")) {
              value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
              value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            } else value = _extendDate(_classPrivateFieldGet(this, _dateTimeValue));

            break;

          case "timestamp":
            value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            break;

          case "utc-offset":
            value = _extendTime(_classPrivateFieldGet(this, _dateTimeValue));
        }

        return [type, value];
      }
    }]);

    return DateTimeType;
  }(BaseValue);

  function _validateAndSetType2(dateTimeValue, type) {
    if (typeof dateTimeValue === "undefined" || typeof type === "undefined") throw new MissingArgument("Value and type for DateTimeType must be supplied");else if (!/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(type)) throw new InvalidArgument("Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");

    switch (type) {
      case "date":
        if (!_classPrivateFieldGet(this, _dateRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type date of DateTimeType");
        this.type = "DATE";
        break;

      case "time":
        if (!_classPrivateFieldGet(this, _timeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type time of DateTimeType");
        this.type = "TIME";
        break;

      case "datetime":
        if (!_classPrivateFieldGet(this, _dateTimeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type datetime of DateTimeType");
        this.type = "DATE-TIME";
        break;

      case "dateandortime":
        if (!_classPrivateFieldGet(this, _dateAndOrTimeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type dateandortime of DateTimeType");
        this.type = "DATE-AND-OR-TIME";
        break;

      case "timestamp":
        if (!_classPrivateFieldGet(this, _timestampRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type timestamp of DateTimeType");
        this.type = "TIMESTAMP";
        break;

      case "utcoffset":
        if (!_classPrivateFieldGet(this, _utcOffsetRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type utcoffset of DateTimeType");
        this.type = "UTC-OFFSET";
        break;

      default:
        throw new InvalidArgument("Accepted values for type property of type object for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");
    }
  }

  _defineProperty(DateTimeType, "identifier", "DateTimeType");

  Object.freeze(DateTimeType);

  var _datetimelist = /*#__PURE__*/new WeakMap();

  var _validate$15 = /*#__PURE__*/new WeakSet();

  var DateTimeListType = /*#__PURE__*/function (_BaseValue) {
    _inherits(DateTimeListType, _BaseValue);

    var _super = _createSuper(DateTimeListType);

    function DateTimeListType(_datetimelist2) {
      var _this;

      _classCallCheck(this, DateTimeListType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$15);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _datetimelist, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$15, _validate2$15).call(_assertThisInitialized(_this), _datetimelist2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _datetimelist, _datetimelist2);

      _this.type = _datetimelist2[0]["type"];

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DateTimeListType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
          accumulatedDateTimeTypes.push(currentDateTimeType.repr());
          return accumulatedDateTimeTypes;
        }, []).join(",");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
          return accumulatedDateTimeTypes + currentDateTimeType.reprXML();
        }, "");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        var value = _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
          accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
          return accumulatedIntegerTypes;
        }, []);

        value.unshift(this.type.toLowerCase());
        return value;
      }
    }]);

    return DateTimeListType;
  }(BaseValue);

  function _validate2$15(datetimelist) {
    if (typeof datetimelist === "undefined") throw new MissingArgument("Value for DateTimeListType must be supplied");else if (!Array.isArray(datetimelist)) throw new TypeError("Value for DateTimeListType should be passed in an array");
    var conformType = datetimelist[0]["type"];

    var _iterator = _createForOfIteratorHelper(datetimelist),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var datetime = _step.value;
        if (datetime.type !== conformType) throw new TypeError("Value for DateTimeListType should be an array of DateTimeTypes of the same type");else if (datetime.type === "UTC-OFFSET") throw new TypeError("Invalid type for value of DateTimeListType");else if (datetime.constructor.identifier !== "DateTimeType") throw new TypeError("Value for DateTimeListType should be an array of DateTimeTypes");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _defineProperty(DateTimeListType, "identifier", "DateTimeListType");

  Object.freeze(DateTimeListType);

  var _intValue = /*#__PURE__*/new WeakMap();

  var _validate$14 = /*#__PURE__*/new WeakSet();

  var IntegerType = /*#__PURE__*/function (_BaseValue) {
    _inherits(IntegerType, _BaseValue);

    var _super = _createSuper(IntegerType);

    function IntegerType(_intValue2) {
      var _this;

      _classCallCheck(this, IntegerType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$14);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _intValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$14, _validate2$14).call(_assertThisInitialized(_this), _intValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _intValue, _intValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(IntegerType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet(this, _intValue));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _intValue), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _intValue)];
      }
    }]);

    return IntegerType;
  }(BaseValue);

  function _validate2$14(intValue) {
    if (typeof intValue === "undefined") throw new MissingArgument("Value for IntegerType must be supplied");else if (typeof intValue !== "number" && typeof intValue !== "bigint") throw new TypeError("Value for IntegerType must be of type number or bigint");else if (/\./.test(intValue.toString())) throw new InvalidArgument("Invalid value for IntegerType");else if (typeof intValue === "number" && !(-Number.MAX_SAFE_INTEGER < intValue && intValue < Number.MAX_SAFE_INTEGER)) throw new InvalidArgument("The maximum value is ".concat(Number.MAX_SAFE_INTEGER, ", and the minimum value is ").concat(Number.MIN_SAFE_INTEGER, " for number IntegerType"));else if (typeof intValue === "bigint" && !(-9223372036854775809n < intValue && intValue < 9223372036854775808n)) throw new InvalidArgument("The maximum value is 9223372036854775807n, and the minimum value is -9223372036854775808n for bigint IntegerType");
  }

  _defineProperty(IntegerType, "type", "INTEGER");

  _defineProperty(IntegerType, "identifier", "IntegerType");

  Object.freeze(IntegerType);

  var _integerlist = /*#__PURE__*/new WeakMap();

  var _validate$13 = /*#__PURE__*/new WeakSet();

  var IntegerListType = /*#__PURE__*/function (_BaseValue) {
    _inherits(IntegerListType, _BaseValue);

    var _super = _createSuper(IntegerListType);

    function IntegerListType(_integerlist2) {
      var _this;

      _classCallCheck(this, IntegerListType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$13);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _integerlist, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$13, _validate2$13).call(_assertThisInitialized(_this), _integerlist2);

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

  function _validate2$13(integerlist) {
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

  var _floatValue = /*#__PURE__*/new WeakMap();

  var _validate$12 = /*#__PURE__*/new WeakSet();

  var FloatType = /*#__PURE__*/function (_BaseValue) {
    _inherits(FloatType, _BaseValue);

    var _super = _createSuper(FloatType);

    function FloatType(_floatValue2) {
      var _this;

      _classCallCheck(this, FloatType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$12);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _floatValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$12, _validate2$12).call(_assertThisInitialized(_this), _floatValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _floatValue, _floatValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(FloatType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet(this, _floatValue));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _floatValue), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _floatValue)];
      }
    }]);

    return FloatType;
  }(BaseValue);

  function _validate2$12(floatValue) {
    if (typeof floatValue === "undefined") throw new MissingArgument("Value for FloatType must be supplied");
    if (!(typeof floatValue === "number") && !/\./.test(floatValue) || !/^[-+]?\d+\.\d+$/.test(floatValue)) throw new TypeError("Invalid value for FloatType");
  }

  _defineProperty(FloatType, "type", "FLOAT");

  _defineProperty(FloatType, "identifier", "FloatType");

  Object.freeze(FloatType);

  var _floatlist = /*#__PURE__*/new WeakMap();

  var _validate$11 = /*#__PURE__*/new WeakSet();

  var FloatListType = /*#__PURE__*/function (_BaseValue) {
    _inherits(FloatListType, _BaseValue);

    var _super = _createSuper(FloatListType);

    function FloatListType(_floatlist2) {
      var _this;

      _classCallCheck(this, FloatListType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$11);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _floatlist, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$11, _validate2$11).call(_assertThisInitialized(_this), _floatlist2);

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

  function _validate2$11(floatlist) {
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

  var _langTagValue = /*#__PURE__*/new WeakMap();

  var _validate$10 = /*#__PURE__*/new WeakSet();

  var LanguageTagType = /*#__PURE__*/function (_BaseValue) {
    _inherits(LanguageTagType, _BaseValue);

    var _super = _createSuper(LanguageTagType);

    function LanguageTagType(_langTagValue2) {
      var _this;

      _classCallCheck(this, LanguageTagType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$10);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _langTagValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$10, _validate2$10).call(_assertThisInitialized(_this), _langTagValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _langTagValue, _langTagValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LanguageTagType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _langTagValue);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _langTagValue), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _langTagValue)];
      }
    }]);

    return LanguageTagType;
  }(BaseValue);

  function _validate2$10(langTagValue) {
    if (typeof langTagValue === "undefined") throw new MissingArgument("Value for LanguageTagType must be supplied");else if (typeof langTagValue !== "string") throw new TypeError("Value for LanguageTagType should be of type string");
  }

  _defineProperty(LanguageTagType, "type", "LANGUAGE-TAG");

  _defineProperty(LanguageTagType, "identifier", "LanguageTagType");

  Object.freeze(LanguageTagType);

  var _uriValue = /*#__PURE__*/new WeakMap();

  var _uriRegExp$1 = /*#__PURE__*/new WeakMap();

  var _validate$$ = /*#__PURE__*/new WeakSet();

  var URIType = /*#__PURE__*/function (_BaseValue) {
    _inherits(URIType, _BaseValue);

    var _super = _createSuper(URIType);

    function URIType(_uriValue2) {
      var _this;

      _classCallCheck(this, URIType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$$);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _uriValue, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _uriRegExp$1, {
        writable: true,
        value: new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?")
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$$, _validate2$$).call(_assertThisInitialized(_this), _uriValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _uriValue, _uriValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(URIType, [{
      key: "value",
      get: //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
      function get() {
        return _classPrivateFieldGet(this, _uriValue);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _uriValue), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _uriValue)];
      }
    }]);

    return URIType;
  }(BaseValue);

  function _validate2$$(uriValue) {
    if (typeof uriValue === "undefined") throw new MissingArgument("Value for URIType must be supplied");else if (typeof uriValue !== "string") throw new TypeError("Value for URIType should be of type string");else if (!_classPrivateFieldGet(this, _uriRegExp$1).test(uriValue)) throw new InvalidArgument("Invalid URI");
  }

  _defineProperty(URIType, "type", "URI");

  _defineProperty(URIType, "identifier", "URIType");

  Object.freeze(URIType);

  var _sexRegExp = /*#__PURE__*/new WeakMap();

  var _sexValue = /*#__PURE__*/new WeakMap();

  var _validate$_ = /*#__PURE__*/new WeakSet();

  var SexType = /*#__PURE__*/function (_BaseValue) {
    _inherits(SexType, _BaseValue);

    var _super = _createSuper(SexType);

    function SexType(_sexValue2) {
      var _this;

      _classCallCheck(this, SexType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$_);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sexRegExp, {
        writable: true,
        value: /^[MFONU]$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sexValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$_, _validate2$_).call(_assertThisInitialized(_this), _sexValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _sexValue, _sexValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SexType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _sexValue);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<sex>".concat(_classPrivateFieldGet(this, _sexValue), "</sex>");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _sexValue)];
      }
    }]);

    return SexType;
  }(BaseValue);

  function _validate2$_(sexValue) {
    if (typeof sexValue === "undefined") throw new MissingArgument("Value for SEXType must be supplied");else if (!_classPrivateFieldGet(this, _sexRegExp).test(sexValue)) throw new InvalidArgument("Invalid sex");
  }

  _defineProperty(SexType, "type", "TEXT");

  _defineProperty(SexType, "identifier", "SexType");

  Object.freeze(SexType);

  var _validateAndSet = /*#__PURE__*/new WeakSet();

  var SpecialValueType = /*#__PURE__*/function (_BaseValue) {
    _inherits(SpecialValueType, _BaseValue);

    var _super = _createSuper(SpecialValueType);

    function SpecialValueType(_value, _targetProp) {
      var _this;

      _classCallCheck(this, SpecialValueType);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validateAndSet);

      _classPrivateMethodGet(_assertThisInitialized(_this), _validateAndSet, _validateAndSet2).call(_assertThisInitialized(_this), _value, _targetProp);

      _this.targetProp = _targetProp.toUpperCase();

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    return _createClass(SpecialValueType);
  }(BaseValue);

  function _validateAndSet2(value, targetProp) {
    var _value$, _value$$constructor, _value$2, _value$2$constructor;

    if (typeof value === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for SpecialValueType must be supplied");
    var valueRegExp = /^(?:individual|group|org|location|application|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;
    var valueCopy;

    var _tempValue;

    switch (true) {
      case /^KindProperty$/i.test(targetProp):
        if (typeof value !== "string" || !valueRegExp.test(value)) throw new InvalidArgument("Invalid value for SpecialValueType for KindProperty");
        this.value = value;
        this.valueXML = "<text>".concat(value, "</text>");
        this.valueJSON = [this.constructor.type.toLowerCase(), value];
        break;

      case /^NProperty$/i.test(targetProp):
        if (!Array.isArray(value) || value.length !== 5) throw new InvalidArgument("Invalid value for SpecialValueType for NProperty. It should be an array with a length of 5");

        for (var index = 0; index < value.length; index++) {
          if (value[index]) if (value[index].constructor.identifier !== "TextType" && value[index].constructor.identifier !== "TextListType") throw new TypeError("Invalid value for SpecialValueType for NProperty. The items in the array, if present, should be of type TextType or TextListType");
        }

        valueCopy = _toConsumableArray(value);

        for (var _index = 0; _index < valueCopy.length; _index++) {
          if (valueCopy[_index]) valueCopy[_index] = valueCopy[_index].repr();
        }

        this.value = valueCopy.join(";");
        this.valueXML = "";
        this.valueJSON = [];

        for (var _index2 = 0; _index2 < value.length; _index2++) {
          switch (_index2) {
            case 0:
              if (!value[_index2]) {
                this.valueXML += "<surname/>";
                this.valueJSON[_index2] = "";
              } else {
                this.valueXML += value[_index2].reprXML().replaceAll("text>", "surname>");
                _tempValue = value[_index2].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index2] = _tempValue;
                }
              }

              break;

            case 1:
              if (!value[_index2]) {
                this.valueXML += "<given/>";
                this.valueJSON[_index2] = "";
              } else {
                this.valueXML += value[_index2].reprXML().replaceAll("text>", "given>");
                _tempValue = value[_index2].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index2] = _tempValue;
                }
              }

              break;

            case 2:
              if (!value[_index2]) {
                this.valueXML += "<additional/>";
                this.valueJSON[_index2] = "";
              } else {
                this.valueXML += value[_index2].reprXML().replaceAll("text>", "additional>");
                _tempValue = value[_index2].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index2] = _tempValue;
                }
              }

              break;

            case 3:
              if (!value[_index2]) {
                this.valueXML += "<prefix/>";
                this.valueJSON[_index2] = "";
              } else {
                this.valueXML += value[_index2].reprXML().replaceAll("text>", "prefix>");
                _tempValue = value[_index2].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index2] = _tempValue;
                }
              }

              break;

            case 4:
              if (!value[_index2]) {
                this.valueXML += "<suffix/>";
                this.valueJSON[_index2] = "";
              } else {
                this.valueXML += value[_index2].reprXML().replaceAll("text>", "suffix>");
                _tempValue = value[_index2].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index2] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index2] = _tempValue;
                }
              }

          }
        }

        this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
        break;

      case /^GenderProperty$/i.test(targetProp):
        if (!Array.isArray(value) || value.length !== 2) throw new InvalidArgument("Invalid value for SpecialValueType for GenderProperty. It should be an array with a length of 2");else if (value[0] && value[0].constructor.identifier !== "SexType") throw new TypeError("Invalid value for SpecialValueType for GenderProperty. The first item in the array, if present, should be of type SexType");else if (!value[0] && !value[1] || value[1] && value[1].constructor.identifier !== "TextType") throw new TypeError("Invalid value for SpecialValueType for GenderProperty. The second item in the array, if present, should be of type TextType");
        this.value = value.reduce(function (accumulated, current) {
          return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
        }, "");
        this.valueXML = value.reduce(function (accumulated, current) {
          return accumulated + current.reprXML();
        }, "");
        this.valueJSON = value.reduce(function (accumulated, current) {
          accumulated.push(current.reprJSON().pop());
          return accumulated;
        }, []);
        if (this.valueJSON.length === 1) this.valueJSON.unshift(this.constructor.type.toLowerCase());else this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
        break;

      case /^AdrProperty$/i.test(targetProp):
        if (!Array.isArray(value) || value.length !== 7) throw new InvalidArgument("Invalid value for SpecialValueType for AdrProperty. It should be an array with a length of 7");

        for (var _index3 = 0; _index3 < value.length; _index3++) {
          if (value[_index3]) if (value[_index3].constructor.identifier !== "TextType") throw new TypeError("Invalid value for SpecialValueType for AdrProperty. The items in the array, if present, should be of type TextType");
        }

        valueCopy = _toConsumableArray(value);

        for (var _index4 = 0; _index4 < valueCopy.length; _index4++) {
          if (valueCopy[_index4]) valueCopy[_index4] = valueCopy[_index4].repr();
        }

        this.value = valueCopy.join(";");
        this.valueXML = "";
        this.valueJSON = [];

        for (var _index5 = 0; _index5 < value.length; _index5++) {
          switch (_index5) {
            case 0:
              if (!value[_index5]) {
                this.valueXML += "<pobox/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "pobox>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 1:
              if (!value[_index5]) {
                this.valueXML += "<ext/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "ext>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 2:
              if (!value[_index5]) {
                this.valueXML += "<street/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "street>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 3:
              if (!value[_index5]) {
                this.valueXML += "<locality/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "locality>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 4:
              if (!value[_index5]) {
                this.valueXML += "<region/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "region>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 5:
              if (!value[_index5]) {
                this.valueXML += "<code/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "code>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

              break;

            case 6:
              if (!value[_index5]) {
                this.valueXML += "<country/>";
                this.valueJSON[_index5] = "";
              } else {
                this.valueXML += value[_index5].reprXML().replaceAll("text>", "country>");
                _tempValue = value[_index5].reprJSON();
                if (_tempValue.length === 2) this.valueJSON[_index5] = _tempValue.pop();else {
                  _tempValue.shift();

                  this.valueJSON[_index5] = _tempValue;
                }
              }

          }
        }

        this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
        break;

      case /^OrgProperty$/i.test(targetProp):
        if (!Array.isArray(value) || !(value.length >= 1)) throw new InvalidArgument("Invalid value for SpecialValueType for OrgProperty. It should be an array with at least one item");

        for (var _index6 = 0; _index6 < value.length; _index6++) {
          var _value$_index, _value$_index$constru;

          if (((_value$_index = value[_index6]) === null || _value$_index === void 0 ? void 0 : (_value$_index$constru = _value$_index.constructor) === null || _value$_index$constru === void 0 ? void 0 : _value$_index$constru.identifier) !== "TextType") throw new TypeError("Invalid value for SpecialValueType for OrgProperty. The items in the array should be of type TextType");
        }

        this.value = value.reduce(function (accumulated, current) {
          return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
        }, "");
        this.valueXML = value.reduce(function (accumulated, current) {
          return accumulated + current.reprXML();
        }, "");
        this.valueJSON = value.reduce(function (accumulated, current) {
          accumulated.push(current.reprJSON().pop());
          return accumulated;
        }, []);
        if (this.valueJSON.length === 1) this.valueJSON.unshift(this.constructor.type.toLowerCase());else this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
        break;

      case /^ClientpidmapProperty$/i.test(targetProp):
        if (!Array.isArray(value) || value.length !== 2) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2");else if (((_value$ = value[0]) === null || _value$ === void 0 ? void 0 : (_value$$constructor = _value$.constructor) === null || _value$$constructor === void 0 ? void 0 : _value$$constructor.identifier) !== "IntegerType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType");else if (0 >= Number(value[0].repr())) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType. Zero is not allowed");else if (((_value$2 = value[1]) === null || _value$2 === void 0 ? void 0 : (_value$2$constructor = _value$2.constructor) === null || _value$2$constructor === void 0 ? void 0 : _value$2$constructor.identifier) !== "URIType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType");
        this.value = value.reduce(function (accumulated, current) {
          return accumulated ? "".concat(accumulated, ";").concat(current.repr()) : current.repr();
        }, "");
        this.valueXML = value.reduce(function (accumulated, current) {
          return accumulated + current.reprXML();
        }, "");
        this.valueJSON = ["unknown", value.reduce(function (accumulated, current) {
          accumulated.push(current.reprJSON().pop());
          return accumulated;
        }, [])];
        break;

      default:
        throw new InvalidArgument("Invalid target property for SpecialValueType");
    }
  }

  _defineProperty(SpecialValueType, "identifier", "SpecialValueType");

  _defineProperty(SpecialValueType, "type", "TEXT");

  Object.freeze(SpecialValueType);

  var _abstractPropertiesAndMethods$1 = /*#__PURE__*/new WeakMap();

  var BaseParameter = /*#__PURE__*/function () {
    function BaseParameter() {
      _classCallCheck(this, BaseParameter);

      _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods$1, {
        writable: true,
        value: ["param", "value", "valueXML", "valueJSON", "identifier"]
      });

      if (this.constructor === BaseParameter) throw new Error("Cannot create instance of base class");
    }

    _createClass(BaseParameter, [{
      key: "checkAbstractPropertiesAndMethods",
      value: function checkAbstractPropertiesAndMethods() {
        var _this = this;

        if (!_classPrivateFieldGet(this, _abstractPropertiesAndMethods$1).every(function (abstractPropertyOrMethod) {
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

  var _langTag = /*#__PURE__*/new WeakMap();

  var _validate$Z = /*#__PURE__*/new WeakSet();

  var LanguageParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(LanguageParameter, _BaseParameter);

    var _super = _createSuper(LanguageParameter);

    function LanguageParameter(_langTag2) {
      var _this;

      _classCallCheck(this, LanguageParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$Z);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _langTag, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$Z, _validate2$Z).call(_assertThisInitialized(_this), _langTag2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _langTag, _langTag2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LanguageParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _langTag).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _langTag).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _langTag).reprJSON();
      }
    }]);

    return LanguageParameter;
  }(BaseParameter);

  function _validate2$Z(langTag) {
    if (typeof langTag === "undefined") throw new MissingArgument("Language Tag for LanguageParameter must be supplied");else if (langTag.constructor.identifier !== "LanguageTagType") throw new TypeError("The value of the LANGUAGE property parameter should be of type LanguageTagType");
  }

  _defineProperty(LanguageParameter, "param", "LANGUAGE");

  _defineProperty(LanguageParameter, "identifier", "LanguageParameter");

  Object.freeze(LanguageParameter);

  var _valueType = /*#__PURE__*/new WeakMap();

  var _validate$Y = /*#__PURE__*/new WeakSet();

  var ValueParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(ValueParameter, _BaseParameter);

    var _super = _createSuper(ValueParameter);

    function ValueParameter(_valueType2) {
      var _this;

      _classCallCheck(this, ValueParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$Y);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _valueType, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$Y, _validate2$Y).call(_assertThisInitialized(_this), _valueType2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _valueType, _valueType2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ValueParameter, [{
      key: "value",
      get: function get() {
        var type = _classPrivateFieldGet(this, _valueType).type || _classPrivateFieldGet(this, _valueType).constructor.type;

        return type.toLowerCase();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "";
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [];
      }
    }]);

    return ValueParameter;
  }(BaseParameter);

  function _validate2$Y(valueType) {
    if (typeof valueType === "undefined") throw new MissingArgument("Value for ValueParameter must be supplied");
    if (!Object.prototype.hasOwnProperty.call(valueType, "type") && !Object.prototype.hasOwnProperty.call(valueType.constructor, "type")) throw new InvalidArgument("Value for ValueParameter not recognized");
  }

  _defineProperty(ValueParameter, "param", "VALUE");

  _defineProperty(ValueParameter, "identifier", "ValueParameter");

  Object.freeze(ValueParameter);

  var _prefValue = /*#__PURE__*/new WeakMap();

  var _validate$X = /*#__PURE__*/new WeakSet();

  var PrefParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(PrefParameter, _BaseParameter);

    var _super = _createSuper(PrefParameter);

    function PrefParameter(_prefValue2) {
      var _this;

      _classCallCheck(this, PrefParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$X);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _prefValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$X, _validate2$X).call(_assertThisInitialized(_this), _prefValue2);

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

  function _validate2$X(prefValue) {
    if (typeof prefValue === "undefined") throw new MissingArgument("Value for PrefParameter must be supplied");else if (prefValue.constructor.identifier !== "IntegerType") throw new TypeError("Value for PrefParameter should be of type IntegerType");else if (Number(prefValue.repr()) < 1 || Number(prefValue.repr()) > 100) throw new InvalidArgument("Value for PrefParameter must be between 1 and 100");
  }

  _defineProperty(PrefParameter, "param", "PREF");

  _defineProperty(PrefParameter, "identifier", "PrefParameter");

  Object.freeze(PrefParameter);

  var _altidValue = /*#__PURE__*/new WeakMap();

  var _validate$W = /*#__PURE__*/new WeakSet();

  var AltidParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(AltidParameter, _BaseParameter);

    var _super = _createSuper(AltidParameter);

    function AltidParameter(_altidValue2) {
      var _this;

      _classCallCheck(this, AltidParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$W);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _altidValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$W, _validate2$W).call(_assertThisInitialized(_this), _altidValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _altidValue, _altidValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(AltidParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _altidValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _altidValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _altidValue).reprJSON();
      }
    }]);

    return AltidParameter;
  }(BaseParameter);

  function _validate2$W(altidValue) {
    if (typeof altidValue === "undefined") throw new MissingArgument("Value for AltidParameter must be supplied");else if (altidValue.constructor.identifier !== "TextType") throw new InvalidArgument("Value for AltidParameter must be of type TextType");
  }

  _defineProperty(AltidParameter, "param", "ALTID");

  _defineProperty(AltidParameter, "identifier", "AltidParameter");

  Object.freeze(AltidParameter);

  var _pidValue = /*#__PURE__*/new WeakMap();

  var _pidRegExp = /*#__PURE__*/new WeakMap();

  var _validate$V = /*#__PURE__*/new WeakSet();

  var PIDParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(PIDParameter, _BaseParameter);

    var _super = _createSuper(PIDParameter);

    function PIDParameter(_pidValue2) {
      var _this;

      _classCallCheck(this, PIDParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$V);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pidValue, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _pidRegExp, {
        writable: true,
        value: /^\d+(?:\.\d+)?$/
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$V, _validate2$V).call(_assertThisInitialized(_this), _pidValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _pidValue, _pidValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PIDParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet(this, _pidValue)) ? "".concat(_classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
          if (Array.isArray(currentType)) {
            accumulatedTypes.push(currentType.reduce(function (accumType, currType) {
              accumType.push(currType.repr());
              return accumType;
            }, []).join("."));
          } else accumulatedTypes.push(currentType.repr());

          return accumulatedTypes;
        }, []).join(",")) : _classPrivateFieldGet(this, _pidValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        var xml = Array.isArray(_classPrivateFieldGet(this, _pidValue)) ? "".concat(_classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
          if (Array.isArray(currentType)) {
            accumulatedTypes.push("<integer>" + currentType.reduce(function (accumType, currType) {
              accumType.push(currType.repr());
              return accumType;
            }, []).join(".") + "</integer>");
          } else accumulatedTypes.push(currentType.reprXML());

          return accumulatedTypes;
        }, []).join("")) : _classPrivateFieldGet(this, _pidValue).reprXML();
        return xml.replaceAll("integer", "text");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        if (Array.isArray(_classPrivateFieldGet(this, _pidValue))) {
          var json = _classPrivateFieldGet(this, _pidValue).reduce(function (accumulatedTypes, currentType) {
            if (Array.isArray(currentType)) {
              accumulatedTypes.push(currentType.reduce(function (accumType, currType) {
                accumType.push(currType.repr());
                return accumType;
              }, []).join("."));
            } else accumulatedTypes.push(currentType.repr());

            return accumulatedTypes;
          }, []);

          json.unshift("integer");
          return json;
        }

        return _classPrivateFieldGet(this, _pidValue).reprJSON();
      }
    }]);

    return PIDParameter;
  }(BaseParameter);

  function _validate2$V(pidValue) {
    if (typeof pidValue === "undefined") throw new MissingArgument("Value for PIDParameter must be supplied");else if (!Array.isArray(pidValue) && pidValue.constructor.identifier !== "IntegerType") throw new InvalidArgument("Invalid value for PIDParameter");else if (Array.isArray(pidValue) && !pidValue.every(function (val1) {
      if (Array.isArray(val1)) return val1.every(function (val2) {
        return val2.constructor.identifier === "IntegerType";
      });
      return val1.constructor.identifier === "IntegerType";
    })) throw new InvalidArgument("Invalid value for PIDParameter");
  }

  _defineProperty(PIDParameter, "param", "PID");

  _defineProperty(PIDParameter, "identifier", "PIDParameter");

  Object.freeze(PIDParameter);

  var _typeValue = /*#__PURE__*/new WeakMap();

  var _typeRegExp = /*#__PURE__*/new WeakMap();

  var _telTypeRegExp = /*#__PURE__*/new WeakMap();

  var _relatedTypeRegExp = /*#__PURE__*/new WeakMap();

  var _validate$U = /*#__PURE__*/new WeakSet();

  var TypeParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(TypeParameter, _BaseParameter);

    var _super = _createSuper(TypeParameter);

    function TypeParameter(_typeValue2, _targetProp) {
      var _this;

      _classCallCheck(this, TypeParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$U);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _typeValue, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _typeRegExp, {
        writable: true,
        value: /^(?:work|home|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _telTypeRegExp, {
        writable: true,
        value: /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _relatedTypeRegExp, {
        writable: true,
        value: /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$U, _validate2$U).call(_assertThisInitialized(_this), _typeValue2, _targetProp);

      _classPrivateFieldSet(_assertThisInitialized(_this), _typeValue, _typeValue2);

      _this.targetProp = _targetProp.toUpperCase();

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TypeParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _typeValue).constructor.identifier === "TextListType" ? "\"".concat(_classPrivateFieldGet(this, _typeValue).repr(), "\"") : _classPrivateFieldGet(this, _typeValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _typeValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _typeValue).reprJSON();
      }
    }]);

    return TypeParameter;
  }(BaseParameter);

  function _validate2$U(typeValue, targetProp) {
    var _this2 = this;

    if (typeof typeValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for TypeParameter must be supplied");else if (typeValue.constructor.identifier !== "TextType" && typeValue.constructor.identifier !== "TextListType") throw new TypeError("Value for TypeParameter must be of type TextType or TextListType");
    var telre = new RegExp("(?:".concat(_classPrivateFieldGet(this, _telTypeRegExp).source, "|").concat(_classPrivateFieldGet(this, _typeRegExp).source, ")"), "i");
    var relatedre = new RegExp("(?:".concat(_classPrivateFieldGet(this, _relatedTypeRegExp).source, "|").concat(_classPrivateFieldGet(this, _typeRegExp).source, ")"), "i");

    switch (true) {
      case /^TelProperty$/i.test(targetProp):
        if (!telre.test(typeValue.repr()) && !typeValue.repr().split(",").every(function (type) {
          return telre.test(type);
        })) throw new InvalidArgument("Invalid value for TypeParameter for TelProperty");
        break;

      case /^RelatedProperty$/i.test(targetProp):
        if (!relatedre.test(typeValue.repr()) && !typeValue.repr().split(",").every(function (type) {
          return relatedre.test(type);
        })) throw new InvalidArgument("Invalid value for TypeParameter for RelatedProperty");
        break;

      default:
        if (!_classPrivateFieldGet(this, _typeRegExp).test(typeValue.repr()) && !typeValue.repr().split(",").every(function (type) {
          return _classPrivateFieldGet(_this2, _typeRegExp).test(type);
        })) throw new InvalidArgument("Invalid value for TypeParameter");
    }
  }

  _defineProperty(TypeParameter, "param", "TYPE");

  _defineProperty(TypeParameter, "identifier", "TypeParameter");

  Object.freeze(TypeParameter);

  var _mediaTypeRegExp = /*#__PURE__*/new WeakMap();

  var _attributeRegExp = /*#__PURE__*/new WeakMap();

  var _mediaValue = /*#__PURE__*/new WeakMap();

  var _validate$T = /*#__PURE__*/new WeakSet();

  var MediatypeParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(MediatypeParameter, _BaseParameter);

    var _super = _createSuper(MediatypeParameter);

    function MediatypeParameter(_mediaValue2) {
      var _this;

      _classCallCheck(this, MediatypeParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$T);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _mediaTypeRegExp, {
        writable: true,
        value: /^(?:[A-Za-z0-9!#\$&\.\+\-\^_]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^_]){1,127}$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _attributeRegExp, {
        writable: true,
        value: /^[A-Za-z0-9!#\$&\.\+\-\^_]+=[A-Za-z0-9!#\$&\.\+\-\^_]+$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _mediaValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$T, _validate2$T).call(_assertThisInitialized(_this), _mediaValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _mediaValue, _mediaValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MediatypeParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet(this, _mediaValue)) ? "\"".concat(_classPrivateFieldGet(this, _mediaValue).reduce(function (accumulated, current) {
          accumulated.push(current.repr());
          return accumulated;
        }, []).join(";"), "\"") : _classPrivateFieldGet(this, _mediaValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet(this, _mediaValue)) ? "<text>" + _classPrivateFieldGet(this, _mediaValue).reduce(function (accumulated, current) {
          accumulated.push(current.reprXML());
          return accumulated;
        }, []).join(";").replace(/<\/?text>/g, "") + "</text>" : _classPrivateFieldGet(this, _mediaValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        if (Array.isArray(_classPrivateFieldGet(this, _mediaValue))) return ["text", _classPrivateFieldGet(this, _mediaValue).reduce(function (accumulated, current) {
          accumulated.push(current.repr());
          return accumulated;
        }, []).join(";")];
        return _classPrivateFieldGet(this, _mediaValue).reprJSON();
      }
    }]);

    return MediatypeParameter;
  }(BaseParameter);

  function _validate2$T(mediaValue) {
    if (typeof mediaValue === "undefined") throw new MissingArgument("Value for MediatypeParameter must be supplied");else if (mediaValue.constructor.identifier !== "TextType" && Array.isArray(mediaValue) && !mediaValue.every(function (val) {
      return val.constructor.identifier === "TextType";
    })) throw new TypeError("Value for MediatypeParameter must be of TextType or an array of TextTypes");else if (!Array.isArray(mediaValue) && !_classPrivateFieldGet(this, _mediaTypeRegExp).test(mediaValue.repr())) throw new InvalidArgument("Invalid media type");else if (Array.isArray(mediaValue)) {
      if (mediaValue.length !== 2) throw new InvalidArgument("Invalid value for MediatypeParameter. It should be an array with a length of 2");else if (!_classPrivateFieldGet(this, _mediaTypeRegExp).test(mediaValue[0].repr())) throw new InvalidArgument("Invalid media type");else if (!_classPrivateFieldGet(this, _attributeRegExp).test(mediaValue[1].repr())) throw new InvalidArgument("Invalid media type");
    }
  }

  _defineProperty(MediatypeParameter, "param", "MEDIATYPE");

  _defineProperty(MediatypeParameter, "identifier", "MediatypeParameter");

  Object.freeze(MediatypeParameter);

  var _calscaleValue = /*#__PURE__*/new WeakMap();

  var _calscaleRegExp = /*#__PURE__*/new WeakMap();

  var _validate$S = /*#__PURE__*/new WeakSet();

  var CalscaleParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(CalscaleParameter, _BaseParameter);

    var _super = _createSuper(CalscaleParameter);

    function CalscaleParameter(_calscaleValue2) {
      var _this;

      _classCallCheck(this, CalscaleParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$S);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _calscaleValue, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _calscaleRegExp, {
        writable: true,
        value: /^(?:gregorian|x-[A-Za-z0-9]+)$/
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$S, _validate2$S).call(_assertThisInitialized(_this), _calscaleValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _calscaleValue, _calscaleValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CalscaleParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _calscaleValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _calscaleValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _calscaleValue).reprJSON();
      }
    }]);

    return CalscaleParameter;
  }(BaseParameter);

  function _validate2$S(calscaleValue) {
    if (typeof calscaleValue === "undefined") throw new MissingArgument("Value for CalscaleParameter must be supplied");else if (calscaleValue.constructor.identifier !== "TextType") throw new MissingArgument("Value for CalscaleParameter must of type TextType");else if (!_classPrivateFieldGet(this, _calscaleRegExp).test(calscaleValue.repr())) throw new InvalidArgument("Invalid calscale value");
  }

  _defineProperty(CalscaleParameter, "param", "CALSCALE");

  _defineProperty(CalscaleParameter, "identifier", "CalscaleParameter");

  Object.freeze(CalscaleParameter);

  var _sortValue = /*#__PURE__*/new WeakMap();

  var _validate$R = /*#__PURE__*/new WeakSet();

  var SortAsParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(SortAsParameter, _BaseParameter);

    var _super = _createSuper(SortAsParameter);

    function SortAsParameter(_sortValue2) {
      var _this;

      _classCallCheck(this, SortAsParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$R);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sortValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$R, _validate2$R).call(_assertThisInitialized(_this), _sortValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _sortValue, _sortValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SortAsParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _sortValue).constructor.identifier === "TextListType" ? "\"".concat(_classPrivateFieldGet(this, _sortValue).repr(), "\"") : _classPrivateFieldGet(this, _sortValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _sortValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _sortValue).reprJSON();
      }
    }]);

    return SortAsParameter;
  }(BaseParameter);

  function _validate2$R(sortValue) {
    if (typeof sortValue === "undefined") throw new MissingArgument("Value for SortAsParameter must be supplied");else if (sortValue.constructor.identifier !== "TextType" && sortValue.constructor.identifier !== "TextListType") throw new TypeError("Value for SortAsParameter must be of type TextType or TextListType");
  }

  _defineProperty(SortAsParameter, "param", "SORT-AS");

  _defineProperty(SortAsParameter, "identifier", "SortAsParameter");

  Object.freeze(SortAsParameter);

  var _geoValue = /*#__PURE__*/new WeakMap();

  var _validate$Q = /*#__PURE__*/new WeakSet();

  var GeoParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(GeoParameter, _BaseParameter);

    var _super = _createSuper(GeoParameter);

    function GeoParameter(_geoValue2) {
      var _this;

      _classCallCheck(this, GeoParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$Q);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _geoValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$Q, _validate2$Q).call(_assertThisInitialized(_this), _geoValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _geoValue, _geoValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(GeoParameter, [{
      key: "value",
      get: function get() {
        return "\"".concat(_classPrivateFieldGet(this, _geoValue).repr(), "\"");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _geoValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _geoValue).reprJSON();
      }
    }]);

    return GeoParameter;
  }(BaseParameter);

  function _validate2$Q(geoValue) {
    if (typeof geoValue === "undefined") throw new MissingArgument("Value for GeoParameter must be supplied");else if (geoValue.constructor.identifier !== "URIType") throw new TypeError("Value for GeoParameter must be of type URIType");
  }

  _defineProperty(GeoParameter, "param", "GEO");

  _defineProperty(GeoParameter, "identifier", "GeoParameter");

  Object.freeze(GeoParameter);

  var _tzValue = /*#__PURE__*/new WeakMap();

  var _validate$P = /*#__PURE__*/new WeakSet();

  var TzParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(TzParameter, _BaseParameter);

    var _super = _createSuper(TzParameter);

    function TzParameter(_tzValue2) {
      var _this;

      _classCallCheck(this, TzParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$P);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _tzValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$P, _validate2$P).call(_assertThisInitialized(_this), _tzValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _tzValue, _tzValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TzParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _tzValue).constructor.identifier === "URIType" ? "\"".concat(_classPrivateFieldGet(this, _tzValue).repr(), "\"") : _classPrivateFieldGet(this, _tzValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _tzValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _tzValue).reprJSON();
      }
    }]);

    return TzParameter;
  }(BaseParameter);

  function _validate2$P(tzValue) {
    if (typeof tzValue === "undefined") throw new MissingArgument("Value for TzParameter must be supplied");
    if (tzValue.constructor.identifier !== "TextType" && tzValue.constructor.identifier !== "URIType" && !(tzValue.constructor.identifier === "DateTimeType" && tzValue.type === "UTC-OFFSET")) throw new TypeError("Invalid type for value for TzParameter");
  }

  _defineProperty(TzParameter, "param", "TZ");

  _defineProperty(TzParameter, "identifier", "TzParameter");

  Object.freeze(TzParameter);

  var _value$I = /*#__PURE__*/new WeakMap();

  var _param = /*#__PURE__*/new WeakMap();

  var _paramRegExp = /*#__PURE__*/new WeakMap();

  var _valueRegExp = /*#__PURE__*/new WeakMap();

  var _cleanUp$1 = /*#__PURE__*/new WeakSet();

  var _validate$O = /*#__PURE__*/new WeakSet();

  var AnyParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(AnyParameter, _BaseParameter);

    var _super = _createSuper(AnyParameter);

    function AnyParameter(_param2, _value2) {
      var _this;

      _classCallCheck(this, AnyParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$O);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp$1);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$I, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _param, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _paramRegExp, {
        writable: true,
        value: /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _valueRegExp, {
        writable: true,
        value: /^(?:Boolean|DateTime(?:List)?|Float(?:List)?|Integer(?:List)?|LanguageTag|Sex|SpecialValue|Text(?:List)?|URI)Type$/
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$O, _validate2$O).call(_assertThisInitialized(_this), _param2, _value2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _param, _param2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$I, _value2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(AnyParameter, [{
      key: "param",
      get: function get() {
        return "".concat(_classPrivateFieldGet(this, _param));
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateMethodGet(this, _cleanUp$1, _cleanUp2$1).call(this, _classPrivateFieldGet(this, _value$I).repr());
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$I).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$I).reprJSON();
      }
    }]);

    return AnyParameter;
  }(BaseParameter);

  function _cleanUp2$1(value) {
    return value.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
  }

  function _validate2$O(param, value) {
    var _value$constructor;

    if (typeof param === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameter name and value for AnyParameter must be supplied");else if (!_classPrivateFieldGet(this, _paramRegExp).test(param)) throw new InvalidArgument("Invalid parameter name for AnyParameter");else if (!_classPrivateFieldGet(this, _valueRegExp).test(value === null || value === void 0 ? void 0 : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.identifier)) throw new InvalidArgument("Invalid value for AnyParameter");
  }

  _defineProperty(AnyParameter, "identifier", "AnyParameter");

  Object.freeze(AnyParameter);

  var _labelValue = /*#__PURE__*/new WeakMap();

  var _validate$N = /*#__PURE__*/new WeakSet();

  var _cleanUp = /*#__PURE__*/new WeakSet();

  var LabelParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(LabelParameter, _BaseParameter);

    var _super = _createSuper(LabelParameter);

    function LabelParameter(_labelValue2) {
      var _this;

      _classCallCheck(this, LabelParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$N);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _labelValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$N, _validate2$N).call(_assertThisInitialized(_this), _labelValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _labelValue, _labelValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LabelParameter, [{
      key: "value",
      get: function get() {
        return "\"".concat(_classPrivateMethodGet(this, _cleanUp, _cleanUp2).call(this, _classPrivateFieldGet(this, _labelValue)._unsafe_raw_value), "\"");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _labelValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return ["text", _classPrivateFieldGet(this, _labelValue)._unsafe_raw_value];
      }
    }]);

    return LabelParameter;
  }(BaseParameter);

  function _validate2$N(labelValue) {
    if (typeof labelValue === "undefined") throw new MissingArgument("Value for LabelParameter must be supplied");else if (labelValue.constructor.identifier !== "TextType") throw new TypeError("Value for LabelParameter should be of type TextType");
  }

  function _cleanUp2(labelValue) {
    return labelValue.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
  }

  _defineProperty(LabelParameter, "param", "LABEL");

  _defineProperty(LabelParameter, "identifier", "LabelParameter");

  Object.freeze(LabelParameter);

  var _ccValue = /*#__PURE__*/new WeakMap();

  var _validate$M = /*#__PURE__*/new WeakSet();

  var CCParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(CCParameter, _BaseParameter);

    var _super = _createSuper(CCParameter);

    function CCParameter(_ccValue2) {
      var _this;

      _classCallCheck(this, CCParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$M);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _ccValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$M, _validate2$M).call(_assertThisInitialized(_this), _ccValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _ccValue, _ccValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CCParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _ccValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _ccValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _ccValue).reprJSON();
      }
    }]);

    return CCParameter;
  }(BaseParameter);

  function _validate2$M(ccValue) {
    if (typeof ccValue === "undefined") throw new MissingArgument("Value for CCParameter must be supplied");else if (ccValue.constructor.identifier !== "TextType" || !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())) throw new InvalidArgument("Invalid value for CCParameter");
  }

  _defineProperty(CCParameter, "param", "CC");

  _defineProperty(CCParameter, "identifier", "CCParameter");

  Object.freeze(CCParameter);

  var _indexValue = /*#__PURE__*/new WeakMap();

  var _validate$L = /*#__PURE__*/new WeakSet();

  var IndexParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(IndexParameter, _BaseParameter);

    var _super = _createSuper(IndexParameter);

    function IndexParameter(_indexValue2) {
      var _this;

      _classCallCheck(this, IndexParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$L);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indexValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$L, _validate2$L).call(_assertThisInitialized(_this), _indexValue2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _indexValue, _indexValue2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(IndexParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _indexValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _indexValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _indexValue).reprJSON();
      }
    }]);

    return IndexParameter;
  }(BaseParameter);

  function _validate2$L(indexValue) {
    if (typeof indexValue === "undefined") throw new MissingArgument("Value for IndexParameter must be supplied");else if (indexValue.constructor.identifier !== "IntegerType" || !(Number(indexValue.repr()) > 0)) throw new InvalidArgument("Invalid value for IndexParameter. Must be a positive integer");
  }

  _defineProperty(IndexParameter, "param", "INDEX");

  _defineProperty(IndexParameter, "identifier", "IndexParameter");

  Object.freeze(IndexParameter);

  var _expertiseRegExp = /*#__PURE__*/new WeakMap();

  var _hobbyInterestRegExp = /*#__PURE__*/new WeakMap();

  var _levelValue = /*#__PURE__*/new WeakMap();

  var _validate$K = /*#__PURE__*/new WeakSet();

  var LevelParameter = /*#__PURE__*/function (_BaseParameter) {
    _inherits(LevelParameter, _BaseParameter);

    var _super = _createSuper(LevelParameter);

    function LevelParameter(_levelValue2, _targetProp) {
      var _this;

      _classCallCheck(this, LevelParameter);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$K);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _expertiseRegExp, {
        writable: true,
        value: /^(?:beginner|average|expert)$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _hobbyInterestRegExp, {
        writable: true,
        value: /^(?:high|medium|low)$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _levelValue, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$K, _validate2$K).call(_assertThisInitialized(_this), _levelValue2, _targetProp);

      _classPrivateFieldSet(_assertThisInitialized(_this), _levelValue, _levelValue2);

      _this.targetProp = _targetProp.toUpperCase();

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LevelParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _levelValue).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _levelValue).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _levelValue).reprJSON();
      }
    }]);

    return LevelParameter;
  }(BaseParameter);

  function _validate2$K(levelValue, targetProp) {
    if (typeof levelValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for LevelParameter must be supplied");else if (levelValue.constructor.identifier !== "TextType") throw new InvalidArgument("Invalid value for LevelParameter");

    switch (true) {
      case /^expertiseProperty$/i.test(targetProp) && _classPrivateFieldGet(this, _expertiseRegExp).test(levelValue.repr()):
        break;

      case /^(?:hobby|interest)Property$/i.test(targetProp) && _classPrivateFieldGet(this, _hobbyInterestRegExp).test(levelValue.repr()):
        break;

      default:
        throw new InvalidArgument("Invalid value for LevelParameter");
    }
  }

  _defineProperty(LevelParameter, "param", "LEVEL");

  _defineProperty(LevelParameter, "identifier", "LevelParameter");

  Object.freeze(LevelParameter);

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

  var _params$H = /*#__PURE__*/new WeakMap();

  var _value$H = /*#__PURE__*/new WeakMap();

  var _validate$J = /*#__PURE__*/new WeakSet();

  var SourceProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(SourceProperty, _BaseProperty);

    var _super = _createSuper(SourceProperty);

    function SourceProperty(_params2, val) {
      var _this;

      _classCallCheck(this, SourceProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$J);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$H, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$H, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$J, _validate2$J).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$H, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$H, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SourceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$H).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$H).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$H).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$H).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$H).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$H).reprJSON();
      }
    }]);

    return SourceProperty;
  }(BaseProperty);

  function _validate2$J(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for SourceProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for SourceProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for SourceProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of SourceProperty");
  }

  _defineProperty(SourceProperty, "identifier", "SourceProperty");

  _defineProperty(SourceProperty, "prop", "SOURCE");

  _defineProperty(SourceProperty, "cardinality", "*");

  _defineProperty(SourceProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "MediatypeParameter", "AnyParameter"]));

  _defineProperty(SourceProperty, "acceptableValTypes", "URIType");

  Object.freeze(SourceProperty);

  var _params$G = /*#__PURE__*/new WeakMap();

  var _value$G = /*#__PURE__*/new WeakMap();

  var _validate$I = /*#__PURE__*/new WeakSet();

  var KindProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(KindProperty, _BaseProperty);

    var _super = _createSuper(KindProperty);

    function KindProperty(_params2, val) {
      var _this;

      _classCallCheck(this, KindProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$I);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$G, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$G, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$I, _validate2$I).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$G, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$G, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(KindProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$G).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$G).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$G).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$G).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$G).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$G).reprJSON();
      }
    }]);

    return KindProperty;
  }(BaseProperty);

  function _validate2$I(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for KindProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for KindProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for KindProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || !/^KindProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of KindProperty");
  }

  _defineProperty(KindProperty, "identifier", "KindProperty");

  _defineProperty(KindProperty, "prop", "KIND");

  _defineProperty(KindProperty, "cardinality", "*1");

  _defineProperty(KindProperty, "acceptableParamTypes", new Set(["ValueParameter", "AnyParameter"]));

  _defineProperty(KindProperty, "acceptableValTypes", "SpecialValueType");

  Object.freeze(KindProperty);

  var _params$F = /*#__PURE__*/new WeakMap();

  var _value$F = /*#__PURE__*/new WeakMap();

  var _validate$H = /*#__PURE__*/new WeakSet();

  var XMLProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(XMLProperty, _BaseProperty);

    var _super = _createSuper(XMLProperty);

    function XMLProperty(_params2, val) {
      var _this;

      _classCallCheck(this, XMLProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$H);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$F, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$F, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$H, _validate2$H).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$F, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$F, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(XMLProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$F).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$F).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$F).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$F).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$F)._unsafe_raw_value;
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$F).reprJSON();
      }
    }]);

    return XMLProperty;
  }(BaseProperty);

  function _validate2$H(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for XMLProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for XMLProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for XMLProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of XMLProperty");else if (!/xmlns=".+?"/.test(value._unsafe_raw_value)) throw new InvalidArgument("The XML element namespace must be explicitly specified using the xmlns attribute");else if (/xmlns="urn:ietf:params:xml:ns:vcard-4.0"/.test(value._unsafe_raw_value)) throw new InvalidArgument("The XML element namespace must not be the vCard 4 namespace");
  }

  _defineProperty(XMLProperty, "identifier", "XMLProperty");

  _defineProperty(XMLProperty, "prop", "XML");

  _defineProperty(XMLProperty, "cardinality", "*");

  _defineProperty(XMLProperty, "acceptableParamTypes", new Set(["ValueParameter", "AltidParameter"]));

  _defineProperty(XMLProperty, "acceptableValTypes", "TextType");

  Object.freeze(XMLProperty);

  var _params$E = /*#__PURE__*/new WeakMap();

  var _value$E = /*#__PURE__*/new WeakMap();

  var _validate$G = /*#__PURE__*/new WeakSet();

  var FNProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(FNProperty, _BaseProperty);

    var _super = _createSuper(FNProperty);

    function FNProperty(_params2, val) {
      var _this;

      _classCallCheck(this, FNProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$G);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$E, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$E, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$G, _validate2$G).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$E, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$E, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(FNProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$E).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$E).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$E).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$E).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$E).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$E).reprJSON();
      }
    }]);

    return FNProperty;
  }(BaseProperty);

  function _validate2$G(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for FNProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for FNProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for FNProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of FNProperty");
  }

  _defineProperty(FNProperty, "identifier", "FNProperty");

  _defineProperty(FNProperty, "prop", "FN");

  _defineProperty(FNProperty, "cardinality", "1*");

  _defineProperty(FNProperty, "acceptableParamTypes", new Set(["ValueParameter", "TypeParameter", "LanguageParameter", "AltidParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AnyParameter"]));

  _defineProperty(FNProperty, "acceptableValTypes", "TextType");

  Object.freeze(FNProperty);

  var _params$D = /*#__PURE__*/new WeakMap();

  var _value$D = /*#__PURE__*/new WeakMap();

  var _validate$F = /*#__PURE__*/new WeakSet();

  var NProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(NProperty, _BaseProperty);

    var _super = _createSuper(NProperty);

    function NProperty(_params2, val) {
      var _this;

      _classCallCheck(this, NProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$F);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$D, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$D, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$F, _validate2$F).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$D, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$D, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(NProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$D).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$D).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$D).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$D).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$D).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$D).reprJSON();
      }
    }]);

    return NProperty;
  }(BaseProperty);

  function _validate2$F(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for NProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for NProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for NProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || !/^NProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of NProperty");
  }

  _defineProperty(NProperty, "identifier", "NProperty");

  _defineProperty(NProperty, "prop", "N");

  _defineProperty(NProperty, "cardinality", "*1");

  _defineProperty(NProperty, "acceptableParamTypes", new Set(["ValueParameter", "SortAsParameter", "LanguageParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(NProperty, "acceptableValTypes", "SpecialValueType");

  Object.freeze(NProperty);

  var _params$C = /*#__PURE__*/new WeakMap();

  var _value$C = /*#__PURE__*/new WeakMap();

  var _validate$E = /*#__PURE__*/new WeakSet();

  var NicknameProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(NicknameProperty, _BaseProperty);

    var _super = _createSuper(NicknameProperty);

    function NicknameProperty(_params2, val) {
      var _this;

      _classCallCheck(this, NicknameProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$E);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$C, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$C, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$E, _validate2$E).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$C, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$C, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(NicknameProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$C).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$C).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$C).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$C).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$C).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$C).reprJSON();
      }
    }]);

    return NicknameProperty;
  }(BaseProperty);

  function _validate2$E(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for NicknameProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for NicknameProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for NicknameProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of NicknameProperty");
  }

  _defineProperty(NicknameProperty, "identifier", "NicknameProperty");

  _defineProperty(NicknameProperty, "prop", "NICKNAME");

  _defineProperty(NicknameProperty, "cardinality", "*");

  _defineProperty(NicknameProperty, "acceptableParamTypes", new Set(["ValueParameter", "TypeParameter", "LanguageParameter", "AltidParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AnyParameter"]));

  _defineProperty(NicknameProperty, "acceptableValTypes", new Set(["TextType", "TextListType"]));

  Object.freeze(NicknameProperty);

  var _params$B = /*#__PURE__*/new WeakMap();

  var _value$B = /*#__PURE__*/new WeakMap();

  var _validate$D = /*#__PURE__*/new WeakSet();

  var PhotoProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(PhotoProperty, _BaseProperty);

    var _super = _createSuper(PhotoProperty);

    function PhotoProperty(_params2, val) {
      var _this;

      _classCallCheck(this, PhotoProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$D);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$B, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$B, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$D, _validate2$D).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$B, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$B, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PhotoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$B).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$B).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$B).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$B).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$B).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$B).reprJSON();
      }
    }]);

    return PhotoProperty;
  }(BaseProperty);

  function _validate2$D(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for PhotoProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for PhotoProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for PhotoProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of PhotoProperty");
  }

  _defineProperty(PhotoProperty, "identifier", "PhotoProperty");

  _defineProperty(PhotoProperty, "prop", "PHOTO");

  _defineProperty(PhotoProperty, "cardinality", "*");

  _defineProperty(PhotoProperty, "acceptableParamTypes", new Set(["ValueParameter", "AltidParameter", "TypeParameter", "MediatypeParameter", "PrefParameter", "IndexParameter", "PIDParameter", "AnyParameter"]));

  _defineProperty(PhotoProperty, "acceptableValTypes", "URIType");

  Object.freeze(PhotoProperty);

  var _params$A = /*#__PURE__*/new WeakMap();

  var _value$A = /*#__PURE__*/new WeakMap();

  var _validate$C = /*#__PURE__*/new WeakSet();

  var BdayProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(BdayProperty, _BaseProperty);

    var _super = _createSuper(BdayProperty);

    function BdayProperty(_params2, val) {
      var _this;

      _classCallCheck(this, BdayProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$C);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$A, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$A, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$C, _validate2$C).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$A, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$A, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(BdayProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$A).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$A).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$A).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$A).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$A).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$A).reprJSON();
      }
    }]);

    return BdayProperty;
  }(BaseProperty);

  function _validate2$C(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for BdayProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for BdayProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "date-and-or-time" && value.constructor.identifier === "DateTimeType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "LanguageParameter") return value.constructor.identifier === "TextType";else if (param.constructor.identifier === "CalscaleParameter") return value.constructor.identifier === "DateTimeType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for BdayProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier) || value.constructor.identifier === "DateTimeType" && value.type !== "DATE-AND-OR-TIME") throw new TypeError("Invalid type for value of BdayProperty");
  }

  _defineProperty(BdayProperty, "identifier", "BdayProperty");

  _defineProperty(BdayProperty, "prop", "BDAY");

  _defineProperty(BdayProperty, "cardinality", "*1");

  _defineProperty(BdayProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "AltidParameter", "CalscaleParameter", "AnyParameter"]));

  _defineProperty(BdayProperty, "acceptableValTypes", new Set(["DateTimeType", "TextType"]));

  Object.freeze(BdayProperty);

  var _params$z = /*#__PURE__*/new WeakMap();

  var _value$z = /*#__PURE__*/new WeakMap();

  var _validate$B = /*#__PURE__*/new WeakSet();

  var AnniversaryProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(AnniversaryProperty, _BaseProperty);

    var _super = _createSuper(AnniversaryProperty);

    function AnniversaryProperty(_params2, val) {
      var _this;

      _classCallCheck(this, AnniversaryProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$B);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$z, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$z, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$B, _validate2$B).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$z, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$z, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(AnniversaryProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$z).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$z).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$z).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$z).reprJSON();
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$z).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$z).reprXML();
      }
    }]);

    return AnniversaryProperty;
  }(BaseProperty);

  function _validate2$B(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for AnniversaryProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for AnniversaryProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "date-and-or-time" && value.constructor.identifier === "DateTimeType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "LanguageParameter") return value.constructor.identifier === "TextType";else if (param.constructor.identifier === "CalscaleParameter") return value.constructor.identifier === "DateTimeType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for AnniversaryProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier) || value.constructor.identifier === "DateTimeType" && value.type !== "DATE-AND-OR-TIME") throw new TypeError("Invalid type for value of AnniversaryProperty");
  }

  _defineProperty(AnniversaryProperty, "identifier", "AnniversaryProperty");

  _defineProperty(AnniversaryProperty, "prop", "ANNIVERSARY");

  _defineProperty(AnniversaryProperty, "cardinality", "*1");

  _defineProperty(AnniversaryProperty, "acceptableParamTypes", new Set(["ValueParameter", "AltidParameter", "CalscaleParameter", "AnyParameter"]));

  _defineProperty(AnniversaryProperty, "acceptableValTypes", new Set(["DateTimeType", "TextType"]));

  Object.freeze(AnniversaryProperty);

  var _params$y = /*#__PURE__*/new WeakMap();

  var _value$y = /*#__PURE__*/new WeakMap();

  var _validate$A = /*#__PURE__*/new WeakSet();

  var GenderProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(GenderProperty, _BaseProperty);

    var _super = _createSuper(GenderProperty);

    function GenderProperty(_params2, val) {
      var _this;

      _classCallCheck(this, GenderProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$A);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$y, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$y, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$A, _validate2$A).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$y, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$y, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(GenderProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$y).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$y).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$y).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$y).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$y).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$y).reprJSON();
      }
    }]);

    return GenderProperty;
  }(BaseProperty);

  function _validate2$A(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for GenderProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for GenderProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for GenderProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier) || value.constructor.identifier === "SpecialValueType" && !/^GenderProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of GenderProperty");
  }

  _defineProperty(GenderProperty, "identifier", "GenderProperty");

  _defineProperty(GenderProperty, "prop", "GENDER");

  _defineProperty(GenderProperty, "cardinality", "*1");

  _defineProperty(GenderProperty, "acceptableParamTypes", new Set(["ValueParameter", "AnyParameter"]));

  _defineProperty(GenderProperty, "acceptableValTypes", new Set(["SexType", "SpecialValueType"]));

  Object.freeze(GenderProperty);

  var _params$x = /*#__PURE__*/new WeakMap();

  var _value$x = /*#__PURE__*/new WeakMap();

  var _validate$z = /*#__PURE__*/new WeakSet();

  var BirthPlaceProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(BirthPlaceProperty, _BaseProperty);

    var _super = _createSuper(BirthPlaceProperty);

    function BirthPlaceProperty(_params2, val) {
      var _this;

      _classCallCheck(this, BirthPlaceProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$z);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$x, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$x, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$z, _validate2$z).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$x, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$x, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(BirthPlaceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$x).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$x).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$x).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$x).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$x).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$x).reprJSON();
      }
    }]);

    return BirthPlaceProperty;
  }(BaseProperty);

  function _validate2$z(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for BirthPlaceProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for BirthPlaceProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "LanguageParameter") return value.constructor.identifier === "TextType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for BirthPlaceProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of BirthPlaceProperty");
  }

  _defineProperty(BirthPlaceProperty, "identifier", "BirthPlaceProperty");

  _defineProperty(BirthPlaceProperty, "prop", "BIRTHPLACE");

  _defineProperty(BirthPlaceProperty, "cardinality", "*1");

  _defineProperty(BirthPlaceProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(BirthPlaceProperty, "acceptableValTypes", new Set(["TextType", "URIType"]));

  Object.freeze(BirthPlaceProperty);

  var _params$w = /*#__PURE__*/new WeakMap();

  var _value$w = /*#__PURE__*/new WeakMap();

  var _validate$y = /*#__PURE__*/new WeakSet();

  var DeathPlaceProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(DeathPlaceProperty, _BaseProperty);

    var _super = _createSuper(DeathPlaceProperty);

    function DeathPlaceProperty(_params2, val) {
      var _this;

      _classCallCheck(this, DeathPlaceProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$y);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$w, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$w, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$y, _validate2$y).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$w, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$w, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DeathPlaceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$w).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$w).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$w).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$w).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$w).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$w).reprJSON();
      }
    }]);

    return DeathPlaceProperty;
  }(BaseProperty);

  function _validate2$y(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for DeathPlaceProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for DeathPlaceProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "LanguageParameter") return value.constructor.identifier === "TextType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for DeathPlaceProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of DeathPlaceProperty");
  }

  _defineProperty(DeathPlaceProperty, "identifier", "DeathPlaceProperty");

  _defineProperty(DeathPlaceProperty, "prop", "DEATHPLACE");

  _defineProperty(DeathPlaceProperty, "cardinality", "*1");

  _defineProperty(DeathPlaceProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(DeathPlaceProperty, "acceptableValTypes", new Set(["TextType", "URIType"]));

  Object.freeze(DeathPlaceProperty);

  var _params$v = /*#__PURE__*/new WeakMap();

  var _value$v = /*#__PURE__*/new WeakMap();

  var _validate$x = /*#__PURE__*/new WeakSet();

  var DeathDateProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(DeathDateProperty, _BaseProperty);

    var _super = _createSuper(DeathDateProperty);

    function DeathDateProperty(_params2, val) {
      var _this;

      _classCallCheck(this, DeathDateProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$x);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$v, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$v, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$x, _validate2$x).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$v, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$v, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(DeathDateProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$v).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$v).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$v).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$v).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$v).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$v).reprJSON();
      }
    }]);

    return DeathDateProperty;
  }(BaseProperty);

  function _validate2$x(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for DeathDateProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for DeathDateProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "date-and-or-time" && value.constructor.identifier === "DateTimeType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "LanguageParameter") return value.constructor.identifier === "TextType";else if (param.constructor.identifier === "CalscaleParameter") return value.constructor.identifier === "DateTimeType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for DeathDateProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier) || value.constructor.identifier === "DateTimeType" && value.type !== "DATE-AND-OR-TIME") throw new TypeError("Invalid type for value of DeathDateProperty");
  }

  _defineProperty(DeathDateProperty, "identifier", "DeathDateProperty");

  _defineProperty(DeathDateProperty, "prop", "DEATHDATE");

  _defineProperty(DeathDateProperty, "cardinality", "*1");

  _defineProperty(DeathDateProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "AltidParameter", "CalscaleParameter", "AnyParameter"]));

  _defineProperty(DeathDateProperty, "acceptableValTypes", new Set(["DateTimeType", "TextType"]));

  Object.freeze(DeathDateProperty);

  var _params$u = /*#__PURE__*/new WeakMap();

  var _value$u = /*#__PURE__*/new WeakMap();

  var _validate$w = /*#__PURE__*/new WeakSet();

  var ExpertiseProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(ExpertiseProperty, _BaseProperty);

    var _super = _createSuper(ExpertiseProperty);

    function ExpertiseProperty(_params2, val) {
      var _this;

      _classCallCheck(this, ExpertiseProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$w);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$u, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$u, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$w, _validate2$w).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$u, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$u, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ExpertiseProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$u).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$u).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$u).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$u).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$u).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$u).reprJSON();
      }
    }]);

    return ExpertiseProperty;
  }(BaseProperty);

  function _validate2$w(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for ExpertiseProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ExpertiseProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "LevelParameter") return /^ExpertiseProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for ExpertiseProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of ExpertiseProperty");
  }

  _defineProperty(ExpertiseProperty, "identifier", "ExpertiseProperty");

  _defineProperty(ExpertiseProperty, "prop", "EXPERTISE");

  _defineProperty(ExpertiseProperty, "cardinality", "*");

  _defineProperty(ExpertiseProperty, "acceptableParamTypes", new Set(["LevelParameter", "IndexParameter", "LanguageParameter", "PrefParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(ExpertiseProperty, "acceptableValTypes", "TextType");

  Object.freeze(ExpertiseProperty);

  var _params$t = /*#__PURE__*/new WeakMap();

  var _value$t = /*#__PURE__*/new WeakMap();

  var _validate$v = /*#__PURE__*/new WeakSet();

  var HobbyProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(HobbyProperty, _BaseProperty);

    var _super = _createSuper(HobbyProperty);

    function HobbyProperty(_params2, val) {
      var _this;

      _classCallCheck(this, HobbyProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$v);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$t, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$t, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$v, _validate2$v).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$t, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$t, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(HobbyProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$t).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$t).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$t).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$t).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$t).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$t).reprJSON();
      }
    }]);

    return HobbyProperty;
  }(BaseProperty);

  function _validate2$v(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for HobbyProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for HobbyProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "LevelParameter") return /^HobbyProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for HobbyProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of HobbyProperty");
  }

  _defineProperty(HobbyProperty, "identifier", "HobbyProperty");

  _defineProperty(HobbyProperty, "prop", "HOBBY");

  _defineProperty(HobbyProperty, "cardinality", "*");

  _defineProperty(HobbyProperty, "acceptableParamTypes", new Set(["LevelParameter", "IndexParameter", "LanguageParameter", "PrefParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(HobbyProperty, "acceptableValTypes", "TextType");

  Object.freeze(HobbyProperty);

  var _params$s = /*#__PURE__*/new WeakMap();

  var _value$s = /*#__PURE__*/new WeakMap();

  var _validate$u = /*#__PURE__*/new WeakSet();

  var InterestProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(InterestProperty, _BaseProperty);

    var _super = _createSuper(InterestProperty);

    function InterestProperty(_params2, val) {
      var _this;

      _classCallCheck(this, InterestProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$u);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$s, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$s, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$u, _validate2$u).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$s, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$s, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(InterestProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$s).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$s).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$s).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$s).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$s).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$s).reprJSON();
      }
    }]);

    return InterestProperty;
  }(BaseProperty);

  function _validate2$u(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for InterestProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for InterestProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "LevelParameter") return /^InterestProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for InterestProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of InterestProperty");
  }

  _defineProperty(InterestProperty, "identifier", "InterestProperty");

  _defineProperty(InterestProperty, "prop", "INTEREST");

  _defineProperty(InterestProperty, "cardinality", "*");

  _defineProperty(InterestProperty, "acceptableParamTypes", new Set(["LevelParameter", "IndexParameter", "LanguageParameter", "PrefParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(InterestProperty, "acceptableValTypes", "TextType");

  Object.freeze(InterestProperty);

  var _params$r = /*#__PURE__*/new WeakMap();

  var _value$r = /*#__PURE__*/new WeakMap();

  var _validate$t = /*#__PURE__*/new WeakSet();

  var AdrProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(AdrProperty, _BaseProperty);

    var _super = _createSuper(AdrProperty);

    function AdrProperty(_params2, val) {
      var _this;

      _classCallCheck(this, AdrProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$t);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$r, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$r, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$t, _validate2$t).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$r, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$r, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(AdrProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$r).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$r).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$r).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$r).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$r).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$r).reprJSON();
      }
    }]);

    return AdrProperty;
  }(BaseProperty);

  function _validate2$t(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for AdrProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for AdrProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for AdrProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || !/^AdrProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of AdrProperty");
  }

  _defineProperty(AdrProperty, "identifier", "AdrProperty");

  _defineProperty(AdrProperty, "prop", "ADR");

  _defineProperty(AdrProperty, "cardinality", "*");

  _defineProperty(AdrProperty, "acceptableParamTypes", new Set(["LabelParameter", "ValueParameter", "LanguageParameter", "GeoParameter", "TzParameter", "AltidParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AnyParameter", "CCParameter"]));

  _defineProperty(AdrProperty, "acceptableValTypes", "SpecialValueType");

  Object.freeze(AdrProperty);

  var _params$q = /*#__PURE__*/new WeakMap();

  var _value$q = /*#__PURE__*/new WeakMap();

  var _validate$s = /*#__PURE__*/new WeakSet();

  var TelProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(TelProperty, _BaseProperty);

    var _super = _createSuper(TelProperty);

    function TelProperty(_params2, val) {
      var _this;

      _classCallCheck(this, TelProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$s);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$q, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$q, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$s, _validate2$s).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$q, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$q, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TelProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$q).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$q).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$q).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$q).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$q).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$q).reprJSON();
      }
    }]);

    return TelProperty;
  }(BaseProperty);

  function _validate2$s(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for TelProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for TelProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return /^TelProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";else if (param.constructor.identifier === "MediatypeParameter") return value.constructor.identifier === "URIType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for TelProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of TelProperty");
  }

  _defineProperty(TelProperty, "identifier", "TelProperty");

  _defineProperty(TelProperty, "prop", "TEL");

  _defineProperty(TelProperty, "cardinality", "*");

  _defineProperty(TelProperty, "acceptableParamTypes", new Set(["ValueParameter", "MediatypeParameter", "TypeParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(TelProperty, "acceptableValTypes", new Set(["URIType", "TextType"]));

  Object.freeze(TelProperty);

  var _params$p = /*#__PURE__*/new WeakMap();

  var _value$p = /*#__PURE__*/new WeakMap();

  var _validate$r = /*#__PURE__*/new WeakSet();

  var EmailProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(EmailProperty, _BaseProperty);

    var _super = _createSuper(EmailProperty);

    function EmailProperty(_params2, val) {
      var _this;

      _classCallCheck(this, EmailProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$r);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$p, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$p, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$r, _validate2$r).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$p, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$p, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(EmailProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$p).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$p).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$p).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$p).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$p).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$p).reprJSON();
      }
    }]);

    return EmailProperty;
  }(BaseProperty);

  function _validate2$r(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for EmailProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for EmailProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for EmailProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of EmailProperty");
  }

  _defineProperty(EmailProperty, "identifier", "EmailProperty");

  _defineProperty(EmailProperty, "prop", "EMAIL");

  _defineProperty(EmailProperty, "cardinality", "*");

  _defineProperty(EmailProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(EmailProperty, "acceptableValTypes", "TextType");

  Object.freeze(EmailProperty);

  var _params$o = /*#__PURE__*/new WeakMap();

  var _value$o = /*#__PURE__*/new WeakMap();

  var _validate$q = /*#__PURE__*/new WeakSet();

  var IMPPProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(IMPPProperty, _BaseProperty);

    var _super = _createSuper(IMPPProperty);

    function IMPPProperty(_params2, val) {
      var _this;

      _classCallCheck(this, IMPPProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$q);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$o, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$o, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$q, _validate2$q).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$o, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$o, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(IMPPProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$o).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$o).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$o).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$o).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$o).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$o).reprJSON();
      }
    }]);

    return IMPPProperty;
  }(BaseProperty);

  function _validate2$q(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for IMPPProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for IMPPProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for IMPPProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of IMPPProperty");
  }

  _defineProperty(IMPPProperty, "identifier", "IMPPProperty");

  _defineProperty(IMPPProperty, "prop", "IMPP");

  _defineProperty(IMPPProperty, "cardinality", "*");

  _defineProperty(IMPPProperty, "acceptableParamTypes", ["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]);

  _defineProperty(IMPPProperty, "acceptableValTypes", "URIType");

  Object.freeze(IMPPProperty);

  var _params$n = /*#__PURE__*/new WeakMap();

  var _value$n = /*#__PURE__*/new WeakMap();

  var _validate$p = /*#__PURE__*/new WeakSet();

  var LangProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(LangProperty, _BaseProperty);

    var _super = _createSuper(LangProperty);

    function LangProperty(_params2, val) {
      var _this;

      _classCallCheck(this, LangProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$p);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$n, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$n, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$p, _validate2$p).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$n, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$n, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LangProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$n).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$n).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$n).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$n).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$n).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$n).reprJSON();
      }
    }]);

    return LangProperty;
  }(BaseProperty);

  function _validate2$p(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for LangProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for LangProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "language-tag";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for LangProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of LangProperty");
  }

  _defineProperty(LangProperty, "identifier", "LangProperty");

  _defineProperty(LangProperty, "prop", "LANG");

  _defineProperty(LangProperty, "cardinality", "*");

  _defineProperty(LangProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(LangProperty, "acceptableValTypes", "LanguageTagType");

  Object.freeze(LangProperty);

  var _params$m = /*#__PURE__*/new WeakMap();

  var _value$m = /*#__PURE__*/new WeakMap();

  var _validate$o = /*#__PURE__*/new WeakSet();

  var ContactURIProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(ContactURIProperty, _BaseProperty);

    var _super = _createSuper(ContactURIProperty);

    function ContactURIProperty(_params2, val) {
      var _this;

      _classCallCheck(this, ContactURIProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$o);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$m, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$m, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$o, _validate2$o).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$m, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$m, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ContactURIProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$m).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$m).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$m).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$m).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$m).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$m).reprJSON();
      }
    }]);

    return ContactURIProperty;
  }(BaseProperty);

  function _validate2$o(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for ContactURIProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ContactURIProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for ContactURIProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of ContactURIProperty");else if (!/^(mailto|https?)/.test(value.repr())) throw new InvalidArgument('Value for ContactURIProperty must be a "mailto", "http", or "https" URI value');
  }

  _defineProperty(ContactURIProperty, "identifier", "ContactURIProperty");

  _defineProperty(ContactURIProperty, "prop", "CONTACT-URI");

  _defineProperty(ContactURIProperty, "cardinality", "*");

  _defineProperty(ContactURIProperty, "acceptableParamTypes", new Set(["ValueParameter", "PrefParameter", "IndexParameter"]));

  _defineProperty(ContactURIProperty, "acceptableValTypes", "URIType");

  Object.freeze(ContactURIProperty);

  var _params$l = /*#__PURE__*/new WeakMap();

  var _value$l = /*#__PURE__*/new WeakMap();

  var _validate$n = /*#__PURE__*/new WeakSet();

  var TzProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(TzProperty, _BaseProperty);

    var _super = _createSuper(TzProperty);

    function TzProperty(_params2, val) {
      var _this;

      _classCallCheck(this, TzProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$n);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$l, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$l, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$n, _validate2$n).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$l, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$l, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TzProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$l).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$l).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$l).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$l).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$l).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$l).reprJSON();
      }
    }]);

    return TzProperty;
  }(BaseProperty);

  function _validate2$n(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for TzProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for TzProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text" && value.constructor.identifier === "TextType" || param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "utc-offset" && value.constructor.identifier === "DateTimeType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for TzProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier) || value.constructor.identifier === "DateTimeType" && value.type !== "UTC-OFFSET") throw new TypeError("Invalid type for value of TzProperty");
  }

  _defineProperty(TzProperty, "identifier", "TzProperty");

  _defineProperty(TzProperty, "prop", "TZ");

  _defineProperty(TzProperty, "cardinality", "*");

  _defineProperty(TzProperty, "acceptableParamTypes", new Set(["ValueParameter", "AltidParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AnyParameter"]));

  _defineProperty(TzProperty, "acceptableValTypes", new Set(["TextType", "URIType", "DateTimeType"]));

  Object.freeze(TzProperty);

  var _params$k = /*#__PURE__*/new WeakMap();

  var _value$k = /*#__PURE__*/new WeakMap();

  var _validate$m = /*#__PURE__*/new WeakSet();

  var GeoProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(GeoProperty, _BaseProperty);

    var _super = _createSuper(GeoProperty);

    function GeoProperty(_params2, val) {
      var _this;

      _classCallCheck(this, GeoProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$m);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$k, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$k, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$m, _validate2$m).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$k, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$k, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(GeoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$k).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$k).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$k).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$k).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$k).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$k).reprJSON();
      }
    }]);

    return GeoProperty;
  }(BaseProperty);

  function _validate2$m(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for GeoProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for GeoProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for GeoProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of GeoProperty");
  }

  _defineProperty(GeoProperty, "identifier", "GeoProperty");

  _defineProperty(GeoProperty, "prop", "GEO");

  _defineProperty(GeoProperty, "cardinality", "*");

  _defineProperty(GeoProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(GeoProperty, "acceptableValTypes", "URIType");

  Object.freeze(GeoProperty);

  var _params$j = /*#__PURE__*/new WeakMap();

  var _value$j = /*#__PURE__*/new WeakMap();

  var _validate$l = /*#__PURE__*/new WeakSet();

  var TitleProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(TitleProperty, _BaseProperty);

    var _super = _createSuper(TitleProperty);

    function TitleProperty(_params2, val) {
      var _this;

      _classCallCheck(this, TitleProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$l);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$j, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$j, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$l, _validate2$l).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$j, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$j, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(TitleProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$j).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$j).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$j).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$j).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$j).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$j).reprJSON();
      }
    }]);

    return TitleProperty;
  }(BaseProperty);

  function _validate2$l(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for TitleProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for TitleProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for TitleProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of TitleProperty");
  }

  _defineProperty(TitleProperty, "identifier", "TitleProperty");

  _defineProperty(TitleProperty, "prop", "TITLE");

  _defineProperty(TitleProperty, "cardinality", "*");

  _defineProperty(TitleProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(TitleProperty, "acceptableValTypes", "TextType");

  Object.freeze(TitleProperty);

  var _params$i = /*#__PURE__*/new WeakMap();

  var _value$i = /*#__PURE__*/new WeakMap();

  var _validate$k = /*#__PURE__*/new WeakSet();

  var RoleProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(RoleProperty, _BaseProperty);

    var _super = _createSuper(RoleProperty);

    function RoleProperty(_params2, val) {
      var _this;

      _classCallCheck(this, RoleProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$k);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$i, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$i, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$k, _validate2$k).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$i, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$i, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(RoleProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$i).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$i).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$i).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$i).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$i).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$i).reprJSON();
      }
    }]);

    return RoleProperty;
  }(BaseProperty);

  function _validate2$k(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for RoleProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for RoleProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for RoleProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of RoleProperty");
  }

  _defineProperty(RoleProperty, "identifier", "RoleProperty");

  _defineProperty(RoleProperty, "prop", "ROLE");

  _defineProperty(RoleProperty, "cardinality", "*");

  _defineProperty(RoleProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(RoleProperty, "acceptableValTypes", "TextType");

  Object.freeze(RoleProperty);

  var _params$h = /*#__PURE__*/new WeakMap();

  var _value$h = /*#__PURE__*/new WeakMap();

  var _validate$j = /*#__PURE__*/new WeakSet();

  var LogoProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(LogoProperty, _BaseProperty);

    var _super = _createSuper(LogoProperty);

    function LogoProperty(_params2, val) {
      var _this;

      _classCallCheck(this, LogoProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$j);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$h, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$h, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$j, _validate2$j).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$h, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$h, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LogoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$h).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$h).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$h).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$h).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$h).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$h).reprJSON();
      }
    }]);

    return LogoProperty;
  }(BaseProperty);

  function _validate2$j(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for LogoProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for LogoProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for LogoProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of LogoProperty");
  }

  _defineProperty(LogoProperty, "identifier", "LogoProperty");

  _defineProperty(LogoProperty, "prop", "LOGO");

  _defineProperty(LogoProperty, "cardinality", "*");

  _defineProperty(LogoProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(LogoProperty, "acceptableValTypes", "URIType");

  Object.freeze(LogoProperty);

  var _params$g = /*#__PURE__*/new WeakMap();

  var _value$g = /*#__PURE__*/new WeakMap();

  var _validate$i = /*#__PURE__*/new WeakSet();

  var OrgProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(OrgProperty, _BaseProperty);

    var _super = _createSuper(OrgProperty);

    function OrgProperty(_params2, val) {
      var _this;

      _classCallCheck(this, OrgProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$i);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$g, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$g, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$i, _validate2$i).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$g, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$g, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(OrgProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$g).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$g).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$g).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$g).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$g).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$g).reprJSON();
      }
    }]);

    return OrgProperty;
  }(BaseProperty);

  function _validate2$i(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for OrgProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for OrgProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for OrgProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || !/^OrgProperty$/i.test(value.targetProp)) throw new TypeError("Invalid type for value of OrgProperty");
  }

  _defineProperty(OrgProperty, "identifier", "OrgProperty");

  _defineProperty(OrgProperty, "prop", "ORG");

  _defineProperty(OrgProperty, "cardinality", "*");

  _defineProperty(OrgProperty, "acceptableParamTypes", new Set(["ValueParameter", "SortAsParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(OrgProperty, "acceptableValTypes", "SpecialValueType");

  Object.freeze(OrgProperty);

  var _params$f = /*#__PURE__*/new WeakMap();

  var _value$f = /*#__PURE__*/new WeakMap();

  var _validate$h = /*#__PURE__*/new WeakSet();

  var MemberProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(MemberProperty, _BaseProperty);

    var _super = _createSuper(MemberProperty);

    function MemberProperty(_params2, val) {
      var _this;

      _classCallCheck(this, MemberProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$h);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$f, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$f, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$h, _validate2$h).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$f, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$f, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MemberProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$f).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$f).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$f).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$f).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$f).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$f).reprJSON();
      }
    }]);

    return MemberProperty;
  }(BaseProperty);

  function _validate2$h(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for MemberProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for MemberProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for MemberProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of MemberProperty");
  }

  _defineProperty(MemberProperty, "identifier", "MemberProperty");

  _defineProperty(MemberProperty, "prop", "MEMBER");

  _defineProperty(MemberProperty, "cardinality", "*");

  _defineProperty(MemberProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "MediatypeParameter", "AnyParameter"]));

  _defineProperty(MemberProperty, "acceptableValTypes", "URIType");

  Object.freeze(MemberProperty);

  var _params$e = /*#__PURE__*/new WeakMap();

  var _value$e = /*#__PURE__*/new WeakMap();

  var _validate$g = /*#__PURE__*/new WeakSet();

  var RelatedProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(RelatedProperty, _BaseProperty);

    var _super = _createSuper(RelatedProperty);

    function RelatedProperty(_params2, val) {
      var _this;

      _classCallCheck(this, RelatedProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$g);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$e, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$e, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$g, _validate2$g).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$e, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$e, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(RelatedProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$e).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$e).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$e).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$e).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$e).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$e).reprJSON();
      }
    }]);

    return RelatedProperty;
  }(BaseProperty);

  function _validate2$g(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for RelatedProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for RelatedProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return /^RelatedProperty$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for RelatedProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of RelatedProperty");
  }

  _defineProperty(RelatedProperty, "identifier", "RelatedProperty");

  _defineProperty(RelatedProperty, "prop", "RELATED");

  _defineProperty(RelatedProperty, "cardinality", "*");

  _defineProperty(RelatedProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "MediatypeParameter", "PIDParameter", "PrefParameter", "IndexParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(RelatedProperty, "acceptableValTypes", new Set(["URIType", "TextType"]));

  Object.freeze(RelatedProperty);

  var _params$d = /*#__PURE__*/new WeakMap();

  var _value$d = /*#__PURE__*/new WeakMap();

  var _validate$f = /*#__PURE__*/new WeakSet();

  var OrgDirectoryProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(OrgDirectoryProperty, _BaseProperty);

    var _super = _createSuper(OrgDirectoryProperty);

    function OrgDirectoryProperty(_params2, val) {
      var _this;

      _classCallCheck(this, OrgDirectoryProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$f);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$d, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$d, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$f, _validate2$f).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$d, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$d, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(OrgDirectoryProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$d).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$d).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$d).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$d).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$d).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$d).reprJSON();
      }
    }]);

    return OrgDirectoryProperty;
  }(BaseProperty);

  function _validate2$f(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for OrgDirectoryProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for OrgDirectoryProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for OrgDirectoryProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of OrgDirectoryProperty");
  }

  _defineProperty(OrgDirectoryProperty, "identifier", "OrgDirectoryProperty");

  _defineProperty(OrgDirectoryProperty, "prop", "ORG-DIRECTORY");

  _defineProperty(OrgDirectoryProperty, "cardinality", "*");

  _defineProperty(OrgDirectoryProperty, "acceptableParamTypes", new Set(["PrefParameter", "IndexParameter", "LanguageParameter", "PIDParameter", "AltidParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(OrgDirectoryProperty, "acceptableValTypes", "URIType");

  Object.freeze(OrgDirectoryProperty);

  var _params$c = /*#__PURE__*/new WeakMap();

  var _value$c = /*#__PURE__*/new WeakMap();

  var _validate$e = /*#__PURE__*/new WeakSet();

  var CategoriesProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(CategoriesProperty, _BaseProperty);

    var _super = _createSuper(CategoriesProperty);

    function CategoriesProperty(_params2, val) {
      var _this;

      _classCallCheck(this, CategoriesProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$e);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$c, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$c, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$e, _validate2$e).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$c, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$c, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CategoriesProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$c).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$c).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$c).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$c).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$c).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$c).reprJSON();
      }
    }]);

    return CategoriesProperty;
  }(BaseProperty);

  function _validate2$e(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for CategoriesProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for CategoriesProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for CategoriesProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of CategoriesProperty");
  }

  _defineProperty(CategoriesProperty, "identifier", "CategoriesProperty");

  _defineProperty(CategoriesProperty, "prop", "CATEGORIES");

  _defineProperty(CategoriesProperty, "cardinality", "*");

  _defineProperty(CategoriesProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(CategoriesProperty, "acceptableValTypes", new Set(["TextType", "TextListType"]));

  Object.freeze(CategoriesProperty);

  var _params$b = /*#__PURE__*/new WeakMap();

  var _value$b = /*#__PURE__*/new WeakMap();

  var _validate$d = /*#__PURE__*/new WeakSet();

  var NoteProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(NoteProperty, _BaseProperty);

    var _super = _createSuper(NoteProperty);

    function NoteProperty(_params2, val) {
      var _this;

      _classCallCheck(this, NoteProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$d);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$b, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$b, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$d, _validate2$d).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$b, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$b, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(NoteProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$b).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$b).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$b).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$b).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$b).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$b).reprJSON();
      }
    }]);

    return NoteProperty;
  }(BaseProperty);

  function _validate2$d(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for NoteProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for NoteProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for NoteProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of NoteProperty");
  }

  _defineProperty(NoteProperty, "identifier", "NoteProperty");

  _defineProperty(NoteProperty, "prop", "NOTE");

  _defineProperty(NoteProperty, "cardinality", "*");

  _defineProperty(NoteProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(NoteProperty, "acceptableValTypes", "TextType");

  Object.freeze(NoteProperty);

  var _params$a = /*#__PURE__*/new WeakMap();

  var _value$a = /*#__PURE__*/new WeakMap();

  var _validate$c = /*#__PURE__*/new WeakSet();

  var ProdidProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(ProdidProperty, _BaseProperty);

    var _super = _createSuper(ProdidProperty);

    function ProdidProperty(_params2, val) {
      var _this;

      _classCallCheck(this, ProdidProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$c);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$a, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$a, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$c, _validate2$c).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$a, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$a, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ProdidProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$a).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$a).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$a).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$a).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$a).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$a).reprJSON();
      }
    }]);

    return ProdidProperty;
  }(BaseProperty);

  function _validate2$c(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for ProdidProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ProdidProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "text";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for ProdidProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of ProdidProperty");
  }

  _defineProperty(ProdidProperty, "identifier", "ProdidProperty");

  _defineProperty(ProdidProperty, "prop", "PRODID");

  _defineProperty(ProdidProperty, "cardinality", "*1");

  _defineProperty(ProdidProperty, "acceptableParamTypes", new Set(["ValueParameter", "AnyParameter"]));

  _defineProperty(ProdidProperty, "acceptableValTypes", "TextType");

  Object.freeze(ProdidProperty);

  var _params$9 = /*#__PURE__*/new WeakMap();

  var _value$9 = /*#__PURE__*/new WeakMap();

  var _validate$b = /*#__PURE__*/new WeakSet();

  var RevProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(RevProperty, _BaseProperty);

    var _super = _createSuper(RevProperty);

    function RevProperty(_params2, val) {
      var _this;

      _classCallCheck(this, RevProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$b);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$9, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$9, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$b, _validate2$b).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$9, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$9, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(RevProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$9).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$9).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$9).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$9).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$9).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$9).reprJSON();
      }
    }]);

    return RevProperty;
  }(BaseProperty);

  function _validate2$b(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for RevProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for RevProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "timestamp";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for RevProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes || value.type !== "TIMESTAMP") throw new TypeError("Invalid type for value of RevProperty");
  }

  _defineProperty(RevProperty, "identifier", "RevProperty");

  _defineProperty(RevProperty, "prop", "REV");

  _defineProperty(RevProperty, "cardinality", "*1");

  _defineProperty(RevProperty, "acceptableParamTypes", new Set(["ValueParameter", "AnyParameter"]));

  _defineProperty(RevProperty, "acceptableValTypes", "DateTimeType");

  Object.freeze(RevProperty);

  var _params$8 = /*#__PURE__*/new WeakMap();

  var _value$8 = /*#__PURE__*/new WeakMap();

  var _validate$a = /*#__PURE__*/new WeakSet();

  var SoundProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(SoundProperty, _BaseProperty);

    var _super = _createSuper(SoundProperty);

    function SoundProperty(_params2, val) {
      var _this;

      _classCallCheck(this, SoundProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$a);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$8, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$8, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$a, _validate2$a).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$8, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$8, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SoundProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$8).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$8).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$8).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$8).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$8).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$8).reprJSON();
      }
    }]);

    return SoundProperty;
  }(BaseProperty);

  function _validate2$a(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for SoundProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for SoundProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for SoundProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of SoundProperty");
  }

  _defineProperty(SoundProperty, "identifier", "SoundProperty");

  _defineProperty(SoundProperty, "prop", "SOUND");

  _defineProperty(SoundProperty, "cardinality", "*");

  _defineProperty(SoundProperty, "acceptableParamTypes", new Set(["ValueParameter", "LanguageParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(SoundProperty, "acceptableValTypes", "URIType");

  Object.freeze(SoundProperty);

  var _params$7 = /*#__PURE__*/new WeakMap();

  var _value$7 = /*#__PURE__*/new WeakMap();

  var _validate$9 = /*#__PURE__*/new WeakSet();

  var UIDProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(UIDProperty, _BaseProperty);

    var _super = _createSuper(UIDProperty);

    function UIDProperty(_params2, val) {
      var _this;

      _classCallCheck(this, UIDProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$9);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$7, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$7, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$9, _validate2$9).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$7, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$7, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(UIDProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$7).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$7).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$7).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$7).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$7).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$7).reprJSON();
      }
    }]);

    return UIDProperty;
  }(BaseProperty);

  function _validate2$9(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for UIDProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for UIDProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for UIDProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of UIDProperty");
  }

  _defineProperty(UIDProperty, "identifier", "UIDProperty");

  _defineProperty(UIDProperty, "prop", "UID");

  _defineProperty(UIDProperty, "cardinality", "*1");

  _defineProperty(UIDProperty, "acceptableParamTypes", new Set(["ValueParameter", "AnyParameter"]));

  _defineProperty(UIDProperty, "acceptableValTypes", new Set(["URIType", "TextType"]));

  Object.freeze(UIDProperty);

  var _params$6 = /*#__PURE__*/new WeakMap();

  var _value$6 = /*#__PURE__*/new WeakMap();

  var _validate$8 = /*#__PURE__*/new WeakSet();

  var ClientpidmapProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(ClientpidmapProperty, _BaseProperty);

    var _super = _createSuper(ClientpidmapProperty);

    function ClientpidmapProperty(_params2, val) {
      var _this;

      _classCallCheck(this, ClientpidmapProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$8);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$6, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$6, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$8, _validate2$8).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$6, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$6, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ClientpidmapProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$6).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$6).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$6).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$6).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$6).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$6).reprJSON();
      }
    }]);

    return ClientpidmapProperty;
  }(BaseProperty);

  function _validate2$8(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for ClientpidmapProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ClientpidmapProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      return param.constructor.identifier === _this2.constructor.acceptableParamTypes;
    })) throw new TypeError("Some of the parameters passed are not valid parameters for ClientpidmapProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of ClientpidmapProperty");
  }

  _defineProperty(ClientpidmapProperty, "identifier", "ClientpidmapProperty");

  _defineProperty(ClientpidmapProperty, "prop", "CLIENTPIDMAP");

  _defineProperty(ClientpidmapProperty, "cardinality", "*");

  _defineProperty(ClientpidmapProperty, "acceptableParamTypes", "AnyParameter");

  _defineProperty(ClientpidmapProperty, "acceptableValTypes", "SpecialValueType");

  Object.freeze(ClientpidmapProperty);

  var _params$5 = /*#__PURE__*/new WeakMap();

  var _value$5 = /*#__PURE__*/new WeakMap();

  var _validate$7 = /*#__PURE__*/new WeakSet();

  var URLProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(URLProperty, _BaseProperty);

    var _super = _createSuper(URLProperty);

    function URLProperty(_params2, val) {
      var _this;

      _classCallCheck(this, URLProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$7);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$5, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$5, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$7, _validate2$7).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$5, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$5, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(URLProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$5).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$5).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$5).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$5).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$5).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$5).reprJSON();
      }
    }]);

    return URLProperty;
  }(BaseProperty);

  function _validate2$7(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for URLProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for URLProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for URLProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of URLProperty");
  }

  _defineProperty(URLProperty, "identifier", "URLProperty");

  _defineProperty(URLProperty, "prop", "URL");

  _defineProperty(URLProperty, "cardinality", "*");

  _defineProperty(URLProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(URLProperty, "acceptableValTypes", "URIType");

  Object.freeze(URLProperty);

  var _params$4 = /*#__PURE__*/new WeakMap();

  var _value$4 = /*#__PURE__*/new WeakMap();

  var _validate$6 = /*#__PURE__*/new WeakSet();

  var KeyProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(KeyProperty, _BaseProperty);

    var _super = _createSuper(KeyProperty);

    function KeyProperty(_params2, val) {
      var _this;

      _classCallCheck(this, KeyProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$6);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$4, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$4, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$6, _validate2$6).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$4, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$4, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(KeyProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$4).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$4).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$4).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$4).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$4).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$4).reprJSON();
      }
    }]);

    return KeyProperty;
  }(BaseProperty);

  function _validate2$6(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for KeyProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for KeyProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri" && value.constructor.identifier === "URIType" || param.value === "text" && value.constructor.identifier === "TextType";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for KeyProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of KeyProperty");
  }

  _defineProperty(KeyProperty, "identifier", "KeyProperty");

  _defineProperty(KeyProperty, "prop", "KEY");

  _defineProperty(KeyProperty, "cardinality", "*");

  _defineProperty(KeyProperty, "acceptableParamTypes", new Set(["ValueParameter", "MediatypeParameter", "AltidParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "AnyParameter"]));

  _defineProperty(KeyProperty, "acceptableValTypes", new Set(["TextType", "URIType"]));

  Object.freeze(KeyProperty);

  var _params$3 = /*#__PURE__*/new WeakMap();

  var _value$3 = /*#__PURE__*/new WeakMap();

  var _validate$5 = /*#__PURE__*/new WeakSet();

  var FburlProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(FburlProperty, _BaseProperty);

    var _super = _createSuper(FburlProperty);

    function FburlProperty(_params2, val) {
      var _this;

      _classCallCheck(this, FburlProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$5);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$3, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$3, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$5, _validate2$5).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$3, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$3, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(FburlProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$3).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$3).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$3).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$3).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$3).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$3).reprJSON();
      }
    }]);

    return FburlProperty;
  }(BaseProperty);

  function _validate2$5(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for FburlProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for FburlProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for FburlProperty");else if (value.constructor.identifier !== this.constructor.acceptableValTypes) throw new TypeError("Invalid type for value of FburlProperty");
  }

  _defineProperty(FburlProperty, "identifier", "FburlProperty");

  _defineProperty(FburlProperty, "prop", "FBURL");

  _defineProperty(FburlProperty, "cardinality", "*");

  _defineProperty(FburlProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(FburlProperty, "acceptableValTypes", "URIType");

  Object.freeze(FburlProperty);

  var _params$2 = /*#__PURE__*/new WeakMap();

  var _value$2 = /*#__PURE__*/new WeakMap();

  var _validate$4 = /*#__PURE__*/new WeakSet();

  var CaladruriProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(CaladruriProperty, _BaseProperty);

    var _super = _createSuper(CaladruriProperty);

    function CaladruriProperty(_params2, val) {
      var _this;

      _classCallCheck(this, CaladruriProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$4);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$2, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$2, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$4, _validate2$4).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$2, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$2, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CaladruriProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$2).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$2).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$2).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$2).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$2).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$2).reprJSON();
      }
    }]);

    return CaladruriProperty;
  }(BaseProperty);

  function _validate2$4(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for CaladruriProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for CaladruriProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for CaladruriProperty");else if (this.constructor.acceptableValTypes !== value.constructor.identifier) throw new TypeError("Invalid type for value of CaladruriProperty");
  }

  _defineProperty(CaladruriProperty, "identifier", "CaladruriProperty");

  _defineProperty(CaladruriProperty, "prop", "CALADRURI");

  _defineProperty(CaladruriProperty, "cardinality", "*");

  _defineProperty(CaladruriProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(CaladruriProperty, "acceptableValTypes", "URIType");

  Object.freeze(CaladruriProperty);

  var _params$1 = /*#__PURE__*/new WeakMap();

  var _value$1 = /*#__PURE__*/new WeakMap();

  var _validate$3 = /*#__PURE__*/new WeakSet();

  var CaluriProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(CaluriProperty, _BaseProperty);

    var _super = _createSuper(CaluriProperty);

    function CaluriProperty(_params2, val) {
      var _this;

      _classCallCheck(this, CaluriProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$3);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params$1, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value$1, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$3, _validate2$3).call(_assertThisInitialized(_this), _params2, val);

      _classPrivateFieldSet(_assertThisInitialized(_this), _params$1, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value$1, val);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CaluriProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params$1).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params$1).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params$1).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value$1).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value$1).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value$1).reprJSON();
      }
    }]);

    return CaluriProperty;
  }(BaseProperty);

  function _validate2$3(params, value) {
    var _this2 = this;

    if (typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameters and value for CaluriProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for CaluriProperty must be passed in an array");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "TypeParameter") return !/^(?:Related|Tel)Property$/i.test(param.targetProp);else if (param.constructor.identifier === "ValueParameter") return param.value === "uri";
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for CaluriProperty");else if (this.constructor.acceptableValTypes !== value.constructor.identifier) throw new TypeError("Invalid type for value of CaluriProperty");
  }

  _defineProperty(CaluriProperty, "identifier", "CaluriProperty");

  _defineProperty(CaluriProperty, "prop", "CALURI");

  _defineProperty(CaluriProperty, "cardinality", "*");

  _defineProperty(CaluriProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));

  _defineProperty(CaluriProperty, "acceptableValTypes", "URIType");

  Object.freeze(CaluriProperty);

  var _propRegExp = /*#__PURE__*/new WeakMap();

  var _params = /*#__PURE__*/new WeakMap();

  var _value = /*#__PURE__*/new WeakMap();

  var _validate$2 = /*#__PURE__*/new WeakSet();

  var ExtendedProperty = /*#__PURE__*/function (_BaseProperty) {
    _inherits(ExtendedProperty, _BaseProperty);

    var _super = _createSuper(ExtendedProperty);

    function ExtendedProperty(_prop, _params2, _value2) {
      var _this;

      _classCallCheck(this, ExtendedProperty);

      _this = _super.call(this);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate$2);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _propRegExp, {
        writable: true,
        value: /^[Xx]-[A-Za-z0-9]+$/
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _params, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(_assertThisInitialized(_this), _validate$2, _validate2$2).call(_assertThisInitialized(_this), _prop, _params2, _value2);

      _this.prop = _prop.toString().toUpperCase();

      _classPrivateFieldSet(_assertThisInitialized(_this), _params, _params2);

      _classPrivateFieldSet(_assertThisInitialized(_this), _value, _value2);

      _this.checkAbstractPropertiesAndMethods();

      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ExtendedProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet(this, _params).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet(this, _params).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _params).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet(this, _value).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet(this, _value).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet(this, _value).reprJSON();
      }
    }]);

    return ExtendedProperty;
  }(BaseProperty);

  function _validate2$2(prop, params, value) {
    var _this2 = this;

    if (typeof prop === "undefined" || typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Property, parameter and value for ExtendedProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ExtendedProperty must be passed in an array");else if (!_classPrivateFieldGet(this, _propRegExp).test(prop)) throw new InvalidArgument("Invalid property for ExtendedProperty");
    var parameterInstanceCount = new Set();
    if (!params.every(function (param) {
      if (param.constructor.identifier !== "AnyParameter") {
        if (parameterInstanceCount.has(param.constructor.identifier)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.constructor.identifier);
      } else {
        if (parameterInstanceCount.has(param.param)) throw new InvalidArgument("Parameters must not have more than one instance supplied");else parameterInstanceCount.add(param.param);
      }

      if (param.constructor.identifier === "ValueParameter") return param.value === value.repr().toLowerCase();
      return _this2.constructor.acceptableParamTypes.has(param.constructor.identifier);
    })) throw new TypeError("Some of the parameters passed are not valid parameters for ExtendedProperty");else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier)) throw new TypeError("Invalid type for value of ExtendedProperty");
  }

  _defineProperty(ExtendedProperty, "identifier", "ExtendedProperty");

  _defineProperty(ExtendedProperty, "cardinality", "*");

  _defineProperty(ExtendedProperty, "acceptableParamTypes", new Set(["LanguageParameter", "ValueParameter", "PrefParameter", "AltidParameter", "PIDParameter", "TypeParameter", "MediatypeParameter", "CalscaleParameter", "SortAsParameter", "GeoParameter", "TzParameter", "AnyParameter", "LabelParameter", "CCParameter", "IndexParameter", "LevelParameter"]));

  _defineProperty(ExtendedProperty, "acceptableValTypes", new Set(["TextType", "TextListType", "BooleanType", "DateTimeType", "DateTimeListType", "IntegerType", "IntegerListType", "FloatType", "FloatListType", "LanguageTagType", "URIType", "SexType", "SpecialValueType"]));

  Object.freeze(ExtendedProperty);

  var _props$1 = /*#__PURE__*/new WeakMap();

  var _groupName = /*#__PURE__*/new WeakMap();

  var _propertyInstanceCount = /*#__PURE__*/new WeakMap();

  var _validate$1 = /*#__PURE__*/new WeakSet();

  var Group = /*#__PURE__*/function () {
    function Group(_props2, _groupName2) {
      _classCallCheck(this, Group);

      _classPrivateMethodInitSpec(this, _validate$1);

      _classPrivateFieldInitSpec(this, _props$1, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _groupName, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _propertyInstanceCount, {
        writable: true,
        value: new Map([["FNProperty", 0], ["AnniversaryProperty", 0], ["BdayProperty", 0], ["GenderProperty", 0], ["BirthplaceProperty", 0], ["DeathplaceProperty", 0], ["DeathdateProperty", 0], ["KindProperty", 0], ["NProperty", 0], ["ProdidProperty", 0], ["RevProperty", 0], ["UIDProperty", 0]])
      });

      _defineProperty(this, "hasMemberProperty", false);

      _defineProperty(this, "kindPropertyIsGroup", false);

      _classPrivateMethodGet(this, _validate$1, _validate2$1).call(this, _props2, _groupName2);

      _classPrivateFieldSet(this, _props$1, _props2);

      _classPrivateFieldSet(this, _groupName, _groupName2);

      Object.freeze(this);
    }

    _createClass(Group, [{
      key: "propertyInstanceCount",
      get: function get() {
        return _classPrivateFieldGet(this, _propertyInstanceCount);
      }
    }, {
      key: "repr",
      value: function repr() {
        var _this = this;

        var CRLF = "\r\n";
        return _classPrivateFieldGet(this, _props$1).reduce(function (accumulatedProps, currentProp) {
          accumulatedProps.push("".concat(_classPrivateFieldGet(_this, _groupName), ".").concat(currentProp.repr()));
          return accumulatedProps;
        }, []).join(CRLF);
      }
    }, {
      key: "reprXML",
      value: function reprXML() {
        var valueXML = "";
        valueXML += "<group name=\"".concat(_classPrivateFieldGet(this, _groupName), "\">");
        valueXML += _classPrivateFieldGet(this, _props$1).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
        valueXML += "</group>";
        return valueXML;
      }
    }, {
      key: "reprJSON",
      value: function reprJSON() {
        var _this2 = this;

        return _classPrivateFieldGet(this, _props$1).reduce(function (accumulatedProps, currentProp) {
          var prop = currentProp.reprJSON();
          prop[1] = _objectSpread2(_objectSpread2({}, prop[1]), {}, {
            group: _classPrivateFieldGet(_this2, _groupName)
          });
          accumulatedProps.push(prop);
          return accumulatedProps;
        }, []);
      }
    }]);

    return Group;
  }();

  function _validate2$1(props, groupName) {
    if (typeof props === "undefined" || typeof groupName === "undefined" || groupName === "") throw new MissingArgument("Properties to be grouped and the group name must be supplied");else if (!Array.isArray(props)) throw new InvalidArgument("Properties for Group must be passed in an array");else if (!(props.length > 0)) throw new MissingArgument("Properties to be grouped must be supplied");else if (typeof groupName !== "string") throw new TypeError("Group name must be of type string");

    var _iterator = _createForOfIteratorHelper(props),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (!/Property$/.test(prop.constructor.identifier)) throw new InvalidArgument("Unidentified item included in properties to be grouped");

        switch (prop.constructor.identifier) {
          case "MemberProperty":
            this.hasMemberProperty = true;
            break;

          case "KindProperty":
            if (/^group$/i.test(prop.value)) this.kindPropertyIsGroup = true;
            break;

          case "Group":
            throw new InvalidArgument("A group must not be included in the properties to be grouped");
        }

        if (!_classPrivateFieldGet(this, _propertyInstanceCount).has(prop.constructor.identifier)) continue;

        var count = _classPrivateFieldGet(this, _propertyInstanceCount).get(prop.constructor.identifier);

        count++;

        _classPrivateFieldGet(this, _propertyInstanceCount).set(prop.constructor.identifier, count);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _defineProperty(Group, "identifier", "Group");

  _defineProperty(Group, "cardinalityNoneOrOneProps", new Set(["AnniversaryProperty", "BdayProperty", "GenderProperty", "BirthplaceProperty", "DeathplaceProperty", "DeathdateProperty", "KindProperty", "NProperty", "ProdidProperty", "RevProperty", "UIDProperty"]));

  Object.freeze(Group);

  var _props = /*#__PURE__*/new WeakMap();

  var _validate = /*#__PURE__*/new WeakSet();

  var VCARD = /*#__PURE__*/function () {
    function VCARD(_props2) {
      _classCallCheck(this, VCARD);

      _classPrivateMethodInitSpec(this, _validate);

      _classPrivateFieldInitSpec(this, _props, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(this, _validate, _validate2).call(this, _props2);

      _classPrivateFieldSet(this, _props, _props2);

      Object.freeze(this);
    }

    _createClass(VCARD, [{
      key: "repr",
      value: function repr() {
        var CRLF = "\r\n";
        var value = "";
        value += "BEGIN:VCARD" + CRLF;
        value += "VERSION:4.0" + CRLF;
        value += _classPrivateFieldGet(this, _props).reduce(function (accumulatedProps, currentProp) {
          accumulatedProps.push(currentProp.repr());
          return accumulatedProps;
        }, []).join(CRLF) + CRLF;
        value += "END:VCARD" + CRLF;
        return value;
      }
    }, {
      key: "reprXML",
      value: function reprXML() {
        var valueXML = "";
        valueXML += '<?xml version="1.0" encoding="UTF-8"?>';
        valueXML += '<vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0">';
        valueXML += "<vcard>";
        valueXML += _classPrivateFieldGet(this, _props).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
        valueXML += "</vcard>";
        valueXML += "</vcards>";
        return valueXML;
      }
    }, {
      key: "reprJSON",
      value: function reprJSON() {
        return ["vcard", _classPrivateFieldGet(this, _props).reduce(function (accumulatedProps, currentProp) {
          if (currentProp.constructor.identifier === "Group") accumulatedProps = accumulatedProps.concat(currentProp.reprJSON());else accumulatedProps.push(currentProp.reprJSON());
          return accumulatedProps;
        }, [])];
      }
    }]);

    return VCARD;
  }();

  function _validate2(props) {
    if (typeof props === "undefined") throw new MissingArgument("Properties for VCARD must be supplied");else if (!Array.isArray(props)) throw new InvalidArgument("Properties for VCARD must be passed in an array");
    var propertyInstanceCount = new Map([["FNProperty", 0], ["AnniversaryProperty", 0], ["BdayProperty", 0], ["GenderProperty", 0], ["BirthplaceProperty", 0], ["DeathplaceProperty", 0], ["DeathdateProperty", 0], ["KindProperty", 0], ["NProperty", 0], ["ProdidProperty", 0], ["RevProperty", 0], ["UIDProperty", 0]]);
    var hasMemberProperty = false;
    var kindPropertyIsGroup = false;

    var _iterator = _createForOfIteratorHelper(props),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;
        if (!/(?:^Group$|Property$)/.test(prop.constructor.identifier)) throw new InvalidArgument("Unidentified item included in properties");
        var count = void 0;

        switch (prop.constructor.identifier) {
          case "MemberProperty":
            hasMemberProperty = true;
            break;

          case "KindProperty":
            if (/^group$/i.test(prop.value)) kindPropertyIsGroup = true;
            break;

          case "Group":
            if (prop.hasMemberProperty) hasMemberProperty = true;
            if (prop.kindPropertyIsGroup) kindPropertyIsGroup = true;

            var _iterator2 = _createForOfIteratorHelper(prop.propertyInstanceCount.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var propName = _step2.value;

                var _groupCount = prop.propertyInstanceCount.get(propName);

                var _cardcount = propertyInstanceCount.get(propName);

                count = _groupCount + _cardcount;
                propertyInstanceCount.set(propName, count);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            break;

          default:
            if (!propertyInstanceCount.has(prop.constructor.identifier)) continue;
            count = propertyInstanceCount.get(prop.constructor.identifier);
            count++;
            propertyInstanceCount.set(prop.constructor.identifier, count);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (Array.from(this.constructor.cardinalityNoneOrOneProps.keys()).some(function (property) {
      return propertyInstanceCount.get(property) > 1;
    })) throw new InvalidArgument("AnniversaryProperty, BdayProperty, GenderProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied");
    if (propertyInstanceCount.get("FNProperty") < 1) throw new MissingArgument("One or more FNProperty instances must be supplied");else if (hasMemberProperty && !kindPropertyIsGroup) throw new InvalidArgument('MemberProperty should only be used if the value of the KindProperty is "group"');
  }

  _defineProperty(VCARD, "cardinalityNoneOrOneProps", new Set(["AnniversaryProperty", "BdayProperty", "GenderProperty", "BirthplaceProperty", "DeathplaceProperty", "DeathdateProperty", "KindProperty", "NProperty", "ProdidProperty", "RevProperty", "UIDProperty"]));

  Object.freeze(VCARD);

  var _unfoldedVcard = /*#__PURE__*/new WeakMap();

  var _uriRegExp = /*#__PURE__*/new WeakMap();

  var _backCount = /*#__PURE__*/new WeakSet();

  var _separateVcardContentLines = /*#__PURE__*/new WeakSet();

  var _valueSeparator = /*#__PURE__*/new WeakSet();

  var _parametersSeparator = /*#__PURE__*/new WeakSet();

  var _contentLineTokenizer = /*#__PURE__*/new WeakSet();

  var _initialValidation = /*#__PURE__*/new WeakSet();

  var Tokenizer = /*#__PURE__*/function () {
    function Tokenizer(_vcard) {
      _classCallCheck(this, Tokenizer);

      _classPrivateMethodInitSpec(this, _initialValidation);

      _classPrivateMethodInitSpec(this, _contentLineTokenizer);

      _classPrivateMethodInitSpec(this, _parametersSeparator);

      _classPrivateMethodInitSpec(this, _valueSeparator);

      _classPrivateMethodInitSpec(this, _separateVcardContentLines);

      _classPrivateMethodInitSpec(this, _backCount);

      _classPrivateFieldInitSpec(this, _unfoldedVcard, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(this, _uriRegExp, {
        writable: true,
        value: new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?")
      });

      _classPrivateMethodGet(this, _initialValidation, _initialValidation2).call(this, _vcard);

      _classPrivateFieldSet(this, _unfoldedVcard, _vcard.replace(/\r\n[\t ]/g, "")); //unfold


      Object.freeze(this);
    }

    _createClass(Tokenizer, [{
      key: "numberOfVcards",
      get: //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
      function get() {
        var _classPrivateFieldGet2;

        return ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _unfoldedVcard).match(/BEGIN:VCARD\r\n/gi)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : []).length || 1;
      }
    }, {
      key: "tokens",
      get: function get() {
        var tokens = [];

        if (this.numberOfVcards === 1) {
          var _iterator = _createForOfIteratorHelper(_classPrivateMethodGet(this, _separateVcardContentLines, _separateVcardContentLines2).call(this)),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var contentLine = _step.value;
              tokens.push(_classPrivateMethodGet(this, _contentLineTokenizer, _contentLineTokenizer2).call(this, contentLine));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(_classPrivateMethodGet(this, _separateVcardContentLines, _separateVcardContentLines2).call(this)),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var vcard = _step2.value;
              var _cardTokens = [];

              var _iterator3 = _createForOfIteratorHelper(vcard),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _contentLine = _step3.value;

                  _cardTokens.push(_classPrivateMethodGet(this, _contentLineTokenizer, _contentLineTokenizer2).call(this, _contentLine));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              tokens.push(_cardTokens);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        return tokens;
      }
    }]);

    return Tokenizer;
  }();

  function _backCount2(chr, str) {
    if (typeof chr === "undefined" || typeof str === "undefined") throw new MissingArgument("Character and string for this.#backCount must be supplied");
    if (typeof chr !== "string" || typeof str !== "string") throw new InvalidArgument("Character and string for this.#backCount must be of type string");
    var count = 0;

    for (var index = str.length - 1; index >= 0; index--) {
      if (str[index] === chr) count++;else break;
    }

    return count;
  }

  function _separateVcardContentLines2() {
    if (this.numberOfVcards === 1) return _classPrivateFieldGet(this, _unfoldedVcard).split("\r\n").filter(function (vcard) {
      return vcard !== "";
    });
    return _classPrivateFieldGet(this, _unfoldedVcard).split(/BEGIN:VCARD\r\n/gi).filter(function (vcard) {
      return vcard !== "";
    }).map(function (vcard) {
      return ("BEGIN:VCARD\r\n" + vcard).split("\r\n").filter(function (vcard) {
        return vcard !== "";
      });
    });
  }

  function _valueSeparator2(value) {
    var _this = this;

    if (_classPrivateFieldGet(this, _uriRegExp).test(value)) return value;
    var quotedValues = [];
    var quotedValueIndex = 0;

    for (var index = 0; index < value.length; index++) {
      if (value[index] === '"') {
        if (_typeof(quotedValues[quotedValueIndex]) !== "object") quotedValues[quotedValueIndex] = {
          start: index
        };else if (_typeof(quotedValues[quotedValueIndex]) === "object") {
          quotedValues[quotedValueIndex]["stop"] = index;
          quotedValueIndex++;
        }
      }
    }

    var parsedValue = [];
    var continueFrom = 0;

    var _loop = function _loop(_index) {
      if (value[_index] === ";") {
        if (quotedValues.some(function (quotedValue) {
          return _index > quotedValue.start && _index < quotedValue.stop;
        })) return "continue";

        var backslashCount = _classPrivateMethodGet(_this, _backCount, _backCount2).call(_this, "\\", value.substring(continueFrom, _index));

        if (backslashCount % 2 !== 0) return "continue";
        parsedValue.push(value.substring(continueFrom, _index));
        continueFrom = _index + 1;
      }

      if (_index === value.length - 1) parsedValue.push(value.substring(continueFrom));
    };

    for (var _index = 0; _index < value.length; _index++) {
      var _ret = _loop(_index);

      if (_ret === "continue") continue;
    }

    for (var _index2 = 0; _index2 < parsedValue.length; _index2++) {
      var component = parsedValue[_index2];
      var quotedComponents = [];
      var quotedComponentIndex = 0;

      for (var _index3 = 0; _index3 < component.length; _index3++) {
        if (component[_index3] === '"') {
          if (_typeof(quotedComponents[quotedComponentIndex]) !== "object") quotedComponents[quotedComponentIndex] = {
            start: _index3
          };else if (_typeof(quotedComponents[quotedComponentIndex]) === "object") {
            quotedComponents[quotedComponentIndex]["stop"] = _index3;
            quotedComponentIndex++;
          }
        }
      }

      var holdParsedComponent = [];
      var _continueFrom = 0;

      var _loop2 = function _loop2(index2) {
        if (component[index2] === ",") {
          if (quotedComponents.some(function (quotedComponent) {
            return index2 > quotedComponent.start && index2 < quotedComponent.stop;
          })) return "continue";

          var backslashCount = _classPrivateMethodGet(_this, _backCount, _backCount2).call(_this, "\\", component.substring(_continueFrom, index2));

          if (backslashCount % 2 !== 0) return "continue";
          holdParsedComponent.push(component.substring(_continueFrom, index2));
          _continueFrom = index2 + 1;
        }

        if (index2 === component.length - 1) holdParsedComponent.push(component.substring(_continueFrom));
      };

      for (var index2 = 0; index2 < component.length; index2++) {
        var _ret2 = _loop2(index2);

        if (_ret2 === "continue") continue;
      }

      if (holdParsedComponent.length > 1) parsedValue[_index2] = holdParsedComponent;
    }

    parsedValue = parsedValue.map(function (val) {
      if (!Array.isArray(val)) return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      return val.map(function (innerVal) {
        return innerVal.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      });
    });
    return parsedValue.length > 1 ? parsedValue : parsedValue[0];
  }

  function _parametersSeparator2(params) {
    var _this2 = this;

    var paramList = [];
    var quotedParams = [];
    var quotedParamIndex = 0;

    for (var index = 0; index < params.length; index++) {
      if (params[index] === '"') {
        if (_typeof(quotedParams[quotedParamIndex]) !== "object") quotedParams[quotedParamIndex] = {
          start: index
        };else if (_typeof(quotedParams[quotedParamIndex]) === "object") {
          quotedParams[quotedParamIndex]["stop"] = index;
          quotedParamIndex++;
        }
      }
    }

    var continueFrom = 0;

    var _loop3 = function _loop3(_index4) {
      if (params[_index4] === ";") {
        if (quotedParams.some(function (quotedParam) {
          return _index4 > quotedParam.start && _index4 < quotedParam.stop;
        })) return "continue";

        var backslashCount = _classPrivateMethodGet(_this2, _backCount, _backCount2).call(_this2, "\\", params.substring(continueFrom, _index4));

        if (backslashCount % 2 !== 0) return "continue";
        paramList.push(params.substring(continueFrom, _index4));
        continueFrom = _index4 + 1;
      }

      if (_index4 === params.length - 1) paramList.push(params.substring(continueFrom));
    };

    for (var _index4 = 0; _index4 < params.length; _index4++) {
      var _ret3 = _loop3(_index4);

      if (_ret3 === "continue") continue;
    }

    var refParamList = [].concat(paramList);

    var _loop4 = function _loop4(_index5) {
      var joinedParam = paramList[_index5];
      var holdJoinedParam = [];
      var continueFrom = 0;

      var _loop5 = function _loop5(_index7) {
        if (joinedParam[_index7] === "=") {
          var actualIndex = _index5 ? function () {
            var count = 0;

            for (var index3 = 0; index3 < _index5; index3++) {
              count += refParamList[index3]["length"];
              count++; //for removed semicolon
            }

            count += _index7;
            return count;
          }() : _index7;
          if (quotedParams.some(function (quotedParam) {
            return actualIndex > quotedParam.start && actualIndex < quotedParam.stop;
          })) return "continue";

          var backslashCount = _classPrivateMethodGet(_this2, _backCount, _backCount2).call(_this2, "\\", joinedParam.substring(continueFrom, _index7));

          if (backslashCount % 2 !== 0) return "continue";
          holdJoinedParam.push(joinedParam.substring(continueFrom, _index7));
          continueFrom = _index7 + 1;
        }

        if (_index7 === joinedParam.length - 1) holdJoinedParam.push(joinedParam.substring(continueFrom));
      };

      for (var _index7 = 0; _index7 < joinedParam.length; _index7++) {
        var _ret4 = _loop5(_index7);

        if (_ret4 === "continue") continue;
      }

      var parsedParam = {};

      for (var _index8 = 0; _index8 < holdJoinedParam.length; _index8++) {
        if (_index8 % 2 === 0) parsedParam[holdJoinedParam[_index8]] = holdJoinedParam[_index8 + 1];else continue;
      }

      paramList[_index5] = parsedParam;
    };

    for (var _index5 = 0; _index5 < paramList.length; _index5++) {
      _loop4(_index5);
    }

    for (var _index6 = 0; _index6 < paramList.length; _index6++) {
      var currentParam = paramList[_index6];
      var currentParamKey = Object.keys(currentParam).pop();
      var currentParamValue = Object.values(currentParam).pop();
      var holdCurrentParamValue = "";
      var _continueFrom2 = 0;

      for (var index2 = 0; index2 < currentParamValue.length; index2++) {
        if (currentParamValue[index2] === "^") {
          var circumflexCount = _classPrivateMethodGet(this, _backCount, _backCount2).call(this, "^", currentParamValue.substring(_continueFrom2, index2));

          if (circumflexCount % 2 !== 0) {
            holdCurrentParamValue += currentParamValue[index2];
          } else {
            switch (true) {
              case currentParamValue[index2 + 1] === "n":
                holdCurrentParamValue += "\n";
                index2++;
                break;

              case currentParamValue[index2 + 1] === "’":
                holdCurrentParamValue += '"';
                index2++;
                break;

              case currentParamValue[index2 + 1] === "^":
                holdCurrentParamValue += "^";
                index2++;
                break;
            }
          }
        } else {
          holdCurrentParamValue += currentParamValue[index2];
        }

        _continueFrom2 = index2 + 1;
      }

      if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"') && !_classPrivateFieldGet(this, _uriRegExp).test(holdCurrentParamValue.slice(1, -1))) holdCurrentParamValue = _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, holdCurrentParamValue.slice(1, -1));
      if (Array.isArray(holdCurrentParamValue)) holdCurrentParamValue.map(function (val) {
        return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      });else holdCurrentParamValue.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      currentParam[currentParamKey] = holdCurrentParamValue;
    }

    return paramList.reduce(function (accumulatedParams, currentParam) {
      var key = Object.keys(currentParam)[0].toUpperCase();
      var value = Object.values(currentParam)[0];
      accumulatedParams[key] = value;
      return accumulatedParams;
    }, {});
  }

  function _contentLineTokenizer2(contentLine) {
    var firstSemiColonIndex = contentLine.indexOf(";");
    var firstColonIndex = contentLine.indexOf(":");
    var propEndPoint = firstSemiColonIndex !== -1 ? firstColonIndex < firstSemiColonIndex ? firstColonIndex : firstSemiColonIndex : firstColonIndex;
    var property = contentLine.slice(0, propEndPoint);
    var group = null;

    if (property.indexOf(".") !== -1) {
      var _property$split = property.split(".");

      var _property$split2 = _slicedToArray(_property$split, 2);

      group = _property$split2[0];
      property = _property$split2[1];
    }

    if (firstSemiColonIndex === -1 || firstColonIndex < firstSemiColonIndex) return {
      group: group,
      property: property.toUpperCase(),
      parameters: {},
      value: _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, contentLine.slice(propEndPoint + 1))
    };
    return {
      group: group,
      property: property.toUpperCase(),
      parameters: _classPrivateMethodGet(this, _parametersSeparator, _parametersSeparator2).call(this, contentLine.slice(firstSemiColonIndex + 1, firstColonIndex)),
      value: _classPrivateMethodGet(this, _valueSeparator, _valueSeparator2).call(this, contentLine.slice(firstColonIndex + 1))
    };
  }

  function _initialValidation2(vcard) {
    var _vcard$match;

    if (typeof vcard === "undefined") throw new MissingArgument("vCard to be tokenized must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be tokenized must be of type string");
    if (((_vcard$match = vcard.match(/\r\n/g)) !== null && _vcard$match !== void 0 ? _vcard$match : []).length < 4) throw new InvalidVcard("vCard content lines must be delimited by CRLF (\\r\\n) sequence");
  }

  _defineProperty(Tokenizer, "identifier", "Tokenizer");

  Object.freeze(Tokenizer);

  var _tokenizedVcard = /*#__PURE__*/new WeakMap();

  var _validateTokenizedVcard = /*#__PURE__*/new WeakSet();

  var _removeUnnecessaryFields = /*#__PURE__*/new WeakSet();

  var _parseToken = /*#__PURE__*/new WeakSet();

  var Parser = /*#__PURE__*/function () {
    function Parser(_tokenizedVcard2) {
      _classCallCheck(this, Parser);

      _classPrivateMethodInitSpec(this, _parseToken);

      _classPrivateMethodInitSpec(this, _removeUnnecessaryFields);

      _classPrivateMethodInitSpec(this, _validateTokenizedVcard);

      _classPrivateFieldInitSpec(this, _tokenizedVcard, {
        writable: true,
        value: void 0
      });

      _classPrivateMethodGet(this, _validateTokenizedVcard, _validateTokenizedVcard2).call(this, _tokenizedVcard2);

      _classPrivateFieldSet(this, _tokenizedVcard, _classPrivateMethodGet(this, _removeUnnecessaryFields, _removeUnnecessaryFields2).call(this, _tokenizedVcard2));

      Object.freeze(this);
    }

    _createClass(Parser, [{
      key: "parsed",
      get: function get() {
        var _parsedTokens = [];

        var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _tokenizedVcard)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var token = _step.value;

            _parsedTokens.push(_classPrivateMethodGet(this, _parseToken, _parseToken2).call(this, token));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return {
          parsedVcard: _parsedTokens,

          get properties() {
            return Array.from(new Set(_parsedTokens.reduce(function (accumulated, current) {
              accumulated.push(current.property);
              return accumulated;
            }, [])));
          },

          get propertiesWithoutParameters() {
            return Array.from(new Set(_parsedTokens.reduce(function (accumulated, current) {
              if (Object.keys(current.parameters).length === 0) accumulated.push(current.property);
              return accumulated;
            }, [])));
          },

          get propertiesWithParameters() {
            return Array.from(new Set(_parsedTokens.reduce(function (accumulated, current) {
              if (Object.keys(current.parameters).length > 0) accumulated.push(current.property);
              return accumulated;
            }, [])));
          },

          getProperty: function getProperty() {
            var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return _parsedTokens.filter(function (parsedToken) {
              return parsedToken.property === property;
            });
          },

          get groups() {
            return Array.from(new Set(_parsedTokens.reduce(function (accumulated, current) {
              current.group && accumulated.push(current.group);
              return accumulated;
            }, [])));
          },

          getGroup: function getGroup() {
            var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return _parsedTokens.filter(function (parsedToken) {
              return parsedToken.group === group;
            });
          },

          get repeatingProperties() {
            var _repeatingProperties = {};
            var propertiesCount = new Map();

            _parsedTokens.forEach(function (parsedToken) {
              if (propertiesCount.has(parsedToken.property)) {
                var count = propertiesCount.get(parsedToken.property);
                count++;
                propertiesCount.set(parsedToken.property, count);
              } else propertiesCount.set(parsedToken.property, 1);
            });

            var _iterator2 = _createForOfIteratorHelper(propertiesCount.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var property = _step2.value;
                var count = propertiesCount.get(property);
                if (count > 1) _repeatingProperties[property] = count;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return _repeatingProperties;
          }

        };
      }
    }]);

    return Parser;
  }();

  function _validateTokenizedVcard2(tokenizedVcard) {
    if (typeof tokenizedVcard === "undefined") throw new MissingArgument("Tokenized vCard to be parsed must be supplied");else if (!Array.isArray(tokenizedVcard)) throw new TypeError("Tokenized vCard to be parsed must be an array");
    var relevantPropCount = new Map([["BEGIN", 0], ["VERSION", 0], ["END", 0], ["FN", 0], ["ANNIVERSARY", 0], ["BDAY", 0], ["GENDER", 0], ["BIRTHPLACE", 0], ["DEATHPLACE", 0], ["DEATHDATE", 0], ["KIND", 0], ["N", 0], ["PRODID", 0], ["REV", 0], ["UID", 0]]);

    var _iterator3 = _createForOfIteratorHelper(tokenizedVcard),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var token = _step3.value;
        var count = 0;

        if (relevantPropCount.has(token.property)) {
          count = relevantPropCount.get(token.property);
          count++;
          relevantPropCount.set(token.property, count);
        }

        if (!this.constructor.knownProperties.has(token.property) && !token.property.startsWith("X-")) throw new InvalidVcard("vCard has unknown property: ".concat(token.property));else if (token.property === "VERSION" && token.value !== "4.0") throw new InvalidArgument("Unsupported vCard version: ".concat(token.value));

        for (var _i = 0, _Object$keys = Object.keys(token.parameters); _i < _Object$keys.length; _i++) {
          var parameter = _Object$keys[_i];
          if (!this.constructor.knownParameters.has(parameter) && !parameter.startsWith("X-")) throw new InvalidVcard("vCard has unknown parameter: ".concat(parameter, ", on ").concat(token.property, " property"));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(relevantPropCount.keys()),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var prop = _step4.value;

        switch (prop) {
          case "BEGIN":
          case "VERSION":
          case "END":
            if (relevantPropCount.get(prop) !== 1) throw new InvalidVcard("vCard must have one of each BEGIN, VERSION and END properties");
            break;

          case "FN":
            if (relevantPropCount.get(prop) < 1) throw new InvalidVcard("vCard must have at least one FN property");
            break;

          default:
            if (relevantPropCount.get(prop) > 1) throw new InvalidVcard("vCard must not have more than one ANNIVERSARY, BDAY, GENDER, BIRTHPLACE, DEATHPLACE, DEATHDATE, KIND, N, PRODID, REV or UID property");
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  function _removeUnnecessaryFields2(tokenizedVcard) {
    return tokenizedVcard.filter(function (token) {
      return token.property !== "BEGIN" && token.property !== "VERSION" && token.property !== "END";
    });
  }

  function _parseToken2(token) {
    var _parsedToken;

    switch (token.property) {
      case "N":
        _parsedToken = _objectSpread2({}, token);
        _parsedToken["value"] = {
          familyNames: token.value[0],
          givenNames: token.value[1],
          additionalNames: token.value[2],
          honorificPrefixes: token.value[3],
          honorificSuffixes: token.value[4]
        };
        return _parsedToken;

      case "ADR":
        _parsedToken = _objectSpread2({}, token);
        _parsedToken["value"] = {
          postOfficeBox: token.value[0],
          extendedAddress: token.value[1],
          streetAddress: token.value[2],
          locality: token.value[3],
          region: token.value[4],
          postalCode: token.value[5],
          countryName: token.value[6]
        };
        return _parsedToken;

      case "GENDER":
        _parsedToken = _objectSpread2({}, token);
        if (Array.isArray(token.value)) _parsedToken["value"] = {
          sex: token.value[0],
          gender: token.value[1]
        };else _parsedToken["value"] = {
          sex: token.value,
          gender: ""
        };
        return _parsedToken;
    }

    return token;
  }

  _defineProperty(Parser, "identifier", "Parser");

  _defineProperty(Parser, "knownProperties", new Set(["BEGIN", "VERSION", "END", "SOURCE", "KIND", "XML", "FN", "N", "NICKNAME", "PHOTO", "BDAY", "ANNIVERSARY", "GENDER", "BIRTHPLACE", "DEATHPLACE", "DEATHDATE", "EXPERTISE", "HOBBY", "INTEREST", "ADR", "TEL", "EMAIL", "IMPP", "LANG", "CONTACT-URI", "TZ", "GEO", "TITLE", "ROLE", "LOGO", "ORG", "MEMBER", "RELATED", "ORG-DIRECTORY", "CATEGORIES", "NOTE", "PRODID", "REV", "SOUND", "UID", "CLIENTPIDMAP", "URL", "KEY", "FBURL", "CALADRURI", "CALURI"]));

  _defineProperty(Parser, "knownParameters", new Set(["LANGUAGE", "VALUE", "PREF", "ALTID", "PID", "TYPE", "MEDIATYPE", "CALSCALE", "SORTAS", "GEO", "TZ", "LABEL", "CC", "INDEX", "LEVEL"]));

  Object.freeze(Parser);

  function parse(vcard) {
    if (typeof vcard === "undefined") throw new MissingArgument("vCard to be parsed must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be parsed must be of type string");
    var tokenizedVcard = new Tokenizer(vcard);
    if (tokenizedVcard.numberOfVcards === 1) return new Parser(tokenizedVcard.tokens).parsed;
    var _tokenizedVcards = [];

    var _iterator = _createForOfIteratorHelper(tokenizedVcard.tokens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tokenVcard = _step.value;

        _tokenizedVcards.push(new Parser(tokenVcard).parsed);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _tokenizedVcards;
  }

  exports.AdrProperty = AdrProperty;
  exports.AltidParameter = AltidParameter;
  exports.AnniversaryProperty = AnniversaryProperty;
  exports.AnyParameter = AnyParameter;
  exports.BdayProperty = BdayProperty;
  exports.BirthPlaceProperty = BirthPlaceProperty;
  exports.BooleanType = BooleanType;
  exports.CCParameter = CCParameter;
  exports.CaladruriProperty = CaladruriProperty;
  exports.CalscaleParameter = CalscaleParameter;
  exports.CaluriProperty = CaluriProperty;
  exports.CategoriesProperty = CategoriesProperty;
  exports.ClientpidmapProperty = ClientpidmapProperty;
  exports.ContactURIProperty = ContactURIProperty;
  exports.DateTimeListType = DateTimeListType;
  exports.DateTimeType = DateTimeType;
  exports.DeathDateProperty = DeathDateProperty;
  exports.DeathPlaceProperty = DeathPlaceProperty;
  exports.EmailProperty = EmailProperty;
  exports.ExpertiseProperty = ExpertiseProperty;
  exports.ExtendedProperty = ExtendedProperty;
  exports.FNProperty = FNProperty;
  exports.FburlProperty = FburlProperty;
  exports.FloatListType = FloatListType;
  exports.FloatType = FloatType;
  exports.GenderProperty = GenderProperty;
  exports.GeoParameter = GeoParameter;
  exports.GeoProperty = GeoProperty;
  exports.Group = Group;
  exports.HobbyProperty = HobbyProperty;
  exports.IMPPProperty = IMPPProperty;
  exports.IndexParameter = IndexParameter;
  exports.IntegerListType = IntegerListType;
  exports.IntegerType = IntegerType;
  exports.InterestProperty = InterestProperty;
  exports.InvalidArgument = InvalidArgument;
  exports.InvalidVcard = InvalidVcard;
  exports.KeyProperty = KeyProperty;
  exports.KindProperty = KindProperty;
  exports.LabelParameter = LabelParameter;
  exports.LangProperty = LangProperty;
  exports.LanguageParameter = LanguageParameter;
  exports.LanguageTagType = LanguageTagType;
  exports.LevelParameter = LevelParameter;
  exports.LogoProperty = LogoProperty;
  exports.MediatypeParameter = MediatypeParameter;
  exports.MemberProperty = MemberProperty;
  exports.MissingArgument = MissingArgument;
  exports.NProperty = NProperty;
  exports.NicknameProperty = NicknameProperty;
  exports.NoteProperty = NoteProperty;
  exports.OrgDirectoryProperty = OrgDirectoryProperty;
  exports.OrgProperty = OrgProperty;
  exports.PIDParameter = PIDParameter;
  exports.PhotoProperty = PhotoProperty;
  exports.PrefParameter = PrefParameter;
  exports.ProdidProperty = ProdidProperty;
  exports.RelatedProperty = RelatedProperty;
  exports.RevProperty = RevProperty;
  exports.RoleProperty = RoleProperty;
  exports.SexType = SexType;
  exports.SortAsParameter = SortAsParameter;
  exports.SoundProperty = SoundProperty;
  exports.SourceProperty = SourceProperty;
  exports.SpecialValueType = SpecialValueType;
  exports.TelProperty = TelProperty;
  exports.TextListType = TextListType;
  exports.TextType = TextType;
  exports.TitleProperty = TitleProperty;
  exports.TypeParameter = TypeParameter;
  exports.TzParameter = TzParameter;
  exports.TzProperty = TzProperty;
  exports.UIDProperty = UIDProperty;
  exports.URIType = URIType;
  exports.URLProperty = URLProperty;
  exports.VCARD = VCARD;
  exports.ValueParameter = ValueParameter;
  exports.XMLProperty = XMLProperty;
  exports.parse = parse;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
