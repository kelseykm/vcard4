---
title: CaladruriProperty
hide_title: true
sidebar_position: 43
---

# `CaladruriProperty`

- This class represents the "CALADRURI" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `CaladruriProperty` are
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

- The value of `CaladruriProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new CaladruriProperty([], new URIType("http://example.com/calendar/jdoe"));
```
