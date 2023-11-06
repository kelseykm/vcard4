---
title: PhotoProperty
hide_title: true
sidebar_position: 8
---

# `PhotoProperty`

- This class represents the "PHOTO" property

- This class should be called with two arguments, the first an array of the
  parameters, and the second the value of the property

- The only acceptable parameters of `PhotoProperty` are
  [`ValueParameter`](/documentation/parameters/valueparameter),
  [`AltidParameter`](/documentation/parameters/altidparameter),
  [`TypeParameter`](/documentation/parameters/typeparameter),
  [`MediatypeParameter`](/documentation/parameters/mediatypeparameter),
  [`PrefParameter`](/documentation/parameters/prefparameter),
  [`IndexParameter`](/documentation/parameters/indexparameter),
  [`PIDParameter`](/documentation/parameters/pidparameter) and
  [`AnyParameter`](/documentation/parameters/anyparameter)

- If you do not wish that the property have any parameters, leave the first
  argument array empty

- The value of `PhotoProperty` should be of type
  [`URIType`](/documentation/values/uritype)

```js
new PhotoProperty(
  [],
  new URIType(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  ),
);

new PhotoProperty(
  [],
  new URIType("http://www.example.com/pub/photos/jqpublic.gif"),
);
```
