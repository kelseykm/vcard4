---
title: LevelParameter
sidebar_position: 17
hide_title: true
---

# `LevelParameter`

- This class represents the "LEVEL" parameter, for use with the following
  properties:

  1. [`ExpertiseProperty`](/documentation/properties/expertiseproperty)
  2. [`HobbyProperty`](/documentation/properties/hobbyproperty)
  3. [`InterestProperty`](/documentation/properties/interestproperty)

- `LevelParameter` should be called with a two arguments, the first a
  case-insensitive string, and the second, an instance of
  [`ParameterValueType`](/documentation/values/parametervaluetype)

- The first argument specifies the target property while the second specifies
  the value of the parameter.

- When the target property is `"ExpertiseProperty"`, the only valid values for
  the second argument ParameterValueType are `"beginner"`, `"average"` and `"expert"`.

- When the target property is either `"HobbyProperty"` or `"InterestProperty"`,
  the only valid values for the second argument ParameterValueType are `"high"`,
  `"medium"` and `"low"`.

  ```js
  new LevelParameter("hobbyproperty", new ParameterValueType("high"));
  ```
