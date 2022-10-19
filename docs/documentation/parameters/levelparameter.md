---
title: LevelParameter
sidebar_position: 17
hide_title: true
---

# `LevelParameter`

- This class represents the "LEVEL" parameter, for use with the following properties:

  1. [`ExpertiseProperty`](/documentation/properties/expertiseproperty)
  2. [`HobbyProperty`](/documentation/properties/hobbyproperty)
  3. [`InterestProperty`](/documentation/properties/interestproperty)

- `LevelParameter` should be called with a two arguments, the first an instance of [`TextType`](/documentation/values/texttype-and-textlisttype), and the second, a case-insensitive string.

- The first argument specifies the value of the parameter while the second specifies the target property.

- When the target property is `"ExpertiseProperty"`, the only valid values for the first argument TextType are `"beginner"`, `"average"` and `"expert"`.

- When the target property is either `"HobbyProperty"` or `"InterestProperty"`, the only valid values for the first argument TextType are `"high"`, `"medium"` and `"low"`.

  ```js
  new LevelParameter(new TextType("high"), "hobbyproperty");
  ```
