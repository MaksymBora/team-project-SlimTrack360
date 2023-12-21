import{s as d,t,j as e,L as u}from"./index-6c485a6d.js";import{D as h,M as g,S as b,F as j,l as w,m as f,A as n,o as y,B as S,p as $,W as _,C as v,q as P,_ as k,a as I,b as o,c as W,d as D,e as q,f as F,g as M,h as L,i as T,j as B,k as C,I as E}from"./SignUpContent.styled-6dce59fe.js";import{c as N,a as i,u as A}from"./index.esm-d958d285.js";import{L as O}from"./SignInContent.styled-988c0bb3.js";import"./index-387d7a00.js";const R=d.div`
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
`,J=N().shape({name:i().required("Name is required*"),email:i().email("Enter a valid Email*").required("Email is required*"),password:i().required("Password is required*").min(8,"Password must be at least 8 characters long").max(64,"Password must not exceed 64 characters")}),V=()=>{const l=r=>{r.preventDefault();const x={email:r.currentTarget.elements.email.value};localStorage.setItem("reg",JSON.stringify(x))},{values:m,errors:a,touched:s,handleBlur:c,handleChange:p}=A({initialValues:{email:""},validationSchema:J});return e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(g,{children:"Forgot your password"}),e.jsx(b,{children:"We will send you an email with recovery instructions"}),e.jsxs(j,{onSubmit:l,children:[e.jsxs(w,{children:[e.jsx(G,{className:a.email&&s.email?"input-error":"",children:e.jsx(f,{onBlur:c,onChange:p,value:m.email,name:"email",placeholder:"E-mail",required:!0})}),a.email&&s.email&&e.jsx(n,{children:a.email}),a.password&&s.password&&e.jsx(n,{children:a.password})]}),e.jsx(y,{children:e.jsx(S,{type:"submit",children:"Send"})})]}),e.jsxs(R,{children:[e.jsx($,{children:"Do you already have an account?"}),e.jsx(O,{children:e.jsx(u,{to:"/signup",children:"Sign in"})})]})]})})},Y=()=>e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsx(v,{children:e.jsxs(P,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${k} 1x, ${I} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${o} 1x, ${W} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${D} 1x, ${q} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${F} 1x, ${M} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${L} 1x, ${T} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${B} 1x, ${C} 2x`,type:"image/png"}),e.jsx(E,{src:o,alt:"Responsive"})]}),e.jsx(V,{})]})})})});export{Y as default};
