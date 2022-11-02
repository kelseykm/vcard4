---
title: TypeParameter
sidebar_position: 7
hide_title: true
---

# `TypeParameter`

- This class represents the "TYPE" parameter

- `TypeParameter` should be called with a two arguments, the first being the
  value and the second being the target property. The value of the first
  argument depends on the value of the second

- The value of the second argument should be a string with the name of the
  target property as already mentioned

- For all target properties, the first argument should be an instance of
  [`TextType`](/documentation/values/texttype-and-textlisttype), whose value is
  either `"work"`, `"home"`, an identifier registered with IANA or an x-name
  (names that begin with "x-" or "X-" and are reserved for experimental use, not
  intended for released products, or for use in bilateral agreements)

- Where the value of the second argument is `"TelProperty"` (case insensitive),
  the value of the first argument may be `"text"`, `"voice"`, `"fax"`,
  `"cell"`, `"video"`, `"pager"`, `"textphone"` or `"main"` in addition to the
  values specified above for all target properties

- Where the value of the second argument is `"RelatedProperty"` (case
  insensitive), the value of the first argument may be `"contact"`,
  `"acquaintance"`, `"friend"`, `"met"`, `"co-worker"`, `"colleague"`,
  `"co-resident"`, `"neighbor"`, `"child"`, `"parent"`, `"sibling"`, `"spouse"`,
  `"kin"`, `"muse"`, `"crush"`, `"date"`, `"sweetheart"`, `"me"`, `"agent"` or
  `"emergency"`, in addition to the values specified above for all target
  properties

- If you wish to have multiple values for the same TYPE parameter, the value of
  the first argument may be an instance of
  [`TextListType`](/documentation/values/texttype-and-textlisttype), whose values
  for individual [`TextType`](/documentation/values/texttype-and-textlisttype)
  components are those specified above, according to the rules specified above

  ```js
  new TypeParameter(new TextType("work"), "emailproperty");

  new TypeParameter(
    new TextListType([new TextType("voice"), new TextType("home")]),
    "telproperty"
  );

  new TypeParameter(new TextType("sweetheart"), "relatedproperty");
  ```
