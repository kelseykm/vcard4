---
title: NProperty
hide_title: true
sidebar_position: 6
---

# `NProperty`

- This class represents the "N" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `NProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`SortAsParameter`](/documentation/parameters/sortasparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `NProperty` should be of type
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
const nArr = [
  new TextType("Stevenson"),
  new TextType("John"),
  new TextListType([new TextType("Phillip"), new TextType("Paul")]),
  new TextType("Dr."),
  new TextListType([
    new TextType("Jr."),
    new TextType("M.D."),
    new TextType("A.C.P."),
  ]),
];

const nPropVal = new SpecialValueType("nproperty", nArr);

new NProperty([], nPropVal);
```
