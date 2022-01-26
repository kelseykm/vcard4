---
sidebar_position: 1
title: Introduction
---
* __vcard4__ is a javascript library for generating and parsing version 4.0 vCards.

* It can also be used to generate XML vCards and jCards. 

* __vcard4__ fully implements RFC 6350 (vcard), RFC 6351 (XML vCard), RFC 7095 (jCard), and RFC 6350 extensions including RFC 6474, RFC 8605, RFC 6715, RFC 6868, RFC 6473 and RFC 7852.

* __vcard4__ may be used in node or in the browser, and it supports ESM and UMD.

:::tip
Most of the examples in the documentation will be in ESM, but you may use commonjs or AMD equivalents and it would still work (as mentioned above, __vcard4__ supports UMD).
:::

:::info
Minified bundles of both ESM and UMD are provided in the `dist/` folder.
:::

* __vcard4__ is fully tree shakable. Only what you import will end up in your final bundle.

  :::caution
  Tree shaking only works if you use ESM
  :::

* TypeScript type declarations are provided for all the public parts of __vcard4__'s API.

### Versioning

* __vcard4__ uses _semver_ for versioning releases.
