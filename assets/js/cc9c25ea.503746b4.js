"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[1218],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,N=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(N,l(l({ref:t},s),{},{components:a})):n.createElement(N,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2972:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1,title:"Introduction",hide_title:!0},p="Property Value Data Types",m={unversionedId:"documentation/values/intro",id:"documentation/values/intro",title:"Introduction",description:"* According to the RFC, the standard value data types are:",source:"@site/docs/documentation/values/intro.md",sourceDirName:"documentation/values",slug:"/documentation/values/intro",permalink:"/vcard4/documentation/values/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/vcard4/"},next:{title:"TextType and TextListType",permalink:"/vcard4/documentation/values/texttype-and-textlisttype"}},s=[{value:"API",id:"api",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],d={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"property-value-data-types"},"Property Value Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"According to the RFC, the standard value data types are:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"text"),(0,i.kt)("li",{parentName:"ol"},"text-list"),(0,i.kt)("li",{parentName:"ol"},"date"),(0,i.kt)("li",{parentName:"ol"},"date-list"),(0,i.kt)("li",{parentName:"ol"},"time"),(0,i.kt)("li",{parentName:"ol"},"time-list"),(0,i.kt)("li",{parentName:"ol"},"date-time"),(0,i.kt)("li",{parentName:"ol"},"date-time-list"),(0,i.kt)("li",{parentName:"ol"},"date-and-or-time"),(0,i.kt)("li",{parentName:"ol"},"date-and-or-time-list"),(0,i.kt)("li",{parentName:"ol"},"timestamp"),(0,i.kt)("li",{parentName:"ol"},"timestamp-list"),(0,i.kt)("li",{parentName:"ol"},"boolean"),(0,i.kt)("li",{parentName:"ol"},"integer"),(0,i.kt)("li",{parentName:"ol"},"integer-list"),(0,i.kt)("li",{parentName:"ol"},"float"),(0,i.kt)("li",{parentName:"ol"},"float-list"),(0,i.kt)("li",{parentName:"ol"},"URI"),(0,i.kt)("li",{parentName:"ol"},"utc-offset"),(0,i.kt)("li",{parentName:"ol"},"Language-Tag"),(0,i.kt)("li",{parentName:"ol"},"iana-valuespec"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the library, these are represented by the following classes:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"texttype-and-textlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"TextType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"texttype-and-textlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"TextListType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"datetimetype"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTimeType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"datetimelisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTimeListType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"booleantype"},(0,i.kt)("inlineCode",{parentName:"a"},"BooleanType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"integertype-and-integerlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"integertype-and-integerlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerListType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"floattype-and-floatlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"FloatType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"floattype-and-floatlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"FloatListType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"languagetagtype"},(0,i.kt)("inlineCode",{parentName:"a"}," LanguageTagType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"uritype"},(0,i.kt)("inlineCode",{parentName:"a"}," URIType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"sextype"},(0,i.kt)("inlineCode",{parentName:"a"}," SexType"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"specialvaluetype"},(0,i.kt)("inlineCode",{parentName:"a"}," SpecialValueType"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The instance object is frozen and therefore its properties and methods cannot be modified after construction, neither can new ones be added."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The actual value type depends on property name and VALUE parameter. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FN")," property only accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," values."))))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All the classes listed above are provided as named exports from the main ",(0,i.kt)("strong",{parentName:"p"},"vcard4")," module. For example, to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"BooleanType")," class:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=ESM",title:"ESM"},"import { BooleanType } from 'vcard4';\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=commonjs",title:"commonjs"},"const { BooleanType } = require('vcard4');\n")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The instance objects have the following methods:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"repr")),(0,i.kt)("p",{parentName:"li"},"This method returns a string which is the representation of how the value type will finally appear in the vCard."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"'>' in the examples below is just the terminal prompt."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> const textValue = new TextType('Hello, world');\n\n> textValue.repr();\n'Hello\\\\, world'\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reprXML")),(0,i.kt)("p",{parentName:"li"},"This method returns a string which is the representation of how the value type will finally appear in the XML vCard."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> const textValue = new TextType('Hello, world');\n\n> textValue.reprXML();\n'<text>Hello, world</text>'\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reprJSON")," "),(0,i.kt)("p",{parentName:"li"},"This method returns a string which is the representation of how the value type will finally appear in the jCard."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> const textValue = new TextType('Hello, world');\n\n> textValue.reprJSON();\n[ 'text', 'Hello, world' ]\n")))))))}c.isMDXComponent=!0}}]);