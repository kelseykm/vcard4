---
title: TypeParameter
sidebar_position: 7
hide_title: true
---

# `TypeParameter`

- This class represents the "TYPE" parameter

- `TypeParameter` should be called with a two arguments, the first being the
  target property and the second being the value. The value of the second
  argument depends on the value of the first

- The value of the first argument should be a string with the name of the
  target property as already mentioned

- The second argument specifying the value of the `TypeParameter` should be
  an instance of [`ParameterValueType`](/documentation/values/parametervaluetype)

- For all target properties, either `"work"`, `"home"` or an x-name (names
  that begin with "x-" or "X-" and are reserved for experimental use, not
  intended for released products, or for use in bilateral agreements), are
  allowed as values for the
  [`ParameterValueType`](/documentation/values/parametervaluetype) value

- Where the value of the first argument is `"TelProperty"` (case insensitive),
  the value of the second argument may be `"text"`, `"voice"`, `"fax"`,
  `"cell"`, `"video"`, `"pager"`, `"textphone"` or `"main"` in addition to the
  values specified above for all target properties

- Where the value of the first argument is `"RelatedProperty"` (case
  insensitive), the value of the second argument may be `"contact"`,
  `"acquaintance"`, `"friend"`, `"met"`, `"co-worker"`, `"colleague"`,
  `"co-resident"`, `"neighbor"`, `"child"`, `"parent"`, `"sibling"`, `"spouse"`,
  `"kin"`, `"muse"`, `"crush"`, `"date"`, `"sweetheart"`, `"me"`, `"agent"` or
  `"emergency"`, in addition to the values specified above for all target
  properties

- If you wish to have multiple values for the same TYPE parameter, put the
  [`ParameterValueType`](/documentation/values/parametervaluetype) values in an
  array and pass the array as the value of the second argument. The rules
  specified above still apply.

  ```js
  new TypeParameter("emailproperty", new ParameterValueType("work"));

  new TypeParameter("telproperty", [
    new ParameterValueType("voice"),
    new ParameterValueType("home"),
  ]);

  new TypeParameter("relatedproperty", new ParameterValueType("sweetheart"));
  ```
