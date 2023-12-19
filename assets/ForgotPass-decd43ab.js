import{s as o,t as r,j as e,L as c}from"./index-75429820.js";import{D as h,M as u,S as g,F as b,l as j,m as w,A as t,o as f,B as y,p as S,W as $,C as _,q as v,_ as k,a as I,b as n,c as W,d as D,e as F,f as P,g as M,h as L,i as T,j as B,k as C,I as q}from"./SignUpContent.styled-828eb424.js";import{u as A}from"./index.esm-de873960.js";import{L as E}from"./SignInContent.styled-692eb2a9.js";import{b as N}from"./index-74f8ba9b.js";import"./index-387d7a00.js";const O=o.div`
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
`,R=o.label`
  // margin: auto;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${r.color.primaryGreenLite};
  background: ${r.color.primaryBlack2};
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
`,G=()=>{const d=s=>{s.preventDefault();const x={email:s.currentTarget.elements.email.value};localStorage.setItem("reg",JSON.stringify(x))},{values:l,errors:i,touched:a,handleBlur:m,handleChange:p}=A({initialValues:{email:""},validationSchema:N});return e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(u,{children:"Forgot your password"}),e.jsx(g,{children:"We will send you an email with recovery instructions"}),e.jsxs(b,{onSubmit:d,children:[e.jsxs(j,{children:[e.jsx(R,{className:i.email&&a.email?"input-error":"",children:e.jsx(w,{onBlur:m,onChange:p,value:l.email,name:"email",placeholder:"E-mail",required:!0})}),i.email&&a.email&&e.jsx(t,{children:i.email}),i.password&&a.password&&e.jsx(t,{children:i.password})]}),e.jsx(f,{children:e.jsx(y,{type:"submit",children:"Send"})})]}),e.jsxs(O,{children:[e.jsx(S,{children:"Do you already have an account?"}),e.jsx(E,{children:e.jsx(c,{to:"/signup",children:"Sign in"})})]})]})})},X=()=>e.jsx(e.Fragment,{children:e.jsx($,{children:e.jsx(_,{children:e.jsxs(v,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${k} 1x, ${I} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${n} 1x, ${W} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${D} 1x, ${F} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${P} 1x, ${M} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${L} 1x, ${T} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${B} 1x, ${C} 2x`,type:"image/png"}),e.jsx(q,{src:n,alt:"Responsive"})]}),e.jsx(G,{})]})})})});export{X as default};
