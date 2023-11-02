import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _sortValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var SortAsParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(SortAsParameter, _BaseParameter);

  var _super = _createSuper(SortAsParameter);

  function SortAsParameter(_sortValue2) {
    var _this;

    _classCallCheck(this, SortAsParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _sortValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _sortValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _sortValue, _sortValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SortAsParameter, [{
    key: "value",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _sortValue)) ? "\"".concat(_classPrivateFieldGet(this, _sortValue).map(function (val) {
        return val.repr();
      }).join(",").replaceAll('"', ""), "\"") : _classPrivateFieldGet(this, _sortValue).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _sortValue)) ? _classPrivateFieldGet(this, _sortValue).map(function (val) {
        return val.reprXML();
      }).join("") : _classPrivateFieldGet(this, _sortValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return Array.isArray(_classPrivateFieldGet(this, _sortValue)) ? ["text"].concat(_toConsumableArray(_classPrivateFieldGet(this, _sortValue).map(function (val) {
        return val._unsafe_raw_value;
      }))) : _classPrivateFieldGet(this, _sortValue).reprJSON();
    }
  }]);

  return SortAsParameter;
}(BaseParameter);

function _validate2(sortValue) {
  if (typeof sortValue === "undefined") throw new MissingArgument("Value for SortAsParameter must be supplied");else if (!(!Array.isArray(sortValue) && sortValue.constructor.identifier === "ParameterValueType") && !(Array.isArray(sortValue) && sortValue.every(function (val) {
    return val.constructor.identifier === "ParameterValueType";
  }))) throw new TypeError("Value for SortAsParameter must be of type ParameterValueType or an array of ParameterValueTypes");
}

_defineProperty(SortAsParameter, "param", "SORT-AS");

_defineProperty(SortAsParameter, "identifier", "SortAsParameter");

Object.freeze(SortAsParameter);

export { SortAsParameter };
//# sourceMappingURL=SortAsParameter.js.map
