import{_ as f}from"./adZQ4giF.js";import{_ as h}from"./9sqZ7Ylt.js";import{_ as g}from"./BdFZGzJ3.js";import{u as x}from"./D8lhNIjh.js";import{e as y,c as l,a as e,b as i,w as k,t as N,u as m,F as _,r as w,o as r,d as B,f as D}from"./B9KYibiD.js";const P={class:"channel-title-section"},T={class:"channel-title"},v={__name:"tf1",async setup(b){let o,a;const{data:s,error:C}=([o,a]=y(()=>x("tf1PrimeData",()=>$fetch("https://yannbertrand.github.io/telehoraire-api/TF1.fr.prime.json"))),o=await o,a(),o);return(F,t)=>{const u=f,c=h,p=g;return r(),l(_,null,[e("h1",null,[i(u,{to:"/"},{default:k(()=>t[0]||(t[0]=[B("Téléhoraire")])),_:1})]),t[2]||(t[2]=e("hr",null,null,-1)),e("div",P,[e("hgroup",T,[e("h2",null,N(m(s).channels[0].displayName),1),t[1]||(t[1]=e("p",null,"Ce soir",-1))]),i(c)]),(r(!0),l(_,null,w(m(s).programmes,(n,d)=>(r(),D(p,{key:n.start,programme:n,shouldPreload:d<3},null,8,["programme","shouldPreload"]))),128))],64)}}};export{v as default};
