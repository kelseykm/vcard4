---
title: AltidParameter
sidebar_position: 5
hide_title: true
---

# `AltidParameter`

- This class represents the "ALTID" parameter

- `AltidParameter` should be called with a single argument that is an instance of either [`IntegerType`](/documentation/values/integertype-and-integerlisttype) or [`TextType`](/documentation/values/texttype-and-textlisttype)

  ```js
  new AltidParameter(new IntegerType(23));

  new AltidParameter(new TextType("blah"));
  ```
