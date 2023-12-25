import{u as d,t as n,a as u,b as h,j as e,L as g,i as b}from"./index-f1595a61.js";import{D as j,M as w,S as f,F as y,l as $,m as S,A as _,o as v,B as P,p as k,W as D,C as W,q as I,_ as q,a as F,b as o,c as M,d as L,e as T,f as B,g as C,h as E,i as A,j as N,k as R,I as G}from"./SignUpContent.styled-589671f8.js";import{L as O}from"./SignInContent.styled-f8bf701d.js";import{c as V,a as i}from"./index.esm-8ee457d0.js";import"./index-387d7a00.js";const z=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 56px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding-top: 286px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 248px;
  }
`,H=d.label`
  // margin: auto;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${n.color.primaryGreenLite};
  background: ${n.color.primaryBlack2};
  &.input-error {
    border-color: #e74a3b;
  }
  @media screen and (min-width: 834px) {
    width: 380px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin: auto;
  }
`,J=V().shape({name:i().required("Name is required*"),email:i().email("Enter a valid Email*").required("Email is required*"),password:i().required("Password is required*").min(8,"Password must be at least 8 characters long").max(64,"Password must not exceed 64 characters")}),K=()=>{const l=u(),m=r=>{r.preventDefault();const t={email:r.currentTarget.elements.email.value};l(b(t)),console.log(t)},{values:c,errors:a,touched:s,handleBlur:p,handleChange:x}=h({initialValues:{email:""},validationSchema:J});return e.jsx(e.Fragment,{children:e.jsxs(j,{children:[e.jsx(w,{children:"Forgot your password"}),e.jsx(f,{children:"We will send you an email with recovery instructions"}),e.jsxs(y,{onSubmit:m,children:[e.jsxs($,{children:[e.jsx(H,{className:a.email&&s.email?"input-error":"",children:e.jsx(S,{onBlur:p,onChange:x,value:c.email,name:"email",placeholder:"E-mail",required:!0})}),a.email&&s.email&&e.jsx(_,{children:a.email})]}),e.jsx(v,{children:e.jsx(P,{type:"submit",children:"Send"})})]}),e.jsxs(z,{children:[e.jsx(k,{children:"Do you already have an account?"}),e.jsx(O,{children:e.jsx(g,{to:"/signup",children:"Sign in"})})]})]})})},ae=()=>e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsx(W,{children:e.jsxs(I,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${q} 1x, ${F} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${o} 1x, ${M} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${L} 1x, ${T} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${B} 1x, ${C} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${E} 1x, ${A} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${N} 1x, ${R} 2x`,type:"image/png"}),e.jsx(G,{src:o,alt:"Responsive"})]}),e.jsx(K,{})]})})})});export{ae as default};
