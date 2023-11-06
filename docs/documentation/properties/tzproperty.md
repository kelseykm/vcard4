---
title: TzProperty
hide_title: true
sidebar_position: 24
---

# `TzProperty`

- This class represents the "TZ" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `TzProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `TzProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype),
  [`URIType`](/documentation/values/uritype) or
  [`DateTimeType`](/documentation/values/datetimetype)

```js
new TzProperty([], new TextType("Raleigh/North America"));

new TzProperty([], new DateTimeType("utcoffset", "-0500"));
```
