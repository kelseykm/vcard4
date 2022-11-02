import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, classCallCheck as _classCallCheck, wrapNativeSuper as _wrapNativeSuper } from '../_virtual/_rollupPluginBabelHelpers.js';

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

export { InvalidArgument };
//# sourceMappingURL=InvalidArgument.js.map
