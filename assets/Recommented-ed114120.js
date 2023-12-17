import{R as i,u as d,c as x,s as n,t as r,b as a,j as e,r as h,f as l,d as u}from"./index-e7d8cd90.js";function p(t=i){const o=t===i?d:x(t);return function(){const{store:c}=o();return c}}const g=p();function b(t=i){const o=t===i?g:p(t);return function(){return o().dispatch}}const f=b(),w=t=>t.recommended.items,j=t=>t.recommended.isLoading,$=t=>t.recommended.error,k=n.ul`
  @media screen and (min-width: ${r.breakpoint.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    max-width: 676px;
  }
`,R=n.img`
  width: 46px;
  height: 46px;
`,L=n.li`
  background-color: ${r.color.secondaryGrey};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${r.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,y=n.div`
  display: flex;
  gap: 6px;
`,U=n.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;
`,D=n.p`
  color: ${r.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
`,S=n.p`
  font-size: 14px;
  line-height: 20px;
`,T=()=>{const t=a(w);return e.jsx(k,{children:t.map(o=>e.jsxs(L,{children:[e.jsx(R,{src:o.img,alt:o.name}),e.jsxs("div",{children:[e.jsx(U,{children:o.name}),e.jsxs(y,{children:[e.jsx(S,{children:o.amount}),e.jsxs(D,{children:[" ",o.calories," calories"]})]})]})]},o._id))})},W=n.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;

  @media screen and (min-width: ${r.breakpoint.tablet}) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 36px;
  }
`,M=()=>e.jsx(W,{children:"Recommended food"}),I=""+new URL("recomDesc-4e0d2a26.png",import.meta.url).href,z=""+new URL("recomDesc-e9b0ef00.webp",import.meta.url).href,m=""+new URL("recomDesk@2x-aafdc51a.png",import.meta.url).href,E=""+new URL("recomDesk@2x-815ccbd7.webp",import.meta.url).href,v=""+new URL("recomMob-421f1f54.png",import.meta.url).href,C=""+new URL("recomMob-d5240a6a.webp",import.meta.url).href,F=""+new URL("recomMob@2x-9785c18f.png",import.meta.url).href,H=""+new URL("recomMob@2x-555db460.webp",import.meta.url).href,G=""+new URL("recomTab-de2e4f51.png",import.meta.url).href,N=""+new URL("recomTab-0743b43e.webp",import.meta.url).href,P=""+new URL("recomTab@2x-f2ee1164.png",import.meta.url).href,A=""+new URL("recomTab@2x-8d104968.webp",import.meta.url).href,_=n.img`
  margin-bottom: 24px;

  @media screen and (min-width: ${r.breakpoint.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    max-height: 396px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    margin-bottom: 0px;
    max-width: 536px;
    max-height: 560px;
  }
`,q=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${z} 1x, ${E} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${I} 1x, ${m} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${N} 1x, ${A} 2x`,media:"(min-width: 768px)",type:"image/webp"}),e.jsx("source",{srcSet:`${G} 1x, ${P} 2x`,media:"(min-width: 768px)",type:"image/png"}),e.jsx("source",{srcSet:`${C} 1x, ${H} 2x`,media:"(max-width: 767px)",type:"image/webp"}),e.jsx("source",{srcSet:`${v} 1x, ${F} 2x`,media:"(max-width: 767px)",type:"image/png"}),e.jsx(_,{src:m,alt:"recommended food"})]}),B=n.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${r.breakpoint.tablet}) {
    max-width: 780px;
    padding: 24px 6px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`,J=n.div`
  @media screen and (min-width: ${r.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`,O=()=>{const t=f(),o=a(j),s=a($);return h.useEffect(()=>{t(l())},[t]),e.jsxs(B,{children:[e.jsx(M,{}),e.jsxs(J,{children:[e.jsx(q,{}),o&&e.jsx(u,{}),s?e.jsx("p",{children:"Error ... "}):e.jsx(T,{})]})]})};export{O as default};
