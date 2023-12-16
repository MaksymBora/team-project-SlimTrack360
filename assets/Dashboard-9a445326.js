import{a as t,j as e,r as d}from"./index-d3645e2e.js";import{C as g,a as b,L as v,P as M,b as y,p as C,c as f,d as w,e as n}from"./index-62f9d3be.js";const l=t.div``,o=t.div``,N=t.div`
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
`;g.register(b,v,M,y,C,f,w);const c={responsive:!0,plugins:{legend:{position:"top"}}};const h=Array.from({length:31},(a,s)=>(s+1).toString()),S={labels:h,datasets:[{label:"",data:h.map(()=>Math.floor(Math.random()*1e3))}]},A=()=>e.jsxs(l,{children:[e.jsxs("div",{className:"caloriesTitle",children:[e.jsx("h2",{className:"graphTitle",children:"Calories"}),e.jsx("h3",{className:"graphValue",children:"Average value: 1700 cal"})]}),e.jsx(o,{className:"calories-graph-line",children:e.jsx(n,{options:c,data:S})})]}),p=["January","February","March","April","May","June","July"],D={labels:p,datasets:[{label:"Water Dataset",data:p.map(()=>Math.floor(Math.random()*1e3)),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]},J=()=>e.jsxs(l,{children:[e.jsx("h2",{children:"Water"}),e.jsx(o,{children:e.jsx(n,{options:c,data:D})})]}),x=["January","February","March","April","May","June","July"],W={labels:x,datasets:[{label:"Waight Dataset",data:x.map(()=>Math.floor(Math.random()*1e3)),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]},$=()=>e.jsxs(l,{children:[e.jsx("h2",{children:"Weight"}),e.jsx(o,{children:e.jsx(n,{options:c,data:W})})]}),G=({width:a=16,height:s=16})=>e.jsx("svg",{width:a,height:s,children:e.jsx("path",{d:"M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"})}),L=({width:a=24,height:s=24})=>e.jsx("svg",{width:a,height:s,viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})});const I=["January","February","March","April","May","June","July","August","September","October","November","December"],_=()=>{const[a,s]=d.useState(!1),[i,m]=d.useState("December"),j=()=>{s(!a)},u=r=>{m(r),s(!1)};return e.jsxs(N,{children:[e.jsxs("div",{className:"monthsArrows",children:[e.jsx("div",{className:"IconArrowLeft",children:e.jsx(L,{width:20,height:30})}),e.jsx("label",{className:"monthTitle",htmlFor:"monthSelector",children:"Months"}),e.jsx("div",{className:"IconArrowUp",onClick:j,children:e.jsx(G,{width:30,height:30})})]}),e.jsxs("div",{className:`monthSelector ${a?"open":""}`,children:[e.jsx("div",{className:"selectedMonth",children:i}),a&&e.jsx("div",{className:"dropdown",children:I.map(r=>e.jsx("div",{className:`monthOption ${i===r?"selected":""}`,onClick:()=>u(r),children:r},r))})]})]})},k=t.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;function O(){return e.jsxs(k,{children:[e.jsx(_,{}),e.jsxs("div",{className:"caloriesWaterGraphs",children:[e.jsx(A,{}),e.jsx(J,{})]}),e.jsx($,{})]})}export{O as Dashboard,O as default};