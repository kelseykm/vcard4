---
title: Introduction
sidebar_position: 1
hide_title: true
---

# Property Parameters

- These "property parameters" contain meta-information about the property or
  the property value

- According to the RFC, the property parameters include:

  1. LANGUAGE
  2. VALUE
  3. PREF
  4. ALTID
  5. PID
  6. TYPE
  7. MEDIATYPE
  8. CALSCALE
  9. SORT-AS
  10. GEO
  11. TZ
  12. LABEL
  13. CC
  14. INDEX
  15. LEVEL

- In the library, these are represented by:

  1. [`LanguageParameter`](languageparameter)
  2. [`ValueParameter`](ValueParameter)
  3. [`PrefParameter`](prefparameter)
  4. [`AltidParameter`](altidparameter)
  5. [`PIDParameter`](pidparameter)
  6. [`TypeParameter`](typeparameter)
  7. [`MediatypeParameter`](mediatypeparameter)
  8. [`CalscaleParameter`](calscaleparameter)
  9. [`SortAsParameter`](sortasparameter)
  10. [`GeoParameter`](geoparameter)
  11. [`TzParameter`](tzparameter)
  12. [`AnyParameter`](anyparameter)
  13. [`LabelParameter`](labelparameter)
  14. [`CCParameter`](ccparameter)
  15. [`IndexParameter`](indexparameter)
  16. [`LevelParameter`](levelparameter)

- The instance object is frozen and therefore its properties and methods cannot
  be modified after construction, neither can new ones be added

  :::note
  The actual parameter used depends on property. Each property accepts only
  certain parameters.
  :::

## API

- All the classes listed above are provided as named exports from the main
  **vcard4** module. For example, to import the `LanguageParameter` class:

  ```js title=ESM
  import { LanguageParameter } from "vcard4";
  ```

  ```js title=commonjs
  const { LanguageParameter } = require("vcard4");
  ```

## Methods

- The instance objects have the following methods:

  1. `repr`

  This method returns a string which is the representation of how the parameter
  will finally appear in the vCard.

  :::note
  '>' in the examples below is just the terminal prompt.
  :::

  ```js
  > const preference = new PrefParameter(new IntegerType(1));

  > preference.repr()
  'PREF=1'
  ```

  2. `reprXML`

  This method returns a string which is the representation of how the parameter
  will finally appear in the XML vCard.

  ```js
  > const preference = new PrefParameter(new IntegerType(1));

  > preference.reprXML()
  '<pref><integer>1</integer></pref>'
  ```

  3. `reprJSON`

  This method returns an Object showing how the parameter will finally appear
  in the jCard.

  ```js
  > const preference = new PrefParameter(new IntegerType(1));

  > preference.reprJSON()
  { pref: '1' }
  ```
