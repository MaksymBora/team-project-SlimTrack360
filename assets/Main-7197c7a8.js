import{u as n,t,L as W,e as r,w as P,x as S,j as e,r as y,a as k,R as _,O as K,C as q,T as H,F as J,y as Q,I as X,z as Y,A as Z,B as U,i as j,D as ee,E as te,G as ne,H as ie,J as ae,K as oe,M as re,v as se,q as le,h as ce}from"./index-a089e988.js";import{I as u}from"./Icon-232e6b89.js";import{C as M,a as de,L as pe,B as xe,p as he,c as E,d as R,f as me,A as ge,D as fe}from"./index-190711b5.js";import{v as ue,w as ye,x as we,y as be,R as je,g as ke,a as $e,b as Ce,c as ve,d as We,e as Ie,f as Be,h as Ge,i as Le,j as ze,k as Fe,l as De,z as Te,m as Pe,o as I,r as B,n as Se,q as Me,p as Ee,t as Re,s as Oe,u as Ve}from"./RecordDiaryModal-c66d6a09.js";import{c as Ae,a as Ne,b as _e,I as Ke}from"./Item-59723d6d.js";import"./index-387d7a00.js";import"./index.esm-af86d3df.js";const qe=n.div`
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
`,He=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`,Je=n.h1`
  color: ${t.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,Qe=n(W)`
  display: flex;
  align-items: center;
  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: ${t.transition.main};
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
  &:hover {
    animation: 1s ease-in-out infinite;
    color: ${t.color.primaryWhite};
  }
  &:focus {
    color: ${t.color.primaryGrey};
  }
`,Xe=n.span`
  margin-right: 6px;
`,Ye=n.div`
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
`,Ze=n.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack};

  color: ${t.color.primaryWhite};
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
`;n.div`
  padding: 16px 0;
  width: 300px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack2};

  color: ${t.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;const Ue=n.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,et=n.div`
  padding: 16px 12px;
  width: 300px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack2};

  color: ${t.color.primaryWhite};
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
`,tt=n.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    row-gap: 32px;
  }
`,G=n.div`
  display: flex;
  gap: 20px;
