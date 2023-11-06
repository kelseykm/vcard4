---
title: Introduction
sidebar_position: 1
hide_title: true
---

# Properties

- After documenting the property value data types and the property parameters,
  what follows now is the documentation of the properties themselves

- According to the RFC, the following are the properties:

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
    8. BIRTHPLACE
    9. DEATHPLACE
    10. DEATHDATE
    11. EXPERTISE
    12. HOBBY
    13. INTEREST

  - Delivery Addressing Properties

    1. ADR

  - Communications Properties

    1. TEL
    2. EMAIL
    3. IMPP
    4. LANG
    5. CONTACT-URI

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
    7. ORG-DIRECTORY

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

:::info
**vcard4** treats `BEGIN`, `VERSION` and `END` properties as special. You do
not construct them manually as you do the other properties, it adds them to the
constructed vCard itself.
:::

- In the library, they are represented by the following classes:

  1. [`SourceProperty`](sourceproperty)
  2. [`KindProperty`](kindproperty)
  3. [`XMLProperty`](xmlproperty)
  4. [`FNProperty`](fnproperty)
  5. [`NProperty`](nproperty)
  6. [`NicknameProperty`](nicknameproperty)
  7. [`PhotoProperty`](photoproperty)
  8. [`BdayProperty`](bdayproperty)
  9. [`AnniversaryProperty`](anniversaryproperty)
  10. [`GenderProperty`](genderproperty)
  11. [`BirthPlaceProperty`](birthplaceproperty)
  12. [`DeathPlaceProperty`](deathplaceproperty)
  13. [`DeathDateProperty`](deathdateproperty)
  14. [`ExpertiseProperty`](expertiseproperty)
  15. [`HobbyProperty`](hobbyproperty)
  16. [`InterestProperty`](interestproperty)
  17. [`AdrProperty`](adrproperty)
  18. [`TelProperty`](telproperty)
  19. [`EmailProperty`](emailproperty)
  20. [`IMPPProperty`](imppproperty)
  21. [`LangProperty`](langproperty)
  22. [`ContactURIProperty`](contacturiproperty)
  23. [`TzProperty`](tzproperty)
  24. [`GeoProperty`](geoproperty)
  25. [`TitleProperty`](titleproperty)
  26. [`RoleProperty`](roleproperty)
  27. [`LogoProperty`](logoproperty)
  28. [`OrgProperty`](orgproperty)
  29. [`MemberProperty`](memberproperty)
  30. [`RelatedProperty`](relatedproperty)
  31. [`OrgDirectoryProperty`](orgdirectoryproperty)
  32. [`CategoriesProperty`](categoriesproperty)
  33. [`NoteProperty`](noteproperty)
  34. [`ProdidProperty`](prodidproperty)
  35. [`RevProperty`](revproperty)
  36. [`SoundProperty`](soundproperty)
  37. [`UIDProperty`](uidproperty)
  38. [`ClientpidmapProperty`](clientpidmapproperty)
  39. [`URLProperty`](urlproperty)
  40. [`KeyProperty`](keyproperty)
  41. [`FburlProperty`](fburlproperty)
  42. [`CaladruriProperty`](caladruriproperty)
  43. [`CaluriProperty`](caluriproperty)
  44. [`ExtendedProperty`](extendedproperty)

- The instance object is frozen and therefore its properties and methods cannot
  be modified after construction, neither can new ones be added

:::tip
All of the classes, with the exception of a few, should generally be called
with two arguments, the first being an array whose items are the
[parameters](/documentation/parameters/intro) of the property and the second
argument being the property's [value](/documentation/values/intro).
:::

## API

- All the classes listed above are provided as named exports from the main
  **vcard4** module. For example, to import the `AdrProperty` class:

  ```js title=ESM
  import { AdrProperty } from "vcard4";
  ```

  ```js title=commonjs
  const { AdrProperty } = require("vcard4");
  ```

## Methods

- The instance objects have the following methods:

  1. `repr`

  This method returns a string which is the representation of how the property
  will finally appear in the vCard.

  :::note
  '>' in the examples below is just the terminal prompt.
  :::

  ```js
  > const genderPropValue = new SpecialValueType(
  >   'GenderProperty',
  >   [
  >     new SexType('M'),
  >     new TextType('Male')
  >   ],
  > );

  > const genderPropValueParam = new ValueParameter(genderPropValue);

  > const gender = new GenderProperty(
  >   [ genderPropValueParam ],
  >   genderPropValue
  > );

  > gender.repr();
  'GENDER;VALUE=text:M;Male'
  ```

  2. `reprXML`

  This method returns a string which is the representation of how the property
  will finally appear in the XML vCard.

  ```js
  > const genderPropValue = new SpecialValueType(
  >   'GenderProperty',
  >  [
  >    new SexType('M'),
  >    new TextType('Male')
  >  ],
  > );

  > const genderPropValueParam = new ValueParameter(genderPropValue);

  > const gender = new GenderProperty(
  >  [ genderPropValueParam ],
  >  genderPropValue
  > );

  > gender.reprXML();
  '<gender><sex>M</sex><text>Male</text></gender>'
  ```

  3. `reprJSON`

  This method returns an array showing how the property will finally appear in
  the jCard.

  ```js
  > const genderPropValue = new SpecialValueType(
  >   'GenderProperty',
  >   [
  >     new SexType('M'),
  >     new TextType('Male')
  >   ],
  > );

  > const genderPropValueParam = new ValueParameter(genderPropValue);

  > const gender = new GenderProperty(
  >   [ genderPropValueParam ],
  >   genderPropValue
  > );

  > gender.reprJSON();
  [ 'gender', {}, 'text', [ 'M', 'Male' ] ]
  ```
