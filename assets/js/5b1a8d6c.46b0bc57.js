"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[6164],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){return function(t){var n=u(t.components);return a.createElement(e,r({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,h=d["".concat(o,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(39960),i=n(86341),r=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var m=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return r.createElement(l,null,r.createElement(s,null),r.createElement(m,null),r.createElement(d,null))},c=function(){return r.createElement(l,null,r.createElement(m,null),r.createElement(d,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(u,null),external:r.createElement(c,null)})}},2423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a,i=n(83117),r=n(80102),o=(n(67294),n(3905)),l=n(68629),m=n(86341),s=["components"],d={id:"use-mutation",title:"useMutation",slug:"/api-reference/use-mutation/",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",keywords:["mutation"]},u=void 0,c={unversionedId:"api-reference/hooks/use-mutation",id:"version-v16.0.0/api-reference/hooks/use-mutation",title:"useMutation",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",source:"@site/versioned_docs/version-v16.0.0/api-reference/hooks/use-mutation.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-mutation/",permalink:"/docs/api-reference/use-mutation/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v16.0.0/api-reference/hooks/use-mutation.md",tags:[],version:"v16.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1698265594,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"use-mutation",title:"useMutation",slug:"/api-reference/use-mutation/",description:"API reference for useMutation, a React hook used to execute a GraphQL mutation",keywords:["mutation"]},sidebar:"docs",previous:{title:"usePaginationFragment",permalink:"/docs/api-reference/use-pagination-fragment/"},next:{title:"useSubscription",permalink:"/docs/api-reference/use-subscription/"}},p={},h=[{value:"<code>useMutation</code>",id:"usemutation",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Return Value",id:"return-value",level:3}],f=(a="FbUseMutationParameter",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),x={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.mdx)("wrapper",(0,i.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"usemutation"},(0,o.mdx)("inlineCode",{parentName:"h2"},"useMutation")),(0,o.mdx)("p",null,"Hook used to execute a mutation in a React component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';\nconst React = require('React');\n\nconst {graphql, useMutation} = require('react-relay');\n\nfunction LikeButton() {\n  const [commit, isInFlight] = useMutation<FeedbackLikeMutation>(graphql`\n    mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n      feedback_like(data: $input) {\n        feedback {\n          id\n          viewer_does_like\n          like_count\n        }\n      }\n    }\n  `);\n\n  if (isInFlight) {\n    return <Spinner />;\n  }\n\n  return (\n    <button\n      onClick={() => {\n        commit({\n          variables: {\n            input: {\n              id: '123',\n              text: 'text',\n            },\n          },\n          onCompleted(data) {\n            console.log(data);\n          },\n        });\n      }}\n    />\n  );\n}\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mutation"),": GraphQL mutation specified using a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal.")),(0,o.mdx)(m.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutationFn"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"<T: MutationParameters>(IEnvironment, MutationConfig<T>): Disposable"),". ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," A function with the same signature as ",(0,o.mdx)("a",{parentName:"li",href:"../commit-mutation"},(0,o.mdx)("inlineCode",{parentName:"a"},"commitMutation")),", which will be called in its stead. Defaults to ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation"),"."))),(0,o.mdx)(f,{mdxType:"FbUseMutationParameter"}),(0,o.mdx)("h3",{id:"return-value"},"Return Value"),(0,o.mdx)("p",null,"Tuple containing the following values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"[0]"," ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation"),": The function that will execute the mutation",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Arguments, the syntax signature is almost the same as our ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation")," API",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variables needed for the mutation. For example, if the mutation defines an ",(0,o.mdx)("inlineCode",{parentName:"li"},"$input")," variable, this object should contain an ",(0,o.mdx)("inlineCode",{parentName:"li"},"input")," key, whose shape must match the shape of the data expected by the mutation as defined by the GraphQL schema."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": Callback function executed when the request is completed and the in-memory Relay store is updated with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," function. Takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"response"),' object, which is the "raw" server response. Internally ',(0,o.mdx)("inlineCode",{parentName:"li"},"errors")," are not allowed, ",(0,o.mdx)("inlineCode",{parentName:"li"},"CRITICAL")," error will be thrown in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onError")," handler."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onError"),": Callback function executed if Relay encounters an error during the request. Internally, ",(0,o.mdx)("inlineCode",{parentName:"li"},"CRITICAL")," error during reading the mutation result on the server"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," data to update the fields on the relevant records in the local data store, ",(0,o.mdx)("em",{parentName:"li"},"before")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," is executed. If an error occurs during the mutation request, the optimistic update will be rolled back."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back. This function takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,o.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store"),". In this function, the client defines how to update the local data via the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,o.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store API Reference"),". Please note:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"It is usually preferable to just pass an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," option instead of an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections)."),(0,o.mdx)("li",{parentName:"ul"},"If you do decide to use an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),", often times it can be the same function as ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),": Function used to update the local in-memory store based on the real server response from the mutation. If ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections). When the server response comes back, Relay first reverts any changes introduced by ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," and will then execute ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater"),". This function takes a ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", which is a proxy of the in-memory ",(0,o.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store"),". In this function, the client defines how to update the local data based on the server response via the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store")," instance. For details on how to use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store"),", please refer to our ",(0,o.mdx)("a",{parentName:"li",href:"../store/"},"Relay Store API")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"uploadables"),": An optional uploadable map, an object representing any number of uploadable items, with one key per item. Each value must be of type ",(0,o.mdx)("inlineCode",{parentName:"li"},"File")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"Blob"),"."),(0,o.mdx)("li",{parentName:"ul"},"No environment argument: ",(0,o.mdx)("inlineCode",{parentName:"li"},"useMutation")," will automatically use the current environment provided by ",(0,o.mdx)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")))),(0,o.mdx)("li",{parentName:"ul"},"Return value:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,o.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will revert the optimistic update, and Relay won't update the store or call any success/error callback, but the network request is not guaranteed to be cancelled. If the ",(0,o.mdx)("inlineCode",{parentName:"li"},"dispose")," is called after the mutation has succeeded, it will not rollback the update in Relay store."))))),(0,o.mdx)("li",{parentName:"ul"},"[1]"," ",(0,o.mdx)("inlineCode",{parentName:"li"},"areMutationsInFlight"),": Will be ",(0,o.mdx)("inlineCode",{parentName:"li"},"true")," if any mutation triggered by calling ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation")," is still in flight. If you call ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation")," multiple times, there can be multiple mutations in flight at once.")),(0,o.mdx)(l.Z,{mdxType:"DocsRating"}))}b.isMDXComponent=!0}}]);