---
title: LogoProperty
hide_title: true
sidebar_position: 28
---

# `LogoProperty`

- This class represents the "LOGO" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `LogoProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter), PrefParameter,
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `LogoProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new LogoProperty(
  [],
  new URIType("http://www.example.com/pub/logos/abccorp.jpg"),
);

new LogoProperty(
  [],
  new URIType(
    "data:image/jpeg;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhvcAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bmljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0",
  ),
);
```
