import{u as i,t,L as W,e as o,v as T,w as P,j as e,r as y,a as k,R as N,O as _,C as q,T as H,F as K,x as J,I as Q,y as X,z as Y,A as Z,h as j,B as U,D as ee,E as te,G as ie,H as ne,J as ae,K as oe,q as re,p as se,f as le}from"./index-ff45d174.js";import{I as u}from"./Icon-01eebc8c.js";import{C as S,a as ce,L as de,B as pe,p as xe,c as M,d as E,f as he,A as me,D as ge}from"./index-1390aa9a.js";import{v as fe,w as ue,x as ye,y as we,R as be,g as je,a as ke,b as $e,c as Ce,d as ve,e as We,f as Ie,h as Be,i as Le,j as Ge,k as ze,l as Fe,z as De,m as Te,o as I,r as B,n as Pe,q as Se,p as Me,t as Ee,s as Re,u as Oe}from"./RecordDiaryModal-56e0f415.js";import{c as Ve,a as Ae,b as Ne,I as _e}from"./Item-1493df0c.js";import"./index-387d7a00.js";import"./index.esm-4fa72367.js";const qe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${t.color.primaryBlack};
  color: ${t.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
    width: 100%;
  }
`,He=i.div`
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
`,Ke=i.h1`
  color: ${t.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,Je=i(W)`
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
`,Qe=i.span`
  margin-right: 6px;
`,Xe=i.div`
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
`,Ye=i.div`
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
`;i.div`
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
`;const Ze=i.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,Ue=i.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${t.color.primaryBlack2};

  color: ${t.color.primaryWhite};
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
`,et=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,L=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,G=i.p`
  color: ${t.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,z=i.p`
  display: flex;
  align-items: center;
  color: ${t.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,tt=i.span`
  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,it=()=>{const n=o(T),a=o(P);return e.jsxs("div",{children:[e.jsx(Ze,{children:"Daily goal"}),e.jsx(Ue,{children:e.jsxs(et,{children:[e.jsx(u,{name:"icon-bubble",width:"80px",height:"80px",fill:`${t.color.primaryLiteGreen}`}),e.jsxs(L,{children:[e.jsx(G,{children:"Calories"}),e.jsx(z,{children:n})]}),e.jsx(u,{name:"icon-milk",width:"80px",height:"80px",fill:`${t.color.primaryViolet}`}),e.jsxs(L,{children:[e.jsx(G,{children:"Water"}),e.jsxs(z,{children:[a,e.jsx(tt,{children:"ml"})]})]})]})})]})},nt=i.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,at=i.div`
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
`,ot=i.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${t.color.primaryBlack};
  padding: 7px;
`,rt=i.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,st=i.div`
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
`,lt=i.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ct=i.p`
  color: ${t.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,dt=i.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,pt=i.p`
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
`,F=i.span`
  color: ${t.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,xt=i.p`
  color: ${t.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,ht=i.span`
  color: ${t.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,mt=i.button`
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
`,gt=i.button`
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
`;S.register(ce,de,pe,xe,M,E);const ft={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ut=["Intake"],yt=({waterIntake:n})=>{const a={labels:ut,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(he,{data:a,options:ft})})},wt=n=>n.waterIntake.value,bt=n=>n.waterIntake.isLoading,jt=({setIsModalOpen:n})=>{const[a,s]=y.useState(""),l=o(bt),d=k(),c=r=>{r.preventDefault();const x={date:j,value:Number(a)};d(Z(x)),n(!1)};return N.createPortal(e.jsx(_,{onClick:()=>n(!1),children:e.jsxs(q,{onClick:r=>r.stopPropagation(),children:[e.jsx(H,{children:"Add water intake"}),e.jsxs(K,{onSubmit:c,children:[e.jsx(J,{children:"How much water"}),e.jsx(Q,{name:"water",type:"text",placeholder:"Enter milliliters",value:a,onChange:r=>s(r.target.value)}),e.jsx(X,{type:"submit",disabled:l,children:l?"Loading...":"Confirm"}),e.jsx(Y,{type:"button",onClick:()=>n(!1),children:"Cancel"})]})]})}),document.getElementById("modal-root"))},kt=()=>{const[n,a]=y.useState(!1),s=o(wt),l=k(),d=o(P),c=d-s,r=s<=d?Math.round(s*100/d):100,x=r<=84?Math.ceil(r/100*176+10):88,g=r<=84?"rgba(182, 195, 255, 1)":"green";y.useEffect(()=>{l(U({date:j}))},[l,s]),y.useEffect(()=>{const p=h=>{h.key==="Escape"&&n&&f()};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[n]);const f=p=>{p.preventDefault(),a(h=>!h)},w=()=>{l(ee({date:j}))};return e.jsxs("div",{children:[e.jsx(nt,{children:"Water"}),e.jsxs(at,{children:[e.jsx(ot,{children:e.jsxs(st,{children:[e.jsx(rt,{$changedColor:g,$offset:x,children:`${r}%`}),e.jsx(yt,{waterIntake:r})]})}),e.jsxs(lt,{children:[e.jsx(ct,{children:"Water consumption"}),e.jsxs(dt,{children:[e.jsxs(pt,{children:[s,e.jsx(F,{children:"ml"})]}),e.jsxs(xt,{children:["left:",e.jsx(ht,{children:c>0?c:0}),e.jsx(F,{children:"ml"})]})]}),e.jsxs(mt,{onClick:f,children:[e.jsx(u,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(gt,{onClick:w,children:e.jsx(u,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${t.color.primaryLiteGreen}`})})]})]}),n&&e.jsx(jt,{setIsModalOpen:a})]})};S.register(me,M,E);const $t={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ct={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:a}=n;a.save();const s=n.getDatasetMeta(0).data[0].x,l=n.getDatasetMeta(0).data[0].y,d=n.getDatasetMeta(0).data[0].innerRadius,c=n.getDatasetMeta(0).data[0].outerRadius,r=c-d,x=Math.PI/180;a.beginPath(),a.lineWidth=r,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,l,c-r/2,0,x*360,!1),a.stroke()}},R=({dailyCalories:n,inputValue:a,chartBcg:s})=>{a>n&&(a=n,s="red");const l=n-a,d={datasets:[{label:[],data:[a,l],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(ge,{options:$t,data:d,plugins:[Ct]})})},vt=i.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Wt=i.div`
  position: relative;
  width: 48px;
  height: 48px;
`,It=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${t.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
`,Bt=i.div`
  display: flex;
  flex-direction: column;
`,Lt=i.h3`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Gt=i.div`
  display: flex;
  column-gap: 12px;
`,D=i.span`
  font-weight: 500;
  color: ${t.color.primaryGrey};
`,zt=i.p`
  width: 78px;
`,Ft=i.p`
  width: 78px;
`,C=n=>{const{title:a,chartBcg:s,elementGoal:l,elementValue:d}=n;let c=(l-d).toFixed(1);(isNaN(c)||c<0||c===1/0)&&(c=0);let r=Math.round(d*100/l);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(vt,{children:[e.jsxs(Wt,{children:[e.jsx(R,{dailyCalories:l,inputValue:d,chartBcg:s}),e.jsx(It,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(Bt,{children:[e.jsx(Lt,{children:a}),e.jsxs(Gt,{children:[e.jsxs(zt,{children:["Goal: ",e.jsx(D,{children:l})]}),e.jsxs(Ft,{children:["left: ",e.jsx(D,{children:c})]})]})]})]})})},Dt=i.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Tt=i.div`
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
`,Pt=i.div`
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
`,St=i.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Mt=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Et="rgba(255, 196, 247, 1)",Rt="rgba(255, 243, 183, 1)",Ot="rgba(182, 182, 182, 1)",Vt=()=>{const n=o(te),a=o(ie),s=o(ne),l=o(T),d=o(fe),c=o(ue),r=o(ye),g=o(we)||0;let f="#45FFBC";return e.jsxs("div",{children:[e.jsx(Dt,{children:"Food"}),e.jsxs(Tt,{children:[e.jsxs(Pt,{children:[e.jsx(R,{dailyCalories:l,inputValue:g,chartBcg:f}),e.jsxs(St,{children:[e.jsx("p",{children:g}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Mt,{children:[e.jsx(C,{title:"Carbonohidrates",chartBcg:Et,elementGoal:n,elementValue:c}),e.jsx(C,{title:"Protein",chartBcg:Rt,elementGoal:a,elementValue:d}),e.jsx(C,{title:"Fat",chartBcg:Ot,elementGoal:s,elementValue:r})]})]})]})},At=i.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Nt=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${t.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,_t=i.div`
  width: 36px;
  height: 36px;
`,qt=i.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`,Ht=i.div`
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
`,Kt=i.p`
  width: 160px;
  padding-top: 2px;
`,Jt=i.p`
  width: 88px;
  padding-top: 2px;
`,Qt=i.p`
  width: 62px;
  padding-top: 2px;
`,v=i.span`
  color: ${t.color.primaryGrey};

  font-weight: 500;
`,Xt=i.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`,Yt=i.button`
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
 
`,b=({category:n,categoryImage:a,categoryImage2x:s,carbonohidrates:l,protein:d,fat:c,dataLength:r,id:x})=>{const[g,f]=y.useState(!1),w=k(),p=()=>{f(m=>!m)},h=()=>{const m={_id:x},$=n.toLowerCase();m[$]={products:[]},w(ae(m))};return e.jsxs(At,{children:[e.jsxs(Nt,{children:[e.jsx(_t,{children:e.jsx("img",{srcSet:`${a} 1x, ${s} 2x`,src:a,alt:"Plate"})}),e.jsx(qt,{children:n})]}),r>0?e.jsxs(Ht,{children:[e.jsxs(Kt,{children:["Carbonohidrates: ",e.jsx(v,{children:l})]}),e.jsxs(Jt,{children:["Protein: ",e.jsx(v,{children:d})]}),e.jsxs(Qt,{children:["Fat: ",e.jsx(v,{children:c})]}),e.jsx(Xt,{type:"button",onClick:h,children:e.jsx(u,{name:"icon-trash",width:20,height:20})})]}):e.jsxs(Yt,{onClick:p,children:[e.jsx(u,{name:"icon-add","icon-add-more":!0,width:16,height:16})," Record your meal"]}),e.jsx(be,{isModalOpen:g,onClose:p,category:n,categoryImage:a})]})},Zt=i.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
  }
`,Ut=i.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,ei=i.h2`
  color: ${t.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ti=i(W)`
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
`,ii=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`,ni=()=>{const n=o(je),a=o(ke),s=o($e),l=o(Ce),d=o(ve),c=o(We),r=o(Ie),x=o(Be),g=o(Le),f=o(Ge),w=o(ze),p=o(Fe),h=o(De),m=o(Te),$=m.breakfast.products.length,O=m.lunch.products.length,V=m.dinner.products.length,A=m.snack.products.length;return e.jsxs(Zt,{children:[e.jsxs(Ut,{children:[e.jsx(ei,{children:"Diary"}),e.jsx(ti,{to:"/diary",children:"See more"})]}),e.jsxs(ii,{children:[e.jsx(b,{category:"Breakfast",categoryImage:I,categoryImage2x:B,carbonohidrates:n,protein:s,fat:a,id:h,dataLength:$}),e.jsx(b,{category:"Lunch",categoryImage:Pe,categoryImage2x:Se,carbonohidrates:l,protein:c,fat:d,id:h,dataLength:O}),e.jsx(b,{category:"Dinner",categoryImage:Me,categoryImage2x:Ee,carbonohidrates:r,protein:g,fat:x,id:h,dataLength:V}),e.jsx(b,{category:"Snack",categoryImage:Re,categoryImage2x:Oe,carbonohidrates:f,protein:p,fat:w,title:"Snack",image:I,image2x:B,id:h,dataLength:A})]})]})},ai=i.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,oi=i.ul`
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
`,ri=i.li`
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
`,si=i.p`
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
`,li=i(W)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,ci=()=>{const n=o(Ve),a=o(Ae),s=o(Ne),d=oe.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(ai,{children:"Recommended food"}),a&&e.jsx(re,{}),s?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(oi,{children:n.slice(0,d).map(c=>e.jsx(ri,{children:e.jsx(_e,{item:c})},c._id))}),e.jsxs(li,{to:"/recommended-food",children:[e.jsx(si,{children:"See more"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${t.color.primaryGrey}`})]})]})},ui=()=>{const n=k(),a={date:j};return y.useEffect(()=>{n(se()),n(le(a))},[n]),e.jsxs(qe,{children:[e.jsxs(He,{children:[e.jsx(Ke,{children:"Today"}),e.jsxs(Je,{to:"/dashboard",children:[e.jsx(Qe,{children:"On the way to the goal"}),e.jsx(u,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${t.color.primaryGrey}`})]})]}),e.jsxs(Xe,{children:[e.jsx(it,{}),e.jsx(kt,{}),e.jsx(Vt,{})]}),e.jsxs(Ye,{children:[e.jsx(ni,{}),e.jsx(ci,{})]})]})};export{ui as default};
