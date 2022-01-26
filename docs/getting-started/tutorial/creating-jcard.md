---
title: Creating a jCard
sidebar_position: 4
---

* __vcard4__ may also be used to create a jCard, which is a JSON format for vCard data (RFC 7095).

* The process of doing so is the same as explained in the [first part of the tutorial](/docs/getting-started/tutorial/creating-vcard). The only difference is at the very end. 

* Once we have the ```VCARD``` object, we call the ```reprJSON``` method to create a jCard.

  ```js
  const vc = new VCARD([...]);

  // to get jCcard
  vc.reprJSON();

  ```

* That method will return Simon's vCard in JSON format as below.

  ```js
  [
    "vcard",
    [
      [ "fn", {}, "text", "Simon Perreault" ],
      [ "n", {}, "text", [ "Perreault", "Simon", "", "", ["ing. jr","M.Sc."] ] ],
      [ "bday", {}, "date-and-or-time", "--02-03" ],
      [ "anniversary", {}, "date-and-or-time", "2009-08-08T14:30-05:00" ],
      [ "gender", {}, "text", "M" ],
      [ "lang", { pref: "1" }, "language-tag", "fr" ],
      [ "lang", { pref: "2" }, "language-tag", "en" ],
      [ "org", { type: "work" }, "text", "Viagenie" ],
      [
        "adr",
        { type: "work" },
        "text",
        [
          "",
          "Suite D2-630",
          "2875 Laurier",
          "Quebec",
          "QC",
          "G1V 2M2",
          "Canada"
        ]
      ],
      [ "tel", { pref: "1", type: [ "work", "voice" ] }, "uri", "tel:+1-418-656-9254;ext=102" ],
      [ "tel", { type: [ "work", "cell", "voice", "video", "text" ] }, "uri", "tel:+1-418-262-6501" ],
      [ "email", { type: "work" }, "text", "simon.perreault@viagenie.ca" ],
      [ "geo", { type: "work" }, "uri", "geo:46.772673,-71.282945" ],
      [
        "key",
        { type: "work" },
        "uri",
        "http://www.viagenie.ca/simon.perreault/simon.asc"
      ],
      [ "tz", {}, "utc-offset", "-05:00" ],
      [ "url", { type: "home" }, "uri", "http://nomis80.org" ]
    ]
  ]

  ```

