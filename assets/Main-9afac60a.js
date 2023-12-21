import{s as t,t as i,L as b,j as e,c as x,i as F,m as M,u as j,R as P,n as E,r as g,o as S,p as R,q as O,v as V,h as A,g as N}from"./index-7d8a7e85.js";import{I as h}from"./Icon-3690bd96.js";import{C as I,a as _,L as q,B as H,p as K,c as B,d as D,f as Q,A as X,D as Y}from"./index-bd4f5f3e.js";import{v as y,R as Z,o as J,r as U,n as ee,q as te,p as ie,t as ne,s as oe,u as re}from"./RecordDiaryModal-09f94d5f.js";import{c as ae,a as se,b as de,I as pe}from"./Item-8089db06.js";import"./index-387d7a00.js";import"./index.esm-8209f493.js";const le=t.div`
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
`,ce=t.div`
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
`,xe=t.h1`
  color: ${i.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,he=t(b)`
  display: flex;
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,me=t.span`
  margin-right: 6px;
`,ge=t.div`
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
`,fe=t.div`
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
`;const we=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,ue=t.div`
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
`,ye=t.div`
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
`,be=t.span`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,je=()=>e.jsxs("div",{children:[e.jsx(we,{children:"Daily goal"}),e.jsx(ue,{children:e.jsxs(ye,{children:[e.jsx(h,{name:"icon-bubble",width:"80px",height:"80px",fill:`${i.color.primaryLiteGreen}`}),e.jsxs(v,{children:[e.jsx(k,{children:"Calories"}),e.jsx(W,{children:"1700"})]}),e.jsx(h,{name:"icon-milk",width:"80px",height:"80px",fill:`${i.color.primaryViolet}`}),e.jsxs(v,{children:[e.jsx(k,{children:"Water"}),e.jsxs(W,{children:["1500",e.jsx(be,{children:"ml"})]})]})]})})]}),$e=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ve=t.div`
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
`,ke=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${i.color.primaryBlack};
  padding: 7px;
`,We=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,Ce=t.div`
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
`,ze=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,Ie=t.p`
  color: ${i.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Be=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,De=t.p`
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
`,Ge=t.p`
  color: ${i.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Le=t.span`
  color: ${i.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,Te=t.button`
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
`,Fe=t.button`
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
`;I.register(_,q,H,K,B,D);const Me={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Pe=["Intake"],Ee=({waterIntake:n})=>{const o={labels:Pe,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(Q,{data:o,options:Me})})},Se=t.div`
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
`,Re=t.div`
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
`,Oe=t.h2`
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
`,Ve=t.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
`,Ae=t.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 
  }
