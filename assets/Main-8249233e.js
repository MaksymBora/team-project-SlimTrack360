import{s as f,t as w,L as Xe,j as n,c as he,u as Ye,R as kt,i as Pt,r as ve,m as Dt,n as Lt,o as Wt,p as Ft,q as Bt,v as Ut,w as _t,x as Nt,h as Yt,g as zt}from"./index-e499228a.js";import{I as me}from"./Icon-280a944e.js";import{C as vt,a as Qt,L as Gt,B as qt,p as Ht,c as gt,d as yt,f as Kt,A as Vt,D as Zt}from"./index-381116c0.js";import{d as Be}from"./dateToday-97cb1add.js";import{p as bt}from"./index-387d7a00.js";import{F as Jt,d as Xt,E as $t,c as nt,e as en,a as tn,b as Le,f as nn,g as rn}from"./index.esm-8e20f6af.js";import{c as an,a as on,b as sn,I as ln}from"./Item-ef0d7c7e.js";const cn=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${w.color.primaryBlack};
  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
    width: 100%;
  }
`,dn=f.div`
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
`,un=f.h1`
  color: ${w.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,pn=f(Xe)`
  display: flex;
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,fn=f.span`
  margin-right: 6px;
`,hn=f.div`
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
`,mn=f.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack};

  color: ${w.color.primaryWhite};
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
`;f.div`
  padding: 16px 0;
  width: 300px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};

  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;const xn=f.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,vn=f.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};

  color: ${w.color.primaryWhite};
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
`,gn=f.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,rt=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,at=f.p`
  color: ${w.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,ot=f.p`
  display: flex;
  align-items: center;
  color: ${w.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,yn=f.span`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,bn=()=>n.jsxs("div",{children:[n.jsx(xn,{children:"Daily goal"}),n.jsx(vn,{children:n.jsxs(gn,{children:[n.jsx(me,{name:"icon-bubble",width:"80px",height:"80px",fill:`${w.color.primaryLiteGreen}`}),n.jsxs(rt,{children:[n.jsx(at,{children:"Calories"}),n.jsx(ot,{children:"1700"})]}),n.jsx(me,{name:"icon-milk",width:"80px",height:"80px",fill:`${w.color.primaryViolet}`}),n.jsxs(rt,{children:[n.jsx(at,{children:"Water"}),n.jsxs(ot,{children:["1500",n.jsx(yn,{children:"ml"})]})]})]})})]}),wn=f.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,An=f.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};
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
`,Cn=f.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${w.color.primaryBlack};
  padding: 7px;
`,En=f.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:t})=>t}px);
  color: ${({$changedColor:t})=>t};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,On=f.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${w.color.primaryViolet};
    animation: ${w.transition.main} 4s linear infinite;

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
`,jn=f.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,Sn=f.p`
  color: ${w.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Rn=f.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,Mn=f.p`
  display: flex;
  align-items: center;
  color: ${w.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`,it=f.span`
  color: ${w.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,Tn=f.p`
  color: ${w.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,In=f.span`
  color: ${w.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,kn=f.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: ${w.color.primaryGreenLite};

  color: ${w.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,Pn=f.button`
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
`;vt.register(Qt,Gt,qt,Ht,gt,yt);const Dn={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ln=["Intake"],Wn=({waterIntake:t})=>{const e={labels:Ln,datasets:[{label:"Water",data:[t],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return n.jsx(n.Fragment,{children:n.jsx(Kt,{data:e,options:Dn})})},Fn=t=>t.waterIntake.value,Bn=t=>t.waterIntake.isLoading,Un=t=>t.waterIntake.error,_n=f.div`
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
`,Nn=f.div`
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
`,Yn=f.h2`
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
`,zn=f.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
`,Qn=f.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 
  }
`,Gn=f.input`
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

    
`,qn=f.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: #e3ffa8;
  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,Hn=f.button`
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
`;f.div`
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
`;const Kn=({onClose:t})=>{const e=he(Bn),r=he(Un),d=Ye(),h=E=>{E.preventDefault();const F={date:Be,value:Number(E.target.water.value)};d(Pt(F))};return kt.createPortal(n.jsx(_n,{onClick:t,children:n.jsxs(Nn,{onClick:E=>E.stopPropagation(),children:[n.jsx(Yn,{children:"Add water intake"}),n.jsxs(zn,{onSubmit:h,children:[n.jsx(Qn,{children:"How much water"}),n.jsx(Gn,{name:"water",type:"text",placeholder:"Enter milliliters",onChange:E=>E.target.value}),n.jsx(qn,{type:"submit",disabled:e,children:e?"Loading...":"Confirm"}),r&&n.jsx("p",{style:{color:"red"},children:r}),n.jsx(Hn,{type:"button",onClick:t,children:"Cancel"})]})]})}),document.getElementById("modal-root"))},Vn=()=>{const[t,e]=ve.useState(!1),r=he(Fn),d=Ye();let h=r,E=1e3;const F=E-h,a=h<=E?Math.round(h*100/E):100,l=a<=84?Math.ceil(a/100*176+10):88,s=a<=84?"rgba(182, 195, 255, 1)":"green";ve.useEffect(()=>{d(Dt({date:Be}))},[d,r]);const y=()=>{e(m=>!m)};ve.useEffect(()=>{const m=i=>{i.key==="Escape"&&t&&y()};return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[t]);const v=m=>{m.preventDefault(),d(Lt(Be))};return n.jsxs("div",{children:[n.jsx(wn,{children:"Water"}),n.jsxs(An,{children:[n.jsx(Cn,{children:n.jsxs(On,{children:[n.jsx(En,{$changedColor:s,$offset:l,children:`${a}%`}),n.jsx(Wn,{waterIntake:a})]})}),n.jsxs(jn,{children:[n.jsx(Sn,{children:"Water consumption"}),n.jsxs(Rn,{children:[n.jsxs(Mn,{children:[h,n.jsx(it,{children:"ml"})]}),n.jsxs(Tn,{children:["left:",n.jsx(In,{children:F>0?F:0}),n.jsx(it,{children:"ml"})]})]}),n.jsxs(kn,{onClick:y,children:[n.jsx(me,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),n.jsx(Pn,{onClick:v,children:n.jsx(me,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${w.color.primaryLiteGreen}`})})]})]}),t&&n.jsx(Kn,{onClose:y})]})};vt.register(Vt,gt,yt);const Zn={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Jn={id:"bcgCircle",beforeDatasetsDraw(t){const{ctx:e}=t;e.save();const r=t.getDatasetMeta(0).data[0].x,d=t.getDatasetMeta(0).data[0].y,h=t.getDatasetMeta(0).data[0].innerRadius,E=t.getDatasetMeta(0).data[0].outerRadius,F=E-h,a=Math.PI/180;e.beginPath(),e.lineWidth=F,e.strokeStyle="rgba(41, 41, 40, 1)",e.arc(r,d,E-F/2,0,a*360,!1),e.stroke()}},wt=({dailyCalories:t,inputValue:e,chartBcg:r})=>{e>t&&(e=t,r="red");const d=t-e,h={datasets:[{label:[],data:[e,d],backgroundColor:[r,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return n.jsx(n.Fragment,{children:n.jsx(Zt,{options:Zn,data:h,plugins:[Jn]})})},Xn=f.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,$n=f.div`
  position: relative;
  width: 48px;
  height: 48px;
`,er=f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,tr=f.div`
  display: flex;
  flex-direction: column;
`,nr=f.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,rr=f.div`
  display: flex;
  column-gap: 12px;
`,st=f.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,ar=f.p`
  width: 78px;
`,Ge=t=>{const{title:e,chartBcg:r,elementGoal:d,elementValue:h}=t;let E=(d-h).toFixed(1);E<0&&(E=0);let F=Math.round(h*100/d);return(F===1/0||isNaN(F))&&(F=0),F>100&&(F=100),n.jsx(n.Fragment,{children:n.jsxs(Xn,{children:[n.jsxs($n,{children:[n.jsx(wt,{dailyCalories:d,inputValue:h,chartBcg:r}),n.jsx(er,{children:n.jsx("p",{children:`${F}%`})})]}),n.jsxs(tr,{children:[n.jsx(nr,{children:e}),n.jsxs(rr,{children:[n.jsxs(ar,{children:["Goal: ",n.jsx(st,{children:d})]}),n.jsxs("p",{children:["left: ",n.jsx(st,{children:E})]})]})]})]})})},or=f.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ir=f.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};
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
`,sr=f.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: ${w.color.primaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,lr=f.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,cr=f.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,dr="rgba(255, 196, 247, 1)",ur="rgba(255, 243, 183, 1)",pr="rgba(182, 182, 182, 1)",fr=()=>{let t=1700,e=1360,r="#45FFBC",d=119.5,h=136,E=44.8,F=170,a=135.5,l=56;return n.jsxs("div",{children:[n.jsx(or,{children:"Food"}),n.jsxs(ir,{children:[n.jsxs(sr,{children:[n.jsx(wt,{dailyCalories:t,inputValue:e,chartBcg:r}),n.jsxs(lr,{children:[n.jsx("p",{children:e}),n.jsx("p",{children:"calories"})]})]}),n.jsxs(cr,{children:[n.jsx(Ge,{title:"Carbonohidrates",chartBcg:dr,elementGoal:F,elementValue:h}),n.jsx(Ge,{title:"Protein",chartBcg:ur,elementGoal:a,elementValue:d}),n.jsx(Ge,{title:"Fat",chartBcg:pr,elementGoal:l,elementValue:E})]})]})]})};var He={exports:{}},ye={},Ke={exports:{}},de={},Ve={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",d="contents",h=/input|select|textarea|button|object|iframe/;function E(v,m){return m.getPropertyValue("overflow")!=="visible"||v.scrollWidth<=0&&v.scrollHeight<=0}function F(v){var m=v.offsetWidth<=0&&v.offsetHeight<=0;if(m&&!v.innerHTML)return!0;try{var i=window.getComputedStyle(v),u=i.getPropertyValue("display");return m?u!==d&&E(v,i):u===r}catch{return console.warn("Failed to inspect element style"),!1}}function a(v){for(var m=v,i=v.getRootNode&&v.getRootNode();m&&m!==document.body;){if(i&&m===i&&(m=i.host.parentNode),F(m))return!1;m=m.parentNode}return!0}function l(v,m){var i=v.nodeName.toLowerCase(),u=h.test(i)&&!v.disabled||i==="a"&&v.href||m;return u&&a(v)}function s(v){var m=v.getAttribute("tabindex");m===null&&(m=void 0);var i=isNaN(m);return(i||m>=0)&&l(v,!i)}function y(v){var m=[].slice.call(v.querySelectorAll("*"),0).reduce(function(i,u){return i.concat(u.shadowRoot?y(u.shadowRoot):[u])},[]);return m.filter(s)}t.exports=e.default})(Ve,Ve.exports);var At=Ve.exports;Object.defineProperty(de,"__esModule",{value:!0});de.resetState=vr;de.log=gr;de.handleBlur=Te;de.handleFocus=Ie;de.markForFocusLater=yr;de.returnFocus=br;de.popWithoutFocus=wr;de.setupScopedFocus=Ar;de.teardownScopedFocus=Cr;var hr=At,mr=xr(hr);function xr(t){return t&&t.__esModule?t:{default:t}}var we=[],be=null,Ze=!1;function vr(){we=[]}function gr(){}function Te(){Ze=!0}function Ie(){if(Ze){if(Ze=!1,!be)return;setTimeout(function(){if(!be.contains(document.activeElement)){var t=(0,mr.default)(be)[0]||be;t.focus()}},0)}}function yr(){we.push(document.activeElement)}function br(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{we.length!==0&&(e=we.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function wr(){we.length>0&&we.pop()}function Ar(t){be=t,window.addEventListener?(window.addEventListener("blur",Te,!1),document.addEventListener("focus",Ie,!0)):(window.attachEvent("onBlur",Te),document.attachEvent("onFocus",Ie))}function Cr(){be=null,window.addEventListener?(window.removeEventListener("blur",Te),document.removeEventListener("focus",Ie)):(window.detachEvent("onBlur",Te),document.detachEvent("onFocus",Ie))}var Je={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=F;var r=At,d=h(r);function h(a){return a&&a.__esModule?a:{default:a}}function E(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?E(a.activeElement.shadowRoot):a.activeElement}function F(a,l){var s=(0,d.default)(a);if(!s.length){l.preventDefault();return}var y=void 0,v=l.shiftKey,m=s[0],i=s[s.length-1],u=E();if(a===u){if(!v)return;y=i}if(i===u&&!v&&(y=m),m===u&&v&&(y=i),y){l.preventDefault(),y.focus();return}var p=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),j=p!=null&&p[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(j){var g=s.indexOf(u);if(g>-1&&(g+=v?-1:1),y=s[g],typeof y>"u"){l.preventDefault(),y=v?i:m,y.focus();return}l.preventDefault(),y.focus()}}t.exports=e.default})(Je,Je.exports);var Er=Je.exports,ue={},Or=function(){},jr=Or,ce={},Ct={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=r:window.ExecutionEnvironment=r})()})(Ct);var Sr=Ct.exports;Object.defineProperty(ce,"__esModule",{value:!0});ce.canUseDOM=ce.SafeNodeList=ce.SafeHTMLCollection=void 0;var Rr=Sr,Mr=Tr(Rr);function Tr(t){return t&&t.__esModule?t:{default:t}}var ze=Mr.default,Ir=ze.canUseDOM?window.HTMLElement:{};ce.SafeHTMLCollection=ze.canUseDOM?window.HTMLCollection:{};ce.SafeNodeList=ze.canUseDOM?window.NodeList:{};ce.canUseDOM=ze.canUseDOM;ce.default=Ir;Object.defineProperty(ue,"__esModule",{value:!0});ue.resetState=Wr;ue.log=Fr;ue.assertNodeList=Et;ue.setElement=Br;ue.validateElement=$e;ue.hide=Ur;ue.show=_r;ue.documentNotReadyOrSSRTesting=Nr;var kr=jr,Pr=Lr(kr),Dr=ce;function Lr(t){return t&&t.__esModule?t:{default:t}}var re=null;function Wr(){re&&(re.removeAttribute?re.removeAttribute("aria-hidden"):re.length!=null?re.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(re).forEach(function(t){return t.removeAttribute("aria-hidden")})),re=null}function Fr(){}function Et(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Br(t){var e=t;if(typeof e=="string"&&Dr.canUseDOM){var r=document.querySelectorAll(e);Et(r,e),e=r}return re=e||re,re}function $e(t){var e=t||re;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Pr.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ur(t){var e=!0,r=!1,d=void 0;try{for(var h=$e(t)[Symbol.iterator](),E;!(e=(E=h.next()).done);e=!0){var F=E.value;F.setAttribute("aria-hidden","true")}}catch(a){r=!0,d=a}finally{try{!e&&h.return&&h.return()}finally{if(r)throw d}}}function _r(t){var e=!0,r=!1,d=void 0;try{for(var h=$e(t)[Symbol.iterator](),E;!(e=(E=h.next()).done);e=!0){var F=E.value;F.removeAttribute("aria-hidden")}}catch(a){r=!0,d=a}finally{try{!e&&h.return&&h.return()}finally{if(r)throw d}}}function Nr(){re=null}var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.resetState=Yr;Ae.log=zr;var Re={},Me={};function lt(t,e){t.classList.remove(e)}function Yr(){var t=document.getElementsByTagName("html")[0];for(var e in Re)lt(t,Re[e]);var r=document.body;for(var d in Me)lt(r,Me[d]);Re={},Me={}}function zr(){}var Qr=function(e,r){return e[r]||(e[r]=0),e[r]+=1,r},Gr=function(e,r){return e[r]&&(e[r]-=1),r},qr=function(e,r,d){d.forEach(function(h){Qr(r,h),e.add(h)})},Hr=function(e,r,d){d.forEach(function(h){Gr(r,h),r[h]===0&&e.remove(h)})};Ae.add=function(e,r){return qr(e.classList,e.nodeName.toLowerCase()=="html"?Re:Me,r.split(" "))};Ae.remove=function(e,r){return Hr(e.classList,e.nodeName.toLowerCase()=="html"?Re:Me,r.split(" "))};var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.log=Vr;Ce.resetState=Zr;function Kr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ot=function t(){var e=this;Kr(this,t),this.register=function(r){e.openInstances.indexOf(r)===-1&&(e.openInstances.push(r),e.emit("register"))},this.deregister=function(r){var d=e.openInstances.indexOf(r);d!==-1&&(e.openInstances.splice(d,1),e.emit("deregister"))},this.subscribe=function(r){e.subscribers.push(r)},this.emit=function(r){e.subscribers.forEach(function(d){return d(r,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ue=new Ot;function Vr(){console.log("portalOpenInstances ----------"),console.log(Ue.openInstances.length),Ue.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Zr(){Ue=new Ot}Ce.default=Ue;var et={};Object.defineProperty(et,"__esModule",{value:!0});et.resetState=ea;et.log=ta;var Jr=Ce,Xr=$r(Jr);function $r(t){return t&&t.__esModule?t:{default:t}}var te=void 0,le=void 0,ge=[];function ea(){for(var t=[te,le],e=0;e<t.length;e++){var r=t[e];r&&r.parentNode&&r.parentNode.removeChild(r)}te=le=null,ge=[]}function ta(){console.log("bodyTrap ----------"),console.log(ge.length);for(var t=[te,le],e=0;e<t.length;e++){var r=t[e],d=r||{};console.log(d.nodeName,d.className,d.id)}console.log("edn bodyTrap ----------")}function ct(){ge.length!==0&&ge[ge.length-1].focusContent()}function na(t,e){!te&&!le&&(te=document.createElement("div"),te.setAttribute("data-react-modal-body-trap",""),te.style.position="absolute",te.style.opacity="0",te.setAttribute("tabindex","0"),te.addEventListener("focus",ct),le=te.cloneNode(),le.addEventListener("focus",ct)),ge=e,ge.length>0?(document.body.firstChild!==te&&document.body.insertBefore(te,document.body.firstChild),document.body.lastChild!==le&&document.body.appendChild(le)):(te.parentElement&&te.parentElement.removeChild(te),le.parentElement&&le.parentElement.removeChild(le))}Xr.default.subscribe(na);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(S){for(var M=1;M<arguments.length;M++){var K=arguments[M];for(var o in K)Object.prototype.hasOwnProperty.call(K,o)&&(S[o]=K[o])}return S},d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},h=function(){function S(M,K){for(var o=0;o<K.length;o++){var I=K[o];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(M,I.key,I)}}return function(M,K,o){return K&&S(M.prototype,K),o&&S(M,o),M}}(),E=ve,F=bt,a=R(F),l=de,s=c(l),y=Er,v=R(y),m=ue,i=c(m),u=Ae,p=c(u),j=ce,g=R(j),b=Ce,T=R(b);function c(S){if(S&&S.__esModule)return S;var M={};if(S!=null)for(var K in S)Object.prototype.hasOwnProperty.call(S,K)&&(M[K]=S[K]);return M.default=S,M}function R(S){return S&&S.__esModule?S:{default:S}}function Y(S,M){if(!(S instanceof M))throw new TypeError("Cannot call a class as a function")}function P(S,M){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:S}function Z(S,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);S.prototype=Object.create(M&&M.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(S,M):S.__proto__=M)}var C={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},B=function(M){return M.code==="Tab"||M.keyCode===9},Q=function(M){return M.code==="Escape"||M.keyCode===27},L=0,k=function(S){Z(M,S);function M(K){Y(this,M);var o=P(this,(M.__proto__||Object.getPrototypeOf(M)).call(this,K));return o.setOverlayRef=function(I){o.overlay=I,o.props.overlayRef&&o.props.overlayRef(I)},o.setContentRef=function(I){o.content=I,o.props.contentRef&&o.props.contentRef(I)},o.afterClose=function(){var I=o.props,X=I.appElement,$=I.ariaHideApp,J=I.htmlOpenClassName,ae=I.bodyOpenClassName,oe=I.parentSelector,ie=oe&&oe().ownerDocument||document;ae&&p.remove(ie.body,ae),J&&p.remove(ie.getElementsByTagName("html")[0],J),$&&L>0&&(L-=1,L===0&&i.show(X)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(s.returnFocus(o.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),T.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(s.setupScopedFocus(o.node),s.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var I=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:I},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(I){B(I)&&(0,v.default)(o.content,I),o.props.shouldCloseOnEsc&&Q(I)&&(I.stopPropagation(),o.requestClose(I))},o.handleOverlayOnClick=function(I){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(I):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(I){!o.props.shouldCloseOnOverlayClick&&I.target==o.overlay&&I.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(I){return o.ownerHandlesClose()&&o.props.onRequestClose(I)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(I,X){var $=(typeof X>"u"?"undefined":d(X))==="object"?X:{base:C[I],afterOpen:C[I]+"--after-open",beforeClose:C[I]+"--before-close"},J=$.base;return o.state.afterOpen&&(J=J+" "+$.afterOpen),o.state.beforeClose&&(J=J+" "+$.beforeClose),typeof X=="string"&&X?J+" "+X:J},o.attributesFromObject=function(I,X){return Object.keys(X).reduce(function($,J){return $[I+"-"+J]=X[J],$},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return h(M,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,I){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!I.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,I=o.appElement,X=o.ariaHideApp,$=o.htmlOpenClassName,J=o.bodyOpenClassName,ae=o.parentSelector,oe=ae&&ae().ownerDocument||document;J&&p.add(oe.body,J),$&&p.add(oe.getElementsByTagName("html")[0],$),X&&(L+=1,i.hide(I)),T.default.register(this)}},{key:"render",value:function(){var o=this.props,I=o.id,X=o.className,$=o.overlayClassName,J=o.defaultStyles,ae=o.children,oe=X?{}:J.content,ie=$?{}:J.overlay;if(this.shouldBeClosed())return null;var Ee={ref:this.setOverlayRef,className:this.buildClassName("overlay",$),style:r({},ie,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ne=r({id:I,ref:this.setContentRef,style:r({},oe,this.props.style.content),className:this.buildClassName("content",X),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),pe=this.props.contentElement(ne,ae);return this.props.overlayElement(Ee,pe)}}]),M}(E.Component);k.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},k.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(g.default),a.default.instanceOf(j.SafeHTMLCollection),a.default.instanceOf(j.SafeNodeList),a.default.arrayOf(a.default.instanceOf(g.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=k,t.exports=e.default})(Ke,Ke.exports);var ra=Ke.exports;function jt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function St(t){function e(r){var d=this.constructor.getDerivedStateFromProps(t,r);return d??null}this.setState(e.bind(this))}function Rt(t,e){try{var r=this.props,d=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,d)}finally{this.props=r,this.state=d}}jt.__suppressDeprecationWarning=!0;St.__suppressDeprecationWarning=!0;Rt.__suppressDeprecationWarning=!0;function aa(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var r=null,d=null,h=null;if(typeof e.componentWillMount=="function"?r="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?d="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(d="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?h="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(h="UNSAFE_componentWillUpdate"),r!==null||d!==null||h!==null){var E=t.displayName||t.name,F=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+E+" uses "+F+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(d!==null?`
  `+d:"")+(h!==null?`
  `+h:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=jt,e.componentWillReceiveProps=St),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Rt;var a=e.componentDidUpdate;e.componentDidUpdate=function(s,y,v){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:v;a.call(this,s,y,m)}}return t}const oa=Object.freeze(Object.defineProperty({__proto__:null,polyfill:aa},Symbol.toStringTag,{value:"Module"})),ia=Wt(oa);Object.defineProperty(ye,"__esModule",{value:!0});ye.bodyOpenClassName=ye.portalClassName=void 0;var dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(t[d]=r[d])}return t},sa=function(){function t(e,r){for(var d=0;d<r.length;d++){var h=r[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(e,h.key,h)}}return function(e,r,d){return r&&t(e.prototype,r),d&&t(e,d),e}}(),Mt=ve,_e=ke(Mt),la=Ft,Ne=ke(la),ca=bt,D=ke(ca),da=ra,ut=ke(da),ua=ue,pa=ha(ua),fe=ce,pt=ke(fe),fa=ia;function ha(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function ke(t){return t&&t.__esModule?t:{default:t}}function ma(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ft(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function xa(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var va=ye.portalClassName="ReactModalPortal",ga=ye.bodyOpenClassName="ReactModal__Body--open",xe=fe.canUseDOM&&Ne.default.createPortal!==void 0,ht=function(e){return document.createElement(e)},mt=function(){return xe?Ne.default.createPortal:Ne.default.unstable_renderSubtreeIntoContainer};function We(t){return t()}var Pe=function(t){xa(e,t);function e(){var r,d,h,E;ma(this,e);for(var F=arguments.length,a=Array(F),l=0;l<F;l++)a[l]=arguments[l];return E=(d=(h=ft(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(a))),h),h.removePortal=function(){!xe&&Ne.default.unmountComponentAtNode(h.node);var s=We(h.props.parentSelector);s&&s.contains(h.node)?s.removeChild(h.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},h.portalRef=function(s){h.portal=s},h.renderPortal=function(s){var y=mt(),v=y(h,_e.default.createElement(ut.default,dt({defaultStyles:e.defaultStyles},s)),h.node);h.portalRef(v)},d),ft(h,E)}return sa(e,[{key:"componentDidMount",value:function(){if(fe.canUseDOM){xe||(this.node=ht("div")),this.node.className=this.props.portalClassName;var d=We(this.props.parentSelector);d.appendChild(this.node),!xe&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(d){var h=We(d.parentSelector),E=We(this.props.parentSelector);return{prevParent:h,nextParent:E}}},{key:"componentDidUpdate",value:function(d,h,E){if(fe.canUseDOM){var F=this.props,a=F.isOpen,l=F.portalClassName;d.portalClassName!==l&&(this.node.className=l);var s=E.prevParent,y=E.nextParent;y!==s&&(s.removeChild(this.node),y.appendChild(this.node)),!(!d.isOpen&&!a)&&!xe&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!fe.canUseDOM||!this.node||!this.portal)){var d=this.portal.state,h=Date.now(),E=d.isOpen&&this.props.closeTimeoutMS&&(d.closesAt||h+this.props.closeTimeoutMS);E?(d.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,E-h)):this.removePortal()}}},{key:"render",value:function(){if(!fe.canUseDOM||!xe)return null;!this.node&&xe&&(this.node=ht("div"));var d=mt();return d(_e.default.createElement(ut.default,dt({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(d){pa.setElement(d)}}]),e}(Mt.Component);Pe.propTypes={isOpen:D.default.bool.isRequired,style:D.default.shape({content:D.default.object,overlay:D.default.object}),portalClassName:D.default.string,bodyOpenClassName:D.default.string,htmlOpenClassName:D.default.string,className:D.default.oneOfType([D.default.string,D.default.shape({base:D.default.string.isRequired,afterOpen:D.default.string.isRequired,beforeClose:D.default.string.isRequired})]),overlayClassName:D.default.oneOfType([D.default.string,D.default.shape({base:D.default.string.isRequired,afterOpen:D.default.string.isRequired,beforeClose:D.default.string.isRequired})]),appElement:D.default.oneOfType([D.default.instanceOf(pt.default),D.default.instanceOf(fe.SafeHTMLCollection),D.default.instanceOf(fe.SafeNodeList),D.default.arrayOf(D.default.instanceOf(pt.default))]),onAfterOpen:D.default.func,onRequestClose:D.default.func,closeTimeoutMS:D.default.number,ariaHideApp:D.default.bool,shouldFocusAfterRender:D.default.bool,shouldCloseOnOverlayClick:D.default.bool,shouldReturnFocusAfterClose:D.default.bool,preventScroll:D.default.bool,parentSelector:D.default.func,aria:D.default.object,data:D.default.object,role:D.default.string,contentLabel:D.default.string,shouldCloseOnEsc:D.default.bool,overlayRef:D.default.func,contentRef:D.default.func,id:D.default.string,overlayElement:D.default.func,contentElement:D.default.func};Pe.defaultProps={isOpen:!1,portalClassName:va,bodyOpenClassName:ga,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,r){return _e.default.createElement("div",e,r)},contentElement:function(e,r){return _e.default.createElement("div",e,r)}};Pe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,fa.polyfill)(Pe);ye.default=Pe;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=ye,d=h(r);function h(E){return E&&E.__esModule?E:{default:E}}e.default=d.default,t.exports=e.default})(He,He.exports);var ya=He.exports;const Tt=Bt(ya);let ba=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");const wa=f.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);

  width: 300px;
  height: 546px;

  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${w.color.primaryBlack};
  border-radius: 12px;

  transition: ${w.transition.main};
  z-index: 10;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }
`,Aa=f.h2`
  font-size: 24px;
  font-weight: 500; //PoppinsMedium
  line-height: 30px;
  color: ${w.color.primaryWhite};
  margin-bottom: 24px;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    font-size: 30px;
    line-height: 36px;
  }
`,Ca=f.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`,Ea=f.img`
  width: 32px;
  height: 32px;
`,Oa=f.h3`
  font-size: 18px;
  font-weight: 400; //PoppinsRegular
  line-height: 26px;
  color: ${w.color.primaryWhite};

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`,ja=f(Jt)`
  width: 100%;
  height: 100%;
  flex-grow: 1; // форма має розтягуватися та займати доступний вільний простір
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Sa=f.div`
  max-height: 320px;
  margin-bottom: 16px;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    max-height: 216px;
  }
`,Ra=f.ul`
  overflow-y: auto;
  height: 210px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    height: calc(100% - 44px);
  }

  &::-webkit-scrollbar {
    background-color: ${w.color.primaryBlack2};
    border-radius: 12px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 5px;
  }
`,Ma=f.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 12px;
    
  & > div:nth-child(-n + 3) {
    flex-basis: 100%; 
    margin-bottom: 16px;
  }

  & > div:nth-last-child(-n + 3) {
    flex-basis: calc(43.48%);
  }

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    & > div:nth-child(-n + 3) {
      margin-bottom: 0; 
    }
    margin-bottom: 12px;
    display:grid;
    grid-gap: 12px;
    grid-template-columns: 38.15% 15.26% 13.12% 9.30% 11.94% 3.05%; // з урахуванням скрола 5px
    
    & > div:nth-child(1) {.
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > div:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
`,Oe=f.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,je=f(Xt)`
  width: 100%;
  padding: 8px 10px;
  border: 1.5px solid ${w.color.primaryGreenLite};
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${w.color.primaryWhite};
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${w.color.primaryGrey};
  }
  &:hover,
  &:focus {
    border-color: ${w.color.primaryViolet};
  }
`,Se=f($t)`
  padding: 0 5px;
  font-size: 8px;
  font-weight: 400
  line-height: 10px;
  color: ${w.color.primaryViolet};
`,Ta=f.button`
  max-width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;

  background-color: inherit;
  font-size: 14px;
  font-weight: 500; //PoppinsMedium;
  line-height: 20px;
  color: ${w.color.primaryGreenLite};
`,Ia=f.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`,ka=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`,Pa=f.button`
  padding: 8px 10px;
  width: 100%;
  background-color: ${w.color.primaryGreenLite};
  border: 1.5px solid ${w.color.primaryGreenLite};
  color: ${w.color.primaryBlack2};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500; // PoppinsMedium
  line-height: 20px;

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    width: 212px;
  }
`,Da=f.button`
  padding: 8px 10px;
  width: 100%;
  background-color: inherit;
  border: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${w.color.primaryGrey};

  &:hover {
    border: 1.5px solid ${w.color.primaryGreenLite};
  }

  @media screen and (min-width: ${w.breakpoint.tablet}) {
    width: 212px;
  }
`,xt=t=>t.foodIntake.data;Tt.setAppElement("#root");const La={content:{maxWidth:"fit-content",maxHeight:"fit-content",margin:"auto",overflow:"none",inset:0,padding:0,border:"none",background:"none"},overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:3e3}},Wa=nt({productList:en().of(nt().shape({name:tn().required("Name is required").matches(/^\p{L}+$/).trim("Name cannot include leading and trailing spaces").strict(!0),carbonohidretes:Le().required("Carbonohidretes is required").typeError("Must be a number").min(0,"Must be a positive number").max(1e3,"The maximum allowable value is 1000").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",t=>/^\d+(\.\d{1})?$/.test(t)),protein:Le().required("Protein is required").typeError("Must be a number").min(0,"Must be a positive number").max(1e3,"The maximum allowable value is 1000").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",t=>/^\d+(\.\d{1})?$/.test(t)),fat:Le().required("Fat is required").typeError("Must be a number").min(0,"Must be a positive number").test("maxDigitsAfterDecimal","Must have 1 digits after decimal",t=>/^\d+(\.\d{1})?$/.test(t)),calories:Le().required("Calories is required").typeError("Must be a number").min(0,"Must a be positive number").max(1e3,"The maximum allowable value is 1000").integer("Must be an integer")}))}),qe={name:"",carbonohidretes:"",protein:"",fat:"",calories:"",productId:""},Fa=({isModalOpen:t,onClose:e,category:r,categoryImage:d,item:h})=>{const E=Ye(),{breakfast:{products:F},lunch:{products:a},dinner:{products:l},snack:{products:s}}=he(xt),y=he(xt),v=r==="Lunch"?a:r==="Breakfast"?F:r==="Dinner"?l:r==="Snack"?s:[],m=async(i,{resetForm:u})=>{const p=i.mealsIntake.map(T=>({productId:ba(),...T})),j={date:Be,[r.toLowerCase()]:{products:p}},g={[r.toLowerCase()]:{products:i.mealsIntake}};console.log(g,"updateDataForBackend");const b={objectId:y._id,updateDataForBackend:g};h?E(Ut(b)):(E(_t(j)),u()),e()};return n.jsx(Tt,{isOpen:t,onRequestClose:e,style:La,children:n.jsxs(wa,{children:[n.jsx(Aa,{children:"Record your meal"}),n.jsxs(Ca,{children:[n.jsx(Ea,{src:d,alt:"categoryImage"}),n.jsx(Oa,{children:r})]}),n.jsx(nn,{initialValues:{mealsIntake:h&&v?v.map(i=>({name:i.name||"",carbonohidretes:i.carbonohidretes||"",protein:i.protein||"",fat:i.fat||"",calories:i.calories||"",productId:i.productId||""})):[qe]},onSubmit:m,validationSchema:Wa,validateOnBlur:!0,children:({errors:i,touched:u,values:p,setFieldValue:j})=>n.jsxs(ja,{autoComplete:"off",children:[n.jsx(rn,{name:"mealsIntake",children:({insert:g,remove:b})=>n.jsxs(Sa,{children:[n.jsx(Ra,{children:p.mealsIntake.map((T,c)=>n.jsxs(Ma,{children:[n.jsxs(Oe,{children:[n.jsx(je,{name:`mealsIntake.${c}.name`,id:`mealsIntake.${c}.name`,placeholder:"The name of the product or dish",type:"text",onKeyDown:R=>{/\d/.test(R.key)&&R.preventDefault()},onChange:R=>{const{name:Y,value:P}=R.target;j(Y,P)},value:p.mealsIntake[c].name,required:!0}),i[`mealsIntake.${c}.name`]&&u[`mealsIntake.${c}.name`]?n.jsx(Se,{name:`mealsIntake.${c}.name`,component:"div"}):null]}),n.jsxs(Oe,{children:[n.jsx(je,{name:`mealsIntake.${c}.carbonohidretes`,id:`mealsIntake.${c}.carbonohidretes`,placeholder:"Carbonoh.",type:"number",min:0,max:1e3,required:!0}),n.jsx(Se,{name:`mealsIntake.${c}.carbonohidretes`,component:"div"})]}),n.jsxs(Oe,{children:[n.jsx(je,{name:`mealsIntake.${c}.protein`,id:`mealsIntake.${c}.protein`,placeholder:"Protein",type:"number",min:0,max:1e3,required:!0}),i[`mealsIntake.${c}.protein`]&&u[`mealsIntake.${c}.protein`]?n.jsx(Se,{name:`mealsIntake.${c}.protein`,component:"div"}):null]}),n.jsxs(Oe,{children:[n.jsx(je,{name:`mealsIntake.${c}.fat`,id:`mealsIntake.${c}.fat`,placeholder:"Fat",type:"number",min:0,max:1e3,required:!0}),i[`mealsIntake.${c}.fat`]&&u[`mealsIntake.${c}.fat`]?n.jsx(Se,{name:`mealsIntake.${c}.fat`,component:"div"}):null]}),n.jsxs(Oe,{children:[n.jsx(je,{name:`mealsIntake.${c}.calories`,id:`mealsIntake.${c}.calories`,placeholder:"Calories",type:"number",min:0,max:1e3,required:!0}),i[`mealsIntake.${c}.calories`]&&u[`mealsIntake.${c}.calories`]?n.jsx(Se,{name:`mealsIntake.${c}.calories`,component:"div"}):null]}),n.jsx(Ia,{type:"button",onClick:()=>b(c),children:n.jsx(me,{name:"icon-trash",width:20,height:20})})]},c))}),n.jsxs(Ta,{type:"button",onClick:()=>{if(p&&p.mealsIntake&&p.mealsIntake.length>0){const T=p.mealsIntake[p.mealsIntake.length-1];console.log("Масив спожита їжа:",p.mealsIntake),Object.values(T||{}).some(R=>typeof R=="string"&&!R.trim())||g(p.mealsIntake.length,qe)}else g(0,qe)},children:[n.jsx(me,{name:"icon-add","icon-add-more":!0,width:16,height:16}),"Add more"]})]})}),n.jsxs(ka,{children:[n.jsx(Pa,{type:"submit",children:"Confirm"}),n.jsx(Da,{onClick:e,children:"Cancel"})]})]})})]})})},Ba=f.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Ua=f.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,_a=f.div`
  width: 36px;
  height: 36px;
`,Na=f.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Ya=f.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: ${w.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,za=f.p`
  width: 164px;
`,Qa=f.p`
  width: 92px;
`;f.span`
  color: ${w.color.primaryGrey};

  font-weight: 500;
`;f.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${w.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;const Fe=({title:t,image:e,image2x:r,categoryImage:d,category:h})=>n.jsxs(Ba,{children:[n.jsxs(Ua,{children:[n.jsx(_a,{children:n.jsx("img",{srcSet:`${e} 1x, ${r} 2x`,src:e,alt:"Plate"})}),n.jsx(Na,{children:t})]}),n.jsxs(Ya,{children:[n.jsx(za,{children:"Carbonohidrates: 0"}),n.jsx(Qa,{children:"Protein: 0"}),n.jsx("p",{children:"Fat: 100"})]}),n.jsx(Fa,{category:h,categoryImage:d})]}),Ga=f.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
  }
`,qa=f.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,Ha=f.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ka=f(Xe)`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Va=f.div`
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
`,Za="data:image/png;base64,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",Ja=""+new URL("breakfast-2x-b3d5a4e0.png",import.meta.url).href,Xa="data:image/png;base64,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",$a=""+new URL("dinner-2x-9cd80455.png",import.meta.url).href,eo="data:image/png;base64,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",to=""+new URL("lunch-2x-245fcbed.png",import.meta.url).href,no="data:image/png;base64,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",ro=""+new URL("snack-2x-95f725c6.png",import.meta.url).href,ao=()=>n.jsxs(Ga,{children:[n.jsxs(qa,{children:[n.jsx(Ha,{children:"Diary"}),n.jsx(Ka,{to:"/diary",children:"See more"})]}),n.jsxs(Va,{children:[n.jsx(Fe,{title:"Breakfast",image:Za,image2x:Ja}),n.jsx(Fe,{title:"Lunch",image:eo,image2x:to}),n.jsx(Fe,{title:"Dinner",image:Xa,image2x:$a}),n.jsx(Fe,{title:"Snack",image:no,image2x:ro})]})]});var It={exports:{}};(function(t,e){(function(d,h){t.exports=h(ve)})(Nt,r=>(()=>{var d={"./node_modules/css-mediaquery/index.js":(a,l)=>{l.match=u,l.parse=p;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,v=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function u(T,c){return p(T).some(function(R){var Y=R.inverse,P=R.type==="all"||c.type===R.type;if(P&&Y||!(P||Y))return!1;var Z=R.expressions.every(function(C){var B=C.feature,Q=C.modifier,L=C.value,k=c[B];if(!k)return!1;switch(B){case"orientation":case"scan":return k.toLowerCase()===L.toLowerCase();case"width":case"height":case"device-width":case"device-height":L=b(L),k=b(k);break;case"resolution":L=g(L),k=g(k);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":L=j(L),k=j(k);break;case"grid":case"color":case"color-index":case"monochrome":L=parseInt(L,10)||1,k=parseInt(k,10)||0;break}switch(Q){case"min":return k>=L;case"max":return k<=L;default:return k===L}});return Z&&!Y||!Z&&Y})}function p(T){return T.split(",").map(function(c){c=c.trim();var R=c.match(s),Y=R[1],P=R[2],Z=R[3]||"",C={};return C.inverse=!!Y&&Y.toLowerCase()==="not",C.type=P?P.toLowerCase():"all",Z=Z.match(/\([^\)]+\)/g)||[],C.expressions=Z.map(function(B){var Q=B.match(y),L=Q[1].toLowerCase().match(v);return{modifier:L[1],feature:L[2],value:Q[2]}}),C})}function j(T){var c=Number(T),R;return c||(R=T.match(/^(\d+)\s*\/\s*(\d+)$/),c=R[1]/R[2]),c}function g(T){var c=parseFloat(T),R=String(T).match(i)[1];switch(R){case"dpcm":return c/2.54;case"dppx":return c*96;default:return c}}function b(T){var c=parseFloat(T),R=String(T).match(m)[1];switch(R){case"em":return c*16;case"rem":return c*16;case"cm":return c*96/2.54;case"mm":return c*96/2.54/10;case"in":return c*96;case"pt":return c*72;case"pc":return c*72/12;default:return c}}},"./node_modules/hyphenate-style-name/index.js":(a,l,s)=>{s.r(l),s.d(l,{default:()=>p});var y=/[A-Z]/g,v=/^ms-/,m={};function i(j){return"-"+j.toLowerCase()}function u(j){if(m.hasOwnProperty(j))return m[j];var g=j.replace(y,i);return m[j]=v.test(g)?"-"+g:g}const p=u},"./node_modules/matchmediaquery/index.js":(a,l,s)=>{var y=s("./node_modules/css-mediaquery/index.js").match,v=typeof window<"u"?window.matchMedia:null;function m(u,p,j){var g=this;if(v&&!j){var b=v.call(window,u);this.matches=b.matches,this.media=b.media,b.addListener(R)}else this.matches=y(u,p),this.media=u;this.addListener=T,this.removeListener=c,this.dispose=Y;function T(P){b&&b.addListener(P)}function c(P){b&&b.removeListener(P)}function R(P){g.matches=P.matches,g.media=P.media}function Y(){b&&b.removeListener(R)}}function i(u,p,j){return new m(u,p,j)}a.exports=i},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function v(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function m(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var u={},p=0;p<10;p++)u["_"+String.fromCharCode(p)]=p;var j=Object.getOwnPropertyNames(u).map(function(b){return u[b]});if(j.join("")!=="0123456789")return!1;var g={};return"abcdefghijklmnopqrst".split("").forEach(function(b){g[b]=b}),Object.keys(Object.assign({},g)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=m()?Object.assign:function(i,u){for(var p,j=v(i),g,b=1;b<arguments.length;b++){p=Object(arguments[b]);for(var T in p)s.call(p,T)&&(j[T]=p[T]);if(l){g=l(p);for(var c=0;c<g.length;c++)y.call(p,g[c])&&(j[g[c]]=p[g[c]])}}return j}},"./node_modules/prop-types/checkPropTypes.js":(a,l,s)=>{var y=function(){};{var v=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},i=s("./node_modules/prop-types/lib/has.js");y=function(p){var j="Warning: "+p;typeof console<"u"&&console.error(j);try{throw new Error(j)}catch{}}}function u(p,j,g,b,T){for(var c in p)if(i(p,c)){var R;try{if(typeof p[c]!="function"){var Y=Error((b||"React class")+": "+g+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Y.name="Invariant Violation",Y}R=p[c](j,c,b,g,null,v)}catch(Z){R=Z}if(R&&!(R instanceof Error)&&y((b||"React class")+": type specification of "+g+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof R+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),R instanceof Error&&!(R.message in m)){m[R.message]=!0;var P=T?T():"";y("Failed "+g+" type: "+R.message+(P??""))}}}u.resetWarningCache=function(){m={}},a.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,l,s)=>{var y=s("./node_modules/react-is/index.js"),v=s("./node_modules/object-assign/index.js"),m=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=s("./node_modules/prop-types/lib/has.js"),u=s("./node_modules/prop-types/checkPropTypes.js"),p=function(){};p=function(g){var b="Warning: "+g;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}};function j(){return null}a.exports=function(g,b){var T=typeof Symbol=="function"&&Symbol.iterator,c="@@iterator";function R(x){var O=x&&(T&&x[T]||x[c]);if(typeof O=="function")return O}var Y="<<anonymous>>",P={array:Q("array"),bigint:Q("bigint"),bool:Q("boolean"),func:Q("function"),number:Q("number"),object:Q("object"),string:Q("string"),symbol:Q("symbol"),any:L(),arrayOf:k,element:S(),elementType:M(),instanceOf:K,node:$(),objectOf:I,oneOf:o,oneOfType:X,shape:ae,exact:oe};function Z(x,O){return x===O?x!==0||1/x===1/O:x!==x&&O!==O}function C(x,O){this.message=x,this.data=O&&typeof O=="object"?O:{},this.stack=""}C.prototype=Error.prototype;function B(x){var O={},z=0;function _(G,U,N,q,V,H,A){if(q=q||Y,H=H||N,A!==m){if(b){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}else if(typeof console<"u"){var se=q+":"+N;!O[se]&&z<3&&(p("You are manually calling a React.PropTypes validation function for the `"+H+"` prop on `"+q+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),O[se]=!0,z++)}}return U[N]==null?G?U[N]===null?new C("The "+V+" `"+H+"` is marked as required "+("in `"+q+"`, but its value is `null`.")):new C("The "+V+" `"+H+"` is marked as required in "+("`"+q+"`, but its value is `undefined`.")):null:x(U,N,q,V,H)}var W=_.bind(null,!1);return W.isRequired=_.bind(null,!0),W}function Q(x){function O(z,_,W,G,U,N){var q=z[_],V=ne(q);if(V!==x){var H=pe(q);return new C("Invalid "+G+" `"+U+"` of type "+("`"+H+"` supplied to `"+W+"`, expected ")+("`"+x+"`."),{expectedType:x})}return null}return B(O)}function L(){return B(j)}function k(x){function O(z,_,W,G,U){if(typeof x!="function")return new C("Property `"+U+"` of component `"+W+"` has invalid PropType notation inside arrayOf.");var N=z[_];if(!Array.isArray(N)){var q=ne(N);return new C("Invalid "+G+" `"+U+"` of type "+("`"+q+"` supplied to `"+W+"`, expected an array."))}for(var V=0;V<N.length;V++){var H=x(N,V,W,G,U+"["+V+"]",m);if(H instanceof Error)return H}return null}return B(O)}function S(){function x(O,z,_,W,G){var U=O[z];if(!g(U)){var N=ne(U);return new C("Invalid "+W+" `"+G+"` of type "+("`"+N+"` supplied to `"+_+"`, expected a single ReactElement."))}return null}return B(x)}function M(){function x(O,z,_,W,G){var U=O[z];if(!y.isValidElementType(U)){var N=ne(U);return new C("Invalid "+W+" `"+G+"` of type "+("`"+N+"` supplied to `"+_+"`, expected a single ReactElement type."))}return null}return B(x)}function K(x){function O(z,_,W,G,U){if(!(z[_]instanceof x)){var N=x.name||Y,q=De(z[_]);return new C("Invalid "+G+" `"+U+"` of type "+("`"+q+"` supplied to `"+W+"`, expected ")+("instance of `"+N+"`."))}return null}return B(O)}function o(x){if(!Array.isArray(x))return arguments.length>1?p("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):p("Invalid argument supplied to oneOf, expected an array."),j;function O(z,_,W,G,U){for(var N=z[_],q=0;q<x.length;q++)if(Z(N,x[q]))return null;var V=JSON.stringify(x,function(A,ee){var se=pe(ee);return se==="symbol"?String(ee):ee});return new C("Invalid "+G+" `"+U+"` of value `"+String(N)+"` "+("supplied to `"+W+"`, expected one of "+V+"."))}return B(O)}function I(x){function O(z,_,W,G,U){if(typeof x!="function")return new C("Property `"+U+"` of component `"+W+"` has invalid PropType notation inside objectOf.");var N=z[_],q=ne(N);if(q!=="object")return new C("Invalid "+G+" `"+U+"` of type "+("`"+q+"` supplied to `"+W+"`, expected an object."));for(var V in N)if(i(N,V)){var H=x(N,V,W,G,U+"."+V,m);if(H instanceof Error)return H}return null}return B(O)}function X(x){if(!Array.isArray(x))return p("Invalid argument supplied to oneOfType, expected an instance of array."),j;for(var O=0;O<x.length;O++){var z=x[O];if(typeof z!="function")return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Qe(z)+" at index "+O+"."),j}function _(W,G,U,N,q){for(var V=[],H=0;H<x.length;H++){var A=x[H],ee=A(W,G,U,N,q,m);if(ee==null)return null;ee.data&&i(ee.data,"expectedType")&&V.push(ee.data.expectedType)}var se=V.length>0?", expected one of type ["+V.join(", ")+"]":"";return new C("Invalid "+N+" `"+q+"` supplied to "+("`"+U+"`"+se+"."))}return B(_)}function $(){function x(O,z,_,W,G){return ie(O[z])?null:new C("Invalid "+W+" `"+G+"` supplied to "+("`"+_+"`, expected a ReactNode."))}return B(x)}function J(x,O,z,_,W){return new C((x||"React class")+": "+O+" type `"+z+"."+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+W+"`.")}function ae(x){function O(z,_,W,G,U){var N=z[_],q=ne(N);if(q!=="object")return new C("Invalid "+G+" `"+U+"` of type `"+q+"` "+("supplied to `"+W+"`, expected `object`."));for(var V in x){var H=x[V];if(typeof H!="function")return J(W,G,U,V,pe(H));var A=H(N,V,W,G,U+"."+V,m);if(A)return A}return null}return B(O)}function oe(x){function O(z,_,W,G,U){var N=z[_],q=ne(N);if(q!=="object")return new C("Invalid "+G+" `"+U+"` of type `"+q+"` "+("supplied to `"+W+"`, expected `object`."));var V=v({},z[_],x);for(var H in V){var A=x[H];if(i(x,H)&&typeof A!="function")return J(W,G,U,H,pe(A));if(!A)return new C("Invalid "+G+" `"+U+"` key `"+H+"` supplied to `"+W+"`.\nBad object: "+JSON.stringify(z[_],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(x),null,"  "));var ee=A(N,H,W,G,U+"."+H,m);if(ee)return ee}return null}return B(O)}function ie(x){switch(typeof x){case"number":case"string":case"undefined":return!0;case"boolean":return!x;case"object":if(Array.isArray(x))return x.every(ie);if(x===null||g(x))return!0;var O=R(x);if(O){var z=O.call(x),_;if(O!==x.entries){for(;!(_=z.next()).done;)if(!ie(_.value))return!1}else for(;!(_=z.next()).done;){var W=_.value;if(W&&!ie(W[1]))return!1}}else return!1;return!0;default:return!1}}function Ee(x,O){return x==="symbol"?!0:O?O["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&O instanceof Symbol:!1}function ne(x){var O=typeof x;return Array.isArray(x)?"array":x instanceof RegExp?"object":Ee(O,x)?"symbol":O}function pe(x){if(typeof x>"u"||x===null)return""+x;var O=ne(x);if(O==="object"){if(x instanceof Date)return"date";if(x instanceof RegExp)return"regexp"}return O}function Qe(x){var O=pe(x);switch(O){case"array":case"object":return"an "+O;case"boolean":case"date":case"regexp":return"a "+O;default:return O}}function De(x){return!x.constructor||!x.constructor.name?Y:x.constructor.name}return P.checkPropTypes=u,P.resetWarningCache=u.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(a,l,s)=>{{var y=s("./node_modules/react-is/index.js"),v=!0;a.exports=s("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,v)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=l},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var s=typeof Symbol=="function"&&Symbol.for,y=s?Symbol.for("react.element"):60103,v=s?Symbol.for("react.portal"):60106,m=s?Symbol.for("react.fragment"):60107,i=s?Symbol.for("react.strict_mode"):60108,u=s?Symbol.for("react.profiler"):60114,p=s?Symbol.for("react.provider"):60109,j=s?Symbol.for("react.context"):60110,g=s?Symbol.for("react.async_mode"):60111,b=s?Symbol.for("react.concurrent_mode"):60111,T=s?Symbol.for("react.forward_ref"):60112,c=s?Symbol.for("react.suspense"):60113,R=s?Symbol.for("react.suspense_list"):60120,Y=s?Symbol.for("react.memo"):60115,P=s?Symbol.for("react.lazy"):60116,Z=s?Symbol.for("react.block"):60121,C=s?Symbol.for("react.fundamental"):60117,B=s?Symbol.for("react.responder"):60118,Q=s?Symbol.for("react.scope"):60119;function L(A){return typeof A=="string"||typeof A=="function"||A===m||A===b||A===u||A===i||A===c||A===R||typeof A=="object"&&A!==null&&(A.$$typeof===P||A.$$typeof===Y||A.$$typeof===p||A.$$typeof===j||A.$$typeof===T||A.$$typeof===C||A.$$typeof===B||A.$$typeof===Q||A.$$typeof===Z)}function k(A){if(typeof A=="object"&&A!==null){var ee=A.$$typeof;switch(ee){case y:var se=A.type;switch(se){case g:case b:case m:case u:case i:case c:return se;default:var tt=se&&se.$$typeof;switch(tt){case j:case T:case P:case Y:case p:return tt;default:return ee}}case v:return ee}}}var S=g,M=b,K=j,o=p,I=y,X=T,$=m,J=P,ae=Y,oe=v,ie=u,Ee=i,ne=c,pe=!1;function Qe(A){return pe||(pe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),De(A)||k(A)===g}function De(A){return k(A)===b}function x(A){return k(A)===j}function O(A){return k(A)===p}function z(A){return typeof A=="object"&&A!==null&&A.$$typeof===y}function _(A){return k(A)===T}function W(A){return k(A)===m}function G(A){return k(A)===P}function U(A){return k(A)===Y}function N(A){return k(A)===v}function q(A){return k(A)===u}function V(A){return k(A)===i}function H(A){return k(A)===c}l.AsyncMode=S,l.ConcurrentMode=M,l.ContextConsumer=K,l.ContextProvider=o,l.Element=I,l.ForwardRef=X,l.Fragment=$,l.Lazy=J,l.Memo=ae,l.Portal=oe,l.Profiler=ie,l.StrictMode=Ee,l.Suspense=ne,l.isAsyncMode=Qe,l.isConcurrentMode=De,l.isContextConsumer=x,l.isContextProvider=O,l.isElement=z,l.isForwardRef=_,l.isFragment=W,l.isLazy=G,l.isMemo=U,l.isPortal=N,l.isProfiler=q,l.isStrictMode=V,l.isSuspense=H,l.isValidElementType=L,l.typeOf=k})()},"./node_modules/react-is/index.js":(a,l,s)=>{a.exports=s("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,l,s)=>{s.r(l),s.d(l,{shallowEqualArrays:()=>v,shallowEqualObjects:()=>y});function y(m,i){if(m===i)return!0;if(!m||!i)return!1;var u=Object.keys(m),p=Object.keys(i),j=u.length;if(p.length!==j)return!1;for(var g=0;g<j;g++){var b=u[g];if(m[b]!==i[b]||!Object.prototype.hasOwnProperty.call(i,b))return!1}return!0}function v(m,i){if(m===i)return!0;if(!m||!i)return!1;var u=m.length;if(i.length!==u)return!1;for(var p=0;p<u;p++)if(m[p]!==i[p])return!1;return!0}},"./src/Component.ts":function(a,l,s){var y=this&&this.__rest||function(u,p){var j={};for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&p.indexOf(g)<0&&(j[g]=u[g]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,g=Object.getOwnPropertySymbols(u);b<g.length;b++)p.indexOf(g[b])<0&&Object.prototype.propertyIsEnumerable.call(u,g[b])&&(j[g[b]]=u[g[b]]);return j},v=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(l,"__esModule",{value:!0});var m=v(s("./src/useMediaQuery.ts")),i=function(u){var p=u.children,j=u.device,g=u.onChange,b=y(u,["children","device","onChange"]),T=(0,m.default)(b,j,g);return typeof p=="function"?p(T):T?p:null};l.default=i},"./src/Context.ts":(a,l,s)=>{Object.defineProperty(l,"__esModule",{value:!0});var y=s("react"),v=(0,y.createContext)(void 0);l.default=v},"./src/index.ts":function(a,l,s){var y=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var v=y(s("./src/useMediaQuery.ts"));l.useMediaQuery=v.default;var m=y(s("./src/Component.ts"));l.default=m.default;var i=y(s("./src/toQuery.ts"));l.toQuery=i.default;var u=y(s("./src/Context.ts"));l.Context=u.default},"./src/mediaQuery.ts":function(a,l,s){var y=this&&this.__assign||function(){return y=Object.assign||function(c){for(var R,Y=1,P=arguments.length;Y<P;Y++){R=arguments[Y];for(var Z in R)Object.prototype.hasOwnProperty.call(R,Z)&&(c[Z]=R[Z])}return c},y.apply(this,arguments)},v=this&&this.__rest||function(c,R){var Y={};for(var P in c)Object.prototype.hasOwnProperty.call(c,P)&&R.indexOf(P)<0&&(Y[P]=c[P]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,P=Object.getOwnPropertySymbols(c);Z<P.length;Z++)R.indexOf(P[Z])<0&&Object.prototype.propertyIsEnumerable.call(c,P[Z])&&(Y[P[Z]]=c[P[Z]]);return Y},m=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(l,"__esModule",{value:!0});var i=m(s("./node_modules/prop-types/index.js")),u=i.default.oneOfType([i.default.string,i.default.number]),p={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},j={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:u,type:Object.keys(p)};j.type;var g=v(j,["type"]),b=y({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:u,maxResolution:u},g),T=y(y({},p),b);l.default={all:T,types:p,matchers:j,features:b}},"./src/toQuery.ts":function(a,l,s){var y=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(l,"__esModule",{value:!0});var v=y(s("./node_modules/hyphenate-style-name/index.js")),m=y(s("./src/mediaQuery.ts")),i=function(g){return"not ".concat(g)},u=function(g,b){var T=(0,v.default)(g);return typeof b=="number"&&(b="".concat(b,"px")),b===!0?T:b===!1?i(T):"(".concat(T,": ").concat(b,")")},p=function(g){return g.join(" and ")},j=function(g){var b=[];return Object.keys(m.default.all).forEach(function(T){var c=g[T];c!=null&&b.push(u(T,c))}),p(b)};l.default=j},"./src/useMediaQuery.ts":function(a,l,s){var y=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(l,"__esModule",{value:!0});var v=s("react"),m=y(s("./node_modules/matchmediaquery/index.js")),i=y(s("./node_modules/hyphenate-style-name/index.js")),u=s("./node_modules/shallow-equal/dist/index.esm.js"),p=y(s("./src/toQuery.ts")),j=y(s("./src/Context.ts")),g=function(C){return C.query||(0,p.default)(C)},b=function(C){if(C){var B=Object.keys(C);return B.reduce(function(Q,L){return Q[(0,i.default)(L)]=C[L],Q},{})}},T=function(){var C=(0,v.useRef)(!1);return(0,v.useEffect)(function(){C.current=!0},[]),C.current},c=function(C){var B=(0,v.useContext)(j.default),Q=function(){return b(C)||b(B)},L=(0,v.useState)(Q),k=L[0],S=L[1];return(0,v.useEffect)(function(){var M=Q();(0,u.shallowEqualObjects)(k,M)||S(M)},[C,B]),k},R=function(C){var B=function(){return g(C)},Q=(0,v.useState)(B),L=Q[0],k=Q[1];return(0,v.useEffect)(function(){var S=B();L!==S&&k(S)},[C]),L},Y=function(C,B){var Q=function(){return(0,m.default)(C,B||{},!!B)},L=(0,v.useState)(Q),k=L[0],S=L[1],M=T();return(0,v.useEffect)(function(){if(M){var K=Q();return S(K),function(){K&&K.dispose()}}},[C,B]),k},P=function(C){var B=(0,v.useState)(C.matches),Q=B[0],L=B[1];return(0,v.useEffect)(function(){var k=function(S){L(S.matches)};return C.addListener(k),L(C.matches),function(){C.removeListener(k)}},[C]),Q},Z=function(C,B,Q){var L=c(B),k=R(C);if(!k)throw new Error("Invalid or missing MediaQuery!");var S=Y(k,L),M=P(S),K=T();return(0,v.useEffect)(function(){K&&Q&&Q(M)},[M]),(0,v.useEffect)(function(){return function(){S&&S.dispose()}},[]),M};l.default=Z},react:a=>{a.exports=r}},h={};function E(a){var l=h[a];if(l!==void 0)return l.exports;var s=h[a]={exports:{}};return d[a].call(s.exports,s,s.exports,E),s.exports}E.d=(a,l)=>{for(var s in l)E.o(l,s)&&!E.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:l[s]})},E.o=(a,l)=>Object.prototype.hasOwnProperty.call(a,l),E.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var F=E("./src/index.ts");return F})())})(It);var oo=It.exports;const io=f.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,so=f.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${w.breakpoint.desktop}) {
    max-width: 676px;
  }
`,lo=f.li`
  background-color: ${w.color.primaryBlack2};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,co=f.p`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,uo=f(Xe)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,po=()=>{const t=he(an),e=he(on),r=he(sn),h=oo.useMediaQuery({maxWidth:833})?2:4;return n.jsxs("div",{children:[n.jsx(io,{children:"Recommended food"}),e&&n.jsx(Yt,{}),r?n.jsx("p",{children:"Oops...something went wrong! Try again later"}):n.jsx(so,{children:t.slice(0,h).map(E=>n.jsx(lo,{children:n.jsx(ln,{item:E})},E._id))}),n.jsxs(uo,{to:"/recommended-food",children:[n.jsx(co,{children:"See more"}),n.jsx(me,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${w.color.primaryGrey}`})]})]})},bo=()=>{const t=Ye();return ve.useEffect(()=>{t(zt())},[t]),n.jsxs(cn,{children:[n.jsxs(dn,{children:[n.jsx(un,{children:"Today"}),n.jsxs(pn,{to:"/dashboard",children:[n.jsx(fn,{children:"On the way to the goal"}),n.jsx(me,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${w.color.primaryGrey}`})]})]}),n.jsxs(hn,{children:[n.jsx(bn,{}),n.jsx(Vn,{}),n.jsx(fr,{})]}),n.jsxs(mn,{children:[n.jsx(ao,{}),n.jsx(po,{})]})]})};export{bo as default};
