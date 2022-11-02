import { createClass as _createClass, createForOfIteratorHelper as _createForOfIteratorHelper, classPrivateFieldGet as _classPrivateFieldGet, classPrivateMethodGet as _classPrivateMethodGet, objectSpread2 as _objectSpread2, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldSet as _classPrivateFieldSet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidVcard } from '../errors/InvalidVcard.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

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

export { Parser };
//# sourceMappingURL=Parser.js.map
