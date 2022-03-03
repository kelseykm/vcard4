"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[7584],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(y,p(p({ref:t},l),{},{components:r})):n.createElement(y,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5575:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),p=["components"],i={title:"UIDProperty",hide_title:!0,sidebar_position:38},u="UIDProperty",c={unversionedId:"documentation/properties/uidproperty",id:"documentation/properties/uidproperty",title:"UIDProperty",description:'* This class represents the "UID" property',source:"@site/docs/documentation/properties/uidproperty.md",sourceDirName:"documentation/properties",slug:"/documentation/properties/uidproperty",permalink:"/vcard4/documentation/properties/uidproperty",tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"UIDProperty",hide_title:!0,sidebar_position:38},sidebar:"tutorialSidebar",previous:{title:"SoundProperty",permalink:"/vcard4/documentation/properties/soundproperty"},next:{title:"ClientpidmapProperty",permalink:"/vcard4/documentation/properties/clientpidmapproperty"}},l={},s=[],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uidproperty"},(0,o.kt)("inlineCode",{parentName:"h1"},"UIDProperty")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'This class represents the "UID" property')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This class should be called with two arguments, the first an array of the parameters, and the second the value of the property")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The only acceptable parameters of ",(0,o.kt)("inlineCode",{parentName:"p"},"UIDProperty")," are ",(0,o.kt)("a",{parentName:"p",href:"/documentation/parameters/valueparameter"},(0,o.kt)("inlineCode",{parentName:"a"},"ValueParameter"))," and ",(0,o.kt)("a",{parentName:"p",href:"/documentation/parameters/anyparameter"},(0,o.kt)("inlineCode",{parentName:"a"},"AnyParameter")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you do not wish that the property have any parameters, leave the first argument array empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"UIDProperty")," should be of type ",(0,o.kt)("a",{parentName:"p",href:"/documentation/values/uritype"},(0,o.kt)("inlineCode",{parentName:"a"},"URIType"))," or ",(0,o.kt)("a",{parentName:"p",href:"/documentation/values/texttype-and-textlisttype"},(0,o.kt)("inlineCode",{parentName:"a"},"TextType"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new UIDProperty(\n  [],\n  new URIType('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')\n);\n")))}d.isMDXComponent=!0}}]);