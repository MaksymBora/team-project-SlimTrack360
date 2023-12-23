import{u as p,j as e,e as y,r as b,c as S,a as N,s as D,g as W}from"./index-08f9dd92.js";import{C as k,a as O,L as T,P as _,b as F,p as L,c as G,d as I,e as v}from"./index-74e07da1.js";k.register(O,T,_,F,L,G,I);const c="#292928",f={type:"linear",position:"bottom",min:1,max:31,ticks:{stepSize:1},grid:{color:c,borderColor:c,borderWidth:.5}},V={position:"top",display:!1},C={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}K`},grid:{color:c,borderColor:c,borderWidth:.5}},$={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}L`},grid:{color:c,borderColor:c,borderWidth:.5}},A={responsive:!0,maintainAspectRatio:!1,scales:{x:f,y:C},plugins:{legend:V,tooltip:{callbacks:{label:t=>{const s=t.dataset.label||"",o=t.parsed.y;return console.log("Label:",s),console.log("Value:",o),`${J(s)} ${o} ${E(s)}`}}}}};function E(t){return t==="Calories"?"calories":t==="Water"?"milliliters":""}function J(t){return t==="Calories"?"Calories":t==="Water"?"Water":""}const m=p.div`
  // width: 100%;
  // overflow-x: auto;
  // scrollbar-width: thin; /* Firefox */
  // scrollbar-color: #E3FFA8 rgba(255, 255, 255, 0.12); /* Firefox */

  // &::-webkit-scrollbar {
  //   width: 8px; /* Safari and Chrome */
  // }

  // &::-webkit-scrollbar-thumb {
  //   background-color: #E3FFA8;
  //   border-radius: 12px;
  // }

  // &::-webkit-scrollbar-track {
  //   background-color: rgba(255, 255, 255, 0.12);
  // }
`;m.displayName="GraphContainer";const R=p.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`,j=p.div``;const z={labels:Array.from({length:31},(t,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},q=()=>e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"caloriesValue",children:"1700 cal"})]})]}),e.jsx(j,{className:"graph-line",children:e.jsx(v,{options:{...A,scales:{x:f,y:C}},data:z})})]}),B={labels:Array.from({length:31},(t,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},U=()=>e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"waterValue",children:"1700 ml"})]})]}),e.jsx(j,{className:"graph-line",children:e.jsx(v,{options:{...A,scales:{x:f,y:$}},data:B})})]}),Y=t=>t.statistic.totalWeight,P=t=>t.statistic.requestMonth;function K(t){const s=new Date(t),o=s.getFullYear(),d=s.getMonth()+1;return new Date(o,d+1,0).getDate()}const X=()=>{var h;const t=y(Y);if(!t)return null;const s=K((h=t[0])==null?void 0:h.date),o=Array.from({length:s},(l,n)=>(n+1).toString()),d=()=>{var n;const l=(n=t==null?void 0:t.map(r=>r.weight))==null?void 0:n.reduce((r,x)=>r+x);return Math.round(l/t.length)},u=((l,n)=>{const r=Array(l).fill(null),x=new Date,i=n.reduce((a,w)=>{const M=new Date(w.date).getDate()-1;return a[M]=w.weight,a},r);for(let a=1;a<i.length;a++)i[a]===null&&(i[a]=i[a-1]);for(let a=x.getDate();a<i.length;a++)i[a]=null;return i.map(a=>a===null?"-":a)})(s,t);return e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"weightTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Weight"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsxs("span",{className:"weightValue",children:[" ",d()]})]})]}),e.jsx(j,{className:"weight-graph-line",children:e.jsxs("div",{className:"table-container",children:[e.jsx("div",{className:"upper-row",children:u.map((l,n)=>e.jsx("div",{className:"table-cell upper",children:l},n))}),e.jsx("div",{className:"lower-row",children:o.map((l,n)=>e.jsx("div",{className:"table-cell lower",children:l},n))})]})})]})},H=({width:t=16,height:s=16})=>e.jsx("svg",{width:t,height:s,children:e.jsx("path",{d:"M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"})}),Q=({width:t=24,height:s=24})=>e.jsx("svg",{width:t,height:s,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const Z=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=()=>{const[t,s]=b.useState(!1),[o,d]=b.useState("December"),g=S(),u=N(),h=()=>{s(!t)},l=r=>{d(r),u(D(r)),s(!1)},n=()=>{g("/main")};return e.jsxs(R,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("button",{className:"IconArrowLeft",onClick:n,children:e.jsx(Q,{width:24,height:24})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:h,children:e.jsx(H,{width:16,height:16})})]}),e.jsxs("div",{className:`monthSelector ${t?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:o}),t&&e.jsx("div",{className:"dropdown",children:Z.map(r=>e.jsx("div",{className:`monthOption ${o===r?"selected":""}`,onClick:()=>l(r),children:r},r))})]})]})},te=p.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 76px;

  @media screen and (min-width: 834px) {
    width: 800px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 40px;
  }
`;const se=t=>({January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12})[t];function oe(){const t=y(P),s=N();return b.useEffect(()=>{const o={month:se(t)};s(W(o))},[s,t]),e.jsxs(te,{children:[e.jsx(ee,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(q,{}),e.jsx(U,{})]}),e.jsx(X,{})]})}export{oe as Dashboard,oe as default};
