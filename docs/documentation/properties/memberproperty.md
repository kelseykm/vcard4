---
title: MemberProperty
hide_title: true
sidebar_position: 30
---

# `MemberProperty`

- This class represents the "MEMBER" property

:::note This property should only be used if the value of the "KIND"
([`KindProperty`](kindproperty)) property is "group" :::

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `MemberProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `MemberProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new MemberProperty(
  [],
  new URIType("urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af"),
);
```
