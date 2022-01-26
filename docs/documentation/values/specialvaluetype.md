---
title: SpecialValueType
hide_title: true
sidebar_position: 11
---

# ```SpecialValueType```

* This class is for use with properties which do not have values of the types already described. Those properties include:

    1. [`KindProperty`](#kindproperty)
    2. [`NProperty`](#nproperty)
    3. [`GenderProperty`](#genderproperty)
    4. [`AdrProperty`](#adrproperty)
    5. [`OrgProperty`](#orgproperty)
    6. [`ClientpidmapProperty`](#clientpidmapproperty)

* ```SpecialValueType``` should be called with two arguments. The first should be the value and the second should be the target property

* The second argument that specifies the target property should have as a value a string with the name of one the eight classes listed above (case insensitive)

* The value first argument depends on the value of the second argument

## Use with `KindProperty`

* Where the second argument is ```'KindProperty'``` (case insensitive), the only accepted values for the first argument are ```'individual'```, ```'group'```, ```'org'```, ```'location'```, ```'application'``` or an identifier registered with IANA

  ```js
  new SpecialValueType('org', 'KindProperty');
  ```

## Use with `NProperty`

* Where the second argument is ```'NProperty'``` (case insensitive), the only accepted value for the first argument is an array of length 5. The items in the array, if present, must be of type [`TextType`](texttype-and-textlisttype) or [`TextListType`](texttype-and-textlisttype), otherwise, __they must be left empty__

  :::tip
  If you want some array elements to be left empty, you initialise an array of the requisite length, and then only fill the indices you want to fill
  :::

* The 5 items in the array correspond to the following respectively:
    1. Family Names (also known as surnames)
    2. Given Names
    3. Additional Names
    4. Honorific Prefixes
    5. Honorific Suffixes

* Individual text components can include multiple text values (hence the use of [`TextListType`](texttype-and-textlisttype)). In the example below, the person has multiple honorific prefixes

  ```js
  const nameArr = new Array(5);
  nameArr[0] = new TextType('Doe');
  nameArr[1] = new TextType('John');
  nameArr[3] = new TextListType([
    new TextType('Mr.'),
    new TextType('Dr.')
  ]);

  new SpecialValueType(nameArr, 'NProperty');
  ```

## Use with `GenderProperty`

* Where the second argument is ```'GenderProperty'``` (case insensitive), the only accepted value for the first argument is an array of length 2. The first item in the array, if present, must be of type [`SexType`](sextype), while the second, if present, must be of the type [`TextType`](texttype-and-textlisttype), otherwise, __they must be left empty__. Note that __only one__ can be left empty, so if one is left empty, the other must be present

  ```js
  new SpecialValueType(
    [
      new SexType('O'),
      new TextType("intersex")
    ],
    'GenderProperty'
  );
  ```

## Use with `AdrProperty`

* Where the second argument is ```'AdrProperty'``` (case insensitive), the only accepted value for the first argument is an array of length 7. The items in the array, if present, must be of type [`TextType`](texttype-and-textlisttype), otherwise, __they must be left empty__

* The 7 items in the array correspond to the following respectively:
    1. the post office box
    2. the extended address (e.g., apartment or suite number)
    3. the street address
    4. the locality (e.g., city)
    5. the region (e.g., state or province)
    6. the postal code
    7. the country name (full name)

  ```js
  const adrArr = new Array(7);
  adrArr[3] = new TextType('Main street');

  new SpecialValueType(adrArr, 'AdrProperty');
  ```

## Use with `OrgProperty`

* Where the second argument is ```'OrgProperty'``` (case insensitive), the only accepted value for the first argument is an array, with at least one item but with no length limit. The items in the array must be of type [`TextType`](texttype-and-textlisttype)

  ```js
  new SpecialValueType(
    [
      new TextType('Example.com Inc.'),
      new TextType('Marketing')
    ],
    'orgproperty'
  )
  ```

## Use with `ClientpidmapProperty`

* Where the second argument is ```'ClientpidmapProperty'``` (case insensitive), the only accepted value for the first argument is an array of length 2. The first item in the array must be of type [`IntegerType`](integertype-and-integerlisttype), while the second, must be of the type [`URIType`](uritype). __None of the items can be left empty__

  ```js
  new SpecialValueType(
    [
      new IntegerType(1),
      new URIType('uuid:123-asmm-aams')
    ],
    'clientpidmapProperty'
  );
  ```
