---
title: URIType
sidebar_position: 3
hide_title: true
---

# `URIType`

- This class represents the "URI" data type

- `URIType` should be called with a single argument of type string, that is
  formatted as a URI as defined in Section 3 of RFC 3986

```js
new URIType("http://www.example.com/my/picture.jpg");

new URIType("ldap://ldap.example.com/cn=babs%20jensen");
```
