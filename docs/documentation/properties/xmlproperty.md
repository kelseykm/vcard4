---
title: XMLProperty
hide_title: true
sidebar_position: 4
---

# `XMLProperty`

- This class represents the "XML" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `XMLProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter) and
  [`AltidParameter`](/documentation/parameters/altidparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `XMLProperty` should be of type
  [`TextType`](/documentation/values/texttype-and-textlisttype)

:::note

1. The XML element namespace must be explicitly specified using the xmlns
   attribute.

2. The XML element namespace MUST NOT be the vCard 4 namespace
   (urn:ietf:params:xml:ns:vcard-4.0).

:::

```js
new XMLProperty(
  [],
  new TextType(
    `<love-letter xmlns="urn:imaginary-namespace">
      <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me, this weekend!</body>
      </note>
    </love-letter>`,
  ),
);
```
