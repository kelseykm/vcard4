---
title: AnniversaryProperty
hide_title: true
sidebar_position: 10
---

# `AnniversaryProperty`

- This class represents the "ANNIVERSARY" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `AnniversaryProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`CalscaleParameter`](/documentation/parameters/calscaleparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- [`CalscaleParameter`](/documentation/parameters/calscaleparameter) may only
  be used when the value is of type
  [`DateTimeType`](/documentation/values/datetimetype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `AnniversaryProperty` should be of type
  [`DateTimeType`](/documentation/values/datetimetype) of the type
  `dateandortime` or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new AnniversaryProperty([], new DateTimeType("dateandortime", "19960415"));
```
