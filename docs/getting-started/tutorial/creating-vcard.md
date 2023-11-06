---
title: Creating a vCard
sidebar_position: 2
---

- The following is a vCard containing information of the vCard specification
  author, **Simon Perreault**.

  ```
  BEGIN:VCARD
  VERSION:4.0
  FN:Simon Perreault
  N:Perreault;Simon;;;ing. jr,M.Sc.
  BDAY:--0203
  ANNIVERSARY:20090808T1430-0500
  GENDER:M
  LANG;PREF=1:fr
  LANG;PREF=2:en
  ORG;TYPE=work:Viagenie
  ADR;TYPE=work:;Suite D2-630;2875 Laurier;Quebec;QC;G1V 2M2;Canada
  TEL;VALUE=uri;TYPE="work,voice";PREF=1:tel:+1-418-656-9254;ext=102
  TEL;VALUE=uri;TYPE="work,cell,voice,video,text":tel:+1-418-262-6501
  EMAIL;TYPE=work:simon.perreault@viagenie.ca
  GEO;TYPE=work:geo:46.772673,-71.282945
  KEY;TYPE=work:http://www.viagenie.ca/simon.perreault/simon.asc
  TZ:-0500
  URL;TYPE=home:http://nomis80.org
  END:VCARD
  ```

- In this tutorial, we will recreate Simon's vCard using **vcard4**.

### Short overview of vCards

- A vCard is divided into content lines each containing a **property**, its
  **parameters**, if it has any, and finally, its **value**. An example of a
  content line from Simon's vCard would be:

  ```
  GEO;TYPE=work:geo:46.772673,-71.282945
  ```

- From the content line highlighted above, the _property_ is `GEO`, the
  _parameter_ (it only has one), is `TYPE=work` and the _value_ is
  `geo:46.772673,-71.282945`.

### Creating a single content line

- Let us first create that single content line using _vcard4_.

- First off, we import the classes needed from `vcard4`.

  ```js title=ESM
  import {
    GeoProperty,
    TypeParameter,
    URIType,
    ParameterValueType,
  } from "vcard4";
  ```

  ```js title=commonjs
  const {
    GeoProperty,
    TypeParameter,
    URIType,
    ParameterValueType,
  } = require("vcard4");
  ```

  :::tip
  As you have probably already noticed, the naming of the classes is quite
  intuitive: just add 'property', 'parameter' or 'type' to the name depending on
  whether it's a property, parameter or value type, convert it to PascalCase, et
  voilà!
  :::

- Then let's work our way up, by creating the value first.

  ```js
  const geoValue = new URIType("geo:46.772673,-71.282945");
  ```

- Then the parameter.

  ```js
  const typeParameterValue = new ParameterValueType("work");

  const geoTypeParameter = new TypeParameter(
    "geoparameter",
    typeParameterValue,
  );
  ```

- Finally, the property.

  ```js
  const geo = new GeoProperty([geoTypeParameter], geoValue);
  ```

- And that's it, we have created our first content line!

  ```js
  import {
    GeoProperty,
    TypeParameter,
    URIType,
    ParameterValueType,
  } from "vcard4";

  //or if you're using commonjs
  //const { GeoProperty, TypeParameter, URIType, ParameterValueType } = require('vcard4');

  const geoValue = new URIType("geo:46.772673,-71.282945");

  const typeParameterValue = new ParameterValueType("work");

  const geoTypeParameter = new TypeParameter(
    "geoparameter",
    typeParameterValue,
  );

  const geo = new GeoProperty([geoTypeParameter], geoValue);
  ```

- If we want to see how it looks like, i.e. it's representation on a vCard, we
  may call the `repr` method. It returns a string, which we can log to the
  console in order to see.

  ```js
  console.log(geo.repr());

  //GEO;TYPE=work:geo:46.772673,-71.282945
  ```

### Creating the rest of Simon's vCard

- The rest of the properties are created in much the same way as we did the
  `GEO` property above.

  :::info
  **vcard4** treats `BEGIN`, `VERSION` and `END` properties as special. We do
  not create them ourselves; the library will do it for us.
  :::

