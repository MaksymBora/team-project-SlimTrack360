import{j as e,u as n,r as u,k as y,a as j,e as v,m as $,b as k,n as R,o as L}from"./index-5cd0641d.js";import{I as U}from"./Icon-5c64d742.js";import{c as S,a as A,b as g}from"./index.esm-df742f16.js";const F=""+new URL("setDesk-b0655153.png",import.meta.url).href,C=""+new URL("setTab-ba48fc09.png",import.meta.url).href,D=""+new URL("setMob-731410b8.png",import.meta.url).href,b=""+new URL("setDesk@2x-6227369a.png",import.meta.url).href,B=""+new URL("setTab@2x-17bf131f.png",import.meta.url).href,M=""+new URL("setMob@2x-b67ee440.png",import.meta.url).href,W=""+new URL("setMob-62d05b7e.webp",import.meta.url).href,z=""+new URL("setMob@2x-7f4bbdde.webp",import.meta.url).href,T=""+new URL("setTab-1abdf41c.webp",import.meta.url).href,G=""+new URL("setTab@2x-d95e5618.webp",import.meta.url).href,P=""+new URL("setDesk-4ad72960.webp",import.meta.url).href,q=""+new URL("setDesk@2x-0f486487.webp",import.meta.url).href,E=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${P} 1x, ${q} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),e.jsx("source",{srcSet:`${F} 1x, ${b} 2x`,media:"(min-width: 1440px)",type:"image/png"}),e.jsx("source",{srcSet:`${T} 1x, ${G} 2x`,media:"(min-width: 834px)",type:"image/webp"}),e.jsx("source",{srcSet:`${C} 1x, ${B} 2x`,media:"(min-width: 834px)",type:"image/png"}),e.jsx("source",{srcSet:`${W} 1x, ${z} 2x`,media:"(max-width: 833px)",type:"image/webp"}),e.jsx("source",{srcSet:`${D} 1x, ${M} 2x`,media:"(max-width: 833px)",type:"image/png"}),e.jsx("img",{src:b,alt:"settings"})]}),I=n.section`
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
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    width: 800px;
    padding: 0 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding: 0 10px;
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
`,O=n.div`
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
`,V=n.button`
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
`,H=n.input`
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
  background: ${t=>t.$isDefault?t.theme.color.primaryGreenLite:"transparent"};

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
`,J=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,K=n.div`
  font-size: 24px;
  color: ${t=>t.theme.color.primaryBlack2};
  text-align: center;
  line-height: 24px;
  padding: 6px;
  font-weight: 500;
`,Q=({handleSelect:t,avatar:i,text:r})=>{const[s,l]=u.useState(null),a=u.useRef(),d=y(),c=o=>{l(o.target.files[0]),t(o.target.files[0])},p=()=>{a.current.click()};return e.jsxs("div",{children:[e.jsxs(J,{children:[!i&&!s?e.jsx(f,{$isDefault:!0,children:e.jsx(K,{children:r})}):e.jsx(f,{$isDefault:!1,children:e.jsx("img",{src:s?URL.createObjectURL(s):i,alt:"Profile Photo"})}),e.jsxs(V,{type:"button",onClick:p,children:[e.jsx(U,{name:"icon-direct-inbox",width:"16px",height:"16px",fill:d.color.primaryGreenLite}),e.jsx("span",{children:s?s.name:"Download new photo"})]})]}),e.jsx(H,{ref:a,type:"file",onChange:c,accept:"image/*,.png,.jpg,.web,.gif"})]})},X=n.form`
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
`,m=n.label`
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
  background-color: ${t=>t.theme.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  transition: ${t=>t.theme.transition.main};
`,ne=n.button`
  font-size: 14px;
  line-height: 1.4;
  background-color: transparent;
  color: ${t=>t.theme.color.primaryGrey};
  border: 1px solid transparent;
  border-radius: 12px;
  outline: none;

  &:hover,
  &:active {
    outline: none;
    border: 1px solid ${t=>t.theme.color.primaryGreenLite};
  }

  transition: ${t=>t.theme.transition.main};
`,re=n.div`
  position: relative;
`,ae=n.input.attrs(t=>({$error:t.$error||!1}))`
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
`,oe=n.p`
  font-size: 12px;
  line-height: 1.17;
  color: #e74a3b;
  padding-left: 10px;

  position: absolute;
  top: calc(100% + 4px);
  left: 0;
`,x=({label:t,value:i,formik:r})=>e.jsxs(h,{children:[e.jsx(m,{htmlFor:i,children:`Your ${t||i}`}),e.jsxs(re,{children:[e.jsx(ae,{id:i,name:i,type:"text",value:r.values[i],onBlur:r.handleBlur,onChange:r.handleChange,$error:r.errors[i]&&r.touched[i]}),r.errors[i]&&r.touched[i]&&e.jsx(oe,{children:r.errors[i]})]})]}),se=n.li`
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
`,w=({item:t,formik:i})=>{const{id:r,name:s,value:l,label:a}=t,d=()=>typeof l=="number"?Number(i.values[s])===l:typeof l=="string"?i.values[s]===l:!1;return e.jsxs(se,{children:[e.jsx(le,{type:"radio",id:r,name:s,checked:d(),value:l,onChange:i.handleChange}),e.jsx("label",{htmlFor:r,children:a})]},r)},de=[{id:"1",name:"levelActivity",value:1,label:`1.2 - if you do not have physical activity and sedentary
        work`},{id:"2",name:"levelActivity",value:2,label:` 1.375 - if you do short runs or light gymnastics 1-3 times a
        week`},{id:"3",name:"levelActivity",value:3,label:`1.55 - if you play sports with average loads 3-5 times a
        week`},{id:"4",name:"levelActivity",value:4,label:"1.725 - if you train fully 6-7 times a week"},{id:"5",name:"levelActivity",value:5,label:`1.9 - if your work is related to physical labor, you train 2
        times a day and include strength exercises in your training
        program`}],ce=[{id:"gMale",name:"sex",value:"male",label:"Male"},{id:"gFemale",name:"sex",value:"female",label:"Female"}],pe=S({name:A().required("Required field"),age:g().required("Required field").typeError("Must be a number"),currentWeight:g().required("Required field").typeError("Must be a number"),height:g().required("Required field").typeError("Must be a number")}),xe=()=>{var c,p;const t=j(),i=v($),r={levelActivity:(i==null?void 0:i.levelActivity)||1,age:(i==null?void 0:i.age)||18,sex:(i==null?void 0:i.sex)||"male",height:(i==null?void 0:i.height)||185,name:(i==null?void 0:i.name)||"Name",currentWeight:(i==null?void 0:i.currentWeight)||65,avatarUrl:i==null?void 0:i.avatarUrl},[s,l]=u.useState(null),a=k({initialValues:r,onSubmit:async o=>{t(L({values:o,newAvatar:s})),l(null)},validationSchema:pe}),d=o=>{l(o)};return e.jsxs("div",{children:[e.jsxs(X,{onSubmit:a.handleSubmit,children:[e.jsx(x,{value:"name",formik:a}),e.jsxs(h,{children:[e.jsx(m,{children:"Your photo"}),e.jsx(Q,{handleSelect:d,avatar:a.values.avatarUrl,text:(p=(c=a.values.name)==null?void 0:c.charAt(0))==null?void 0:p.toUpperCase()})]}),e.jsx(x,{value:"age",formik:a}),e.jsxs(h,{children:[e.jsx(m,{children:"Gender"}),e.jsx(Z,{children:ce.map(o=>e.jsx(w,{item:o,formik:a},o.id))})]}),e.jsx(x,{value:"height",formik:a}),e.jsx(x,{label:"weight",formik:a,value:"currentWeight"}),e.jsxs(_,{children:[e.jsx(m,{children:"Your activity"}),e.jsx(ee,{children:de.map(o=>e.jsx(w,{item:o,formik:a},o.id))})]}),e.jsxs(te,{children:[e.jsx(ie,{type:"submit",children:"Submit"}),e.jsx(ne,{type:"button",onClick:a.handleReset,children:"Cancel"})]})]}),e.jsx(R,{})]})},ue=()=>e.jsx(I,{children:e.jsxs(N,{children:[e.jsx(Y,{children:"Profile setting"}),e.jsxs(O,{children:[e.jsx(E,{}),e.jsx(xe,{})]})]})});export{ue as default};
