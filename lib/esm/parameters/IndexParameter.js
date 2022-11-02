import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _indexValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var IndexParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(IndexParameter, _BaseParameter);

  var _super = _createSuper(IndexParameter);

  function IndexParameter(_indexValue2) {
    var _this;

    _classCallCheck(this, IndexParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indexValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _indexValue2);

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

function _validate2(indexValue) {
  if (typeof indexValue === "undefined") throw new MissingArgument("Value for IndexParameter must be supplied");else if (indexValue.constructor.identifier !== "IntegerType" || !(Number(indexValue.repr()) > 0)) throw new InvalidArgument("Invalid value for IndexParameter. Must be a positive integer");
}

_defineProperty(IndexParameter, "param", "INDEX");

_defineProperty(IndexParameter, "identifier", "IndexParameter");

Object.freeze(IndexParameter);

export { IndexParameter };
//# sourceMappingURL=IndexParameter.js.map
