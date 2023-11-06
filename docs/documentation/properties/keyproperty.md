---
title: KeyProperty
hide_title: true
sidebar_position: 41
---

# `KeyProperty`

- This class represents the "KEY" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `KeyProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- The [`MediatypeParameter`](/documentation/parameters/mediatypeparameter) may
  only be used if the value is of type
  [`URIType`](/documentation/values/uritype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `KeyProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new KeyProperty(
  [new MediatypeParameter(new ParameterValueType("application/pgp-keys"))],
  new URIType("ftp://example.com/keys/jdoe"),
);
```
