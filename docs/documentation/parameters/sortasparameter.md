---
title: SortAsParameter
sidebar_position: 10
hide_title: true
---

# `SortAsParameter`

- This class represents the "SORT-AS" parameter

- `SortAsParameter` should be called with a single argument that is an instance of [`TextType`](/documentation/values/texttype-and-textlisttype) or [`TextListType`](/documentation/values/texttype-and-textlisttype) if you wish to specify multiple values, an array of string items

  ```js
  new SortAsParameter(
    new TextListType([new TextType("Harten"), new TextType("Rene")])
  );

  new SortAsParameter(new TextType("Pau Shou Chang"));
  ```
