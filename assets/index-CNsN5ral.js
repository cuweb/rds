var gE=Object.defineProperty;var yE=Object.getPrototypeOf;var TE=Reflect.get;var yh=t=>{throw TypeError(t)};var AE=(t,e,i)=>e in t?gE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Th=(t,e,i)=>AE(t,typeof e!="symbol"?e+"":e,i),Fl=(t,e,i)=>e.has(t)||yh("Cannot "+i);var A=(t,e,i)=>(Fl(t,e,"read from private field"),i?i.call(t):e.get(t)),We=(t,e,i)=>e.has(t)?yh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),je=(t,e,i,a)=>(Fl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ut=(t,e,i)=>(Fl(t,e,"access private method"),i);var rs=(t,e,i)=>TE(yE(t),i,e);import{R as Un,r as Hn}from"./iframe-Cor6wQiu.js";import{H as kE,C as SE}from"./hls-B54Fto-w.js";import{C as ns,M as wE}from"./mixin-DIQKSja0.js";import"./preload-helper-Dp1pzeXC.js";var IE=Object.create,np=Object.defineProperty,RE=Object.getOwnPropertyDescriptor,LE=Object.getOwnPropertyNames,CE=Object.getPrototypeOf,DE=Object.prototype.hasOwnProperty,sp=function(t,e){return function(){return t&&(e=t(t=0)),e}},tt=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},ME=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=LE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!DE.call(t,o)&&o!==i&&np(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=RE(e,o))||a.enumerable});return t},_t=function(t,e,i){return i=t!=null?IE(CE(t)):{},ME(!t||!t.__esModule?np(i,"default",{value:t,enumerable:!0}):i,t)},li=tt(function(t,e){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},e.exports=i});function La(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):La(t,e)}var Ca=sp(function(){Ca()});function op(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var lp=sp(function(){}),dp=tt(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),xE=tt(function(t,e){Ca(),e.exports=i;function i(a,r){if(!La(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),OE=tt(function(t,e){Ca(),e.exports=i;function i(a,r){if(!La(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),up=tt(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),cp=tt(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),hp=tt(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),NE=tt(function(t,e){lp(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(c){switch(c.nodeType){case 3:return p(c.data);case 8:return"<!--"+c.data+"-->";default:return r(c)}}function r(c){var d=[],v=c.tagName;return c.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),d.push("<"+v+u(c)+o(c)),i.indexOf(v)>-1?d.push(" />"):(d.push(">"),c.childNodes.length?d.push.apply(d,c.childNodes.map(a)):c.textContent||c.innerText?d.push(p(c.textContent||c.innerText)):c.innerHTML&&d.push(c.innerHTML),d.push("</"+v+">")),d.join("")}function n(c,d){var v=op(c[d]);return d==="style"&&Object.keys(c.style).length>0?!0:c.hasOwnProperty(d)&&(v==="string"||v==="boolean"||v==="number")&&d!=="nodeName"&&d!=="className"&&d!=="tagName"&&d!=="textContent"&&d!=="innerText"&&d!=="namespaceURI"&&d!=="innerHTML"}function s(c){if(typeof c=="string")return c;var d="";return Object.keys(c).forEach(function(v){var f=c[v];v=v.replace(/[A-Z]/g,function(g){return"-"+g.toLowerCase()}),d+=v+":"+f+";"}),d}function o(c){var d=c.dataset,v=[];for(var f in d)v.push({name:"data-"+f,value:d[f]});return v.length?l(v):""}function l(c){var d=[];return c.forEach(function(v){var f=v.name,g=v.value;f==="style"&&(g=s(g)),d.push(f+'="'+m(g)+'"')}),d.length?" "+d.join(" "):""}function u(c){var d=[];for(var v in c)n(c,v)&&d.push({name:v,value:c[v]});for(var f in c._attributes)for(var g in c._attributes[f]){var y=c._attributes[f][g],b=(y.prefix?y.prefix+":":"")+g;d.push({name:b,value:y.value})}return c.className&&d.push({name:"class",value:c.className}),d.length?l(d):""}function p(c){var d="";return typeof c=="string"?d=c:c&&(d=c.toString()),d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(c){return p(c).replace(/"/g,"&quot;")}}),mp=tt(function(t,e){Ca();var i=dp(),a=up(),r=cp(),n=hp(),s=NE(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(u,p,m){if(!La(this,l))return new l(u);var c=m===void 0?o:m||null;this.tagName=c===o?String(u).toUpperCase():u,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=c,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(u){return u.parentNode&&u.parentNode.removeChild(u),this.childNodes.push(u),u.parentNode=this,u},l.prototype.replaceChild=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[m]=u,u.parentNode=this,p},l.prototype.removeChild=function(u){var p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1),u.parentNode=null,u},l.prototype.insertBefore=function(u,p){u.parentNode&&u.parentNode.removeChild(u);var m=p==null?-1:this.childNodes.indexOf(p);return m>-1?this.childNodes.splice(m,0,u):this.childNodes.push(u),u.parentNode=this,u},l.prototype.setAttributeNS=function(u,p,m){var c=null,d=p,v=p.indexOf(":");if(v>-1&&(c=p.substr(0,v),d=p.substr(v+1)),this.tagName==="INPUT"&&p==="type")this.type=m;else{var f=this._attributes[u]||(this._attributes[u]={});f[d]={value:m,prefix:c}}},l.prototype.getAttributeNS=function(u,p){var m=this._attributes[u],c=m&&m[p]&&m[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof c!="string"?null:c},l.prototype.removeAttributeNS=function(u,p){var m=this._attributes[u];m&&delete m[p]},l.prototype.hasAttributeNS=function(u,p){var m=this._attributes[u];return!!m&&p in m},l.prototype.setAttribute=function(u,p){return this.setAttributeNS(null,u,p)},l.prototype.getAttribute=function(u){return this.getAttributeNS(null,u)},l.prototype.removeAttribute=function(u){return this.removeAttributeNS(null,u)},l.prototype.hasAttribute=function(u){return this.hasAttributeNS(null,u)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(u){var p=u.split(" "),m=[];return i(this,function(c){if(c.nodeType===1){var d=c.className||"",v=d.split(" ");p.every(function(f){return v.indexOf(f)!==-1})&&m.push(c)}}),m},l.prototype.getElementsByTagName=function(u){u=u.toLowerCase();var p=[];return i(this.childNodes,function(m){m.nodeType===1&&(u==="*"||m.tagName.toLowerCase()===u)&&p.push(m)}),p},l.prototype.contains=function(u){return i(this,function(p){return u===p})||!1}}),PE=tt(function(t,e){Ca();var i=mp();e.exports=a;function a(r){if(!La(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),$E=tt(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),UE=tt(function(t,e){Ca();var i=dp(),a=xE(),r=OE(),n=mp(),s=PE(),o=$E(),l=up(),u=cp(),p=hp();e.exports=m;function m(){if(!La(this,m))return new m;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var c=m.prototype;c.createTextNode=function(d){return new r(d,this)},c.createElementNS=function(d,v){var f=d===null?null:String(d);return new n(v,this,f)},c.createElement=function(d){return new n(d,this)},c.createDocumentFragment=function(){return new s(this)},c.createEvent=function(d){return new o(d)},c.createComment=function(d){return new a(d,this)},c.getElementById=function(d){d=String(d);var v=i(this.childNodes,function(f){if(String(f.id)===d)return f});return v||null},c.getElementsByClassName=n.prototype.getElementsByClassName,c.getElementsByTagName=n.prototype.getElementsByTagName,c.contains=n.prototype.contains,c.removeEventListener=p,c.addEventListener=u,c.dispatchEvent=l}),HE=tt(function(t,e){var i=UE();e.exports=new i}),pp=tt(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=HE(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function BE(t){if(Array.isArray(t))return t}function WE(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function FE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function vp(t,e){if(t){if(typeof t=="string")return hd(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return hd(t,e)}}function Ii(t,e){return BE(t)||WE(t,e)||vp(t,e)||FE()}var kn=_t(li()),Ah=_t(li()),KE=_t(li()),VE={now:function(){var t=KE.default.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},Ne=VE,Bn=function(){var t,e,i;if(typeof((t=Ah.default.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),Ah.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var u=l==="x"?i[n]:i[n]&3|8;return n++,u.toString(16)});var s=Ne.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},fp=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},St=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=fp()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},$o=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=St(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function qE(t){if(Array.isArray(t))return hd(t)}function YE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function GE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(t){return qE(t)||YE(t)||vp(t)||GE()}var va={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},zE=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,wt(o)),u=(a=console.info).bind.apply(a,wt(o)),p=(r=console.debug).bind.apply(r,wt(o)),m=(n=console.warn).bind.apply(n,wt(o)),c=(s=console.error).bind.apply(s,wt(o)),d=e;return{trace:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>va.TRACE))return l.apply(void 0,wt(f))},debug:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>va.DEBUG))return p.apply(void 0,wt(f))},info:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>va.INFO))return u.apply(void 0,wt(f))},warn:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>va.WARN))return m.apply(void 0,wt(f))},error:function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];if(!(d>va.ERROR))return c.apply(void 0,wt(f))},get level(){return d},set level(v){v!==this.level&&(d=v??e)}}},ne=zE("[mux]"),Kl=_t(li());function md(){var t=Kl.default.doNotTrack||Kl.default.navigator&&Kl.default.navigator.doNotTrack;return t==="1"}function U(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}Ca();function ge(t,e){if(!La(t,e))throw new TypeError("Cannot call a class as a function")}function kh(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function bt(t,e,i){return e&&kh(t.prototype,e),i&&kh(t,i),t}function R(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Sr(t){return Sr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Sr(t)}function QE(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=Sr(t),t!==null););return t}function Ss(t,e,i){return typeof Reflect<"u"&&Reflect.get?Ss=Reflect.get:Ss=function(a,r,n){var s=QE(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},Ss(t,e,i||t)}function pd(t,e){return pd=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},pd(t,e)}function jE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pd(t,e)}function ZE(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function XE(t,e){if(t==null)return{};var i=ZE(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function JE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}lp();function e_(t,e){return e&&(op(e)==="object"||typeof e=="function")?e:U(t)}function t_(t){var e=JE();return function(){var i=Sr(t),a;if(e){var r=Sr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return e_(this,a)}}var Ot=function(t){return Wn(t)[0]},Wn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},Vl=_t(li()),i_={exists:function(){var t=Vl.default.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=Vl.default.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=Vl.default.performance,e=t&&t.timing;return e&&e.navigationStart}},Uo=i_;function Ce(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function Fn(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){R(t,r,i[r])})}return t}function a_(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function Nu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a_(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var r_=["x-cdn","content-type"],Ep=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],n_=r_.concat(Ep);function Pu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(n_.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function Ho(t){if(t){var e=Ep.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var s_=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},_p=s_,ss=function(t){if(!t)return{};var e=Uo.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Hr=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return Pu(t.getAllResponseHeaders())},o_=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(g){var y=parseInt(a.version),b;return y===1&&g.programDateTime!==null&&(b=g.programDateTime),y===0&&g.pdt!==null&&(b=g.pdt),b};if(!Uo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(g,y){return t.emit(e,g,y)},l=function(g,y){var b=y.levels,E=y.audioTracks,S=y.url,M=y.stats,C=y.networkDetails,I=y.sessionData,H={},q={};b.forEach(function(ye,Ve){H[Ve]={width:ye.width,height:ye.height,bitrate:ye.bitrate,attrs:ye.attrs}}),E.forEach(function(ye,Ve){q[Ve]={name:ye.name,language:ye.lang,bitrate:ye.bitrate}});var F=ss(M),W=F.bytesLoaded,He=F.requestStart,it=F.responseStart,at=F.responseEnd;o("requestcompleted",Nu(Fn({},_p(I)),{request_event_type:g,request_bytes_loaded:W,request_start:He,request_response_start:it,request_response_end:at,request_type:"manifest",request_hostname:Ot(S),request_response_headers:Hr(C),request_rendition_lists:{media:H,audio:q,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var u=function(g,y){var b=y.details,E=y.level,S=y.networkDetails,M=y.stats,C=ss(M),I=C.bytesLoaded,H=C.requestStart,q=C.responseStart,F=C.responseEnd,W=b.fragments[b.fragments.length-1],He=s(W)+n(W.duration);o("requestcompleted",{request_event_type:g,request_bytes_loaded:I,request_start:H,request_response_start:q,request_response_end:F,request_current_level:E,request_type:"manifest",request_hostname:Ot(b.url),request_response_headers:Hr(S),video_holdback:b.holdBack&&n(b.holdBack),video_part_holdback:b.partHoldBack&&n(b.partHoldBack),video_part_target_duration:b.partTarget&&n(b.partTarget),video_target_duration:b.targetduration&&n(b.targetduration),video_source_is_live:b.live,player_manifest_newest_program_time:isNaN(He)?void 0:He})};i.on(a.Events.LEVEL_LOADED,u);var p=function(g,y){var b=y.details,E=y.networkDetails,S=y.stats,M=ss(S),C=M.bytesLoaded,I=M.requestStart,H=M.responseStart,q=M.responseEnd;o("requestcompleted",{request_event_type:g,request_bytes_loaded:C,request_start:I,request_response_start:H,request_response_end:q,request_type:"manifest",request_hostname:Ot(b.url),request_response_headers:Hr(E)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var m=function(g,y){var b=y.stats,E=y.networkDetails,S=y.frag;b=b||S.stats;var M=ss(b),C=M.bytesLoaded,I=M.requestStart,H=M.responseStart,q=M.responseEnd,F=E?Hr(E):void 0,W={request_event_type:g,request_bytes_loaded:C,request_start:I,request_response_start:H,request_response_end:q,request_hostname:E?Ot(E.responseURL):void 0,request_id:F?Ho(F):void 0,request_response_headers:F,request_media_duration:S.duration,request_url:E==null?void 0:E.responseURL};S.type==="main"?(W.request_type="media",W.request_current_level=S.level,W.request_video_width=(i.levels[S.level]||{}).width,W.request_video_height=(i.levels[S.level]||{}).height,W.request_labeled_bitrate=(i.levels[S.level]||{}).bitrate):W.request_type=S.type,o("requestcompleted",W)};i.on(a.Events.FRAG_LOADED,m);var c=function(g,y){var b=y.frag,E=b.start,S=s(b),M={currentFragmentPDT:S,currentFragmentStart:n(E)};o("fragmentchange",M)};i.on(a.Events.FRAG_CHANGED,c);var d=function(g,y){var b=y.type,E=y.details,S=y.response,M=y.fatal,C=y.frag,I=y.networkDetails,H=(C==null?void 0:C.url)||y.url||"",q=I?Hr(I):void 0;if((E===a.ErrorDetails.MANIFEST_LOAD_ERROR||E===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT||E===a.ErrorDetails.LEVEL_LOAD_ERROR||E===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:E,request_url:H,request_hostname:Ot(H),request_id:q?Ho(q):void 0,request_type:E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:S==null?void 0:S.code,request_error_text:S==null?void 0:S.text}),M){var F,W="".concat(H?"url: ".concat(H,`
`):"")+"".concat(S&&(S.code||S.text)?"response: ".concat(S.code,", ").concat(S.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((F=y.err)===null||F===void 0?void 0:F.message,`
`):"");o("error",{player_error_code:b,player_error_message:E,player_error_context:W})}};i.on(a.Events.ERROR,d);var v=function(g,y){var b=y.frag,E=b&&b._url||"";o("requestcanceled",{request_event_type:g,request_url:E,request_type:"media",request_hostname:Ot(E)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var f=function(g,y){var b=y.level,E=i.levels[b];if(E&&E.attrs&&E.attrs.BANDWIDTH){var S=E.attrs.BANDWIDTH,M,C=parseFloat(E.attrs["FRAME-RATE"]);isNaN(C)||(M=C),S?o("renditionchange",{video_source_fps:M,video_source_bitrate:S,video_source_width:E.width,video_source_height:E.height,video_source_rendition_name:E.name,video_source_codec:E==null?void 0:E.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,f),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,u),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,m),i.off(a.Events.FRAG_CHANGED,c),i.off(a.Events.ERROR,d),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,f),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},l_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Sh=function(t,e){if(!t||!t.requestEndDate)return{};var i=Ot(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,u=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),p;u.length>0&&(p=Pu(u[u.length-1]._responseHeaders||""));var m=p?Ho(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:m}},d_=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},u_=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},c_=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},h_=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=c_(i),n=function(b,E){return t.emit(e,b,E)},s=function(b){var E=b.type,S=b.data,M=(S||{}).url;n("requestcompleted",{request_event_type:E,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Ot(M),request_url:M})};i.on("manifestLoaded",s);var o={},l=function(b){if(typeof b.getRequests!="function")return null;var E=b.getRequests({state:"executed"});return E.length===0?null:E[E.length-1]},u=function(b){var E=b.type,S=b.fragmentModel,M=b.chunk,C=l(S);p({type:E,request:C,chunk:M})},p=function(b){var E=b.type,S=b.chunk,M=b.request,C=(S||{}).mediaInfo,I=C||{},H=I.type,q=I.bitrateList;q=q||[];var F={};q.forEach(function(rt,De){F[De]={},F[De].width=rt.width,F[De].height=rt.height,F[De].bitrate=rt.bandwidth,F[De].attrs={}}),H==="video"?o.video=F:H==="audio"?o.audio=F:o.media=F;var W=Sh(M,i),He=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,ye=W.requestResponseHeaders,Ve=W.requestMediaDuration,Ut=W.requestHostname,qe=W.requestUrl,yt=W.requestId;n("requestcompleted",{request_event_type:E,request_start:He,request_response_start:it,request_response_end:at,request_bytes_loaded:-1,request_type:H+"_init",request_response_headers:ye,request_hostname:Ut,request_id:yt,request_url:qe,request_media_duration:Ve,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",u);var m=function(b){var E=b.type,S=b.fragmentModel,M=b.chunk,C=l(S);c({type:E,request:C,chunk:M})},c=function(b){var E=b.type,S=b.chunk,M=b.request,C=S||{},I=C.mediaInfo,H=C.start,q=I||{},F=q.type,W=Sh(M,i),He=W.requestStart,it=W.requestResponseStart,at=W.requestResponseEnd,ye=W.requestBytesLoaded,Ve=W.requestResponseHeaders,Ut=W.requestMediaDuration,qe=W.requestHostname,yt=W.requestUrl,rt=W.requestId,De=d_(F,i),di=De.currentLevel,Be=De.renditionWidth,Ye=De.renditionHeight,ui=De.renditionBitrate;n("requestcompleted",{request_event_type:E,request_start:He,request_response_start:it,request_response_end:at,request_bytes_loaded:ye,request_type:F,request_response_headers:Ve,request_hostname:qe,request_id:rt,request_url:yt,request_media_start_time:H,request_media_duration:Ut,request_current_level:di,request_labeled_bitrate:ui,request_video_width:Be,request_video_height:Ye})};r>=4?i.on("mediaFragmentLoaded",c):i.on("mediaFragmentLoaded",m);var d={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(d.video&&typeof d.video.bitrate=="number"){if(!(d.video.width&&d.video.height)){a.warn("have bitrate info for video but missing width/height");return}var b=d.video.bitrate;if(d.audio&&typeof d.audio.bitrate=="number"&&(b+=d.audio.bitrate),b!==d.totalBitrate)return d.totalBitrate=b,{video_source_bitrate:b,video_source_height:d.video.height,video_source_width:d.video.width,video_source_codec:u_(d.video.codec)}}},f=function(b,E,S){var M=b.mediaType;if(M==="audio"||M==="video"){var C;if(typeof i.getRepresentationsByType=="function")if(b.newRepresentation)C={bitrate:b.newRepresentation.bandwidth,width:b.newRepresentation.width,height:b.newRepresentation.height,qualityIndex:b.newRepresentation.absoluteIndex};else{var I=i.getRepresentationsByType(M);if(I&&typeof b.newQuality=="number"){var H=I.find(function(F){return F.absoluteIndex===b.newQuality||F.index===b.newQuality});H&&(C={bitrate:H.bandwidth,width:H.width,height:H.height,qualityIndex:b.newQuality})}}else{if(typeof b.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",b);return}C=i.getBitrateInfoListFor(M).find(function(F){var W=F.qualityIndex;return W===b.newQuality})}if(!(C&&typeof C.bitrate=="number")){a.warn("missing bitrate info for ".concat(M));return}d[M]=Nu(Fn({},C),{codec:i.getCurrentTrackFor(M).codec});var q=v();q&&n("renditionchange",q)}};i.on("qualityChangeRendered",f);var g=function(b){var E=b.request,S=b.mediaType;E=E||{},n("requestcanceled",{request_event_type:E.type+"_"+E.action,request_url:E.url,request_type:S,request_hostname:Ot(E.url)})};i.on("fragmentLoadingAbandoned",g);var y=function(b){var E=b.error,S,M,C=(E==null||(S=E.data)===null||S===void 0?void 0:S.request)||{},I=(E==null||(M=E.data)===null||M===void 0?void 0:M.response)||{};(E==null?void 0:E.code)===27&&n("requestfailed",{request_error:C.type+"_"+C.action,request_url:C.url,request_hostname:Ot(C.url),request_type:C.mediaType,request_error_code:I.status,request_error_text:I.statusText});var H="".concat(C!=null&&C.url?"url: ".concat(C.url,`
`):"")+"".concat(I!=null&&I.status||I!=null&&I.statusText?"response: ".concat(I==null?void 0:I.status,", ").concat(I==null?void 0:I.statusText,`
`):"");n("error",{player_error_code:E==null?void 0:E.code,player_error_message:E==null?void 0:E.message,player_error_context:H})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",c),i.off("qualityChangeRendered",f),i.off("error",y),i.off("fragmentLoadingAbandoned",g),delete i._stopMuxMonitor}},m_=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},wh=0,p_=(function(){function t(){ge(this,t),R(this,"_listeners",void 0)}return bt(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++wh,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++wh;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(u,p){u=u.slice(),u.forEach(function(m){m.call(a,{type:e},p)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),v_=p_,ql=_t(li()),f_=(function(){function t(e){var i=this;ge(this,t),R(this,"_playbackHeartbeatInterval",void 0),R(this,"_playheadShouldBeProgressing",void 0),R(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(ql.default.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return bt(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=ql.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(ql.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),E_=f_,__=function t(e){var i=this;ge(this,t),R(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},b_=__,g_=(function(){function t(e){ge(this,t),R(this,"_watchTimeTrackerLastCheckedTime",void 0),R(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return bt(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Ce(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),y_=g_,T_=(function(){function t(e){var i=this;ge(this,t),R(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),R(this,"_lastTime",void 0),R(this,"_isAdPlaying",void 0),R(this,"_callbackUpdatePlaybackTime",void 0),R(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Ne.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Ne.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return bt(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=Ne.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=Ne.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&Ce(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&Ce(this.pm.data,"ad_playing_time_ms_cumulative",a),Ce(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),A_=T_,k_=(function(){function t(e){ge(this,t),R(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return bt(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),S_=k_,Ih=300*1e3,w_=function t(e){if(ge(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Ce(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>Ih&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Ih,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Ce(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},I_=w_,R_=(function(){function t(e){var i=this;ge(this,t),R(this,"_lastCheckedTime",void 0),R(this,"_lastPlayheadTime",void 0),R(this,"_lastPlayheadTimeUpdatedTime",void 0),R(this,"_rebuffering",void 0),R(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Ne.now()})}))}return bt(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),L_=R_,C_=(function(){function t(e){var i=this;ge(this,t),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||Ne.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return bt(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),D_=C_,M_=function t(e){var i=this;ge(this,t),R(this,"_lastPlayerHeight",void 0),R(this,"_lastPlayerWidth",void 0),R(this,"_lastPlayheadPosition",void 0),R(this,"_lastSourceHeight",void 0),R(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),u=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,u),Ce(e.data,"view_total_content_playback_time",s),Ce(e.data,"view_total_upscaling",l*s),Ce(e.data,"view_total_downscaling",u*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},x_=M_,O_=2e3,N_=function t(e){var i=this;ge(this,t),R(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=Ne.now(),s=(e.data.viewer_time||n)-(a||n);Ce(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=O_){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Ce(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},P_=N_,Rh=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},$_=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],U_=(function(){function t(e){var i=this;ge(this,t),R(this,"_adHasPlayed",void 0),R(this,"_adRequests",void 0),R(this,"_adResponses",void 0),R(this,"_currentAdRequestNumber",void 0),R(this,"_currentAdResponseNumber",void 0),R(this,"_prerollPlayTime",void 0),R(this,"_wouldBeNewAdPlay",void 0),R(this,"isAdBreak",void 0),R(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),$_.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),Rh(i._adRequests,n),Ce(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Ce(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),Rh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Ce(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Ce(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Ce(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Ce(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return bt(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=Ii(Wn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=Ii(Wn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i==null?void 0:i.ad_type)}}]),t})(),H_=U_,B_=function t(e){var i=this;ge(this,t),R(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Ne.now(),e.on("before*",r)},r=function(n){var s=Ne.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},W_=B_,Yl=_t(li()),bp=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var u=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,m=0;m<u.length;m++){var c=u[m].split("="),d=c.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{var v=c[0].replace(p,decodeURIComponent);if(d=i.read?i.read(d,v):i(d,v)||d.replace(p,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch{}if(r===v){o=d;break}r||(o[v]=d)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),gp="muxData",F_=function(t){return Object.entries(t).map(function(e){var i=Ii(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},K_=function(t){return t.split("&").reduce(function(e,i){var a=Ii(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},yp=function(){var t;try{t=K_(bp.get(gp)||"")}catch{t={}}return t},Tp=function(t){try{bp.set(gp,F_(t),{expires:365})}catch{}},V_=function(){var t=yp();return t.mux_viewer_id=t.mux_viewer_id||Bn(),t.msn=t.msn||Math.random(),Tp(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},q_=function(){var t=yp(),e=Ne.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Bn(),t.sst=e),t.sex=e+1500*1e3,Tp(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function Y_(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var G_={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},z_=Ap(G_),Q_={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Lh=Ap(Q_);function Ap(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function vd(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=z_[s];o||(ne.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Lh[l]?o+=Lh[l]:Number.isInteger(Number(l))?o+=l:(ne.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var Ea=_t(li()),j_=_t(pp()),Z_={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},X_=56*1024,J_=["hb","requestcompleted","requestfailed","requestcanceled"],eb="https://img.litix.io",Ri=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||eb,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},Z_,e)};Ri.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};Ri.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};Ri.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),Ea.default.clearTimeout(this._sendTimeout)};Ri.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],vd({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);kp(this._beaconUrl,i,!0,function(){})};Ri.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=Ne.now();kp(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,ne.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=Ne.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};Ri.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};Ri.prototype._startBeaconSending=function(){var t=this;Ea.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=Ea.default.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};Ri.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(Ne.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(ne.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return J_.indexOf(l.e)===-1}),s()),o()||(ne.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var u in l){var p=l[u],m=50*1024;typeof p=="string"&&p.length>m&&(l[u]=p.substring(0,m))}}),s()),a};var tb=typeof j_.default.exitPictureInPicture=="function"?function(t){return t.length<=X_}:function(t){return!1},kp=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(Ea.default.fetch){Ea.default.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:tb(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(Ea.default.XMLHttpRequest){var r=new Ea.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},ib=Ri,ab=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],rb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],nb=["ad_id","ad_creative_id","ad_universal_id"],sb=["viewstart","error","ended","viewend"],ob=600*1e3,lb=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};ge(this,t);var r,n,s,o,l,u,p,m,c,d,v,f;R(this,"mux",void 0),R(this,"envKey",void 0),R(this,"options",void 0),R(this,"eventQueue",void 0),R(this,"sampleRate",void 0),R(this,"disableCookies",void 0),R(this,"respectDoNotTrack",void 0),R(this,"previousBeaconData",void 0),R(this,"lastEventTime",void 0),R(this,"rateLimited",void 0),R(this,"pageLevelData",void 0),R(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new ib(Y_(this.envKey,this.options));var g;this.sampleRate=(g=this.options.sampleRate)!==null&&g!==void 0?g:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var b;this.respectDoNotTrack=(b=this.options.respectDoNotTrack)!==null&&b!==void 0?b:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(u=p.os)===null||u===void 0?void 0:u.family,viewer_os_architecture:(c=this.options.platform)===null||c===void 0||(m=c.os)===null||m===void 0?void 0:m.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(d=v.os)===null||d===void 0?void 0:d.version,page_url:Yl.default===null||Yl.default===void 0||(f=Yl.default.location)===null||f===void 0?void 0:f.href},this.viewerData=this.disableCookies?{}:V_()}return bt(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&md())return ne.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ne.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:q_(),r=Nu(Fn({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=vd(o);if(this.lastEventTime=this.mux.utils.now(),s)return ne.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||ne.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(ne.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(sb.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=vd(r),this.eventQueue.queueEvent(r.event,l),ne.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=ob)r=Fn({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=Ii(o,2),u=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[u]||ab.indexOf(u)>-1||a.objectHasChanged(s,u,p,a.previousBeaconData[u])||a.eventRequiresKey(e,u))&&(r[u]=p,a.previousBeaconData[u]=p)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||nb.includes(i)&&rb.includes(e)||e==="playbackmodechange"&&i.indexOf("player_playback_mode")===0)}}]),t})(),db=function t(e){ge(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,u=function(c,d){var v=d.request_start,f=d.request_response_start,g=d.request_response_end,y=d.request_bytes_loaded;n++;var b,E;if(f?(b=f-(v??0),E=(g??0)-f):E=(g??0)-(v??0),E>0&&y&&y>0){var S=y/E*8e3;s++,a+=y,r+=E,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,S),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,b>0&&(i+=b,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,b),e.data.view_average_request_latency=i/s)}},p=function(c,d){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},m=function(c,d){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",u),e.on("requestfailed",p),e.on("requestcanceled",m)},ub=db,cb=3600*1e3,hb=function t(e){var i=this;ge(this,t),R(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=Ne.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>cb){var l=Object.keys(e.data).reduce(function(p,m){return m.indexOf("video_")===0?Object.assign(p,R({},m,e.data[m])):p},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var u=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=u,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},mb=hb,pb=function t(e){ge(this,t);var i=function(o){var l=vb(o),u=fb(o);if(l!=null&&!Ch(l,n)&&s<=u){n=l,s=u;var p={video_cdn:l};e.emit("cdnchange",p)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var u=l==null?void 0:l.video_cdn;u&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(Ch(u,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=u))}),e.on("requestcompleted",function(o,l){i(l)})};function Ch(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}function vb(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function fb(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var Eb=pb,_b=function(t){try{return JSON.parse(t),!0}catch{return!1}},bb=function t(e){var i=this;ge(this,t),R(this,"_emittingAutomaticEvent",!1),R(this,"_hasInitialized",!1),R(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?_b(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},gb=bb,yb=(function(){function t(e){ge(this,t),R(this,"pm",void 0),R(this,"_currentRangeStart",void 0),R(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return bt(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),Tb=yb,Zt=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),Ab=function(t){if(!t)return Zt.UNKNOWN;switch(t){case"cellular":case"wimax":return Zt.CELLULAR;case"wifi":return Zt.WIFI;case"ethernet":return Zt.WIRED;case"none":return Zt.NO_CONNECTION;case"bluetooth":case"other":return Zt.OTHER;case"unknown":return Zt.UNKNOWN;default:return Zt.OTHER}},kb=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},ia=_t(li()),Sb=(function(){function t(e){var i=this;ge(this,t),R(this,"pm",void 0),R(this,"lastType",void 0),R(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),ia.default.addEventListener("online",r),ia.default.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),ia.default.removeEventListener("online",r),ia.default.removeEventListener("offline",r)})})}return bt(t,[{key:"type",get:function(){var e,i;return((e=ia.default.navigator)===null||e===void 0?void 0:e.onLine)===!1?Zt.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?Ab(t.connection.type):Zt.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",Fn({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return kb(ia.default.navigator)?ia.default.navigator.connection:null}}]),t})(),wb=Sb,Ib=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],Rb=new Set(["requestcompleted","requestfailed","requestcanceled"]),Lb=(function(t){jE(i,t);var e=t_(i);function i(a,r,n){ge(this,i);var s;s=e.call(this),R(U(s),"pageLoadEndTime",void 0),R(U(s),"pageLoadInitTime",void 0),R(U(s),"_destroyed",void 0),R(U(s),"_heartBeatTimeout",void 0),R(U(s),"adTracker",void 0),R(U(s),"dashjs",void 0),R(U(s),"data",void 0),R(U(s),"disablePlayheadRebufferTracking",void 0),R(U(s),"disableRebufferTracking",void 0),R(U(s),"disableAdPlaybackRangeFiltering",void 0),R(U(s),"errorTracker",void 0),R(U(s),"errorTranslator",void 0),R(U(s),"emitTranslator",void 0),R(U(s),"getAdData",void 0),R(U(s),"getPlayheadTime",void 0),R(U(s),"getStateData",void 0),R(U(s),"stateDataTranslator",void 0),R(U(s),"hlsjs",void 0),R(U(s),"id",void 0),R(U(s),"longResumeTracker",void 0),R(U(s),"minimumRebufferDuration",void 0),R(U(s),"mux",void 0),R(U(s),"playbackEventDispatcher",void 0),R(U(s),"playbackHeartbeat",void 0),R(U(s),"playbackHeartbeatTime",void 0),R(U(s),"playheadTime",void 0),R(U(s),"seekingTracker",void 0),R(U(s),"sustainedRebufferThreshold",void 0),R(U(s),"watchTimeTracker",void 0),R(U(s),"currentFragmentPDT",void 0),R(U(s),"currentFragmentStart",void 0),s.pageLoadInitTime=Uo.navigationStart(),s.pageLoadEndTime=Uo.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(c){return c},emitTranslator:function(){for(var c=arguments.length,d=new Array(c),v=0;v<c;v++)d[v]=arguments[v];return d},stateDataTranslator:function(c){return c}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ne.level=n.debug?va.DEBUG:va.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new lb(a,n.data.env_key,n),s.data={player_instance_id:Bn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(U(s));if(s.on("viewinit",function(c,d){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,d),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(c,d){this._resetView(d)}),s.on("programchange",function(c,d){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(d,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(c,d){this.currentFragmentPDT=d.currentFragmentPDT,this.currentFragmentStart=d.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var u=function(){var c=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",c&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var p=function(c){c.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",p)})}s.on("playerready",function(c,d){Object.assign(this.data,d)}),Ib.forEach(function(c){s.on(c,function(d,v){c.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+c,function(){(c!=="error"||this.errorTracker.viewErrored)&&this.send(c)})}),s.on("viewend",function(c,d){Object.assign(s.data,d)});var m=function(c){var d=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=d-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",m),s.longResumeTracker=new mb(U(s)),s.errorTracker=new b_(U(s)),new W_(U(s)),s.seekingTracker=new P_(U(s)),s.playheadTime=new S_(U(s)),s.playbackHeartbeat=new E_(U(s)),new x_(U(s)),s.watchTimeTracker=new y_(U(s)),new A_(U(s)),new Tb(U(s)),s.adTracker=new H_(U(s)),new L_(U(s)),new I_(U(s)),new D_(U(s)),new ub(U(s)),new Eb(U(s)),new gb(U(s)),new wb(U(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return bt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=Ss(Sr(i.prototype),"emit",this)).call.apply(n,[this].concat(wt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(u){r[u]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=Ii(Wn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(u){return u[0]!==u[1]}).map(function(u){return"".concat(u[0],":").concat(u[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,Rb.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=XE(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Bn(),n=function(){r===a.data.view_id&&Ce(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,o_(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(l_(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,h_(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(m_(this.dashjs),this.dashjs=void 0)}}]),i})(v_),Cb=Lb,Br=_t(pp());function Gl(){return Br.default&&!!(Br.default.fullscreenElement||Br.default.webkitFullscreenElement||Br.default.mozFullScreenElement||Br.default.msFullscreenElement)}var Db=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Mb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function xb(t,e,i){var a=Ii($o(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,u=t.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var m={getPlayheadTime:function(){return u(r.currentTime)},getStateData:function(){var d,v,f,g=((d=(v=this).getPlayheadTime)===null||d===void 0?void 0:d.call(v))||u(r.currentTime),y=this.hlsjs&&this.hlsjs.url,b=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),E={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:Gl(),video_poster_url:r.poster,video_source_url:y||b||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(f=r.getVideoPlaybackQuality)===null||f===void 0?void 0:f.call(r).droppedVideoFrames};if(r.getStartDate&&g>0){var S=r.getStartDate();if(S&&typeof S.getTime=="function"&&S.getTime()){var M=S.getTime();if(E.player_program_time=M+g,r.seekable.length>0){var C=M+r.seekable.end(r.seekable.length-1);E.player_live_edge_program_time=C}}}return E}};i=Object.assign(p,i,m),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(d,v){t.emit(n,d,v)},r.mux.updateData=function(d){r.mux.emit("hb",d)};var c=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(d){r.removeEventListener(d,r.mux.listeners[d],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.updateData=c,r.mux.setEmitTranslator=c,r.mux.setStateDataTranslator=c,r.mux.setGetPlayheadTime=c,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(d){var v=Ii($o(d),3),f=v[0],g=v[1],y=v[2];if(f){if(y!=="video"&&y!=="audio")return t.log.error("The element of `"+g+"` was not a media element.")}else return t.log.error("No element was found with the `"+g+"` query selector.");f.muxId=r.muxId,delete r.muxId,f.mux=f.mux||{},f.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(f.mux.listeners).forEach(function(b){r.removeEventListener(b,f.mux.listeners[b],!1),f.addEventListener(b,f.mux.listeners[b],!1)}),f.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,f.mux.swapElement=r.mux.swapElement,f.mux.destroy=r.mux.destroy,delete r.mux,r=f},r.mux.addHLSJS=function(d){t.addHLSJS(n,d)},r.mux.addDashJS=function(d){t.addDashJS(n,d)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(d){t.setEmitTranslator(n,d)},r.mux.setStateDataTranslator=function(d){t.setStateDataTranslator(n,d)},r.mux.setGetPlayheadTime=function(d){d||(d=i.getPlayheadTime),t.setGetPlayheadTime(n,d)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},Db.forEach(function(d){d==="error"&&!i.automaticErrorTracking||(r.mux.listeners[d]=function(){var v={};if(d==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=Mb[r.error.code]||r.error.message}t.emit(n,d,v)},r.addEventListener(d,r.mux.listeners[d],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var d=Gl()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:d,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var d=Gl(),v=document.fullscreenElement;if(d&&(v===r||v!=null&&v.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!d){var f=document.pictureInPictureElement===r,g=f?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:g,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function Ob(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){ne.info("safeCall error",n)}return r}var Sn=_t(li()),Ha;Sn.default&&Sn.default.WeakMap&&(Ha=new WeakMap);function Nb(t,e){if(!t||!e||!Sn.default||typeof Sn.default.getComputedStyle!="function")return"";var i;return Ha&&Ha.has(t)&&(i=Ha.get(t)),i||(i=Sn.default.getComputedStyle(t,null),Ha&&Ha.set(t,i)),i.getPropertyValue(e)}function Pb(t){return Math.floor(t*1e3)}var aa={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},gl=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};gl.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};gl.prototype.processLine=function(t){var e=t.indexOf(":"),i=Bb(t,e),a=i[0],r=i.length===2?$u(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case aa.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case aa.PART_INF:{zl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case aa.SERVER_CONTROL:{zl(this.manifest,i),this.setHoldBack();break}case aa.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case aa.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case aa.VERSION:{zl(this.manifest,i);break}case aa.SESSION_DATA:{var o=Wb(i[1]),l=_p(o);Object.assign(this.manifest.sessionData,l)}}};gl.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var zl=function(t,e){var i=Sp(e[0].replace("#EXT-X-","")),a;Hb(e[1])?(a={},a=Object.assign(Ub(e[1]),a)):a=$u(e[1]),t[i]=a},Sp=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},$u=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},$b=function(t){var e={},i=t.split("=");if(i.length>1){var a=Sp(i[0]);e[a]=$u(i[1])}return e},Ub=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=$b(r);i=Object.assign(n,i)}return i},Hb=function(t){return t.indexOf("=")>-1},Bb=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},Wb=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),u=0;u<l.length;u++)l[u]==="DATA-ID"&&(e["DATA-ID"]=l[1-u]),l[u]==="VALUE"&&(e.VALUE=l[1-u])}),{data:e}}},Fb=gl,Kb={safeCall:Ob,safeIncrement:Ce,getComputedStyle:Nb,secondsToMs:Pb,assign:Object.assign,headersStringToObject:Pu,cdnHeadersToRequestId:Ho,extractHostnameAndDomain:Wn,extractHostname:Ot,manifestParser:Fb,generateShortID:fp,generateUUID:Bn,now:Ne.now,findMediaElement:$o},Vb=Kb,qb={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},Yb=qb,Gb="mux-embed",zb="5.18.1",Qb="2.1",Ae={},ji=function(t){var e=arguments;typeof t=="string"?ji.hasOwnProperty(t)?kn.default.setTimeout(function(){e=Array.prototype.splice.call(e,1),ji[t].apply(null,e)},0):ne.warn("`"+t+"` is an unknown task"):typeof t=="function"?kn.default.setTimeout(function(){t(ji)},0):ne.warn("`"+t+"` is invalid.")},jb={loaded:Ne.now(),NAME:Gb,VERSION:zb,API_VERSION:Qb,PLAYER_TRACKED:!1,monitor:function(t,e){return xb(ji,t,e)},destroyMonitor:function(t){var e=Ii($o(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ne.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=St(t);Ae[i]?Ae[i].addHLSJS(e):ne.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=St(t);Ae[i]?Ae[i].addDashJS(e):ne.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=St(t);Ae[e]?Ae[e].removeHLSJS():ne.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=St(t);Ae[e]?Ae[e].removeDashJS():ne.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){md()&&e&&e.respectDoNotTrack&&ne.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=St(t);Ae[i]=new Cb(ji,i,e)},emit:function(t,e,i){var a=St(t);Ae[a]?(Ae[a].emit(e,i),e==="destroy"&&delete Ae[a]):ne.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=St(t);Ae[i]?Ae[i].emit("hb",e):ne.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=St(t);Ae[i]?Ae[i].emitTranslator=e:ne.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=St(t);Ae[i]?Ae[i].stateDataTranslator=e:ne.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=St(t);Ae[i]?Ae[i].getPlayheadTime=e:ne.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:md,log:ne,utils:Vb,events:Yb,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(ji,jb);typeof kn.default<"u"&&typeof kn.default.addEventListener=="function"&&kn.default.addEventListener("pagehide",function(t){t.persisted||(ji.WINDOW_UNLOADING=!0)},!1);var Uu=ji;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var K=kE,J={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},P={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},yl=t=>t===J.VIDEO?"playback":t,Mi=class Zr extends Error{constructor(e,i=Zr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Zr.MEDIA_ERR_NETWORK&&i<=Zr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Zr.defaultMessages[this.code])!=null?n:"")}};Mi.MEDIA_ERR_ABORTED=1,Mi.MEDIA_ERR_NETWORK=2,Mi.MEDIA_ERR_DECODE=3,Mi.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Mi.MEDIA_ERR_ENCRYPTED=5,Mi.MEDIA_ERR_CUSTOM=100,Mi.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var L=Mi,Zb=t=>t==null,Hu=(t,e)=>Zb(e)?!1:t in e,fd={ANY:"any",MUTED:"muted"},ee={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},ii={MSE:"mse",NATIVE:"native"},Xr={HEADER:"header",QUERY:"query",NONE:"none"},Bo=Object.values(Xr),ki={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Dh={HLS:ki.M3U8};[...Object.values(ki)];var dS={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},uS={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},cS={DESCENDING:"desc"},Xb="en",Ed={code:Xb},fe=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function Jb(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var Bu=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},Tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Hu(i,Dh)?Dh[i]:e}return eg(t)},wp=t=>t==="VOD"?ee.ON_DEMAND:ee.LIVE,Ip=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,eg=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=Wu(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return ag(t)?ki.M3U8:"";let r=i.slice(a+1).toUpperCase();return Hu(r,ki)?ki[r]:""},_d=t=>{try{return new URL(t),!1}catch{return!0}},tg=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),Wu=(t,e)=>{var i;if(!_d(t))return new URL(t);let a=(i=window==null?void 0:window.location)==null?void 0:i.href,r=e??a;return e&&_d(e.toString())&&(r=new URL(e,a)),new URL(t,r)},ig="mux.com",ag=({src:t,customDomain:e=ig})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},pr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},rg=({exp:t},e=Date.now())=>!t||t*1e3<e,ng=({sub:t},e)=>t!==e,sg=({aud:t},e)=>!t,og=({aud:t},e)=>t!==e,Rp="en";function O(t,e=!0){var i,a;let r=e&&(a=(i=Ed)==null?void 0:i[t])!=null?a:t,n=e?Ed.code:Rp;return new lg(r,n)}var lg=class{constructor(e,i=(a=>(a=Ed)!=null?a:Rp)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},dg=Object.values(fd),Mh=t=>typeof t=="boolean"||typeof t=="string"&&dg.includes(t),ug=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=Mh(a)?a:!!a,o=()=>{r||fe(e,"playing",()=>{r=!0},{once:!0})};if(o(),fe(e,"loadstart",()=>{r=!1,o(),Ql(e,s)},{once:!0}),fe(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==ee.UNKNOWN?n=t.streamType===ee.LIVE:n=!Number.isFinite(e.duration)),Ql(e,s)},{once:!0}),i&&i.once(K.Events.LEVEL_LOADED,(l,u)=>{var p;t.streamType&&t.streamType!==ee.UNKNOWN?n=t.streamType===ee.LIVE:n=(p=u.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&fe(e,"play",()=>{e.preload==="metadata"?i.once(K.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=Mh(l)?l:!!l,Ql(e,s))}},Ql=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case fd.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case fd.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},cg=({preload:t,src:e},i,a)=>{let r=m=>{m!=null&&["","none","metadata","auto"].includes(m)?i.setAttribute("preload",m):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,u=m=>{r(m);let c=m??i.preload;s||c==="none"||(c==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&e&&(n=!0,a.loadSource(e))};return fe(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),u(t),u},hg=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,fe(e,"ratechange",o);let l=(u,{frag:p})=>{n||p.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(K.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(K.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},mg=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(K.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function pg(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(K.Events.MANIFEST_PARSED,function(u,p){l();let m=t.addVideoTrack("main");m.selected=!0;for(let[c,d]of p.levels.entries()){let v=m.addRendition(d.url[0],d.width,d.height,d.videoCodec,d.bitrate);a.set(d,`${c}`),v.id=`${c}`}}),e.on(K.Events.AUDIO_TRACKS_UPDATED,function(u,p){o();for(let m of p.audioTracks){let c=m.default?"main":"alternative",d=t.addAudioTrack(c,m.name,m.lang);d.id=`${m.id}`,m.default&&(d.enabled=!0)}});let r=()=>{var u;let p=+((u=[...t.audioTracks].find(c=>c.enabled))==null?void 0:u.id),m=e.audioTracks.map(c=>c.id);p!=e.audioTrack&&m.includes(p)&&(e.audioTrack=p)};t.audioTracks.addEventListener("change",r),e.on(K.Events.LEVELS_UPDATED,function(u,p){var m;let c=t.videoTracks[(m=t.videoTracks.selectedIndex)!=null?m:0];if(!c)return;let d=p.levels.map(v=>a.get(v));for(let v of t.videoRenditions)v.id&&!d.includes(v.id)&&c.removeRendition(v)});let n=u=>{let p=u.target.selectedIndex;p!=e.nextLevel&&(e.nextLevel=p)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let u of t.videoTracks)t.removeVideoTrack(u)},o=()=>{for(let u of t.audioTracks)t.removeAudioTrack(u)},l=()=>{s(),o()};e.once(K.Events.DESTROYING,()=>{var u,p;l(),(u=t.audioTracks)==null||u.removeEventListener("change",r),(p=t.videoRenditions)==null||p.removeEventListener("change",n)})}var jl=t=>"time"in t?t.time:t.startTime;function vg(t,e){e.on(K.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let u=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=e.subtitleTracks.findIndex(({lang:c,name:d,type:v})=>c==(u==null?void 0:u.lang)&&d===s.label&&v.toLowerCase()===s.kind),m=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;Fu(t,s.kind,s.label,u==null?void 0:u.lang,m,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:u,type:p,default:m})=>r.id==="default"&&m||l==r.language&&u===r.label&&p.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(K.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(u=>{var p;(p=o.cues)!=null&&p.getCueById(u.id)||o.addCue(u)}),l&&(o.mode="disabled")}),e.once(K.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=t.querySelector(o),u=(s=l==null?void 0:l.getAttribute("src"))!=null?s:"";l==null||l.removeAttribute("src"),setTimeout(()=>{l==null||l.setAttribute("src",u)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(K.Events.MANIFEST_LOADED,a),e.once(K.Events.MEDIA_ATTACHED,a)}function Fu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function fg(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function is(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function Lp(t,e,i,a){let r=is(t,i,a);return r||(r=Fu(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>jl(s)-jl(n)).forEach(n=>{var s,o;let l=n.value,u=jl(n);if("endTime"in n&&n.endTime!=null)r==null||r.addCue(new VTTCue(u,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let p=Array.prototype.findIndex.call(r==null?void 0:r.cues,v=>v.startTime>=u),m=(s=r==null?void 0:r.cues)==null?void 0:s[p],c=m?m.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,d=(o=r==null?void 0:r.cues)==null?void 0:o[p-1];d&&(d.endTime=u),r==null||r.addCue(new VTTCue(u,c,a==="chapters"?l:JSON.stringify(l??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var Ku="cuepoints",Cp=Object.freeze({label:Ku});async function Dp(t,e,i=Cp){return Lp(t,e,i.label,"metadata")}var bd=t=>({time:t.startTime,value:JSON.parse(t.text)});function Eg(t,e={label:Ku}){let i=is(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>bd(a)):[]}function Mp(t,e={label:Ku}){var i,a;let r=is(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return bd(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return bd(s||r.activeCues[0])}async function _g(t,e=Cp){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await Dp(t,[],e);fe(t,"cuechange",()=>{let r=Mp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var Vu="chapters",xp=Object.freeze({label:Vu}),gd=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function Op(t,e,i=xp){return Lp(t,e,i.label,"chapters")}function bg(t,e={label:Vu}){var i;let a=is(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>gd(r)):[]}function Np(t,e={label:Vu}){var i,a;let r=is(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return gd(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return gd(s||r.activeCues[0])}async function gg(t,e=xp){return new Promise(i=>{fe(t,"loadstart",async()=>{let a=await Op(t,[],e);fe(t,"cuechange",()=>{let r=Np(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function yg(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function Tg(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var wn={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},Ag=t=>{if(t===J.VIDEO)return wn.VIDEO;if(t===J.DRM)return wn.DRM},kg=(t,e)=>{var i,a;let r=yl(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Hu(n,e)?e[n]:void 0},Wo=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let y=O("Your device appears to be offline",r),b,E=L.MEDIA_ERR_NETWORK,S=new L(y,E,!1,b);return S.errorCategory=e,S.muxCode=P.NETWORK_OFFLINE,S.data=t,S}let l="status"in t?t.status:t.code,u=Date.now(),p=L.MEDIA_ERR_NETWORK;if(l===200)return;let m=yl(e),c=kg(e,i),d=Ag(e),[v]=Bu((s=i.playbackId)!=null?s:"");if(!l||!v)return;let f=pr(c);if(c&&!f){let y=O("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:m}),b=O("Compact JWT string: {token}",r).format({token:c}),E=new L(y,p,!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_MALFORMED,E.data=t,E}if(l>=500){let y=new L("",p,a??!0);return y.errorCategory=e,y.muxCode=P.NETWORK_UNKNOWN_ERROR,y}if(l===403)if(f){if(rg(f,u)){let y={timeStyle:"medium",dateStyle:"medium"},b=O("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:m}),E=O("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",y).format((o=f.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",y).format(u)}),S=new L(b,p,!0,E);return S.errorCategory=e,S.muxCode=P.NETWORK_TOKEN_EXPIRED,S.data=t,S}if(ng(f,v)){let y=O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m}),b=O("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:m,playbackId:v,tokenPlaybackId:f.sub}),E=new L(y,p,!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_SUB_MISMATCH,E.data=t,E}if(sg(f)){let y=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),b=O("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d}),E=new L(y,p,!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_AUD_MISSING,E.data=t,E}if(og(f,d)){let y=O("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:m}),b=O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:m,expectedAud:d,aud:f.aud}),E=new L(y,p,!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_AUD_MISMATCH,E.data=t,E}}else{let y=O("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:m,category:e}),b=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(y,p,a??!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_TOKEN_MISSING,E.data=t,E}if(l===412){let y=O("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),b=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(y,p,a??!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_NOT_READY,E.streamType=i.streamType===ee.LIVE?"live":i.streamType===ee.ON_DEMAND?"on-demand":"unknown",E.data=t,E}if(l===404){let y=O("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),b=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(y,p,a??!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_NOT_FOUND,E.data=t,E}if(l===400){let y=O("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),b=O("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new L(y,p,a??!0,b);return E.errorCategory=e,E.muxCode=P.NETWORK_INVALID_URL,E.data=t,E}let g=new L("",p,a??!0);return g.errorCategory=e,g.muxCode=P.NETWORK_UNKNOWN_ERROR,g.data=t,g},yd=K.DefaultConfig.capLevelController;yd||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var Sg={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function wg(t){let e=t.toLowerCase().trim();return Sg[e]}var Td=class Jr extends yd{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?Jr.maxAutoResolution.set(e,i):Jr.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=Jr.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=wg(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(u=>u===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Jr.minMaxResolution;return r>=n?i:yd.getMaxLevelByMediaSize(a,n*(16/9),n)}};Td.minMaxResolution=720,Td.maxAutoResolution=new WeakMap;var Ig=Td,Ad=Ig,Rg="com.apple.fps.1_0",Lg="application/vnd.apple.mpegurl",Cg=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let c=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=J.DRM,d.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,d),()=>{}}let n=t,s=e(),o=null,l=c=>{(async()=>{try{n.webkitKeys||u();let d=await s;if(c.initData===null||d==null)return;let v=Dg(c.initData,d);p(v)}catch(d){console.error("Could not start encrypted playback due to exception",d),a(n,d)}})()},u=()=>{try{let c=new WebKitMediaKeys(Rg);n.webkitSetMediaKeys(c),r()}catch{let c="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",d=new L(c,L.MEDIA_ERR_ENCRYPTED,!0);throw d.errorCategory=J.DRM,d.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,d}},p=c=>{let d=n.webkitKeys.createSession(Lg,c),v=async y=>{try{let b=y.message,E=await i(b);d.update(E)}catch(b){console.error("Error on FairPlay session message",b),a(t,b)}},f=y=>{let b=y.target.error;if(!b)return;console.error(`Internal Webkit Key Session Error - sysCode: ${b.systemCode} code: ${b.code}`);let E=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),S=new L(E,L.MEDIA_ERR_ENCRYPTED,!0);S.errorCategory=J.DRM,S.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,S)},g=()=>{d.removeEventListener("webkitkeymessage",v),d.removeEventListener("webkitkeyerror",f),t.removeEventListener("teardown",g),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",g),o=null;try{d.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",g,{once:!0}),d.addEventListener("webkitkeymessage",v),d.addEventListener("webkitkeyerror",f),t.addEventListener("teardown",g),o=g},m=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",m),o==null||o();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",m,{once:!0}),m},Dg=(t,e)=>{let i=xg(Mg(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,u=m=>{o.set(m,l),l+=m.byteLength},p=m=>{let c=new DataView(o.buffer),d=m.byteLength;c.setUint32(l,d,!0),l+=4,u(m)};return u(a),p(r),p(n),o},Mg=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function xg(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var Og=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async m=>{try{let c=m.initDataType;if(c!=="skd"){console.error(`Received unexpected initialization data type "${c}"`);return}t.mediaKeys||await l(c);let d=m.initData;if(d==null){console.error(`Could not start encrypted playback due to missing initData in ${m.type} event`);return}await u(c,d)}catch(c){a(t,c);return}},l=async m=>{let c=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[m],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(v=>(r(),v)).catch(()=>{let v=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),f=new L(v,L.MEDIA_ERR_ENCRYPTED,!0);f.errorCategory=J.DRM,f.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,f)});if(!c)return;let d=await c.createMediaKeys();try{let v=await e();await d.setServerCertificate(v).catch(()=>{let f=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),g=new L(f,L.MEDIA_ERR_ENCRYPTED,!0);return g.errorCategory=J.DRM,g.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(g)})}catch(v){a(t,v);return}await t.setMediaKeys(d)},u=async(m,c)=>{let d=t.mediaKeys.createSession(),v=async y=>{let b=y.message,E=await i(b);try{await d.update(E)}catch{let S=O("Failed to update DRM license. This may be an issue with the player or your protected content."),M=new L(S,L.MEDIA_ERR_ENCRYPTED,!0);M.errorCategory=J.DRM,M.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,M)}},f=()=>{let y=b=>{let E;if(b==="internal-error"){let S=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");E=new L(S,L.MEDIA_ERR_ENCRYPTED,!0),E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_CDM_ERROR}else if(b==="output-restricted"||b==="output-downscaled"){let S=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");E=new L(S,L.MEDIA_ERR_ENCRYPTED,!1),E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}E&&a(t,E)};d.keyStatuses.forEach(b=>y(b))};d.addEventListener("keystatuseschange",f),d.addEventListener("message",v);let g=async()=>{d.removeEventListener("keystatuseschange",f),d.removeEventListener("message",v),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",g),t.removeEventListener("teardown",g),await d.close().catch(y=>{console.warn("There was an error when closing EME session",y)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",g,{once:!0}),t.addEventListener("teardown",g,{once:!0}),s=g,await d.generateRequest(m,c).catch(async y=>{if(y.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n==null||n();else{let b=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),E=new L(b,L.MEDIA_ERR_ENCRYPTED,!0);return E.errorCategory=J.DRM,E.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",y),Promise.reject(E)}})},p=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",p),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",p,{once:!0}),p},Ng=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,u=!1,p=!1,m=!1,c=()=>{o!=null&&(clearTimeout(o),o=void 0)},d=I=>(I==null?void 0:I.muxCode)===P.NETWORK_RECONNECTING,v=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,f=()=>{let I=a.get(e);if(d(I==null?void 0:I.error))return;let H=new L(O("Attempting to reconnect..."),L.MEDIA_ERR_NETWORK,!1);H.errorCategory=J.VIDEO,H.muxCode=P.NETWORK_RECONNECTING,I&&(I.error=H),e.dispatchEvent(new CustomEvent("error",{detail:H}))},g=()=>{if(!m&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},y=()=>{u=!1,p=!0,c();let I=new L(O("Network error, try reloading."),L.MEDIA_ERR_NETWORK,!0);I.errorCategory=J.VIDEO,I.reload=!0,r(e,I)},b=()=>{if(o!=null||u)return;if(l>=n){y();return}u=!0;let I=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,g()},I)},E=()=>{let I=a.get(e);!(I!=null&&I.networkError)||p||v()&&(f(),b())},S=()=>{let I=a.get(e);I&&(I.networkError=!0),u=!1,E()},M=()=>{let I=a.get(e);I!=null&&I.networkError&&(l=0,p=!1,c(),u=!0,g())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",M);let C=()=>{let I=a.get(e);I&&(!I.networkError&&!d(I.error)||(I.networkError=!1,u=!1,l=0,p=!1,c(),I.error&&(I.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(K.Events.FRAG_BUFFERED,C),fe(e,"playing",()=>{let I=a.get(e);I!=null&&I.networkError&&(u=!1,l=0,p=!1,c(),I.error&&(I.error=null))}),fe(e,"waiting",E),e.addEventListener("teardown",()=>{var I;(I=globalThis.removeEventListener)==null||I.call(globalThis,"online",M),c()},{once:!0}),{handleHlsError:(I,H)=>{var q,F;if(I.type!==K.ErrorTypes.NETWORK_ERROR)return!1;let W=(F=(q=I.response)==null?void 0:q.code)!=null?F:0;return(H.muxCode===P.NETWORK_OFFLINE||W===0||W>=500)&&I.fatal?(S(),!0):!1},onManifestLoaded:()=>{m=!0,u=!1,c()}}},ws={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},Pg=t=>{if(t.includes("fps"))return ws.FAIRPLAY;if(t.includes("playready"))return ws.PLAYREADY;if(t.includes("widevine"))return ws.WIDEVINE},$g=(t,e)=>{let i=tg(t);if(!i)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(_d(i)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let a;try{a=Wu(i,e)}catch(r){return Promise.reject(r)}return fetch(a).then(r=>r.status!==200?Promise.reject(r):r.text())},Ug=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=Bg(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Hg=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Bg(t){let e=[...t.matchAll(Hg)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var Wg=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(u=>u.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=wp(n),o=Ip(n),l;if(s===ee.LIVE){let u=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(u)l=+u.split(":")[1].split("=")[1]*2;else{let p=r.find(c=>c.startsWith("#EXT-X-TARGETDURATION")),m=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(m??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},Fg=async(t,e)=>{if(e===ki.MP4)return{streamType:ee.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===ki.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await $g(a,i.url);return{...Ug(a),...Wg(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Kg=async(t,e,i=Tl({src:t}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:u,sessionData:p}=await Fg(t,i),m=p==null?void 0:p["com.apple.hls.chapters"];(m!=null&&m.URI||m!=null&&m.VALUE.toLocaleLowerCase().startsWith("http"))&&qu((a=m.URI)!=null?a:m.VALUE,e),((r=te.get(e))!=null?r:{}).liveEdgeStartOffset=u,((n=te.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=te.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},qu=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n==null?void 0:n[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=te.get(e))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");e.dispatchEvent(o)}catch(r){console.error(r)}},Vg=t=>{var e;let i=t.type,a=wp(i),r=Ip(i),n,s=!!((e=t.partList)!=null&&e.length);return a===ee.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},qg=(t,e,i)=>{var a,r,n,s,o,l,u,p;let{streamType:m,targetLiveWindow:c,liveEdgeStartOffset:d,lowLatency:v}=Vg(t);if(m===ee.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let f=Object.freeze({get length(){return e.seekable.length},start(g){return e.seekable.start(g)},end(g){var y;return g>this.length||g<0||Number.isFinite(e.duration)?e.seekable.end(g):(y=i.liveSyncPosition)!=null?y:e.seekable.end(g)}});((o=te.get(e))!=null?o:{}).seekable=f}((l=te.get(e))!=null?l:{}).liveEdgeStartOffset=d,((u=te.get(e))!=null?u:{}).targetLiveWindow=c,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=te.get(e))!=null?p:{}).streamType=m,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},xh,Oh,Pp=(Oh=(xh=globalThis==null?void 0:globalThis.navigator)==null?void 0:xh.userAgent)!=null?Oh:"",Nh,Ph,$h,Yg=($h=(Ph=(Nh=globalThis==null?void 0:globalThis.navigator)==null?void 0:Nh.userAgentData)==null?void 0:Ph.platform)!=null?$h:"",Gg=Pp.toLowerCase().includes("android")||["x11","android"].some(t=>Yg.toLowerCase().includes(t)),zg=t=>/^((?!chrome|android).)*safari/i.test(Pp)&&!!t.canPlayType("application/vnd.apple.mpegurl"),te=new WeakMap,Si="mux.com",Uh,Hh,$p=(Hh=(Uh=K).isSupported)==null?void 0:Hh.call(Uh),Qg=t=>Gg||!zg(t),Yu=()=>{if(typeof window<"u")return Uu.utils.now()},jg=Uu.utils.generateUUID,kd=({playbackId:t,customDomain:e=Si,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:u,tokens:{playback:p=u}={},extraSourceParams:m={}}={})=>{if(!t)return;let[c,d=""]=Bu(t),v=new URL(`https://stream.${e}/${c}.m3u8${d}`);return p||v.searchParams.has("token")?(v.searchParams.forEach((f,g)=>{g!="token"&&v.searchParams.delete(g)}),p&&v.searchParams.set("token",p)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(m).forEach(([f,g])=>{g!=null&&v.searchParams.set(f,g)})),v.toString()},Al=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Gu=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},Zg=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:Yp(t)&&(a=(i=Al(t.playbackId))!=null?i:Gu(t.src))!=null?a:t.src},Up=t=>{var e;return(e=te.get(t))==null?void 0:e.error},Xg=t=>{var e;return(e=te.get(t))==null?void 0:e.metadata},Sd=t=>{var e,i;return(i=(e=te.get(t))==null?void 0:e.streamType)!=null?i:ee.UNKNOWN},Jg=t=>{var e,i;return(i=(e=te.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},zu=t=>{var e,i;return(i=(e=te.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},e0=t=>{var e;let i=(e=te.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=zu(t);return a.length?a.end(a.length-1)-i:Number.NaN},t0=t=>{var e;return(e=te.get(t))==null?void 0:e.coreReference},Qu=.034,i0=(t,e,i=Qu)=>Math.abs(t-e)<=i,Hp=(t,e,i=Qu)=>t>e||i0(t,e,i),a0=(t,e=Qu)=>t.paused&&Hp(t.currentTime,t.duration,e),Bp=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(m=>!!m.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,u=t.buffered.start(t.buffered.length-1),p=t.buffered.end(t.buffered.length-1);return l>u&&l<p},Wp=(t,e)=>t.ended||t.loop?t.ended:e&&Bp(t,e)?!0:a0(t),Fp=(t,e,i)=>{Kp(e,i,t);let{metadata:a={}}=t,{view_session_id:r=jg()}=a,n=Zg(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=c=>{var d;(d=e.mux)==null||d.emit("hb",{view_drm_type:c})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var c;let d=!e.paused,v=e.currentTime;t.useWebkitFairplay=!0;let f=t.muxDataKeepSession;t.muxDataKeepSession=!0;let g=(c=te.get(e))==null?void 0:c.coreReference;Fp(t,e,g),t.muxDataKeepSession=f,t.useWebkitFairplay=!1,d&&await e.play().then(()=>{e.currentTime=v}).catch(()=>{}),e.currentTime=v},te.set(e,{retryCount:0});let o=o0(t,e),l=cg(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?K:void 0}):Gp(t,e,o),p0(t,e,o),_g(e),gg(e);let u=ug(t,e,o);hg(t,e,o),mg(t,e,o);let p={engine:o,setAutoplay:u,setPreload:l},m=te.get(e);return m&&(m.coreReference=p),p},r0=()=>{let t=new Date(0).toUTCString(),e=new Set(["muxData"]);document.cookie.split(";").forEach(i=>{let a=i.split("=")[0].trim();a.startsWith("muxData")&&e.add(a)}),e.forEach(i=>{document.cookie=`${i}=;expires=${t};path=/`})},Zl=new WeakMap,n0=(t,e,i)=>{e&&(e.mux&&(e.mux.deleted||e.mux.destroy(),delete e.mux),!Zl.has(e)&&Zl.set(e,Promise.resolve().then(()=>{var a,r;Zl.delete(e);let n=te.get(e);if(!n||e.mux&&!e.mux.deleted)return;let s=(r=(a=n.coreReference)!=null?a:i)==null?void 0:r.engine;Gp(t,e,s)})))},s0=(t,e,i)=>{if(!e)return;let a=!!t.disableCookies,r=te.get(e);!r||r.muxDataDisableCookies===a||(n0(t,e,i),a&&Promise.resolve().then(()=>{t.disableCookies&&r0()}))},Kp=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",Qp),t.removeEventListener("error",wd),t.removeEventListener("durationchange",zp),te.delete(t),t.dispatchEvent(new Event("teardown")))};function Vp(t,e){var i;let a=Tl(t);if(a!==ki.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===ii.MSE,o=n===ii.NATIVE,l=$p&&(s||Qg(e));return r&&(o||!l)}var o0=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:u}=t,p=Tl(t)===ki.M3U8,m=Vp(t,e);if(p&&!m&&$p){let c={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...u!=null?{abrEwmaDefaultEstimate:u*1e3}:{}},d=l0(a),v=d0(t),f=[Xr.QUERY,Xr.HEADER].includes(s)?{useHeaders:s===Xr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,g=m0(t),y=new K({debug:i,startPosition:r,cmcd:f,xhrSetup:(b,E)=>{var S,M;if(s&&s!==Xr.QUERY)return;let C=Wu(E);if(!C.searchParams.has("CMCD"))return;let I=((M=(S=C.searchParams.get("CMCD"))==null?void 0:S.split(","))!=null?M:[]).filter(H=>H.startsWith("sid")||H.startsWith("cid")).join(",");C.searchParams.set("CMCD",I),b.open("GET",C)},...c,...g,...d,...v,...o});return g.capLevelController===Ad&&l!==void 0&&Ad.setMaxAutoResolution(y,l),y.on(K.Events.MANIFEST_PARSED,async function(b,E){var S,M;let C=(S=E.sessionData)==null?void 0:S["com.apple.hls.chapters"];(C!=null&&C.URI||C!=null&&C.VALUE.toLocaleLowerCase().startsWith("http"))&&qu((M=C==null?void 0:C.URI)!=null?M:C==null?void 0:C.VALUE,e)}),y}},l0=t=>t===ee.LIVE?{backBufferLength:8}:{},d0=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=Al(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:Is(t,"fairplay"),serverCertificateUrl:qp(t,"fairplay")},"com.widevine.alpha":{licenseUrl:Is(t,"widevine")},"com.microsoft.playready":{licenseUrl:Is(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let u=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:u}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=Pg(n);return a==null||a(l),o}))}},u0=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},c0=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},h0=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>u0(qp(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=Wo(a,J.DRM,t);return console.error("mediaError",r==null?void 0:r.message,r==null?void 0:r.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>c0(a,Is(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=Wo(r,J.DRM,t);return console.error("mediaError",n==null?void 0:n.message,n==null?void 0:n.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:gi,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,ws.FAIRPLAY)}};if(t.useWebkitFairplay)Cg(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=Og(a)}},Is=({playbackId:t,tokens:{drm:e}={},customDomain:i=Si},a)=>{let r=Al(t);return`https://license.${i.toLocaleLowerCase().endsWith(Si)?i:Si}/license/${a}/${r}?token=${e}`},qp=({playbackId:t,tokens:{drm:e}={},customDomain:i=Si},a)=>{let r=Al(t);return`https://license.${i.toLocaleLowerCase().endsWith(Si)?i:Si}/appcert/${a}/${r}?token=${e}`},Yp=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(Si)||!!i&&r.includes(i.toLocaleLowerCase())},m0=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=Ad,i.capLevelToPlayerSize=!0):i.capLevelController=SE,i},Gp=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Uu,muxDataSDKOptions:o={}}=t,l=Yp(t),u=te.get(e);if(u&&(u.muxDataDisableCookies=!!t.disableCookies),!n&&(r||l)){let{playerInitTime:p,playerSoftwareName:m,playerSoftwareVersion:c,beaconCollectionDomain:d,debug:v,disableCookies:f}=t,g={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},y=b=>typeof b.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(b):b;s.monitor(e,{debug:v,beaconCollectionDomain:d,hlsjs:i,Hls:i?K:void 0,automaticErrorTracking:!1,errorTranslator:y,disableCookies:f,...o,data:{...r?{env_key:r}:{},player_software_name:m,player_software:m,player_software_version:c,player_init_time:p,...g}})}},p0=(t,e,i)=>{var a,r,n;let s=Vp(t,e),{src:o,customDomain:l=Si}=t,u=()=>{e.ended||t.disablePseudoEnded||!Wp(e,i)||(Bp(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},p,m,c=()=>{let d=zu(e),v,f;d.length>0&&(v=d.start(0),f=d.end(0)),(m!==f||p!==v)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),p=v,m=f};if(fe(e,"durationchange",c),e&&s){let d=Tl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let g=Gu(o),y=new URL(`https://stream.${l}/${g}/metadata.json`);qu(y.toString(),e)}let v=()=>{if(Sd(e)!==ee.LIVE||Number.isFinite(e.duration))return;let g=setInterval(c,1e3);e.addEventListener("teardown",()=>{clearInterval(g)},{once:!0}),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(g)})},f=async()=>Kg(o,e,d).then(v).catch(g=>{if(g instanceof Response){let y=Wo(g,J.VIDEO,t);if(y){gi(e,y);return}}});if(e.preload==="none"){let g=()=>{f(),e.removeEventListener("loadedmetadata",y)},y=()=>{f(),e.removeEventListener("play",g)};fe(e,"play",g,{once:!0}),fe(e,"loadedmetadata",y,{once:!0})}else f();(a=t.tokens)!=null&&a.drm?h0(t,e):fe(e,"encrypted",()=>{let g=O("Attempting to play DRM-protected content without providing a DRM token."),y=new L(g,L.MEDIA_ERR_ENCRYPTED,!0);y.errorCategory=J.DRM,y.muxCode=P.ENCRYPTED_MISSING_TOKEN,gi(e,y)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=te.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",zp,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",Qp),e.addEventListener("error",wd),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(v=>{v.remove()})},{once:!0}),fe(e,"pause",u),fe(e,"seeked",u),fe(e,"play",()=>{e.ended||Hp(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(K.Events.LEVEL_LOADED,(f,g)=>{qg(g.details,e,i),c(),Sd(e)===ee.LIVE&&!Number.isFinite(e.duration)&&(i.on(K.Events.LEVEL_UPDATED,c),fe(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(K.Events.LEVELS_UPDATED,c)}))});let d=(n=t.maxReconnectRetries)!=null?n:0,v=d>0?Ng({hls:i,mediaEl:e,src:o,muxMediaState:te,saveAndDispatchError:gi,maxRetries:d}):void 0;i.on(K.Events.ERROR,(f,g)=>{var y,b;let E=v0(g,t);if(E.muxCode===P.NETWORK_NOT_READY){let S=(y=te.get(e))!=null?y:{},M=(b=S.retryCount)!=null?b:0;if(M<6){let C=M===0?5e3:6e4,I=new L(`Retrying in ${C/1e3} seconds...`,E.code,E.fatal);Object.assign(I,E),gi(e,I);let H=setTimeout(()=>{S.retryCount=M+1,g.details==="manifestLoadError"&&g.url&&i.loadSource(g.url)},C);e.addEventListener("teardown",()=>clearTimeout(H),{once:!0});return}else{S.retryCount=0;let C=new L("Network error, try reloading.",E.code,E.fatal);Object.assign(C,E),C.reload=!0,gi(e,C);return}}v!=null&&v.handleHlsError(g,E)||gi(e,E)}),i.on(K.Events.MANIFEST_LOADED,()=>{v==null||v.onManifestLoaded();let f=te.get(e);f!=null&&f.networkError||f&&f.error&&(f.error=null,f.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",wd),fe(e,"waiting",u),pg(t,i),vg(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function zp(t){var e;let i=t.target,a=(e=te.get(i))==null?void 0:e.startTime;if(a&&Jb(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Qp(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new L(i,a);if(e.src&&a===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=Up(e))!=null?n:e.error;(s==null?void 0:s.code)===L.MEDIA_ERR_SRC_NOT_SUPPORTED&&gi(e,r)},500);return}if(e.src&&(a!==L.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}gi(e,r)}function gi(t,e){var i;e.fatal&&(((i=te.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function wd(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof L))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=te.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var v0=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[K.ErrorTypes.NETWORK_ERROR]:L.MEDIA_ERR_NETWORK,[K.ErrorTypes.MEDIA_ERROR]:L.MEDIA_ERR_DECODE,[K.ErrorTypes.KEY_SYSTEM_ERROR]:L.MEDIA_ERR_ENCRYPTED},s=p=>[K.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?L.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===K.ErrorTypes.KEY_SYSTEM_ERROR)return J.DRM;if(p.type===K.ErrorTypes.NETWORK_ERROR)return J.VIDEO},l,u=s(t);if(u===L.MEDIA_ERR_NETWORK&&t.response){let p=(i=o(t))!=null?i:J.VIDEO;l=(a=Wo(t.response,p,e,t.fatal))!=null?a:new L("",u,t.fatal)}else if(u===L.MEDIA_ERR_ENCRYPTED)if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=O("Attempting to play DRM-protected content without providing a DRM token.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_MISSING_TOKEN}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=O("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=O("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=O("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=O("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=O("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_CDM_ERROR}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=O("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new L(p,L.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}else l=new L(t.error.message,L.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=J.DRM,l.muxCode=P.ENCRYPTED_ERROR;else l=new L("",u,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},jp=t=>{throw TypeError(t)},ju=(t,e,i)=>e.has(t)||jp("Cannot "+i),Ee=(t,e,i)=>(ju(t,e,"read from private field"),i?i.call(t):e.get(t)),ct=(t,e,i)=>e.has(t)?jp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ct=(t,e,i,a)=>(ju(t,e,"write to private field"),e.set(t,i),i),os=(t,e,i)=>(ju(t,e,"access private method"),i),f0=()=>{try{return"0.31.4"}catch{}return"UNKNOWN"},E0=f0(),_0=()=>E0,b0=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,_={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},g0=Object.values(_),Bh=_0(),Wh="mux-video",en,Rs,tn,Ls,Cs,Ds,Ms,xs,an,Os,ot,xi,Ns,rn,y0=class extends ns{constructor(){super(),ct(this,ot),ct(this,en),ct(this,Rs),ct(this,tn,{}),ct(this,Ls,{}),ct(this,Cs),ct(this,Ds),ct(this,Ms),ct(this,xs),ct(this,an,""),ct(this,Os,e=>{var i;let a=Xg(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(Ct(this,an,"default"),this.updateLogo())}),ct(this,Ns),Ct(this,Rs,Yu())}static get NAME(){return Wh}static get VERSION(){return Bh}static get observedAttributes(){var e;return[...g0,...(e=ns.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?b0:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${ns.getTemplateHTML(e)}
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
        ${this.getLogoHTML((i=e[_.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Bo.includes(e)?this.setAttribute(_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Bo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?+this.getAttribute(_.PLAYER_INIT_TIME):Ee(this,Rs)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ee(this,Ms))!=null?e:Wh}set playerSoftwareName(e){Ct(this,Ms,e)}get playerSoftwareVersion(){var e;return(e=Ee(this,Ds))!=null?e:Bh}set playerSoftwareVersion(e){Ct(this,Ds,e)}get _hls(){var e;return(e=Ee(this,ot,xi))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=Up(this.nativeEl))!=null?e:null}get errorTranslator(){return Ee(this,xs)}set errorTranslator(e){Ct(this,xs,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(_.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(_.TYPE,e):this.removeAttribute(_.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(_.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG))}get disableTracking(){return this.hasAttribute(_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(_.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(_.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(_.MAX_RECONNECT_RETRIES):this.setAttribute(_.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(_.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(_.START_TIME):this.setAttribute(_.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(_.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(_.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(_.PLAYBACK_ID)?this.getAttribute(_.PLAYBACK_ID):(e=Gu(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(_.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(_.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(_.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(_.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:Ee(this,Ns)}set capRenditionToPlayerSize(e){Ct(this,Ns,e)}get drmToken(){var e;return(e=this.getAttribute(_.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(_.DRM_TOKEN,e):this.removeAttribute(_.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(_.PLAYBACK_TOKEN))return(e=this.getAttribute(_.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(_.PLAYBACK_ID)){let[,n]=Bu((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(_.PLAYBACK_TOKEN,e):this.removeAttribute(_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(_.PLAYBACK_TOKEN),i=this.getAttribute(_.DRM_TOKEN);return{...Ee(this,Ls),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Ct(this,Ls,e??{})}get ended(){return Wp(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(_.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(_.ENV_KEY,e):this.removeAttribute(_.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(_.STREAM_TYPE))!=null?e:Sd(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(_.STREAM_TYPE,e):this.removeAttribute(_.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(_.TARGET_LIVE_WINDOW)?+this.getAttribute(_.TARGET_LIVE_WINDOW):Jg(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(_.TARGET_LIVE_WINDOW):this.setAttribute(_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return e0(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(_.LIVE_EDGE_OFFSET))return+this.getAttribute(_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(_.LIVE_EDGE_OFFSET):this.setAttribute(_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return zu(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),Dp(this.nativeEl,e)}get activeCuePoint(){return Mp(this.nativeEl)}get cuePoints(){return Eg(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Op(this.nativeEl,e)}get activeChapter(){return Np(this.nativeEl)}get chapters(){return bg(this.nativeEl)}getStartDate(){return yg(this.nativeEl,this._hls)}get currentPdt(){return Tg(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===ii.MSE||e===ii.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ii.MSE||e===ii.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![_.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ee(this,tn)}}set metadata(e){Ct(this,tn,e??{}),this.mux&&this.mux.emit("hb",Ee(this,tn))}get _hlsConfig(){return Ee(this,Cs)}set _hlsConfig(e){Ct(this,Cs,e)}get logo(){var e;return(e=this.getAttribute(_.LOGO))!=null?e:Ee(this,an)}set logo(e){e?this.setAttribute(_.LOGO,e):this.removeAttribute(_.LOGO)}load(){Fp(this,this.nativeEl,Ee(this,ot,xi))}unload(){Kp(this.nativeEl,Ee(this,ot,xi),this)}attributeChangedCallback(e,i,a){var r,n;switch(ns.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case _.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case _.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?os(this,ot,rn).call(this):s&&!o?this.unload():s&&o&&(this.unload(),os(this,ot,rn).call(this));break}case"autoplay":if(a===i)break;(r=Ee(this,ot,xi))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ee(this,ot,xi))==null||n.setPreload(a);break;case _.PLAYBACK_ID:case _.CUSTOM_DOMAIN:case _.MAX_RESOLUTION:case _.MIN_RESOLUTION:case _.RENDITION_ORDER:case _.PROGRAM_START_TIME:case _.PROGRAM_END_TIME:case _.ASSET_START_TIME:case _.ASSET_END_TIME:case _.PLAYBACK_TOKEN:this.hasAttribute(_.PLAYBACK_ID)&&(this.src=kd(this));break;case _.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case _.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case _.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case _.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case _.LOGO:(a==null||a!==i)&&this.updateLogo();break;case _.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),os(this,ot,rn).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case _.DISABLE_COOKIES:{(a==null||a!==i)&&s0(this,this.nativeEl,Ee(this,ot,xi));break}case _.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ee(this,an)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",Ee(this,Os)),this.nativeEl&&this.src&&!Ee(this,ot,xi)&&os(this,ot,rn).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",Ee(this,Os)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};en=new WeakMap,Rs=new WeakMap,tn=new WeakMap,Ls=new WeakMap,Cs=new WeakMap,Ds=new WeakMap,Ms=new WeakMap,xs=new WeakMap,an=new WeakMap,Os=new WeakMap,ot=new WeakSet,xi=function(){return t0(this.nativeEl)},Ns=new WeakMap,rn=async function(){Ee(this,en)||(await Ct(this,en,Promise.resolve()),Ct(this,en,null),this.load())};const Zi=new WeakMap;class Xl extends Error{}class T0 extends Error{}const A0=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],k0=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function S0(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function w0(){return globalThis.chrome}function I0(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function zi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function Zu(){var t;return(t=zi())==null?void 0:t.getCurrentSession()}function Xu(){var t;return(t=Zu())==null?void 0:t.getSessionObj().media[0]}function R0(t){return new Promise((e,i)=>{Xu().editTracksInfo(t,e,i)})}function L0(t){return new Promise((e,i)=>{Xu().getStatus(t,e,i)})}function Fh(t){return zi().setOptions({...Zp(),...t})}function Zp(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Kh(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function C0(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function D0(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function Vh(t){const i=t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="");return i==null?void 0:i.trim()}async function M0(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return A0.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function x0(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=D0(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=Vh(i),n=Kh(r),s=C0(e);let o=n;if(s)try{const l=new URL(s,t).toString(),u=await(await fetch(l)).text(),p=Vh(u);o=Kh(p)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const Ps=new k0,ci=new WeakSet;let Re;S0(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}Re||(Re=cast.framework,zi().addEventListener(Re.CastContextEventType.CAST_STATE_CHANGED,r=>{Ps.forEach(n=>{var s,o;return(o=(s=Zi.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),zi().addEventListener(Re.CastContextEventType.SESSION_STATE_CHANGED,r=>{Ps.forEach(n=>{var s,o;return(o=(s=Zi.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),Ps.forEach(r=>{var n,s;return(s=(n=Zi.get(r)).init)==null?void 0:s.call(n)}))});let qh=0;var Q,kr,ze,xt,Ta,Aa,Gi,bl,ts,oe,la,Xp,Jp,Id,ev,Rd,tv,Ld;class O0 extends EventTarget{constructor(i){super();We(this,oe);We(this,Q);We(this,kr);We(this,ze);We(this,xt);We(this,Ta,"disconnected");We(this,Aa,!1);We(this,Gi,new Set);We(this,bl,new WeakMap);We(this,ts,()=>ut(this,oe,Ld).call(this));je(this,Q,i),Ps.add(this),Zi.set(this,{init:()=>ut(this,oe,Rd).call(this),onCastStateChanged:()=>ut(this,oe,Id).call(this),onSessionStateChanged:()=>ut(this,oe,ev).call(this),getCastPlayer:()=>A(this,oe,la)}),ut(this,oe,Rd).call(this)}destroy(){var i,a,r;(a=(i=A(this,Q))==null?void 0:i.textTracks)==null||a.removeEventListener("change",A(this,ts)),A(this,xt)&&((r=A(this,ze))!=null&&r.controller)&&Object.entries(A(this,xt)).forEach(([n,s])=>{A(this,ze).controller.removeEventListener(n,s)}),A(this,Q)&&ci.delete(A(this,Q)),je(this,kr,!1)}get state(){return A(this,Ta)}async watchAvailability(i){if(A(this,Q).disableRemotePlayback)throw new Xl("disableRemotePlayback attribute is present.");return A(this,bl).set(i,++qh),A(this,Gi).add(i),queueMicrotask(()=>i(ut(this,oe,Jp).call(this))),qh}async cancelWatchAvailability(i){if(A(this,Q).disableRemotePlayback)throw new Xl("disableRemotePlayback attribute is present.");i?A(this,Gi).delete(i):A(this,Gi).clear()}async prompt(){var a,r,n,s;if(A(this,Q).disableRemotePlayback)throw new Xl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new T0("The RemotePlayback API is disabled on this platform.");const i=ci.has(A(this,Q));ci.add(A(this,Q)),Fh(A(this,Q).castOptions),Object.entries(A(this,xt)).forEach(([o,l])=>{A(this,ze).controller.addEventListener(o,l)});try{await zi().requestSession()}catch(o){if(i||ci.delete(A(this,Q)),o==="cancel")return;throw new Error(o)}(s=(n=Zi.get(A(this,Q)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Q=new WeakMap,kr=new WeakMap,ze=new WeakMap,xt=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,Gi=new WeakMap,bl=new WeakMap,ts=new WeakMap,oe=new WeakSet,la=function(){if(ci.has(A(this,Q)))return A(this,ze)},Xp=function(){ci.has(A(this,Q))&&(Object.entries(A(this,xt)).forEach(([i,a])=>{A(this,ze).controller.removeEventListener(i,a)}),ci.delete(A(this,Q)),A(this,Q).muted=A(this,ze).isMuted,A(this,Q).currentTime=A(this,ze).savedPlayerState.currentTime,A(this,ze).savedPlayerState.isPaused===!1&&A(this,Q).play())},Jp=function(){var a;const i=(a=zi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Id=function(){const i=zi().getCastState();if(ci.has(A(this,Q))&&i==="CONNECTING"&&(je(this,Ta,"connecting"),this.dispatchEvent(new Event("connecting"))),!A(this,Aa)&&(i!=null&&i.includes("CONNECT"))){je(this,Aa,!0);for(let a of A(this,Gi))a(!0)}else if(A(this,Aa)&&(!i||i==="NO_DEVICES_AVAILABLE")){je(this,Aa,!1);for(let a of A(this,Gi))a(!1)}},ev=async function(){var a;const{SESSION_RESUMED:i}=Re.SessionState;if(zi().getSessionState()===i&&A(this,Q).castSrc===((a=Xu())==null?void 0:a.media.contentId)){ci.add(A(this,Q)),Object.entries(A(this,xt)).forEach(([r,n])=>{A(this,ze).controller.addEventListener(r,n)});try{await L0(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}A(this,xt)[Re.RemotePlayerEventType.IS_PAUSED_CHANGED](),A(this,xt)[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Rd=function(){!Re||A(this,kr)||(je(this,kr,!0),Fh(A(this,Q).castOptions),A(this,Q).textTracks.addEventListener("change",A(this,ts)),ut(this,oe,Id).call(this),je(this,ze,new Re.RemotePlayer),new Re.RemotePlayerController(A(this,ze)),je(this,xt,{[Re.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(je(this,Ta,"connected"),this.dispatchEvent(new Event("connect"))):(ut(this,oe,Xp).call(this),je(this,Ta,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[Re.RemotePlayerEventType.DURATION_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("durationchange"))},[Re.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("volumechange"))},[Re.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=A(this,oe,la))!=null&&i.isMediaLoaded&&A(this,Q).dispatchEvent(new Event("timeupdate"))},[Re.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event("resize"))},[Re.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{A(this,Q).dispatchEvent(new Event(this.paused?"pause":"play"))},[Re.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=A(this,oe,la))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&A(this,Q).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=A(this,oe,la))==null?void 0:a.playerState]))},[Re.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=A(this,oe,la))!=null&&i.isMediaLoaded&&(await Promise.resolve(),ut(this,oe,tv).call(this))}}))},tv=function(){ut(this,oe,Ld).call(this)},Ld=async function(){var c,d,v;if(!A(this,oe,la))return;const a=(((c=A(this,ze).mediaInfo)==null?void 0:c.tracks)??[]).filter(({type:f})=>f===chrome.cast.media.TrackType.TEXT),r=[...A(this,Q).textTracks].filter(({kind:f})=>f==="subtitles"||f==="captions"),n=a.map(({language:f,name:g,trackId:y})=>{const{mode:b}=r.find(E=>E.language===f&&E.label===g)??{};return b?{mode:b,trackId:y}:!1}).filter(Boolean),o=n.filter(({mode:f})=>f!=="showing").map(({trackId:f})=>f),l=n.find(({mode:f})=>f==="showing"),u=((v=(d=Zu())==null?void 0:d.getSessionObj().media[0])==null?void 0:v.activeTrackIds)??[];let p=u;if(u.length&&(p=p.filter(f=>!o.includes(f))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((f,g)=>f.length===g.length&&f.every(y=>g.includes(y)))(u,p))try{const f=new chrome.cast.media.EditTracksInfoRequest(p);await R0(f)}catch(f){console.error(f)}};const N0=t=>{var e,i,a,r,n,s,j,iv;return e=class extends t{constructor(){super(...arguments);We(this,s);We(this,i,{paused:!1});We(this,a,Zp());We(this,r);We(this,n)}get remote(){return A(this,n)?A(this,n):w0()?this.isConnected?(this.disableRemotePlayback||I0(),Zi.set(this,{loadOnPrompt:()=>ut(this,s,iv).call(this)}),je(this,n,new O0(this))):void 0:super.remote}disconnectedCallback(){var m,c;(m=A(this,n))==null||m.destroy(),je(this,n,null),Zi.delete(this),(c=super.disconnectedCallback)==null||c.call(this)}attributeChangedCallback(m,c,d){if(super.attributeChangedCallback(m,c,d),m==="cast-receiver"&&d){A(this,a).receiverApplicationId=d;return}if(A(this,s,j))switch(m){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var y;if(!A(this,s,j))return super.load();const m=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);m.customData=this.castCustomData;const c=[...this.querySelectorAll("track")].filter(({kind:b,src:E})=>E&&(b==="subtitles"||b==="captions")),d=[];let v=0;if(c.length&&(m.tracks=c.map(b=>{const E=++v;d.length===0&&b.track.mode==="showing"&&d.push(E);const S=new chrome.cast.media.Track(E,chrome.cast.media.TrackType.TEXT);return S.trackContentId=b.src,S.trackContentType="text/vtt",S.subtype=b.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,S.name=b.label,S.language=b.srclang,S})),this.castStreamType==="live"?m.streamType=chrome.cast.media.StreamType.LIVE:m.streamType=chrome.cast.media.StreamType.BUFFERED,m.metadata=new chrome.cast.media.GenericMediaMetadata,m.metadata.title=this.title,m.metadata.images=[{url:this.poster}],await M0(this.castSrc)){m.contentType||(m.contentType="application/x-mpegURL");const{videoFormat:b,audioFormat:E}=await x0(this.castSrc);(b==null?void 0:b.includes("m4s"))||(b==null?void 0:b.includes("mp4"))||(b==null?void 0:b.includes("m4a"))?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):E!=null&&E.includes("aac")?(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(b!=null&&b.includes("ts")||E!=null&&E.includes("ts"))&&(m.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,m.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const g=new chrome.cast.media.LoadRequest(m);g.currentTime=super.currentTime??0,g.autoplay=!A(this,i).paused,g.activeTrackIds=d,await((y=Zu())==null?void 0:y.loadMedia(g)),this.dispatchEvent(new Event("volumechange"))}play(){var m;if(A(this,s,j)){A(this,s,j).isPaused&&((m=A(this,s,j).controller)==null||m.playOrPause());return}return super.play()}pause(){var m;if(A(this,s,j)){A(this,s,j).isPaused||(m=A(this,s,j).controller)==null||m.playOrPause();return}super.pause()}get castOptions(){return A(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(m){this.castReceiver!=m&&this.setAttribute("cast-receiver",`${m}`)}get castSrc(){var d;const m=this.currentSrc,c=m!=null&&m.startsWith("blob:")?void 0:m;return this.getAttribute("cast-src")??((d=this.querySelector("source"))==null?void 0:d.src)??c??this.getAttribute("src")??void 0}set castSrc(m){this.castSrc!=m&&this.setAttribute("cast-src",`${m}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(m){this.setAttribute("cast-content-type",`${m}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(m){this.setAttribute("cast-stream-type",`${m}`)}get castCustomData(){return A(this,r)}set castCustomData(m){const c=typeof m;if(!["object","undefined"].includes(c)){console.error(`castCustomData must be nullish or an object but value was of type ${c}`);return}je(this,r,m)}get readyState(){if(A(this,s,j))switch(A(this,s,j).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return A(this,s,j)?A(this,s,j).isPaused:super.paused}get muted(){var m;return A(this,s,j)?(m=A(this,s,j))==null?void 0:m.isMuted:super.muted}set muted(m){var c;if(A(this,s,j)){(m&&!A(this,s,j).isMuted||!m&&A(this,s,j).isMuted)&&((c=A(this,s,j).controller)==null||c.muteOrUnmute());return}super.muted=m}get volume(){var m;return A(this,s,j)?((m=A(this,s,j))==null?void 0:m.volumeLevel)??1:super.volume}set volume(m){var c;if(A(this,s,j)){A(this,s,j).volumeLevel=+m,(c=A(this,s,j).controller)==null||c.setVolumeLevel();return}super.volume=m}get duration(){var m,c;return A(this,s,j)&&((m=A(this,s,j))!=null&&m.isMediaLoaded)?((c=A(this,s,j))==null?void 0:c.duration)??NaN:super.duration}get currentTime(){var m,c;return A(this,s,j)&&((m=A(this,s,j))!=null&&m.isMediaLoaded)?((c=A(this,s,j))==null?void 0:c.currentTime)??0:super.currentTime}set currentTime(m){var c;if(A(this,s,j)){A(this,s,j).currentTime=m,(c=A(this,s,j).controller)==null||c.seek();return}super.currentTime=m}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,j=function(){var m,c;return(c=(m=Zi.get(A(this,n)))==null?void 0:m.getCastPlayer)==null?void 0:c.call(m)},iv=async function(){A(this,i).paused=rs(e.prototype,this,"paused"),rs(e.prototype,this,"pause").call(this),this.muted=rs(e.prototype,this,"muted");try{await this.load()}catch(m){console.error(m)}},Th(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var av=t=>{throw TypeError(t)},rv=(t,e,i)=>e.has(t)||av("Cannot "+i),P0=(t,e,i)=>(rv(t,e,"read from private field"),i?i.call(t):e.get(t)),$0=(t,e,i)=>e.has(t)?av("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),U0=(t,e,i,a)=>(rv(t,e,"write to private field"),e.set(t,i),i),nv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends nv{}globalThis.DocumentFragment=t}var H0=class extends nv{},B0={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(H0)}},W0={customElements:B0},F0=typeof window>"u"||typeof globalThis.customElements>"u",Jl=F0?W0:globalThis,$s,Yh=class extends N0(wE(y0)){constructor(){super(...arguments),$0(this,$s)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=P0(this,$s))!=null?t:this.muxCastCustomData}set castCustomData(t){U0(this,$s,t)}};$s=new WeakMap;Jl.customElements.get("mux-video")||(Jl.customElements.define("mux-video",Yh),Jl.MuxVideoElement=Yh);const x={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},X={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},sv={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},ov=Object.entries(sv),h=ov.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),K0={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},oi=ov.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...K0});Object.entries(oi).reduce((t,[e,i])=>{const a=h[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const V0=Object.entries(h).reduce((t,[e,i])=>{const a=oi[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),ni={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},vr={DISABLED:"disabled",SHOWING:"showing"},ed={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},st={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},bi={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},q0={FULLSCREEN:"fullscreen"};function Y0(t){return t==null?void 0:t.map(z0).join(" ")}function G0(t){return t==null?void 0:t.split(/\s+/).map(Q0)}function z0(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function Q0(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function j0(t){return t==null?void 0:t.map(X0).join(" ")}function Z0(t){return t==null?void 0:t.split(/\s+/).map(J0)}function X0(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function J0(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function e1(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ju(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function lv(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const dv=t=>new Promise(e=>setTimeout(e,t)),t1={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Gh;const In={en:t1};let fr=((Gh=globalThis.navigator)==null?void 0:Gh.language)||"en";const i1=t=>{fr=t},a1=t=>{var e,i,a;const[r]=fr.split("-");return((e=In[fr])==null?void 0:e[t])||((i=In[r])==null?void 0:i[t])||((a=In.en)==null?void 0:a[t])||t},r1=()=>{const[t]=fr.split("-");return In[fr]?fr:In[t]?t:"en"},D=(t,e={})=>a1(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),zh=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Qh=(t,e)=>{const i=D(t===1?zh[e].singular:zh[e].plural);return`${t} ${i}`},Rn=t=>{if(!Ju(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&Qh(s,o)).filter(s=>s).join(", ");return i?D("{time} remaining",{time:n}):e===0?Qh(0,2):n};function Xi(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let uv=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class cv extends uv{}let jh=class extends cv{constructor(){super(...arguments),this.role=null}};class n1{observe(){}unobserve(){}disconnect(){}}const hv={createElement:function(){return new Kn.HTMLElement},createElementNS:function(){return new Kn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Kn={ResizeObserver:n1,document:hv,Node:cv,Element:jh,HTMLElement:class extends jh{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Kn.DocumentFragment}},DocumentFragment:class extends uv{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},mv="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",pv=Object.keys(Kn).every(t=>t in globalThis),T=mv&&!pv?Kn:globalThis,we=mv&&!pv?hv:globalThis.document,Zh=new WeakMap,ec=t=>{let e=Zh.get(t);return e||Zh.set(t,e=new Set),e},vv=new T.ResizeObserver(t=>{for(const e of t)for(const i of ec(e.target))i(e)});function wr(t,e){ec(t).add(e),vv.observe(t)}function Ir(t,e){const i=ec(t);i.delete(e),i.size||vv.unobserve(t)}function dt(t){const e={};for(const i of t)e[i.name]=i.value;return e}function et(t){var e;return(e=Cd(t))!=null?e:Mr(t,"media-controller")}function Cd(t){var e;const{MEDIA_CONTROLLER:i}=X,a=t.getAttribute(i);if(a)return(e=kl(t))==null?void 0:e.getElementById(a)}const fv=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},s1=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Ev=(t,e)=>s1(t,e)[0],Li=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Li(t,e.getRootNode().host),Mr=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Mr(t.getRootNode().host,e)};function tc(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=tc(i.shadowRoot))!=null?e:i:null}function kl(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function _v(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function o1(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Le(t,e){const i=l1(t,a=>a===e);return i||ic(t,e)}function l1(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function ic(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];if(!(n!=null&&n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n==null?void 0:n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function se(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function ve(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}se(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function G(t,e){return t.hasAttribute(e)}function z(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}G(t,e)!=i&&t.toggleAttribute(e,i)}function ce(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function le(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;ce(t,e,void 0)!==a&&t.setAttribute(e,a)}var bv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},At=(t,e,i)=>(bv(t,e,"read from private field"),i?i.call(t):e.get(t)),d1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ls=(t,e,i,a)=>(bv(t,e,"write to private field"),e.set(t,i),i),Ue;function u1(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Sl extends T.HTMLElement{constructor(){if(super(),d1(this,Ue,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=At(this,Ue))==null?void 0:r.unassociateElement)==null||n.call(r,this),ls(this,Ue,null)),a&&this.isConnected&&(ls(this,Ue,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=At(this,Ue))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ls(this,Ue,c1(this)),this.getAttribute(X.MEDIA_CONTROLLER)&&((i=(e=At(this,Ue))==null?void 0:e.associateElement)==null||i.call(e,this)),At(this,Ue)&&(At(this,Ue).addEventListener("pointerdown",this),At(this,Ue).addEventListener("click",this),At(this,Ue).hasAttribute("tabindex")||(At(this,Ue).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(X.MEDIA_CONTROLLER)&&((i=(e=At(this,Ue))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=At(this,Ue))==null||a.removeEventListener("pointerdown",this),(r=At(this,Ue))==null||r.removeEventListener("click",this),ls(this,Ue,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:u,height:p}=this.getBoundingClientRect(),m=n-o,c=s-l;if(m<0||c<0||m>u||c>p||u===0&&p===0)return;const d=this._pointerType||"mouse";if(this._pointerType=void 0,d===ed.TOUCH){this.handleTap(e);return}else if(d===ed.MOUSE||d===ed.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new T.CustomEvent(i,{composed:!0,bubbles:!0}))}}Ue=new WeakMap;Sl.shadowRootOptions={mode:"open"};Sl.getTemplateHTML=u1;function c1(t){var e;const i=t.getAttribute(X.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Mr(t,"media-controller")}T.customElements.get("media-gesture-receiver")||T.customElements.define("media-gesture-receiver",Sl);var Xh=Sl,ac=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_e=(t,e,i)=>(ac(t,e,"read from private field"),i?i.call(t):e.get(t)),Ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},It=(t,e,i,a)=>(ac(t,e,"write to private field"),e.set(t,i),i),Pt=(t,e,i)=>(ac(t,e,"access private method"),i),nn,Fo,Ba,Rr,dr,Dd,Wa,Us,Md,gv,xd,yv,Vn,wl,Il,rc,Lr,qn,Oi,Hs;const $={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function h1(t){return`
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

      
      :host(:not([${$.AUDIO}])[${h.MEDIA_HAS_PLAYED}]) slot[name=poster] {
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
        <template shadowrootmode="${Xh.shadowRootOptions.mode}">
          ${Xh.getTemplateHTML({})}
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
  `}const m1=Object.values(h),p1="sm:384 md:576 lg:768 xl:960";function v1(t){Tv(t.target,t.contentRect.width)}function Tv(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute($.BREAKPOINTS))!=null?i:p1,r=f1(a),n=E1(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(oi.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(oi.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function f1(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function E1(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class Rl extends T.HTMLElement{constructor(){if(super(),Ge(this,Md),Ge(this,xd),Ge(this,Vn),Ge(this,Il),Ge(this,Lr),Ge(this,nn,void 0),Ge(this,Fo,0),Ge(this,Ba,null),Ge(this,Rr,null),Ge(this,dr,void 0),this.breakpointsComputed=!1,Ge(this,Dd,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),Ge(this,Wa,!1),Ge(this,Us,e=>{_e(this,Wa)||(setTimeout(()=>{v1(e),It(this,Wa,!1)},0),It(this,Wa,!0))}),Ge(this,Oi,void 0),Ge(this,Hs,()=>{if(!_e(this,Oi).assignedElements({flatten:!0}).length){_e(this,Ba)&&this.mediaUnsetCallback(_e(this,Ba));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}It(this,nn,new MutationObserver(_e(this,Dd)))}static get observedAttributes(){return[$.AUTOHIDE,$.GESTURES_DISABLED].concat(m1).filter(e=>![h.MEDIA_RENDITION_LIST,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_CHAPTERS_CUES,h.MEDIA_WIDTH,h.MEDIA_HEIGHT,h.MEDIA_ERROR,h.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==$.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(It(this,Ba,e),e.localName.includes("-")&&await T.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;_e(this,nn).observe(this,{childList:!0,subtree:!0}),wr(this,_e(this,Us));const i=this.getAttribute($.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute($.USER_INACTIVE,""),Tv(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(It(this,Oi,r),_e(this,Oi).addEventListener("slotchange",_e(this,Hs))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=T.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Ir(this,_e(this,Us)),clearTimeout(_e(this,Rr)),_e(this,nn).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=T.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),_e(this,Oi)&&(_e(this,Oi).removeEventListener("slotchange",_e(this,Hs)),It(this,Oi,null)),It(this,Wa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){It(this,Ba,null)}handleEvent(e){switch(e.type){case"pointerdown":It(this,Fo,e.timeStamp);break;case"pointermove":Pt(this,Md,gv).call(this,e);break;case"pointerup":Pt(this,xd,yv).call(this,e);break;case"mouseleave":Pt(this,Vn,wl).call(this);break;case"mouseup":this.removeAttribute($.KEYBOARD_CONTROL);break;case"keyup":Pt(this,Lr,qn).call(this),this.setAttribute($.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);It(this,dr,isNaN(i)?0:i)}get autohide(){return(_e(this,dr)===void 0?2:_e(this,dr)).toString()}get breakpoints(){return ce(this,$.BREAKPOINTS)}set breakpoints(e){le(this,$.BREAKPOINTS,e)}get audio(){return G(this,$.AUDIO)}set audio(e){z(this,$.AUDIO,e)}get gesturesDisabled(){return G(this,$.GESTURES_DISABLED)}set gesturesDisabled(e){z(this,$.GESTURES_DISABLED,e)}get keyboardControl(){return G(this,$.KEYBOARD_CONTROL)}set keyboardControl(e){z(this,$.KEYBOARD_CONTROL,e)}get noAutohide(){return G(this,$.NO_AUTOHIDE)}set noAutohide(e){z(this,$.NO_AUTOHIDE,e)}get autohideOverControls(){return G(this,$.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){z(this,$.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return G(this,$.USER_INACTIVE)}set userInteractive(e){z(this,$.USER_INACTIVE,e)}}nn=new WeakMap;Fo=new WeakMap;Ba=new WeakMap;Rr=new WeakMap;dr=new WeakMap;Dd=new WeakMap;Wa=new WeakMap;Us=new WeakMap;Md=new WeakSet;gv=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-_e(this,Fo)<250)return;Pt(this,Il,rc).call(this),clearTimeout(_e(this,Rr));const e=this.hasAttribute($.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&Pt(this,Lr,qn).call(this)};xd=new WeakSet;yv=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute($.USER_INACTIVE);[this,this.media].includes(t.target)&&e?Pt(this,Vn,wl).call(this):Pt(this,Lr,qn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&Pt(this,Lr,qn).call(this)};Vn=new WeakSet;wl=function(){if(_e(this,dr)<0||this.hasAttribute($.USER_INACTIVE))return;this.setAttribute($.USER_INACTIVE,"");const t=new T.CustomEvent(oi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Il=new WeakSet;rc=function(){if(!this.hasAttribute($.USER_INACTIVE))return;this.removeAttribute($.USER_INACTIVE);const t=new T.CustomEvent(oi.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Lr=new WeakSet;qn=function(){Pt(this,Il,rc).call(this),clearTimeout(_e(this,Rr));const t=parseInt(this.autohide);t<0||It(this,Rr,setTimeout(()=>{Pt(this,Vn,wl).call(this)},t*1e3))};Oi=new WeakMap;Hs=new WeakMap;Rl.shadowRootOptions={mode:"open"};Rl.getTemplateHTML=h1;T.customElements.get("media-container")||T.customElements.define("media-container",Rl);var Av=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oe=(t,e,i)=>(Av(t,e,"read from private field"),i?i.call(t):e.get(t)),Wr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ds=(t,e,i,a)=>(Av(t,e,"write to private field"),e.set(t,i),i),Fa,Ka,Ko,_a,pi,Ni;class nc{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Wr(this,pi),Wr(this,Fa,void 0),Wr(this,Ka,void 0),Wr(this,Ko,void 0),Wr(this,_a,new Set),ds(this,Fa,e),ds(this,Ka,i),ds(this,Ko,new Set(a))}[Symbol.iterator](){return Oe(this,pi,Ni).values()}get length(){return Oe(this,pi,Ni).size}get value(){var e;return(e=[...Oe(this,pi,Ni)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(ds(this,_a,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...Oe(this,pi,Ni)][e]}values(){return Oe(this,pi,Ni).values()}forEach(e,i){Oe(this,pi,Ni).forEach(e,i)}add(...e){var i,a;e.forEach(r=>Oe(this,_a).add(r)),!(this.value===""&&!((i=Oe(this,Fa))!=null&&i.hasAttribute(`${Oe(this,Ka)}`)))&&((a=Oe(this,Fa))==null||a.setAttribute(`${Oe(this,Ka)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>Oe(this,_a).delete(a)),(i=Oe(this,Fa))==null||i.setAttribute(`${Oe(this,Ka)}`,`${this.value}`)}contains(e){return Oe(this,pi,Ni).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Fa=new WeakMap;Ka=new WeakMap;Ko=new WeakMap;_a=new WeakMap;pi=new WeakSet;Ni=function(){return Oe(this,_a).size?Oe(this,_a):Oe(this,Ko)};const _1=(t="")=>t.split(/\s+/),kv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?ni.CAPTIONS:ni.SUBTITLES,language:i,label:r}},Ll=(t="",e={})=>_1(t).map(i=>{const a=kv(i);return{...e,...a}}),Sv=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?kv(e):e):typeof t=="string"?Ll(t):[t]:[],Od=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Yn=(t=[])=>Array.prototype.map.call(t,Od).join(" "),b1=(t,e)=>i=>i[t]===e,wv=t=>{const e=Object.entries(t).map(([i,a])=>b1(i,a));return i=>e.every(a=>a(i))},Ln=(t,e=[],i=[])=>{const a=Sv(i).map(wv),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Cl=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:wv(e);return Array.from(t.textTracks).filter(i)},Iv=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(h.MEDIA_SUBTITLES_SHOWING)},g1=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Jh="exitFullscreen"in we?"exitFullscreen":"webkitExitFullscreen"in we?"webkitExitFullscreen":"webkitCancelFullScreen"in we?"webkitCancelFullScreen":void 0,y1=t=>{var e;const{documentElement:i}=t;if(Jh){const a=(e=i==null?void 0:i[Jh])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},sn="fullscreenElement"in we?"fullscreenElement":"webkitFullscreenElement"in we?"webkitFullscreenElement":void 0,T1=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[sn];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===q0.FULLSCREEN?i:a},A1=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=T1(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(sn in s))return Li(n,r);for(;s!=null&&s[sn];){if(s[sn]===r)return!0;s=(e=s[sn])==null?void 0:e.shadowRoot}}return!1},k1="fullscreenEnabled"in we?"fullscreenEnabled":"webkitFullscreenEnabled"in we?"webkitFullscreenEnabled":void 0,S1=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[k1])||i&&"webkitSupportsFullscreen"in i};let us;const sc=()=>{var t,e;return us||(us=(e=(t=we)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),us)},w1=async(t=sc())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([I1(t,i.signal),R1(t,e)]);return i.abort(),a},I1=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),R1=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await dv(10)}return t.volume!==e},L1=/.*Version\/.*Safari\/.*/.test(T.navigator.userAgent),Rv=(t=sc())=>T.matchMedia("(display-mode: standalone)").matches&&L1?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Lv=(t=sc())=>S1({documentElement:we,media:t}),C1=Lv(),D1=Rv(),M1=!!T.WebKitPlaybackTargetAvailabilityEvent,x1=!!T.chrome,Vo=t=>Cl(t.media,e=>[ni.SUBTITLES,ni.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Cv=t=>Cl(t.media,e=>e.mode===vr.SHOWING&&[ni.SUBTITLES,ni.CAPTIONS].includes(e.kind)),Dv=(t,e)=>{const i=Vo(t),a=Cv(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Ln(vr.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const p=T.localStorage.getItem("media-chrome-pref-subtitles-lang"),m=p?[p,...T.navigator.languages]:T.navigator.languages,c=i.filter(d=>m.some(v=>d.language.toLowerCase().startsWith(v.split("-")[0]))).sort((d,v)=>{const f=m.findIndex(y=>d.language.toLowerCase().startsWith(y.split("-")[0])),g=m.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return f-g});c[0]&&(n=c[0])}const{language:o,label:l,kind:u}=n;Ln(vr.DISABLED,i,a),Ln(vr.SHOWING,i,[{language:o,label:l,kind:u}])}}},oc=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?O1(t,e):Object.entries(t).every(([i,a])=>i in e&&oc(a,e[i])),O1=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>oc(r,e[n])):!0},N1=Object.values(bi);let qo;const P1=w1().then(t=>(qo=t,qo)),$1=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof T.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=T.customElements.get(i);a&&e instanceof a||(await T.customElements.whenDefined(i),T.customElements.upgrade(e))}))},U1=new T.DOMParser,H1=t=>t&&(U1.parseFromString(t,"text/html").body.textContent||t),on={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=T.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&T.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;T.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=T.localStorage.getItem("media-chrome-pref-muted")==="true";on.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?T.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&T.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=T.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;on.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Ju(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[bi.LIVE,bi.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(N1.includes(r))return r===bi.UNKNOWN?a:r;const n=e.duration;return n===1/0?bi.LIVE:Number.isFinite(n)?bi.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=on.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===bi.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(on.mediaStreamType.get(t)===bi.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Vo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Cv(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![ni.CAPTIONS,ni.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||Dv(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Cl(i,{kind:ni.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:H1(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Li(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!we.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else we.pictureInPictureElement&&we.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return A1(t)},set(t,e,i){var a,r;t?(g1(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):y1(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&T.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!C1||!Lv(e))return st.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!D1||!Rv(e))return st.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return st.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(qo===!1||(e==null?void 0:e.volume)==null)return st.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{qo==null&&P1.then(e=>t(e?void 0:st.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!x1||!((i=a==null?void 0:a.remote)!=null&&i.state))return st.UNSUPPORTED;if(!(e==null||e==="available"))return st.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!M1)return st.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return st.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return st.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return st.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return st.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},B1={[x.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,u;if(s&&o!=null){const[d]=Cl(s,{kind:ni.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=d==null?void 0:d.cues)!=null?a:[],(f,g,y)=>g===0?f.endTime>o:g===y.length-1?f.startTime<=o:f.startTime<=o&&f.endTime>o);if(v){const f=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,g=new URL(v.text,f);u=new URLSearchParams(g.hash).get("#xywh").split(",").map(b=>+b),l=g.href}}const p=t.mediaDuration.get(e);let c=(n=t.mediaChaptersCues.get(e).find((d,v,f)=>v===f.length-1&&p===d.endTime?d.startTime<=o&&d.endTime>=o:d.startTime<=o&&d.endTime>o))==null?void 0:n.text;return i!=null&&c==null&&(c=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:u,mediaPreviewChapter:c}},[x.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[x.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===bi.LIVE,u=!((i=e.options)!=null&&i.noAutoSeekToLive),p=t.mediaTargetLiveWindow.get(e)>0;if(l&&u&&!p){const m=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(m){const c=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,d=m-c;t.mediaCurrentTime.set(d,e)}}t[s].set(!1,e)},[x.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[x.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[x.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[x.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[x.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[x.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[x.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[x.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Vo(e),s=Sv(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&T.localStorage.setItem("media-chrome-pref-subtitles-lang",o),Ln(vr.SHOWING,n,s)},[x.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Vo(e),r=i??[];Ln(vr.DISABLED,a,r)},[x.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Dv(e,i)},[x.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[x.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[x.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[x.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[x.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[x.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[x.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},W1=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=on,requestMap:r=B1,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=f=>{f!=null&&(oc(f,u)||(u=Object.freeze({...u,...f}),o.forEach(g=>g(u))))},m=()=>{const f=Object.entries(a).reduce((g,[y,{get:b}])=>(g[y]=b(l),g),{});p(f)},c={};let d;const v=async(f,g)=>{var y,b,E,S,M,C,I,H,q,F,W,He,it,at,ye,Ve;const Ut=!!d;if(d={...l,...d??{},...f},Ut)return;await $1(...Object.values(f));const qe=o.length>0&&g===0&&s,yt=l.media!==d.media,rt=((y=l.media)==null?void 0:y.textTracks)!==((b=d.media)==null?void 0:b.textTracks),De=((E=l.media)==null?void 0:E.videoRenditions)!==((S=d.media)==null?void 0:S.videoRenditions),di=((M=l.media)==null?void 0:M.audioTracks)!==((C=d.media)==null?void 0:C.audioTracks),Be=((I=l.media)==null?void 0:I.remote)!==((H=d.media)==null?void 0:H.remote),Ye=l.documentElement!==d.documentElement,ui=!!l.media&&(yt||qe),$r=!!((q=l.media)!=null&&q.textTracks)&&(rt||qe),uh=!!((F=l.media)!=null&&F.videoRenditions)&&(De||qe),ch=!!((W=l.media)!=null&&W.audioTracks)&&(di||qe),hh=!!((He=l.media)!=null&&He.remote)&&(Be||qe),mh=!!l.documentElement&&(Ye||qe),Wl=ui||$r||uh||ch||hh||mh,Da=o.length===0&&g===1&&s,ph=!!d.media&&(yt||Da),vh=!!((it=d.media)!=null&&it.textTracks)&&(rt||Da),fh=!!((at=d.media)!=null&&at.videoRenditions)&&(De||Da),Eh=!!((ye=d.media)!=null&&ye.audioTracks)&&(di||Da),_h=!!((Ve=d.media)!=null&&Ve.remote)&&(Be||Da),bh=!!d.documentElement&&(Ye||Da),gh=ph||vh||fh||Eh||_h||bh;if(!(Wl||gh)){Object.entries(d).forEach(([ie,Ur])=>{l[ie]=Ur}),m(),d=void 0;return}Object.entries(a).forEach(([ie,{get:Ur,mediaEvents:mE=[],textTracksEvents:pE=[],videoRenditionsEvents:vE=[],audioTracksEvents:fE=[],remoteEvents:EE=[],rootEvents:_E=[],stateOwnersUpdateHandlers:bE=[]}])=>{c[ie]||(c[ie]={});const nt=he=>{const Te=Ur(l,he);p({[ie]:Te})};let Me;Me=c[ie].mediaEvents,mE.forEach(he=>{Me&&ui&&(l.media.removeEventListener(he,Me),c[ie].mediaEvents=void 0),ph&&(d.media.addEventListener(he,nt),c[ie].mediaEvents=nt)}),Me=c[ie].textTracksEvents,pE.forEach(he=>{var Te,Tt;Me&&$r&&((Te=l.media.textTracks)==null||Te.removeEventListener(he,Me),c[ie].textTracksEvents=void 0),vh&&((Tt=d.media.textTracks)==null||Tt.addEventListener(he,nt),c[ie].textTracksEvents=nt)}),Me=c[ie].videoRenditionsEvents,vE.forEach(he=>{var Te,Tt;Me&&uh&&((Te=l.media.videoRenditions)==null||Te.removeEventListener(he,Me),c[ie].videoRenditionsEvents=void 0),fh&&((Tt=d.media.videoRenditions)==null||Tt.addEventListener(he,nt),c[ie].videoRenditionsEvents=nt)}),Me=c[ie].audioTracksEvents,fE.forEach(he=>{var Te,Tt;Me&&ch&&((Te=l.media.audioTracks)==null||Te.removeEventListener(he,Me),c[ie].audioTracksEvents=void 0),Eh&&((Tt=d.media.audioTracks)==null||Tt.addEventListener(he,nt),c[ie].audioTracksEvents=nt)}),Me=c[ie].remoteEvents,EE.forEach(he=>{var Te,Tt;Me&&hh&&((Te=l.media.remote)==null||Te.removeEventListener(he,Me),c[ie].remoteEvents=void 0),_h&&((Tt=d.media.remote)==null||Tt.addEventListener(he,nt),c[ie].remoteEvents=nt)}),Me=c[ie].rootEvents,_E.forEach(he=>{Me&&mh&&(l.documentElement.removeEventListener(he,Me),c[ie].rootEvents=void 0),bh&&(d.documentElement.addEventListener(he,nt),c[ie].rootEvents=nt)});const as=c[ie].stateOwnersUpdateHandlers;if(as&&Wl&&(Array.isArray(as)?as:[as]).forEach(Te=>{typeof Te=="function"&&Te()}),gh){const he=bE.map(Te=>Te(nt,d)).filter(Te=>typeof Te=="function");c[ie].stateOwnersUpdateHandlers=he.length===1?he[0]:he}else Wl&&(c[ie].stateOwnersUpdateHandlers=void 0)}),Object.entries(d).forEach(([ie,Ur])=>{l[ie]=Ur}),m(),d=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(f){const{type:g,detail:y}=f;if(r[g]&&u.mediaErrorCode==null){p(r[g](a,l,f));return}g==="mediaelementchangerequest"?v({media:y}):g==="fullscreenelementchangerequest"?v({fullscreenElement:y}):g==="documentelementchangerequest"?v({documentElement:y}):g==="optionschangerequest"&&(Object.entries(y??{}).forEach(([b,E])=>{l.options[b]=E}),m())},getState(){return u},subscribe(f){return v({},o.length+1),o.push(f),f(u),()=>{const g=o.indexOf(f);g>=0&&(v({},o.length-1),o.splice(g,1))}}}};var lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(lc(t,e,"read from private field"),i?i.call(t):e.get(t)),ht=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Rt=(t,e,i,a)=>(lc(t,e,"write to private field"),e.set(t,i),i),Fr=(t,e,i)=>(lc(t,e,"access private method"),i),yi,ln,Y,ai,dn,Kt,Bs,un,Ws,Nd,ka,Fs,Pd,$d,Mv;const xv=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],em=10,tm=.025,im=.25,F1=.25,K1=2,w={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class Ov extends Rl{constructor(){super(),ht(this,Ws),ht(this,Fs),ht(this,$d),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ht(this,yi,new nc(this,w.HOTKEYS)),ht(this,ln,void 0),ht(this,Y,void 0),ht(this,ai,null),ht(this,dn,void 0),ht(this,Kt,void 0),ht(this,Bs,i=>{var a;(a=N(this,Y))==null||a.dispatch(i)}),ht(this,un,void 0),ht(this,ka,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||xv.includes(a))){this.removeEventListener("keyup",N(this,ka));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};Rt(this,dn,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new T.CustomEvent(V0[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(w.NO_HOTKEYS,w.HOTKEYS,w.DEFAULT_STREAM_TYPE,w.DEFAULT_SUBTITLES,w.DEFAULT_DURATION,w.NO_MUTED_PREF,w.NO_VOLUME_PREF,w.LANG,w.LOOP,w.LIVE_EDGE_OFFSET,w.SEEK_TO_LIVE_OFFSET,w.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return N(this,Y)}set mediaStore(e){var i,a;if(N(this,Y)&&((i=N(this,Kt))==null||i.call(this),Rt(this,Kt,void 0)),Rt(this,Y,e),!N(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)){Fr(this,Ws,Nd).call(this);return}Rt(this,Kt,(a=N(this,Y))==null?void 0:a.subscribe(N(this,dn)))}get fullscreenElement(){var e;return(e=N(this,ln))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(w.FULLSCREEN_ELEMENT)&&this.removeAttribute(w.FULLSCREEN_ELEMENT),Rt(this,ln,e),(i=N(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return G(this,w.DEFAULT_SUBTITLES)}set defaultSubtitles(e){z(this,w.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return ce(this,w.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){le(this,w.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return se(this,w.DEFAULT_DURATION)}set defaultDuration(e){ve(this,w.DEFAULT_DURATION,e)}get noHotkeys(){return G(this,w.NO_HOTKEYS)}set noHotkeys(e){z(this,w.NO_HOTKEYS,e)}get keysUsed(){return ce(this,w.KEYS_USED)}set keysUsed(e){le(this,w.KEYS_USED,e)}get liveEdgeOffset(){return se(this,w.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){ve(this,w.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return G(this,w.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){z(this,w.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return G(this,w.NO_VOLUME_PREF)}set noVolumePref(e){z(this,w.NO_VOLUME_PREF,e)}get noMutedPref(){return G(this,w.NO_MUTED_PREF)}set noMutedPref(e){z(this,w.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return G(this,w.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){z(this,w.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return G(this,w.NO_DEFAULT_STORE)}set noDefaultStore(e){z(this,w.NO_DEFAULT_STORE,e)}get resolvedLang(){return r1()}attributeChangedCallback(e,i,a){var r,n,s,o,l,u,p,m,c,d,v,f;if(super.attributeChangedCallback(e,i,a),e===w.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(w.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===w.HOTKEYS)N(this,yi).value=a;else if(e===w.DEFAULT_SUBTITLES&&a!==i)(r=N(this,Y))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES)}});else if(e===w.DEFAULT_STREAM_TYPE)(s=N(this,Y))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===w.LIVE_EDGE_OFFSET&&a!==i)(o=N(this,Y))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.SEEK_TO_LIVE_OFFSET&&a!==i)(l=N(this,Y))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0}});else if(e===w.NO_AUTO_SEEK_TO_LIVE)(u=N(this,Y))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE)}});else if(e===w.FULLSCREEN_ELEMENT){const g=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;Rt(this,ln,g),(m=N(this,Y))==null||m.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===w.LANG&&a!==i?(i1(a),(c=N(this,Y))==null||c.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===w.LOOP&&a!==i?(d=N(this,Y))==null||d.dispatch({type:x.MEDIA_LOOP_REQUEST,detail:a!=null}):e===w.NO_VOLUME_PREF&&a!==i?(v=N(this,Y))==null||v.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF)}}):e===w.NO_MUTED_PREF&&a!==i&&((f=N(this,Y))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(w.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!N(this,Y)&&!this.hasAttribute(w.NO_DEFAULT_STORE)&&Fr(this,Ws,Nd).call(this),(e=N(this,Y))==null||e.dispatch({type:"documentelementchangerequest",detail:we}),(i=N(this,Y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),N(this,Y)&&!N(this,Kt)&&Rt(this,Kt,(a=N(this,Y))==null?void 0:a.subscribe(N(this,dn))),N(this,un)!==void 0&&N(this,Y)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=N(this,Y))==null||s.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:N(this,un)}))},0),this.hasAttribute(w.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),N(this,Y)){const o=N(this,Y).getState();Rt(this,un,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=N(this,Y))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=N(this,Y))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=N(this,Y))==null||n.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}N(this,Kt)&&((s=N(this,Kt))==null||s.call(this),Rt(this,Kt,void 0)),this.unassociateElement(this),N(this,ai)&&(N(this,ai).remove(),Rt(this,ai,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=N(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=N(this,Y))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){nm(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=Q1(e,a,r);Object.values(x).forEach(s=>{e.addEventListener(s,N(this,Bs))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(x).forEach(r=>{e.removeEventListener(r,N(this,Bs))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),N(this,Y)&&Object.entries(N(this,Y).getState()).forEach(([r,n])=>{nm([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Fr(this,Fs,Pd))}disableHotkeys(){this.removeEventListener("keydown",Fr(this,Fs,Pd)),this.removeEventListener("keyup",N(this,ka))}get hotkeys(){return N(this,yi)}set hotkeys(e){le(this,w.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,u,p;const m=e.target;if(((r=(a=(i=m.getAttribute(w.KEYS_USED))==null?void 0:i.split(" "))!=null?a:m==null?void 0:m.keysUsed)!=null?r:[]).map(y=>y==="Space"?" ":y).filter(Boolean).includes(e.key))return;let d,v,f;if(!(N(this,yi).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&N(this,yi).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&N(this,yi).contains("noshift+/")))switch(e.key){case" ":case"k":d=N(this,Y).getState().mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"m":d=this.mediaStore.getState().mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"f":d=this.mediaStore.getState().mediaIsFullscreen?x.MEDIA_EXIT_FULLSCREEN_REQUEST:x.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new T.CustomEvent(d,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new T.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const y=this.hasAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_BACKWARD_SEEK_OFFSET):em;v=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-y,0),f=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const y=this.hasAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(w.KEYBOARD_FORWARD_SEEK_OFFSET):em;v=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+y,0),f=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowUp":{const y=this.hasAttribute(w.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_UP_VOLUME_STEP):tm;v=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+y,1),f=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"ArrowDown":{const y=this.hasAttribute(w.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(w.KEYBOARD_DOWN_VOLUME_STEP):tm;v=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-y,0),f=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"<":{const y=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;v=Math.max(y-im,F1).toFixed(2),f=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case">":{const y=(p=this.mediaStore.getState().mediaPlaybackRate)!=null?p:1;v=Math.min(y+im,K1).toFixed(2),f=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:v}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&Fr(this,$d,Mv).call(this);break}case"p":{d=this.mediaStore.getState().mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST,f=new T.CustomEvent(d,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}}yi=new WeakMap;ln=new WeakMap;Y=new WeakMap;ai=new WeakMap;dn=new WeakMap;Kt=new WeakMap;Bs=new WeakMap;un=new WeakMap;Ws=new WeakSet;Nd=function(){var t;this.mediaStore=W1({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(w.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(w.DEFAULT_DURATION)?+this.getAttribute(w.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(w.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(w.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(w.SEEK_TO_LIVE_OFFSET):this.hasAttribute(w.LIVE_EDGE_OFFSET)?+this.getAttribute(w.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(w.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(w.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(w.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(w.NO_SUBTITLES_LANG_PREF)}})};ka=new WeakMap;Fs=new WeakSet;Pd=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=N(this,ai))!=null&&e.open)){this.removeEventListener("keyup",N(this,ka));return}if(i||a||!s&&!xv.includes(r)){this.removeEventListener("keyup",N(this,ka));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(N(this,yi).contains(`no${r.toLowerCase()}`)||r===" "&&N(this,yi).contains("nospace"))&&!l&&t.preventDefault(),this.addEventListener("keyup",N(this,ka),{once:!0})};$d=new WeakSet;Mv=function(){N(this,ai)||(Rt(this,ai,we.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(N(this,ai))),N(this,ai).open=!0};const V1=Object.values(h),q1=Object.values(sv),Nv=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(T.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,X.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>V1.includes(o)):[]},Y1=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&T.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof T.customElements.get(t.nodeName.toLowerCase()))&&T.customElements.upgrade(t),q1.some(a=>a in t)},Ud=t=>Y1(t)||!!Nv(t).length,am=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},rm={[h.MEDIA_SUBTITLES_LIST]:Yn,[h.MEDIA_SUBTITLES_SHOWING]:Yn,[h.MEDIA_SEEKABLE]:am,[h.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(am).join(" "),[h.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[h.MEDIA_RENDITION_LIST]:Y0,[h.MEDIA_AUDIO_TRACK_LIST]:j0},G1=async(t,e,i)=>{var a,r;if(t.isConnected||await dv(0),typeof i=="boolean"||i==null)return z(t,e,i);if(typeof i=="number")return ve(t,e,i);if(typeof i=="string")return le(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=rm[e])==null?void 0:a.call(rm,i))!=null?r:i;return t.setAttribute(e,n)},z1=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},da=(t,e)=>{if(z1(t))return;const i=(r,n)=>{var s,o;Ud(r)&&n(r);const{children:l=[]}=r??{},u=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...u].forEach(m=>da(m,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!Ud(t)){T.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},nm=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Nv(a),n=e.toLowerCase();r.includes(n)&&G1(a,n,i)})},Q1=(t,e,i)=>{da(t,e);const a=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;e(c)},r=p=>{var m;const c=(m=p==null?void 0:p.composedPath()[0])!=null?m:p.target;i(c)};t.addEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(m=>{const{addedNodes:c=[],removedNodes:d=[],type:v,target:f,attributeName:g}=m;v==="childList"?(Array.prototype.forEach.call(c,y=>da(y,e)),Array.prototype.forEach.call(d,y=>da(y,i))):v==="attributes"&&g===X.MEDIA_CHROME_ATTRIBUTES&&(Ud(f)?e(f):i(f))})};let s=[];const o=p=>{const m=p.target;m.name!=="media"&&(s.forEach(c=>da(c,i)),s=[...m.assignedElements({flatten:!0})],s.forEach(c=>da(c,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{da(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};T.customElements.get("media-controller")||T.customElements.define("media-controller",Ov);var j1=Ov;const Ma={PLACEMENT:"placement",BOUNDS:"bounds"};function Z1(t){return`
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
  `}class Dl extends T.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!_v(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=Mr(this,"#"+this.bounds))!=null?e:et(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,p=n+s,m=a.getPropertyValue("--media-tooltip-offset-x"),c=m?parseFloat(m.replace("px","")):0,d=a.getPropertyValue("--media-tooltip-container-margin"),v=d?parseFloat(d.replace("px","")):0,f=o-n+c-v,g=u-p+c+v;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(g>0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Ma.PLACEMENT,Ma.BOUNDS]}get placement(){return ce(this,Ma.PLACEMENT)}set placement(e){le(this,Ma.PLACEMENT,e)}get bounds(){return ce(this,Ma.BOUNDS)}set bounds(e){le(this,Ma.BOUNDS,e)}}Dl.shadowRootOptions={mode:"open"};Dl.getTemplateHTML=Z1;T.customElements.get("media-tooltip")||T.customElements.define("media-tooltip",Dl);var sm=Dl,dc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ke=(t,e,i)=>(dc(t,e,"read from private field"),i?i.call(t):e.get(t)),xa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cs=(t,e,i,a)=>(dc(t,e,"write to private field"),e.set(t,i),i),X1=(t,e,i)=>(dc(t,e,"access private method"),i),Vt,ur,Yi,Va,Ks,Hd,Pv;const Ci={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function J1(t,e={}){return`
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
        <template shadowrootmode="${sm.shadowRootOptions.mode}">
          ${sm.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function ey(t,e){return`
    <slot></slot>
  `}function ty(){return""}class Pe extends T.HTMLElement{constructor(){if(super(),xa(this,Hd),xa(this,Vt,void 0),this.preventClick=!1,this.tooltipEl=null,xa(this,ur,e=>{this.preventClick||this.handleClick(e),setTimeout(ke(this,Yi),0)}),xa(this,Yi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),xa(this,Va,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",ke(this,Va));return}this.preventClick||this.handleClick(e)}),xa(this,Ks,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",ke(this,Va));return}this.addEventListener("keyup",ke(this,Va),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ci.TOOLTIP_PLACEMENT,X.MEDIA_CONTROLLER,h.MEDIA_LANG]}enable(){this.addEventListener("click",ke(this,ur)),this.addEventListener("keydown",ke(this,Ks)),this.tabIndex=0}disable(){this.removeEventListener("click",ke(this,ur)),this.removeEventListener("keydown",ke(this,Ks)),this.removeEventListener("keyup",ke(this,Va)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER?(i&&((n=(r=ke(this,Vt))==null?void 0:r.unassociateElement)==null||n.call(r,this),cs(this,Vt,null)),a&&this.isConnected&&(cs(this,Vt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ke(this,Vt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ci.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===h.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),ke(this,Yi).call(this)}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(cs(this,Vt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ke(this,Vt))==null?void 0:i.associateElement)==null||a.call(i,this)),T.customElements.whenDefined("media-tooltip").then(()=>X1(this,Hd,Pv).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=ke(this,Vt))==null?void 0:e.unassociateElement)==null||i.call(e,this),cs(this,Vt,null),this.removeEventListener("mouseenter",ke(this,Yi)),this.removeEventListener("focus",ke(this,Yi)),this.removeEventListener("click",ke(this,ur))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ce(this,Ci.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){le(this,Ci.TOOLTIP_PLACEMENT,e)}get mediaController(){return ce(this,X.MEDIA_CONTROLLER)}set mediaController(e){le(this,X.MEDIA_CONTROLLER,e)}get disabled(){return G(this,Ci.DISABLED)}set disabled(e){z(this,Ci.DISABLED,e)}get noTooltip(){return G(this,Ci.NO_TOOLTIP)}set noTooltip(e){z(this,Ci.NO_TOOLTIP,e)}handleClick(e){}}Vt=new WeakMap;ur=new WeakMap;Yi=new WeakMap;Va=new WeakMap;Ks=new WeakMap;Hd=new WeakSet;Pv=function(){this.addEventListener("mouseenter",ke(this,Yi)),this.addEventListener("focus",ke(this,Yi)),this.addEventListener("click",ke(this,ur));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};Pe.shadowRootOptions={mode:"open"};Pe.getTemplateHTML=J1;Pe.getSlotTemplateHTML=ey;Pe.getTooltipContentHTML=ty;T.customElements.get("media-chrome-button")||T.customElements.define("media-chrome-button",Pe);const om=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function iy(t){return`
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
      <slot name="enter">${om}</slot>
      <slot name="exit">${om}</slot>
    </slot>
  `}function ay(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const lm=t=>{const e=t.mediaIsAirplaying?D("stop airplay"):D("start airplay");t.setAttribute("aria-label",e)};class uc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_AIRPLAYING,h.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_AIRPLAYING&&lm(this)}get mediaIsAirplaying(){return G(this,h.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){z(this,h.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ce(this,h.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){le(this,h.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new T.CustomEvent(x.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}uc.getSlotTemplateHTML=iy;uc.getTooltipContentHTML=ay;T.customElements.get("media-airplay-button")||T.customElements.define("media-airplay-button",uc);const ry=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ny=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function sy(t){return`
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
      <slot name="on">${ry}</slot>
      <slot name="off">${ny}</slot>
    </slot>
  `}function oy(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const dm=t=>{t.setAttribute("aria-checked",Iv(t).toString())};class cc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",D("closed captions")),dm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING&&dm(this)}get mediaSubtitlesList(){return um(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){cm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return um(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){cm(this,h.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new T.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}cc.getSlotTemplateHTML=sy;cc.getTooltipContentHTML=oy;const um=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},cm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-button")||T.customElements.define("media-captions-button",cc);const ly='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',dy='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function uy(t){return`
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
      <slot name="enter">${ly}</slot>
      <slot name="exit">${dy}</slot>
    </slot>
  `}function cy(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const hm=t=>{const e=t.mediaIsCasting?D("stop casting"):D("start casting");t.setAttribute("aria-label",e)};class hc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_CASTING,h.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_CASTING&&hm(this)}get mediaIsCasting(){return G(this,h.MEDIA_IS_CASTING)}set mediaIsCasting(e){z(this,h.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ce(this,h.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){le(this,h.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?x.MEDIA_EXIT_CAST_REQUEST:x.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}hc.getSlotTemplateHTML=uy;hc.getTooltipContentHTML=cy;T.customElements.get("media-cast-button")||T.customElements.define("media-cast-button",hc);var mc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sa=(t,e,i)=>(mc(t,e,"read from private field"),e.get(t)),hi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pc=(t,e,i,a)=>(mc(t,e,"write to private field"),e.set(t,i),i),ra=(t,e,i)=>(mc(t,e,"access private method"),i),Yo,Gn,Ra,Vs,Bd,Wd,$v,Fd,Uv,Kd,Hv,Vd,Bv,qd,Wv;function hy(t){return`
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
  `}function my(t){return`
    <slot id="content"></slot>
  `}const Kr={OPEN:"open",ANCHOR:"anchor"};class xr extends T.HTMLElement{constructor(){super(),hi(this,Vs),hi(this,Wd),hi(this,Fd),hi(this,Kd),hi(this,Vd),hi(this,qd),hi(this,Yo,!1),hi(this,Gn,null),hi(this,Ra,null)}static get observedAttributes(){return[Kr.OPEN,Kr.ANCHOR]}get open(){return G(this,Kr.OPEN)}set open(e){z(this,Kr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":ra(this,Kd,Hv).call(this,e);break;case"focusout":ra(this,Vd,Bv).call(this,e);break;case"keydown":ra(this,qd,Wv).call(this,e);break}}connectedCallback(){ra(this,Vs,Bd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){ra(this,Vs,Bd).call(this),e===Kr.OPEN&&a!==i&&(this.open?ra(this,Wd,$v).call(this):ra(this,Fd,Uv).call(this))}focus(){pc(this,Gn,tc());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}Yo=new WeakMap;Gn=new WeakMap;Ra=new WeakMap;Vs=new WeakSet;Bd=function(){if(!Sa(this,Yo)&&(pc(this,Yo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Le(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Wd=new WeakSet;$v=function(){var t;(t=Sa(this,Ra))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Fd=new WeakSet;Uv=function(){var t;(t=Sa(this,Ra))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Kd=new WeakSet;Hv=function(t){pc(this,Ra,t.relatedTarget),Li(this,t.relatedTarget)||(this.open=!this.open)};Vd=new WeakSet;Bv=function(t){var e;Li(this,t.relatedTarget)||((e=Sa(this,Gn))==null||e.focus(),Sa(this,Ra)&&Sa(this,Ra)!==t.relatedTarget&&this.open&&(this.open=!1))};qd=new WeakSet;Wv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;o||l||u||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=Sa(this,Gn))==null||n.focus(),this.open=!1))};xr.shadowRootOptions={mode:"open"};xr.getTemplateHTML=hy;xr.getSlotTemplateHTML=my;T.customElements.get("media-chrome-dialog")||T.customElements.define("media-chrome-dialog",xr);var vc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},me=(t,e,i)=>(vc(t,e,"read from private field"),i?i.call(t):e.get(t)),$e=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pi=(t,e,i,a)=>(vc(t,e,"write to private field"),e.set(t,i),i),Dt=(t,e,i)=>(vc(t,e,"access private method"),i),qt,Ml,qs,Ys,Mt,Go,Gs,zs,Qs,fc,Fv,js,Yd,Zs,Gd,zo,Ec,zd,Kv,Qd,Vv,jd,qv,Zd,Yv;function py(t){return`
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
  `}function vy(t){return""}class Or extends T.HTMLElement{constructor(){if(super(),$e(this,fc),$e(this,js),$e(this,Zs),$e(this,zo),$e(this,zd),$e(this,Qd),$e(this,jd),$e(this,Zd),$e(this,qt,void 0),$e(this,Ml,void 0),$e(this,qs,void 0),$e(this,Ys,void 0),$e(this,Mt,{}),$e(this,Go,[]),$e(this,Gs,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Le(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),$e(this,zs,()=>{const{style:e}=Le(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),$e(this,Qs,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Pi(this,qs,this.shadowRoot.querySelector("#startpoint")),Pi(this,Ys,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER?(i&&((n=(r=me(this,qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Pi(this,qt,null)),a&&this.isConnected&&(Pi(this,qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=me(this,qt))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Dt(this,js,Yd).call(this)):(this.range.setAttribute(e,a),Dt(this,Zs,Gd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),me(this,Mt).pointer=Le(this.shadowRoot,"#pointer"),me(this,Mt).progress=Le(this.shadowRoot,"#progress"),me(this,Mt).thumb=Le(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),me(this,Mt).activeSegment=Le(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(Pi(this,qt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=me(this,qt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",me(this,Gs)),this.shadowRoot.addEventListener("focusout",me(this,zs)),Dt(this,js,Yd).call(this),wr(this.container,me(this,Qs))}disconnectedCallback(){var e,i;Dt(this,Zs,Gd).call(this),(i=(e=me(this,qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Pi(this,qt,null),this.shadowRoot.removeEventListener("focusin",me(this,Gs)),this.shadowRoot.removeEventListener("focusout",me(this,zs)),Ir(this.container,me(this,Qs))}updatePointerBar(e){var i;(i=me(this,Mt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=me(this,Mt).progress)==null||e.style.setProperty("width",`${a}%`),(i=me(this,Mt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Pi(this,Go,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],u=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,m=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,c=we.createElementNS("http://www.w3.org/2000/svg","rect"),d=ic(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);d.style.setProperty("x",u),d.style.setProperty("width",m),i.append(c)}}getPointerRatio(e){return o1(e.clientX,e.clientY,me(this,qs).getBoundingClientRect(),me(this,Ys).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Dt(this,Zd,Yv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Dt(this,zd,Kv).call(this,e);break;case"pointerdown":Dt(this,zo,Ec).call(this,e);break;case"pointerup":Dt(this,Qd,Vv).call(this);break;case"pointerleave":Dt(this,jd,qv).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}qt=new WeakMap;Ml=new WeakMap;qs=new WeakMap;Ys=new WeakMap;Mt=new WeakMap;Go=new WeakMap;Gs=new WeakMap;zs=new WeakMap;Qs=new WeakMap;fc=new WeakSet;Fv=function(t){const e=me(this,Mt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${me(this,Go).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};js=new WeakSet;Yd=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Zs=new WeakSet;Gd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=T.window)==null||t.removeEventListener("pointerup",this),(e=T.window)==null||e.removeEventListener("pointermove",this)};zo=new WeakSet;Ec=function(t){var e;Pi(this,Ml,t.composedPath().includes(this.range)),(e=T.window)==null||e.addEventListener("pointerup",this,{once:!0})};zd=new WeakSet;Kv=function(t){var e;t.pointerType!=="mouse"&&Dt(this,zo,Ec).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=T.window)==null||e.addEventListener("pointermove",this)};Qd=new WeakSet;Vv=function(){var t;(t=T.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};jd=new WeakSet;qv=function(){var t,e;this.removeEventListener("pointerleave",this),(t=T.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=me(this,Mt).activeSegment)==null||e.style.removeProperty("transform")};Zd=new WeakSet;Yv=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Dt(this,fc,Fv).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!me(this,Ml))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Or.shadowRootOptions={mode:"open"};Or.getTemplateHTML=py;Or.getContainerTemplateHTML=vy;T.customElements.get("media-chrome-range")||T.customElements.define("media-chrome-range",Or);var Gv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hs=(t,e,i)=>(Gv(t,e,"read from private field"),i?i.call(t):e.get(t)),fy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ms=(t,e,i,a)=>(Gv(t,e,"write to private field"),e.set(t,i),i),Yt;function Ey(t){return`
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
  `}class _c extends T.HTMLElement{constructor(){if(super(),fy(this,Yt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=hs(this,Yt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ms(this,Yt,null)),a&&this.isConnected&&(ms(this,Yt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=hs(this,Yt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(ms(this,Yt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=hs(this,Yt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=hs(this,Yt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ms(this,Yt,null)}}Yt=new WeakMap;_c.shadowRootOptions={mode:"open"};_c.getTemplateHTML=Ey;T.customElements.get("media-control-bar")||T.customElements.define("media-control-bar",_c);var zv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ps=(t,e,i)=>(zv(t,e,"read from private field"),i?i.call(t):e.get(t)),_y=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vs=(t,e,i,a)=>(zv(t,e,"write to private field"),e.set(t,i),i),Gt;function by(t,e={}){return`
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
  `}function gy(t,e){return`
    <slot></slot>
  `}class ea extends T.HTMLElement{constructor(){if(super(),_y(this,Gt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===X.MEDIA_CONTROLLER&&(i&&((n=(r=ps(this,Gt))==null?void 0:r.unassociateElement)==null||n.call(r,this),vs(this,Gt,null)),a&&this.isConnected&&(vs(this,Gt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=ps(this,Gt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Le(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(X.MEDIA_CONTROLLER);n&&(vs(this,Gt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=ps(this,Gt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ps(this,Gt))==null?void 0:e.unassociateElement)==null||i.call(e,this),vs(this,Gt,null)}}Gt=new WeakMap;ea.shadowRootOptions={mode:"open"};ea.getTemplateHTML=by;ea.getSlotTemplateHTML=gy;T.customElements.get("media-text-display")||T.customElements.define("media-text-display",ea);var Qv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},mm=(t,e,i)=>(Qv(t,e,"read from private field"),i?i.call(t):e.get(t)),yy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ty=(t,e,i,a)=>(Qv(t,e,"write to private field"),e.set(t,i),i),cn;function Ay(t,e){return`
    <slot>${Xi(e.mediaDuration)}</slot>
  `}class jv extends ea{constructor(){var e;super(),yy(this,cn,void 0),Ty(this,cn,this.shadowRoot.querySelector("slot")),mm(this,cn).textContent=Xi((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===h.MEDIA_DURATION&&(mm(this,cn).textContent=Xi(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return se(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}}cn=new WeakMap;jv.getSlotTemplateHTML=Ay;T.customElements.get("media-duration-display")||T.customElements.define("media-duration-display",jv);const ky={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},Sy={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},bc=t=>{var e,i;return t.code===1?null:{title:(e=ky[t.code])!=null?e:`Error ${t.code}`,message:(i=Sy[t.code])!=null?i:t.message}};var Zv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},wy=(t,e,i)=>(Zv(t,e,"read from private field"),i?i.call(t):e.get(t)),Iy=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ry=(t,e,i,a)=>(Zv(t,e,"write to private field"),e.set(t,i),i),Xs;function Ly(t){return`
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
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${Xv({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function Cy(t){return t.code&&bc(t)!==null}function Xv(t){var e;const{title:i,message:a}=(e=bc(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const pm=[h.MEDIA_ERROR_CODE,h.MEDIA_ERROR_MESSAGE];class xl extends xr{constructor(){super(...arguments),Iy(this,Xs,null)}static get observedAttributes(){return[...super.observedAttributes,...pm]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!pm.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=Cy(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=bc(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return wy(this,Xs)}set mediaError(e){Ry(this,Xs,e)}get mediaErrorCode(){return se(this,"mediaerrorcode")}set mediaErrorCode(e){ve(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ce(this,"mediaerrormessage")}set mediaErrorMessage(e){le(this,"mediaerrormessage",e)}}Xs=new WeakMap;xl.getSlotTemplateHTML=Ly;xl.formatErrorMessage=Xv;T.customElements.get("media-error-dialog")||T.customElements.define("media-error-dialog",xl);var Jv=xl,Dy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Di=(t,e,i)=>(Dy(t,e,"read from private field"),i?i.call(t):e.get(t)),vm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qa,Ya;function My(t){return`
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
      ${xy()}
    </slot>
  `}function xy(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((n,s)=>s>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class ef extends xr{constructor(){super(...arguments),vm(this,qa,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),vm(this,Ya,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Di(this,qa)),document.addEventListener("keydown",Di(this,Ya)))}disconnectedCallback(){this.removeEventListener("click",Di(this,qa)),document.removeEventListener("keydown",Di(this,Ya))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",Di(this,qa)),document.addEventListener("keydown",Di(this,Ya))):(this.removeEventListener("click",Di(this,qa)),document.removeEventListener("keydown",Di(this,Ya))))}}qa=new WeakMap;Ya=new WeakMap;ef.getSlotTemplateHTML=My;T.customElements.get("media-keyboard-shortcuts-dialog")||T.customElements.define("media-keyboard-shortcuts-dialog",ef);var tf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oy=(t,e,i)=>(tf(t,e,"read from private field"),e.get(t)),Ny=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Py=(t,e,i,a)=>(tf(t,e,"write to private field"),e.set(t,i),i),Js;const $y=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Uy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Hy(t){return`
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
      <slot name="enter">${$y}</slot>
      <slot name="exit">${Uy}</slot>
    </slot>
  `}function By(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const fm=t=>{const e=t.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");t.setAttribute("aria-label",e)};class gc extends Pe{constructor(){super(...arguments),Ny(this,Js,null)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_FULLSCREEN,h.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_FULLSCREEN&&fm(this)}get mediaFullscreenUnavailable(){return ce(this,h.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){le(this,h.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return G(this,h.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){z(this,h.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Py(this,Js,e);const i=Oy(this,Js)instanceof PointerEvent,a=this.mediaIsFullscreen?new T.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new T.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Js=new WeakMap;gc.getSlotTemplateHTML=Hy;gc.getTooltipContentHTML=By;T.customElements.get("media-fullscreen-button")||T.customElements.define("media-fullscreen-button",gc);const{MEDIA_TIME_IS_LIVE:eo,MEDIA_PAUSED:Cn}=h,{MEDIA_SEEK_TO_LIVE_REQUEST:Wy,MEDIA_PLAY_REQUEST:Fy}=x,Ky='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function Vy(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${eo}]:not([${Cn}])) slot[name=indicator] > *,
      :host([${eo}]:not([${Cn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${eo}]:not([${Cn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Ky}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const Em=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=D(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class af extends Pe{static get observedAttributes(){return[...super.observedAttributes,eo,Cn]}connectedCallback(){super.connectedCallback(),Em(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Em(this)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return G(this,h.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){z(this,h.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new T.CustomEvent(Wy,{composed:!0,bubbles:!0})),this.hasAttribute(Cn)&&this.dispatchEvent(new T.CustomEvent(Fy,{composed:!0,bubbles:!0})))}}af.getSlotTemplateHTML=Vy;T.customElements.get("media-live-button")||T.customElements.define("media-live-button",af);var rf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Vr=(t,e,i)=>(rf(t,e,"read from private field"),i?i.call(t):e.get(t)),_m=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qr=(t,e,i,a)=>(rf(t,e,"write to private field"),e.set(t,i),i),zt,to;const fs={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},nf=500,qy=`
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
`;function Yy(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${nf}ms);
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

    <slot name="icon">${qy}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class yc extends T.HTMLElement{constructor(){if(super(),_m(this,zt,void 0),_m(this,to,nf),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PAUSED,h.MEDIA_LOADING,fs.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===fs.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===X.MEDIA_CONTROLLER&&(i&&((n=(r=Vr(this,zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),qr(this,zt,null)),a&&this.isConnected&&(qr(this,zt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Vr(this,zt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(qr(this,zt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Vr(this,zt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Vr(this,zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),qr(this,zt,null)}get loadingDelay(){return Vr(this,to)}set loadingDelay(e){qr(this,to,e);const{style:i}=Le(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaController(){return ce(this,X.MEDIA_CONTROLLER)}set mediaController(e){le(this,X.MEDIA_CONTROLLER,e)}get noAutohide(){return G(this,fs.NO_AUTOHIDE)}set noAutohide(e){z(this,fs.NO_AUTOHIDE,e)}}zt=new WeakMap;to=new WeakMap;yc.shadowRootOptions={mode:"open"};yc.getTemplateHTML=Yy;T.customElements.get("media-loading-indicator")||T.customElements.define("media-loading-indicator",yc);const Gy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,bm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,zy=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Qy(t){return`
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
      <slot name="off">${Gy}</slot>
      <slot name="low">${bm}</slot>
      <slot name="medium">${bm}</slot>
      <slot name="high">${zy}</slot>
    </slot>
  `}function jy(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const gm=t=>{const e=t.mediaVolumeLevel==="off",i=D(e?"unmute":"mute");t.setAttribute("aria-label",i)};class Tc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),gm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_VOLUME_LEVEL&&gm(this)}get mediaVolumeLevel(){return ce(this,h.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){le(this,h.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}Tc.getSlotTemplateHTML=Qy;Tc.getTooltipContentHTML=jy;T.customElements.get("media-mute-button")||T.customElements.define("media-mute-button",Tc);const ym=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Zy(t){return`
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
      <slot name="enter">${ym}</slot>
      <slot name="exit">${ym}</slot>
    </slot>
  `}function Xy(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const Tm=t=>{const e=t.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");t.setAttribute("aria-label",e)};class Ac extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_IS_PIP,h.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Tm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_IS_PIP&&Tm(this)}get mediaPipUnavailable(){return ce(this,h.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){le(this,h.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return G(this,h.MEDIA_IS_PIP)}set mediaIsPip(e){z(this,h.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ac.getSlotTemplateHTML=Zy;Ac.getTooltipContentHTML=Xy;T.customElements.get("media-pip-button")||T.customElements.define("media-pip-button",Ac);var Jy=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Oa=(t,e,i)=>(Jy(t,e,"read from private field"),i?i.call(t):e.get(t)),eT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$i;const td={RATES:"rates"},sf=[1,1.2,1.5,1.7,2],cr=1;function Ji(t){return Math.round(t*100)/100}function tT(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?Ji(+t.mediaplaybackrate):cr}x</slot>
  `}function iT(){return D("Playback rate")}class kc extends Pe{constructor(){var e;super(),eT(this,$i,new nc(this,td.RATES,{defaultValue:sf})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ji((e=this.mediaPlaybackRate)!=null?e:cr)}x`}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,td.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===td.RATES&&(Oa(this,$i).value=a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Ji(Number.isNaN(r)?cr:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Oa(this,$i)}set rates(e){e?Array.isArray(e)?Oa(this,$i).value=e.join(" "):typeof e=="string"&&(Oa(this,$i).value=e):Oa(this,$i).value=""}get mediaPlaybackRate(){return se(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Oa(this,$i).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:cr,n=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}$i=new WeakMap;kc.getSlotTemplateHTML=tT;kc.getTooltipContentHTML=iT;T.customElements.get("media-playback-rate-button")||T.customElements.define("media-playback-rate-button",kc);const aT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,rT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function nT(t){return`
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
      <slot name="play">${aT}</slot>
      <slot name="pause">${rT}</slot>
    </slot>
  `}function sT(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const Am=t=>{const e=t.mediaPaused?D("play"):D("pause");t.setAttribute("aria-label",e)};class Sc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Am(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PAUSED||e===h.MEDIA_LANG)&&Am(this)}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new T.CustomEvent(e,{composed:!0,bubbles:!0}))}}Sc.getSlotTemplateHTML=nT;Sc.getTooltipContentHTML=sT;T.customElements.get("media-play-button")||T.customElements.define("media-play-button",Sc);const Ht={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function oT(t){return`
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
  `}const lT=t=>{t.style.removeProperty("background-image")},dT=(t,e)=>{t.style["background-image"]=`url('${e}')`};class wc extends T.HTMLElement{static get observedAttributes(){return[Ht.PLACEHOLDER_SRC,Ht.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Ht.SRC&&(a==null?this.image.removeAttribute(Ht.SRC):this.image.setAttribute(Ht.SRC,a)),e===Ht.PLACEHOLDER_SRC&&(a==null?lT(this.image):dT(this.image,a))}get placeholderSrc(){return ce(this,Ht.PLACEHOLDER_SRC)}set placeholderSrc(e){le(this,Ht.SRC,e)}get src(){return ce(this,Ht.SRC)}set src(e){le(this,Ht.SRC,e)}}wc.shadowRootOptions={mode:"open"};wc.getTemplateHTML=oT;T.customElements.get("media-poster-image")||T.customElements.define("media-poster-image",wc);var of=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},uT=(t,e,i)=>(of(t,e,"read from private field"),i?i.call(t):e.get(t)),cT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hT=(t,e,i,a)=>(of(t,e,"write to private field"),e.set(t,i),i),io;class mT extends ea{constructor(){super(),cT(this,io,void 0),hT(this,io,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===h.MEDIA_PREVIEW_CHAPTER||e===h.MEDIA_LANG)&&a!==i&&a!=null)if(uT(this,io).textContent=a,a!==""){const r=D("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ce(this,h.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){le(this,h.MEDIA_PREVIEW_CHAPTER,e)}}io=new WeakMap;T.customElements.get("media-preview-chapter-display")||T.customElements.define("media-preview-chapter-display",mT);var lf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Es=(t,e,i)=>(lf(t,e,"read from private field"),i?i.call(t):e.get(t)),pT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_s=(t,e,i,a)=>(lf(t,e,"write to private field"),e.set(t,i),i),Qt;function vT(t){return`
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
  `}class Ol extends T.HTMLElement{constructor(){if(super(),pT(this,Qt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[X.MEDIA_CONTROLLER,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(X.MEDIA_CONTROLLER);r&&(_s(this,Qt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Es(this,Qt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Es(this,Qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),_s(this,Qt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===X.MEDIA_CONTROLLER&&(i&&((n=(r=Es(this,Qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),_s(this,Qt,null)),a&&this.isConnected&&(_s(this,Qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Es(this,Qt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return ce(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(h.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(h.MEDIA_PREVIEW_COORDS);return}this.setAttribute(h.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:p,minWidth:m,minHeight:c}=l,d=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let v,f;if(d==="fill"){const C=parseInt(u)/n,I=parseInt(p)/s,H=parseInt(m)/n,q=parseInt(c)/s;v=C<1?C:Math.max(C,H),f=I<1?I:Math.max(I,q)}else{const C=Math.min(parseInt(u)/n,parseInt(p)/s),I=Math.max(parseInt(m)/n,parseInt(c)/s),q=C<1?C:I>1?I:1;v=q,f=q}const{style:g}=Le(this.shadowRoot,":host"),y=Le(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),S=Math.min(v,f)<1?"min":"max";g.setProperty(`${S}-width`,"initial","important"),g.setProperty(`${S}-height`,"initial","important"),g.width=`${n*v}px`,g.height=`${s*f}px`;const M=()=>{y.width=`${this.imgWidth*v}px`,y.height=`${this.imgHeight*f}px`,y.display="block"};b.src!==o&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,M(),b.onload=null},b.src=o,M()),M(),y.transform=`translate(-${a*v}px, -${r*f}px)`}}Qt=new WeakMap;Ol.shadowRootOptions={mode:"open"};Ol.getTemplateHTML=vT;T.customElements.get("media-preview-thumbnail")||T.customElements.define("media-preview-thumbnail",Ol);var km=Ol,df=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sm=(t,e,i)=>(df(t,e,"read from private field"),i?i.call(t):e.get(t)),fT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ET=(t,e,i,a)=>(df(t,e,"write to private field"),e.set(t,i),i),hn;class _T extends ea{constructor(){super(),fT(this,hn,void 0),ET(this,hn,this.shadowRoot.querySelector("slot")),Sm(this,hn).textContent=Xi(0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PREVIEW_TIME&&a!=null&&(Sm(this,hn).textContent=Xi(parseFloat(a)))}get mediaPreviewTime(){return se(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}}hn=new WeakMap;T.customElements.get("media-preview-time-display")||T.customElements.define("media-preview-time-display",_T);const Na={SEEK_OFFSET:"seekoffset"},id=30,bT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function gT(t,e){return`
    <slot name="icon">${bT(e.seekOffset)}</slot>
  `}const yT=(t,e)=>{t.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:e}))};function TT(){return D("Seek backward")}const AT=0;class Ic extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Na.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,Na.SEEK_OFFSET,id)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),yT(this,this.seekOffset),e===Na.SEEK_OFFSET&&(this.seekOffset=se(this,Na.SEEK_OFFSET,id))}get seekOffset(){return se(this,Na.SEEK_OFFSET,id)}set seekOffset(e){ve(this,Na.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),fv(Ev(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,h.MEDIA_CURRENT_TIME,AT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Ic.getSlotTemplateHTML=gT;Ic.getTooltipContentHTML=TT;T.customElements.get("media-seek-backward-button")||T.customElements.define("media-seek-backward-button",Ic);const Pa={SEEK_OFFSET:"seekoffset"},ad=30,kT=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function ST(t,e){return`
    <slot name="icon">${kT(e.seekOffset)}</slot>
  `}const wT=(t,e)=>{t.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:e}))};function IT(){return D("Seek forward")}const RT=0;class Rc extends Pe{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_CURRENT_TIME,Pa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=se(this,Pa.SEEK_OFFSET,ad)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),wT(this,this.seekOffset),e===Pa.SEEK_OFFSET&&(this.seekOffset=se(this,Pa.SEEK_OFFSET,ad))}get seekOffset(){return se(this,Pa.SEEK_OFFSET,ad)}set seekOffset(e){ve(this,Pa.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),fv(Ev(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return se(this,h.MEDIA_CURRENT_TIME,RT)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Rc.getSlotTemplateHTML=ST;Rc.getTooltipContentHTML=IT;T.customElements.get("media-seek-forward-button")||T.customElements.define("media-seek-forward-button",Rc);var Lc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Nt=(t,e,i)=>(Lc(t,e,"read from private field"),i?i.call(t):e.get(t)),na=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Cc=(t,e,i,a)=>(Lc(t,e,"write to private field"),e.set(t,i),i),Ki=(t,e,i)=>(Lc(t,e,"access private method"),i),Ga,si,Nl,Dc,uf,Qo,Mc,mn,ao,ro,Xd;const Ui={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},wm=[...Object.values(Ui),h.MEDIA_CURRENT_TIME,h.MEDIA_DURATION,h.MEDIA_SEEKABLE],cf=["Enter"," "],LT="&nbsp;/&nbsp;",Jd=(t,{timesSep:e=LT}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Xi(0-(s-r)):Xi(r);return t.showDuration?`${o}${e}${Xi(s)}`:o},CT=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",D("video not loaded, unknown time."));return}const n=t.remaining?Rn(0-(r-i)):Rn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=Rn(r),o=D("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function DT(t,e){return`
    <slot>${Jd(e)}</slot>
  `}const MT=t=>{t.setAttribute("aria-label",D("playback time"))};class hf extends ea{constructor(){super(),na(this,Dc),na(this,Qo),na(this,mn),na(this,ro),na(this,Ga,void 0),na(this,si,null),na(this,Nl,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!cf.includes(r)){this.removeEventListener("keyup",Nt(this,si));return}this.addEventListener("keyup",Nt(this,si))}),Cc(this,Ga,this.shadowRoot.querySelector("slot")),Nt(this,Ga).innerHTML=`${Jd(this)}`}static get observedAttributes(){return[...super.observedAttributes,...wm,"disabled"]}connectedCallback(){const{style:e}=Le(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",D("playback time")),Ki(this,mn,ao).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ki(this,Qo,Mc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){MT(this),wm.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ki(this,mn,ao).call(this):Ki(this,ro,Xd).call(this):e===Ui.NO_TOGGLE&&a!==i&&(this.noToggle?Ki(this,ro,Xd).call(this):Ki(this,mn,ao).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return G(this,Ui.REMAINING)}set remaining(e){z(this,Ui.REMAINING,e)}get showDuration(){return G(this,Ui.SHOW_DURATION)}set showDuration(e){z(this,Ui.SHOW_DURATION,e)}get noToggle(){return G(this,Ui.NO_TOGGLE)}set noToggle(e){z(this,Ui.NO_TOGGLE,e)}get mediaDuration(){return se(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Jd(this);CT(this),e!==Nt(this,Ga).innerHTML&&(Nt(this,Ga).innerHTML=e)}}Ga=new WeakMap;si=new WeakMap;Nl=new WeakMap;Dc=new WeakSet;uf=function(){Nt(this,si)||(Cc(this,si,t=>{const{key:e}=t;if(!cf.includes(e)){this.removeEventListener("keyup",Nt(this,si));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Nt(this,Nl)),this.addEventListener("click",this.toggleTimeDisplay))};Qo=new WeakSet;Mc=function(){Nt(this,si)&&(this.removeEventListener("keyup",Nt(this,si)),this.removeEventListener("keydown",Nt(this,Nl)),this.removeEventListener("click",this.toggleTimeDisplay),Cc(this,si,null))};mn=new WeakSet;ao=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ki(this,Dc,uf).call(this))};ro=new WeakSet;Xd=function(){this.removeAttribute("role"),this.disable(),Ki(this,Qo,Mc).call(this)};hf.getSlotTemplateHTML=DT;T.customElements.get("media-time-display")||T.customElements.define("media-time-display",hf);var mf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xe=(t,e,i)=>(mf(t,e,"read from private field"),e.get(t)),Bt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},lt=(t,e,i,a)=>(mf(t,e,"write to private field"),e.set(t,i),i),xT=(t,e,i,a)=>({set _(r){lt(t,e,r)},get _(){return xe(t,e)}}),za,no,Qa,pn,so,oo,lo,ja,ua,uo;class OT{constructor(e,i,a){Bt(this,za,void 0),Bt(this,no,void 0),Bt(this,Qa,void 0),Bt(this,pn,void 0),Bt(this,so,void 0),Bt(this,oo,void 0),Bt(this,lo,void 0),Bt(this,ja,void 0),Bt(this,ua,0),Bt(this,uo,(r=performance.now())=>{lt(this,ua,requestAnimationFrame(xe(this,uo))),lt(this,pn,performance.now()-xe(this,Qa));const n=1e3/this.fps;if(xe(this,pn)>n){lt(this,Qa,r-xe(this,pn)%n);const s=1e3/((r-xe(this,no))/++xT(this,so)._),o=(r-xe(this,oo))/1e3/this.duration;let l=xe(this,lo)+o*this.playbackRate;l-xe(this,za).valueAsNumber>0?lt(this,ja,this.playbackRate/this.duration/s):(lt(this,ja,.995*xe(this,ja)),l=xe(this,za).valueAsNumber+xe(this,ja)),this.callback(l)}}),lt(this,za,e),this.callback=i,this.fps=a}start(){xe(this,ua)===0&&(lt(this,Qa,performance.now()),lt(this,no,xe(this,Qa)),lt(this,so,0),xe(this,uo).call(this))}stop(){xe(this,ua)!==0&&(cancelAnimationFrame(xe(this,ua)),lt(this,ua,0))}update({start:e,duration:i,playbackRate:a}){const r=e-xe(this,za).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.5/i||n>=.5)&&this.callback(e),lt(this,lo,e),lt(this,oo,performance.now()),this.duration=i,this.playbackRate=a}}za=new WeakMap;no=new WeakMap;Qa=new WeakMap;pn=new WeakMap;so=new WeakMap;oo=new WeakMap;lo=new WeakMap;ja=new WeakMap;ua=new WeakMap;uo=new WeakMap;var xc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ue=(t,e,i)=>(xc(t,e,"read from private field"),i?i.call(t):e.get(t)),Ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pt=(t,e,i,a)=>(xc(t,e,"write to private field"),e.set(t,i),i),Et=(t,e,i)=>(xc(t,e,"access private method"),i),Za,Vi,jo,Dn,Zo,co,zn,Qn,Xa,Ja,vn,eu,pf,tu,Xo,Oc,Jo,Nc,el,Pc,iu,vf,jn,tl,au,ff;const NT=t=>{const e=t.range,i=Rn(+Ef(t)),a=Rn(+t.mediaSeekableEnd),r=i&&a?D("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):D("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function PT(t){return`
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
          <template shadowrootmode="${km.shadowRootOptions.mode}">
            ${km.getTemplateHTML({})}
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
  `}const bs=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Ef=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class $c extends Or{constructor(){super(),Ie(this,eu),Ie(this,Xo),Ie(this,Jo),Ie(this,el),Ie(this,iu),Ie(this,jn),Ie(this,au),Ie(this,Za,null),Ie(this,Vi,void 0),Ie(this,jo,void 0),Ie(this,Dn,void 0),Ie(this,Zo,void 0),Ie(this,co,void 0),Ie(this,zn,void 0),Ie(this,Qn,void 0),Ie(this,Xa,void 0),Ie(this,Ja,void 0),Ie(this,vn,()=>{Et(this,eu,pf).call(this)?ue(this,Vi).start():ue(this,Vi).stop()}),Ie(this,tu,a=>{this.dragging||(Ju(a)&&(this.range.valueAsNumber=a),ue(this,Ja)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),pt(this,jo,this.shadowRoot.querySelectorAll('[part~="box"]')),pt(this,Zo,this.shadowRoot.querySelector('[part~="preview-box"]')),pt(this,co,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);pt(this,zn,parseInt(i.getPropertyValue("--media-box-padding-left"))),pt(this,Qn,parseInt(i.getPropertyValue("--media-box-padding-right"))),pt(this,Vi,new OT(this.range,ue(this,tu),60))}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PAUSED,h.MEDIA_DURATION,h.MEDIA_SEEKABLE,h.MEDIA_CURRENT_TIME,h.MEDIA_PREVIEW_IMAGE,h.MEDIA_PREVIEW_TIME,h.MEDIA_PREVIEW_CHAPTER,h.MEDIA_BUFFERED,h.MEDIA_PLAYBACK_RATE,h.MEDIA_LOADING,h.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),ue(this,vn).call(this),pt(this,Za,this.getRootNode()),(e=ue(this,Za))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ue(this,Vi).stop(),(e=ue(this,Za))==null||e.removeEventListener("transitionstart",this),pt(this,Za,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===h.MEDIA_CURRENT_TIME||e===h.MEDIA_PAUSED||e===h.MEDIA_ENDED||e===h.MEDIA_LOADING||e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE?(ue(this,Vi).update({start:bs(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ue(this,vn).call(this),NT(this)):e===h.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===h.MEDIA_DURATION||e===h.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ue(this,Xa),this.updateBar()))}get mediaChaptersCues(){return ue(this,Xa)}set mediaChaptersCues(e){var i;pt(this,Xa,e),this.updateSegments((i=ue(this,Xa))==null?void 0:i.map(a=>({start:bs(this,a.startTime),end:bs(this,a.endTime)})))}get mediaPaused(){return G(this,h.MEDIA_PAUSED)}set mediaPaused(e){z(this,h.MEDIA_PAUSED,e)}get mediaLoading(){return G(this,h.MEDIA_LOADING)}set mediaLoading(e){z(this,h.MEDIA_LOADING,e)}get mediaDuration(){return se(this,h.MEDIA_DURATION)}set mediaDuration(e){ve(this,h.MEDIA_DURATION,e)}get mediaCurrentTime(){return se(this,h.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ve(this,h.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return se(this,h.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(h.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(h.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(h.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(h.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(h.MEDIA_SEEKABLE);return}this.setAttribute(h.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return ce(this,h.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,h.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return se(this,h.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ve(this,h.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return G(this,h.MEDIA_ENDED)}set mediaEnded(e){z(this,h.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=bs(this,s)}const{style:r}=Le(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Le(this.shadowRoot,"#current-rail"),a=Le(this.shadowRoot,'[part~="current-box"]'),r=Et(this,Xo,Oc).call(this,ue(this,co)),n=Et(this,Jo,Nc).call(this,r,this.range.valueAsNumber),s=Et(this,el,Pc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":Et(this,au,ff).call(this);break;case"pointermove":Et(this,iu,vf).call(this,e);break;case"pointerup":ue(this,Ja)&&pt(this,Ja,!1);break;case"pointerdown":pt(this,Ja,!0);break;case"pointerleave":Et(this,jn,tl).call(this,null);break;case"transitionstart":Li(e.target,this)&&setTimeout(()=>ue(this,vn).call(this),0);break}}}Za=new WeakMap;Vi=new WeakMap;jo=new WeakMap;Dn=new WeakMap;Zo=new WeakMap;co=new WeakMap;zn=new WeakMap;Qn=new WeakMap;Xa=new WeakMap;Ja=new WeakMap;vn=new WeakMap;eu=new WeakSet;pf=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&_v(this)};tu=new WeakMap;Xo=new WeakSet;Oc=function(t){var e;const a=((e=this.getAttribute("bounds")?Mr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Jo=new WeakSet;Nc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};el=new WeakSet;Pc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ue(this,zn)){const s=t.range.left-t.bounds.left-ue(this,zn);return`${n-i/2+s}px`}if(n>r-ue(this,Qn)){const s=t.bounds.right-t.range.right-ue(this,Qn);return`${n+i/2-s-t.range.width}px`}return 0};iu=new WeakSet;vf=function(t){const e=[...ue(this,jo)].some(p=>t.composedPath().includes(p));if(!this.dragging&&(e||!t.composedPath().includes(this))){Et(this,jn,tl).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Le(this.shadowRoot,"#preview-rail"),r=Le(this.shadowRoot,'[part~="preview-box"]'),n=Et(this,Xo,Oc).call(this,ue(this,Zo));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=Et(this,Jo,Nc).call(this,n,s),l=Et(this,el,Pc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const u=Math.round(ue(this,Dn))-Math.round(s*i);Math.abs(u)<1&&s>.01&&s<.99||(pt(this,Dn,s*i),Et(this,jn,tl).call(this,ue(this,Dn)))};jn=new WeakSet;tl=function(t){this.dispatchEvent(new T.CustomEvent(x.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};au=new WeakSet;ff=function(){ue(this,Vi).stop();const t=Ef(this);this.dispatchEvent(new T.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};$c.shadowRootOptions={mode:"open"};$c.getContainerTemplateHTML=PT;T.customElements.get("media-time-range")||T.customElements.define("media-time-range",$c);var $T=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Im=(t,e,i)=>($T(t,e,"read from private field"),i?i.call(t):e.get(t)),UT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ho;const HT=1,BT=t=>t.mediaMuted?0:t.mediaVolume,WT=t=>`${Math.round(t*100)}%`;class FT extends Or{constructor(){super(...arguments),UT(this,ho,()=>{const e=this.range.value,i=new T.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_VOLUME,h.MEDIA_MUTED,h.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume")),this.range.addEventListener("input",Im(this,ho))}disconnectedCallback(){this.range.removeEventListener("input",Im(this,ho)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===h.MEDIA_VOLUME||e===h.MEDIA_MUTED)&&(this.range.valueAsNumber=BT(this),this.range.setAttribute("aria-valuetext",WT(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return se(this,h.MEDIA_VOLUME,HT)}set mediaVolume(e){ve(this,h.MEDIA_VOLUME,e)}get mediaMuted(){return G(this,h.MEDIA_MUTED)}set mediaMuted(e){z(this,h.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ce(this,h.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){le(this,h.MEDIA_VOLUME_UNAVAILABLE,e)}}ho=new WeakMap;T.customElements.get("media-volume-range")||T.customElements.define("media-volume-range",FT);function KT(t){return`
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
    `}function VT(){return D("Loop")}class Uc extends Pe{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=D("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return G(this,h.MEDIA_LOOP)}set mediaLoop(e){z(this,h.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new T.CustomEvent(x.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Uc.getSlotTemplateHTML=KT;Uc.getTooltipContentHTML=VT;T.customElements.get("media-loop-button")||T.customElements.define("media-loop-button",Uc);var _f=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(_f(t,e,"read from private field"),i?i.call(t):e.get(t)),ei=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai=(t,e,i,a)=>(_f(t,e,"write to private field"),e.set(t,i),i),er,mo,ca,fn,Hi,Bi,Wi,ha,tr,po,Lt;const Rm=1,Lm=0,qT=1,YT={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof $t&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof $t?r.element[r.attributeName]=n:r.value=n}}}};class Pl extends T.DocumentFragment{constructor(e,i,a=YT){var r;super(),ei(this,er,void 0),ei(this,mo,void 0),this.append(e.content.cloneNode(!0)),Ai(this,er,bf(this)),Ai(this,mo,a),(r=a.createCallback)==null||r.call(a,this,V(this,er),i),a.processCallback(this,V(this,er),i)}update(e){V(this,mo).processCallback(this,V(this,er),e)}}er=new WeakMap;mo=new WeakMap;const bf=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new zT;for([i,a]of Dm(r.value))if(!i)n.append(a);else{const s=new $t(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===Rm&&!(r instanceof HTMLTemplateElement))bf(r,e);else{const n=r.data;if(r.nodeType===Rm||n.includes("{{")){const s=[];if(n)for([i,a]of Dm(n))if(!i)s.push(new Text(a));else{const o=new Nr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Tf(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},Cm={},Dm=t=>{let e="",i=0,a=Cm[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([Lm,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([qT,e.trim()]),e="",r++):e+=n||"";return e&&a.push([Lm,(i>0?"{{":"")+e]),Cm[t]=a},GT=11;class gf{get value(){return""}set value(e){}toString(){return this.value}}const yf=new WeakMap;class zT{constructor(){ei(this,ca,[])}[Symbol.iterator](){return V(this,ca).values()}get length(){return V(this,ca).length}item(e){return V(this,ca)[e]}append(...e){for(const i of e)i instanceof $t&&yf.set(i,this),V(this,ca).push(i)}toString(){return V(this,ca).join("")}}ca=new WeakMap;class $t extends gf{constructor(e,i,a){super(),ei(this,ha),ei(this,fn,""),ei(this,Hi,void 0),ei(this,Bi,void 0),ei(this,Wi,void 0),Ai(this,Hi,e),Ai(this,Bi,i),Ai(this,Wi,a)}get attributeName(){return V(this,Bi)}get attributeNamespace(){return V(this,Wi)}get element(){return V(this,Hi)}get value(){return V(this,fn)}set value(e){V(this,fn)!==e&&(Ai(this,fn,e),!V(this,ha,tr)||V(this,ha,tr).length===1?e==null?V(this,Hi).removeAttributeNS(V(this,Wi),V(this,Bi)):V(this,Hi).setAttributeNS(V(this,Wi),V(this,Bi),e):V(this,Hi).setAttributeNS(V(this,Wi),V(this,Bi),V(this,ha,tr).toString()))}get booleanValue(){return V(this,Hi).hasAttributeNS(V(this,Wi),V(this,Bi))}set booleanValue(e){if(!V(this,ha,tr)||V(this,ha,tr).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}fn=new WeakMap;Hi=new WeakMap;Bi=new WeakMap;Wi=new WeakMap;ha=new WeakSet;tr=function(){return yf.get(this)};class Nr extends gf{constructor(e,i){super(),ei(this,po,void 0),ei(this,Lt,void 0),Ai(this,po,e),Ai(this,Lt,i?[...i]:[new Text])}get replacementNodes(){return V(this,Lt)}get parentNode(){return V(this,po)}get nextSibling(){return V(this,Lt)[V(this,Lt).length-1].nextSibling}get previousSibling(){return V(this,Lt)[0].previousSibling}get value(){return V(this,Lt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===GT?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),Ai(this,Lt,QT(V(this,Lt)[0].parentNode,V(this,Lt),i,this.nextSibling))}}po=new WeakMap;Lt=new WeakMap;class Tf extends Nr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function QT(t,e,i,a=null){let r=0,n,s,o,l=i.length,u=e.length;for(;r<l&&r<u&&e[r]==i[r];)r++;for(;r<l&&r<u&&i[l-1]==e[u-1];)a=i[--u,--l];if(r==u)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<u;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const Mm={string:t=>String(t)};class Af{constructor(e){this.template=e,this.state=void 0}}const ba=new WeakMap,ga=new WeakMap,ru={partial:(t,e)=>{e[t.expression]=new Af(t.template)},if:(t,e)=>{var i;if(kf(t.expression,e))if(ba.get(t)!==t.template){ba.set(t,t.template);const a=new Pl(t.template,e,Hc);t.replace(a),ga.set(t,a)}else(i=ga.get(t))==null||i.update(e);else t.replace(""),ba.delete(t),ga.delete(t)}},jT=Object.keys(ru),Hc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof Tf){if(!s.directive){const l=jT.find(u=>s.template.hasAttribute(u));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=ru[s.directive])==null||a.call(ru,s,i);continue}let o=kf(n,i);if(o instanceof Af){ba.get(s)!==o.template?(ba.set(s,o.template),o=new Pl(o.template,o.state,Hc),s.value=o,ga.set(s,o)):(r=ga.get(s))==null||r.update(o.state);continue}o?(s instanceof $t&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof $t?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,ba.delete(s),ga.delete(s))):s instanceof $t?s.value=void 0:(s.value=void 0,ba.delete(s),ga.delete(s))}}},xm={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=Mm[e])==null?void 0:i.call(Mm,t)}};function ZT(t){return XT(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function kf(t,e={}){var i,a,r,n,s,o,l;const u=ZT(t);if(u.length===0||u.some(({type:p})=>!p))return Yr(t);if(((i=u[0])==null?void 0:i.token)===">"){const p=e[(a=u[1])==null?void 0:a.token];if(!p)return Yr(t);const m={...e};p.state=m;const c=u.slice(2);for(let d=0;d<c.length;d+=3){const v=(r=c[d])==null?void 0:r.token,f=(n=c[d+1])==null?void 0:n.token,g=(s=c[d+2])==null?void 0:s.token;v&&f==="="&&(m[v]=Gr(g,e))}return p}if(u.length===1)return gs(u[0])?Gr(u[0].token,e):Yr(t);if(u.length===2){const p=(o=u[0])==null?void 0:o.token,m=xm[p];if(!m||!gs(u[1]))return Yr(t);const c=Gr(u[1].token,e);return m(c)}if(u.length===3){const p=(l=u[1])==null?void 0:l.token,m=xm[p];if(!m||!gs(u[0])||!gs(u[2]))return Yr(t);const c=Gr(u[0].token,e);if(p==="|")return m(c,u[2].token);const d=Gr(u[2].token,e);return m(c,d)}}function Yr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function gs({type:t}){return["number","boolean","string","param"].includes(t)}function Gr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):lv(t)?parseFloat(t):e[t]}function XT(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Bc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fi=(t,e,i)=>(Bc(t,e,"read from private field"),i?i.call(t):e.get(t)),sa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(Bc(t,e,"write to private field"),e.set(t,i),i),rd=(t,e,i)=>(Bc(t,e,"access private method"),i),Er,vo,_r,ir,nu,Sf,fo,su,En;const nd={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},wf=we.createElement("template");wf.innerHTML=`
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
`;class $l extends T.HTMLElement{constructor(){super(),sa(this,nu),sa(this,fo),sa(this,Er,void 0),sa(this,vo,void 0),sa(this,_r,void 0),sa(this,ir,void 0),sa(this,En,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),Ti(this,ir,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(nd[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),Ti(this,En,this.render.bind(this)),rd(this,nu,Sf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Fi(this,Er))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(Ti(this,Er,e),Ti(this,_r,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>nd[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=nd[s.name])!=null?a:e1(s.name);let{value:l}=s;l!=null?(lv(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&rd(this,fo,su).call(this)}connectedCallback(){this.addEventListener(oi.BREAKPOINTS_COMPUTED,Fi(this,En)),Fi(this,ir).observe(this,{attributes:!0}),Fi(this,ir).observe(this.renderRoot,{attributes:!0,subtree:!0}),rd(this,fo,su).call(this)}disconnectedCallback(){this.removeEventListener(oi.BREAKPOINTS_COMPUTED,Fi(this,En)),Fi(this,ir).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Fi(this,vo)&&(Ti(this,vo,this.template),this.renderer=new Pl(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(wf.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}Er=new WeakMap;vo=new WeakMap;_r=new WeakMap;ir=new WeakMap;nu=new WeakSet;Sf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};fo=new WeakSet;su=function(){var t;const e=this.getAttribute("template");if(!e||e===Fi(this,_r))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){Ti(this,_r,e),Ti(this,Er,a),this.createRenderer();return}JT(e)&&(Ti(this,_r,e),eA(e).then(r=>{const n=we.createElement("template");n.innerHTML=r,Ti(this,Er,n),this.createRenderer()}).catch(console.error))};En=new WeakMap;$l.observedAttributes=["template"];$l.processor=Hc;function JT(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function eA(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}T.customElements.get("media-theme")||T.customElements.define("media-theme",$l);function tA({anchor:t,floating:e,placement:i}){const a=iA({anchor:t,floating:e}),{x:r,y:n}=rA(a,i);return{x:r,y:n}}function iA({anchor:t,floating:e}){return{anchor:aA(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function aA(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function rA({anchor:t,floating:e},i){const a=nA(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=If(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let u;switch(n){case"top":u={x:s,y:t.y-e.height};break;case"bottom":u={x:s,y:t.y+t.height};break;case"right":u={x:t.x+t.width,y:o};break;case"left":u={x:t.x-e.width,y:o};break;default:u={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":u[a]-=l;break;case"end":u[a]+=l;break}return u}function If(t){return t.split("-")[0]}function nA(t){return["top","bottom"].includes(If(t))?"y":"x"}class Wc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class sA extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Fc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Z=(t,e,i)=>(Fc(t,e,"read from private field"),i?i.call(t):e.get(t)),ae=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vt=(t,e,i,a)=>(Fc(t,e,"write to private field"),e.set(t,i),i),re=(t,e,i)=>(Fc(t,e,"access private method"),i),jt,Qi,wi,Eo,_n,wa,Zn,ou,Rf,il,Kc,al,_o,lu,du,Lf,uu,Cf,cu,Df,br,gr,yr,Xn,rl,Vc,hu,Mf,qc,xf,mu,Of,Yc,Nf,pu,Pf,vu,$f,Mn,nl,fu,Uf,xn,sl,bo,Eu;function Cr({type:t,text:e,value:i,checked:a}){const r=we.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=we.createElement("span");return n.textContent=e,r.append(n),r}function Ia(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function oA(t){return`
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
  `}const oa={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class gt extends T.HTMLElement{constructor(){if(super(),ae(this,ou),ae(this,il),ae(this,_o),ae(this,du),ae(this,uu),ae(this,cu),ae(this,yr),ae(this,rl),ae(this,hu),ae(this,qc),ae(this,mu),ae(this,Yc),ae(this,pu),ae(this,vu),ae(this,Mn),ae(this,fu),ae(this,xn),ae(this,bo),ae(this,jt,null),ae(this,Qi,null),ae(this,wi,null),ae(this,Eo,new Set),ae(this,_n,void 0),ae(this,wa,!1),ae(this,Zn,null),ae(this,al,()=>{const e=Z(this,Eo),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));vt(this,Eo,i)}),ae(this,br,()=>{re(this,yr,Xn).call(this),re(this,rl,Vc).call(this,!1)}),ae(this,gr,()=>{re(this,yr,Xn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),vt(this,_n,new MutationObserver(Z(this,al)))}static get observedAttributes(){return[oa.DISABLED,oa.HIDDEN,oa.STYLE,oa.ANCHOR,X.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":re(this,ou,Rf).call(this,e);break;case"invoke":re(this,du,Lf).call(this,e);break;case"click":re(this,hu,Mf).call(this,e);break;case"toggle":re(this,mu,Of).call(this,e);break;case"focusout":re(this,pu,Pf).call(this,e);break;case"keydown":re(this,vu,$f).call(this,e);break}}connectedCallback(){var e,i;Z(this,_n).observe(this.defaultSlot,{childList:!0}),vt(this,Zn,ic(this.shadowRoot,":host")),re(this,_o,lu).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),vt(this,jt,Cd(this)),(i=(e=Z(this,jt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(wr(Jn(this),Z(this,br)),wr(this,Z(this,gr))),re(this,il,Kc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;Z(this,_n).disconnect(),Ir(Jn(this),Z(this,br)),Ir(this,Z(this,gr)),this.disable(),(i=(e=Z(this,jt))==null?void 0:e.unassociateElement)==null||i.call(e,this),vt(this,jt,null),vt(this,Qi,null),vt(this,wi,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===oa.HIDDEN&&a!==i?(Z(this,wa)||vt(this,wa,!0),this.hidden?re(this,cu,Df).call(this):re(this,uu,Cf).call(this),this.dispatchEvent(new sA({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===X.MEDIA_CONTROLLER?(i&&((n=(r=Z(this,jt))==null?void 0:r.unassociateElement)==null||n.call(r,this),vt(this,jt,null)),a&&this.isConnected&&(vt(this,jt,Cd(this)),(o=(s=Z(this,jt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===oa.DISABLED&&a!==i?a==null?this.enable():this.disable():e===oa.STYLE&&a!==i&&re(this,_o,lu).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=kl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lA)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&re(this,bo,Eu).call(this,i)}focus(){if(vt(this,Qi,tc()),this.items.length){re(this,xn,sl).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=re(this,Mn,nl).call(this,e);a&&(re(this,bo,Eu).call(this,a,a.type==="checkbox"),Z(this,wi)&&!this.hidden&&((i=Z(this,Qi))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=re(this,Mn,nl).call(this,e))!=null?i:re(this,fu,Uf).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),re(this,xn,sl).call(this,n[l]),n[l].focus()}}jt=new WeakMap;Qi=new WeakMap;wi=new WeakMap;Eo=new WeakMap;_n=new WeakMap;wa=new WeakMap;Zn=new WeakMap;ou=new WeakSet;Rf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&re(this,il,Kc).call(this),e.name||Z(this,al).call(this)};il=new WeakSet;Kc=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};al=new WeakMap;_o=new WeakSet;lu=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};du=new WeakSet;Lf=function(t){vt(this,wi,t.relatedTarget),Li(this,t.relatedTarget)||(this.hidden=!this.hidden)};uu=new WeakSet;Cf=function(){var t;(t=Z(this,wi))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),wr(Jn(this),Z(this,br)),wr(this,Z(this,gr))};cu=new WeakSet;Df=function(){var t;(t=Z(this,wi))==null||t.setAttribute("aria-expanded","false"),Ir(Jn(this),Z(this,br)),Ir(this,Z(this,gr))};br=new WeakMap;gr=new WeakMap;yr=new WeakSet;Xn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=tA({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Jn(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=Z(this,Zn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),m=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${m}px`)};rl=new WeakSet;Vc=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=Z(this,Zn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),re(this,yr,Xn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),re(this,yr,Xn).call(this);a.removeProperty("--media-menu-transition-in")};hu=new WeakSet;Mf=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(Z(this,qc,xf))){(e=Z(this,Qi))==null||e.focus(),this.hidden=!0;return}const i=re(this,Mn,nl).call(this,t);!i||i.hasAttribute("disabled")||(re(this,xn,sl).call(this,i),this.handleSelect(t))};qc=new WeakSet;xf=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};mu=new WeakSet;Of=function(t){if(t.target===this)return;re(this,Yc,Nf).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Wc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);re(this,rl,Vc).call(this,!0)};Yc=new WeakSet;Nf=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};pu=new WeakSet;Pf=function(t){var e;Li(this,t.relatedTarget)||(Z(this,wa)&&((e=Z(this,Qi))==null||e.focus()),Z(this,wi)&&Z(this,wi)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};vu=new WeakSet;$f=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:u}=t;if(!(o||l||u)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(Z(this,wa)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=Z(this,Qi))==null||n.focus(),Z(this,wa)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};Mn=new WeakSet;nl=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};fu=new WeakSet;Uf=function(){return this.items.find(t=>t.tabIndex===0)};xn=new WeakSet;sl=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};bo=new WeakSet;Eu=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};gt.shadowRootOptions={mode:"open"};gt.getTemplateHTML=oA;function lA(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Jn(t){var e;return(e=t.getAttribute("bounds")?Mr(t,`#${t.getAttribute("bounds")}`):et(t)||t.parentElement)!=null?e:t}T.customElements.get("media-chrome-menu")||T.customElements.define("media-chrome-menu",gt);var Gc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qe=(t,e,i)=>(Gc(t,e,"read from private field"),i?i.call(t):e.get(t)),mi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sd=(t,e,i,a)=>(Gc(t,e,"write to private field"),e.set(t,i),i),hr=(t,e,i)=>(Gc(t,e,"access private method"),i),go,On,_u,Hf,ol,zc,Qc,Bf,ri,ar,bu,yo,gu;function dA(t){return`
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
  `}function uA(t){return""}const mt={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class ta extends T.HTMLElement{constructor(){if(super(),mi(this,_u),mi(this,ol),mi(this,Qc),mi(this,yo),mi(this,go,!1),mi(this,On,void 0),mi(this,ri,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=we.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),mi(this,ar,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Qe(this,ar));return}this.handleClick(e)}),mi(this,bu,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Qe(this,ar));return}this.addEventListener("keyup",Qe(this,ar),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=dt(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[mt.TYPE,mt.DISABLED,mt.CHECKED,mt.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),zr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":hr(this,_u,Hf).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Qe(this,bu).call(this,e);break;case"keyup":Qe(this,ar).call(this,e);break}}attributeChangedCallback(e,i,a){e===mt.CHECKED&&zr(this)&&!Qe(this,go)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===mt.TYPE&&a!==i?this.role="menuitem"+a:e===mt.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(mt.DISABLED)||this.enable(),this.role="menuitem"+this.type,sd(this,On,yu(this,this.parentNode)),hr(this,yo,gu).call(this),this.submenuElement&&hr(this,ol,zc).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),hr(this,yo,gu).call(this),sd(this,On,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(mt.TYPE))!=null?e:""}set type(e){this.setAttribute(mt.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(mt.VALUE))!=null?e:this.text}set value(e){this.setAttribute(mt.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(zr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){zr(this)&&(sd(this,go,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){zr(this)||this.invokeTargetElement&&Li(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Wc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}go=new WeakMap;On=new WeakMap;_u=new WeakSet;Hf=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?hr(this,ol,zc).call(this):hr(this,Qc,Bf).call(this))};ol=new WeakSet;zc=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Qe(this,ri)),this.submenuElement.addEventListener("addmenuitem",Qe(this,ri)),this.submenuElement.addEventListener("removemenuitem",Qe(this,ri)),Qe(this,ri).call(this)};Qc=new WeakSet;Bf=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Qe(this,ri)),this.submenuElement.removeEventListener("addmenuitem",Qe(this,ri)),this.submenuElement.removeEventListener("removemenuitem",Qe(this,ri)),Qe(this,ri).call(this)};ri=new WeakMap;ar=new WeakMap;bu=new WeakMap;yo=new WeakSet;gu=function(){var t;const e=(t=Qe(this,On))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};ta.shadowRootOptions={mode:"open"};ta.getTemplateHTML=dA;ta.getSuffixSlotInnerHTML=uA;function zr(t){return t.type==="radio"||t.type==="checkbox"}function yu(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?yu(t,i):e!=null&&e.items?e:yu(e,e==null?void 0:e.parentNode)}T.customElements.get("media-chrome-menu-item")||T.customElements.define("media-chrome-menu-item",ta);function cA(t){return`
    ${gt.getTemplateHTML(t)}
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
  `}class Wf extends gt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-settings-menu-button")}}Wf.getTemplateHTML=cA;T.customElements.get("media-settings-menu")||T.customElements.define("media-settings-menu",Wf);function hA(t){return`
    ${ta.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function mA(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Ul extends ta{}Ul.shadowRootOptions={mode:"open"};Ul.getTemplateHTML=hA;Ul.getSuffixSlotInnerHTML=mA;T.customElements.get("media-settings-menu-item")||T.customElements.define("media-settings-menu-item",Ul);class Pr extends Pe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=kl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Wc({relatedTarget:this}))}}T.customElements.get("media-chrome-menu-button")||T.customElements.define("media-chrome-menu-button",Pr);function pA(){return`
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
  `}function vA(){return D("Settings")}class jc extends Pr{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-settings-menu")}}jc.getSlotTemplateHTML=pA;jc.getTooltipContentHTML=vA;T.customElements.get("media-settings-menu-button")||T.customElements.define("media-settings-menu-button",jc);var Zc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ff=(t,e,i)=>(Zc(t,e,"read from private field"),i?i.call(t):e.get(t)),ys=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Tu=(t,e,i,a)=>(Zc(t,e,"write to private field"),e.set(t,i),i),Ts=(t,e,i)=>(Zc(t,e,"access private method"),i),bn,ll,To,Au,Ao,ku;class fA extends gt{constructor(){super(...arguments),ys(this,To),ys(this,Ao),ys(this,bn,[]),ys(this,ll,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_LIST,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===h.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(Tu(this,bn,Z0(a??"")),Ts(this,To,Au).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ts(this,Ao,ku))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ts(this,Ao,ku))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=et(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return Ff(this,bn)}set mediaAudioTrackList(e){Tu(this,bn,e),Ts(this,To,Au).call(this)}get mediaAudioTrackEnabled(){var e;return(e=ce(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}bn=new WeakMap;ll=new WeakMap;To=new WeakSet;Au=function(){if(Ff(this,ll)===JSON.stringify(this.mediaAudioTrackList))return;Tu(this,ll,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Cr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(a)}};Ao=new WeakSet;ku=function(){if(this.value==null)return;const t=new T.CustomEvent(x.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-audio-track-menu")||T.customElements.define("media-audio-track-menu",fA);const EA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function _A(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${EA}</slot>
  `}function bA(){return D("Audio")}const Om=t=>{const e=D("Audio");t.setAttribute("aria-label",e)};class Xc extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_AUDIO_TRACK_ENABLED,h.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Om(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_LANG&&Om(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=et(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=ce(this,h.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,h.MEDIA_AUDIO_TRACK_ENABLED,e)}}Xc.getSlotTemplateHTML=_A;Xc.getTooltipContentHTML=bA;T.customElements.get("media-audio-track-menu-button")||T.customElements.define("media-audio-track-menu-button",Xc);var Jc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gA=(t,e,i)=>(Jc(t,e,"read from private field"),e.get(t)),od=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yA=(t,e,i,a)=>(Jc(t,e,"write to private field"),e.set(t,i),i),As=(t,e,i)=>(Jc(t,e,"access private method"),i),dl,ko,Su,So,wu;const TA=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function AA(t){return`
    ${gt.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${TA}</slot>
  `}class Kf extends gt{constructor(){super(...arguments),od(this,ko),od(this,So),od(this,dl,void 0)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_LIST&&i!==a?As(this,ko,Su).call(this):e===h.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",As(this,ko,Su).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",As(this,So,wu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",As(this,So,wu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Nm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Pm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Nm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Pm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}dl=new WeakMap;ko=new WeakSet;Su=function(){var t;const e=gA(this,dl)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(h.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;yA(this,dl,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Cr({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=Cr({type:"radio",text:this.formatMenuItemText(s.label,s),value:Od(s),checked:this.value==Od(s)});o.prepend(Ia(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(Ia(this,"captions-indicator")),this.defaultSlot.append(o)}};So=new WeakSet;wu=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(h.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new T.CustomEvent(x.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new T.CustomEvent(x.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Kf.getTemplateHTML=AA;const Nm=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},Pm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-menu")||T.customElements.define("media-captions-menu",Kf);const kA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,SA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function wA(){return`
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
      <slot name="on">${kA}</slot>
      <slot name="off">${SA}</slot>
    </slot>
  `}function IA(){return D("Captions")}const $m=t=>{t.setAttribute("data-captions-enabled",Iv(t).toString())},Um=t=>{t.setAttribute("aria-label",D("closed captions"))};class eh extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_SUBTITLES_LIST,h.MEDIA_SUBTITLES_SHOWING,h.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Um(this),$m(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_SUBTITLES_SHOWING?$m(this):e===h.MEDIA_LANG&&Um(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=et(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Hm(this,h.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Bm(this,h.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Hm(this,h.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Bm(this,h.MEDIA_SUBTITLES_SHOWING,e)}}eh.getSlotTemplateHTML=wA;eh.getTooltipContentHTML=IA;const Hm=(t,e)=>{const i=t.getAttribute(e);return i?Ll(i):[]},Bm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Yn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};T.customElements.get("media-captions-menu-button")||T.customElements.define("media-captions-menu-button",eh);var Vf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},rr=(t,e,i)=>(Vf(t,e,"read from private field"),i?i.call(t):e.get(t)),ld=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$a=(t,e,i)=>(Vf(t,e,"access private method"),i),qi,nr,gn,wo,Iu;const dd={RATES:"rates"};class RA extends gt{constructor(){super(),ld(this,nr),ld(this,wo),ld(this,qi,new nc(this,dd.RATES,{defaultValue:sf})),$a(this,nr,gn).call(this)}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE,dd.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,$a(this,nr,gn).call(this)):e===dd.RATES&&i!=a&&(rr(this,qi).value=a,$a(this,nr,gn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",$a(this,wo,Iu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",$a(this,wo,Iu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-playback-rate-menu-button")}get rates(){return rr(this,qi)}set rates(e){e?Array.isArray(e)?rr(this,qi).value=e.join(" "):typeof e=="string"&&(rr(this,qi).value=e):rr(this,qi).value="",$a(this,nr,gn).call(this)}get mediaPlaybackRate(){return se(this,h.MEDIA_PLAYBACK_RATE,cr)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}qi=new WeakMap;nr=new WeakSet;gn=function(){this.defaultSlot.textContent="";const t=Ji(this.mediaPlaybackRate),e=new Set(Array.from(rr(this,qi)).map(a=>Ji(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=Cr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r)}};wo=new WeakSet;Iu=function(){if(!this.value)return;const t=new T.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-playback-rate-menu")||T.customElements.define("media-playback-rate-menu",RA);const Io=1;function LA(t){return`
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
    <slot name="icon">${t.mediaplaybackrate?Ji(+t.mediaplaybackrate):Io}x</slot>
  `}function CA(){return D("Playback rate")}class th extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${Ji((e=this.mediaPlaybackRate)!=null?e:Io)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===h.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Ji(Number.isNaN(r)?Io:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return se(this,h.MEDIA_PLAYBACK_RATE,Io)}set mediaPlaybackRate(e){ve(this,h.MEDIA_PLAYBACK_RATE,e)}}th.getSlotTemplateHTML=LA;th.getTooltipContentHTML=CA;T.customElements.get("media-playback-rate-menu-button")||T.customElements.define("media-playback-rate-menu-button",th);var ih=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vi=(t,e,i)=>(ih(t,e,"read from private field"),i?i.call(t):e.get(t)),ks=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wm=(t,e,i,a)=>(ih(t,e,"write to private field"),e.set(t,i),i),Ua=(t,e,i)=>(ih(t,e,"access private method"),i),yn,Xt,sr,Tn,Ro,Ru;class DA extends gt{constructor(){super(...arguments),ks(this,sr),ks(this,Ro),ks(this,yn,[]),ks(this,Xt,{})}static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_LIST,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT,h.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case h.MEDIA_RENDITION_SELECTED:this.value=a??"auto",Ua(this,sr,Tn).call(this);break;case h.MEDIA_RENDITION_LIST:Wm(this,yn,G0(a)),Ua(this,sr,Tn).call(this);break;case h.MEDIA_HEIGHT:case h.MEDIA_WIDTH:Ua(this,sr,Tn).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ua(this,Ro,Ru))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ua(this,Ro,Ru))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:et(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return vi(this,yn)}set mediaRenditionList(e){Wm(this,yn,e),Ua(this,sr,Tn).call(this)}get mediaRenditionSelected(){return ce(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}get mediaWidth(){return se(this,h.MEDIA_WIDTH)}set mediaWidth(e){ve(this,h.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}yn=new WeakMap;Xt=new WeakMap;sr=new WeakSet;Tn=function(){const t=!this.mediaRenditionSelected;if(vi(this,Xt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&vi(this,Xt).mediaHeight===this.mediaHeight&&vi(this,Xt).mediaWidth===this.mediaWidth&&vi(this,Xt).isAuto===t)return;vi(this,Xt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),vi(this,Xt).mediaHeight=this.mediaHeight,vi(this,Xt).mediaWidth=this.mediaWidth,vi(this,Xt).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Cr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${D("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${D("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(D("Auto")));const n=Cr({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(n)};Ro=new WeakSet;Ru=function(){if(this.value==null)return;const t=new T.CustomEvent(x.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};T.customElements.get("media-rendition-menu")||T.customElements.define("media-rendition-menu",DA);const MA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function xA(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${MA}</slot>
  `}function OA(){return D("Quality")}class ah extends Pr{static get observedAttributes(){return[...super.observedAttributes,h.MEDIA_RENDITION_SELECTED,h.MEDIA_RENDITION_UNAVAILABLE,h.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:et(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ce(this,h.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,h.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return se(this,h.MEDIA_HEIGHT)}set mediaHeight(e){ve(this,h.MEDIA_HEIGHT,e)}}ah.getSlotTemplateHTML=xA;ah.getTooltipContentHTML=OA;T.customElements.get("media-rendition-menu-button")||T.customElements.define("media-rendition-menu-button",ah);var rh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jt=(t,e,i)=>(rh(t,e,"read from private field"),i?i.call(t):e.get(t)),Wt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qf=(t,e,i,a)=>(rh(t,e,"write to private field"),e.set(t,i),i),ft=(t,e,i)=>(rh(t,e,"access private method"),i),Dr,es,Hl,fa,mr,nh,Yf,Lo,Lu,Co,Cu,Gf,ul,cl,Do;function NA(t){return`
      ${gt.getTemplateHTML(t)}
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
    `}class zf extends gt{constructor(){super(),Wt(this,es),Wt(this,fa),Wt(this,nh),Wt(this,Lo),Wt(this,Cu),Wt(this,Dr,!1),Wt(this,Co,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=ft(this,Lo,Lu).call(this,i);(a||r)&&(Jt(this,Dr)?ft(this,fa,mr).call(this):ft(this,Cu,Gf).call(this,e))}),Wt(this,ul,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=ft(this,Lo,Lu).call(this,i);a||r&&(n||s)||ft(this,fa,mr).call(this)}),Wt(this,cl,e=>{e.key==="Escape"&&ft(this,fa,mr).call(this)}),Wt(this,Do,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}ft(this,fa,mr).call(this)}),this.setAttribute("noautohide",""),ft(this,es,Hl).call(this)}connectedCallback(){super.connectedCallback(),et(this).addEventListener("contextmenu",Jt(this,Co)),this.addEventListener("click",Jt(this,Do))}disconnectedCallback(){super.disconnectedCallback(),et(this).removeEventListener("contextmenu",Jt(this,Co)),this.removeEventListener("click",Jt(this,Do)),document.removeEventListener("mousedown",Jt(this,ul)),document.removeEventListener("keydown",Jt(this,cl))}}Dr=new WeakMap;es=new WeakSet;Hl=function(){this.hidden=!Jt(this,Dr)};fa=new WeakSet;mr=function(){qf(this,Dr,!1),ft(this,es,Hl).call(this)};nh=new WeakSet;Yf=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&ft(i=e,fa,mr).call(i)})};Lo=new WeakSet;Lu=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};Co=new WeakMap;Cu=new WeakSet;Gf=function(t){t.preventDefault(),ft(this,nh,Yf).call(this),qf(this,Dr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,ft(this,es,Hl).call(this),document.addEventListener("mousedown",Jt(this,ul),{once:!0}),document.addEventListener("keydown",Jt(this,cl),{once:!0})};ul=new WeakMap;cl=new WeakMap;Do=new WeakMap;zf.getTemplateHTML=NA;T.customElements.get("media-context-menu")||T.customElements.define("media-context-menu",zf);function PA(t){return`
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
  `}class sh extends ta{}sh.shadowRootOptions={mode:"open"};sh.getTemplateHTML=PA;T.customElements.get("media-context-menu-item")||T.customElements.define("media-context-menu-item",sh);var Qf=t=>{throw TypeError(t)},oh=(t,e,i)=>e.has(t)||Qf("Cannot "+i),B=(t,e,i)=>(oh(t,e,"read from private field"),i?i.call(t):e.get(t)),Se=(t,e,i)=>e.has(t)?Qf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Je=(t,e,i,a)=>(oh(t,e,"write to private field"),e.set(t,i),i),be=(t,e,i)=>(oh(t,e,"access private method"),i),Bl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Bl{}globalThis.DocumentFragment=t}var lh=class extends Bl{},$A=class extends Bl{},UA={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(lh)}},Mo,HA=class{constructor(t,e={}){Se(this,Mo),Je(this,Mo,e==null?void 0:e.detail)}get detail(){return B(this,Mo)}initCustomEvent(){}};Mo=new WeakMap;function BA(t,e){return new lh}var jf={document:{createElement:BA},DocumentFragment,customElements:UA,CustomEvent:HA,EventTarget:Bl,HTMLElement:lh,HTMLVideoElement:$A},Zf=typeof window>"u"||typeof globalThis.customElements>"u",ti=Zf?jf:globalThis,hl=Zf?jf.document:globalThis.document;function WA(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${Du(i)}: ${a}; `)}),e?e.trim():void 0}function Du(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Xf(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ke(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function Jf(t){let e=FA(t).toString();return e?"?"+e:""}function FA(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var eE=(t,e)=>!t||!e?!1:t.contains(e)?!0:eE(t,e.getRootNode().host),tE="mux.com",KA=()=>{try{return"3.13.4"}catch{}return"UNKNOWN"},VA=KA(),iE=()=>VA,qA=(t,{token:e,customDomain:i=tE,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=pr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${Jf({token:e,time:s,program_time:r})}`},YA=(t,{token:e,customDomain:i=tE,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=pr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${Jf({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},dh=t=>{if(t){if([ee.LIVE,ee.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return ee.LIVE}},GA={crossorigin:"crossOrigin",playsinline:"playsInline"};function zA(t){var e;return(e=GA[t])!=null?e:Xf(t)}var or,lr,Ze,QA=class{constructor(e,i){Se(this,or),Se(this,lr),Se(this,Ze,[]),Je(this,or,e),Je(this,lr,i)}[Symbol.iterator](){return B(this,Ze).values()}get length(){return B(this,Ze).length}get value(){var e;return(e=B(this,Ze).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Je(this,Ze,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return B(this,Ze)[e]}values(){return B(this,Ze).values()}keys(){return B(this,Ze).keys()}forEach(e){B(this,Ze).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||B(this,Ze).push(r)}),!(this.value===""&&!((i=B(this,or))!=null&&i.hasAttribute(`${B(this,lr)}`)))&&((a=B(this,or))==null||a.setAttribute(`${B(this,lr)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{B(this,Ze).splice(B(this,Ze).indexOf(a),1)}),(i=B(this,or))==null||i.setAttribute(`${B(this,lr)}`,`${this.value}`)}contains(e){return B(this,Ze).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};or=new WeakMap,lr=new WeakMap,Ze=new WeakMap;var aE=`[mux-player ${iE()}]`;function fi(...t){console.warn(aE,...t)}function Xe(...t){console.error(aE,...t)}function Fm(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${O("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),fi(i)}var Fe={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},ma={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Km=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),jA=Object.values(Fe).filter(t=>Fe.PLAYSINLINE!==t),ZA=Object.values(ma),XA=[...jA,...ZA],JA=class extends ti.HTMLElement{static get observedAttributes(){return XA}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case ma.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case ma.VOLUME:{let n=(a=Ke(i))!=null?a:1;this.media&&(this.media.volume=n);return}case ma.PLAYBACKRATE:{let n=(r=Ke(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:Km}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:Km}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=Ke(this.getAttribute(ma.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(ma.PLAYBACKRATE,`${t}`):this.removeAttribute(ma.PLAYBACKRATE)}get crossOrigin(){return Qr(this,Fe.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Fe.CROSSORIGIN,`${t}`)}get autoplay(){return Qr(this,Fe.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Fe.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Fe.AUTOPLAY)}get loop(){return Qr(this,Fe.LOOP)!=null}set loop(t){t?this.setAttribute(Fe.LOOP,""):this.removeAttribute(Fe.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return Qr(this,Fe.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Fe.MUTED,""):this.removeAttribute(Fe.MUTED)}get playsInline(){return Qr(this,Fe.PLAYSINLINE)!=null}set playsInline(t){Xe("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Fe.PRELOAD,t):this.removeAttribute(Fe.PRELOAD)}};function Qr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Vm=JA,ek=`:host {
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
`,jr=new WeakMap,tk=class rE{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=jr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=jr.get(this.element);i&&i.delete(this.type)}}static for(e){jr.has(e.element)||jr.set(e.element,new Map);let i=e.attributeName.slice(2),a=jr.get(e.element);return a&&a.has(i)?a.get(i):new rE(e.element,i)}};function ik(t,e){return t instanceof $t&&t.attributeName.startsWith("on")?(tk.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function ak(t,e){return e instanceof nE&&t instanceof Nr?(e.renderInto(t),!0):!1}function rk(t,e){return e instanceof DocumentFragment&&t instanceof Nr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function nk(t,e){if(t instanceof $t){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function sk(t,e){if(t instanceof $t&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function ok(t,e){if(typeof e=="boolean"&&t instanceof $t){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function lk(t,e){return e===!1&&t instanceof Nr?(t.replace(""),!0):!1}function dk(t,e){sk(t,e)||ok(t,e)||ik(t,e)||lk(t,e)||ak(t,e)||rk(t,e)||nk(t,e)}var ud=new Map,qm=new WeakMap,Ym=new WeakMap,nE=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(ud.has(this.stringsKey))return ud.get(this.stringsKey);{let t=hl.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),ud.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(qm.get(t)!==i){qm.set(t,i);let r=new Pl(i,this.values,this.processor);Ym.set(t,r),t instanceof Nr?t.replace(...r.children):t.appendChild(r);return}let a=Ym.get(t);(e=a==null?void 0:a.update)==null||e.call(a,this.values)}},uk={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";dk(n,s)}}}};function xo(t,...e){return new nE(t,e,uk)}function ck(t,e){t.renderInto(e)}var hk=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},mk=t=>xo`
  <style>
    ${hk(t)}
    ${ek}
  </style>
  ${Ek(t)}
`,pk=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return dh(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},vk={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},fk=Object.values(vk).join(", "),Ek=t=>{var e,i,a,r,n,s,o,l,u,p,m,c,d,v,f,g,y,b,E,S,M,C,I,H,q,F,W,He,it,at,ye,Ve,Ut,qe,yt,rt,De,di,Be,Ye,ui,$r;return xo`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${pk(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(ee.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=WA({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
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
    exportparts="${fk}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(f=t.targetLiveWindow)!=null?f:!1}"
      stream-type="${(g=dh(t.streamType))!=null?g:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(b=t.autoplay)!=null?b:!1}"
      muted="${(E=t.muted)!=null?E:!1}"
      loop="${(S=t.loop)!=null?S:!1}"
      preload="${(M=t.preload)!=null?M:!1}"
      debug="${(C=t.debug)!=null?C:!1}"
      prefer-cmcd="${(I=t.preferCmcd)!=null?I:!1}"
      disable-tracking="${(H=t.disableTracking)!=null?H:!1}"
      disable-cookies="${(q=t.disableCookies)!=null?q:!1}"
      prefer-playback="${(F=t.preferPlayback)!=null?F:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(W=t.beaconCollectionDomain)!=null?W:!1}"
      player-init-time="${(He=t.playerInitTime)!=null?He:!1}"
      player-software-name="${(it=t.playerSoftwareName)!=null?it:!1}"
      player-software-version="${(at=t.playerSoftwareVersion)!=null?at:!1}"
      env-key="${(ye=t.envKey)!=null?ye:!1}"
      custom-domain="${(Ve=t.customDomain)!=null?Ve:!1}"
      src="${t.src?t.src:t.playbackId?kd(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?kd(t):!1}"
      cast-receiver="${(Ut=t.castReceiver)!=null?Ut:!1}"
      drm-token="${(yt=(qe=t.tokens)==null?void 0:qe.drm)!=null?yt:!1}"
      playback-token="${(De=(rt=t.tokens)==null?void 0:rt.playback)!=null?De:!1}"
      exportparts="video"
      disable-pseudo-ended="${(di=t.disablePseudoEnded)!=null?di:!1}"
      max-reconnect-retries="${(Be=t.maxReconnectRetries)!=null?Be:!1}"
      max-auto-resolution="${(Ye=t.maxAutoResolution)!=null?Ye:!1}"
      cap-rendition-to-player-size="${(ui=t.capRenditionToPlayerSize)!=null?ui:!1}"
    >
      ${t.storyboard?xo`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:xo``}
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
`},sE=t=>t.charAt(0).toUpperCase()+t.slice(1),_k=(t,e=!1)=>{var i,a;if(t.muxCode){let r=sE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:J.VIDEO);if(t.muxCode===P.NETWORK_OFFLINE)return O("Your device appears to be offline",e);if(t.muxCode===P.NETWORK_RECONNECTING)return O("Reconnecting...",e);if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return O("{category} URL has expired",e).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return O("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===P.NETWORK_TOKEN_MISSING)return O("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===P.NETWORK_NOT_FOUND)return O("{category} does not exist",e).format({category:r});if(t.muxCode===P.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return O("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return O("Network Error",e);if(t.code===L.MEDIA_ERR_DECODE)return O("Media Error",e);if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return O("Source Not Supported",e)}return O("Error",e)},bk=(t,e=!1)=>{var i,a;if(t.reload)return'Try again later or <a href="#" data-mux-reload style="color: #4a90e2;">click here to retry</a>';if(t.muxCode){let r=sE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:J.VIDEO);return t.muxCode===P.NETWORK_OFFLINE?O("Check your internet connection and try reloading this video.",e):t.muxCode===P.NETWORK_RECONNECTING?O("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===P.NETWORK_TOKEN_EXPIRED?O("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?O("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_MALFORMED?O("{category} URL is formatted incorrectly",e).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?O("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(t.muxCode)?O("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===L.MEDIA_ERR_NETWORK||t.code===L.MEDIA_ERR_DECODE||(t.code,L.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},gk=(t,e=!1)=>{let i=_k(t,e).toString(),a=bk(t,e).toString();return{title:i,message:a}},yk=t=>{if(t.muxCode){if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===L.MEDIA_ERR_NETWORK)return"";if(t.code===L.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===L.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},oE=(t,e)=>{let i=yk(t);return{message:t.message,context:t.context,file:i}},Tk=`<template id="media-theme-gerwig">
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
`,Mu=hl.createElement("template");"innerHTML"in Mu&&(Mu.innerHTML=Tk);var Gm,zm,lE=class extends $l{};lE.template=(zm=(Gm=Mu.content)==null?void 0:Gm.children)==null?void 0:zm[0];ti.customElements.get("media-theme-gerwig")||ti.customElements.define("media-theme-gerwig",lE);var Ak="gerwig",Ei={SRC:"src",POSTER:"poster"},k={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},xu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function kk(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(k.STORYBOARD_SRC),fullscreenElement:t.getAttribute(k.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:wk(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(k.NOHOTKEYS),hotKeys:t.getAttribute(k.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(_.TARGET_LIVE_WINDOW),streamType:dh(t.getAttribute(_.STREAM_TYPE)),primaryColor:t.getAttribute(k.PRIMARY_COLOR),secondaryColor:t.getAttribute(k.SECONDARY_COLOR),accentColor:t.getAttribute(k.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:Ik(t),playbackRates:t.getAttribute(k.PLAYBACK_RATES),customDomain:(a=t.getAttribute(_.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(k.TITLE),videoTitle:(r=t.getAttribute(k.VIDEO_TITLE))!=null?r:t.getAttribute(k.TITLE),novolumepref:t.hasAttribute(k.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(k.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(k.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var Sk=Jv.formatErrorMessage;Jv.formatErrorMessage=t=>{var e,i;if(t instanceof L){let a=gk(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a==null?void 0:a.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${O("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return Sk(t)};function wk(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=ti.customElements.get(a);if(n!=null&&n.template)return n.template}}function Ik(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function An(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var Rk=Object.values(_),Lk=Object.values(Ei),Ck=Object.values(k),Qm=iE(),jm="mux-player",Zm={isDialogOpen:!1},Dk={redundant_streams:!0},Oo,Nn,No,pa,Po,Pn,ml,pl,Tr,vl,fl,El,$n,Ar,_l,pe,_i,dE,Ou,ya,Xm,Jm,ep,tp,Mk=class extends Vm{constructor(){super(),Se(this,pe),Se(this,Oo),Se(this,Nn,!1),Se(this,No,{}),Se(this,pa,!0),Se(this,Po,new QA(this,"hotkeys")),Se(this,Pn),Se(this,ml,()=>be(this,pe,ya).call(this)),Se(this,pl,()=>be(this,pe,ya).call(this)),Se(this,Tr,()=>be(this,pe,ya).call(this)),Se(this,vl,e=>{e.composedPath().find(i=>{var a;return(a=i==null?void 0:i.hasAttribute)==null?void 0:a.call(i,"data-mux-reload")})&&(e.preventDefault(),window.location.reload())}),Se(this,fl,e=>{var i;((i=e.composedPath()[0])==null?void 0:i.localName)==="media-error-dialog"&&be(this,pe,Ou).call(this,{isDialogOpen:!1})}),Se(this,El,e=>{var i;((i=e.composedPath()[0])==null?void 0:i.localName)==="media-error-dialog"&&(eE(this,hl.activeElement)||e.preventDefault())}),Se(this,$n),Se(this,Ar,{...Zm}),Se(this,_l,e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof L)){let{message:n,code:s}=a??{};a=new L(n,s)}if(!(a!=null&&a.fatal)){fi(a),a.data&&fi(`${a.name} data:`,a.data);return}let r=oE(a);r.message&&Fm(r),Xe(a),a.data&&Xe(`${a.name} data:`,a.data),be(this,pe,Ou).call(this,{isDialogOpen:!0})}),Je(this,Oo,Yu()),this.attachShadow({mode:"open"}),be(this,pe,dE).call(this),this.isConnected&&be(this,pe,_i).call(this)}static get NAME(){return jm}static get VERSION(){return Qm}static get observedAttributes(){var e;return[...(e=Vm.observedAttributes)!=null?e:[],...Lk,...Rk,...Ck]}setAttribute(e,i){super.setAttribute(e,i),e.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}removeAttribute(e){super.removeAttribute(e),e.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}get mediaTheme(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("media-theme")}get mediaController(){var e,i;return(i=(e=this.mediaTheme)==null?void 0:e.shadowRoot)==null?void 0:i.querySelector("media-controller")}connectedCallback(){be(this,pe,_i).call(this);let e=this.media;e&&(e.metadata=An(this))}disconnectedCallback(){var e,i,a,r,n,s,o,l,u,p;(e=B(this,Pn))==null||e.disconnect(),(i=this.media)==null||i.removeEventListener("streamtypechange",B(this,ml)),(a=this.media)==null||a.removeEventListener("loadstart",B(this,pl)),this.removeEventListener("error",B(this,_l)),this.removeEventListener("click",B(this,vl)),(r=this.mediaTheme)==null||r.removeEventListener("close",B(this,fl)),(n=this.mediaTheme)==null||n.removeEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=void 0),(o=(s=this.media)==null?void 0:s.textTracks)==null||o.removeEventListener("addtrack",B(this,Tr)),(u=(l=this.media)==null?void 0:l.textTracks)==null||u.removeEventListener("removetrack",B(this,Tr)),(p=B(this,$n))==null||p.call(this),Je(this,$n,void 0),Je(this,Nn,!1)}attributeChangedCallback(e,i,a){switch(be(this,pe,_i).call(this),super.attributeChangedCallback(e,i,a),e){case k.HOTKEYS:B(this,Po).value=a;break;case k.THUMBNAIL_TIME:{a!=null&&this.tokens.thumbnail&&fi(O("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case k.THUMBNAIL_TOKEN:{if(a){let r=pr(a);if(r){let{aud:n}=r,s=wn.THUMBNAIL;n!==s&&fi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"thumbnail"}))}}break}case k.STORYBOARD_TOKEN:{if(a){let r=pr(a);if(r){let{aud:n}=r,s=wn.STORYBOARD;n!==s&&fi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"storyboard"}))}}break}case k.DRM_TOKEN:{if(a){let r=pr(a);if(r){let{aud:n}=r,s=wn.DRM;n!==s&&fi(O("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:n,expectedAud:s,tokenNamePrefix:"drm"}))}}break}case _.PLAYBACK_ID:{a!=null&&a.includes("?token")&&Xe(O("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:a}));break}case _.STREAM_TYPE:{a&&![ee.LIVE,ee.ON_DEMAND,ee.UNKNOWN].includes(a)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=a.includes("dvr")?Number.POSITIVE_INFINITY:0:Fm({file:"invalid-stream-type.md",message:O("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):a===ee.LIVE?this.getAttribute(k.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case k.FULLSCREEN_ELEMENT:{if(a!=null||a!==i){let r=hl.getElementById(a),n=r==null?void 0:r.querySelector("mux-player");this.mediaController&&r&&n&&(this.mediaController.fullscreenElement=r)}break}case _.CAP_RENDITION_TO_PLAYER_SIZE:{(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0);break}case _.MAX_RECONNECT_RETRIES:{(a==null||a!==i)&&(this.maxReconnectRetries=Number(a));break}}[_.PLAYBACK_ID,Ei.SRC,k.PLAYBACK_TOKEN].includes(e)&&i!==a&&Je(this,Ar,{...B(this,Ar),...Zm}),be(this,pe,ya).call(this,{[zA(e)]:a})}async requestFullscreen(e){var i;if(!(!this.mediaController||this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(i=this.mediaController)==null||i.dispatchEvent(new ti.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((a,r)=>{var n;(n=this.mediaController)==null||n.addEventListener(oi.MEDIA_IS_FULLSCREEN,()=>a(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(h.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new ti.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(oi.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Bo.includes(e)?this.setAttribute(_.PREFER_CMCD,e):fi(`Invalid value for preferCmcd. Must be one of ${Bo.join()}`):this.removeAttribute(_.PREFER_CMCD))}get hasPlayed(){var e,i;return(i=(e=this.mediaController)==null?void 0:e.hasAttribute(h.MEDIA_HAS_PLAYED))!=null?i:!1}get inLiveWindow(){var e;return(e=this.mediaController)==null?void 0:e.hasAttribute(h.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return(e=this.media)==null?void 0:e._hls}get mux(){var e;return(e=this.media)==null?void 0:e.mux}get theme(){var e;return(e=this.getAttribute(k.THEME))!=null?e:Ak}set theme(e){this.setAttribute(k.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let i={};for(let a of e.getAttributeNames()){if(xu.includes(a))continue;let r=e.getAttribute(a);i[Xf(a)]=r===""?!0:r}return i}set themeProps(e){var i,a;be(this,pe,_i).call(this);let r={...this.themeProps,...e};for(let n in r){if(xu.includes(n))continue;let s=e==null?void 0:e[n];typeof s=="boolean"||s==null?(i=this.mediaTheme)==null||i.toggleAttribute(Du(n),!!s):(a=this.mediaTheme)==null||a.setAttribute(Du(n),s)}}get playbackId(){var e;return(e=this.getAttribute(_.PLAYBACK_ID))!=null?e:void 0}set playbackId(e){e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID)}get src(){var e,i;return this.playbackId?(e=Ft(this,Ei.SRC))!=null?e:void 0:(i=this.getAttribute(Ei.SRC))!=null?i:void 0}set src(e){e?this.setAttribute(Ei.SRC,e):this.removeAttribute(Ei.SRC)}get poster(){var e;let i=this.getAttribute(Ei.POSTER);if(i!=null)return i;let{tokens:a}=this;if(a.playback&&!a.thumbnail){fi("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return qA(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(e=this.thumbnailTime)!=null?e:this.startTime,programTime:this.programStartTime,token:a.thumbnail})}set poster(e){e||e===""?this.setAttribute(Ei.POSTER,e):this.removeAttribute(Ei.POSTER)}get storyboardSrc(){var e;return(e=this.getAttribute(k.STORYBOARD_SRC))!=null?e:void 0}set storyboardSrc(e){e?this.setAttribute(k.STORYBOARD_SRC,e):this.removeAttribute(k.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[ee.LIVE,ee.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return YA(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(k.AUDIO)}set audio(e){if(!e){this.removeAttribute(k.AUDIO);return}this.setAttribute(k.AUDIO,"")}get hotkeys(){return B(this,Po)}get nohotkeys(){return this.hasAttribute(k.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(k.NOHOTKEYS);return}this.setAttribute(k.NOHOTKEYS,"")}get thumbnailTime(){return Ke(this.getAttribute(k.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(k.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,i;return(i=(e=this.getAttribute(k.VIDEO_TITLE))!=null?e:this.getAttribute(k.TITLE))!=null?i:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(k.VIDEO_TITLE,e):this.removeAttribute(k.VIDEO_TITLE))}get placeholder(){var e;return(e=Ft(this,k.PLACEHOLDER))!=null?e:""}set placeholder(e){this.setAttribute(k.PLACEHOLDER,`${e}`)}get primaryColor(){var e,i;let a=this.getAttribute(k.PRIMARY_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=ti.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_primary-color"))==null?void 0:i.trim(),a))return a}set primaryColor(e){this.setAttribute(k.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,i;let a=this.getAttribute(k.SECONDARY_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=ti.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_secondary-color"))==null?void 0:i.trim(),a))return a}set secondaryColor(e){this.setAttribute(k.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,i;let a=this.getAttribute(k.ACCENT_COLOR);if(a!=null||this.mediaTheme&&(a=(i=(e=ti.getComputedStyle(this.mediaTheme))==null?void 0:e.getPropertyValue("--_accent-color"))==null?void 0:i.trim(),a))return a}set accentColor(e){this.setAttribute(k.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(k.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(k.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(k.PLAYBACK_RATES))return this.getAttribute(k.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,i)=>e-i)}set playbackRates(e){if(!e){this.removeAttribute(k.PLAYBACK_RATES);return}this.setAttribute(k.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return(e=Ke(this.getAttribute(k.FORWARD_SEEK_OFFSET)))!=null?e:10}set forwardSeekOffset(e){this.setAttribute(k.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return(e=Ke(this.getAttribute(k.BACKWARD_SEEK_OFFSET)))!=null?e:10}set backwardSeekOffset(e){this.setAttribute(k.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(k.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(k.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ke(this.getAttribute(k.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(k.DEFAULT_DURATION):this.setAttribute(k.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?Ke(this.getAttribute(_.PLAYER_INIT_TIME)):B(this,Oo)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=this.getAttribute(_.PLAYER_SOFTWARE_NAME))!=null?e:jm}get playerSoftwareVersion(){var e;return(e=this.getAttribute(_.PLAYER_SOFTWARE_VERSION))!=null?e:Qm}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){return Ke(this.getAttribute(_.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return Ke(this.getAttribute(_.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return Ke(this.getAttribute(_.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){return Ke(this.getAttribute(_.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(k.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(k.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[i,a])=>(e[i]=a,e),{}):Dk}set extraSourceParams(e){e==null?this.removeAttribute(k.EXTRA_SOURCE_PARAMS):this.setAttribute(k.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get envKey(){var e;return(e=Ft(this,_.ENV_KEY))!=null?e:void 0}set envKey(e){this.setAttribute(_.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(k.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(k.NO_VOLUME_PREF,""):this.removeAttribute(k.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(k.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(k.NO_MUTED_PREF,""):this.removeAttribute(k.NO_MUTED_PREF)}get debug(){return Ft(this,_.DEBUG)!=null}set debug(e){e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG)}get disableTracking(){return Ft(this,_.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return Ft(this,_.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES)}get streamType(){var e,i,a;return(a=(i=this.getAttribute(_.STREAM_TYPE))!=null?i:(e=this.media)==null?void 0:e.streamType)!=null?a:ee.UNKNOWN}set streamType(e){this.setAttribute(_.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,i,a;return(a=(i=this.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?i:(e=this.mediaController)==null?void 0:e.getAttribute(k.DEFAULT_STREAM_TYPE))!=null?a:ee.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(k.DEFAULT_STREAM_TYPE,e):this.removeAttribute(k.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,i;return this.hasAttribute(k.TARGET_LIVE_WINDOW)?+this.getAttribute(k.TARGET_LIVE_WINDOW):(i=(e=this.media)==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(k.TARGET_LIVE_WINDOW):this.setAttribute(k.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return(e=this.media)==null?void 0:e.liveEdgeStart}get startTime(){return Ke(Ft(this,_.START_TIME))}set startTime(e){this.setAttribute(_.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return Ke(Ft(this,_.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){e==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return Ke(Ft(this,_.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){e==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return Ke(Ft(this,_.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){e==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===ii.MSE||e===ii.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ii.MSE||e===ii.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){var e;return(e=this.media)==null?void 0:e.metadata}set metadata(e){if(be(this,pe,_i).call(this),!this.media){Xe("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...An(this),...e}}get _hlsConfig(){var e;return(e=this.media)==null?void 0:e._hlsConfig}set _hlsConfig(e){if(be(this,pe,_i).call(this),!this.media){Xe("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var i;if(be(this,pe,_i).call(this),!this.media){Xe("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(i=this.media)==null?void 0:i.addCuePoints(e)}get activeCuePoint(){var e;return(e=this.media)==null?void 0:e.activeCuePoint}get cuePoints(){var e,i;return(i=(e=this.media)==null?void 0:e.cuePoints)!=null?i:[]}addChapters(e){var i;if(be(this,pe,_i).call(this),!this.media){Xe("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(i=this.media)==null?void 0:i.addChapters(e)}get activeChapter(){var e;return(e=this.media)==null?void 0:e.activeChapter}get chapters(){var e,i;return(i=(e=this.media)==null?void 0:e.chapters)!=null?i:[]}getStartDate(){var e;return(e=this.media)==null?void 0:e.getStartDate()}get currentPdt(){var e;return(e=this.media)==null?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(k.PLAYBACK_TOKEN),i=this.getAttribute(k.DRM_TOKEN),a=this.getAttribute(k.THUMBNAIL_TOKEN),r=this.getAttribute(k.STORYBOARD_TOKEN);return{...B(this,No),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{},...a!=null?{thumbnail:a}:{},...r!=null?{storyboard:r}:{}}}set tokens(e){Je(this,No,e??{})}get playbackToken(){var e;return(e=this.getAttribute(k.PLAYBACK_TOKEN))!=null?e:void 0}set playbackToken(e){this.setAttribute(k.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return(e=this.getAttribute(k.DRM_TOKEN))!=null?e:void 0}set drmToken(e){this.setAttribute(k.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return(e=this.getAttribute(k.THUMBNAIL_TOKEN))!=null?e:void 0}set thumbnailToken(e){this.setAttribute(k.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return(e=this.getAttribute(k.STORYBOARD_TOKEN))!=null?e:void 0}set storyboardToken(e){this.setAttribute(k.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,i,a,r){var n;let s=(n=this.media)==null?void 0:n.nativeEl;if(s)return Fu(s,e,i,a,r)}removeTextTrack(e){var i;let a=(i=this.media)==null?void 0:i.nativeEl;if(a)return fg(a,e)}get textTracks(){var e;return(e=this.media)==null?void 0:e.textTracks}get castReceiver(){var e;return(e=this.getAttribute(k.CAST_RECEIVER))!=null?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(k.CAST_RECEIVER,e):this.removeAttribute(k.CAST_RECEIVER))}get castCustomData(){var e;return(e=this.media)==null?void 0:e.castCustomData}set castCustomData(e){if(!this.media){Xe("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(k.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(k.NO_TOOLTIPS);return}this.setAttribute(k.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(k.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(k.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return(e=this.media)==null?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){Xe("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=e}get maxReconnectRetries(){var e;return(e=this.media)==null?void 0:e.maxReconnectRetries}set maxReconnectRetries(e){if(!this.media){Xe("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=e}};Oo=new WeakMap,Nn=new WeakMap,No=new WeakMap,pa=new WeakMap,Po=new WeakMap,Pn=new WeakMap,ml=new WeakMap,pl=new WeakMap,Tr=new WeakMap,vl=new WeakMap,fl=new WeakMap,El=new WeakMap,$n=new WeakMap,Ar=new WeakMap,_l=new WeakMap,pe=new WeakSet,_i=function(){var t,e,i,a;if(!B(this,Nn)){Je(this,Nn,!0),be(this,pe,ya).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof ti.HTMLElement))throw""}catch{Xe("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{Xe("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof j1))throw""}catch{Xe("<media-controller> failed to upgrade!")}be(this,pe,Xm).call(this),be(this,pe,Jm).call(this),be(this,pe,ep).call(this),Je(this,pa,(e=(t=this.mediaController)==null?void 0:t.hasAttribute($.USER_INACTIVE))!=null?e:!0),be(this,pe,tp).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",B(this,ml)),(a=this.media)==null||a.addEventListener("loadstart",B(this,pl)),this.media&&(this.media.metadata=An(this))}},dE=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Ou=function(t){Object.assign(B(this,Ar),t),be(this,pe,ya).call(this)},ya=function(t={}){ck(mk(kk(this,{...B(this,Ar),...t})),this.shadowRoot)},Xm=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(xu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};Je(this,Pn,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),B(this,Pn).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Jm=function(){var t,e;this.addEventListener("error",B(this,_l)),this.addEventListener("click",B(this,vl)),(t=this.mediaTheme)==null||t.addEventListener("close",B(this,fl)),(e=this.mediaTheme)==null||e.addEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof L))return i;let s=oE((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},ep=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",B(this,Tr)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",B(this,Tr))},tp=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===ee.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(u,p,m=!1)=>{r()||Array.from(u&&u.activeCues||[]).forEach(c=>{if(!(!c.snapToLines||c.line<-5||c.line>=0&&c.line<10))if(!p||this.paused){let d=c.text.split(`
`).length,v=-3;this.streamType===ee.LIVE&&(v=-2);let f=v-d;if(c.line===f&&!m)return;a.has(c)||a.set(c,c.line),c.line=f}else setTimeout(()=>{c.line=a.get(c)||"auto"},500)})},s=()=>{var u,p;n(i,(p=(u=this.mediaController)==null?void 0:u.hasAttribute($.USER_INACTIVE))!=null?p:!1)},o=()=>{var u,p;let m=Array.from(((p=(u=this.mediaController)==null?void 0:u.media)==null?void 0:p.textTracks)||[]).filter(c=>["subtitles","captions"].includes(c.kind)&&c.mode==="showing")[0];m!==i&&(i==null||i.removeEventListener("cuechange",s)),i=m,i==null||i.addEventListener("cuechange",s),n(i,B(this,pa))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var u,p;let m=(p=(u=this.mediaController)==null?void 0:u.hasAttribute($.USER_INACTIVE))!=null?p:!0;B(this,pa)!==m&&(Je(this,pa,m),n(i,B(this,pa)))};this.addEventListener("userinactivechange",l),Je(this,$n,()=>{var u,p;i==null||i.removeEventListener("cuechange",s),(u=this.textTracks)==null||u.removeEventListener("change",o),(p=this.textTracks)==null||p.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function Ft(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var ip=Mk,uE=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends uE{}globalThis.DocumentFragment=t}var xk=class extends uE{},Ok={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(xk)}},Nk={customElements:Ok},Pk=typeof window>"u"||typeof globalThis.customElements>"u",cd=Pk?Nk:globalThis;cd.customElements.get("mux-player")||(cd.customElements.define("mux-player",ip),cd.MuxPlayerElement=ip);var cE=parseInt(Un.version)>=19,ap={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},$k=t=>t==null,Uk=(t,e)=>$k(e)?!1:t in e,Hk=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Bk=(t,e)=>{if(!(!cE&&typeof e=="boolean"&&!e)){if(Uk(t,ap))return ap[t];if(typeof e<"u")return/[A-Z]/.test(t)?Hk(t):t}},Wk=(t,e)=>!cE&&typeof t=="boolean"?"":t,Fk=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=Bk(r,n);if(!s)return a;let o=Wk(n);return a[s]=o,a},{})};function rp(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Kk(...t){return e=>{let i=!1,a=t.map(r=>{let n=rp(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():rp(t[r],null)}}}}function Vk(...t){return Hn.useCallback(Kk(...t),t)}var qk=Object.prototype.hasOwnProperty,Yk=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!qk.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},hE=(t,e,i)=>!Yk(e,t[i]),Gk=(t,e,i)=>{t[i]=e},zk=(t,e,i,a=Gk,r=hE)=>Hn.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),kt=zk,Qk=()=>{try{return"3.13.4"}catch{}return"UNKNOWN"},jk=Qk(),Zk=()=>jk,de=(t,e,i)=>Hn.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),Xk=Un.forwardRef(({children:t,...e},i)=>Un.createElement("mux-player",{suppressHydrationWarning:!0,...Fk(e),ref:i},t)),Jk=(t,e)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:u,onProgress:p,onDurationChange:m,onVolumeChange:c,onRateChange:d,onResize:v,onWaiting:f,onPlay:g,onPlaying:y,onTimeUpdate:b,onPause:E,onSeeking:S,onSeeked:M,onStalled:C,onSuspend:I,onEnded:H,onError:q,onCuePointChange:F,onChapterChange:W,metadata:He,tokens:it,paused:at,playbackId:ye,playbackRates:Ve,currentTime:Ut,themeProps:qe,extraSourceParams:yt,castCustomData:rt,_hlsConfig:De,...di}=e;return kt("tokens",it,t),kt("playbackId",ye,t),kt("playbackRates",Ve,t),kt("metadata",He,t),kt("disableCookies",(i=e.disableCookies)!=null?i:!1,t),kt("extraSourceParams",yt,t),kt("_hlsConfig",De,t),kt("themeProps",qe,t),kt("castCustomData",rt,t),kt("paused",at,t,(Be,Ye)=>{Ye!=null&&(Ye?Be.pause():Be.play())},(Be,Ye,ui)=>Be.hasAttribute("autoplay")&&!Be.hasPlayed?!1:hE(Be,Ye,ui)),kt("currentTime",Ut,t,(Be,Ye)=>{Ye!=null&&(Be.currentTime=Ye)}),de("abort",t,a),de("canplay",t,r),de("canplaythrough",t,n),de("emptied",t,s),de("loadstart",t,o),de("loadeddata",t,l),de("loadedmetadata",t,u),de("progress",t,p),de("durationchange",t,m),de("volumechange",t,c),de("ratechange",t,d),de("resize",t,v),de("waiting",t,f),de("play",t,g),de("playing",t,y),de("timeupdate",t,b),de("pause",t,E),de("seeking",t,S),de("seeked",t,M),de("stalled",t,C),de("suspend",t,I),de("ended",t,H),de("error",t,q),de("cuepointchange",t,F),de("chapterchange",t,W),[di]},eS=Zk(),tS="mux-player-react",iS=Un.forwardRef((t,e)=>{var i;let a=Hn.useRef(null),r=Vk(a,e),[n]=Jk(a,t),[s]=Hn.useState((i=t.playerInitTime)!=null?i:Yu());return Un.createElement(Xk,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:tS,playerSoftwareVersion:eS,playerInitTime:s,...n})}),kS=iS;export{dS as MaxResolution,L as MediaError,uS as MinResolution,cS as RenditionOrder,kS as default,Yu as generatePlayerInitTime,tS as playerSoftwareName,eS as playerSoftwareVersion};
