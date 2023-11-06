---
title: FburlProperty
hide_title: true
sidebar_position: 42
---

# `FburlProperty`

- This class represents the "FBURL" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `FburlProperty` are
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

- The value of `FburlProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new FburlProperty(
  [new MediatypeParameter(new ParameterValueType("text/calendar"))],
  new URIType("ftp://example.com/busy/project-a.ifb"),
);
```
