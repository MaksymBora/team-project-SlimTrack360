import{u as t,t as i,L as W,e as o,v as T,w as P,j as e,r as w,a as k,R as N,O as _,C as q,T as H,F as K,x as J,I as Q,y as X,z as Y,A as Z,h as j,B as U,D as ee,E as te,G as ne,H as ie,J as ae,K as oe,q as re,p as se,f as de}from"./index-5143ff67.js";import{I as m}from"./Icon-75c917a1.js";import{C as S,a as le,L as ce,B as pe,p as xe,c as M,d as E,f as he,A as ge,D as me}from"./index-a7a610ac.js";import{v as fe,w as ue,x as we,y as ye,R as be,g as je,a as ke,b as Ce,c as $e,d as ve,e as We,f as Ie,h as Be,i as ze,j as Fe,k as Le,l as De,z as Ge,m as Te,o as I,r as B,n as Pe,q as Se,p as Me,t as Ee,s as Re,u as Oe}from"./RecordDiaryModal-32f31c4c.js";import{c as Ve,a as Ae,b as Ne,I as _e}from"./Item-da3ef8dc.js";import"./index-387d7a00.js";import"./index.esm-2c6fc151.js";const qe=t.div`
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
`,He=t.div`
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
`,Ke=t.h1`
  color: ${i.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,Je=t(W)`
  display: flex;
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Qe=t.span`
  margin-right: 6px;
`,Xe=t.div`
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
`,Ye=t.div`
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
`;const Ze=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,Ue=t.div`
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
`,et=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=t.p`
  color: ${i.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,L=t.p`
  display: flex;
  align-items: center;
  color: ${i.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,tt=t.span`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,nt=()=>{const n=o(T),a=o(P);return e.jsxs("div",{children:[e.jsx(Ze,{children:"Daily goal"}),e.jsx(Ue,{children:e.jsxs(et,{children:[e.jsx(m,{name:"icon-bubble",width:"80px",height:"80px",fill:`${i.color.primaryLiteGreen}`}),e.jsxs(z,{children:[e.jsx(F,{children:"Calories"}),e.jsx(L,{children:n})]}),e.jsx(m,{name:"icon-milk",width:"80px",height:"80px",fill:`${i.color.primaryViolet}`}),e.jsxs(z,{children:[e.jsx(F,{children:"Water"}),e.jsxs(L,{children:[a,e.jsx(tt,{children:"ml"})]})]})]})})]})},it=t.h2`
  color: ${i.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,at=t.div`
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
`,ot=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${i.color.primaryBlack};
  padding: 7px;
`,rt=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$changedColor:n})=>n};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,st=t.div`
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
`,dt=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,lt=t.p`
  color: ${i.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,ct=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,pt=t.p`
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
`,D=t.span`
  color: ${i.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,xt=t.p`
  color: ${i.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,ht=t.span`
  color: ${i.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,gt=t.button`
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
`,mt=t.button`
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
`;S.register(le,ce,pe,xe,M,E);const ft={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ut=["Intake"],wt=({waterIntake:n})=>{const a={labels:ut,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(he,{data:a,options:ft})})},yt=n=>n.waterIntake.value,bt=n=>n.waterIntake.isLoading,jt=({setIsModalOpen:n})=>{const[a,s]=w.useState(""),d=o(bt),l=k(),c=r=>{r.preventDefault();const p={date:j,value:Number(a)};l(Z(p)),n(!1)};return N.createPortal(e.jsx(_,{onClick:()=>n(!1),children:e.jsxs(q,{onClick:r=>r.stopPropagation(),children:[e.jsx(H,{children:"Add water intake"}),e.jsxs(K,{onSubmit:c,children:[e.jsx(J,{children:"How much water"}),e.jsx(Q,{name:"water",type:"text",placeholder:"Enter milliliters",value:a,onChange:r=>s(r.target.value)}),e.jsx(X,{type:"submit",disabled:d,children:d?"Loading...":"Confirm"}),e.jsx(Y,{type:"button",onClick:()=>n(!1),children:"Cancel"})]})]})}),document.getElementById("modal-root"))},kt=()=>{const[n,a]=w.useState(!1),s=o(yt),d=k(),l=o(P),c=l-s,r=s<=l?Math.round(s*100/l):100,p=r<=84?Math.ceil(r/100*176+10):88,f=r<=84?"rgba(182, 195, 255, 1)":"green";w.useEffect(()=>{d(U({date:j}))},[d,s]),w.useEffect(()=>{const x=h=>{h.key==="Escape"&&n&&u()};return document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}},[n]);const u=x=>{x.preventDefault(),a(h=>!h)},y=()=>{d(ee({date:j}))};return e.jsxs("div",{children:[e.jsx(it,{children:"Water"}),e.jsxs(at,{children:[e.jsx(ot,{children:e.jsxs(st,{children:[e.jsx(rt,{$changedColor:f,$offset:p,children:`${r}%`}),e.jsx(wt,{waterIntake:r})]})}),e.jsxs(dt,{children:[e.jsx(lt,{children:"Water consumption"}),e.jsxs(ct,{children:[e.jsxs(pt,{children:[s,e.jsx(D,{children:"ml"})]}),e.jsxs(xt,{children:["left:",e.jsx(ht,{children:c>0?c:0}),e.jsx(D,{children:"ml"})]})]}),e.jsxs(gt,{onClick:u,children:[e.jsx(m,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(mt,{onClick:y,children:e.jsx(m,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${i.color.primaryLiteGreen}`})})]})]}),n&&e.jsx(jt,{setIsModalOpen:a})]})};S.register(ge,M,E);const Ct={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},$t={id:"bcgCircle",beforeDatasetsDraw(n){const{ctx:a}=n;a.save();const s=n.getDatasetMeta(0).data[0].x,d=n.getDatasetMeta(0).data[0].y,l=n.getDatasetMeta(0).data[0].innerRadius,c=n.getDatasetMeta(0).data[0].outerRadius,r=c-l,p=Math.PI/180;a.beginPath(),a.lineWidth=r,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,d,c-r/2,0,p*360,!1),a.stroke()}},R=({dailyCalories:n,inputValue:a,chartBcg:s})=>{a>n&&(a=n,s="red");const d=n-a,l={datasets:[{label:[],data:[a,d],backgroundColor:[s,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(me,{options:Ct,data:l,plugins:[$t]})})},vt=t.div`
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
`,Bt=t.div`
  display: flex;
  flex-direction: column;
`,zt=t.h3`
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
`,Lt=t.p`
  width: 78px;
`,$=n=>{const{title:a,chartBcg:s,elementGoal:d,elementValue:l}=n;let c=(d-l).toFixed(1);c<0&&(c=0);let r=Math.round(l*100/d);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(vt,{children:[e.jsxs(Wt,{children:[e.jsx(R,{dailyCalories:d,inputValue:l,chartBcg:s}),e.jsx(It,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(Bt,{children:[e.jsx(zt,{children:a}),e.jsxs(Ft,{children:[e.jsxs(Lt,{children:["Goal: ",e.jsx(G,{children:d})]}),e.jsxs("p",{children:["left: ",e.jsx(G,{children:c})]})]})]})]})})},Dt=t.h2`
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
`,Mt="rgba(255, 196, 247, 1)",Et="rgba(255, 243, 183, 1)",Rt="rgba(182, 182, 182, 1)",Ot=()=>{const n=o(te),a=o(ne),s=o(ie),d=o(T),l=o(fe),c=o(ue),r=o(we),p=o(ye);let f="#45FFBC";return e.jsxs("div",{children:[e.jsx(Dt,{children:"Food"}),e.jsxs(Gt,{children:[e.jsxs(Tt,{children:[e.jsx(R,{dailyCalories:d,inputValue:p,chartBcg:f}),e.jsxs(Pt,{children:[e.jsx("p",{children:p}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(St,{children:[e.jsx($,{title:"Carbonohidrates",chartBcg:Mt,elementGoal:n,elementValue:c}),e.jsx($,{title:"Protein",chartBcg:Et,elementGoal:a,elementValue:l}),e.jsx($,{title:"Fat",chartBcg:Rt,elementGoal:s,elementValue:r})]})]})]})},Vt=t.div`
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
`,Jt=t.p`
  width: 62px;
  padding-top: 2px;
`,v=t.span`
  color: ${i.color.primaryGrey};

  font-weight: 500;
`,Qt=t.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`,Xt=t.button`
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
`,b=({category:n,categoryImage:a,categoryImage2x:s,carbonohidrates:d,protein:l,fat:c,dataLength:r,id:p})=>{const[f,u]=w.useState(!1),y=k(),x=()=>{u(g=>!g)},h=()=>{const g={_id:p},C=n.toLowerCase();g[C]={products:[]},y(ae(g))};return e.jsxs(Vt,{children:[e.jsxs(At,{children:[e.jsx(Nt,{children:e.jsx("img",{srcSet:`${a} 1x, ${s} 2x`,src:a,alt:"Plate"})}),e.jsx(_t,{children:n})]}),r>0?e.jsxs(qt,{children:[e.jsxs(Ht,{children:["Carbonohidrates: ",e.jsx(v,{children:d})]}),e.jsxs(Kt,{children:["Protein: ",e.jsx(v,{children:l})]}),e.jsxs(Jt,{children:["Fat: ",e.jsx(v,{children:c})]}),e.jsx(Qt,{type:"button",onClick:h,children:e.jsx(m,{name:"icon-trash",width:20,height:20})})]}):e.jsxs(Xt,{onClick:x,children:[e.jsx(m,{name:"icon-add","icon-add-more":!0,width:16,height:16})," Record your meal"]}),e.jsx(be,{isModalOpen:f,onClose:x,category:n,categoryImage:a})]})},Yt=t.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
  }
`,Zt=t.div`
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
`,en=t(W)`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,tn=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`,nn=()=>{const n=o(je),a=o(ke),s=o(Ce),d=o($e),l=o(ve),c=o(We),r=o(Ie),p=o(Be),f=o(ze),u=o(Fe),y=o(Le),x=o(De),h=o(Ge),g=o(Te),C=g.breakfast.products.length,O=g.lunch.products.length,V=g.dinner.products.length,A=g.snack.products.length;return e.jsxs(Yt,{children:[e.jsxs(Zt,{children:[e.jsx(Ut,{children:"Diary"}),e.jsx(en,{to:"/diary",children:"See more"})]}),e.jsxs(tn,{children:[e.jsx(b,{category:"Breakfast",categoryImage:I,categoryImage2x:B,carbonohidrates:n,protein:s,fat:a,id:h,dataLength:C}),e.jsx(b,{category:"Lunch",categoryImage:Pe,categoryImage2x:Se,carbonohidrates:d,protein:c,fat:l,id:h,dataLength:O}),e.jsx(b,{category:"Dinner",categoryImage:Me,categoryImage2x:Ee,carbonohidrates:r,protein:f,fat:p,id:h,dataLength:V}),e.jsx(b,{category:"Snack",categoryImage:Re,categoryImage2x:Oe,carbonohidrates:u,protein:x,fat:y,title:"Snack",image:I,image2x:B,id:h,dataLength:A})]})]})},an=t.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,on=t.ul`
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
`,rn=t.li`
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
`,sn=t.p`
  color: ${i.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

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
`,ln=()=>{const n=o(Ve),a=o(Ae),s=o(Ne),l=oe.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(an,{children:"Recommended food"}),a&&e.jsx(re,{}),s?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(on,{children:n.slice(0,l).map(c=>e.jsx(rn,{children:e.jsx(_e,{item:c})},c._id))}),e.jsxs(dn,{to:"/recommended-food",children:[e.jsx(sn,{children:"See more"}),e.jsx(m,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]})},un=()=>{const n=k(),a={date:j};return w.useEffect(()=>{n(se()),n(de(a))},[n]),e.jsxs(qe,{children:[e.jsxs(He,{children:[e.jsx(Ke,{children:"Today"}),e.jsxs(Je,{to:"/dashboard",children:[e.jsx(Qe,{children:"On the way to the goal"}),e.jsx(m,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${i.color.primaryGrey}`})]})]}),e.jsxs(Xe,{children:[e.jsx(nt,{}),e.jsx(kt,{}),e.jsx(Ot,{})]}),e.jsxs(Ye,{children:[e.jsx(nn,{}),e.jsx(ln,{})]})]})};export{un as default};
