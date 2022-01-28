---
title: VCARD
hide_title: true
sidebar_position: 5
---

# ```VCARD```

* This class is for assembling all the properties into one vCard object

* ```VCARD``` should be called with a single argument that is an array whose items are the properties you want on the vCard

  :::note
  __vcard4__ treats `BEGIN`, `VERSION` and `END` properties as special. You do not construct them manually as you do the other properties, it adds them to the constructed vCard itself.
  :::

* There __must be at least one__ instance of [`FNProperty`](/documentation/properties/fnproperty) supplied

* There __must not be more than one__ instance of the following classes supplied: [`AnniversaryProperty`](/documentation/properties/anniversaryproperty), [`BdayProperty`](/documentation/properties/bdayproperty), [`GenderProperty`](/documentation/properties/genderproperty), [`KindProperty`](/documentation/properties/kindproperty), [`NProperty`](/documentation/properties/nproperty), [`ProdidProperty`](/documentation/properties/prodidproperty), [`RevProperty`](/documentation/properties/revproperty) and [`UIDProperty`](/documentation/properties/uidproperty)

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added

## API

* `VCARD` is provided as a named export from the main __vcard4__ module.

  ```js title=ESM
  import { VCARD } from 'vcard4';
  ```

  ```js title=commonjs
  const { VCARD } = require('vcard4');
  ```
## Methods

* The instance object has the following methods:

  1. `repr`

    This method returns the vCard as a string.

    :::note
    '>' in the examples below is just the terminal prompt.
    :::

    ```js
    > const vc = new VCARD([
    >   new FNProperty(
    >     [],
    >     new TextType('James Bond')
    >   )
    > ]);

    > vc.repr();
    'BEGIN:VCARD\r\nVERSION:4.0\r\nFN:James Bond\r\nEND:VCARD\r\n'
    ```

  2. `reprXML`

    This method returns the XML vCard as a string, in the format defined in RFC 6351. 

    ```js
    > const vc = new VCARD([
    >   new FNProperty(
    >     [],
    >     new TextType('James Bond')
    >   )
    > ]);

    > vc.reprXML();
    '<?xml version="1.0" encoding="UTF-8"?><vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0"><vcard><fn><text>James Bond</text></fn></vcard></vcards>'

    ```

  3. `reprJSON` 

    This method returns the jCard in the shape defined in RFC 7095.

    ```js
    > const vc = new VCARD([
    >   new FNProperty(
    >     [],
    >     new TextType('James Bond')
    >   )
    > ]);

    > vc.reprJSON();
    [ 'vcard', [ [ 'fn', {}, 'text', 'James Bond' ] ] ]
    ```

