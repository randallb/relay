(self.webpackChunk=self.webpackChunk||[]).push([[99996,36675],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>l});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(t),p=a,m=l["".concat(o,".").concat(p)]||l[p]||h[p]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var r=t(79973),a=t(67294),i=t(73727),o=t(52263),s=t(13919),d=t(10412),u=(0,a.createContext)({collectLink:function(){}}),l=t(44996),c=t(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const h=function(e){var n,t,h=e.isNavLink,m=e.to,f=e.href,y=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,x=void 0===w||w,b=(0,r.Z)(e,p),N=(0,o.default)().siteConfig,q=N.trailingSlash,C=N.baseUrl,Q=(0,l.useBaseUrlUtils)().withBaseUrl,A=(0,a.useContext)(u),R=m||f,k=(0,s.Z)(R),O=null==R?void 0:R.replace("pathname://",""),L=void 0!==O?(t=O,x&&function(e){return e.startsWith("/")}(t)?Q(t):t):void 0;L&&k&&(L=(0,c.applyTrailingSlash)(L,{trailingSlash:q,baseUrl:C}));var S=(0,a.useRef)(!1),T=h?i.OL:i.rU,P=d.default.canUseIntersectionObserver,E=(0,a.useRef)();(0,a.useEffect)((function(){return!P&&k&&null!=L&&window.docusaurus.prefetch(L),function(){P&&E.current&&E.current.disconnect()}}),[E,L,P,k]);var I=null!==(n=null==L?void 0:L.startsWith("#"))&&void 0!==n&&n,M=!L||!k||I;return L&&k&&!I&&!v&&A.collectLink(L),M?a.createElement("a",Object.assign({href:L},R&&!k&&{target:"_blank",rel:"noopener noreferrer"},b)):a.createElement(T,Object.assign({},b,{onMouseEnter:function(){S.current||null==L||(window.docusaurus.preload(L),S.current=!0)},innerRef:function(e){var n,t;P&&e&&k&&(n=e,t=function(){null!=L&&window.docusaurus.prefetch(L)},E.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.current.unobserve(n),E.current.disconnect(),t())}))})),E.current.observe(n))},to:L||""},h&&{isActive:g,activeClassName:y}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>a})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>o});var r=t(52263),a=t(13919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,d=i.absolute,u=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(s)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+l:l}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>h});var r=t(36742),a=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},l=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(s,null,i.createElement(u,null),i.createElement(d,null),i.createElement(l,null))},p=function(){return i.createElement(s,null,i.createElement(d,null),i.createElement(l,null))};const h=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},86389:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>u,toc:()=>l,default:()=>p});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=["components"],s={},d=void 0,u={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote",isDocsHomePage:!1,title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1652909553,formattedLastUpdatedAt:"5/18/2022",frontMatter:{}},l=[],c={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}p.isMDXComponent=!0},32468:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>h,default:()=>w});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=t(68629),s=t(44256),d=t(86389),u=["components"],l={id:"refetching-queries-with-different-data",title:"Refetching Queries with Different Data",slug:"/guided-tour/refetching/refetching-queries-with-different-data/",description:"Relay guide to refetching queries with different data",keywords:["refetching","query"]},c=void 0,p={unversionedId:"guided-tour/refetching/refetching-queries-with-different-data",id:"version-v12.0.0/guided-tour/refetching/refetching-queries-with-different-data",isDocsHomePage:!1,title:"Refetching Queries with Different Data",description:"Relay guide to refetching queries with different data",source:"@site/versioned_docs/version-v12.0.0/guided-tour/refetching/refetching-queries-with-different-data.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/refetching-queries-with-different-data/",permalink:"/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/refetching/refetching-queries-with-different-data.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1652909553,formattedLastUpdatedAt:"5/18/2022",frontMatter:{id:"refetching-queries-with-different-data",title:"Refetching Queries with Different Data",slug:"/guided-tour/refetching/refetching-queries-with-different-data/",description:"Relay guide to refetching queries with different data",keywords:["refetching","query"]},sidebar:"version-v12.0.0/docs",previous:{title:"Refreshing Queries",permalink:"/docs/v12.0.0/guided-tour/refetching/refreshing-queries/"},next:{title:"Refreshing Fragments",permalink:"/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/"}},h=[{value:"When using <code>useQueryLoader</code> / <code>loadQuery</code>",id:"when-using-usequeryloader--loadquery",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",children:[],level:3}],level:2},{value:"When using <code>useLazyLoadQuery</code>",id:"when-using-uselazyloadquery",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense-1",children:[],level:3}],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},f=m("FbRefetchingQueriesUsingUseQueryLoader"),y=m("FbAvoidSuspenseCaution"),g=m("FbRefetchingQueriesUsingUseLazyLoadQuery"),v={toc:h};function w(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.mdx)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When referring to ",(0,i.mdx)("strong",{parentName:"p"},'"refetching a query"'),", we mean fetching the query again for ",(0,i.mdx)("em",{parentName:"p"},"different")," data than was originally rendered by the query. For example, this might be to change a currently selected item, to render a different list of items than the one being shown, or more generally to transition the currently rendered content to show new or different content."),(0,i.mdx)("h2",{id:"when-using-usequeryloader--loadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useQueryLoader")," / ",(0,i.mdx)("inlineCode",{parentName:"h2"},"loadQuery")),(0,i.mdx)("p",null,"Similarly to ",(0,i.mdx)("a",{parentName:"p",href:"../refreshing-queries/#when-using-usequeryloader--loadquery"},"Refreshing Queries with ",(0,i.mdx)("inlineCode",{parentName:"a"},"useQueryLoader")),", we can also use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," Hook described in our ",(0,i.mdx)("a",{parentName:"p",href:"../../rendering/queries/#fetching-queries-for-render"},"Fetching Queries for Render")," section, but this time passing ",(0,i.mdx)("em",{parentName:"p"},"different query variables"),":"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(f,{mdxType:"FbRefetchingQueriesUsingUseQueryLoader"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const variables = {id: '4'};\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n\n  const refetch = useCallback(() => {\n    // Load the query again using the same original variables.\n    // Calling loadQuery will update the value of queryRef.\n    loadQuery({id: 'different-id'});\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refetch={refetch}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Renders the preloaded query, given the query reference\nfunction MainContent(props) {\n  const {refetch, queryRef} = props;\n  const data = usePreloadedQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    queryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user?.friends?.count}</div>\n      <Button\n        onClick={() => refetch()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We call ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," in the event handler for refetching, so the network request starts immediately, and then pass the ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryRef")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),", so it renders the updated data."),(0,i.mdx)("li",{parentName:"ul"},"We are not passing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery"),", meaning that it will use the default value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-or-network'"),". We could provide a different policy in order to specify whether to use locally cached data (as we covered in ",(0,i.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Render"),")."),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," will re-render the component and may cause ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"). This means that we'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, in order to show a fallback loading state."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(y,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const environment = useRelayEnvironment();\n  const [queryRef, loadQuery] = useQueryLoader<AppQueryType>(\n    AppQuery,\n    props.appQueryRef /* initial query ref */\n  );\n  const [isRefetching, setIsRefetching] = useState(false)\n\n  const refetch = useCallback(() => {\n    if (isRefetching) { return; }\n    setIsRefetching(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefetching(false);\n\n          // *After* the query has been fetched, we call\n          // loadQuery again to re-render with a new\n          // queryRef.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          loadQuery({id: 'different-id'}, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefetching(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefetching={isRefetching}\n        refetch={refetch}\n        queryRef={queryRef}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI inside the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," so that we obtain an updated ",(0,i.mdx)("inlineCode",{parentName:"li"},"queryRef")," that we then pass to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," in order render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," is called, the data for the query should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)("h2",{id:"when-using-uselazyloadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useLazyLoadQuery")),(0,i.mdx)("p",null,"Similarly to ",(0,i.mdx)("a",{parentName:"p",href:"../refreshing-queries/#when-using-uselazyloadquery"},"Refreshing Queries with ",(0,i.mdx)("inlineCode",{parentName:"a"},"useLazyLoadQuery")),", we can also use the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-lazy-load-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useLazyLoadQuery"))," Hook described in our ",(0,i.mdx)("a",{parentName:"p",href:"../../rendering/queries/#lazily-fetching-queries-during-render"},"Lazily Fetching Queries during Render")," section, but this time passing ",(0,i.mdx)("em",{parentName:"p"},"different query variables"),":"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRefetchingQueriesUsingUseLazyLoadQuery"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const [queryArgs, setQueryArgs] = useState({\n    options: {fetchKey: 0},\n    variables: {id: '4'},\n  });\n\n  const refetch = useCallback(() => {\n    // Trigger a re-render of useLazyLoadQuery with new variables,\n    // *and* an updated fetchKey.\n    // The new fetchKey will ensure that the query is fully\n    // re-evaluated and refetched.\n    setQueryArgs(prev => ({\n      options: {\n        fetchKey: (prev?.fetchKey ?? 0) + 1,\n      },\n      variables: {id: 'different-id'}\n    }));\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        refetch={refetch}\n        queryArgs={queryArgs}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * MainContent.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\n// Fetches and renders the query, given the fetch options\nfunction MainContent(props) {\n  const {refetch, queryArgs} = props;\n  const data = useLazyLoadQuery<AppQueryType>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n          friends {\n            count\n          }\n        }\n      }\n    `,\n    queryArgs.variables,\n    queryArgs.options,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      <div>Friends count: {data.user.friends?.count}</div>\n      <Button\n        onClick={() => refetch()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We update the component in the event handler for refreshing by setting new query args in state. This will cause the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component that uses ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," to re-render with the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables")," and  ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey"),", and refetch the query upon rendering."),(0,i.mdx)("li",{parentName:"ul"},"We are passing a new value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," which we increment on every update. Passing a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," on every update will ensure that the query is fully re-evaluated and refetched."),(0,i.mdx)("li",{parentName:"ul"},"We are not passing a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),", meaning that it will use the default value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-or-network'"),". We could provide a different policy in order to specify whether to use locally cached data (as we covered in ",(0,i.mdx)("a",{parentName:"li",href:"../../reusing-cached-data/"},"Reusing Cached Data For Render"),")."),(0,i.mdx)("li",{parentName:"ul"},"The state update in ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and may cause the component to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"). This means that we'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, in order to show a fallback loading state."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense-1"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(y,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\nimport type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst AppQuery = require('__generated__/AppQuery.graphql');\n\nfunction App(props: Props) {\n  const environment = useRelayEnvironment();\n  const [isRefreshing, setIsRefreshing] = useState(false)\n  const [queryArgs, setQueryArgs] = useState({\n    options: {fetchKey: 0, fetchPolicy: 'store-or-network'},\n    variables: {id: '4'},\n  });\n\n  const refetch = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we update\n          // our state to re-render with the new fetchKey\n          // and fetchPolicy.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          setQueryArgs(prev => ({\n            options: {\n              fetchKey: (prev?.fetchKey ?? 0) + 1,\n              fetchPolicy: 'store-only',\n            },\n            variables: {id: 'different-id'}\n          }));\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <React.Suspense fallback=\"Loading query...\">\n      <MainContent\n        isRefetching={isRefetching}\n        refetch={refetch}\n        queryArgs={queryArgs}\n      />\n    </React.Suspense>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI inside the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent"),"."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we update our state so that we re-render an updated ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," that we then pass to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," in order render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when we update the state, the data for the query should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}w.isMDXComponent=!0}}]);