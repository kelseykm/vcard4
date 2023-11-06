---
title: CategoriesProperty
hide_title: true
sidebar_position: 33
---

# `CategoriesProperty`

- This class represents the "CATEGORIES" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `CategoriesProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `CategoriesProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype) or
  [`TextListType`](/documentation/values/texttype-and-textlisttype)

```js
new CategoriesProperty([], new TextType("TRAVEL AGENT"));

new CategoriesProperty(
  [],
  new TextListType([
    new TextType("INTERNET"),
    new TextType("IETF"),
    new TextType("INDUSTRY"),
  ]),
);
```
