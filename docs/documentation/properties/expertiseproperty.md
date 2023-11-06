---
title: ExpertiseProperty
hide_title: true
sidebar_position: 15
---

# `ExpertiseProperty`

- This class represents the "EXPERTISE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `ExpertiseProperty` are
  [`LevelParameter`](/documentation/parameters/levelparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `ExpertiseProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new ExpertiseProperty(
  [new LevelParameter("expertiseProperty", new ParameterValueType("expert"))],
  new TextType("Theoretical Physics"),
);
```
