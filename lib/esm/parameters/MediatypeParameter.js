import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

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
    _assertClassBrand(_MediatypeParameter_brand, _this, _validate).call(_this, _mediaValue2);
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
function _validate(mediaValue) {
  if (typeof mediaValue === "undefined") throw new MissingArgument("Value for MediatypeParameter must be supplied");else if (!Array.isArray(mediaValue) && mediaValue.constructor.identifier !== "ParameterValueType" || Array.isArray(mediaValue) && !mediaValue.every(function (val) {
    return val.constructor.identifier === "ParameterValueType";
  })) throw new TypeError("Value for MediatypeParameter must be of ParameterValueType or an array of ParameterValueTypes");else if (!Array.isArray(mediaValue) && !_classPrivateFieldGet2(_mediaTypeRegExp, this).test(mediaValue.repr())) throw new InvalidArgument("Invalid media type");else if (Array.isArray(mediaValue)) {
    if (mediaValue.length !== 2) throw new InvalidArgument("Invalid value for MediatypeParameter. It should be an array with a length of 2");else if (!_classPrivateFieldGet2(_mediaTypeRegExp, this).test(mediaValue[0].repr())) throw new InvalidArgument("Invalid media type");else if (!_classPrivateFieldGet2(_attributeRegExp, this).test(mediaValue[1].repr())) throw new InvalidArgument("Invalid media type");
  }
}
_defineProperty(MediatypeParameter, "param", "MEDIATYPE");
_defineProperty(MediatypeParameter, "identifier", "MediatypeParameter");
Object.freeze(MediatypeParameter);

export { MediatypeParameter };
//# sourceMappingURL=MediatypeParameter.js.map
