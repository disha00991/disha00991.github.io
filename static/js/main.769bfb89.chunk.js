(this.webpackJsonpwebume=this.webpackJsonpwebume||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),i=(a(58),a(2)),m=a(10),o=a(17),s=a(18),u=a(21),h=a(19),E=a(22),d=a(9),p=a.n(d),b=(a(154),a(12)),f=a(44),g=a.n(f),v=[{path:"/",label:"Webume",index:!0},{path:"/resume",label:"Resume"},{path:"/dreams",label:"My Dreams"},{path:"/projects",label:"Projects"},{path:"/contact",label:"Contact"}],w=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"hamburger-container"},l.a.createElement("nav",{className:"main",id:"hambuger-nav"},l.a.createElement("ul",null,a?l.a.createElement("li",{className:"menu close-menu"},l.a.createElement("div",{onClick:function(){return r(!a)},className:"menu-hover"},"\u2715")):l.a.createElement("li",{className:"menu open-menu"},l.a.createElement("div",{onClick:function(){return r(!a)},className:"menu-hover"},"\u2630")))),l.a.createElement(g.a,{right:!0,isOpen:a},l.a.createElement("ul",{className:"hamburger-ul"},v.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement(i.b,{to:e.path,onClick:function(){return r(!a)}},l.a.createElement("h3",{className:e.index&&"index-li"},e.label)))})))))},y=function(){return l.a.createElement("header",{id:"header"},l.a.createElement("h1",{className:"index-link"},v.filter((function(e){return e.index})).map((function(e){return l.a.createElement(i.b,{key:e.label,to:e.path},e.label)}))),l.a.createElement("nav",{className:"links"},l.a.createElement("ul",{className:"links-ul"},v.filter((function(e){return!e.index})).map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement(i.b,{to:e.path},e.label))})))),l.a.createElement(w,null))},k=a(20),N=a(47),j=a.n(N),O=a(48),I=a.n(O),x=a(49),S=a.n(x),M=a(50),C=a.n(M),D=[{link:"https://github.com/disha00991",label:"Github",icon:j.a},{link:"https://www.linkedin.com/in/cslovedisha",label:"LinkedIn",icon:C.a},{link:"https://today5or5never.wordpress.com/",label:"Wordpress",icon:I.a},{link:"https://www.instagram.com/happytrodder/",label:"Instagram",icon:S.a}],W=function(){return l.a.createElement("section",{id:"sidebar"},l.a.createElement("section",{id:"intro"},l.a.createElement(i.b,{to:"/",className:"logo"},l.a.createElement("img",{src:"/images/1.jpg",alt:""}),"  "),l.a.createElement("header",null,l.a.createElement("h2",null,"Disha Singh"),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:disha.singh00991@gmail.com"},"disha.singh00991@gmail.com")))),l.a.createElement("section",{className:"blurb"},l.a.createElement("h2",null,"Who's She?"),l.a.createElement("p",null,"Hi, I'm Disha. I like appreciating people who build things and get inspired. I am a proud ",l.a.createElement("a",{href:"https://nith.ac.in/"},"NIT, Hamirpur, India")," graduate, and ","the co-founder of 3rd year choreo in ",l.a.createElement("a",{href:"#"},"Dance Club Rhythmeecs"),". After college I was at ",l.a.createElement("a",{href:"https://www.publicissapient.com"},"Publicis Sapient"),", and currently exploring my potential at ",l.a.createElement("a",{href:"www.thb.co.in"},"THB India"),"."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,"/resume"!==window.location.pathname?l.a.createElement(i.b,{to:"/resume",className:"button"},"Learn More"):l.a.createElement(i.b,{to:"/about",className:"button"},"About Me")))),l.a.createElement("section",{id:"footer"},l.a.createElement("ul",{className:"icons"},D.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(k.a,{icon:e.icon})))}))),l.a.createElement("p",{className:"copyright"},"\xa9 Disha Singh")))},P=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{id:"wrapper"},l.a.createElement(p.a,{titleTemplate:"%s | Disha Singh",defaultTitle:"Disha Singh"}),l.a.createElement(y,null),l.a.createElement("div",{id:"main"},this.props.children),!this.props.fullPage&&l.a.createElement(W,null))}}]),t}(n.Component);P.defaultProps={children:null,fullPage:!1};var A=P,T=function(){return l.a.createElement(A,null,l.a.createElement("article",{className:"post",id:"index"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(i.b,{to:"/"},"About Webume")),l.a.createElement("p",null,"This artistic, responsive, react app was written solely for the purpose of self-branding."))),l.a.createElement("p",null," Welcome to Webume! My Resume, the web way. Let us begin having some adventure by clicking my"," ",l.a.createElement(i.b,{to:"/resume"},"resume"),", "," ",l.a.createElement(i.b,{to:"/dreams"},"some of my PLAN-A dreams"),", "," ",l.a.createElement(i.b,{to:"/projects"},"projects"),", "," ","or ",l.a.createElement(i.b,{to:"/contact"},"contact")," pages."),l.a.createElement("p",null,"Feel free to find bugs and throw at me. Next refresh & the bug will #RIP. Promise! Just as is, this website's source code is desperate to be found and praised ",l.a.createElement("a",{href:"https://github.com/disha00991/webume"},"here"),".")))},L=a(3),R=a(51),H=a.n(R),B=a(52),F=a.n(B),G=function(e){var t=Object(L.a)({},e);return l.a.createElement(i.b,t)},J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={count:0,markdown:""},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(F.a).then((function(e){return e.text()})).then((function(t){var a=t.split(/\s+/).map((function(e){return e.replace(/\W/g,"")})).filter((function(e){return e.length})).length;e.setState({markdown:t,count:a})}))}},{key:"render",value:function(){return l.a.createElement(A,null,l.a.createElement(p.a,{title:"Dreams"}),l.a.createElement("article",{className:"post",id:"about"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(i.b,{to:"/about"},"My Not-So-Unrealistic Dreams")),l.a.createElement("p",null,"(in about ",this.state.count," words)"))),l.a.createElement(H.a,{source:this.state.markdown,renderers:{Link:G},escapeHtml:!1})))}}]),t}(l.a.Component),q=["Some new idea to save the world?","My grandson in 2065 admiring his Granny's old website?","Go Ahead, mail me quick!","But since you're not gender biased, Femail me quicker :D","I'll reply even if I'm the COO of some company 10 yrs later :)","Waiting for your mail!","*Thanks*"],U=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(q[a]),m=Object(b.a)(c,2),o=m[0],s=m[1],u=Object(n.useState)(q[a].length),h=Object(b.a)(u,2),E=h[0],d=h[1],f=Object(n.useState)(!0),g=Object(b.a)(f,2),v=g[0],w=g[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){var e=a,t=E;E-50>=q[a].length&&(e+=1,t=0),e===q.length?w(!1):(s(q[e].slice(0,t)),r(e),d(t+1))}),v?50:null),l.a.createElement(A,null,l.a.createElement(p.a,{title:"Contact"}),l.a.createElement("article",{className:"post",id:"contact"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(i.b,{to:"/contact"},"Contact")))),l.a.createElement("div",{className:"email-at"},l.a.createElement("div",{className:"inline-container",style:{color:"red"},onMouseEnter:function(){return w(!1)},onMouseLeave:function(){return a<q.length&&w(!0)}},l.a.createElement("p",null,o)),l.a.createElement("p",null,"My formal mails usually arrive at"," ",l.a.createElement("a",{href:"mailto:disha.singh00991@gmail.com",style:{color:"teal"}},"disha.singh00991@gmail.com")),l.a.createElement("p",null,"My informal mails drop by here:"," ",l.a.createElement("a",{href:"mailto:directionstar86@gmail.com",style:{color:"teal"}},"directionstar86@gmail.com"))),l.a.createElement("ul",{className:"icons"},D.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(k.a,{icon:e.icon})))})))))},z=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement(p.a,{title:"404"}),l.a.createElement("h1",null,"Page Not Found."),l.a.createElement("p",null,"Return to ",l.a.createElement(i.b,{to:"/"},"index"),"."))};a(152);var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{basename:"/webume"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:T}),l.a.createElement(m.a,{path:"/dreams",component:J}),l.a.createElement(m.a,{path:"/contact",component:U}),l.a.createElement(m.a,{component:z,status:404}))))};c.a.render(l.a.createElement(K,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/dreams.344974c7.md"},53:function(e,t,a){e.exports=a(153)},58:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.769bfb89.chunk.js.map