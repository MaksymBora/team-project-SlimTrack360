import{u as t,t as n,L as W,e as o,v as P,w as S,j as e,r as y,a as k,R as _,O as q,C as H,T as K,F as J,x as Q,I as X,y as Y,z as Z,A as U,h as j,B as ee,D as te,E as ne,G as ie,H as ae,J as oe,K as re,q as se,p as le,f as ce}from"./index-be36e875.js";import{I as u}from"./Icon-ccc71669.js";import{C as M,a as de,L as pe,B as xe,p as he,c as E,d as R,f as me,A as ge,D as fe}from"./index-e9b8e6b7.js";import{v as ue,w as ye,x as we,y as be,R as je,g as ke,a as $e,b as Ce,c as ve,d as We,e as Ie,f as Be,h as Ge,i as Le,j as ze,k as Fe,l as De,z as Te,m as Pe,o as I,r as B,n as Se,q as Me,p as Ee,t as Re,s as Oe,u as Ve}from"./RecordDiaryModal-ab9bc9a5.js";import{c as Ae,a as Ne,b as _e,I as qe}from"./Item-21d8dc9c.js";import"./index-387d7a00.js";import"./index.esm-fbb2a4fc.js";const He=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 16px 10px;
  }

  @media screen and (min-width: 834px) {
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    width: 1382px;
    padding-left: 5px;
    padding-right: 5px;
  }
`,Ke=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`,Je=t.h1`
  color: ${n.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,Qe=t(W)`
  display: flex;
  align-items: center;
  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: ${n.transition.main};
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
  &:hover {
    animation: 1s ease-in-out infinite;
    color: ${n.color.primaryWhite};
  }
  &:focus {
    color: ${n.color.primaryGrey};
  }
`,Xe=t.span`
  margin-right: 6px;
`,Ye=t.div`
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
`,Ze=t.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${n.color.primaryBlack};

  color: ${n.color.primaryWhite};
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
  background-color: ${n.color.primaryBlack2};

  color: ${n.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;const Ue=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,et=t.div`
  padding: 16px 12px;
  width: 300px;
  border-radius: 12px;
  background-color: ${n.color.primaryBlack2};

  color: ${n.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    padding-bottom: 24px;
    padding-top: 24px;
    padding-left: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    padding-bottom: 24px;
    padding-top: 24px;
    padding-left: 40px;
  }
