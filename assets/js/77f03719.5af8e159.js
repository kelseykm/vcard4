"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[3682],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||l[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},986:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"TzParameter",sidebar_position:12,hide_title:!0},c="TzParameter",m={unversionedId:"documentation/parameters/tzparameter",id:"documentation/parameters/tzparameter",title:"TzParameter",description:'* This class represents the "TZ" parameter',source:"@site/docs/documentation/parameters/tzparameter.md",sourceDirName:"documentation/parameters",slug:"/documentation/parameters/tzparameter",permalink:"/documentation/parameters/tzparameter",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"TzParameter",sidebar_position:12,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"GeoParameter",permalink:"/documentation/parameters/geoparameter"},next:{title:"AnyParameter",permalink:"/documentation/parameters/anyparameter"}},u=[],l={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tzparameter"},(0,o.kt)("inlineCode",{parentName:"h1"},"TzParameter")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'This class represents the "TZ" parameter')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"TzParameter")," should be called with a single argument that is an instance of ",(0,o.kt)("a",{parentName:"p",href:"/documentation/values/uritype"},(0,o.kt)("inlineCode",{parentName:"a"},"URIType")),", or ",(0,o.kt)("a",{parentName:"p",href:"/documentation/values/texttype-and-textlisttype"},(0,o.kt)("inlineCode",{parentName:"a"},"TextType")),", or ",(0,o.kt)("a",{parentName:"p",href:"/documentation/values/datetimetype"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTimeType"))," with the type ",(0,o.kt)("inlineCode",{parentName:"p"},"utc-offset")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new TzParameter(\n  new TextType('Raleigh/North America')\n);\n\nnew TzParameter(\n  new DateTimeType('-0500', 'utcoffset')\n);\n")))))}s.isMDXComponent=!0}}]);