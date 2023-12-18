import{s as t,t as n,L as z,j as e,r as m,d as u,l as B,m as G,X as L,G as S}from"./index-91b19f46.js";import{I as x}from"./Icon-4d0127a0.js";import{C as v,a as D,L as F,B as M,p as P,c as C,d as $,f as T,A as E,D as R}from"./index-87751fc6.js";const V=t.section`
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${n.color.primaryBlack};
  color: ${n.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
  }
`,A=t.div`
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
`,O=t.h1`
  color: ${n.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,N=t(z)`
  display: flex;
  align-items: center;
  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,X=t.span`
  margin-right: 6px;
`,_=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,H=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,K=t.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${n.color.primaryBlack2};

  color: ${n.color.primaryWhite};
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
`,Y=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,w=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,b=t.p`
  color: ${n.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,y=t.p`
  display: flex;
  align-items: center;
  color: ${n.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,Z=t.span`
  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,q=()=>e.jsxs("div",{children:[e.jsx(H,{children:"Daily goal"}),e.jsx(K,{children:e.jsxs(Y,{children:[e.jsx(x,{name:"icon-bubble",width:"80px",height:"80px",fill:`${n.color.primaryLiteGreen}`}),e.jsxs(w,{children:[e.jsx(b,{children:"Calories"}),e.jsx(y,{children:"1700"})]}),e.jsx(x,{name:"icon-milk",width:"80px",height:"80px",fill:`${n.color.primaryViolet}`}),e.jsxs(w,{children:[e.jsx(b,{children:"Water"}),e.jsxs(y,{children:["1500",e.jsx(Z,{children:"ml"})]})]})]})})]}),J=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Q=t.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${n.color.primaryBlack2};
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
`,U=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${n.color.primaryBlack};
  padding: 7px;
`,ee=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:i})=>i}px);
  color: ${({$changedColor:i})=>i};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,te=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${n.color.primaryViolet};
    animation: ${n.transition.main} 4s linear infinite;

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
`,ie=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ne=t.p`
  color: ${n.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,oe=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,re=t.p`
  display: flex;
  align-items: center;
  color: ${n.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`,j=t.span`
  color: ${n.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ae=t.p`
  color: ${n.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,se=t.span`
  color: ${n.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,le=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: ${n.color.primaryGreenLite};

  color: ${n.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,de=t.button`
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
`;v.register(D,F,M,P,C,$);const pe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ce=["Intake"],xe=({waterIntake:i})=>{const o={labels:ce,datasets:[{label:"Water",data:[i],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(T,{data:o,options:pe})})},he=i=>i.waterIntake.isLoading,ge=i=>i.waterIntake.error,me=t.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  // opacity: 80%;
  @media screen and (min-width: 768px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`,fe=t.div`
  position: relative;
  z-index: 1000;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: rgba(15, 15, 15, 1);
  padding: 16px 12px 30px 12px;
  @media screen and (min-width: 768px) {
    width: 338px;
    height: 280px;
  }
  @media screen and (min-width: 1440px) {
  }
`,ue=t.h2`
  color: white;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`,we=t.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 768px) {
    width: 258px;
    height: 232px;

    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    top: 239px;
    left: 591px;
  }
`,be=t.label`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
`,ye=t.input`
  margin-bottom: 32px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
`,je=t.button`
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: rgba(227, 255, 168, 1);
`,ke=t.button`
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  background: transparent;
  color: #b6b6b6;
`,ve=({onClose:i})=>{const[o,a]=m.useState(""),r=u(he),s=u(ge),d=p=>{a(p.target.value)},l=async p=>{p.preventDefault();const c=parseFloat(o);if(isNaN(c))console.error("Input is not a number");else{const I={date:new Date().toISOString(),water:c};G(c),console.log(I),i()}};return B.createPortal(e.jsx(me,{onClick:i,children:e.jsxs(fe,{onClick:p=>p.stopPropagation(),children:[e.jsx(ue,{children:"Add water intake"}),e.jsxs(we,{onSubmit:l,children:[e.jsx(be,{children:"How much water"}),e.jsx(ye,{type:"text",placeholder:"Enter milliliters",value:o,onChange:d}),e.jsx(je,{type:"submit",disabled:r,children:r?"Loading...":"Confirm"}),s&&e.jsx("p",{style:{color:"red"},children:s}),e.jsx(ke,{type:"button",onClick:i,children:"Cancel"})]})]})}),document.getElementById("modal-root"))};let f=1e3;const Ce=1500-f,h=Math.round(f*100/1500),$e=h<=84?Math.ceil(h/100*176+10):88,We=h<=84?"rgba(182, 195, 255, 1)":"green",Ie=()=>{const[i,o]=m.useState(!1),a=()=>{o(r=>!r)};return m.useEffect(()=>{const r=s=>{s.key==="Escape"&&i&&a()};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[i]),e.jsxs("div",{children:[e.jsx(J,{children:"Water"}),e.jsxs(Q,{children:[e.jsx(U,{children:e.jsxs(te,{children:[e.jsx(ee,{$changedColor:We,$offset:$e,children:`${h}%`}),e.jsx(xe,{waterIntake:h})]})}),e.jsxs(ie,{children:[e.jsx(ne,{children:"Water consumption"}),e.jsxs(oe,{children:[e.jsxs(re,{children:[f,e.jsx(j,{children:"ml"})]}),e.jsxs(ae,{children:["left:",e.jsx(se,{children:Ce}),e.jsx(j,{children:"ml"})]})]}),e.jsxs(le,{onClick:a,children:[e.jsx(x,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(de,{children:e.jsx(x,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${n.color.primaryLiteGreen}`})})]})]}),i&&e.jsx(ve,{onClose:a})]})};v.register(E,C,$);const ze={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Be={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:o}=i;o.save();const a=i.getDatasetMeta(0).data[0].x,r=i.getDatasetMeta(0).data[0].y,s=i.getDatasetMeta(0).data[0].innerRadius,d=i.getDatasetMeta(0).data[0].outerRadius,l=d-s,p=Math.PI/180;o.beginPath(),o.lineWidth=l,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(a,r,d-l/2,0,p*360,!1),o.stroke()}},W=({dailyCalories:i,inputValue:o,chartBcg:a})=>{o>i&&(o=i,a="red");const r=i-o,s={datasets:[{label:[],data:[o,r],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(R,{options:ze,data:s,plugins:[Be]})})},Ge=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Le=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Se=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,De=t.div`
  display: flex;
  flex-direction: column;
`,Fe=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Me=t.div`
  display: flex;
  column-gap: 12px;
`,k=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Pe=t.p`
  width: 78px;
`,g=i=>{const{title:o,chartBcg:a,elementGoal:r,elementValue:s}=i;let d=(r-s).toFixed(1);d<0&&(d=0);let l=Math.round(s*100/r);return(l===1/0||isNaN(l))&&(l=0),l>100&&(l=100),e.jsx(e.Fragment,{children:e.jsxs(Ge,{children:[e.jsxs(Le,{children:[e.jsx(W,{dailyCalories:r,inputValue:s,chartBcg:a}),e.jsx(Se,{children:e.jsx("p",{children:`${l}%`})})]}),e.jsxs(De,{children:[e.jsx(Fe,{children:o}),e.jsxs(Me,{children:[e.jsxs(Pe,{children:["Goal: ",e.jsx(k,{children:r})]}),e.jsxs("p",{children:["left: ",e.jsx(k,{children:d})]})]})]})]})})},Te=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ee=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${n.color.primaryBlack2};
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
`,Re=t.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: ${n.color.primaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,Ve=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Oe="rgba(255, 196, 247, 1)",Ne="rgba(255, 243, 183, 1)",Xe="rgba(182, 182, 182, 1)",_e=()=>{let i=1700,o=1360,a="#45FFBC",r=119.5,s=136,d=44.8,l=170,p=135.5,c=56;return e.jsxs("div",{children:[e.jsx(Te,{children:"Food"}),e.jsxs(Ee,{children:[e.jsxs(Re,{children:[e.jsx(W,{dailyCalories:i,inputValue:o,chartBcg:a}),e.jsxs(Ve,{children:[e.jsx("p",{children:o}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ae,{children:[e.jsx(g,{title:"Carbonohidrates",chartBcg:Oe,elementGoal:l,elementValue:s}),e.jsx(g,{title:"Protein",chartBcg:Ne,elementGoal:p,elementValue:r}),e.jsx(g,{title:"Fat",chartBcg:Xe,elementGoal:c,elementValue:d})]})]})]})},Ze=()=>e.jsxs(L,{theme:n,children:[e.jsx(S,{}),e.jsxs(V,{children:[e.jsxs(A,{children:[e.jsx(O,{children:"Today"}),e.jsxs(N,{to:"/dashboard",children:[e.jsx(X,{children:"On the way to the goal"}),e.jsx(x,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${n.color.primaryGrey}`})]})]}),e.jsxs(_,{children:[e.jsx(q,{}),e.jsx(Ie,{}),e.jsx(_e,{})]})]})]});export{Ze as default};
