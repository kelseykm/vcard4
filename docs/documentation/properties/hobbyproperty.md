---
title: HobbyProperty
hide_title: true
sidebar_position: 16
---

# `HobbyProperty`

- This class represents the "HOBBY" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `HobbyProperty` are
  [`LevelParameter`](/documentation/parameters/levelparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `HobbyProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new HobbyProperty(
  [new LevelParameter("hobbyProperty", new ParameterValueType("beginner"))],
  new TextType("Chess"),
);
```
