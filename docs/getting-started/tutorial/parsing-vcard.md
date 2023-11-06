---
title: Parsing a vCard
sidebar_position: 5
---

- In this part of the tutorial, we will parse Simon's vCard, which we created
  in the [first part of the
  tutorial](/getting-started/tutorial/creating-vcard).

- Let's import the `parse` function, which we will use.

  ```js title=ESM
  import { parse } from "vcard4";
  ```

  ```js title=commonjs
  const { parse } = require("vcard4");
  ```

- Assuming you wrote the vCard to disk, let's import `fs` (part of **node**'s
  api) and read it.

  ```js
  import fs from "fs";

  const contact = await fs.promises
    .readFile("simon_perreault.vcf")
    .then((contact) => contact.toString());
  ```

- We have converted the `contact` buffer into a string because `parse` only
  accepts strings.

- To parse the `contact`, we just pass it to `parse`!

  ```js
  const parsedContact = parse(contact);
  ```

- `parse` returns an object. Logging `parsedContact` to the console reveals it.

```js
> console.log(parsedContact);

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
        honorificSuffixes: ["ing. jr", "M.Sc."],
      },
    },
    { group: null, property: "BDAY", parameters: {}, value: "--0203" },
    {
      group: null,
      property: "ANNIVERSARY",
      parameters: {},
      value: "20090808T1430-0500",
    },
    {
      group: null,
      property: "GENDER",
      parameters: {},
      value: { sex: "M", gender: "" },
    },
    { group: null, property: "LANG", parameters: { PREF: "1" }, value: "fr" },
    { group: null, property: "LANG", parameters: { PREF: "2" }, value: "en" },
    {
      group: null,
      property: "ORG",
      parameters: { TYPE: "work" },
      value: "Viagenie",
    },
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
        countryName: "Canada",
      },
    },
    {
      group: null,
      property: "TEL",
      parameters: { VALUE: "uri", TYPE: ["work", "voice"], PREF: "1" },
      value: "tel:+1-418-656-9254;ext=102",
    },
    {
      group: null,
      property: "TEL",
      parameters: {
        VALUE: "uri",
        TYPE: ["work", "cell", "voice", "video", "text"],
      },
      value: "tel:+1-418-262-6501",
    },
    {
      group: null,
      property: "EMAIL",
      parameters: { TYPE: "work" },
      value: "simon.perreault@viagenie.ca",
    },
    {
      group: null,
      property: "GEO",
      parameters: { TYPE: "work" },
      value: "geo:46.772673,-71.282945",
    },
    {
      group: null,
      property: "KEY",
      parameters: { TYPE: "work" },
      value: "http://www.viagenie.ca/simon.perreault/simon.asc",
    },
    { group: null, property: "TZ", parameters: {}, value: "-0500" },
    {
      group: null,
      property: "URL",
      parameters: { TYPE: "home" },
      value: "http://nomis80.org",
    },
  ],
  properties: [Getter],
  propertiesWithoutParameters: [Getter],
  propertiesWithParameters: [Getter],
  getProperty: [Function: getProperty],
  groups: [Getter],
  getGroup: [Function: getGroup],
  repeatingProperties: [Getter],
}

```
