# vcard4

__A strict vCard version 4.0 javascript library with full implementation of RFC 6350.__

It may be used in node or in the browser

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
import { values, parameters, properties, VCARD } from './index.js';

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

* This is a vCard JavaScript library that implements RFC 6350 fully.

* That RFC defines the vCard data format for representing and exchanging a variety of information about individuals and other entities (e.g., formatted and structured name and delivery addresses, email address, multiple telephone numbers, photograph, logo, audio clips, etc.).

* The vCards made with this library are strictly version 4.0 vCards.

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
    1. [`TextType`](#TextType)
    2. [`TextListType`](#TextListType)
    3. [`DateTimeType`](#DateTimeType)
    4. [`DateTimeListType`](#DateTimeListType)
    5. [`BooleanType`](#BooleanType)
    6. [`IntegerType`](#IntegerType)
    7. [`IntegerListType`](#IntegerListType)
    8. [`FloatType`](#FloatType)
    9. [`FloatListType`](#FloatListType)
    10.[` LanguageTagType`](#LanguageTagType)
    11.[` URIType`](#URIType)
    12.[` SexType`](#SexType)
    13.[` SpecialValueType`](#SpecialValueType)

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

### FloatType and IntegerListType

* These classes represent the "float" and "float-list" data types respectively

* ```FloatType``` should be called with a single argument of type number or string. The value may have a sign ("-" or "+")

* The value must have a decimal point.

```js
new FloatType('-35.00');

new FloatType(90.234);
```

* ```IntegerListType``` should be called with a single argument that is an array of ```IntegerType```s

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

* Where the second argument is [`NProperty`](#NProperty), the only accepted value for the first argument is an array of length 5. The items in the array, if present, must be of type [`TextType`](#TextType), otherwise, __they must be left empty__ as demonstrated in the example below

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

* Where the second argument is [`GenderProperty`](#GenderProperty), the only accepted value for the first argument is an array of length 2. The first item in the array, if present, must be of type [SexType` ](#SexType), while the second, if present, must be of the type [`TextType`](#TextType), otherwise, __they must be left empty__. Note that __only one__ can be left empty, so if one is left empty, the other must be present

```js
new SpecialValueType(
  [
    new SexType('O'),
    new TextType("intersex")
  ],
  'GenderProperty'
);
```

* Where the second argument is [`AdrProperty`](#AdrProperty), the only accepted value for the first argument is an array of length 7. The items in the array, if present, must be of type [`TextType`](#TextType), otherwise, __they must be left empty__

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

* Where the second argument is [`OrgProperty`](#OrgProperty), the only accepted value for the first argument is an array, with at least one item but with no length limit. The items in the array must be of type [`TextType`](#TextType)

```js
new SpecialValueType(
  [
    new TextType('Example.com Inc.'),
    new TextType('Marketing')
  ],
  'orgproperty'
)
```

* Where the second argument is [`ClientpidmapProperty`](#ClientpidmapProperty), the only accepted value for the first argument is an array of length 2. The first item in the array must be of type [`IntegerType`](#IntegerType), while the second, must be of the type [`URIType`](#URIType). __None of the items can be left empty__

```js
new SpecialValueType(
  [
    new IntegerType(1),
    new URIType('uuid:123-asmm-aams')
  ],
  'clientpidmapProperty'
);
```
