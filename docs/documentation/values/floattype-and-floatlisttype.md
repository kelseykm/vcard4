---
title: FloatType and FloatListType
sidebar_position: 8
hide_title: true
---

# `FloatType` and `FloatListType`

- These classes represent the "float" and "float-list" data types respectively

- `FloatType` should be called with a single argument of type number or string.
  The value may have a sign ("-" or "+")

- The value must have a decimal point.

  ```js
  new FloatType("-35.00");

  new FloatType(90.234);
  ```

- `FloatListType` should be called with a single argument that is an array of
  `FloatType`s

  ```js
  new FloatListType([
    new FloatType(1.455),
    new FloatType(-345),
    new FloatType("33.000"),
  ]);
  ```
