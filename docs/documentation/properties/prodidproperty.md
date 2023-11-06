---
title: ProdidProperty
hide_title: true
sidebar_position: 35
---

# `ProdidProperty`

- This class represents the "PRODID" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `ProdidProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `ProdidProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new ProdidProperty(
  [],
  new TextType("-//ONLINE DIRECTORY//NONSGML Version 1//EN"),
);
```
