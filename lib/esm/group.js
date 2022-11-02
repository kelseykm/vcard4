import { createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, objectSpread2 as _objectSpread2, createForOfIteratorHelper as _createForOfIteratorHelper } from './_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from './errors/MissingArgument.js';
import { InvalidArgument } from './errors/InvalidArgument.js';

var _props = /*#__PURE__*/new WeakMap();

var _groupName = /*#__PURE__*/new WeakMap();

var _propertyInstanceCount = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var Group = /*#__PURE__*/function () {
  function Group(_props2, _groupName2) {
    _classCallCheck(this, Group);

    _classPrivateMethodInitSpec(this, _validate);

    _classPrivateFieldInitSpec(this, _props, {
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

    _classPrivateMethodGet(this, _validate, _validate2).call(this, _props2, _groupName2);

    _classPrivateFieldSet(this, _props, _props2);

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
      return _classPrivateFieldGet(this, _props).reduce(function (accumulatedProps, currentProp) {
        accumulatedProps.push("".concat(_classPrivateFieldGet(_this, _groupName), ".").concat(currentProp.repr()));
        return accumulatedProps;
      }, []).join(CRLF);
    }
  }, {
    key: "reprXML",
    value: function reprXML() {
      var valueXML = "";
      valueXML += "<group name=\"".concat(_classPrivateFieldGet(this, _groupName), "\">");
      valueXML += _classPrivateFieldGet(this, _props).reduce(function (accumulatedParameters, currentParameter) {
        return accumulatedParameters + currentParameter.reprXML();
      }, "");
      valueXML += "</group>";
      return valueXML;
    }
  }, {
    key: "reprJSON",
    value: function reprJSON() {
      var _this2 = this;

      return _classPrivateFieldGet(this, _props).reduce(function (accumulatedProps, currentProp) {
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

function _validate2(props, groupName) {
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

export { Group };
//# sourceMappingURL=group.js.map
