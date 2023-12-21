import{s as t,t as i,L as b,j as e,c as x,i as F,m as M,u as j,R as P,n as E,r as g,o as S,p as R,q as O,v as V,h as A,g as N,f as _}from"./index-2d4cf22e.js";import{I as h}from"./Icon-26394ce8.js";import{C as I,a as q,L as H,B as K,p as Q,c as B,d as D,f as X,A as Y,D as Z}from"./index-0d8202dd.js";import{v as f,R as J,o as U,r as ee,n as te,q as ie,p as ne,t as oe,s as re,u as ae}from"./RecordDiaryModal-849ca465.js";import{c as se,a as de,b as pe,I as le}from"./Item-2d88f487.js";import"./index-387d7a00.js";import"./index.esm-ddcc5657.js";const ce=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${i.color.primaryBlack};
  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
    width: 100%;
  }
`,xe=t.div`
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
`,he=t.h1`
  color: ${i.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,me=t(b)`
  display: flex;
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,ge=t.span`
  margin-right: 6px;
`,fe=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`,we=t.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${i.color.primaryBlack};

  color: ${i.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 780px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    width: 1440px;
    column-gap: 106px;
    margin-bottom: 0;
    margin: 0;
  }
`;t.div`
  padding: 16px 0;
  width: 300px;
  border-radius: 12px;
  background-color: ${i.color.primaryBlack2};

  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;const ue=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,ye=t.div`
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
`,be=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,v=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,k=t.p`
  color: ${i.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,W=t.p`
  display: flex;
  align-items: center;
  color: ${i.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,je=t.span`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,$e=()=>e.jsxs("div",{children:[e.jsx(ue,{children:"Daily goal"}),e.jsx(ye,{children:e.jsxs(be,{children:[e.jsx(h,{name:"icon-bubble",width:"80px",height:"80px",fill:`${i.color.primaryLiteGreen}`}),e.jsxs(v,{children:[e.jsx(k,{children:"Calories"}),e.jsx(W,{children:"1700"})]}),e.jsx(h,{name:"icon-milk",width:"80px",height:"80px",fill:`${i.color.primaryViolet}`}),e.jsxs(v,{children:[e.jsx(k,{children:"Water"}),e.jsxs(W,{children:["1500",e.jsx(je,{children:"ml"})]})]})]})})]}),ve=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ke=t.div`
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
`,We=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${i.color.primaryBlack};
  padding: 7px;
`,Ce=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,ze=t.div`
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
`,Ie=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,Be=t.p`
  color: ${i.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,De=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,Ge=t.p`
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
`,C=t.span`
  color: ${i.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,Le=t.p`
  color: ${i.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Te=t.span`
  color: ${i.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,Fe=t.button`
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
`,Me=t.button`
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
`;I.register(q,H,K,Q,B,D);const Pe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ee=["Intake"],Se=({waterIntake:n})=>{const o={labels:Ee,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(X,{data:o,options:Pe})})},Re=t.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 67px
  overflow-y: auto;

  @media screen and (min-width: 834px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`,Oe=t.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: #0f0f0f;
  padding: 24px 10px 24px 10px;
  @media screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    margin: 24px 40px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ve=t.h2`
  color: white;

  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
`,Ae=t.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
`,Ne=t.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 
  }
`,_e=t.input`
  margin-bottom: 32px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: inherit;
  color: white;
  @media screen and (min-width: 834px){
    width: 212px;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6b6;

    
`,qe=t.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: #e3ffa8;
  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,He=t.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  background: transparent;
  color: #b6b6b6;
  margin-top: 8px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 36px;
  }
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
  }
`;const Ke=({onClose:n})=>{const o=x(F),d=x(M),s=j(),a=r=>{r.preventDefault();const p={date:f,value:Number(r.target.water.value)};s(E(p))};return P.createPortal(e.jsx(Re,{onClick:n,children:e.jsxs(Oe,{onClick:r=>r.stopPropagation(),children:[e.jsx(Ve,{children:"Add water intake"}),e.jsxs(Ae,{onSubmit:a,children:[e.jsx(Ne,{children:"How much water"}),e.jsx(_e,{name:"water",type:"text",placeholder:"Enter milliliters",onChange:r=>r.target.value}),e.jsx(qe,{type:"submit",disabled:o,children:o?"Loading...":"Confirm"}),d&&e.jsx("p",{style:{color:"red"},children:d}),e.jsx(He,{type:"button",onClick:n,children:"Cancel"})]})]})}),document.getElementById("modal-root"))},Qe=()=>{const[n,o]=g.useState(!1),d=x(S),s=j();let a=d,r=1e3;const p=r-a,l=a<=r?Math.round(a*100/r):100,w=l<=84?Math.ceil(l/100*176+10):88,L=l<=84?"rgba(182, 195, 255, 1)":"green";g.useEffect(()=>{s(R({date:f}))},[s,d]);const u=()=>{o(c=>!c)};g.useEffect(()=>{const c=$=>{$.key==="Escape"&&n&&u()};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[n]);const T=c=>{c.preventDefault(),s(O(f))};return e.jsxs("div",{children:[e.jsx(ve,{children:"Water"}),e.jsxs(ke,{children:[e.jsx(We,{children:e.jsxs(ze,{children:[e.jsx(Ce,{$changedColor:L,$offset:w,children:`${l}%`}),e.jsx(Se,{waterIntake:l})]})}),e.jsxs(Ie,{children:[e.jsx(Be,{children:"Water consumption"}),e.jsxs(De,{children:[e.jsxs(Ge,{children:[a,e.jsx(C,{children:"ml"})]}),e.jsxs(Le,{children:["left:",e.jsx(Te,{children:p>0?p:0}),e.jsx(C,{children:"ml"})]})]}),e.jsxs(Fe,{onClick:u,children:[e.jsx(h,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(Me,{onClick:T,children:e.jsx(h,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${i.color.primaryLiteGreen}`})})]})]}),n&&e.jsx(Ke,{onClose:u})]})};I.register(Y,B,D);const Xe={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ye={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:o}=n;o.save();const d=n.getDatasetMeta(0).data[0].x,s=n.getDatasetMeta(0).data[0].y,a=n.getDatasetMeta(0).data[0].innerRadius,r=n.getDatasetMeta(0).data[0].outerRadius,p=r-a,l=Math.PI/180;o.beginPath(),o.lineWidth=p,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(d,s,r-p/2,0,l*360,!1),o.stroke()}},G=({dailyCalories:n,inputValue:o,chartBcg:d})=>{o>n&&(o=n,d="red");const s=n-o,a={datasets:[{label:[],data:[o,s],backgroundColor:[d,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Z,{options:Xe,data:a,plugins:[Ye]})})},Ze=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Je=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ue=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,et=t.div`
  display: flex;
  flex-direction: column;
`,tt=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,it=t.div`
  display: flex;
  column-gap: 12px;
`,z=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,nt=t.p`
  width: 78px;
`,y=n=>{const{title:o,chartBcg:d,elementGoal:s,elementValue:a}=n;let r=(s-a).toFixed(1);r<0&&(r=0);let p=Math.round(a*100/s);return(p===1/0||isNaN(p))&&(p=0),p>100&&(p=100),e.jsx(e.Fragment,{children:e.jsxs(Ze,{children:[e.jsxs(Je,{children:[e.jsx(G,{dailyCalories:s,inputValue:a,chartBcg:d}),e.jsx(Ue,{children:e.jsx("p",{children:`${p}%`})})]}),e.jsxs(et,{children:[e.jsx(tt,{children:o}),e.jsxs(it,{children:[e.jsxs(nt,{children:["Goal: ",e.jsx(z,{children:s})]}),e.jsxs("p",{children:["left: ",e.jsx(z,{children:r})]})]})]})]})})},ot=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,rt=t.div`
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
`,at=t.div`
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
`,st=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,dt=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,pt="rgba(255, 196, 247, 1)",lt="rgba(255, 243, 183, 1)",ct="rgba(182, 182, 182, 1)",xt=()=>{let n=1700,o=1360,d="#45FFBC",s=119.5,a=136,r=44.8,p=170,l=135.5,w=56;return e.jsxs("div",{children:[e.jsx(ot,{children:"Food"}),e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(G,{dailyCalories:n,inputValue:o,chartBcg:d}),e.jsxs(st,{children:[e.jsx("p",{children:o}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(dt,{children:[e.jsx(y,{title:"Carbonohidrates",chartBcg:pt,elementGoal:p,elementValue:a}),e.jsx(y,{title:"Protein",chartBcg:lt,elementGoal:l,elementValue:s}),e.jsx(y,{title:"Fat",chartBcg:ct,elementGoal:w,elementValue:r})]})]})]})},ht=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,mt=t.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,gt=t.div`
  width: 36px;
  height: 36px;
`,ft=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,wt=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: ${i.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,ut=t.p`
  width: 164px;
`,yt=t.p`
  width: 92px;
`;t.span`
  color: ${i.color.primaryGrey};

  font-weight: 500;
`;t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${i.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;const m=({title:n,image:o,image2x:d,categoryImage:s,category:a})=>e.jsxs(ht,{children:[e.jsxs(mt,{children:[e.jsx(gt,{children:e.jsx("img",{srcSet:`${o} 1x, ${d} 2x`,src:o,alt:"Plate"})}),e.jsx(ft,{children:n})]}),e.jsxs(wt,{children:[e.jsx(ut,{children:"Carbonohidrates: 0"}),e.jsx(yt,{children:"Protein: 0"}),e.jsx("p",{children:"Fat: 100"})]}),e.jsx(J,{category:a,categoryImage:s})]}),bt=t.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
  }
`,jt=t.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,$t=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,vt=t(b)`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,kt=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 558px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 588px;
  }
`,Wt=()=>e.jsxs(bt,{children:[e.jsxs(jt,{children:[e.jsx($t,{children:"Diary"}),e.jsx(vt,{to:"/diary",children:"See more"})]}),e.jsxs(kt,{children:[e.jsx(m,{title:"Breakfast",image:U,image2x:ee}),e.jsx(m,{title:"Lunch",image:te,image2x:ie}),e.jsx(m,{title:"Dinner",image:ne,image2x:oe}),e.jsx(m,{title:"Snack",image:re,image2x:ae})]})]}),Ct=t.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,zt=t.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    max-width: 676px;
  }
`,It=t.li`
  background-color: ${i.color.primaryBlack2};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,Bt=t.p`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Dt=t(b)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,Gt=()=>{const n=x(se),o=x(de),d=x(pe),a=V.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(Ct,{children:"Recommended food"}),o&&e.jsx(A,{}),d?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(zt,{children:n.slice(0,a).map(r=>e.jsx(It,{children:e.jsx(le,{item:r})},r._id))}),e.jsxs(Dt,{to:"/recommended-food",children:[e.jsx(Bt,{children:"See more"}),e.jsx(h,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]})},Rt=()=>{const n=j(),o={date:f};return g.useEffect(()=>{n(N()),n(_(o))},[n]),e.jsxs(ce,{children:[e.jsxs(xe,{children:[e.jsx(he,{children:"Today"}),e.jsxs(me,{to:"/dashboard",children:[e.jsx(ge,{children:"On the way to the goal"}),e.jsx(h,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]}),e.jsxs(fe,{children:[e.jsx($e,{}),e.jsx(Qe,{}),e.jsx(xt,{})]}),e.jsxs(we,{children:[e.jsx(Wt,{}),e.jsx(Gt,{})]})]})};export{Rt as default};
