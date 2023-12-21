import{s as n,j as e,r as h}from"./index-b8d75539.js";import{C as b,a as f,L as j,P as w,b as N,p as v,c as C,d as y,e as p}from"./index-19a6f24e.js";b.register(f,j,w,N,v,C,y);const o="#292928",c={type:"linear",position:"bottom",min:1,max:31,ticks:{stepSize:1},grid:{color:o,borderColor:o,borderWidth:.5}},A={position:"top",display:!1},m={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:s=>`${s/1e3}K`},grid:{color:o,borderColor:o,borderWidth:.5}},S={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:s=>`${s/1e3}L`},grid:{color:o,borderColor:o,borderWidth:.5}},x={responsive:!0,maintainAspectRatio:!1,scales:{x:c,y:m},plugins:{legend:A,tooltip:{callbacks:{label:s=>{const a=s.dataset.label||"",r=s.parsed.y;return console.log("Label:",a),console.log("Value:",r),`${M(a)} ${r} ${k(a)}`}}}}};function k(s){return s==="Calories"?"calories":s==="Water"?"milliliters":""}function M(s){return s==="Calories"?"Calories":s==="Water"?"Water":""}const i=n.div`
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
`;i.displayName="GraphContainer";const W=n.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`,d=n.div``;const _={labels:Array.from({length:31},(s,a)=>a+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},L=()=>e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"caloriesValue",children:"1700 cal"})]})]}),e.jsx(d,{className:"graph-line",children:e.jsx(p,{options:{...x,scales:{x:c,y:m}},data:_})})]}),F={labels:Array.from({length:31},(s,a)=>a+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},G=()=>e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"waterValue",children:"1700 ml"})]})]}),e.jsx(d,{className:"graph-line",children:e.jsx(p,{options:{...x,scales:{x:c,y:S}},data:F})})]}),O=()=>{const s=Array.from({length:31},()=>(Math.random()*20+60).toFixed(0)),a=Array.from({length:31},(r,t)=>(t+1).toString());return e.jsxs(i,{className:"scroll-container",children:[e.jsxs("div",{className:"weightTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Weight"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsx("span",{className:"weightValue",children:" 68 kg"})]})]}),e.jsx(d,{className:"weight-graph-line",children:e.jsxs("div",{className:"table-container",children:[e.jsx("div",{className:"upper-row",children:s.map((r,t)=>e.jsx("div",{className:"table-cell upper",children:r},t))}),e.jsx("div",{className:"lower-row",children:a.map((r,t)=>e.jsx("div",{className:"table-cell lower",children:r},t))})]})})]})},T=({width:s=16,height:a=16})=>e.jsx("svg",{width:s,height:a,children:e.jsx("path",{d:"M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"})}),V=({width:s=24,height:a=24})=>e.jsx("svg",{width:s,height:a,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const D=["January","February","March","April","May","June","July","August","September","October","November","December"],$=()=>{const[s,a]=h.useState(!1),[r,t]=h.useState("December"),g=()=>{a(!s)},u=l=>{t(l),a(!1)};return e.jsxs(W,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("div",{className:"IconArrowLeft",children:e.jsx(V,{width:24,height:24})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:g,children:e.jsx(T,{width:16,height:16})})]}),e.jsxs("div",{className:`monthSelector ${s?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:r}),s&&e.jsx("div",{className:"dropdown",children:D.map(l=>e.jsx("div",{className:`monthOption ${r===l?"selected":""}`,onClick:()=>u(l),children:l},l))})]})]})},E=n.div`
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
`;function I(){return e.jsxs(E,{children:[e.jsx($,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(L,{}),e.jsx(G,{})]}),e.jsx(O,{})]})}export{I as Dashboard,I as default};
