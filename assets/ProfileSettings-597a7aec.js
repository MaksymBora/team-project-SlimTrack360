import{j as a,s as w,r as h,c as y}from"./index-0bc007ff.js";import{c as ye,d as ve,e as se,u as be}from"./index.esm-613f1831.js";import{I as Te}from"./Icon-906bdf9b.js";const we=""+new URL("setDesk-b0655153.png",import.meta.url).href,Ee=""+new URL("setTab-ba48fc09.png",import.meta.url).href,Ce=""+new URL("setMob-731410b8.png",import.meta.url).href,ce=""+new URL("setDesk@2x-6227369a.png",import.meta.url).href,Le=""+new URL("setTab@2x-17bf131f.png",import.meta.url).href,he=""+new URL("setMob@2x-b67ee440.png",import.meta.url).href,Ie=""+new URL("setMob-62d05b7e.webp",import.meta.url).href,Re=""+new URL("setMob@2x-7f4bbdde.webp",import.meta.url).href,je=""+new URL("setTab-1abdf41c.webp",import.meta.url).href,$e=""+new URL("setTab@2x-d95e5618.webp",import.meta.url).href,_e=""+new URL("setDesk-4ad72960.webp",import.meta.url).href,ke=""+new URL("setDesk@2x-0f486487.webp",import.meta.url).href,Oe=()=>a.jsxs("picture",{children:[a.jsx("source",{srcSet:`${_e} 1x, ${ke} 2x`,media:"(min-width: 1440px)",type:"image/webp"}),a.jsx("source",{srcSet:`${we} 1x, ${ce} 2x`,media:"(min-width: 1440px)",type:"image/png"}),a.jsx("source",{srcSet:`${je} 1x, ${$e} 2x`,media:"(min-width: 768px)",type:"image/webp"}),a.jsx("source",{srcSet:`${Ee} 1x, ${Le} 2x`,media:"(min-width: 768px)",type:"image/png"}),a.jsx("source",{srcSet:`${Ie} 1x, ${Re} 2x`,media:"(max-width: 767px)",type:"image/webp"}),a.jsx("source",{srcSet:`${Ce} 1x, ${he} 2x`,media:"(max-width: 767px)",type:"image/png"}),a.jsx("img",{src:ce,alt:"settings"})]}),Ae=w.section`
  width: 100%;
  height: 100%;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`,Ne=w.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 780px;
    padding: 0 6px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
    padding: 0 10px;
  }
`,Me=w.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`,Be=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > img {
    max-width: 536px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`,Se=w.button`
  background-color: transparent;
  color: ${e=>e.theme.color.primaryWhite};
  font-size: 14px;
  line-height: 1.4;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`,De=w.input`
  position: absolute;
  width: 1px;
  height: 1x;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  background: transparent;
  overflow: hidden;
`,Fe=w.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`,Pe=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ze=({handleSelect:e})=>{const[t,n]=h.useState(null),s=h.useRef(),d=o=>{n(o.target.files[0]),e(o.target.files[0])},i=()=>{s.current.click()};return a.jsxs("div",{children:[a.jsxs(Pe,{children:[a.jsx(Fe,{children:a.jsx("img",{src:he,width:"36px",height:"36px",alt:"Profile Photo"})}),a.jsxs(Se,{type:"button",onClick:i,children:[a.jsx(Te,{name:"icon-direct-inbox",width:"16px",height:"16px",fill:"#E3FFA8"}),t?t.name:"Download new photo"]})]}),a.jsx(De,{ref:s,type:"file",onChange:d,accept:"image/*,.png,.jpg,.web,.gif"})]})},Ue=w.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 212px 1fr;
    column-gap: 60px;
    max-width: 491px;
  }