`,Ne=t.input`
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

    
`,_e=t.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: #e3ffa8;
  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,qe=t.button`
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
`;const He=({onClose:n})=>{const o=x(F),d=x(M),s=j(),a=r=>{r.preventDefault();const p={date:y,value:Number(r.target.water.value)};s(E(p))};return P.createPortal(e.jsx(Se,{onClick:n,children:e.jsxs(Re,{onClick:r=>r.stopPropagation(),children:[e.jsx(Oe,{children:"Add water intake"}),e.jsxs(Ve,{onSubmit:a,children:[e.jsx(Ae,{children:"How much water"}),e.jsx(Ne,{name:"water",type:"text",placeholder:"Enter milliliters",onChange:r=>r.target.value}),e.jsx(_e,{type:"submit",disabled:o,children:o?"Loading...":"Confirm"}),d&&e.jsx("p",{style:{color:"red"},children:d}),e.jsx(qe,{type:"button",onClick:n,children:"Cancel"})]})]})}),document.getElementById("modal-root"))},Ke=()=>{const[n,o]=g.useState(!1),d=x(S),s=j();let a=d,r=1e3;const p=r-a,l=a<=r?Math.round(a*100/r):100,f=l<=84?Math.ceil(l/100*176+10):88,L=l<=84?"rgba(182, 195, 255, 1)":"green";g.useEffect(()=>{s(R({date:y}))},[s,d]);const w=()=>{o(c=>!c)};g.useEffect(()=>{const c=$=>{$.key==="Escape"&&n&&w()};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[n]);const T=c=>{c.preventDefault(),s(O(y))};return e.jsxs("div",{children:[e.jsx($e,{children:"Water"}),e.jsxs(ve,{children:[e.jsx(ke,{children:e.jsxs(Ce,{children:[e.jsx(We,{$changedColor:L,$offset:f,children:`${l}%`}),e.jsx(Ee,{waterIntake:l})]})}),e.jsxs(ze,{children:[e.jsx(Ie,{children:"Water consumption"}),e.jsxs(Be,{children:[e.jsxs(De,{children:[a,e.jsx(C,{children:"ml"})]}),e.jsxs(Ge,{children:["left:",e.jsx(Le,{children:p>0?p:0}),e.jsx(C,{children:"ml"})]})]}),e.jsxs(Te,{onClick:w,children:[e.jsx(h,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(Fe,{onClick:T,children:e.jsx(h,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${i.color.primaryLiteGreen}`})})]})]}),n&&e.jsx(He,{onClose:w})]})};I.register(X,B,D);const Qe={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Xe={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:o}=n;o.save();const d=n.getDatasetMeta(0).data[0].x,s=n.getDatasetMeta(0).data[0].y,a=n.getDatasetMeta(0).data[0].innerRadius,r=n.getDatasetMeta(0).data[0].outerRadius,p=r-a,l=Math.PI/180;o.beginPath(),o.lineWidth=p,o.strokeStyle="rgba(41, 41, 40, 1)",o.arc(d,s,r-p/2,0,l*360,!1),o.stroke()}},G=({dailyCalories:n,inputValue:o,chartBcg:d})=>{o>n&&(o=n,d="red");const s=n-o,a={datasets:[{label:[],data:[o,s],backgroundColor:[d,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Y,{options:Qe,data:a,plugins:[Xe]})})},Ye=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Ze=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Je=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ue=t.div`
  display: flex;
  flex-direction: column;
`,et=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,tt=t.div`
  display: flex;
  column-gap: 12px;
`,z=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,it=t.p`
  width: 78px;
`,u=n=>{const{title:o,chartBcg:d,elementGoal:s,elementValue:a}=n;let r=(s-a).toFixed(1);r<0&&(r=0);let p=Math.round(a*100/s);return(p===1/0||isNaN(p))&&(p=0),p>100&&(p=100),e.jsx(e.Fragment,{children:e.jsxs(Ye,{children:[e.jsxs(Ze,{children:[e.jsx(G,{dailyCalories:s,inputValue:a,chartBcg:d}),e.jsx(Je,{children:e.jsx("p",{children:`${p}%`})})]}),e.jsxs(Ue,{children:[e.jsx(et,{children:o}),e.jsxs(tt,{children:[e.jsxs(it,{children:["Goal: ",e.jsx(z,{children:s})]}),e.jsxs("p",{children:["left: ",e.jsx(z,{children:r})]})]})]})]})})},nt=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ot=t.div`
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
`,rt=t.div`
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
`,at=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,st=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,dt="rgba(255, 196, 247, 1)",pt="rgba(255, 243, 183, 1)",lt="rgba(182, 182, 182, 1)",ct=()=>{let n=1700,o=1360,d="#45FFBC",s=119.5,a=136,r=44.8,p=170,l=135.5,f=56;return e.jsxs("div",{children:[e.jsx(nt,{children:"Food"}),e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(G,{dailyCalories:n,inputValue:o,chartBcg:d}),e.jsxs(at,{children:[e.jsx("p",{children:o}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(st,{children:[e.jsx(u,{title:"Carbonohidrates",chartBcg:dt,elementGoal:p,elementValue:a}),e.jsx(u,{title:"Protein",chartBcg:pt,elementGoal:l,elementValue:s}),e.jsx(u,{title:"Fat",chartBcg:lt,elementGoal:f,elementValue:r})]})]})]})},xt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,ht=t.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,mt=t.div`
  width: 36px;
  height: 36px;
`,gt=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,ft=t.div`
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
`,wt=t.p`
  width: 164px;
`,ut=t.p`
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
`;const m=({title:n,image:o,image2x:d,categoryImage:s,category:a})=>e.jsxs(xt,{children:[e.jsxs(ht,{children:[e.jsx(mt,{children:e.jsx("img",{srcSet:`${o} 1x, ${d} 2x`,src:o,alt:"Plate"})}),e.jsx(gt,{children:n})]}),e.jsxs(ft,{children:[e.jsx(wt,{children:"Carbonohidrates: 0"}),e.jsx(ut,{children:"Protein: 0"}),e.jsx("p",{children:"Fat: 100"})]}),e.jsx(Z,{category:a,categoryImage:s})]}),yt=t.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
  }
`,bt=t.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,jt=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,$t=t(b)`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,vt=t.div`
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
`,kt=()=>e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{children:"Diary"}),e.jsx($t,{to:"/diary",children:"See more"})]}),e.jsxs(vt,{children:[e.jsx(m,{title:"Breakfast",image:J,image2x:U}),e.jsx(m,{title:"Lunch",image:ee,image2x:te}),e.jsx(m,{title:"Dinner",image:ie,image2x:ne}),e.jsx(m,{title:"Snack",image:oe,image2x:re})]})]}),Wt=t.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ct=t.ul`
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
`,zt=t.li`
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
`,It=t.p`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Bt=t(b)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,Dt=()=>{const n=x(ae),o=x(se),d=x(de),a=V.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(Wt,{children:"Recommended food"}),o&&e.jsx(A,{}),d?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(Ct,{children:n.slice(0,a).map(r=>e.jsx(zt,{children:e.jsx(pe,{item:r})},r._id))}),e.jsxs(Bt,{to:"/recommended-food",children:[e.jsx(It,{children:"See more"}),e.jsx(h,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]})},St=()=>{const n=j();return g.useEffect(()=>{n(N())},[n]),e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(xe,{children:"Today"}),e.jsxs(he,{to:"/dashboard",children:[e.jsx(me,{children:"On the way to the goal"}),e.jsx(h,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]}),e.jsxs(ge,{children:[e.jsx(je,{}),e.jsx(Ke,{}),e.jsx(ct,{})]}),e.jsxs(fe,{children:[e.jsx(kt,{}),e.jsx(Dt,{})]})]})};export{St as default};