`,L=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,z=n.p`
  color: ${t.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,F=n.p`
  display: flex;
  align-items: center;
  color: ${t.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,nt=n.span`
  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,it=()=>{const i=r(P),a=r(S);return e.jsxs("div",{children:[e.jsx(Ue,{children:"Daily goal"}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsxs(G,{children:[e.jsx(u,{name:"icon-bubble",width:"80px",height:"80px",fill:`${t.color.primaryLiteGreen}`}),e.jsxs(L,{children:[e.jsx(z,{children:"Calories"}),e.jsx(F,{children:i})]})]}),e.jsxs(G,{children:[e.jsx(u,{name:"icon-milk",width:"80px",height:"80px",fill:`${t.color.primaryViolet}`}),e.jsxs(L,{children:[e.jsx(z,{children:"Water"}),e.jsxs(F,{children:[a,e.jsx(nt,{children:"ml"})]})]})]})]})})]})},at=n.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ot=n.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack2};
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
`,rt=n.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${t.color.primaryBlack};
  padding: 7px;
`,st=n.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:i})=>i}px);
  color: ${({$changedColor:i})=>i};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,lt=n.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${t.color.primaryViolet};
    animation: ${t.transition.main} 4s linear infinite;

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
`,ct=n.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,dt=n.p`
  color: ${t.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,pt=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,xt=n.p`
  display: flex;
  align-items: center;
  color: ${t.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`,D=n.span`
  color: ${t.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ht=n.p`
  color: ${t.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,mt=n.span`
  color: ${t.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,gt=n.button`
  display: flex;
  align-items: center;
  gap: 7px;
  // column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 8px 10px;
  background-color: ${t.color.primaryGreenLite};
  color: ${t.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: ${t.transition.main};
  cursor: pointer;
  &:hover {
    fill: ${t.color.primaryWhite};
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${t.color.primaryWhite};
    border: 1px solid ${t.color.primaryGreenLite};
  }
  &:focus {
    fill: ${t.color.primaryBlack};
    background-color: ${t.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${t.color.primaryBlack};
  }
`,ft=n.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  transition: ${t.transition.main};
  &:hover {
    transform: scale(1.2);
    animation: 1s ease-in-out infinite;
    fill: ${t.color.primaryWhite};
  }
  &:focus {
    fill: ${t.color.primaryLiteGreen};
  }
  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;M.register(de,pe,xe,he,E,R);const ut={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},yt=["Intake"],wt=({waterIntake:i})=>{const a={labels:yt,datasets:[{label:"Water",data:[i],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(me,{data:a,options:ut})})},bt=i=>i.waterIntake.value,jt=i=>i.waterIntake.isLoading,kt=({setIsModalOpen:i})=>{const[a,s]=y.useState(""),l=r(jt),d=k(),c=o=>{o.preventDefault();const p={date:j,value:Number(a)};d(U(p)),i(!1)};return _.createPortal(e.jsx(K,{onClick:()=>i(!1),children:e.jsxs(q,{onClick:o=>o.stopPropagation(),children:[e.jsx(H,{children:"Add water intake"}),e.jsxs(J,{onSubmit:c,children:[e.jsx(Q,{children:"How much water"}),e.jsx(X,{name:"water",type:"text",placeholder:"Enter milliliters",value:a,onChange:o=>{const p=o.target.value;/^\d*$/.test(p)&&s(p)},onKeyDown:o=>{(o.key==="Backspace"||o.key==="Delete")&&s("")},pattern:"\\d*"}),e.jsx(Y,{type:"submit",disabled:l,children:l?"Loading...":"Confirm"}),e.jsx(Z,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})}),document.getElementById("modal-root"))},$t=()=>{const[i,a]=y.useState(!1),s=r(bt),l=k(),d=r(S),c=d-s,o=s<=d?Math.round(s*100/d):100,p=o<=84?Math.ceil(o/100*176+10):88,g=o<=84?"rgba(182, 195, 255, 1)":"green";y.useEffect(()=>{l(ee({date:j}))},[l,s]),y.useEffect(()=>{const x=h=>{h.key==="Escape"&&i&&f()};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[i]);const f=x=>{x.preventDefault(),a(h=>!h)},w=()=>{l(te({date:j}))};return e.jsxs("div",{children:[e.jsx(at,{children:"Water"}),e.jsxs(ot,{children:[e.jsx(rt,{children:e.jsxs(lt,{children:[e.jsx(st,{$changedColor:g,$offset:p,children:`${o}%`}),e.jsx(wt,{waterIntake:o})]})}),e.jsxs(ct,{children:[e.jsx(dt,{children:"Water consumption"}),e.jsxs(pt,{children:[e.jsxs(xt,{children:[s,e.jsx(D,{children:"ml"})]}),e.jsxs(ht,{children:["left:",e.jsx(mt,{children:c>0?c:0}),e.jsx(D,{children:"ml"})]})]}),e.jsxs(gt,{onClick:f,children:[e.jsx(u,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(ft,{onClick:w,children:e.jsx(u,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${t.color.primaryLiteGreen}`})})]})]}),i&&e.jsx(kt,{setIsModalOpen:a})]})};M.register(ge,E,R);const Ct={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},vt={id:"bcgCircle",beforeDatasetsDraw(i){const{ctx:a}=i;a.save();const s=i.getDatasetMeta(0).data[0].x,l=i.getDatasetMeta(0).data[0].y,d=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,o=c-d,p=Math.PI/180;a.beginPath(),a.lineWidth=o,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,l,c-o/2,0,p*360,!1),a.stroke()}},O=({dailyCalories:i,inputValue:a,chartBcg:s})=>{a>i&&(a=i,s="red");const l=i-a,d={datasets:[{label:[],data:[a,l],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(fe,{options:Ct,data:d,plugins:[vt]})})},Wt=n.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,It=n.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Bt=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
`,Gt=n.div`
  display: flex;
  flex-direction: column;
`,Lt=n.h3`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,zt=n.div`
  display: flex;
  column-gap: 12px;
`,T=n.span`
  font-weight: 500;
  color: ${t.color.primaryGrey};
`,Ft=n.p`
  width: 78px;
`,Dt=n.p`
  width: 78px;
`,C=i=>{const{title:a,chartBcg:s,elementGoal:l,elementValue:d}=i;let c=(l-d).toFixed(1);(isNaN(c)||c<0||c===1/0)&&(c=0);let o=Math.round(d*100/l);return(o===1/0||isNaN(o))&&(o=0),o>100&&(o=100),e.jsx(e.Fragment,{children:e.jsxs(Wt,{children:[e.jsxs(It,{children:[e.jsx(O,{dailyCalories:l,inputValue:d,chartBcg:s}),e.jsx(Bt,{children:e.jsx("p",{children:`${o}%`})})]}),e.jsxs(Gt,{children:[e.jsx(Lt,{children:a}),e.jsxs(zt,{children:[e.jsxs(Ft,{children:["Goal: ",e.jsx(T,{children:l})]}),e.jsxs(Dt,{children:["left: ",e.jsx(T,{children:c})]})]})]})]})})},Tt=n.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Pt=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack2};
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
`,St=n.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: ${t.color.primaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,Mt=n.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Et=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Rt="rgba(255, 196, 247, 1)",Ot="rgba(255, 243, 183, 1)",Vt="rgba(182, 182, 182, 1)",At=()=>{const i=r(ne),a=r(ie),s=r(ae),l=r(P),d=r(ue),c=r(ye),o=r(we),g=r(be)||0;let f="#45FFBC";return e.jsxs("div",{children:[e.jsx(Tt,{children:"Food"}),e.jsxs(Pt,{children:[e.jsxs(St,{children:[e.jsx(O,{dailyCalories:l,inputValue:g,chartBcg:f}),e.jsxs(Mt,{children:[e.jsx("p",{children:g}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Et,{children:[e.jsx(C,{title:"Carbonohidrates",chartBcg:Rt,elementGoal:i,elementValue:c}),e.jsx(C,{title:"Protein",chartBcg:Ot,elementGoal:a,elementValue:d}),e.jsx(C,{title:"Fat",chartBcg:Vt,elementGoal:s,elementValue:o})]})]})]})},Nt=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,_t=n.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${t.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Kt=n.div`
  width: 36px;
  height: 36px;
