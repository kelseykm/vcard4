---
title: InterestProperty
hide_title: true
sidebar_position: 17
---

# `InterestProperty`

- This class represents the "INTEREST" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `InterestProperty` are
  [`LevelParameter`](/documentation/parameters/levelparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `InterestProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new InterestProperty(
  [new LevelParameter("interestProperty", new ParameterValueType("average"))],
  new TextType("Arbitrage betting"),
);
```
