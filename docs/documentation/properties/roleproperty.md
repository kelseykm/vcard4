---
title: RoleProperty
hide_title: true
sidebar_position: 27
---

# `RoleProperty`

- This class represents the "ROLE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `RoleProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `RoleProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new RoleProperty([], new TextType("Project Leader"));
```
