import{s as m,t as w,j as p}from"./index-b09812fc.js";var y="NOT_FOUND";function F(t){var r;return{get:function(n){return r&&t(r.key,n)?r.value:y},put:function(n,u){r={key:n,value:u}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}function b(t,r){var e=[];function n(i){var a=e.findIndex(function(f){return r(i,f.key)});if(a>-1){var c=e[a];return a>0&&(e.splice(a,1),e.unshift(c)),c.value}return y}function u(i,a){n(i)===y&&(e.unshift({key:i,value:a}),e.length>t&&e.pop())}function o(){return e}function d(){e=[]}return{get:n,put:u,getEntries:o,clear:d}}var q=function(r,e){return r===e};function M(t){return function(e,n){if(e===null||n===null||e.length!==n.length)return!1;for(var u=e.length,o=0;o<u;o++)if(!t(e[o],n[o]))return!1;return!0}}function N(t,r){var e=typeof r=="object"?r:{equalityCheck:r},n=e.equalityCheck,u=n===void 0?q:n,o=e.maxSize,d=o===void 0?1:o,i=e.resultEqualityCheck,a=M(u),c=d===1?F(a):b(d,a);function f(){var s=c.get(arguments);if(s===y){if(s=t.apply(null,arguments),i){var l=c.getEntries(),h=l.find(function(v){return i(v.value,s)});h&&(s=h.value)}c.put(arguments,s)}return s}return f.clearCache=function(){return c.clear()},f}function T(t){var r=Array.isArray(t[0])?t[0]:t;if(!r.every(function(n){return typeof n=="function"})){var e=r.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return r}function k(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];var u=function(){for(var d=arguments.length,i=new Array(d),a=0;a<d;a++)i[a]=arguments[a];var c=0,f,s={memoizeOptions:void 0},l=i.pop();if(typeof l=="object"&&(s=l,l=i.pop()),typeof l!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var h=s,v=h.memoizeOptions,x=v===void 0?e:v,S=Array.isArray(x)?x:[x],A=T(i),C=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(S)),R=t(function(){for(var z=[],O=A.length,j=0;j<O;j++)z.push(A[j].apply(null,arguments));return f=C.apply(null,z),f});return Object.assign(R,{resultFunc:l,memoizedResultFunc:C,dependencies:A,lastResult:function(){return f},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),R};return u}var E=k(N);const I=t=>t.recommended.items,G=t=>t.recommended.isLoading,K=t=>t.recommended.error,B=E([I],t=>{function r(e,n){return[...e].sort(()=>Math.random()-.5).slice(0,n)}return r(t,10)}),H=E([I],t=>{function r(e,n){return[...e].sort(()=>Math.random()-.5).slice(0,n)}return r(t,4)});E([I],t=>{function r(e,n){return[...e].sort(()=>Math.random()-.5).slice(0,n)}return r(t,2)});const D=m.img`
  width: 46px;
  height: 46px;
`,L=m.div`
  display: flex;
  gap: 6px;
`,P=m.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;
`,$=m.p`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
`,U=m.p`
  font-size: 14px;
  line-height: 20px;
`,J=({item:t})=>p.jsxs(p.Fragment,{children:[p.jsx(D,{src:t.img,alt:t.name}),p.jsxs("div",{children:[p.jsx(P,{children:t.name}),p.jsxs(L,{children:[p.jsx(U,{children:t.amount}),p.jsxs($,{children:[" ",t.calories," calories"]})]})]})]});export{J as I,G as a,K as b,H as c,B as s};
