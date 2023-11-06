---
title: SourceProperty
hide_title: true
sidebar_position: 2
---

# `SourceProperty`

- This class represents the "SOURCE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `SourceProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `SourceProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new SourceProperty(
  [],
  new URIType("ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"),
);
```
