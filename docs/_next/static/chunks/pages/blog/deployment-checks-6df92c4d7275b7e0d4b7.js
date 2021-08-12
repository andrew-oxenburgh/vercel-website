_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"0yWH":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n("cpVT"),i=n("dhJC"),c=(n("q1tI"),n("7ljp")),l=n("LyPz");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Deployment checks",description:"Check list",date:"July 27, 2021",readTime:"5"},o={meta:p},s=function(e){var t=e.children;return Object(c.b)(l.a,{meta:p},t)};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)(s,r(r(r({},o),n),{},{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Deployment"),Object(c.b)("h3",null,"Notes"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Github Pages require we use a ",Object(c.b)("inlineCode",{parentName:"p"},"/docs")," dir for our output. ",Object(c.b)("inlineCode",{parentName:"p"},"next export")," outputs to an ",Object(c.b)("inlineCode",{parentName:"p"},"/out/")," dir.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"I move it after a successful export, and add a ",Object(c.b)("inlineCode",{parentName:"p"},".nojekyll")," file to prevent ignoring underscored files."))),Object(c.b)("h3",null,"Known issues"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"JS errors due to using ",Object(c.b)("inlineCode",{parentName:"li"},"<table/>")," tags in ",Object(c.b)("inlineCode",{parentName:"li"},"<p/>")," tags")),Object(c.b)("h3",null,"What to do to deploy site"),Object(c.b)("ul",r({},{className:"contains-task-list"}),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Clean it - ",Object(c.b)("inlineCode",{parentName:"li"},"yarn clean")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Re pull it - ",Object(c.b)("inlineCode",{parentName:"li"},"yarn")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Lint it ",Object(c.b)("inlineCode",{parentName:"li"},"yarn lint")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Synk it ",Object(c.b)("inlineCode",{parentName:"li"},"yarn test")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Check pages"),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Run the app with ",Object(c.b)("inlineCode",{parentName:"li"},"yarn dev")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Check all links work with no 404's"),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Check all pages work with no JS errors."),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","export using ",Object(c.b)("inlineCode",{parentName:"li"},"yarn export")),Object(c.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","commit changes in git")))}m.isMDXComponent=!0},va1i:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/deployment-checks",function(){return n("0yWH")}])}},[["va1i",0,1,3,2,4,5]]]);