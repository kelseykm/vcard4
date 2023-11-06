---
title: NoteProperty
hide_title: true
sidebar_position: 34
---

# `NoteProperty`

- This class represents the "NOTE" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `NoteProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `NoteProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new NoteProperty(
  [],
  new TextType("This fax number is operational 0800 to 1715 EST, Mon-Fri."),
);
```
