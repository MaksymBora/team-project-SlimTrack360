import{u as t,t as i,j as e,L as n}from"./index-f617b153.js";import{S as l,W as p,C as c,_ as x,a as d,b as r,c as m,d as h,e as g,f,g as u,h as w,i as y,j as b,k as j,I as $}from"./SignUpContent.styled-a0f46b17.js";import"./index-387d7a00.js";const k=t.div`
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
`,v=t.div`
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
`,C=t.h1`
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
`;const S=t.div`
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
`,W=t.button`
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
  // transition: all 0.3s ease-in-out;
  transition: ${i.transition.main};
  width: 142px;
  &:hover {
    cursor: pointer;
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${i.color.primaryWhite};
    border: 1px solid ${i.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${i.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${i.color.primaryBlack};
  }
  @media screen and (min-width: 834px) {
    width: 192px;
  }
`,_=t.button`
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
  transition: ${i.transition.main};
  // transition: all 0.3s ease-in-out;
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
`;t.div``;const I=t.ul`
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
`,L=t.li`
  color: ${i.color.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  & span {
    margin-right: 10px;
  }
`,P=t.span``,z=()=>{const o=["Set goals","Watch your calories","Keep track of your water intake","Control your weight"];return e.jsx(e.Fragment,{children:e.jsxs(v,{children:[e.jsx(C,{children:"Set goals and achieve them"}),e.jsx(l,{children:"The service will help you set goals and follow them."}),e.jsxs(S,{children:[e.jsx(n,{to:"/signin",children:e.jsx(W,{children:"Sign in"})}),e.jsx(n,{to:"/signup",children:e.jsx(_,{children:"Sign up"})})]}),e.jsx(I,{children:o.map((a,s)=>e.jsxs(L,{children:[e.jsx(P,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",children:e.jsx("circle",{cx:"4",cy:"4",r:"4",fill:"#E3FFA8"})})}),a]},s))}),e.jsx("a",{href:"https://healthyhub-emsa.onrender.com/api/auth/google",style:{cursor:"pointer",margin:"0 auto",transition:"transform 0.2s ease-in-out",display:"block"},className:"google-link",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",children:[e.jsx("path",{fill:"#fbc02d",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),e.jsx("path",{fill:"#e53935",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),e.jsx("path",{fill:"#4caf50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),e.jsx("path",{fill:"#1565c0",d:"M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})})]})})},G=()=>e.jsx(e.Fragment,{children:e.jsx(p,{children:e.jsx(c,{children:e.jsxs(k,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${x} 1x, ${d} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${r} 1x, ${m} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${h} 1x, ${g} 2x`,type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${f} 1x, ${u} 2x`,type:"image/png"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${w} 1x, ${y} 2x`,type:"image/webp"}),e.jsx("source",{media:"(max-width: 767px)",srcSet:`${b} 1x, ${j} 2x`,type:"image/png"}),e.jsx($,{src:r,alt:"Responsive"})]}),e.jsx(z,{})]})})})});export{G as default};
