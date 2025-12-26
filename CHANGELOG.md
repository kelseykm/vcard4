# Changelog

## [4.0.4] - [2025-12-26]

### Security Fix

- Mitigated potential ReDOS backtracking vulnerabilities in validation functions using regular expressions by enforcing input length limits or using safer alternatives. Safeguards applied in `DateTimeType`, `URIType`, `LanguageTagType` and `Tokenizer`.
- Added relevant tests

## [4.0.3] - 2025-12-11

### Bug Fix

- Changed typing for the value of `LabelParameter` from `string` to `ParameterValueType`

## [4.0.2] - 2025-09-30

### Bug Fix

- Changed `acceptableParamTypes` in `IMPPProperty` from array to set since the `#validate` function is designed to be used with sets

### Other patch level changes

- Updated development dependencies

## [4.0.1] - 2025-02-13

### Bug Fix

- Fixed regular expression in `DateTimeType` that was flagging 9th and 19th February as invalid

## [4.0.0] - 2023-11-06

### Breaking Changes

- Reordered arguments for increased clarity in several classes:
  1. `LevelParameter`
  2. `TypeParameter`
  3. `SpecialValueType`
  4. `DateTimeType`
- Updated value types for parameters previously using `TextType` to `ParameterValueType` to enforce value specifications better.
- Dropped support for IANA tokens due to their large number. Use an x-name format for token names.
- No longer accept empty strings as `TextType` values.

### New Features

- Introduced a new value type: `ParameterValueType`, along with corresponding tests and type definitions.
- Added additional unit tests for `Tokenizer` and `Parser`.
- Included ts-doc comments in type definitions for improved documentation.
- Enabled case-insensitive string matching for arguments in `getProperty` and `getGroup` methods on the parse return object.
- Implemented unquoting of quoted values in `Tokenizer`.
- Validated `LanguageTagType` values and added tests for this type.

### Bug Fixes

- Allowed properties with `ALTID` parameter count as 1 for cardinality in `Parser`, `Group`, and `VCARD`.
- Permitted hyphens in x-names.
- Improved validation for `Group` names.
- Corrected the algorithm for finding the first colon index in `Tokenizer`.
- Fixed spelling and case issues in property identifier names in `VCARD` and `Group`.

## [3.1.5] - 2022-11-01

### Patch level changes

- Return development files to production package to increase npm ranking

## [3.1.4] - 2022-10-31

### Fixes

- Emit properly named declaration files when bundling
- Ensure value is string before using `replaceAll` when unescaping parameter
  values

### Other patch level changes

- Remove development files from production bundles
- Change changelog release notes style

## [3.1.3] - 2022-10-19

### Fixes

- Unescape parameter values completely when parsing

## [3.1.2] - 2022-08-17

### Patch level changes

- Change repository description and homepage

## [3.1.1] - 2022-08-17

### Fixes

- Add `Group` as accepted type for `props` argument for `VCARD` type definition

### Other patch level changes

- Run `prettier` on all source code
- Update browserslist database
- Update dev dependencies

## [3.1.0] - 2022-02-24

### New feature

- getProperty method on `parse` return object

### Fixes

- Bug fix on types for constructor parameters of `ExtendedProperty`
- Bug fix on types for getGroup method of `parse` return object

## [3.0.1] - 2022-02-11

### Fixes

- Bug fix in parsing tokenizer
- Typo fix in v3.0.0 CHANGELOG

## [3.0.0] - 2022-01-29

### Breaking changes

- All parts of the api provided as named exports of the main module
- Changes in input and output of several classes
- Change in output of parse function

### New features

- Fully tree shakeable
- Much better parser
- Added capacity for creating XML vCards
- Added capacity for creating jCards
- Added support for grouped properties in both generation and parsing
- New documentation website (removed docs from README)

### Bug fixes

- No repeating of parameters in same property
- Only properties (and grouped properties) can be passed to VCARD

<!-- Notes from here onward are pulled directly from `git log` -->

## [2.4.1] - 2021-12-09

- Bug fixes
  - correct ParsedVcard type
  - fix quotedParameter checking

## [2.4.0] - 2021-12-08

- Added support for RFC6473 and RFC7852
- Remove readonly from types

## [2.3.1] - 2021-12-06

- Removed unused type declarations

## [2.3.0] - 2021-12-06

- Update documentation and changelog
- Added CHANGELOG.md
- Added TypeScript types
- Documentation corrections
- Added info to API overview section in documentation

## [2.2.1] - 2021-12-01

- Bug fix
- Added argument validation for backCount

## [2.2.0] - 2021-11-29

- Allowed IndexParameter in multivalued properties
- Updated documentation
- Support for parameter value encoding from RFC6868
- Added newly added properties
- Changes from RFC6868 extension
- Added tests for newly added properties
- Improve validation
- Add targetProp property to LevelParameter instances
- Added tests for newly added parameters
- Fix
- Bug fix
- Added properties from RFC6715 extension
- Bug fix
- Added parameters from RFC6715 extensions
- Updated documentation
- Added tests for CCParameter
- Spelling fix and rename
- Added tests for ContactURIProperty
- Added CcParameter to accepted parameters for AdrProperty
- Added parameter from RFC8605 extension
- Added property from RFC8605 extension
- Added documentation for newly added properties
- Added tests for newly added properties
- Included added properties in validation
- Added properties from RFC6474 extension

## [2.1.2] - 2021-11-03

