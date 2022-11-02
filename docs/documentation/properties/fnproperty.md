---
title: FNProperty
hide_title: true
sidebar_position: 5
---

# `FNProperty`

- This class represents the "FN" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `FNProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `FNProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new FNProperty([], new TextType("James Bond"));
```
