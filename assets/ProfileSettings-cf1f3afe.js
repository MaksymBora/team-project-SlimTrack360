import{j as e,s as n,r as u,J as y,u as v,c as j,d as $,k,e as R}from"./index-85135873.js";import{c as U,a as S,b as g,u as L}from"./index.esm-9f2c8de7.js";import{I as A}from"./Icon-0e68d849.js";const F=""+new URL("setDesk-b0655153.png",import.meta.url).href,C=""+new URL("setTab-ba48fc09.png",import.meta.url).href,D=""+new URL("setMob-731410b8.png",import.meta.url).href,b=""+new URL("setDesk@2x-6227369a.png",import.meta.url).href,B=""+new URL("setTab@2x-17bf131f.png",import.meta.url).href,M=""+new URL("setMob@2x-b67ee440.png",import.meta.url).href,W=""+new URL("setMob-62d05b7e.webp",import.meta.url).href,T=""+new URL("setMob@2x-7f4bbdde.webp",import.meta.url).href,z=""+new URL("setTab-1abdf41c.webp",import.meta.url).href,P=""+new URL("setTab@2x-d95e5618.webp",import.meta.url).href,q=""+new URL("setDesk-4ad72960.webp",import.meta.url).href,E=""+new URL("setDesk@2x-0f486487.webp",import.meta.url).href,G=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${q} 1x, ${E} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${F} 1x, ${b} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${z} 1x, ${P} 2x`,media:"(min-width: 834px)",type:"image/webp"}),e.jsx("source",{srcSet:`${C} 1x, ${B} 2x`,media:"(min-width: 834px)",type:"image/png"}),e.jsx("source",{srcSet:`${W} 1x, ${T} 2x`,media:"(max-width: 833px)",type:"image/webp"}),e.jsx("source",{srcSet:`${D} 1x, ${M} 2x`,media:"(max-width: 833px)",type:"image/png"}),e.jsx("img",{src:b,alt:"settings"})]}),I=n.section`
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
`,N=n.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    max-width: 800px;
    padding: 0 10px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }
`,Y=n.h2`
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
`,J=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > img {
    max-width: 536px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`,O=n.button`
  background-color: transparent;
  color: ${i=>i.theme.color.primaryWhite};
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
`,V=n.input`
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
`,f=n.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background: ${i=>i.$isDefault?i.theme.color.primaryGreenLite:"transparent"};

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
`,H=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,K=n.div`
  font-size: 24px;
  color: ${i=>i.theme.color.primaryBlack2};
  text-align: center;
  line-height: 24px;
  padding: 6px;
  font-weight: 500;
`,Q=({handleSelect:i,avatar:t,text:r})=>{const[s,l]=u.useState(null),a=u.useRef(),d=y(),c=o=>{l(o.target.files[0]),i(o.target.files[0])},p=()=>{a.current.click()};return e.jsxs("div",{children:[e.jsxs(H,{children:[t?e.jsx(f,{$isDefault:!1,children:e.jsx("img",{src:s?URL.createObjectURL(s):t,alt:"Profile Photo"})}):e.jsx(f,{$isDefault:!0,children:e.jsx(K,{children:r})}),e.jsxs(O,{type:"button",onClick:p,children:[e.jsx(A,{name:"icon-direct-inbox",width:"16px",height:"16px",fill:d.color.primaryGreenLite}),e.jsx("span",{children:s?s.name:"Download new photo"})]})]}),e.jsx(V,{ref:a,type:"file",onChange:c,accept:"image/*,.png,.jpg,.web,.gif"})]})},X=n.form`
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
`,h=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,x=n.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`,Z=n.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`,_=n(h)`
  @media screen and (min-width: 834px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`,ee=n.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,te=n.div`
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
`,ie=n.button`
  width: 100%;
  text-align: center;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: ${i=>i.theme.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  &:hover,
  &:focus {
  }
  transition: ${i=>i.theme.transition.main};
`,ne=n.button`
  font-size: 14px;
  line-height: 1.4;
  background-color: transparent;
  color: ${i=>i.theme.color.primaryGrey};

  &:hover,
  &:focus {
  }

  transition: ${i=>i.theme.transition.main};
`,re=n.div`
  position: relative;
`,ae=n.input.attrs(i=>({$error:i.$error||!1}))`
  padding: 8px 10px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid ${i=>i.$error?"#E74A3B":i.theme.color.primaryGrey};
  color: ${i=>i.theme.color.primaryWhite};
  transition: all ${i=>i.theme.transition.main};
  outline: none;
  width: 100%;

  font-size: 14px;
  line-height: 1.4;

  &:hover,
  &:focus {
    border: 1px solid
      ${i=>i.$error?"#E74A3B":i.theme.color.primaryGreenLite};
    outline: none;
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,oe=n.p`
  font-size: 12px;
  line-height: 1.17;
  color: #e74a3b;
  padding-left: 10px;

  position: absolute;
  top: calc(100% + 4px);
  left: 0;
`,m=({label:i,value:t,formik:r})=>e.jsxs(h,{children:[e.jsx(x,{htmlFor:t,children:`Your ${i||t}`}),e.jsxs(re,{children:[e.jsx(ae,{id:t,name:t,type:t==="name"?"text":"number",value:r.values[t],onBlur:r.handleBlur,onChange:r.handleChange,$error:r.errors[t]&&r.touched[t]}),r.errors[t]&&r.touched[t]&&e.jsx(oe,{children:r.errors[t]})]})]}),se=n.li`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;
  }
