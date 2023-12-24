import{u as t,t as r,e as i,j as e,a as s,r as p,p as c,q as x}from"./index-dcb5d6dd.js";import{s as d,I as h,a as g,b as l}from"./Item-01c4977b.js";const w=t.ul`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    max-width: 676px;
  }
`,b=t.li`
  background-color: ${r.color.primaryBlack2};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,u=()=>{const o=i(d);return e.jsx(w,{children:o.map(a=>e.jsx(b,{children:e.jsx(h,{item:a})},a._id))})},f=t.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 36px;
  }
`,j=()=>e.jsx(f,{children:"Recommended food"}),L=""+new URL("recomDesc-4e0d2a26.png",import.meta.url).href,$=""+new URL("recomDesc-e9b0ef00.webp",import.meta.url).href,n=""+new URL("recomDesk@2x-aafdc51a.png",import.meta.url).href,k=""+new URL("recomDesk@2x-815ccbd7.webp",import.meta.url).href,R=""+new URL("recomMob-421f1f54.png",import.meta.url).href,y=""+new URL("recomMob-d5240a6a.webp",import.meta.url).href,U=""+new URL("recomMob@2x-9785c18f.png",import.meta.url).href,T=""+new URL("recomMob@2x-555db460.webp",import.meta.url).href,D=""+new URL("recomTab-de2e4f51.png",import.meta.url).href,M=""+new URL("recomTab-0743b43e.webp",import.meta.url).href,W=""+new URL("recomTab@2x-f2ee1164.png",import.meta.url).href,I=""+new URL("recomTab@2x-8d104968.webp",import.meta.url).href,S=t.img`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
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
`,E=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${$} 1x, ${k} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${L} 1x, ${n} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${M} 1x, ${I} 2x`,media:"(min-width: 768px)",type:"image/webp"}),e.jsx("source",{srcSet:`${D} 1x, ${W} 2x`,media:"(min-width: 768px)",type:"image/png"}),e.jsx("source",{srcSet:`${y} 1x, ${T} 2x`,media:"(max-width: 767px)",type:"image/webp"}),e.jsx("source",{srcSet:`${R} 1x, ${U} 2x`,media:"(max-width: 767px)",type:"image/png"}),e.jsx(S,{src:n,alt:"recommended food"})]}),z=t.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    max-width: 800px;
    padding: 24px 10px;
  }

  @media screen and (min-width: ${r.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`,F=t.div`
  @media screen and (min-width: ${r.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`,q=()=>{const o=s(),a=i(g),m=i(l);return p.useEffect(()=>{o(c())},[o]),e.jsxs(z,{children:[e.jsx(j,{}),e.jsxs(F,{children:[e.jsx(E,{}),a&&e.jsx(x,{}),m?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(u,{})]})]})};export{q as default};
