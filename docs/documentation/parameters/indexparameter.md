---
title: IndexParameter
sidebar_position: 16
hide_title: true
---

# `IndexParameter`

- This class represents the "INDEX" parameter

- When a property is multi-valued, INDEX can be used to indicate an ordering or
  sequence of the values

- `IndexParameter` should be called with a single argument that is an instance
  of [`IntegerType`](/documentation/values/integertype-and-integerlisttype),
  whose value is strictly positive; zero is not allowed

  ```js
  new IndexParameter(new IntegerType(1));
  ```
