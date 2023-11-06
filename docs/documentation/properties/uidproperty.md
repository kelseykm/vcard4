---
title: UIDProperty
hide_title: true
sidebar_position: 38
---

# `UIDProperty`

- This class represents the "UID" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `UIDProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `UIDProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new UIDProperty(
  [],
  new URIType("urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6"),
);
```