`,ee=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,J=w.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`,qe=w.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`,We=w(ee)`
  @media screen and (min-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`,He=w.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ge=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 3;

    button {
      width: 212px;
    }
  }
`,Qe=w.button`
  width: 100%;
  text-align: center;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: ${e=>e.theme.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  &:hover,
  &:focus {
  }
  transition: ${e=>e.theme.transition.main};
`,Ve=w.button`
  font-size: 14px;
  line-height: 1.4;
  background-color: transparent;
  color: ${e=>e.theme.color.primaryGrey};

  &:hover,
  &:focus {
  }

  transition: ${e=>e.theme.transition.main};
`,Ye=w.p`
  font-size: 12px;
  line-height: 1.17;
  color: #e74a3b;
  padding-left: 10px;
`,Xe=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ke=w.input.attrs(e=>({$error:e.$error||!1}))`
  padding: 8px 10px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid ${e=>e.$error?"#E74A3B":e.theme.color.primaryGrey};
  color: ${e=>e.theme.color.primaryWhite};
  transition: all ${e=>e.theme.transition.main};
  outline: none;
  width: 100%;

  font-size: 14px;
  line-height: 1.4;

  &:hover,
  &:focus {
    border: 1px solid
      ${e=>e.$error?"#E74A3B":e.theme.color.primaryGreenLite};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,Y=({value:e,formik:t,type:n})=>{var s;return a.jsxs(ee,{children:[a.jsx(J,{htmlFor:e,children:`Your ${e}`}),a.jsxs(Xe,{children:[a.jsx(Ke,{id:e,name:e,type:n||"text",value:t.values[e],onBlur:t.handleBlur,onChange:t.handleChange,$error:t.errors[e]&&t.touched[e]}),t.errors[e]&&t.touched[e]&&a.jsx(Ye,{children:(s=t.errors[e])!=null&&s.includes("must be a `number` type")?"Please enter number":t.errors[e]})]})]})},Je=w.li`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;
  }
