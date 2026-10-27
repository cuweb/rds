var CE=Object.defineProperty;var DE=Object.getPrototypeOf;var ME=Reflect.get;var wh=t=>{throw TypeError(t)};var xE=(t,e,i)=>e in t?CE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Sh=(t,e,i)=>xE(t,typeof e!="symbol"?e+"":e,i),Vl=(t,e,i)=>e.has(t)||wh("Cannot "+i);var A=(t,e,i)=>(Vl(t,e,"read from private field"),i?i.call(t):e.get(t)),Fe=(t,e,i)=>e.has(t)?wh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ze=(t,e,i,a)=>(Vl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),mt=(t,e,i)=>(Vl(t,e,"access private method"),i);var is=(t,e,i)=>ME(DE(t),i,e);import{R as Pn,r as $n}from"./iframe-Ps8mpCes.js";import{H as OE,C as NE}from"./hls-B54Fto-w.js";import{C as as,M as PE}from"./mixin-DgVycuUU.js";import"./preload-helper-Dp1pzeXC.js";var $E=Object.create,up=Object.defineProperty,UE=Object.getOwnPropertyDescriptor,HE=Object.getOwnPropertyNames,BE=Object.getPrototypeOf,WE=Object.prototype.hasOwnProperty,cp=function(t,e){return function(){return t&&(e=t(t=0)),e}},ct=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},FE=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=HE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!WE.call(t,o)&&o!==i&&up(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=UE(e,o))||a.enumerable});return t},KE=function(t,e,i){return i=t!=null?$E(BE(t)):{},FE(!t||!t.__esModule?up(i,"default",{value:t,enumerable:!0}):i,t)};function Ra(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):Ra(t,e)}var La=cp(function(){La()});function hp(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var mp=cp(function(){}),pp=ct(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),VE=ct(function(t,e){La(),e.exports=i;function i(a,r){if(!Ra(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),qE=ct(function(t,e){La(),e.exports=i;function i(a,r){if(!Ra(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),vp=ct(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),fp=ct(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Ep=ct(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),YE=ct(function(t,e){mp(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(c){switch(c.nodeType){case 3:return p(c.data);case 8:return"<!--"+c.data+"-->";default:return r(c)}}function r(c){var d=[],v=c.tagName;return c.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),d.push("<"+v+u(c)+o(c)),i.indexOf(v)>-1?d.push(" />"):(d.push(">"),c.childNodes.length?d.push.apply(d,c.childNodes.map(a)):c.textContent||c.innerText?d.push(p(c.textContent||c.innerText)):c.innerHTML&&d.push(c.innerHTML),d.push("</"+v+">")),d.join("")}function n(c,d){var v=hp(c[d]);return d==="style"&&Object.keys(c.style).length>0?!0:c.hasOwnProperty(d)&&(v==="string"||v==="boolean"||v==="number")&&d!=="nodeName"&&d!=="className"&&d!=="tagName"&&d!=="textContent"&&d!=="innerText"&&d!=="namespaceURI"&&d!=="innerHTML"}function s(c){if(typeof c=="string")return c;var d="";return Object.keys(c).forEach(function(v){var _=c[v];v=v.replace(/[A-Z]/g,function(E){return"-"+E.toLowerCase()}),d+=v+":"+_+";"}),d}function o(c){var d=c.dataset,v=[];for(var _ in d)v.push({name:"data-"+_,value:d[_]});return v.length?l(v):""}function l(c){var d=[];return c.forEach(function(v){var _=v.name,E=v.value;_==="style"&&(E=s(E)),d.push(_+'="'+m(E)+'"')}),d.length?" "+d.join(" "):""}function u(c){var d=[];for(var v in c)n(c,v)&&d.push({name:v,value:c[v]});for(var _ in c._attributes)for(var E in c._attributes[_]){var y=c._attributes[_][E],f=(y.prefix?y.prefix+":":"")+E;d.push({name:f,value:y.value})}return c.className&&d.push({name:"class",value:c.className}),d.length?l(d):""}function p(c){var d="";return typeof c=="string"?d=c:c&&(d=c.toString()),d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(c){return p(c).replace(/"/g,"&quot;")}}),_p=ct(function(t,e){La();var i=pp(),a=vp(),r=fp(),n=Ep(),s=YE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(u,p,m){if(!Ra(this,l))return new l(u);var c=m===void 0?o:m||null;this.tagName=c===o?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=c,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},l.prototype.replaceChild=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[m]=u,u.parentNode=this,p},l.prototype.removeChild=function(u){var p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1),u.parentNode=null,u},l.prototype.insertBefore=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=p==null?-1:this.childNodes.indexOf(p);return m>-1?this.childNodes.splice(m,0,u):this.childNodes.push(u),u.parentNode=this,u},l.prototype.setAttributeNS=function(u,p,m){var c=null,d=p,v=p.indexOf(":");if(v>-1&&(c=p.substr(0,v),d=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=m;else{var _=this._attributes[u]||(this._attributes[u]={});_[d]={value:m,prefix:c}}},l.prototype.getAttributeNS=function(u,p){var m=this._attributes[u],c=m&&m[p]&&m[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof c!="string"?null:c},l.prototype.removeAttributeNS=function(u,p){var m=this._attributes[u];m&&delete m[p]},l.prototype.hasAttributeNS=function(u,p){var m=this._attributes[u];return!!m&&p in m},l.prototype.setAttribute=function(u,p){return this.setAttributeNS(null,u,p)},l.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},l.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},l.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(u){var p=u.split(" "),m=[];return i(this,function(c){if(c.nodeType===1){var d=c.className||"",v=d.split(" ");p.every(function(_){return v.indexOf(_)!==-1})&&m.push(c)}}),m},l.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var p=[];return i(this.childNodes,function(m){m.nodeType===1&&(u==="*"||m.tagName.toLowerCase()===u)&&p.push(m)}),p},l.prototype.contains=function(u){return i(this,function(p){return u===p})||!1}}),GE=ct(function(t,e){La();var i=_p();e.exports=a;function a(r){if(!Ra(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),zE=ct(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),QE=ct(function(t,e){La();var i=pp(),a=VE(),r=qE(),n=_p(),s=GE(),o=zE(),l=vp(),u=fp(),p=Ep();e.exports=m;function m(){if(!Ra(this,m))return new m;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var c=m.prototype;c.createTextNode=function(d){return new r(d,this)},c.createElementNS=function(d,v){var _=d===null?null:String(d);return new n(v,this,_)},c.createElement=function(d){return new n(d,this)},c.createDocumentFragment=function(){return new s(this)},c.createEvent=function(d){return new o(d)},c.createComment=function(d){return new a(d,this)},c.getElementById=function(d){d=String(d);var v=i(this.childNodes,function(_){if(String(_.id)===d)return _});return v||null},c.getElementsByClassName=n.prototype.getElementsByClassName,c.getElementsByTagName=n.prototype.getElementsByTagName,c.contains=n.prototype.contains,c.removeEventListener=p,c.addEventListener=u,c.dispatchEvent=l}),jE=ct(function(t,e){var i=QE();e.exports=new i}),ZE=ct(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=jE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function XE(t){if(Array.isArray(t))return t}function JE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function e_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function bp(t,e){if(t){if(typeof t=="string")return hd(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return hd(t,e)}}function Si(t,e){return XE(t)||JE(t,e)||bp(t,e)||e_()}var t_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{},q=t_,i_={now:function(){var t=q.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Pe=i_,Un=function(){var t,e,i;if(typeof((t=q.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),q.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var u=l==="x"?i[n]:i[n]&3|8;return n++,u.toString(16)});var s=Pe.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},gp=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},St=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=gp()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},Po=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=St(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function a_(t){if(Array.isArray(t))return hd(t)}function r_(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function It(t){return a_(t)||r_(t)||bp(t)||n_()}var va={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},s_=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,It(o)),u=(a=console.info).bind.apply(a,It(o)),p=(r=console.debug).bind.apply(r,It(o)),m=(n=console.warn).bind.apply(n,It(o)),c=(s=console.error).bind.apply(s,It(o)),d=e;return{trace:function(){for(var v=arguments.length,_=new Array(v),E=0;E<v;E++)_[E]=arguments[E];if(!(d>va.TRACE))return l.apply(void 0,It(_))},debug:function(){for(var v=arguments.length,_=new Array(v),E=0;E<v;E++)_[E]=arguments[E];if(!(d>va.DEBUG))return p.apply(void 0,It(_))},info:function(){for(var v=arguments.length,_=new Array(v),E=0;E<v;E++)_[E]=arguments[E];if(!(d>va.INFO))return u.apply(void 0,It(_))},warn:function(){for(var v=arguments.length,_=new Array(v),E=0;E<v;E++)_[E]=arguments[E];if(!(d>va.WARN))return m.apply(void 0,It(_))},error:function(){for(var v=arguments.length,_=new Array(v),E=0;E<v;E++)_[E]=arguments[E];if(!(d>va.ERROR))return c.apply(void 0,It(_))},get level(){return d},set level(v){v!==this.level&&(d=v??e)}}},se=s_("[mux]");function md(){var t=q.doNotTrack||q.navigator&&q.navigator.doNotTrack;return t==="1"}function U(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}La();function ye(t,e){if(!Ra(t,e))throw new TypeError("Cannot call a class as a function")}function Ih(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function gt(t,e,i){return e&&Ih(t.prototype,e),i&&Ih(t,i),t}function R(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function wr(t){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},wr(t)}function o_(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=wr(t),t!==null););return t}function As(t,e,i){return typeof Reflect<"u"&&Reflect.get?As=Reflect.get:As=function(a,r,n){var s=o_(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},As(t,e,i||t)}function pd(t,e){return pd=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},pd(t,e)}function l_(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pd(t,e)}function d_(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function u_(t,e){if(t==null)return{};var i=d_(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function c_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}mp();function h_(t,e){return e&&(hp(e)==="object"||typeof e=="function")?e:U(t)}function m_(t){var e=c_();return function(){var i=wr(t),a;if(e){var r=wr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return h_(this,a)}}var Nt=function(t){return Hn(t)[0]},Hn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},p_={exists:function(){var t=q.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=q.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=q.performance,e=t&&t.timing;return e&&e.navigationStart}},$o=p_;function De(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function Bn(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){R(t,r,i[r])})}return t}function v_(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function $u(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v_(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var f_=["x-cdn","content-type"],yp=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],E_=f_.concat(yp);function Uu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(E_.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function Uo(t){if(t){var e=yp.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var __=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},Tp=__,rs=function(t){if(!t)return{};var e=$o.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Hr=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return Uu(t.getAllResponseHeaders())},b_=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(E){var y=parseInt(a.version),f;return y===1&&E.programDateTime!==null&&(f=E.programDateTime),y===0&&E.pdt!==null&&(f=E.pdt),f};if(!$o.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(E,y){return t.emit(e,E,y)},l=function(E,y){var f=y.levels,T=y.audioTracks,w=y.url,D=y.stats,x=y.networkDetails,I=y.sessionData,H={},Y={};f.forEach(function(Te,qe){H[qe]={width:Te.width,height:Te.height,bitrate:Te.bitrate,attrs:Te.attrs}}),T.forEach(function(Te,qe){Y[qe]={name:Te.name,language:Te.lang,bitrate:Te.bitrate}});var F=rs(D),W=F.bytesLoaded,Be=F.requestStart,it=F.responseStart,at=F.responseEnd;o("requestcompleted",$u(Bn({},Tp(I)),{request_event_type:E,request_bytes_loaded:W,request_start:Be,request_response_start:it,request_response_end:at,request_type:"manifest",request_hostname:Nt(w),request_response_headers:Hr(x),request_rendition_lists:{media:H,audio:Y,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var u=function(E,y){var f=y.details,T=y.level,w=y.networkDetails,D=y.stats,x=rs(D),I=x.bytesLoaded,H=x.requestStart,Y=x.responseStart,F=x.responseEnd,W=f.fragments[f.fragments.length-1],Be=s(W)+n(W.duration);o("requestcompleted",{request_event_type:E,request_bytes_loaded:I,request_start:H,request_response_start:Y,request_response_end:F,request_current_level:T,request_type:"manifest",request_hostname:Nt(f.url),request_response_headers:Hr(w),video_holdback:f.holdBack&&n(f.holdBack),video_part_holdback:f.partHoldBack&&n(f.partHoldBack),video_part_target_duration:f.partTarget&&n(f.partTarget),video_target_duration:f.targetduration&&n(f.targetduration),video_source_is_live:f.live,player_manifest_newest_program_time:isNaN(Be)?void 0:Be})};i.on(a.Events.LEVEL_LOADED,u);var p=function(E,y){var f=y.details,T=y.networkDetails,w=y.stats,D=rs(w),x=D.bytesLoaded,I=D.requestStart,H=D.responseStart,Y=D.responseEnd;o("requestcompleted",{request_event_type:E,request_bytes_loaded:x,request_start:I,request_response_start:H,request_response_end:Y,request_type:"manifest",request_hostname:Nt(f.url),request_response_headers:Hr(T)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var m=function(E,y){var f=y.stats,T=y.networkDetails,w=y.frag;f=f||w.stats;var D=rs(f),x=D.bytesLoaded,I=D.requestStart,H=D.responseStart,Y=D.responseEnd,F=T?Hr(T):void 0,W={request_event_type:E,request_bytes_loaded:x,request_start:I,request_response_start:H,request_response_end:Y,request_hostname:T?Nt(T.responseURL):void 0,request_id:F?Uo(F):void 0,request_response_headers:F,request_media_duration:w.duration,request_url:T==null?void 0:T.responseURL};w.type==="main"?(W.request_type="media",W.request_current_level=w.level,W.request_video_width=(i.levels[w.level]||{}).width,W.request_video_height=(i.levels[w.level]||{}).height,W.request_labeled_bitrate=(i.levels[w.level]||{}).bitrate):W.request_type=w.type,o("requestcompleted",W)};i.on(a.Events.FRAG_LOADED,m);var c=function(E,y){var f=y.frag,T=f.start,w=s(f),D={currentFragmentPDT:w,currentFragmentStart:n(T)};o("fragmentchange",D)};i.on(a.Events.FRAG_CHANGED,c);var d=function(E,y){var f=y.type,T=y.details,w=y.response,D=y.fatal,x=y.frag,I=y.networkDetails,H=(x==null?void 0:x.url)||y.url||"",Y=I?Hr(I):void 0;if((T===a.ErrorDetails.MANIFEST_LOAD_ERROR||T===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||T===a.ErrorDetails.FRAG_LOAD_ERROR||T===a.ErrorDetails.FRAG_LOAD_TIMEOUT||T===a.ErrorDetails.LEVEL_LOAD_ERROR||T===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||T===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||T===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||T===a.ErrorDetails.SUBTITLE_LOAD_ERROR||T===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||T===a.ErrorDetails.KEY_LOAD_ERROR||T===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:T,request_url:H,request_hostname:Nt(H),request_id:Y?Uo(Y):void 0,request_type:T===a.ErrorDetails.FRAG_LOAD_ERROR||T===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":T===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||T===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":T===a.ErrorDetails.SUBTITLE_LOAD_ERROR||T===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":T===a.ErrorDetails.KEY_LOAD_ERROR||T===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:w==null?void 0:w.code,request_error_text:w==null?void 0:w.text}),D){var F,W="".concat(H?"url: ".concat(H,`
`):"")+"".concat(w&&(w.code||w.text)?"response: ".concat(w.code,", ").concat(w.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((F=y.err)===null||F===void 0?void 0:F.message,`
`):"");o("error",{player_error_code:f,player_error_message:T,player_error_context:W})}};i.on(a.Events.ERROR,d);var v=function(E,y){var f=y.frag,T=f&&f._url||"";o("requestcanceled",{request_event_type:E,request_url:T,request_type:"media",request_hostname:Nt(T)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var _=function(E,y){var f=y.level,T=i.levels[f];if(T&&T.attrs&&T.attrs.BANDWIDTH){var w=T.attrs.BANDWIDTH,D,x=parseFloat(T.attrs["FRAME-RATE"]);isNaN(x)||(D=x),w?o("renditionchange",{video_source_fps:D,video_source_bitrate:w,video_source_width:T.width,video_source_height:T.height,video_source_rendition_name:T.name,video_source_codec:T==null?void 0:T.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,_),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,u),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,m),i.off(a.Events.FRAG_CHANGED,c),i.off(a.Events.ERROR,d),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,_),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},g_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Rh=function(t,e){if(!t||!t.requestEndDate)return{};var i=Nt(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,u=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),p;u.length>0&&(p=Uu(u[u.length-1]._responseHeaders||""));var m=p?Uo(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:m}},y_=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},T_=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},A_=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},k_=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=A_(i),n=function(f,T){return t.emit(e,f,T)},s=function(f){var T=f.type,w=f.data,D=(w||{}).url;n("requestcompleted",{request_event_type:T,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Nt(D),request_url:D})};i.on("manifestLoaded",s);var o={},l=function(f){if(typeof f.getRequests!="function")return null;var T=f.getRequests({state:"executed"});return T.length===0?null:T[T.length-1]},u=function(f){var T=f.type,w=f.fragmentModel,D=f.chunk,x=l(w);p({type:T,request:x,chunk:D})},p=function(f){var T=f.type,w=f.chunk,D=f.request,x=(w||{}).mediaInfo,I=x||{},H=I.type,Y=I.bitrateList;Y=Y||[];var F={};Y.forEach(function(rt,Me){F[Me]={},F[Me].width=rt.width,F[Me].height=rt.height,F[Me].bitrate=rt.bandwidth,F[Me].attrs={}}),H==="video"?o.video=F:H==="audio"?o.audio=F:o.media=F;var W=Rh(D,i),Be=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,Te=W.requestResponseHeaders,qe=W.requestMediaDuration,Ht=W.requestHostname,Ye=W.requestUrl,Tt=W.requestId;n("requestcompleted",{request_event_type:T,request_start:Be,request_response_start:it,request_response_end:at,request_bytes_loaded:-1,request_type:H+"_init",request_response_headers:Te,request_hostname:Ht,request_id:Tt,request_url:Ye,request_media_duration:qe,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",u);var m=function(f){var T=f.type,w=f.fragmentModel,D=f.chunk,x=l(w);c({type:T,request:x,chunk:D})},c=function(f){var T=f.type,w=f.chunk,D=f.request,x=w||{},I=x.mediaInfo,H=x.start,Y=I||{},F=Y.type,W=Rh(D,i),Be=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,Te=W.requestBytesLoaded,qe=W.requestResponseHeaders,Ht=W.requestMediaDuration,Ye=W.requestHostname,Tt=W.requestUrl,rt=W.requestId,Me=y_(F,i),di=Me.currentLevel,We=Me.renditionWidth,Ge=Me.renditionHeight,ui=Me.renditionBitrate;n("requestcompleted",{request_event_type:T,request_start:Be,request_response_start:it,request_response_end:at,request_bytes_loaded:Te,request_type:F,request_response_headers:qe,request_hostname:Ye,request_id:rt,request_url:Tt,request_media_start_time:H,request_media_duration:Ht,request_current_level:di,request_labeled_bitrate:ui,request_video_width:We,request_video_height:Ge})};r>=4?i.on("mediaFragmentLoaded",c):i.on("mediaFragmentLoaded",m);var d={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(d.video&&typeof d.video.bitrate=="number"){if(!(d.video.width&&d.video.height)){a.warn("have bitrate info for video but missing width/height");return}var f=d.video.bitrate;if(d.audio&&typeof d.audio.bitrate=="number"&&(f+=d.audio.bitrate),f!==d.totalBitrate)return d.totalBitrate=f,{video_source_bitrate:f,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:T_(d.video.codec)}}},_=function(f,T,w){var D=f.mediaType;if(D==="audio"||D==="video"){var x;if(typeof i.getRepresentationsByType=="function")if(f.newRepresentation)x={bitrate:f.newRepresentation.bandwidth,width:f.newRepresentation.width,height:f.newRepresentation.height,qualityIndex:f.newRepresentation.absoluteIndex};else{var I=i.getRepresentationsByType(D);if(I&&typeof f.newQuality=="number"){var H=I.find(function(F){return F.absoluteIndex===f.newQuality||F.index===f.newQuality});H&&(x={bitrate:H.bandwidth,width:H.width,height:H.height,qualityIndex:f.newQuality})}}else{if(typeof f.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",f);return}x=i.getBitrateInfoListFor(D).find(function(F){var W=F.qualityIndex;return W===f.newQuality})}if(!(x&&typeof x.bitrate=="number")){a.warn("missing bitrate info for ".concat(D));return}d[D]=$u(Bn({},x),{codec:i.getCurrentTrackFor(D).codec});var Y=v();Y&&n("renditionchange",Y)}};i.on("qualityChangeRendered",_);var E=function(f){var T=f.request,w=f.mediaType;T=T||{},n("requestcanceled",{request_event_type:T.type+"_"+T.action,request_url:T.url,request_type:w,request_hostname:Nt(T.url)})};i.on("fragmentLoadingAbandoned",E);var y=function(f){var T=f.error,w,D,x=(T==null||(w=T.data)===null||w===void 0?void 0:w.request)||{},I=(T==null||(D=T.data)===null||D===void 0?void 0:D.response)||{};(T==null?void 0:T.code)===27&&n("requestfailed",{request_error:x.type+"_"+x.action,request_url:x.url,request_hostname:Nt(x.url),request_type:x.mediaType,request_error_code:I.status,request_error_text:I.statusText});var H="".concat(x!=null&&x.url?"url: ".concat(x.url,`
`):"")+"".concat(I!=null&&I.status||I!=null&&I.statusText?"response: ".concat(I==null?void 0:I.status,", ").concat(I==null?void 0:I.statusText,`
`):"");n("error",{player_error_code:T==null?void 0:T.code,player_error_message:T==null?void 0:T.message,player_error_context:H})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",c),i.off("qualityChangeRendered",_),i.off("error",y),i.off("fragmentLoadingAbandoned",E),delete i._stopMuxMonitor}},w_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Lh=0,S_=(function(){function t(){ye(this,t),R(this,"_listeners",void 0)}return gt(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++Lh,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++Lh;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(u,p){u=u.slice(),u.forEach(function(m){m.call(a,{type:e},p)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),I_=S_,R_=(function(){function t(e){var i=this;ye(this,t),R(this,"_playbackHeartbeatInterval",void 0),R(this,"_playheadShouldBeProgressing",void 0),R(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(q.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return gt(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=q.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(q.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),L_=R_,C_=function t(e){var i=this;ye(this,t),R(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},D_=C_,M_=(function(){function t(e){ye(this,t),R(this,"_watchTimeTrackerLastCheckedTime",void 0),R(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return gt(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),De(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),x_=M_,O_=(function(){function t(e){var i=this;ye(this,t),R(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),R(this,"_lastTime",void 0),R(this,"_isAdPlaying",void 0),R(this,"_callbackUpdatePlaybackTime",void 0),R(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Pe.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Pe.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return gt(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Pe.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=Pe.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&De(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&De(this.pm.data,"ad_playing_time_ms_cumulative",a),De(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),N_=O_,P_=(function(){function t(e){ye(this,t),R(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return gt(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),$_=P_,Ch=300*1e3,U_=function t(e){if(ye(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;De(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>Ch&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Ch,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(De(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},H_=U_,B_=(function(){function t(e){var i=this;ye(this,t),R(this,"_lastCheckedTime",void 0),R(this,"_lastPlayheadTime",void 0),R(this,"_lastPlayheadTimeUpdatedTime",void 0),R(this,"_rebuffering",void 0),R(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Pe.now()})}))}return gt(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),W_=B_,F_=(function(){function t(e){var i=this;ye(this,t),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Pe.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return gt(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),K_=F_,V_=function t(e){var i=this;ye(this,t),R(this,"_lastPlayerHeight",void 0),R(this,"_lastPlayerWidth",void 0),R(this,"_lastPlayheadPosition",void 0),R(this,"_lastSourceHeight",void 0),R(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),u=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,u),De(e.data,"view_total_content_playback_time",s),De(e.data,"view_total_upscaling",l*s),De(e.data,"view_total_downscaling",u*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},q_=V_,Y_=2e3,G_=function t(e){var i=this;ye(this,t),R(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Pe.now(),s=(e.data.viewer_time||n)-(a||n);De(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=Y_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,De(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},z_=G_,Dh=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},Q_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],j_=(function(){function t(e){var i=this;ye(this,t),R(this,"_adHasPlayed",void 0),R(this,"_adRequests",void 0),R(this,"_adResponses",void 0),R(this,"_currentAdRequestNumber",void 0),R(this,"_currentAdResponseNumber",void 0),R(this,"_prerollPlayTime",void 0),R(this,"_wouldBeNewAdPlay",void 0),R(this,"isAdBreak",void 0),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),Q_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),Dh(i._adRequests,n),De(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||De(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),Dh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&De(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,De(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||De(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||De(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return gt(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=Si(Hn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=Si(Hn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i==null?void 0:i.ad_type)}}]),t})(),Z_=j_,X_=function t(e){var i=this;ye(this,t),R(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Pe.now(),e.on("before*",r)},r=function(n){var s=Pe.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},J_=X_,Ap=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var c=u[m].split("="),d=c.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{var v=c[0].replace(p,decodeURIComponent);if(d=i.read?i.read(d,v):i(d,v)||d.replace(p,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch{}if(r===v){o=d;break}r||(o[v]=d)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),kp="muxData",eb=function(t){return Object.entries(t).map(function(e){var i=Si(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},tb=function(t){return t.split("&").reduce(function(e,i){var a=Si(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},wp=function(){var t;try{t=tb(Ap.get(kp)||"")}catch{t={}}return t},Sp=function(t){try{Ap.set(kp,eb(t),{expires:365})}catch{}},ib=function(){var t=wp();return t.mux_viewer_id=t.mux_viewer_id||Un(),t.msn=t.msn||Math.random(),Sp(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},ab=function(){var t=wp(),e=Pe.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Un(),t.sst=e),t.sex=e+1500*1e3,Sp(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function rb(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var nb={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},sb=Ip(nb),ob={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Mh=Ip(ob);function Ip(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function vd(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=sb[s];o||(se.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Mh[l]?o+=Mh[l]:Number.isInteger(Number(l))?o+=l:(se.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var lb=KE(ZE()),db=typeof document<"u"?document:lb.default,Ua=db,ub={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},cb=56*1024,hb=["hb","requestcompleted","requestfailed","requestcanceled"],mb="https://img.litix.io",Ii=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||mb,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},ub,e)};Ii.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};Ii.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};Ii.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),q.clearTimeout(this._sendTimeout)};Ii.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],vd({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);Rp(this._beaconUrl,i,!0,function(){})};Ii.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Pe.now();Rp(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,se.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Pe.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};Ii.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};Ii.prototype._startBeaconSending=function(){var t=this;q.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=q.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};Ii.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Pe.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(se.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return hb.indexOf(l.e)===-1}),s()),o()||(se.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var u in l){var p=l[u],m=50*1024;typeof p=="string"&&p.length>m&&(l[u]=p.substring(0,m))}}),s()),a};var pb=typeof Ua.exitPictureInPicture=="function"?function(t){return t.length<=cb}:function(t){return!1},Rp=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(q.fetch){q.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:pb(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(q.XMLHttpRequest){var r=new q.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},vb=Ii,fb=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],Eb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],_b=["ad_id","ad_creative_id","ad_universal_id"],bb=["viewstart","error","ended","viewend"],gb=600*1e3,yb=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};ye(this,t);var r,n,s,o,l,u,p,m,c,d,v,_;R(this,"mux",void 0),R(this,"envKey",void 0),R(this,"options",void 0),R(this,"eventQueue",void 0),R(this,"sampleRate",void 0),R(this,"disableCookies",void 0),R(this,"respectDoNotTrack",void 0),R(this,"previousBeaconData",void 0),R(this,"lastEventTime",void 0),R(this,"rateLimited",void 0),R(this,"pageLevelData",void 0),R(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new vb(rb(this.envKey,this.options));var E;this.sampleRate=(E=this.options.sampleRate)!==null&&E!==void 0?E:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var f;this.respectDoNotTrack=(f=this.options.respectDoNotTrack)!==null&&f!==void 0?f:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(u=p.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(c=this.options.platform)===null||c===void 0||(m=c.os)===null||m===void 0?void 0:m.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(d=v.os)===null||d===void 0?void 0:d.version,page_url:q==null||(_=q.location)===null||_===void 0?void 0:_.href},this.viewerData=this.disableCookies?{}:ib()}return gt(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&md())return se.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return se.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:ab(),r=$u(Bn({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=vd(o);if(this.lastEventTime=this.mux.utils.now(),s)return se.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||se.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(se.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(bb.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=vd(r),this.eventQueue.queueEvent(r.event,l),se.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=gb)r=Bn({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=Si(o,2),u=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[u]||fb.indexOf(u)>-1||a.objectHasChanged(s,u,p,a.previousBeaconData[u])||a.eventRequiresKey(e,u))&&(r[u]=p,a.previousBeaconData[u]=p)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||_b.includes(i)&&Eb.includes(e)||e==="playbackmodechange"&&i.indexOf("player_playback_mode")===0)}}]),t})(),Tb=function t(e){ye(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,u=function(c,d){var v=d.request_start,_=d.request_response_start,E=d.request_response_end,y=d.request_bytes_loaded;n++;var f,T;if(_?(f=_-(v??0),T=(E??0)-_):T=(E??0)-(v??0),T>0&&y&&y>0){var w=y/T*8e3;s++,a+=y,r+=T,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,w),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,f>0&&(i+=f,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,f),e.data.view_average_request_latency=i/s)}},p=function(c,d){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},m=function(c,d){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",u),e.on("requestfailed",p),e.on("requestcanceled",m)},Ab=Tb,kb=3600*1e3,wb=function t(e){var i=this;ye(this,t),R(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Pe.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>kb){var l=Object.keys(e.data).reduce(function(p,m){return m.indexOf("video_")===0?Object.assign(p,R({},m,e.data[m])):p},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=u,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},Sb=wb,Ib=function t(e){ye(this,t);var i=function(o){var l=Rb(o),u=Lb(o);if(l!=null&&!xh(l,n)&&s<=u){n=l,s=u;var p={video_cdn:l};e.emit("cdnchange",p)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var u=l==null?void 0:l.video_cdn;u&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(xh(u,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=u))}),e.on("requestcompleted",function(o,l){i(l)})};function xh(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}function Rb(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function Lb(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var Cb=Ib,Db=function(t){try{return JSON.parse(t),!0}catch{return!1}},Mb=function t(e){var i=this;ye(this,t),R(this,"_emittingAutomaticEvent",!1),R(this,"_hasInitialized",!1),R(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?Db(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},xb=Mb,Ob=(function(){function t(e){ye(this,t),R(this,"pm",void 0),R(this,"_currentRangeStart",void 0),R(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return gt(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),Nb=Ob,Xt=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),Pb=function(t){if(!t)return Xt.UNKNOWN;switch(t){case"cellular":case"wimax":return Xt.CELLULAR;case"wifi":return Xt.WIFI;case"ethernet":return Xt.WIRED;case"none":return Xt.NO_CONNECTION;case"bluetooth":case"other":return Xt.OTHER;case"unknown":return Xt.UNKNOWN;default:return Xt.OTHER}},$b=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},Ub=(function(){function t(e){var i=this;ye(this,t),R(this,"pm",void 0),R(this,"lastType",void 0),R(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),q.addEventListener("online",r),q.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),q.removeEventListener("online",r),q.removeEventListener("offline",r)})})}return gt(t,[{key:"type",get:function(){var e,i;return((e=q.navigator)===null||e===void 0?void 0:e.onLine)===!1?Xt.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?Pb(t.connection.type):Xt.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",Bn({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return $b(q.navigator)?q.navigator.connection:null}}]),t})(),Hb=Ub,Bb=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],Wb=new Set(["requestcompleted","requestfailed","requestcanceled"]),Fb=(function(t){l_(i,t);var e=m_(i);function i(a,r,n){ye(this,i);var s;s=e.call(this),R(U(s),"pageLoadEndTime",void 0),R(U(s),"pageLoadInitTime",void 0),R(U(s),"_destroyed",void 0),R(U(s),"_heartBeatTimeout",void 0),R(U(s),"adTracker",void 0),R(U(s),"dashjs",void 0),R(U(s),"data",void 0),R(U(s),"disablePlayheadRebufferTracking",void 0),R(U(s),"disableRebufferTracking",void 0),R(U(s),"disableAdPlaybackRangeFiltering",void 0),R(U(s),"errorTracker",void 0),R(U(s),"errorTranslator",void 0),R(U(s),"emitTranslator",void 0),R(U(s),"getAdData",void 0),R(U(s),"getPlayheadTime",void 0),R(U(s),"getStateData",void 0),R(U(s),"stateDataTranslator",void 0),R(U(s),"hlsjs",void 0),R(U(s),"id",void 0),R(U(s),"longResumeTracker",void 0),R(U(s),"minimumRebufferDuration",void 0),R(U(s),"mux",void 0),R(U(s),"playbackEventDispatcher",void 0),R(U(s),"playbackHeartbeat",void 0),R(U(s),"playbackHeartbeatTime",void 0),R(U(s),"playheadTime",void 0),R(U(s),"seekingTracker",void 0),R(U(s),"sustainedRebufferThreshold",void 0),R(U(s),"watchTimeTracker",void 0),R(U(s),"currentFragmentPDT",void 0),R(U(s),"currentFragmentStart",void 0),s.pageLoadInitTime=$o.navigationStart(),s.pageLoadEndTime=$o.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(c){return c},emitTranslator:function(){for(var c=arguments.length,d=new Array(c),v=0;v<c;v++)d[v]=arguments[v];return d},stateDataTranslator:function(c){return c}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),se.level=n.debug?va.DEBUG:va.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new yb(a,n.data.env_key,n),s.data={player_instance_id:Un(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(U(s));if(s.on("viewinit",function(c,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(c,d){this._resetView(d)}),s.on("programchange",function(c,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(c,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var c=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",c&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var p=function(c){c.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",p)})}s.on("playerready",function(c,d){Object.assign(this.data,d)}),Bb.forEach(function(c){s.on(c,function(d,v){c.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+c,function(){(c!=="error"||this.errorTracker.viewErrored)&&this.send(c)})}),s.on("viewend",function(c,d){Object.assign(s.data,d)});var m=function(c){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",m),s.longResumeTracker=new Sb(U(s)),s.errorTracker=new D_(U(s)),new J_(U(s)),s.seekingTracker=new z_(U(s)),s.playheadTime=new $_(U(s)),s.playbackHeartbeat=new L_(U(s)),new q_(U(s)),s.watchTimeTracker=new x_(U(s)),new N_(U(s)),new Nb(U(s)),s.adTracker=new Z_(U(s)),new W_(U(s)),new H_(U(s)),new K_(U(s)),new Ab(U(s)),new Cb(U(s)),new xb(U(s)),new Hb(U(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return gt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=As(wr(i.prototype),"emit",this)).call.apply(n,[this].concat(It(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=Si(Hn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(u){return u[0]!==u[1]}).map(function(u){return"".concat(u[0],":").concat(u[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,Wb.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=u_(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Un(),n=function(){r===a.data.view_id&&De(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,b_(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(g_(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,k_(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(w_(this.dashjs),this.dashjs=void 0)}}]),i})(I_),Kb=Fb;function ql(){return Ua&&!!(Ua.fullscreenElement||Ua.webkitFullscreenElement||Ua.mozFullScreenElement||Ua.msFullscreenElement)}var Vb=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],qb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function Yb(t,e,i){var a=Si(Po(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,u=t.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var m={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,v,_,E=((d=(v=this).getPlayheadTime)===null||d===void 0?void 0:d.call(v))||u(r.currentTime),y=this.hlsjs&&this.hlsjs.url,f=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),T={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:ql(),video_poster_url:r.poster,video_source_url:y||f||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(_=r.getVideoPlaybackQuality)===null||_===void 0?void 0:_.call(r).droppedVideoFrames};if(r.getStartDate&&E>0){var w=r.getStartDate();if(w&&typeof w.getTime=="function"&&w.getTime()){var D=w.getTime();if(T.player_program_time=D+E,r.seekable.length>0){var x=D+r.seekable.end(r.seekable.length-1);T.player_live_edge_program_time=x}}}return T}};i=Object.assign(p,i,m),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,v){t.emit(n,d,v)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var c=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.updateData=c,r.mux.setEmitTranslator=c,r.mux.setStateDataTranslator=c,r.mux.setGetPlayheadTime=c,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(d){var v=Si(Po(d),3),_=v[0],E=v[1],y=v[2];if(_){if(y!=="video"&&y!=="audio")return t.log.error("The element of `"+E+"` was not a media element.")}else return t.log.error("No element was found with the `"+E+"` query selector.");_.muxId=r.muxId,delete r.muxId,_.mux=_.mux||{},_.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(_.mux.listeners).forEach(function(f){r.removeEventListener(f,_.mux.listeners[f],!1),_.addEventListener(f,_.mux.listeners[f],!1)}),_.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,_.mux.swapElement=r.mux.swapElement,_.mux.destroy=r.mux.destroy,delete r.mux,r=_},r.mux.addHLSJS=function(d){t.addHLSJS(n,d)},r.mux.addDashJS=function(d){t.addDashJS(n,d)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(d){t.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){t.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=i.getPlayheadTime),t.setGetPlayheadTime(n,d)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},Vb.forEach(function(d){d==="error"&&!i.automaticErrorTracking||(r.mux.listeners[d]=function(){var v={};if(d==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=qb[r.error.code]||r.error.message}t.emit(n,d,v)},r.addEventListener(d,r.mux.listeners[d],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var d=ql()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:d,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var d=ql(),v=document.fullscreenElement;if(d&&(v===r||v!=null&&v.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!d){var _=document.pictureInPictureElement===r,E=_?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:E,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function Gb(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){se.info("safeCall error",n)}return r}var Ha;q&&q.WeakMap&&(Ha=new WeakMap);function zb(t,e){if(!t||!e||!q||typeof q.getComputedStyle!="function")return"";var i;return Ha&&Ha.has(t)&&(i=Ha.get(t)),i||(i=q.getComputedStyle(t,null),Ha&&Ha.set(t,i)),i.getPropertyValue(e)}function Qb(t){return Math.floor(t*1e3)}var ia={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},gl=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};gl.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};gl.prototype.processLine=function(t){var e=t.indexOf(":"),i=Jb(t,e),a=i[0],r=i.length===2?Hu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case ia.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case ia.PART_INF:{Yl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case ia.SERVER_CONTROL:{Yl(this.manifest,i),this.setHoldBack();break}case ia.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case ia.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case ia.VERSION:{Yl(this.manifest,i);break}case ia.SESSION_DATA:{var o=eg(i[1]),l=Tp(o);Object.assign(this.manifest.sessionData,l)}}};gl.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var Yl=function(t,e){var i=Lp(e[0].replace("#EXT-X-","")),a;Xb(e[1])?(a={},a=Object.assign(Zb(e[1]),a)):a=Hu(e[1]),t[i]=a},Lp=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},Hu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},jb=function(t){var e={},i=t.split("=");if(i.length>1){var a=Lp(i[0]);e[a]=Hu(i[1])}return e},Zb=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=jb(r);i=Object.assign(n,i)}return i},Xb=function(t){return t.indexOf("=")>-1},Jb=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},eg=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),u=0;u<l.length;u++)l[u]==="DATA-ID"&&(e["DATA-ID"]=l[1-u]),l[u]==="VALUE"&&(e.VALUE=l[1-u])}),{data:e}}},tg=gl,ig={safeCall:Gb,safeIncrement:De,getComputedStyle:zb,secondsToMs:Qb,assign:Object.assign,headersStringToObject:Uu,cdnHeadersToRequestId:Uo,extractHostnameAndDomain:Hn,extractHostname:Nt,manifestParser:tg,generateShortID:gp,generateUUID:Un,now:Pe.now,findMediaElement:Po},ag=ig,rg={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},ng=rg,sg="mux-embed",og="5.18.2",lg="2.1",ke={},ji=function(t){var e=arguments;typeof t=="string"?ji.hasOwnProperty(t)?q.setTimeout(function(){e=Array.prototype.splice.call(e,1),ji[t].apply(null,e)},0):se.warn("`"+t+"` is an unknown task"):typeof t=="function"?q.setTimeout(function(){t(ji)},0):se.warn("`"+t+"` is invalid.")},dg={loaded:Pe.now(),NAME:sg,VERSION:og,API_VERSION:lg,PLAYER_TRACKED:!1,monitor:function(t,e){return Yb(ji,t,e)},destroyMonitor:function(t){var e=Si(Po(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():se.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=St(t);ke[i]?ke[i].addHLSJS(e):se.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=St(t);ke[i]?ke[i].addDashJS(e):se.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=St(t);ke[e]?ke[e].removeHLSJS():se.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=St(t);ke[e]?ke[e].removeDashJS():se.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){md()&&e&&e.respectDoNotTrack&&se.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=St(t);ke[i]=new Kb(ji,i,e)},emit:function(t,e,i){var a=St(t);ke[a]?(ke[a].emit(e,i),e==="destroy"&&delete ke[a]):se.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=St(t);ke[i]?ke[i].emit("hb",e):se.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=St(t);ke[i]?ke[i].emitTranslator=e:se.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=St(t);ke[i]?ke[i].stateDataTranslator=e:se.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=St(t);ke[i]?ke[i].getPlayheadTime=e:se.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:md,log:se,utils:ag,events:ng,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(ji,dg);typeof q<"u"&&typeof q.addEventListener=="function"&&q.addEventListener("pagehide",function(t){t.persisted||(ji.WINDOW_UNLOADING=!0)},!1);var Bu=ji;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var K=OE,ee={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},P={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},yl=t=>t===ee.VIDEO?"playback":t,Di=class Qr extends Error{constructor(e,i=Qr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Qr.MEDIA_ERR_NETWORK&&i<=Qr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Qr.defaultMessages[this.code])!=null?n:"")}};Di.MEDIA_ERR_ABORTED=1,Di.MEDIA_ERR_NETWORK=2,Di.MEDIA_ERR_DECODE=3,Di.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Di.MEDIA_ERR_ENCRYPTED=5,Di.MEDIA_ERR_CUSTOM=100,Di.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var L=Di,ug=t=>t==null,Wu=(t,e)=>ug(e)?!1:t in e,fd={ANY:"any",MUTED:"muted"},te={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},ri={MSE:"mse",NATIVE:"native"},jr={HEADER:"header",QUERY:"query",NONE:"none"},Ho=Object.values(jr),Ai={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Oh={HLS:Ai.M3U8};[...Object.values(Ai)];var Mw={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},xw={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},Ow={DESCENDING:"desc"},cg="en",Ed={code:cg},hg=t=>{let e=t;for(;e;){if(e.hasAttribute("lang"))return e.getAttribute("lang")||void 0;let i=e.getRootNode();e=i instanceof ShadowRoot?i.host:void 0}},mg=t=>{var e,i,a;let r=(a=(e=globalThis.navigator)==null?void 0:e.languages)!=null?a:[(i=globalThis.navigator)==null?void 0:i.language];return[hg(t),...r].filter(n=>!!n)},Ee=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function pg(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var Fu=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},Tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Wu(i,Oh)?Oh[i]:e}return vg(t)},Cp=t=>t==="VOD"?te.ON_DEMAND:te.LIVE,Dp=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,vg=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=Al(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return _g(t)?Ai.M3U8:"";let r=i.slice(a+1).toUpperCase();return Wu(r,Ai)?Ai[r]:""},_d=t=>{try{return new URL(t),!1}catch{return!0}},fg=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),Al=(t,e)=>{var i;if(!_d(t))return new URL(t);let a=(i=window==null?void 0:window.location)==null?void 0:i.href,r=e??a;return e&&_d(e.toString())&&(r=new URL(e,a)),new URL(t,r)},Eg="mux.com",_g=({src:t,customDomain:e=Eg})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},pr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},bg=({exp:t},e=Date.now())=>!t||t*1e3<e,gg=({sub:t},e)=>t!==e,yg=({aud:t},e)=>!t,Tg=({aud:t},e)=>t!==e,Mp="en";function N(t,e=!0){var i,a;let r=e&&(a=(i=Ed)==null?void 0:i[t])!=null?a:t,n=e?Ed.code:Mp;return new Ag(r,n)}var Ag=class{constructor(e,i=(a=>(a=Ed)!=null?a:Mp)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},kg=Object.values(fd),Nh=t=>typeof t=="boolean"||typeof t=="string"&&kg.includes(t),wg=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=Nh(a)?a:!!a,o=()=>{r||Ee(e,"playing",()=>{r=!0},{once:!0})};if(o(),Ee(e,"loadstart",()=>{r=!1,o(),Gl(e,s)},{once:!0}),Ee(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==te.UNKNOWN?n=t.streamType===te.LIVE:n=!Number.isFinite(e.duration)),Gl(e,s)},{once:!0}),i&&i.once(K.Events.LEVEL_LOADED,(l,u)=>{var p;t.streamType&&t.streamType!==te.UNKNOWN?n=t.streamType===te.LIVE:n=(p=u.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&Ee(e,"play",()=>{e.preload==="metadata"?i.once(K.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=Nh(l)?l:!!l,Gl(e,s))}},Gl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case fd.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case fd.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},Sg=({preload:t,src:e},i,a)=>{let r=m=>{m!=null&&["","none","metadata","auto"].includes(m)?i.setAttribute("preload",m):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,u=m=>{r(m);let c=m??i.preload;s||c==="none"||(c==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&e&&(n=!0,a.loadSource(e))};return Ee(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),u(t),u},Ig=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,Ee(e,"ratechange",o);let l=(u,{frag:p})=>{n||p.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(K.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(K.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},Rg=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(K.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function Lg(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(K.Events.MANIFEST_PARSED,function(u,p){l();let m=t.addVideoTrack("main");m.selected=!0;for(let[c,d]of p.levels.entries()){let v=m.addRendition(d.url[0],d.width,d.height,d.videoCodec,d.bitrate);a.set(d,`${c}`),v.id=`${c}`}}),e.on(K.Events.AUDIO_TRACKS_UPDATED,function(u,p){o();for(let m of p.audioTracks){let c=m.default?"main":"alternative",d=t.addAudioTrack(c,m.name,m.lang);d.id=`${m.id}`,m.default&&(d.enabled=!0)}});let r=()=>{var u;let p=+((u=[...t.audioTracks].find(c=>c.enabled))==null?void 0:u.id),m=e.audioTracks.map(c=>c.id);p!=e.audioTrack&&m.includes(p)&&(e.audioTrack=p)};t.audioTracks.addEventListener("change",r),e.on(K.Events.LEVELS_UPDATED,function(u,p){var m;let c=t.videoTracks[(m=t.videoTracks.selectedIndex)!=null?m:0];if(!c)return;let d=p.levels.map(v=>a.get(v));for(let v of t.videoRenditions)v.id&&!d.includes(v.id)&&c.removeRendition(v)});let n=u=>{let p=u.target.selectedIndex;p!=e.nextLevel&&(e.nextLevel=p)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let u of t.videoTracks)t.removeVideoTrack(u)},o=()=>{for(let u of t.audioTracks)t.removeAudioTrack(u)},l=()=>{s(),o()};e.once(K.Events.DESTROYING,()=>{var u,p;l(),(u=t.audioTracks)==null||u.removeEventListener("change",r),(p=t.videoRenditions)==null||p.removeEventListener("change",n)})}var Ph=t=>t.split("-")[0],ks=({language:t})=>typeof t=="string"?t.toLowerCase():void 0;function Cg(t,e){var i,a;let r=e.toLowerCase(),n=Ph(r);return(a=(i=t.find(s=>ks(s)===r))!=null?i:t.find(s=>ks(s)===n))!=null?a:t.find(s=>{let o=ks(s);return o!==void 0&&Ph(o)===n})}function Dg(t,e){var i;let a=(Array.isArray(t)?t:[]).filter(r=>typeof(r==null?void 0:r.title)=="string"&&r.title!=="");if(!a.length)return"";for(let r of e){let n=Cg(a,r);if(n)return n.title}return((i=a.find(r=>ks(r)==="und"))!=null?i:a[0]).title}function Mg(t,e=[]){return Array.isArray(t)?t.filter(i=>typeof(i==null?void 0:i["start-time"])=="number").map((i,a,r)=>{var n;let s=i["start-time"],o=(n=r[a+1])==null?void 0:n["start-time"],l=typeof i.duration=="number"?s+i.duration:typeof o=="number"?o:void 0;return{startTime:s,...l!=null?{endTime:l}:{},value:Dg(i.titles,e)}}).filter(i=>i.value!==""):[]}var xp=Number.MAX_SAFE_INTEGER,zl=t=>"time"in t?t.time:t.startTime;function xg(t,e){e.on(K.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let u=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=e.subtitleTracks.findIndex(({lang:c,name:d,type:v})=>c==(u==null?void 0:u.lang)&&d===s.label&&v.toLowerCase()===s.kind),m=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;Ku(t,s.kind,s.label,u==null?void 0:u.lang,m,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:u,type:p,default:m})=>r.id==="default"&&m||l==r.language&&u===r.label&&p.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(K.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(u=>{var p;(p=o.cues)!=null&&p.getCueById(u.id)||o.addCue(u)}),l&&(o.mode="disabled")}),e.once(K.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let s="track";r.kind&&(s+=`[kind="${r.kind}"]`),r.label&&(s+=`[label="${r.label}"]`);let o=t.querySelector(s),l=o==null?void 0:o.getAttribute("src");o&&l&&(o.removeAttribute("src"),setTimeout(()=>{o.setAttribute("src",l)},0))}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(K.Events.MANIFEST_LOADED,a),e.once(K.Events.MEDIA_ATTACHED,a)}function Ku(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function Og(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function es(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}var Ql=new WeakMap;async function Vu(t,e,i){let a=es(t,e,i);if(a){let s=Ql.get(a);return s&&await s,a}let r=Ku(t,i,e);r.mode="hidden";let n=new Promise(s=>setTimeout(s,0));return Ql.set(r,n),await n,Ql.delete(r),r}async function Ng(t,e,i,a){let r=await Vu(t,i,a);return qu(t,r,e,a),r}function qu(t,e,i,a){e.mode!=="hidden"&&(e.mode="hidden"),[...i].sort((r,n)=>zl(n)-zl(r)).forEach(r=>{var n,s;let o=r.value,l=zl(r);if("endTime"in r&&r.endTime!=null&&Number.isFinite(r.endTime))e==null||e.addCue(new VTTCue(l,r.endTime,a==="chapters"?o:JSON.stringify(o??null)));else{let u=Array.prototype.findIndex.call(e==null?void 0:e.cues,d=>d.startTime>=l),p=(n=e==null?void 0:e.cues)==null?void 0:n[u],m=p?p.startTime:Number.isFinite(t.duration)&&t.duration>0?t.duration:xp,c=(s=e==null?void 0:e.cues)==null?void 0:s[u-1];c&&(c.endTime=l),e==null||e.addCue(new VTTCue(l,m,a==="chapters"?o:JSON.stringify(o??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var Yu="cuepoints",Op=Object.freeze({label:Yu});async function Np(t,e,i=Op){return Ng(t,e,i.label,"metadata")}var bd=t=>({time:t.startTime,value:JSON.parse(t.text)});function Pg(t,e={label:Yu}){let i=es(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>bd(a)):[]}function Pp(t,e={label:Yu}){var i,a;let r=es(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return bd(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return bd(s||r.activeCues[0])}async function $g(t,e=Op){return new Promise(i=>{Ee(t,"loadstart",async()=>{let a=await Np(t,[],e);Ee(t,"cuechange",()=>{let r=Pp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var Gu="chapters",zu=Object.freeze({label:Gu}),gd=(t,e)=>{let{duration:i}=e,a=Number.isFinite(i)&&i>0?Math.min(t.endTime,i):t.endTime>=xp?1/0:t.endTime;return{startTime:t.startTime,endTime:a,value:t.text}},yd=new WeakSet;function $p(t){var e;Array.from((e=t.cues)!=null?e:[]).filter(i=>yd.has(i)).forEach(i=>t.removeCue(i))}async function Up(t,e,i=zu){let a=await Vu(t,i.label,"chapters");return e.length&&$p(a),qu(t,a,e,"chapters"),a}async function Ug(t,e,i,a=zu){var r,n;let s=await Vu(t,a.label,"chapters");return i!=null&&i.aborted||Array.from((r=s.cues)!=null?r:[]).some(o=>!yd.has(o))||($p(s),qu(t,s,e,"chapters"),Array.from((n=s.cues)!=null?n:[]).forEach(o=>yd.add(o))),s}function Hg(t,e={label:Gu}){var i;let a=es(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>gd(r,t)):[]}function Hp(t,e={label:Gu}){var i,a;let r=es(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return gd(r.activeCues[0],t);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return gd(s||r.activeCues[0],t)}async function Bg(t,e=zu){return new Promise(i=>{Ee(t,"loadstart",async()=>{let a=await Up(t,[],e);Ee(t,"cuechange",()=>{let r=Hp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function Wg(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function Fg(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var An={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Kg=t=>{if(t===ee.VIDEO)return An.VIDEO;if(t===ee.DRM)return An.DRM},Vg=(t,e)=>{var i,a;let r=yl(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Wu(n,e)?e[n]:void 0},Bo=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s;if(n){let E=N("Your device appears to be offline",r),y,f=L.MEDIA_ERR_NETWORK,T=new L(E,f,!1,y);return T.errorCategory=e,T.muxCode=P.NETWORK_OFFLINE,T.data=t,T}let o="status"in t?t.status:t.code,l=Date.now(),u=L.MEDIA_ERR_NETWORK;if(o===200)return;let p=yl(e),m=Vg(e,i),c=Kg(e),[d]=Fu((s=i.playbackId)!=null?s:"");if(!o||!d)return;let v=pr(m);if(m&&!v){let E=N("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),y=N("Compact JWT string: {token}",r).format({token:m}),f=new L(E,u,!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_TOKEN_MALFORMED,f.data=t,f}if(o>=500){let E=new L("",u,a??!0);return E.errorCategory=e,E.muxCode=P.NETWORK_UNKNOWN_ERROR,E}if(o===403)if(v){if(bg(v,l)){let E={timeStyle:"medium",dateStyle:"medium"},y=N("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),f=new Intl.DateTimeFormat("en",E).format(l),T=v.exp?N("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",E).format(v.exp*1e3),currentDate:f}):N("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:p,currentDate:f}),w=new L(y,u,!0,T);return w.errorCategory=e,w.muxCode=P.NETWORK_TOKEN_EXPIRED,w.data=t,w}if(gg(v,d)){let E=N("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),y=N("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:d,tokenPlaybackId:v.sub}),f=new L(E,u,!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_TOKEN_SUB_MISMATCH,f.data=t,f}if(yg(v)){let E=N("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),y=N("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c}),f=new L(E,u,!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_TOKEN_AUD_MISSING,f.data=t,f}if(Tg(v,c)){let E=N("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),y=N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c,aud:v.aud}),f=new L(E,u,!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_TOKEN_AUD_MISMATCH,f.data=t,f}}else{let E=N("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),y=N("Specified playback ID: {playbackId}",r).format({playbackId:d}),f=new L(E,u,a??!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_TOKEN_MISSING,f.data=t,f}if(o===412){let E=N("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),y=N("Specified playback ID: {playbackId}",r).format({playbackId:d}),f=new L(E,u,a??!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_NOT_READY,f.streamType=i.streamType===te.LIVE?"live":i.streamType===te.ON_DEMAND?"on-demand":"unknown",f.data=t,f}if(o===404){let E=N("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),y=N("Specified playback ID: {playbackId}",r).format({playbackId:d}),f=new L(E,u,a??!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_NOT_FOUND,f.data=t,f}if(o===400){let E=N("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),y=N("Specified playback ID: {playbackId}",r).format({playbackId:d}),f=new L(E,u,a??!0,y);return f.errorCategory=e,f.muxCode=P.NETWORK_INVALID_URL,f.data=t,f}let _=new L("",u,a??!0);return _.errorCategory=e,_.muxCode=P.NETWORK_UNKNOWN_ERROR,_.data=t,_},Td=K.DefaultConfig.capLevelController;Td||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var qg={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function Yg(t){let e=t.toLowerCase().trim();return qg[e]}var Ad=class Zr extends Td{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?Zr.maxAutoResolution.set(e,i):Zr.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=Zr.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=Yg(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(u=>u===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Zr.minMaxResolution;return r>=n?i:Td.getMaxLevelByMediaSize(a,n*(16/9),n)}};Ad.minMaxResolution=720,Ad.maxAutoResolution=new WeakMap;var Gg=Ad,kd=Gg,zg="com.apple.fps.1_0",Qg="application/vnd.apple.mpegurl",jg=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let c=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=ee.DRM,d.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,d),()=>{}}let n=t,s=e(),o=null,l=c=>{(async()=>{try{n.webkitKeys||u();let d=await s;if(c.initData===null||d==null)return;let v=Zg(c.initData,d);p(v)}catch(d){console.error("Could not start encrypted playback due to exception",d),a(n,d)}})()},u=()=>{try{let c=new WebKitMediaKeys(zg);n.webkitSetMediaKeys(c),r()}catch{let c="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);throw d.errorCategory=ee.DRM,d.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,d}},p=c=>{let d=n.webkitKeys.createSession(Qg,c),v=async y=>{try{let f=y.message,T=await i(f);d.update(T)}catch(f){console.error("Error on FairPlay session message",f),a(t,f)}},_=y=>{let f=y.target.error;if(!f)return;console.error(`Internal Webkit Key Session Error - sysCode: ${f.systemCode} code: ${f.code}`);let T=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),w=new L(T,L.MEDIA_ERR_ENCRYPTED,!0);w.errorCategory=ee.DRM,w.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,w)},E=()=>{d.removeEventListener("webkitkeymessage",v),d.removeEventListener("webkitkeyerror",_),t.removeEventListener("teardown",E),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",E),o=null;try{d.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",E,{once:!0}),d.addEventListener("webkitkeymessage",v),d.addEventListener("webkitkeyerror",_),t.addEventListener("teardown",E),o=E},m=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",m),o==null||o();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",m,{once:!0}),m},Zg=(t,e)=>{let i=Jg(Xg(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,u=m=>{o.set(m,l),l+=m.byteLength},p=m=>{let c=new DataView(o.buffer),d=m.byteLength;c.setUint32(l,d,!0),l+=4,u(m)};return u(a),p(r),p(n),o},Xg=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function Jg(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var e0=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async m=>{try{let c=m.initDataType;if(c!=="skd"){console.error(`Received unexpected initialization data type "${c}"`);return}t.mediaKeys||await l(c);let d=m.initData;if(d==null){console.error(`Could not start encrypted playback due to missing initData in ${m.type} event`);return}await u(c,d)}catch(c){a(t,c);return}},l=async m=>{let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[m],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),_=new L(v,L.MEDIA_ERR_ENCRYPTED,!0);_.errorCategory=ee.DRM,_.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,_)});if(!c)return;let d=await c.createMediaKeys();try{let v=await e();await d.setServerCertificate(v).catch(()=>{let _=N("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),E=new L(_,L.MEDIA_ERR_ENCRYPTED,!0);return E.errorCategory=ee.DRM,E.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(E)})}catch(v){a(t,v);return}await t.setMediaKeys(d)},u=async(m,c)=>{let d=t.mediaKeys.createSession(),v=async y=>{let f=y.message,T=await i(f);try{await d.update(T)}catch{let w=N("Failed to update DRM license. This may be an issue with the player or your protected content."),D=new L(w,L.MEDIA_ERR_ENCRYPTED,!0);D.errorCategory=ee.DRM,D.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,D)}},_=()=>{let y=f=>{let T;if(f==="internal-error"){let w=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");T=new L(w,L.MEDIA_ERR_ENCRYPTED,!0),T.errorCategory=ee.DRM,T.muxCode=P.ENCRYPTED_CDM_ERROR}else if(f==="output-restricted"||f==="output-downscaled"){let w=N("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");T=new L(w,L.MEDIA_ERR_ENCRYPTED,!1),T.errorCategory=ee.DRM,T.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}T&&a(t,T)};d.keyStatuses.forEach(f=>y(f))};d.addEventListener("keystatuseschange",_),d.addEventListener("message",v);let E=async()=>{d.removeEventListener("keystatuseschange",_),d.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",E),t.removeEventListener("teardown",E),await d.close().catch(y=>{console.warn("There was an error when closing EME session",y)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",E,{once:!0}),t.addEventListener("teardown",E,{once:!0}),s=E,await d.generateRequest(m,c).catch(async y=>{if(y.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n==null||n();else{let f=N("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),T=new L(f,L.MEDIA_ERR_ENCRYPTED,!0);return T.errorCategory=ee.DRM,T.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",y),Promise.reject(T)}})},p=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",p),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",p,{once:!0}),p},t0=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,u=!1,p=!1,m=!1,c=()=>{o!=null&&(clearTimeout(o),o=void 0)},d=I=>(I==null?void 0:I.muxCode)===P.NETWORK_RECONNECTING,v=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,_=()=>{let I=a.get(e);if(d(I==null?void 0:I.error))return;let H=new L(N("Attempting to reconnect..."),L.MEDIA_ERR_NETWORK,!1);H.errorCategory=ee.VIDEO,H.muxCode=P.NETWORK_RECONNECTING,I&&(I.error=H),e.dispatchEvent(new CustomEvent("error",{detail:H}))},E=()=>{if(!m&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},y=()=>{u=!1,p=!0,c();let I=new L(N("Network error, try reloading."),L.MEDIA_ERR_NETWORK,!0);I.errorCategory=ee.VIDEO,I.reload=!0,r(e,I)},f=()=>{if(o!=null||u)return;if(l>=n){y();return}u=!0;let I=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,E()},I)},T=()=>{let I=a.get(e);!(I!=null&&I.networkError)||p||v()&&(_(),f())},w=()=>{let I=a.get(e);I&&(I.networkError=!0),u=!1,T()},D=()=>{let I=a.get(e);I!=null&&I.networkError&&(l=0,p=!1,c(),u=!0,E())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",D);let x=()=>{let I=a.get(e);I&&(!I.networkError&&!d(I.error)||(I.networkError=!1,u=!1,l=0,p=!1,c(),I.error&&(I.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(K.Events.FRAG_BUFFERED,x),Ee(e,"playing",()=>{let I=a.get(e);I!=null&&I.networkError&&(u=!1,l=0,p=!1,c(),I.error&&(I.error=null))}),Ee(e,"waiting",T),e.addEventListener("teardown",()=>{var I;(I=globalThis.removeEventListener)==null||I.call(globalThis,"online",D),c()},{once:!0}),{handleHlsError:(I,H)=>{var Y,F;if(I.type!==K.ErrorTypes.NETWORK_ERROR)return!1;let W=(F=(Y=I.response)==null?void 0:Y.code)!=null?F:0;return(H.muxCode===P.NETWORK_OFFLINE||W===0||W>=500)&&I.fatal?(w(),!0):!1},onManifestLoaded:()=>{m=!0,u=!1,c()}}},ws={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},i0=t=>{if(t.includes("fps"))return ws.FAIRPLAY;if(t.includes("playready"))return ws.PLAYREADY;if(t.includes("widevine"))return ws.WIDEVINE},a0=(t,e,i)=>{let a=fg(t);if(!a)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(_d(a)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let r;try{r=Al(a,e)}catch(n){return Promise.reject(n)}return fetch(r,{signal:i}).then(n=>n.status!==200?Promise.reject(n):n.text())},r0=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=s0(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},n0=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function s0(t){let e=[...t.matchAll(n0)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var o0=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=Cp(n),o=Dp(n),l;if(s===te.LIVE){let u=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(u)l=+u.split(":")[1].split("=")[1]*2;else{let p=r.find(c=>c.startsWith("#EXT-X-TARGETDURATION")),m=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(m??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},l0=async(t,e,i)=>{if(e===Ai.MP4)return{streamType:te.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(e===Ai.M3U8){let a=await fetch(t,{signal:i});if(!a.ok)return Promise.reject(a);let r=await a.text(),n=a.url||t,s=await a0(r,n,i);return{...r0(r),...o0(s),playlistUrl:n}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},d0=async(t,e,i=Tl({src:t}),a=kl(e))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:u,sessionData:p,playlistUrl:m}=await l0(t,i,a);if(a.aborted)return;let c=Bp(p==null?void 0:p["com.apple.hls.chapters"],m??t);c&&Kp(c,e,a),((r=ie.get(e))!=null?r:{}).liveEdgeStartOffset=u,((n=ie.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=ie.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},Bp=(t,e)=>{var i;let a=(t==null?void 0:t.URI)||((i=t==null?void 0:t.VALUE)!=null&&i.toLocaleLowerCase().startsWith("http")?t.VALUE:void 0);if(a)try{return Al(a,e).toString()}catch{return}},kl=t=>{let e=new AbortController;return t.addEventListener("teardown",()=>e.abort(),{once:!0}),e.signal},Wp=async(t,e)=>{try{let i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to fetch ${t}: ${i.status} ${i.statusText}`);let a=await i.json();return e.aborted?void 0:a}catch(i){e.aborted||console.error(i);return}},Fp=(t,e)=>{var i,a;if(!Array.isArray((i=t==null?void 0:t[0])==null?void 0:i.metadata))return;let r={};for(let s of t[0].metadata)s!=null&&s.key&&s!=null&&s.value&&(r[s.key]=s.value);((a=ie.get(e))!=null?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");e.dispatchEvent(n)},u0=async(t,e,i=kl(e))=>{let a=await Wp(t,i);a!==void 0&&Fp(a,e)},Kp=async(t,e,i=kl(e))=>{let a=await Wp(t,i);a!==void 0&&(Fp(a,e),await Ug(e,Mg(a,mg(e)),i))},c0=t=>{var e;let i=t.type,a=Cp(i),r=Dp(i),n,s=!!((e=t.partList)!=null&&e.length);return a===te.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},h0=(t,e,i)=>{var a,r,n,s,o,l,u,p;let{streamType:m,targetLiveWindow:c,liveEdgeStartOffset:d,lowLatency:v}=c0(t);if(m===te.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let _=Object.freeze({get length(){return e.seekable.length},start(E){return e.seekable.start(E)},end(E){var y;return E>this.length||E<0||Number.isFinite(e.duration)?e.seekable.end(E):(y=i.liveSyncPosition)!=null?y:e.seekable.end(E)}});((o=ie.get(e))!=null?o:{}).seekable=_}((l=ie.get(e))!=null?l:{}).liveEdgeStartOffset=d,((u=ie.get(e))!=null?u:{}).targetLiveWindow=c,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=ie.get(e))!=null?p:{}).streamType=m,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},$h,Uh,Vp=(Uh=($h=globalThis==null?void 0:globalThis.navigator)==null?void 0:$h.userAgent)!=null?Uh:"",Hh,Bh,Wh,m0=(Wh=(Bh=(Hh=globalThis==null?void 0:globalThis.navigator)==null?void 0:Hh.userAgentData)==null?void 0:Bh.platform)!=null?Wh:"",p0=Vp.toLowerCase().includes("android")||["x11","android"].some(t=>m0.toLowerCase().includes(t)),v0=t=>/^((?!chrome|android).)*safari/i.test(Vp)&&!!t.canPlayType("application/vnd.apple.mpegurl"),ie=new WeakMap,ki="mux.com",Fh,Kh,qp=(Kh=(Fh=K).isSupported)==null?void 0:Kh.call(Fh),f0=t=>p0||!v0(t),Qu=()=>{if(typeof window<"u")return Bu.utils.now()},E0=Bu.utils.generateUUID,wd=({playbackId:t,customDomain:e=ki,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:u,tokens:{playback:p=u}={},extraSourceParams:m={}}={})=>{if(!t)return;let[c,d=""]=Fu(t),v=new URL(`https://stream.${e}/${c}.m3u8${d}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((_,E)=>{E!="token"&&v.searchParams.delete(E)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([_,E])=>{E!=null&&v.searchParams.set(_,E)})),v.toString()},wl=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},ju=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},_0=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:ev(t)&&(a=(i=wl(t.playbackId))!=null?i:ju(t.src))!=null?a:t.src},Yp=t=>{var e;return(e=ie.get(t))==null?void 0:e.error},b0=t=>{var e;return(e=ie.get(t))==null?void 0:e.metadata},Sd=t=>{var e,i;return(i=(e=ie.get(t))==null?void 0:e.streamType)!=null?i:te.UNKNOWN},g0=t=>{var e,i;return(i=(e=ie.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},Zu=t=>{var e,i;return(i=(e=ie.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},y0=t=>{var e;let i=(e=ie.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Zu(t);return a.length?a.end(a.length-1)-i:Number.NaN},T0=t=>{var e;return(e=ie.get(t))==null?void 0:e.coreReference},Xu=.034,A0=(t,e,i=Xu)=>Math.abs(t-e)<=i,Gp=(t,e,i=Xu)=>t>e||A0(t,e,i),k0=(t,e=Xu)=>t.paused&&Gp(t.currentTime,t.duration,e),zp=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(m=>!!m.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,u=t.buffered.start(t.buffered.length-1),p=t.buffered.end(t.buffered.length-1);return l>u&&l<p},Qp=(t,e)=>t.ended||t.loop?t.ended:e&&zp(t,e)?!0:k0(t),jp=(t,e,i)=>{Zp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=E0()}=a,n=_0(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=c=>{var d;(d=e.mux)==null||d.emit("hb",{view_drm_type:c})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var c;let d=!e.paused,v=e.currentTime;t.useWebkitFairplay=!0;let _=t.muxDataKeepSession;t.muxDataKeepSession=!0;let E=(c=ie.get(e))==null?void 0:c.coreReference;jp(t,e,E),t.muxDataKeepSession=_,t.useWebkitFairplay=!1,d&&await e.play().then(()=>{e.currentTime=v}).catch(()=>{}),e.currentTime=v},ie.set(e,{retryCount:0});let o=R0(t,e),l=Sg(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?K:void 0}):tv(t,e,o),N0(t,e,o),$g(e),Bg(e);let u=wg(t,e,o);Ig(t,e,o),Rg(t,e,o);let p={engine:o,setAutoplay:u,setPreload:l},m=ie.get(e);return m&&(m.coreReference=p),p},w0=()=>{let t=new Date(0).toUTCString(),e=new Set(["muxData"]);document.cookie.split(";").forEach(i=>{let a=i.split("=")[0].trim();a.startsWith("muxData")&&e.add(a)}),e.forEach(i=>{document.cookie=`${i}=;expires=${t};path=/`})},jl=new WeakMap,S0=(t,e,i)=>{e&&(e.mux&&(e.mux.deleted||e.mux.destroy(),delete e.mux),!jl.has(e)&&jl.set(e,Promise.resolve().then(()=>{var a,r;jl.delete(e);let n=ie.get(e);if(!n||e.mux&&!e.mux.deleted)return;let s=(r=(a=n.coreReference)!=null?a:i)==null?void 0:r.engine;tv(t,e,s)})))},I0=(t,e,i)=>{if(!e)return;let a=!!t.disableCookies,r=ie.get(e);!r||r.muxDataDisableCookies===a||(S0(t,e,i),a&&Promise.resolve().then(()=>{t.disableCookies&&w0()}))},Zp=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",av),t.removeEventListener("error",Id),t.removeEventListener("durationchange",iv),ie.delete(t),t.dispatchEvent(new Event("teardown")))};function Xp(t,e){var i;let a=Tl(t);if(a!==Ai.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===ri.MSE,o=n===ri.NATIVE,l=qp&&(s||f0(e));return r&&(o||!l)}var R0=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:u}=t,p=Tl(t)===Ai.M3U8,m=Xp(t,e);if(p&&!m&&qp){let c={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...u!=null?{abrEwmaDefaultEstimate:u*1e3}:{}},d=L0(a),v=C0(t),_=[jr.QUERY,jr.HEADER].includes(s)?{useHeaders:s===jr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,E=O0(t),y=new K({debug:i,startPosition:r,cmcd:_,xhrSetup:(f,T)=>{var w,D;if(s&&s!==jr.QUERY)return;let x=Al(T);if(!x.searchParams.has("CMCD"))return;let I=((D=(w=x.searchParams.get("CMCD"))==null?void 0:w.split(","))!=null?D:[]).filter(H=>H.startsWith("sid")||H.startsWith("cid")).join(",");x.searchParams.set("CMCD",I),f.open("GET",x)},...c,...E,...d,...v,...o});return E.capLevelController===kd&&l!==void 0&&kd.setMaxAutoResolution(y,l),y.on(K.Events.MANIFEST_LOADED,async function(f,T){var w;let D=Bp((w=T.sessionData)==null?void 0:w["com.apple.hls.chapters"],T.url);D&&Kp(D,e)}),y}},L0=t=>t===te.LIVE?{backBufferLength:8}:{},C0=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=wl(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Ss(t,"fairplay"),serverCertificateUrl:Jp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:Ss(t,"widevine")},"com.microsoft.playready":{licenseUrl:Ss(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let u=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=i0(n);return a==null||a(l),o}))}},D0=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},M0=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},x0=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>D0(Jp(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=Bo(a,ee.DRM,t);return console.error("mediaError",r==null?void 0:r.message,r==null?void 0:r.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>M0(a,Ss(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=Bo(r,ee.DRM,t);return console.error("mediaError",n==null?void 0:n.message,n==null?void 0:n.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:bi,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,ws.FAIRPLAY)}};if(t.useWebkitFairplay)jg(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=e0(a)}},Ss=({playbackId:t,tokens:{drm:e}={},customDomain:i=ki},a)=>{let r=wl(t);return`https://license.${i.toLocaleLowerCase().endsWith(ki)?i:ki}/license/${a}/${r}?token=${e}`},Jp=({playbackId:t,tokens:{drm:e}={},customDomain:i=ki},a)=>{let r=wl(t);return`https://license.${i.toLocaleLowerCase().endsWith(ki)?i:ki}/appcert/${a}/${r}?token=${e}`},ev=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(ki)||!!i&&r.includes(i.toLocaleLowerCase())},O0=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=kd,i.capLevelToPlayerSize=!0):i.capLevelController=NE,i},tv=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Bu,muxDataSDKOptions:o={}}=t,l=ev(t),u=ie.get(e);if(u&&(u.muxDataDisableCookies=!!t.disableCookies),!n&&(r||l)){let{playerInitTime:p,playerSoftwareName:m,playerSoftwareVersion:c,beaconCollectionDomain:d,debug:v,disableCookies:_}=t,E={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},y=f=>typeof f.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(f):f;s.monitor(e,{debug:v,beaconCollectionDomain:d,hlsjs:i,Hls:i?K:void 0,automaticErrorTracking:!1,errorTranslator:y,disableCookies:_,...o,data:{...r?{env_key:r}:{},player_software_name:m,player_software:m,player_software_version:c,player_init_time:p,...E}})}},N0=(t,e,i)=>{var a,r,n;let s=Xp(t,e),{src:o,customDomain:l=ki}=t,u=()=>{e.ended||t.disablePseudoEnded||!Qp(e,i)||(zp(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},p,m,c=()=>{let d=Zu(e),v,_;d.length>0&&(v=d.start(0),_=d.end(0)),(m!==_||p!==v)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),p=v,m=_};if(Ee(e,"durationchange",c),e&&s){let d=Tl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let E=ju(o),y=new URL(`https://stream.${l}/${E}/metadata.json`);u0(y.toString(),e)}let v=()=>{if(Sd(e)!==te.LIVE||Number.isFinite(e.duration))return;let E=setInterval(c,1e3);e.addEventListener("teardown",()=>{clearInterval(E)},{once:!0}),Ee(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(E)})},_=async()=>{let E=kl(e);return d0(o,e,d,E).then(()=>{E.aborted||v()}).catch(y=>{if(y instanceof Response){let f=Bo(y,ee.VIDEO,t);if(f){bi(e,f);return}}})};if(e.preload==="none"){let E=()=>{_(),e.removeEventListener("loadedmetadata",y)},y=()=>{_(),e.removeEventListener("play",E)};Ee(e,"play",E,{once:!0}),Ee(e,"loadedmetadata",y,{once:!0})}else _();(a=t.tokens)!=null&&a.drm?x0(t,e):Ee(e,"encrypted",()=>{let E=N("Attempting to play DRM-protected content without providing a DRM token."),y=new L(E,L.MEDIA_ERR_ENCRYPTED,!0);y.errorCategory=ee.DRM,y.muxCode=P.ENCRYPTED_MISSING_TOKEN,bi(e,y)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=ie.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",iv,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",av),e.addEventListener("error",Id),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(v=>{v.remove()})},{once:!0}),Ee(e,"pause",u),Ee(e,"seeked",u),Ee(e,"play",()=>{e.ended||Gp(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(K.Events.LEVEL_LOADED,(_,E)=>{h0(E.details,e,i),c(),Sd(e)===te.LIVE&&!Number.isFinite(e.duration)&&(i.on(K.Events.LEVEL_UPDATED,c),Ee(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(K.Events.LEVELS_UPDATED,c)}))});let d=(n=t.maxReconnectRetries)!=null?n:0,v=d>0?t0({hls:i,mediaEl:e,src:o,muxMediaState:ie,saveAndDispatchError:bi,maxRetries:d}):void 0;i.on(K.Events.ERROR,(_,E)=>{var y,f;let T=P0(E,t);if(T.muxCode===P.NETWORK_NOT_READY){let w=(y=ie.get(e))!=null?y:{},D=(f=w.retryCount)!=null?f:0;if(D<6){let x=D===0?5e3:6e4,I=new L(`Retrying in ${x/1e3} seconds...`,T.code,T.fatal);Object.assign(I,T),bi(e,I);let H=setTimeout(()=>{w.retryCount=D+1,E.details==="manifestLoadError"&&E.url&&i.loadSource(E.url)},x);e.addEventListener("teardown",()=>clearTimeout(H),{once:!0});return}else{w.retryCount=0;let x=new L("Network error, try reloading.",T.code,T.fatal);Object.assign(x,T),x.reload=!0,bi(e,x);return}}v!=null&&v.handleHlsError(E,T)||bi(e,T)}),i.on(K.Events.MANIFEST_LOADED,()=>{v==null||v.onManifestLoaded();let _=ie.get(e);_!=null&&_.networkError||_&&_.error&&(_.error=null,_.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",Id),Ee(e,"waiting",u),Lg(t,i),xg(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function iv(t){var e;let i=t.target,a=(e=ie.get(i))==null?void 0:e.startTime;if(a&&pg(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function av(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new L(i,a);if(e.src&&a===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Yp(e))!=null?n:e.error;(s==null?void 0:s.code)===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&bi(e,r)},500);return}if(e.src&&(a!==L.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}bi(e,r)}function bi(t,e){var i;e.fatal&&(((i=ie.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function Id(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof L))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=ie.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var P0=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[K.ErrorTypes.NETWORK_ERROR]:L.MEDIA_ERR_NETWORK,[K.ErrorTypes.MEDIA_ERROR]:L.MEDIA_ERR_DECODE,[K.ErrorTypes.KEY_SYSTEM_ERROR]:L.MEDIA_ERR_ENCRYPTED},s=p=>[K.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?L.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===K.ErrorTypes.KEY_SYSTEM_ERROR)return ee.DRM;if(p.type===K.ErrorTypes.NETWORK_ERROR)return ee.VIDEO},l,u=s(t);if(u===L.MEDIA_ERR_NETWORK&&t.response){let p=(i=o(t))!=null?i:ee.VIDEO;l=(a=Bo(t.response,p,e,t.fatal))!=null?a:new L("",u,t.fatal)}else if(u===L.MEDIA_ERR_ENCRYPTED)if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=N("Attempting to play DRM-protected content without providing a DRM token.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_MISSING_TOKEN}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=N("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=N("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=N("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_CDM_ERROR}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=N("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}else l=new L(t.error.message,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=ee.DRM,l.muxCode=P.ENCRYPTED_ERROR;else l=new L("",u,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},rv=t=>{throw TypeError(t)},Ju=(t,e,i)=>e.has(t)||rv("Cannot "+i),_e=(t,e,i)=>(Ju(t,e,"read from private field"),i?i.call(t):e.get(t)),pt=(t,e,i)=>e.has(t)?rv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Dt=(t,e,i,a)=>(Ju(t,e,"write to private field"),e.set(t,i),i),ns=(t,e,i)=>(Ju(t,e,"access private method"),i),$0=()=>{try{return"0.31.6"}catch{}return"UNKNOWN"},U0=$0(),H0=()=>U0,B0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;function W0(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var b={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},F0=Object.values(b),Vh=H0(),qh="mux-video",Xr,Is,Jr,Rs,Ls,Cs,Ds,Ms,en,xs,lt,Mi,Os,tn,K0=class extends as{constructor(){super(),pt(this,lt),pt(this,Xr),pt(this,Is),pt(this,Jr,{}),pt(this,Rs,{}),pt(this,Ls),pt(this,Cs),pt(this,Ds),pt(this,Ms),pt(this,en,""),pt(this,xs,e=>{var i;let a=b0(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(Dt(this,en,"default"),this.updateLogo())}),pt(this,Os),Dt(this,Is,Qu())}static get NAME(){return qh}static get VERSION(){return Vh}static get observedAttributes(){var e;return[...F0,...(e=as.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?B0:`<img part="logo" src="${W0(e)}" />`}static getTemplateHTML(e={}){var i;return`
      ${as.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[b.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(b.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ho.includes(e)?this.setAttribute(b.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Ho.join()}`):this.removeAttribute(b.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(b.PLAYER_INIT_TIME)?+this.getAttribute(b.PLAYER_INIT_TIME):_e(this,Is)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(b.PLAYER_INIT_TIME):this.setAttribute(b.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=_e(this,Ds))!=null?e:qh}set playerSoftwareName(e){Dt(this,Ds,e)}get playerSoftwareVersion(){var e;return(e=_e(this,Cs))!=null?e:Vh}set playerSoftwareVersion(e){Dt(this,Cs,e)}get _hls(){var e;return(e=_e(this,lt,Mi))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Yp(this.nativeEl))!=null?e:null}get errorTranslator(){return _e(this,Ms)}set errorTranslator(e){Dt(this,Ms,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(b.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(b.TYPE,e):this.removeAttribute(b.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(b.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(b.DEBUG,""):this.removeAttribute(b.DEBUG))}get disableTracking(){return this.hasAttribute(b.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(b.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(b.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(b.DISABLE_COOKIES,""):this.removeAttribute(b.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(b.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(b.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(b.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(b.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(b.MAX_RECONNECT_RETRIES):this.setAttribute(b.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(b.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(b.START_TIME):this.setAttribute(b.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(b.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(b.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(b.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(b.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(b.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(b.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(b.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(b.MIN_PRELOAD_SEGMENTS):this.setAttribute(b.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(b.PLAYBACK_ID)?this.getAttribute(b.PLAYBACK_ID):(e=ju(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(b.PLAYBACK_ID,e):this.removeAttribute(b.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(b.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(b.MAX_RESOLUTION,e):this.removeAttribute(b.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(b.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(b.MIN_RESOLUTION,e):this.removeAttribute(b.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(b.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(b.MAX_AUTO_RESOLUTION):this.setAttribute(b.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(b.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(b.RENDITION_ORDER,e):this.removeAttribute(b.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(b.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(b.PROGRAM_START_TIME):this.setAttribute(b.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(b.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(b.PROGRAM_END_TIME):this.setAttribute(b.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(b.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(b.ASSET_START_TIME):this.setAttribute(b.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(b.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(b.ASSET_END_TIME):this.setAttribute(b.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(b.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(b.CUSTOM_DOMAIN,e):this.removeAttribute(b.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:_e(this,Os)}set capRenditionToPlayerSize(e){Dt(this,Os,e)}get drmToken(){var e;return(e=this.getAttribute(b.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(b.DRM_TOKEN,e):this.removeAttribute(b.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(b.PLAYBACK_TOKEN))return(e=this.getAttribute(b.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(b.PLAYBACK_ID)){let[,n]=Fu((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(b.PLAYBACK_TOKEN,e):this.removeAttribute(b.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(b.PLAYBACK_TOKEN),i=this.getAttribute(b.DRM_TOKEN);return{..._e(this,Rs),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Dt(this,Rs,e??{})}get ended(){return Qp(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(b.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(b.ENV_KEY,e):this.removeAttribute(b.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(b.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(b.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(b.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(b.STREAM_TYPE))!=null?e:Sd(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(b.STREAM_TYPE,e):this.removeAttribute(b.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(b.TARGET_LIVE_WINDOW)?+this.getAttribute(b.TARGET_LIVE_WINDOW):g0(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(b.TARGET_LIVE_WINDOW):this.setAttribute(b.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(b.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return y0(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(b.LIVE_EDGE_OFFSET))return+this.getAttribute(b.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(b.LIVE_EDGE_OFFSET):this.setAttribute(b.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Zu(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),Np(this.nativeEl,e)}get activeCuePoint(){return Pp(this.nativeEl)}get cuePoints(){return Pg(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Up(this.nativeEl,e)}get activeChapter(){return Hp(this.nativeEl)}get chapters(){return Hg(this.nativeEl)}getStartDate(){return Wg(this.nativeEl,this._hls)}get currentPdt(){return Fg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(b.PREFER_PLAYBACK);if(e===ri.MSE||e===ri.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ri.MSE||e===ri.NATIVE?this.setAttribute(b.PREFER_PLAYBACK,e):this.removeAttribute(b.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![b.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),..._e(this,Jr)}}set metadata(e){Dt(this,Jr,e??{}),this.mux&&this.mux.emit("hb",_e(this,Jr))}get _hlsConfig(){return _e(this,Ls)}set _hlsConfig(e){Dt(this,Ls,e)}get logo(){var e;return(e=this.getAttribute(b.LOGO))!=null?e:_e(this,en)}set logo(e){e?this.setAttribute(b.LOGO,e):this.removeAttribute(b.LOGO)}load(){jp(this,this.nativeEl,_e(this,lt,Mi))}unload(){Zp(this.nativeEl,_e(this,lt,Mi),this)}attributeChangedCallback(e,i,a){var r,n;switch(as.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case b.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case b.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?ns(this,lt,tn).call(this):s&&!o?this.unload():s&&o&&(this.unload(),ns(this,lt,tn).call(this));break}case"autoplay":if(a===i)break;(r=_e(this,lt,Mi))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=_e(this,lt,Mi))==null||n.setPreload(a);break;case b.PLAYBACK_ID:case b.CUSTOM_DOMAIN:case b.MAX_RESOLUTION:case b.MIN_RESOLUTION:case b.RENDITION_ORDER:case b.PROGRAM_START_TIME:case b.PROGRAM_END_TIME:case b.ASSET_START_TIME:case b.ASSET_END_TIME:case b.PLAYBACK_TOKEN:this.hasAttribute(b.PLAYBACK_ID)&&(this.src=wd(this));break;case b.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case b.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case b.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case b.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case b.LOGO:(a==null||a!==i)&&this.updateLogo();break;case b.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),ns(this,lt,tn).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case b.DISABLE_COOKIES:{(a==null||a!==i)&&I0(this,this.nativeEl,_e(this,lt,Mi));break}case b.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(_e(this,en)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",_e(this,xs)),this.nativeEl&&this.src&&!_e(this,lt,Mi)&&ns(this,lt,tn).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",_e(this,xs)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Xr=new WeakMap,Is=new WeakMap,Jr=new WeakMap,Rs=new WeakMap,Ls=new WeakMap,Cs=new WeakMap,Ds=new WeakMap,Ms=new WeakMap,en=new WeakMap,xs=new WeakMap,lt=new WeakSet,Mi=function(){return T0(this.nativeEl)},Os=new WeakMap,tn=async function(){_e(this,Xr)||(await Dt(this,Xr,Promise.resolve()),Dt(this,Xr,null),this.load())};const Zi=new WeakMap;class Zl extends Error{}class V0 extends Error{}const q0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Y0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function G0(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function z0(){return globalThis.chrome}function Q0(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function zi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function ec(){var t;return(t=zi())==null?void 0:t.getCurrentSession()}function tc(){var t;return(t=ec())==null?void 0:t.getSessionObj().media[0]}function j0(t){return new Promise((e,i)=>{tc().editTracksInfo(t,e,i)})}function Z0(t){return new Promise((e,i)=>{tc().getStatus(t,e,i)})}function Yh(t){return zi().setOptions({...nv(),...t})}function nv(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Gh(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function X0(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function J0(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function zh(t){const i=t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="");return i==null?void 0:i.trim()}async function ey(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return q0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function ty(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=J0(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=zh(i),n=Gh(r),s=X0(e);let o=n;if(s)try{const l=new URL(s,t).toString(),u=await(await fetch(l)).text(),p=zh(u);o=Gh(p)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const Ns=new Y0,ci=new WeakSet;let Le;G0(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}Le||(Le=cast.framework,zi().addEventListener(Le.CastContextEventType.CAST_STATE_CHANGED,r=>{Ns.forEach(n=>{var s,o;return(o=(s=Zi.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),zi().addEventListener(Le.CastContextEventType.SESSION_STATE_CHANGED,r=>{Ns.forEach(n=>{var s,o;return(o=(s=Zi.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),Ns.forEach(r=>{var n,s;return(s=(n=Zi.get(r)).init)==null?void 0:s.call(n)}))});let Qh=0;var j,kr,Qe,Ot,ya,Ta,Gi,bl,Jn,de,la,sv,ov,Rd,lv,Ld,dv,Cd;class iy extends EventTarget{constructor(i){super();Fe(this,de);Fe(this,j);Fe(this,kr);Fe(this,Qe);Fe(this,Ot);Fe(this,ya,"disconnected");Fe(this,Ta,!1);Fe(this,Gi,new Set);Fe(this,bl,new WeakMap);Fe(this,Jn,()=>mt(this,de,Cd).call(this));Ze(this,j,i),Ns.add(this),Zi.set(this,{init:()=>mt(this,de,Ld).call(this),onCastStateChanged:()=>mt(this,de,Rd).call(this),onSessionStateChanged:()=>mt(this,de,lv).call(this),getCastPlayer:()=>A(this,de,la)}),mt(this,de,Ld).call(this)}destroy(){var i,a,r;(a=(i=A(this,j))==null?void 0:i.textTracks)==null||a.removeEventListener("change",A(this,Jn)),A(this,Ot)&&((r=A(this,Qe))!=null&&r.controller)&&Object.entries(A(this,Ot)).forEach(([n,s])=>{A(this,Qe).controller.removeEventListener(n,s)}),A(this,j)&&ci.delete(A(this,j)),Ze(this,kr,!1)}get state(){return A(this,ya)}async watchAvailability(i){if(A(this,j).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");return A(this,bl).set(i,++Qh),A(this,Gi).add(i),queueMicrotask(()=>i(mt(this,de,ov).call(this))),Qh}async cancelWatchAvailability(i){if(A(this,j).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");i?A(this,Gi).delete(i):A(this,Gi).clear()}async prompt(){var a,r,n,s;if(A(this,j).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new V0("The RemotePlayback API is disabled on this platform.");const i=ci.has(A(this,j));ci.add(A(this,j)),Yh(A(this,j).castOptions),Object.entries(A(this,Ot)).forEach(([o,l])=>{A(this,Qe).controller.addEventListener(o,l)});try{await zi().requestSession()}catch(o){if(i||ci.delete(A(this,j)),o==="cancel")return;throw new Error(o)}(s=(n=Zi.get(A(this,j)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}j=new WeakMap,kr=new WeakMap,Qe=new WeakMap,Ot=new WeakMap,ya=new WeakMap,Ta=new WeakMap,Gi=new WeakMap,bl=new WeakMap,Jn=new WeakMap,de=new WeakSet,la=function(){if(ci.has(A(this,j)))return A(this,Qe)},sv=function(){ci.has(A(this,j))&&(Object.entries(A(this,Ot)).forEach(([i,a])=>{A(this,Qe).controller.removeEventListener(i,a)}),ci.delete(A(this,j)),A(this,j).muted=A(this,Qe).isMuted,A(this,j).currentTime=A(this,Qe).savedPlayerState.currentTime,A(this,Qe).savedPlayerState.isPaused===!1&&A(this,j).play())},ov=function(){var a;const i=(a=zi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Rd=function(){const i=zi().getCastState();if(ci.has(A(this,j))&&i==="CONNECTING"&&(Ze(this,ya,"connecting"),this.dispatchEvent(new Event("connecting"))),!A(this,Ta)&&(i!=null&&i.includes("CONNECT"))){Ze(this,Ta,!0);for(let a of A(this,Gi))a(!0)}else if(A(this,Ta)&&(!i||i==="NO_DEVICES_AVAILABLE")){Ze(this,Ta,!1);for(let a of A(this,Gi))a(!1)}},lv=async function(){var a;const{SESSION_RESUMED:i}=Le.SessionState;if(zi().getSessionState()===i&&A(this,j).castSrc===((a=tc())==null?void 0:a.media.contentId)){ci.add(A(this,j)),Object.entries(A(this,Ot)).forEach(([r,n])=>{A(this,Qe).controller.addEventListener(r,n)});try{await Z0(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}A(this,Ot)[Le.RemotePlayerEventType.IS_PAUSED_CHANGED](),A(this,Ot)[Le.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Ld=function(){!Le||A(this,kr)||(Ze(this,kr,!0),Yh(A(this,j).castOptions),A(this,j).textTracks.addEventListener("change",A(this,Jn)),mt(this,de,Rd).call(this),Ze(this,Qe,new Le.RemotePlayer),new Le.RemotePlayerController(A(this,Qe)),Ze(this,Ot,{[Le.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(Ze(this,ya,"connected"),this.dispatchEvent(new Event("connect"))):(mt(this,de,sv).call(this),Ze(this,ya,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[Le.RemotePlayerEventType.DURATION_CHANGED]:()=>{A(this,j).dispatchEvent(new Event("durationchange"))},[Le.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{A(this,j).dispatchEvent(new Event("volumechange"))},[Le.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{A(this,j).dispatchEvent(new Event("volumechange"))},[Le.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=A(this,de,la))!=null&&i.isMediaLoaded&&A(this,j).dispatchEvent(new Event("timeupdate"))},[Le.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{A(this,j).dispatchEvent(new Event("resize"))},[Le.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{A(this,j).dispatchEvent(new Event(this.paused?"pause":"play"))},[Le.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=A(this,de,la))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&A(this,j).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=A(this,de,la))==null?void 0:a.playerState]))},[Le.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=A(this,de,la))!=null&&i.isMediaLoaded&&(await Promise.resolve(),mt(this,de,dv).call(this))}}))},dv=function(){mt(this,de,Cd).call(this)},Cd=async function(){var c,d,v;if(!A(this,de,la))return;const a=(((c=A(this,Qe).mediaInfo)==null?void 0:c.tracks)??[]).filter(({type:_})=>_===chrome.cast.media.TrackType.TEXT),r=[...A(this,j).textTracks].filter(({kind:_})=>_==="subtitles"||_==="captions"),n=a.map(({language:_,name:E,trackId:y})=>{const{mode:f}=r.find(T=>T.language===_&&T.label===E)??{};return f?{mode:f,trackId:y}:!1}).filter(Boolean),o=n.filter(({mode:_})=>_!=="showing").map(({trackId:_})=>_),l=n.find(({mode:_})=>_==="showing"),u=((v=(d=ec())==null?void 0:d.getSessionObj().media[0])==null?void 0:v.activeTrackIds)??[];let p=u;if(u.length&&(p=p.filter(_=>!o.includes(_))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((_,E)=>_.length===E.length&&_.every(y=>E.includes(y)))(u,p))try{const _=new chrome.cast.media.EditTracksInfoRequest(p);await j0(_)}catch(_){console.error(_)}};const ay=t=>{var e,i,a,r,n,s,Z,uv;return e=class extends t{constructor(){super(...arguments);Fe(this,s);Fe(this,i,{paused:!1});Fe(this,a,nv());Fe(this,r);Fe(this,n)}get remote(){return A(this,n)?A(this,n):z0()?this.isConnected?(this.disableRemotePlayback||Q0(),Zi.set(this,{loadOnPrompt:()=>mt(this,s,uv).call(this)}),Ze(this,n,new iy(this))):void 0:super.remote}disconnectedCallback(){var m,c;(m=A(this,n))==null||m.destroy(),Ze(this,n,null),Zi.delete(this),(c=super.disconnectedCallback)==null||c.call(this)}attributeChangedCallback(m,c,d){if(super.attributeChangedCallback(m,c,d),m==="cast-receiver"&&d){A(this,a).receiverApplicationId=d;return}if(A(this,s,Z))switch(m){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var y;if(!A(this,s,Z))return super.load();const m=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);m.customData=this.castCustomData;const c=[...this.querySelectorAll("track")].filter(({kind:f,src:T})=>T&&(f==="subtitles"||f==="captions")),d=[];let v=0;if(c.length&&(m.tracks=c.map(f=>{const T=++v;d.length===0&&f.track.mode==="showing"&&d.push(T);const w=new chrome.cast.media.Track(T,chrome.cast.media.TrackType.TEXT);return w.trackContentId=f.src,w.trackContentType="text/vtt",w.subtype=f.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,w.name=f.label,w.language=f.srclang,w})),this.castStreamType==="live"?m.streamType=chrome.cast.media.StreamType.LIVE:m.streamType=chrome.cast.media.StreamType.BUFFERED,m.metadata=new chrome.cast.media.GenericMediaMetadata,m.metadata.title=this.title,m.metadata.images=[{url:this.poster}],await ey(this.castSrc)){m.contentType||(m.contentType="application/x-mpegURL");const{videoFormat:f,audioFormat:T}=await ty(this.castSrc);(f==null?void 0:f.includes("m4s"))||(f==null?void 0:f.includes("mp4"))||(f==null?void 0:f.includes("m4a"))?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):T!=null&&T.includes("aac")?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(f!=null&&f.includes("ts")||T!=null&&T.includes("ts"))&&(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const E=new chrome.cast.media.LoadRequest(m);E.currentTime=super.currentTime??0,E.autoplay=!A(this,i).paused,E.activeTrackIds=d,await((y=ec())==null?void 0:y.loadMedia(E)),this.dispatchEvent(new Event("volumechange"))}play(){var m;if(A(this,s,Z)){A(this,s,Z).isPaused&&((m=A(this,s,Z).controller)==null||m.playOrPause());return}return super.play()}pause(){var m;if(A(this,s,Z)){A(this,s,Z).isPaused||(m=A(this,s,Z).controller)==null||m.playOrPause();return}super.pause()}get castOptions(){return A(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(m){this.castReceiver!=m&&this.setAttribute("cast-receiver",`${m}`)}get castSrc(){var d;const m=this.currentSrc,c=m!=null&&m.startsWith("blob:")?void 0:m;return this.getAttribute("cast-src")??((d=this.querySelector("source"))==null?void 0:d.src)??c??this.getAttribute("src")??void 0}set castSrc(m){this.castSrc!=m&&this.setAttribute("cast-src",`${m}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(m){this.setAttribute("cast-content-type",`${m}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(m){this.setAttribute("cast-stream-type",`${m}`)}get castCustomData(){return A(this,r)}set castCustomData(m){const c=typeof m;if(!["object","undefined"].includes(c)){console.error(`castCustomData must be nullish or an object but value was of type ${c}`);return}Ze(this,r,m)}get readyState(){if(A(this,s,Z))switch(A(this,s,Z).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return A(this,s,Z)?A(this,s,Z).isPaused:super.paused}get muted(){var m;return A(this,s,Z)?(m=A(this,s,Z))==null?void 0:m.isMuted:super.muted}set muted(m){var c;if(A(this,s,Z)){(m&&!A(this,s,Z).isMuted||!m&&A(this,s,Z).isMuted)&&((c=A(this,s,Z).controller)==null||c.muteOrUnmute());return}super.muted=m}get volume(){var m;return A(this,s,Z)?((m=A(this,s,Z))==null?void 0:m.volumeLevel)??1:super.volume}set volume(m){var c;if(A(this,s,Z)){A(this,s,Z).volumeLevel=+m,(c=A(this,s,Z).controller)==null||c.setVolumeLevel();return}super.volume=m}get duration(){var m,c;return A(this,s,Z)&&((m=A(this,s,Z))!=null&&m.isMediaLoaded)?((c=A(this,s,Z))==null?void 0:c.duration)??NaN:super.duration}get currentTime(){var m,c;return A(this,s,Z)&&((m=A(this,s,Z))!=null&&m.isMediaLoaded)?((c=A(this,s,Z))==null?void 0:c.currentTime)??0:super.currentTime}set currentTime(m){var c;if(A(this,s,Z)){A(this,s,Z).currentTime=m,(c=A(this,s,Z).controller)==null||c.seek();return}super.currentTime=m}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,Z=function(){var m,c;return(c=(m=Zi.get(A(this,n)))==null?void 0:m.getCastPlayer)==null?void 0:c.call(m)},uv=async function(){A(this,i).paused=is(e.prototype,this,"paused"),is(e.prototype,this,"pause").call(this),this.muted=is(e.prototype,this,"muted");try{await this.load()}catch(m){console.error(m)}},Sh(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var cv=t=>{throw TypeError(t)},hv=(t,e,i)=>e.has(t)||cv("Cannot "+i),ry=(t,e,i)=>(hv(t,e,"read from private field"),i?i.call(t):e.get(t)),ny=(t,e,i)=>e.has(t)?cv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),sy=(t,e,i,a)=>(hv(t,e,"write to private field"),e.set(t,i),i),mv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends mv{}globalThis.DocumentFragment=t}var oy=class extends mv{},ly={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(oy)}},dy={customElements:ly},uy=typeof window>"u"||typeof globalThis.customElements>"u",Xl=uy?dy:globalThis,Ps,jh=class extends ay(PE(K0)){constructor(){super(...arguments),ny(this,Ps)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=ry(this,Ps))!=null?t:this.muxCastCustomData}set castCustomData(t){sy(this,Ps,t)}};Ps=new WeakMap;Xl.customElements.get("mux-video")||(Xl.customElements.define("mux-video",jh),Xl.MuxVideoElement=jh);const M={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},J={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},pv={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},vv=Object.entries(pv),h=vv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),cy={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},li=vv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...cy});Object.entries(li).reduce((t,[e,i])=>{const a=h[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const hy=Object.entries(h).reduce((t,[e,i])=>{const a=li[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),si={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},vr={DISABLED:"disabled",SHOWING:"showing"},Jl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},st={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ei={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},my={FULLSCREEN:"fullscreen"};function py(t){return t==null?void 0:t.map(fy).join(" ")}function vy(t){return t==null?void 0:t.split(/\s+/).map(Ey)}function fy(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function Ey(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function _y(t){return t==null?void 0:t.map(gy).join(" ")}function by(t){return t==null?void 0:t.split(/\s+/).map(yy)}function gy(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function yy(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function Ty(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function ic(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function fv(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Ev=t=>new Promise(e=>setTimeout(e,t)),Ay={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ed(t){return String(t).replace(/[&<>"']/g,e=>Ay[e])}const ky={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Zh;const kn={en:ky};let fr=((Zh=globalThis.navigator)==null?void 0:Zh.language)||"en";const wy=t=>{fr=t},Sy=t=>{var e,i,a;const[r]=fr.split("-");return((e=kn[fr])==null?void 0:e[t])||((i=kn[r])==null?void 0:i[t])||((a=kn.en)==null?void 0:a[t])||t},Iy=()=>{const[t]=fr.split("-");return kn[fr]?fr:kn[t]?t:"en"},C=(t,e={})=>Sy(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),Xh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Jh=(t,e)=>{const i=C(t===1?Xh[e].singular:Xh[e].plural);return`${t} ${i}`},wn=t=>{if(!ic(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&Jh(s,o)).filter(s=>s).join(", ");return i?C("{time} remaining",{time:n}):e===0?Jh(0,2):n};function Xi(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let _v=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class bv extends _v{}let em=class extends bv{constructor(){super(...arguments),this.role=null}};class Ry{observe(){}unobserve(){}disconnect(){}}const gv={createElement:function(){return new Wn.HTMLElement},createElementNS:function(){return new Wn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Wn={ResizeObserver:Ry,document:gv,Node:bv,Element:em,HTMLElement:class extends em{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Wn.DocumentFragment}},DocumentFragment:class extends _v{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},yv="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",Tv=Object.keys(Wn).every(t=>t in globalThis),g=yv&&!Tv?Wn:globalThis,Ie=yv&&!Tv?gv:globalThis.document,tm=new WeakMap,ac=t=>{let e=tm.get(t);return e||tm.set(t,e=new Set),e},Av=new g.ResizeObserver(t=>{for(const e of t)for(const i of ac(e.target))i(e)});function Sr(t,e){ac(t).add(e),Av.observe(t)}function Ir(t,e){const i=ac(t);i.delete(e),i.size||Av.unobserve(t)}function ht(t){const e={};for(const i of t)e[i.name]=i.value;return e}function tt(t){var e;return(e=Dd(t))!=null?e:Mr(t,"media-controller")}function Dd(t){var e;const{MEDIA_CONTROLLER:i}=J,a=t.getAttribute(i);if(a)return(e=Sl(t))==null?void 0:e.getElementById(a)}const kv=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},Ly=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},wv=(t,e)=>Ly(t,e)[0],Ri=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Ri(t,e.getRootNode().host),Mr=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Mr(t.getRootNode().host,e)};function rc(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=rc(i.shadowRoot))!=null?e:i:null}function Sl(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Sv(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function Cy(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ce(t,e){const i=Dy(t,a=>a===e);return i||nc(t,e)}function Dy(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function nc(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];if(!(n!=null&&n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n==null?void 0:n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function oe(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function fe(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}oe(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function z(t,e){return t.hasAttribute(e)}function Q(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}z(t,e)!=i&&t.toggleAttribute(e,i)}function ue(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function le(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;ue(t,e,void 0)!==a&&t.setAttribute(e,a)}var Iv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},kt=(t,e,i)=>(Iv(t,e,"read from private field"),i?i.call(t):e.get(t)),My=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ss=(t,e,i,a)=>(Iv(t,e,"write to private field"),e.set(t,i),i),He;function xy(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Il extends g.HTMLElement{constructor(){if(super(),My(this,He,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[J.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===J.MEDIA_CONTROLLER&&(i&&((n=(r=kt(this,He))==null?void 0:r.unassociateElement)==null||n.call(r,this),ss(this,He,null)),a&&this.isConnected&&(ss(this,He,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=kt(this,He))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ss(this,He,Oy(this)),this.getAttribute(J.MEDIA_CONTROLLER)&&((i=(e=kt(this,He))==null?void 0:e.associateElement)==null||i.call(e,this)),kt(this,He)&&(kt(this,He).addEventListener("pointerdown",this),kt(this,He).addEventListener("click",this),kt(this,He).hasAttribute("tabindex")||(kt(this,He).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(J.MEDIA_CONTROLLER)&&((i=(e=kt(this,He))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=kt(this,He))==null||a.removeEventListener("pointerdown",this),(r=kt(this,He))==null||r.removeEventListener("click",this),ss(this,He,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:u,height:p}=this.getBoundingClientRect(),m=n-o,c=s-l;if(m<0||c<0||m>u||c>p||u===0&&p===0)return;const d=this._pointerType||"mouse";if(this._pointerType=void 0,d===Jl.TOUCH){this.handleTap(e);return}else if(d===Jl.MOUSE||d===Jl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return z(this,h.MEDIA_PAUSED)}set mediaPaused(e){Q(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?M.MEDIA_PLAY_REQUEST:M.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(i,{composed:!0,bubbles:!0}))}}He=new WeakMap;Il.shadowRootOptions={mode:"open"};Il.getTemplateHTML=xy;function Oy(t){var e;const i=t.getAttribute(J.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Mr(t,"media-controller")}g.customElements.get("media-gesture-receiver")||g.customElements.define("media-gesture-receiver",Il);var im=Il,sc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},be=(t,e,i)=>(sc(t,e,"read from private field"),i?i.call(t):e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rt=(t,e,i,a)=>(sc(t,e,"write to private field"),e.set(t,i),i),$t=(t,e,i)=>(sc(t,e,"access private method"),i),an,Wo,Ba,Rr,dr,Md,Wa,$s,xd,Rv,Od,Lv,Fn,Rl,Ll,oc,Lr,Kn,xi,Us;const $={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function Ny(t){return`
    <style>
      
      :host([${h.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${$.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${$.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${$.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${$.AUDIO}])[${$.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${$.AUDIO}])[${$.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${$.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${$.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${$.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${$.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${$.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${$.USER_INACTIVE}]:not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_AIRPLAYING}]):not([${h.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${$.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${$.USER_INACTIVE}]:not([${$.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${$.USER_INACTIVE}][${$.AUTOHIDE_OVER_CONTROLS}]:not([${$.NO_AUTOHIDE}]):not([${h.MEDIA_PAUSED}]):not([${h.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${$.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${$.AUDIO}])[${h.MEDIA_STREAM_TYPE}="${ei.ON_DEMAND}"][${h.MEDIA_CURRENT_TIME}]:not([${h.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${im.shadowRootOptions.mode}">
          ${im.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Py=Object.values(h),$y="sm:384 md:576 lg:768 xl:960";function Uy(t){Cv(t.target,t.contentRect.width)}function Cv(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute($.BREAKPOINTS))!=null?i:$y,r=Hy(a),n=By(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(li.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(li.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Hy(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function By(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class Cl extends g.HTMLElement{constructor(){if(super(),ze(this,xd),ze(this,Od),ze(this,Fn),ze(this,Ll),ze(this,Lr),ze(this,an,void 0),ze(this,Wo,0),ze(this,Ba,null),ze(this,Rr,null),ze(this,dr,void 0),this.breakpointsComputed=!1,ze(this,Md,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),ze(this,Wa,!1),ze(this,$s,e=>{be(this,Wa)||(setTimeout(()=>{Uy(e),Rt(this,Wa,!1)},0),Rt(this,Wa,!0))}),ze(this,xi,void 0),ze(this,Us,()=>{if(!be(this,xi).assignedElements({flatten:!0}).length){be(this,Ba)&&this.mediaUnsetCallback(be(this,Ba));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}Rt(this,an,new MutationObserver(be(this,Md)))}static get observedAttributes(){return[$.AUTOHIDE,$.GESTURES_DISABLED].concat(Py).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==$.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Rt(this,Ba,e),e.localName.includes("-")&&await g.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;be(this,an).observe(this,{childList:!0,subtree:!0}),Sr(this,be(this,$s));const i=this.getAttribute($.AUDIO)!=null,a=C(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute($.USER_INACTIVE,""),Cv(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(Rt(this,xi,r),be(this,xi).addEventListener("slotchange",be(this,Us))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=g.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Ir(this,be(this,$s)),clearTimeout(be(this,Rr)),be(this,an).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=g.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),be(this,xi)&&(be(this,xi).removeEventListener("slotchange",be(this,Us)),Rt(this,xi,null)),Rt(this,Wa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){Rt(this,Ba,null)}handleEvent(e){switch(e.type){case"pointerdown":Rt(this,Wo,e.timeStamp);break;case"pointermove":$t(this,xd,Rv).call(this,e);break;case"pointerup":$t(this,Od,Lv).call(this,e);break;case"mouseleave":$t(this,Fn,Rl).call(this);break;case"mouseup":this.removeAttribute($.KEYBOARD_CONTROL);break;case"keyup":$t(this,Lr,Kn).call(this),this.setAttribute($.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Rt(this,dr,isNaN(i)?0:i)}get autohide(){return(be(this,dr)===void 0?2:be(this,dr)).toString()}get breakpoints(){return ue(this,$.BREAKPOINTS)}set breakpoints(e){le(this,$.BREAKPOINTS,e)}get audio(){return z(this,$.AUDIO)}set audio(e){Q(this,$.AUDIO,e)}get gesturesDisabled(){return z(this,$.GESTURES_DISABLED)}set gesturesDisabled(e){Q(this,$.GESTURES_DISABLED,e)}get keyboardControl(){return z(this,$.KEYBOARD_CONTROL)}set keyboardControl(e){Q(this,$.KEYBOARD_CONTROL,e)}get noAutohide(){return z(this,$.NO_AUTOHIDE)}set noAutohide(e){Q(this,$.NO_AUTOHIDE,e)}get autohideOverControls(){return z(this,$.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){Q(this,$.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return z(this,$.USER_INACTIVE)}set userInteractive(e){Q(this,$.USER_INACTIVE,e)}}an=new WeakMap;Wo=new WeakMap;Ba=new WeakMap;Rr=new WeakMap;dr=new WeakMap;Md=new WeakMap;Wa=new WeakMap;$s=new WeakMap;xd=new WeakSet;Rv=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-be(this,Wo)<250)return;$t(this,Ll,oc).call(this),clearTimeout(be(this,Rr));const e=this.hasAttribute($.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&$t(this,Lr,Kn).call(this)};Od=new WeakSet;Lv=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute($.USER_INACTIVE);[this,this.media].includes(t.target)&&e?$t(this,Fn,Rl).call(this):$t(this,Lr,Kn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&$t(this,Lr,Kn).call(this)};Fn=new WeakSet;Rl=function(){if(be(this,dr)<0||this.hasAttribute($.USER_INACTIVE))return;this.setAttribute($.USER_INACTIVE,"");const t=new g.CustomEvent(li.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Ll=new WeakSet;oc=function(){if(!this.hasAttribute($.USER_INACTIVE))return;this.removeAttribute($.USER_INACTIVE);const t=new g.CustomEvent(li.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Lr=new WeakSet;Kn=function(){$t(this,Ll,oc).call(this),clearTimeout(be(this,Rr));const t=parseInt(this.autohide);t<0||Rt(this,Rr,setTimeout(()=>{$t(this,Fn,Rl).call(this)},t*1e3))};xi=new WeakMap;Us=new WeakMap;Cl.shadowRootOptions={mode:"open"};Cl.getTemplateHTML=Ny;g.customElements.get("media-container")||g.customElements.define("media-container",Cl);var lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Aa=(t,e,i)=>(lc(t,e,"read from private field"),e.get(t)),hi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},dc=(t,e,i,a)=>(lc(t,e,"write to private field"),e.set(t,i),i),aa=(t,e,i)=>(lc(t,e,"access private method"),i),Fo,Vn,Ia,Hs,Nd,Pd,Dv,$d,Mv,Ud,xv,Hd,Ov,Bd,Nv;function Wy(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function Fy(t){return`
    <slot id="content"></slot>
  `}const Br={OPEN:"open",ANCHOR:"anchor"};class xr extends g.HTMLElement{constructor(){super(),hi(this,Hs),hi(this,Pd),hi(this,$d),hi(this,Ud),hi(this,Hd),hi(this,Bd),hi(this,Fo,!1),hi(this,Vn,null),hi(this,Ia,null)}static get observedAttributes(){return[Br.OPEN,Br.ANCHOR]}get open(){return z(this,Br.OPEN)}set open(e){Q(this,Br.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":aa(this,Ud,xv).call(this,e);break;case"focusout":aa(this,Hd,Ov).call(this,e);break;case"keydown":aa(this,Bd,Nv).call(this,e);break}}connectedCallback(){aa(this,Hs,Nd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){aa(this,Hs,Nd).call(this),e===Br.OPEN&&a!==i&&(this.open?aa(this,Pd,Dv).call(this):aa(this,$d,Mv).call(this))}focus(){dc(this,Vn,rc());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}Fo=new WeakMap;Vn=new WeakMap;Ia=new WeakMap;Hs=new WeakSet;Nd=function(){if(!Aa(this,Fo)&&(dc(this,Fo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Ce(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Pd=new WeakSet;Dv=function(){var t;(t=Aa(this,Ia))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};$d=new WeakSet;Mv=function(){var t;(t=Aa(this,Ia))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Ud=new WeakSet;xv=function(t){dc(this,Ia,t.relatedTarget),Ri(this,t.relatedTarget)||(this.open=!this.open)};Hd=new WeakSet;Ov=function(t){var e;Ri(this,t.relatedTarget)||((e=Aa(this,Vn))==null||e.focus(),Aa(this,Ia)&&Aa(this,Ia)!==t.relatedTarget&&this.open&&(this.open=!1))};Bd=new WeakSet;Nv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;o||l||u||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=Aa(this,Vn))==null||n.focus(),this.open=!1))};xr.shadowRootOptions={mode:"open"};xr.getTemplateHTML=Wy;xr.getSlotTemplateHTML=Fy;g.customElements.get("media-chrome-dialog")||g.customElements.define("media-chrome-dialog",xr);var Ky=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Li=(t,e,i)=>(Ky(t,e,"read from private field"),i?i.call(t):e.get(t)),am=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fa,Ka;const rn={HOTKEYS:"hotkeys"},Vy=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function uc(t){return t===" "?"nospace":`no${t.toLowerCase()}`}function qy(t){const e=new Set(t==null?void 0:t.split(/\s+/));return Vy.map(({keys:i,description:a})=>({keys:i.filter(({key:r})=>!e.has(uc(r))),description:a})).filter(({keys:i})=>i.length)}function Yy(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Pv(t[rn.HOTKEYS])}
    </slot>
  `}function Pv(t){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${qy(t).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:n,label:s=n},o)=>o>0?`<span class="key-separator">or</span><span class="key">${s}</span>`:`<span class="key">${s}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}class $v extends xr{constructor(){super(...arguments),am(this,Fa,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),am(this,Ka,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,rn.HOTKEYS]}get hotkeys(){var e;return(e=ue(this,rn.HOTKEYS))!=null?e:void 0}set hotkeys(e){le(this,rn.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Li(this,Fa)),document.addEventListener("keydown",Li(this,Ka)))}disconnectedCallback(){this.removeEventListener("click",Li(this,Fa)),document.removeEventListener("keydown",Li(this,Ka))}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),e==="open")this.open?(this.addEventListener("click",Li(this,Fa)),document.addEventListener("keydown",Li(this,Ka))):(this.removeEventListener("click",Li(this,Fa)),document.removeEventListener("keydown",Li(this,Ka)));else if(e===rn.HOTKEYS&&a!==i){const n=(r=this.shadowRoot)==null?void 0:r.querySelector("#content");n&&(n.innerHTML=Pv(a))}}}Fa=new WeakMap;Ka=new WeakMap;$v.getSlotTemplateHTML=Yy;g.customElements.get("media-keyboard-shortcuts-dialog")||g.customElements.define("media-keyboard-shortcuts-dialog",$v);var Uv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ne=(t,e,i)=>(Uv(t,e,"read from private field"),i?i.call(t):e.get(t)),Wr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},os=(t,e,i,a)=>(Uv(t,e,"write to private field"),e.set(t,i),i),Va,qa,Ko,Ea,pi,Oi;class cc{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Wr(this,pi),Wr(this,Va,void 0),Wr(this,qa,void 0),Wr(this,Ko,void 0),Wr(this,Ea,new Set),os(this,Va,e),os(this,qa,i),os(this,Ko,new Set(a))}[Symbol.iterator](){return Ne(this,pi,Oi).values()}get length(){return Ne(this,pi,Oi).size}get value(){var e;return(e=[...Ne(this,pi,Oi)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(os(this,Ea,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...Ne(this,pi,Oi)][e]}values(){return Ne(this,pi,Oi).values()}forEach(e,i){Ne(this,pi,Oi).forEach(e,i)}add(...e){var i,a;e.forEach(r=>Ne(this,Ea).add(r)),!(this.value===""&&!((i=Ne(this,Va))!=null&&i.hasAttribute(`${Ne(this,qa)}`)))&&((a=Ne(this,Va))==null||a.setAttribute(`${Ne(this,qa)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>Ne(this,Ea).delete(a)),(i=Ne(this,Va))==null||i.setAttribute(`${Ne(this,qa)}`,`${this.value}`)}contains(e){return Ne(this,pi,Oi).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Va=new WeakMap;qa=new WeakMap;Ko=new WeakMap;Ea=new WeakMap;pi=new WeakSet;Oi=function(){return Ne(this,Ea).size?Ne(this,Ea):Ne(this,Ko)};const Gy=(t="")=>t.split(/\s+/),Hv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?si.CAPTIONS:si.SUBTITLES,language:i,label:r}},Dl=(t="",e={})=>Gy(t).map(i=>{const a=Hv(i);return{...e,...a}}),Bv=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Hv(e):e):typeof t=="string"?Dl(t):[t]:[],Wd=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,qn=(t=[])=>Array.prototype.map.call(t,Wd).join(" "),zy=(t,e)=>i=>i[t]===e,Wv=t=>{const e=Object.entries(t).map(([i,a])=>zy(i,a));return i=>e.every(a=>a(i))},Sn=(t,e=[],i=[])=>{const a=Bv(i).map(Wv),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Ml=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:Wv(e);return Array.from(t.textTracks).filter(i)},Fv=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},Qy=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},rm="exitFullscreen"in Ie?"exitFullscreen":"webkitExitFullscreen"in Ie?"webkitExitFullscreen":"webkitCancelFullScreen"in Ie?"webkitCancelFullScreen":void 0,jy=t=>{var e;const{documentElement:i}=t;if(rm){const a=(e=i==null?void 0:i[rm])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},nn="fullscreenElement"in Ie?"fullscreenElement":"webkitFullscreenElement"in Ie?"webkitFullscreenElement":void 0,Zy=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[nn];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===my.FULLSCREEN?i:a},Xy=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=Zy(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(nn in s))return Ri(n,r);for(;s!=null&&s[nn];){if(s[nn]===r)return!0;s=(e=s[nn])==null?void 0:e.shadowRoot}}return!1},Jy="fullscreenEnabled"in Ie?"fullscreenEnabled":"webkitFullscreenEnabled"in Ie?"webkitFullscreenEnabled":void 0,e1=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[Jy])||i&&"webkitSupportsFullscreen"in i};let ls;const hc=()=>{var t,e;return ls||(ls=(e=(t=Ie)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),ls)},t1=async(t=hc())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([i1(t,i.signal),a1(t,e)]);return i.abort(),a},i1=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),a1=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Ev(10)}return t.volume!==e},r1=/.*Version\/.*Safari\/.*/.test(g.navigator.userAgent),Kv=(t=hc())=>g.matchMedia("(display-mode: standalone)").matches&&r1?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Vv=(t=hc())=>e1({documentElement:Ie,media:t}),n1=Vv(),s1=Kv(),o1=!!g.WebKitPlaybackTargetAvailabilityEvent,l1=!!g.chrome,Vo=t=>Ml(t.media,e=>[si.SUBTITLES,si.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),qv=t=>Ml(t.media,e=>e.mode===vr.SHOWING&&[si.SUBTITLES,si.CAPTIONS].includes(e.kind)),Yv=(t,e)=>{const i=Vo(t),a=qv(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Sn(vr.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const p=g.localStorage.getItem("media-chrome-pref-subtitles-lang"),m=p?[p,...g.navigator.languages]:g.navigator.languages,c=i.filter(d=>m.some(v=>d.language.toLowerCase().startsWith(v.split("-")[0]))).sort((d,v)=>{const _=m.findIndex(y=>d.language.toLowerCase().startsWith(y.split("-")[0])),E=m.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return _-E});c[0]&&(n=c[0])}const{language:o,label:l,kind:u}=n;Sn(vr.DISABLED,i,a),Sn(vr.SHOWING,i,[{language:o,label:l,kind:u}])}}},mc=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?d1(t,e):Object.entries(t).every(([i,a])=>i in e&&mc(a,e[i])),d1=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>mc(r,e[n])):!0},u1=Object.values(ei);let qo;const c1=t1().then(t=>(qo=t,qo)),h1=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof g.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=g.customElements.get(i);a&&e instanceof a||(await g.customElements.whenDefined(i),g.customElements.upgrade(e))}))},m1=new g.DOMParser,p1=t=>t&&(m1.parseFromString(t,"text/html").body.textContent||t),sn={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=g.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&g.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;g.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=g.localStorage.getItem("media-chrome-pref-muted")==="true";sn.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?g.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&g.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=g.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;sn.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!ic(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ei.LIVE,ei.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(u1.includes(r))return r===ei.UNKNOWN?a:r;const n=e.duration;return n===1/0?ei.LIVE:Number.isFinite(n)?ei.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=sn.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ei.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(sn.mediaStreamType.get(t)===ei.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Vo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return qv(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![si.CAPTIONS,si.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||Yv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Ml(i,{kind:si.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:p1(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Ri(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!Ie.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else Ie.pictureInPictureElement&&Ie.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Xy(t)},set(t,e,i){var a,r;t?(Qy(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):jy(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&g.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!n1||!Vv(e))return st.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!s1||!Kv(e))return st.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return st.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(qo===!1||(e==null?void 0:e.volume)==null)return st.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{qo==null&&c1.then(e=>t(e?void 0:st.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!l1||!((i=a==null?void 0:a.remote)!=null&&i.state))return st.UNSUPPORTED;if(!(e==null||e==="available"))return st.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!o1)return st.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return st.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return st.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return st.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},v1={[M.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,u;if(s&&o!=null){const[d]=Ml(s,{kind:si.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=d==null?void 0:d.cues)!=null?a:[],(_,E,y)=>E===0?_.endTime>o:E===y.length-1?_.startTime<=o:_.startTime<=o&&_.endTime>o);if(v){const _=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,E=new URL(v.text,_);u=new URLSearchParams(E.hash).get("#xywh").split(",").map(f=>+f),l=E.href}}const p=t.mediaDuration.get(e);let c=(n=t.mediaChaptersCues.get(e).find((d,v,_)=>v===_.length-1&&p===d.endTime?d.startTime<=o&&d.endTime>=o:d.startTime<=o&&d.endTime>o))==null?void 0:n.text;return i!=null&&c==null&&(c=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:u,mediaPreviewChapter:c}},[M.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[M.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===ei.LIVE,u=!((i=e.options)!=null&&i.noAutoSeekToLive),p=t.mediaTargetLiveWindow.get(e)>0;if(l&&u&&!p){const m=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(m){const c=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,d=m-c;t.mediaCurrentTime.set(d,e)}}t[s].set(!1,e)},[M.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[M.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[M.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[M.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[M.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[M.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[M.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[M.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Vo(e),s=Bv(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&g.localStorage.setItem("media-chrome-pref-subtitles-lang",o),Sn(vr.SHOWING,n,s)},[M.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Vo(e),r=i??[];Sn(vr.DISABLED,a,r)},[M.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Yv(e,i)},[M.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[M.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[M.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[M.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[M.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[M.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[M.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[M.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[M.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},f1=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=sn,requestMap:r=v1,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=_=>{_!=null&&(mc(_,u)||(u=Object.freeze({...u,..._}),o.forEach(E=>E(u))))},m=()=>{const _=Object.entries(a).reduce((E,[y,{get:f}])=>(E[y]=f(l),E),{});p(_)},c={};let d;const v=async(_,E)=>{var y,f,T,w,D,x,I,H,Y,F,W,Be,it,at,Te,qe;const Ht=!!d;if(d={...l,...d??{},..._},Ht)return;await h1(...Object.values(_));const Ye=o.length>0&&E===0&&s,Tt=l.media!==d.media,rt=((y=l.media)==null?void 0:y.textTracks)!==((f=d.media)==null?void 0:f.textTracks),Me=((T=l.media)==null?void 0:T.videoRenditions)!==((w=d.media)==null?void 0:w.videoRenditions),di=((D=l.media)==null?void 0:D.audioTracks)!==((x=d.media)==null?void 0:x.audioTracks),We=((I=l.media)==null?void 0:I.remote)!==((H=d.media)==null?void 0:H.remote),Ge=l.documentElement!==d.documentElement,ui=!!l.media&&(Tt||Ye),$r=!!((Y=l.media)!=null&&Y.textTracks)&&(rt||Ye),ph=!!((F=l.media)!=null&&F.videoRenditions)&&(Me||Ye),vh=!!((W=l.media)!=null&&W.audioTracks)&&(di||Ye),fh=!!((Be=l.media)!=null&&Be.remote)&&(We||Ye),Eh=!!l.documentElement&&(Ge||Ye),Kl=ui||$r||ph||vh||fh||Eh,Ca=o.length===0&&E===1&&s,_h=!!d.media&&(Tt||Ca),bh=!!((it=d.media)!=null&&it.textTracks)&&(rt||Ca),gh=!!((at=d.media)!=null&&at.videoRenditions)&&(Me||Ca),yh=!!((Te=d.media)!=null&&Te.audioTracks)&&(di||Ca),Th=!!((qe=d.media)!=null&&qe.remote)&&(We||Ca),Ah=!!d.documentElement&&(Ge||Ca),kh=_h||bh||gh||yh||Th||Ah;if(!(Kl||kh)){Object.entries(d).forEach(([ae,Ur])=>{l[ae]=Ur}),m(),d=void 0;return}Object.entries(a).forEach(([ae,{get:Ur,mediaEvents:AE=[],textTracksEvents:kE=[],videoRenditionsEvents:wE=[],audioTracksEvents:SE=[],remoteEvents:IE=[],rootEvents:RE=[],stateOwnersUpdateHandlers:LE=[]}])=>{c[ae]||(c[ae]={});const nt=me=>{const Ae=Ur(l,me);p({[ae]:Ae})};let xe;xe=c[ae].mediaEvents,AE.forEach(me=>{xe&&ui&&(l.media.removeEventListener(me,xe),c[ae].mediaEvents=void 0),_h&&(d.media.addEventListener(me,nt),c[ae].mediaEvents=nt)}),xe=c[ae].textTracksEvents,kE.forEach(me=>{var Ae,At;xe&&$r&&((Ae=l.media.textTracks)==null||Ae.removeEventListener(me,xe),c[ae].textTracksEvents=void 0),bh&&((At=d.media.textTracks)==null||At.addEventListener(me,nt),c[ae].textTracksEvents=nt)}),xe=c[ae].videoRenditionsEvents,wE.forEach(me=>{var Ae,At;xe&&ph&&((Ae=l.media.videoRenditions)==null||Ae.removeEventListener(me,xe),c[ae].videoRenditionsEvents=void 0),gh&&((At=d.media.videoRenditions)==null||At.addEventListener(me,nt),c[ae].videoRenditionsEvents=nt)}),xe=c[ae].audioTracksEvents,SE.forEach(me=>{var Ae,At;xe&&vh&&((Ae=l.media.audioTracks)==null||Ae.removeEventListener(me,xe),c[ae].audioTracksEvents=void 0),yh&&((At=d.media.audioTracks)==null||At.addEventListener(me,nt),c[ae].audioTracksEvents=nt)}),xe=c[ae].remoteEvents,IE.forEach(me=>{var Ae,At;xe&&fh&&((Ae=l.media.remote)==null||Ae.removeEventListener(me,xe),c[ae].remoteEvents=void 0),Th&&((At=d.media.remote)==null||At.addEventListener(me,nt),c[ae].remoteEvents=nt)}),xe=c[ae].rootEvents,RE.forEach(me=>{xe&&Eh&&(l.documentElement.removeEventListener(me,xe),c[ae].rootEvents=void 0),Ah&&(d.documentElement.addEventListener(me,nt),c[ae].rootEvents=nt)});const ts=c[ae].stateOwnersUpdateHandlers;if(ts&&Kl&&(Array.isArray(ts)?ts:[ts]).forEach(Ae=>{typeof Ae=="function"&&Ae()}),kh){const me=LE.map(Ae=>Ae(nt,d)).filter(Ae=>typeof Ae=="function");c[ae].stateOwnersUpdateHandlers=me.length===1?me[0]:me}else Kl&&(c[ae].stateOwnersUpdateHandlers=void 0)}),Object.entries(d).forEach(([ae,Ur])=>{l[ae]=Ur}),m(),d=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(_){const{type:E,detail:y}=_;if(r[E]&&u.mediaErrorCode==null){p(r[E](a,l,_));return}E==="mediaelementchangerequest"?v({media:y}):E==="fullscreenelementchangerequest"?v({fullscreenElement:y}):E==="documentelementchangerequest"?v({documentElement:y}):E==="optionschangerequest"&&(Object.entries(y??{}).forEach(([f,T])=>{l.options[f]=T}),m())},getState(){return u},subscribe(_){return v({},o.length+1),o.push(_),_(u),()=>{const E=o.indexOf(_);E>=0&&(v({},o.length-1),o.splice(E,1))}}}};var pc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O=(t,e,i)=>(pc(t,e,"read from private field"),i?i.call(t):e.get(t)),ot=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Lt=(t,e,i,a)=>(pc(t,e,"write to private field"),e.set(t,i),i),Ni=(t,e,i)=>(pc(t,e,"access private method"),i),gi,on,G,ut,ln,Vt,Bs,dn,Ws,Fd,ka,Fs,Kd,In,Yo,Vd,Gv;const zv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],nm=10,sm=.025,om=.25,E1=.25,_1=2,S={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class Qv extends Cl{constructor(){super(),ot(this,Ws),ot(this,Fs),ot(this,In),ot(this,Vd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ot(this,gi,new cc(this,S.HOTKEYS)),ot(this,on,void 0),ot(this,G,void 0),ot(this,ut,null),ot(this,ln,void 0),ot(this,Vt,void 0),ot(this,Bs,i=>{var a;(a=O(this,G))==null||a.dispatch(i)}),ot(this,dn,void 0),ot(this,ka,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||zv.includes(a))){this.removeEventListener("keyup",O(this,ka));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};Lt(this,ln,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new g.CustomEvent(hy[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(S.NO_HOTKEYS,S.HOTKEYS,S.DEFAULT_STREAM_TYPE,S.DEFAULT_SUBTITLES,S.DEFAULT_DURATION,S.NO_MUTED_PREF,S.NO_VOLUME_PREF,S.LANG,S.LOOP,S.LIVE_EDGE_OFFSET,S.SEEK_TO_LIVE_OFFSET,S.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return O(this,G)}set mediaStore(e){var i,a;if(O(this,G)&&((i=O(this,Vt))==null||i.call(this),Lt(this,Vt,void 0)),Lt(this,G,e),!O(this,G)&&!this.hasAttribute(S.NO_DEFAULT_STORE)){Ni(this,Ws,Fd).call(this);return}Lt(this,Vt,(a=O(this,G))==null?void 0:a.subscribe(O(this,ln)))}get fullscreenElement(){var e;return(e=O(this,on))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(S.FULLSCREEN_ELEMENT)&&this.removeAttribute(S.FULLSCREEN_ELEMENT),Lt(this,on,e),(i=O(this,G))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return z(this,S.DEFAULT_SUBTITLES)}set defaultSubtitles(e){Q(this,S.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return ue(this,S.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){le(this,S.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return oe(this,S.DEFAULT_DURATION)}set defaultDuration(e){fe(this,S.DEFAULT_DURATION,e)}get noHotkeys(){return z(this,S.NO_HOTKEYS)}set noHotkeys(e){Q(this,S.NO_HOTKEYS,e)}get keysUsed(){return ue(this,S.KEYS_USED)}set keysUsed(e){le(this,S.KEYS_USED,e)}get liveEdgeOffset(){return oe(this,S.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){fe(this,S.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return z(this,S.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){Q(this,S.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return z(this,S.NO_VOLUME_PREF)}set noVolumePref(e){Q(this,S.NO_VOLUME_PREF,e)}get noMutedPref(){return z(this,S.NO_MUTED_PREF)}set noMutedPref(e){Q(this,S.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return z(this,S.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){Q(this,S.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return z(this,S.NO_DEFAULT_STORE)}set noDefaultStore(e){Q(this,S.NO_DEFAULT_STORE,e)}get resolvedLang(){return Iy()}attributeChangedCallback(e,i,a){var r,n,s,o,l,u,p,m,c,d,v,_;if(super.attributeChangedCallback(e,i,a),e===S.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(S.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys(),Ni(this,In,Yo).call(this);else if(e===S.HOTKEYS)O(this,gi).value=a,Ni(this,In,Yo).call(this);else if(e===S.DEFAULT_SUBTITLES&&a!==i)(r=O(this,G))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES)}});else if(e===S.DEFAULT_STREAM_TYPE)(s=O(this,G))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===S.LIVE_EDGE_OFFSET&&a!==i)(o=O(this,G))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0}});else if(e===S.SEEK_TO_LIVE_OFFSET&&a!==i)(l=O(this,G))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0}});else if(e===S.NO_AUTO_SEEK_TO_LIVE)(u=O(this,G))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE)}});else if(e===S.FULLSCREEN_ELEMENT){const E=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;Lt(this,on,E),(m=O(this,G))==null||m.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===S.LANG&&a!==i?(wy(a),(c=O(this,G))==null||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===S.LOOP&&a!==i?(d=O(this,G))==null||d.dispatch({type:M.MEDIA_LOOP_REQUEST,detail:a!=null}):e===S.NO_VOLUME_PREF&&a!==i?(v=O(this,G))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF)}}):e===S.NO_MUTED_PREF&&a!==i&&((_=O(this,G))==null||_.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(S.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!O(this,G)&&!this.hasAttribute(S.NO_DEFAULT_STORE)&&Ni(this,Ws,Fd).call(this),(e=O(this,G))==null||e.dispatch({type:"documentelementchangerequest",detail:Ie}),(i=O(this,G))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),O(this,G)&&!O(this,Vt)&&Lt(this,Vt,(a=O(this,G))==null?void 0:a.subscribe(O(this,ln))),O(this,dn)!==void 0&&O(this,G)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=O(this,G))==null||s.dispatch({type:M.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:O(this,dn)}))},0),this.hasAttribute(S.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),O(this,G)){const o=O(this,G).getState();Lt(this,dn,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=O(this,G))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=O(this,G))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=O(this,G))==null||n.dispatch({type:M.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}O(this,Vt)&&((s=O(this,Vt))==null||s.call(this),Lt(this,Vt,void 0)),this.unassociateElement(this),O(this,ut)&&(O(this,ut).remove(),Lt(this,ut,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=O(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=O(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){um(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=k1(e,a,r);Object.values(M).forEach(s=>{e.addEventListener(s,O(this,Bs))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(M).forEach(r=>{e.removeEventListener(r,O(this,Bs))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),O(this,G)&&Object.entries(O(this,G).getState()).forEach(([r,n])=>{um([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Ni(this,Fs,Kd))}disableHotkeys(){this.removeEventListener("keydown",Ni(this,Fs,Kd)),this.removeEventListener("keyup",O(this,ka))}get hotkeys(){return O(this,gi)}set hotkeys(e){le(this,S.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,u,p;const m=e.target;if(((r=(a=(i=m.getAttribute(S.KEYS_USED))==null?void 0:i.split(" "))!=null?a:m==null?void 0:m.keysUsed)!=null?r:[]).map(y=>y==="Space"?" ":y).filter(Boolean).includes(e.key))return;let d,v,_;if(!(O(this,gi).contains(uc(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&O(this,gi).contains("noshift+/")))switch(e.key){case" ":case"k":d=O(this,G).getState().mediaPaused?M.MEDIA_PLAY_REQUEST:M.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?M.MEDIA_UNMUTE_REQUEST:M.MEDIA_MUTE_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?M.MEDIA_EXIT_FULLSCREEN_REQUEST:M.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new g.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new g.CustomEvent(M.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const y=this.hasAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET):nm;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-y,0),_=new g.CustomEvent(M.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case"ArrowRight":case"l":{const y=this.hasAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET):nm;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+y,0),_=new g.CustomEvent(M.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case"ArrowUp":{const y=this.hasAttribute(S.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_UP_VOLUME_STEP):sm;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+y,1),_=new g.CustomEvent(M.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case"ArrowDown":{const y=this.hasAttribute(S.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_DOWN_VOLUME_STEP):sm;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-y,0),_=new g.CustomEvent(M.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case"<":{const y=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;v=Math.max(y-om,E1).toFixed(2),_=new g.CustomEvent(M.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case">":{const y=(p=this.mediaStore.getState().mediaPlaybackRate)!=null?p:1;v=Math.min(y+om,_1).toFixed(2),_=new g.CustomEvent(M.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(_);break}case"/":case"?":{e.shiftKey&&Ni(this,Vd,Gv).call(this);break}case"p":{d=this.mediaStore.getState().mediaIsPip?M.MEDIA_EXIT_PIP_REQUEST:M.MEDIA_ENTER_PIP_REQUEST,_=new g.CustomEvent(d,{composed:!0,bubbles:!0}),this.dispatchEvent(_);break}}}}gi=new WeakMap;on=new WeakMap;G=new WeakMap;ut=new WeakMap;ln=new WeakMap;Vt=new WeakMap;Bs=new WeakMap;dn=new WeakMap;Ws=new WeakSet;Fd=function(){var t;this.mediaStore=f1({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(S.DEFAULT_DURATION)?+this.getAttribute(S.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(S.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(S.NO_SUBTITLES_LANG_PREF)}})};ka=new WeakMap;Fs=new WeakSet;Kd=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=O(this,ut))!=null&&e.open)){this.removeEventListener("keyup",O(this,ka));return}if(i||a||!s&&!zv.includes(r)){this.removeEventListener("keyup",O(this,ka));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!O(this,gi).contains(uc(r))&&!l&&t.preventDefault(),this.addEventListener("keyup",O(this,ka),{once:!0})};In=new WeakSet;Yo=function(){O(this,ut)&&(O(this,ut).hotkeys=O(this,gi).value||void 0,(this.noHotkeys||O(this,gi).contains("noshift+/"))&&(O(this,ut).open=!1))};Vd=new WeakSet;Gv=function(){O(this,ut)||(Lt(this,ut,Ie.createElement("media-keyboard-shortcuts-dialog")),Ni(this,In,Yo).call(this),this.appendChild(O(this,ut))),O(this,ut).open=!0};const b1=Object.values(h),g1=Object.values(pv),jv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(g.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,J.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>b1.includes(o)):[]},y1=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&g.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof g.customElements.get(t.nodeName.toLowerCase()))&&g.customElements.upgrade(t),g1.some(a=>a in t)},qd=t=>y1(t)||!!jv(t).length,lm=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},dm={[h.MEDIA_SUBTITLES_LIST]:qn,[h.MEDIA_SUBTITLES_SHOWING]:qn,[h.MEDIA_SEEKABLE]:lm,[h.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(lm).join(" "),[h.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[h.MEDIA_RENDITION_LIST]:py,[h.MEDIA_AUDIO_TRACK_LIST]:_y},T1=async(t,e,i)=>{var a,r;if(t.isConnected||await Ev(0),typeof i=="boolean"||i==null)return Q(t,e,i);if(typeof i=="number")return fe(t,e,i);if(typeof i=="string")return le(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=dm[e])==null?void 0:a.call(dm,i))!=null?r:i;return t.setAttribute(e,n)},A1=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},da=(t,e)=>{if(A1(t))return;const i=(r,n)=>{var s,o;qd(r)&&n(r);const{children:l=[]}=r??{},u=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...u].forEach(m=>da(m,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!qd(t)){g.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},um=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=jv(a),n=e.toLowerCase();r.includes(n)&&T1(a,n,i)})},k1=(t,e,i)=>{da(t,e);const a=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;e(c)},r=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;i(c)};t.addEventListener(M.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(M.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(m=>{const{addedNodes:c=[],removedNodes:d=[],type:v,target:_,attributeName:E}=m;v==="childList"?(Array.prototype.forEach.call(c,y=>da(y,e)),Array.prototype.forEach.call(d,y=>da(y,i))):v==="attributes"&&E===J.MEDIA_CHROME_ATTRIBUTES&&(qd(_)?e(_):i(_))})};let s=[];const o=p=>{const m=p.target;m.name!=="media"&&(s.forEach(c=>da(c,i)),s=[...m.assignedElements({flatten:!0})],s.forEach(c=>da(c,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{da(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(M.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(M.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};g.customElements.get("media-controller")||g.customElements.define("media-controller",Qv);var w1=Qv;const Da={PLACEMENT:"placement",BOUNDS:"bounds"};function S1(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class xl extends g.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Sv(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Mr(this,"#"+this.bounds))!=null?e:tt(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,p=n+s,m=a.getPropertyValue("--media-tooltip-offset-x"),c=m?parseFloat(m.replace("px","")):0,d=a.getPropertyValue("--media-tooltip-container-margin"),v=d?parseFloat(d.replace("px","")):0,_=o-n+c-v,E=u-p+c+v;if(_<0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}if(E>0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Da.PLACEMENT,Da.BOUNDS]}get placement(){return ue(this,Da.PLACEMENT)}set placement(e){le(this,Da.PLACEMENT,e)}get bounds(){return ue(this,Da.BOUNDS)}set bounds(e){le(this,Da.BOUNDS,e)}}xl.shadowRootOptions={mode:"open"};xl.getTemplateHTML=S1;g.customElements.get("media-tooltip")||g.customElements.define("media-tooltip",xl);var cm=xl,vc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},we=(t,e,i)=>(vc(t,e,"read from private field"),i?i.call(t):e.get(t)),ra=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ds=(t,e,i,a)=>(vc(t,e,"write to private field"),e.set(t,i),i),hm=(t,e,i)=>(vc(t,e,"access private method"),i),qt,ur,Yd,Zv,Yi,Ya,Ks,Gd,Xv;const Ci={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function I1(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${cm.shadowRootOptions.mode}">
          ${cm.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function R1(t,e){return`
    <slot></slot>
  `}function L1(){return""}class $e extends g.HTMLElement{constructor(){if(super(),ra(this,Yd),ra(this,Gd),ra(this,qt,void 0),this.preventClick=!1,this.tooltipEl=null,ra(this,ur,e=>{this.preventClick||this.handleClick(e),setTimeout(we(this,Yi),0)}),ra(this,Yi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),ra(this,Ya,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",we(this,Ya));return}this.preventClick||this.handleClick(e)}),ra(this,Ks,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",we(this,Ya));return}this.addEventListener("keyup",we(this,Ya),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ci.TOOLTIP_PLACEMENT,J.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",we(this,ur)),this.addEventListener("keydown",we(this,Ks)),this.tabIndex=0}disable(){this.removeEventListener("click",we(this,ur)),this.removeEventListener("keydown",we(this,Ks)),this.removeEventListener("keyup",we(this,Ya)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===J.MEDIA_CONTROLLER?(i&&((n=(r=we(this,qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ds(this,qt,null)),a&&this.isConnected&&(ds(this,qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=we(this,qt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ci.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),hm(this,Yd,Zv).call(this)&&we(this,Yi).call(this)}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(J.MEDIA_CONTROLLER);n&&(ds(this,qt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=we(this,qt))==null?void 0:i.associateElement)==null||a.call(i,this)),g.customElements.whenDefined("media-tooltip").then(()=>hm(this,Gd,Xv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=we(this,qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ds(this,qt,null),this.removeEventListener("mouseenter",we(this,Yi)),this.removeEventListener("focus",we(this,Yi)),this.removeEventListener("click",we(this,ur))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ue(this,Ci.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){le(this,Ci.TOOLTIP_PLACEMENT,e)}get mediaController(){return ue(this,J.MEDIA_CONTROLLER)}set mediaController(e){le(this,J.MEDIA_CONTROLLER,e)}get disabled(){return z(this,Ci.DISABLED)}set disabled(e){Q(this,Ci.DISABLED,e)}get noTooltip(){return z(this,Ci.NO_TOOLTIP)}set noTooltip(e){Q(this,Ci.NO_TOOLTIP,e)}handleClick(e){}}qt=new WeakMap;ur=new WeakMap;Yd=new WeakSet;Zv=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};Yi=new WeakMap;Ya=new WeakMap;Ks=new WeakMap;Gd=new WeakSet;Xv=function(){this.addEventListener("mouseenter",we(this,Yi)),this.addEventListener("focus",we(this,Yi)),this.addEventListener("click",we(this,ur));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};$e.shadowRootOptions={mode:"open"};$e.getTemplateHTML=I1;$e.getSlotTemplateHTML=R1;$e.getTooltipContentHTML=L1;g.customElements.get("media-chrome-button")||g.customElements.define("media-chrome-button",$e);const mm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function C1(t){return`
    <style>
      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${mm}</slot>
      <slot name="exit">${mm}</slot>
    </slot>
  `}function D1(){return`
    <slot name="tooltip-enter">${C("start airplay")}</slot>
    <slot name="tooltip-exit">${C("stop airplay")}</slot>
  `}const pm=t=>{const e=t.mediaIsAirplaying?C("stop airplay"):C("start airplay");t.setAttribute("aria-label",e)};class fc extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),pm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_AIRPLAYING&&pm(this)}get mediaIsAirplaying(){return z(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){Q(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ue(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){le(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new g.CustomEvent(M.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}fc.getSlotTemplateHTML=C1;fc.getTooltipContentHTML=D1;g.customElements.get("media-airplay-button")||g.customElements.define("media-airplay-button",fc);const M1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,x1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function O1(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${M1}</slot>
      <slot name="off">${x1}</slot>
    </slot>
  `}function N1(){return`
    <slot name="tooltip-enable">${C("Enable captions")}</slot>
    <slot name="tooltip-disable">${C("Disable captions")}</slot>
  `}const vm=t=>{t.setAttribute("aria-checked",Fv(t).toString())};class Ec extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",C("closed captions")),vm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING&&vm(this)}get mediaSubtitlesList(){return fm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Em(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return fm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Em(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new g.CustomEvent(M.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Ec.getSlotTemplateHTML=O1;Ec.getTooltipContentHTML=N1;const fm=(t,e)=>{const i=t.getAttribute(e);return i?Dl(i):[]},Em=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-button")||g.customElements.define("media-captions-button",Ec);const P1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',$1='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function U1(t){return`
    <style>
      :host([${h.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${P1}</slot>
      <slot name="exit">${$1}</slot>
    </slot>
  `}function H1(){return`
    <slot name="tooltip-enter">${C("Start casting")}</slot>
    <slot name="tooltip-exit">${C("Stop casting")}</slot>
  `}const _m=t=>{const e=t.mediaIsCasting?C("stop casting"):C("start casting");t.setAttribute("aria-label",e)};class _c extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),_m(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_CASTING&&_m(this)}get mediaIsCasting(){return z(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){Q(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ue(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){le(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?M.MEDIA_EXIT_CAST_REQUEST:M.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}_c.getSlotTemplateHTML=U1;_c.getTooltipContentHTML=H1;g.customElements.get("media-cast-button")||g.customElements.define("media-cast-button",_c);var bc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},pe=(t,e,i)=>(bc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ue=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pi=(t,e,i,a)=>(bc(t,e,"write to private field"),e.set(t,i),i),Mt=(t,e,i)=>(bc(t,e,"access private method"),i),Yt,Ol,Vs,qs,xt,Go,Ys,Gs,zs,gc,Jv,Qs,zd,js,Qd,zo,yc,jd,ef,Zd,tf,Xd,af,Jd,rf;function B1(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function W1(t){return""}class Or extends g.HTMLElement{constructor(){if(super(),Ue(this,gc),Ue(this,Qs),Ue(this,js),Ue(this,zo),Ue(this,jd),Ue(this,Zd),Ue(this,Xd),Ue(this,Jd),Ue(this,Yt,void 0),Ue(this,Ol,void 0),Ue(this,Vs,void 0),Ue(this,qs,void 0),Ue(this,xt,{}),Ue(this,Go,[]),Ue(this,Ys,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ce(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Ue(this,Gs,()=>{const{style:e}=Ce(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Ue(this,zs,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Pi(this,Vs,this.shadowRoot.querySelector("#startpoint")),Pi(this,qs,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",J.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===J.MEDIA_CONTROLLER?(i&&((n=(r=pe(this,Yt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Pi(this,Yt,null)),a&&this.isConnected&&(Pi(this,Yt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=pe(this,Yt))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Mt(this,Qs,zd).call(this)):(this.range.setAttribute(e,a),Mt(this,js,Qd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),pe(this,xt).pointer=Ce(this.shadowRoot,"#pointer"),pe(this,xt).progress=Ce(this.shadowRoot,"#progress"),pe(this,xt).thumb=Ce(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),pe(this,xt).activeSegment=Ce(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(J.MEDIA_CONTROLLER);n&&(Pi(this,Yt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=pe(this,Yt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",pe(this,Ys)),this.shadowRoot.addEventListener("focusout",pe(this,Gs)),Mt(this,Qs,zd).call(this),Sr(this.container,pe(this,zs))}disconnectedCallback(){var e,i;Mt(this,js,Qd).call(this),(i=(e=pe(this,Yt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Pi(this,Yt,null),this.shadowRoot.removeEventListener("focusin",pe(this,Ys)),this.shadowRoot.removeEventListener("focusout",pe(this,Gs)),Ir(this.container,pe(this,zs))}updatePointerBar(e){var i;(i=pe(this,xt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=pe(this,xt).progress)==null||e.style.setProperty("width",`${a}%`),(i=pe(this,xt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Pi(this,Go,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],u=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,m=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,c=Ie.createElementNS("http://www.w3.org/2000/svg","rect"),d=nc(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);d.style.setProperty("x",u),d.style.setProperty("width",m),i.append(c)}}getPointerRatio(e){return Cy(e.clientX,e.clientY,pe(this,Vs).getBoundingClientRect(),pe(this,qs).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Mt(this,Jd,rf).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Mt(this,jd,ef).call(this,e);break;case"pointerdown":Mt(this,zo,yc).call(this,e);break;case"pointerup":Mt(this,Zd,tf).call(this);break;case"pointerleave":Mt(this,Xd,af).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Yt=new WeakMap;Ol=new WeakMap;Vs=new WeakMap;qs=new WeakMap;xt=new WeakMap;Go=new WeakMap;Ys=new WeakMap;Gs=new WeakMap;zs=new WeakMap;gc=new WeakSet;Jv=function(t){const e=pe(this,xt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${pe(this,Go).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Qs=new WeakSet;zd=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};js=new WeakSet;Qd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=g.window)==null||t.removeEventListener("pointerup",this),(e=g.window)==null||e.removeEventListener("pointermove",this)};zo=new WeakSet;yc=function(t){var e;Pi(this,Ol,t.composedPath().includes(this.range)),(e=g.window)==null||e.addEventListener("pointerup",this,{once:!0})};jd=new WeakSet;ef=function(t){var e;t.pointerType!=="mouse"&&Mt(this,zo,yc).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=g.window)==null||e.addEventListener("pointermove",this)};Zd=new WeakSet;tf=function(){var t;(t=g.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Xd=new WeakSet;af=function(){var t,e;this.removeEventListener("pointerleave",this),(t=g.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=pe(this,xt).activeSegment)==null||e.style.removeProperty("transform")};Jd=new WeakSet;rf=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Mt(this,gc,Jv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!pe(this,Ol))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Or.shadowRootOptions={mode:"open"};Or.getTemplateHTML=B1;Or.getContainerTemplateHTML=W1;g.customElements.get("media-chrome-range")||g.customElements.define("media-chrome-range",Or);var nf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},us=(t,e,i)=>(nf(t,e,"read from private field"),i?i.call(t):e.get(t)),F1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cs=(t,e,i,a)=>(nf(t,e,"write to private field"),e.set(t,i),i),Gt;function K1(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class Tc extends g.HTMLElement{constructor(){if(super(),F1(this,Gt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[J.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===J.MEDIA_CONTROLLER&&(i&&((n=(r=us(this,Gt))==null?void 0:r.unassociateElement)==null||n.call(r,this),cs(this,Gt,null)),a&&this.isConnected&&(cs(this,Gt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=us(this,Gt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(J.MEDIA_CONTROLLER);r&&(cs(this,Gt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=us(this,Gt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=us(this,Gt))==null?void 0:e.unassociateElement)==null||i.call(e,this),cs(this,Gt,null)}}Gt=new WeakMap;Tc.shadowRootOptions={mode:"open"};Tc.getTemplateHTML=K1;g.customElements.get("media-control-bar")||g.customElements.define("media-control-bar",Tc);var sf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hs=(t,e,i)=>(sf(t,e,"read from private field"),i?i.call(t):e.get(t)),V1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ms=(t,e,i,a)=>(sf(t,e,"write to private field"),e.set(t,i),i),zt;function q1(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function Y1(t,e){return`
    <slot></slot>
  `}class ea extends g.HTMLElement{constructor(){if(super(),V1(this,zt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[J.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===J.MEDIA_CONTROLLER&&(i&&((n=(r=hs(this,zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ms(this,zt,null)),a&&this.isConnected&&(ms(this,zt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=hs(this,zt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Ce(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(J.MEDIA_CONTROLLER);n&&(ms(this,zt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=hs(this,zt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=hs(this,zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ms(this,zt,null)}}zt=new WeakMap;ea.shadowRootOptions={mode:"open"};ea.getTemplateHTML=q1;ea.getSlotTemplateHTML=Y1;g.customElements.get("media-text-display")||g.customElements.define("media-text-display",ea);var of=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},bm=(t,e,i)=>(of(t,e,"read from private field"),i?i.call(t):e.get(t)),G1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},z1=(t,e,i,a)=>(of(t,e,"write to private field"),e.set(t,i),i),un;function Q1(t,e){return`
    <slot>${Xi(e.mediaDuration)}</slot>
  `}class lf extends ea{constructor(){var e;super(),G1(this,un,void 0),z1(this,un,this.shadowRoot.querySelector("slot")),bm(this,un).textContent=Xi((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===h.MEDIA_DURATION&&(bm(this,un).textContent=Xi(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){fe(this,h.MEDIA_DURATION,e)}}un=new WeakMap;lf.getSlotTemplateHTML=Q1;g.customElements.get("media-duration-display")||g.customElements.define("media-duration-display",lf);const j1={2:C("Network Error"),3:C("Decode Error"),4:C("Source Not Supported"),5:C("Encryption Error")},Z1={2:C("A network error caused the media download to fail."),3:C("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:C("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:C("The media is encrypted and there are no keys to decrypt it.")},Ac=t=>{var e,i;return t.code===1?null:{title:(e=j1[t.code])!=null?e:`Error ${t.code}`,message:(i=Z1[t.code])!=null?i:t.message}};var df=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},X1=(t,e,i)=>(df(t,e,"read from private field"),i?i.call(t):e.get(t)),J1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},eT=(t,e,i,a)=>(df(t,e,"write to private field"),e.set(t,i),i),Zs;function tT(t){const e=+t.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e}" id="content">
      ${uf({code:e,message:t.mediaerrormessage})}
    </slot>
  `}function iT(t){return t.code&&Ac(t)!==null}function uf(t){var e;const{title:i,message:a}=(e=Ac(t))!=null?e:{},r=ed(t.code);let n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${ed(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${ed(a)}</p></slot>`),n}const gm=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class Nl extends xr{constructor(){super(...arguments),J1(this,Zs,null)}static get observedAttributes(){return[...super.observedAttributes,...gm]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!gm.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=iT(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=Ac(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return X1(this,Zs)}set mediaError(e){eT(this,Zs,e)}get mediaErrorCode(){return oe(this,"mediaerrorcode")}set mediaErrorCode(e){fe(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ue(this,"mediaerrormessage")}set mediaErrorMessage(e){le(this,"mediaerrormessage",e)}}Zs=new WeakMap;Nl.getSlotTemplateHTML=tT;Nl.formatErrorMessage=uf;g.customElements.get("media-error-dialog")||g.customElements.define("media-error-dialog",Nl);var cf=Nl,hf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},aT=(t,e,i)=>(hf(t,e,"read from private field"),e.get(t)),rT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},nT=(t,e,i,a)=>(hf(t,e,"write to private field"),e.set(t,i),i),Xs;const sT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,oT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function lT(t){return`
    <style>
      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sT}</slot>
      <slot name="exit">${oT}</slot>
    </slot>
  `}function dT(){return`
    <slot name="tooltip-enter">${C("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${C("Exit fullscreen mode")}</slot>
  `}const ym=t=>{const e=t.mediaIsFullscreen?C("exit fullscreen mode"):C("enter fullscreen mode");t.setAttribute("aria-label",e)};class kc extends $e{constructor(){super(...arguments),rT(this,Xs,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ym(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_FULLSCREEN&&ym(this)}get mediaFullscreenUnavailable(){return ue(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){le(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return z(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){Q(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){nT(this,Xs,e);const i=aT(this,Xs)instanceof PointerEvent,a=this.mediaIsFullscreen?new g.CustomEvent(M.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new g.CustomEvent(M.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Xs=new WeakMap;kc.getSlotTemplateHTML=lT;kc.getTooltipContentHTML=dT;g.customElements.get("media-fullscreen-button")||g.customElements.define("media-fullscreen-button",kc);const{MEDIA_TIME_IS_LIVE:Js,MEDIA_PAUSED:Rn}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:uT,MEDIA_PLAY_REQUEST:cT}=M,hT='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function mT(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Js}]:not([${Rn}])) slot[name=indicator] > *,
      :host([${Js}]:not([${Rn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Js}]:not([${Rn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${hT}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${C("live")}</slot>
  `}const Tm=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=C(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=C("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class mf extends $e{static get observedAttributes(){return[...super.observedAttributes,Js,Rn]}connectedCallback(){super.connectedCallback(),Tm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Tm(this)}get mediaPaused(){return z(this,h.MEDIA_PAUSED)}set mediaPaused(e){Q(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return z(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){Q(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new g.CustomEvent(uT,{composed:!0,bubbles:!0})),this.hasAttribute(Rn)&&this.dispatchEvent(new g.CustomEvent(cT,{composed:!0,bubbles:!0})))}}mf.getSlotTemplateHTML=mT;g.customElements.get("media-live-button")||g.customElements.define("media-live-button",mf);var pf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fr=(t,e,i)=>(pf(t,e,"read from private field"),i?i.call(t):e.get(t)),Am=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Kr=(t,e,i,a)=>(pf(t,e,"write to private field"),e.set(t,i),i),Qt,eo;const ps={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},vf=500,pT=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function vT(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${vf}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${h.MEDIA_LOADING}]:not([${h.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${pT}</slot>
    <div id="status" role="status" aria-live="polite">${C("media loading")}</div>
  `}class wc extends g.HTMLElement{constructor(){if(super(),Am(this,Qt,void 0),Am(this,eo,vf),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[J.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,ps.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ps.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===J.MEDIA_CONTROLLER&&(i&&((n=(r=Fr(this,Qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Kr(this,Qt,null)),a&&this.isConnected&&(Kr(this,Qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Fr(this,Qt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(J.MEDIA_CONTROLLER);r&&(Kr(this,Qt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Fr(this,Qt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Fr(this,Qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Kr(this,Qt,null)}get loadingDelay(){return Fr(this,eo)}set loadingDelay(e){Kr(this,eo,e);const{style:i}=Ce(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return z(this,h.MEDIA_PAUSED)}set mediaPaused(e){Q(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return z(this,h.MEDIA_LOADING)}set mediaLoading(e){Q(this,h.MEDIA_LOADING,e)}get mediaController(){return ue(this,J.MEDIA_CONTROLLER)}set mediaController(e){le(this,J.MEDIA_CONTROLLER,e)}get noAutohide(){return z(this,ps.NO_AUTOHIDE)}set noAutohide(e){Q(this,ps.NO_AUTOHIDE,e)}}Qt=new WeakMap;eo=new WeakMap;wc.shadowRootOptions={mode:"open"};wc.getTemplateHTML=vT;g.customElements.get("media-loading-indicator")||g.customElements.define("media-loading-indicator",wc);const fT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,km=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,ET=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function _T(t){return`
    <style>
      :host(:not([${h.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${h.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${h.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${h.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${fT}</slot>
      <slot name="low">${km}</slot>
      <slot name="medium">${km}</slot>
      <slot name="high">${ET}</slot>
    </slot>
  `}function bT(){return`
    <slot name="tooltip-mute">${C("Mute")}</slot>
    <slot name="tooltip-unmute">${C("Unmute")}</slot>
  `}const wm=t=>{const e=t.mediaVolumeLevel==="off",i=C(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Sc extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),wm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_VOLUME_LEVEL&&wm(this)}get mediaVolumeLevel(){return ue(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){le(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?M.MEDIA_UNMUTE_REQUEST:M.MEDIA_MUTE_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Sc.getSlotTemplateHTML=_T;Sc.getTooltipContentHTML=bT;g.customElements.get("media-mute-button")||g.customElements.define("media-mute-button",Sc);const Sm=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function gT(t){return`
    <style>
      :host([${h.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${h.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${h.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Sm}</slot>
      <slot name="exit">${Sm}</slot>
    </slot>
  `}function yT(){return`
    <slot name="tooltip-enter">${C("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${C("Exit picture in picture mode")}</slot>
  `}const Im=t=>{const e=t.mediaIsPip?C("exit picture in picture mode"):C("enter picture in picture mode");t.setAttribute("aria-label",e)};class Ic extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Im(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_PIP&&Im(this)}get mediaPipUnavailable(){return ue(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){le(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return z(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){Q(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?M.MEDIA_EXIT_PIP_REQUEST:M.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ic.getSlotTemplateHTML=gT;Ic.getTooltipContentHTML=yT;g.customElements.get("media-pip-button")||g.customElements.define("media-pip-button",Ic);var TT=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ma=(t,e,i)=>(TT(t,e,"read from private field"),i?i.call(t):e.get(t)),AT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$i;const td={RATES:"rates"},ff=[1,1.2,1.5,1.7,2],cr=1;function Ji(t){return Math.round(t*100)/100}function kT(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Ji(+t.mediaplaybackrate):cr}x</slot>
  `}function wT(){return C("Playback rate")}class Rc extends $e{constructor(){var e;super(),AT(this,$i,new cc(this,td.RATES,{defaultValue:ff})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ji((e=this.mediaPlaybackRate)!=null?e:cr)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,td.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===td.RATES&&(Ma(this,$i).value=a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Ji(Number.isNaN(r)?cr:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",C("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Ma(this,$i)}set rates(e){e?Array.isArray(e)?Ma(this,$i).value=e.join(" "):typeof e=="string"&&(Ma(this,$i).value=e):Ma(this,$i).value=""}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){fe(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Ma(this,$i).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:cr,n=new g.CustomEvent(M.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}$i=new WeakMap;Rc.getSlotTemplateHTML=kT;Rc.getTooltipContentHTML=wT;g.customElements.get("media-playback-rate-button")||g.customElements.define("media-playback-rate-button",Rc);const ST=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,IT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function RT(t){return`
    <style>
      :host([${h.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${h.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${h.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ST}</slot>
      <slot name="pause">${IT}</slot>
    </slot>
  `}function LT(){return`
    <slot name="tooltip-play">${C("Play")}</slot>
    <slot name="tooltip-pause">${C("Pause")}</slot>
  `}const Rm=t=>{const e=t.mediaPaused?C("play"):C("pause");t.setAttribute("aria-label",e)};class Lc extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Rm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&Rm(this)}get mediaPaused(){return z(this,h.MEDIA_PAUSED)}set mediaPaused(e){Q(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?M.MEDIA_PLAY_REQUEST:M.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Lc.getSlotTemplateHTML=RT;Lc.getTooltipContentHTML=LT;g.customElements.get("media-play-button")||g.customElements.define("media-play-button",Lc);const Bt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function CT(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const DT=t=>{t.style.removeProperty("background-image")},MT=(t,e)=>{t.style["background-image"]=`url('${e}')`};class Cc extends g.HTMLElement{static get observedAttributes(){return[Bt.PLACEHOLDER_SRC,Bt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Bt.SRC&&(a==null?this.image.removeAttribute(Bt.SRC):this.image.setAttribute(Bt.SRC,a)),e===Bt.PLACEHOLDER_SRC&&(a==null?DT(this.image):MT(this.image,a))}get placeholderSrc(){return ue(this,Bt.PLACEHOLDER_SRC)}set placeholderSrc(e){le(this,Bt.SRC,e)}get src(){return ue(this,Bt.SRC)}set src(e){le(this,Bt.SRC,e)}}Cc.shadowRootOptions={mode:"open"};Cc.getTemplateHTML=CT;g.customElements.get("media-poster-image")||g.customElements.define("media-poster-image",Cc);var Ef=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xT=(t,e,i)=>(Ef(t,e,"read from private field"),i?i.call(t):e.get(t)),OT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},NT=(t,e,i,a)=>(Ef(t,e,"write to private field"),e.set(t,i),i),to;class PT extends ea{constructor(){super(),OT(this,to,void 0),NT(this,to,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&a!==i&&a!=null)if(xT(this,to).textContent=a,a!==""){const r=C("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ue(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){le(this,h.MEDIA_PREVIEW_CHAPTER,e)}}to=new WeakMap;g.customElements.get("media-preview-chapter-display")||g.customElements.define("media-preview-chapter-display",PT);var _f=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vs=(t,e,i)=>(_f(t,e,"read from private field"),i?i.call(t):e.get(t)),$T=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fs=(t,e,i,a)=>(_f(t,e,"write to private field"),e.set(t,i),i),jt;function UT(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Pl extends g.HTMLElement{constructor(){if(super(),$T(this,jt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[J.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(J.MEDIA_CONTROLLER);r&&(fs(this,jt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=vs(this,jt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=vs(this,jt))==null?void 0:e.unassociateElement)==null||i.call(e,this),fs(this,jt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===J.MEDIA_CONTROLLER&&(i&&((n=(r=vs(this,jt))==null?void 0:r.unassociateElement)==null||n.call(r,this),fs(this,jt,null)),a&&this.isConnected&&(fs(this,jt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=vs(this,jt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return ue(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:p,minWidth:m,minHeight:c}=l,d=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let v,_;if(d==="fill"){const x=parseInt(u)/n,I=parseInt(p)/s,H=parseInt(m)/n,Y=parseInt(c)/s;v=x<1?x:Math.max(x,H),_=I<1?I:Math.max(I,Y)}else{const x=Math.min(parseInt(u)/n,parseInt(p)/s),I=Math.max(parseInt(m)/n,parseInt(c)/s),Y=x<1?x:I>1?I:1;v=Y,_=Y}const{style:E}=Ce(this.shadowRoot,":host"),y=Ce(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),w=Math.min(v,_)<1?"min":"max";E.setProperty(`${w}-width`,"initial","important"),E.setProperty(`${w}-height`,"initial","important"),E.width=`${n*v}px`,E.height=`${s*_}px`;const D=()=>{y.width=`${this.imgWidth*v}px`,y.height=`${this.imgHeight*_}px`,y.display="block"};f.src!==o&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,D(),f.onload=null},f.src=o,D()),D(),y.transform=`translate(-${a*v}px, -${r*_}px)`}}jt=new WeakMap;Pl.shadowRootOptions={mode:"open"};Pl.getTemplateHTML=UT;g.customElements.get("media-preview-thumbnail")||g.customElements.define("media-preview-thumbnail",Pl);var Lm=Pl,bf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Cm=(t,e,i)=>(bf(t,e,"read from private field"),i?i.call(t):e.get(t)),HT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},BT=(t,e,i,a)=>(bf(t,e,"write to private field"),e.set(t,i),i),cn;class WT extends ea{constructor(){super(),HT(this,cn,void 0),BT(this,cn,this.shadowRoot.querySelector("slot")),Cm(this,cn).textContent=Xi(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PREVIEW_TIME&&a!=null&&(Cm(this,cn).textContent=Xi(parseFloat(a)))}get mediaPreviewTime(){return oe(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){fe(this,h.MEDIA_PREVIEW_TIME,e)}}cn=new WeakMap;g.customElements.get("media-preview-time-display")||g.customElements.define("media-preview-time-display",WT);const xa={SEEK_OFFSET:"seekoffset"},id=30,FT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function KT(t,e){return`
    <slot name="icon">${FT(e.seekOffset)}</slot>
  `}const VT=(t,e)=>{t.setAttribute("aria-label",C("seek back {seekOffset} seconds",{seekOffset:e}))};function qT(){return C("Seek backward")}const YT=0;class Dc extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,xa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,xa.SEEK_OFFSET,id)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),VT(this,this.seekOffset),e===xa.SEEK_OFFSET&&(this.seekOffset=oe(this,xa.SEEK_OFFSET,id))}get seekOffset(){return oe(this,xa.SEEK_OFFSET,id)}set seekOffset(e){fe(this,xa.SEEK_OFFSET,e),this.setAttribute("aria-label",C("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),kv(wv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME,YT)}set mediaCurrentTime(e){fe(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new g.CustomEvent(M.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Dc.getSlotTemplateHTML=KT;Dc.getTooltipContentHTML=qT;g.customElements.get("media-seek-backward-button")||g.customElements.define("media-seek-backward-button",Dc);const Oa={SEEK_OFFSET:"seekoffset"},ad=30,GT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function zT(t,e){return`
    <slot name="icon">${GT(e.seekOffset)}</slot>
  `}const QT=(t,e)=>{t.setAttribute("aria-label",C("seek forward {seekOffset} seconds",{seekOffset:e}))};function jT(){return C("Seek forward")}const ZT=0;class Mc extends $e{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Oa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,Oa.SEEK_OFFSET,ad)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),QT(this,this.seekOffset),e===Oa.SEEK_OFFSET&&(this.seekOffset=oe(this,Oa.SEEK_OFFSET,ad))}get seekOffset(){return oe(this,Oa.SEEK_OFFSET,ad)}set seekOffset(e){fe(this,Oa.SEEK_OFFSET,e),this.setAttribute("aria-label",C("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),kv(wv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME,ZT)}set mediaCurrentTime(e){fe(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new g.CustomEvent(M.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Mc.getSlotTemplateHTML=zT;Mc.getTooltipContentHTML=jT;g.customElements.get("media-seek-forward-button")||g.customElements.define("media-seek-forward-button",Mc);var xc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pt=(t,e,i)=>(xc(t,e,"read from private field"),i?i.call(t):e.get(t)),na=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oc=(t,e,i,a)=>(xc(t,e,"write to private field"),e.set(t,i),i),Ki=(t,e,i)=>(xc(t,e,"access private method"),i),Ga,oi,$l,Nc,gf,Qo,Pc,hn,io,ao,eu;const Ui={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Dm=[...Object.values(Ui),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],yf=["Enter"," "],XT="&nbsp;/&nbsp;",tu=(t,{timesSep:e=XT}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Xi(0-(s-r)):Xi(r);return t.showDuration?`${o}${e}${Xi(s)}`:o},JT=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",C("video not loaded, unknown time."));return}const n=t.remaining?wn(0-(r-i)):wn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=wn(r),o=C("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function eA(t,e){return`
    <slot>${tu(e)}</slot>
  `}const tA=t=>{t.setAttribute("aria-label",C("playback time"))};class Tf extends ea{constructor(){super(),na(this,Nc),na(this,Qo),na(this,hn),na(this,ao),na(this,Ga,void 0),na(this,oi,null),na(this,$l,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!yf.includes(r)){this.removeEventListener("keyup",Pt(this,oi));return}this.addEventListener("keyup",Pt(this,oi))}),Oc(this,Ga,this.shadowRoot.querySelector("slot")),Pt(this,Ga).innerHTML=`${tu(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Dm,"disabled"]}connectedCallback(){const{style:e}=Ce(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",C("playback time")),Ki(this,hn,io).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ki(this,Qo,Pc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){tA(this),Dm.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ki(this,hn,io).call(this):Ki(this,ao,eu).call(this):e===Ui.NO_TOGGLE&&a!==i&&(this.noToggle?Ki(this,ao,eu).call(this):Ki(this,hn,io).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return z(this,Ui.REMAINING)}set remaining(e){Q(this,Ui.REMAINING,e)}get showDuration(){return z(this,Ui.SHOW_DURATION)}set showDuration(e){Q(this,Ui.SHOW_DURATION,e)}get noToggle(){return z(this,Ui.NO_TOGGLE)}set noToggle(e){Q(this,Ui.NO_TOGGLE,e)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){fe(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){fe(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=tu(this);JT(this),e!==Pt(this,Ga).innerHTML&&(Pt(this,Ga).innerHTML=e)}}Ga=new WeakMap;oi=new WeakMap;$l=new WeakMap;Nc=new WeakSet;gf=function(){Pt(this,oi)||(Oc(this,oi,t=>{const{key:e}=t;if(!yf.includes(e)){this.removeEventListener("keyup",Pt(this,oi));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Pt(this,$l)),this.addEventListener("click",this.toggleTimeDisplay))};Qo=new WeakSet;Pc=function(){Pt(this,oi)&&(this.removeEventListener("keyup",Pt(this,oi)),this.removeEventListener("keydown",Pt(this,$l)),this.removeEventListener("click",this.toggleTimeDisplay),Oc(this,oi,null))};hn=new WeakSet;io=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ki(this,Nc,gf).call(this))};ao=new WeakSet;eu=function(){this.removeAttribute("role"),this.disable(),Ki(this,Qo,Pc).call(this)};Tf.getSlotTemplateHTML=eA;g.customElements.get("media-time-display")||g.customElements.define("media-time-display",Tf);var Af=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oe=(t,e,i)=>(Af(t,e,"read from private field"),e.get(t)),Wt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},dt=(t,e,i,a)=>(Af(t,e,"write to private field"),e.set(t,i),i),iA=(t,e,i,a)=>({set _(r){dt(t,e,r)},get _(){return Oe(t,e)}}),za,ro,Qa,mn,no,so,oo,ja,ua,lo;class aA{constructor(e,i,a){Wt(this,za,void 0),Wt(this,ro,void 0),Wt(this,Qa,void 0),Wt(this,mn,void 0),Wt(this,no,void 0),Wt(this,so,void 0),Wt(this,oo,void 0),Wt(this,ja,void 0),Wt(this,ua,0),Wt(this,lo,(r=performance.now())=>{dt(this,ua,requestAnimationFrame(Oe(this,lo))),dt(this,mn,performance.now()-Oe(this,Qa));const n=1e3/this.fps;if(Oe(this,mn)>n){dt(this,Qa,r-Oe(this,mn)%n);const s=1e3/((r-Oe(this,ro))/++iA(this,no)._),o=(r-Oe(this,so))/1e3/this.duration;let l=Oe(this,oo)+o*this.playbackRate;l-Oe(this,za).valueAsNumber>0?dt(this,ja,this.playbackRate/this.duration/s):(dt(this,ja,.995*Oe(this,ja)),l=Oe(this,za).valueAsNumber+Oe(this,ja)),this.callback(l)}}),dt(this,za,e),this.callback=i,this.fps=a}start(){Oe(this,ua)===0&&(dt(this,Qa,performance.now()),dt(this,ro,Oe(this,Qa)),dt(this,no,0),Oe(this,lo).call(this))}stop(){Oe(this,ua)!==0&&(cancelAnimationFrame(Oe(this,ua)),dt(this,ua,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Oe(this,za).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.5/i||n>=.5)&&this.callback(e),dt(this,oo,e),dt(this,so,performance.now()),this.duration=i,this.playbackRate=a}}za=new WeakMap;ro=new WeakMap;Qa=new WeakMap;mn=new WeakMap;no=new WeakMap;so=new WeakMap;oo=new WeakMap;ja=new WeakMap;ua=new WeakMap;lo=new WeakMap;var $c=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},he=(t,e,i)=>($c(t,e,"read from private field"),i?i.call(t):e.get(t)),Re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ft=(t,e,i,a)=>($c(t,e,"write to private field"),e.set(t,i),i),bt=(t,e,i)=>($c(t,e,"access private method"),i),Za,Vi,jo,Ln,Zo,uo,Yn,Gn,Xa,Ja,pn,iu,kf,au,Xo,Uc,Jo,Hc,el,Bc,ru,wf,zn,tl,nu,Sf;const rA=t=>{const e=t.range,i=wn(+If(t)),a=wn(+t.mediaSeekableEnd),r=i&&a?C("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):C("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function nA(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${h.MEDIA_PREVIEW_IMAGE}], [${h.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${h.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${h.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${h.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${h.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${h.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${h.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Lm.shadowRootOptions.mode}">
            ${Lm.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const Es=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},If=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class Wc extends Or{constructor(){super(),Re(this,iu),Re(this,Xo),Re(this,Jo),Re(this,el),Re(this,ru),Re(this,zn),Re(this,nu),Re(this,Za,null),Re(this,Vi,void 0),Re(this,jo,void 0),Re(this,Ln,void 0),Re(this,Zo,void 0),Re(this,uo,void 0),Re(this,Yn,void 0),Re(this,Gn,void 0),Re(this,Xa,void 0),Re(this,Ja,void 0),Re(this,pn,()=>{bt(this,iu,kf).call(this)?he(this,Vi).start():he(this,Vi).stop()}),Re(this,au,a=>{this.dragging||(ic(a)&&(this.range.valueAsNumber=a),he(this,Ja)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ft(this,jo,this.shadowRoot.querySelectorAll('[part~="box"]')),ft(this,Zo,this.shadowRoot.querySelector('[part~="preview-box"]')),ft(this,uo,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);ft(this,Yn,parseInt(i.getPropertyValue("--media-box-padding-left"))),ft(this,Gn,parseInt(i.getPropertyValue("--media-box-padding-right"))),ft(this,Vi,new aA(this.range,he(this,au),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",C("seek")),he(this,pn).call(this),ft(this,Za,this.getRootNode()),(e=he(this,Za))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),he(this,Vi).stop(),(e=he(this,Za))==null||e.removeEventListener("transitionstart",this),ft(this,Za,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(he(this,Vi).update({start:Es(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),he(this,pn).call(this),rA(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=he(this,Xa),this.updateBar()))}get mediaChaptersCues(){return he(this,Xa)}set mediaChaptersCues(e){var i;ft(this,Xa,e),this.updateSegments((i=he(this,Xa))==null?void 0:i.map(a=>({start:Es(this,a.startTime),end:Es(this,a.endTime)})))}get mediaPaused(){return z(this,h.MEDIA_PAUSED)}set mediaPaused(e){Q(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return z(this,h.MEDIA_LOADING)}set mediaLoading(e){Q(this,h.MEDIA_LOADING,e)}get mediaDuration(){return oe(this,h.MEDIA_DURATION)}set mediaDuration(e){fe(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){fe(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){fe(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return ue(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return oe(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){fe(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return z(this,h.MEDIA_ENDED)}set mediaEnded(e){Q(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=Es(this,s)}const{style:r}=Ce(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Ce(this.shadowRoot,"#current-rail"),a=Ce(this.shadowRoot,'[part~="current-box"]'),r=bt(this,Xo,Uc).call(this,he(this,uo)),n=bt(this,Jo,Hc).call(this,r,this.range.valueAsNumber),s=bt(this,el,Bc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":bt(this,nu,Sf).call(this);break;case"pointermove":bt(this,ru,wf).call(this,e);break;case"pointerup":he(this,Ja)&&ft(this,Ja,!1);break;case"pointerdown":ft(this,Ja,!0);break;case"pointerleave":bt(this,zn,tl).call(this,null);break;case"transitionstart":Ri(e.target,this)&&setTimeout(()=>he(this,pn).call(this),0);break}}}Za=new WeakMap;Vi=new WeakMap;jo=new WeakMap;Ln=new WeakMap;Zo=new WeakMap;uo=new WeakMap;Yn=new WeakMap;Gn=new WeakMap;Xa=new WeakMap;Ja=new WeakMap;pn=new WeakMap;iu=new WeakSet;kf=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Sv(this)};au=new WeakMap;Xo=new WeakSet;Uc=function(t){var e;const a=((e=this.getAttribute("bounds")?Mr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Jo=new WeakSet;Hc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};el=new WeakSet;Bc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+he(this,Yn)){const s=t.range.left-t.bounds.left-he(this,Yn);return`${n-i/2+s}px`}if(n>r-he(this,Gn)){const s=t.bounds.right-t.range.right-he(this,Gn);return`${n+i/2-s-t.range.width}px`}return 0};ru=new WeakSet;wf=function(t){const e=[...he(this,jo)].some(p=>t.composedPath().includes(p));if(!this.dragging&&(e||!t.composedPath().includes(this))){bt(this,zn,tl).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ce(this.shadowRoot,"#preview-rail"),r=Ce(this.shadowRoot,'[part~="preview-box"]'),n=bt(this,Xo,Uc).call(this,he(this,Zo));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=bt(this,Jo,Hc).call(this,n,s),l=bt(this,el,Bc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(he(this,Ln))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(ft(this,Ln,s*i),bt(this,zn,tl).call(this,he(this,Ln)))};zn=new WeakSet;tl=function(t){this.dispatchEvent(new g.CustomEvent(M.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};nu=new WeakSet;Sf=function(){he(this,Vi).stop();const t=If(this);this.dispatchEvent(new g.CustomEvent(M.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Wc.shadowRootOptions={mode:"open"};Wc.getContainerTemplateHTML=nA;g.customElements.get("media-time-range")||g.customElements.define("media-time-range",Wc);var sA=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Mm=(t,e,i)=>(sA(t,e,"read from private field"),i?i.call(t):e.get(t)),oA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},co;const lA=1,dA=t=>t.mediaMuted?0:t.mediaVolume,uA=t=>`${Math.round(t*100)}%`;class cA extends Or{constructor(){super(...arguments),oA(this,co,()=>{const e=this.range.value,i=new g.CustomEvent(M.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",C("volume")),this.range.addEventListener("input",Mm(this,co))}disconnectedCallback(){this.range.removeEventListener("input",Mm(this,co)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=dA(this),this.range.setAttribute("aria-valuetext",uA(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return oe(this,h.MEDIA_VOLUME,lA)}set mediaVolume(e){fe(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return z(this,h.MEDIA_MUTED)}set mediaMuted(e){Q(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ue(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){le(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}co=new WeakMap;g.customElements.get("media-volume-range")||g.customElements.define("media-volume-range",cA);function hA(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${h.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function mA(){return C("Loop")}class Fc extends $e{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=C("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return z(this,h.MEDIA_LOOP)}set mediaLoop(e){Q(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new g.CustomEvent(M.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Fc.getSlotTemplateHTML=hA;Fc.getTooltipContentHTML=mA;g.customElements.get("media-loop-button")||g.customElements.define("media-loop-button",Fc);var Rf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(Rf(t,e,"read from private field"),i?i.call(t):e.get(t)),ii=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(Rf(t,e,"write to private field"),e.set(t,i),i),er,ho,ca,vn,Hi,Bi,Wi,ha,tr,mo,Ct;const xm=1,Om=0,pA=1,vA={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Ut&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Ut?r.element[r.attributeName]=n:r.value=n}}}};class Ul extends g.DocumentFragment{constructor(e,i,a=vA){var r;super(),ii(this,er,void 0),ii(this,ho,void 0),this.append(e.content.cloneNode(!0)),Ti(this,er,Lf(this)),Ti(this,ho,a),(r=a.createCallback)==null||r.call(a,this,V(this,er),i),a.processCallback(this,V(this,er),i)}update(e){V(this,ho).processCallback(this,V(this,er),e)}}er=new WeakMap;ho=new WeakMap;const Lf=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new EA;for([i,a]of Pm(r.value))if(!i)n.append(a);else{const s=new Ut(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===xm&&!(r instanceof HTMLTemplateElement))Lf(r,e);else{const n=r.data;if(r.nodeType===xm||n.includes("{{")){const s=[];if(n)for([i,a]of Pm(n))if(!i)s.push(new Text(a));else{const o=new Nr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Mf(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},Nm={},Pm=t=>{let e="",i=0,a=Nm[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([Om,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([pA,e.trim()]),e="",r++):e+=n||"";return e&&a.push([Om,(i>0?"{{":"")+e]),Nm[t]=a},fA=11;class Cf{get value(){return""}set value(e){}toString(){return this.value}}const Df=new WeakMap;class EA{constructor(){ii(this,ca,[])}[Symbol.iterator](){return V(this,ca).values()}get length(){return V(this,ca).length}item(e){return V(this,ca)[e]}append(...e){for(const i of e)i instanceof Ut&&Df.set(i,this),V(this,ca).push(i)}toString(){return V(this,ca).join("")}}ca=new WeakMap;class Ut extends Cf{constructor(e,i,a){super(),ii(this,ha),ii(this,vn,""),ii(this,Hi,void 0),ii(this,Bi,void 0),ii(this,Wi,void 0),Ti(this,Hi,e),Ti(this,Bi,i),Ti(this,Wi,a)}get attributeName(){return V(this,Bi)}get attributeNamespace(){return V(this,Wi)}get element(){return V(this,Hi)}get value(){return V(this,vn)}set value(e){V(this,vn)!==e&&(Ti(this,vn,e),!V(this,ha,tr)||V(this,ha,tr).length===1?e==null?V(this,Hi).removeAttributeNS(V(this,Wi),V(this,Bi)):V(this,Hi).setAttributeNS(V(this,Wi),V(this,Bi),e):V(this,Hi).setAttributeNS(V(this,Wi),V(this,Bi),V(this,ha,tr).toString()))}get booleanValue(){return V(this,Hi).hasAttributeNS(V(this,Wi),V(this,Bi))}set booleanValue(e){if(!V(this,ha,tr)||V(this,ha,tr).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}vn=new WeakMap;Hi=new WeakMap;Bi=new WeakMap;Wi=new WeakMap;ha=new WeakSet;tr=function(){return Df.get(this)};class Nr extends Cf{constructor(e,i){super(),ii(this,mo,void 0),ii(this,Ct,void 0),Ti(this,mo,e),Ti(this,Ct,i?[...i]:[new Text])}get replacementNodes(){return V(this,Ct)}get parentNode(){return V(this,mo)}get nextSibling(){return V(this,Ct)[V(this,Ct).length-1].nextSibling}get previousSibling(){return V(this,Ct)[0].previousSibling}get value(){return V(this,Ct).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===fA?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),Ti(this,Ct,_A(V(this,Ct)[0].parentNode,V(this,Ct),i,this.nextSibling))}}mo=new WeakMap;Ct=new WeakMap;class Mf extends Nr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function _A(t,e,i,a=null){let r=0,n,s,o,l=i.length,u=e.length;for(;r<l&&r<u&&e[r]==i[r];)r++;for(;r<l&&r<u&&i[l-1]==e[u-1];)a=i[--u,--l];if(r==u)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<u;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const $m={string:t=>String(t)};class xf{constructor(e){this.template=e,this.state=void 0}}const _a=new WeakMap,ba=new WeakMap,su={partial:(t,e)=>{e[t.expression]=new xf(t.template)},if:(t,e)=>{var i;if(Of(t.expression,e))if(_a.get(t)!==t.template){_a.set(t,t.template);const a=new Ul(t.template,e,Kc);t.replace(a),ba.set(t,a)}else(i=ba.get(t))==null||i.update(e);else t.replace(""),_a.delete(t),ba.delete(t)}},bA=Object.keys(su),Kc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof Mf){if(!s.directive){const l=bA.find(u=>s.template.hasAttribute(u));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=su[s.directive])==null||a.call(su,s,i);continue}let o=Of(n,i);if(o instanceof xf){_a.get(s)!==o.template?(_a.set(s,o.template),o=new Ul(o.template,o.state,Kc),s.value=o,ba.set(s,o)):(r=ba.get(s))==null||r.update(o.state);continue}o?(s instanceof Ut&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Ut?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,_a.delete(s),ba.delete(s))):s instanceof Ut?s.value=void 0:(s.value=void 0,_a.delete(s),ba.delete(s))}}},Um={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=$m[e])==null?void 0:i.call($m,t)}};function gA(t){return yA(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function Of(t,e={}){var i,a,r,n,s,o,l;const u=gA(t);if(u.length===0||u.some(({type:p})=>!p))return Vr(t);if(((i=u[0])==null?void 0:i.token)===">"){const p=e[(a=u[1])==null?void 0:a.token];if(!p)return Vr(t);const m={...e};p.state=m;const c=u.slice(2);for(let d=0;d<c.length;d+=3){const v=(r=c[d])==null?void 0:r.token,_=(n=c[d+1])==null?void 0:n.token,E=(s=c[d+2])==null?void 0:s.token;v&&_==="="&&(m[v]=qr(E,e))}return p}if(u.length===1)return _s(u[0])?qr(u[0].token,e):Vr(t);if(u.length===2){const p=(o=u[0])==null?void 0:o.token,m=Um[p];if(!m||!_s(u[1]))return Vr(t);const c=qr(u[1].token,e);return m(c)}if(u.length===3){const p=(l=u[1])==null?void 0:l.token,m=Um[p];if(!m||!_s(u[0])||!_s(u[2]))return Vr(t);const c=qr(u[0].token,e);if(p==="|")return m(c,u[2].token);const d=qr(u[2].token,e);return m(c,d)}}function Vr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function _s({type:t}){return["number","boolean","string","param"].includes(t)}function qr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):fv(t)?parseFloat(t):e[t]}function yA(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Vc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fi=(t,e,i)=>(Vc(t,e,"read from private field"),i?i.call(t):e.get(t)),sa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yi=(t,e,i,a)=>(Vc(t,e,"write to private field"),e.set(t,i),i),rd=(t,e,i)=>(Vc(t,e,"access private method"),i),Er,po,_r,ir,ou,Nf,vo,lu,fn;const nd={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Pf=Ie.createElement("template");Pf.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Hl extends g.HTMLElement{constructor(){super(),sa(this,ou),sa(this,vo),sa(this,Er,void 0),sa(this,po,void 0),sa(this,_r,void 0),sa(this,ir,void 0),sa(this,fn,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),yi(this,ir,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(nd[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),yi(this,fn,this.render.bind(this)),rd(this,ou,Nf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Fi(this,Er))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(yi(this,Er,e),yi(this,_r,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>nd[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=nd[s.name])!=null?a:Ty(s.name);let{value:l}=s;l!=null?(fv(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&rd(this,vo,lu).call(this)}connectedCallback(){this.addEventListener(li.BREAKPOINTS_COMPUTED,Fi(this,fn)),Fi(this,ir).observe(this,{attributes:!0}),Fi(this,ir).observe(this.renderRoot,{attributes:!0,subtree:!0}),rd(this,vo,lu).call(this)}disconnectedCallback(){this.removeEventListener(li.BREAKPOINTS_COMPUTED,Fi(this,fn)),Fi(this,ir).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Fi(this,po)&&(yi(this,po,this.template),this.renderer=new Ul(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Pf.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}Er=new WeakMap;po=new WeakMap;_r=new WeakMap;ir=new WeakMap;ou=new WeakSet;Nf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};vo=new WeakSet;lu=function(){var t;const e=this.getAttribute("template");if(!e||e===Fi(this,_r))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){yi(this,_r,e),yi(this,Er,a),this.createRenderer();return}TA(e)&&(yi(this,_r,e),AA(e).then(r=>{const n=Ie.createElement("template");n.innerHTML=r,yi(this,Er,n),this.createRenderer()}).catch(console.error))};fn=new WeakMap;Hl.observedAttributes=["template"];Hl.processor=Kc;function TA(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function AA(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}g.customElements.get("media-theme")||g.customElements.define("media-theme",Hl);function kA({anchor:t,floating:e,placement:i}){const a=wA({anchor:t,floating:e}),{x:r,y:n}=IA(a,i);return{x:r,y:n}}function wA({anchor:t,floating:e}){return{anchor:SA(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function SA(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function IA({anchor:t,floating:e},i){const a=RA(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=$f(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let u;switch(n){case"top":u={x:s,y:t.y-e.height};break;case"bottom":u={x:s,y:t.y+t.height};break;case"right":u={x:t.x+t.width,y:o};break;case"left":u={x:t.x-e.width,y:o};break;default:u={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":u[a]-=l;break;case"end":u[a]+=l;break}return u}function $f(t){return t.split("-")[0]}function RA(t){return["top","bottom"].includes($f(t))?"y":"x"}class qc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class LA extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Yc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},X=(t,e,i)=>(Yc(t,e,"read from private field"),i?i.call(t):e.get(t)),re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Et=(t,e,i,a)=>(Yc(t,e,"write to private field"),e.set(t,i),i),ne=(t,e,i)=>(Yc(t,e,"access private method"),i),Zt,Qi,wi,fo,En,wa,Qn,du,Uf,il,Gc,al,Eo,uu,cu,Hf,hu,Bf,mu,Wf,br,gr,yr,jn,rl,zc,pu,Ff,Qc,Kf,vu,Vf,jc,qf,fu,Yf,Eu,Gf,Cn,nl,_u,zf,Dn,sl,_o,bu;function Cr({type:t,text:e,value:i,checked:a}){const r=Ie.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=Ie.createElement("span");return n.textContent=e,r.append(n),r}function Sa(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function CA(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const oa={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class yt extends g.HTMLElement{constructor(){if(super(),re(this,du),re(this,il),re(this,Eo),re(this,cu),re(this,hu),re(this,mu),re(this,yr),re(this,rl),re(this,pu),re(this,Qc),re(this,vu),re(this,jc),re(this,fu),re(this,Eu),re(this,Cn),re(this,_u),re(this,Dn),re(this,_o),re(this,Zt,null),re(this,Qi,null),re(this,wi,null),re(this,fo,new Set),re(this,En,void 0),re(this,wa,!1),re(this,Qn,null),re(this,al,()=>{const e=X(this,fo),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));Et(this,fo,i)}),re(this,br,()=>{ne(this,yr,jn).call(this),ne(this,rl,zc).call(this,!1)}),re(this,gr,()=>{ne(this,yr,jn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),Et(this,En,new MutationObserver(X(this,al)))}static get observedAttributes(){return[oa.DISABLED,oa.HIDDEN,oa.STYLE,oa.ANCHOR,J.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":ne(this,du,Uf).call(this,e);break;case"invoke":ne(this,cu,Hf).call(this,e);break;case"click":ne(this,pu,Ff).call(this,e);break;case"toggle":ne(this,vu,Vf).call(this,e);break;case"focusout":ne(this,fu,Yf).call(this,e);break;case"keydown":ne(this,Eu,Gf).call(this,e);break}}connectedCallback(){var e,i;X(this,En).observe(this.defaultSlot,{childList:!0}),Et(this,Qn,nc(this.shadowRoot,":host")),ne(this,Eo,uu).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Et(this,Zt,Dd(this)),(i=(e=X(this,Zt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(Sr(Zn(this),X(this,br)),Sr(this,X(this,gr))),ne(this,il,Gc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;X(this,En).disconnect(),Ir(Zn(this),X(this,br)),Ir(this,X(this,gr)),this.disable(),(i=(e=X(this,Zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Et(this,Zt,null),Et(this,Qi,null),Et(this,wi,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===oa.HIDDEN&&a!==i?(X(this,wa)||Et(this,wa,!0),this.hidden?ne(this,mu,Wf).call(this):ne(this,hu,Bf).call(this),this.dispatchEvent(new LA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===J.MEDIA_CONTROLLER?(i&&((n=(r=X(this,Zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Et(this,Zt,null)),a&&this.isConnected&&(Et(this,Zt,Dd(this)),(o=(s=X(this,Zt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===oa.DISABLED&&a!==i?a==null?this.enable():this.disable():e===oa.STYLE&&a!==i&&ne(this,Eo,uu).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=Sl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(DA)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&ne(this,_o,bu).call(this,i)}focus(){if(Et(this,Qi,rc()),this.items.length){ne(this,Dn,sl).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=ne(this,Cn,nl).call(this,e);a&&(ne(this,_o,bu).call(this,a,a.type==="checkbox"),X(this,wi)&&!this.hidden&&((i=X(this,Qi))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=ne(this,Cn,nl).call(this,e))!=null?i:ne(this,_u,zf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),ne(this,Dn,sl).call(this,n[l]),n[l].focus()}}Zt=new WeakMap;Qi=new WeakMap;wi=new WeakMap;fo=new WeakMap;En=new WeakMap;wa=new WeakMap;Qn=new WeakMap;du=new WeakSet;Uf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&ne(this,il,Gc).call(this),e.name||X(this,al).call(this)};il=new WeakSet;Gc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};al=new WeakMap;Eo=new WeakSet;uu=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};cu=new WeakSet;Hf=function(t){Et(this,wi,t.relatedTarget),Ri(this,t.relatedTarget)||(this.hidden=!this.hidden)};hu=new WeakSet;Bf=function(){var t;(t=X(this,wi))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Sr(Zn(this),X(this,br)),Sr(this,X(this,gr))};mu=new WeakSet;Wf=function(){var t;(t=X(this,wi))==null||t.setAttribute("aria-expanded","false"),Ir(Zn(this),X(this,br)),Ir(this,X(this,gr))};br=new WeakMap;gr=new WeakMap;yr=new WeakSet;jn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=kA({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Zn(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=X(this,Qn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),m=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${m}px`)};rl=new WeakSet;zc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=X(this,Qn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),ne(this,yr,jn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),ne(this,yr,jn).call(this);a.removeProperty("--media-menu-transition-in")};pu=new WeakSet;Ff=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(X(this,Qc,Kf))){(e=X(this,Qi))==null||e.focus(),this.hidden=!0;return}const i=ne(this,Cn,nl).call(this,t);!i||i.hasAttribute("disabled")||(ne(this,Dn,sl).call(this,i),this.handleSelect(t))};Qc=new WeakSet;Kf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};vu=new WeakSet;Vf=function(t){if(t.target===this)return;ne(this,jc,qf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new qc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);ne(this,rl,zc).call(this,!0)};jc=new WeakSet;qf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};fu=new WeakSet;Yf=function(t){var e;Ri(this,t.relatedTarget)||(X(this,wa)&&((e=X(this,Qi))==null||e.focus()),X(this,wi)&&X(this,wi)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Eu=new WeakSet;Gf=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;if(!(o||l||u)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(X(this,wa)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=X(this,Qi))==null||n.focus(),X(this,wa)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};Cn=new WeakSet;nl=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};_u=new WeakSet;zf=function(){return this.items.find(t=>t.tabIndex===0)};Dn=new WeakSet;sl=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};_o=new WeakSet;bu=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};yt.shadowRootOptions={mode:"open"};yt.getTemplateHTML=CA;function DA(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Zn(t){var e;return(e=t.getAttribute("bounds")?Mr(t,`#${t.getAttribute("bounds")}`):tt(t)||t.parentElement)!=null?e:t}g.customElements.get("media-chrome-menu")||g.customElements.define("media-chrome-menu",yt);var Zc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},je=(t,e,i)=>(Zc(t,e,"read from private field"),i?i.call(t):e.get(t)),mi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sd=(t,e,i,a)=>(Zc(t,e,"write to private field"),e.set(t,i),i),hr=(t,e,i)=>(Zc(t,e,"access private method"),i),bo,Mn,gu,Qf,ol,Xc,Jc,jf,ni,ar,yu,go,Tu;function MA(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function xA(t){return""}const vt={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class ta extends g.HTMLElement{constructor(){if(super(),mi(this,gu),mi(this,ol),mi(this,Jc),mi(this,go),mi(this,bo,!1),mi(this,Mn,void 0),mi(this,ni,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=Ie.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),mi(this,ar,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",je(this,ar));return}this.handleClick(e)}),mi(this,yu,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",je(this,ar));return}this.addEventListener("keyup",je(this,ar),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ht(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[vt.TYPE,vt.DISABLED,vt.CHECKED,vt.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Yr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":hr(this,gu,Qf).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":je(this,yu).call(this,e);break;case"keyup":je(this,ar).call(this,e);break}}attributeChangedCallback(e,i,a){e===vt.CHECKED&&Yr(this)&&!je(this,bo)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===vt.TYPE&&a!==i?this.role="menuitem"+a:e===vt.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(vt.DISABLED)||this.enable(),this.role="menuitem"+this.type,sd(this,Mn,Au(this,this.parentNode)),hr(this,go,Tu).call(this),this.submenuElement&&hr(this,ol,Xc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),hr(this,go,Tu).call(this),sd(this,Mn,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Sl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(vt.TYPE))!=null?e:""}set type(e){this.setAttribute(vt.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(vt.VALUE))!=null?e:this.text}set value(e){this.setAttribute(vt.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Yr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Yr(this)&&(sd(this,bo,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Yr(this)||this.invokeTargetElement&&Ri(this,e.target)&&this.invokeTargetElement.dispatchEvent(new qc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}bo=new WeakMap;Mn=new WeakMap;gu=new WeakSet;Qf=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?hr(this,ol,Xc).call(this):hr(this,Jc,jf).call(this))};ol=new WeakSet;Xc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",je(this,ni)),this.submenuElement.addEventListener("addmenuitem",je(this,ni)),this.submenuElement.addEventListener("removemenuitem",je(this,ni)),je(this,ni).call(this)};Jc=new WeakSet;jf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",je(this,ni)),this.submenuElement.removeEventListener("addmenuitem",je(this,ni)),this.submenuElement.removeEventListener("removemenuitem",je(this,ni)),je(this,ni).call(this)};ni=new WeakMap;ar=new WeakMap;yu=new WeakMap;go=new WeakSet;Tu=function(){var t;const e=(t=je(this,Mn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};ta.shadowRootOptions={mode:"open"};ta.getTemplateHTML=MA;ta.getSuffixSlotInnerHTML=xA;function Yr(t){return t.type==="radio"||t.type==="checkbox"}function Au(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Au(t,i):e!=null&&e.items?e:Au(e,e==null?void 0:e.parentNode)}g.customElements.get("media-chrome-menu-item")||g.customElements.define("media-chrome-menu-item",ta);function OA(t){return`
    ${yt.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class Zf extends yt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:tt(this).querySelector("media-settings-menu-button")}}Zf.getTemplateHTML=OA;g.customElements.get("media-settings-menu")||g.customElements.define("media-settings-menu",Zf);function NA(t){return`
    ${ta.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function PA(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Bl extends ta{}Bl.shadowRootOptions={mode:"open"};Bl.getTemplateHTML=NA;Bl.getSuffixSlotInnerHTML=PA;g.customElements.get("media-settings-menu-item")||g.customElements.define("media-settings-menu-item",Bl);class Pr extends $e{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=Sl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new qc({relatedTarget:this}))}}g.customElements.get("media-chrome-menu-button")||g.customElements.define("media-chrome-menu-button",Pr);function $A(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function UA(){return C("Settings")}class eh extends Pr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",C("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:tt(this).querySelector("media-settings-menu")}}eh.getSlotTemplateHTML=$A;eh.getTooltipContentHTML=UA;g.customElements.get("media-settings-menu-button")||g.customElements.define("media-settings-menu-button",eh);var th=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Xf=(t,e,i)=>(th(t,e,"read from private field"),i?i.call(t):e.get(t)),bs=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ku=(t,e,i,a)=>(th(t,e,"write to private field"),e.set(t,i),i),gs=(t,e,i)=>(th(t,e,"access private method"),i),_n,ll,yo,wu,To,Su;class HA extends yt{constructor(){super(...arguments),bs(this,yo),bs(this,To),bs(this,_n,[]),bs(this,ll,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===h.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(ku(this,_n,by(a??"")),gs(this,yo,wu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gs(this,To,Su))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gs(this,To,Su))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=tt(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Xf(this,_n)}set mediaAudioTrackList(e){ku(this,_n,e),gs(this,yo,wu).call(this)}get mediaAudioTrackEnabled(){var e;return(e=ue(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}_n=new WeakMap;ll=new WeakMap;yo=new WeakSet;wu=function(){if(Xf(this,ll)===JSON.stringify(this.mediaAudioTrackList))return;ku(this,ll,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Cr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Sa(this,"checked-indicator")),this.defaultSlot.append(a)}};To=new WeakSet;Su=function(){if(this.value==null)return;const t=new g.CustomEvent(M.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-audio-track-menu")||g.customElements.define("media-audio-track-menu",HA);const BA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function WA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${BA}</slot>
  `}function FA(){return C("Audio")}const Hm=t=>{const e=C("Audio");t.setAttribute("aria-label",e)};class ih extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Hm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LANG&&Hm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=tt(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=ue(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}ih.getSlotTemplateHTML=WA;ih.getTooltipContentHTML=FA;g.customElements.get("media-audio-track-menu-button")||g.customElements.define("media-audio-track-menu-button",ih);var ah=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},KA=(t,e,i)=>(ah(t,e,"read from private field"),e.get(t)),od=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},VA=(t,e,i,a)=>(ah(t,e,"write to private field"),e.set(t,i),i),ys=(t,e,i)=>(ah(t,e,"access private method"),i),dl,Ao,Iu,ko,Ru;const qA=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function YA(t){return`
    ${yt.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${qA}</slot>
  `}class Jf extends yt{constructor(){super(...arguments),od(this,Ao),od(this,ko),od(this,dl,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_LIST&&i!==a?ys(this,Ao,Iu).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",ys(this,Ao,Iu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ys(this,ko,Ru))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ys(this,ko,Ru))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:tt(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Bm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Wm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Bm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Wm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}dl=new WeakMap;Ao=new WeakSet;Iu=function(){var t;const e=KA(this,dl)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;VA(this,dl,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Cr({type:"radio",text:this.formatMenuItemText(C("Off")),value:"off",checked:a});r.prepend(Sa(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=Cr({type:"radio",text:this.formatMenuItemText(s.label,s),value:Wd(s),checked:this.value==Wd(s)});o.prepend(Sa(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(Sa(this,"captions-indicator")),this.defaultSlot.append(o)}};ko=new WeakSet;Ru=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new g.CustomEvent(M.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new g.CustomEvent(M.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Jf.getTemplateHTML=YA;const Bm=(t,e)=>{const i=t.getAttribute(e);return i?Dl(i):[]},Wm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-menu")||g.customElements.define("media-captions-menu",Jf);const GA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,zA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function QA(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${GA}</slot>
      <slot name="off">${zA}</slot>
    </slot>
  `}function jA(){return C("Captions")}const Fm=t=>{t.setAttribute("data-captions-enabled",Fv(t).toString())},Km=t=>{t.setAttribute("aria-label",C("closed captions"))};class rh extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Km(this),Fm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING?Fm(this):e===h.MEDIA_LANG&&Km(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=tt(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Vm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){qm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Vm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){qm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}rh.getSlotTemplateHTML=QA;rh.getTooltipContentHTML=jA;const Vm=(t,e)=>{const i=t.getAttribute(e);return i?Dl(i):[]},qm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-menu-button")||g.customElements.define("media-captions-menu-button",rh);var eE=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},rr=(t,e,i)=>(eE(t,e,"read from private field"),i?i.call(t):e.get(t)),ld=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Na=(t,e,i)=>(eE(t,e,"access private method"),i),qi,nr,bn,wo,Lu;const dd={RATES:"rates"};class ZA extends yt{constructor(){super(),ld(this,nr),ld(this,wo),ld(this,qi,new cc(this,dd.RATES,{defaultValue:ff})),Na(this,nr,bn).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,dd.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Na(this,nr,bn).call(this)):e===dd.RATES&&i!=a&&(rr(this,qi).value=a,Na(this,nr,bn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Na(this,wo,Lu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Na(this,wo,Lu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:tt(this).querySelector("media-playback-rate-menu-button")}get rates(){return rr(this,qi)}set rates(e){e?Array.isArray(e)?rr(this,qi).value=e.join(" "):typeof e=="string"&&(rr(this,qi).value=e):rr(this,qi).value="",Na(this,nr,bn).call(this)}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){fe(this,h.MEDIA_PLAYBACK_RATE,e)}}qi=new WeakMap;nr=new WeakSet;bn=function(){this.defaultSlot.textContent="";const t=Ji(this.mediaPlaybackRate),e=new Set(Array.from(rr(this,qi)).map(a=>Ji(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=Cr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(Sa(this,"checked-indicator")),this.defaultSlot.append(r)}};wo=new WeakSet;Lu=function(){if(!this.value)return;const t=new g.CustomEvent(M.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-playback-rate-menu")||g.customElements.define("media-playback-rate-menu",ZA);const So=1;function XA(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Ji(+t.mediaplaybackrate):So}x</slot>
  `}function JA(){return C("Playback rate")}class nh extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ji((e=this.mediaPlaybackRate)!=null?e:So)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Ji(Number.isNaN(r)?So:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",C("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:tt(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return oe(this,h.MEDIA_PLAYBACK_RATE,So)}set mediaPlaybackRate(e){fe(this,h.MEDIA_PLAYBACK_RATE,e)}}nh.getSlotTemplateHTML=XA;nh.getTooltipContentHTML=JA;g.customElements.get("media-playback-rate-menu-button")||g.customElements.define("media-playback-rate-menu-button",nh);var sh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vi=(t,e,i)=>(sh(t,e,"read from private field"),i?i.call(t):e.get(t)),Ts=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ym=(t,e,i,a)=>(sh(t,e,"write to private field"),e.set(t,i),i),Pa=(t,e,i)=>(sh(t,e,"access private method"),i),gn,Jt,sr,yn,Io,Cu;class ek extends yt{constructor(){super(...arguments),Ts(this,sr),Ts(this,Io),Ts(this,gn,[]),Ts(this,Jt,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=a??"auto",Pa(this,sr,yn).call(this);break;case h.MEDIA_RENDITION_LIST:Ym(this,gn,vy(a)),Pa(this,sr,yn).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:Pa(this,sr,yn).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Pa(this,Io,Cu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Pa(this,Io,Cu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:tt(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return vi(this,gn)}set mediaRenditionList(e){Ym(this,gn,e),Pa(this,sr,yn).call(this)}get mediaRenditionSelected(){return ue(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,h.MEDIA_HEIGHT)}set mediaHeight(e){fe(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return oe(this,h.MEDIA_WIDTH)}set mediaWidth(e){fe(this,h.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}gn=new WeakMap;Jt=new WeakMap;sr=new WeakSet;yn=function(){const t=!this.mediaRenditionSelected;if(vi(this,Jt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&vi(this,Jt).mediaHeight===this.mediaHeight&&vi(this,Jt).mediaWidth===this.mediaWidth&&vi(this,Jt).isAuto===t)return;vi(this,Jt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),vi(this,Jt).mediaHeight=this.mediaHeight,vi(this,Jt).mediaWidth=this.mediaWidth,vi(this,Jt).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Cr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(Sa(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${C("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${C("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(C("Auto")));const n=Cr({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(Sa(this,"checked-indicator")),this.defaultSlot.append(n)};Io=new WeakSet;Cu=function(){if(this.value==null)return;const t=new g.CustomEvent(M.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-rendition-menu")||g.customElements.define("media-rendition-menu",ek);const tk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function ik(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${tk}</slot>
  `}function ak(){return C("Quality")}class oh extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",C("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:tt(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ue(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,h.MEDIA_HEIGHT)}set mediaHeight(e){fe(this,h.MEDIA_HEIGHT,e)}}oh.getSlotTemplateHTML=ik;oh.getTooltipContentHTML=ak;g.customElements.get("media-rendition-menu-button")||g.customElements.define("media-rendition-menu-button",oh);var lh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ti=(t,e,i)=>(lh(t,e,"read from private field"),i?i.call(t):e.get(t)),Ft=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tE=(t,e,i,a)=>(lh(t,e,"write to private field"),e.set(t,i),i),_t=(t,e,i)=>(lh(t,e,"access private method"),i),Dr,Xn,Wl,fa,mr,dh,iE,Ro,Du,Lo,Mu,aE,ul,cl,Co;function rk(t){return`
      ${yt.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class rE extends yt{constructor(){super(),Ft(this,Xn),Ft(this,fa),Ft(this,dh),Ft(this,Ro),Ft(this,Mu),Ft(this,Dr,!1),Ft(this,Lo,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=_t(this,Ro,Du).call(this,i);(a||r)&&(ti(this,Dr)?_t(this,fa,mr).call(this):_t(this,Mu,aE).call(this,e))}),Ft(this,ul,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=_t(this,Ro,Du).call(this,i);a||r&&(n||s)||_t(this,fa,mr).call(this)}),Ft(this,cl,e=>{e.key==="Escape"&&_t(this,fa,mr).call(this)}),Ft(this,Co,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}_t(this,fa,mr).call(this)}),this.setAttribute("noautohide",""),_t(this,Xn,Wl).call(this)}connectedCallback(){super.connectedCallback(),tt(this).addEventListener("contextmenu",ti(this,Lo)),this.addEventListener("click",ti(this,Co))}disconnectedCallback(){super.disconnectedCallback(),tt(this).removeEventListener("contextmenu",ti(this,Lo)),this.removeEventListener("click",ti(this,Co)),document.removeEventListener("mousedown",ti(this,ul)),document.removeEventListener("keydown",ti(this,cl))}}Dr=new WeakMap;Xn=new WeakSet;Wl=function(){this.hidden=!ti(this,Dr)};fa=new WeakSet;mr=function(){tE(this,Dr,!1),_t(this,Xn,Wl).call(this)};dh=new WeakSet;iE=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&_t(i=e,fa,mr).call(i)})};Ro=new WeakSet;Du=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};Lo=new WeakMap;Mu=new WeakSet;aE=function(t){t.preventDefault(),_t(this,dh,iE).call(this),tE(this,Dr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,_t(this,Xn,Wl).call(this),document.addEventListener("mousedown",ti(this,ul),{once:!0}),document.addEventListener("keydown",ti(this,cl),{once:!0})};ul=new WeakMap;cl=new WeakMap;Co=new WeakMap;rE.getTemplateHTML=rk;g.customElements.get("media-context-menu")||g.customElements.define("media-context-menu",rE);function nk(t){return`
    ${ta.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class uh extends ta{}uh.shadowRootOptions={mode:"open"};uh.getTemplateHTML=nk;g.customElements.get("media-context-menu-item")||g.customElements.define("media-context-menu-item",uh);var nE=t=>{throw TypeError(t)},ch=(t,e,i)=>e.has(t)||nE("Cannot "+i),B=(t,e,i)=>(ch(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>e.has(t)?nE("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),et=(t,e,i,a)=>(ch(t,e,"write to private field"),e.set(t,i),i),ge=(t,e,i)=>(ch(t,e,"access private method"),i),Fl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Fl{}globalThis.DocumentFragment=t}var hh=class extends Fl{},sk=class extends Fl{},ok={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(hh)}},Do,lk=class{constructor(t,e={}){Se(this,Do),et(this,Do,e==null?void 0:e.detail)}get detail(){return B(this,Do)}initCustomEvent(){}};Do=new WeakMap;function dk(t,e){return new hh}var sE={document:{createElement:dk},DocumentFragment,customElements:ok,CustomEvent:lk,EventTarget:Fl,HTMLElement:hh,HTMLVideoElement:sk},oE=typeof window>"u"||typeof globalThis.customElements>"u",ai=oE?sE:globalThis,hl=oE?sE.document:globalThis.document;function $a(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function uk(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${xu(i)}: ${a}; `)}),e?e.trim():void 0}function xu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function lE(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ve(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function dE(t){let e=ck(t).toString();return e?"?"+e:""}function ck(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var uE=(t,e)=>!t||!e?!1:t.contains(e)?!0:uE(t,e.getRootNode().host),cE="mux.com",hk=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},mk=hk(),hE=()=>mk,pk=(t,{token:e,customDomain:i=cE,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=pr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${dE({token:e,time:s,program_time:r})}`},vk=(t,{token:e,customDomain:i=cE,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=pr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${dE({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},mh=t=>{if(t){if([te.LIVE,te.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return te.LIVE}},fk={crossorigin:"crossOrigin",playsinline:"playsInline"};function Ek(t){var e;return(e=fk[t])!=null?e:lE(t)}var or,lr,Xe,_k=class{constructor(e,i){Se(this,or),Se(this,lr),Se(this,Xe,[]),et(this,or,e),et(this,lr,i)}[Symbol.iterator](){return B(this,Xe).values()}get length(){return B(this,Xe).length}get value(){var e;return(e=B(this,Xe).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(et(this,Xe,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return B(this,Xe)[e]}values(){return B(this,Xe).values()}keys(){return B(this,Xe).keys()}forEach(e){B(this,Xe).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||B(this,Xe).push(r)}),!(this.value===""&&!((i=B(this,or))!=null&&i.hasAttribute(`${B(this,lr)}`)))&&((a=B(this,or))==null||a.setAttribute(`${B(this,lr)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{B(this,Xe).splice(B(this,Xe).indexOf(a),1)}),(i=B(this,or))==null||i.setAttribute(`${B(this,lr)}`,`${this.value}`)}contains(e){return B(this,Xe).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};or=new WeakMap,lr=new WeakMap,Xe=new WeakMap;var mE=`[mux-player ${hE()}]`;function fi(...t){console.warn(mE,...t)}function Je(...t){console.error(mE,...t)}function Gm(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${N("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),fi(i)}var Ke={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ma={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},zm=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),bk=Object.values(Ke).filter(t=>Ke.PLAYSINLINE!==t),gk=Object.values(ma),yk=[...bk,...gk],Tk=class extends ai.HTMLElement{static get observedAttributes(){return yk}constructor(){super()}attributeChangedCallback(e,i,a){var r,n;switch(e){case ma.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case ma.VOLUME:{let s=(r=Ve(a))!=null?r:1;this.media&&(this.media.volume=s);return}case ma.PLAYBACKRATE:{let s=(n=Ve(a))!=null?n:1;this.media&&(this.media.playbackRate=s,this.media.defaultPlaybackRate=s);return}}}play(){var e,i;return(i=(e=this.media)==null?void 0:e.play())!=null?i:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,i;return(i=(e=this.media)==null?void 0:e.paused)!=null?i:!0}get duration(){var e,i;return(i=(e=this.media)==null?void 0:e.duration)!=null?i:NaN}get ended(){var e,i;return(i=(e=this.media)==null?void 0:e.ended)!=null?i:!1}get buffered(){var e,i;return(i=(e=this.media)==null?void 0:e.buffered)!=null?i:zm}get seekable(){var e,i;return(i=(e=this.media)==null?void 0:e.seekable)!=null?i:zm}get readyState(){var e,i;return(i=(e=this.media)==null?void 0:e.readyState)!=null?i:0}get videoWidth(){var e,i;return(i=(e=this.media)==null?void 0:e.videoWidth)!=null?i:0}get videoHeight(){var e,i;return(i=(e=this.media)==null?void 0:e.videoHeight)!=null?i:0}get currentSrc(){var e,i;return(i=(e=this.media)==null?void 0:e.currentSrc)!=null?i:""}get currentTime(){var e,i;return(i=(e=this.media)==null?void 0:e.currentTime)!=null?i:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,i;return(i=(e=this.media)==null?void 0:e.volume)!=null?i:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,i;return(i=(e=this.media)==null?void 0:e.playbackRate)!=null?i:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=Ve(this.getAttribute(ma.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(ma.PLAYBACKRATE,`${e}`):this.removeAttribute(ma.PLAYBACKRATE)}get crossOrigin(){return Gr(this,Ke.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Ke.CROSSORIGIN,`${e}`)}get autoplay(){return Gr(this,Ke.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(Ke.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(Ke.AUTOPLAY)}get loop(){return Gr(this,Ke.LOOP)!=null}set loop(e){e?this.setAttribute(Ke.LOOP,""):this.removeAttribute(Ke.LOOP)}get muted(){var e,i;return(i=(e=this.media)==null?void 0:e.muted)!=null?i:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return Gr(this,Ke.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(Ke.MUTED,""):this.removeAttribute(Ke.MUTED)}get playsInline(){return Gr(this,Ke.PLAYSINLINE)!=null}set playsInline(e){Je("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Ke.PRELOAD,e):this.removeAttribute(Ke.PRELOAD)}};function Gr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Qm=Tk,Ak=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,zr=new WeakMap,kk=class pE{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=zr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=zr.get(this.element);i&&i.delete(this.type)}}static for(e){zr.has(e.element)||zr.set(e.element,new Map);let i=e.attributeName.slice(2),a=zr.get(e.element);return a&&a.has(i)?a.get(i):new pE(e.element,i)}};function wk(t,e){return t instanceof Ut&&t.attributeName.startsWith("on")?(kk.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function Sk(t,e){return e instanceof vE&&t instanceof Nr?(e.renderInto(t),!0):!1}function Ik(t,e){return e instanceof DocumentFragment&&t instanceof Nr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function Rk(t,e){if(t instanceof Ut){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function Lk(t,e){if(t instanceof Ut&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function Ck(t,e){if(typeof e=="boolean"&&t instanceof Ut){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function Dk(t,e){return e===!1&&t instanceof Nr?(t.replace(""),!0):!1}function Mk(t,e){Lk(t,e)||Ck(t,e)||wk(t,e)||Dk(t,e)||Sk(t,e)||Ik(t,e)||Rk(t,e)}var ud=new Map,jm=new WeakMap,Zm=new WeakMap,vE=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(ud.has(this.stringsKey))return ud.get(this.stringsKey);{let t=hl.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),ud.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(jm.get(t)!==i){jm.set(t,i);let r=new Ul(i,this.values,this.processor);Zm.set(t,r),t instanceof Nr?t.replace(...r.children):t.appendChild(r);return}let a=Zm.get(t);(e=a==null?void 0:a.update)==null||e.call(a,this.values)}},xk={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";Mk(n,s)}}}};function Mo(t,...e){return new vE(t,e,xk)}function Ok(t,e){t.renderInto(e)}var Nk=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Pk=t=>Mo`
  <style>
    ${Nk(t)}
    ${Ak}
  </style>
  ${Bk(t)}
`,$k=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return mh(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},Uk={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},Hk=Object.values(Uk).join(", "),Bk=t=>{var e,i,a,r,n,s,o,l,u,p,m,c,d,v,_,E,y,f,T,w,D,x,I,H,Y,F,W,Be,it,at,Te,qe,Ht,Ye,Tt,rt,Me,di,We,Ge,ui,$r;return Mo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${$k(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(te.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=uk({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(u=t.defaultDuration)!=null?u:!1}"
    hideduration="${(p=t.hideDuration)!=null?p:!1}"
    title="${(m=t.title)!=null?m:!1}"
    videotitle="${(c=t.videoTitle)!=null?c:!1}"
    proudlydisplaymuxbadge="${(d=t.proudlyDisplayMuxBadge)!=null?d:!1}"
    exportparts="${Hk}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(_=t.targetLiveWindow)!=null?_:!1}"
      stream-type="${(E=mh(t.streamType))!=null?E:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(f=t.autoplay)!=null?f:!1}"
      muted="${(T=t.muted)!=null?T:!1}"
      loop="${(w=t.loop)!=null?w:!1}"
      preload="${(D=t.preload)!=null?D:!1}"
      debug="${(x=t.debug)!=null?x:!1}"
      prefer-cmcd="${(I=t.preferCmcd)!=null?I:!1}"
      disable-tracking="${(H=t.disableTracking)!=null?H:!1}"
      disable-cookies="${(Y=t.disableCookies)!=null?Y:!1}"
      prefer-playback="${(F=t.preferPlayback)!=null?F:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(W=t.beaconCollectionDomain)!=null?W:!1}"
      player-init-time="${(Be=t.playerInitTime)!=null?Be:!1}"
      player-software-name="${(it=t.playerSoftwareName)!=null?it:!1}"
      player-software-version="${(at=t.playerSoftwareVersion)!=null?at:!1}"
      env-key="${(Te=t.envKey)!=null?Te:!1}"
      custom-domain="${(qe=t.customDomain)!=null?qe:!1}"
      src="${t.src?t.src:t.playbackId?wd(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?wd(t):!1}"
      cast-receiver="${(Ht=t.castReceiver)!=null?Ht:!1}"
      drm-token="${(Tt=(Ye=t.tokens)==null?void 0:Ye.drm)!=null?Tt:!1}"
      playback-token="${(Me=(rt=t.tokens)==null?void 0:rt.playback)!=null?Me:!1}"
      exportparts="video"
      disable-pseudo-ended="${(di=t.disablePseudoEnded)!=null?di:!1}"
      max-reconnect-retries="${(We=t.maxReconnectRetries)!=null?We:!1}"
      max-auto-resolution="${(Ge=t.maxAutoResolution)!=null?Ge:!1}"
      cap-rendition-to-player-size="${(ui=t.capRenditionToPlayerSize)!=null?ui:!1}"
    >
      ${t.storyboard?Mo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:Mo``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${($r=t.placeholder)!=null?$r:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},fE=t=>t.charAt(0).toUpperCase()+t.slice(1),Wk=(t,e=!1)=>{var i,a;if(t.muxCode){let r=fE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:ee.VIDEO);if(t.muxCode===P.NETWORK_OFFLINE)return N("Your device appears to be offline",e);if(t.muxCode===P.NETWORK_RECONNECTING)return N("Reconnecting...",e);if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return N("{category} URL has expired",e).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return N("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===P.NETWORK_TOKEN_MISSING)return N("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===P.NETWORK_NOT_FOUND)return N("{category} does not exist",e).format({category:r});if(t.muxCode===P.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return N("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return N("Network Error",e);if(t.code===L.MEDIA_ERR_DECODE)return N("Media Error",e);if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return N("Source Not Supported",e)}return N("Error",e)},Fk=(t,e=!1)=>{var i,a;if(t.reload)return"";if(t.muxCode){let r=fE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:ee.VIDEO);return t.muxCode===P.NETWORK_OFFLINE?N("Check your internet connection and try reloading this video.",e):t.muxCode===P.NETWORK_RECONNECTING?N("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===P.NETWORK_TOKEN_EXPIRED?N("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?N("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_MALFORMED?N("{category} URL is formatted incorrectly",e).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?N("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(t.muxCode)?N("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===L.MEDIA_ERR_NETWORK||t.code===L.MEDIA_ERR_DECODE||(t.code,L.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},Kk=(t,e=!1)=>{let i=Wk(t,e).toString(),a=Fk(t,e).toString();return{title:i,message:a,reload:!!t.reload}},Vk=t=>{if(t.muxCode){if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return"";if(t.code===L.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},EE=(t,e)=>{let i=Vk(t);return{message:t.message,context:t.context,file:i}},qk=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Ou=hl.createElement("template");"innerHTML"in Ou&&(Ou.innerHTML=qk);var Xm,Jm,_E=class extends Hl{};_E.template=(Jm=(Xm=Ou.content)==null?void 0:Xm.children)==null?void 0:Jm[0];ai.customElements.get("media-theme-gerwig")||ai.customElements.define("media-theme-gerwig",_E);var Yk="gerwig",Ei={SRC:"src",POSTER:"poster"},k={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Nu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function Gk(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(k.STORYBOARD_SRC),fullscreenElement:t.getAttribute(k.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:Qk(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(k.NOHOTKEYS),hotKeys:t.getAttribute(k.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(b.TARGET_LIVE_WINDOW),streamType:mh(t.getAttribute(b.STREAM_TYPE)),primaryColor:t.getAttribute(k.PRIMARY_COLOR),secondaryColor:t.getAttribute(k.SECONDARY_COLOR),accentColor:t.getAttribute(k.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:jk(t),playbackRates:t.getAttribute(k.PLAYBACK_RATES),customDomain:(a=t.getAttribute(b.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(k.TITLE),videoTitle:(r=t.getAttribute(k.VIDEO_TITLE))!=null?r:t.getAttribute(k.TITLE),novolumepref:t.hasAttribute(k.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(k.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(k.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var zk=cf.formatErrorMessage;cf.formatErrorMessage=t=>{var e,i,a;if(t instanceof L){let r=Kk(t,!1);return r!=null&&r.reload?`
      ${r!=null&&r.title?`<h3>${$a(r.title)}</h3>`:""}
      <p>Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a></p>
    `:`
      ${r!=null&&r.title?`<h3>${$a(r.title)}</h3>`:""}
      ${r!=null&&r.message||r!=null&&r.linkUrl?`<p>
        ${$a((e=r==null?void 0:r.message)!=null?e:"")}
        ${r!=null&&r.linkUrl?`<a
              href="${$a(r.linkUrl)}"
              target="_blank"
              rel="external noopener"
              aria-label="${$a((i=r.linkText)!=null?i:"")} ${N("(opens in a new window)")}"
              >${$a((a=r.linkText)!=null?a:r.linkUrl)}</a
            >`:""}
      </p>`:""}
    `}return zk(t)};function Qk(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=ai.customElements.get(a);if(n!=null&&n.template)return n.template}}function jk(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function Tn(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var Zk=Object.values(b),Xk=Object.values(Ei),Jk=Object.values(k),ep=hE(),tp="mux-player",ip={isDialogOpen:!1},ew={redundant_streams:!0},xo,xn,Oo,pa,No,On,ml,pl,Tr,vl,fl,El,Nn,Ar,_l,ve,_i,bE,Pu,ga,ap,rp,np,sp,tw=class extends Qm{constructor(){super(),Se(this,ve),Se(this,xo),Se(this,xn,!1),Se(this,Oo,{}),Se(this,pa,!0),Se(this,No,new _k(this,"hotkeys")),Se(this,On),Se(this,ml,()=>ge(this,ve,ga).call(this)),Se(this,pl,()=>ge(this,ve,ga).call(this)),Se(this,Tr,()=>ge(this,ve,ga).call(this)),Se(this,vl,t=>{t.composedPath().find(e=>{var i;return(i=e==null?void 0:e.hasAttribute)==null?void 0:i.call(e,"data-mux-reload")})&&(t.preventDefault(),window.location.reload())}),Se(this,fl,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&ge(this,ve,Pu).call(this,{isDialogOpen:!1})}),Se(this,El,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(uE(this,hl.activeElement)||t.preventDefault())}),Se(this,Nn),Se(this,Ar,{...ip}),Se(this,_l,t=>{var e;let i=(e=this.media)==null?void 0:e.error;if(!(i instanceof L)){let{message:r,code:n}=i??{};i=new L(r,n)}if(!(i!=null&&i.fatal)){fi(i),i.data&&fi(`${i.name} data:`,i.data);return}let a=EE(i);a.message&&Gm(a),Je(i),i.data&&Je(`${i.name} data:`,i.data),ge(this,ve,Pu).call(this,{isDialogOpen:!0})}),et(this,xo,Qu()),this.attachShadow({mode:"open"}),ge(this,ve,bE).call(this),this.isConnected&&ge(this,ve,_i).call(this)}static get NAME(){return tp}static get VERSION(){return ep}static get observedAttributes(){var t;return[...(t=Qm.observedAttributes)!=null?t:[],...Xk,...Zk,...Jk]}setAttribute(t,e){super.setAttribute(t,e),t.startsWith("metadata-")&&this.media&&(this.media.metadata=Tn(this))}removeAttribute(t){super.removeAttribute(t),t.startsWith("metadata-")&&this.media&&(this.media.metadata=Tn(this))}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){ge(this,ve,_i).call(this);let t=this.media;t&&(t.metadata=Tn(this))}disconnectedCallback(){var t,e,i,a,r,n,s,o,l,u;(t=B(this,On))==null||t.disconnect(),(e=this.media)==null||e.removeEventListener("streamtypechange",B(this,ml)),(i=this.media)==null||i.removeEventListener("loadstart",B(this,pl)),this.removeEventListener("error",B(this,_l)),this.removeEventListener("click",B(this,vl)),(a=this.mediaTheme)==null||a.removeEventListener("close",B(this,fl)),(r=this.mediaTheme)==null||r.removeEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=void 0),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.removeEventListener("addtrack",B(this,Tr)),(l=(o=this.media)==null?void 0:o.textTracks)==null||l.removeEventListener("removetrack",B(this,Tr)),(u=B(this,Nn))==null||u.call(this),et(this,Nn,void 0),et(this,xn,!1)}attributeChangedCallback(t,e,i){switch(ge(this,ve,_i).call(this),super.attributeChangedCallback(t,e,i),t){case k.HOTKEYS:B(this,No).value=i;break;case k.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&fi(N("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case k.THUMBNAIL_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=An.THUMBNAIL;r!==n&&fi(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case k.STORYBOARD_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=An.STORYBOARD;r!==n&&fi(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case k.DRM_TOKEN:{if(i){let a=pr(i);if(a){let{aud:r}=a,n=An.DRM;r!==n&&fi(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case b.PLAYBACK_ID:{i!=null&&i.includes("?token")&&Je(N("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case b.STREAM_TYPE:{i&&![te.LIVE,te.ON_DEMAND,te.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Gm({file:"invalid-stream-type.md",message:N("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===te.LIVE?this.getAttribute(k.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case k.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=hl.getElementById(i),r=a==null?void 0:a.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}case b.CAP_RENDITION_TO_PLAYER_SIZE:{(i==null||i!==e)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0);break}case b.MAX_RECONNECT_RETRIES:{(i==null||i!==e)&&(this.maxReconnectRetries=Number(i));break}}[b.PLAYBACK_ID,Ei.SRC,k.PLAYBACK_TOKEN].includes(t)&&e!==i&&et(this,Ar,{...B(this,Ar),...ip}),ge(this,ve,ga).call(this,{[Ek(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new ai.CustomEvent(M.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(li.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new ai.CustomEvent(M.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(li.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(b.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?Ho.includes(t)?this.setAttribute(b.PREFER_CMCD,t):fi(`Invalid value for preferCmcd. Must be one of ${Ho.join()}`):this.removeAttribute(b.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(k.THEME))!=null?t:Yk}set theme(t){this.setAttribute(k.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(Nu.includes(i))continue;let a=t.getAttribute(i);e[lE(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;ge(this,ve,_i).call(this);let a={...this.themeProps,...t};for(let r in a){if(Nu.includes(r))continue;let n=t==null?void 0:t[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(xu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(xu(r),n)}}get playbackId(){var t;return(t=this.getAttribute(b.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(b.PLAYBACK_ID,t):this.removeAttribute(b.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Kt(this,Ei.SRC))!=null?t:void 0:(e=this.getAttribute(Ei.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(Ei.SRC,t):this.removeAttribute(Ei.SRC)}get poster(){var t;let e=this.getAttribute(Ei.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){fi("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return pk(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(Ei.POSTER,t):this.removeAttribute(Ei.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(k.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(k.STORYBOARD_SRC,t):this.removeAttribute(k.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[te.LIVE,te.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return vk(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(k.AUDIO)}set audio(t){if(!t){this.removeAttribute(k.AUDIO);return}this.setAttribute(k.AUDIO,"")}get hotkeys(){return B(this,No)}get nohotkeys(){return this.hasAttribute(k.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(k.NOHOTKEYS);return}this.setAttribute(k.NOHOTKEYS,"")}get thumbnailTime(){return Ve(this.getAttribute(k.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(k.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(k.VIDEO_TITLE))!=null?t:this.getAttribute(k.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(k.VIDEO_TITLE,t):this.removeAttribute(k.VIDEO_TITLE))}get placeholder(){var t;return(t=Kt(this,k.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(k.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(k.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ai.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(k.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(k.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ai.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(k.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(k.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ai.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(k.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(k.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(k.PLAYBACK_RATES))return this.getAttribute(k.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(k.PLAYBACK_RATES);return}this.setAttribute(k.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Ve(this.getAttribute(k.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(k.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Ve(this.getAttribute(k.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(k.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(k.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ve(this.getAttribute(k.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(k.DEFAULT_DURATION):this.setAttribute(k.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(b.PLAYER_INIT_TIME)?Ve(this.getAttribute(b.PLAYER_INIT_TIME)):B(this,xo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(b.PLAYER_INIT_TIME):this.setAttribute(b.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(b.PLAYER_SOFTWARE_NAME))!=null?t:tp}get playerSoftwareVersion(){var t;return(t=this.getAttribute(b.PLAYER_SOFTWARE_VERSION))!=null?t:ep}get beaconCollectionDomain(){var t;return(t=this.getAttribute(b.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(b.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(b.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(b.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(b.MAX_RESOLUTION,t):this.removeAttribute(b.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(b.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(b.MIN_RESOLUTION,t):this.removeAttribute(b.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(b.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(b.MAX_AUTO_RESOLUTION):this.setAttribute(b.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(b.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(b.RENDITION_ORDER,t):this.removeAttribute(b.RENDITION_ORDER))}get programStartTime(){return Ve(this.getAttribute(b.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(b.PROGRAM_START_TIME):this.setAttribute(b.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Ve(this.getAttribute(b.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(b.PROGRAM_END_TIME):this.setAttribute(b.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Ve(this.getAttribute(b.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(b.ASSET_START_TIME):this.setAttribute(b.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Ve(this.getAttribute(b.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(b.ASSET_END_TIME):this.setAttribute(b.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(k.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(k.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):ew}set extraSourceParams(t){t==null?this.removeAttribute(k.EXTRA_SOURCE_PARAMS):this.setAttribute(k.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(b.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(b.CUSTOM_DOMAIN,t):this.removeAttribute(b.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Kt(this,b.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(b.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(k.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(k.NO_VOLUME_PREF,""):this.removeAttribute(k.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(k.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(k.NO_MUTED_PREF,""):this.removeAttribute(k.NO_MUTED_PREF)}get debug(){return Kt(this,b.DEBUG)!=null}set debug(t){t?this.setAttribute(b.DEBUG,""):this.removeAttribute(b.DEBUG)}get disableTracking(){return Kt(this,b.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(b.DISABLE_TRACKING,!!t)}get disableCookies(){return Kt(this,b.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(b.DISABLE_COOKIES,""):this.removeAttribute(b.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(b.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:te.UNKNOWN}set streamType(t){this.setAttribute(b.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?i:te.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(k.DEFAULT_STREAM_TYPE,t):this.removeAttribute(k.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(k.TARGET_LIVE_WINDOW)?+this.getAttribute(k.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(k.TARGET_LIVE_WINDOW):this.setAttribute(k.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Ve(Kt(this,b.START_TIME))}set startTime(t){this.setAttribute(b.START_TIME,`${t}`)}get initialBandwidthEstimateKbps(){return Ve(Kt(this,b.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(t){t==null?this.removeAttribute(b.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(b.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${t}`)}get initialEstimateSegments(){return Ve(Kt(this,b.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(t){t==null?this.removeAttribute(b.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(b.INITIAL_ESTIMATE_SEGMENTS,`${t}`)}get minPreloadSegments(){return Ve(Kt(this,b.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(t){t==null?this.removeAttribute(b.MIN_PRELOAD_SEGMENTS):this.setAttribute(b.MIN_PRELOAD_SEGMENTS,`${t}`)}get preferPlayback(){let t=this.getAttribute(b.PREFER_PLAYBACK);if(t===ri.MSE||t===ri.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===ri.MSE||t===ri.NATIVE?this.setAttribute(b.PREFER_PLAYBACK,t):this.removeAttribute(b.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(ge(this,ve,_i).call(this),!this.media){Je("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Tn(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(ge(this,ve,_i).call(this),!this.media){Je("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(ge(this,ve,_i).call(this),!this.media){Je("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(ge(this,ve,_i).call(this),!this.media){Je("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(k.PLAYBACK_TOKEN),e=this.getAttribute(k.DRM_TOKEN),i=this.getAttribute(k.THUMBNAIL_TOKEN),a=this.getAttribute(k.STORYBOARD_TOKEN);return{...B(this,Oo),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){et(this,Oo,t??{})}get playbackToken(){var t;return(t=this.getAttribute(k.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(k.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(k.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(k.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(k.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(k.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(k.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(k.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Ku(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return Og(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(k.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(k.CAST_RECEIVER,t):this.removeAttribute(k.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){Je("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(k.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(k.NO_TOOLTIPS);return}this.setAttribute(k.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(k.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var t;return(t=this.media)==null?void 0:t.capRenditionToPlayerSize}set capRenditionToPlayerSize(t){if(!this.media){Je("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=t}get maxReconnectRetries(){var t;return(t=this.media)==null?void 0:t.maxReconnectRetries}set maxReconnectRetries(t){if(!this.media){Je("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=t}};xo=new WeakMap,xn=new WeakMap,Oo=new WeakMap,pa=new WeakMap,No=new WeakMap,On=new WeakMap,ml=new WeakMap,pl=new WeakMap,Tr=new WeakMap,vl=new WeakMap,fl=new WeakMap,El=new WeakMap,Nn=new WeakMap,Ar=new WeakMap,_l=new WeakMap,ve=new WeakSet,_i=function(){var t,e,i,a;if(!B(this,xn)){et(this,xn,!0),ge(this,ve,ga).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof ai.HTMLElement))throw""}catch{Je("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Je("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof w1))throw""}catch{Je("<media-controller> failed to upgrade!")}ge(this,ve,ap).call(this),ge(this,ve,rp).call(this),ge(this,ve,np).call(this),et(this,pa,(e=(t=this.mediaController)==null?void 0:t.hasAttribute($.USER_INACTIVE))!=null?e:!0),ge(this,ve,sp).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",B(this,ml)),(a=this.media)==null||a.addEventListener("loadstart",B(this,pl)),this.media&&(this.media.metadata=Tn(this))}},bE=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Pu=function(t){Object.assign(B(this,Ar),t),ge(this,ve,ga).call(this)},ga=function(t={}){Ok(Pk(Gk(this,{...B(this,Ar),...t})),this.shadowRoot)},ap=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(Nu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};et(this,On,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),B(this,On).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},rp=function(){var t,e;this.addEventListener("error",B(this,_l)),this.addEventListener("click",B(this,vl)),(t=this.mediaTheme)==null||t.addEventListener("close",B(this,fl)),(e=this.mediaTheme)==null||e.addEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof L))return i;let s=EE((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},np=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",B(this,Tr)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",B(this,Tr))},sp=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===te.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,p,m=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(c=>{if(!(!c.snapToLines||c.line<-5||c.line>=0&&c.line<10))if(!p||this.paused){let d=c.text.split(`
`).length,v=-3;this.streamType===te.LIVE&&(v=-2);let _=v-d;if(c.line===_&&!m)return;a.has(c)||a.set(c,c.line),c.line=_}else setTimeout(()=>{c.line=a.get(c)||"auto"},500)})},s=()=>{var u,p;n(i,(p=(u=this.mediaController)==null?void 0:u.hasAttribute($.USER_INACTIVE))!=null?p:!1)},o=()=>{var u,p;let m=Array.from(((p=(u=this.mediaController)==null?void 0:u.media)==null?void 0:p.textTracks)||[]).filter(c=>["subtitles","captions"].includes(c.kind)&&c.mode==="showing")[0];m!==i&&(i==null||i.removeEventListener("cuechange",s)),i=m,i==null||i.addEventListener("cuechange",s),n(i,B(this,pa))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var u,p;let m=(p=(u=this.mediaController)==null?void 0:u.hasAttribute($.USER_INACTIVE))!=null?p:!0;B(this,pa)!==m&&(et(this,pa,m),n(i,B(this,pa)))};this.addEventListener("userinactivechange",l),et(this,Nn,()=>{var u,p;i==null||i.removeEventListener("cuechange",s),(u=this.textTracks)==null||u.removeEventListener("change",o),(p=this.textTracks)==null||p.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function Kt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var op=tw,gE=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends gE{}globalThis.DocumentFragment=t}var iw=class extends gE{},aw={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(iw)}},rw={customElements:aw},nw=typeof window>"u"||typeof globalThis.customElements>"u",cd=nw?rw:globalThis;cd.customElements.get("mux-player")||(cd.customElements.define("mux-player",op),cd.MuxPlayerElement=op);var yE=parseInt(Pn.version)>=19,lp={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},sw=t=>t==null,ow=(t,e)=>sw(e)?!1:t in e,lw=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),dw=(t,e)=>{if(!(!yE&&typeof e=="boolean"&&!e)){if(ow(t,lp))return lp[t];if(typeof e<"u")return/[A-Z]/.test(t)?lw(t):t}},uw=(t,e)=>!yE&&typeof t=="boolean"?"":t,cw=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=dw(r,n);if(!s)return a;let o=uw(n);return a[s]=o,a},{})};function dp(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function hw(...t){return e=>{let i=!1,a=t.map(r=>{let n=dp(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():dp(t[r],null)}}}}function mw(...t){return $n.useCallback(hw(...t),t)}var pw=Object.prototype.hasOwnProperty,vw=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!pw.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},TE=(t,e,i)=>!vw(e,t[i]),fw=(t,e,i)=>{t[i]=e},Ew=(t,e,i,a=fw,r=TE)=>$n.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),wt=Ew,_w=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},bw=_w(),gw=()=>bw,ce=(t,e,i)=>$n.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),yw=Pn.forwardRef(({children:t,...e},i)=>Pn.createElement("mux-player",{suppressHydrationWarning:!0,...cw(e),ref:i},t)),Tw=(t,e)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:u,onProgress:p,onDurationChange:m,onVolumeChange:c,onRateChange:d,onResize:v,onWaiting:_,onPlay:E,onPlaying:y,onTimeUpdate:f,onPause:T,onSeeking:w,onSeeked:D,onStalled:x,onSuspend:I,onEnded:H,onError:Y,onCuePointChange:F,onChapterChange:W,metadata:Be,tokens:it,paused:at,playbackId:Te,playbackRates:qe,currentTime:Ht,themeProps:Ye,extraSourceParams:Tt,castCustomData:rt,_hlsConfig:Me,...di}=e;return wt("tokens",it,t),wt("playbackId",Te,t),wt("playbackRates",qe,t),wt("metadata",Be,t),wt("disableCookies",(i=e.disableCookies)!=null?i:!1,t),wt("extraSourceParams",Tt,t),wt("_hlsConfig",Me,t),wt("themeProps",Ye,t),wt("castCustomData",rt,t),wt("paused",at,t,(We,Ge)=>{Ge!=null&&(Ge?We.pause():We.play())},(We,Ge,ui)=>We.hasAttribute("autoplay")&&!We.hasPlayed?!1:TE(We,Ge,ui)),wt("currentTime",Ht,t,(We,Ge)=>{Ge!=null&&(We.currentTime=Ge)}),ce("abort",t,a),ce("canplay",t,r),ce("canplaythrough",t,n),ce("emptied",t,s),ce("loadstart",t,o),ce("loadeddata",t,l),ce("loadedmetadata",t,u),ce("progress",t,p),ce("durationchange",t,m),ce("volumechange",t,c),ce("ratechange",t,d),ce("resize",t,v),ce("waiting",t,_),ce("play",t,E),ce("playing",t,y),ce("timeupdate",t,f),ce("pause",t,T),ce("seeking",t,w),ce("seeked",t,D),ce("stalled",t,x),ce("suspend",t,I),ce("ended",t,H),ce("error",t,Y),ce("cuepointchange",t,F),ce("chapterchange",t,W),[di]},Aw=gw(),kw="mux-player-react",ww=Pn.forwardRef((t,e)=>{var i;let a=$n.useRef(null),r=mw(a,e),[n]=Tw(a,t),[s]=$n.useState((i=t.playerInitTime)!=null?i:Qu());return Pn.createElement(yw,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:kw,playerSoftwareVersion:Aw,playerInitTime:s,...n})}),Yw=ww;export{Mw as MaxResolution,L as MediaError,xw as MinResolution,Ow as RenditionOrder,Yw as default,Qu as generatePlayerInitTime,kw as playerSoftwareName,Aw as playerSoftwareVersion};
