---
title: Group
hide_title: true
sidebar_position: 5
---

# `Group`

* This class is grouping properties.

* The RFC has this to say about grouping properties:

  ```
  The group construct is used to group related properties together.
  The group name is a syntactic convention used to indicate that all
  property names prefaced with the same group name SHOULD be grouped
  together when displayed by an application. It has no other
  significance.
  ```

* The `Group` class should be called with two arguments. The first an array of one or more properties that you want grouped, the second a string containing the group name.

* The items in the first argument array must all be instances of the [properties](/documentation/properties/intro) provided by __vcard4__.

## API

* `Group` is provided as a named export from the main __vcard4__ module.

  ```js title=ESM
  import { Group } from 'vcard';
  ```

  ```js title=commonjs
  const { Group } = require('vcard4');
  ```

## Methods

* The instance objects have the following methods:

  1. `repr`

    This method returns a string which is the representation of how the group will finally appear in the vCard.

    :::note
    '>' in the examples below is just the terminal prompt.
    :::

    ```js
    > const genderPropValue = new SpecialValueType(
    >   [
    >     new SexType('M'),
    >     new TextType('Male')
    >   ],
    >   'GenderProperty'
    > );
 
    > const genderPropValueParam = new ValueParameter(genderPropValue);

    > const gender = new GenderProperty(
    >   [ genderPropValueParam ],
    >   genderPropValue
    > );

    > const group = new Group([ gender ], 'milky');

    > group.repr();
    'milky.GENDER;VALUE=text:M;Male'
    ```

  2. `reprXML`

    This method returns a string which is the representation of how the group will finally appear in the XML vCard.

    ```js
    > const genderPropValue = new SpecialValueType(
    >  [
    >    new SexType('M'),
    >    new TextType('Male')
    >  ],
    >  'GenderProperty'
    > );

    > const genderPropValueParam = new ValueParameter(genderPropValue);

    > const gender = new GenderProperty(
    >  [ genderPropValueParam ],
    >  genderPropValue
    > );

    > const group = new Group([ gender ], 'milky');

    > group.reprXML();
    '<group name="milky"><gender><sex>M</sex><text>Male</text></gender></group>'
    ```

  3. `reprJSON` 

    This method returns a string which is the representation of how the group will finally appear in the jCard.

    ```js
    > const genderPropValue = new SpecialValueType(
    >   [
    >     new SexType('M'),
    >     new TextType('Male')
    >   ],
    >   'GenderProperty'
    > );

    > const genderPropValueParam = new ValueParameter(genderPropValue);

    > const gender = new GenderProperty(
    >   [ genderPropValueParam ],
    >   genderPropValue
    > );

    > const group = new Group([ gender ], 'milky');

    > group.reprJSON();
    [ [ 'gender', { group: 'milky' }, 'text', [ 'M', 'Male' ] ] ]
    ```
