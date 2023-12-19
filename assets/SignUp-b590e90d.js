import{r as z,j as e,L as x,s as i,t}from"./index-75429820.js";import{u as h,c as b,a as T,b as g}from"./index.esm-de873960.js";import{b as q}from"./index-74f8ba9b.js";import{D as Z,M as N,S as V,F as H,l as Y,L as y,m as j,A as $,n as O,o as J,B as K,O as Q,p as X,W as ee,C as ie,q as te,_ as ne,a as re,b as P,c as ae,d as oe,e as se,f as le,g as de,h as pe,i as me,j as ce,k as xe,I as he}from"./SignUpContent.styled-828eb424.js";import"./index-387d7a00.js";const ge=({setStep:a})=>{const[r,n]=z.useState(!1),l=S=>{S.preventDefault();const f=S.currentTarget,E={name:f.elements.name.value,email:f.elements.email.value,password:f.elements.password.value};localStorage.setItem("reg",JSON.stringify(E)),a(_=>_+=1)},{values:o,errors:s,touched:d,handleBlur:u,handleChange:w}=h({initialValues:{name:"",email:"",password:""},validationSchema:q}),I=()=>{n(!r)};return e.jsx(e.Fragment,{children:e.jsxs(Z,{children:[e.jsx(N,{children:"Sign up"}),e.jsx(V,{children:"You need to register to use the service"}),e.jsxs(H,{onSubmit:l,children:[e.jsxs(Y,{children:[e.jsx(y,{className:s.name&&d.name?"input-error":"",children:e.jsx(j,{onChange:w,onBlur:u,value:o.name,name:"name",placeholder:"Name",required:!0})}),s.name&&d.name&&e.jsx($,{children:s.name}),e.jsx(y,{className:s.email&&d.email?"input-error":"",children:e.jsx(j,{onChange:w,onBlur:u,value:o.email,name:"email",placeholder:"E-mail",required:!0})}),s.email&&d.email&&e.jsx($,{children:s.email}),e.jsxs(y,{className:s.password&&d.password?"input-error":"",children:[e.jsx(j,{type:r?"text":"password",onChange:w,onBlur:u,value:o.password,name:"password",placeholder:"Password",required:!0,autoComplete:"false"}),e.jsx(O,{onClick:I,children:r?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z",stroke:"white",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",stroke:"white",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_283_2250)",children:[e.jsx("path",{d:"M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664",stroke:"white",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M0.666748 0.666626L15.3334 15.3333",stroke:"white",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_283_2250",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]})}),s.password&&d.password&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z",fill:"#E74A3B"})})]}),s.password&&d.password&&e.jsx($,{children:s.password})]}),e.jsx(J,{children:e.jsx(K,{type:"submit",children:"Next"})})]}),e.jsxs(Q,{children:[e.jsx(X,{children:"Do you already have an account?"}),e.jsx(x,{to:"/signin",children:"Sign in"})]})]})})},be=""+new URL("goals-desctop-1x-min-ec310992.png",import.meta.url).href,ue=""+new URL("goals-desctop-2x-min-0f23bfa4.png",import.meta.url).href,we=""+new URL("goals-desctop-3x-min-941daa22.png",import.meta.url).href,R=""+new URL("goals-tablet-1x-min-2bcacd1b.png",import.meta.url).href,fe=""+new URL("goals-tablet-2x-min-8c3b42d0.png",import.meta.url).href,ye=""+new URL("goals-tablet-3x-min-ffc46a88.png",import.meta.url).href,je=""+new URL("goals-mobile-1x-min-42699cfa.png",import.meta.url).href,$e=""+new URL("goals-mobile-2x-min-de334632.png",import.meta.url).href,ve=""+new URL("goals-mobile-3x-min-ba20eade.png",import.meta.url).href,Le=""+new URL("goals-desctop-1x-min-217a3835.webp",import.meta.url).href,Ce=""+new URL("goals-desctop-2x-min-9eb37e8e.webp",import.meta.url).href,Se=""+new URL("goals-desctop-3x-min-0bf413bb.webp",import.meta.url).href,Pe=""+new URL("goals-tablet-1x-min-19a7877f.webp",import.meta.url).href,Re=""+new URL("goals-tablet-2x-min-97b1e256.webp",import.meta.url).href,Ue=""+new URL("goals-tablet-3x-min-60c523e2.webp",import.meta.url).href,ke=""+new URL("goals-mobile-1x-min-d37bacfe.webp",import.meta.url).href,We=""+new URL("goals-mobile-2x-min-87157aa0.webp",import.meta.url).href,Ae=""+new URL("goals-mobile-3x-min-4dce3d00.webp",import.meta.url).href,Me=i.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    width: 800px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 104px;
  }
