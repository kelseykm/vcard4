---
title: BdayProperty
hide_title: true
sidebar_position: 9
---

# `BdayProperty`

- This class represents the "BDAY" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `BdayProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`CalscaleParameter`](/documentation/parameters/calscaleparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- [`CalscaleParameter`](/documentation/parameters/calscaleparameter) may only
  be used when the value is of type
  [`DateTimeType`](/documentation/values/datetimetype)

- [`LanguageParameter`](/documentation/parameters/languageparameter) may only
  be used when the value is of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `BdayProperty` should be of type
  [`DateTimeType`](/documentation/values/datetimetype) of the type
  `dateandortime` or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new BdayProperty([], new DateTimeType("dateandortime", "19960415"));

const bday2val = new TextType("circa 1800");

new BdayProperty([new ValueParameter(bday2val)], bday2val);
```
