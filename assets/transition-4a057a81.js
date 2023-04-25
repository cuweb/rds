import{r as l,R as E}from"./index-580b8df0.js";import{l as X,u as w,a as _,p as Y,s as L,S as de,D as J,y as Z,j as R,b as ee,o as x,e as fe,c as ve,d as $,X as re,C as te}from"./open-closed-2007ab4d.js";function K(){let r=l.useRef(!1);return X(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function me(r=0){let[e,t]=l.useState(r),i=K(),d=l.useCallback(s=>{i.current&&t(a=>a|s)},[e,i]),m=l.useCallback(s=>!!(e&s),[e]),f=l.useCallback(s=>{i.current&&t(a=>a&~s)},[t,i]),c=l.useCallback(s=>{i.current&&t(a=>a^s)},[t]);return{flags:e,addFlag:d,hasFlag:m,removeFlag:f,toggleFlag:c}}function pe(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}function z(r,...e){r&&e.length>0&&r.classList.add(...e)}function G(r,...e){r&&e.length>0&&r.classList.remove(...e)}function he(r,e){let t=_();if(!r)return t.dispose;let{transitionDuration:i,transitionDelay:d}=getComputedStyle(r),[m,f]=[i,d].map(s=>{let[a=0]=s.split(",").filter(Boolean).map(o=>o.includes("ms")?parseFloat(o):parseFloat(o)*1e3).sort((o,g)=>g-o);return a}),c=m+f;if(c!==0){t.group(a=>{a.setTimeout(()=>{e(),a.dispose()},c),a.addEventListener(r,"transitionrun",o=>{o.target===o.currentTarget&&a.dispose()})});let s=t.addEventListener(r,"transitionend",a=>{a.target===a.currentTarget&&(e(),s())})}else e();return t.add(()=>e()),t.dispose}function ge(r,e,t,i){let d=t?"enter":"leave",m=_(),f=i!==void 0?pe(i):()=>{};d==="enter"&&(r.removeAttribute("hidden"),r.style.display="");let c=w(d,{enter:()=>e.enter,leave:()=>e.leave}),s=w(d,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),a=w(d,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return G(r,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),z(r,...c,...a),m.nextFrame(()=>{G(r,...a),z(r,...s),he(r,()=>(G(r,...c),z(r,...e.entered),f()))}),m.dispose}function be({container:r,direction:e,classes:t,onStart:i,onStop:d}){let m=K(),f=Y(),c=L(e);X(()=>{let s=_();f.add(s.dispose);let a=r.current;if(a&&c.current!=="idle"&&m.current)return s.dispose(),i.current(c.current),s.add(ge(a,t.current,c.current==="enter",()=>{s.dispose(),d.current(c.current)})),s.dispose},[e])}function S(r=""){return r.split(" ").filter(e=>e.trim().length>1)}let O=l.createContext(null);O.displayName="TransitionContext";var Ee=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ee||{});function Te(){let r=l.useContext(O);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function Fe(){let r=l.useContext(k);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let k=l.createContext(null);k.displayName="NestingContext";function A(r){return"children"in r?A(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ne(r,e){let t=L(r),i=l.useRef([]),d=K(),m=Y(),f=x((v,n=R.Hidden)=>{let p=i.current.findIndex(({el:u})=>u===v);p!==-1&&(w(n,{[R.Unmount](){i.current.splice(p,1)},[R.Hidden](){i.current[p].state="hidden"}}),m.microTask(()=>{var u;!A(i)&&d.current&&((u=t.current)==null||u.call(t))}))}),c=x(v=>{let n=i.current.find(({el:p})=>p===v);return n?n.state!=="visible"&&(n.state="visible"):i.current.push({el:v,state:"visible"}),()=>f(v,R.Unmount)}),s=l.useRef([]),a=l.useRef(Promise.resolve()),o=l.useRef({enter:[],leave:[],idle:[]}),g=x((v,n,p)=>{s.current.splice(0),e&&(e.chains.current[n]=e.chains.current[n].filter(([u])=>u!==v)),e==null||e.chains.current[n].push([v,new Promise(u=>{s.current.push(u)})]),e==null||e.chains.current[n].push([v,new Promise(u=>{Promise.all(o.current[n].map(([h,b])=>b)).then(()=>u())})]),n==="enter"?a.current=a.current.then(()=>e==null?void 0:e.wait.current).then(()=>p(n)):p(n)}),T=x((v,n,p)=>{Promise.all(o.current[n].splice(0).map(([u,h])=>h)).then(()=>{var u;(u=s.current.shift())==null||u()}).then(()=>p(n))});return l.useMemo(()=>({children:i,register:c,unregister:f,onStart:g,onStop:T,wait:a,chains:o}),[c,f,i,g,T,o,a])}function Ce(){}let $e=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function W(r){var e;let t={};for(let i of $e)t[i]=(e=r[i])!=null?e:Ce;return t}function we(r){let e=l.useRef(W(r));return l.useEffect(()=>{e.current=W(r)},[r]),e}let Re="div",le=de.RenderStrategy;function Se(r,e){let{beforeEnter:t,afterEnter:i,beforeLeave:d,afterLeave:m,enter:f,enterFrom:c,enterTo:s,entered:a,leave:o,leaveFrom:g,leaveTo:T,...v}=r,n=l.useRef(null),p=Z(n,e),u=v.unmount?R.Unmount:R.Hidden,{show:h,appear:b,initial:ae}=Te(),[F,B]=l.useState(h?"visible":"hidden"),Q=Fe(),{register:P,unregister:N}=Q,M=l.useRef(null);l.useEffect(()=>P(n),[P,n]),l.useEffect(()=>{if(u===R.Hidden&&n.current){if(h&&F!=="visible"){B("visible");return}return w(F,{hidden:()=>N(n),visible:()=>P(n)})}},[F,n,P,N,h,u]);let U=L({enter:S(f),enterFrom:S(c),enterTo:S(s),entered:S(a),leave:S(o),leaveFrom:S(g),leaveTo:S(T)}),D=we({beforeEnter:t,afterEnter:i,beforeLeave:d,afterLeave:m}),j=ee();l.useEffect(()=>{if(j&&F==="visible"&&n.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[n,F,j]);let I=ae&&!b,se=(()=>!j||I||M.current===h?"idle":h?"enter":"leave")(),y=me(0),ue=x(C=>w(C,{enter:()=>{y.addFlag($.Opening),D.current.beforeEnter()},leave:()=>{y.addFlag($.Closing),D.current.beforeLeave()},idle:()=>{}})),oe=x(C=>w(C,{enter:()=>{y.removeFlag($.Opening),D.current.afterEnter()},leave:()=>{y.removeFlag($.Closing),D.current.afterLeave()},idle:()=>{}})),H=ne(()=>{B("hidden"),N(n)},Q);be({container:n,classes:U,direction:se,onStart:L(C=>{H.onStart(n,C,ue)}),onStop:L(C=>{H.onStop(n,C,oe),C==="leave"&&!A(H)&&(B("hidden"),N(n))})}),l.useEffect(()=>{I&&(u===R.Hidden?M.current=null:M.current=h)},[h,I,F]);let q=v,ce={ref:p};return b&&h&&(q={...q,className:fe(v.className,...U.current.enter,...U.current.enterFrom)}),E.createElement(k.Provider,{value:H},E.createElement(ve,{value:w(F,{visible:$.Open,hidden:$.Closed})|y.flags},re({ourProps:ce,theirProps:q,defaultTag:Re,features:le,visible:F==="visible",name:"Transition.Child"})))}function xe(r,e){let{show:t,appear:i=!1,unmount:d,...m}=r,f=l.useRef(null),c=Z(f,e);ee();let s=te();if(t===void 0&&s!==null&&(t=(s&$.Open)===$.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[a,o]=l.useState(t?"visible":"hidden"),g=ne(()=>{o("hidden")}),[T,v]=l.useState(!0),n=l.useRef([t]);X(()=>{T!==!1&&n.current[n.current.length-1]!==t&&(n.current.push(t),v(!1))},[n,t]);let p=l.useMemo(()=>({show:t,appear:i,initial:T}),[t,i,T]);l.useEffect(()=>{if(t)o("visible");else if(!A(g))o("hidden");else{let h=f.current;if(!h)return;let b=h.getBoundingClientRect();b.x===0&&b.y===0&&b.width===0&&b.height===0&&o("hidden")}},[t,g]);let u={unmount:d};return E.createElement(k.Provider,{value:g},E.createElement(O.Provider,{value:p},re({ourProps:{...u,as:l.Fragment,children:E.createElement(ie,{ref:c,...u,...m})},theirProps:{},defaultTag:l.Fragment,features:le,visible:a==="visible",name:"Transition"})))}function ye(r,e){let t=l.useContext(O)!==null,i=te()!==null;return E.createElement(E.Fragment,null,!t&&i?E.createElement(V,{ref:e,...r}):E.createElement(ie,{ref:e,...r}))}let V=J(xe),ie=J(Se),Le=J(ye),De=Object.assign(V,{Child:Le,Root:V});export{K as f,De as t};
//# sourceMappingURL=transition-4a057a81.js.map
