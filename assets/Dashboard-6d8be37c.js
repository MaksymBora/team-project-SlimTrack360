import{u as p,j as e,e as x,r as b,c as D,a as v,s as k,g as O}from"./index-5143ff67.js";import{C as T,a as _,L,P as F,b as G,p as I,c as V,d as $,e as C}from"./index-a7a610ac.js";T.register(_,L,F,G,I,V,$);const c="#292928",f={type:"linear",position:"bottom",min:1,max:31,ticks:{stepSize:1},grid:{color:c,borderColor:c,borderWidth:.5}},E={position:"top",display:!1},A={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}K`},grid:{color:c,borderColor:c,borderWidth:.5}},J={type:"linear",position:"left",min:0,max:3e3,ticks:{stepSize:1e3,callback:t=>`${t/1e3}L`},grid:{color:c,borderColor:c,borderWidth:.5}},M={responsive:!0,maintainAspectRatio:!1,scales:{x:f,y:A},plugins:{legend:E,tooltip:{callbacks:{label:t=>{const s=t.dataset.label||"",o=t.parsed.y;return console.log("Label:",s),console.log("Value:",o),`${z(s)} ${o} ${R(s)}`}}}}};function R(t){return t==="Calories"?"calories":t==="Water"?"milliliters":""}function z(t){return t==="Calories"?"Calories":t==="Water"?"Water":""}const m=p.div`
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
`;m.displayName="GraphContainer";const q=p.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`,j=p.div``;const B={labels:Array.from({length:31},(t,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},U=()=>e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"caloriesValue",children:"1700 cal"})]})]}),e.jsx(j,{className:"graph-line",children:e.jsx(C,{options:{...M,scales:{x:f,y:A}},data:B})})]}),P={labels:Array.from({length:31},(t,s)=>s+1),datasets:[{label:"",data:Array.from({length:31},()=>Math.floor(Math.random()*1e3)),borderColor:"#e3ffa8",borderWidth:1,pointBackgroundColor:"#e3ffa8",pointRadius:2,fill:!1}]},Y=()=>e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"waterTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Water"}),e.jsxs("h3",{className:"graphValue",children:["Average value: ",e.jsx("span",{className:"waterValue",children:"1700 ml"})]})]}),e.jsx(j,{className:"graph-line",children:e.jsx(C,{options:{...M,scales:{x:f,y:J}},data:P})})]}),K=t=>t.statistic.totalWeight,X=t=>t.statistic.month,H=t=>t.statistic.requestMonth,Q=()=>{const t=x(K),s=!t||(t==null?void 0:t.length)===0,o=x(X),d=((a,n)=>new Date(n,new Date(Date.parse(a+" 1, "+n)).getMonth()+1,0).getDate())(o,"2023"),g=Array.from({length:d},(a,n)=>(n+1).toString()),l=s?Array.from({length:d},()=>"-"):((a,n)=>{const h=Array(a).fill(null),i=n.reduce((r,y)=>{const W=new Date(y.date).getDate()-1;return r[W]=y.weight,r},h);for(let r=1;r<i.length;r++)i[r]===null&&(i[r]=i[r-1]);const S=i.find(r=>r!==null);return i.map(r=>r===null?S:r)})(d,t),u=()=>{if(l.includes("-")||l.length===0)return"-";const a=l==null?void 0:l.reduce((n,h)=>n+h);return Math.round(a/l.length)};return e.jsxs(m,{className:"scroll-container",children:[e.jsxs("div",{className:"weightTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Weight"}),e.jsxs("h3",{className:"graphValue",children:["Average value:",e.jsx("span",{className:"weightValue",children:u()})]})]}),e.jsx(j,{className:"weight-graph-line",children:e.jsxs("div",{className:"table-container",children:[e.jsx("div",{className:"upper-row",children:l.map((a,n)=>e.jsx("div",{className:"table-cell upper",children:a},n))}),e.jsx("div",{className:"lower-row",children:g.map((a,n)=>e.jsx("div",{className:"table-cell lower",children:a},n))})]})})]})},Z=({width:t=16,height:s=16})=>e.jsx("svg",{width:t,height:s,children:e.jsx("path",{d:"M11.5 7c-0.139 0-0.278-0.058-0.377-0.171l-3.124-3.57-3.124 3.57c-0.182 0.208-0.498 0.229-0.706 0.047s-0.229-0.498-0.047-0.706l3.5-4c0.095-0.108 0.232-0.171 0.376-0.171s0.281 0.062 0.376 0.171l3.5 4c0.182 0.208 0.161 0.524-0.047 0.706-0.095 0.083-0.212 0.124-0.329 0.124z"})}),ee=({width:t=24,height:s=24})=>e.jsx("svg",{width:t,height:s,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const te=["January","February","March","April","May","June","July","August","September","October","November","December"],se=()=>{const[t,s]=b.useState(!1),[o,w]=b.useState("December"),d=D(),g=v(),N=()=>{s(!t)},l=a=>{w(a),g(k(a)),s(!1)},u=()=>{d("/main")};return e.jsxs(q,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("button",{className:"IconArrowLeft",onClick:u,children:e.jsx(ee,{width:24,height:24})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:N,children:e.jsx(Z,{width:16,height:16})})]}),e.jsxs("div",{className:`monthSelector ${t?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:o}),t&&e.jsx("div",{className:"dropdown",children:te.map(a=>e.jsx("div",{className:`monthOption ${o===a?"selected":""}`,onClick:()=>l(a),children:a},a))})]})]})},ae=p.div`
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
`;const re=t=>({January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12})[t];function ie(){const t=x(H),s=v();return b.useEffect(()=>{const o={month:re(t)};s(O(o))},[s,t]),e.jsxs(ae,{children:[e.jsx(se,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(U,{}),e.jsx(Y,{})]}),e.jsx(Q,{})]})}export{ie as Dashboard,ie as default};
