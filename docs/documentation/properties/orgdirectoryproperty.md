---
title: OrgDirectoryProperty
hide_title: true
sidebar_position: 32
---

# `OrgDirectoryProperty`

- This class represents the "ORG-DIRECTORY" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `OrgDirectoryProperty` are
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `OrgDirectoryProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new OrgDirectoryProperty(
  [],
  new URIType("uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6"),
);
```