`,qt=n.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`,Ht=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;

  color: ${t.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    flex-direction: row;
    column-gap: 20px;
  }
`,Jt=n.p`
  width: 160px;
  padding-top: 2px;
`,Qt=n.p`
  width: 88px;
  padding-top: 2px;
`,Xt=n.p`
  width: 62px;
  padding-top: 2px;
`,v=n.span`
  color: ${t.color.primaryGrey};

  font-weight: 500;
`,Yt=n.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  transition: ${t.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
  }
`,Zt=n.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${t.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  outline: none;
  padding: 0;
  transition: ${t.transition.main};
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
 
`,b=({category:i,categoryImage:a,categoryImage2x:s,carbonohidrates:l,protein:d,fat:c,dataLength:o,id:p})=>{const[g,f]=y.useState(!1),w=k(),x=()=>{f(m=>!m)},h=()=>{const m={_id:p},$=i.toLowerCase();m[$]={products:[]},w(oe(m))};return e.jsxs(Nt,{children:[e.jsxs(_t,{children:[e.jsx(Kt,{children:e.jsx("img",{srcSet:`${a} 1x, ${s} 2x`,src:a,alt:"Plate"})}),e.jsx(qt,{children:i})]}),o>0?e.jsxs(Ht,{children:[e.jsxs(Jt,{children:["Carbonohidrates: ",e.jsx(v,{children:l})]}),e.jsxs(Qt,{children:["Protein: ",e.jsx(v,{children:d})]}),e.jsxs(Xt,{children:["Fat: ",e.jsx(v,{children:c})]}),e.jsx(Yt,{type:"button",onClick:h,children:e.jsx(u,{name:"icon-trash",width:20,height:20})})]}):e.jsxs(Zt,{onClick:x,children:[e.jsx(u,{name:"icon-add","icon-add-more":!0,width:16,height:16})," Record your meal"]}),e.jsx(je,{isModalOpen:g,onClose:x,category:i,categoryImage:a})]})},Ut=n.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
  }
`,en=n.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,tn=n.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,nn=n(W)`
  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: ${t.transition.main};
  &:hover {
    color: ${t.color.primaryWhite};
  }
  &:focus {
    color: ${t.color.primaryGrey};
  }
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,an=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`,on=()=>{const i=r(ke),a=r($e),s=r(Ce),l=r(ve),d=r(We),c=r(Ie),o=r(Be),p=r(Ge),g=r(Le),f=r(ze),w=r(Fe),x=r(De),h=r(Te),m=r(Pe),$=m.breakfast.products.length,V=m.lunch.products.length,A=m.dinner.products.length,N=m.snack.products.length;return e.jsxs(Ut,{children:[e.jsxs(en,{children:[e.jsx(tn,{children:"Diary"}),e.jsx(nn,{to:"/diary",children:"See more"})]}),e.jsxs(an,{children:[e.jsx(b,{category:"Breakfast",categoryImage:I,categoryImage2x:B,carbonohidrates:i,protein:s,fat:a,id:h,dataLength:$}),e.jsx(b,{category:"Lunch",categoryImage:Se,categoryImage2x:Me,carbonohidrates:l,protein:c,fat:d,id:h,dataLength:V}),e.jsx(b,{category:"Dinner",categoryImage:Ee,categoryImage2x:Re,carbonohidrates:o,protein:g,fat:p,id:h,dataLength:A}),e.jsx(b,{category:"Snack",categoryImage:Oe,categoryImage2x:Ve,carbonohidrates:f,protein:x,fat:w,title:"Snack",image:I,image2x:B,id:h,dataLength:N})]})]})},rn=n.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,sn=n.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    max-width: 676px;
  }
