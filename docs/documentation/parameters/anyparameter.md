---
title: AnyParameter
sidebar_position: 13
hide_title: true
---

# `AnyParameter`

- This class is for creating extended parameters

- `AnyParameter` should be called with two arguments.

- The first argument of type string, is the name of the extended parameter,
  which should be an x-name

  :::info
  X-names are names that begin with "x-" or "X-" and are reserved for
  experimental use, not intended for released products, or for use in bilateral
  agreements
  :::

- The characters allowed in an x-name include hyphens and alphanumeric
  characters

- The second argument is the value. It should be an instance of any of the
  [property value data types](/documentation/values/intro).

  ```js
  new AnyParameter("X-CAR", new ParameterValueType("Volvo"));

  new AnyParameter("X-network-TDOA", new ParameterValueType("strong"));
  ```
