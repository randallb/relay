"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[31125],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),d=function(e){return function(n){var a=c(n.components);return r.createElement(e,l({},n,{components:a}))}},c=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=t,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(h,o(o({ref:n},u),{},{components:a})):r.createElement(h,o({ref:n},u))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,n,a)=>{a.d(n,{Z:()=>p});var r=a(39960),t=a(86341),l=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),n)}var s=function(){var e=l.useState(!1),n=e[0],a=e[1],r=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return l.createElement(o,null,l.createElement(u,null),l.createElement(s,null),l.createElement(d,null))},m=function(){return l.createElement(o,null,l.createElement(s,null),l.createElement(d,null))};const p=function(){return(0,t.fbContent)({internal:l.createElement(c,null),external:l.createElement(m,null)})}},50826:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var r=a(83117),t=a(80102),l=(a(67294),a(3905)),i=a(68629),o=a(86341),s=["components"],u={id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]},d=void 0,c={unversionedId:"guided-tour/rendering/variables",id:"version-v14.0.0/guided-tour/rendering/variables",title:"Variables",description:"Relay guide to query variables",source:"@site/versioned_docs/version-v14.0.0/guided-tour/rendering/variables.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/variables/",permalink:"/docs/guided-tour/rendering/variables/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/rendering/variables.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Mark Isaacson",lastUpdatedAt:1680539113,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]}},m={},p=[{value:"@arguments and @argumentDefinitions",id:"arguments-and-argumentdefinitions",level:2},{value:"Accessing GraphQL Variables At Runtime",id:"accessing-graphql-variables-at-runtime",level:2}],h={toc:p};function g(e){var n=e.components,a=(0,t.Z)(e,s);return(0,l.mdx)("wrapper",(0,r.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"You may have noticed that the query declarations in our examples above contain references to an ",(0,l.mdx)("inlineCode",{parentName:"p"},"$id")," symbol inside the GraphQL code: these are ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#variables"},"GraphQL Variables"),"."),(0,l.mdx)("p",null,"GraphQL variables are a construct that allows referencing dynamic values inside a GraphQL query. When fetching a query from the server, we also need to provide as input the actual set of values to use for the variables declared inside the query:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"query UserQuery($id: ID!) {\n  # The value of $id is used as input to the user() call:\n  user(id: $id) {\n    id\n    name\n  }\n}\n")),(0,l.mdx)("p",null,"In the above, ",(0,l.mdx)("inlineCode",{parentName:"p"},"ID!")," is the type of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"$id")," variable. That is, it is a required ID."),(0,l.mdx)("p",null,"When sending a network request to fetch the query above, we need to provide both the query, and the variables to be used for this particular execution of the query.  For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'# Query:\nquery UserQuery($id: ID!) {\n  # ...\n}\n\n# Variables:\n{"id": 4}\n')),(0,l.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response, which can also be visualized in ",(0,l.mdx)("a",{parentName:"p",href:"https://fburl.com/graphiql/kiuar058"},"GraphiQL"),":")),(0,l.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("p",null,"Fetching the above query and variables from the server would produce the following response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg"\n    }\n  }\n}\n')),(0,l.mdx)("hr",null),(0,l.mdx)("p",null,"Fragments can also reference variables that have been declared by a query:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\n\nquery ViewerQuery($scale: Float!) {\n  viewer {\n    actor {\n      ...UserFragment\n    }\n  }\n}\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Even though the fragment above doesn't ",(0,l.mdx)("em",{parentName:"li"},"declare")," the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," variable directly, it can still reference it. Doing so makes it so any query that includes this fragment, either directly or transitively, ",(0,l.mdx)("em",{parentName:"li"},"must")," declare the variable and its type, otherwise an error will be produced."),(0,l.mdx)("li",{parentName:"ul"},"In other words, ",(0,l.mdx)("em",{parentName:"li"},"query variables are available globally by any fragment that is a descendant of the query"),"."),(0,l.mdx)("li",{parentName:"ul"},"A fragment which references a global variable can only be included (directly or transitively) in a query which defines that global variable.")),(0,l.mdx)("p",null,"In Relay, fragment declarations inside components can also reference query variables:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n    fragment UserComponent_user on User {\n      name\n      profile_picture(scale: $scale) {\n        uri\n      }\n    }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The above fragment could be included by multiple queries, and rendered by different components, which means that any query that ends up rendering/including the above fragment ",(0,l.mdx)("em",{parentName:"li"},"must")," declare the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," variable."),(0,l.mdx)("li",{parentName:"ul"},"If any query that happens to include this fragment ",(0,l.mdx)("em",{parentName:"li"},"doesn't")," declare the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, an error will be produced by the Relay Compiler at build time, ensuring that an incorrect query never gets sent to the server (sending a query with missing variable declarations will also produce an error in the server).")),(0,l.mdx)("h2",{id:"arguments-and-argumentdefinitions"},"@arguments and @argumentDefinitions"),(0,l.mdx)("p",null,"However, in order to avoid bloating queries with global variable declarations and to allow developers to reuse fragments with different variables, Relay also provides a way to declare variables that are scoped locally to a fragment using  the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@arguments")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," directives:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with @argumentDefinitions\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!"}) {\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include fragment using @arguments\n */\n\nfunction UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Pass value of 2.0 for the $scale variable\n        ...PictureComponent_user @arguments(scale: 2.0)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * Include same fragment using *_different_* @arguments\n */\n\nfunction OtherUserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment OtherUserComponent_user on User {\n        name\n\n        # Pass a different value for the scale variable.\n        # The value can be a local variable, global variable or literal:\n        ...PictureComponent_user @arguments(scale: $pictureScale)\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Note that when passing ",(0,l.mdx)("inlineCode",{parentName:"li"},"@arguments")," to a fragment, we can pass a literal value or pass another variable. The variable can be a global query variable, a local variable declared via ",(0,l.mdx)("inlineCode",{parentName:"li"},"@argumentDefinitions")," or a literal (e.g. ",(0,l.mdx)("inlineCode",{parentName:"li"},"42.0"),")."),(0,l.mdx)("li",{parentName:"ul"},"When we actually fetch ",(0,l.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," as part of a query, the ",(0,l.mdx)("inlineCode",{parentName:"li"},"scale")," value passed to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"profile_picture")," field will depend on the argument that was provided by the parent of ",(0,l.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"For ",(0,l.mdx)("inlineCode",{parentName:"li"},"UserComponent_user")," the value of ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," will be 2.0."),(0,l.mdx)("li",{parentName:"ul"},"For ",(0,l.mdx)("inlineCode",{parentName:"li"},"OtherUserComponent_user"),", the value of ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," will be whatever value we pass to the server for the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$pictureScale")," variable when we fetch the query.")))),(0,l.mdx)("p",null,"Fragments that expect arguments can also declare default values, making the arguments optional:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n * Declare a fragment that accepts arguments with default values\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!", defaultValue: 2.0}) {\n\n        # $scale is a local variable here, declared above\n        # as an argument scale, of type Float! with a default value of 2.0\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"function UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Do not pass an argument, value for scale will be 2.0\n        ...PictureComponent_user\n      }\n    `,\n    props.user,\n  );\n}\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Not passing the argument to ",(0,l.mdx)("inlineCode",{parentName:"li"},"PictureComponent_user")," makes it use the default value for its locally declared ",(0,l.mdx)("inlineCode",{parentName:"li"},"$scale")," variable, in this case 2.0.")),(0,l.mdx)("h2",{id:"accessing-graphql-variables-at-runtime"},"Accessing GraphQL Variables At Runtime"),(0,l.mdx)("p",null,"If you want to access the variables that were set at the query root, the recommended approach is to pass the variables down the component tree in your application, using props, or your own application-specific context."),(0,l.mdx)("p",null,"Relay currently does not expose the resolved variables (i.e. after applying argument definitions) for a specific fragment, and you should very rarely need to do so."),(0,l.mdx)(i.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);