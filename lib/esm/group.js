import { createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, createForOfIteratorHelper as _createForOfIteratorHelper } from './_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from './errors/MissingArgument.js';
import { InvalidArgument } from './errors/InvalidArgument.js';

var _props = /*#__PURE__*/new WeakMap();
var _groupName = /*#__PURE__*/new WeakMap();
var _propertyInstanceCount = /*#__PURE__*/new WeakMap();
var _Group_brand = /*#__PURE__*/new WeakSet();
var Group = /*#__PURE__*/function () {
  function Group(_props2, _groupName2) {
    _classCallCheck(this, Group);
    _classPrivateMethodInitSpec(this, _Group_brand);
    _classPrivateFieldInitSpec(this, _props, void 0);
    _classPrivateFieldInitSpec(this, _groupName, void 0);
    _classPrivateFieldInitSpec(this, _propertyInstanceCount, new Map([["FNProperty", 0], ["AnniversaryProperty", 0], ["BdayProperty", 0], ["GenderProperty", 0], ["BirthPlaceProperty", 0], ["DeathPlaceProperty", 0], ["DeathDateProperty", 0], ["KindProperty", 0], ["NProperty", 0], ["ProdidProperty", 0], ["RevProperty", 0], ["UIDProperty", 0]]));
    _defineProperty(this, "hasMemberProperty", false);
    _defineProperty(this, "kindPropertyIsGroup", false);
    _assertClassBrand(_Group_brand, this, _validate).call(this, _props2, _groupName2);
    _classPrivateFieldSet2(_props, this, _props2);
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
      return _classPrivateFieldGet2(_props, this);
    }
  }, {
    key: "repr",
    value: function repr() {
      var _this = this;
      var CRLF = "\r\n";
      return _classPrivateFieldGet2(_props, this).reduce(function (accumulatedProps, currentProp) {
        accumulatedProps.push("".concat(_classPrivateFieldGet2(_groupName, _this), ".").concat(currentProp.repr()));
        return accumulatedProps;
      }, []).join(CRLF);
    }
  }, {
    key: "reprXML",
    value: function reprXML() {
      var valueXML = "";
      valueXML += "<group name=\"".concat(_classPrivateFieldGet2(_groupName, this), "\">");
      valueXML += _classPrivateFieldGet2(_props, this).reduce(function (accumulatedParameters, currentParameter) {
        return accumulatedParameters + currentParameter.reprXML();
      }, "");
      valueXML += "</group>";
      return valueXML;
    }
  }, {
    key: "reprJSON",
    value: function reprJSON() {
      var _this2 = this;
      return _classPrivateFieldGet2(_props, this).reduce(function (accumulatedProps, currentProp) {
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
function _validate(props, groupName) {
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

export { Group };
//# sourceMappingURL=group.js.map