- After creating all the properties, we shall assemble them into a complete
  vCard using the `VCARD` class, as we'll see below.

  ```js
  import {
    TextType,
    TextListType,
    DateTimeType,
    IntegerType,
    LanguageTagType,
    URIType,
    SexType,
    SpecialValueType,
    ParameterValueType,
    ValueParameter,
    PrefParameter,
    TypeParameter,
    FNProperty,
    NProperty,
    BdayProperty,
    AnniversaryProperty,
    GenderProperty,
    AdrProperty,
    TelProperty,
    EmailProperty,
    LangProperty,
    TzProperty,
    GeoProperty,
    OrgProperty,
    URLProperty,
    KeyProperty,
    VCARD,
  } from "vcard4";

  //FN property
  const fn = new FNProperty([], new TextType("Simon Perreault"));

  //N property
  const nArr = new Array(5);
  nArr[0] = new TextType("Perreault");
  nArr[1] = new TextType("Simon");
  nArr[4] = new TextListType([new TextType("ing. jr"), new TextType("M.Sc.")]);
  const n = new NProperty([], new SpecialValueType("nproperty", nArr));

  // BDAY property
  const bday = new BdayProperty(
    [],
    new DateTimeType("dateandortime", "--0203"),
  );

  // ANNIVERSARY property
  const anniversary = new AnniversaryProperty(
    [],
    new DateTimeType("dateandortime", "20090808T1430-0500"),
  );

  // GENDER property
  const gender = new GenderProperty([], new SexType("M"));

  // LANG properties
  const lang1 = new LangProperty(
    [new PrefParameter(new IntegerType(1))],
    new LanguageTagType("fr"),
  );
  const lang2 = new LangProperty(
    [new PrefParameter(new IntegerType(2))],
    new LanguageTagType("en"),
  );

  // ORG property
  const org = new OrgProperty(
    [new TypeParameter("orgproperty", new ParameterValueType("work"))],
    new SpecialValueType("orgproperty", [new TextType("Viagenie")]),
  );

  // ADR property
  const aArr = new Array(7);
  aArr[1] = new TextType("Suite D2-630");
  aArr[2] = new TextType("2875 Laurier");
  aArr[3] = new TextType("Quebec");
  aArr[4] = new TextType("QC");
  aArr[5] = new TextType("G1V 2M2");
  aArr[6] = new TextType("Canada");
  const adr = new AdrProperty(
    [new TypeParameter("adrproperty", new ParameterValueType("work"))],
    new SpecialValueType("adrproperty", aArr),
  );

  // TEL properties
  const tel1 = new TelProperty(
    [
      new ValueParameter(new URIType("tel:+1-418-656-9254;ext=102")),
      new TypeParameter("telproperty", [
        new ParameterValueType("work"),
        new ParameterValueType("voice"),
      ]),
      new PrefParameter(new IntegerType(1)),
    ],
    new URIType("tel:+1-418-656-9254;ext=102"),
  );

  const tel2 = new TelProperty(
    [
      new ValueParameter(new URIType("tel:+1-418-262-6501")),
      new TypeParameter("telproperty", [
        new ParameterValueType("work"),
        new ParameterValueType("cell"),
        new ParameterValueType("voice"),
        new ParameterValueType("video"),
        new ParameterValueType("text"),
      ]),
    ],
    new URIType("tel:+1-418-262-6501"),
  );

  // EMAIL property
  const email = new EmailProperty(
    [new TypeParameter("emailproperty", new ParameterValueType("work"))],
    new TextType("simon.perreault@viagenie.ca"),
  );

  // GEO property
  const geo = new GeoProperty(
    [new TypeParameter("geoproperty", new ParameterValueType("work"))],
    new URIType("geo:46.772673,-71.282945"),
  );

  // KEY property
  const key = new KeyProperty(
    [new TypeParameter("keyproperty", new ParameterValueType("work"))],
    new URIType("http://www.viagenie.ca/simon.perreault/simon.asc"),
  );

  // TZ property
  const tz = new TzProperty([], new DateTimeType("utcoffset", "-0500"));

  // URL property
  const url = new URLProperty(
    [new TypeParameter("urlproperty", new ParameterValueType("home"))],
    new URIType("http://nomis80.org"),
  );

  // assembling all the properties into a vCard
  const vc = new VCARD([
    fn,
    n,
    bday,
    anniversary,
    gender,
    lang1,
    lang2,
    org,
    adr,
    tel1,
    tel2,
    email,
    geo,
    key,
    tz,
    url,
  ]);
  ```

- Calling the `repr` method on the created `VCARD` object will return Simon's
  vCard as a string, which you can then write to a file, or whatever.

  ```js
  vc.repr();
  ```

  :::tip
  If you want to write it to a file, you may use **node**'s `fs` api.

  ```js
  import fs from "fs";

  await fs.promises.writeFile("simon_perreault.vcf", vc.repr());
  ```

  :::
