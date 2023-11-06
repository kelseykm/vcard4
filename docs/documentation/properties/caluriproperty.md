---
title: CaluriProperty
hide_title: true
sidebar_position: 44
---

# `CaluriProperty`

- This class represents the "CALURI" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `CaluriProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `CaluriProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new CaluriProperty(
  [new MediatypeParameter(new ParameterValueType("text/calendar"))],
  new URIType("ftp://ftp.example.com/calA.ics"),
);
```
