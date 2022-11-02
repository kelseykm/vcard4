---
title: parse
hide_title: true
sidebar_position: 7
---

# `parse`

- This function is for parsing version 4.0 vCards.

## API

- `parse` is provided as a named export from the main **vcard4** module.

  ```js title=ESM
  import { parse } from "vcard4";
  ```

  ```js title=commonjs
  const { parse } = require("vcard4");
  ```

## Usage

- As already mentioned `parse` is a function, and it's for parsing vCards.

- It returns either:

  1. an object containing the parsed vCard, or
  2. an array containing the objects in (i.) above, if the vCard contained
     multiple contacts (vCards) within.

- `parse` should be called with a single argument of type string, that is a
  properly formatted version 4.0 vCard.

  :::note
  The following example assumes the vCard is on disk, and `fs` from node's API
  is used to read it.
  :::

  ```js
  import fs from "fs";

  const contact = await fs.promises
    .readFile("simon_perreault.vcf")
    .then((contact) => contact.toString());

  const parsedCard = parse(contact);
  ```

  ```js title='Object returned by parse'
  {
    parsedVcard: [
      { group: null, property: "FN", parameters: {}, value: "Simon Perreault" },
      {
        group: null,
        property: "N",
        parameters: {},
        value: {
          familyNames: "Perreault",
          givenNames: "Simon",
          additionalNames: "",
          honorificPrefixes: "",
          honorificSuffixes: [Array]
        }
      },
      { group: null, property: "BDAY", parameters: {}, value: "--0203" },
      {
        group: null,
        property: "ANNIVERSARY",
        parameters: {},
        value: "20090808T1430-0500"
      },
      { group: null, property: "GENDER", parameters: {}, value: { sex: "M", gender: "" } },
      { group: null, property: "LANG", parameters: { PREF: "1" }, value: "fr" },
      { group: null, property: "LANG", parameters: { PREF: "2" }, value: "en" },
      { group: null, property: "ORG", parameters: { TYPE: "work" }, value: "Viagenie" },
      {
        group: null,
        property: "ADR",
        parameters: { TYPE: "work" },
        value: {
          postOfficeBox: "",
          extendedAddress: "Suite D2-630",
          streetAddress: "2875 Laurier",
          locality: "Quebec",
          region: "QC",
          postalCode: "G1V 2M2",
          countryName: "Canada"
        }
      },
      {
        group: null,
        property: "TEL",
        parameters: { VALUE: "uri", TYPE: [Array], PREF: "1" },
        value: "tel:+1-418-656-9254;ext=102"
      },
      {
        group: null,
        property: "TEL",
        parameters: { VALUE: "uri", TYPE: [Array] },
        value: "tel:+1-418-262-6501"
      },
      {
        group: null,
        property: "EMAIL",
        parameters: { TYPE: "work" },
        value: "simon.perreault@viagenie.ca"
      },
      {
        group: null,
        property: "GEO",
        parameters: { TYPE: "work" },
        value: "geo:46.772673,-71.282945"
      },
      {
        group: null,
        property: "KEY",
        parameters: { TYPE: "work" },
        value: "http://www.viagenie.ca/simon.perreault/simon.asc"
      },
      { group: null, property: "TZ", parameters: {}, value: "-0500" },
      {
        group: null,
        property: "URL",
        parameters: { TYPE: "home" },
        value: "http://nomis80.org"
      }
    ],
    properties: [Getter],
    propertiesWithoutParameters: [Getter],
    propertiesWithParameters: [Getter],
    getProperty: [Function: getProperty],
    groups: [Getter],
    getGroup: [Function: getGroup],
    repeatingProperties: [Getter]
  }
  ```

## Properties and getters on returned object

1. `parsedVcard`

- This is an array containing the parsed content lines of the vCard.

