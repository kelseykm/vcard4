---
title: NicknameProperty
hide_title: true
sidebar_position: 7
---

# `NicknameProperty`

- This class represents the "NICKNAME" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `NicknameProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `NicknameProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype) or
  [`TextListType`](/documentation/values/texttype-and-textlisttype)

```js
new NicknameProperty([], new TextType("Robbie"));

new NicknameProperty(
  [],
  new TextListType([new TextType("Jim"), new TextType("Jimmie")]),
);

new NicknameProperty(
  [new TypeParameter("nicknameproperty", new ParameterValueType("work"))],
  new TextType("Boss"),
);
```
