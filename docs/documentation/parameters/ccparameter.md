---
title: CCParameter
sidebar_position: 15
hide_title: true
---

# `CCParameter`

- This class represents the "CC" parameter for use with the
  [`ADR`](/documentation/properties/adrproperty) property

- This parameter contains the ISO 3166 [ISO.3166.1988] two-character country
  code associated with the ["country name" `ADR`
  component](/documentation/values/specialvaluetype)

- `CCParameter` should be called with a single argument that is an instance of
  [`ParameterValueType`](/documentation/values/parametervaluetype), whose value is
  2 alphanumeric characters

  ```js
  new CCParameter(new ParameterValueType("US"));
  ```
