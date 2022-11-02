---
title: ValueParameter
hide_title: true
sidebar_position: 3
---

# `ValueParameter`

- This class represents the "VALUE" parameter

- It is used to identify the data type of the value of a property

- `ValueParameter` should be called with a single argument that is an instance
  of either one of the [types](/documentation/values/intro)

  :::note
  The data type specified by the `VALUE` parameter must correspond to the value
  of the property
  :::

  ```js
  const propertyValue = new TextType("ahoy");

  const vp = new ValueParameter(propertyValue);

  //calling repr on vp
  vp.repr();
  //VALUE=text
  ```
