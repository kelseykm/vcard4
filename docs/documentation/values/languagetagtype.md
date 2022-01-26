---
title: LanguageTagType
sidebar_position: 9
hide_title: true
---

# ```LanguageTagType```

* This class represents the "language-tag" data type

* ```LanguageTagType``` should be called with a single argument of type string that is formatted as a language tag as defined in RFC5646

  :::warning
  The value submitted will not be checked to make sure it is an actual language tag that  conforms to RFC5646, so ensure that whatever value you pass is a valid language tag
  :::

  ```js
  new LanguageTagType('en-us');
  ```


