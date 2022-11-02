"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[4579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const i={title:"DateTimeListType",sidebar_position:5,hide_title:!0},o="DateTimeListType",p={unversionedId:"documentation/values/datetimelisttype",id:"documentation/values/datetimelisttype",title:"DateTimeListType",description:'- This class represents the "date-list", "time-list", "date-time-list",',source:"@site/docs/documentation/values/datetimelisttype.md",sourceDirName:"documentation/values",slug:"/documentation/values/datetimelisttype",permalink:"/vcard4/documentation/values/datetimelisttype",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"DateTimeListType",sidebar_position:5,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"DateTimeType",permalink:"/vcard4/documentation/values/datetimetype"},next:{title:"BooleanType",permalink:"/vcard4/documentation/values/booleantype"}},l={},s=[],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datetimelisttype"},(0,r.kt)("inlineCode",{parentName:"h1"},"DateTimeListType")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'This class represents the "date-list", "time-list", "date-time-list",\n"date-and-or-time-list" and "timestamp-list" data types')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeListType")," should be called with a single argument that is an array\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeType")," instances of the same type"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'new DateTimeListType([\n  new DateTimeType("1985-04", "date"),\n  new DateTimeType("---12", "date"),\n]);\n\nnew DateTimeListType([\n  new DateTimeType("19961022T140000-0500", "timestamp"),\n  new DateTimeType("19961022T140000+01", "timestamp"),\n]);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following will throw an error, since the ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeType")," instances in the\narray are not of the same type"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'new DateTimeListType([\n  new DateTimeType("---22T14", "datetime"),\n  new DateTimeType("---12", "dateandortime"),\n]);\n\n// TypeError: Invalid type for value of DateTimeListType. It should be an\n// array of DateTimeTypes of the same type\n')))))}c.isMDXComponent=!0}}]);