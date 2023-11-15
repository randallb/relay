"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[16517],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),l=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=d(n),c=i,f=l["".concat(a,".").concat(c)]||l[c]||p[c]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={},u=void 0,m={unversionedId:"tutorial/organizing-mutations-queries-and-subscriptions",id:"tutorial/organizing-mutations-queries-and-subscriptions",title:"organizing-mutations-queries-and-subscriptions",description:"Organizing Mutations, Queries, and Subscriptions",source:"@site/docs/tutorial/organizing-mutations-queries-and-subscriptions.md",sourceDirName:"tutorial",slug:"/tutorial/organizing-mutations-queries-and-subscriptions",permalink:"/docs/next/tutorial/organizing-mutations-queries-and-subscriptions",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/organizing-mutations-queries-and-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1700078656,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Mutations & Updates",permalink:"/docs/next/tutorial/mutations-updates"},next:{title:"Prerequisites",permalink:"/docs/next/getting-started/prerequisites/"}},l={},d=[{value:"Organizing Mutations, Queries, and Subscriptions",id:"organizing-mutations-queries-and-subscriptions",level:2},{value:"Recommended Structure For Mutations and Subscriptions",id:"recommended-structure-for-mutations-and-subscriptions",level:3},{value:"Recommended Structure for Queries",id:"recommended-structure-for-queries",level:3}],c={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"organizing-mutations-queries-and-subscriptions"},"Organizing Mutations, Queries, and Subscriptions"),(0,o.mdx)("p",null,"Relay Operations (Mutations, Queries, and Subscriptions) have strict naming requirements. The operation name must begin with the module name, and end with the GraphQL operation type. The name also must be globally unique."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Sidenote: This naming scheme originates from trying to enforce the uniqueness constraint. At Meta, Haste (a dependency management system for static resources) enforces that all module names are unique to derive sensible globally unique Relay names. Coupling the module name and Relay name also makes it easier to locate a fragment/query/mutation if you know that name. This makes sense within Meta, and may be less sensible in an OSS setting.")),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"A Mutation in the file ",(0,o.mdx)("inlineCode",{parentName:"li"},"MyComponent.js")," must be named with the scheme ",(0,o.mdx)("inlineCode",{parentName:"li"},"MyComponent[MyDescriptiveNameHere]Mutation"),"."),(0,o.mdx)("li",{parentName:"ol"},"A Query in the file ",(0,o.mdx)("inlineCode",{parentName:"li"},"MyComponent.react.js")," must be named with the scheme ",(0,o.mdx)("inlineCode",{parentName:"li"},"MyComponent*Query"),".")),(0,o.mdx)("p",null,"A NewsFeed component may have mutations/queries that shouldn't logically start with ",(0,o.mdx)("inlineCode",{parentName:"p"},"NewsFeed"),", but Relay requires this ",(0,o.mdx)("em",{parentName:"p"},"if they are defined in that file"),"."),(0,o.mdx)("h3",{id:"recommended-structure-for-mutations-and-subscriptions"},"Recommended Structure For Mutations and Subscriptions"),(0,o.mdx)("p",null,"Put Mutations in their own hook module so the name is closer to ",(0,o.mdx)("em",{parentName:"p"},"what the mutation does")," rather than ",(0,o.mdx)("em",{parentName:"p"},"which component invokes it"),". If the module name is correctly descriptive, it is fine to declare it in the same file."),(0,o.mdx)("p",null,"If you are adding a Mutation for ",(0,o.mdx)("inlineCode",{parentName:"p"},"Post"),", like adding a comment to a post, you may create a new file titled ",(0,o.mdx)("inlineCode",{parentName:"p"},"useAddPostComment.js"),". Your mutation (in this file) will then be named ",(0,o.mdx)("inlineCode",{parentName:"p"},"useAddPostCommentMutation"),", which is a perfectly descriptive name."),(0,o.mdx)("p",null,"You may consider putting all of these hooks in a dedicated ",(0,o.mdx)("inlineCode",{parentName:"p"},"hooks")," directory."),(0,o.mdx)("h3",{id:"recommended-structure-for-queries"},"Recommended Structure for Queries"),(0,o.mdx)("p",null,"Root components should have a single query that is tightly coupled to a component, since it describes that component's data dependencies. Queries and fragments should co-locate with their data-use code."))}p.isMDXComponent=!0}}]);