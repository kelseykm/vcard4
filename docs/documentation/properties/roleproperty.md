---
title: RoleProperty
hide_title: true
sidebar_position: 27
---

# `RoleProperty`

* This class represents the "ROLE" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```RoleProperty``` are [`ValueParameter`](ValueParameter), [`LanguageParameter`](LanguageParameter), [`PIDParameter`](PIDParameter), [`PrefParameter`](PrefParameter), [`TypeParameter`](TypeParameter), [`AltidParameter`](AltidParameter) and [`AnyParameter`](AnyParameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```RoleProperty``` should be of type [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new RoleProperty(
  [],
  new TextType('Project Leader')
);
```

