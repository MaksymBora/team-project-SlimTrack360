import{u as b,j as e,e as x,r as j,c as S,a as y,s as k,g as T}from"./index-26ee8d98.js";import{C as O,a as I,L as _,P as L,b as F,p as G,c as V,d as $,e as C}from"./index-360ae2d3.js";O.register(I,_,L,F,G,V,$);const p="#292928",w={type:"linear",position:"bottom",min:1,max:31,ticks:{stepSize:1},grid:{color:p,borderColor:p,borderWidth:.5}},E={position:"top",display:!1},A={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}K`},grid:{color:p,borderColor:p,borderWidth:.5}},J={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}L`},grid:{color:p,borderColor:p,borderWidth:.5}},M={responsive:!0,maintainAspectRatio:!1,scales:{x:w,y:A},plugins:{legend:E,tooltip:{callbacks:{label:t=>{const a=t.dataset.label||"",l=t.parsed.y;return console.log("Label:",a),console.log("Value:",l),`${z(a)} ${l} ${R(a)}`}}}}};function R(t){return t==="Calories"?"calories":t==="Water"?"milliliters":""}function z(t){return t==="Calories"?"Calories":t==="Water"?"Water":""}const g=b.div`
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
`;g.displayName="GraphContainer";const q=b.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`,N=b.div``;const B={labels:Array.from({length:31},(t,a)=>a+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},U=()=>e.jsxs(g,{className:"scroll-container",children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"caloriesValue",children:"1700 cal"})]})]}),e.jsx(N,{className:"graph-line",children:e.jsx(C,{options:{...M,scales:{x:w,y:A}},data:B})})]}),P=t=>t.statistic.totalWater,Y=t=>t.statistic.totalWeight,K=t=>t.statistic.month,X=t=>t.statistic.requestMonth,H=()=>{const t=x(P);if(!t||t.length===0)return e.jsx(g,{className:"scroll-container",children:e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsx("h3",{className:"graphValue",children:"No water consumption data available"})]})});const a=t?Math.round(t.reduce((n,c)=>n+c.water,0)/t.length):0,l=n=>new Date(n).getDate(),m=Array.from({length:31},(n,c)=>c+1),d={labels:m.map(n=>n),datasets:[{label:"Water Intake",data:m.map(n=>{const c=t.find(i=>l(i.date)===n);return c?c.water:0}),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]};return e.jsxs(g,{className:"scroll-container",children:[e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsx("span",{className:"waterValue",children:t?`${a||0} ml`:"0 ml"})]})]}),e.jsx(N,{className:"graph-line",children:e.jsx(C,{options:{...M,scales:{x:w,y:J}},data:d})})]})},Q=()=>{const t=x(Y),a=!t||(t==null?void 0:t.length)===0,l=x(K),d=((s,o)=>new Date(o,new Date(Date.parse(s+" 1, "+o)).getMonth()+1,0).getDate())(l,"2023"),n=Array.from({length:d},(s,o)=>(o+1).toString()),i=a?Array.from({length:d},()=>"-"):((s,o)=>{const u=Array(s).fill(null),h=o.reduce((r,v)=>{const D=new Date(v.date).getDate()-1;return r[D]=v.weight,r},u);for(let r=1;r<h.length;r++)h[r]===null&&(h[r]=h[r-1]);const W=h.find(r=>r!==null);return h.map(r=>r===null?W:r)})(d,t),f=()=>{if(i.includes("-")||i.length===0)return"-";const s=i==null?void 0:i.reduce((o,u)=>o+u);return Math.round(s/i.length)};return e.jsxs(g,{className:"scroll-container",children:[e.jsxs("div",{className:"weightTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Weight"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsx("span",{className:"weightValue",children:f()})]})]}),e.jsx(N,{className:"weight-graph-line",children:e.jsxs("div",{className:"table-container",children:[e.jsx("div",{className:"upper-row",children:i.map((s,o)=>e.jsx("div",{className:"table-cell upper",children:s},o))}),e.jsx("div",{className:"lower-row",children:n.map((s,o)=>e.jsx("div",{className:"table-cell lower",children:s},o))})]})})]})},Z=({width:t=16,height:a=16})=>e.jsx("svg",{width:t,height:a,children:e.jsx("path",{d:"M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"})}),ee=({width:t=24,height:a=24})=>e.jsx("svg",{width:t,height:a,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const te=["January","February","March","April","May","June","July","August","September","October","November","December"],ae=()=>{const[t,a]=j.useState(!1),[l,m]=j.useState("December"),d=S(),n=y(),c=()=>{a(!t)},i=s=>{m(s),n(k(s)),a(!1)},f=()=>{d("/main")};return e.jsxs(q,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("button",{className:"IconArrowLeft",onClick:f,children:e.jsx(ee,{width:24,height:24})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:c,children:e.jsx(Z,{width:16,height:16})})]}),e.jsxs("div",{className:`monthSelector ${t?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:l}),t&&e.jsx("div",{className:"dropdown",children:te.map(s=>e.jsx("div",{className:`monthOption ${l===s?"selected":""}`,onClick:()=>i(s),children:s},s))})]})]})},se=b.div`
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
`;const re=t=>({January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12})[t];function ie(){const t=x(X),a=y();return j.useEffect(()=>{const l={month:re(t)};a(T(l))},[a,t]),e.jsxs(se,{children:[e.jsx(ae,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(U,{}),e.jsx(H,{})]}),e.jsx(Q,{})]})}export{ie as Dashboard,ie as default};