`,Ze=w.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  cursor: pointer;

  &::before {
    content: url('src/assets/images/settings/unchecked.svg');
  }

  &:checked::before {
    content: url('src/assets/images/settings/checked.svg');
  }
`,de=({item:e,formik:t})=>{const{id:n,name:s,value:d,label:i}=e;return a.jsxs(Je,{children:[a.jsx(Ze,{type:"radio",id:n,name:s,checked:t.values[s]===d,value:d,onChange:t.handleChange}),a.jsx("label",{htmlFor:n,children:i})]},n)},et=[{id:"12",name:"levelActivity",value:"1.2",label:`1.2 - if you do not have physical activity and sedentary
        work`},{id:"13",name:"levelActivity",value:"  1.375",label:` 1.375 - if you do short runs or light gymnastics 1-3 times a
        week`},{id:"15",name:"levelActivity",value:"1.55",label:`1.55 - if you play sports with average loads 3-5 times a
        week`},{id:"17",name:"levelActivity",value:"1.725",label:"1.725 - if you train fully 6-7 times a week"},{id:"19",name:"levelActivity",value:"1.9",label:`1.9 - if your work is related to physical labor, you train 2
        times a day and include strength exercises in your training
        program`}],tt=[{id:"gMale",name:"sex",value:"male",label:"Male"},{id:"gFemale",name:"sex",value:"female",label:"Female"}],nt=ye({name:ve().required("Required field"),age:se().required("Required field"),currentWeight:se().required("Required field"),height:se().required("Required field")});function ge(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ge(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function S(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=ge(e))&&(s&&(s+=" "),s+=t);return s}const G=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",j=e=>typeof e=="function",Z=e=>q(e)||j(e)?e:null,ie=e=>h.isValidElement(e)||q(e)||j(e)||G(e);function ot(e,t,n){n===void 0&&(n=300);const{scrollHeight:s,style:d}=e;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${n}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(t,n)})})}function ne(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:d=!0,collapseDuration:i=300}=e;return function(o){let{children:r,position:C,preventExitTransition:T,done:v,nodeRef:f,isIn:L}=o;const c=s?`${t}--${C}`:t,p=s?`${n}--${C}`:n,m=h.useRef(0);return h.useLayoutEffect(()=>{const l=f.current,u=c.split(" "),E=R=>{R.target===f.current&&(l.dispatchEvent(new Event("d")),l.removeEventListener("animationend",E),l.removeEventListener("animationcancel",E),m.current===0&&R.type!=="animationcancel"&&l.classList.remove(...u))};l.classList.add(...u),l.addEventListener("animationend",E),l.addEventListener("animationcancel",E)},[]),h.useEffect(()=>{const l=f.current,u=()=>{l.removeEventListener("animationend",u),d?ot(l,v,i):v()};L||(T?u():(m.current=1,l.className+=` ${p}`,l.addEventListener("animationend",u)))},[L]),y.createElement(y.Fragment,null,r)}}function ue(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const O={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(s=>s!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},X=e=>{let{theme:t,type:n,...s}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...s})},ae={info:function(e){return y.createElement(X,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(X,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(X,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(X,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function st(e){const[,t]=h.useReducer(c=>c+1,0),[n,s]=h.useState([]),d=h.useRef(null),i=h.useRef(new Map).current,o=c=>n.indexOf(c)!==-1,r=h.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:c=>i.get(c)}).current;function C(c){let{containerId:p}=c;const{limit:m}=r.props;!m||p&&r.containerId!==p||(r.count-=r.queue.length,r.queue=[])}function T(c){s(p=>c==null?[]:p.filter(m=>m!==c))}function v(){const{toastContent:c,toastProps:p,staleId:m}=r.queue.shift();L(c,p,m)}function f(c,p){let{delay:m,staleId:l,...u}=p;if(!ie(c)||function(k){return!d.current||r.props.enableMultiContainer&&k.containerId!==r.props.containerId||i.has(k.toastId)&&k.updateId==null}(u))return;const{toastId:E,updateId:R,data:g}=u,{props:x}=r,M=()=>T(E),B=R==null;B&&r.count++;const I={...x,style:x.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(u).filter(k=>{let[A,$]=k;return $!=null})),toastId:E,updateId:R,data:g,closeToast:M,isIn:!1,className:Z(u.className||x.toastClassName),bodyClassName:Z(u.bodyClassName||x.bodyClassName),progressClassName:Z(u.progressClassName||x.progressClassName),autoClose:!u.isLoading&&(D=u.autoClose,W=x.autoClose,D===!1||G(D)&&D>0?D:W),deleteToast(){const k=ue(i.get(E),"removed");i.delete(E),O.emit(4,k);const A=r.queue.length;if(r.count=E==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),A>0){const $=E==null?r.props.limit:1;if(A===1||$===1)r.displayedToast++,v();else{const P=$>A?A:$;r.displayedToast=P;for(let _=0;_<P;_++)v()}}else t()}};var D,W;I.iconOut=function(k){let{theme:A,type:$,isLoading:P,icon:_}=k,N=null;const z={theme:A,type:$};return _===!1||(j(_)?N=_(z):h.isValidElement(_)?N=h.cloneElement(_,z):q(_)||G(_)?N=_:P?N=ae.spinner():(V=>V in ae)($)&&(N=ae[$](z))),N}(I),j(u.onOpen)&&(I.onOpen=u.onOpen),j(u.onClose)&&(I.onClose=u.onClose),I.closeButton=x.closeButton,u.closeButton===!1||ie(u.closeButton)?I.closeButton=u.closeButton:u.closeButton===!0&&(I.closeButton=!ie(x.closeButton)||x.closeButton);let F=c;h.isValidElement(c)&&!q(c.type)?F=h.cloneElement(c,{closeToast:M,toastProps:I,data:g}):j(c)&&(F=c({closeToast:M,toastProps:I,data:g})),x.limit&&x.limit>0&&r.count>x.limit&&B?r.queue.push({toastContent:F,toastProps:I,staleId:l}):G(m)?setTimeout(()=>{L(F,I,l)},m):L(F,I,l)}function L(c,p,m){const{toastId:l}=p;m&&i.delete(m);const u={content:c,props:p};i.set(l,u),s(E=>[...E,l].filter(R=>R!==m)),O.emit(4,ue(u,u.props.updateId==null?"added":"updated"))}return h.useEffect(()=>(r.containerId=e.containerId,O.cancelEmit(3).on(0,f).on(1,c=>d.current&&T(c)).on(5,C).emit(2,r),()=>{i.clear(),O.emit(3,r)}),[]),h.useEffect(()=>{r.props=e,r.isToastActive=o,r.displayedToast=n.length}),{getToastToRender:function(c){const p=new Map,m=Array.from(i.values());return e.newestOnTop&&m.reverse(),m.forEach(l=>{const{position:u}=l.props;p.has(u)||p.set(u,[]),p.get(u).push(l)}),Array.from(p,l=>c(l[0],l[1]))},containerRef:d,isToastActive:o}}function pe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function me(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function it(e){const[t,n]=h.useState(!1),[s,d]=h.useState(!1),i=h.useRef(null),o=h.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=h.useRef(e),{autoClose:C,pauseOnHover:T,closeToast:v,onClick:f,closeOnClick:L}=e;function c(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",u),document.addEventListener("mouseup",E),document.addEventListener("touchmove",u),document.addEventListener("touchend",E);const x=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=x.getBoundingClientRect(),x.style.transition="",o.x=pe(g.nativeEvent),o.y=me(g.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=x.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=x.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(g){if(o.boundingRect){const{top:x,bottom:M,left:B,right:I}=o.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=B&&o.x<=I&&o.y>=x&&o.y<=M?l():m()}}function m(){n(!0)}function l(){n(!1)}function u(g){const x=i.current;o.canDrag&&x&&(o.didMove=!0,t&&l(),o.x=pe(g),o.y=me(g),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),x.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,x.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function E(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",E);const g=i.current;if(o.canDrag&&o.didMove&&g){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return d(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}h.useEffect(()=>{r.current=e}),h.useEffect(()=>(i.current&&i.current.addEventListener("d",m,{once:!0}),j(e.onOpen)&&e.onOpen(h.isValidElement(e.children)&&e.children.props),()=>{const g=r.current;j(g.onClose)&&g.onClose(h.isValidElement(g.children)&&g.children.props)}),[]),h.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||l(),window.addEventListener("focus",m),window.addEventListener("blur",l)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",l))}),[e.pauseOnFocusLoss]);const R={onMouseDown:c,onTouchStart:c,onMouseUp:p,onTouchEnd:p};return C&&T&&(R.onMouseEnter=l,R.onMouseLeave=m),L&&(R.onClick=g=>{f&&f(g),o.canCloseOnClick&&v()}),{playToast:m,pauseToast:l,isRunning:t,preventExitTransition:s,toastRef:i,eventHandlers:R}}function fe(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:d=>{d.stopPropagation(),t(d)},"aria-label":s},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function at(e){let{delay:t,isRunning:n,closeToast:s,type:d="default",hide:i,className:o,style:r,controlledProgress:C,progress:T,rtl:v,isIn:f,theme:L}=e;const c=i||C&&T===0,p={...r,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:c?0:1};C&&(p.transform=`scaleX(${T})`);const m=S("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${L}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":v}),l=j(o)?o({rtl:v,type:d,defaultClassName:m}):S(m,o);return y.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:l,style:p,[C&&T>=1?"onTransitionEnd":"onAnimationEnd"]:C&&T<1?null:()=>{f&&s()}})}const rt=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:d}=it(e),{closeButton:i,children:o,autoClose:r,onClick:C,type:T,hideProgressBar:v,closeToast:f,transition:L,position:c,className:p,style:m,bodyClassName:l,bodyStyle:u,progressClassName:E,progressStyle:R,updateId:g,role:x,progress:M,rtl:B,toastId:I,deleteToast:D,isIn:W,isLoading:F,iconOut:k,closeOnClick:A,theme:$}=e,P=S("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${T}`,{"Toastify__toast--rtl":B},{"Toastify__toast--close-on-click":A}),_=j(p)?p({rtl:B,position:c,type:T,defaultClassName:P}):S(P,p),N=!!M||!r,z={closeToast:f,type:T,theme:$};let V=null;return i===!1||(V=j(i)?i(z):h.isValidElement(i)?h.cloneElement(i,z):fe(z)),y.createElement(L,{isIn:W,done:D,position:c,preventExitTransition:n,nodeRef:s},y.createElement("div",{id:I,onClick:C,className:_,...d,style:m,ref:s},y.createElement("div",{...W&&{role:x},className:j(l)?l({type:T}):S("Toastify__toast-body",l),style:u},k!=null&&y.createElement("div",{className:S("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},k),y.createElement("div",null,o)),V,y.createElement(at,{...g&&!N?{key:`pb-${g}`}:{},rtl:B,theme:$,delay:r,isRunning:t,isIn:W,closeToast:f,hide:v,type:T,style:R,className:E,controlledProgress:N,progress:M||0})))},oe=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},lt=ne(oe("bounce",!0));ne(oe("slide",!0));ne(oe("zoom"));ne(oe("flip"));const le=h.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:s,isToastActive:d}=st(e),{className:i,style:o,rtl:r,containerId:C}=e;function T(v){const f=S("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":r});return j(i)?i({position:v,rtl:r,defaultClassName:f}):S(f,Z(i))}return h.useEffect(()=>{t&&(t.current=s.current)},[]),y.createElement("div",{ref:s,className:"Toastify",id:C},n((v,f)=>{const L=f.length?{...o}:{...o,pointerEvents:"none"};return y.createElement("div",{className:T(v),style:L,key:`container-${v}`},f.map((c,p)=>{let{content:m,props:l}=c;return y.createElement(rt,{...l,isIn:d(l.toastId),style:{...l.style,"--nth":p+1,"--len":f.length},key:`toast-${l.key}`},m)}))}))});le.displayName="ToastContainer",le.defaultProps={position:"top-right",transition:lt,autoClose:5e3,closeButton:fe,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let re,U=new Map,H=[],ct=1;function xe(){return""+ct++}function dt(e){return e&&(q(e.toastId)||G(e.toastId))?e.toastId:xe()}function Q(e,t){return U.size>0?O.emit(0,e,t):H.push({content:e,options:t}),t.toastId}function te(e,t){return{...t,type:t&&t.type||e,toastId:dt(t)}}function K(e){return(t,n)=>Q(t,te(e,n))}function b(e,t){return Q(e,te("default",t))}b.loading=(e,t)=>Q(e,te("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),b.promise=function(e,t,n){let s,{pending:d,error:i,success:o}=t;d&&(s=q(d)?b.loading(d,n):b.loading(d.render,{...n,...d}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(v,f,L)=>{if(f==null)return void b.dismiss(s);const c={type:v,...r,...n,data:L},p=q(f)?{render:f}:f;return s?b.update(s,{...c,...p}):b(p.render,{...c,...p}),L},T=j(e)?e():e;return T.then(v=>C("success",o,v)).catch(v=>C("error",i,v)),T},b.success=K("success"),b.info=K("info"),b.error=K("error"),b.warning=K("warning"),b.warn=b.warning,b.dark=(e,t)=>Q(e,te("default",{theme:"dark",...t})),b.dismiss=e=>{U.size>0?O.emit(1,e):H=H.filter(t=>e!=null&&t.options.toastId!==e)},b.clearWaitingQueue=function(e){return e===void 0&&(e={}),O.emit(5,e)},b.isActive=e=>{let t=!1;return U.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},b.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(s,d){let{containerId:i}=d;const o=U.get(i||re);return o&&o.getToast(s)}(e,t);if(n){const{props:s,content:d}=n,i={delay:100,...s,...t,toastId:t.toastId||e,updateId:xe()};i.toastId!==e&&(i.staleId=e);const o=i.render||d;delete i.render,Q(o,i)}},0)},b.done=e=>{b.update(e,{progress:1})},b.onChange=e=>(O.on(4,e),()=>{O.off(4,e)}),b.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,e=>{re=e.containerId||e,U.set(re,e),H.forEach(t=>{O.emit(0,t.content,t.options)}),H=[]}).on(3,e=>{U.delete(e.containerId||e),U.size===0&&O.off(0).off(1).off(5)});const ut={levelActivity:"1.55",age:22,sex:"female",height:165,name:"Olena",currentWeight:85,avatarUrl:null},pt=()=>{const[e,t]=h.useState(null),n=be({initialValues:ut,onSubmit:i=>{console.log("values",i),d(),b.success("Settings changed successfully")},validationSchema:nt}),s=i=>{t(i)},d=async()=>{try{if(!e)return;new FormData().append("avatarUrl",e)}catch(i){console.log("error",i)}};return a.jsxs("div",{children:[a.jsxs(Ue,{onSubmit:n.handleSubmit,children:[a.jsx(Y,{value:"name",formik:n}),a.jsxs(ee,{children:[a.jsx(J,{children:"Your photo"}),a.jsx(ze,{handleSelect:s,formik:n})]}),a.jsx(Y,{value:"age",formik:n}),a.jsxs(ee,{children:[a.jsx(J,{children:"Gender"}),a.jsx(qe,{children:tt.map(i=>a.jsx(de,{item:i,formik:n},i.id))})]}),a.jsx(Y,{value:"height",formik:n}),a.jsx(Y,{value:"currentWeight",formik:n}),a.jsxs(We,{children:[a.jsx(J,{children:"Your activity"}),a.jsx(He,{children:et.map(i=>a.jsx(de,{item:i,formik:n},i.id))})]}),a.jsxs(Ge,{children:[a.jsx(Qe,{type:"submit",children:"Submit"}),a.jsx(Ve,{type:"button",onClick:n.handleReset,children:"Cancel"})]})]}),a.jsx(le,{})]})},ft=()=>a.jsx(Ae,{children:a.jsxs(Ne,{children:[a.jsx(Me,{children:"Profile setting"}),a.jsxs(Be,{children:[a.jsx(Oe,{}),a.jsx(pt,{})]})]})});export{ft as default};
