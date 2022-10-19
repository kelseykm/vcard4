---
sidebar_position: 1
title: Introduction
slug: /
---

- **vcard4** is a javascript library for generating and parsing version 4.0 vCards.

- It can also be used to generate XML vCards and jCards.

- **vcard4** fully implements RFC 6350 (vCard), RFC 6351 (XML vCard), RFC 7095 (jCard), and RFC 6350 extensions including RFC 6474, RFC 8605, RFC 6715, RFC 6868, RFC 6473 and RFC 7852.

- **vcard4** may be used in node or in the browser, and it supports ESM and UMD.

:::info
Minified bundles of both ESM and UMD are provided in the `dist/` folder.
:::

- **vcard4** is fully tree shakable. Only what you import will end up in your final bundle.

  :::caution
  Tree shaking only works if you use ESM
  :::

- TypeScript type declarations are provided for all the public parts of **vcard4**'s API.

### Versioning

- **vcard4** uses _semver_ for versioning releases.
