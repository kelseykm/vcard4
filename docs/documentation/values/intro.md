---
sidebar_position: 1
title: Introduction
hide_title: true
---

# Property Value Data Types

- According to the RFC, the standard value data types are:

  1. text
  2. text-list
  3. date
  4. date-list
  5. time
  6. time-list
  7. date-time
  8. date-time-list
  9. date-and-or-time
  10. date-and-or-time-list
  11. timestamp
  12. timestamp-list
  13. boolean
  14. integer
  15. integer-list
  16. float
  17. float-list
  18. URI
  19. utc-offset
  20. Language-Tag
  21. iana-valuespec

- In the library, these are represented by the following classes:

  1. [`TextType`](texttype-and-textlisttype)
  2. [`TextListType`](texttype-and-textlisttype)
  3. [`DateTimeType`](datetimetype)
  4. [`DateTimeListType`](datetimelisttype)
  5. [`BooleanType`](booleantype)
  6. [`IntegerType`](integertype-and-integerlisttype)
  7. [`IntegerListType`](integertype-and-integerlisttype)
  8. [`FloatType`](floattype-and-floatlisttype)
  9. [`FloatListType`](floattype-and-floatlisttype)
  10. [` LanguageTagType`](languagetagtype)
  11. [` URIType`](uritype)
  12. [` SexType`](sextype)
  13. [` SpecialValueType`](specialvaluetype)
  14. [`ParameterValueType`](parametervaluetype)

- The instance object is frozen and therefore its properties and methods cannot
  be modified after construction, neither can new ones be added.

  :::note
  The actual value type depends on property name and VALUE parameter. For
  example, the `FN` property only accepts `text` values.
  :::

## API

- All the classes listed above are provided as named exports from the main
  **vcard4** module. For example, to import the `BooleanType` class:

  ```js title=ESM
  import { BooleanType } from "vcard4";
  ```

  ```js title=commonjs
  const { BooleanType } = require("vcard4");
  ```

## Methods

- The instance objects have the following methods:

  1. `repr`

  This method returns a string which is the representation of how the value
  type will finally appear in the vCard.

  :::note
  '>' in the examples below is just the terminal prompt.
  :::

  ```js
  > const textValue = new TextType('Hello, world');

  > textValue.repr();
  'Hello\\, world'
  ```

  2. `reprXML`

  This method returns a string which is the representation of how the value
  type will finally appear in the XML vCard.

  ```js
  > const textValue = new TextType('Hello, world');

  > textValue.reprXML();
  '<text>Hello, world</text>'
  ```

  3. `reprJSON`

  This method returns an array showing how the value type will finally appear
  in the jCard.

  ```js
  > const textValue = new TextType('Hello, world');

  > textValue.reprJSON();
  [ 'text', 'Hello, world' ]
  ```
