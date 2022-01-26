---
title: MediatypeParameter
sidebar_position: 8
hide_title: true
---

# `MediatypeParameter`

* This class represents the "MEDIATYPE" parameter

* ```MediatypeParameter``` should be called with a single argument that is either an instance of [`TextType`](/documentation/values/texttype-and-textlisttype) specifying the media type and subtype, or an array of length 2, whose first item is an instance of [`TextType`](/documentation/values/texttype-and-textlisttype) specifying the media type and subtype, and whose second item is also an instance of [`TextType`](/documentation/values/texttype-and-textlisttype) specifying the media attribute and values

* The media type and subtype [`TextType`](/documentation/values/texttype-and-textlisttype) value should be of the format ```type-name "/" subtype-name```, while the attribute and value [`TextType`](/documentation/values/texttype-and-textlisttype) should be of the format ```attribute "=" value```

  ```js
  new MediatypeParameter(
    new TextType('audio/mp3')
  );

  new MediatypeParameter([
    new TextType('text/html'),
    new TextType('charset=UTF-8')
  ]);
  ```

