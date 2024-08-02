import{j as P}from"./jsx-runtime-Nms4Y4qS.js";import{r as fe}from"./index-BwDkhjyp.js";import{m as Bt}from"./propClasses-CZStXSR9.js";import{p as Yt}from"./globalClasses-BlHLKr18.js";/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */const{entries:At,setPrototypeOf:mt,isFrozen:jt,getPrototypeOf:qt,getOwnPropertyDescriptor:Xt}=Object;let{freeze:A,seal:b,create:St}=Object,{apply:Pe,construct:Ue}=typeof Reflect<"u"&&Reflect;A||(A=function(n){return n});b||(b=function(n){return n});Pe||(Pe=function(n,a,r){return n.apply(a,r)});Ue||(Ue=function(n,a){return new n(...a)});const me=y(Array.prototype.forEach),pt=y(Array.prototype.pop),K=y(Array.prototype.push),de=y(String.prototype.toLowerCase),we=y(String.prototype.toString),dt=y(String.prototype.match),Z=y(String.prototype.replace),Vt=y(String.prototype.indexOf),$t=y(String.prototype.trim),D=y(Object.prototype.hasOwnProperty),h=y(RegExp.prototype.test),J=Kt(TypeError);function y(s){return function(n){for(var a=arguments.length,r=new Array(a>1?a-1:0),f=1;f<a;f++)r[f-1]=arguments[f];return Pe(s,n,r)}}function Kt(s){return function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return Ue(s,a)}}function l(s,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:de;mt&&mt(s,null);let r=n.length;for(;r--;){let f=n[r];if(typeof f=="string"){const N=a(f);N!==f&&(jt(n)||(n[r]=N),f=N)}s[f]=!0}return s}function Zt(s){for(let n=0;n<s.length;n++)D(s,n)||(s[n]=null);return s}function U(s){const n=St(null);for(const[a,r]of At(s))D(s,a)&&(Array.isArray(r)?n[a]=Zt(r):r&&typeof r=="object"&&r.constructor===Object?n[a]=U(r):n[a]=r);return n}function Q(s,n){for(;s!==null;){const r=Xt(s,n);if(r){if(r.get)return y(r.get);if(typeof r.value=="function")return y(r.value)}s=qt(s)}function a(){return null}return a}const Tt=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ie=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),xe=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Jt=A(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ve=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Qt=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),gt=A(["#text"]),Et=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),ke=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_t=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),pe=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),en=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),tn=b(/<%[\w\W]*|[\w\W]*%>/gm),nn=b(/\${[\w\W]*}/gm),on=b(/^data-[\-\w.\u00B7-\uFFFF]/),an=b(/^aria-[\-\w]+$/),yt=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),rn=b(/^(?:\w+script|data):/i),sn=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Rt=b(/^html$/i),ln=b(/^[a-z][.\w]*(-[.\w]+)+$/i);var ht=Object.freeze({__proto__:null,MUSTACHE_EXPR:en,ERB_EXPR:tn,TMPLIT_EXPR:nn,DATA_ATTR:on,ARIA_ATTR:an,IS_ALLOWED_URI:yt,IS_SCRIPT_OR_DATA:rn,ATTR_WHITESPACE:sn,DOCTYPE_NAME:Rt,CUSTOM_ELEMENT:ln});const ee={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},cn=function(){return typeof window>"u"?null:window},un=function(n,a){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const f="data-tt-policy-suffix";a&&a.hasAttribute(f)&&(r=a.getAttribute(f));const N="dompurify"+(r?"#"+r:"");try{return n.createPolicy(N,{createHTML(v){return v},createScriptURL(v){return v}})}catch{return console.warn("TrustedTypes policy "+N+" could not be created."),null}};function Lt(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cn();const n=i=>Lt(i);if(n.version="3.1.6",n.removed=[],!s||!s.document||s.document.nodeType!==ee.document)return n.isSupported=!1,n;let{document:a}=s;const r=a,f=r.currentScript,{DocumentFragment:N,HTMLTemplateElement:v,Node:Y,Element:te,NodeFilter:R,NamedNodeMap:ne=s.NamedNodeMap||s.MozNamedAttrMap,HTMLFormElement:Te,DOMParser:ge,trustedTypes:L}=s,O=te.prototype,oe=Q(O,"cloneNode"),ie=Q(O,"remove"),bt=Q(O,"nextSibling"),Nt=Q(O,"childNodes"),ae=Q(O,"parentNode");if(typeof v=="function"){const i=a.createElement("template");i.content&&i.content.ownerDocument&&(a=i.content.ownerDocument)}let E,j="";const{implementation:Ee,createNodeIterator:Dt,createDocumentFragment:Ot,getElementsByTagName:Ct}=a,{importNode:Mt}=r;let C={};n.isSupported=typeof At=="function"&&typeof ae=="function"&&Ee&&Ee.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:_e,ERB_EXPR:he,TMPLIT_EXPR:Ae,DATA_ATTR:wt,ARIA_ATTR:It,IS_SCRIPT_OR_DATA:xt,ATTR_WHITESPACE:Fe,CUSTOM_ELEMENT:vt}=ht;let{IS_ALLOWED_URI:He}=ht,m=null;const ze=l({},[...Tt,...Ie,...xe,...ve,...gt]);let p=null;const We=l({},[...Et,...ke,..._t,...pe]);let u=Object.seal(St(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,Se=null,Ge=!0,ye=!0,Be=!1,Ye=!0,F=!1,Re=!0,k=!1,Le=!1,be=!1,H=!1,re=!1,se=!1,je=!0,qe=!1;const kt="user-content-";let Ne=!0,X=!1,z={},W=null;const Xe=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ve=null;const $e=l({},["audio","video","img","source","image","track"]);let De=null;const Ke=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),le="http://www.w3.org/1998/Math/MathML",ce="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xhtml";let G=I,Oe=!1,Ce=null;const Pt=l({},[le,ce,I],we);let V=null;const Ut=["application/xhtml+xml","text/html"],Ft="text/html";let d=null,B=null;const Ht=a.createElement("form"),Ze=function(e){return e instanceof RegExp||e instanceof Function},Me=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(B&&B===e)){if((!e||typeof e!="object")&&(e={}),e=U(e),V=Ut.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ft:e.PARSER_MEDIA_TYPE,d=V==="application/xhtml+xml"?we:de,m=D(e,"ALLOWED_TAGS")?l({},e.ALLOWED_TAGS,d):ze,p=D(e,"ALLOWED_ATTR")?l({},e.ALLOWED_ATTR,d):We,Ce=D(e,"ALLOWED_NAMESPACES")?l({},e.ALLOWED_NAMESPACES,we):Pt,De=D(e,"ADD_URI_SAFE_ATTR")?l(U(Ke),e.ADD_URI_SAFE_ATTR,d):Ke,Ve=D(e,"ADD_DATA_URI_TAGS")?l(U($e),e.ADD_DATA_URI_TAGS,d):$e,W=D(e,"FORBID_CONTENTS")?l({},e.FORBID_CONTENTS,d):Xe,q=D(e,"FORBID_TAGS")?l({},e.FORBID_TAGS,d):{},Se=D(e,"FORBID_ATTR")?l({},e.FORBID_ATTR,d):{},z=D(e,"USE_PROFILES")?e.USE_PROFILES:!1,Ge=e.ALLOW_ARIA_ATTR!==!1,ye=e.ALLOW_DATA_ATTR!==!1,Be=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ye=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,F=e.SAFE_FOR_TEMPLATES||!1,Re=e.SAFE_FOR_XML!==!1,k=e.WHOLE_DOCUMENT||!1,H=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,se=e.RETURN_TRUSTED_TYPE||!1,be=e.FORCE_BODY||!1,je=e.SANITIZE_DOM!==!1,qe=e.SANITIZE_NAMED_PROPS||!1,Ne=e.KEEP_CONTENT!==!1,X=e.IN_PLACE||!1,He=e.ALLOWED_URI_REGEXP||yt,G=e.NAMESPACE||I,u=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(u.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(u.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(u.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(ye=!1),re&&(H=!0),z&&(m=l({},gt),p=[],z.html===!0&&(l(m,Tt),l(p,Et)),z.svg===!0&&(l(m,Ie),l(p,ke),l(p,pe)),z.svgFilters===!0&&(l(m,xe),l(p,ke),l(p,pe)),z.mathMl===!0&&(l(m,ve),l(p,_t),l(p,pe))),e.ADD_TAGS&&(m===ze&&(m=U(m)),l(m,e.ADD_TAGS,d)),e.ADD_ATTR&&(p===We&&(p=U(p)),l(p,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&l(De,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(W===Xe&&(W=U(W)),l(W,e.FORBID_CONTENTS,d)),Ne&&(m["#text"]=!0),k&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete q.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw J('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw J('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,j=E.createHTML("")}else E===void 0&&(E=un(L,f)),E!==null&&typeof j=="string"&&(j=E.createHTML(""));A&&A(e),B=e}},Je=l({},["mi","mo","mn","ms","mtext"]),Qe=l({},["foreignobject","annotation-xml"]),zt=l({},["title","style","font","a","script"]),et=l({},[...Ie,...xe,...Jt]),tt=l({},[...ve,...Qt]),Wt=function(e){let t=ae(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});const o=de(e.tagName),c=de(t.tagName);return Ce[e.namespaceURI]?e.namespaceURI===ce?t.namespaceURI===I?o==="svg":t.namespaceURI===le?o==="svg"&&(c==="annotation-xml"||Je[c]):!!et[o]:e.namespaceURI===le?t.namespaceURI===I?o==="math":t.namespaceURI===ce?o==="math"&&Qe[c]:!!tt[o]:e.namespaceURI===I?t.namespaceURI===ce&&!Qe[c]||t.namespaceURI===le&&!Je[c]?!1:!tt[o]&&(zt[o]||!et[o]):!!(V==="application/xhtml+xml"&&Ce[e.namespaceURI]):!1},M=function(e){K(n.removed,{element:e});try{ae(e).removeChild(e)}catch{ie(e)}},ue=function(e,t){try{K(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{K(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!p[e])if(H||re)try{M(t)}catch{}else try{t.setAttribute(e,"")}catch{}},nt=function(e){let t=null,o=null;if(be)e="<remove></remove>"+e;else{const T=dt(e,/^[\r\n\t ]+/);o=T&&T[0]}V==="application/xhtml+xml"&&G===I&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=E?E.createHTML(e):e;if(G===I)try{t=new ge().parseFromString(c,V)}catch{}if(!t||!t.documentElement){t=Ee.createDocument(G,"template",null);try{t.documentElement.innerHTML=Oe?j:c}catch{}}const g=t.body||t.documentElement;return e&&o&&g.insertBefore(a.createTextNode(o),g.childNodes[0]||null),G===I?Ct.call(t,k?"html":"body")[0]:k?t.documentElement:g},ot=function(e){return Dt.call(e.ownerDocument||e,e,R.SHOW_ELEMENT|R.SHOW_COMMENT|R.SHOW_TEXT|R.SHOW_PROCESSING_INSTRUCTION|R.SHOW_CDATA_SECTION,null)},it=function(e){return e instanceof Te&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof ne)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},at=function(e){return typeof Y=="function"&&e instanceof Y},x=function(e,t,o){C[e]&&me(C[e],c=>{c.call(n,t,o,B)})},rt=function(e){let t=null;if(x("beforeSanitizeElements",e,null),it(e))return M(e),!0;const o=d(e.nodeName);if(x("uponSanitizeElement",e,{tagName:o,allowedTags:m}),e.hasChildNodes()&&!at(e.firstElementChild)&&h(/<[/\w]/g,e.innerHTML)&&h(/<[/\w]/g,e.textContent)||e.nodeType===ee.progressingInstruction||Re&&e.nodeType===ee.comment&&h(/<[/\w]/g,e.data))return M(e),!0;if(!m[o]||q[o]){if(!q[o]&&lt(o)&&(u.tagNameCheck instanceof RegExp&&h(u.tagNameCheck,o)||u.tagNameCheck instanceof Function&&u.tagNameCheck(o)))return!1;if(Ne&&!W[o]){const c=ae(e)||e.parentNode,g=Nt(e)||e.childNodes;if(g&&c){const T=g.length;for(let S=T-1;S>=0;--S){const w=oe(g[S],!0);w.__removalCount=(e.__removalCount||0)+1,c.insertBefore(w,bt(e))}}}return M(e),!0}return e instanceof te&&!Wt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&h(/<\/no(script|embed|frames)/i,e.innerHTML)?(M(e),!0):(F&&e.nodeType===ee.text&&(t=e.textContent,me([_e,he,Ae],c=>{t=Z(t,c," ")}),e.textContent!==t&&(K(n.removed,{element:e.cloneNode()}),e.textContent=t)),x("afterSanitizeElements",e,null),!1)},st=function(e,t,o){if(je&&(t==="id"||t==="name")&&(o in a||o in Ht))return!1;if(!(ye&&!Se[t]&&h(wt,t))){if(!(Ge&&h(It,t))){if(!p[t]||Se[t]){if(!(lt(e)&&(u.tagNameCheck instanceof RegExp&&h(u.tagNameCheck,e)||u.tagNameCheck instanceof Function&&u.tagNameCheck(e))&&(u.attributeNameCheck instanceof RegExp&&h(u.attributeNameCheck,t)||u.attributeNameCheck instanceof Function&&u.attributeNameCheck(t))||t==="is"&&u.allowCustomizedBuiltInElements&&(u.tagNameCheck instanceof RegExp&&h(u.tagNameCheck,o)||u.tagNameCheck instanceof Function&&u.tagNameCheck(o))))return!1}else if(!De[t]){if(!h(He,Z(o,Fe,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Vt(o,"data:")===0&&Ve[e])){if(!(Be&&!h(xt,Z(o,Fe,"")))){if(o)return!1}}}}}}return!0},lt=function(e){return e!=="annotation-xml"&&dt(e,vt)},ct=function(e){x("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};let c=t.length;for(;c--;){const g=t[c],{name:T,namespaceURI:S,value:w}=g,$=d(T);let _=T==="value"?w:$t(w);if(o.attrName=$,o.attrValue=_,o.keepAttr=!0,o.forceKeepAttr=void 0,x("uponSanitizeAttribute",e,o),_=o.attrValue,Re&&h(/((--!?|])>)|<\/(style|title)/i,_)){ue(T,e);continue}if(o.forceKeepAttr||(ue(T,e),!o.keepAttr))continue;if(!Ye&&h(/\/>/i,_)){ue(T,e);continue}F&&me([_e,he,Ae],ft=>{_=Z(_,ft," ")});const ut=d(e.nodeName);if(st(ut,$,_)){if(qe&&($==="id"||$==="name")&&(ue(T,e),_=kt+_),E&&typeof L=="object"&&typeof L.getAttributeType=="function"&&!S)switch(L.getAttributeType(ut,$)){case"TrustedHTML":{_=E.createHTML(_);break}case"TrustedScriptURL":{_=E.createScriptURL(_);break}}try{S?e.setAttributeNS(S,T,_):e.setAttribute(T,_),it(e)?M(e):pt(n.removed)}catch{}}}x("afterSanitizeAttributes",e,null)},Gt=function i(e){let t=null;const o=ot(e);for(x("beforeSanitizeShadowDOM",e,null);t=o.nextNode();)x("uponSanitizeShadowNode",t,null),!rt(t)&&(t.content instanceof N&&i(t.content),ct(t));x("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,c=null,g=null;if(Oe=!i,Oe&&(i="<!-->"),typeof i!="string"&&!at(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw J("dirty is not a string, aborting")}else throw J("toString is not a function");if(!n.isSupported)return i;if(Le||Me(e),n.removed=[],typeof i=="string"&&(X=!1),X){if(i.nodeName){const w=d(i.nodeName);if(!m[w]||q[w])throw J("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof Y)t=nt("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===ee.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!H&&!F&&!k&&i.indexOf("<")===-1)return E&&se?E.createHTML(i):i;if(t=nt(i),!t)return H?null:se?j:""}t&&be&&M(t.firstChild);const T=ot(X?i:t);for(;c=T.nextNode();)rt(c)||(c.content instanceof N&&Gt(c.content),ct(c));if(X)return i;if(H){if(re)for(g=Ot.call(t.ownerDocument);t.firstChild;)g.appendChild(t.firstChild);else g=t;return(p.shadowroot||p.shadowrootmode)&&(g=Mt.call(r,g,!0)),g}let S=k?t.outerHTML:t.innerHTML;return k&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&h(Rt,t.ownerDocument.doctype.name)&&(S="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+S),F&&me([_e,he,Ae],w=>{S=Z(S,w," ")}),E&&se?E.createHTML(S):S},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Me(i),Le=!0},n.clearConfig=function(){B=null,Le=!1},n.isValidAttribute=function(i,e,t){B||Me({});const o=d(i),c=d(e);return st(o,c,t)},n.addHook=function(i,e){typeof e=="function"&&(C[i]=C[i]||[],K(C[i],e))},n.removeHook=function(i){if(C[i])return pt(C[i])},n.removeHooks=function(i){C[i]&&(C[i]=[])},n.removeAllHooks=function(){C={}},n}var fn=Lt();function mn(s){return fn.sanitize(s)}const pn=({children:s,content:n,isOpen:a,setIsOpen:r,maxWidth:f="5xl",noProse:N=!1,alignTop:v=!1,ariaLabel:Y,ariaDescription:te})=>{const R=fe.useRef(null),ne=N?"":Yt.base;fe.useEffect(()=>{var L,O,oe,ie;(L=R.current)!=null&&L.open&&!a?(O=R.current)==null||O.close():!((oe=R.current)!=null&&oe.open)&&a&&((ie=R.current)==null||ie.showModal())},[a]),fe.useEffect(()=>(a?document.body.classList.add("cu-no-body-scroll"):document.body.classList.remove("cu-no-body-scroll"),()=>{document.body.classList.remove("cu-no-body-scroll")}),[a]),fe.useEffect(()=>{const L=O=>{O.key==="Escape"&&r(!1)};return a&&document.addEventListener("keydown",L),()=>{document.removeEventListener("keydown",L)}},[a,r]);const Te=L=>{L.target===R.current&&r(!1)},ge=v?"mt-12":"";return P.jsxs("dialog",{ref:R,className:`cu-dialog relative ${ge} p-5 md:p-6 z-10 w-11/12 ${Bt[f]} shadow-md rounded-md`,onClick:Te,"aria-labelledby":Y,"aria-describedby":te,children:[P.jsxs("button",{className:"absolute top-0 right-0 z-50 p-0.5 rounded-bl-md bg-cu-black-50 text-cu-black-500 hover:bg-cu-red hover:text-white",onClick:()=>r(!1),children:[P.jsx("span",{className:"sr-only",children:"Close"}),P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:P.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]}),n?P.jsx("div",{className:ne,dangerouslySetInnerHTML:{__html:mn(n)}}):P.jsx("div",{className:ne,children:s})]})};pn.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},noProse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},ariaDescription:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},alignTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""}}};export{pn as M};
