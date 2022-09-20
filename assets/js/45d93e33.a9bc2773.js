"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[53995],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){return function(t){var n=c(t.components);return a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return n?a.createElement(m,d(d({ref:t},l),{},{components:n})):a.createElement(m,d({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(39960),r=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var s=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return o.createElement(d,null,o.createElement(l,null),o.createElement(s,null),o.createElement(u,null))},p=function(){return o.createElement(d,null,o.createElement(s,null),o.createElement(u,null))};const f=function(){return(0,r.fbContent)({internal:o.createElement(c,null),external:o.createElement(p,null)})}},56383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=(n(68629),n(44256)),d=["components"],s={id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]},l=void 0,u={unversionedId:"guided-tour/updating-data/typesafe-updaters-faq",id:"version-v14.0.0/guided-tour/updating-data/typesafe-updaters-faq",title:"Typesafe updaters FAQ",description:"Typesafe updater FAQ",source:"@site/versioned_docs/version-v14.0.0/guided-tour/updating-data/typesafe-updaters-faq.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",permalink:"/docs/guided-tour/updating-data/typesafe-updaters-faq/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/updating-data/typesafe-updaters-faq.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1663690556,formattedLastUpdatedAt:"9/20/2022",frontMatter:{id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]}},c={},p=[{value:"What is typesafe updaters?",id:"what-is-typesafe-updaters",level:2},{value:"Why?",id:"why",level:2},{value:"What was wrong with the existing APIs?",id:"what-was-wrong-with-the-existing-apis",level:2},{value:"How does a developer use typesafe updaters?",id:"how-does-a-developer-use-typesafe-updaters",level:2},{value:"Why are these labeled <code>_EXPERIMENTAL</code>?",id:"why-are-these-labeled-_experimental",level:2},{value:"What is an updatable query or fragment?",id:"what-is-an-updatable-query-or-fragment",level:2},{value:"Are fields selected in updatable queries and fragments fetched from the server?",id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server",level:2},{value:"What if I want to fetch a field and also mutate it?",id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it",level:2},{value:"What are some consequences of this?",id:"what-are-some-consequences-of-this",level:2},{value:"Where do I get a <code>store</code>?",id:"where-do-i-get-a-store",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Because in TypeScript, ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/43662"},"getters and setters cannot have different types"),", and the generated types of getters and setters is not the same, ",(0,o.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," is currently unusable with TypeScript. ",(0,o.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment_EXPERIMENTAL")," is usable, as long as the updatable fragment contains only scalar fields.")))),(0,o.mdx)("h1",{id:"typesafe-updaters-faq"},"Typesafe Updaters FAQ"),(0,o.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Is something missing from this Q&A? Are you confused? Would you like help adopting these APIs? Please, reach out to ",(0,o.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/profile.php?id=100042823931887"},"Robert Balicki"),". I am happy to help!")))),(0,o.mdx)("h1",{id:"general"},"General"),(0,o.mdx)("h2",{id:"what-is-typesafe-updaters"},"What is typesafe updaters?"),(0,o.mdx)("p",null,"Typesafe updaters is the name given to a project to provide a typesafe and ergonomic alternative to the existing APIs for imperatively updating data in the Relay store."),(0,o.mdx)("h2",{id:"why"},"Why?"),(0,o.mdx)("p",null,"Relay provides typesafe and ergonomic APIs for fetching and managing data that originates on the server. In addition, Relay provides the ability to define local-only fields in ",(0,o.mdx)("strong",{parentName:"p"},"client schema extensions"),". However, the APIs for mutating the data in these fields has hitherto been verbose and not ergonomic, meaning that we could not recommend Relay as a solution for managing local state."),(0,o.mdx)("h2",{id:"what-was-wrong-with-the-existing-apis"},"What was wrong with the existing APIs?"),(0,o.mdx)("p",null,"The pre-existing APIs are verbose and not typesafe. They make it easy to make a variety of mistakes and require that the developer understand a new set of APIs only when writing updaters."),(0,o.mdx)("p",null,"Typesafe updaters is a set of APIs that are typesafe and (hopefully) more ergonomic. They leverage well-known Relay idioms (queries, fragments, type refinement) and use getters and setters instead of requiring that the developer learn about a set of methods that are unused elsewhere."),(0,o.mdx)("h2",{id:"how-does-a-developer-use-typesafe-updaters"},"How does a developer use typesafe updaters?"),(0,o.mdx)("p",null,"With typesafe updaters, a developers writes an updatable query or a fragment that specifies the data to imperatively update. Then, the developer reads out that data from the store, returning a so-called ",(0,o.mdx)("strong",{parentName:"p"},"updatable proxy"),". Then, the developer mutates that updatable proxy. Mutating that updatable proxy using setters (e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},'updatableData.name = "Godzilla"'),") results in calls to the old API, but with added type safety."),(0,o.mdx)("h2",{id:"why-are-these-labeled-_experimental"},"Why are these labeled ",(0,o.mdx)("inlineCode",{parentName:"h2"},"_EXPERIMENTAL"),"?"),(0,o.mdx)("p",null,"These are de facto not experimental. We encourage you to use them when writing new code! This suffix will be removed soon."),(0,o.mdx)("h2",{id:"what-is-an-updatable-query-or-fragment"},"What is an updatable query or fragment?"),(0,o.mdx)("p",null,"An updatable query or fragment is a query or fragment that has the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@updatable")," directive."),(0,o.mdx)("h1",{id:"updatable-queries-and-fragments-are-not-fetched"},"Updatable queries and fragments are not fetched"),(0,o.mdx)("h2",{id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server"},"Are fields selected in updatable queries and fragments fetched from the server?"),(0,o.mdx)("p",null,"No! The server doesn't know about updatable queries and fragments. Their fields are never fetched."),(0,o.mdx)("p",null,"Even if you spread an updatable fragment in a regular query or fragment, the fields selected by that updatable fragment are not fetched as part of that request."),(0,o.mdx)("h2",{id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it"},"What if I want to fetch a field and also mutate it?"),(0,o.mdx)("p",null,"You should select that field in both a regular query/fragment ",(0,o.mdx)("strong",{parentName:"p"},"and")," in an updatable query/fragment."),(0,o.mdx)("h2",{id:"what-are-some-consequences-of-this"},"What are some consequences of this?"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"When you read out updatable data, it can be missing if it isn't present in the store."),(0,o.mdx)("li",{parentName:"ul"},"You cannot spread regular fragments in updatable queries/fragments."),(0,o.mdx)("li",{parentName:"ul"},"The generated artifact for updatable queries/fragments does not contain a query ID and does not contain a normalization AST (which is used for writing network data to the store.)"),(0,o.mdx)("li",{parentName:"ul"},"Directives like ",(0,o.mdx)("inlineCode",{parentName:"li"},"@defer"),", etc. do not make sense in this context, and are disallowed.")),(0,o.mdx)("h1",{id:"misc"},"Misc"),(0,o.mdx)("h2",{id:"where-do-i-get-a-store"},"Where do I get a ",(0,o.mdx)("inlineCode",{parentName:"h2"},"store"),"?"),(0,o.mdx)("p",null,"The classes ",(0,o.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceSelectorProxy")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceProxy")," contain the methods ",(0,o.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment_EXPERIMENTAL"),". One can acquire an instance of these classes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In updaters of mutations and subscriptions"),(0,o.mdx)("li",{parentName:"ul"},"In optimistic updaters of mutations"),(0,o.mdx)("li",{parentName:"ul"},"When using ",(0,o.mdx)("inlineCode",{parentName:"li"},"RelayModernEnvironment"),"'s ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitUpdate"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"applyUpdate"),", etc. methods."),(0,o.mdx)("li",{parentName:"ul"},"When using the standalone ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," method.")))}m.isMDXComponent=!0},47596:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function d(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(11737);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function d(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,r=0;const o={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=r++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},d="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,d),n}))}},24855:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function d(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const r=n(11737);t.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(a){}}))}},44256:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=o(n(47596)),t.uidocs=o(n(17483)),t.feedback=o(n(24855)),t.inpageeditor=o(n(27312));const i=["internal","external"];function d(e){return l(e),u()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function c(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=d,t.fbInternalOnly=function(e){return d({internal:e})},t.validateFbContentArgs=l,t.isInternal=u,t.hasEphemeralDiffNumber=function(){return Boolean(c())},t.getEphemeralDiffNumber=c,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}},27312:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function d(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const r=n(11737);t.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:a,diff_number:o}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:a,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function d(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,d)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const r=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:a}})}))}}}]);