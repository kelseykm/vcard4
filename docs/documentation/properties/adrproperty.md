---
title: AdrProperty
hide_title: true
sidebar_position: 18
---

# `AdrProperty`

- This class represents the "ADR" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `AdrProperty` are
  [`LabelParameter`](/documentation/parameters/labelparameter),
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`GeoParameter`](/documentation/parameters/geoparameter),
  [`TzParameter`](/documentation/parameters/tzparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`AnyParameter`](/documentation/parameters/anyparameter) and
  [`CCParameter`](/documentation/parameters/ccparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `AdrProperty` should be of type
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
const addrArr = new Array(7);
addrArr[2] = new TextType("123 Main Street");
addrArr[3] = new TextType("Any Town");
addrArr[4] = new TextType("CA");
addrArr[5] = new TextType("91921-1234");
addrArr[6] = new TextType("U.S.A.");

new AdrProperty(
  [new GeoParameter(new URIType("geo:12.3457,78.910"))],
  new SpecialValueType("AdrProperty", addrArr),
);
```
