import { createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper } from './_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from './errors/MissingArgument.js';
import { InvalidArgument } from './errors/InvalidArgument.js';

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

export { VCARD };
//# sourceMappingURL=card.js.map
