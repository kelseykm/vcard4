---
title: DeathPlaceProperty
hide_title: true
sidebar_position: 13
---

# `DeathPlaceProperty`

- This class represents the "DEATHPLACE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `DeathPlaceProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- [`LanguageParameter`](/documentation/parameters/languageparameter) may only
  be used when the value is of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `DeathPlaceProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new DeathPlaceProperty([], new TextType("Meadow village"));

const deathplace2val = new TextType("Town center");

new DeathPlaceProperty([new ValueParameter(deathplace2val)], deathplace2val);
```
