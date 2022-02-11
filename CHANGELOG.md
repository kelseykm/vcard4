# 3.0.1

## Fixes

* Bug fix in parsing tokenizer

* Typo fix in v3.0.0 CHANGELOG

# 3.0.0

## Breaking changes

* All parts of the api provided as named exports of the main module

* Changes in input and output of several classes

* Change in output of parse function

## New features

* Fully tree shakeable

* Much better parser

* Added capacity for creating XML vCards

* Added capacity for creating jCards

* Added support for grouped properties in both generation and parsing

* New documentation website (removed docs from README)

## Bug fixes

* No repeating of parameters in same property

* Only properties (and grouped properties) can be passed to VCARD

# 2.4.1

* Bug fixes
    - correct ParsedVcard type
    - fix quotedParameter checking

# 2.4.0

* Added support for RFC6473 and RFC7852
* Remove readonly from types

# 2.3.1

* Removed unused type declarations

# 2.3.0

* Update documentation and changelog
* Added CHANGELOG.md
* Added TypeScript types
* Documentation corrections
* Added info to API overview section in documentation

# 2.2.1

* Bug fix
* Added argument validation for backCount

# 2.2.0

* Allowed IndexParameter in multivalued properties
* Updated documentation
* Support for parameter value encoding from RFC6868
* Added newly added properties
* Changes from RFC6868 extension
* Added tests for newly added properties
* Improve validation
* Add targetProp property to LevelParameter instances
* Added tests for newly added parameters
* Fix
* Bug fix
* Added properties from RFC6715 extension
* Bug fix
* Added parameters from RFC6715 extensions
* Updated documentation
* Added tests for CCParameter
* Spelling fix and rename
* Added tests for ContactURIProperty
* Added CcParameter to accepted parameters for AdrProperty
* Added parameter from RFC8605 extension
* Added property from RFC8605 extension
* Added documentation for newly added properties
* Added tests for newly added properties
* Included added properties in validation
* Added properties from RFC6474 extension

# 2.1.2

* Improved parsing for content lines with backslashes
* Removed unnecessary lines of code
* Removed case declarations
* Switched let for const
* Removed unneccessary lines of code

# 2.1.1

* Minimum node version

# 2.1.1

* Added specification for minimum node version

# 2.1.0

* Strip group from grouped properties
* Modified README.md
* Added tests for ensuring correct parsing
* Parse multiple contacts
* Merge pull request #6 from MarcelWaldvogel/unfolding-htab

# 2.0.4

* Bug fix
* Unfolding accepting HTAB

# 2.0.3

* Changed package description
* Bug fix
* Removed unused variables
* Removed unused variables
* Removed unused variables
* Moved reused number to variable

# 2.0.2

* Removed unused variables
* Removed unused variable and stopped using Object.prototype builtins directly
* Removed unused variables
* Removed unused variables

# 2.0.1

* Removed some mistakes in README

# 2.0.0

* Added information to documentation
* Updated README to reflect changes to MediatypeParameter
* Changed MediatypeParameter values
* Updated README.md
* Changed SortAsParameter value type
* Changed CalscaleParameter value type
* Updated README to reflect changes to TypeParameter
* Changed TypeParameter value types

# 1.1.2

* Revert "Merge pull request #2 from MarcelWaldvogel/types"

# 1.1.2

* Revert "Merge pull request #2 from MarcelWaldvogel/types"

# 1.1.1

* Fixed bug introduced by merged pull request

# 1.1.0

* Merge pull request #2 from MarcelWaldvogel/types

# 1.0.0

* Modified README.md
* Modified README.md
* Rewrote parser
* Manual parse type improvements
* Package *.d.ts files as well
* Provide basic TypeScript types

# 0.2.1

* Modified README.md

# 0.2.0

* Added documentation for parse
* Added tests for parse
* Added parse.js

# 0.1.1

* Clarified code
* Modified package.json
* Modified README.md
* Added tests for VCARD class
* Modified README.md
* Finished documentation
* Bug fix
* Enforced some rules...
* Added tests for explanatory, security, calendar and extended properties
* Modified package.json
* Modified README.md
* Added documentation for organizational properties
* Added tests for organizational properties
* Enforced some rules...
* Added documentation for addressing, communications and geographical properties
* Added tests for addressing, communications and geographical properties
* Enforced some rules...
* Modified XMLProperty test to take into account line folding
* Added line folding
* Changed CRLF variable to const
* Modified README.md
* Added documentation for identification properties
* Added tests for identification properties
* Added check to ensure DateTimeType is of type dateandortime for BdayProperty value
* Added TextListType to accepted value types for SpecialValueType for NProperty
* Added tests for custom errors
* Modified README.md
* Added tests for general properties
* Added documentation for general properties
* Modified social preview picture
* Added intro to properties documentation
* Modified social preview picture
* Modified README.md
* Updated main example
* Modified README.md
* Modified README.md
* Added documentation for parameters
* Modified code for some parameters
* Added tests for parameters
* Removed unneeded intermediate variable
* Changed main to index.cjs
* Added .npmignore
* Modified README.md
* Added support for commonjs require
* Added social preview image
* Modified README.md
* Added to main example
* Modified README.md
* Added Table of contents to documentation section
* Modified README.md
* Corrected links
* Corrected links
* Modified README.md
* Added documentation for all values
* Changed code for FloatType and SpecialValueType
* Disabled UTC-OFFSET values of DateTimeType from being able to have lists
* Added more list types
* Modified README.md
* Added documentation for TextType, URIType and DateTimeType
* Changed spacing of code to improve readability
* Added tests for values
* Added README.md
* Added .gitignore and test script
* Changed repr method
* Installed mocha and chai for testing
* Added AUTHOR.md
* Added ISC license
* Initialised npm project
* Added index.js as gateway to lib
* Rearrangements...
* Added VCARD object
* Code optimisation
* Removed files that are no longer needed
* Rearrangements...
* Made cardinality a static property
* New properties
* Code cleanup
* Variable name change
* Added security properties
* Added explanatory properties
* Added Clientpidmap values to SpecialValueType and removed comments
* Added new properties, plus other modifications
* Made TypeParameter more strict
* Made SpecialValueType more strict
* Added geographical properties
* Changes to DateTimeType
* Added new properties
* Added new Parameter, plus other changes
* Added array value for AdrProperty in SpecialValueType
* Added identification properties
* New ValueTypes
* Created properties.js
* Added SpecialValueType to accepted types for ValueParameter
* Bug fix
* New value type
* Added abstract base classes, plus new value type
* Added custom errors, added new param type
* Added parameters.js with classes for VCF property parameters
* Included colons in characters to be escaped in values
* Rewrote regular expressions
* Made sure all value type values return strings
* Fixed another typo
* Fixed typo
* Added validation checks for type date
* Bug fix, plus other changes...
* Added type module to package.json
* Switched to ES6 import/export, plus other changes.
* Moved values.js to src/VCF
* Initialized new npm project & added values.js
* Added example vCard with multiple contacts
* Created examples folder and added 2 vcard examples
* Merge branch 'main' of https://github.com/kelseykm/CSV-VCF-Project
* Added the actual readMe for VCF file from github
* Added actual VCF specification file
* Updated VCF spec to 4.3
* Added specs for VCF & CSV
