---
title: RelatedProperty
hide_title: true
sidebar_position: 31
---

# `RelatedProperty`

- This class represents the "RELATED" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `RelatedProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`LanguageParameter`](/documentation/parameters/languageparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `RelatedProperty` should be of type
  [`URIType`](/documentation/values/uritype) or
  [`TextType`](/documentation/values/texttype-and-textlisttype)

```js
new RelatedProperty(
  [new TypeParameter("relatedproperty", new ParameterValueType("friend"))],
  new URIType("uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6"),
);

const relPropVal = new TextType(
  "Please contact my assistant Jane Doe for any inquiries.",
);
new RelatedProperty(
  [
    new TypeParameter("relatedproperty", new ParameterValueType("co-worker")),
    new ValueParameter(relPropVal),
  ],
  relPropVal,
);
```
