---
title: VCARD
hide_title: true
sidebar_position: 6
---

# `VCARD`

- This class is for assembling all the properties into one vCard object

- `VCARD` should be called with a single argument that is an array whose items
  are the [properties](/documentation/properties/intro) or
  [groups](/documentation/group) you want on the vCard

  :::note
  **vcard4** treats `BEGIN`, `VERSION` and `END` properties as special. You do
  not construct them manually as you do the other properties, it adds them to the
  constructed vCard itself.
  :::

- There **must be at least one** instance of
  [`FNProperty`](/documentation/properties/fnproperty) supplied

- There **must not be more than one** instance of the following classes
  supplied:
  [`AnniversaryProperty`](/documentation/properties/anniversaryproperty),
  [`BdayProperty`](/documentation/properties/bdayproperty),
  [`GenderProperty`](/documentation/properties/genderproperty),
  [`KindProperty`](/documentation/properties/kindproperty),
  [`NProperty`](/documentation/properties/nproperty),
  [`ProdidProperty`](/documentation/properties/prodidproperty),
  [`RevProperty`](/documentation/properties/revproperty) and
  [`UIDProperty`](/documentation/properties/uidproperty)

- The instance object is frozen and therefore its properties and methods cannot
  be modified after construction, neither can new ones be added

## API

- `VCARD` is provided as a named export from the main **vcard4** module.

  ```js title=ESM
  import { VCARD } from "vcard4";
  ```

  ```js title=commonjs
  const { VCARD } = require("vcard4");
  ```

## Methods

```js
import {
  TelProperty,
  EmailProperty,
  TitleProperty,
  PrefParameter,
  IntegerType,
  URIType,
  TypeParameter,
  TextType,
  Group,
  FNProperty,
  AdrProperty,
  SpecialValueType,
  ParameterValueType,
  NProperty,
  VCARD,
} from "vcard4";

const fn = new FNProperty([], new TextType("Mister Person"));

const nArr = new Array(5);
nArr[0] = new TextType("Person");
nArr[1] = new TextType("Mister");
const n = new NProperty([], new SpecialValueType("NProperty", nArr));

const telHome = new TelProperty(
  [new TypeParameter("TelProperty", new ParameterValueType("home"))],
  new URIType("tel:+9876543210"),
);

const addrArr = new Array(7);
addrArr[2] = new TextType("123 Main Street");
addrArr[3] = new TextType("Any Town");
addrArr[4] = new TextType("AAH");
addrArr[5] = new TextType("91921-1234");
addrArr[6] = new TextType("Nowayar");

const addr = new AdrProperty([], new SpecialValueType("AdrProperty", addrArr));

const tel = new TelProperty(
  [new TypeParameter("TelProperty", new ParameterValueType("fax"))],
  new URIType("tel:+12345678910"),
);

const email = new EmailProperty(
  [new PrefParameter(new IntegerType(1))],
  new TextType("mister.person@thecompany.com"),
);
const email2 = new EmailProperty(
  [],
  new TextType("mister.person@thecompany.org"),
);

const title = new TitleProperty([], new TextType("The Boss"));

const grp = new Group([tel, email, email2, title], "job");

const card = new VCARD([fn, n, telHome, addr, grp]);
```

- The instance object has the following methods:

  1. `repr`

  This method returns the vCard as a string.

  :::note
  '>' in the examples below is just the terminal prompt.
  :::

  ```js
  > card.repr();
  'BEGIN:VCARD\r\n' +
  'VERSION:4.0\r\n' +
  'FN:Mister Person\r\n' +
  'N:Person;Mister;;;\r\n' +
  'TEL;TYPE=home:tel:+9876543210\r\n' +
  'ADR:;;123 Main Street;Any Town;AAH;91921-1234;Nowayar\r\n' +
  'job.TEL;TYPE=fax:tel:+12345678910\r\n' +
  'job.EMAIL;PREF=1:mister.person@thecompany.com\r\n' +
  'job.EMAIL:mister.person@thecompany.org\r\n' +
  'job.TITLE:The Boss\r\n' +
  'END:VCARD\r\n'
  ```

  2. `reprXML`

  This method returns the XML vCard as a string, in the format defined in RFC 6351.

  ```js
  > card.reprXML();
  '<?xml version="1.0" encoding="UTF-8"?><vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0"><vcard><fn><text>Mister Person</text></fn><n><surname>Person</surname><given>Mister</given><additional/><prefix/><suffix/></n><tel><parameters><type><text>home</text></type></parameters><uri>tel:+9876543210</uri></tel><adr><pobox/><ext/><street>123 Main Street</street><locality>Any Town</locality><region>AAH</region><code>91921-1234</code><country>Nowayar</country></adr><group name="job"><tel><parameters><type><text>fax</text></type></parameters><uri>tel:+12345678910</uri></tel><email><parameters><pref><integer>1</integer></pref></parameters><text>mister.person@thecompany.com</text></email><email><text>mister.person@thecompany.org</text></email><title><text>The Boss</text></title></group></vcard></vcards>'
  ```

  3. `reprJSON`

  This method returns the jCard as a JavaScript object in the shape defined in
  RFC 7095.

  ```js
  > card.reprJSON();
  [
    "vcard",
    [
      ["fn", {}, "text", "Mister Person"],
      ["n", {}, "text", [Array]],
      ["tel", [Object], "uri", "tel:+9876543210"],
      ["adr", {}, "text", [Array]],
      ["tel", [Object], "uri", "tel:+12345678910"],
      ["email", [Object], "text", "mister.person@thecompany.com"],
      ["email", [Object], "text", "mister.person@thecompany.org"],
      ["title", [Object], "text", "The Boss"],
    ],
  ]
  ```
