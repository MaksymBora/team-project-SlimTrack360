import{s as u,t as p,j as o,d as $,r as T,f as U,e as M}from"./index-91b19f46.js";import{u as C}from"./useDispatch-542f1ee9.js";var w="NOT_FOUND";function D(e){var r;return{get:function(n){return r&&e(r.key,n)?r.value:w},put:function(n,c){r={key:n,value:c}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}function O(e,r){var t=[];function n(s){var a=t.findIndex(function(f){return r(s,f.key)});if(a>-1){var m=t[a];return a>0&&(t.splice(a,1),t.unshift(m)),m.value}return w}function c(s,a){n(s)===w&&(t.unshift({key:s,value:a}),t.length>e&&t.pop())}function i(){return t}function x(){t=[]}return{get:n,put:c,getEntries:i,clear:x}}var F=function(r,t){return r===t};function W(e){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;for(var c=t.length,i=0;i<c;i++)if(!e(t[i],n[i]))return!1;return!0}}function q(e,r){var t=typeof r=="object"?r:{equalityCheck:r},n=t.equalityCheck,c=n===void 0?F:n,i=t.maxSize,x=i===void 0?1:i,s=t.resultEqualityCheck,a=W(c),m=x===1?D(a):O(x,a);function f(){var d=m.get(arguments);if(d===w){if(d=e.apply(null,arguments),s){var l=m.getEntries(),h=l.find(function(g){return s(g.value,d)});h&&(d=h.value)}m.put(arguments,d)}return d}return f.clearCache=function(){return m.clear()},f}function N(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every(function(n){return typeof n=="function"})){var t=r.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return r}function P(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var c=function(){for(var x=arguments.length,s=new Array(x),a=0;a<x;a++)s[a]=arguments[a];var m=0,f,d={memoizeOptions:void 0},l=s.pop();if(typeof l=="object"&&(d=l,l=s.pop()),typeof l!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var h=d,g=h.memoizeOptions,y=g===void 0?t:g,z=Array.isArray(y)?y:[y],v=N(s),L=e.apply(void 0,[function(){return m++,l.apply(null,arguments)}].concat(z)),A=e(function(){for(var S=[],I=v.length,j=0;j<I;j++)S.push(v[j].apply(null,arguments));return f=L.apply(null,S),f});return Object.assign(A,{resultFunc:l,memoizedResultFunc:L,dependencies:v,lastResult:function(){return f},recomputations:function(){return m},resetRecomputations:function(){return m=0}}),A};return c}var R=P(q);const k=e=>e.recommended.items,G=e=>e.recommended.isLoading,K=e=>e.recommended.error,B=R([k],e=>{function r(t,n){return[...t].sort(()=>Math.random()-.5).slice(0,n)}return r(e,10)});R([k],e=>{function r(t,n){return[...t].sort(()=>Math.random()-.5).slice(0,n)}return r(e,4)});R([k],e=>{function r(t,n){return[...t].sort(()=>Math.random()-.5).slice(0,n)}return r(e,2)});const H=u.ul`
  @media screen and (min-width: ${p.breakpoint.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${p.breakpoint.desktop}) {
    max-width: 676px;
  }
`,J=u.li`
  background-color: ${p.color.secondaryGrey};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${p.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,Q=u.img`
  width: 46px;
  height: 46px;
`,V=u.div`
  display: flex;
  gap: 6px;
`,X=u.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;
`,Y=u.p`
  color: ${p.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
`,Z=u.p`
  font-size: 14px;
  line-height: 20px;
`,_=({item:e})=>o.jsxs(o.Fragment,{children:[o.jsx(Q,{src:e.img,alt:e.name}),o.jsxs("div",{children:[o.jsx(X,{children:e.name}),o.jsxs(V,{children:[o.jsx(Z,{children:e.amount}),o.jsxs(Y,{children:[" ",e.calories," calories"]})]})]})]}),ee=()=>{const e=$(B);return o.jsx(H,{children:e.map(r=>o.jsx(J,{children:o.jsx(_,{item:r})},r._id))})},te=u.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;

  @media screen and (min-width: ${p.breakpoint.tablet}) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: ${p.breakpoint.desktop}) {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 36px;
  }
`,re=()=>o.jsx(te,{children:"Recommended food"}),ne=""+new URL("recomDesc-4e0d2a26.png",import.meta.url).href,oe=""+new URL("recomDesc-e9b0ef00.webp",import.meta.url).href,E=""+new URL("recomDesk@2x-aafdc51a.png",import.meta.url).href,ae=""+new URL("recomDesk@2x-815ccbd7.webp",import.meta.url).href,ie=""+new URL("recomMob-421f1f54.png",import.meta.url).href,ce=""+new URL("recomMob-d5240a6a.webp",import.meta.url).href,se=""+new URL("recomMob@2x-9785c18f.png",import.meta.url).href,pe=""+new URL("recomMob@2x-555db460.webp",import.meta.url).href,me=""+new URL("recomTab-de2e4f51.png",import.meta.url).href,ue=""+new URL("recomTab-0743b43e.webp",import.meta.url).href,de=""+new URL("recomTab@2x-f2ee1164.png",import.meta.url).href,le=""+new URL("recomTab@2x-8d104968.webp",import.meta.url).href,fe=u.img`
  margin-bottom: 24px;

  @media screen and (min-width: ${p.breakpoint.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    max-height: 396px;
  }

  @media screen and (min-width: ${p.breakpoint.desktop}) {
    margin-bottom: 0px;
    max-width: 536px;
    max-height: 560px;
  }
`,xe=()=>o.jsxs("picture",{children:[o.jsx("source",{srcSet:`${oe} 1x, ${ae} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),o.jsx("source",{srcSet:`${ne} 1x, ${E} 2x`,media:"(min-width: 1440px)",type:"image/png"}),o.jsx("source",{srcSet:`${ue} 1x, ${le} 2x`,media:"(min-width: 768px)",type:"image/webp"}),o.jsx("source",{srcSet:`${me} 1x, ${de} 2x`,media:"(min-width: 768px)",type:"image/png"}),o.jsx("source",{srcSet:`${ce} 1x, ${pe} 2x`,media:"(max-width: 767px)",type:"image/webp"}),o.jsx("source",{srcSet:`${ie} 1x, ${se} 2x`,media:"(max-width: 767px)",type:"image/png"}),o.jsx(fe,{src:E,alt:"recommended food"})]}),he=u.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p.breakpoint.tablet}) {
    max-width: 780px;
    padding: 24px 6px;
  }

  @media screen and (min-width: ${p.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`,ge=u.div`
  @media screen and (min-width: ${p.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`,ye=()=>{const e=C(),r=$(G),t=$(K);return T.useEffect(()=>{e(U())},[e]),o.jsxs(he,{children:[o.jsx(re,{}),o.jsxs(ge,{children:[o.jsx(xe,{}),r&&o.jsx(M,{}),t?o.jsx("p",{children:"Oops...something went wrong! Try again later"}):o.jsx(ee,{})]})]})};export{ye as default};
