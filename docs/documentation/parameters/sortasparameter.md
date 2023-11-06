---
title: SortAsParameter
sidebar_position: 10
hide_title: true
---

# `SortAsParameter`

- This class represents the "SORT-AS" parameter

- `SortAsParameter` should be called with a single argument that is an instance
  of [`ParameterValueType`](/documentation/values/parametervaluetype) or an array of
  [`ParameterValueType`](/documentation/values/parametervaluetype)s if you wish
  to specify multiple values

```js
new SortAsParameter([
  new ParameterValueType("Harten"),
  new ParameterValueType("Rene"),
]);

new SortAsParameter(new ParameterValueType("Pau Shou Chang"));
```
