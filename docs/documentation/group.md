---
title: Group
hide_title: true
sidebar_position: 5
---

# `Group`

- This class is for grouping properties.

- The RFC has this to say about grouping properties:

  ```
  The group construct is used to group related properties together.  The
  group name is a syntactic convention used to indicate that all property names
  prefaced with the same group name SHOULD be grouped together when displayed by
  an application. It has no other significance.

  ```

- The `Group` class should be called with two arguments. The first an array of
  one or more properties that you want grouped, the second a string containing
  the group name.

- The items in the first argument array must all be instances of the
  [properties](/documentation/properties/intro) provided by **vcard4**.

## API

- `Group` is provided as a named export from the main **vcard4** module.

  ```js title=ESM
  import { Group } from "vcard4";
  ```

  ```js title=commonjs
  const { Group } = require("vcard4");
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
  ParameterValueType,
  Group,
} from "vcard4";

const tel = new TelProperty(
  [new TypeParameter("TelProperty", new ParameterValueType("fax"))],
  new URIType("tel:+12345678910"),
);

const email = new EmailProperty(
  [new PrefParameter(new IntegerType(1))],
  new TextType("mister.person@thecompany.com"),
);

const title = new TitleProperty([], new TextType("The Boss"));

const grp = new Group([tel, email, title], "job");
```

- The instance object has the following methods:

  1. `repr`

  This method returns a string representing how the group will finally appear
  in the vCard.

  :::note
  '>' in the examples below is just the terminal prompt.
  :::

  ```js
  > grp.repr();
  "job.TEL;TYPE=fax:tel:+12345678910\r\n" +
    "job.EMAIL;PREF=1:mister.person@thecompany.com\r\n" +
    "job.TITLE:The Boss";
  ```

  2. `reprXML`

  This method returns a string representing how the group will finally appear
  in the XML vCard.

  ```js
  > grp.reprXML();
  '<group name="job"><tel><parameters><type><text>fax</text></type></parameters><uri>tel:+12345678910</uri></tel><email><parameters><pref><integer>1</integer></pref></parameters><text>mister.person@thecompany.com</text></email><title><text>The Boss</text></title></group>'
  ```

  3. `reprJSON`

  This method returns an array in the same shape as how the group will finally
  appear in the jCard.

  ```js
  > grp.reprJSON();
  [
    [ 'tel', { type: 'fax', group: 'job' }, 'uri', 'tel:+12345678910' ],
    [
      'email',
      { pref: '1', group: 'job' },
      'text',
      'mister.person@thecompany.com'
    ],
    [ 'title', { group: 'job' }, 'text', 'The Boss' ]
  ]
  ```
