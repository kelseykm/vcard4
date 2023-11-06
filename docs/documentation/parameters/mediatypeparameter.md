---
title: MediatypeParameter
sidebar_position: 8
hide_title: true
---

# `MediatypeParameter`

- This class represents the "MEDIATYPE" parameter

- `MediatypeParameter` should be called with a single argument that is either
  an instance of [`ParameterValueType`](/documentation/values/parametervaluetype)
  specifying the media type and subtype, or an array of length 2, whose first
  item is an instance of
  [`ParameterValueType`](/documentation/values/parametervaluetype) specifying the
  media type and subtype, and whose second item is also an instance of
  [`ParameterValueType`](/documentation/values/parametervaluetype) specifying the
  media attribute and values

- The media type and subtype
  [`ParameterValueType`](/documentation/values/parametervaluetype) value should be
  of the format `type-name "/" subtype-name`, while the attribute and value
  [`ParameterValueType`](/documentation/values/parametervaluetype) should be of the
  format `attribute "=" value`

  ```js
  new MediatypeParameter(new ParameterValueType("audio/mp3"));

  new MediatypeParameter([
    new ParameterValueType("text/html"),
    new ParameterValueType("charset=UTF-8"),
  ]);
  ```