`,ln=n.li`
  background-color: ${t.color.primaryBlack2};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,cn=n.p`
  color: ${t.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
  transition: ${t.transition.main};
  &:hover {
    animation: 1s ease-in-out infinite;
    color: ${t.color.primaryWhite};
  }
  &:focus {
    color: ${t.color.primaryGrey};
  }
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,dn=n(W)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,pn=()=>{const i=r(Ae),a=r(Ne),s=r(_e),d=re.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(rn,{children:"Recommended food"}),a&&e.jsx(se,{}),s?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(sn,{children:i.slice(0,d).map(c=>e.jsx(ln,{children:e.jsx(Ke,{item:c})},c._id))}),e.jsxs(dn,{to:"/recommended-food",children:[e.jsx(cn,{children:"See more"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${t.color.primaryGrey}`})]})]})},wn=()=>{const i=k(),a={date:j};return y.useEffect(()=>{i(le()),i(ce(a))},[i]),e.jsxs(qe,{children:[e.jsxs(He,{children:[e.jsx(Je,{children:"Today"}),e.jsxs(Qe,{to:"/dashboard",children:[e.jsx(Xe,{children:"On the way to the goal"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${t.color.primaryGrey}`})]})]}),e.jsxs(Ye,{children:[e.jsx(it,{}),e.jsx($t,{}),e.jsx(At,{})]}),e.jsxs(Ze,{children:[e.jsx(on,{}),e.jsx(pn,{})]})]})};export{wn as default};
