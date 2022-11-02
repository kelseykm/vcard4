---
sidebar_position: 2
title: TextType and TextListType
hide_title: true
---

# `TextType` and `TextListType`

- These classes represent the "text" and "text-list" data types respectively

- `TextType` should be called with a single argument of type string.

```js
const greeting = new TextType("Hello, world");
```

- `TextListType` should be called with a single argument that is an array of
  `TextType` instances

```js
const person1 = new TextType("Jane");
const person2 = new TextType("John");

const people = new TextListType([person1, person2]);
```
