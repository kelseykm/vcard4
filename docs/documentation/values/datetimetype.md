---
title: DateTimeType
sidebar_position: 4
hide_title: true
---

# `DateTimeType`

- This class represents the "date", "time", "date-time", "date-and-or-time",
  "timestamp" and "utc-offset" data types

- `DateTimeType` should be called with two arguments, the first being the target data type
  and the second being the value.

- Accepted values for the first argument include: `"date"`, `"time"`,
  `"datetime"`, `"dateandortime"`, `"timestamp"` or `"utcoffset"`. Note that
  it should be of type string.

- The value of the second argument depends on the type specified in the value of
  the first argument

## date

- Where `"date"` is the first argument, the value of the second argument should
  be of the format:

  ```
  year [month day]
  year month day
  year "-" month
  "--" month [day]
  "--" month day
  "--" "-" day

  where:
        year = 4DIGIT ; 0000-9999
        month = 2DIGIT ; 01-12
        day = 2DIGIT ; 01-28/29/30/31 depending on month and leap year

  NB: values surrounded by square brackets ([]) are optional and may be left out

  Examples:
            19850412
            1985-04
            1985
            --0412
            ---12
  ```

- Note the use of YYYY-MM in the second example above. YYYYMM is disallowed to
  prevent confusion with YYMMDD. Note also that YYYY-MM-DD is disallowed.

- Example for `"date"`:

  ```js
  new DateTimeType("date", "19850412");
  ```

## time

- Where `"time"` is the first argument, the value of the second argument should
  be of the format:

  ```
  hour minute second [zone]
  hour [minute [second]] [zone]
  "-" minute [second] [zone]
  "-" "-" second [zone]

  where:
        hour = 2DIGIT ; 00-23
        minute = 2DIGIT ; 00-59
        second = 2DIGIT ; 00-58/59/60 depending on leap second
        zone = utc-designator / utc-offset

        utc-designator = %x5A ; uppercase "Z"
        utc-offset = sign hour [minute]

        sign = "+" / "-"

  Examples:
            102200
            1022
            10
            -2200
            --00
            102200Z
            102200-0800
  ```

- Example for `"time"`:

  ```js
  new DateTimeType("time", "--00");
  ```

## datetime

- Where `"datetime"` is the first argument, the value of the second argument
  should be of the format:

```
date-noreduc time-designator time-notrunc

where:
      date-noreduc =  year month day
                      "--" month day
                      "--" "-" day

      time-designator = %x54 ; uppercase "T"

      time-notrunc = hour [minute [second]] [zone]

Examples:
          19961022T140000
          --1022T1400
          ---22T14

```

- Example for `"datetime"`:

  ```js
  new DateTimeType("datetime", "--1022T1400");
  ```

## dateandortime

- Where `"dateandortime"` is the first argument, the value of the second
  argument should be of the format:

  ```
  datetime / date / time-designator time

  where:
        datetime = the format specified above under "datetime"

        date = the format specified above under "date"

        time-designator = %x54 ; uppercase "T"

        time = the format specified above under "time"

  Examples:
            19961022T140000
            --1022T1400
            ---22T14
            19850412
            1985-04
            1985
            --0412
            ---12
            T102200
            T1022
            T10
            T-2200
            T--00
            T102200Z
            T102200-0800
  ```

- Example for `"dateandortime"`:

  ```js
  new DateTimeType("dateandortime", "--1022T1400");
  ```

## timestamp

- Where `"timestamp"` is the first argument, the value of the second argument
  should be of the format:

  ```
  date-complete time-designator time-complete

  where:
        date-complete = year month day

        time-designator = %x54 ; uppercase "T"

        time-complete = hour minute second [zone]

  Examples:
            19961022T140000
            19961022T140000Z
            19961022T140000-05
            19961022T140000-0500
  ```

- Example for `"timestamp"`:

  ```js
  new DateTimeType("timestamp", "19961022T140000-0500");

  new DateTimeType("timestamp", "19961022T140000+01");
  ```

## utcoffset

- Where `"utcoffset"` is the first argument, the value of the second argument
  should be of the format:

  ```
  sign hour [minute]
  ```

- Example for `"utcoffset"`:

  ```js
  new DateTimeType("utcoffset", "-0500");

  new DateTimeType("utcoffset", "+03");
  ```
