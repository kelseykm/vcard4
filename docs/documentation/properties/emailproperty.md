---
title: EmailProperty
hide_title: true
sidebar_position: 20
---

# `EmailProperty`

- This class represents the "EMAIL" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `EmailProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `EmailProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new EmailProperty(
  [new PrefParameter(new IntegerType(1))],
  new TextType("jane_doe@example.com"),
);
```
