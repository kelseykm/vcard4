---
title: IntegerType and IntegerListType
sidebar_position: 7
hide_title: true
---

# `IntegerType` and `IntegerListType`

- These classes represent the "integer" and "integer-list" data types
  respectively

- `IntegerType` should be called with a single argument of type number or
  bigint. The value may have a sign ("-" or "+")

  ```js
  new IntegerType(1n);

  new IntegerType(-30);

  new IntegerType(5);

  new IntegerType(-45n);
  ```

- The maximum value is `9223372036854775807n`, and the minimum value is
  `-9223372036854775808n` when using bigint values, but when using values of
  type number, the maximum number is `Number.MAX_SAFE_INTEGER` and the minimum
  is `Number.MIN_SAFE_INTEGER`

- `IntegerListType` should be called with a single argument that is an array of
  `IntegerType`s

  ```js
  new IntegerListType([
    new IntegerType(1),
    new IntegerType(4e2),
    new IntegerType(33n),
  ]);
  ```
