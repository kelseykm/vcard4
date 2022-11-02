import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _mediaTypeRegExp = /*#__PURE__*/new WeakMap();

var _attributeRegExp = /*#__PURE__*/new WeakMap();

var _mediaValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var MediatypeParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(MediatypeParameter, _BaseParameter);

  var _super = _createSuper(MediatypeParameter);

  function MediatypeParameter(_mediaValue2) {
    var _this;

    _classCallCheck(this, MediatypeParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

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

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _mediaValue2);

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

function _validate2(mediaValue) {
  if (typeof mediaValue === "undefined") throw new MissingArgument("Value for MediatypeParameter must be supplied");else if (mediaValue.constructor.identifier !== "TextType" && Array.isArray(mediaValue) && !mediaValue.every(function (val) {
    return val.constructor.identifier === "TextType";
  })) throw new TypeError("Value for MediatypeParameter must be of TextType or an array of TextTypes");else if (!Array.isArray(mediaValue) && !_classPrivateFieldGet(this, _mediaTypeRegExp).test(mediaValue.repr())) throw new InvalidArgument("Invalid media type");else if (Array.isArray(mediaValue)) {
    if (mediaValue.length !== 2) throw new InvalidArgument("Invalid value for MediatypeParameter. It should be an array with a length of 2");else if (!_classPrivateFieldGet(this, _mediaTypeRegExp).test(mediaValue[0].repr())) throw new InvalidArgument("Invalid media type");else if (!_classPrivateFieldGet(this, _attributeRegExp).test(mediaValue[1].repr())) throw new InvalidArgument("Invalid media type");
  }
}

_defineProperty(MediatypeParameter, "param", "MEDIATYPE");

_defineProperty(MediatypeParameter, "identifier", "MediatypeParameter");

Object.freeze(MediatypeParameter);

export { MediatypeParameter };
//# sourceMappingURL=MediatypeParameter.js.map
