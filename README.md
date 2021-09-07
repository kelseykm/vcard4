![vcard4](./pics/vcard4-social-prev.png)

# vcard4

__vCard version 4.0 javascript library with full implementation of RFC 6350.__

For use in node or in the browser

_See [documentation](#documentation)_

### Installation
* Install from npm
```
npm install vcard4
```
* Install from github
```
git clone https://github.com/kelseykm/vcard4.git
```

### Example use
```
BEGIN:VCARD
VERSION:4.0
N:Doe;John;;;
FN:John Doe
ORG:Example.com Inc.;Marketing
TITLE:Imaginary test person
EMAIL;TYPE=work;PREF=1:johnDoe@example.org
TEL;TYPE=cell:tel:+1 781 555 1212
TEL;TYPE=home:tel:+1 202 555 1212
NOTE:John Doe has a long and varied history\, being documented on more police files than anyone else. Reports of his death are alas numerous.
CATEGORIES:Work,Test group
X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\:ABPerson
END:VCARD
```

* To create a vCard like the one above, you would do the following:

```js
import { values, parameters, properties, VCARD } from 'vcard4';

// or if using commonjs
// const { values, parameters, properties, VCARD } = require('vcard4');

// N property
let nameArr = new Array(5);
nameArr[0] = new values.TextType('Doe');
nameArr[1] = new values.TextType('John');

let nPropValue = new values.SpecialValueType(nameArr, 'NProperty');

let nProp = new properties.NProperty([], nPropValue);

// FN property
let fnPropValue = new values.TextType('John Doe');

let fnProp = new properties.FNProperty([], fnPropValue);

// ORG property
let orgArr = [
  new values.TextType('Example.com Inc.'),
  new values.TextType('Marketing')
];

let orgPropValue = new values.SpecialValueType(orgArr, 'OrgProperty');

let orgProp = new properties.OrgProperty([], orgPropValue);

// Title property
let titlePropValue = new values.TextType('Imaginary test person');
let titleProp = new properties.TitleProperty([], titlePropValue);

// Email property
let emailPropValue = new values.TextType('johnDoe@example.org');

let emailPropTypeParam = new parameters.TypeParameter('work', 'EmailProperty');
let emailPropPrefParam = new parameters.PrefParameter(1);

let emailProp = new properties.EmailProperty(
  [
    emailPropTypeParam,
    emailPropPrefParam
  ],
  emailPropValue
);

// Tel properties
let telProp1Value = new values.URIType('tel:+1 781 555 1212');
let telProp1TypeParam = new parameters.TypeParameter('cell', 'TelProperty');
let telProp1 = new properties.TelProperty(
  [
    telProp1TypeParam
  ],
  telProp1Value
);

let telProp2Value = new values.URIType('tel:+1 202 555 1212');
let telProp2TypeParam = new parameters.TypeParameter('home', 'TelProperty');
let telProp2 = new properties.TelProperty(
  [
    telProp2TypeParam
  ],
  telProp2Value
);

// Note property
let notePropValue = new values.TextType('John Doe has a long and varied history, being documented on more police files than anyone else. Reports of his death are alas numerous.');

let noteProp = new properties.NoteProperty([], notePropValue);

// Categories property
let categoriesPropValue = new values.TextListType([
  new values.TextType('Work'),
  new values.TextType('Test group')
]);

let categoriesProp = new properties.CategoriesProperty([], categoriesPropValue);

// Extended property
let extendedPropValue = new values.TextType('5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE:ABPerson');
let extendedProp = new properties.ExtendedProperty('X-ABUID', [], extendedPropValue);

// Assemble all the properties into a vcard
let vc = new VCARD([
  nProp,
  fnProp,
  orgProp,
  titleProp,
  emailProp,
  telProp1,
  telProp2,
  noteProp,
  categoriesProp,
  extendedProp
]);

// calling the following method returns a formatted string with the vcard
vc.repr();

// to see it
console.log(vc.repr());
```

# DOCUMENTATION

## Table of Contents

- [Introduction](#introduction)
- [Property Value Data Types](#property-value-data-types)
    * [TextType and TextListType](#texttype-and-textlisttype)
    * [URIType](#uritype)
    * [DateTimeType](#datetimetype)
    * [DateTimeListType](#datetimelisttype)
    * [BooleanType](#booleantype)
    * [IntegerType and IntegerListType](#integertype-and-integerlisttype)
    * [FloatType and FloatListType](#floattype-and-floatlisttype)
    * [LanguageTagType](#languagetagtype)
    * [SexType](#sextype)
    * [SpecialValueType](#specialvaluetype)


## Introduction

* This is a vCard JavaScript library that implements RFC 6350 fully

* That RFC defines the vCard data format for representing and exchanging a variety of information about individuals and other entities (e.g., formatted and structured name and delivery addresses, email address, multiple telephone numbers, photograph, logo, audio clips, etc.)

* The vCards made with this library are strictly version 4.0 vCards

* This library may be used in node or in the browser. It supports the latest versions of both out of the box. For use in old browsers or old node versions, you should transpile the code with ___Babel___

* __vcard4__ supports both ES6 module import/export and commonjs require

_NB: Functional parameters are referred to as arguments in the documentation_

## Property Value Data Types

* According to the RFC, the standard value data types are:
    1. text
    2. text-list
    3. date
    4. date-list
    5. time
    6. time-list
    7. date-time
    8. date-time-list
    9. date-and-or-time
    10. date-and-or-time-list
    11. timestamp
    12. timestamp-list
    13. boolean
    14. integer
    15. integer-list
    16. float
    17. float-list
    18. URI
    19. utc-offset
    20. Language-Tag
    21. iana-valuespec

* In the library, these are represented by the following classes:
    1. [`TextType`](#TextType-and-TextListType)
    2. [`TextListType`](#TextType-and-TextListType)
    3. [`DateTimeType`](#DateTimeType)
    4. [`DateTimeListType`](#DateTimeListType)
    5. [`BooleanType`](#BooleanType)
    6. [`IntegerType`](#IntegerType-and-IntegerListType)
    7. [`IntegerListType`](#IntegerType-and-IntegerListType)
    8. [`FloatType`](#FloatType-and-FloatListType)
    9. [`FloatListType`](#FloatType-and-FloatListType)
    10. [` LanguageTagType`](#LanguageTagType)
    11. [` URIType`](#URIType)
    12. [` SexType`](#SexType)
    13. [` SpecialValueType`](#SpecialValueType)

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
new TextType('Hello, world!').repr()
//Hello\, world!
```

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added.

_NB_: _The actual value type depends on property name and VALUE parameter. For example, the ```FN``` property only accepts ```text``` values._

### TextType and TextListType

* These classes represent the "text" and "text-list" data types respectively

* ```TextType``` should be called with a single argument of type string.

```js
let greeting = new TextType('Hello, world');
```

* ```TextListType``` should be called with a single argument that is an array of ```TextType```s

```js
let person1 = new TextType('Jane');
let person2 = new TextType('John');

let people = new TextListType([ person1, person2 ]);
```

### URIType

* This class represents the "uri" data type

* ```URIType``` should be called with a single argument of type string, that is formatted as URI as defined in Section 3 of RFC 3986

```js
new URIType('http://www.example.com/my/picture.jpg');

new URIType('ldap://ldap.example.com/cn=babs%20jensen');
```

### DateTimeType

* This class represents the "date", "time", "date-time", "date-and-or-time", "timestamp" and "utc-offset" data types

* ```DateTimeType``` should be called with two arguments, the first being the value and the second being the target data type.

* Accepted values for the second argument include: ```"date"```, ```"time"```, ```"datetime"```, ```"dateandortime"```, ```"timestamp"``` or ```"utcoffset"```. (Note that it should be of type string)

* The value of the first argument depends on the type specified in the value of the second argument

* Where ```"date"``` is the second argument, the value of the first argument should be of the format:

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

* Note the use of YYYY-MM in the second example above. YYYYMM is disallowed to prevent confusion with YYMMDD. Note also that YYYY-MM-DD is disallowed.

* Example for ```"date"```:

```js
new DateTimeType('19850412', 'date');
```

* Where ```"time"``` is the second argument, the value of the first argument should be of the format:

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

* Example for ```"time"```:

```js
new DateTimeType('--00', 'time');
```

* Where ```"datetime"``` is the second argument, the value of the first argument should be of the format:

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

* Example for ```"datetime"```:

```js
new DateTimeType('--1022T1400', 'datetime');
```

* Where ```"dateandortime"``` is the second argument, the value of the first argument should be of the format:

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

* Example for ```"dateandortime"```:

```js
new DateTimeType('--1022T1400', 'dateandortime');
```

* Where ```"timestamp"``` is the second argument, the value of the first argument should be of the format:

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

* Example for ```"timestamp"```:

```js
new DateTimeType('19961022T140000-0500', 'timestamp');

new DateTimeType('19961022T140000+01', 'timestamp');
```

* Where ```"utcoffset"``` is the second argument, the value of the first argument should be of the format:

```
sign hour [minute]
```

* Example for ```"utcoffset"```:

```js
new DateTimeType('-0500', 'utcoffset');

new DateTimeType('+03', 'utcoffset');
```

### DateTimeListType

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

// TypeError: Invalid type for value of DateTimeListType. It should be an array of DateTimeTypes of the same type
//     at DateTimeListType.#validate (file:///.../vcard4/lib/values.js:213:11)
//     at new DateTimeListType (file:///.../vcard4/lib/values.js:226:19)
//     at file:///.../vcard4/lib/values.js:592:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:183:25)
//     at async Loader.import (node:internal/modules/esm/loader:178:24)
//     at async Object.loadESM (node:internal/process/esm_loader:68:5)
//     at async handleMainPromise (node:internal/modules/run_main:63:12)

```

### BooleanType

* This class represents the "boolean" data type

* ```BooleanType``` should be called with a single argument of type boolean

```js
new BooleanType(false);

new BooleanType(true);
```

### IntegerType and IntegerListType

* These classes represent the "integer" and "integer-list" data types respectively

* ```IntegerType``` should be called with a single argument of type number or bigint. The value may have a sign ("-" or "+")

```js
new IntegerType(1n);

new IntegerType(-30);

new IntegerType(5);

new IntegerType(-45n);
```

* The maximum value is ```9223372036854775807n```, and the minimum value is ```-9223372036854775808n``` when using bigint values, but when using values of type number, the maximum number is ```Number.MAX_SAFE_INTEGER``` and the minimum is ```Number.MIN_SAFE_INTEGER```

* ```IntegerListType``` should be called with a single argument that is an array of ```IntegerType```s

```js
new IntegerListType([
  new IntegerType(1),
  new IntegerType(4e2),
  new IntegerType(33n)
]);
```

### FloatType and FloatListType

* These classes represent the "float" and "float-list" data types respectively

* ```FloatType``` should be called with a single argument of type number or string. The value may have a sign ("-" or "+")

* The value must have a decimal point.

```js
new FloatType('-35.00');

new FloatType(90.234);
```

* ```FloatListType``` should be called with a single argument that is an array of ```FloatType```s

```js
new FloatListType([
  new FloatType(1.455),
  new FloatType(-345),
  new FloatType('33.000')
]);
```

### LanguageTagType

* This class represents the "language-tag" data type

* ```LanguageTagType``` should be called with a single argument of type string that is formatted as a language tag as defined in RFC 5646

* Note that the value submitted will not be checked to make sure it is an actual language tag that  conforms to RFC 5646, so ensure that whatever value you pass is a valid language tag

```js
new LanguageTagType('en-us');
```

### SexType

* This class is for use with the [`GenderProperty`](#GenderProperty)

* ```SexType``` should be called with a single argument of type string

* The accepted values for the argument include: ```M```, ```F```, ```O```, ```N``` and ```U```

```js
new SexType('F');
```

### SpecialValueType

* This class is for use with properties which do not have values of the types already described. Those properties include:
    1. [`BeginProperty`](#BeginProperty)
    2. [`EndProperty`](#EndProperty)
    3. [`KindProperty`](#KindProperty)
    4. [`NProperty`](#NProperty)
    5. [`GenderProperty`](#GenderPropertyder)
    6. [`AdrProperty`](#AdrProperty)
    7. [`OrgProperty`](#OrgProperty)
    8. [`ClientpidmapProperty`](#ClientpidmapProperty)

* ```SpecialValueType``` should be called with two arguments, both of type string. The first should be the value and the second should be the target property

* The second argument that specifies the target property should have as a value a string with the name of one the eight classes listed above (case insensitive)

* The value first argument depends on the value of the second argument

* Where the second argument is either [`BeginProperty`](#BeginProperty) or [`EndProperty`](#EndProperty), the only accepted value for the first argument is ```VCARD```.

```js
new SpecialValueType('VCARD', 'endproperty');
```

* Where the second argument is [`KindProperty`](#KindProperty), the only accepted values for the first argument are ```individual```, ```group```, ```org```, ```location``` or a publicly defined valuetype format, registered with IANA, e.g. ```hybridCellSector_AGPS```, "```802.11```", e.t.c.

```js
SpecialValueType('org', 'KindProperty')
```

* Where the second argument is [`NProperty`](#NProperty), the only accepted value for the first argument is an array of length 5. The items in the array, if present, must be of type [`TextType`](#TextType-and-TextListType), otherwise, __they must be left empty__ as demonstrated in the example below

* The 5 items in the array correspond to the following respectively:
    1. Family Names (also known as surnames),
    2. Given Names,
    3. Additional Names,
    4. Honorific Prefixes
    5. Honorific Suffixes.

```js
let nameArr = new Array(5);
nameArr[0] = new TextType('Doe');
nameArr[1] = new TextType('John');
nameArr[3] = new TextType('Mr.');

new SpecialValueType(nameArr, 'NProperty');
```

* Where the second argument is [`GenderProperty`](#GenderProperty), the only accepted value for the first argument is an array of length 2. The first item in the array, if present, must be of type [`SexType`](#SexType), while the second, if present, must be of the type [`TextType`](#TextType-and-TextListType), otherwise, __they must be left empty__. Note that __only one__ can be left empty, so if one is left empty, the other must be present

```js
new SpecialValueType(
  [
    new SexType('O'),
    new TextType("intersex")
  ],
  'GenderProperty'
);
```

* Where the second argument is [`AdrProperty`](#AdrProperty), the only accepted value for the first argument is an array of length 7. The items in the array, if present, must be of type [`TextType`](#TextType-and-TextListType), otherwise, __they must be left empty__

* The 7 items in the array correspond to the following respectively:
    1. the post office box
    2. the extended address (e.g., apartment or suite number)
    3. the street address
    4. the locality (e.g., city)
    5. the region (e.g., state or province)
    6. the postal code
    7. the country name (full name)

```js
let adrArr = new Array(7);
adrArr[3] = new TextType('Main street');

new SpecialValueType(adrArr, 'AdrProperty');
```

* Where the second argument is [`OrgProperty`](#OrgProperty), the only accepted value for the first argument is an array, with at least one item but with no length limit. The items in the array must be of type [`TextType`](#TextType-and-TextListType)

```js
new SpecialValueType(
  [
    new TextType('Example.com Inc.'),
    new TextType('Marketing')
  ],
  'orgproperty'
)
```

* Where the second argument is [`ClientpidmapProperty`](#ClientpidmapProperty), the only accepted value for the first argument is an array of length 2. The first item in the array must be of type [`IntegerType`](#IntegerType-and-IntegerListType), while the second, must be of the type [`URIType`](#URIType). __None of the items can be left empty__

```js
new SpecialValueType(
  [
    new IntegerType(1),
    new URIType('uuid:123-asmm-aams')
  ],
  'clientpidmapProperty'
);
```

## Property Parameters

* These "property parameters" contain meta-information about the property or the property value

* According to the RFC, the property parameters include:
    1. LANGUAGE
    2. VALUE
    3. PREF
    4. ALTID
    5. PID
    6. TYPE
    7. MEDIATYPE
    8. CALSCALE
    9. SORT-AS
    10. GEO
    11. TZ

* In the library, these are represented by:
    1. [`LanguageParameter`](#LanguageParameter)
    2. [`ValueParameter`](#ValueParameter)
    3. [`PrefParameter`](#PrefParameter)
    4. [`AltidParameter`](#AltidParameter)
    5. [`PIDParameter`](#PIDParameter)
    6. [`TypeParameter`](#TypeParameter)
    7. [`MediatypeParameter`](#MediatypeParameter)
    8. [`CalscaleParameter`](#CalscaleParameter)
    9. [`SortAsParameter`](#SortAsParameter)
    10. [`GeoParameter`](#GeoParameter)
    11. [`TzParameter`](#TzParameter)
    12. [`AnyParameter`](#AnyParameter)
    13. [`LabelParameter`](#LabelParameter)

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
new LanguageParameter(
  new LanguageTagType('en-us')
);
//LANGUAGE=en-us
```

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added.

### LanguageParameter

* This class represents the "LANGUAGE" parameter

* ```LanguageParameter``` should be called with a single argument of type [`LanguageTagType`](#LanguageTagType)

```js
new LanguageParameter(
  new LanguageTagType('tr')
);
```

### ValueParameter

* This class represents the "VALUE" parameter

* It is used to identify the data type of the value of a property

* ```ValueParameter``` should be called with a single argument of either one of the following types:
[`TextType`](#TextType), [`BooleanType`](#BooleanType), [`DateTimeType`](#DateTimeType), [`IntegerType`](#IntegerType-and-IntegerListType), [`FloatType`](#FloatType-and-FloatListType), [`LanguageTagType`](#LanguageTagType), [`URIType`](#URIType) and [`SpecialValueType`](#SpecialValueType)

```js
let propertyValue = new TextType('ahoy');

let vp = new ValueParameter(propertyValue);

//calling repr on vp
vp.repr();
//VALUE=text
```

### PrefParameter

* This class represents the "PREF" parameter

* ```PrefParameter``` should be called with a single argument of type [`IntegerType`](#IntegerType), whose value should be between 1 and 100

```js
new PrefParameter(
  new IntegerType(1)
);
```

### AltidParameter

* This class represents the "ALTID" parameter

* ```AltidParameter``` should be called with a single argument of either [`IntegerType`](#IntegerType) or [`TextType`](#TextType)

```js
new AltidParameter(
  new IntegerType(23)
);

new AltidParameter(
  new TextType('blah')
);
```

### PIDParameter

* This class represents the "PID" parameter

* According to the RFC, its value is either a single small positive integer or a pair of small positive integers separated by a dot. Multiple values may be encoded in a single PID parameter by separating the values with a comma ","

* Therefore, ```PIDParameter``` should be called with a single argument of either:

    1. [`IntegerType`](#IntegerType)

        - If you intend the value to be a single small positive integer

            ```js
            let pid = new PIDParameter(
              new IntegerType(3)
            );

            // calling repr
            pid.repr();
            // PID=3
            ```

    2. an array of [`IntegerType`](#IntegerType)s

        - If you intend to have multiple values encoded in the parameter and separated by a comma

        ```js
        let pid = new PIDParameter([
          new IntegerType(3),
          new IntegerType(7),
        ]);

        // calling repr
        pid.repr();
        // PID=3,7
        ```

    3. a nested array of [`IntegerType`](#IntegerType)s

        - If you intend to have the value be a pair of small positive integers separated by a dot

        ```js
        let pid = new PIDParameter([
          [
            new IntegerType(1),
            new IntegerType(5)
          ]
        ]);

        // calling repr
        pid.repr();
        // PID=1.5
        ```
* You may also combine all three, as below

```js
let pid = new PIDParameter([
  [
    new IntegerType(1),
    new IntegerType(7),
  ],
  new IntegerType(23),
  new IntegerType(24)
]);

// calling repr
pid.repr();
// PID=1.7,23,24
```

### TypeParameter

* This class represents the "TYPE" parameter

* ```TypeParameter``` should be called with a two arguments, the first being the value and the second being the target property. The value of the first argument depends on the value of the second

* The value of the second argument should be a string with the name of the target property as already mentioned

* For all target properties, the value of the first argument should be a string, whose value is either ```"work"```, ```"home"```, an IANA token or an x-name (names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements)

* Where the value of the second argument is ```"TelProperty"``` (case insensitive), the value of the first argument may be ```"text"```, ```"voice"```, ```"fax"```, ```"cell"```, ```"video"```, ```"pager"``` or ```"textphone"```, in addition to the values specified above for all target properties

* Where the value of the second argument is ```"RelatedProperty"``` (case insensitive), the value of the first argument may be ```"contact"```, ```"acquaintance"```, ```"friend"```, ```"met"```, ```"co-worker"```, ```"colleague"```, ```"co-resident"```, ```"neighbor"```, ```"child"```, ```"parent"```, ```"sibling"```, ```"spouse"```, ```"kin"```, ```"muse"```, ```"crush"```, ```"date"```, ```"sweetheart"```, ```"me"```, ```"agent"```, ```"emergency"```, in addition to the values specified above for all target properties

* If you wish to have multiple values for the same TYPE parameter, the value of the first argument may be an array whose items are those specified above, according to the rules specified above

```js
new TypeParameter('work', 'emailproperty');

new TypeParameter(
  ['voice', 'home'],
  'telproperty'
);

new TypeParameter('sweetheart', 'relatedproperty');
```

### MediatypeParameter

* This class represents the "MEDIATYPE" parameter

* ```MediatypeParameter``` should be called with a single argument that is either a string specifying the media type and subtype or an array of length 2, whose first item is a string specifying the media type and subtype, and whose second item is a string specifying the media atribute and values

* The media type and subtype string should be of the format ```type-name "/" subtype-name```, while the attribute and value string should be of the format ```attribute "=" value```

```js
new MediatypeParameter('audio/mp3');

new MediatypeParameter([
  'video/jpeg',
  'someattribute=somevalue'
]);
```

### CalscaleParameter

* This class represents the "CALSCALE" parameter

* ```CalscaleParameter``` should be called with a single argument of type string, whose value is either ```gregorian``` or an x-name

```js
new CalscaleParameter('gregorian');

new CalscaleParameter('x-mything');
```

### SortAsParameter

* This class represents the "SORT-AS" parameter

* ```SortAsParameter``` should be called with a single argument of type string or if you wish to specify multiple values, an array of string items

```js
new SortAsParameter([ 'Harten', 'Rene' ]);

new SortAsParameter('Pau Shou Chang');
```

### GeoParameter

* This class represents the "GEO" parameter

* ```GeoParameter``` should be called with a single argument of type [`URIType`](#URIType)

```js
new GeoParameter(
  new URIType('geo:37.386013,-122.082932')
);
```

### TzParameter

* This class represents the "TZ" parameter

* ```TzParameter``` should be called with a single argument of type [`URIType`](#URIType) or [`TextType`](#TextType) or [`DateTimeType`](#DateTimeType) with the type ```UTC-OFFSET```

```js
new TzParameter(
  new TextType('Raleigh/North America')
);

new TzParameter(
  new DateTimeType('-0500', 'utcoffset')
);
```

### AnyParameter

* This class is for creating extended parameters

* ```AnyParameter``` should be called with two arguments of type string. The first argument is the name of the extended parameter, which should be either an identifier registered with IANA or an x-name. The second argument is the value

```js
new AnyParameter('X-CAR', 'Volvo');

new AnyParameter('networkTDOA', 'strong');
```

### LabelParameter

* This class represents the 'LABEL' parameter for use with the ```ADR``` property

* It is used to present a delivery address label for the address

* ```LabelParameter``` should be called with a single argument of type string

```js
new LabelParameter(`Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`);
```
