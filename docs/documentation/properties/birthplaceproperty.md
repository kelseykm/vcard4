---
title: BirthPlaceProperty
hide_title: true
sidebar_position: 12
---

# `BirthPlaceProperty`

- This class represents the "BIRTHPLACE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `BirthPlaceProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- [`LanguageParameter`](/documentation/parameters/languageparameter) may only
  be used when the value is of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `BirthPlaceProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new BirthPlaceProperty([], new TextType("Meadow village"));

const birthplace2val = new TextType("Town center");

new BirthPlaceProperty([new ValueParameter(birthplace2val)], birthplace2val);
```
