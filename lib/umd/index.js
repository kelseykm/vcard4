(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vcard4 = {}));
})(this, (function (exports) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  function _classPrivateMethodInitSpec(e, a) {
    _checkPrivateRedeclaration(e, a), a.add(e);
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var MissingArgument = /*#__PURE__*/function (_Error) {
    function MissingArgument(message) {
      var _this;
      _classCallCheck(this, MissingArgument);
      _this = _callSuper(this, MissingArgument, [message]);
      _this.name = "MissingArgument";
      return _this;
    }
    _inherits(MissingArgument, _Error);
    return _createClass(MissingArgument);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(MissingArgument);

  var InvalidArgument = /*#__PURE__*/function (_Error) {
    function InvalidArgument(message) {
      var _this;
      _classCallCheck(this, InvalidArgument);
      _this = _callSuper(this, InvalidArgument, [message]);
      _this.name = "InvalidArgument";
      return _this;
    }
    _inherits(InvalidArgument, _Error);
    return _createClass(InvalidArgument);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(InvalidArgument);

  var InvalidVcard = /*#__PURE__*/function (_Error) {
    function InvalidVcard(message) {
      var _this;
      _classCallCheck(this, InvalidVcard);
      _this = _callSuper(this, InvalidVcard, [message]);
      _this.name = "InvalidVcard";
      return _this;
    }
    _inherits(InvalidVcard, _Error);
    return _createClass(InvalidVcard);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  Object.freeze(InvalidVcard);

  var _abstractPropertiesAndMethods$2 = /*#__PURE__*/new WeakMap();
  var BaseValue = /*#__PURE__*/function () {
    function BaseValue() {
      _classCallCheck(this, BaseValue);
      _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods$2, ["type", "value", "valueXML", "valueJSON", "identifier"]);
      if (this.constructor === BaseValue) throw new Error("Cannot create instance of base class");
    }
    return _createClass(BaseValue, [{
      key: "checkAbstractPropertiesAndMethods",
      value: function checkAbstractPropertiesAndMethods() {
        var _this = this;
        if (!_classPrivateFieldGet2(_abstractPropertiesAndMethods$2, this).every(function (abstractPropertyOrMethod) {
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

  var _textValue = /*#__PURE__*/new WeakMap();
  var _TextType_brand = /*#__PURE__*/new WeakSet();
  var TextType = /*#__PURE__*/function (_BaseValue) {
    function TextType(_textValue2) {
      var _this;
      _classCallCheck(this, TextType);
      _this = _callSuper(this, TextType);
      _classPrivateMethodInitSpec(_this, _TextType_brand);
      _classPrivateFieldInitSpec(_this, _textValue, void 0);
      _assertClassBrand(_TextType_brand, _this, _validate$19).call(_this, _textValue2);
      _classPrivateFieldSet2(_textValue, _this, _textValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TextType, _BaseValue);
    return _createClass(TextType, [{
      key: "value",
      get: function get() {
        return _assertClassBrand(_TextType_brand, this, _cleanUp$1).call(this, _classPrivateFieldGet2(_textValue, this));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_assertClassBrand(_TextType_brand, this, _cleanUpXML$1).call(this, _classPrivateFieldGet2(_textValue, this)), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_textValue, this)];
      }
    }, {
      key: "_unsafe_raw_value",
      get: function get() {
        return _classPrivateFieldGet2(_textValue, this);
      }
    }]);
  }(BaseValue);
  function _validate$19(textValue) {
    if (typeof textValue === "undefined" || textValue === "") throw new MissingArgument("Value for TextType must be supplied");else if (typeof textValue !== "string") throw new TypeError("Only type string allowed for TextType value");
  }
  function _cleanUp$1(textValue) {
    return textValue.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(":", "\\:").replaceAll(";", "\\;").replaceAll("\n", "\\n");
  }
  function _cleanUpXML$1(textValue) {
    return textValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
  }
  _defineProperty(TextType, "type", "TEXT");
  _defineProperty(TextType, "identifier", "TextType");
  Object.freeze(TextType);

  var _textlist = /*#__PURE__*/new WeakMap();
  var _TextListType_brand = /*#__PURE__*/new WeakSet();
  var TextListType = /*#__PURE__*/function (_BaseValue) {
    function TextListType(_textlist2) {
      var _this;
      _classCallCheck(this, TextListType);
      _this = _callSuper(this, TextListType);
      _classPrivateMethodInitSpec(_this, _TextListType_brand);
      _classPrivateFieldInitSpec(_this, _textlist, void 0);
      _assertClassBrand(_TextListType_brand, _this, _validate$18).call(_this, _textlist2);
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
  function _validate$18(textlist) {
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
  var _BooleanType_brand = /*#__PURE__*/new WeakSet();
  var BooleanType = /*#__PURE__*/function (_BaseValue) {
    function BooleanType(_boolValue2) {
      var _this;
      _classCallCheck(this, BooleanType);
      _this = _callSuper(this, BooleanType);
      _classPrivateMethodInitSpec(_this, _BooleanType_brand);
      _classPrivateFieldInitSpec(_this, _boolValue, void 0);
      _assertClassBrand(_BooleanType_brand, _this, _validate$17).call(_this, _boolValue2);
      _classPrivateFieldSet2(_boolValue, _this, _boolValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(BooleanType, _BaseValue);
    return _createClass(BooleanType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet2(_boolValue, this));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_boolValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_boolValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$17(boolValue) {
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
  var _MAX_DATETIMEVALUE_LEN = /*#__PURE__*/new WeakMap();
  var _DateTimeType_brand = /*#__PURE__*/new WeakSet();
  var DateTimeType = /*#__PURE__*/function (_BaseValue) {
    function DateTimeType(_type, _dateTimeValue2) {
      var _this;
      _classCallCheck(this, DateTimeType);
      _this = _callSuper(this, DateTimeType);
      _classPrivateMethodInitSpec(_this, _DateTimeType_brand);
      _classPrivateFieldInitSpec(_this, _dateTimeValue, void 0);
      _classPrivateFieldInitSpec(_this, _dateRegExp, /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/);
      _classPrivateFieldInitSpec(_this, _timeRegExp, /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/);
      _classPrivateFieldInitSpec(_this, _dateTimeRegExp, /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/);
      _classPrivateFieldInitSpec(_this, _dateAndOrTimeRegExp, new RegExp("(?:".concat(_classPrivateFieldGet2(_dateRegExp, _this).source, "|").concat(_classPrivateFieldGet2(_timeRegExp, _this).source.replace("^", "^T"), "|").concat(_classPrivateFieldGet2(_dateTimeRegExp, _this).source, ")")));
      _classPrivateFieldInitSpec(_this, _timestampRegExp, /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/);
      _classPrivateFieldInitSpec(_this, _utcOffsetRegExp, /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/);
      _classPrivateFieldInitSpec(_this, _MAX_DATETIMEVALUE_LEN, 20);
      _assertClassBrand(_DateTimeType_brand, _this, _validateAndSetType).call(_this, _type, _dateTimeValue2);
      _classPrivateFieldSet2(_dateTimeValue, _this, _dateTimeValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(DateTimeType, _BaseValue);
    return _createClass(DateTimeType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet2(_dateTimeValue, this));
      }
    }, {
      key: "valueXML",
      get: function get() {
        var tag = this.type.toLowerCase();
        var value = _classPrivateFieldGet2(_dateTimeValue, this);
        if (tag === "date-and-or-time") {
          switch (true) {
            case _classPrivateFieldGet2(_dateRegExp, this).test(value):
              tag = "date";
              break;
            case _classPrivateFieldGet2(_timeRegExp, this).test(value):
              tag = "time";
              break;
            case _classPrivateFieldGet2(_dateTimeRegExp, this).test(value):
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
            value = _extendDate(_classPrivateFieldGet2(_dateTimeValue, this));
            break;
          case "time":
            value = _extendTime(_classPrivateFieldGet2(_dateTimeValue, this));
            break;
          case "date-time":
            value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            break;
          case "date-and-or-time":
            if (_classPrivateFieldGet2(_dateTimeValue, this).includes("T")) {
              value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
              value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            } else value = _extendDate(_classPrivateFieldGet2(_dateTimeValue, this));
            break;
          case "timestamp":
            value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
            break;
          case "utc-offset":
            value = _extendTime(_classPrivateFieldGet2(_dateTimeValue, this));
        }
        return [type, value];
      }
    }]);
  }(BaseValue);
  function _validateAndSetType(type, dateTimeValue) {
    if (typeof dateTimeValue === "undefined" || typeof type === "undefined") throw new MissingArgument("Value and type for DateTimeType must be supplied");else if (!/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(type)) throw new InvalidArgument("Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");else if ("".concat(dateTimeValue).length > _classPrivateFieldGet2(_MAX_DATETIMEVALUE_LEN, this)) throw new InvalidArgument("The value must not exceed ".concat(_classPrivateFieldGet2(_MAX_DATETIMEVALUE_LEN, this), " characters"));
    switch (type) {
      case "date":
        if (!_classPrivateFieldGet2(_dateRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type date of DateTimeType");
        this.type = "DATE";
        break;
      case "time":
        if (!_classPrivateFieldGet2(_timeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type time of DateTimeType");
        this.type = "TIME";
        break;
      case "datetime":
        if (!_classPrivateFieldGet2(_dateTimeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type datetime of DateTimeType");
        this.type = "DATE-TIME";
        break;
      case "dateandortime":
        if (!_classPrivateFieldGet2(_dateAndOrTimeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type dateandortime of DateTimeType");
        this.type = "DATE-AND-OR-TIME";
        break;
      case "timestamp":
        if (!_classPrivateFieldGet2(_timestampRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type timestamp of DateTimeType");
        this.type = "TIMESTAMP";
        break;
      case "utcoffset":
        if (!_classPrivateFieldGet2(_utcOffsetRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type utcoffset of DateTimeType");
        this.type = "UTC-OFFSET";
        break;
      default:
        throw new InvalidArgument("Accepted values for type property of type object for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");
    }
  }
  _defineProperty(DateTimeType, "identifier", "DateTimeType");
  Object.freeze(DateTimeType);

  var _datetimelist = /*#__PURE__*/new WeakMap();
  var _DateTimeListType_brand = /*#__PURE__*/new WeakSet();
  var DateTimeListType = /*#__PURE__*/function (_BaseValue) {
    function DateTimeListType(_datetimelist2) {
      var _this;
      _classCallCheck(this, DateTimeListType);
      _this = _callSuper(this, DateTimeListType);
      _classPrivateMethodInitSpec(_this, _DateTimeListType_brand);
      _classPrivateFieldInitSpec(_this, _datetimelist, void 0);
      _assertClassBrand(_DateTimeListType_brand, _this, _validate$16).call(_this, _datetimelist2);
      _classPrivateFieldSet2(_datetimelist, _this, _datetimelist2);
      _this.type = _datetimelist2[0]["type"];
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(DateTimeListType, _BaseValue);
    return _createClass(DateTimeListType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
          accumulatedDateTimeTypes.push(currentDateTimeType.repr());
          return accumulatedDateTimeTypes;
        }, []).join(",");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
          return accumulatedDateTimeTypes + currentDateTimeType.reprXML();
        }, "");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        var value = _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
          accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
          return accumulatedIntegerTypes;
        }, []);
        value.unshift(this.type.toLowerCase());
        return value;
      }
    }]);
  }(BaseValue);
  function _validate$16(datetimelist) {
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
  var _IntegerType_brand = /*#__PURE__*/new WeakSet();
  var IntegerType = /*#__PURE__*/function (_BaseValue) {
    function IntegerType(_intValue2) {
      var _this;
      _classCallCheck(this, IntegerType);
      _this = _callSuper(this, IntegerType);
      _classPrivateMethodInitSpec(_this, _IntegerType_brand);
      _classPrivateFieldInitSpec(_this, _intValue, void 0);
      _assertClassBrand(_IntegerType_brand, _this, _validate$15).call(_this, _intValue2);
      _classPrivateFieldSet2(_intValue, _this, _intValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(IntegerType, _BaseValue);
    return _createClass(IntegerType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet2(_intValue, this));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_intValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_intValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$15(intValue) {
    if (typeof intValue === "undefined") throw new MissingArgument("Value for IntegerType must be supplied");else if (typeof intValue !== "number" && typeof intValue !== "bigint") throw new TypeError("Value for IntegerType must be of type number or bigint");else if (/\./.test(intValue.toString())) throw new InvalidArgument("Invalid value for IntegerType");else if (typeof intValue === "number" && !(-Number.MAX_SAFE_INTEGER < intValue && intValue < Number.MAX_SAFE_INTEGER)) throw new InvalidArgument("The maximum value is ".concat(Number.MAX_SAFE_INTEGER, ", and the minimum value is ").concat(Number.MIN_SAFE_INTEGER, " for number IntegerType"));else if (typeof intValue === "bigint" && !(-9223372036854775809n < intValue && intValue < 9223372036854775808n)) throw new InvalidArgument("The maximum value is 9223372036854775807n, and the minimum value is -9223372036854775808n for bigint IntegerType");
  }
  _defineProperty(IntegerType, "type", "INTEGER");
  _defineProperty(IntegerType, "identifier", "IntegerType");
  Object.freeze(IntegerType);

  var _integerlist = /*#__PURE__*/new WeakMap();
  var _IntegerListType_brand = /*#__PURE__*/new WeakSet();
  var IntegerListType = /*#__PURE__*/function (_BaseValue) {
    function IntegerListType(_integerlist2) {
      var _this;
      _classCallCheck(this, IntegerListType);
      _this = _callSuper(this, IntegerListType);
      _classPrivateMethodInitSpec(_this, _IntegerListType_brand);
      _classPrivateFieldInitSpec(_this, _integerlist, void 0);
      _assertClassBrand(_IntegerListType_brand, _this, _validate$14).call(_this, _integerlist2);
      _classPrivateFieldSet2(_integerlist, _this, _integerlist2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(IntegerListType, _BaseValue);
    return _createClass(IntegerListType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
          accumulatedIntegerTypes.push(currentIntegerType.repr());
          return accumulatedIntegerTypes;
        }, []).join(",");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
          return accumulatedIntegerTypes + currentIntegerType.reprXML();
        }, "");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        var value = _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
          accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
          return accumulatedIntegerTypes;
        }, []);
        value.unshift(this.constructor.type.toLowerCase());
        return value;
      }
    }]);
  }(BaseValue);
  function _validate$14(integerlist) {
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
  var _FloatType_brand = /*#__PURE__*/new WeakSet();
  var FloatType = /*#__PURE__*/function (_BaseValue) {
    function FloatType(_floatValue2) {
      var _this;
      _classCallCheck(this, FloatType);
      _this = _callSuper(this, FloatType);
      _classPrivateMethodInitSpec(_this, _FloatType_brand);
      _classPrivateFieldInitSpec(_this, _floatValue, void 0);
      _assertClassBrand(_FloatType_brand, _this, _validate$13).call(_this, _floatValue2);
      _classPrivateFieldSet2(_floatValue, _this, _floatValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(FloatType, _BaseValue);
    return _createClass(FloatType, [{
      key: "value",
      get: function get() {
        return "".concat(_classPrivateFieldGet2(_floatValue, this));
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_floatValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_floatValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$13(floatValue) {
    if (typeof floatValue === "undefined") throw new MissingArgument("Value for FloatType must be supplied");
    if (!(typeof floatValue === "number") && !/\./.test(floatValue) || !/^[-+]?\d+\.\d+$/.test(floatValue)) throw new TypeError("Invalid value for FloatType");
  }
  _defineProperty(FloatType, "type", "FLOAT");
  _defineProperty(FloatType, "identifier", "FloatType");
  Object.freeze(FloatType);

  var _floatlist = /*#__PURE__*/new WeakMap();
  var _FloatListType_brand = /*#__PURE__*/new WeakSet();
  var FloatListType = /*#__PURE__*/function (_BaseValue) {
    function FloatListType(_floatlist2) {
      var _this;
      _classCallCheck(this, FloatListType);
      _this = _callSuper(this, FloatListType);
      _classPrivateMethodInitSpec(_this, _FloatListType_brand);
      _classPrivateFieldInitSpec(_this, _floatlist, void 0);
      _assertClassBrand(_FloatListType_brand, _this, _validate$12).call(_this, _floatlist2);
      _classPrivateFieldSet2(_floatlist, _this, _floatlist2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(FloatListType, _BaseValue);
    return _createClass(FloatListType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
          accumulatedFloatTypes.push(currentFloatType.repr());
          return accumulatedFloatTypes;
        }, []).join(",");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
          return accumulatedFloatTypes + currentFloatType.reprXML();
        }, "");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        var value = _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
          accumulatedFloatTypes.push(currentFloatType.reprJSON().pop());
          return accumulatedFloatTypes;
        }, []);
        value.unshift(this.constructor.type.toLowerCase());
        return value;
      }
    }]);
  }(BaseValue);
  function _validate$12(floatlist) {
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
  var _langTagRegexp = /*#__PURE__*/new WeakMap();
  var _MAX_LANGTAGVALUE_LEN = /*#__PURE__*/new WeakMap();
  var _LanguageTagType_brand = /*#__PURE__*/new WeakSet();
  var LanguageTagType = /*#__PURE__*/function (_BaseValue) {
    function LanguageTagType(_langTagValue2) {
      var _this;
      _classCallCheck(this, LanguageTagType);
      _this = _callSuper(this, LanguageTagType);
      _classPrivateMethodInitSpec(_this, _LanguageTagType_brand);
      _classPrivateFieldInitSpec(_this, _langTagValue, void 0);
      _classPrivateFieldInitSpec(_this, _langTagRegexp, /^(?:[a-zA-Z]{2,3}(-[a-zA-Z]{3}){0,3})(-[0-9A-Za-z]+){0,3}(-x(-[0-9A-Za-z]{1,8})+)?(-[0-9A-WY-Za-wy-z]+)?(-[0-9A-Za-z]+)?$/);
      _classPrivateFieldInitSpec(_this, _MAX_LANGTAGVALUE_LEN, 255);
      _assertClassBrand(_LanguageTagType_brand, _this, _validate$11).call(_this, _langTagValue2);
      _classPrivateFieldSet2(_langTagValue, _this, _langTagValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LanguageTagType, _BaseValue);
    return _createClass(LanguageTagType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_langTagValue, this);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_langTagValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_langTagValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$11(langTagValue) {
    if (typeof langTagValue === "undefined") throw new MissingArgument("Value for LanguageTagType must be supplied");else if (typeof langTagValue !== "string") throw new TypeError("Value for LanguageTagType should be of type string");else if (langTagValue.length > _classPrivateFieldGet2(_MAX_LANGTAGVALUE_LEN, this)) throw new InvalidArgument("Value for LanguageTagType must not exceed ".concat(_classPrivateFieldGet2(_MAX_LANGTAGVALUE_LEN, this), " characters"));else if (!_classPrivateFieldGet2(_langTagRegexp, this).test(langTagValue)) throw new InvalidArgument("Invalid language tag");
  }
  _defineProperty(LanguageTagType, "type", "LANGUAGE-TAG");
  _defineProperty(LanguageTagType, "identifier", "LanguageTagType");
  Object.freeze(LanguageTagType);

  var _uriValue = /*#__PURE__*/new WeakMap();
  var _URIType_brand = /*#__PURE__*/new WeakSet();
  var URIType = /*#__PURE__*/function (_BaseValue) {
    function URIType(_uriValue2) {
      var _this;
      _classCallCheck(this, URIType);
      _this = _callSuper(this, URIType);
      _classPrivateMethodInitSpec(_this, _URIType_brand);
      _classPrivateFieldInitSpec(_this, _uriValue, void 0);
      _assertClassBrand(_URIType_brand, _this, _validate$10).call(_this, _uriValue2);
      _classPrivateFieldSet2(_uriValue, _this, _uriValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(URIType, _BaseValue);
    return _createClass(URIType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_uriValue, this);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_uriValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_uriValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$10(uriValue) {
    if (typeof uriValue === "undefined") throw new MissingArgument("Value for URIType must be supplied");else if (typeof uriValue !== "string") throw new TypeError("Value for URIType should be of type string");else if (!URL.canParse(uriValue)) throw new InvalidArgument("Invalid URI");
  }
  _defineProperty(URIType, "type", "URI");
  _defineProperty(URIType, "identifier", "URIType");
  Object.freeze(URIType);

  var _sexRegExp = /*#__PURE__*/new WeakMap();
  var _sexValue = /*#__PURE__*/new WeakMap();
  var _SexType_brand = /*#__PURE__*/new WeakSet();
  var SexType = /*#__PURE__*/function (_BaseValue) {
    function SexType(_sexValue2) {
      var _this;
      _classCallCheck(this, SexType);
      _this = _callSuper(this, SexType);
      _classPrivateMethodInitSpec(_this, _SexType_brand);
      _classPrivateFieldInitSpec(_this, _sexRegExp, /^[MFONU]$/);
      _classPrivateFieldInitSpec(_this, _sexValue, void 0);
      _assertClassBrand(_SexType_brand, _this, _validate$$).call(_this, _sexValue2);
      _classPrivateFieldSet2(_sexValue, _this, _sexValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(SexType, _BaseValue);
    return _createClass(SexType, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_sexValue, this);
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<sex>".concat(_classPrivateFieldGet2(_sexValue, this), "</sex>");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_sexValue, this)];
      }
    }]);
  }(BaseValue);
  function _validate$$(sexValue) {
    if (typeof sexValue === "undefined") throw new MissingArgument("Value for SexType must be supplied");else if (!_classPrivateFieldGet2(_sexRegExp, this).test(sexValue)) throw new InvalidArgument("Invalid sex");
  }
  _defineProperty(SexType, "type", "TEXT");
  _defineProperty(SexType, "identifier", "SexType");
  Object.freeze(SexType);

  var _SpecialValueType_brand = /*#__PURE__*/new WeakSet();
  var SpecialValueType = /*#__PURE__*/function (_BaseValue) {
    function SpecialValueType(_targetProp, _value) {
      var _this;
      _classCallCheck(this, SpecialValueType);
      _this = _callSuper(this, SpecialValueType);
      _classPrivateMethodInitSpec(_this, _SpecialValueType_brand);
      _assertClassBrand(_SpecialValueType_brand, _this, _validateAndSet).call(_this, _targetProp, _value);
      _this.targetProp = _targetProp.toUpperCase();
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(SpecialValueType, _BaseValue);
    return _createClass(SpecialValueType);
  }(BaseValue);
  function _validateAndSet(targetProp, value) {
    var _value$, _value$2;
    if (typeof value === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for SpecialValueType must be supplied");
    var valueRegExp = /^(?:individual|group|org|location|application|x-[a-z0-9-]+)$/i;
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
        for (var index = 0; index < value.length; index++) if (value[index]) if (value[index].constructor.identifier !== "TextType" && value[index].constructor.identifier !== "TextListType") throw new TypeError("Invalid value for SpecialValueType for NProperty. The items in the array, if present, should be of type TextType or TextListType");
        valueCopy = _toConsumableArray(value);
        for (var _index = 0; _index < valueCopy.length; _index++) if (valueCopy[_index]) valueCopy[_index] = valueCopy[_index].repr();
        this.value = valueCopy.join(";");
        this.valueXML = "";
        this.valueJSON = [];
        for (var _index2 = 0; _index2 < value.length; _index2++) switch (_index2) {
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
        for (var _index3 = 0; _index3 < value.length; _index3++) if (value[_index3]) if (value[_index3].constructor.identifier !== "TextType") throw new TypeError("Invalid value for SpecialValueType for AdrProperty. The items in the array, if present, should be of type TextType");
        valueCopy = _toConsumableArray(value);
        for (var _index4 = 0; _index4 < valueCopy.length; _index4++) if (valueCopy[_index4]) valueCopy[_index4] = valueCopy[_index4].repr();
        this.value = valueCopy.join(";");
        this.valueXML = "";
        this.valueJSON = [];
        for (var _index5 = 0; _index5 < value.length; _index5++) switch (_index5) {
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
        this.valueJSON = [this.constructor.type.toLowerCase(), this.valueJSON];
        break;
      case /^OrgProperty$/i.test(targetProp):
        if (!Array.isArray(value) || !(value.length >= 1)) throw new InvalidArgument("Invalid value for SpecialValueType for OrgProperty. It should be an array with at least one item");
        for (var _index6 = 0; _index6 < value.length; _index6++) {
          var _value$_index;
          if (((_value$_index = value[_index6]) === null || _value$_index === void 0 || (_value$_index = _value$_index.constructor) === null || _value$_index === void 0 ? void 0 : _value$_index.identifier) !== "TextType") throw new TypeError("Invalid value for SpecialValueType for OrgProperty. The items in the array should be of type TextType");
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
        if (!Array.isArray(value) || value.length !== 2) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2");else if (((_value$ = value[0]) === null || _value$ === void 0 || (_value$ = _value$.constructor) === null || _value$ === void 0 ? void 0 : _value$.identifier) !== "IntegerType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType");else if (0 >= Number(value[0].repr())) throw new InvalidArgument("Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType. Zero is not allowed");else if (((_value$2 = value[1]) === null || _value$2 === void 0 || (_value$2 = _value$2.constructor) === null || _value$2 === void 0 ? void 0 : _value$2.identifier) !== "URIType") throw new TypeError("Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType");
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

  var _parameterValue = /*#__PURE__*/new WeakMap();
  var _ParameterValueType_brand = /*#__PURE__*/new WeakSet();
  var ParameterValueType = /*#__PURE__*/function (_BaseValue) {
    function ParameterValueType(_parameterValue2) {
      var _this;
      _classCallCheck(this, ParameterValueType);
      _this = _callSuper(this, ParameterValueType);
      _classPrivateMethodInitSpec(_this, _ParameterValueType_brand);
      _classPrivateFieldInitSpec(_this, _parameterValue, void 0);
      _assertClassBrand(_ParameterValueType_brand, _this, _validate$_).call(_this, _parameterValue2);
      _classPrivateFieldSet2(_parameterValue, _this, _parameterValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ParameterValueType, _BaseValue);
    return _createClass(ParameterValueType, [{
      key: "value",
      get: function get() {
        var cleanVal = _assertClassBrand(_ParameterValueType_brand, this, _cleanUp).call(this, _classPrivateFieldGet2(_parameterValue, this));
        return /[:;]/.test(cleanVal) ? "\"".concat(cleanVal, "\"") : cleanVal;
      }
    }, {
      key: "valueXML",
      get: function get() {
        return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_assertClassBrand(_ParameterValueType_brand, this, _cleanUpXML).call(this, _classPrivateFieldGet2(_parameterValue, this)), "</").concat(this.constructor.type.toLowerCase(), ">");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_parameterValue, this)];
      }
    }, {
      key: "_unsafe_raw_value",
      get: function get() {
        return _classPrivateFieldGet2(_parameterValue, this);
      }
    }]);
  }(BaseValue);
  function _validate$_(parameterValue) {
    if (typeof parameterValue === "undefined" || parameterValue === "") throw new MissingArgument("Value for ParameterValueType must be supplied");else if (typeof parameterValue !== "string") throw new TypeError("Only type string allowed for ParameterValueType value");else if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(parameterValue)) {
      throw new InvalidArgument("Value includes forbidden characters");
    }
  }
  function _cleanUp(parameterValue) {
    return parameterValue.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
  }
  function _cleanUpXML(parameterValue) {
    return parameterValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
  }
  _defineProperty(ParameterValueType, "type", "TEXT");
  _defineProperty(ParameterValueType, "identifier", "ParameterValueType");
  Object.freeze(ParameterValueType);

  var _abstractPropertiesAndMethods$1 = /*#__PURE__*/new WeakMap();
  var BaseParameter = /*#__PURE__*/function () {
    function BaseParameter() {
      _classCallCheck(this, BaseParameter);
      _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods$1, ["param", "value", "valueXML", "valueJSON", "identifier"]);
      if (this.constructor === BaseParameter) throw new Error("Cannot create instance of base class");
    }
    return _createClass(BaseParameter, [{
      key: "checkAbstractPropertiesAndMethods",
      value: function checkAbstractPropertiesAndMethods() {
        var _this = this;
        if (!_classPrivateFieldGet2(_abstractPropertiesAndMethods$1, this).every(function (abstractPropertyOrMethod) {
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
  }();
  Object.freeze(BaseParameter);

  var _langTag = /*#__PURE__*/new WeakMap();
  var _LanguageParameter_brand = /*#__PURE__*/new WeakSet();
  var LanguageParameter = /*#__PURE__*/function (_BaseParameter) {
    function LanguageParameter(_langTag2) {
      var _this;
      _classCallCheck(this, LanguageParameter);
      _this = _callSuper(this, LanguageParameter);
      _classPrivateMethodInitSpec(_this, _LanguageParameter_brand);
      _classPrivateFieldInitSpec(_this, _langTag, void 0);
      _assertClassBrand(_LanguageParameter_brand, _this, _validate$Z).call(_this, _langTag2);
      _classPrivateFieldSet2(_langTag, _this, _langTag2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LanguageParameter, _BaseParameter);
    return _createClass(LanguageParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_langTag, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_langTag, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_langTag, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$Z(langTag) {
    if (typeof langTag === "undefined") throw new MissingArgument("Language Tag for LanguageParameter must be supplied");else if (langTag.constructor.identifier !== "LanguageTagType") throw new TypeError("The value of the LANGUAGE property parameter should be of type LanguageTagType");
  }
  _defineProperty(LanguageParameter, "param", "LANGUAGE");
  _defineProperty(LanguageParameter, "identifier", "LanguageParameter");
  Object.freeze(LanguageParameter);

  var _valueType = /*#__PURE__*/new WeakMap();
  var _ValueParameter_brand = /*#__PURE__*/new WeakSet();
  var ValueParameter = /*#__PURE__*/function (_BaseParameter) {
    function ValueParameter(_valueType2) {
      var _this;
      _classCallCheck(this, ValueParameter);
      _this = _callSuper(this, ValueParameter);
      _classPrivateMethodInitSpec(_this, _ValueParameter_brand);
      _classPrivateFieldInitSpec(_this, _valueType, void 0);
      _assertClassBrand(_ValueParameter_brand, _this, _validate$Y).call(_this, _valueType2);
      _classPrivateFieldSet2(_valueType, _this, _valueType2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ValueParameter, _BaseParameter);
    return _createClass(ValueParameter, [{
      key: "value",
      get: function get() {
        var type = _classPrivateFieldGet2(_valueType, this).type || _classPrivateFieldGet2(_valueType, this).constructor.type;
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
  }(BaseParameter);
  function _validate$Y(valueType) {
    if (typeof valueType === "undefined") throw new MissingArgument("Value for ValueParameter must be supplied");
    if (!Object.prototype.hasOwnProperty.call(valueType, "type") && !Object.prototype.hasOwnProperty.call(valueType.constructor, "type")) throw new InvalidArgument("Value for ValueParameter not recognized");
  }
  _defineProperty(ValueParameter, "param", "VALUE");
  _defineProperty(ValueParameter, "identifier", "ValueParameter");
  Object.freeze(ValueParameter);

  var _prefValue = /*#__PURE__*/new WeakMap();
  var _PrefParameter_brand = /*#__PURE__*/new WeakSet();
  var PrefParameter = /*#__PURE__*/function (_BaseParameter) {
    function PrefParameter(_prefValue2) {
      var _this;
      _classCallCheck(this, PrefParameter);
      _this = _callSuper(this, PrefParameter);
      _classPrivateMethodInitSpec(_this, _PrefParameter_brand);
      _classPrivateFieldInitSpec(_this, _prefValue, void 0);
      _assertClassBrand(_PrefParameter_brand, _this, _validate$X).call(_this, _prefValue2);
      _classPrivateFieldSet2(_prefValue, _this, _prefValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(PrefParameter, _BaseParameter);
    return _createClass(PrefParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_prefValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_prefValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_prefValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$X(prefValue) {
    if (typeof prefValue === "undefined") throw new MissingArgument("Value for PrefParameter must be supplied");else if (prefValue.constructor.identifier !== "IntegerType") throw new TypeError("Value for PrefParameter should be of type IntegerType");else if (Number(prefValue.repr()) < 1 || Number(prefValue.repr()) > 100) throw new InvalidArgument("Value for PrefParameter must be between 1 and 100");
  }
  _defineProperty(PrefParameter, "param", "PREF");
  _defineProperty(PrefParameter, "identifier", "PrefParameter");
  Object.freeze(PrefParameter);

  var _altidValue = /*#__PURE__*/new WeakMap();
  var _AltidParameter_brand = /*#__PURE__*/new WeakSet();
  var AltidParameter = /*#__PURE__*/function (_BaseParameter) {
    function AltidParameter(_altidValue2) {
      var _this;
      _classCallCheck(this, AltidParameter);
      _this = _callSuper(this, AltidParameter);
      _classPrivateMethodInitSpec(_this, _AltidParameter_brand);
      _classPrivateFieldInitSpec(_this, _altidValue, void 0);
      _assertClassBrand(_AltidParameter_brand, _this, _validate$W).call(_this, _altidValue2);
      _classPrivateFieldSet2(_altidValue, _this, _altidValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(AltidParameter, _BaseParameter);
    return _createClass(AltidParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_altidValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_altidValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_altidValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$W(altidValue) {
    if (typeof altidValue === "undefined") throw new MissingArgument("Value for AltidParameter must be supplied");else if (altidValue.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Value for AltidParameter must be of type ParameterValueType");
  }
  _defineProperty(AltidParameter, "param", "ALTID");
  _defineProperty(AltidParameter, "identifier", "AltidParameter");
  Object.freeze(AltidParameter);

  var _pidValue = /*#__PURE__*/new WeakMap();
  var _pidRegExp = /*#__PURE__*/new WeakMap();
  var _PIDParameter_brand = /*#__PURE__*/new WeakSet();
  var PIDParameter = /*#__PURE__*/function (_BaseParameter) {
    function PIDParameter(_pidValue2) {
      var _this;
      _classCallCheck(this, PIDParameter);
      _this = _callSuper(this, PIDParameter);
      _classPrivateMethodInitSpec(_this, _PIDParameter_brand);
      _classPrivateFieldInitSpec(_this, _pidValue, void 0);
      _classPrivateFieldInitSpec(_this, _pidRegExp, /^\d+(?:\.\d+)?$/);
      _assertClassBrand(_PIDParameter_brand, _this, _validate$V).call(_this, _pidValue2);
      _classPrivateFieldSet2(_pidValue, _this, _pidValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(PIDParameter, _BaseParameter);
    return _createClass(PIDParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? _classPrivateFieldGet2(_pidValue, this).map(function (val) {
          if (Array.isArray(val)) return val.map(function (innerVal) {
            return innerVal.repr();
          }).join(".");
          return val.repr();
        }).join(",") : _classPrivateFieldGet2(_pidValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        var xml = Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? _classPrivateFieldGet2(_pidValue, this).map(function (val) {
          if (Array.isArray(val)) return "<integer>" + val.map(function (innerVal) {
            return innerVal.repr();
          }).join(".") + "</integer>";
          return val.reprXML();
        }).join("") : _classPrivateFieldGet2(_pidValue, this).reprXML();
        return xml.replaceAll("integer", "text");
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_pidValue, this)) ? ["integer"].concat(_toConsumableArray(_classPrivateFieldGet2(_pidValue, this).map(function (val) {
          if (Array.isArray(val)) return Number(val.map(function (innerVal) {
            return innerVal.repr();
          }).join("."));
          return val.reprJSON().pop();
        }))) : _classPrivateFieldGet2(_pidValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$V(pidValue) {
    if (typeof pidValue === "undefined") throw new MissingArgument("Value for PIDParameter must be supplied");else if (!Array.isArray(pidValue) && pidValue.constructor.identifier !== "IntegerType") throw new InvalidArgument("Invalid value for PIDParameter");else if (Array.isArray(pidValue) && !pidValue.every(function (val1) {
      if (Array.isArray(val1)) return val1.length === 2 && val1.every(function (val2) {
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
  var _TypeParameter_brand = /*#__PURE__*/new WeakSet();
  var TypeParameter = /*#__PURE__*/function (_BaseParameter) {
    function TypeParameter(_targetProp, _typeValue2) {
      var _this;
      _classCallCheck(this, TypeParameter);
      _this = _callSuper(this, TypeParameter);
      _classPrivateMethodInitSpec(_this, _TypeParameter_brand);
      _classPrivateFieldInitSpec(_this, _typeValue, void 0);
      _classPrivateFieldInitSpec(_this, _typeRegExp, /^(?:work|home|x-[a-z0-9-]+)$/i);
      _classPrivateFieldInitSpec(_this, _telTypeRegExp, /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i);
      _classPrivateFieldInitSpec(_this, _relatedTypeRegExp, /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i);
      _assertClassBrand(_TypeParameter_brand, _this, _validate$U).call(_this, _targetProp, _typeValue2);
      _classPrivateFieldSet2(_typeValue, _this, _typeValue2);
      _this.targetProp = _targetProp.toUpperCase();
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TypeParameter, _BaseParameter);
    return _createClass(TypeParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? "\"".concat(_classPrivateFieldGet2(_typeValue, this).map(function (val) {
          return val.repr();
        }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet2(_typeValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? _classPrivateFieldGet2(_typeValue, this).map(function (val) {
          return val.reprXML();
        }).join("") : _classPrivateFieldGet2(_typeValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_typeValue, this)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet2(_typeValue, this).map(function (val) {
          return val._unsafe_raw_value;
        }))) : _classPrivateFieldGet2(_typeValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$U(targetProp, typeValue) {
    var _this2 = this;
    if (typeof typeValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for TypeParameter must be supplied");else if (!(!Array.isArray(typeValue) && typeValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(typeValue) && typeValue.every(function (val) {
      return val.constructor.identifier === "ParameterValueType";
    }))) throw new TypeError("Value for TypeParameter must be of type ParameterValueType or an array of ParameterValueTypes");
    var telre = new RegExp("(?:".concat(_classPrivateFieldGet2(_telTypeRegExp, this).source, "|").concat(_classPrivateFieldGet2(_typeRegExp, this).source, ")"), "i");
    var relatedre = new RegExp("(?:".concat(_classPrivateFieldGet2(_relatedTypeRegExp, this).source, "|").concat(_classPrivateFieldGet2(_typeRegExp, this).source, ")"), "i");
    switch (true) {
      case /^TelProperty$/i.test(targetProp):
        if (!(!Array.isArray(typeValue) && telre.test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
          return telre.test(type.repr());
        }))) throw new InvalidArgument("Invalid value for TypeParameter for TelProperty");
        break;
      case /^RelatedProperty$/i.test(targetProp):
        if (!(!Array.isArray(typeValue) && relatedre.test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
          return relatedre.test(type.repr());
        }))) throw new InvalidArgument("Invalid value for TypeParameter for RelatedProperty");
        break;
      default:
        if (!(!Array.isArray(typeValue) && _classPrivateFieldGet2(_typeRegExp, this).test(typeValue.repr())) && !(Array.isArray(typeValue) && typeValue.every(function (type) {
          return _classPrivateFieldGet2(_typeRegExp, _this2).test(type.repr());
        }))) throw new InvalidArgument("Invalid value for TypeParameter");
    }
  }
  _defineProperty(TypeParameter, "param", "TYPE");
  _defineProperty(TypeParameter, "identifier", "TypeParameter");
  Object.freeze(TypeParameter);

  var _mediaTypeRegExp = /*#__PURE__*/new WeakMap();
  var _attributeRegExp = /*#__PURE__*/new WeakMap();
  var _mediaValue = /*#__PURE__*/new WeakMap();
  var _MediatypeParameter_brand = /*#__PURE__*/new WeakSet();
  var MediatypeParameter = /*#__PURE__*/function (_BaseParameter) {
    function MediatypeParameter(_mediaValue2) {
      var _this;
      _classCallCheck(this, MediatypeParameter);
      _this = _callSuper(this, MediatypeParameter);
      _classPrivateMethodInitSpec(_this, _MediatypeParameter_brand);
      _classPrivateFieldInitSpec(_this, _mediaTypeRegExp, /^(?:[A-Za-z0-9!#\$&\.\+\-\^_]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^_]){1,127}$/);
      _classPrivateFieldInitSpec(_this, _attributeRegExp, /^[A-Za-z0-9!#\$&\.\+\-\^_]+=[A-Za-z0-9!#\$&\.\+\-\^_]+$/);
      _classPrivateFieldInitSpec(_this, _mediaValue, void 0);
      _assertClassBrand(_MediatypeParameter_brand, _this, _validate$T).call(_this, _mediaValue2);
      _classPrivateFieldSet2(_mediaValue, _this, _mediaValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(MediatypeParameter, _BaseParameter);
    return _createClass(MediatypeParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_mediaValue, this)) ? "\"".concat(_classPrivateFieldGet2(_mediaValue, this).map(function (val) {
          return val.repr();
        }).join(";"), "\"") : _classPrivateFieldGet2(_mediaValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_mediaValue, this)) ? "<text>" + _classPrivateFieldGet2(_mediaValue, this).map(function (val) {
          return val.reprXML();
        }).join(";").replace(/<\/?text>/g, "") + "</text>" : _classPrivateFieldGet2(_mediaValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        if (Array.isArray(_classPrivateFieldGet2(_mediaValue, this))) return ["text", _classPrivateFieldGet2(_mediaValue, this).map(function (val) {
          return val._unsafe_raw_value;
        }).join(";")];
        return _classPrivateFieldGet2(_mediaValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$T(mediaValue) {
    if (typeof mediaValue === "undefined") throw new MissingArgument("Value for MediatypeParameter must be supplied");else if (!Array.isArray(mediaValue) && mediaValue.constructor.identifier !== "ParameterValueType" || Array.isArray(mediaValue) && !mediaValue.every(function (val) {
      return val.constructor.identifier === "ParameterValueType";
    })) throw new TypeError("Value for MediatypeParameter must be of ParameterValueType or an array of ParameterValueTypes");else if (!Array.isArray(mediaValue) && !_classPrivateFieldGet2(_mediaTypeRegExp, this).test(mediaValue.repr())) throw new InvalidArgument("Invalid media type");else if (Array.isArray(mediaValue)) {
      if (mediaValue.length !== 2) throw new InvalidArgument("Invalid value for MediatypeParameter. It should be an array with a length of 2");else if (!_classPrivateFieldGet2(_mediaTypeRegExp, this).test(mediaValue[0].repr())) throw new InvalidArgument("Invalid media type");else if (!_classPrivateFieldGet2(_attributeRegExp, this).test(mediaValue[1].repr())) throw new InvalidArgument("Invalid media type");
    }
  }
  _defineProperty(MediatypeParameter, "param", "MEDIATYPE");
  _defineProperty(MediatypeParameter, "identifier", "MediatypeParameter");
  Object.freeze(MediatypeParameter);

  var _calscaleValue = /*#__PURE__*/new WeakMap();
  var _calscaleRegExp = /*#__PURE__*/new WeakMap();
  var _CalscaleParameter_brand = /*#__PURE__*/new WeakSet();
  var CalscaleParameter = /*#__PURE__*/function (_BaseParameter) {
    function CalscaleParameter(_calscaleValue2) {
      var _this;
      _classCallCheck(this, CalscaleParameter);
      _this = _callSuper(this, CalscaleParameter);
      _classPrivateMethodInitSpec(_this, _CalscaleParameter_brand);
      _classPrivateFieldInitSpec(_this, _calscaleValue, void 0);
      _classPrivateFieldInitSpec(_this, _calscaleRegExp, /^(?:gregorian|[Xx]-[A-Za-z0-9-]+)$/);
      _assertClassBrand(_CalscaleParameter_brand, _this, _validate$S).call(_this, _calscaleValue2);
      _classPrivateFieldSet2(_calscaleValue, _this, _calscaleValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(CalscaleParameter, _BaseParameter);
    return _createClass(CalscaleParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_calscaleValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_calscaleValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_calscaleValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$S(calscaleValue) {
    if (typeof calscaleValue === "undefined") throw new MissingArgument("Value for CalscaleParameter must be supplied");else if (calscaleValue.constructor.identifier !== "ParameterValueType") throw new MissingArgument("Value for CalscaleParameter must of type ParameterValueType");else if (!_classPrivateFieldGet2(_calscaleRegExp, this).test(calscaleValue.repr())) throw new InvalidArgument("Invalid calscale value");
  }
  _defineProperty(CalscaleParameter, "param", "CALSCALE");
  _defineProperty(CalscaleParameter, "identifier", "CalscaleParameter");
  Object.freeze(CalscaleParameter);

  var _sortValue = /*#__PURE__*/new WeakMap();
  var _SortAsParameter_brand = /*#__PURE__*/new WeakSet();
  var SortAsParameter = /*#__PURE__*/function (_BaseParameter) {
    function SortAsParameter(_sortValue2) {
      var _this;
      _classCallCheck(this, SortAsParameter);
      _this = _callSuper(this, SortAsParameter);
      _classPrivateMethodInitSpec(_this, _SortAsParameter_brand);
      _classPrivateFieldInitSpec(_this, _sortValue, void 0);
      _assertClassBrand(_SortAsParameter_brand, _this, _validate$R).call(_this, _sortValue2);
      _classPrivateFieldSet2(_sortValue, _this, _sortValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(SortAsParameter, _BaseParameter);
    return _createClass(SortAsParameter, [{
      key: "value",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? "\"".concat(_classPrivateFieldGet2(_sortValue, this).map(function (val) {
          return val.repr();
        }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet2(_sortValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? _classPrivateFieldGet2(_sortValue, this).map(function (val) {
          return val.reprXML();
        }).join("") : _classPrivateFieldGet2(_sortValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return Array.isArray(_classPrivateFieldGet2(_sortValue, this)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet2(_sortValue, this).map(function (val) {
          return val._unsafe_raw_value;
        }))) : _classPrivateFieldGet2(_sortValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$R(sortValue) {
    if (typeof sortValue === "undefined") throw new MissingArgument("Value for SortAsParameter must be supplied");else if (!(!Array.isArray(sortValue) && sortValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(sortValue) && sortValue.every(function (val) {
      return val.constructor.identifier === "ParameterValueType";
    }))) throw new TypeError("Value for SortAsParameter must be of type ParameterValueType or an array of ParameterValueTypes");
  }
  _defineProperty(SortAsParameter, "param", "SORT-AS");
  _defineProperty(SortAsParameter, "identifier", "SortAsParameter");
  Object.freeze(SortAsParameter);

  var _geoValue = /*#__PURE__*/new WeakMap();
  var _GeoParameter_brand = /*#__PURE__*/new WeakSet();
  var GeoParameter = /*#__PURE__*/function (_BaseParameter) {
    function GeoParameter(_geoValue2) {
      var _this;
      _classCallCheck(this, GeoParameter);
      _this = _callSuper(this, GeoParameter);
      _classPrivateMethodInitSpec(_this, _GeoParameter_brand);
      _classPrivateFieldInitSpec(_this, _geoValue, void 0);
      _assertClassBrand(_GeoParameter_brand, _this, _validate$Q).call(_this, _geoValue2);
      _classPrivateFieldSet2(_geoValue, _this, _geoValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(GeoParameter, _BaseParameter);
    return _createClass(GeoParameter, [{
      key: "value",
      get: function get() {
        return "\"".concat(_classPrivateFieldGet2(_geoValue, this).repr(), "\"");
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_geoValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_geoValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$Q(geoValue) {
    if (typeof geoValue === "undefined") throw new MissingArgument("Value for GeoParameter must be supplied");else if (geoValue.constructor.identifier !== "URIType") throw new TypeError("Value for GeoParameter must be of type URIType");
  }
  _defineProperty(GeoParameter, "param", "GEO");
  _defineProperty(GeoParameter, "identifier", "GeoParameter");
  Object.freeze(GeoParameter);

  var _tzValue = /*#__PURE__*/new WeakMap();
  var _TzParameter_brand = /*#__PURE__*/new WeakSet();
  var TzParameter = /*#__PURE__*/function (_BaseParameter) {
    function TzParameter(_tzValue2) {
      var _this;
      _classCallCheck(this, TzParameter);
      _this = _callSuper(this, TzParameter);
      _classPrivateMethodInitSpec(_this, _TzParameter_brand);
      _classPrivateFieldInitSpec(_this, _tzValue, void 0);
      _assertClassBrand(_TzParameter_brand, _this, _validate$P).call(_this, _tzValue2);
      _classPrivateFieldSet2(_tzValue, _this, _tzValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TzParameter, _BaseParameter);
    return _createClass(TzParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_tzValue, this).constructor.identifier === "URIType" ? "\"".concat(_classPrivateFieldGet2(_tzValue, this).repr(), "\"") : _classPrivateFieldGet2(_tzValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_tzValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_tzValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$P(tzValue) {
    if (typeof tzValue === "undefined") throw new MissingArgument("Value for TzParameter must be supplied");
    if (tzValue.constructor.identifier !== "ParameterValueType" && tzValue.constructor.identifier !== "URIType" && !(tzValue.constructor.identifier === "DateTimeType" && tzValue.type === "UTC-OFFSET")) throw new TypeError("Invalid type for value for TzParameter");
  }
  _defineProperty(TzParameter, "param", "TZ");
  _defineProperty(TzParameter, "identifier", "TzParameter");
  Object.freeze(TzParameter);

  var _value$I = /*#__PURE__*/new WeakMap();
  var _param = /*#__PURE__*/new WeakMap();
  var _paramRegExp = /*#__PURE__*/new WeakMap();
  var _AnyParameter_brand = /*#__PURE__*/new WeakSet();
  var AnyParameter = /*#__PURE__*/function (_BaseParameter) {
    function AnyParameter(_param2, _value2) {
      var _this;
      _classCallCheck(this, AnyParameter);
      _this = _callSuper(this, AnyParameter);
      _classPrivateMethodInitSpec(_this, _AnyParameter_brand);
      _classPrivateFieldInitSpec(_this, _value$I, void 0);
      _classPrivateFieldInitSpec(_this, _param, void 0);
      _classPrivateFieldInitSpec(_this, _paramRegExp, /^x-[a-z0-9-]+$/i);
      _assertClassBrand(_AnyParameter_brand, _this, _validate$O).call(_this, _param2, _value2);
      _classPrivateFieldSet2(_param, _this, _param2);
      _classPrivateFieldSet2(_value$I, _this, _value2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(AnyParameter, _BaseParameter);
    return _createClass(AnyParameter, [{
      key: "param",
      get: function get() {
        return "".concat(_classPrivateFieldGet2(_param, this));
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$I, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$I, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$I, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$O(param, value) {
    if (typeof param === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameter name and value for AnyParameter must be supplied");else if (!_classPrivateFieldGet2(_paramRegExp, this).test(param)) throw new InvalidArgument("Invalid parameter name for AnyParameter");else if (value.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Invalid value for AnyParameter");
  }
  _defineProperty(AnyParameter, "identifier", "AnyParameter");
  Object.freeze(AnyParameter);

  var _labelValue = /*#__PURE__*/new WeakMap();
  var _LabelParameter_brand = /*#__PURE__*/new WeakSet();
  var LabelParameter = /*#__PURE__*/function (_BaseParameter) {
    function LabelParameter(_labelValue2) {
      var _this;
      _classCallCheck(this, LabelParameter);
      _this = _callSuper(this, LabelParameter);
      _classPrivateMethodInitSpec(_this, _LabelParameter_brand);
      _classPrivateFieldInitSpec(_this, _labelValue, void 0);
      _assertClassBrand(_LabelParameter_brand, _this, _validate$N).call(_this, _labelValue2);
      _classPrivateFieldSet2(_labelValue, _this, _labelValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LabelParameter, _BaseParameter);
    return _createClass(LabelParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_labelValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_labelValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_labelValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$N(labelValue) {
    if (typeof labelValue === "undefined") throw new MissingArgument("Value for LabelParameter must be supplied");else if (labelValue.constructor.identifier !== "ParameterValueType") throw new TypeError("Value for LabelParameter should be of type ParameterValueType");
  }
  _defineProperty(LabelParameter, "param", "LABEL");
  _defineProperty(LabelParameter, "identifier", "LabelParameter");
  Object.freeze(LabelParameter);

  var _ccValue = /*#__PURE__*/new WeakMap();
  var _CCParameter_brand = /*#__PURE__*/new WeakSet();
  var CCParameter = /*#__PURE__*/function (_BaseParameter) {
    function CCParameter(_ccValue2) {
      var _this;
      _classCallCheck(this, CCParameter);
      _this = _callSuper(this, CCParameter);
      _classPrivateMethodInitSpec(_this, _CCParameter_brand);
      _classPrivateFieldInitSpec(_this, _ccValue, void 0);
      _assertClassBrand(_CCParameter_brand, _this, _validate$M).call(_this, _ccValue2);
      _classPrivateFieldSet2(_ccValue, _this, _ccValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(CCParameter, _BaseParameter);
    return _createClass(CCParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_ccValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_ccValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_ccValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$M(ccValue) {
    if (typeof ccValue === "undefined") throw new MissingArgument("Value for CCParameter must be supplied");else if (ccValue.constructor.identifier !== "ParameterValueType" || !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())) throw new InvalidArgument("Invalid value for CCParameter");
  }
  _defineProperty(CCParameter, "param", "CC");
  _defineProperty(CCParameter, "identifier", "CCParameter");
  Object.freeze(CCParameter);

  var _indexValue = /*#__PURE__*/new WeakMap();
  var _IndexParameter_brand = /*#__PURE__*/new WeakSet();
  var IndexParameter = /*#__PURE__*/function (_BaseParameter) {
    function IndexParameter(_indexValue2) {
      var _this;
      _classCallCheck(this, IndexParameter);
      _this = _callSuper(this, IndexParameter);
      _classPrivateMethodInitSpec(_this, _IndexParameter_brand);
      _classPrivateFieldInitSpec(_this, _indexValue, void 0);
      _assertClassBrand(_IndexParameter_brand, _this, _validate$L).call(_this, _indexValue2);
      _classPrivateFieldSet2(_indexValue, _this, _indexValue2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(IndexParameter, _BaseParameter);
    return _createClass(IndexParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_indexValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_indexValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_indexValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$L(indexValue) {
    if (typeof indexValue === "undefined") throw new MissingArgument("Value for IndexParameter must be supplied");else if (indexValue.constructor.identifier !== "IntegerType" || !(Number(indexValue.repr()) > 0)) throw new InvalidArgument("Invalid value for IndexParameter. Must be a positive integer");
  }
  _defineProperty(IndexParameter, "param", "INDEX");
  _defineProperty(IndexParameter, "identifier", "IndexParameter");
  Object.freeze(IndexParameter);

  var _expertiseRegExp = /*#__PURE__*/new WeakMap();
  var _hobbyInterestRegExp = /*#__PURE__*/new WeakMap();
  var _levelValue = /*#__PURE__*/new WeakMap();
  var _LevelParameter_brand = /*#__PURE__*/new WeakSet();
  var LevelParameter = /*#__PURE__*/function (_BaseParameter) {
    function LevelParameter(_targetProp, _levelValue2) {
      var _this;
      _classCallCheck(this, LevelParameter);
      _this = _callSuper(this, LevelParameter);
      _classPrivateMethodInitSpec(_this, _LevelParameter_brand);
      _classPrivateFieldInitSpec(_this, _expertiseRegExp, /^(?:beginner|average|expert)$/);
      _classPrivateFieldInitSpec(_this, _hobbyInterestRegExp, /^(?:high|medium|low)$/);
      _classPrivateFieldInitSpec(_this, _levelValue, void 0);
      _assertClassBrand(_LevelParameter_brand, _this, _validate$K).call(_this, _targetProp, _levelValue2);
      _classPrivateFieldSet2(_levelValue, _this, _levelValue2);
      _this.targetProp = _targetProp.toUpperCase();
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LevelParameter, _BaseParameter);
    return _createClass(LevelParameter, [{
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_levelValue, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_levelValue, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_levelValue, this).reprJSON();
      }
    }]);
  }(BaseParameter);
  function _validate$K(targetProp, levelValue) {
    if (typeof levelValue === "undefined" || typeof targetProp === "undefined") throw new MissingArgument("Value and target property for LevelParameter must be supplied");else if (levelValue.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Invalid value for LevelParameter");
    switch (true) {
      case /^expertiseProperty$/i.test(targetProp) && _classPrivateFieldGet2(_expertiseRegExp, this).test(levelValue.repr()):
        break;
      case /^(?:hobby|interest)Property$/i.test(targetProp) && _classPrivateFieldGet2(_hobbyInterestRegExp, this).test(levelValue.repr()):
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
      _classPrivateFieldInitSpec(this, _abstractPropertiesAndMethods, ["prop", "cardinality", "acceptableParamTypes", "acceptableValTypes", "params", "paramsXML", "paramsJSON", "value", "valueXML", "valueJSON", "identifier"]);
      if (this.constructor === BaseProperty) throw new Error("Cannot create instance of base class");
    }
    return _createClass(BaseProperty, [{
      key: "checkAbstractPropertiesAndMethods",
      value: function checkAbstractPropertiesAndMethods() {
        var _this = this;
        if (!_classPrivateFieldGet2(_abstractPropertiesAndMethods, this).every(function (abstractPropertyOrMethod) {
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
  }();
  Object.freeze(BaseProperty);

  var _params$H = /*#__PURE__*/new WeakMap();
  var _value$H = /*#__PURE__*/new WeakMap();
  var _SourceProperty_brand = /*#__PURE__*/new WeakSet();
  var SourceProperty = /*#__PURE__*/function (_BaseProperty) {
    function SourceProperty(_params2, val) {
      var _this;
      _classCallCheck(this, SourceProperty);
      _this = _callSuper(this, SourceProperty);
      _classPrivateMethodInitSpec(_this, _SourceProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$H, void 0);
      _classPrivateFieldInitSpec(_this, _value$H, void 0);
      _assertClassBrand(_SourceProperty_brand, _this, _validate$J).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$H, _this, _params2);
      _classPrivateFieldSet2(_value$H, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(SourceProperty, _BaseProperty);
    return _createClass(SourceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$H, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$H, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$H, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$H, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$H, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$H, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$J(params, value) {
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
  var _KindProperty_brand = /*#__PURE__*/new WeakSet();
  var KindProperty = /*#__PURE__*/function (_BaseProperty) {
    function KindProperty(_params2, val) {
      var _this;
      _classCallCheck(this, KindProperty);
      _this = _callSuper(this, KindProperty);
      _classPrivateMethodInitSpec(_this, _KindProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$G, void 0);
      _classPrivateFieldInitSpec(_this, _value$G, void 0);
      _assertClassBrand(_KindProperty_brand, _this, _validate$I).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$G, _this, _params2);
      _classPrivateFieldSet2(_value$G, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(KindProperty, _BaseProperty);
    return _createClass(KindProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$G, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$G, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$G, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$G, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$G, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$G, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$I(params, value) {
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
  var _XMLProperty_brand = /*#__PURE__*/new WeakSet();
  var XMLProperty = /*#__PURE__*/function (_BaseProperty) {
    function XMLProperty(_params2, val) {
      var _this;
      _classCallCheck(this, XMLProperty);
      _this = _callSuper(this, XMLProperty);
      _classPrivateMethodInitSpec(_this, _XMLProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$F, void 0);
      _classPrivateFieldInitSpec(_this, _value$F, void 0);
      _assertClassBrand(_XMLProperty_brand, _this, _validate$H).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$F, _this, _params2);
      _classPrivateFieldSet2(_value$F, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(XMLProperty, _BaseProperty);
    return _createClass(XMLProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$F, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$F, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$F, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$F, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$F, this)._unsafe_raw_value;
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$F, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$H(params, value) {
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
  var _FNProperty_brand = /*#__PURE__*/new WeakSet();
  var FNProperty = /*#__PURE__*/function (_BaseProperty) {
    function FNProperty(_params2, val) {
      var _this;
      _classCallCheck(this, FNProperty);
      _this = _callSuper(this, FNProperty);
      _classPrivateMethodInitSpec(_this, _FNProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$E, void 0);
      _classPrivateFieldInitSpec(_this, _value$E, void 0);
      _assertClassBrand(_FNProperty_brand, _this, _validate$G).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$E, _this, _params2);
      _classPrivateFieldSet2(_value$E, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(FNProperty, _BaseProperty);
    return _createClass(FNProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$E, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$E, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$E, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$E, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$E, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$E, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$G(params, value) {
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
  var _NProperty_brand = /*#__PURE__*/new WeakSet();
  var NProperty = /*#__PURE__*/function (_BaseProperty) {
    function NProperty(_params2, val) {
      var _this;
      _classCallCheck(this, NProperty);
      _this = _callSuper(this, NProperty);
      _classPrivateMethodInitSpec(_this, _NProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$D, void 0);
      _classPrivateFieldInitSpec(_this, _value$D, void 0);
      _assertClassBrand(_NProperty_brand, _this, _validate$F).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$D, _this, _params2);
      _classPrivateFieldSet2(_value$D, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(NProperty, _BaseProperty);
    return _createClass(NProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$D, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$D, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$D, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$D, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$D, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$D, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$F(params, value) {
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
  var _NicknameProperty_brand = /*#__PURE__*/new WeakSet();
  var NicknameProperty = /*#__PURE__*/function (_BaseProperty) {
    function NicknameProperty(_params2, val) {
      var _this;
      _classCallCheck(this, NicknameProperty);
      _this = _callSuper(this, NicknameProperty);
      _classPrivateMethodInitSpec(_this, _NicknameProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$C, void 0);
      _classPrivateFieldInitSpec(_this, _value$C, void 0);
      _assertClassBrand(_NicknameProperty_brand, _this, _validate$E).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$C, _this, _params2);
      _classPrivateFieldSet2(_value$C, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(NicknameProperty, _BaseProperty);
    return _createClass(NicknameProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$C, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$C, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$C, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$C, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$C, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$C, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$E(params, value) {
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
  var _PhotoProperty_brand = /*#__PURE__*/new WeakSet();
  var PhotoProperty = /*#__PURE__*/function (_BaseProperty) {
    function PhotoProperty(_params2, val) {
      var _this;
      _classCallCheck(this, PhotoProperty);
      _this = _callSuper(this, PhotoProperty);
      _classPrivateMethodInitSpec(_this, _PhotoProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$B, void 0);
      _classPrivateFieldInitSpec(_this, _value$B, void 0);
      _assertClassBrand(_PhotoProperty_brand, _this, _validate$D).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$B, _this, _params2);
      _classPrivateFieldSet2(_value$B, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(PhotoProperty, _BaseProperty);
    return _createClass(PhotoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$B, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$B, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$B, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$B, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$B, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$B, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$D(params, value) {
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
  var _BdayProperty_brand = /*#__PURE__*/new WeakSet();
  var BdayProperty = /*#__PURE__*/function (_BaseProperty) {
    function BdayProperty(_params2, val) {
      var _this;
      _classCallCheck(this, BdayProperty);
      _this = _callSuper(this, BdayProperty);
      _classPrivateMethodInitSpec(_this, _BdayProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$A, void 0);
      _classPrivateFieldInitSpec(_this, _value$A, void 0);
      _assertClassBrand(_BdayProperty_brand, _this, _validate$C).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$A, _this, _params2);
      _classPrivateFieldSet2(_value$A, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(BdayProperty, _BaseProperty);
    return _createClass(BdayProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$A, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$A, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$A, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$A, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$A, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$A, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$C(params, value) {
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
  var _AnniversaryProperty_brand = /*#__PURE__*/new WeakSet();
  var AnniversaryProperty = /*#__PURE__*/function (_BaseProperty) {
    function AnniversaryProperty(_params2, val) {
      var _this;
      _classCallCheck(this, AnniversaryProperty);
      _this = _callSuper(this, AnniversaryProperty);
      _classPrivateMethodInitSpec(_this, _AnniversaryProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$z, void 0);
      _classPrivateFieldInitSpec(_this, _value$z, void 0);
      _assertClassBrand(_AnniversaryProperty_brand, _this, _validate$B).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$z, _this, _params2);
      _classPrivateFieldSet2(_value$z, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(AnniversaryProperty, _BaseProperty);
    return _createClass(AnniversaryProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$z, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$z, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$z, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$z, this).reprJSON();
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$z, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$z, this).reprXML();
      }
    }]);
  }(BaseProperty);
  function _validate$B(params, value) {
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
  var _GenderProperty_brand = /*#__PURE__*/new WeakSet();
  var GenderProperty = /*#__PURE__*/function (_BaseProperty) {
    function GenderProperty(_params2, val) {
      var _this;
      _classCallCheck(this, GenderProperty);
      _this = _callSuper(this, GenderProperty);
      _classPrivateMethodInitSpec(_this, _GenderProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$y, void 0);
      _classPrivateFieldInitSpec(_this, _value$y, void 0);
      _assertClassBrand(_GenderProperty_brand, _this, _validate$A).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$y, _this, _params2);
      _classPrivateFieldSet2(_value$y, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(GenderProperty, _BaseProperty);
    return _createClass(GenderProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$y, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$y, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$y, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$y, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$y, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$y, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$A(params, value) {
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
  var _BirthPlaceProperty_brand = /*#__PURE__*/new WeakSet();
  var BirthPlaceProperty = /*#__PURE__*/function (_BaseProperty) {
    function BirthPlaceProperty(_params2, val) {
      var _this;
      _classCallCheck(this, BirthPlaceProperty);
      _this = _callSuper(this, BirthPlaceProperty);
      _classPrivateMethodInitSpec(_this, _BirthPlaceProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$x, void 0);
      _classPrivateFieldInitSpec(_this, _value$x, void 0);
      _assertClassBrand(_BirthPlaceProperty_brand, _this, _validate$z).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$x, _this, _params2);
      _classPrivateFieldSet2(_value$x, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(BirthPlaceProperty, _BaseProperty);
    return _createClass(BirthPlaceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$x, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$x, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$x, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$x, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$x, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$x, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$z(params, value) {
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
  var _DeathPlaceProperty_brand = /*#__PURE__*/new WeakSet();
  var DeathPlaceProperty = /*#__PURE__*/function (_BaseProperty) {
    function DeathPlaceProperty(_params2, val) {
      var _this;
      _classCallCheck(this, DeathPlaceProperty);
      _this = _callSuper(this, DeathPlaceProperty);
      _classPrivateMethodInitSpec(_this, _DeathPlaceProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$w, void 0);
      _classPrivateFieldInitSpec(_this, _value$w, void 0);
      _assertClassBrand(_DeathPlaceProperty_brand, _this, _validate$y).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$w, _this, _params2);
      _classPrivateFieldSet2(_value$w, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(DeathPlaceProperty, _BaseProperty);
    return _createClass(DeathPlaceProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$w, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$w, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$w, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$w, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$w, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$w, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$y(params, value) {
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
  var _DeathDateProperty_brand = /*#__PURE__*/new WeakSet();
  var DeathDateProperty = /*#__PURE__*/function (_BaseProperty) {
    function DeathDateProperty(_params2, val) {
      var _this;
      _classCallCheck(this, DeathDateProperty);
      _this = _callSuper(this, DeathDateProperty);
      _classPrivateMethodInitSpec(_this, _DeathDateProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$v, void 0);
      _classPrivateFieldInitSpec(_this, _value$v, void 0);
      _assertClassBrand(_DeathDateProperty_brand, _this, _validate$x).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$v, _this, _params2);
      _classPrivateFieldSet2(_value$v, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(DeathDateProperty, _BaseProperty);
    return _createClass(DeathDateProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$v, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$v, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$v, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$v, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$v, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$v, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$x(params, value) {
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
  var _ExpertiseProperty_brand = /*#__PURE__*/new WeakSet();
  var ExpertiseProperty = /*#__PURE__*/function (_BaseProperty) {
    function ExpertiseProperty(_params2, val) {
      var _this;
      _classCallCheck(this, ExpertiseProperty);
      _this = _callSuper(this, ExpertiseProperty);
      _classPrivateMethodInitSpec(_this, _ExpertiseProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$u, void 0);
      _classPrivateFieldInitSpec(_this, _value$u, void 0);
      _assertClassBrand(_ExpertiseProperty_brand, _this, _validate$w).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$u, _this, _params2);
      _classPrivateFieldSet2(_value$u, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ExpertiseProperty, _BaseProperty);
    return _createClass(ExpertiseProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$u, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$u, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$u, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$u, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$u, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$u, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$w(params, value) {
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
  var _HobbyProperty_brand = /*#__PURE__*/new WeakSet();
  var HobbyProperty = /*#__PURE__*/function (_BaseProperty) {
    function HobbyProperty(_params2, val) {
      var _this;
      _classCallCheck(this, HobbyProperty);
      _this = _callSuper(this, HobbyProperty);
      _classPrivateMethodInitSpec(_this, _HobbyProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$t, void 0);
      _classPrivateFieldInitSpec(_this, _value$t, void 0);
      _assertClassBrand(_HobbyProperty_brand, _this, _validate$v).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$t, _this, _params2);
      _classPrivateFieldSet2(_value$t, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(HobbyProperty, _BaseProperty);
    return _createClass(HobbyProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$t, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$t, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$t, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$t, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$t, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$t, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$v(params, value) {
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
  var _InterestProperty_brand = /*#__PURE__*/new WeakSet();
  var InterestProperty = /*#__PURE__*/function (_BaseProperty) {
    function InterestProperty(_params2, val) {
      var _this;
      _classCallCheck(this, InterestProperty);
      _this = _callSuper(this, InterestProperty);
      _classPrivateMethodInitSpec(_this, _InterestProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$s, void 0);
      _classPrivateFieldInitSpec(_this, _value$s, void 0);
      _assertClassBrand(_InterestProperty_brand, _this, _validate$u).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$s, _this, _params2);
      _classPrivateFieldSet2(_value$s, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(InterestProperty, _BaseProperty);
    return _createClass(InterestProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$s, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$s, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$s, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$s, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$s, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$s, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$u(params, value) {
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
  var _AdrProperty_brand = /*#__PURE__*/new WeakSet();
  var AdrProperty = /*#__PURE__*/function (_BaseProperty) {
    function AdrProperty(_params2, val) {
      var _this;
      _classCallCheck(this, AdrProperty);
      _this = _callSuper(this, AdrProperty);
      _classPrivateMethodInitSpec(_this, _AdrProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$r, void 0);
      _classPrivateFieldInitSpec(_this, _value$r, void 0);
      _assertClassBrand(_AdrProperty_brand, _this, _validate$t).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$r, _this, _params2);
      _classPrivateFieldSet2(_value$r, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(AdrProperty, _BaseProperty);
    return _createClass(AdrProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$r, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$r, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$r, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$r, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$r, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$r, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$t(params, value) {
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
  var _TelProperty_brand = /*#__PURE__*/new WeakSet();
  var TelProperty = /*#__PURE__*/function (_BaseProperty) {
    function TelProperty(_params2, val) {
      var _this;
      _classCallCheck(this, TelProperty);
      _this = _callSuper(this, TelProperty);
      _classPrivateMethodInitSpec(_this, _TelProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$q, void 0);
      _classPrivateFieldInitSpec(_this, _value$q, void 0);
      _assertClassBrand(_TelProperty_brand, _this, _validate$s).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$q, _this, _params2);
      _classPrivateFieldSet2(_value$q, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TelProperty, _BaseProperty);
    return _createClass(TelProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$q, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$q, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$q, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$q, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$q, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$q, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$s(params, value) {
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
  var _EmailProperty_brand = /*#__PURE__*/new WeakSet();
  var EmailProperty = /*#__PURE__*/function (_BaseProperty) {
    function EmailProperty(_params2, val) {
      var _this;
      _classCallCheck(this, EmailProperty);
      _this = _callSuper(this, EmailProperty);
      _classPrivateMethodInitSpec(_this, _EmailProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$p, void 0);
      _classPrivateFieldInitSpec(_this, _value$p, void 0);
      _assertClassBrand(_EmailProperty_brand, _this, _validate$r).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$p, _this, _params2);
      _classPrivateFieldSet2(_value$p, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(EmailProperty, _BaseProperty);
    return _createClass(EmailProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$p, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$p, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$p, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$p, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$p, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$p, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$r(params, value) {
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
  var _IMPPProperty_brand = /*#__PURE__*/new WeakSet();
  var IMPPProperty = /*#__PURE__*/function (_BaseProperty) {
    function IMPPProperty(_params2, val) {
      var _this;
      _classCallCheck(this, IMPPProperty);
      _this = _callSuper(this, IMPPProperty);
      _classPrivateMethodInitSpec(_this, _IMPPProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$o, void 0);
      _classPrivateFieldInitSpec(_this, _value$o, void 0);
      _assertClassBrand(_IMPPProperty_brand, _this, _validate$q).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$o, _this, _params2);
      _classPrivateFieldSet2(_value$o, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(IMPPProperty, _BaseProperty);
    return _createClass(IMPPProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$o, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$o, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$o, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$o, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$o, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$o, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$q(params, value) {
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
  _defineProperty(IMPPProperty, "acceptableParamTypes", new Set(["ValueParameter", "PIDParameter", "PrefParameter", "IndexParameter", "TypeParameter", "MediatypeParameter", "AltidParameter", "AnyParameter"]));
  _defineProperty(IMPPProperty, "acceptableValTypes", "URIType");
  Object.freeze(IMPPProperty);

  var _params$n = /*#__PURE__*/new WeakMap();
  var _value$n = /*#__PURE__*/new WeakMap();
  var _LangProperty_brand = /*#__PURE__*/new WeakSet();
  var LangProperty = /*#__PURE__*/function (_BaseProperty) {
    function LangProperty(_params2, val) {
      var _this;
      _classCallCheck(this, LangProperty);
      _this = _callSuper(this, LangProperty);
      _classPrivateMethodInitSpec(_this, _LangProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$n, void 0);
      _classPrivateFieldInitSpec(_this, _value$n, void 0);
      _assertClassBrand(_LangProperty_brand, _this, _validate$p).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$n, _this, _params2);
      _classPrivateFieldSet2(_value$n, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LangProperty, _BaseProperty);
    return _createClass(LangProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$n, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$n, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$n, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$n, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$n, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$n, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$p(params, value) {
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
  var _ContactURIProperty_brand = /*#__PURE__*/new WeakSet();
  var ContactURIProperty = /*#__PURE__*/function (_BaseProperty) {
    function ContactURIProperty(_params2, val) {
      var _this;
      _classCallCheck(this, ContactURIProperty);
      _this = _callSuper(this, ContactURIProperty);
      _classPrivateMethodInitSpec(_this, _ContactURIProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$m, void 0);
      _classPrivateFieldInitSpec(_this, _value$m, void 0);
      _assertClassBrand(_ContactURIProperty_brand, _this, _validate$o).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$m, _this, _params2);
      _classPrivateFieldSet2(_value$m, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ContactURIProperty, _BaseProperty);
    return _createClass(ContactURIProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$m, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$m, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$m, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$m, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$m, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$m, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$o(params, value) {
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
  var _TzProperty_brand = /*#__PURE__*/new WeakSet();
  var TzProperty = /*#__PURE__*/function (_BaseProperty) {
    function TzProperty(_params2, val) {
      var _this;
      _classCallCheck(this, TzProperty);
      _this = _callSuper(this, TzProperty);
      _classPrivateMethodInitSpec(_this, _TzProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$l, void 0);
      _classPrivateFieldInitSpec(_this, _value$l, void 0);
      _assertClassBrand(_TzProperty_brand, _this, _validate$n).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$l, _this, _params2);
      _classPrivateFieldSet2(_value$l, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TzProperty, _BaseProperty);
    return _createClass(TzProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$l, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$l, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$l, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$l, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$l, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$l, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$n(params, value) {
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
  var _GeoProperty_brand = /*#__PURE__*/new WeakSet();
  var GeoProperty = /*#__PURE__*/function (_BaseProperty) {
    function GeoProperty(_params2, val) {
      var _this;
      _classCallCheck(this, GeoProperty);
      _this = _callSuper(this, GeoProperty);
      _classPrivateMethodInitSpec(_this, _GeoProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$k, void 0);
      _classPrivateFieldInitSpec(_this, _value$k, void 0);
      _assertClassBrand(_GeoProperty_brand, _this, _validate$m).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$k, _this, _params2);
      _classPrivateFieldSet2(_value$k, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(GeoProperty, _BaseProperty);
    return _createClass(GeoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$k, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$k, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$k, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$k, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$k, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$k, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$m(params, value) {
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
  var _TitleProperty_brand = /*#__PURE__*/new WeakSet();
  var TitleProperty = /*#__PURE__*/function (_BaseProperty) {
    function TitleProperty(_params2, val) {
      var _this;
      _classCallCheck(this, TitleProperty);
      _this = _callSuper(this, TitleProperty);
      _classPrivateMethodInitSpec(_this, _TitleProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$j, void 0);
      _classPrivateFieldInitSpec(_this, _value$j, void 0);
      _assertClassBrand(_TitleProperty_brand, _this, _validate$l).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$j, _this, _params2);
      _classPrivateFieldSet2(_value$j, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(TitleProperty, _BaseProperty);
    return _createClass(TitleProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$j, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$j, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$j, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$j, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$j, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$j, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$l(params, value) {
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
  var _RoleProperty_brand = /*#__PURE__*/new WeakSet();
  var RoleProperty = /*#__PURE__*/function (_BaseProperty) {
    function RoleProperty(_params2, val) {
      var _this;
      _classCallCheck(this, RoleProperty);
      _this = _callSuper(this, RoleProperty);
      _classPrivateMethodInitSpec(_this, _RoleProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$i, void 0);
      _classPrivateFieldInitSpec(_this, _value$i, void 0);
      _assertClassBrand(_RoleProperty_brand, _this, _validate$k).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$i, _this, _params2);
      _classPrivateFieldSet2(_value$i, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(RoleProperty, _BaseProperty);
    return _createClass(RoleProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$i, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$i, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$i, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$i, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$i, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$i, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$k(params, value) {
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
  var _LogoProperty_brand = /*#__PURE__*/new WeakSet();
  var LogoProperty = /*#__PURE__*/function (_BaseProperty) {
    function LogoProperty(_params2, val) {
      var _this;
      _classCallCheck(this, LogoProperty);
      _this = _callSuper(this, LogoProperty);
      _classPrivateMethodInitSpec(_this, _LogoProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$h, void 0);
      _classPrivateFieldInitSpec(_this, _value$h, void 0);
      _assertClassBrand(_LogoProperty_brand, _this, _validate$j).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$h, _this, _params2);
      _classPrivateFieldSet2(_value$h, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(LogoProperty, _BaseProperty);
    return _createClass(LogoProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$h, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$h, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$h, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$h, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$h, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$h, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$j(params, value) {
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
  var _OrgProperty_brand = /*#__PURE__*/new WeakSet();
  var OrgProperty = /*#__PURE__*/function (_BaseProperty) {
    function OrgProperty(_params2, val) {
      var _this;
      _classCallCheck(this, OrgProperty);
      _this = _callSuper(this, OrgProperty);
      _classPrivateMethodInitSpec(_this, _OrgProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$g, void 0);
      _classPrivateFieldInitSpec(_this, _value$g, void 0);
      _assertClassBrand(_OrgProperty_brand, _this, _validate$i).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$g, _this, _params2);
      _classPrivateFieldSet2(_value$g, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(OrgProperty, _BaseProperty);
    return _createClass(OrgProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$g, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$g, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$g, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$g, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$g, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$g, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$i(params, value) {
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
  var _MemberProperty_brand = /*#__PURE__*/new WeakSet();
  var MemberProperty = /*#__PURE__*/function (_BaseProperty) {
    function MemberProperty(_params2, val) {
      var _this;
      _classCallCheck(this, MemberProperty);
      _this = _callSuper(this, MemberProperty);
      _classPrivateMethodInitSpec(_this, _MemberProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$f, void 0);
      _classPrivateFieldInitSpec(_this, _value$f, void 0);
      _assertClassBrand(_MemberProperty_brand, _this, _validate$h).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$f, _this, _params2);
      _classPrivateFieldSet2(_value$f, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(MemberProperty, _BaseProperty);
    return _createClass(MemberProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$f, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$f, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$f, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$f, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$f, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$f, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$h(params, value) {
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
  var _RelatedProperty_brand = /*#__PURE__*/new WeakSet();
  var RelatedProperty = /*#__PURE__*/function (_BaseProperty) {
    function RelatedProperty(_params2, val) {
      var _this;
      _classCallCheck(this, RelatedProperty);
      _this = _callSuper(this, RelatedProperty);
      _classPrivateMethodInitSpec(_this, _RelatedProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$e, void 0);
      _classPrivateFieldInitSpec(_this, _value$e, void 0);
      _assertClassBrand(_RelatedProperty_brand, _this, _validate$g).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$e, _this, _params2);
      _classPrivateFieldSet2(_value$e, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(RelatedProperty, _BaseProperty);
    return _createClass(RelatedProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$e, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$e, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$e, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$e, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$e, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$e, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$g(params, value) {
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
  var _OrgDirectoryProperty_brand = /*#__PURE__*/new WeakSet();
  var OrgDirectoryProperty = /*#__PURE__*/function (_BaseProperty) {
    function OrgDirectoryProperty(_params2, val) {
      var _this;
      _classCallCheck(this, OrgDirectoryProperty);
      _this = _callSuper(this, OrgDirectoryProperty);
      _classPrivateMethodInitSpec(_this, _OrgDirectoryProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$d, void 0);
      _classPrivateFieldInitSpec(_this, _value$d, void 0);
      _assertClassBrand(_OrgDirectoryProperty_brand, _this, _validate$f).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$d, _this, _params2);
      _classPrivateFieldSet2(_value$d, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(OrgDirectoryProperty, _BaseProperty);
    return _createClass(OrgDirectoryProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$d, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$d, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$d, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$d, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$d, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$d, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$f(params, value) {
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
  var _CategoriesProperty_brand = /*#__PURE__*/new WeakSet();
  var CategoriesProperty = /*#__PURE__*/function (_BaseProperty) {
    function CategoriesProperty(_params2, val) {
      var _this;
      _classCallCheck(this, CategoriesProperty);
      _this = _callSuper(this, CategoriesProperty);
      _classPrivateMethodInitSpec(_this, _CategoriesProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$c, void 0);
      _classPrivateFieldInitSpec(_this, _value$c, void 0);
      _assertClassBrand(_CategoriesProperty_brand, _this, _validate$e).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$c, _this, _params2);
      _classPrivateFieldSet2(_value$c, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(CategoriesProperty, _BaseProperty);
    return _createClass(CategoriesProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$c, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$c, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$c, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$c, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$c, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$c, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$e(params, value) {
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
  var _NoteProperty_brand = /*#__PURE__*/new WeakSet();
  var NoteProperty = /*#__PURE__*/function (_BaseProperty) {
    function NoteProperty(_params2, val) {
      var _this;
      _classCallCheck(this, NoteProperty);
      _this = _callSuper(this, NoteProperty);
      _classPrivateMethodInitSpec(_this, _NoteProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$b, void 0);
      _classPrivateFieldInitSpec(_this, _value$b, void 0);
      _assertClassBrand(_NoteProperty_brand, _this, _validate$d).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$b, _this, _params2);
      _classPrivateFieldSet2(_value$b, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(NoteProperty, _BaseProperty);
    return _createClass(NoteProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$b, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$b, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$b, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$b, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$b, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$b, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$d(params, value) {
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
  var _ProdidProperty_brand = /*#__PURE__*/new WeakSet();
  var ProdidProperty = /*#__PURE__*/function (_BaseProperty) {
    function ProdidProperty(_params2, val) {
      var _this;
      _classCallCheck(this, ProdidProperty);
      _this = _callSuper(this, ProdidProperty);
      _classPrivateMethodInitSpec(_this, _ProdidProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$a, void 0);
      _classPrivateFieldInitSpec(_this, _value$a, void 0);
      _assertClassBrand(_ProdidProperty_brand, _this, _validate$c).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$a, _this, _params2);
      _classPrivateFieldSet2(_value$a, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ProdidProperty, _BaseProperty);
    return _createClass(ProdidProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$a, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$a, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$a, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$a, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$a, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$a, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$c(params, value) {
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
  var _RevProperty_brand = /*#__PURE__*/new WeakSet();
  var RevProperty = /*#__PURE__*/function (_BaseProperty) {
    function RevProperty(_params2, val) {
      var _this;
      _classCallCheck(this, RevProperty);
      _this = _callSuper(this, RevProperty);
      _classPrivateMethodInitSpec(_this, _RevProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$9, void 0);
      _classPrivateFieldInitSpec(_this, _value$9, void 0);
      _assertClassBrand(_RevProperty_brand, _this, _validate$b).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$9, _this, _params2);
      _classPrivateFieldSet2(_value$9, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(RevProperty, _BaseProperty);
    return _createClass(RevProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$9, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$9, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$9, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$9, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$9, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$9, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$b(params, value) {
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
  var _SoundProperty_brand = /*#__PURE__*/new WeakSet();
  var SoundProperty = /*#__PURE__*/function (_BaseProperty) {
    function SoundProperty(_params2, val) {
      var _this;
      _classCallCheck(this, SoundProperty);
      _this = _callSuper(this, SoundProperty);
      _classPrivateMethodInitSpec(_this, _SoundProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$8, void 0);
      _classPrivateFieldInitSpec(_this, _value$8, void 0);
      _assertClassBrand(_SoundProperty_brand, _this, _validate$a).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$8, _this, _params2);
      _classPrivateFieldSet2(_value$8, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(SoundProperty, _BaseProperty);
    return _createClass(SoundProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$8, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$8, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$8, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$8, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$8, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$8, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$a(params, value) {
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
  var _UIDProperty_brand = /*#__PURE__*/new WeakSet();
  var UIDProperty = /*#__PURE__*/function (_BaseProperty) {
    function UIDProperty(_params2, val) {
      var _this;
      _classCallCheck(this, UIDProperty);
      _this = _callSuper(this, UIDProperty);
      _classPrivateMethodInitSpec(_this, _UIDProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$7, void 0);
      _classPrivateFieldInitSpec(_this, _value$7, void 0);
      _assertClassBrand(_UIDProperty_brand, _this, _validate$9).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$7, _this, _params2);
      _classPrivateFieldSet2(_value$7, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(UIDProperty, _BaseProperty);
    return _createClass(UIDProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$7, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$7, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$7, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$7, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$7, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$7, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$9(params, value) {
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
  var _ClientpidmapProperty_brand = /*#__PURE__*/new WeakSet();
  var ClientpidmapProperty = /*#__PURE__*/function (_BaseProperty) {
    function ClientpidmapProperty(_params2, val) {
      var _this;
      _classCallCheck(this, ClientpidmapProperty);
      _this = _callSuper(this, ClientpidmapProperty);
      _classPrivateMethodInitSpec(_this, _ClientpidmapProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$6, void 0);
      _classPrivateFieldInitSpec(_this, _value$6, void 0);
      _assertClassBrand(_ClientpidmapProperty_brand, _this, _validate$8).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$6, _this, _params2);
      _classPrivateFieldSet2(_value$6, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ClientpidmapProperty, _BaseProperty);
    return _createClass(ClientpidmapProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$6, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$6, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$6, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$6, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$6, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$6, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$8(params, value) {
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
  var _URLProperty_brand = /*#__PURE__*/new WeakSet();
  var URLProperty = /*#__PURE__*/function (_BaseProperty) {
    function URLProperty(_params2, val) {
      var _this;
      _classCallCheck(this, URLProperty);
      _this = _callSuper(this, URLProperty);
      _classPrivateMethodInitSpec(_this, _URLProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$5, void 0);
      _classPrivateFieldInitSpec(_this, _value$5, void 0);
      _assertClassBrand(_URLProperty_brand, _this, _validate$7).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$5, _this, _params2);
      _classPrivateFieldSet2(_value$5, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(URLProperty, _BaseProperty);
    return _createClass(URLProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$5, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$5, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$5, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$5, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$5, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$5, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$7(params, value) {
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
  var _KeyProperty_brand = /*#__PURE__*/new WeakSet();
  var KeyProperty = /*#__PURE__*/function (_BaseProperty) {
    function KeyProperty(_params2, val) {
      var _this;
      _classCallCheck(this, KeyProperty);
      _this = _callSuper(this, KeyProperty);
      _classPrivateMethodInitSpec(_this, _KeyProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$4, void 0);
      _classPrivateFieldInitSpec(_this, _value$4, void 0);
      _assertClassBrand(_KeyProperty_brand, _this, _validate$6).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$4, _this, _params2);
      _classPrivateFieldSet2(_value$4, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(KeyProperty, _BaseProperty);
    return _createClass(KeyProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$4, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$4, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$4, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$4, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$4, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$4, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$6(params, value) {
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
  var _FburlProperty_brand = /*#__PURE__*/new WeakSet();
  var FburlProperty = /*#__PURE__*/function (_BaseProperty) {
    function FburlProperty(_params2, val) {
      var _this;
      _classCallCheck(this, FburlProperty);
      _this = _callSuper(this, FburlProperty);
      _classPrivateMethodInitSpec(_this, _FburlProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$3, void 0);
      _classPrivateFieldInitSpec(_this, _value$3, void 0);
      _assertClassBrand(_FburlProperty_brand, _this, _validate$5).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$3, _this, _params2);
      _classPrivateFieldSet2(_value$3, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(FburlProperty, _BaseProperty);
    return _createClass(FburlProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$3, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$3, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$3, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$3, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$3, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$3, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$5(params, value) {
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
  var _CaladruriProperty_brand = /*#__PURE__*/new WeakSet();
  var CaladruriProperty = /*#__PURE__*/function (_BaseProperty) {
    function CaladruriProperty(_params2, val) {
      var _this;
      _classCallCheck(this, CaladruriProperty);
      _this = _callSuper(this, CaladruriProperty);
      _classPrivateMethodInitSpec(_this, _CaladruriProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$2, void 0);
      _classPrivateFieldInitSpec(_this, _value$2, void 0);
      _assertClassBrand(_CaladruriProperty_brand, _this, _validate$4).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$2, _this, _params2);
      _classPrivateFieldSet2(_value$2, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(CaladruriProperty, _BaseProperty);
    return _createClass(CaladruriProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$2, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$2, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$2, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$2, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$2, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$2, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$4(params, value) {
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
  var _CaluriProperty_brand = /*#__PURE__*/new WeakSet();
  var CaluriProperty = /*#__PURE__*/function (_BaseProperty) {
    function CaluriProperty(_params2, val) {
      var _this;
      _classCallCheck(this, CaluriProperty);
      _this = _callSuper(this, CaluriProperty);
      _classPrivateMethodInitSpec(_this, _CaluriProperty_brand);
      _classPrivateFieldInitSpec(_this, _params$1, void 0);
      _classPrivateFieldInitSpec(_this, _value$1, void 0);
      _assertClassBrand(_CaluriProperty_brand, _this, _validate$3).call(_this, _params2, val);
      _classPrivateFieldSet2(_params$1, _this, _params2);
      _classPrivateFieldSet2(_value$1, _this, val);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(CaluriProperty, _BaseProperty);
    return _createClass(CaluriProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params$1, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params$1, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params$1, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value$1, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value$1, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value$1, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$3(params, value) {
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
  var _ExtendedProperty_brand = /*#__PURE__*/new WeakSet();
  var ExtendedProperty = /*#__PURE__*/function (_BaseProperty) {
    function ExtendedProperty(_prop, _params2, _value2) {
      var _this;
      _classCallCheck(this, ExtendedProperty);
      _this = _callSuper(this, ExtendedProperty);
      _classPrivateMethodInitSpec(_this, _ExtendedProperty_brand);
      _classPrivateFieldInitSpec(_this, _propRegExp, /^x-[a-z0-9-]+$/i);
      _classPrivateFieldInitSpec(_this, _params, void 0);
      _classPrivateFieldInitSpec(_this, _value, void 0);
      _assertClassBrand(_ExtendedProperty_brand, _this, _validate$2).call(_this, _prop, _params2, _value2);
      _this.prop = _prop.toString().toUpperCase();
      _classPrivateFieldSet2(_params, _this, _params2);
      _classPrivateFieldSet2(_value, _this, _value2);
      _this.checkAbstractPropertiesAndMethods();
      Object.freeze(_this);
      return _this;
    }
    _inherits(ExtendedProperty, _BaseProperty);
    return _createClass(ExtendedProperty, [{
      key: "params",
      get: function get() {
        return _classPrivateFieldGet2(_params, this).reduce(function (parametersArray, currentParameter) {
          parametersArray.push(currentParameter.repr());
          return parametersArray;
        }, []).join(";");
      }
    }, {
      key: "paramsXML",
      get: function get() {
        return _classPrivateFieldGet2(_params, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
      }
    }, {
      key: "paramsJSON",
      get: function get() {
        return _classPrivateFieldGet2(_params, this).reduce(function (accumulatedParameters, currentParameter) {
          return _objectSpread2(_objectSpread2({}, currentParameter.reprJSON()), accumulatedParameters);
        }, {});
      }
    }, {
      key: "value",
      get: function get() {
        return _classPrivateFieldGet2(_value, this).repr();
      }
    }, {
      key: "valueXML",
      get: function get() {
        return _classPrivateFieldGet2(_value, this).reprXML();
      }
    }, {
      key: "valueJSON",
      get: function get() {
        return _classPrivateFieldGet2(_value, this).reprJSON();
      }
    }]);
  }(BaseProperty);
  function _validate$2(prop, params, value) {
    var _this2 = this;
    if (typeof prop === "undefined" || typeof params === "undefined" || typeof value === "undefined") throw new MissingArgument("Property, parameter and value for ExtendedProperty must be supplied");else if (!Array.isArray(params)) throw new InvalidArgument("Parameters for ExtendedProperty must be passed in an array");else if (!_classPrivateFieldGet2(_propRegExp, this).test(prop)) throw new InvalidArgument("Invalid property for ExtendedProperty");
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
  var _Group_brand = /*#__PURE__*/new WeakSet();
  var Group = /*#__PURE__*/function () {
    function Group(_props2, _groupName2) {
      _classCallCheck(this, Group);
      _classPrivateMethodInitSpec(this, _Group_brand);
      _classPrivateFieldInitSpec(this, _props$1, void 0);
      _classPrivateFieldInitSpec(this, _groupName, void 0);
      _classPrivateFieldInitSpec(this, _propertyInstanceCount, new Map([["FNProperty", 0], ["AnniversaryProperty", 0], ["BdayProperty", 0], ["GenderProperty", 0], ["BirthPlaceProperty", 0], ["DeathPlaceProperty", 0], ["DeathDateProperty", 0], ["KindProperty", 0], ["NProperty", 0], ["ProdidProperty", 0], ["RevProperty", 0], ["UIDProperty", 0]]));
      _defineProperty(this, "hasMemberProperty", false);
      _defineProperty(this, "kindPropertyIsGroup", false);
      _assertClassBrand(_Group_brand, this, _validate$1).call(this, _props2, _groupName2);
      _classPrivateFieldSet2(_props$1, this, _props2);
      _classPrivateFieldSet2(_groupName, this, _groupName2);
      Object.freeze(this);
    }
    return _createClass(Group, [{
      key: "propertyInstanceCount",
      get: function get() {
        return _classPrivateFieldGet2(_propertyInstanceCount, this);
      }
    }, {
      key: "properties",
      get: function get() {
        return _classPrivateFieldGet2(_props$1, this);
      }
    }, {
      key: "repr",
      value: function repr() {
        var _this = this;
        var CRLF = "\r\n";
        return _classPrivateFieldGet2(_props$1, this).reduce(function (accumulatedProps, currentProp) {
          accumulatedProps.push("".concat(_classPrivateFieldGet2(_groupName, _this), ".").concat(currentProp.repr()));
          return accumulatedProps;
        }, []).join(CRLF);
      }
    }, {
      key: "reprXML",
      value: function reprXML() {
        var valueXML = "";
        valueXML += "<group name=\"".concat(_classPrivateFieldGet2(_groupName, this), "\">");
        valueXML += _classPrivateFieldGet2(_props$1, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
        valueXML += "</group>";
        return valueXML;
      }
    }, {
      key: "reprJSON",
      value: function reprJSON() {
        var _this2 = this;
        return _classPrivateFieldGet2(_props$1, this).reduce(function (accumulatedProps, currentProp) {
          var prop = currentProp.reprJSON();
          prop[1] = _objectSpread2(_objectSpread2({}, prop[1]), {}, {
            group: _classPrivateFieldGet2(_groupName, _this2)
          });
          accumulatedProps.push(prop);
          return accumulatedProps;
        }, []);
      }
    }]);
  }();
  function _validate$1(props, groupName) {
    if (typeof props === "undefined" || typeof groupName === "undefined" || groupName === "") throw new MissingArgument("Properties to be grouped and the group name must be supplied");else if (!Array.isArray(props)) throw new InvalidArgument("Properties for Group must be passed in an array");else if (!(props.length > 0)) throw new MissingArgument("Properties to be grouped must be supplied");else if (typeof groupName !== "string") throw new TypeError("Group name must be of type string");else if (!/^[A-Za-z0-9-]+$/.test(groupName)) throw new InvalidArgument("Invalid group name");
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
        if (!_classPrivateFieldGet2(_propertyInstanceCount, this).has(prop.constructor.identifier)) continue;
        var count = _classPrivateFieldGet2(_propertyInstanceCount, this).get(prop.constructor.identifier);
        count++;
        _classPrivateFieldGet2(_propertyInstanceCount, this).set(prop.constructor.identifier, count);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  _defineProperty(Group, "identifier", "Group");
  _defineProperty(Group, "cardinalityNoneOrOneProps", new Set(["AnniversaryProperty", "BdayProperty", "GenderProperty", "BirthPlaceProperty", "DeathPlaceProperty", "DeathDateProperty", "KindProperty", "NProperty", "ProdidProperty", "RevProperty", "UIDProperty"]));
  Object.freeze(Group);

  var _props = /*#__PURE__*/new WeakMap();
  var _VCARD_brand = /*#__PURE__*/new WeakSet();
  var VCARD = /*#__PURE__*/function () {
    function VCARD(_props2) {
      _classCallCheck(this, VCARD);
      _classPrivateMethodInitSpec(this, _VCARD_brand);
      _classPrivateFieldInitSpec(this, _props, void 0);
      _assertClassBrand(_VCARD_brand, this, _validate).call(this, _props2);
      _classPrivateFieldSet2(_props, this, _props2);
      Object.freeze(this);
    }
    return _createClass(VCARD, [{
      key: "repr",
      value: function repr() {
        var CRLF = "\r\n";
        var value = "";
        value += "BEGIN:VCARD" + CRLF;
        value += "VERSION:4.0" + CRLF;
        value += _classPrivateFieldGet2(_props, this).reduce(function (accumulatedProps, currentProp) {
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
        valueXML += _classPrivateFieldGet2(_props, this).reduce(function (accumulatedParameters, currentParameter) {
          return accumulatedParameters + currentParameter.reprXML();
        }, "");
        valueXML += "</vcard>";
        valueXML += "</vcards>";
        return valueXML;
      }
    }, {
      key: "reprJSON",
      value: function reprJSON() {
        return ["vcard", _classPrivateFieldGet2(_props, this).reduce(function (accumulatedProps, currentProp) {
          if (currentProp.constructor.identifier === "Group") accumulatedProps = accumulatedProps.concat(currentProp.reprJSON());else accumulatedProps.push(currentProp.reprJSON());
          return accumulatedProps;
        }, [])];
      }
    }]);
  }();
  function _validate(props) {
    if (typeof props === "undefined") throw new MissingArgument("Properties for VCARD must be supplied");else if (!Array.isArray(props)) throw new InvalidArgument("Properties for VCARD must be passed in an array");
    var propertyInstanceCount = new Map([["FNProperty", 0], ["AnniversaryProperty", 0], ["BdayProperty", 0], ["GenderProperty", 0], ["BirthPlaceProperty", 0], ["DeathPlaceProperty", 0], ["DeathDateProperty", 0], ["KindProperty", 0], ["NProperty", 0], ["ProdidProperty", 0], ["RevProperty", 0], ["UIDProperty", 0]]);
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
            var _iterator3 = _createForOfIteratorHelper(prop.propertyInstanceCount.keys()),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var propName = _step3.value;
                var _groupCount = prop.propertyInstanceCount.get(propName);
                var _cardcount = propertyInstanceCount.get(propName);
                count = _groupCount + _cardcount;
                propertyInstanceCount.set(propName, count);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
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
    })) {
      var _iterator2 = _createForOfIteratorHelper(propertyInstanceCount.keys()),
        _step2;
      try {
        var _loop = function _loop() {
          var _offendingProps$;
          var property = _step2.value;
          if (propertyInstanceCount.get(property) <= 1) return 1; // continue
          var offendingProps = props.filter(function (prop) {
            return prop.constructor.identifier === property;
          });
          if (!/ALTID=/.test((_offendingProps$ = offendingProps[0]) === null || _offendingProps$ === void 0 ? void 0 : _offendingProps$.params)) throw new InvalidArgument("AnniversaryProperty, BdayProperty, GenderProperty, BirthPlaceProperty, DeathPlaceProperty, DeathdateProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied, unless they have similar AltidParameters");
          var referenceAltid = offendingProps[0].params.split(";").filter(function (param) {
            return /^ALTID=/.test(param);
          }).pop();
          var followsCardinality = offendingProps.every(function (prop) {
            var altid = prop.params.split(";").filter(function (param) {
              return /^ALTID=/.test(param);
            }).pop();
            return altid === referenceAltid;
          });
          if (offendingProps.length < propertyInstanceCount.get(property)) {
            var groups = props.filter(function (prop) {
              return prop.constructor.identifier === "Group";
            });
            followsCardinality = followsCardinality && groups.every(function (group) {
              var offendingGroupProps = group.properties.filter(function (prop) {
                return prop.constructor.identifier === property;
              });
              return offendingGroupProps.every(function (prop) {
                var altid = prop.params.split(";").filter(function (param) {
                  return /^ALTID=/.test(param);
                }).pop();
                return altid === referenceAltid;
              });
            });
          }
          if (!followsCardinality) throw new InvalidArgument("AnniversaryProperty, BdayProperty, GenderProperty, BirthPlaceProperty, DeathPlaceProperty, DeathdateProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied, unless they have similar AltidParameters");
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (propertyInstanceCount.get("FNProperty") < 1) throw new MissingArgument("One or more FNProperty instances must be supplied");else if (hasMemberProperty && !kindPropertyIsGroup) throw new InvalidArgument('MemberProperty should only be used if the value of the KindProperty is "group"');
  }
  _defineProperty(VCARD, "cardinalityNoneOrOneProps", new Set(["AnniversaryProperty", "BdayProperty", "GenderProperty", "BirthPlaceProperty", "DeathPlaceProperty", "DeathDateProperty", "KindProperty", "NProperty", "ProdidProperty", "RevProperty", "UIDProperty"]));
  Object.freeze(VCARD);

  var _unfoldedVcard = /*#__PURE__*/new WeakMap();
  var _Tokenizer_brand = /*#__PURE__*/new WeakSet();
  var Tokenizer = /*#__PURE__*/function () {
    function Tokenizer(_vcard) {
      _classCallCheck(this, Tokenizer);
      _classPrivateMethodInitSpec(this, _Tokenizer_brand);
      _classPrivateFieldInitSpec(this, _unfoldedVcard, void 0);
      _assertClassBrand(_Tokenizer_brand, this, _initialValidation).call(this, _vcard);
      _classPrivateFieldSet2(_unfoldedVcard, this, _vcard.replace(/\r\n[\t ]/g, "")); //unfold

      Object.freeze(this);
    }
    return _createClass(Tokenizer, [{
      key: "numberOfVcards",
      get: function get() {
        var _classPrivateFieldGet2$1;
        return ((_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_unfoldedVcard, this).match(/BEGIN:VCARD\r\n/gi)) !== null && _classPrivateFieldGet2$1 !== void 0 ? _classPrivateFieldGet2$1 : []).length || 1;
      }
    }, {
      key: "tokens",
      get: function get() {
        var tokens = [];
        if (this.numberOfVcards === 1) {
          var _iterator = _createForOfIteratorHelper(_assertClassBrand(_Tokenizer_brand, this, _separateVcardContentLines).call(this)),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var contentLine = _step.value;
              tokens.push(_assertClassBrand(_Tokenizer_brand, this, _contentLineTokenizer).call(this, contentLine));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(_assertClassBrand(_Tokenizer_brand, this, _separateVcardContentLines).call(this)),
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
                  _cardTokens.push(_assertClassBrand(_Tokenizer_brand, this, _contentLineTokenizer).call(this, _contentLine));
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
  }();
  function _backCount(chr, str) {
    if (typeof chr === "undefined" || typeof str === "undefined") throw new MissingArgument("Character and string for this.#backCount must be supplied");
    if (typeof chr !== "string" || typeof str !== "string") throw new InvalidArgument("Character and string for this.#backCount must be of type string");
    var count = 0;
    for (var index = str.length - 1; index >= 0; index--) {
      if (str[index] === chr) count++;else break;
    }
    return count;
  }
  function _separateVcardContentLines() {
    if (this.numberOfVcards === 1) return _classPrivateFieldGet2(_unfoldedVcard, this).split("\r\n").filter(function (vcard) {
      return vcard !== "";
    });
    return _classPrivateFieldGet2(_unfoldedVcard, this).split(/BEGIN:VCARD\r\n/gi).filter(function (vcard) {
      return vcard !== "";
    }).map(function (vcard) {
      return ("BEGIN:VCARD\r\n" + vcard).split("\r\n").filter(function (vcard) {
        return vcard !== "";
      });
    });
  }
  function _valueSeparator(value) {
    var _this = this;
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (URL.canParse(value)) return value;
    var quotedValues = [];
    var quotedValueIndex = 0;
    for (var index = 0; index < value.length; index++) {
      if (value[index] === '"') {
        var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", value.slice(0, index));
        if (backslashCount % 2 !== 0) continue;
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
          })) return 0; // continue
          var _backslashCount3 = _assertClassBrand(_Tokenizer_brand, _this, _backCount).call(_this, "\\", value.substring(continueFrom, _index));
          if (_backslashCount3 % 2 !== 0) return 0; // continue
          parsedValue.push(value.substring(continueFrom, _index));
          continueFrom = _index + 1;
        }
        if (_index === value.length - 1) parsedValue.push(value.substring(continueFrom));
      },
      _ret;
    for (var _index = 0; _index < value.length; _index++) {
      _ret = _loop(_index);
      if (_ret === 0) continue;
    }
    for (var _index2 = 0; _index2 < parsedValue.length; _index2++) {
      var component = parsedValue[_index2];
      var quotedComponents = [];
      var quotedComponentIndex = 0;
      for (var _index3 = 0; _index3 < component.length; _index3++) {
        if (component[_index3] === '"') {
          var _backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", component.slice(0, _index3));
          if (_backslashCount % 2 !== 0) continue;
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
            })) return 0; // continue
            var _backslashCount2 = _assertClassBrand(_Tokenizer_brand, _this, _backCount).call(_this, "\\", component.substring(_continueFrom, index2));
            if (_backslashCount2 % 2 !== 0) return 0; // continue
            holdParsedComponent.push(component.substring(_continueFrom, index2));
            _continueFrom = index2 + 1;
          }
          if (index2 === component.length - 1) holdParsedComponent.push(component.substring(_continueFrom));
        },
        _ret2;
      for (var index2 = 0; index2 < component.length; index2++) {
        _ret2 = _loop2(index2);
        if (_ret2 === 0) continue;
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
  function _parametersSeparator(params) {
    var _this2 = this;
    var paramList = [];
    var quotedParams = [];
    var quotedParamIndex = 0;
    for (var index = 0; index < params.length; index++) {
      if (params[index] === '"') {
        var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", params.slice(0, index));
        if (backslashCount % 2 !== 0) continue;
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
          })) return 0; // continue
          var _backslashCount4 = _assertClassBrand(_Tokenizer_brand, _this2, _backCount).call(_this2, "\\", params.substring(continueFrom, _index4));
          if (_backslashCount4 % 2 !== 0) return 0; // continue
          paramList.push(params.substring(continueFrom, _index4));
          continueFrom = _index4 + 1;
        }
        if (_index4 === params.length - 1) paramList.push(params.substring(continueFrom));
      },
      _ret3;
    for (var _index4 = 0; _index4 < params.length; _index4++) {
      _ret3 = _loop3(_index4);
      if (_ret3 === 0) continue;
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
            })) return 0; // continue
            var _backslashCount5 = _assertClassBrand(_Tokenizer_brand, _this2, _backCount).call(_this2, "\\", joinedParam.substring(continueFrom, _index7));
            if (_backslashCount5 % 2 !== 0) return 0; // continue
            holdJoinedParam.push(joinedParam.substring(continueFrom, _index7));
            continueFrom = _index7 + 1;
          }
          if (_index7 === joinedParam.length - 1) holdJoinedParam.push(joinedParam.substring(continueFrom));
        },
        _ret4;
      for (var _index7 = 0; _index7 < joinedParam.length; _index7++) {
        _ret4 = _loop5(_index7);
        if (_ret4 === 0) continue;
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
          var circumflexCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "^", currentParamValue.substring(_continueFrom2, index2));
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
      if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"') && !URL.canParse(holdCurrentParamValue.slice(1, -1))) holdCurrentParamValue = _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, holdCurrentParamValue.slice(1, -1));else if (holdCurrentParamValue.startsWith('"') && holdCurrentParamValue.endsWith('"')) holdCurrentParamValue = holdCurrentParamValue.slice(1, -1);
      if (Array.isArray(holdCurrentParamValue)) holdCurrentParamValue = holdCurrentParamValue.map(function (val) {
        return val.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      });else holdCurrentParamValue = holdCurrentParamValue.replaceAll("\\n", "\n").replaceAll("\\;", ";").replaceAll("\\:", ":").replaceAll("\\,", ",").replaceAll("\\\\", "\\");
      currentParam[currentParamKey] = holdCurrentParamValue;
    }
    return paramList.reduce(function (accumulatedParams, currentParam) {
      var key = Object.keys(currentParam)[0].toUpperCase();
      var value = Object.values(currentParam)[0];
      accumulatedParams[key] = value;
      return accumulatedParams;
    }, {});
  }
  function _contentLineTokenizer(contentLine) {
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
      value: _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, contentLine.slice(propEndPoint + 1))
    };
    var quotedParts = [];
    var quotedPartsIndex = 0;
    for (var index = 0; index < contentLine.length; index++) {
      if (contentLine[index] === '"') {
        var backslashCount = _assertClassBrand(_Tokenizer_brand, this, _backCount).call(this, "\\", contentLine.slice(0, index));
        if (backslashCount % 2 !== 0) continue;
        if (_typeof(quotedParts[quotedPartsIndex]) !== "object") {
          quotedParts[quotedPartsIndex] = {
            start: index
          };
        } else {
          quotedParts[quotedPartsIndex]["stop"] = index;
          quotedPartsIndex++;
        }
      }
    }
    if (quotedParts.some(function (part) {
      return part.start < firstColonIndex && part.stop > firstColonIndex;
    })) {
      var _loop6 = function _loop6(_index9) {
          if (contentLine[_index9] === ":") {
            if (quotedParts.some(function (part) {
              return part.start < _index9 && part.stop > _index9;
            })) return 0; // continue
            else {
              firstColonIndex = _index9;
              return 1; // break
            }
          }
        },
        _ret5;
      for (var _index9 = firstColonIndex; _index9 < contentLine.length; _index9++) {
        _ret5 = _loop6(_index9);
        if (_ret5 === 0) continue;
        if (_ret5 === 1) break;
      }
    }
    return {
      group: group,
      property: property.toUpperCase(),
      parameters: _assertClassBrand(_Tokenizer_brand, this, _parametersSeparator).call(this, contentLine.slice(firstSemiColonIndex + 1, firstColonIndex)),
      value: _assertClassBrand(_Tokenizer_brand, this, _valueSeparator).call(this, contentLine.slice(firstColonIndex + 1))
    };
  }
  function _initialValidation(vcard) {
    var _vcard$match;
    if (typeof vcard === "undefined") throw new MissingArgument("vCard to be tokenized must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be tokenized must be of type string");
    if (((_vcard$match = vcard.match(/\r\n/g)) !== null && _vcard$match !== void 0 ? _vcard$match : []).length < 4) throw new InvalidVcard("vCard content lines must be delimited by CRLF (\\r\\n) sequence");
  }
  _defineProperty(Tokenizer, "identifier", "Tokenizer");
  Object.freeze(Tokenizer);

  var _tokenizedVcard = /*#__PURE__*/new WeakMap();
  var _Parser_brand = /*#__PURE__*/new WeakSet();
  var Parser = /*#__PURE__*/function () {
    function Parser(_tokenizedVcard2) {
      _classCallCheck(this, Parser);
      _classPrivateMethodInitSpec(this, _Parser_brand);
      _classPrivateFieldInitSpec(this, _tokenizedVcard, void 0);
      _assertClassBrand(_Parser_brand, this, _validateTokenizedVcard).call(this, _tokenizedVcard2);
      _classPrivateFieldSet2(_tokenizedVcard, this, _assertClassBrand(_Parser_brand, this, _removeUnnecessaryFields).call(this, _tokenizedVcard2));
      Object.freeze(this);
    }
    return _createClass(Parser, [{
      key: "parsed",
      get: function get() {
        var _parsedTokens = [];
        var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet2(_tokenizedVcard, this)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var token = _step.value;
            _parsedTokens.push(_assertClassBrand(_Parser_brand, this, _parseToken).call(this, token));
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
              return new RegExp("^".concat(property, "$"), "i").test(parsedToken.property);
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
              return new RegExp("^".concat(group, "$"), "i").test(parsedToken.group);
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
  }();
  function _validateTokenizedVcard(tokenizedVcard) {
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
      var _loop = function _loop() {
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
            if (relevantPropCount.get(prop) > 1) {
              var offendingTokens = tokenizedVcard.filter(function (token) {
                return token.property === prop;
              });
              if (!offendingTokens.every(function (token) {
                return token.parameters.hasOwnProperty("ALTID");
              }) || offendingTokens.some(function (token) {
                return token.parameters["ALTID"] !== offendingTokens[0].parameters["ALTID"];
              })) throw new InvalidVcard("vCard must not have more than one ANNIVERSARY, BDAY, GENDER, BIRTHPLACE, DEATHPLACE, DEATHDATE, KIND, N, PRODID, REV or UID property, unless they have the same ALTID parameter");
            }
        }
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function _removeUnnecessaryFields(tokenizedVcard) {
    return tokenizedVcard.filter(function (token) {
      return token.property !== "BEGIN" && token.property !== "VERSION" && token.property !== "END";
    });
  }
  function _parseToken(token) {
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
  exports.ParameterValueType = ParameterValueType;
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