- Improved parsing for content lines with backslashes
- Removed unnecessary lines of code
- Removed case declarations
- Switched let for const
- Removed unneccessary lines of code

## [2.1.1] - 2021-11-02

- Added specification for minimum node version

## [2.1.0] - 2021-11-02

- Strip group from grouped properties
- Modified README.md
- Added tests for ensuring correct parsing
- Parse multiple contacts
- Merge pull request #6 from MarcelWaldvogel/unfolding-htab

## [2.0.4] - 2021-10-31

- Bug fix
- Unfolding accepting HTAB

## [2.0.3] - 2021-10-13

- Changed package description
- Bug fix
- Removed unused variables
- Removed unused variables
- Removed unused variables
- Moved reused number to variable

## [2.0.2] - 2021-10-12

- Removed unused variables
- Removed unused variable and stopped using Object.prototype builtins directly
- Removed unused variables
- Removed unused variables

## [2.0.1] - 2021-10-11

- Removed some mistakes in README

## [2.0.0] - 2021-10-10

- Added information to documentation
- Updated README to reflect changes to MediatypeParameter
- Changed MediatypeParameter values
- Updated README.md
- Changed SortAsParameter value type
- Changed CalscaleParameter value type
- Updated README to reflect changes to TypeParameter
- Changed TypeParameter value types

## [1.1.2] - 2021-10-09

- Revert "Merge pull request #2 from MarcelWaldvogel/types"

## [1.1.1] - 2021-10-09

- Fixed bug introduced by merged pull request

## [1.1.0] - 2021-10-09

- Merge pull request #2 from MarcelWaldvogel/types

## [1.0.0] - 2021-10-09

- Modified README.md
- Modified README.md
- Rewrote parser
- Manual parse type improvements
- Package \*.d.ts files as well
- Provide basic TypeScript types

## [0.2.1] - 2021-09-19

- Modified README.md

## [0.2.0] - 2021-09-14

- Added documentation for parse
- Added tests for parse
- Added parse.js

## [0.1.1] - 2021-09-13

- Clarified code
- Modified package.json
- Modified README.md
- Added tests for VCARD class
- Modified README.md
- Finished documentation
- Bug fix
- Enforced some rules...
- Added tests for explanatory, security, calendar and extended properties
- Modified package.json
- Modified README.md
- Added documentation for organizational properties
- Added tests for organizational properties
- Enforced some rules...
- Added documentation for addressing, communications and geographical properties
- Added tests for addressing, communications and geographical properties
- Enforced some rules...
- Modified XMLProperty test to take into account line folding
- Added line folding
- Changed CRLF variable to const
- Modified README.md
- Added documentation for identification properties
- Added tests for identification properties
- Added check to ensure DateTimeType is of type dateandortime for BdayProperty value
- Added TextListType to accepted value types for SpecialValueType for NProperty
- Added tests for custom errors
- Modified README.md
- Added tests for general properties
- Added documentation for general properties
- Modified social preview picture
- Added intro to properties documentation
- Modified social preview picture
- Modified README.md
- Updated main example
- Modified README.md
- Modified README.md
- Added documentation for parameters
- Modified code for some parameters
- Added tests for parameters
- Removed unneeded intermediate variable
- Changed main to index.cjs
- Added .npmignore
- Modified README.md
- Added support for commonjs require
- Added social preview image
- Modified README.md
- Added to main example
- Modified README.md
- Added Table of contents to documentation section
- Modified README.md
- Corrected links
- Corrected links
- Modified README.md
- Added documentation for all values
- Changed code for FloatType and SpecialValueType
- Disabled UTC-OFFSET values of DateTimeType from being able to have lists
- Added more list types
- Modified README.md
- Added documentation for TextType, URIType and DateTimeType
- Changed spacing of code to improve readability
- Added tests for values
- Added README.md
- Added .gitignore and test script
- Changed repr method
- Installed mocha and chai for testing
- Added AUTHOR.md
- Added ISC license
- Initialised npm project
- Added index.js as gateway to lib
- Rearrangements...
- Added VCARD object
- Code optimisation
- Removed files that are no longer needed
- Rearrangements...
- Made cardinality a static property
- New properties
- Code cleanup
- Variable name change
- Added security properties
- Added explanatory properties
- Added Clientpidmap values to SpecialValueType and removed comments
- Added new properties, plus other modifications
- Made TypeParameter more strict
- Made SpecialValueType more strict
- Added geographical properties
- Changes to DateTimeType
- Added new properties
- Added new Parameter, plus other changes
- Added array value for AdrProperty in SpecialValueType
- Added identification properties
- New ValueTypes
- Created properties.js
- Added SpecialValueType to accepted types for ValueParameter
- Bug fix
- New value type
- Added abstract base classes, plus new value type
- Added custom errors, added new param type
- Added parameters.js with classes for VCF property parameters
- Included colons in characters to be escaped in values
- Rewrote regular expressions
- Made sure all value type values return strings
- Fixed another typo
- Fixed typo
- Added validation checks for type date
- Bug fix, plus other changes...
- Added type module to package.json
- Switched to ES6 import/export, plus other changes.
- Moved values.js to src/VCF
- Initialized new npm project & added values.js
- Added example vCard with multiple contacts
- Created examples folder and added 2 vcard examples
- Merge branch 'main' of <https://github.com/kelseykm/CSV-VCF-Project>
- Added the actual readMe for VCF file from github
- Added actual VCF specification file
- Updated VCF spec to 4.3
- Added specs for VCF & CSV
