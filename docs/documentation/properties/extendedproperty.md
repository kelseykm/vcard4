---
title: ExtendedProperty
hide_title: true
sidebar_position: 45
---

# `ExtendedProperty`

- This class is for creating extended properties

- This class should be called with three arguments. The first argument, a
  string, should be the name of the extended property and it must be an x-name
  . The second should be an array of the parameters, and the third the value of
  the property

  :::info
  X-names are names that begin with "x-" or "X-" and are reserved for
  experimental use, not intended for released products, or for use in bilateral
  agreements.
  :::

- All the afore documented [parameters](/documentation/parameters/intro) and
  [values](/documentation/values/intro) are valid

- If you do not wish that the property have any parameters, leave the second
  argument array empty

```js
new ExtendedProperty("X-CAR", [], new TextType("Volvo"));
```
