import{_ as f}from"./adZQ4giF.js";import{_ as h}from"./dkvIHop1.js";import{_ as g}from"./BdFZGzJ3.js";import{u as x}from"./D8lhNIjh.js";import{e as y,c as l,a as e,b as i,w as k,t as N,u as m,F as c,r as w,o as a,d as B,f as D}from"./B9KYibiD.js";const F={class:"channel-title-section"},P={class:"channel-title"},v={__name:"france2",async setup(b){let r,o;const{data:n,error:C}=([r,o]=y(()=>x("france2PrimeData",()=>$fetch("https://yannbertrand.github.io/telehoraire-api/France2.fr.prime.json"))),r=await r,o(),r);return(L,t)=>{const _=f,u=h,p=g;return a(),l(c,null,[e("h1",null,[i(_,{to:"/"},{default:k(()=>t[0]||(t[0]=[B("Téléhoraire")])),_:1})]),t[2]||(t[2]=e("hr",null,null,-1)),e("div",F,[e("hgroup",P,[e("h2",null,N(m(n).channels[0].displayName),1),t[1]||(t[1]=e("p",null,"Ce soir",-1))]),i(u)]),(a(!0),l(c,null,w(m(n).programmes,(s,d)=>(a(),D(p,{key:s.start,programme:s,shouldPreload:d<3},null,8,["programme","shouldPreload"]))),128))],64)}}};export{v as default};