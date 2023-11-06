---
title: KindProperty
hide_title: true
sidebar_position: 3
---

# `KindProperty`

- This class represents the "KIND" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `KindProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `KindProperty` should be of type
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
new KindProperty([], new SpecialValueType("kindproperty", "individual"));
```
