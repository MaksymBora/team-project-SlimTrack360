import{R as w,u as T,d as U,s as m,t as u,j as o,e as $,r as M,f as O,i as F}from"./index-941a20bc.js";function z(e=w){const t=e===w?T:U(e);return function(){const{store:n}=t();return n}}const W=z();function q(e=w){const t=e===w?W:z(e);return function(){return t().dispatch}}const N=q();var y="NOT_FOUND";function P(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:y},put:function(n,c){t={key:n,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function H(e,t){var r=[];function n(s){var a=r.findIndex(function(x){return t(s,x.key)});if(a>-1){var p=r[a];return a>0&&(r.splice(a,1),r.unshift(p)),p.value}return y}function c(s,a){n(s)===y&&(r.unshift({key:s,value:a}),r.length>e&&r.pop())}function i(){return r}function f(){r=[]}return{get:n,put:c,getEntries:i,clear:f}}var G=function(t,r){return t===r};function K(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var c=r.length,i=0;i<c;i++)if(!e(r[i],n[i]))return!1;return!0}}function B(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,c=n===void 0?G:n,i=r.maxSize,f=i===void 0?1:i,s=r.resultEqualityCheck,a=K(c),p=f===1?P(a):H(f,a);function x(){var d=p.get(arguments);if(d===y){if(d=e.apply(null,arguments),s){var l=p.getEntries(),h=l.find(function(g){return s(g.value,d)});h&&(d=h.value)}p.put(arguments,d)}return d}return x.clearCache=function(){return p.clear()},x}function J(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Q(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var c=function(){for(var f=arguments.length,s=new Array(f),a=0;a<f;a++)s[a]=arguments[a];var p=0,x,d={memoizeOptions:void 0},l=s.pop();if(typeof l=="object"&&(d=l,l=s.pop()),typeof l!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var h=d,g=h.memoizeOptions,v=g===void 0?r:g,D=Array.isArray(v)?v:[v],j=J(s),L=e.apply(void 0,[function(){return p++,l.apply(null,arguments)}].concat(D)),A=e(function(){for(var C=[],I=j.length,R=0;R<I;R++)C.push(j[R].apply(null,arguments));return x=L.apply(null,C),x});return Object.assign(A,{resultFunc:l,memoizedResultFunc:L,dependencies:j,lastResult:function(){return x},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),A};return c}var k=Q(B);const S=e=>e.recommended.items,V=e=>e.recommended.isLoading,X=e=>e.recommended.error,Y=k([S],e=>{function t(r,n){return[...r].sort(()=>Math.random()-.5).slice(0,n)}return t(e,10)});k([S],e=>{function t(r,n){return[...r].sort(()=>Math.random()-.5).slice(0,n)}return t(e,4)});k([S],e=>{function t(r,n){return[...r].sort(()=>Math.random()-.5).slice(0,n)}return t(e,2)});const Z=m.ul`
  @media screen and (min-width: ${u.breakpoint.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${u.breakpoint.desktop}) {
    max-width: 676px;
  }
`,_=m.li`
  background-color: ${u.color.secondaryGrey};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${u.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,ee=m.img`
  width: 46px;
  height: 46px;
`,te=m.div`
  display: flex;
  gap: 6px;
`,re=m.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;
`,ne=m.p`
  color: ${u.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
`,oe=m.p`
  font-size: 14px;
  line-height: 20px;
`,ae=({item:e})=>o.jsxs(o.Fragment,{children:[o.jsx(ee,{src:e.img,alt:e.name}),o.jsxs("div",{children:[o.jsx(re,{children:e.name}),o.jsxs(te,{children:[o.jsx(oe,{children:e.amount}),o.jsxs(ne,{children:[" ",e.calories," calories"]})]})]})]}),ie=()=>{const e=$(Y);return o.jsx(Z,{children:e.map(t=>o.jsx(_,{children:o.jsx(ae,{item:t})},t._id))})},ce=m.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;

  @media screen and (min-width: ${u.breakpoint.tablet}) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: ${u.breakpoint.desktop}) {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 36px;
  }
`,se=()=>o.jsx(ce,{children:"Recommended food"}),ue=""+new URL("recomDesc-4e0d2a26.png",import.meta.url).href,pe=""+new URL("recomDesc-e9b0ef00.webp",import.meta.url).href,E=""+new URL("recomDesk@2x-aafdc51a.png",import.meta.url).href,me=""+new URL("recomDesk@2x-815ccbd7.webp",import.meta.url).href,de=""+new URL("recomMob-421f1f54.png",import.meta.url).href,le=""+new URL("recomMob-d5240a6a.webp",import.meta.url).href,xe=""+new URL("recomMob@2x-9785c18f.png",import.meta.url).href,fe=""+new URL("recomMob@2x-555db460.webp",import.meta.url).href,he=""+new URL("recomTab-de2e4f51.png",import.meta.url).href,ge=""+new URL("recomTab-0743b43e.webp",import.meta.url).href,be=""+new URL("recomTab@2x-f2ee1164.png",import.meta.url).href,we=""+new URL("recomTab@2x-8d104968.webp",import.meta.url).href,ye=m.img`
  margin-bottom: 24px;

  @media screen and (min-width: ${u.breakpoint.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    max-height: 396px;
  }

  @media screen and (min-width: ${u.breakpoint.desktop}) {
    margin-bottom: 0px;
    max-width: 536px;
    max-height: 560px;
  }
`,ve=()=>o.jsxs("picture",{children:[o.jsx("source",{srcSet:`${pe} 1x, ${me} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),o.jsx("source",{srcSet:`${ue} 1x, ${E} 2x`,media:"(min-width: 1440px)",type:"image/png"}),o.jsx("source",{srcSet:`${ge} 1x, ${we} 2x`,media:"(min-width: 768px)",type:"image/webp"}),o.jsx("source",{srcSet:`${he} 1x, ${be} 2x`,media:"(min-width: 768px)",type:"image/png"}),o.jsx("source",{srcSet:`${le} 1x, ${fe} 2x`,media:"(max-width: 767px)",type:"image/webp"}),o.jsx("source",{srcSet:`${de} 1x, ${xe} 2x`,media:"(max-width: 767px)",type:"image/png"}),o.jsx(ye,{src:E,alt:"recommended food"})]}),je=m.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${u.breakpoint.tablet}) {
    max-width: 780px;
    padding: 24px 6px;
  }

  @media screen and (min-width: ${u.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`,Re=m.div`
  @media screen and (min-width: ${u.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`,ke=()=>{const e=N(),t=$(V),r=$(X);return M.useEffect(()=>{e(O())},[e]),o.jsxs(je,{children:[o.jsx(se,{}),o.jsxs(Re,{children:[o.jsx(ve,{}),t&&o.jsx(F,{}),r?o.jsx("p",{children:"Oops...something went wrong! Try again later"}):o.jsx(ie,{})]})]})};export{ke as default};
