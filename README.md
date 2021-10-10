![vcard4](./pics/vcard4-social-prev.png)

# vcard4

__vCard version 4.0 javascript library for creating or parsing vCards, with full implementation of RFC 6350__

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

### Example uses

#### Creating a vCard

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
NOTE:John Doe has a long and varied history\, being documented on more poli
 ce files than anyone else. Reports of his death are alas numerous.
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

let emailPropTypeParam = new parameters.TypeParameter(
  new values.TextType('work'),
  'EmailProperty'
);
let emailPropPrefParam = new parameters.PrefParameter(
  new values.IntegerType(1)
);

let emailProp = new properties.EmailProperty(
  [
    emailPropTypeParam,
    emailPropPrefParam
  ],
  emailPropValue
);

// Tel properties
let telProp1Value = new values.URIType('tel:+1 781 555 1212');
let telProp1TypeParam = new parameters.TypeParameter(
  new values.TextType('cell'),
  'TelProperty'
);
let telProp1 = new properties.TelProperty(
  [ telProp1TypeParam  ],
  telProp1Value
);

let telProp2Value = new values.URIType('tel:+1 202 555 1212');
let telProp2TypeParam = new parameters.TypeParameter(
  new values.TextType('home'),
  'TelProperty'
);
let telProp2 = new properties.TelProperty(
  [ telProp2TypeParam ],
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

#### Parsing a vCard

```js
import { parse } from 'vcard4';
import fs from 'fs';

// or if using commonjs
// const { parse } = require('vcard4');

let vcard = fs.readFileSync('contact.vcf');

let parsedVcard = parse(vcard.toString());

console.log(parsedVcard);
// {
//   BEGIN: { parameters: undefined, value: 'VCARD' },
//   VERSION: { parameters: undefined, value: '4.0' },
//   N: {
//     parameters: undefined,
//     value: {
//       familyNames: 'Stevenson',
//       givenNames: 'John',
//       additionalNames: [ 'Philip', 'Paul' ],
//       honorificPrefixes: 'Dr.',
//       honorificSuffixes: [ 'Jr.', 'M.D.', 'A.C.P.' ]
//     }
//   },
//   FN: { parameters: undefined, value: 'John Stevenson' },
//   NICKNAME: [
//     { parameters: { PREF: '1' }, value: 'Jay' },
//     { parameters: undefined, value: [ 'Johnny', 'Stevie', 'Phil' ] },
//     { parameters: { TYPE: 'work' }, value: 'Boss' }
//   ],
//   ORG: { parameters: undefined, value: [ 'Example.com Inc.', 'Marketing' ] },
//   TITLE: { parameters: undefined, value: 'Imaginary test person' },
//   EMAIL: {
//     parameters: [ { TYPE: 'work' }, { PREF: '1' } ],
//     value: 'johnDoe@example.org'
//   },
//   TEL: [
//     { parameters: { TYPE: 'cell' }, value: 'tel:+1 781 555 1212' },
//     { parameters: { TYPE: 'home' }, value: 'tel:+1 202 555 1212' }
//   ],
//   NOTE: {
//     parameters: undefined,
//     value: 'John Doe has a long and varied history\\, being documented on more police files than anyone else. Reports of his death are alas numerous.'
//   },
//   CATEGORIES: { parameters: undefined, value: [ 'Work', 'Test group' ] },
//   ADR: {
//     parameters: [
//       { GEO: '"geo:12.3457,78.910"' },
//       {
//         LABEL: '"Mr. John Q. Public, Esq.\\nMail Drop: TNE QB\\n123 Main Street\\nAny Town, CA 91921-1234\\nU.S.A."'
//       }
//     ],
//     value: {
//       postOfficeBox: '',
//       extendedAddress: '',
//       streetAddress: '123 Main Street',
//       locality: 'Any Town',
//       region: 'CA',
//       postalCode: '91921-1234',
//       countryName: 'U.S.A.'
//     }
//   },
//   'X-ABUID': {
//     parameters: undefined,
//     value: '5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson'
//   },
//   END: { parameters: undefined, value: 'VCARD' }
// }
```

# DOCUMENTATION

## Table of Contents

- [Introduction](#introduction)
  * [Versioning](#versioning)
- [API overview](#api-overview)
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
- [Property Parameters](#property-parameters)
  * [LanguageParameter](#languageparameter)
  * [ValueParameter](#valueparameter)
  * [PrefParameter](#prefparameter)
  * [AltidParameter](#altidparameter)
  * [PIDParameter](#pidparameter)
  * [TypeParameter](#typeparameter)
  * [MediatypeParameter](#mediatypeparameter)
  * [CalscaleParameter](#calscaleparameter)
  * [SortAsParameter](#sortasparameter)
  * [GeoParameter](#geoparameter)
  * [TzParameter](#tzparameter)
  * [AnyParameter](#anyparameter)
  * [LabelParameter](#labelparameter)
- [Properties](#properties)
  * [General Properties](#general-properties)
    + [BeginProperty](#beginproperty)
    + [EndProperty](#endproperty)
    + [SourceProperty](#sourceproperty)
    + [KindProperty](#kindproperty)
    + [XMLProperty](#xmlproperty)
  * [Identification properties](#identification-properties)
    + [FNProperty](#fnproperty)
    + [NProperty](#nproperty)
    + [NicknameProperty](#nicknameproperty)
    + [PhotoProperty](#photoproperty)
    + [BdayProperty](#bdayproperty)
    + [AnniversaryProperty](#anniversaryproperty)
    + [GenderProperty](#genderproperty)
  * [Delivery Addressing Properties](#delivery-addressing-properties)
    + [AdrProperty](#adrproperty)
  * [Communications Properties](#communications-properties)
    + [TelProperty](#telproperty)
    + [EmailProperty](#emailproperty)
    + [IMPPProperty](#imppproperty)
    + [LangProperty](#langproperty)
  * [Geographical Properties](#geographical-properties)
    + [TzProperty](#tzproperty)
    + [GeoProperty](#geoproperty)
  * [Organizational Properties](#organizational-properties)
    + [TitleProperty](#titleproperty)
    + [RoleProperty](#roleproperty)
    + [LogoProperty](#logoproperty)
    + [OrgProperty](#orgproperty)
    + [MemberProperty](#memberproperty)
    + [RelatedProperty](#relatedproperty)
  * [Explanatory Properties](#explanatory-properties)
    + [CategoriesProperty](#categoriesproperty)
    + [NoteProperty](#noteproperty)
    + [ProdidProperty](#prodidproperty)
    + [RevProperty](#revproperty)
    + [SoundProperty](#soundproperty)
    + [UIDProperty](#uidproperty)
    + [ClientpidmapProperty](#clientpidmapproperty)
    + [URLProperty](#urlproperty)
    + [VersionProperty](#versionproperty)
  * [Security Properties](#security-properties)
    + [KeyProperty](#keyproperty)
  * [Calendar Properties](#calendar-properties)
    + [FburlProperty](#fburlproperty)
    + [CaladruriProperty](#caladruriproperty)
    + [CaluriProperty](#caluriproperty)
  * [Extended Properties](#extended-properties)
    + [ExtendedProperty](#extendedproperty)
- [```VCARD```](#vcard)
- [```parse```](#parse)
  * [Shape of returned object](#shape-of-returned-object)

## Introduction

* This is a vCard JavaScript library that implements RFC 6350 fully

* That RFC defines the vCard data format for representing and exchanging a variety of information about individuals and other entities (e.g., formatted and structured name and delivery addresses, email address, multiple telephone numbers, photograph, logo, audio clips, etc.)

* __vcard4__ may be used for creating or parsing vCards

* The vCards made or parsed with this library are to be strictly version 4.0 vCards

* This library may be used in node or in the browser. It supports the latest versions of both out of the box. For use in old browsers or old node versions, you should transpile the code with ___Babel___ or any other transpiler of your choice

    * __NB__: __vcard4__ uses private class fields and methods heavily. This poses a problem for Safari users because Safari does not support private class methods. It is advised to transpile the code using ___Babel___ or any other transpiler of your choice

* __vcard4__ supports both ES6 module import/export and commonjs require

### Versioning

* __vcard4__ uses ___semver___ for versioning releases

## API overview

* ```vcard4.errors```

    - Provides custom errors used by the library

    - The errors include:

        + ```vcard4.errors.MissingArgument```

        + ```vcard4.errors.InvalidArgument```


* ```vcard4.values```

    - Described [here](#property-value-data-types)

* ```vcard4.parameters```

    - Described [here](#property-parameters)

* ```vcard4.properties```

    - Described [here](#properties)

* ```vcard4.VCARD```

    - Described [here](#vcard)

* ```vcard4.parse```

    - Described [here](#parse)

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
    1. [`TextType`](#texttype-and-textlisttype)
    2. [`TextListType`](#texttype-and-textlisttype)
    3. [`DateTimeType`](#datetimetype)
    4. [`DateTimeListType`](#datetimelisttype)
    5. [`BooleanType`](#booleantype)
    6. [`IntegerType`](#integertype-and-integerlisttype)
    7. [`IntegerListType`](#integertype-and-integerlisttype)
    8. [`FloatType`](#floattype-and-floatlisttype)
    9. [`FloatListType`](#floattype-and-floatlisttype)
    10. [` LanguageTagType`](#languagetagtype)
    11. [` URIType`](#uritype)
    12. [` SexType`](#sextype)
    13. [` SpecialValueType`](#specialvaluetype)

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
new TextType('Hello, world!').repr()
//Hello\, world!
```

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added

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

* This class represents the "URI" data type

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

* This class is for use with the [`GenderProperty`](#genderproperty)

* ```SexType``` should be called with a single argument of type string

* The accepted values for the argument include: ```M```, ```F```, ```O```, ```N``` and ```U```

```js
new SexType('F');
```

### SpecialValueType

* This class is for use with properties which do not have values of the types already described. Those properties include:

    1. [`BeginProperty`](#beginproperty)
    2. [`EndProperty`](#endproperty)
    3. [`KindProperty`](#kindproperty)
    4. [`NProperty`](#nproperty)
    5. [`GenderProperty`](#genderproperty)
    6. [`AdrProperty`](#adrproperty)
    7. [`OrgProperty`](#orgproperty)
    8. [`ClientpidmapProperty`](#clientpidmapproperty)

* ```SpecialValueType``` should be called with two arguments, both of type string. The first should be the value and the second should be the target property

* The second argument that specifies the target property should have as a value a string with the name of one the eight classes listed above (case insensitive)

* The value first argument depends on the value of the second argument

* Where the second argument is either [`BeginProperty`](#beginproperty) or [`EndProperty`](#endproperty), the only accepted value for the first argument is ```VCARD```.

```js
new SpecialValueType('VCARD', 'endproperty');
```

* Where the second argument is [`KindProperty`](#kindproperty), the only accepted values for the first argument are ```individual```, ```group```, ```org```, ```location``` or an identifier registered with IANA, e.g. ```hybridCellSector_AGPS```, "```802.11```", e.t.c.

```js
new SpecialValueType('org', 'KindProperty');
```

* Where the second argument is [`NProperty`](#nproperty), the only accepted value for the first argument is an array of length 5. The items in the array, if present, must be of type [`TextType`](#texttype-and-textlisttype) or [`TextListType`](#texttype-and-textlisttype), otherwise, __they must be left empty__ as demonstrated in the example below

* The 5 items in the array correspond to the following respectively:
    1. Family Names (also known as surnames)
    2. Given Names
    3. Additional Names
    4. Honorific Prefixes
    5. Honorific Suffixes

* Individual text components can include multiple text values (hence the use of [`TextListType`](#texttype-and-textlisttype)). In the example below, the person has multiple honorific prefixes

```js
let nameArr = new Array(5);
nameArr[0] = new TextType('Doe');
nameArr[1] = new TextType('John');
nameArr[3] = new TextListType([
  new TextType('Mr.'),
  new TextType('Dr.')
]);

new SpecialValueType(nameArr, 'NProperty');
```

* Where the second argument is [`GenderProperty`](#genderproperty), the only accepted value for the first argument is an array of length 2. The first item in the array, if present, must be of type [`SexType`](#sextype), while the second, if present, must be of the type [`TextType`](#texttype-and-textlisttype), otherwise, __they must be left empty__. Note that __only one__ can be left empty, so if one is left empty, the other must be present

```js
new SpecialValueType(
  [
    new SexType('O'),
    new TextType("intersex")
  ],
  'GenderProperty'
);
```

* Where the second argument is [`AdrProperty`](#adrproperty), the only accepted value for the first argument is an array of length 7. The items in the array, if present, must be of type [`TextType`](#texttype-and-textlisttype), otherwise, __they must be left empty__

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

* Where the second argument is [`OrgProperty`](#orgproperty), the only accepted value for the first argument is an array, with at least one item but with no length limit. The items in the array must be of type [`TextType`](#texttype-and-textlisttype)

```js
new SpecialValueType(
  [
    new TextType('Example.com Inc.'),
    new TextType('Marketing')
  ],
  'orgproperty'
)
```

* Where the second argument is [`ClientpidmapProperty`](#clientpidmapproperty), the only accepted value for the first argument is an array of length 2. The first item in the array must be of type [`IntegerType`](#integertype-and-integerlisttype), while the second, must be of the type [`URIType`](#uritype). __None of the items can be left empty__

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
    1. [`LanguageParameter`](#languageparameter)
    2. [`ValueParameter`](#ValueParameter)
    3. [`PrefParameter`](#prefparameter)
    4. [`AltidParameter`](#altidparameter)
    5. [`PIDParameter`](#pidparameter)
    6. [`TypeParameter`](#typeparameter)
    7. [`MediatypeParameter`](#mediatypeparameter)
    8. [`CalscaleParameter`](#calscaleparameter)
    9. [`SortAsParameter`](#sortasparameter)
    10. [`GeoParameter`](#geoparameter)
    11. [`TzParameter`](#tzparameter)
    12. [`AnyParameter`](#anyparameter)
    13. [`LabelParameter`](#labelparameter)

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
new LanguageParameter(
  new LanguageTagType('en-us')
).repr();
//LANGUAGE=en-us
```

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added

### LanguageParameter

* This class represents the "LANGUAGE" parameter

* ```LanguageParameter``` should be called with a single argument of type [`LanguageTagType`](#languagetagtype)

```js
new LanguageParameter(
  new LanguageTagType('tr')
);
```

### ValueParameter

* This class represents the "VALUE" parameter

* It is used to identify the data type of the value of a property

* ```ValueParameter``` should be called with a single argument of either one of the following types:
[`TextType`](#texttype-and-textlisttype), [`BooleanType`](#booleantype), [`DateTimeType`](#datetimetype), [`IntegerType`](#integertype-and-integerlisttype), [`FloatType`](#floattype-and-floatlisttype), [`LanguageTagType`](#languagetagtype), [`URIType`](#uritype) and [`SpecialValueType`](#specialvaluetype)

* Note that the data type specified by the ```ValueParameter``` must correspond to the value of the property

```js
let propertyValue = new TextType('ahoy');

let vp = new ValueParameter(propertyValue);

//calling repr on vp
vp.repr();
//VALUE=text
```

### PrefParameter

* This class represents the "PREF" parameter

* ```PrefParameter``` should be called with a single argument of type [`IntegerType`](#integertype-and-integerlisttype), whose value should be between 1 and 100

```js
new PrefParameter(
  new IntegerType(1)
);
```

### AltidParameter

* This class represents the "ALTID" parameter

* ```AltidParameter``` should be called with a single argument of either [`IntegerType`](#integertype-and-integerlisttype) or [`TextType`](#texttype-and-textlisttype)

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

    1. [`IntegerType`](#integertype-and-integerlisttype)

        - If you intend the value to be a single small positive integer

            ```js
            let pid = new PIDParameter(
              new IntegerType(3)
            );

            // calling repr
            pid.repr();
            // PID=3
            ```

    2. an array of [`IntegerType`](#integertype-and-integerlisttype)s

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

    3. a nested array of [`IntegerType`](#integertype-and-integerlisttype)s

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

* For all target properties, the first argument should be an instance of [`TextType`](#texttype-and-textlisttype), whose value is either ```"work"```, ```"home"```, an identifier registered with IANA or an x-name (names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements)

* Where the value of the second argument is ```"TelProperty"``` (case insensitive), the value of the first argument may be ```"text"```, ```"voice"```, ```"fax"```, ```"cell"```, ```"video"```, ```"pager"``` or ```"textphone"```, in addition to the values specified above for all target properties

* Where the value of the second argument is ```"RelatedProperty"``` (case insensitive), the value of the first argument may be ```"contact"```, ```"acquaintance"```, ```"friend"```, ```"met"```, ```"co-worker"```, ```"colleague"```, ```"co-resident"```, ```"neighbor"```, ```"child"```, ```"parent"```, ```"sibling"```, ```"spouse"```, ```"kin"```, ```"muse"```, ```"crush"```, ```"date"```, ```"sweetheart"```, ```"me"```, ```"agent"``` or  ```"emergency"```, in addition to the values specified above for all target properties

* If you wish to have multiple values for the same TYPE parameter, the value of the first argument may be an instance of [`TextListType`](#texttype-and-textlisttype), whose values for individual [`TextType`](#texttype-and-textlisttype) components are those specified above, according to the rules specified above

```js
new TypeParameter(
  new TextType('work'),
  'emailproperty'
);

new TypeParameter(
  new TextListType([
    new TextType('voice'),
    new TextType('home')
  ]),
  'telproperty'
);

new TypeParameter(
  new TextType('sweetheart'),
  'relatedproperty'
);
```

### MediatypeParameter

* This class represents the "MEDIATYPE" parameter

* ```MediatypeParameter``` should be called with a single argument that is either a [`TextType`](#texttype-and-textlisttype) specifying the media type and subtype, or an array of length 2, whose first item is a [`TextType`](#texttype-and-textlisttype) specifying the media type and subtype, and whose second item is also a [`TextType`](#texttype-and-textlisttype) specifying the media attribute and values

* The media type and subtype [`TextType`](#texttype-and-textlisttype) value should be of the format ```type-name "/" subtype-name```, while the attribute and value [`TextType`](#texttype-and-textlisttype) should be of the format ```attribute "=" value```

```js
new MediatypeParameter(
  new TextType('audio/mp3')
);

new MediatypeParameter([
  new TextType('video/jpeg'),
  new TextType('someattribute=somevalue')
]);
```

### CalscaleParameter

* This class represents the "CALSCALE" parameter

* ```CalscaleParameter``` should be called with a single argument that is an instance of [`TextType`](#texttype-and-textlisttype), and whose value is either ```gregorian``` or an x-name (names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements)

```js
new CalscaleParameter(
  new TextType('gregorian')
);

new CalscaleParameter(
  new TextType('x-mything')
);
```

### SortAsParameter

* This class represents the "SORT-AS" parameter

* ```SortAsParameter``` should be called with a single argument that is an instance of [`TextType`](#texttype-and-textlisttype) or [`TextListType`](#texttype-and-textlisttype) if you wish to specify multiple values, an array of string items

```js
new SortAsParameter(
  new TextListType([
    new TextType('Harten'),
    new TextType('Rene' )
  ])
);

new SortAsParameter(
  new TextType('Pau Shou Chang')
);
```

### GeoParameter

* This class represents the "GEO" parameter

* ```GeoParameter``` should be called with a single argument of type [`URIType`](#uritype)

```js
new GeoParameter(
  new URIType('geo:37.386013,-122.082932')
);
```

### TzParameter

* This class represents the "TZ" parameter

* ```TzParameter``` should be called with a single argument of type [`URIType`](#uritype), or [`TextType`](#texttype-and-textlisttype), or [`DateTimeType`](#datetimetype) with the type ```utc-offset```

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

* ```AnyParameter``` should be called with two arguments of type string. The first argument is the name of the extended parameter, which should be either an identifier registered with IANA or an x-name (names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements). The second argument is the value

```js
new AnyParameter('X-CAR', 'Volvo');

new AnyParameter('networkTDOA', 'strong');
```

### LabelParameter

* This class represents the "LABEL" parameter for use with the ```ADR``` property

* It is used to present a delivery address label for the address

* ```LabelParameter``` should be called with a single argument of type string

```js
let deliveryAddress = `Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`;

new LabelParameter(deliveryAddress);
```

## Properties

* After documenting the property value data types and the property parameters, what follows now is the documentation of the properties themselves

* According to the RFC, the following are the properties:

    - General Properties

        1. BEGIN
        2. END
        3. SOURCE
        4. KIND
        5. XML

    - Identification Properties

        1. FN
        2. N
        3. NICKNAME
        4. PHOTO
        5. BDAY
        6. ANNIVERSARY
        7. GENDER

    - Delivery Addressing Properties

        1. ADR

    - Communications Properties

        1. TEL
        2. EMAIL
        3. IMPP
        4. LANG

    - Geographical Properties

        1. TZ
        2. GEO

    - Organizational Properties

        1. TITLE
        2. ROLE
        3. LOGO
        4. ORG
        5. MEMBER
        6. RELATED

    - Explanatory Properties

        1. CATEGORIES
        2. NOTE
        3. PRODID
        4. REV
        5. SOUND
        6. UID
        7. CLIENTPIDMAP
        8. URL
        9. VERSION

    - Security Properties

        1. KEY

    - Calendar Properties

        1. FBURL
        2. CALADRURI
        3. CALURI

    - Extended Properties

* In the library, they are represented by the following classes:

    1. [`BeginProperty`](#beginproperty)
    2. [`EndProperty`](#endproperty)
    3. [`SourceProperty`](#sourceproperty)
    4. [`KindProperty`](#kindproperty)
    5. [`XMLProperty`](#xmlproperty)
    6. [`FNProperty`](#fnproperty)
    7. [`NProperty`](#nproperty)
    8. [`NicknameProperty`](#nicknameproperty)
    9. [`PhotoProperty`](#photoproperty)
    10. [`BdayProperty`](#bdayproperty)
    11. [`AnniversaryProperty`](#anniversaryproperty)
    12. [`GenderProperty`](#genderproperty)
    13. [`AdrProperty`](#adrproperty)
    14. [`TelProperty`](#telproperty)
    15. [`EmailProperty`](#emailproperty)
    16. [`IMPPProperty`](#imppproperty)
    17. [`LangProperty`](#langproperty)
    18. [`TzProperty`](#tzproperty)
    19. [`GeoProperty`](#geoproperty)
    20. [`TitleProperty`](#titleproperty)
    21. [`RoleProperty`](#roleproperty)
    22. [`LogoProperty`](#logoproperty)
    23. [`OrgProperty`](#orgproperty)
    24. [`MemberProperty`](#memberproperty)
    25. [`RelatedProperty`](#relatedproperty)
    26. [`CategoriesProperty`](#categoriesproperty)
    27. [`NoteProperty`](#noteproperty)
    28. [`ProdidProperty`](#prodidproperty)
    29. [`RevProperty`](#revproperty)
    30. [`SoundProperty`](#soundproperty)
    31. [`UIDProperty`](#uidproperty)
    32. [`ClientpidmapProperty`](#clientpidmapproperty)
    33. [`URLProperty`](#urlproperty)
    34. [`VersionProperty`](#versionproperty)
    35. [`KeyProperty`](#keyproperty)
    36. [`FburlProperty`](#fburlproperty)
    37. [`CaladruriProperty`](#caladruriproperty)
    38. [`CaluriProperty`](#caluriproperty)
    39. [`ExtendedProperty`](#extendedproperty)

* The only accessible method on an instance of one of the classes listed above is ```repr```, which returns a string containing the value passed, but formatted as it would be on a vCard. For example,

```js
let genderPropValue = new SpecialValueType(
  [
    new SexType('M'),
    new TextType('Male')
  ],
  'GenderProperty'
);

let genderPropValueParam = new ValueParameter(genderPropValue);

new GenderProperty(
  [ genderPropValueParam ],
  genderPropValue
).repr();
//GENDER;VALUE=text:M;Male
```

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added

* All of the classes, with the exception of a few, should generally be called with two arguments, the first being an array whose items are the [parameters](#property-parameters) of the property and the second argument being the property's [value](#property-value-data-types). This can be seen in the example above

### General Properties

#### BeginProperty

* This class represents the "BEGIN" property

* There should be no need of creating an instance of this class, as it is done automatically

* ```BeginProperty``` takes no arguments

* It's value is of type [`SpecialValueType`](#specialvaluetype)

```js
new BeginProperty;
```

#### EndProperty

* This class represents the "END" property

* There should be no need of creating an instance of this class, as it is done automatically

* ```EndProperty``` takes no arguments

* It's value is of type [`SpecialValueType`](#specialvaluetype)

```js
new EndProperty;
```

#### SourceProperty

* This class represents the "SOURCE" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```SourceProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter), [`MediatypeParameter`](#mediatypeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```SourceProperty``` should be of type [`URIType`](#uritype)

```js
new SourceProperty(
  [],
  new URIType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
);
```

#### KindProperty

* This class represents the "KIND" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```KindProperty``` are [`ValueParameter`](#ValueParameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```KindProperty``` should be of type [`SpecialValueType`](#specialvaluetype)

```js
new KindProperty(
  [],
  new SpecialValueType('individual', 'kindproperty')
);
```

#### XMLProperty

* This class represents the "XML" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```XMLProperty``` are [`ValueParameter`](#ValueParameter) and [`AltidParameter`](#altidparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```XMLProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
let xmlPropValue = `<?xml version="1.0" encoding="ISO-8859-1"?>  
<note>  
  <to>Tove</to>  
  <from>Jani</from>  
  <heading>Reminder</heading>  
  <body>Don't forget me this weekend!</body>  
</note>`;

new XMLProperty([], xmlPropValue );
```

### Identification properties

#### FNProperty

* This class represents the "FN" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```FNProperty``` are [`ValueParameter`](#ValueParameter), [`TypeParameter`](#typeparameter), [`LanguageParameter`](#languageparameter), [`AltidParameter`](#altidparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```FNProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new FNProperty(
  [],
  new TextType('James Bond')
);
```

#### NProperty

* This class represents the "N" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```NProperty``` are [`ValueParameter`](#ValueParameter), [`SortAsParameter`](#sortasparameter), [`LanguageParameter`](#languageparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```NProperty``` should be of type [`SpecialValueType`](#specialvaluetype)

```js
let nArr = [
  new TextType('Stevenson'),
  new TextType('John'),
  new TextListType([
    new TextType('Phillip'),
    new TextType('Paul')
  ]),
  new TextType('Dr.'),
  new TextListType([
    new TextType('Jr.'),
    new TextType('M.D.'),
    new TextType('A.C.P.')
  ])
];

let nPropVal = new SpecialValueType(
  nArr,
  'nproperty'
);

new NProperty(
  [],
  nPropVal
);
```

#### NicknameProperty

* This class represents the "NICKNAME" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```NicknameProperty``` are
[`ValueParameter`](#ValueParameter), [`TypeParameter`](#typeparameter), [`LanguageParameter`](#languageparameter), [`AltidParameter`](#altidparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```NicknameProperty``` should be of type [`TextType`](#texttype-and-textlisttype) or [`TextListType`](#texttype-and-textlisttype)

```js
new NicknameProperty(
  [],
  new TextType('Robbie')
);

new NicknameProperty(
  [],
  new TextListType([
    new TextType('Jim'),
    new TextType('Jimmie')
  ])
);

new NicknameProperty(
  [
    new TypeParameter(
      new TextType('work'),
      'nicknameproperty'
    )
  ],
  new TextType('Boss')
);
```

#### PhotoProperty

* This class represents the "PHOTO" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```PhotoProperty``` are [`ValueParameter`](#ValueParameter), [`AltidParameter`](#altidparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`PrefParameter`](#prefparameter), [`PIDParameter`](#pidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```PhotoProperty``` should be of type [`URIType`](#uritype)

```js
new PhotoProperty(
  [],
  new URIType('data:image/jpeg;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhvAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bmljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0')
);

new PhotoProperty(
  [],
  new URIType('http://www.example.com/pub/photos/jqpublic.gif')
);
```

#### BdayProperty

* This class represents the "BDAY" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```BdayProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`AltidParameter`](#altidparameter), [`CalscaleParameter`](#calscaleparameter) and [`AnyParameter`](#anyparameter)

* [`CalscaleParameter`](#calscaleparameter) may only be used when the value is of type [`DateTimeType`](#datetimetype)

* [`LanguageParameter`](#languageparameter) may only be used when the value is of type [`TextType`](#texttype-and-textlisttype)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```BdayProperty``` should be of type [`DateTimeType`](#datetimetype) of the type ```dateandortime``` or [`TextType`](#texttype-and-textlisttype)

```js
new BdayProperty(
  [],
  new DateTimeType('19960415', 'dateandortime')
);

let bday2val = new TextType('circa 1800');

new BdayProperty(
  [
    new ValueParameter(bday2val)
  ],
  bday2val
);
```

#### AnniversaryProperty

* This class represents the "ANNIVERSARY" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```AnniversaryProperty``` are [`ValueParameter`](#ValueParameter), [`AltidParameter`](#altidparameter), [`CalscaleParameter`](#calscaleparameter) and [`AnyParameter`](#anyparameter)

* [`CalscaleParameter`](#calscaleparameter) may only be used when the value is of type [`DateTimeType`](#datetimetype)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```AnniversaryProperty``` should be of type [`DateTimeType`](#datetimetype) of the type ```dateandortime``` or [`TextType`](#texttype-and-textlisttype)

```js
new AnniversaryProperty(
  [],
  new DateTimeType('19960415', 'dateandortime')
);
```

#### GenderProperty

* This class represents the "GENDER" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```GenderProperty``` are [`ValueParameter`](#ValueParameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```GenderProperty``` should be of type [`SexType`](#sextype) or [`SpecialValueType`](#specialvaluetype)

```js
new GenderProperty(
  [],
  new SexType('M')
);

new GenderProperty(
  [],
  new SpecialValueType(
    [
      new SexType('O'),
      new TextType('intersex')
    ],
    'genderproperty'
  )
);

let gpArr = new Array(2)
gpArr[1] = new TextType("it's complicated")

new GenderProperty(
  [],
  new SpecialValueType(
    gpArr,
    'genderproperty'
  )
);
```

### Delivery Addressing Properties

#### AdrProperty

* This class represents the "ADR" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```AdrProperty``` are [`LabelParameter`](#labelparameter), [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`GeoParameter`](#geoparameter), [`TzParameter`](#tzparameter), [`AltidParameter`](#altidparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```AdrProperty``` should be of type [`SpecialValueType`](#specialvaluetype)

```js
let addrArr = new Array(7);
addrArr[2] = new TextType('123 Main Street');
addrArr[3] = new TextType('Any Town');
addrArr[4] = new TextType('CA');
addrArr[5] = new TextType('91921-1234');
addrArr[6] = new TextType('U.S.A.');

new AdrProperty(
  [
    new GeoParameter(
      new URIType('geo:12.3457,78.910')
    )
  ],
  new SpecialValueType(addrArr, 'AdrProperty')
);
```

### Communications Properties

#### TelProperty

* This class represents the "TEL" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```TelProperty``` are [`ValueParameter`](#ValueParameter), [`MediatypeParameter`](#mediatypeparameter), [`TypeParameter`](#typeparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* The [`MediatypeParameter`](#mediatypeparameter) may only be used if the value is of type [`URIType`](#uritype)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```TelProperty``` should be of type [`URIType`](#uritype) or [`TextType`](#texttype-and-textlisttype)

```js
new TelProperty(
  [],
  new URIType('tel:+33-01-23-45-67')
);
```

#### EmailProperty

* This class represents the "EMAIL" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```EmailProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```EmailProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new EmailProperty(
  [
    new PrefParameter(
      new IntegerType(1)
    )
  ],
  new TextType('jane_doe@example.com')
);
```

#### IMPPProperty

* This class represents the "IMPP" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```IMPPProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```IMPPProperty``` should be of type [`URIType`](#uritype)

```js
new IMPPProperty(
  [],
  new URIType('xmpp:alice@example.com')
);
```

#### LangProperty

* This class represents the "LANG" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```LangProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```LangProperty``` should be of type [`LanguageTagType`](#languagetagtype)

```js
new LangProperty(
  [],
  new LanguageTagType('fr')
);
```

### Geographical Properties

#### TzProperty

* This class represents the "TZ" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```TzProperty``` are [`ValueParameter`](#ValueParameter), [`AltidParameter`](#altidparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```TzProperty``` should be of type [`TextType`](#texttype-and-textlisttype), [`URIType`](#uritype) or [`DateTimeType`](#datetimetype)

```js
new TzProperty(
  [],
  new TextType('Raleigh/North America')
);

new TzProperty(
  [],
  new DateTimeType('-0500', 'utcoffset')
);
```

#### GeoProperty

* This class represents the "GEO" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```GeoProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```GeoProperty``` should be of type [`URIType`](#uritype)

```js
new GeoProperty(
  [],
  new URIType('geo:37.386013,-122.082932')
);
```

### Organizational Properties

#### TitleProperty

* This class represents the "TITLE" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```TitleProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter), [`TypeParameter`](#typeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```TitleProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new TitleProperty(
  [],
  new TextType('Research Scientist')
);
```

#### RoleProperty

* This class represents the "ROLE" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```RoleProperty``` are [`ValueParameter`](ValueParameter), [`LanguageParameter`](LanguageParameter), [`PIDParameter`](PIDParameter), [`PrefParameter`](PrefParameter), [`TypeParameter`](TypeParameter), [`AltidParameter`](AltidParameter) and [`AnyParameter`](AnyParameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```RoleProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new RoleProperty(
  [],
  new TextType('Project Leader')
);
```

#### LogoProperty

* This class represents the "LOGO" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```LogoProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`PIDParameter`](#pidparameter), PrefParameter, [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```LogoProperty``` should be of type [`URIType`](#uritype)

```js
new LogoProperty(
  [],
  new URIType('http://www.example.com/pub/logos/abccorp.jpg')
);

new LogoProperty(
  [],
  new URIType('data:image/jpeg;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhvcAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bmljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0')
);
```

#### OrgProperty

* This class represents the "ORG" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```OrgProperty``` are [`ValueParameter`](#ValueParameter), [`SortAsParameter`](#sortasparameter), [`LanguageParameter`](#languageparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter), [`TypeParameter`](#typeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```OrgProperty``` should be of type [`SpecialValueType`](#specialvaluetype)

```js
new OrgProperty(
  [],
  new SpecialValueType(
    [
      new TextType('ABC, Inc.'),
      new TextType('North American Division'),
      new TextType('Marketing')
    ],
    'orgproperty'
  )
);
```

#### MemberProperty

* This class represents the "MEMBER" property

> This property should only be used if the value of the "KIND" ([`KindProperty`](#kindproperty)) property is "group"

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```MemberProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter), [`MediatypeParameter`](#mediatypeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```MemberProperty``` should be of type [`URIType`](#uritype)

```js
new MemberProperty(
  [],
  new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
);
```

#### RelatedProperty

* This class represents the "RELATED" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```RelatedProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`MediatypeParameter`](#mediatypeparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`AltidParameter`](#altidparameter), [`TypeParameter`](#typeparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```RelatedProperty``` should be of type [`URIType`](#uritype) or [`TextType`](#texttype-and-textlisttype)

```js
new RelatedProperty(
  [
    new TypeParameter(
      new TextType('friend'),
      'relatedproperty'
    )
  ],
  new URIType('uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
);

let relPropVal = new TextType('Please contact my assistant Jane Doe for any inquiries.');
new RelatedProperty(
  [
    new TypeParameter(
      new TextType('co-worker'),
      'relatedproperty'
    ),
    new ValueParameter(relPropVal)
  ],
  relPropVal
);
```

### Explanatory Properties

#### CategoriesProperty

* This class represents the "CATEGORIES" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```CategoriesProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```CategoriesProperty``` should be of type [`TextType`](#texttype-and-textlisttype) or [`TextListType`](#texttype-and-textlisttype)

```js
new CategoriesProperty(
  [],
  new TextType('TRAVEL AGENT')
);

new CategoriesProperty(
  [],
  new TextListType([
    new TextType('INTERNET'),
    new TextType('IETF'),
    new TextType('INDUSTRY')
  ])
);
```

#### NoteProperty

* This class represents the "NOTE" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```NoteProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```NoteProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new NoteProperty(
  [],
  new TextType('This fax number is operational 0800 to 1715 EST, Mon-Fri.')
);
```

#### ProdidProperty

* This class represents the "PRODID" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```ProdidProperty``` are [`ValueParameter`](#ValueParameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```ProdidProperty``` should be of type [`TextType`](#texttype-and-textlisttype)

```js
new ProdidProperty(
  [],
  new TextType('-//ONLINE DIRECTORY//NONSGML Version 1//EN')
);
```

#### RevProperty

* This class represents the "REV" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```RevProperty``` are [`ValueParameter`](#ValueParameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```RevProperty``` should be of type [`DateTimeType`](#datetimetype) of type ```timestamp```

```js
new RevProperty(
  [],
  new DateTimeType('19951031T222710Z', 'timestamp')
);
```

#### SoundProperty

* This class represents the "SOUND" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```SoundProperty``` are [`ValueParameter`](#ValueParameter), [`LanguageParameter`](#languageparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```SoundProperty``` should be of type [`URIType`](#uritype)

```js
new SoundProperty(
  [],
  new URIType('CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com')
);

new SoundProperty(
  [],
  new URIType('data:audio/basic;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhAQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bmljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0')
);
```

#### UIDProperty

* This class represents the "UID" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```UIDProperty``` are [`ValueParameter`](#ValueParameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```UIDProperty``` should be of type [`URIType`](#uritype) or [`TextType`](#texttype-and-textlisttype)

```js
new UIDProperty(
  [],
  new URIType('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
);
```

#### ClientpidmapProperty

* This class represents the "CLIENTPIDMAP" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameter of ```ClientpidmapProperty``` is [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```ClientpidmapProperty``` should be of type [`SpecialValueType`](#specialvaluetype)

```js
new ClientpidmapProperty(
  [],
  new SpecialValueType(
    [
      new IntegerType(1),
      new URIType('urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b')
    ],
    'clientpidmapproperty'
  )
);
```

#### URLProperty

* This class represents the "URL" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```URLProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```URLProperty``` should be of type [`URIType`](#uritype)

```js
new URLProperty(
  [],
  new URIType('http://example.org/restaurant.french/chezchic.html')
);
```

#### VersionProperty

* This class represents the "VERSION" property

* There should be no need of creating an instance of this class, as it is done automatically

* ```VersionProperty``` takes no arguments

* It's value is of type [`TextType`](#texttype-and-textlisttype)

```js
new VersionProperty;
```

### Security Properties

#### KeyProperty

* This class represents the "KEY" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```KeyProperty``` are [`ValueParameter`](#ValueParameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter) and [`AnyParameter`](#anyparameter)

* The [`MediatypeParameter`](#mediatypeparameter) may only be used if the value is of type [`URIType`](#uritype)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```KeyProperty``` should be of type [`URIType`](#uritype) or [`TextType`](#texttype-and-textlisttype)

```js
new KeyProperty(
  [
    new MediatypeParameter(
      new TextType('application/pgp-keys')
    )
  ],
  new URIType('ftp://example.com/keys/jdoe')
);
```

### Calendar Properties

#### FburlProperty

* This class represents the "FBURL" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```FburlProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```FburlProperty``` should be of type [`URIType`](#uritype)

```js
new FburlProperty(
  [
    new MediatypeParameter(
      new TextType('text/calendar')
    )
  ],
  new URIType('ftp://example.com/busy/project-a.ifb')
);
```

#### CaladruriProperty

* This class represents the "CALADRURI" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```CaladruriProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```CaladruriProperty``` should be of type [`URIType`](#uritype)

```js
new CaladruriProperty(
  [],
  new URIType('http://example.com/calendar/jdoe')
);
```

#### CaluriProperty

* This class represents the "CALURI" property

* This class should be called with two arguments, the first an array of the parameters, and the second the value of the property

* The only acceptable parameters of ```CaluriProperty``` are [`ValueParameter`](#ValueParameter), [`PIDParameter`](#pidparameter), [`PrefParameter`](#prefparameter), [`TypeParameter`](#typeparameter), [`MediatypeParameter`](#mediatypeparameter), [`AltidParameter`](#altidparameter) and [`AnyParameter`](#anyparameter)

* If you do not wish that the property have any parameters, leave the first argument array empty

* The value of ```CaluriProperty``` should be of type [`URIType`](#uritype)

```js
new CaluriProperty(
  [
    new MediatypeParameter(
      new TextType('text/calendar')
    )
  ],
  new URIType('ftp://ftp.example.com/calA.ics')
);
```

### Extended Properties

#### ExtendedProperty

* This class is for creating extended properties

* This class should be called with three argument. The first argument, a string, should be the name of the extended parameter and it must be an x-name (names that begin with "x-" or "X-" and are reserved for experimental use, not intended for released products, or for use in bilateral agreements). The second should be an array of the parameters, and the third the value of the property

* All the afore documented [parameters](#property-parameters) and [values](#property-value-data-types) are valid

* If you do not wish that the property have any parameters, leave the second argument array empty

```js
new ExtendedProperty(
  'X-CAR',
  [],
  new TextType('Volvo')
 );
```

## ```VCARD```

* This class is for assembling all the properties into one vCard object

* ```VCARD``` should be called with a single argument that is an array whose items are the properties you want on the vCard

* [`BeginProperty`](#beginproperty), [`VersionProperty`](#versionproperty) and [`EndProperty`](#endproperty) instances __must not__ be supplied in the array. These will be created automatically

* There __must be at least one__ instance of [`FNProperty`](#fnproperty) supplied

* There __must not be more than one__ instance of the following classes supplied: [`AnniversaryProperty`](#anniversaryproperty), [`BdayProperty`](#bdayproperty), [`GenderProperty`](#genderproperty), [`KindProperty`](#kindproperty), [`NProperty`](#nproperty), [`ProdidProperty`](#prodidproperty), [`RevProperty`](#revproperty) and [`UIDProperty`](#uidproperty)

* The only accessible method on an instance of ```VCARD``` is ```repr```, which returns a string containing the properly formatted vCard

* The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added

```js
let vc = new VCARD([
  new FNProperty(
    [],
    new TextType('James Bond')
  )
]);

//calling repr, returns a properly formatted vCard
vc.repr();
// BEGIN:VCARD
// VERSION:4.0
// FN:James Bond
// END:VCARD
//
```

## ```parse```

* This function is for parsing version 4.0 vCards

* It returns an object containing the parsed vCard

* ```parse``` should be called with a single argument of type string, that is a properly formatted version 4.0 vCard

### Shape of returned object

* The keys of the returned object are the names of the properties, e.g. N, ADR, etc.

    ```js
    {
      BEGIN: { parameters: undefined, value: 'VCARD' },
      VERSION: { parameters: undefined, value: '4.0' },
      FN: { parameters: undefined, value: 'Matt Hugh' },
      TEL: { parameters: { PREF: '1' }, value: '0129 635043' },
      END: { parameters: undefined, value: 'VCARD' }
    }
    ```

* The top-level values are objects with two keys, the first being ```parameters``` and the second, ```value```. The top-level values may also be an array of objects if the vCard contained more than one instance of a given property, e.g. more than one TEL

    ```js
    // FN:John Stevenson
    {
      ...,
      FN: { parameters: undefined, value: 'John Stevenson' }
      ...,
    }

    // TEL;TYPE=cell:tel:+1 781 555 1212
    // TEL;TYPE=home:tel:+1 202 555 1212
    {
      ...,
      TEL: [
        { parameters: { TYPE: 'cell' }, value: 'tel:+1 781 555 1212' },
        { parameters: { TYPE: 'home' }, value: 'tel:+1 202 555 1212' }
      ]
      ...,
    }
    ```

* ```parameters``` may either be an object or an array of objects if the content line contained more than one parameters. The object will have a single key which will be the name of the parameter. The value of the key will be the value of the parameter

    ```js

    // TEL;TYPE=home:tel:+1 202 555 1212
    {
      parameters: { TYPE: 'home' },
      ...,
    }

    // EMAIL;TYPE=work;PREF=1:johnDoe@example.org
    {
      parameters: [ { TYPE: 'work' }, { PREF: '1' } ],
      ...
    }
    ```

* ```value``` may be either a string or an array of strings, depending on whether the value of the content line was a single value or it was comma/semi-colon delimited. Properties for which this is not followed are mentioned below

    ```js
      // ORG:Example.com Inc.;Marketing
      {
        ...,
        value: [ 'Example.com Inc.', 'Marketing' ]
      }

      // ORG:ABC
      {
        ...,
        value: 'ABC'
      }
    ```

    * For "N" property, the value is an object with the following keys:
        1. ```familyNames```
        2. ```givenNames```
        3. ```additionalNames```
        4. ```honorificPrefixes```
        5. ```honorificSuffixes```

    * For "ADR" property, the value is an object with the following keys:
        1. ```postOfficeBox```
        2. ```extendedAddress```
        3. ```streetAddress```
        4. ```locality```
        5. ```region```
        6. ```postalCode```
        7. ```countryName```

    * For "GENDER" property, the value is an object with the following keys:
        1. ```sex```
        2. ```gender```

* Note that values of object keys at all levels/depths are of type string. The object keys themselves are obviously strings. So, at all times, at any level/depth, the data types you will be dealing with are either strings, arrays of objects, or objects (whose values of object keys are of type string, or either arrays of objects, or objects...and so on...)

```js
import { parse } from 'vcard4';
import fs from 'fs';

// or if using commonjs
// const { parse } = require('vcard4');

let vcard = fs.readFileSync('contact.vcf');

let parsedVcard = parse(vcard.toString());

console.log(parsedVcard);
// {
//   BEGIN: { parameters: undefined, value: 'VCARD' },
//   VERSION: { parameters: undefined, value: '4.0' },
//   N: {
//     parameters: undefined,
//     value: {
//       familyNames: 'Stevenson',
//       givenNames: 'John',
//       additionalNames: [ 'Philip', 'Paul' ],
//       honorificPrefixes: 'Dr.',
//       honorificSuffixes: [ 'Jr.', 'M.D.', 'A.C.P.' ]
//     }
//   },
//   FN: { parameters: undefined, value: 'John Stevenson' },
//   NICKNAME: [
//     { parameters: { PREF: '1' }, value: 'Jay' },
//     { parameters: undefined, value: [ 'Johnny', 'Stevie', 'Phil' ] },
//     { parameters: { TYPE: 'work' }, value: 'Boss' }
//   ],
//   ORG: { parameters: undefined, value: [ 'Example.com Inc.', 'Marketing' ] },
//   TITLE: { parameters: undefined, value: 'Imaginary test person' },
//   EMAIL: {
//     parameters: [ { TYPE: 'work' }, { PREF: '1' } ],
//     value: 'johnDoe@example.org'
//   },
//   TEL: [
//     { parameters: { TYPE: 'cell' }, value: 'tel:+1 781 555 1212' },
//     { parameters: { TYPE: 'home' }, value: 'tel:+1 202 555 1212' }
//   ],
//   NOTE: {
//     parameters: undefined,
//     value: 'John Doe has a long and varied history\\, being documented on more police files than anyone else. Reports of his death are alas numerous.'
//   },
//   CATEGORIES: { parameters: undefined, value: [ 'Work', 'Test group' ] },
//   ADR: {
//     parameters: [
//       { GEO: '"geo:12.3457,78.910"' },
//       {
//         LABEL: '"Mr. John Q. Public, Esq.\\nMail Drop: TNE QB\\n123 Main Street\\nAny Town, CA 91921-1234\\nU.S.A."'
//       }
//     ],
//     value: {
//       postOfficeBox: '',
//       extendedAddress: '',
//       streetAddress: '123 Main Street',
//       locality: 'Any Town',
//       region: 'CA',
//       postalCode: '91921-1234',
//       countryName: 'U.S.A.'
//     }
//   },
//   'X-ABUID': {
//     parameters: undefined,
//     value: '5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson'
//   },
//   END: { parameters: undefined, value: 'VCARD' }
// }
```
