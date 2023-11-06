---
title: RevProperty
hide_title: true
sidebar_position: 36
---

# `RevProperty`

- This class represents the "REV" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `RevProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `RevProperty` should be of type
  [`DateTimeType`](/documentation/values/datetimetype) of type `timestamp`

```js
new RevProperty([], new DateTimeType("timestamp", "19951031T222710Z"));
```
