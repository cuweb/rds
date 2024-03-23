import{R as p,r as s}from"./index-CBqU2yxZ.js";import{e as A,f as E,l as g,u as k,c as U,s as N,U as x,C as P,o as h,t as _,y as M,T as G}from"./transition-Dz28ezoH.js";import{r as K}from"./index-BtM5VmRH.js";var L;let we=(L=p.useId)!=null?L:function(){let e=A(),[t,o]=p.useState(e?()=>E.nextId():null);return g(()=>{t===null&&o(E.nextId())},[t]),t!=null?""+t:void 0};function $(e){return E.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var j=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(j||{}),B=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(B||{}),q=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(q||{});function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,o)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(o.tabIndex||Number.MAX_SAFE_INTEGER)))}var I=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(I||{});function R(e,t=0){var o;return e===((o=$(e))==null?void 0:o.body)?!1:k(t,{0(){return e.matches(b)},1(){let r=e;for(;r!==null;){if(r.matches(b))return!0;r=r.parentElement}return!1}})}function ge(e){let t=$(e);U().nextFrame(()=>{t&&!R(t.activeElement,0)&&V(e)})}var W=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(W||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function V(e){e==null||e.focus({preventScroll:!0})}let X=["textarea","input"].join(",");function z(e){var t,o;return(o=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,X))!=null?o:!1}function J(e,t=o=>o){return e.slice().sort((o,r)=>{let u=t(o),l=t(r);if(u===null||l===null)return 0;let n=u.compareDocumentPosition(l);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function be(e,t){return Q(S(),t,{relativeTo:e})}function Q(e,t,{sorted:o=!0,relativeTo:r=null,skipElements:u=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?o?J(e):e:S(e);u.length>0&&n.length>1&&(n=n.filter(v=>!u.includes(v))),r=r??l.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(r))-1;if(t&4)return Math.max(0,n.indexOf(r))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,i=n.length,m;do{if(c>=i||c+i<=0)return 0;let v=d+c;if(t&16)v=(v+i)%i;else{if(v<0)return 3;if(v>=i)return 1}m=n[v],m==null||m.focus(f),c+=a}while(m!==l.activeElement);return t&6&&z(m)&&m.select(),2}function Y(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Z(){return/Android/gi.test(window.navigator.userAgent)}function ee(){return Y()||Z()}function w(e,t,o){let r=N(t);s.useEffect(()=>{function u(l){r.current(l)}return document.addEventListener(e,u,o),()=>document.removeEventListener(e,u,o)},[e,o])}function C(e,t,o){let r=N(t);s.useEffect(()=>{function u(l){r.current(l)}return window.addEventListener(e,u,o),()=>window.removeEventListener(e,u,o)},[e,o])}function ye(e,t,o=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=o})},[o]);function u(n,a){if(!r.current||n.defaultPrevented)return;let d=a(n);if(d===null||!d.getRootNode().contains(d)||!d.isConnected)return;let f=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of f){if(c===null)continue;let i=c instanceof HTMLElement?c:c.current;if(i!=null&&i.contains(d)||n.composed&&n.composedPath().includes(i))return}return!R(d,I.Loose)&&d.tabIndex!==-1&&n.preventDefault(),t(n,d)}let l=s.useRef(null);w("pointerdown",n=>{var a,d;r.current&&(l.current=((d=(a=n.composedPath)==null?void 0:a.call(n))==null?void 0:d[0])||n.target)},!0),w("mousedown",n=>{var a,d;r.current&&(l.current=((d=(a=n.composedPath)==null?void 0:a.call(n))==null?void 0:d[0])||n.target)},!0),w("click",n=>{ee()||l.current&&(u(n,()=>l.current),l.current=null)},!0),w("touchend",n=>u(n,()=>n.target instanceof HTMLElement?n.target:null),!0),C("blur",n=>u(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function T(...e){return s.useMemo(()=>$(...e),[...e])}let te="div";var F=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(F||{});function ne(e,t){var o;let{features:r=1,...u}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(o=u["aria-hidden"])!=null?o:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P({ourProps:l,theirProps:u,slot:{},defaultTag:te,name:"Hidden"})}let D=x(ne);function Ne(e){let t=e.parentElement,o=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(o=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&re(o)?!1:r}function re(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var oe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(oe||{});function xe(e,t,o,r){let u=N(o);s.useEffect(()=>{e=e??window;function l(n){u.current(n)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function ue(e){let t=h(e),o=s.useRef(!1);s.useEffect(()=>(o.current=!1,()=>{o.current=!0,_(()=>{o.current&&t()})}),[t])}var le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(le||{});function Pe(){let e=s.useRef(0);return C("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}let H=s.createContext(!1);function ie(){return s.useContext(H)}function $e(e){return p.createElement(H.Provider,{value:e.force},e.children)}function ae(e){let t=ie(),o=s.useContext(O),r=T(e),[u,l]=s.useState(()=>{if(!t&&o!==null||E.isServer)return null;let n=r==null?void 0:r.getElementById("headlessui-portal-root");if(n)return n;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{u!==null&&(r!=null&&r.body.contains(u)||r==null||r.body.appendChild(u))},[u,r]),s.useEffect(()=>{t||o!==null&&l(o.current)},[o,l,t]),u}let se=s.Fragment;function ce(e,t){let o=e,r=s.useRef(null),u=M(G(c=>{r.current=c}),t),l=T(r),n=ae(r),[a]=s.useState(()=>{var c;return E.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),d=s.useContext(y),f=A();return g(()=>{!n||!a||n.contains(a)||(a.setAttribute("data-headlessui-portal",""),n.appendChild(a))},[n,a]),g(()=>{if(a&&d)return d.register(a)},[d,a]),ue(()=>{var c;!n||!a||(a instanceof Node&&n.contains(a)&&n.removeChild(a),n.childNodes.length<=0&&((c=n.parentElement)==null||c.removeChild(n)))}),f?!n||!a?null:K.createPortal(P({ourProps:{ref:u},theirProps:o,defaultTag:se,name:"Portal"}),a):null}let de=s.Fragment,O=s.createContext(null);function fe(e,t){let{target:o,...r}=e,u={ref:M(t)};return p.createElement(O.Provider,{value:o},P({ourProps:u,theirProps:r,defaultTag:de,name:"Popover.Group"}))}let y=s.createContext(null);function Te(){let e=s.useContext(y),t=s.useRef([]),o=h(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=h(l=>{let n=t.current.indexOf(l);n!==-1&&t.current.splice(n,1),e&&e.unregister(l)}),u=s.useMemo(()=>({register:o,unregister:r,portals:t}),[o,r,t]);return[t,s.useMemo(()=>function({children:l}){return p.createElement(y.Provider,{value:u},l)},[u])]}let me=x(ce),ve=x(fe),Fe=Object.assign(me,{Group:ve});function Le({defaultContainers:e=[],portals:t,mainTreeNodeRef:o}={}){var r;let u=s.useRef((r=o==null?void 0:o.current)!=null?r:null),l=T(u),n=h(()=>{var a,d,f;let c=[];for(let i of e)i!==null&&(i instanceof HTMLElement?c.push(i):"current"in i&&i.current instanceof HTMLElement&&c.push(i.current));if(t!=null&&t.current)for(let i of t.current)c.push(i);for(let i of(a=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?a:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(u.current)||i.contains((f=(d=u.current)==null?void 0:d.getRootNode())==null?void 0:f.host)||c.some(m=>i.contains(m))||c.push(i));return c});return{resolveContainers:n,contains:h(a=>n().some(d=>d.contains(a))),mainTreeNodeRef:u,MainTreeNode:s.useMemo(()=>function(){return o!=null?null:p.createElement(D,{features:F.Hidden,ref:u})},[u,o])}}function Ae(){let e=s.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:s.useMemo(()=>function(){return p.createElement(D,{features:F.Hidden,ref:e})},[e])}}export{ge as D,xe as E,we as I,j as M,Le as N,Q as O,I as T,be as _,Pe as a,D as b,Ae as c,$ as d,Te as e,S as f,le as g,R as h,B as i,J as j,ee as k,V as l,ue as m,T as n,oe as o,$e as p,Fe as q,Ne as r,F as s,Y as t,ye as y};