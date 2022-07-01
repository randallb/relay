(self.webpackChunk=self.webpackChunk||[]).push([[14447],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,m=u["".concat(o,".").concat(p)]||u[p]||f[p]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var r=t(79973),i=t(67294),a=t(73727),o=t(52263),c=t(13919),l=t(10412),s=(0,i.createContext)({collectLink:function(){}}),u=t(44996),d=t(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var n,t,f=e.isNavLink,m=e.to,v=e.href,y=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,E=(0,r.Z)(e,p),P=(0,o.default)().siteConfig,k=P.trailingSlash,x=P.baseUrl,O=(0,u.useBaseUrlUtils)().withBaseUrl,C=(0,i.useContext)(s),j=m||v,N=(0,c.Z)(j),U=null==j?void 0:j.replace("pathname://",""),T=void 0!==U?(t=U,w&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0;T&&N&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:k,baseUrl:x}));var R=(0,i.useRef)(!1),D=f?a.OL:a.rU,_=l.default.canUseIntersectionObserver,M=(0,i.useRef)();(0,i.useEffect)((function(){return!_&&N&&null!=T&&window.docusaurus.prefetch(T),function(){_&&M.current&&M.current.disconnect()}}),[M,T,_,N]);var S=null!==(n=null==T?void 0:T.startsWith("#"))&&void 0!==n&&n,A=!T||!N||S;return T&&N&&!S&&!b&&C.collectLink(T),A?i.createElement("a",Object.assign({href:T},j&&!N&&{target:"_blank",rel:"noopener noreferrer"},E)):i.createElement(D,Object.assign({},E,{onMouseEnter:function(){R.current||null==T||(window.docusaurus.preload(T),R.current=!0)},innerRef:function(e){var n,t;_&&e&&N&&(n=e,t=function(){null!=T&&window.docusaurus.prefetch(T)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(n),M.current.disconnect(),t())}))})),M.current.observe(n))},to:T||""},f&&{isActive:h,activeClassName:y}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>i})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>a,default:()=>o});var r=t(52263),i=t(13919);function a(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(a,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,t?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var r=t(36742),i=t(44256),a=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var l=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return a.createElement(c,null,a.createElement(s,null),a.createElement(l,null),a.createElement(u,null))},p=function(){return a.createElement(c,null,a.createElement(l,null),a.createElement(u,null))};const f=function(){return(0,i.fbContent)({internal:a.createElement(d,null),external:a.createElement(p,null)})}},82367:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>d,toc:()=>p,default:()=>m});var r=t(74034),i=t(79973),a=(t(67294),t(3905)),o=t(68629),c=t(44256),l=["components"],s={id:"entrypoint-container",title:"EntryPointContainer",slug:"/api-reference/entrypoint-container/"},u=void 0,d={unversionedId:"api-reference/entrypoint-apis/entrypoint-container",id:"version-v11.0.0/api-reference/entrypoint-apis/entrypoint-container",isDocsHomePage:!1,title:"EntryPointContainer",description:"EntryPointContainer",source:"@site/versioned_docs/version-v11.0.0/api-reference/entrypoint-apis/entrypoint-container.md",sourceDirName:"api-reference/entrypoint-apis",slug:"/api-reference/entrypoint-container/",permalink:"/docs/v11.0.0/api-reference/entrypoint-container/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/entrypoint-apis/entrypoint-container.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Stiopa Koltsov",lastUpdatedAt:1656717882,formattedLastUpdatedAt:"7/1/2022",frontMatter:{id:"entrypoint-container",title:"EntryPointContainer",slug:"/api-reference/entrypoint-container/"},sidebar:"version-v11.0.0/docs",previous:{title:"loadEntryPoint",permalink:"/docs/v11.0.0/api-reference/load-entrypoint/"},next:{title:"fetchQuery",permalink:"/docs/v11.0.0/api-reference/fetch-query/"}},p=[{value:"<code>EntryPointContainer</code>",id:"entrypointcontainer",children:[],level:2}],f={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"entrypointcontainer"},(0,a.mdx)("inlineCode",{parentName:"h2"},"EntryPointContainer")),(0,a.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"For more information, see the ",(0,a.mdx)("a",{parentName:"p",href:"../../guides/entrypoints/using-entrypoints/#defining-entrypoints"},"Defining EntryPoints")," and ",(0,a.mdx)("a",{parentName:"p",href:"../../guides/entrypoints/using-entrypoints/#-entrypoints"},"Consuming EntryPoints")," guides.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"function EntryPointContainer({\n  entryPointReference,\n  props,\n}: {\n  +entryPointReference: PreloadedEntryPoint<TEntryPointComponent>,\n  +props: TRuntimeProps,\n}): ReactElement\n")),(0,a.mdx)("p",null,"A React component that renders a preloaded EntryPoint."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"entryPointReference"),": the value returned from a call to ",(0,a.mdx)("inlineCode",{parentName:"li"},"loadEntryPoint")," or acquired from the ",(0,a.mdx)("inlineCode",{parentName:"li"},"useEntryPointLoader")," hook."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"props"),": additional runtime props that will be passed to the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Component"))),(0,a.mdx)(o.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);