`,Be=i.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 834px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`,Fe=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`,Ge=i.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 444px;
  }
`,De=i.picture`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }
`,ze=i.h1`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1440px) {
  }
`,Te=i.h1`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,Ie=i(x)`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  text-align: center;
  transition: ${t.transition.main};
  &:hover,
  &:focus {
    color: ${t.color.primaryGreenLite};
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,Ee=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 212px;
    align-items: center;
  }
`,_e=i.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,qe=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,Ze=i.button`
  border-radius: 12px;
  background: ${t.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${t.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${t.color.primaryGreenLite};
  }
`,v=i.label`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 18px;
  cursor: pointer;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background: ${t.color.primaryGreenLite};
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
  }
`,L=i.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
  }
`,C=i.span`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid ${t.color.primaryGrey};
    display: inline-block;
    border-radius: 100%;
    position: absolute;
  }
`,Ne=({setStep:a})=>{const r=b().shape({goal:T().required()}),n=h({initialValues:{goal:"lose fat"},validationSchema:r,onSubmit:l=>{console.log(l),a(o=>o+=1)}});return e.jsx(Be,{children:e.jsx(Me,{children:e.jsxs(Fe,{children:[e.jsxs(De,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${Le} 1x, ${Ce} 2x, ${Se} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${be} 1x, ${ue} 2x, ${we} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${Pe} 1x, ${Re} 2x, ${Ue} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${R} 1x, ${fe} 2x, ${ye} 3x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${ke} 1x, ${We} 2x, ${Ae} 3x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${je} 1x, ${$e} 2x, ${ve} 3x`,type:"image/png"}),e.jsx("img",{src:R,alt:"Goal"})]}),e.jsxs(Ge,{children:[e.jsx(ze,{children:"Your goal"}),e.jsx(Te,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(Ee,{children:[e.jsxs(_e,{onSubmit:n.handleSubmit,children:[e.jsxs(qe,{children:[e.jsxs(C,{children:[e.jsx(L,{type:"radio",id:"lose_fat",name:"goal",value:"Lose Fat",onChange:n.handleChange,defaultChecked:!0}),e.jsx(v,{htmlFor:"lose_fat",children:"Lose Fat"})]}),e.jsxs(C,{children:[e.jsx(L,{type:"radio",id:"maintain",name:"goal",value:"Maintain",onChange:n.handleChange}),e.jsx(v,{htmlFor:"maintain",children:"Maintain"})]}),e.jsxs(C,{children:[e.jsx(L,{type:"radio",id:"gain_muscle",name:"goal",value:"Gain Muscle",onChange:n.handleChange}),e.jsx(v,{htmlFor:"gain_muscle",children:"Gain Muscle"})]})]}),e.jsx(Ze,{type:"submit",children:"Next"})]}),e.jsx(Ie,{children:"Back"})]})]})]})})})},Ve=""+new URL("genderAge-desctop-1x-min-754e1a27.png",import.meta.url).href,He=""+new URL("genderAge-desctop-2x-min-4fae2f2a.png",import.meta.url).href,Ye=""+new URL("genderAge-desctop-3x-min-63bb302d.png",import.meta.url).href,U=""+new URL("genderAge-tablet-1x-min-e2dbfac7.png",import.meta.url).href,Oe=""+new URL("genderAge-tablet-2x-min-8669b472.png",import.meta.url).href,Je=""+new URL("genderAge-tablet-3x-min-28315e3e.png",import.meta.url).href,Ke=""+new URL("genderAge-mobile-1x-min-2bd843f6.png",import.meta.url).href,Qe=""+new URL("genderAge-mobile-2x-min-a6018006.png",import.meta.url).href,Xe=""+new URL("genderAge-mobile-3x-min-e5c3574f.png",import.meta.url).href,ei=""+new URL("genderAge-desctop-1x-min-5d6401f5.webp",import.meta.url).href,ii=""+new URL("genderAge-desctop-2x-min-d537c85a.webp",import.meta.url).href,ti=""+new URL("genderAge-desctop-3x-min-aa8cae43.webp",import.meta.url).href,ni=""+new URL("genderAge-tablet-1x-min-a802dcab.webp",import.meta.url).href,ri=""+new URL("genderAge-tablet-2x-min-20cab01d.webp",import.meta.url).href,ai=""+new URL("genderAge-tablet-3x-min-f2f210ab.webp",import.meta.url).href,oi=""+new URL("genderAge-mobile-1x-min-8f811a79.webp",import.meta.url).href,si=""+new URL("genderAge-mobile-2x-min-7b93c278.webp",import.meta.url).href,li=""+new URL("genderAge-mobile-3x-min-49e27739.webp",import.meta.url).href,di=i.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    width: 800px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 104px;
  }
`,pi=i.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 834px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`,mi=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`,ci=i.div`
  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 380px;
  }
`,xi=i.picture`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }
`,hi=i.h1`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,gi=i.h2`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,bi=i.h3`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,ui=i(x)`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  text-align: center;
  transition: ${t.transition.main};
  &:hover,
  &:focus {
    color: ${t.color.primaryGreenLite};
  }
`,wi=i.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,fi=i.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,yi=i.div`
  display: flex;
  gap: 96px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,ji=i.button`
  border-radius: 12px;
  background: ${t.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${t.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${t.color.primaryGreenLite};
  }
`,k=i.label`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 18px;
  cursor: pointer;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background: ${t.color.primaryGreenLite};
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
  }
`,W=i.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
  }
`,A=i.span`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid ${t.color.primaryGrey};
    display: inline-block;
    border-radius: 100%;
    position: absolute;
  }
`,$i=i.span`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,vi=i.label`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,Li=i.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  border-radius: 12px;
  color: ${t.color.primaryWhite};
  border: 1px solid ${t.color.primaryGreenLite};
  background: ${t.color.primaryBlack2};
  padding: 8px 10px;
  &::placeholder {
    color: ${t.color.primaryGrey};
  }
`,Ci=i.div`
  width: 250px;
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
`,Si=i.svg`
  position: absolute;
  top: -32px;
  left: 272px;

  @media screen and (min-width: 834px) {
    left: 352px;
  }

  @media screen and (min-width: 1440px) {
    left: 185px;
  }
`,Pi=({setStep:a})=>{const r=b().shape({sex:T().required("Please select your gender"),age:g().typeError("Age must be a number").required("Please enter your age").positive("Age must be a positive number").integer("Age must be an integer").min(16,"Age must be at least 16 years old").max(100,"Age must be at most 100 years old")}),n=h({initialValues:{sex:"male",age:""},validationSchema:r,onSubmit:l=>{console.log(l),a(o=>o+=1)}});return e.jsx(pi,{children:e.jsx(di,{children:e.jsxs(mi,{children:[e.jsxs(xi,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${ei} 1x, ${ii} 2x, ${ti} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${Ve} 1x, ${He} 2x, ${Ye} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${ni} 1x, ${ri} 2x, ${ai} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${U} 1x, ${Oe} 2x, ${Je} 3x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${oi} 1x, ${si} 2x, ${li} 3x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${Ke} 1x, ${Qe} 2x, ${Xe} 3x`,type:"image/png"}),e.jsx("img",{src:U,alt:"Goal"})]}),e.jsxs(ci,{children:[e.jsx(hi,{children:"Select gender, Age"}),e.jsx(gi,{children:"Choose a goal so that we can help you effectively"}),e.jsxs(wi,{children:[e.jsx(bi,{children:"Gender"}),e.jsxs(fi,{onSubmit:n.handleSubmit,children:[e.jsxs(yi,{children:[e.jsxs(A,{children:[e.jsx(W,{type:"radio",id:"male",name:"sex",value:"male",onChange:n.handleChange,defaultChecked:!0}),e.jsx(k,{htmlFor:"male",children:"Male"})]}),e.jsxs(A,{children:[e.jsx(W,{type:"radio",id:"female",name:"sex",value:"female",onChange:n.handleChange}),e.jsx(k,{htmlFor:"female",children:"Female"})]})]}),e.jsxs($i,{children:[e.jsx(vi,{htmlFor:"ageInput",children:"Your age"}),e.jsx(Li,{type:"number",id:"ageInput",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age,style:{border:n.errors.age&&n.touched.age?"1px solid #e74a3b":"1px solid #E3FFA8"}}),n.errors.age&&n.touched.age?e.jsxs(Ci,{children:[n.errors.age,e.jsx(Si,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z",fill:"#E74A3B"})})]}):null]}),e.jsx(ji,{type:"submit",children:"Next"})]}),e.jsx(ui,{children:"Back"})]})]})]})})})},Ri=""+new URL("bodyParam-desctop-1x-min-6bfe3d7c.png",import.meta.url).href,Ui=""+new URL("bodyParam-desctop-2x-min-eec698e7.png",import.meta.url).href,ki=""+new URL("bodyParam-desctop-3x-min-dbc57aec.png",import.meta.url).href,M=""+new URL("bodyParam-tablet-1x-min-19155277.png",import.meta.url).href,Wi=""+new URL("bodyParam-tablet-2x-min-c6df0d48.png",import.meta.url).href,Ai=""+new URL("bodyParam-tablet-3x-min-3f4b11ae.png",import.meta.url).href,Mi=""+new URL("bodyParam-mobile-1x-min-9d091d2f.png",import.meta.url).href,Bi=""+new URL("bodyParam-mobile-2x-min-56025cfd.png",import.meta.url).href,Fi=""+new URL("bodyParam-mobile-3x-min-79ba20af.png",import.meta.url).href,Gi=""+new URL("bodyParam-desctop-1x-min-e9cf886a.webp",import.meta.url).href,Di=""+new URL("bodyParam-desctop-2x-min-0b7cbe67.webp",import.meta.url).href,zi=""+new URL("bodyParam-desctop-3x-min-64f02de5.webp",import.meta.url).href,Ti=""+new URL("bodyParam-tablet-1x-min-adb344e8.webp",import.meta.url).href,Ii=""+new URL("bodyParam-tablet-2x-min-f6089a67.webp",import.meta.url).href,Ei=""+new URL("bodyParam-tablet-3x-min-abe43383.webp",import.meta.url).href,_i=""+new URL("bodyParam-mobile-1x-min-4a2ab107.webp",import.meta.url).href,qi=""+new URL("bodyParam-mobile-2x-min-23f77bff.webp",import.meta.url).href,Zi=""+new URL("bodyParam-mobile-3x-min-58c8b1a3.webp",import.meta.url).href,Ni=i.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    width: 800px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 104px;
  }
`,Vi=i.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 834px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`,Hi=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`,Yi=i.div`
  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 380px;
  }
`,Oi=i.picture`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }
`,Ji=i.h1`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,Ki=i.h2`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  width: 280px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,Qi=i(x)`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  text-align: center;
  transition: ${t.transition.main};
  &:hover,
  &:focus {
    color: ${t.color.primaryGreenLite};
  }
`,Xi=i.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,et=i.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,it=i.button`
  border-radius: 12px;
  background: ${t.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${t.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${t.color.primaryGreenLite};
  }
`,tt=i.span`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,nt=i.span`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,B=i.label`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,F=i.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  border-radius: 12px;
  color: ${t.color.primaryWhite};
  border: 1px solid ${t.color.primaryGreenLite};
  background: ${t.color.primaryBlack2};
  padding: 8px 10px;
  &::placeholder {
    color: ${t.color.primaryGrey};
  }
`,rt=i.div`
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
  display: flex;
  align-items: center;
`,at=i.div`
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
`,G=i.svg`
  position: absolute;
  top: -32px;
  left: 273px;
  @media screen and (min-width: 834px) {
    left: 352px;
  }

  @media screen and (min-width: 1440px) {
    left: 185px;
  }
`,ot=({setStep:a})=>{const r=b().shape({height:g().typeError("Height must be a number").required("Please enter your height").positive("Height must be a positive number").integer("Height must be an integer").min(100,"Height must be at least 100 cm").max(250,"Height must be at most 250 cm"),weight:g().typeError("Weight must be a number").required("Please enter your weight").positive("Weight must be a positive number").integer("Weight must be an integer").min(5,"Weight must be at least 5 kg").max(150,"Weight must be at most 150 kg")}),n=h({initialValues:{height:"",weight:""},validationSchema:r,onSubmit:l=>{console.log(l),a(o=>o+=1)}});return e.jsx(Vi,{children:e.jsx(Ni,{children:e.jsxs(Hi,{children:[e.jsxs(Oi,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${Gi} 1x, ${Di} 2x, ${zi} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${Ri} 1x, ${Ui} 2x, ${ki} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${Ti} 1x, ${Ii} 2x, ${Ei} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${M} 1x, ${Wi} 2x, ${Ai} 3x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${_i} 1x, ${qi} 2x, ${Zi} 3x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${Mi} 1x, ${Bi} 2x, ${Fi} 3x`,type:"image/png"}),e.jsx("img",{src:M,alt:"Goal"})]}),e.jsxs(Yi,{children:[e.jsx(Ji,{children:"Body parameters"}),e.jsx(Ki,{children:"Enter your parameters for correct performance tracking"}),e.jsxs(Xi,{children:[e.jsxs(et,{onSubmit:n.handleSubmit,children:[e.jsxs(tt,{children:[e.jsx(B,{htmlFor:"heightInput",children:"Height"}),e.jsx(F,{type:"number",id:"heightInput",name:"height",placeholder:"Enter your height",onChange:n.handleChange,value:n.values.height,style:{border:n.errors.height&&n.touched.height?"1px solid #e74a3b":"1px solid #E3FFA8"}}),n.errors.height&&n.touched.height?e.jsxs(rt,{children:[n.errors.height,e.jsx(G,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z",fill:"#E74A3B"})})]}):null]}),e.jsxs(nt,{children:[e.jsx(B,{htmlFor:"weightInput",children:"Weight"}),e.jsx(F,{type:"number",id:"weightInput",name:"weight",placeholder:"Enter your weight",onChange:n.handleChange,value:n.values.weight,style:{border:n.errors.weight&&n.touched.weight?"1px solid #e74a3b":"1px solid #E3FFA8"}}),n.errors.weight&&n.touched.weight?e.jsxs(at,{children:[n.errors.weight,e.jsx(G,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z",fill:"#E74A3B"})})]}):null]}),e.jsx(it,{type:"submit",children:"Next"})]}),e.jsx(Qi,{children:"Back"})]})]})]})})})},st=""+new URL("activity-desctop-1x-min-4a2f8deb.png",import.meta.url).href,lt=""+new URL("activity-desctop-2x-min-dac8623d.png",import.meta.url).href,dt=""+new URL("activity-desctop-3x-min-0332f4f4.png",import.meta.url).href,D=""+new URL("activity-tablet-1x-min-9961e230.png",import.meta.url).href,pt=""+new URL("activity-tablet-2x-min-6ef32cc7.png",import.meta.url).href,mt=""+new URL("activity-tablet-3x-min-f6582795.png",import.meta.url).href,ct=""+new URL("activity-mobile-1x-min-29c59378.png",import.meta.url).href,xt=""+new URL("activity-mobile-2x-min-2011364a.png",import.meta.url).href,ht=""+new URL("activity-mobile-3x-min-e60debe1.png",import.meta.url).href,gt=""+new URL("activity-desctop-1x-min-049abc15.webp",import.meta.url).href,bt=""+new URL("activity-desctop-2x-min-c09229ae.webp",import.meta.url).href,ut=""+new URL("activity-desctop-3x-min-944a92ae.webp",import.meta.url).href,wt=""+new URL("activity-tablet-1x-min-72b055fe.webp",import.meta.url).href,ft=""+new URL("activity-tablet-2x-min-2c69b071.webp",import.meta.url).href,yt=""+new URL("activity-tablet-3x-min-2363ed77.webp",import.meta.url).href,jt=""+new URL("activity-mobile-1x-min-371be541.webp",import.meta.url).href,$t=""+new URL("activity-mobile-2x-min-3081c833.webp",import.meta.url).href,vt=""+new URL("activity-mobile-3x-min-a435531f.webp",import.meta.url).href,Lt=i.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    width: 800px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 104px;
  }
`,Ct=i.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 834px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`,St=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`,Pt=i.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 308px;
  }
`,Rt=i.picture`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }
`,Ut=i.h1`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1440px) {
  }
`,kt=i.h2`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  width: 298px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`,Wt=i(x)`
  color: ${t.color.primaryGrey};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  text-align: center;
  transition: ${t.transition.main};
  &:hover,
  &:focus {
    color: ${t.color.primaryGreenLite};
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`,At=i.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 212px;
    align-items: stretch;
  }
`,Mt=i.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    align-items: stretch;
  }
`,Bt=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    width: 458px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    width: 328px;
  }
`,Ft=i.button`
  border-radius: 12px;
  background: ${t.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${t.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${t.color.primaryGreenLite};
  }

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,p=i.label`
  color: ${t.color.primaryWhite};
  font-family: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 18px;
  cursor: pointer;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background: ${t.color.primaryGreenLite};
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
  }

  @media screen and (min-width: 834px) {
    display: inline-block;
    width: 100%;
  }
`,m=i.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
  }
`,c=i.span`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid ${t.color.primaryGrey};
    display: inline-block;
    border-radius: 100%;
    position: absolute;
  }
`,Gt=()=>{const a=b().shape({activity:g().required()}),r=h({initialValues:{activity:"1.2"},validationSchema:a,onSubmit:n=>{const o={activity:parseFloat(n.activity)};console.log(o)}});return e.jsx(Ct,{children:e.jsx(Lt,{children:e.jsxs(St,{children:[e.jsxs(Rt,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${gt} 1x, ${bt} 2x, ${ut} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${st} 1x, ${lt} 2x, ${dt} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${wt} 1x, ${ft} 2x, ${yt} 3x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 834px)",srcSet:`${D} 1x, ${pt} 2x, ${mt} 3x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${jt} 1x, ${$t} 2x, ${vt} 3x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 833px)",srcSet:`${ct} 1x, ${xt} 2x, ${ht} 3x`,type:"image/png"}),e.jsx("img",{src:D,alt:"Goal"})]}),e.jsxs(Pt,{children:[e.jsx(Ut,{children:"Your Activity"}),e.jsx(kt,{children:"To correctly calculate calorie and water intake"}),e.jsxs(At,{children:[e.jsxs(Mt,{onSubmit:r.handleSubmit,children:[e.jsxs(Bt,{children:[e.jsxs(c,{children:[e.jsx(m,{type:"radio",id:"1.2",name:"activity",value:1.2,onChange:r.handleChange,defaultChecked:!0}),e.jsx(p,{htmlFor:"1.2",children:"1.2 - if you do not have physical activity and sedentary work"})]}),e.jsxs(c,{children:[e.jsx(m,{type:"radio",id:"1.375",name:"activity",value:1.375,onChange:r.handleChange}),e.jsx(p,{htmlFor:"1.375",children:"1.375 - if you do short runs or light gymnastics 1-3 times a week"})]}),e.jsxs(c,{children:[e.jsx(m,{type:"radio",id:"1.55",name:"activity",value:1.55,onChange:r.handleChange}),e.jsx(p,{htmlFor:"1.55",children:"1.55 - if you play sports with average loads 3-5 times a week"})]}),e.jsxs(c,{children:[e.jsx(m,{type:"radio",id:"1.725",name:"activity",value:1.725,onChange:r.handleChange}),e.jsx(p,{htmlFor:"1.725",children:"1.725 - if you train fully 6-7 times a week"})]}),e.jsxs(c,{children:[e.jsx(m,{type:"radio",id:"1.9",name:"activity",value:1.9,onChange:r.handleChange}),e.jsx(p,{htmlFor:"1.9",children:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"})]})]}),e.jsx(Ft,{type:"submit",children:"Sign Up"})]}),e.jsx(Wt,{children:"Back"})]})]})]})})})},_t=()=>{const[a,r]=z.useState(1);return console.log(a),e.jsx(e.Fragment,{children:e.jsxs(ee,{children:[a===1&&e.jsx(ie,{children:e.jsxs(te,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${ne} 1x, ${re} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${P} 1x, ${ae} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${oe} 1x, ${se} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${le} 1x, ${de} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${pe} 1x, ${me} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${ce} 1x, ${xe} 2x`,type:"image/png"}),e.jsx(he,{src:P,alt:"Responsive"})]}),e.jsx(ge,{setStep:r})]})}),a===2&&e.jsx(Ne,{setStep:r}),a===3&&e.jsx(Pi,{setStep:r}),a===4&&e.jsx(ot,{setStep:r}),a===5&&e.jsx(Gt,{setStep:r})]})})};export{_t as default};
