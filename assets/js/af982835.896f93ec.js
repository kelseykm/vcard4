"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[5901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));const o={title:"SortAsParameter",sidebar_position:10,hide_title:!0},i="SortAsParameter",p={unversionedId:"documentation/parameters/sortasparameter",id:"documentation/parameters/sortasparameter",title:"SortAsParameter",description:'* This class represents the "SORT-AS" parameter',source:"@site/docs/documentation/parameters/sortasparameter.md",sourceDirName:"documentation/parameters",slug:"/documentation/parameters/sortasparameter",permalink:"/vcard4/documentation/parameters/sortasparameter",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SortAsParameter",sidebar_position:10,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"CalscaleParameter",permalink:"/vcard4/documentation/parameters/calscaleparameter"},next:{title:"GeoParameter",permalink:"/vcard4/documentation/parameters/geoparameter"}},s={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sortasparameter"},(0,n.kt)("inlineCode",{parentName:"h1"},"SortAsParameter")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'This class represents the "SORT-AS" parameter')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"SortAsParameter")," should be called with a single argument that is an instance of ",(0,n.kt)("a",{parentName:"p",href:"/documentation/values/texttype-and-textlisttype"},(0,n.kt)("inlineCode",{parentName:"a"},"TextType"))," or ",(0,n.kt)("a",{parentName:"p",href:"/documentation/values/texttype-and-textlisttype"},(0,n.kt)("inlineCode",{parentName:"a"},"TextListType"))," if you wish to specify multiple values, an array of string items"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"new SortAsParameter(\n  new TextListType([\n    new TextType('Harten'),\n    new TextType('Rene' )\n  ])\n);\n\nnew SortAsParameter(\n  new TextType('Pau Shou Chang')\n);\n")))))}m.isMDXComponent=!0}}]);