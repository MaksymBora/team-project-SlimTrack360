import{s as t,t as i,j as e,L as n}from"./index-ac16bcb9.js";import{S as l,W as p,C as x,_ as c,a as d,b as r,c as m,d as g,e as h,f,g as u,h as w,i as y,j as b,k as j,I as $}from"./SignUpContent.styled-49f6da72.js";import"./index-387d7a00.js";const k=t.div`
  // max-width: 833px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: center;
    height: 588px;
  }
`,S=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    margin: auto;
  }
`,W=t.h1`
  padding-top: 24px;
  padding-bottom: 16px;
  text-align: center;
  color: ${i.color.primaryWhite};
  font-family: Poppins;
  font-size: 24px;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  @media screen and (min-width: 834px) {
    padding-top: 80px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    text-align: left;
  }
`;t.h3`
  color: ${i.color.primaryGrey};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 834px) {
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;const v=t.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: 834px) {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`,_=t.button`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${i.color.primaryBlack2};
  text-align: center;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${i.color.primaryGreenLite};
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  width: 142px;
  &:hover {
    cursor: pointer;
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
  }
  &:focus {
    background-color: transparent;
    border: 1px solid ${i.color.primaryGreenLite};
    color: ${i.color.primaryWhite};
  }
  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,I=t.button`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${i.color.primaryWhite};
  text-align: center;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${i.color.primaryGreenLite};
  width: 142px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border: 1px solid ${i.color.primaryGreenLite};
    animation: 1s ease-in-out infinite;
  }
  &:focus {
    background-color: ${i.color.primaryGreenLite};
    border: 1px solid ${i.color.primaryBlack2};
    color: ${i.color.primaryBlack2};
  }
  @media screen and (min-width: 834px) {
    width: 192px;
  }
`;t.div``;const P=t.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media screen and (min-width: 834px) {
    justify-content: space-between;
    width: 444px;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,B=t.li`
  color: ${i.color.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  & span {
    margin-right: 10px;
  }
`,L=t.span``,D=()=>{const o=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"];return e.jsx(e.Fragment,{children:e.jsxs(S,{children:[e.jsx(W,{children:"Set goals and achieve them"}),e.jsx(l,{children:"The service will help you set goals and follow them."}),e.jsxs(v,{children:[e.jsx(n,{to:"/signin",children:e.jsx(_,{children:"Sign in"})}),e.jsx(n,{to:"/signup",children:e.jsx(I,{children:"Sign up"})})]}),e.jsx(P,{children:o.map((a,s)=>e.jsxs(B,{children:[e.jsx(L,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",children:e.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),a]},s))})]})})},T=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:e.jsx(x,{children:e.jsxs(k,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${c} 1x, ${d} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${r} 1x, ${m} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${g} 1x, ${h} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${f} 1x, ${u} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${w} 1x, ${y} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${b} 1x, ${j} 2x`,type:"image/png"}),e.jsx($,{src:r,alt:"Responsive"})]}),e.jsx(D,{})]})})})});export{T as default};
