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

let nPropValue = new values.SpecialValueType('TEXT', nameArr, 'NProperty');

let nProp = new properties.NProperty([], nPropValue);

// FN property
let fnPropValue = new values.TextType('John Doe');

let fnProp = new properties.FNProperty([], fnPropValue);

// ORG property
let orgArr = [
  new values.TextType('Example.com Inc.'),
  new values.TextType('Marketing')
];

let orgPropValue = new values.SpecialValueType('TEXT', orgArr, 'OrgProperty');

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

## Property Value Data Types

* According to the RFC, the standard value data types are:
    1. text
    2. text-list
    3. date
    4. time
    5. date-time
    6. date-and-or-time
    7. timestamp
    8. boolean
    9. integer
    10. float
    11. URI
    12. utc-offset
    13. Language-Tag
    14. iana-valuespec

* In the library, these are represented by the following classes:
    1. TextType
    2. TextListType
    4. DateTimeType
    3. BooleanType
    5. IntegerType
    6. FloatType
    7. LanguageTagType
    8. URIType
    9. SexType
    10. SpecialValueType

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
new TextType('Hello, world!').repr()
//Hello\, world
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
let myPic = new URIType('http://www.example.com/my/picture.jpg');

let babsJensen = new URIType('ldap://ldap.example.com/cn=babs%20jensen');
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

* Example for ```"date"```:

```js
new DateTimeType('19850412', 'date');
```

* Note the use of YYYY-MM in the second example above. YYYYMM is disallowed to prevent confusion with YYMMDD. Note also that YYYY-MM-DD is disallowed.

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
```

* Where ```"utcoffset"``` is the second argument, the value of the first argument should be of the format:

```
sign hour [minute]
```

* Example for ```"utcoffset"```:

```js
new DateTimeType('-0500', 'utcoffset');
```
