import{j as e,u as r,r as b,m as j,t as d,a as v,e as $,n as k,b as L,o as R,p as U}from"./index-a089e988.js";import{I as S}from"./Icon-232e6b89.js";import{c as A,a as F,b as u}from"./index.esm-af86d3df.js";const B=""+new URL("setDesk-b0655153.png",import.meta.url).href,C=""+new URL("setTab-ba48fc09.png",import.meta.url).href,D=""+new URL("setMob-731410b8.png",import.meta.url).href,f=""+new URL("setDesk@2x-6227369a.png",import.meta.url).href,W=""+new URL("setTab@2x-17bf131f.png",import.meta.url).href,G=""+new URL("setMob@2x-b67ee440.png",import.meta.url).href,M=""+new URL("setMob-62d05b7e.webp",import.meta.url).href,z=""+new URL("setMob@2x-7f4bbdde.webp",import.meta.url).href,T=""+new URL("setTab-1abdf41c.webp",import.meta.url).href,P=""+new URL("setTab@2x-d95e5618.webp",import.meta.url).href,q=""+new URL("setDesk-4ad72960.webp",import.meta.url).href,E=""+new URL("setDesk@2x-0f486487.webp",import.meta.url).href,I=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${q} 1x, ${E} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${B} 1x, ${f} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${T} 1x, ${P} 2x`,media:"(min-width: 834px)",type:"image/webp"}),e.jsx("source",{srcSet:`${C} 1x, ${W} 2x`,media:"(min-width: 834px)",type:"image/png"}),e.jsx("source",{srcSet:`${M} 1x, ${z} 2x`,media:"(max-width: 833px)",type:"image/webp"}),e.jsx("source",{srcSet:`${D} 1x, ${G} 2x`,media:"(max-width: 833px)",type:"image/png"}),e.jsx("img",{src:f,alt:"settings"})]}),N=r.section`
  width: 100%;
  height: 100%;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,Y=r.div`
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    width: 800px;
    padding: 0 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1382px;
    padding: 0 5px;
  }
`,O=r.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`,V=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;

  > img {
    max-width: 536px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`,H=r.button`
  background-color: transparent;
  color: ${t=>t.theme.color.primaryWhite};
  font-size: 14px;
  line-height: 1.4;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  overflow: hidden;
  white-space: nowrap;

  span {
    display: block;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 834px) {
    max-width: 219px;
  }
`,J=r.input`
  position: absolute;
  width: 1px;
  height: 1x;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  background: transparent;
  overflow: hidden;
`,w=r.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background: ${t=>t.$isDefault?t.theme.color.primaryGreenLite:"transparent"};

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
`,K=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Q=r.div`
  font-size: 24px;
  color: ${t=>t.theme.color.primaryBlack2};
  text-align: center;
  line-height: 24px;
  padding: 6px;
  font-weight: 500;
`,X=({handleSelect:t,avatar:i,text:n})=>{const[s,l]=b.useState(null),o=b.useRef(),c=j(),p=a=>{l(a.target.files[0]),t(a.target.files[0])},m=()=>{o.current.click()};return e.jsxs("div",{children:[e.jsxs(K,{children:[!i&&!s?e.jsx(w,{$isDefault:!0,children:e.jsx(Q,{children:n})}):e.jsx(w,{$isDefault:!1,children:e.jsx("img",{src:s?URL.createObjectURL(s):i,alt:"Profile Photo"})}),e.jsxs(H,{type:"button",onClick:m,children:[e.jsx(S,{name:"icon-direct-inbox",width:"16px",height:"16px",fill:c.color.primaryGreenLite}),e.jsx("span",{children:s?s.name:"Download new photo"})]})]}),e.jsx(J,{ref:o,type:"file",onChange:p,accept:"image/*,.png,.jpg,.web,.gif"})]})},Z=r.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 40px;
  width: 100%;

  @media screen and (min-width: 834px) {
    grid-template-columns: 212px 1fr;
    column-gap: 60px;
    max-width: 491px;
  }
`,g=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,h=r.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`,_=r.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`,ee=r(g)`
  @media screen and (min-width: 834px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`,te=r.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ie=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 3;

    button {
      width: 212px;
    }
  }
`,re=r.button`
  width: 100%;
  text-align: center;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: ${t=>t.theme.color.primaryGreenLite};
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
 transition: ${t=>t.theme.transition.main};
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    color: ${t=>t.theme.color.primaryWhite};
     background-color: transparent;
    border: 1px solid ${d.color.primaryGreenLite};
  }
  &:focus {
  border: 1px solid transparent;
    color: ${d.color.primaryBlack};
    background-color: ${d.color.primaryGreenLite};

  }
