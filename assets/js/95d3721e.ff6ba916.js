"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[9074],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,N=d["".concat(l,".").concat(c)]||d[c]||u[c]||p;return a?r.createElement(N,i(i({ref:t},m),{},{components:a})):r.createElement(N,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7191:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var r=a(7462),n=a(3366),p=(a(7294),a(3905)),i=["components"],o={title:"parse",hide_title:!0,sidebar_position:7},l="``parse``",s={unversionedId:"documentation/parse",id:"documentation/parse",title:"parse",description:"* This function is for parsing version 4.0 vCards.",source:"@site/docs/documentation/parse.md",sourceDirName:"documentation",slug:"/documentation/parse",permalink:"/documentation/parse",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"parse",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"VCARD",permalink:"/documentation/vcard"}},m=[{value:"API",id:"api",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Properties and getters on returned object",id:"properties-and-getters-on-returned-object",children:[],level:2},{value:"Methods in the returned object",id:"methods-in-the-returned-object",children:[],level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"parse"},(0,p.kt)("inlineCode",{parentName:"h1"},"parse")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"This function is for parsing version 4.0 vCards.")),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parse")," is provided as a named export from the main ",(0,p.kt)("strong",{parentName:"p"},"vcard4")," module."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=ESM",title:"ESM"},"import { parse } from 'vcard4';\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=commonjs",title:"commonjs"},"const { parse } = require('vcard4');\n")))),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"As already mentioned ",(0,p.kt)("inlineCode",{parentName:"p"},"parse")," is a function, and it's for parsing vCards.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"It returns an object containing the parsed vCard or ",(0,p.kt)("strong",{parentName:"p"},"an array containing the parsed vCards if the vCard passed contained multiple contacts (vCards) within"),"."),(0,p.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"The array's items would each be the object described below.")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parse")," should be called with a single argument of type string, that is a properly formatted version 4.0 vCard."),(0,p.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"The following example assumes the vCard is on disk, and ",(0,p.kt)("inlineCode",{parentName:"p"},"fs")," from node's API is used to read it."))),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import fs from 'fs';\n\nconst contact = await fs.promises.readFile('simon_perreault.vcf').then(\n  contact => contact.toString()\n);\n\nconst parsedContact = parse(contact);\n")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='Object returned by parse'",title:"'Object",returned:!0,by:!0,"parse'":!0},'{\n  parsedVcard: [\n    { group: null, property: "FN", parameters: {}, value: "Simon Perreault" },\n    {\n      group: null,\n      property: "N",\n      parameters: {},\n      value: {\n        familyNames: "Perreault",\n        givenNames: "Simon",\n        additionalNames: "",\n        honorificPrefixes: "",\n        honorificSuffixes: [Array]\n      }\n    },\n    { group: null, property: "BDAY", parameters: {}, value: "--0203" },\n    {\n      group: null,\n      property: "ANNIVERSARY",\n      parameters: {},\n      value: "20090808T1430-0500"\n    },\n    { group: null, property: "GENDER", parameters: {}, value: { sex: "M", gender: "" } },\n    { group: null, property: "LANG", parameters: { PREF: "1" }, value: "fr" },\n    { group: null, property: "LANG", parameters: { PREF: "2" }, value: "en" },\n    { group: null, property: "ORG", parameters: { TYPE: "work" }, value: "Viagenie" },\n    {\n      group: null,\n      property: "ADR",\n      parameters: { TYPE: "work" },\n      value: {\n        postOfficeBox: "",\n        extendedAddress: "Suite D2-630",\n        streetAddress: "2875 Laurier",\n        locality: "Quebec",\n        region: "QC",\n        postalCode: "G1V 2M2",\n        countryName: "Canada"\n      }\n    },\n    {\n      group: null,\n      property: "TEL",\n      parameters: { VALUE: "uri", TYPE: [Array], PREF: "1" },\n      value: "tel:+1-418-656-9254;ext=102"\n    },\n    {\n      group: null,\n      property: "TEL",\n      parameters: { VALUE: "uri", TYPE: [Array] },\n      value: "tel:+1-418-262-6501"\n    },\n    {\n      group: null,\n      property: "EMAIL",\n      parameters: { TYPE: "work" },\n      value: "simon.perreault@viagenie.ca"\n    },\n    {\n      group: null,\n      property: "GEO",\n      parameters: { TYPE: "work" },\n      value: "geo:46.772673,-71.282945"\n    },\n    {\n      group: null,\n      property: "KEY",\n      parameters: { TYPE: "work" },\n      value: "http://www.viagenie.ca/simon.perreault/simon.asc"\n    },\n    { group: null, property: "TZ", parameters: {}, value: "-0500" },\n    {\n      group: null,\n      property: "URL",\n      parameters: { TYPE: "home" },\n      value: "http://nomis80.org"\n    }\n  ],\n  properties: [Getter],\n  propertiesWithoutParameters: [Getter],\n  propertiesWithParameters: [Getter],\n  groups: [Getter],\n  getGroup: [Function: getGroup],\n  repeatingProperties: [Getter]\n}\n')))),(0,p.kt)("h2",{id:"properties-and-getters-on-returned-object"},"Properties and getters on returned object"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"parsedVcard"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This is an array containing the parsed content lines of the vCard.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The parsed content lines in the array are objects with the following keys:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},'[\n  ...,\n  {\n    group: null,\n    property: "URL",\n    parameters: { TYPE: "home" },\n    value: "http://nomis80.org"\n  },\n  ...\n]\n')),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"group")),(0,p.kt)("p",{parentName:"li"},"Its value is either ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," or a string with the name the group of the property."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"{\n  group: null,\n  ...\n}\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"property")),(0,p.kt)("p",{parentName:"li"},"A string containing the property name."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...,\n  property: "URL",\n  ...\n}\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parameters")),(0,p.kt)("p",{parentName:"li"},"An object whose keys are the parameters of the property and the values are the parameter values. The values may be strings or arrays of strings if the particular parameter had multiple values."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...,\n  parameters: { TYPE: "home" },\n  ...\n}\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"value")),(0,p.kt)("p",{parentName:"li"},"This may take three forms:"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"For most properties, a string containing the value of the property."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},'{\n  ...,\n  value: "http://nomis80.org"\n}\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"For properties with multiple values, an array of strings."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"{\n  ...,\n  value: [ 'Example.com Inc.', 'Second Example, Inc.' ]\n}\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"For properties whose values are structured, such as ",(0,p.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"ADR")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"GENDER"),", the value is an object whose keys are the names of each of the structured components, and the values are strings or string arrays."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='value for N property'",title:"'value",for:!0,N:!0,"property'":!0},'{\n  ...,\n  value: {\n    familyNames: "Perreault",\n    givenNames: "Simon",\n    additionalNames: "",\n    honorificPrefixes: "",\n    honorificSuffixes: ["ing.", "jr."]\n  }\n}\n')),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='value for ADR property'",title:"'value",for:!0,ADR:!0,"property'":!0},'{\n  ...,\n  value: {\n    postOfficeBox: "",\n    extendedAddress: "Suite D2-630",\n    streetAddress: "2875 Laurier",\n    locality: "Quebec",\n    region: "QC",\n    postalCode: "G1V 2M2",\n    countryName: "Canada"\n  }\n}\n')),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='value for GENDER property'",title:"'value",for:!0,GENDER:!0,"property'":!0},'{ \n  ...,\n  value: { sex: "M", gender: "" } \n}\n')))))))),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"properties"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This getter returns a string array with the names of all properties in the parsed vCard."),(0,p.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"The names are not repeated if a property is repeated"))),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedContact.properties\n[\n  'FN',     'N',\n  'BDAY',   'ANNIVERSARY',\n  'GENDER', 'LANG',\n  'ORG',    'ADR',\n  'TEL',    'EMAIL',\n  'GEO',    'KEY',\n  'TZ',     'URL'\n]\n")))),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"propertiesWithParameters"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This getter returns a string array with the names of all properties in the parsedVcard that have parameters."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedContact.propertiesWithParameters\n[\n  'LANG',  'ORG',\n  'ADR',   'TEL',\n  'EMAIL', 'GEO',\n  'KEY',   'URL'\n]\n")))),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"propertiesWithoutParameters"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This getter returns a string array with the names of all properties in the parsedVcard that do not have parameters."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedContact.propertiesWithoutParameters\n[ 'FN', 'N', 'BDAY', 'ANNIVERSARY', 'GENDER', 'TZ' ]\n")))),(0,p.kt)("ol",{start:5},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"groups"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This getter returns a string array with the names of all property groups in the parsedVcard. If there are none, it returns an empty array."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedContact2.groups\n[ 'MILKY' ]\n")))),(0,p.kt)("ol",{start:6},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"repeatingProperties"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This getter returns an object whose keys are the names of the properties and the values are the number of times they appear in the parsedVcard.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"If there are no repeating properties, an empty object is returned"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedContact.repeatingProperties\n{ LANG: 2, TEL: 2 }\n")))),(0,p.kt)("h2",{id:"methods-in-the-returned-object"},"Methods in the returned object"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"getGroup"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"This method should be called with a single argument of type string that is the name of a property group in the vCard.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"It returns an array of parsed objects of all the properties in the group.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"If there are no properties with the group, an empty array is returned."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"> parsedVcard.getGroup('STORY');\n[\n  {\n    group: 'STORY',\n    property: 'TITLE',\n    parameters: {},\n    value: 'Imaginary test person'\n  },\n  {\n    group: 'STORY',\n    property: 'NOTE',\n    parameters: {},\n    value: 'John Doe has a long and varied history, being documented on more police files than anyone else. Reports of his death are alas numerous.'\n  }\n]\n")))))}d.isMDXComponent=!0}}]);