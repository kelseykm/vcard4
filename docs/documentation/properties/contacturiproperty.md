---
title: ContactURIProperty
hide_title: true
sidebar_position: 23
---

# `ContactURIProperty`

- This class represents the "CONTACT-URI" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `ContactURIProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter) and
  [`IndexParameter`](/documentation/parameters/indexparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `ContactURIProperty` should be of type
  [`URIType`](/documentation/values/uritype). It be either a "mailto", "http",
  or "https" URI value

```js
new ContactURIProperty([], new URIType("mailto:contact@example.com"));
```
