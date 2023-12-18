import{s as r,t,u as i,j as e,r as s,f as p,b as c}from"./index-b3c6b05f.js";import{s as d,I as x,a as h,b}from"./Item-322e951c.js";import{u as g}from"./useDispatch-e6682161.js";const l=r.ul`
  @media screen and (min-width: ${t.breakpoint.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    max-width: 676px;
  }
`,w=r.li`
  background-color: ${t.color.secondaryGrey};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,u=()=>{const o=i(d);return e.jsx(l,{children:o.map(a=>e.jsx(w,{children:e.jsx(x,{item:a})},a._id))})},f=r.h2`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 36px;
  }
`,$=()=>e.jsx(f,{children:"Recommended food"}),j=""+new URL("recomDesc-4e0d2a26.png",import.meta.url).href,k=""+new URL("recomDesc-e9b0ef00.webp",import.meta.url).href,n=""+new URL("recomDesk@2x-aafdc51a.png",import.meta.url).href,L=""+new URL("recomDesk@2x-815ccbd7.webp",import.meta.url).href,R=""+new URL("recomMob-421f1f54.png",import.meta.url).href,y=""+new URL("recomMob-d5240a6a.webp",import.meta.url).href,U=""+new URL("recomMob@2x-9785c18f.png",import.meta.url).href,T=""+new URL("recomMob@2x-555db460.webp",import.meta.url).href,D=""+new URL("recomTab-de2e4f51.png",import.meta.url).href,M=""+new URL("recomTab-0743b43e.webp",import.meta.url).href,W=""+new URL("recomTab@2x-f2ee1164.png",import.meta.url).href,I=""+new URL("recomTab@2x-8d104968.webp",import.meta.url).href,S=r.img`
  margin-bottom: 24px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    max-height: 396px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    margin-bottom: 0px;
    max-width: 536px;
    max-height: 560px;
  }
`,E=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${k} 1x, ${L} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${j} 1x, ${n} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${M} 1x, ${I} 2x`,media:"(min-width: 768px)",type:"image/webp"}),e.jsx("source",{srcSet:`${D} 1x, ${W} 2x`,media:"(min-width: 768px)",type:"image/png"}),e.jsx("source",{srcSet:`${y} 1x, ${T} 2x`,media:"(max-width: 767px)",type:"image/webp"}),e.jsx("source",{srcSet:`${R} 1x, ${U} 2x`,media:"(max-width: 767px)",type:"image/png"}),e.jsx(S,{src:n,alt:"recommended food"})]}),z=r.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    max-width: 780px;
    padding: 24px 6px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`,F=r.div`
  @media screen and (min-width: ${t.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`,N=()=>{const o=g(),a=i(h),m=i(b);return s.useEffect(()=>{o(p())},[o]),e.jsxs(z,{children:[e.jsx($,{}),e.jsxs(F,{children:[e.jsx(E,{}),a&&e.jsx(c,{}),m?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(u,{})]})]})};export{N as default};
