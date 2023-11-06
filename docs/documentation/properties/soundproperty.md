---
title: SoundProperty
hide_title: true
sidebar_position: 37
---

# `SoundProperty`

- This class represents the "SOUND" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `SoundProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `SoundProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new SoundProperty(
  [],
  new URIType("CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com"),
);

new SoundProperty(
  [],
  new URIType(
    "data:audio/basic;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bmljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0",
  ),
);
```
