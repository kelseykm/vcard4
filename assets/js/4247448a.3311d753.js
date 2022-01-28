"use strict";(self.webpackChunkvcard_4_docs=self.webpackChunkvcard_4_docs||[]).push([[7430],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<i;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],o={title:"PIDParameter",sidebar_position:6,hide_title:!0},l="PIDParameter",m={unversionedId:"documentation/parameters/pidparameter",id:"documentation/parameters/pidparameter",title:"PIDParameter",description:'* This class represents the "PID" parameter',source:"@site/docs/documentation/parameters/pidparameter.md",sourceDirName:"documentation/parameters",slug:"/documentation/parameters/pidparameter",permalink:"/documentation/parameters/pidparameter",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"PIDParameter",sidebar_position:6,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"AltidParameter",permalink:"/documentation/parameters/altidparameter"},next:{title:"TypeParameter",permalink:"/documentation/parameters/typeparameter"}},s=[],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pidparameter"},(0,i.kt)("inlineCode",{parentName:"h1"},"PIDParameter")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'This class represents the "PID" parameter')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'According to the RFC, its value is either a single small positive integer or a pair of small positive integers separated by a dot. Multiple values may be encoded in a single PID parameter by separating the values with a comma ","')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"PIDParameter")," should be called with a single argument that is either:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"an instance of ",(0,i.kt)("a",{parentName:"p",href:"/documentation/values/integertype-and-integerlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerType"))),(0,i.kt)("p",{parentName:"li"},"If you intend the value to be a single small positive integer"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pid = new PIDParameter(\n  new IntegerType(3)\n);\n\n// calling repr\npid.repr();\n// PID=3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"an array of instances of ",(0,i.kt)("a",{parentName:"p",href:"/documentation/values/integertype-and-integerlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerType"))),(0,i.kt)("p",{parentName:"li"},"If you intend to have multiple values encoded in the parameter and separated by a comma"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pid = new PIDParameter([\n  new IntegerType(3),\n  new IntegerType(7),\n]);\n\n// calling repr\npid.repr();\n// PID=3,7\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a nested array of instances of ",(0,i.kt)("a",{parentName:"p",href:"/documentation/values/integertype-and-integerlisttype"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerType"))),(0,i.kt)("p",{parentName:"li"},"If you intend to have the value be a pair of small positive integers separated by a dot"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pid = new PIDParameter([\n  [\n    new IntegerType(1),\n    new IntegerType(5)\n  ]\n]);\n\n// calling repr\npid.repr();\n// PID=1.5\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You may also combine the last two, as below"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pid = new PIDParameter([\n  [\n    new IntegerType(1),\n    new IntegerType(7),\n  ],\n  new IntegerType(23),\n  new IntegerType(24)\n]);\n\n// calling repr\npid.repr();\n// PID=1.7,23,24\n")))))}u.isMDXComponent=!0}}]);