import{R as P,r as a}from"./index-uCp2LrAq.js";import{c as Ce,p as Ve,o as T,I as j,H as U,n as W,u as Q,a as Ie,e as ae,t as it,y as G,T as Ge,l as st,O as ve,s as ct,d as ne,D as Pe,b as je,U as dt,m as ft}from"./transition-ChRaRCo8.js";import{u as pt,o as vt,s as mt,f as bt,i as gt,a as ht,b as Et,c as $t,d as yt}from"./floating-ui.react-CpO1n0Ka.js";import{r as wt}from"./index-BOkhicXD.js";const Ue=typeof document<"u"?P.useLayoutEffect:()=>{};function Pt(e){const t=a.useRef(null);return Ue(()=>{t.current=e},[e]),a.useCallback((...n)=>{const r=t.current;return r==null?void 0:r(...n)},[])}const se=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},Z=e=>e&&"window"in e&&e.window===e?e:se(e).defaultView||window;function Tt(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function St(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Ft(){return St(/^Mac/i)}function xt(){return Tt(/Android/i)}function Mt(e){return e.mozInputSource===0&&e.isTrusted?!0:xt()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class Lt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function qe(e){let t=a.useRef({isFocused:!1,observer:null});Ue(()=>{const r=t.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let n=Pt(r=>{e==null||e(r)});return a.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=r.target,u=i=>{t.current.isFocused=!1,o.disabled&&n(new Lt("blur",i)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",u,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var i;(i=t.current.observer)===null||i===void 0||i.disconnect();let l=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:l})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:l}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function Ct(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const u=a.useCallback(s=>{if(s.target===s.currentTarget)return r&&r(s),o&&o(!1),!0},[r,o]),i=qe(u),l=a.useCallback(s=>{const c=se(s.target);s.target===s.currentTarget&&c.activeElement===s.target&&(n&&n(s),o&&o(!0),i(s))},[o,n,i]);return{focusProps:{onFocus:!t&&(n||o||r)?l:void 0,onBlur:!t&&(r||o)?u:void 0}}}let ce=null,Te=new Set,ue=new Map,te=!1,Se=!1;const It={Tab:!0,Escape:!0};function He(e,t){for(let n of Te)n(e,t)}function Ht(e){return!(e.metaKey||!Ft()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function me(e){te=!0,Ht(e)&&(ce="keyboard",He("keyboard",e))}function B(e){ce="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(te=!0,He("pointer",e))}function Ye(e){Mt(e)&&(te=!0,ce="virtual")}function Xe(e){e.target===window||e.target===document||(!te&&!Se&&(ce="virtual",He("virtual",e)),te=!1,Se=!1)}function Je(){te=!1,Se=!0}function Fe(e){if(typeof window>"u"||ue.get(Z(e)))return;const t=Z(e),n=se(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){te=!0,r.apply(this,arguments)},n.addEventListener("keydown",me,!0),n.addEventListener("keyup",me,!0),n.addEventListener("click",Ye,!0),t.addEventListener("focus",Xe,!0),t.addEventListener("blur",Je,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",B,!0),n.addEventListener("pointermove",B,!0),n.addEventListener("pointerup",B,!0)):(n.addEventListener("mousedown",B,!0),n.addEventListener("mousemove",B,!0),n.addEventListener("mouseup",B,!0)),t.addEventListener("beforeunload",()=>{ze(e)},{once:!0}),ue.set(t,{focus:r})}const ze=(e,t)=>{const n=Z(e),r=se(e);t&&r.removeEventListener("DOMContentLoaded",t),ue.has(n)&&(n.HTMLElement.prototype.focus=ue.get(n).focus,r.removeEventListener("keydown",me,!0),r.removeEventListener("keyup",me,!0),r.removeEventListener("click",Ye,!0),n.removeEventListener("focus",Xe,!0),n.removeEventListener("blur",Je,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",B,!0),r.removeEventListener("pointermove",B,!0),r.removeEventListener("pointerup",B,!0)):(r.removeEventListener("mousedown",B,!0),r.removeEventListener("mousemove",B,!0),r.removeEventListener("mouseup",B,!0)),ue.delete(n))};function Rt(e){const t=se(e);let n;return t.readyState!=="loading"?Fe(e):(n=()=>{Fe(e)},t.addEventListener("DOMContentLoaded",n)),()=>ze(e,n)}typeof document<"u"&&Rt();function Qe(){return ce!=="pointer"}const Ot=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Nt(e,t,n){var r;const o=typeof window<"u"?Z(n==null?void 0:n.target).HTMLInputElement:HTMLInputElement,u=typeof window<"u"?Z(n==null?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,i=typeof window<"u"?Z(n==null?void 0:n.target).HTMLElement:HTMLElement,l=typeof window<"u"?Z(n==null?void 0:n.target).KeyboardEvent:KeyboardEvent;return e=e||(n==null?void 0:n.target)instanceof o&&!Ot.has(n==null||(r=n.target)===null||r===void 0?void 0:r.type)||(n==null?void 0:n.target)instanceof u||(n==null?void 0:n.target)instanceof i&&(n==null?void 0:n.target.isContentEditable),!(e&&t==="keyboard"&&n instanceof l&&!It[n.key])}function kt(e,t,n){Fe(),a.useEffect(()=>{let r=(o,u)=>{Nt(!!(n!=null&&n.isTextInput),o,u)&&e(Qe())};return Te.add(r),()=>{Te.delete(r)}},t)}function At(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,u=a.useRef({isFocusWithin:!1}),i=a.useCallback(c=>{u.current.isFocusWithin&&!c.currentTarget.contains(c.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(c),o&&o(!1))},[n,o,u]),l=qe(i),s=a.useCallback(c=>{!u.current.isFocusWithin&&document.activeElement===c.target&&(r&&r(c),o&&o(!0),u.current.isFocusWithin=!0,l(c))},[r,o,l]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:s,onBlur:i}}}let be=!1,ye=0;function xe(){be=!0,setTimeout(()=>{be=!1},50)}function Be(e){e.pointerType==="touch"&&xe()}function Dt(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",Be):document.addEventListener("touchend",xe),ye++,()=>{ye--,!(ye>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Be):document.removeEventListener("touchend",xe))}}function Bt(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[u,i]=a.useState(!1),l=a.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;a.useEffect(Dt,[]);let{hoverProps:s,triggerHoverEnd:c}=a.useMemo(()=>{let d=(p,h)=>{if(l.pointerType=h,o||h==="touch"||l.isHovered||!p.currentTarget.contains(p.target))return;l.isHovered=!0;let g=p.currentTarget;l.target=g,t&&t({type:"hoverstart",target:g,pointerType:h}),n&&n(!0),i(!0)},f=(p,h)=>{if(l.pointerType="",l.target=null,h==="touch"||!l.isHovered)return;l.isHovered=!1;let g=p.currentTarget;r&&r({type:"hoverend",target:g,pointerType:h}),n&&n(!1),i(!1)},b={};return typeof PointerEvent<"u"?(b.onPointerEnter=p=>{be&&p.pointerType==="mouse"||d(p,p.pointerType)},b.onPointerLeave=p=>{!o&&p.currentTarget.contains(p.target)&&f(p,p.pointerType)}):(b.onTouchStart=()=>{l.ignoreEmulatedMouseEvents=!0},b.onMouseEnter=p=>{!l.ignoreEmulatedMouseEvents&&!be&&d(p,"mouse"),l.ignoreEmulatedMouseEvents=!1},b.onMouseLeave=p=>{!o&&p.currentTarget.contains(p.target)&&f(p,"mouse")}),{hoverProps:b,triggerHoverEnd:f}},[t,n,r,o,l]);return a.useEffect(()=>{o&&c({currentTarget:l.target},l.pointerType)},[o]),{hoverProps:s,isHovered:u}}function _t(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,o=a.useRef({isFocused:!1,isFocusVisible:t||Qe()}),[u,i]=a.useState(!1),[l,s]=a.useState(()=>o.current.isFocused&&o.current.isFocusVisible),c=a.useCallback(()=>s(o.current.isFocused&&o.current.isFocusVisible),[]),d=a.useCallback(p=>{o.current.isFocused=p,i(p),c()},[c]);kt(p=>{o.current.isFocusVisible=p,c()},[],{isTextInput:n});let{focusProps:f}=Ct({isDisabled:r,onFocusChange:d}),{focusWithinProps:b}=At({isDisabled:!r,onFocusWithinChange:d});return{isFocused:u,isFocusVisible:l,focusProps:r?b:f}}function de(e){return Ce.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Wt(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function Kt(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function Vt({disabled:e=!1}={}){let t=a.useRef(null),[n,r]=a.useState(!1),o=Ve(),u=T(()=>{t.current=null,r(!1),o.dispose()}),i=T(l=>{if(o.dispose(),t.current===null){t.current=l.currentTarget,r(!0);{let s=de(l.currentTarget);o.addEventListener(s,"pointerup",u,!1),o.addEventListener(s,"pointermove",c=>{if(t.current){let d=Wt(c);r(Kt(d,t.current.getBoundingClientRect()))}},!1),o.addEventListener(s,"pointercancel",u,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:i,onPointerUp:u,onClick:u}}}let Gt="div";var re=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(re||{});function jt(e,t){var n;let{features:r=1,...o}=e,u={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return U({ourProps:u,theirProps:o,slot:{},defaultTag:Gt,name:"Hidden"})}let ie=j(jt);function Ze(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Ut(n)?!1:r}function Ut(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var J=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(J||{});let qt=a.createContext(()=>{});function Yt({value:e,children:t}){return P.createElement(qt.Provider,{value:e},t)}function Xt(e){if(e===null)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function Jt(e,t=!1){let n=e===null?null:"current"in e?e.current:e,[r,o]=a.useReducer(()=>({}),{}),u=a.useMemo(()=>Xt(n),[n,r]);return W(()=>{if(!n)return;let i=new ResizeObserver(o);return i.observe(n),()=>{i.disconnect()}},[n]),t?{width:`${u.width}px`,height:`${u.height}px`}:u}let Me=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),zt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var K=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(K||{}),ge=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ge||{}),Qt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Qt||{});function fe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Me)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function Zt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(zt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Re||{});function Oe(e,t=0){var n;return e===((n=de(e))==null?void 0:n.body)?!1:Q(t,{0(){return e.matches(Me)},1(){let r=e;for(;r!==null;){if(r.matches(Me))return!0;r=r.parentElement}return!1}})}function dr(e){let t=de(e);Ie().nextFrame(()=>{t&&!Oe(t.activeElement,0)&&tn(e)})}var en=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(en||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function tn(e){e==null||e.focus({preventScroll:!0})}let nn=["textarea","input"].join(",");function rn(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,nn))!=null?n:!1}function on(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),u=t(r);if(o===null||u===null)return 0;let i=o.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function fr(e,t){return z(fe(),t,{relativeTo:e})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?on(e):e:t&64?Zt(e):fe(e);o.length>0&&i.length>1&&(i=i.filter(p=>!o.some(h=>h!=null&&"current"in h?(h==null?void 0:h.current)===p:h===p))),r=r??u.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,f=i.length,b;do{if(d>=f||d+f<=0)return 0;let p=s+d;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}b=i[p],b==null||b.focus(c),d+=l}while(b!==u.activeElement);return t&6&&rn(b)&&b.select(),2}function et(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ln(){return/Android/gi.test(window.navigator.userAgent)}function un(){return et()||ln()}function pe(e,t,n){let r=ae(t);a.useEffect(()=>{function o(u){r.current(u)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function tt(e,t,n){let r=ae(t);a.useEffect(()=>{function o(u){r.current(u)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function an(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(i,l){if(!r.current||i.defaultPrevented)return;let s=l(i);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of c){if(d===null)continue;let f=d instanceof HTMLElement?d:d.current;if(f!=null&&f.contains(s)||i.composed&&i.composedPath().includes(f))return}return!Oe(s,Re.Loose)&&s.tabIndex!==-1&&i.preventDefault(),t(i,s)}let u=a.useRef(null);pe("pointerdown",i=>{var l,s;r.current&&(u.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),pe("mousedown",i=>{var l,s;r.current&&(u.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),pe("click",i=>{un()||u.current&&(o(i,()=>u.current),u.current=null)},!0),pe("touchend",i=>o(i,()=>i.target instanceof HTMLElement?i.target:null),!0),tt("blur",i=>o(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function oe(...e){return a.useMemo(()=>de(...e),[...e])}function sn(e,t,n,r){let o=ae(n);a.useEffect(()=>{e=e??window;function u(i){o.current(i)}return e.addEventListener(t,u,r),()=>e.removeEventListener(t,u,r)},[e,t,r])}function _e(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function cn(e,t){let[n,r]=a.useState(()=>_e(e));return W(()=>{r(_e(e))},[e.type,e.as]),W(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}function dn(e){return a.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}function fn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...u){let i=t[o].call(n,...u);i&&(n=i,r.forEach(l=>l()))}}}function pn(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),u=Math.max(0,e-o);n.style(r,"paddingRight",`${u}px`)}}}function vn(){return et()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(u=>u()).some(u=>u.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let l=Ie();l.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>l.dispose()))}let u=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",l=>{if(l.target instanceof HTMLElement)try{let s=l.target.closest("a");if(!s)return;let{hash:c}=new URL(s.href),d=e.querySelector(c);d&&!r(d)&&(i=d)}catch{}},!0),t.addEventListener(e,"touchstart",l=>{if(l.target instanceof HTMLElement)if(r(l.target)){let s=l.target;for(;s.parentElement&&r(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(l.target,"touchAction","none")}),t.addEventListener(e,"touchmove",l=>{if(l.target instanceof HTMLElement){if(l.target.tagName==="INPUT")return;if(r(l.target)){let s=l.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&l.preventDefault()}else l.preventDefault()}},{passive:!1}),t.add(()=>{var l;let s=(l=window.scrollY)!=null?l:window.pageYOffset;u!==s&&window.scrollTo(0,u),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function mn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function bn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let ee=fn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ie(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:bn(n)},o=[vn(),pn(),mn()];o.forEach(({before:u})=>u==null?void 0:u(r)),o.forEach(({after:u})=>u==null?void 0:u(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});ee.subscribe(()=>{let e=ee.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&ee.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&ee.dispatch("TEARDOWN",n)}});function gn(e,t,n=()=>({containers:[]})){let r=dn(ee),o=e?r.get(e):void 0,u=o?o.count>0:!1;return W(()=>{if(!(!e||!t))return ee.dispatch("PUSH",e,n),()=>ee.dispatch("POP",e,n)},[t,e]),u}function hn(e,t,n=()=>[document.body]){gn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}let le=a.createContext({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});le.displayName="FloatingContext";let Ne=a.createContext(null);Ne.displayName="PlacementContext";function En(e){return a.useMemo(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function $n(){return a.useContext(le).setReference}function pr(){return a.useContext(le).getReferenceProps}function yn(){let{getFloatingProps:e,slot:t}=a.useContext(le);return a.useCallback((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function wn(e=null){e===!1&&(e=null),typeof e=="string"&&(e={to:e});let t=a.useContext(Ne),n=a.useMemo(()=>e,[JSON.stringify(e,typeof HTMLElement<"u"?(o,u)=>u instanceof HTMLElement?u.outerHTML:u:void 0)]);W(()=>{t==null||t(n??null)},[t,n]);let r=a.useContext(le);return a.useMemo(()=>[r.setFloating,e?r.styles:{}],[r.setFloating,e,r.styles])}let We=4;function Pn({children:e,enabled:t=!0}){let[n,r]=a.useState(null),[o,u]=a.useState(0),i=a.useRef(null),[l,s]=a.useState(null);Tn(l);let c=t&&n!==null&&l!==null,{to:d="bottom",gap:f=0,offset:b=0,padding:p=0,inner:h}=Sn(n,l),[g,E="center"]=d.split(" ");W(()=>{c&&u(0)},[c]);let{refs:F,floatingStyles:x,context:M}=pt({open:c,placement:g==="selection"?E==="center"?"bottom":`bottom-${E}`:E==="center"?`${g}`:`${g}-${E}`,strategy:"absolute",transform:!1,middleware:[vt({mainAxis:g==="selection"?0:f,crossAxis:b}),mt({padding:p}),g!=="selection"&&bt({padding:p}),g==="selection"&&h?gt({...h,padding:p,overflowRef:i,offset:o,minItemsVisible:We,referenceOverflowThreshold:p,onFallbackChange(A){var N,L;if(!A)return;let _=M.elements.floating;if(!_)return;let y=parseFloat(getComputedStyle(_).scrollPaddingBottom)||0,C=Math.min(We,_.childElementCount),v=0,S=0;for(let m of(L=(N=M.elements.floating)==null?void 0:N.childNodes)!=null?L:[])if(m instanceof HTMLElement){let $=m.offsetTop,w=$+m.clientHeight+y,I=_.scrollTop,D=I+_.clientHeight;if($>=I&&w<=D)C--;else{S=Math.max(0,Math.min(w,D)-Math.max($,I)),v=m.clientHeight;break}}C>=1&&u(m=>{let $=v*C-S+y;return m>=$?m:$})}}):null,ht({padding:p,apply({availableWidth:A,availableHeight:N,elements:L}){Object.assign(L.floating.style,{overflow:"auto",maxWidth:`${A}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${N}px)`})}})].filter(Boolean),whileElementsMounted:Et}),[k=g,H=E]=M.placement.split("-");g==="selection"&&(k="selection");let q=a.useMemo(()=>({anchor:[k,H].filter(Boolean).join(" ")}),[k,H]),O=$t(M,{overflowRef:i,onChange:u}),{getReferenceProps:R,getFloatingProps:Y}=yt([O]),X=T(A=>{s(A),F.setFloating(A)});return a.createElement(Ne.Provider,{value:r},a.createElement(le.Provider,{value:{setFloating:X,setReference:F.setReference,styles:x,getReferenceProps:R,getFloatingProps:Y,slot:q}},e))}function Tn(e){W(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=e.style.maxHeight;parseFloat(n)!==parseInt(n)&&(e.style.maxHeight=`${Math.ceil(parseFloat(n))}px`)});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])}function Sn(e,t){var n,r,o;let u=we((n=e==null?void 0:e.gap)!=null?n:"var(--anchor-gap, 0)",t),i=we((r=e==null?void 0:e.offset)!=null?r:"var(--anchor-offset, 0)",t),l=we((o=e==null?void 0:e.padding)!=null?o:"var(--anchor-padding, 0)",t);return{...e,gap:u,offset:i,padding:l}}function we(e,t,n=void 0){let r=Ve(),o=T((s,c)=>{if(s==null)return[n,null];if(typeof s=="number")return[s,null];if(typeof s=="string"){if(!c)return[n,null];let d=Ke(s,c);return[d,f=>{let b=nt(s);{let p=b.map(h=>window.getComputedStyle(c).getPropertyValue(h));r.requestAnimationFrame(function h(){r.nextFrame(h);let g=!1;for(let[F,x]of b.entries()){let M=window.getComputedStyle(c).getPropertyValue(x);if(p[F]!==M){p[F]=M,g=!0;break}}if(!g)return;let E=Ke(s,c);d!==E&&(f(E),d=E)})}return r.dispose}]}return[n,null]}),u=a.useMemo(()=>o(e,t)[0],[e,t]),[i=u,l]=a.useState();return W(()=>{let[s,c]=o(e,t);if(l(s),!!c)return c(l)},[e,t]),i}function nt(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return[t[1]];let r=t[1].slice(0,n).trim(),o=t[1].slice(n+1).trim();return o?[r,...nt(o)]:[r]}return[]}function Ke(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}function Fn(e){let t=T(e),n=a.useRef(!1);a.useEffect(()=>(n.current=!1,()=>{n.current=!0,it(()=>{n.current&&t()})}),[t])}let rt=a.createContext(!1);function xn(){return a.useContext(rt)}function vr(e){return P.createElement(rt.Provider,{value:e.force},e.children)}function Mn(e){let t=xn(),n=a.useContext(lt),r=oe(e),[o,u]=a.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(Ce.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let s=r.createElement("div");return s.setAttribute("id","headlessui-portal-root"),r.body.appendChild(s)});return a.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),a.useEffect(()=>{t||n!==null&&u(n.current)},[n,u,t]),o}let ot=a.Fragment,Ln=j(function(e,t){let n=e,r=a.useRef(null),o=G(Ge(d=>{r.current=d}),t),u=oe(r),i=Mn(r),[l]=a.useState(()=>{var d;return Ce.isServer?null:(d=u==null?void 0:u.createElement("div"))!=null?d:null}),s=a.useContext(Le),c=st();return W(()=>{!i||!l||i.contains(l)||(l.setAttribute("data-headlessui-portal",""),i.appendChild(l))},[i,l]),W(()=>{if(l&&s)return s.register(l)},[s,l]),Fn(()=>{var d;!i||!l||(l instanceof Node&&i.contains(l)&&i.removeChild(l),i.childNodes.length<=0&&((d=i.parentElement)==null||d.removeChild(i)))}),c?!i||!l?null:wt.createPortal(U({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:ot,name:"Portal"}),l):null});function Cn(e,t){let n=G(t),{enabled:r=!0,...o}=e;return r?P.createElement(Ln,{...o,ref:n}):U({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:ot,name:"Portal"})}let In=a.Fragment,lt=a.createContext(null);function Hn(e,t){let{target:n,...r}=e,o={ref:G(t)};return P.createElement(lt.Provider,{value:n},U({ourProps:o,theirProps:r,defaultTag:In,name:"Popover.Group"}))}let Le=a.createContext(null);function Rn(){let e=a.useContext(Le),t=a.useRef([]),n=T(u=>(t.current.push(u),e&&e.register(u),()=>r(u))),r=T(u=>{let i=t.current.indexOf(u);i!==-1&&t.current.splice(i,1),e&&e.unregister(u)}),o=a.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,a.useMemo(()=>function({children:u}){return P.createElement(Le.Provider,{value:o},u)},[o])]}let On=j(Cn),Nn=j(Hn),kn=Object.assign(On,{Group:Nn});function An({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=a.useRef((r=n==null?void 0:n.current)!=null?r:null),u=oe(o),i=T(()=>{var l,s,c;let d=[];for(let f of e)f!==null&&(f instanceof HTMLElement?d.push(f):"current"in f&&f.current instanceof HTMLElement&&d.push(f.current));if(t!=null&&t.current)for(let f of t.current)d.push(f);for(let f of(l=u==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?l:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((c=(s=o.current)==null?void 0:s.getRootNode())==null?void 0:c.host)||d.some(b=>f.contains(b))||d.push(f));return d});return{resolveContainers:i,contains:T(l=>i().some(s=>s.contains(l))),mainTreeNodeRef:o,MainTreeNode:a.useMemo(()=>function(){return n!=null?null:P.createElement(ie,{features:re.Hidden,ref:o})},[o,n])}}function Dn(){let e=a.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:a.useMemo(()=>function(){return P.createElement(ie,{features:re.Hidden,ref:e})},[e])}}var V=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(V||{});function ut(){let e=a.useRef(0);return tt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}var Bn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Bn||{}),_n=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(_n||{});let Wn={0:e=>({...e,popoverState:Q(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},ke=a.createContext(null);ke.displayName="PopoverContext";function he(e){let t=a.useContext(ke);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,he),n}return t}let Ee=a.createContext(null);Ee.displayName="PopoverAPIContext";function Ae(e){let t=a.useContext(Ee);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ae),n}return t}let De=a.createContext(null);De.displayName="PopoverGroupContext";function at(){return a.useContext(De)}let $e=a.createContext(null);$e.displayName="PopoverPanelContext";function Kn(){return a.useContext($e)}function Vn(e,t){return Q(t.type,Wn,e,t)}let Gn="div";function jn(e,t){var n;let{__demoMode:r=!1,...o}=e,u=a.useRef(null),i=G(t,Ge(v=>{u.current=v})),l=a.useRef([]),s=a.useReducer(Vn,{__demoMode:r,popoverState:r?0:1,buttons:l,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:a.createRef(),afterPanelSentinel:a.createRef(),afterButtonSentinel:a.createRef()}),[{popoverState:c,button:d,buttonId:f,panel:b,panelId:p,beforePanelSentinel:h,afterPanelSentinel:g,afterButtonSentinel:E},F]=s,x=oe((n=u.current)!=null?n:d),M=a.useMemo(()=>{if(!d||!b)return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(d))^Number(D==null?void 0:D.contains(b)))return!0;let v=fe(),S=v.indexOf(d),m=(S+v.length-1)%v.length,$=(S+1)%v.length,w=v[m],I=v[$];return!b.contains(w)&&!b.contains(I)},[d,b]),k=ae(f),H=ae(p),q=a.useMemo(()=>({buttonId:k,panelId:H,close:()=>F({type:1})}),[k,H,F]),O=at(),R=O==null?void 0:O.registerPopover,Y=T(()=>{var v;return(v=O==null?void 0:O.isFocusWithinPopoverGroup())!=null?v:(x==null?void 0:x.activeElement)&&((d==null?void 0:d.contains(x.activeElement))||(b==null?void 0:b.contains(x.activeElement)))});a.useEffect(()=>R==null?void 0:R(q),[R,q]);let[X,A]=Rn(),N=An({mainTreeNodeRef:O==null?void 0:O.mainTreeNodeRef,portals:X,defaultContainers:[d,b]});sn(x==null?void 0:x.defaultView,"focus",v=>{var S,m,$,w,I,D;v.target!==window&&v.target instanceof HTMLElement&&c===0&&(Y()||d&&b&&(N.contains(v.target)||(m=(S=h.current)==null?void 0:S.contains)!=null&&m.call(S,v.target)||(w=($=g.current)==null?void 0:$.contains)!=null&&w.call($,v.target)||(D=(I=E.current)==null?void 0:I.contains)!=null&&D.call(I,v.target)||F({type:1})))},!0),an(N.resolveContainers,(v,S)=>{F({type:1}),Oe(S,Re.Loose)||(v.preventDefault(),d==null||d.focus())},c===0);let L=T(v=>{F({type:1});let S=v?v instanceof HTMLElement?v:"current"in v&&v.current instanceof HTMLElement?v.current:d:d;S==null||S.focus()}),_=a.useMemo(()=>({close:L,isPortalled:M}),[L,M]),y=a.useMemo(()=>({open:c===0,close:L}),[c,L]),C={ref:i};return P.createElement(Pn,null,P.createElement($e.Provider,{value:null},P.createElement(ke.Provider,{value:s},P.createElement(Ee.Provider,{value:_},P.createElement(Yt,{value:L},P.createElement(ct,{value:Q(c,{0:ne.Open,1:ne.Closed})},P.createElement(A,null,U({ourProps:C,theirProps:o,slot:y,defaultTag:Gn,name:"Popover"}),P.createElement(N.MainTreeNode,null))))))))}let Un="button";function qn(e,t){let n=a.useId(),{id:r=`headlessui-popover-button-${n}`,disabled:o=!1,autoFocus:u=!1,...i}=e,[l,s]=he("Popover.Button"),{isPortalled:c}=Ae("Popover.Button"),d=a.useRef(null),f=`headlessui-focus-sentinel-${a.useId()}`,b=at(),p=b==null?void 0:b.closeOthers,h=Kn()!==null;a.useEffect(()=>{if(!h)return s({type:3,buttonId:r}),()=>{s({type:3,buttonId:null})}},[h,r,s]);let[g]=a.useState(()=>Symbol()),E=G(d,t,$n(),h?null:m=>{if(m)l.buttons.current.push(g);else{let $=l.buttons.current.indexOf(g);$!==-1&&l.buttons.current.splice($,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),m&&s({type:2,button:m})}),F=G(d,t),x=oe(d),M=T(m=>{var $,w,I;if(h){if(l.popoverState===1)return;switch(m.key){case J.Space:case J.Enter:m.preventDefault(),(w=($=m.target).click)==null||w.call($),s({type:1}),(I=l.button)==null||I.focus();break}}else switch(m.key){case J.Space:case J.Enter:m.preventDefault(),m.stopPropagation(),l.popoverState===1&&(p==null||p(l.buttonId)),s({type:0});break;case J.Escape:if(l.popoverState!==0)return p==null?void 0:p(l.buttonId);if(!d.current||x!=null&&x.activeElement&&!d.current.contains(x.activeElement))return;m.preventDefault(),m.stopPropagation(),s({type:1});break}}),k=T(m=>{h||m.key===J.Space&&m.preventDefault()}),H=T(m=>{var $,w;Ze(m.currentTarget)||o||(h?(s({type:1}),($=l.button)==null||$.focus()):(m.preventDefault(),m.stopPropagation(),l.popoverState===1&&(p==null||p(l.buttonId)),s({type:0}),(w=l.button)==null||w.focus()))}),q=T(m=>{m.preventDefault(),m.stopPropagation()}),{isFocusVisible:O,focusProps:R}=_t({autoFocus:u}),{isHovered:Y,hoverProps:X}=Bt({isDisabled:o}),{pressed:A,pressProps:N}=Vt({disabled:o}),L=l.popoverState===0,_=a.useMemo(()=>({open:L,active:A||L,disabled:o,hover:Y,focus:O,autofocus:u}),[L,Y,O,A,o,u]),y=cn(e,d),C=h?Pe({ref:F,type:y,onKeyDown:M,onClick:H,disabled:o||void 0,autoFocus:u},R,X,N):Pe({ref:E,id:l.buttonId,type:y,"aria-expanded":l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,disabled:o||void 0,autoFocus:u,onKeyDown:M,onKeyUp:k,onClick:H,onMouseDown:q},R,X,N),v=ut(),S=T(()=>{let m=l.panel;if(!m)return;function $(){Q(v.current,{[V.Forwards]:()=>z(m,K.First),[V.Backwards]:()=>z(m,K.Last)})===ge.Error&&z(fe().filter(w=>w.dataset.headlessuiFocusGuard!=="true"),Q(v.current,{[V.Forwards]:K.Next,[V.Backwards]:K.Previous}),{relativeTo:l.button})}$()});return P.createElement(P.Fragment,null,U({ourProps:C,theirProps:i,slot:_,defaultTag:Un,name:"Popover.Button"}),L&&!h&&c&&P.createElement(ie,{id:f,ref:l.afterButtonSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}))}let Yn="div",Xn=ve.RenderStrategy|ve.Static;function Jn(e,t){let n=a.useId(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:u},i]=he("Popover.Overlay"),l=G(t),s=je(),c=s!==null?(s&ne.Open)===ne.Open:u===0,d=T(b=>{if(Ze(b.currentTarget))return b.preventDefault();i({type:1})}),f=a.useMemo(()=>({open:u===0}),[u]);return U({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:d},theirProps:o,slot:f,defaultTag:Yn,features:Xn,visible:c,name:"Popover.Overlay"})}let zn="div",Qn=ve.RenderStrategy|ve.Static;function Zn(e,t){let n=a.useId(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,anchor:u,portal:i=!1,modal:l=!1,...s}=e,[c,d]=he("Popover.Panel"),{close:f,isPortalled:b}=Ae("Popover.Panel"),p=`headlessui-focus-sentinel-before-${n}`,h=`headlessui-focus-sentinel-after-${n}`,g=a.useRef(null),E=En(u),[F,x]=wn(E),M=yn();E&&(i=!0);let k=G(g,t,E?F:null,y=>{d({type:4,panel:y})}),H=oe(g),q=dt();W(()=>(d({type:5,panelId:r}),()=>{d({type:5,panelId:null})}),[r,d]);let O=je(),R=O!==null?(O&ne.Open)===ne.Open:c.popoverState===0;ft(c.button,()=>d({type:1}),R),hn(H,c.__demoMode?!1:l&&R);let Y=T(y=>{var C;switch(y.key){case J.Escape:if(c.popoverState!==0||!g.current||H!=null&&H.activeElement&&!g.current.contains(H.activeElement))return;y.preventDefault(),y.stopPropagation(),d({type:1}),(C=c.button)==null||C.focus();break}});a.useEffect(()=>{var y;e.static||c.popoverState===1&&((y=e.unmount)==null||y)&&d({type:4,panel:null})},[c.popoverState,e.unmount,e.static,d]),a.useEffect(()=>{if(c.__demoMode||!o||c.popoverState!==0||!g.current)return;let y=H==null?void 0:H.activeElement;g.current.contains(y)||z(g.current,K.First)},[c.__demoMode,o,g,c.popoverState]);let X=a.useMemo(()=>({open:c.popoverState===0,close:f}),[c,f]),A=Pe(E?M():{},{ref:k,id:r,onKeyDown:Y,onBlur:o&&c.popoverState===0?y=>{var C,v,S,m,$;let w=y.relatedTarget;w&&g.current&&((C=g.current)!=null&&C.contains(w)||(d({type:1}),((S=(v=c.beforePanelSentinel.current)==null?void 0:v.contains)!=null&&S.call(v,w)||($=(m=c.afterPanelSentinel.current)==null?void 0:m.contains)!=null&&$.call(m,w))&&w.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...x,"--button-width":Jt(c.button,!0).width}}),N=ut(),L=T(()=>{let y=g.current;if(!y)return;function C(){Q(N.current,{[V.Forwards]:()=>{var v;z(y,K.First)===ge.Error&&((v=c.afterPanelSentinel.current)==null||v.focus())},[V.Backwards]:()=>{var v;(v=c.button)==null||v.focus({preventScroll:!0})}})}C()}),_=T(()=>{let y=g.current;if(!y)return;function C(){Q(N.current,{[V.Forwards]:()=>{var v;if(!c.button)return;let S=fe(),m=S.indexOf(c.button),$=S.slice(0,m+1),w=[...S.slice(m+1),...$];for(let I of w.slice())if(I.dataset.headlessuiFocusGuard==="true"||(v=c.panel)!=null&&v.contains(I)){let D=w.indexOf(I);D!==-1&&w.splice(D,1)}z(w,K.First,{sorted:!1})},[V.Backwards]:()=>{var v;z(y,K.Previous)===ge.Error&&((v=c.button)==null||v.focus())}})}C()});return P.createElement($e.Provider,{value:r},P.createElement(Ee.Provider,{value:{close:f,isPortalled:b}},P.createElement(kn,{enabled:i?e.static||R:!1},R&&b&&P.createElement(ie,{id:p,ref:c.beforePanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:L}),U({mergeRefs:q,ourProps:A,theirProps:s,slot:X,defaultTag:zn,features:Qn,visible:R,name:"Popover.Panel"}),R&&b&&P.createElement(ie,{id:h,ref:c.afterPanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}))))}let er="div";function tr(e,t){let n=a.useRef(null),r=G(n,t),[o,u]=a.useState([]),i=Dn(),l=T(g=>{u(E=>{let F=E.indexOf(g);if(F!==-1){let x=E.slice();return x.splice(F,1),x}return E})}),s=T(g=>(u(E=>[...E,g]),()=>l(g))),c=T(()=>{var g;let E=de(n);if(!E)return!1;let F=E.activeElement;return(g=n.current)!=null&&g.contains(F)?!0:o.some(x=>{var M,k;return((M=E.getElementById(x.buttonId.current))==null?void 0:M.contains(F))||((k=E.getElementById(x.panelId.current))==null?void 0:k.contains(F))})}),d=T(g=>{for(let E of o)E.buttonId.current!==g&&E.close()}),f=a.useMemo(()=>({registerPopover:s,unregisterPopover:l,isFocusWithinPopoverGroup:c,closeOthers:d,mainTreeNodeRef:i.mainTreeNodeRef}),[s,l,c,d,i.mainTreeNodeRef]),b=a.useMemo(()=>({}),[]),p=e,h={ref:r};return P.createElement(De.Provider,{value:f},U({ourProps:h,theirProps:p,slot:b,defaultTag:er,name:"Popover.Group"}),P.createElement(i.MainTreeNode,null))}let nr=j(jn),rr=j(qn),or=j(Jn),lr=j(Zn),ur=j(tr),mr=Object.assign(nr,{Button:rr,Overlay:or,Panel:lr,Group:ur});export{_t as $,Oe as A,Re as B,fr as C,sn as E,K as F,dr as G,tn as I,z as P,wn as R,ie as T,on as _,ut as a,re as b,Fn as c,ge as d,Rn as e,hn as f,Yt as g,Bt as h,Vt as i,An as j,cn as k,vr as l,pr as m,oe as n,J as o,yn as p,mr as q,Ze as r,V as s,kn as t,de as u,Pn as v,an as w,En as x,$n as y,Jt as z};
