---
title: GenderProperty
hide_title: true
sidebar_position: 11
---

# `GenderProperty`

- This class represents the "GENDER" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `GenderProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `GenderProperty` should be of type
  [`SexType`](/documentation/values/sextype) or
  [`SpecialValueType`](/documentation/values/specialvaluetype)

```js
new GenderProperty([], new SexType("M"));

new GenderProperty(
  [],
  new SpecialValueType("genderproperty", [
    new SexType("O"),
    new TextType("intersex"),
  ]),
);

const gpArr = new Array(2);
gpArr[1] = new TextType("it's complicated");

new GenderProperty([], new SpecialValueType("genderproperty", gpArr));
```
