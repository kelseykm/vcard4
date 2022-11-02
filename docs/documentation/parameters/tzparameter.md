---
title: TzParameter
sidebar_position: 12
hide_title: true
---

# `TzParameter`

- This class represents the "TZ" parameter

- `TzParameter` should be called with a single argument that is an instance of
  [`URIType`](/documentation/values/uritype), or
  [`TextType`](/documentation/values/texttype-and-textlisttype), or
  [`DateTimeType`](/documentation/values/datetimetype) with the type `utc-offset`

  ```js
  new TzParameter(new TextType("Raleigh/North America"));

  new TzParameter(new DateTimeType("-0500", "utcoffset"));
  ```
