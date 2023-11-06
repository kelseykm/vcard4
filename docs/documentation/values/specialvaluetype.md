---
title: SpecialValueType
hide_title: true
sidebar_position: 11
---

# `SpecialValueType`

- This class is for use with properties which do not have values of the types
  already described. Those properties include:

  1. [`KindProperty`](/documentation/properties/kindproperty)
  2. [`NProperty`](/documentation/properties/nproperty)
  3. [`GenderProperty`](/documentation/properties/genderproperty)
  4. [`AdrProperty`](/documentation/properties/adrproperty)
  5. [`OrgProperty`](/documentation/properties/orgproperty)
  6. [`ClientpidmapProperty`](/documentation/properties/clientpidmapproperty)

- `SpecialValueType` should be called with two arguments. The first should be
  the target property and the second should be the value

- The first argument that specifies the target property should have as a value
  a string with the name of one the six classes listed above (case insensitive)

- The value of the second argument depends on the value of the first argument

## Use with `KindProperty`

- Where the first argument is `'KindProperty'` (case insensitive), the only
  accepted values for the second argument are `'individual'`, `'group'`,
  `'org'`, `'location'`, `'application'` or an x-name (names that begin with
  "x-" or "X-" and are reserved for experimental use, not intended for released
  products, or for use in bilateral agreements)

  ```js
  new SpecialValueType("KindProperty", "org");
  ```

## Use with `NProperty`

- Where the first argument is `'NProperty'` (case insensitive), the only
  accepted value for the second argument is an array of length 5. The items in
  the array, if present, must be of type [`TextType`](texttype-and-textlisttype)
  or [`TextListType`](texttype-and-textlisttype), otherwise, **they must be left
  empty**

  :::tip
  If you want some array elements to be left empty, you initialise an array of
  the requisite length, and then only fill the indices you want to fill
  :::

- The 5 items in the array correspond to the following respectively:

  1. Family Names (also known as surnames)
  2. Given Names
  3. Additional Names
  4. Honorific Prefixes
  5. Honorific Suffixes

- Individual text components can include multiple text values (hence the use of
  [`TextListType`](texttype-and-textlisttype)). In the example below, the
  person has multiple honorific prefixes

  ```js
  const nameArr = new Array(5);
  nameArr[0] = new TextType("Doe");
  nameArr[1] = new TextType("John");
  nameArr[3] = new TextListType([new TextType("Mr."), new TextType("Dr.")]);

  new SpecialValueType("NProperty", nameArr);
  ```

## Use with `GenderProperty`

- Where the first argument is `'GenderProperty'` (case insensitive), the only
  accepted value for the second argument is an array of length 2. The first item
  in the array, if present, must be of type [`SexType`](sextype), while the
  second, if present, must be of the type
  [`TextType`](texttype-and-textlisttype), otherwise, **they must be left
  empty**. Note that **only one** can be left empty, so if one is left empty, the
  other must be present

- The items specify the components of the sex and gender identity,
  respectively, of the object the vCard represents.

  ```js
  new SpecialValueType("GenderProperty", [
    new SexType("O"),
    new TextType("intersex"),
  ]);
  ```

## Use with `AdrProperty`

- Where the first argument is `'AdrProperty'` (case insensitive), the only
  accepted value for the second argument is an array of length 7. The items in
  the array, if present, must be of type [`TextType`](texttype-and-textlisttype),
  otherwise, **they must be left empty**

- The 7 items in the array correspond to the following respectively:

  1. the post office box
  2. the extended address (e.g., apartment or suite number)
  3. the street address
  4. the locality (e.g., city)
  5. the region (e.g., state or province)
  6. the postal code
  7. the country name (full name)

  ```js
  const adrArr = new Array(7);
  adrArr[3] = new TextType("Main street");

  new SpecialValueType("AdrProperty", adrArr);
  ```

## Use with `OrgProperty`

- Where the first argument is `'OrgProperty'` (case insensitive), the only
  accepted value for the second argument is an array, with at least one item but
  with no length limit. The items in the array must be of type
  [`TextType`](texttype-and-textlisttype)

  ```js
  new SpecialValueType("orgproperty", [
    new TextType("Example.com Inc."),
    new TextType("Marketing"),
  ]);
  ```

## Use with `ClientpidmapProperty`

- Where the first argument is `'ClientpidmapProperty'` (case insensitive), the
  only accepted value for the second argument is an array of length 2. The first
  item in the array must be of type
  [`IntegerType`](integertype-and-integerlisttype), while the second, must be of
  the type [`URIType`](uritype). **None of the items can be left empty**

  ```js
  new SpecialValueType("clientpidmapProperty", [
    new IntegerType(1),
    new URIType("uuid:123-asmm-aams"),
  ]);
  ```

```

```
