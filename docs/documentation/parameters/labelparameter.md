---
title: LabelParameter
sidebar_position: 14
hide_title: true
---

# `LabelParameter`

- This class represents the "LABEL" parameter for use with the
  [`ADR`](/documentation/properties/adrproperty) property

- It is used to present a delivery address label for the address

- `LabelParameter` should be called with a single argument that is an instance
  of [`ParameterValueType`](/documentation/values/parametervaluetype)

  ```js
  const deliveryAddress = new ParameterValueType(`Mr. John Q. Public, Esq.
  Mail Drop: TNE QB
  123 Main Street
  Any Town, CA 91921-1234
  U.S.A.`);

  new LabelParameter(deliveryAddress);
  ```
