import{_ as g,a as u,b as _,c as h}from"./D8lhNIjh.js";import{k as i,o as r,f as n,c as f,a as o,l as p,b as l,d as N,t as P}from"./B9KYibiD.js";const T=i({__name:"Cover",props:{icon:{},preload:{type:Boolean}},setup(m){const e=m;return(a,t)=>{const s=g;return r(),n(s,{src:e.icon[0].src,alt:"",width:"60",height:"140",preload:a.preload,loading:a.preload?"eager":"lazy",class:"programme-cover"},null,8,["src","preload","loading"])}}}),y={class:"programme-content"},k={class:"programme-title"},B=["innerHTML"],H=["innerHTML"],L=["innerHTML"],C=i({__name:"ProgrammeDetails",props:{programme:{},shouldPreload:{type:Boolean}},setup(m){return(e,a)=>{const t=T,s=u,c=_,d=h;return r(),f("article",null,[o("div",y,[e.programme.icon?(r(),n(t,{key:0,icon:e.programme.icon,preload:e.shouldPreload},null,8,["icon","preload"])):p("",!0),o("div",null,[o("hgroup",null,[o("h3",k,[o("span",{innerHTML:e.programme.title},null,8,B),e.programme.episodeNum?(r(),n(s,{key:0,episodeNum:e.programme.episodeNum},null,8,["episodeNum"])):p("",!0)]),o("p",{innerHTML:e.programme.subTitle},null,8,H)]),l(c,{categories:e.programme.category},null,8,["categories"]),o("p",{class:"programme-description",innerHTML:e.programme.desc},null,8,L)])]),o("footer",null,[N(P(e.programme.startStop)+" ",1),l(d,{start:e.programme.start,stop:e.programme.stop},null,8,["start","stop"])])])}}});export{C as _};
