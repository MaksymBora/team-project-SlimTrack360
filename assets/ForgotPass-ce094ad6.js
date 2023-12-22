import{s as d,t,a as u,j as e,L as h}from"./index-114e843c.js";import{D as g,M as b,S as j,F as w,l as f,m as y,A as n,o as S,B as $,p as _,W as v,C as P,q as k,_ as I,a as W,b as o,c as D,d as q,e as F,f as M,g as L,h as T,i as B,j as C,k as E,I as N}from"./SignUpContent.styled-0fbbc277.js";import{L as A}from"./SignInContent.styled-ae518e8c.js";import{c as O,a as i}from"./index.esm-b36396c7.js";import"./index-387d7a00.js";const R=d.div`
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
`,G=d.label`
  // margin: auto;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${t.color.primaryGreenLite};
  background: ${t.color.primaryBlack2};
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
`,J=O().shape({name:i().required("Name is required*"),email:i().email("Enter a valid Email*").required("Email is required*"),password:i().required("Password is required*").min(8,"Password must be at least 8 characters long").max(64,"Password must not exceed 64 characters")}),V=()=>{const l=r=>{r.preventDefault();const x={email:r.currentTarget.elements.email.value};localStorage.setItem("reg",JSON.stringify(x))},{values:m,errors:a,touched:s,handleBlur:c,handleChange:p}=u({initialValues:{email:""},validationSchema:J});return e.jsx(e.Fragment,{children:e.jsxs(g,{children:[e.jsx(b,{children:"Forgot your password"}),e.jsx(j,{children:"We will send you an email with recovery instructions"}),e.jsxs(w,{onSubmit:l,children:[e.jsxs(f,{children:[e.jsx(G,{className:a.email&&s.email?"input-error":"",children:e.jsx(y,{onBlur:c,onChange:p,value:m.email,name:"email",placeholder:"E-mail",required:!0})}),a.email&&s.email&&e.jsx(n,{children:a.email}),a.password&&s.password&&e.jsx(n,{children:a.password})]}),e.jsx(S,{children:e.jsx($,{type:"submit",children:"Send"})})]}),e.jsxs(R,{children:[e.jsx(_,{children:"Do you already have an account?"}),e.jsx(A,{children:e.jsx(h,{to:"/signup",children:"Sign in"})})]})]})})},Y=()=>e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsx(P,{children:e.jsxs(k,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${I} 1x, ${W} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${o} 1x, ${D} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${q} 1x, ${F} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${M} 1x, ${L} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${T} 1x, ${B} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${C} 1x, ${E} 2x`,type:"image/png"}),e.jsx(N,{src:o,alt:"Responsive"})]}),e.jsx(V,{})]})})})});export{Y as default};
