import{r as w,$ as Gt}from"./index-uCp2LrAq.js";import{r as J}from"./index-BOkhicXD.js";function G(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function H(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function N(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof H(t).Node}function L(t){return t instanceof Element||t instanceof H(t).Element}function V(t){return t instanceof HTMLElement||t instanceof H(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof H(t).ShadowRoot}function et(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Qt(t){return["table","td","th"].includes(G(t))}function xt(t){const e=yt(),o=I(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Zt(t){let e=_(t);for(;V(e)&&!K(e);){if(xt(e))return e;e=_(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(G(t))}function I(t){return H(t).getComputedStyle(t)}function ft(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(G(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||N(t);return Et(e)?e.host:e}function Wt(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&et(e)?e:Wt(e)}function tt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Wt(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=H(r);return i?e.concat(s,s.visualViewport||[],et(r)?r:[],s.frameElement&&o?tt(s.frameElement):[]):e.concat(r,tt(r,[],o))}function Jt(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:o,version:n}=e;return o+"/"+n}).join(" "):navigator.userAgent}const B=Math.min,k=Math.max,it=Math.round,ot=Math.floor,z=t=>({x:t,y:t}),te={left:"right",right:"left",bottom:"top",top:"bottom"},ee={start:"end",end:"start"};function gt(t,e,o){return k(t,B(e,o))}function Q(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function vt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(Y(t))?"y":"x"}function bt(t){return It(nt(t))}function ne(t,e,o){o===void 0&&(o=!1);const n=Z(t),r=bt(t),i=vt(r);let s=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=st(s)),[s,st(s)]}function oe(t){const e=st(t);return[ht(t),e,ht(e)]}function ht(t){return t.replace(/start|end/g,e=>ee[e])}function re(t,e,o){const n=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:n:e?n:r;case"left":case"right":return e?i:s;default:return[]}}function ie(t,e,o,n){const r=Z(t);let i=re(Y(t),o==="start",n);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(ht)))),i}function st(t){return t.replace(/left|right|bottom|top/g,e=>te[e])}function se(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?se(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Ot(t,e,o){let{reference:n,floating:r}=t;const i=nt(e),s=bt(e),f=vt(s),l=Y(e),a=i==="y",u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,g=n[f]/2-r[f]/2;let c;switch(l){case"top":c={x:u,y:n.y-r.height};break;case"bottom":c={x:u,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:d};break;case"left":c={x:n.x-r.width,y:d};break;default:c={x:n.x,y:n.y}}switch(Z(e)){case"start":c[s]-=g*(o&&a?-1:1);break;case"end":c[s]+=g*(o&&a?-1:1);break}return c}const ce=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:s}=o,f=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Ot(a,n,l),g=n,c={},h=0;for(let m=0;m<f.length;m++){const{name:y,fn:p}=f[m],{x:v,y:x,data:b,reset:R}=await p({x:u,y:d,initialPlacement:n,placement:g,strategy:r,middlewareData:c,rects:a,platform:s,elements:{reference:t,floating:e}});u=v??u,d=x??d,c={...c,[y]:{...c[y],...b}},R&&h<=50&&(h++,typeof R=="object"&&(R.placement&&(g=R.placement),R.rects&&(a=R.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):R.rects),{x:u,y:d}=Ot(a,g,l)),m=-1)}return{x:u,y:d,placement:g,strategy:r,middlewareData:c}};async function at(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:i,rects:s,elements:f,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:c=0}=Q(e,t),h=Bt(c),y=f[g?d==="floating"?"reference":"floating":d],p=ct(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(y)))==null||o?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(f.floating)),boundary:a,rootBoundary:u,strategy:l})),v=d==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(f.floating)),b=await(i.isElement==null?void 0:i.isElement(x))?await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1}:{x:1,y:1},R=ct(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:v,offsetParent:x,strategy:l}):v);return{top:(p.top-R.top+h.top)/b.y,bottom:(R.bottom-p.bottom+h.bottom)/b.y,left:(p.left-R.left+h.left)/b.x,right:(R.right-p.right+h.right)/b.x}}const le=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:i,platform:s,elements:f,middlewareData:l}=e,{element:a,padding:u=0}=Q(t,e)||{};if(a==null)return{};const d=Bt(u),g={x:o,y:n},c=bt(r),h=vt(c),m=await s.getDimensions(a),y=c==="y",p=y?"top":"left",v=y?"bottom":"right",x=y?"clientHeight":"clientWidth",b=i.reference[h]+i.reference[c]-g[c]-i.floating[h],R=g[c]-i.reference[c],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let A=C?C[x]:0;(!A||!await(s.isElement==null?void 0:s.isElement(C)))&&(A=f.floating[x]||i.floating[h]);const O=b/2-R/2,$=A/2-m[h]/2-1,M=B(d[p],$),D=B(d[v],$),S=M,W=A-m[h]-D,T=A/2-m[h]/2+O,P=gt(S,T,W),F=!l.arrow&&Z(r)!=null&&T!==P&&i.reference[h]/2-(T<S?M:D)-m[h]/2<0,E=F?T<S?T-S:T-W:0;return{[c]:g[c]+E,data:{[c]:P,centerOffset:T-P-E,...F&&{alignmentOffset:E}},reset:F}}}),fe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:i,rects:s,initialPlacement:f,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...y}=Q(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const p=Y(r),v=Y(f)===f,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=g||(v||!m?[st(f)]:oe(f));!g&&h!=="none"&&b.push(...ie(f,m,h,x));const R=[f,...b],C=await at(e,y),A=[];let O=((n=i.flip)==null?void 0:n.overflows)||[];if(u&&A.push(C[p]),d){const S=ne(r,s,x);A.push(C[S[0]],C[S[1]])}if(O=[...O,{placement:r,overflows:A}],!A.every(S=>S<=0)){var $,M;const S=((($=i.flip)==null?void 0:$.index)||0)+1,W=R[S];if(W)return{data:{index:S,overflows:O},reset:{placement:W}};let T=(M=O.filter(P=>P.overflows[0]<=0).sort((P,F)=>P.overflows[1]-F.overflows[1])[0])==null?void 0:M.placement;if(!T)switch(c){case"bestFit":{var D;const P=(D=O.map(F=>[F.placement,F.overflows.filter(E=>E>0).reduce((E,X)=>E+X,0)]).sort((F,E)=>F[1]-E[1])[0])==null?void 0:D[0];P&&(T=P);break}case"initialPlacement":T=f;break}if(r!==T)return{reset:{placement:T}}}return{}}}};async function ae(t,e){const{placement:o,platform:n,elements:r}=t,i=await(n.isRTL==null?void 0:n.isRTL(r.floating)),s=Y(o),f=Z(o),l=nt(o)==="y",a=["left","top"].includes(s)?-1:1,u=i&&l?-1:1,d=Q(e,t);let{mainAxis:g,crossAxis:c,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&typeof h=="number"&&(c=f==="end"?h*-1:h),l?{x:c*u,y:g*a}:{x:g*a,y:c*u}}const ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:r,y:i,placement:s,middlewareData:f}=e,l=await ae(e,t);return s===((o=f.offset)==null?void 0:o.placement)&&(n=f.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},de=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:f={fn:y=>{let{x:p,y:v}=y;return{x:p,y:v}}},...l}=Q(t,e),a={x:o,y:n},u=await at(e,l),d=nt(Y(r)),g=It(d);let c=a[g],h=a[d];if(i){const y=g==="y"?"top":"left",p=g==="y"?"bottom":"right",v=c+u[y],x=c-u[p];c=gt(v,c,x)}if(s){const y=d==="y"?"top":"left",p=d==="y"?"bottom":"right",v=h+u[y],x=h-u[p];h=gt(v,h,x)}const m=f.fn({...e,[g]:c,[d]:h});return{...m,data:{x:m.x-o,y:m.y-n}}}}},me=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:r,elements:i}=e,{apply:s=()=>{},...f}=Q(t,e),l=await at(e,f),a=Y(o),u=Z(o),d=nt(o)==="y",{width:g,height:c}=n.floating;let h,m;a==="top"||a==="bottom"?(h=a,m=u===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(m=a,h=u==="end"?"top":"bottom");const y=c-l.top-l.bottom,p=g-l.left-l.right,v=B(c-l[h],y),x=B(g-l[m],p),b=!e.middlewareData.shift;let R=v,C=x;if(d?C=u||b?B(x,p):p:R=u||b?B(v,y):y,b&&!u){const O=k(l.left,0),$=k(l.right,0),M=k(l.top,0),D=k(l.bottom,0);d?C=g-2*(O!==0||$!==0?O+$:k(l.left,l.right)):R=c-2*(M!==0||D!==0?M+D:k(l.top,l.bottom))}await s({...e,availableWidth:C,availableHeight:R});const A=await r.getDimensions(i.floating);return g!==A.width||c!==A.height?{reset:{rects:!0}}:{}}}};function Vt(t){const e=I(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=V(t),i=r?t.offsetWidth:o,s=r?t.offsetHeight:n,f=it(o)!==i||it(n)!==s;return f&&(o=i,n=s),{width:o,height:n,$:f}}function Rt(t){return L(t)?t:t.contextElement}function U(t){const e=Rt(t);if(!V(e))return z(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:i}=Vt(e);let s=(i?it(o.width):o.width)/n,f=(i?it(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const ge=z(0);function Nt(t){const e=H(t);return!yt()||!e.visualViewport?ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function he(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==H(t)?!1:e}function j(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),i=Rt(t);let s=z(1);e&&(n?L(n)&&(s=U(n)):s=U(t));const f=he(i,o,n)?Nt(i):z(0);let l=(r.left+f.x)/s.x,a=(r.top+f.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(i){const g=H(i),c=n&&L(n)?H(n):n;let h=g,m=h.frameElement;for(;m&&n&&c!==h;){const y=U(m),p=m.getBoundingClientRect(),v=I(m),x=p.left+(m.clientLeft+parseFloat(v.paddingLeft))*y.x,b=p.top+(m.clientTop+parseFloat(v.paddingTop))*y.y;l*=y.x,a*=y.y,u*=y.x,d*=y.y,l+=x,a+=b,h=H(m),m=h.frameElement}}return ct({width:u,height:d,x:l,y:a})}const pe=[":popover-open",":modal"];function Ct(t){return pe.some(e=>{try{return t.matches(e)}catch{return!1}})}function we(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const i=r==="fixed",s=N(n),f=e?Ct(e.floating):!1;if(n===s||f&&i)return o;let l={scrollLeft:0,scrollTop:0},a=z(1);const u=z(0),d=V(n);if((d||!d&&!i)&&((G(n)!=="body"||et(s))&&(l=ft(n)),V(n))){const g=j(n);a=U(n),u.x=g.x+n.clientLeft,u.y=g.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+u.x,y:o.y*a.y-l.scrollTop*a.y+u.y}}function xe(t){return Array.from(t.getClientRects())}function _t(t){return j(N(t)).left+ft(t).scrollLeft}function ye(t){const e=N(t),o=ft(t),n=t.ownerDocument.body,r=k(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=k(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+_t(t);const f=-o.scrollTop;return I(n).direction==="rtl"&&(s+=k(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:s,y:f}}function ve(t,e){const o=H(t),n=N(t),r=o.visualViewport;let i=n.clientWidth,s=n.clientHeight,f=0,l=0;if(r){i=r.width,s=r.height;const a=yt();(!a||a&&e==="fixed")&&(f=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:f,y:l}}function be(t,e){const o=j(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=V(t)?U(t):z(1),s=t.clientWidth*i.x,f=t.clientHeight*i.y,l=r*i.x,a=n*i.y;return{width:s,height:f,x:l,y:a}}function At(t,e,o){let n;if(e==="viewport")n=ve(t,o);else if(e==="document")n=ye(N(t));else if(L(e))n=be(e,o);else{const r=Nt(t);n={...e,x:e.x-r.x,y:e.y-r.y}}return ct(n)}function zt(t,e){const o=_(t);return o===e||!L(o)||K(o)?!1:I(o).position==="fixed"||zt(o,e)}function Re(t,e){const o=e.get(t);if(o)return o;let n=tt(t,[],!1).filter(f=>L(f)&&G(f)!=="body"),r=null;const i=I(t).position==="fixed";let s=i?_(t):t;for(;L(s)&&!K(s);){const f=I(s),l=xt(s);!l&&f.position==="fixed"&&(r=null),(i?!l&&!r:!l&&f.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||et(s)&&!l&&zt(t,s))?n=n.filter(u=>u!==s):r=f,s=_(s)}return e.set(t,n),n}function Ce(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const s=[...o==="clippingAncestors"?Ct(e)?[]:Re(e,this._c):[].concat(o),n],f=s[0],l=s.reduce((a,u)=>{const d=At(e,u,r);return a.top=k(d.top,a.top),a.right=B(d.right,a.right),a.bottom=B(d.bottom,a.bottom),a.left=k(d.left,a.left),a},At(e,f,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ee(t){const{width:e,height:o}=Vt(t);return{width:e,height:o}}function Oe(t,e,o){const n=V(e),r=N(e),i=o==="fixed",s=j(t,!0,i,e);let f={scrollLeft:0,scrollTop:0};const l=z(0);if(n||!n&&!i)if((G(e)!=="body"||et(r))&&(f=ft(e)),n){const d=j(e,!0,i,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&(l.x=_t(r));const a=s.left+f.scrollLeft-l.x,u=s.top+f.scrollTop-l.y;return{x:a,y:u,width:s.width,height:s.height}}function ut(t){return I(t).position==="static"}function St(t,e){return!V(t)||I(t).position==="fixed"?null:e?e(t):t.offsetParent}function Yt(t,e){const o=H(t);if(Ct(t))return o;if(!V(t)){let r=_(t);for(;r&&!K(r);){if(L(r)&&!ut(r))return r;r=_(r)}return o}let n=St(t,e);for(;n&&Qt(n)&&ut(n);)n=St(n,e);return n&&K(n)&&ut(n)&&!xt(n)?o:n||Zt(t)||o}const Ae=async function(t){const e=this.getOffsetParent||Yt,o=this.getDimensions,n=await o(t.floating);return{reference:Oe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Se(t){return I(t).direction==="rtl"}const jt={convertOffsetParentRelativeRectToViewportRelativeRect:we,getDocumentElement:N,getClippingRect:Ce,getOffsetParent:Yt,getElementRects:Ae,getClientRects:xe,getDimensions:Ee,getScale:U,isElement:L,isRTL:Se};function Pe(t,e){let o=null,n;const r=N(t);function i(){var f;clearTimeout(n),(f=o)==null||f.disconnect(),o=null}function s(f,l){f===void 0&&(f=!1),l===void 0&&(l=1),i();const{left:a,top:u,width:d,height:g}=t.getBoundingClientRect();if(f||e(),!d||!g)return;const c=ot(u),h=ot(r.clientWidth-(a+d)),m=ot(r.clientHeight-(u+g)),y=ot(a),v={rootMargin:-c+"px "+-h+"px "+-m+"px "+-y+"px",threshold:k(0,B(1,l))||1};let x=!0;function b(R){const C=R[0].intersectionRatio;if(C!==l){if(!x)return s();C?s(!1,C):n=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(b,{...v,root:r.ownerDocument})}catch{o=new IntersectionObserver(b,v)}o.observe(t)}return s(!0),i}function Ge(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=Rt(t),u=r||i?[...a?tt(a):[],...tt(e)]:[];u.forEach(p=>{r&&p.addEventListener("scroll",o,{passive:!0}),i&&p.addEventListener("resize",o)});const d=a&&f?Pe(a,o):null;let g=-1,c=null;s&&(c=new ResizeObserver(p=>{let[v]=p;v&&v.target===a&&c&&(c.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=c)==null||x.observe(e)})),o()}),a&&!l&&c.observe(a),c.observe(e));let h,m=l?j(t):null;l&&y();function y(){const p=j(t);m&&(p.x!==m.x||p.y!==m.y||p.width!==m.width||p.height!==m.height)&&o(),m=p,h=requestAnimationFrame(y)}return o(),()=>{var p;u.forEach(v=>{r&&v.removeEventListener("scroll",o),i&&v.removeEventListener("resize",o)}),d==null||d(),(p=c)==null||p.disconnect(),c=null,l&&cancelAnimationFrame(h)}}const dt=at,Te=ue,De=de,Me=fe,Le=me,Pt=le,Fe=(t,e,o)=>{const n=new Map,r={platform:jt,...o},i={...r.platform,_c:n};return ce(t,e,{...r,platform:i})};var rt=typeof document<"u"?w.useLayoutEffect:w.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let o,n,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!==e.length)return!1;for(n=o;n--!==0;)if(!lt(t[n],e[n]))return!1;return!0}if(r=Object.keys(t),o=r.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!{}.hasOwnProperty.call(e,r[n]))return!1;for(n=o;n--!==0;){const i=r[n];if(!(i==="_owner"&&t.$$typeof)&&!lt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function Xt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Tt(t,e){const o=Xt(t);return Math.round(e*o)/o}function Dt(t){const e=w.useRef(t);return rt(()=>{e.current=t}),e}function ke(t){t===void 0&&(t={});const{placement:e="bottom",strategy:o="absolute",middleware:n=[],platform:r,elements:{reference:i,floating:s}={},transform:f=!0,whileElementsMounted:l,open:a}=t,[u,d]=w.useState({x:0,y:0,strategy:o,placement:e,middlewareData:{},isPositioned:!1}),[g,c]=w.useState(n);lt(g,n)||c(n);const[h,m]=w.useState(null),[y,p]=w.useState(null),v=w.useCallback(E=>{E!==C.current&&(C.current=E,m(E))},[]),x=w.useCallback(E=>{E!==A.current&&(A.current=E,p(E))},[]),b=i||h,R=s||y,C=w.useRef(null),A=w.useRef(null),O=w.useRef(u),$=l!=null,M=Dt(l),D=Dt(r),S=w.useCallback(()=>{if(!C.current||!A.current)return;const E={placement:e,strategy:o,middleware:g};D.current&&(E.platform=D.current),Fe(C.current,A.current,E).then(X=>{const q={...X,isPositioned:!0};W.current&&!lt(O.current,q)&&(O.current=q,J.flushSync(()=>{d(q)}))})},[g,e,o,D]);rt(()=>{a===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(E=>({...E,isPositioned:!1})))},[a]);const W=w.useRef(!1);rt(()=>(W.current=!0,()=>{W.current=!1}),[]),rt(()=>{if(b&&(C.current=b),R&&(A.current=R),b&&R){if(M.current)return M.current(b,R,S);S()}},[b,R,S,M,$]);const T=w.useMemo(()=>({reference:C,floating:A,setReference:v,setFloating:x}),[v,x]),P=w.useMemo(()=>({reference:b,floating:R}),[b,R]),F=w.useMemo(()=>{const E={position:o,left:0,top:0};if(!P.floating)return E;const X=Tt(P.floating,u.x),q=Tt(P.floating,u.y);return f?{...E,transform:"translate("+X+"px, "+q+"px)",...Xt(P.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:X,top:q}},[o,f,P.floating,u.x,u.y]);return w.useMemo(()=>({...u,update:S,refs:T,elements:P,floatingStyles:F}),[u,S,T,P,F])}const He=t=>{function e(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:t,fn(o){const{element:n,padding:r}=typeof t=="function"?t(o):t;return n&&e(n)?n.current!=null?Pt({element:n.current,padding:r}).fn(o):{}:n?Pt({element:n,padding:r}).fn(o):{}}}},$e=(t,e)=>({...Te(t),options:[t,e]}),Qe=(t,e)=>({...De(t),options:[t,e]}),Ze=(t,e)=>({...Me(t),options:[t,e]}),Je=(t,e)=>({...Le(t),options:[t,e]}),tn=(t,e)=>({...He(t),options:[t,e]}),qt={...Gt},We=qt.useInsertionEffect,Ie=We||(t=>t());function Ut(t){const e=w.useRef(()=>{});return Ie(()=>{e.current=t}),w.useCallback(function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e.current==null?void 0:e.current(...n)},[])}var pt=typeof document<"u"?w.useLayoutEffect:w.useEffect;function wt(){return wt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},wt.apply(this,arguments)}let Mt=!1,Be=0;const Lt=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Be++;function Ve(){const[t,e]=w.useState(()=>Mt?Lt():void 0);return pt(()=>{t==null&&e(Lt())},[]),w.useEffect(()=>{Mt=!0},[]),t}const Ne=qt.useId,Kt=Ne||Ve,en=w.forwardRef(function(e,o){const{context:{placement:n,elements:{floating:r},middlewareData:{arrow:i}},width:s=14,height:f=7,tipRadius:l=0,strokeWidth:a=0,staticOffset:u,stroke:d,d:g,style:{transform:c,...h}={},...m}=e,y=Kt();if(!r)return null;const p=a*2,v=p/2,x=s/2*(l/-8+1),b=f/2*l/4,[R,C]=n.split("-"),A=jt.isRTL(r),O=!!g,$=R==="top"||R==="bottom",M=u&&C==="end"?"bottom":"top";let D=u&&C==="end"?"right":"left";u&&A&&(D=C==="end"?"left":"right");const S=(i==null?void 0:i.x)!=null?u||i.x:"",W=(i==null?void 0:i.y)!=null?u||i.y:"",T=g||"M0,0"+(" H"+s)+(" L"+(s-x)+","+(f-b))+(" Q"+s/2+","+f+" "+x+","+(f-b))+" Z",P={top:O?"rotate(180deg)":"",left:O?"rotate(90deg)":"rotate(-90deg)",bottom:O?"":"rotate(180deg)",right:O?"rotate(-90deg)":"rotate(90deg)"}[R];return w.createElement("svg",wt({},m,{"aria-hidden":!0,ref:o,width:O?s:s+p,height:s,viewBox:"0 0 "+s+" "+(f>s?f:s),style:{position:"absolute",pointerEvents:"none",[D]:S,[M]:W,[R]:$||O?"100%":"calc(100% - "+p/2+"px)",transform:""+P+(c??""),...h}}),p>0&&w.createElement("path",{clipPath:"url(#"+y+")",fill:"none",stroke:d,strokeWidth:p+(g?0:1),d:T}),w.createElement("path",{stroke:p&&!g?m.fill:"none",d:T}),w.createElement("clipPath",{id:y},w.createElement("rect",{x:-v,y:v*(O?-1:1),width:s+p,height:s})))});function _e(){const t=new Map;return{emit(e,o){var n;(n=t.get(e))==null||n.forEach(r=>r(o))},on(e,o){t.set(e,[...t.get(e)||[],o])},off(e,o){var n;t.set(e,((n=t.get(e))==null?void 0:n.filter(r=>r!==o))||[])}}}const ze=w.createContext(null),Ye=w.createContext(null),je=()=>{var t;return((t=w.useContext(ze))==null?void 0:t.id)||null},Xe=()=>w.useContext(Ye);function qe(t){const{open:e=!1,onOpenChange:o,elements:n}=t,r=Kt(),i=w.useRef({}),[s]=w.useState(()=>_e()),f=je()!=null,[l,a]=w.useState(n.reference),u=Ut((c,h,m)=>{i.current.openEvent=c?h:void 0,s.emit("openchange",{open:c,event:h,reason:m,nested:f}),o==null||o(c,h,m)}),d=w.useMemo(()=>({setPositionReference:a}),[]),g=w.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return w.useMemo(()=>({dataRef:i,open:e,onOpenChange:u,elements:g,events:s,floatingId:r,refs:d}),[e,u,g,s,r,d])}function nn(t){t===void 0&&(t={});const{nodeId:e}=t,o=qe({...t,elements:{reference:null,floating:null,...t.elements}}),n=t.rootContext||o,r=n.elements,[i,s]=w.useState(null),[f,l]=w.useState(null),u=(r==null?void 0:r.reference)||i,d=w.useRef(null),g=Xe();pt(()=>{u&&(d.current=u)},[u]);const c=ke({...t,elements:{...r,...f&&{reference:f}}}),h=w.useCallback(x=>{const b=L(x)?{getBoundingClientRect:()=>x.getBoundingClientRect(),contextElement:x}:x;l(b),c.refs.setReference(b)},[c.refs]),m=w.useCallback(x=>{(L(x)||x===null)&&(d.current=x,s(x)),(L(c.refs.reference.current)||c.refs.reference.current===null||x!==null&&!L(x))&&c.refs.setReference(x)},[c.refs]),y=w.useMemo(()=>({...c.refs,setReference:m,setPositionReference:h,domReference:d}),[c.refs,m,h]),p=w.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),v=w.useMemo(()=>({...c,...n,refs:y,elements:p,nodeId:e}),[c,y,p,e,n]);return pt(()=>{n.dataRef.current.floatingContext=v;const x=g==null?void 0:g.nodesRef.current.find(b=>b.id===e);x&&(x.context=v)}),w.useMemo(()=>({...c,context:v,refs:y,elements:p}),[c,y,p,v])}const Ft="active",kt="selected";function mt(t,e,o){const n=new Map,r=o==="item";let i=t;if(r&&t){const{[Ft]:s,[kt]:f,...l}=t;i=l}return{...o==="floating"&&{tabIndex:-1},...i,...e.map(s=>{const f=s?s[o]:null;return typeof f=="function"?t?f(t):null:f}).concat(t).reduce((s,f)=>(f&&Object.entries(f).forEach(l=>{let[a,u]=l;if(!(r&&[Ft,kt].includes(a)))if(a.indexOf("on")===0){if(n.has(a)||n.set(a,[]),typeof u=="function"){var d;(d=n.get(a))==null||d.push(u),s[a]=function(){for(var g,c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return(g=n.get(a))==null?void 0:g.map(y=>y(...h)).find(y=>y!==void 0)}}}else s[a]=u}),s),{})}}function on(t){t===void 0&&(t=[]);const e=t,o=w.useCallback(i=>mt(i,t,"reference"),e),n=w.useCallback(i=>mt(i,t,"floating"),e),r=w.useCallback(i=>mt(i,t,"item"),t.map(i=>i==null?void 0:i.item));return w.useMemo(()=>({getReferenceProps:o,getFloatingProps:n,getItemProps:r}),[o,n,r])}function Ht(t,e){return{...t,rects:{...t.rects,floating:{...t.rects.floating,height:e}}}}const rn=t=>({name:"inner",options:t,async fn(e){const{listRef:o,overflowRef:n,onFallbackChange:r,offset:i=0,index:s=0,minItemsVisible:f=4,referenceOverflowThreshold:l=0,scrollRef:a,...u}=t,{rects:d,elements:{floating:g}}=e,c=o.current[s];if(!c)return{};const h={...e,...await $e(-c.offsetTop-g.clientTop-d.reference.height/2-c.offsetHeight/2-i).fn(e)},m=(a==null?void 0:a.current)||g,y=await dt(Ht(h,m.scrollHeight),u),p=await dt(h,{...u,elementContext:"reference"}),v=Math.max(0,y.top),x=h.y+v,b=Math.max(0,m.scrollHeight-v-Math.max(0,y.bottom));return m.style.maxHeight=b+"px",m.scrollTop=v,r&&(m.offsetHeight<c.offsetHeight*Math.min(f,o.current.length-1)-1||p.top>=-l||p.bottom>=-l?J.flushSync(()=>r(!0)):J.flushSync(()=>r(!1))),n&&(n.current=await dt(Ht({...h,y:x},m.offsetHeight),u)),{y:x}}});function sn(t,e){const{open:o,elements:n}=t,{enabled:r=!0,overflowRef:i,scrollRef:s,onChange:f}=e,l=Ut(f),a=w.useRef(!1),u=w.useRef(null),d=w.useRef(null);return w.useEffect(()=>{if(!r)return;function g(h){if(h.ctrlKey||!c||i.current==null)return;const m=h.deltaY,y=i.current.top>=-.5,p=i.current.bottom>=-.5,v=c.scrollHeight-c.clientHeight,x=m<0?-1:1,b=m<0?"max":"min";c.scrollHeight<=c.clientHeight||(!y&&m>0||!p&&m<0?(h.preventDefault(),J.flushSync(()=>{l(R=>R+Math[b](m,v*x))})):/firefox/i.test(Jt())&&(c.scrollTop+=m))}const c=(s==null?void 0:s.current)||n.floating;if(o&&c)return c.addEventListener("wheel",g),requestAnimationFrame(()=>{u.current=c.scrollTop,i.current!=null&&(d.current={...i.current})}),()=>{u.current=null,d.current=null,c.removeEventListener("wheel",g)}},[r,o,n.floating,i,s,l]),w.useMemo(()=>r?{floating:{onKeyDown(){a.current=!0},onWheel(){a.current=!1},onPointerMove(){a.current=!1},onScroll(){const g=(s==null?void 0:s.current)||n.floating;if(!(!i.current||!g||!a.current)){if(u.current!==null){const c=g.scrollTop-u.current;(i.current.bottom<-.5&&c<-1||i.current.top<-.5&&c>1)&&J.flushSync(()=>l(h=>h+c))}requestAnimationFrame(()=>{u.current=g.scrollTop})}}}}:{},[r,i,n.floating,s,l])}export{en as F,Je as a,Ge as b,sn as c,on as d,tn as e,Ze as f,rn as i,$e as o,Qe as s,nn as u};