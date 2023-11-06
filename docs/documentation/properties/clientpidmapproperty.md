---
title: ClientpidmapProperty
hide_title: true
sidebar_position: 39
---

# `ClientpidmapProperty`

- This class represents the "CLIENTPIDMAP" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameter of `ClientpidmapProperty` is
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `ClientpidmapProperty` should be of type
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
new ClientpidmapProperty(
  [],
  new SpecialValueType("clientpidmapproperty", [
    new IntegerType(1),
    new URIType("urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b"),
  ]),
);
```
