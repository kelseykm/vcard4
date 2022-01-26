---
title: DateTimeListType
sidebar_position: 5
hide_title: true
---

# ```DateTimeListType```

* This class represents the "date-list", "time-list", "date-time-list", "date-and-or-time-list" and "timestamp-list" data types

* ```DateTimeListType``` should be called with a single argument that is an array of ```DateTimeType```s of the same type

  ```js
  new DateTimeListType([
    new DateTimeType('1985-04', 'date'),
    new DateTimeType('---12', 'date')
  ]);

  new DateTimeListType([
    new DateTimeType('19961022T140000-0500', 'timestamp'),
    new DateTimeType('19961022T140000+01', 'timestamp')
  ]);
  ```

* The following will throw an error, since the ```DateTimeType```s in the array are not of the same type

  ```js
  new DateTimeListType([
    new DateTimeType('---22T14', 'datetime'),
    new DateTimeType('---12', 'dateandortime')
  ]);

  //TypeError: Invalid type for value of DateTimeListType. It should be an array of DateTimeTypes of the same type
  ```


