---
title: OrgProperty
hide_title: true
sidebar_position: 29
---

# `OrgProperty`

- This class represents the "ORG" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `OrgProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`SortAsParameter`](/documentation/parameters/sortasparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `OrgProperty` should be of type
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
new OrgProperty(
  [],
  new SpecialValueType("orgproperty", [
    new TextType("ABC, Inc."),
    new TextType("North American Division"),
    new TextType("Marketing"),
  ]),
);
```
