(this["webpackJsonpsummers-site"]=this["webpackJsonpsummers-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(16),l=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=s.NODE_ENV,b=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(b);var o=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=n(5),d=n(22),h=[{index:!0,label:"Summer Nairn",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Portfolio",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],m=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,170,7))})),O=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(m,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(O,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Summer Nairn"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:snairn@kent.edu",children:"snairn@kent.edu"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I am Summer! I like architecting residential structures. I am currently in my final year studying Architecture at [Kent State University](https://www.kent.edu/caed). I like dogs, have a samoyed named Loki, and have an awesome boyfriend (He made the website so I dont have a say in that being included)."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Summer Nairn ",Object(c.jsx)(u.b,{to:"/",children:"summer-nairn.com"}),"."]})]})]})},N=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(N,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Summer Nairn",defaultTitle:"Summer Nairn",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Summer Nairn's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),a=n(32),l=n(33),r=n(34),s=n(31),j=[{link:"https://github.com/Brontomerus",label:"Github",icon:n(30).faGithub},{link:"https://twitter.com/gnarlytech",label:"Twitter",icon:s.faTwitter},{link:"https://www.instagram.com/summernairn/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/brandondonelan",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:snairn@kent.edu",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),l=n(15),r=n(5),s=n(3),j=n(21),b=(n(47),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,167))}))),o=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,174))})),u=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,168))})),d=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,169))})),h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,173))})),m=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,171))})),O=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,172))})),x=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:b}),Object(c.jsx)(s.a,{path:"/projects",component:h}),Object(c.jsx)(s.a,{path:"/stats",component:O}),Object(c.jsx)(s.a,{path:"/contact",component:o}),Object(c.jsx)(s.a,{path:"/resume",component:m}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[48,1,3]]]);
//# sourceMappingURL=main.ddeae67e.chunk.js.map