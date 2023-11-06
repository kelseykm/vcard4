---
title: DateTimeListType
sidebar_position: 5
hide_title: true
---

# `DateTimeListType`

- This class represents the "date-list", "time-list", "date-time-list",
  "date-and-or-time-list" and "timestamp-list" data types

- `DateTimeListType` should be called with a single argument that is an array
  of `DateTimeType` instances of the same type

  ```js
  new DateTimeListType([
    new DateTimeType("date", "1985-04"),
    new DateTimeType("date", "---12"),
  ]);

  new DateTimeListType([
    new DateTimeType("timestamp", "19961022T140000-0500"),
    new DateTimeType("timestamp", "19961022T140000+01"),
  ]);
  ```

- The following will throw an error, since the `DateTimeType` instances in the
  array are not of the same type

  ```js
  new DateTimeListType([
    new DateTimeType("datetime", "---22T14"),
    new DateTimeType("dateandortime", "---12"),
  ]);

  // TypeError: Invalid type for value of DateTimeListType. It should be an
  // array of DateTimeTypes of the same type
  ```