`,tt=t.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    row-gap: 32px;
  }
`,G=t.div`
  display: flex;
  gap: 20px;
`,L=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,z=t.p`
  color: ${n.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,F=t.p`
  display: flex;
  align-items: center;
  color: ${n.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,nt=t.span`
  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,it=()=>{const i=o(P),a=o(S);return e.jsxs("div",{children:[e.jsx(Ue,{children:"Daily goal"}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsxs(G,{children:[e.jsx(u,{name:"icon-bubble",width:"80px",height:"80px",fill:`${n.color.primaryLiteGreen}`}),e.jsxs(L,{children:[e.jsx(z,{children:"Calories"}),e.jsx(F,{children:i})]})]}),e.jsxs(G,{children:[e.jsx(u,{name:"icon-milk",width:"80px",height:"80px",fill:`${n.color.primaryViolet}`}),e.jsxs(L,{children:[e.jsx(z,{children:"Water"}),e.jsxs(F,{children:[a,e.jsx(nt,{children:"ml"})]})]})]})]})})]})},at=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ot=t.div`
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
`,rt=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${n.color.primaryBlack};
  padding: 7px;
`,st=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:i})=>i}px);
  color: ${({$changedColor:i})=>i};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,lt=t.div`
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
`,ct=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,dt=t.p`
  color: ${n.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,pt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,xt=t.p`
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
`,D=t.span`
  color: ${n.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ht=t.p`
  color: ${n.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,mt=t.span`
  color: ${n.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,gt=t.button`
  display: flex;
  align-items: center;
  gap: 7px;
  // column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 8px 10px;
  background-color: ${n.color.primaryGreenLite};
  color: ${n.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: ${n.transition.main};
  cursor: pointer;
  &:hover {
    fill: ${n.color.primaryWhite};
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${n.color.primaryWhite};
    border: 1px solid ${n.color.primaryGreenLite};
  }
  &:focus {
    fill: ${n.color.primaryBlack};
    background-color: ${n.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${n.color.primaryBlack};
  }
`,ft=t.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  transition: ${n.transition.main};
  &:hover {
    transform: scale(1.2);
    animation: 1s ease-in-out infinite;
    fill: ${n.color.primaryWhite};
  }
  &:focus {
    fill: ${n.color.primaryLiteGreen};
  }
  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;M.register(de,pe,xe,he,E,R);const ut={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},yt=["Intake"],wt=({waterIntake:i})=>{const a={labels:yt,datasets:[{label:"Water",data:[i],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(me,{data:a,options:ut})})},bt=i=>i.waterIntake.value,jt=i=>i.waterIntake.isLoading,kt=({setIsModalOpen:i})=>{const[a,s]=y.useState(""),l=o(jt),d=k(),c=r=>{r.preventDefault();const x={date:j,value:Number(a)};d(U(x)),i(!1)};return _.createPortal(e.jsx(q,{onClick:()=>i(!1),children:e.jsxs(H,{onClick:r=>r.stopPropagation(),children:[e.jsx(K,{children:"Add water intake"}),e.jsxs(J,{onSubmit:c,children:[e.jsx(Q,{children:"How much water"}),e.jsx(X,{name:"water",type:"text",placeholder:"Enter milliliters",value:a,onChange:r=>s(r.target.value)}),e.jsx(Y,{type:"submit",disabled:l,children:l?"Loading...":"Confirm"}),e.jsx(Z,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}),document.getElementById("modal-root"))},$t=()=>{const[i,a]=y.useState(!1),s=o(bt),l=k(),d=o(S),c=d-s,r=s<=d?Math.round(s*100/d):100,x=r<=84?Math.ceil(r/100*176+10):88,g=r<=84?"rgba(182, 195, 255, 1)":"green";y.useEffect(()=>{l(ee({date:j}))},[l,s]),y.useEffect(()=>{const p=h=>{h.key==="Escape"&&i&&f()};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[i]);const f=p=>{p.preventDefault(),a(h=>!h)},w=()=>{l(te({date:j}))};return e.jsxs("div",{children:[e.jsx(at,{children:"Water"}),e.jsxs(ot,{children:[e.jsx(rt,{children:e.jsxs(lt,{children:[e.jsx(st,{$changedColor:g,$offset:x,children:`${r}%`}),e.jsx(wt,{waterIntake:r})]})}),e.jsxs(ct,{children:[e.jsx(dt,{children:"Water consumption"}),e.jsxs(pt,{children:[e.jsxs(xt,{children:[s,e.jsx(D,{children:"ml"})]}),e.jsxs(ht,{children:["left:",e.jsx(mt,{children:c>0?c:0}),e.jsx(D,{children:"ml"})]})]}),e.jsxs(gt,{onClick:f,children:[e.jsx(u,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(ft,{onClick:w,children:e.jsx(u,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${n.color.primaryLiteGreen}`})})]})]}),i&&e.jsx(kt,{setIsModalOpen:a})]})};M.register(ge,E,R);const Ct={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},vt={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:a}=i;a.save();const s=i.getDatasetMeta(0).data[0].x,l=i.getDatasetMeta(0).data[0].y,d=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,r=c-d,x=Math.PI/180;a.beginPath(),a.lineWidth=r,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,l,c-r/2,0,x*360,!1),a.stroke()}},O=({dailyCalories:i,inputValue:a,chartBcg:s})=>{a>i&&(a=i,s="red");const l=i-a,d={datasets:[{label:[],data:[a,l],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(fe,{options:Ct,data:d,plugins:[vt]})})},Wt=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,It=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Bt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
`,Gt=t.div`
  display: flex;
  flex-direction: column;
`,Lt=t.h3`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,zt=t.div`
  display: flex;
  column-gap: 12px;
`,T=t.span`
  font-weight: 500;
  color: ${n.color.primaryGrey};
`,Ft=t.p`
  width: 78px;
`,Dt=t.p`
  width: 78px;
`,C=i=>{const{title:a,chartBcg:s,elementGoal:l,elementValue:d}=i;let c=(l-d).toFixed(1);(isNaN(c)||c<0||c===1/0)&&(c=0);let r=Math.round(d*100/l);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(Wt,{children:[e.jsxs(It,{children:[e.jsx(O,{dailyCalories:l,inputValue:d,chartBcg:s}),e.jsx(Bt,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(Gt,{children:[e.jsx(Lt,{children:a}),e.jsxs(zt,{children:[e.jsxs(Ft,{children:["Goal: ",e.jsx(T,{children:l})]}),e.jsxs(Dt,{children:["left: ",e.jsx(T,{children:c})]})]})]})]})})},Tt=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Pt=t.div`
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
`,St=t.div`
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
`,Mt=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Et=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Rt="rgba(255, 196, 247, 1)",Ot="rgba(255, 243, 183, 1)",Vt="rgba(182, 182, 182, 1)",At=()=>{const i=o(ne),a=o(ie),s=o(ae),l=o(P),d=o(ue),c=o(ye),r=o(we),g=o(be)||0;let f="#45FFBC";return e.jsxs("div",{children:[e.jsx(Tt,{children:"Food"}),e.jsxs(Pt,{children:[e.jsxs(St,{children:[e.jsx(O,{dailyCalories:l,inputValue:g,chartBcg:f}),e.jsxs(Mt,{children:[e.jsx("p",{children:g}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Et,{children:[e.jsx(C,{title:"Carbonohidrates",chartBcg:Rt,elementGoal:i,elementValue:c}),e.jsx(C,{title:"Protein",chartBcg:Ot,elementGoal:a,elementValue:d}),e.jsx(C,{title:"Fat",chartBcg:Vt,elementGoal:s,elementValue:r})]})]})]})},Nt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,_t=t.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${n.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,qt=t.div`
  width: 36px;
  height: 36px;
`,Ht=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`,Kt=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;

  color: ${n.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    flex-direction: row;
    column-gap: 20px;
  }
`,Jt=t.p`
  width: 160px;
  padding-top: 2px;
`,Qt=t.p`
  width: 88px;
  padding-top: 2px;
`,Xt=t.p`
  width: 62px;
  padding-top: 2px;
`,v=t.span`
  color: ${n.color.primaryGrey};

  font-weight: 500;
`,Yt=t.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`,Zt=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${n.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  outline: none;
  padding: 0;
  transition: ${n.transition.main};
  @media screen and (min-width: 320px) {
    &:hover {
      transform: none;
      animation: none;
  }
  @media screen and (min-width: 834px) {
    &:hover {
      transform: scale(1.1);
      animation: 1s ease-in-out infinite;
    }
  }
 
`,b=({category:i,categoryImage:a,categoryImage2x:s,carbonohidrates:l,protein:d,fat:c,dataLength:r,id:x})=>{const[g,f]=y.useState(!1),w=k(),p=()=>{f(m=>!m)},h=()=>{const m={_id:x},$=i.toLowerCase();m[$]={products:[]},w(oe(m))};return e.jsxs(Nt,{children:[e.jsxs(_t,{children:[e.jsx(qt,{children:e.jsx("img",{srcSet:`${a} 1x, ${s} 2x`,src:a,alt:"Plate"})}),e.jsx(Ht,{children:i})]}),r>0?e.jsxs(Kt,{children:[e.jsxs(Jt,{children:["Carbonohidrates: ",e.jsx(v,{children:l})]}),e.jsxs(Qt,{children:["Protein: ",e.jsx(v,{children:d})]}),e.jsxs(Xt,{children:["Fat: ",e.jsx(v,{children:c})]}),e.jsx(Yt,{type:"button",onClick:h,children:e.jsx(u,{name:"icon-trash",width:20,height:20})})]}):e.jsxs(Zt,{onClick:p,children:[e.jsx(u,{name:"icon-add","icon-add-more":!0,width:16,height:16})," Record your meal"]}),e.jsx(je,{isModalOpen:g,onClose:p,category:i,categoryImage:a})]})},Ut=t.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
  }
`,en=t.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,tn=t.h2`
  color: ${n.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,nn=t(W)`
  color: ${n.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: ${n.transition.main};
  &:hover {
    color: ${n.color.primaryWhite};
  }
  &:focus {
    color: ${n.color.primaryGrey};
  }
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,an=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`,on=()=>{const i=o(ke),a=o($e),s=o(Ce),l=o(ve),d=o(We),c=o(Ie),r=o(Be),x=o(Ge),g=o(Le),f=o(ze),w=o(Fe),p=o(De),h=o(Te),m=o(Pe),$=m.breakfast.products.length,V=m.lunch.products.length,A=m.dinner.products.length,N=m.snack.products.length;return e.jsxs(Ut,{children:[e.jsxs(en,{children:[e.jsx(tn,{children:"Diary"}),e.jsx(nn,{to:"/diary",children:"See more"})]}),e.jsxs(an,{children:[e.jsx(b,{category:"Breakfast",categoryImage:I,categoryImage2x:B,carbonohidrates:i,protein:s,fat:a,id:h,dataLength:$}),e.jsx(b,{category:"Lunch",categoryImage:Se,categoryImage2x:Me,carbonohidrates:l,protein:c,fat:d,id:h,dataLength:V}),e.jsx(b,{category:"Dinner",categoryImage:Ee,categoryImage2x:Re,carbonohidrates:r,protein:g,fat:x,id:h,dataLength:A}),e.jsx(b,{category:"Snack",categoryImage:Oe,categoryImage2x:Ve,carbonohidrates:f,protein:p,fat:w,title:"Snack",image:I,image2x:B,id:h,dataLength:N})]})]})},rn=t.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,sn=t.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${n.breakpoint.desktop}) {
    max-width: 676px;
  }
`,ln=t.li`
  background-color: ${n.color.primaryBlack2};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,cn=t.p`
  color: ${n.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
  transition: ${n.transition.main};
  &:hover {
    animation: 1s ease-in-out infinite;
    color: ${n.color.primaryWhite};
  }
  &:focus {
    color: ${n.color.primaryGrey};
  }
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,dn=t(W)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,pn=()=>{const i=o(Ae),a=o(Ne),s=o(_e),d=re.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(rn,{children:"Recommended food"}),a&&e.jsx(se,{}),s?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(sn,{children:i.slice(0,d).map(c=>e.jsx(ln,{children:e.jsx(qe,{item:c})},c._id))}),e.jsxs(dn,{to:"/recommended-food",children:[e.jsx(cn,{children:"See more"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${n.color.primaryGrey}`})]})]})},wn=()=>{const i=k(),a={date:j};return y.useEffect(()=>{i(le()),i(ce(a))},[i]),e.jsxs(He,{children:[e.jsxs(Ke,{children:[e.jsx(Je,{children:"Today"}),e.jsxs(Qe,{to:"/dashboard",children:[e.jsx(Xe,{children:"On the way to the goal"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${n.color.primaryGrey}`})]})]}),e.jsxs(Ye,{children:[e.jsx(it,{}),e.jsx($t,{}),e.jsx(At,{})]}),e.jsxs(Ze,{children:[e.jsx(on,{}),e.jsx(pn,{})]})]})};export{wn as default};