`,ne=r.button`
  font-size: 14px;
  line-height: 1.4;
  background-color: transparent;
  padding: 8px 10px;
  color: ${t=>t.theme.color.primaryGrey};
  border-radius: 12px;

  &:hover {
    color: ${d.color.primaryWhite};
    border: 1px solid ${t=>t.theme.color.primaryGreenLite};
  }
  &:active {
    outline: none;
    border: 1px solid ${t=>t.theme.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${d.color.primaryGreenLite};
    color: ${d.color.primaryBlack};
  }
  transition: ${t=>t.theme.transition.main};

`,oe=r.div`
  position: relative;
`,ae=r.input.attrs(t=>({$error:t.$error||!1}))`
  padding: 8px 10px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid ${t=>t.$error?"#E74A3B":t.theme.color.primaryGrey};
  color: ${t=>t.theme.color.primaryWhite};
  transition: all ${t=>t.theme.transition.main};
  outline: none;
  width: 100%;

  font-size: 14px;
  line-height: 1.4;

  &:hover,
  &:focus {
    border: 1px solid
      ${t=>t.$error?"#E74A3B":t.theme.color.primaryGreenLite};
    outline: none;
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,se=r.p`
  font-size: 12px;
  line-height: 1.17;
  color: #e74a3b;
  padding-left: 10px;

  position: absolute;
  top: calc(100% + 4px);
  left: 0;
`,x=({label:t,value:i,formik:n})=>e.jsxs(g,{children:[e.jsx(h,{htmlFor:i,children:`Your ${t||i}`}),e.jsxs(oe,{children:[e.jsx(ae,{id:i,name:i,type:"text",value:n.values[i],onBlur:n.handleBlur,onChange:n.handleChange,$error:n.errors[i]&&n.touched[i]}),n.errors[i]&&n.touched[i]&&e.jsx(se,{children:n.errors[i]})]})]}),le=r.li`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;
  }
`,de=r.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  cursor: pointer;

  &::before {
    display: block;
    content: '';
    border: 1px solid #b6b6b6;
    border-radius: 50%;
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
  }

  &:checked::before {
    display: block;
    content: ' ';
    border-radius: 50%;
    padding: 2.5px;
    background-clip: content-box;
    background-color: ${t=>t.theme.color.primaryGreenLite};
    height: 12px;
    width: 12px;
  }
`,y=({item:t,formik:i})=>{const{id:n,name:s,value:l,label:o}=t,c=()=>typeof l=="number"?Number(i.values[s])===l:typeof l=="string"?i.values[s]===l:!1;return e.jsxs(le,{children:[e.jsx(de,{type:"radio",id:n,name:s,checked:c(),value:l,onChange:i.handleChange}),e.jsx("label",{htmlFor:n,children:o})]},n)},ce=[{id:"1",name:"levelActivity",value:1,label:`1.2 - if you do not have physical activity and sedentary
        work`},{id:"2",name:"levelActivity",value:2,label:` 1.375 - if you do short runs or light gymnastics 1-3 times a
        week`},{id:"3",name:"levelActivity",value:3,label:`1.55 - if you play sports with average loads 3-5 times a
        week`},{id:"4",name:"levelActivity",value:4,label:"1.725 - if you train fully 6-7 times a week"},{id:"5",name:"levelActivity",value:5,label:`1.9 - if your work is related to physical labor, you train 2
        times a day and include strength exercises in your training
        program`}],pe=[{id:"gMale",name:"sex",value:"male",label:"Male"},{id:"gFemale",name:"sex",value:"female",label:"Female"}],me=A({name:F().required("Required field"),age:u().required("Required field").typeError("Must be a number"),currentWeight:u().required("Required field").typeError("Must be a number"),height:u().required("Required field").typeError("Must be a number")}),xe=()=>{var p,m;const t=v(),i=$(k),n={levelActivity:(i==null?void 0:i.levelActivity)||1,age:(i==null?void 0:i.age)||18,sex:(i==null?void 0:i.sex)||"male",height:(i==null?void 0:i.height)||185,name:(i==null?void 0:i.name)||"Name",currentWeight:(i==null?void 0:i.currentWeight)||65,avatarUrl:i==null?void 0:i.avatarUrl},[s,l]=b.useState(null),o=L({initialValues:n,onSubmit:async a=>{t(R({values:a,newAvatar:s})),l(null)},validationSchema:me}),c=a=>{l(a)};return e.jsxs("div",{children:[e.jsxs(Z,{onSubmit:o.handleSubmit,children:[e.jsx(x,{value:"name",formik:o}),e.jsxs(g,{children:[e.jsx(h,{children:"Your photo"}),e.jsx(X,{handleSelect:c,avatar:o.values.avatarUrl,text:(m=(p=o.values.name)==null?void 0:p.charAt(0))==null?void 0:m.toUpperCase()})]}),e.jsx(x,{value:"age",formik:o}),e.jsxs(g,{children:[e.jsx(h,{children:"Gender"}),e.jsx(_,{children:pe.map(a=>e.jsx(y,{item:a,formik:o},a.id))})]}),e.jsx(x,{value:"height",formik:o}),e.jsx(x,{label:"weight",formik:o,value:"currentWeight"}),e.jsxs(ee,{children:[e.jsx(h,{children:"Your activity"}),e.jsx(te,{children:ce.map(a=>e.jsx(y,{item:a,formik:o},a.id))})]}),e.jsxs(ie,{children:[e.jsx(re,{type:"submit",children:"Submit"}),e.jsx(ne,{type:"button",onClick:o.handleReset,children:"Cancel"})]})]}),e.jsx(U,{})]})},be=()=>e.jsx(N,{children:e.jsxs(Y,{children:[e.jsx(O,{children:"Profile setting"}),e.jsxs(V,{children:[e.jsx(I,{}),e.jsx(xe,{})]})]})});export{be as default};
