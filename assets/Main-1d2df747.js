import{u as t,t as i,L as W,e as o,q as T,v as P,j as e,r as u,w as N,a as k,R as _,x as q,h as j,y as H,z as K,A as Q,B as X,C as Y,D as Z,E as J,F as U,p as ee,o as te,f as ie}from"./index-d48617e4.js";import{I as m}from"./Icon-9cb44f7b.js";import{C as S,a as ne,L as ae,B as oe,p as re,c as M,d as E,f as se,A as de,D as pe}from"./index-9b2f8c4b.js";import{v as le,w as ce,x as xe,y as he,R as ge,g as me,a as fe,b as we,c as ue,d as ye,e as be,f as je,h as ke,i as Ce,j as ve,k as $e,l as We,z as Ie,m as ze,o as I,r as z,n as Be,q as Fe,p as De,t as Le,s as Ge,u as Te}from"./RecordDiaryModal-9de941b5.js";import{c as Pe,a as Se,b as Me,I as Ee}from"./Item-e32ef7f7.js";import"./index-387d7a00.js";import"./index.esm-023222db.js";const Re=t.div`
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
`,Oe=t.div`
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
`,Ve=t.h1`
  color: ${i.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,Ae=t(W)`
  display: flex;
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Ne=t.span`
  margin-right: 6px;
`,_e=t.div`
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
`,qe=t.div`
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
    justify-content: space-evenly;
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
`;const He=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,Ke=t.div`
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
`,Qe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,B=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=t.p`
  color: ${i.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,D=t.p`
  display: flex;
  align-items: center;
  color: ${i.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,Xe=t.span`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,Ye=()=>{const n=o(T),a=o(P);return e.jsxs("div",{children:[e.jsx(He,{children:"Daily goal"}),e.jsx(Ke,{children:e.jsxs(Qe,{children:[e.jsx(m,{name:"icon-bubble",width:"80px",height:"80px",fill:`${i.color.primaryLiteGreen}`}),e.jsxs(B,{children:[e.jsx(F,{children:"Calories"}),e.jsx(D,{children:n})]}),e.jsx(m,{name:"icon-milk",width:"80px",height:"80px",fill:`${i.color.primaryViolet}`}),e.jsxs(B,{children:[e.jsx(F,{children:"Water"}),e.jsxs(D,{children:[a,e.jsx(Xe,{children:"ml"})]})]})]})})]})},Ze=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Je=t.div`
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
`,Ue=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${i.color.primaryBlack};
  padding: 7px;
`,et=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,tt=t.div`
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
`,it=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,nt=t.p`
  color: ${i.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,at=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ot=t.p`
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
`,L=t.span`
  color: ${i.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,rt=t.p`
  color: ${i.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,st=t.span`
  color: ${i.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,dt=t.button`
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
`,pt=t.button`
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
`;S.register(ne,ae,oe,re,M,E);const lt={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ct=["Intake"],xt=({waterIntake:n})=>{const a={labels:ct,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(se,{data:a,options:lt})})},ht=t.div`
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
`,gt=t.div`
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
`,mt=t.h2`
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
`,ft=t.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
`,wt=t.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 
  }
`,ut=t.input`
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

    
`,yt=t.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: #e3ffa8;
  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,bt=t.button`
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
`;const jt=({onClose:n})=>{const[a,s]=u.useState(""),d=o(N),p=k(),l=r=>{r.preventDefault();const c={date:j,value:Number(a)};p(q(c)),n()};return _.createPortal(e.jsx(ht,{onClick:n,children:e.jsxs(gt,{onClick:r=>r.stopPropagation(),children:[e.jsx(mt,{children:"Add water intake"}),e.jsxs(ft,{onSubmit:l,children:[e.jsx(wt,{children:"How much water"}),e.jsx(ut,{name:"water",type:"text",placeholder:"Enter milliliters",value:a,onChange:r=>s(r.target.value)}),e.jsx(yt,{type:"submit",disabled:d,children:d?"Loading...":"Confirm"}),e.jsx(bt,{type:"button",onClick:n,children:"Cancel"})]})]})}),document.getElementById("modal-root"))},kt=()=>{const[n,a]=u.useState(!1),s=o(H),d=k(),p=o(P),l=p-s,r=s<=p?Math.round(s*100/p):100,c=r<=84?Math.ceil(r/100*176+10):88,f=r<=84?"rgba(182, 195, 255, 1)":"green";u.useEffect(()=>{d(K({date:j}))},[d,s]),u.useEffect(()=>{const x=h=>{h.key==="Escape"&&n&&w()};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[n]);const w=x=>{x.preventDefault(),a(h=>!h)},y=()=>{d(Q({date:j}))};return e.jsxs("div",{children:[e.jsx(Ze,{children:"Water"}),e.jsxs(Je,{children:[e.jsx(Ue,{children:e.jsxs(tt,{children:[e.jsx(et,{$changedColor:f,$offset:c,children:`${r}%`}),e.jsx(xt,{waterIntake:r})]})}),e.jsxs(it,{children:[e.jsx(nt,{children:"Water consumption"}),e.jsxs(at,{children:[e.jsxs(ot,{children:[s,e.jsx(L,{children:"ml"})]}),e.jsxs(rt,{children:["left:",e.jsx(st,{children:l>0?l:0}),e.jsx(L,{children:"ml"})]})]}),e.jsxs(dt,{onClick:w,children:[e.jsx(m,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(pt,{onClick:y,children:e.jsx(m,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${i.color.primaryLiteGreen}`})})]})]}),n&&e.jsx(jt,{onClose:w,setIsModalOpen:a})]})};S.register(de,M,E);const Ct={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},vt={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:a}=n;a.save();const s=n.getDatasetMeta(0).data[0].x,d=n.getDatasetMeta(0).data[0].y,p=n.getDatasetMeta(0).data[0].innerRadius,l=n.getDatasetMeta(0).data[0].outerRadius,r=l-p,c=Math.PI/180;a.beginPath(),a.lineWidth=r,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,d,l-r/2,0,c*360,!1),a.stroke()}},R=({dailyCalories:n,inputValue:a,chartBcg:s})=>{a>n&&(a=n,s="red");const d=n-a,p={datasets:[{label:[],data:[a,d],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(pe,{options:Ct,data:p,plugins:[vt]})})},$t=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Wt=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,It=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,zt=t.div`
  display: flex;
  flex-direction: column;
`,Bt=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ft=t.div`
  display: flex;
  column-gap: 12px;
`,G=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Dt=t.p`
  width: 78px;
`,v=n=>{const{title:a,chartBcg:s,elementGoal:d,elementValue:p}=n;let l=(d-p).toFixed(1);l<0&&(l=0);let r=Math.round(p*100/d);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs($t,{children:[e.jsxs(Wt,{children:[e.jsx(R,{dailyCalories:d,inputValue:p,chartBcg:s}),e.jsx(It,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(zt,{children:[e.jsx(Bt,{children:a}),e.jsxs(Ft,{children:[e.jsxs(Dt,{children:["Goal: ",e.jsx(G,{children:d})]}),e.jsxs("p",{children:["left: ",e.jsx(G,{children:l})]})]})]})]})})},Lt=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Gt=t.div`
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
`,Tt=t.div`
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
`,Pt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,St=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Mt="rgba(255, 196, 247, 1)",Et="rgba(255, 243, 183, 1)",Rt="rgba(182, 182, 182, 1)",Ot=()=>{const n=o(X),a=o(Y),s=o(Z),d=o(T),p=o(le),l=o(ce),r=o(xe),c=o(he);let f="#45FFBC";return e.jsxs("div",{children:[e.jsx(Lt,{children:"Food"}),e.jsxs(Gt,{children:[e.jsxs(Tt,{children:[e.jsx(R,{dailyCalories:d,inputValue:c,chartBcg:f}),e.jsxs(Pt,{children:[e.jsx("p",{children:c}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(St,{children:[e.jsx(v,{title:"Carbonohidrates",chartBcg:Mt,elementGoal:n,elementValue:l}),e.jsx(v,{title:"Protein",chartBcg:Et,elementGoal:a,elementValue:p}),e.jsx(v,{title:"Fat",chartBcg:Rt,elementGoal:s,elementValue:r})]})]})]})},Vt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,At=t.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${i.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Nt=t.div`
  width: 36px;
  height: 36px;
`,_t=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`,qt=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;

  color: ${i.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    flex-direction: row;
    column-gap: 20px;
  }
`,Ht=t.p`
  width: 160px;
  padding-top: 2px;
`,Kt=t.p`
  width: 88px;
  padding-top: 2px;
`,Qt=t.p`
  width: 62px;
  padding-top: 2px;
`,$=t.span`
  color: ${i.color.primaryGrey};

  font-weight: 500;
`,Xt=t.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`,Yt=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${i.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  outline: none;
  padding: 0;
`,b=({category:n,categoryImage:a,categoryImage2x:s,carbonohidrates:d,protein:p,fat:l,dataLength:r,id:c})=>{const[f,w]=u.useState(!1),y=k(),x=()=>{w(g=>!g)},h=()=>{const g={_id:c},C=n.toLowerCase();g[C]={products:[]},y(J(g))};return e.jsxs(Vt,{children:[e.jsxs(At,{children:[e.jsx(Nt,{children:e.jsx("img",{srcSet:`${a} 1x, ${s} 2x`,src:a,alt:"Plate"})}),e.jsx(_t,{children:n})]}),r>0?e.jsxs(qt,{children:[e.jsxs(Ht,{children:["Carbonohidrates: ",e.jsx($,{children:d})]}),e.jsxs(Kt,{children:["Protein: ",e.jsx($,{children:p})]}),e.jsxs(Qt,{children:["Fat: ",e.jsx($,{children:l})]}),e.jsx(Xt,{type:"button",onClick:h,children:e.jsx(m,{name:"icon-trash",width:20,height:20})})]}):e.jsxs(Yt,{onClick:x,children:[e.jsx(m,{name:"icon-add","icon-add-more":!0,width:16,height:16})," Record your meal"]}),e.jsx(ge,{isModalOpen:f,onClose:x,category:n,categoryImage:a})]})},Zt=t.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
  }
`,Jt=t.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,Ut=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ei=t(W)`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,ti=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`,ii=()=>{const n=o(me),a=o(fe),s=o(we),d=o(ue),p=o(ye),l=o(be),r=o(je),c=o(ke),f=o(Ce),w=o(ve),y=o($e),x=o(We),h=o(Ie),g=o(ze),C=g.breakfast.products.length,O=g.lunch.products.length,V=g.dinner.products.length,A=g.snack.products.length;return e.jsxs(Zt,{children:[e.jsxs(Jt,{children:[e.jsx(Ut,{children:"Diary"}),e.jsx(ei,{to:"/diary",children:"See more"})]}),e.jsxs(ti,{children:[e.jsx(b,{category:"Breakfast",categoryImage:I,categoryImage2x:z,carbonohidrates:n,protein:s,fat:a,id:h,dataLength:C}),e.jsx(b,{category:"Lunch",categoryImage:Be,categoryImage2x:Fe,carbonohidrates:d,protein:l,fat:p,id:h,dataLength:O}),e.jsx(b,{category:"Dinner",categoryImage:De,categoryImage2x:Le,carbonohidrates:r,protein:f,fat:c,id:h,dataLength:V}),e.jsx(b,{category:"Snack",categoryImage:Ge,categoryImage2x:Te,carbonohidrates:w,protein:x,fat:y,title:"Snack",image:I,image2x:z,id:h,dataLength:A})]})]})},ni=t.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ai=t.ul`
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
`,oi=t.li`
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
`,ri=t.p`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,si=t(W)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,di=()=>{const n=o(Pe),a=o(Se),s=o(Me),p=U.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(ni,{children:"Recommended food"}),a&&e.jsx(ee,{}),s?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(ai,{children:n.slice(0,p).map(l=>e.jsx(oi,{children:e.jsx(Ee,{item:l})},l._id))}),e.jsxs(si,{to:"/recommended-food",children:[e.jsx(ri,{children:"See more"}),e.jsx(m,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]})},fi=()=>{const n=k(),a={date:j};return u.useEffect(()=>{n(te()),n(ie(a))},[n]),e.jsxs(Re,{children:[e.jsxs(Oe,{children:[e.jsx(Ve,{children:"Today"}),e.jsxs(Ae,{to:"/dashboard",children:[e.jsx(Ne,{children:"On the way to the goal"}),e.jsx(m,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]}),e.jsxs(_e,{children:[e.jsx(Ye,{}),e.jsx(kt,{}),e.jsx(Ot,{})]}),e.jsxs(qe,{children:[e.jsx(ii,{}),e.jsx(di,{})]})]})};export{fi as default};
