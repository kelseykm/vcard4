---
title: CalscaleParameter
sidebar_position: 9
hide_title: true
---

# `CalscaleParameter`

- This class represents the "CALSCALE" parameter

- `CalscaleParameter` should be called with a single argument that is an instance of [`TextType`](/documentation/values/texttype-and-textlisttype), and whose value is either `'gregorian'` or an x-name

  :::info
  X-names are names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements
  :::

  ```js
  new CalscaleParameter(new TextType("gregorian"));

  new CalscaleParameter(new TextType("x-mything"));
  ```
