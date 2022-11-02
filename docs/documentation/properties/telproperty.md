---
title: TelProperty
hide_title: true
sidebar_position: 19
---

# `TelProperty`

- This class represents the "TEL" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `TelProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- The [`MediatypeParameter`](/documentation/parameters/mediatypeparameter) may
  only be used if the value is of type
  [`URIType`](/documentation/values/uritype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `TelProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new TelProperty([], new URIType("tel:+33-01-23-45-67"));
```
