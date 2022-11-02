---
title: PIDParameter
sidebar_position: 6
hide_title: true
---

# `PIDParameter`

- This class represents the "PID" parameter

- According to the RFC, its value is either a single small positive integer or
  a pair of small positive integers separated by a dot. Multiple values may be
  encoded in a single PID parameter by separating the values with a comma ","

- Therefore, `PIDParameter` should be called with a single argument that is
  either:

  1. an instance of
     [`IntegerType`](/documentation/values/integertype-and-integerlisttype)

     If you intend the value to be a single small positive integer

     ```js
     const pid = new PIDParameter(new IntegerType(3));

     // calling repr
     pid.repr();
     // PID=3
     ```

  2. an array of instances of
     [`IntegerType`](/documentation/values/integertype-and-integerlisttype)

     If you intend to have multiple values encoded in the parameter and
     separated by a comma

     ```js
     const pid = new PIDParameter([new IntegerType(3), new IntegerType(7)]);

     // calling repr
     pid.repr();
     // PID=3,7
     ```

  3. a nested array of instances of
     [`IntegerType`](/documentation/values/integertype-and-integerlisttype)

     If you intend to have the value be a pair of small positive integers
     separated by a dot

     ```js
     const pid = new PIDParameter([[new IntegerType(1), new IntegerType(5)]]);

     // calling repr
     pid.repr();
     // PID=1.5
     ```

- You may also combine the last two, as below

  ```js
  const pid = new PIDParameter([
    [new IntegerType(1), new IntegerType(7)],
    new IntegerType(23),
    new IntegerType(24),
  ]);

  // calling repr
  pid.repr();
  // PID=1.7,23,24
  ```
