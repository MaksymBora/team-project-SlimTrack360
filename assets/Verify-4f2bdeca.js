import{a0 as f,r as a,c as o,a as n,e as i,a1 as l,a2 as m,a3 as p,j as y}from"./index-a089e988.js";const h=()=>{const[u]=f(),[t]=a.useState(u.get("searchQuery")??""),s=o(),r=n(),c=i(l),e=i(m);return a.useEffect(()=>{r(p(t))},[r,t]),a.useEffect(()=>{e==="fulfilled"&&s("/main"),e==="rejected"&&!c&&s("/")},[e,s,c]),y.jsx("div",{})};export{h as default};
