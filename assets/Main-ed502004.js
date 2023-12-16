import{a as t,t as i,L as W,j as e,X as k,G as B}from"./index-d3645e2e.js";import{I as d}from"./Icon-6c50700a.js";import{C as b,a as z,L as G,B as I,p as F,c as j,d as $,f as D,A as T,D as L}from"./index-62f9d3be.js";const P=t.section`
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${i.color.primaryBlack};
  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
  }
`,M=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`,S=t.h1`
  color: ${i.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,R=t(W)`
  display: flex;
  align-items: center;
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,V=t.span`
  margin-right: 6px;
`,A=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,E=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,N=t.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${i.color.primaryBlack2};

  color: ${i.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
  }
`,X=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,m=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,f=t.p`
  color: ${i.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,w=t.p`
  display: flex;
  align-items: center;
  color: ${i.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,_=t.span`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,O=()=>e.jsxs("div",{children:[e.jsx(E,{children:"Daily goal"}),e.jsx(N,{children:e.jsxs(X,{children:[e.jsx(d,{name:"icon-bubble",width:"80px",height:"80px",fill:`${i.color.primaryLiteGreen}`}),e.jsxs(m,{children:[e.jsx(f,{children:"Calories"}),e.jsx(w,{children:"1700"})]}),e.jsx(d,{name:"icon-milk",width:"80px",height:"80px",fill:`${i.color.primaryViolet}`}),e.jsxs(m,{children:[e.jsx(f,{children:"Water"}),e.jsxs(w,{children:["1500",e.jsx(_,{children:"ml"})]})]})]})})]}),Y=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Z=t.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${i.color.primaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`,q=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${i.color.primaryBlack};
  padding: 7px;
`,H=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,J=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${i.color.primaryViolet};
    animation: ${i.transition.main} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`,K=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,Q=t.p`
  color: ${i.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,U=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ee=t.p`
  display: flex;
  align-items: center;
  color: ${i.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`,u=t.span`
  color: ${i.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,te=t.p`
  color: ${i.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,ie=t.span`
  color: ${i.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,ne=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: ${i.color.primaryGreenLite};

  color: ${i.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,oe=t.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  padding: 0;

  background-color: transparent;

  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;b.register(z,G,I,F,j,$);const re={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ae=["Intake"],se=({waterIntake:n})=>{const o={labels:ae,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(D,{data:o,options:re})})};let g=1e3;const le=1500-g,c=Math.round(g*100/1500),pe=c<=84?Math.ceil(c/100*176+10):88,de=c<=84?"rgba(182, 195, 255, 1)":"green",ce=()=>e.jsxs("div",{children:[e.jsx(Y,{children:"Water"}),e.jsxs(Z,{children:[e.jsx(q,{children:e.jsxs(J,{children:[e.jsx(H,{$changedColor:de,$offset:pe,children:`${c}%`}),e.jsx(se,{waterIntake:c})]})}),e.jsxs(K,{children:[e.jsx(Q,{children:"Water consumption"}),e.jsxs(U,{children:[e.jsxs(ee,{children:[g,e.jsx(u,{children:"ml"})]}),e.jsxs(te,{children:["left:",e.jsx(ie,{children:le}),e.jsx(u,{children:"ml"})]})]}),e.jsxs(ne,{children:[e.jsx(d,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(oe,{children:e.jsx(d,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${i.color.primaryLiteGreen}`})})]})]})]});b.register(T,j,$);const xe={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},he={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:o}=n;o.save();const l=n.getDatasetMeta(0).data[0].x,a=n.getDatasetMeta(0).data[0].y,s=n.getDatasetMeta(0).data[0].innerRadius,p=n.getDatasetMeta(0).data[0].outerRadius,r=p-s,x=Math.PI/180;o.beginPath(),o.lineWidth=r,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(l,a,p-r/2,0,x*360,!1),o.stroke()}},v=({dailyCalories:n,inputValue:o,chartBcg:l})=>{o>n&&(o=n,l="red");const a=n-o,s={datasets:[{label:[],data:[o,a],backgroundColor:[l,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(L,{options:xe,data:s,plugins:[he]})})},ge=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,me=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,fe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,we=t.div`
  display: flex;
  flex-direction: column;
`,ue=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,ye=t.div`
  display: flex;
  column-gap: 12px;
`,y=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,be=t.p`
  width: 78px;
`,h=n=>{const{title:o,chartBcg:l,elementGoal:a,elementValue:s}=n;let p=(a-s).toFixed(1);p<0&&(p=0);let r=Math.round(s*100/a);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(ge,{children:[e.jsxs(me,{children:[e.jsx(v,{dailyCalories:a,inputValue:s,chartBcg:l}),e.jsx(fe,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(we,{children:[e.jsx(ue,{children:o}),e.jsxs(ye,{children:[e.jsxs(be,{children:["Goal: ",e.jsx(y,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(y,{children:p})]})]})]})]})})},je=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,$e=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${i.color.primaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,ve=t.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: ${i.color.primaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,Ce=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,We=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,ke="rgba(255, 196, 247, 1)",Be="rgba(255, 243, 183, 1)",ze="rgba(182, 182, 182, 1)",Ge=()=>{let n=1700,o=1360,l="#45FFBC",a=119.5,s=136,p=44.8,r=170,x=135.5,C=56;return e.jsxs("div",{children:[e.jsx(je,{children:"Food"}),e.jsxs($e,{children:[e.jsxs(ve,{children:[e.jsx(v,{dailyCalories:n,inputValue:o,chartBcg:l}),e.jsxs(Ce,{children:[e.jsx("p",{children:o}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(We,{children:[e.jsx(h,{title:"Carbonohidrates",chartBcg:ke,elementGoal:r,elementValue:s}),e.jsx(h,{title:"Protein",chartBcg:Be,elementGoal:x,elementValue:a}),e.jsx(h,{title:"Fat",chartBcg:ze,elementGoal:C,elementValue:p})]})]})]})},Te=()=>e.jsxs(k,{theme:i,children:[e.jsx(B,{}),e.jsxs(P,{children:[e.jsxs(M,{children:[e.jsx(S,{children:"Today"}),e.jsxs(R,{to:"/dashboard",children:[e.jsx(V,{children:"On the way to the goal"}),e.jsx(d,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]}),e.jsxs(A,{children:[e.jsx(O,{}),e.jsx(ce,{}),e.jsx(Ge,{})]})]})]});export{Te as default};