`,le=n.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  cursor: pointer;

  &::before {
    content: url('/src/assets/images/settings/unchecked.svg');
  }

  &:checked::before {
    content: url('/src/assets/images/settings/checked.svg');
  }
`,w=({item:i,formik:t})=>{const{id:r,name:s,value:l,label:a}=i,d=()=>typeof l=="number"?Number(t.values[s])===l:typeof l=="string"?t.values[s]===l:!1;return e.jsxs(se,{children:[e.jsx(le,{type:"radio",id:r,name:s,checked:d(),value:l,onChange:t.handleChange}),e.jsx("label",{htmlFor:r,children:a})]},r)},de=[{id:"1",name:"levelActivity",value:1,label:`1.2 - if you do not have physical activity and sedentary
        work`},{id:"2",name:"levelActivity",value:2,label:` 1.375 - if you do short runs or light gymnastics 1-3 times a
        week`},{id:"3",name:"levelActivity",value:3,label:`1.55 - if you play sports with average loads 3-5 times a
        week`},{id:"4",name:"levelActivity",value:4,label:"1.725 - if you train fully 6-7 times a week"},{id:"5",name:"levelActivity",value:5,label:`1.9 - if your work is related to physical labor, you train 2
        times a day and include strength exercises in your training
        program`}],ce=[{id:"gMale",name:"sex",value:"male",label:"Male"},{id:"gFemale",name:"sex",value:"female",label:"Female"}],pe=U({name:S().required("Required field"),age:g().required("Required field").typeError("Must be a number"),currentWeight:g().required("Required field").typeError("Must be a number"),height:g().required("Required field").typeError("Must be a number")});const me=()=>{var c,p;const i=v(),t=j($),r={levelActivity:(t==null?void 0:t.levelActivity)||1,age:(t==null?void 0:t.age)||18,sex:(t==null?void 0:t.sex)||"male",height:(t==null?void 0:t.height)||185,name:(t==null?void 0:t.name)||"Name",currentWeight:(t==null?void 0:t.currentWeight)||65,avatarUrl:t==null?void 0:t.avatarUrl},[s,l]=u.useState(null),a=L({initialValues:r,onSubmit:async o=>{i(R({values:o,newAvatar:s})),l(null)},validationSchema:pe}),d=o=>{l(o)};return e.jsxs("div",{children:[e.jsxs(X,{onSubmit:a.handleSubmit,children:[e.jsx(m,{value:"name",formik:a}),e.jsxs(h,{children:[e.jsx(x,{children:"Your photo"}),e.jsx(Q,{handleSelect:d,avatar:a.values.avatarUrl,text:(p=(c=a.values.name)==null?void 0:c.charAt(0))==null?void 0:p.toUpperCase()})]}),e.jsx(m,{value:"age",formik:a}),e.jsxs(h,{children:[e.jsx(x,{children:"Gender"}),e.jsx(Z,{children:ce.map(o=>e.jsx(w,{item:o,formik:a},o.id))})]}),e.jsx(m,{value:"height",formik:a}),e.jsx(m,{label:"weight",formik:a,value:"currentWeight"}),e.jsxs(_,{children:[e.jsx(x,{children:"Your activity"}),e.jsx(ee,{children:de.map(o=>e.jsx(w,{item:o,formik:a},o.id))})]}),e.jsxs(te,{children:[e.jsx(ie,{type:"submit",children:"Submit"}),e.jsx(ne,{type:"button",onClick:a.handleReset,children:"Cancel"})]})]}),e.jsx(k,{})]})},ue=()=>e.jsx(I,{children:e.jsxs(N,{children:[e.jsx(Y,{children:"Profile setting"}),e.jsxs(J,{children:[e.jsx(G,{}),e.jsx(me,{})]})]})});export{ue as default};
