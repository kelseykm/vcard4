---
title: Creating a vCard
sidebar_position: 2
---

* The following is a vCard containing information of the vCard specification author, __Simon Perreault__.

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
* In this tutorial, we will recreate Simon's vCard using __vcard4__.

### Short overview of vCards

* A vCard is divided into content lines each containing a __property__, its __parameters__, if it has any, and finally, its __value__. An example of a content line from Simon's vCard would be:

    ```
    GEO;TYPE=work:geo:46.772673,-71.282945
    ```

* From the content line highlighted above, the _property_ is ```GEO```, the _parameter_ (it only has one), is ```TYPE=work``` and the _value_ is ```geo:46.772673,-71.282945```.

### Creating a single content line

* Let us first create that single content line using _vcard4_.

* First off, we import the classes needed from ```vcard4```.

  ```js title=ESM
  import { GeoProperty, TypeParameter, URIType, TextType } from 'vcard4';
  ```

  ```js title=commonjs
  const { GeoProperty, TypeParameter, URIType, TextType } = require('vcard4');
  ```

  :::tip
  As you have probably already noticed, the naming of the classes is quite intuitive: just add 'property', 'parameter' or 'value' to the name depending on whether it's a property, parameter or value type, convert it to PascalCase, et voilà!
  :::

* Then let's work our way up, by creating the value first.

  ```js
  const geoValue = new URIType('geo:46.772673,-71.282945');
  ```

* Then the parameter.

  ```js
  const typeParameterValue = new TextType('work');

  const geoTypeParameter = new TypeParameter(typeParameterValue, 'geoparameter');
  ```

* Finally, the property.

  ```js
  const geo = new GeoProperty([ geoTypeParameter ], geoValue);
  ```

* And that's it, we have created our first content line!

  ```js
  import { GeoProperty, TypeParameter, URIType, TextType } from 'vcard4';

  //or if you're using commonjs
  //const { GeoProperty, TypeParameter, URIType, TextType } = require('vcard4');

  const geoValue = new URIType('geo:46.772673,-71.282945');

  const typeParameterValue = new TextType('work');

  const geoTypeParameter = new TypeParameter(typeParameterValue, 'geoparameter');

  const geo = new GeoProperty([ geoTypeParameter ], geoValue);
  ```

* If we want to see how it looks like, i.e. it's representation on a vCard, we may call the ```repr``` method. It returns a string, which we can log to the console in order to see.

  ```js
  console.log(geo.repr());

  //GEO;TYPE=work:geo:46.772673,-71.282945
  ```

### Creating the rest of Simon's vCard

* The rest of the properties are created in much the same way as we did the ```GEO``` property above.

  :::info
  __vcard4__ treats ```BEGIN```, ```VERSION``` and ```END``` properties as special. We do not create them ourselves; the library will do it for us.
  :::

* After creating all the properties, we shall assemble them into a complete vCard using the ```VCARD``` class, as we'll see below.

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
  const n = new NProperty([], new SpecialValueType(nArr, "nproperty"));

  // BDAY property
  const bday = new BdayProperty([], new DateTimeType("--0203", "dateandortime"));

  // ANNIVERSARY property
  const anniversary = new AnniversaryProperty(
    [],
    new DateTimeType("20090808T1430-0500", "dateandortime")
  );

  // GENDER property
  const gender = new GenderProperty([], new SexType("M"));

  // LANG properties
  const lang1 = new LangProperty(
    [new PrefParameter(new IntegerType(1))],
    new LanguageTagType("fr")
  );
  const lang2 = new LangProperty(
    [new PrefParameter(new IntegerType(2))],
    new LanguageTagType("en")
  );

  // ORG property
  const org = new OrgProperty(
    [new TypeParameter(new TextType("work"), "orgproperty")],
    new SpecialValueType([new TextType("Viagenie")], "orgproperty")
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
    [new TypeParameter(new TextType("work"), "adrproperty")],
    new SpecialValueType(aArr, "adrproperty")
  );

  // TEL properties
  const tel1 = new TelProperty(
    [
      new ValueParameter(new URIType("tel:+1-418-656-9254;ext=102")),
      new TypeParameter(
        new TextListType([new TextType("work"), new TextType("voice")]),
        "telproperty"
      ),
      new PrefParameter(new IntegerType(1)),
    ],
    new URIType("tel:+1-418-656-9254;ext=102")
  );

  const tel2 = new TelProperty(
    [
      new ValueParameter(new URIType("tel:+1-418-262-6501")),
      new TypeParameter(
        new TextListType([
          new TextType("work"),
          new TextType("cell"),
          new TextType("voice"),
          new TextType("video"),
          new TextType("text"),
        ]),
        "telproperty"
      ),
    ],
    new URIType("tel:+1-418-262-6501")
  );

  // EMAIL property
  const email = new EmailProperty(
    [new TypeParameter(new TextType("work"), "emailproperty")],
    new TextType("simon.perreault@viagenie.ca")
  );

  // GEO property
  const geo = new GeoProperty(
    [new TypeParameter(new TextType("work"), "geoproperty")],
    new URIType("geo:46.772673,-71.282945")
  );

  // KEY property
  const key = new KeyProperty(
    [new TypeParameter(new TextType("work"), "keyproperty")],
    new URIType("http://www.viagenie.ca/simon.perreault/simon.asc")
  );

  // TZ property
  const tz = new TzProperty([], new DateTimeType("-0500", "utcoffset"));

  // URL property
  const url = new URLProperty(
    [new TypeParameter(new TextType("home"), "urlproperty")],
    new URIType("http://nomis80.org")
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

* Calling the ```repr``` method on the created ```VCARD``` object will return Simon's vCard as a string, which you can then write to a file, or whatever.

  ```js
  vc.repr();
  ```
  :::tip
    If you want to write it to a file, you may use __node__'s ```fs``` api.

    ```js
    import fs from 'fs';

    await fs.promises.writeFile("simon_perreault.vcf", vc.repr());
    ```
  :::