- The parsed content lines in the array are objects with the following keys:

  ```js
  [
    ...,
    {
      group: null,
      property: "URL",
      parameters: { TYPE: "home" },
      value: "http://nomis80.org"
    },
    ...
  ]
  ```

  1. `group`

  Its value is either `null` or a string with the name the group of the property.

  ```js
  {
    group: null,
    ...
  }
  ```

  ```js
  {
    group: "BOOK-CLUB",
    ...
  }
  ```

  2. `property`

  A string containing the property name.

  ```js
  {
    ...,
    property: "URL",
    ...
  }
  ```

  3. `parameters`

  An object whose keys are the parameters of the property and the values are
  the parameter values. The values may be strings or arrays of strings if the
  particular parameter had multiple values.

  ```js
  {
    ...,
    parameters: { TYPE: "home" },
    ...
  }
  ```

  ```js
  {
    ...,
    parameters: { TYPE: ["home", "fax"] },
    ...
  }
  ```

  4. `value`

  This may take three forms:

  a. For most properties, a string containing the value of the property.

  ```js
  {
    ...,
    value: "http://nomis80.org"
  }
  ```

  b. For properties with multiple values, an array of strings.

  ```js
  {
    ...,
    value: [ 'Example.com Inc.', 'Second Example, Inc.' ]
  }
  ```

  c. For properties whose values are structured, such as `N`, `ADR` and
  `GENDER`, the value is an object whose keys are the names of each
  of the structured components, and the values are strings or string
  arrays.

  ```js title='value for N property'
  {
    ...,
    value: {
      familyNames: "Perreault",
      givenNames: "Simon",
      additionalNames: "",
      honorificPrefixes: "",
      honorificSuffixes: ["ing.", "jr."]
    }
  }
  ```

  ```js title='value for ADR property'
  {
    ...,
    value: {
      postOfficeBox: "",
      extendedAddress: "Suite D2-630",
      streetAddress: "2875 Laurier",
      locality: "Quebec",
      region: "QC",
      postalCode: "G1V 2M2",
      countryName: "Canada"
    }
  }
  ```

  ```js title='value for GENDER property'
  {
    ...,
    value: { sex: "M", gender: "" }
  }
  ```

2. `properties`

- This getter returns a string array with the names of all properties in the
  parsed vCard.

:::note
The names are not repeated if a property is repeated
:::

```js
> const parsedCard = parse(contact);
> parsedCard.properties;
[
  'FN',     'N',
  'BDAY',   'ANNIVERSARY',
  'GENDER', 'LANG',
  'ORG',    'ADR',
  'TEL',    'EMAIL',
  'GEO',    'KEY',
  'TZ',     'URL'
]
```

3. `propertiesWithParameters`

- This getter returns a string array with the names of all properties in the
  `parsedVcard` that have parameters.

```js
> const parsedCard = parse(contact);
> parsedCard.propertiesWithParameters;
[
  'LANG',  'ORG',
  'ADR',   'TEL',
  'EMAIL', 'GEO',
  'KEY',   'URL'
]
```

4. `propertiesWithoutParameters`

- This getter returns a string array with the names of all properties in the
  `parsedVcard` that do not have parameters.

```js
> const parsedCard = parse(contact);
> parsedCard.propertiesWithoutParameters;
[ 'FN', 'N', 'BDAY', 'ANNIVERSARY', 'GENDER', 'TZ' ]
```

5. `groups`

- This getter returns a string array with the names of all property groups in
  the `parsedVcard`. If there are none, it returns an empty array.

```js
> const parsedCard = parse(contact);
> parsedCard.groups;
[ 'STORY' ]
```

6. `repeatingProperties`

- This getter returns an object whose keys are the names of the properties and
  the values are the number of times they appear in the `parsedVcard`.

- If there are no repeating properties, an empty object is returned

```js
> const parsedCard = parse(contact);
> parsedCard.repeatingProperties;
{ LANG: 2, TEL: 2 }
```

## Methods in the returned object

1. `getProperty`

- This method should be called with a single argument of type string that is
  the name of a property in the vCard.

- It returns an array containing parsed objects of that property (may be one or
  more, depending on how many times the property appears in the vCard).

- If the property is not in the vCard, an empty array is returned.

```js
> const parsedCard = parse(contact);
> parsedCard.getProperty('EMAIL');
[
  {
    group: 'work',
    property: 'EMAIL',
    parameters: { TYPE: 'work' },
    value: 'simon.perreault@viagenie.ca'
  }
]
```

2. `getGroup`

- This method should be called with a single argument of type string that is
  the name of a property group in the vCard.

- It returns an array of parsed objects of all the properties in the group.

- If there are no properties with the group, an empty array is returned.

```js
> const parsedCard = parse(contact);
> parsedCard.getGroup('STORY');
[
  {
    group: 'STORY',
    property: 'TITLE',
    parameters: {},
    value: 'Imaginary test person'
  },
  {
    group: 'STORY',
    property: 'NOTE',
    parameters: {},
    value: 'John Doe has a long and varied history, being documented on more police files than anyone else. Reports of his death are alas numerous.'
  }
]
```
