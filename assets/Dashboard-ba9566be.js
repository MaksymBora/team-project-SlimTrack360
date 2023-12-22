import{u as n,j as e,r as h,c as j}from"./index-ba2bc4bb.js";import{C as w,a as N,L as v,P as C,b as y,p as A,c as k,d as S,e as p}from"./index-030424ad.js";w.register(N,v,C,y,A,k,S);const o="#292928",c={type:"linear",position:"bottom",min:1,max:31,ticks:{stepSize:1},grid:{color:o,borderColor:o,borderWidth:.5}},M={position:"top",display:!1},m={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:a=>`${a/1e3}K`},grid:{color:o,borderColor:o,borderWidth:.5}},W={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:a=>`${a/1e3}L`},grid:{color:o,borderColor:o,borderWidth:.5}},x={responsive:!0,maintainAspectRatio:!1,scales:{x:c,y:m},plugins:{legend:M,tooltip:{callbacks:{label:a=>{const s=a.dataset.label||"",r=a.parsed.y;return console.log("Label:",s),console.log("Value:",r),`${L(s)} ${r} ${_(s)}`}}}}};function _(a){return a==="Calories"?"calories":a==="Water"?"milliliters":""}function L(a){return a==="Calories"?"Calories":a==="Water"?"Water":""}const i=n.div`
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
`;i.displayName="GraphContainer";const F=n.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`,d=n.div``;const G={labels:Array.from({length:31},(a,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},O=()=>e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"caloriesValue",children:"1700 cal"})]})]}),e.jsx(d,{className:"graph-line",children:e.jsx(p,{options:{...x,scales:{x:c,y:m}},data:G})})]}),T={labels:Array.from({length:31},(a,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},V=()=>e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"waterValue",children:"1700 ml"})]})]}),e.jsx(d,{className:"graph-line",children:e.jsx(p,{options:{...x,scales:{x:c,y:W}},data:T})})]}),D=()=>{const a=Array.from({length:31},()=>(Math.random()*20+60).toFixed(0)),s=Array.from({length:31},(r,t)=>(t+1).toString());return e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"weightTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Weight"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsx("span",{className:"weightValue",children:" 68 kg"})]})]}),e.jsx(d,{className:"weight-graph-line",children:e.jsxs("div",{className:"table-container",children:[e.jsx("div",{className:"upper-row",children:a.map((r,t)=>e.jsx("div",{className:"table-cell upper",children:r},t))}),e.jsx("div",{className:"lower-row",children:s.map((r,t)=>e.jsx("div",{className:"table-cell lower",children:r},t))})]})})]})},$=({width:a=16,height:s=16})=>e.jsx("svg",{width:a,height:s,children:e.jsx("path",{d:"M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"})}),E=({width:a=24,height:s=24})=>e.jsx("svg",{width:a,height:s,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const I=["January","February","March","April","May","June","July","August","September","October","November","December"],R=()=>{const[a,s]=h.useState(!1),[r,t]=h.useState("December"),g=j(),u=()=>{s(!a)},b=l=>{t(l),s(!1)},f=()=>{g("/main")};return e.jsxs(F,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("button",{className:"IconArrowLeft",onClick:f,children:e.jsx(E,{width:24,height:24})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:u,children:e.jsx($,{width:16,height:16})})]}),e.jsxs("div",{className:`monthSelector ${a?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:r}),a&&e.jsx("div",{className:"dropdown",children:I.map(l=>e.jsx("div",{className:`monthOption ${r===l?"selected":""}`,onClick:()=>b(l),children:l},l))})]})]})},z=n.div`
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
`;function U(){return e.jsxs(z,{children:[e.jsx(R,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(O,{}),e.jsx(V,{})]}),e.jsx(D,{})]})}export{U as Dashboard,U as default};
