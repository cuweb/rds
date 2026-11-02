var VE=Object.defineProperty;var qE=Object.getPrototypeOf;var YE=Reflect.get;var Dh=t=>{throw TypeError(t)};var GE=(t,e,i)=>e in t?VE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var xh=(t,e,i)=>GE(t,typeof e!="symbol"?e+"":e,i),Vl=(t,e,i)=>e.has(t)||Dh("Cannot "+i);var S=(t,e,i)=>(Vl(t,e,"read from private field"),i?i.call(t):e.get(t)),qe=(t,e,i)=>e.has(t)?Dh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Xe=(t,e,i,a)=>(Vl(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Et=(t,e,i)=>(Vl(t,e,"access private method"),i);var is=(t,e,i)=>YE(qE(t),i,e);import{R as Un,r as $n}from"./iframe-CZpQFbJ7.js";import{H as jE,C as zE}from"./hls-3q47HhIL.js";import{C as as,M as QE}from"./mixin-DgVycuUU.js";import"./preload-helper-Dp1pzeXC.js";var ZE=Object.create,_p=Object.defineProperty,XE=Object.getOwnPropertyDescriptor,JE=Object.getOwnPropertyNames,e_=Object.getPrototypeOf,t_=Object.prototype.hasOwnProperty,bp=function(t,e){return function(){return t&&(e=t(t=0)),e}},vt=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},i_=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=JE(e),n=0,s=r.length,o;n<s;n++)o=r[n],!t_.call(t,o)&&o!==i&&_p(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=XE(e,o))||a.enumerable});return t},a_=function(t,e,i){return i=t!=null?ZE(e_(t)):{},i_(!t||!t.__esModule?_p(i,"default",{value:t,enumerable:!0}):i,t)};function Ca(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):Ca(t,e)}var La=bp(function(){La()});function Uu(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var $u=bp(function(){}),gp=vt(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),r_=vt(function(t,e){La(),e.exports=i;function i(a,r){if(!Ca(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),n_=vt(function(t,e){La(),e.exports=i;function i(a,r){if(!Ca(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),yp=vt(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Tp=vt(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Ap=vt(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),s_=vt(function(t,e){$u(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(u){switch(u.nodeType){case 3:return p(u.data);case 8:return"<!--"+u.data+"-->";default:return r(u)}}function r(u){var c=[],f=u.tagName;return u.namespaceURI==="http://www.w3.org/1999/xhtml"&&(f=f.toLowerCase()),c.push("<"+f+d(u)+o(u)),i.indexOf(f)>-1?c.push(" />"):(c.push(">"),u.childNodes.length?c.push.apply(c,u.childNodes.map(a)):u.textContent||u.innerText?c.push(p(u.textContent||u.innerText)):u.innerHTML&&c.push(u.innerHTML),c.push("</"+f+">")),c.join("")}function n(u,c){var f=Uu(u[c]);return c==="style"&&Object.keys(u.style).length>0?!0:u.hasOwnProperty(c)&&(f==="string"||f==="boolean"||f==="number")&&c!=="nodeName"&&c!=="className"&&c!=="tagName"&&c!=="textContent"&&c!=="innerText"&&c!=="namespaceURI"&&c!=="innerHTML"}function s(u){if(typeof u=="string")return u;var c="";return Object.keys(u).forEach(function(f){var b=u[f];f=f.replace(/[A-Z]/g,function(E){return"-"+E.toLowerCase()}),c+=f+":"+b+";"}),c}function o(u){var c=u.dataset,f=[];for(var b in c)f.push({name:"data-"+b,value:c[b]});return f.length?l(f):""}function l(u){var c=[];return u.forEach(function(f){var b=f.name,E=f.value;b==="style"&&(E=s(E)),c.push(b+'="'+h(E)+'"')}),c.length?" "+c.join(" "):""}function d(u){var c=[];for(var f in u)n(u,f)&&c.push({name:f,value:u[f]});for(var b in u._attributes)for(var E in u._attributes[b]){var T=u._attributes[b][E],v=(T.prefix?T.prefix+":":"")+E;c.push({name:v,value:T.value})}return u.className&&c.push({name:"class",value:u.className}),c.length?l(c):""}function p(u){var c="";return typeof u=="string"?c=u:u&&(c=u.toString()),c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(u){return p(u).replace(/"/g,"&quot;")}}),kp=vt(function(t,e){La();var i=gp(),a=yp(),r=Tp(),n=Ap(),s=s_(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(d,p,h){if(!Ca(this,l))return new l(d);var u=h===void 0?o:h||null;this.tagName=u===o?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=p||null,this.namespaceURI=u,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},l.prototype.replaceChild=function(d,p){d.parentNode&&d.parentNode.removeChild(d);var h=this.childNodes.indexOf(p);return p.parentNode=null,this.childNodes[h]=d,d.parentNode=this,p},l.prototype.removeChild=function(d){var p=this.childNodes.indexOf(d);return this.childNodes.splice(p,1),d.parentNode=null,d},l.prototype.insertBefore=function(d,p){d.parentNode&&d.parentNode.removeChild(d);var h=p==null?-1:this.childNodes.indexOf(p);return h>-1?this.childNodes.splice(h,0,d):this.childNodes.push(d),d.parentNode=this,d},l.prototype.setAttributeNS=function(d,p,h){var u=null,c=p,f=p.indexOf(":");if(f>-1&&(u=p.substr(0,f),c=p.substr(f+1)),this.tagName==="INPUT"&&p==="type")this.type=h;else{var b=this._attributes[d]||(this._attributes[d]={});b[c]={value:h,prefix:u}}},l.prototype.getAttributeNS=function(d,p){var h=this._attributes[d],u=h&&h[p]&&h[p].value;return this.tagName==="INPUT"&&p==="type"?this.type:typeof u!="string"?null:u},l.prototype.removeAttributeNS=function(d,p){var h=this._attributes[d];h&&delete h[p]},l.prototype.hasAttributeNS=function(d,p){var h=this._attributes[d];return!!h&&p in h},l.prototype.setAttribute=function(d,p){return this.setAttributeNS(null,d,p)},l.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},l.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},l.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(d){var p=d.split(" "),h=[];return i(this,function(u){if(u.nodeType===1){var c=u.className||"",f=c.split(" ");p.every(function(b){return f.indexOf(b)!==-1})&&h.push(u)}}),h},l.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var p=[];return i(this.childNodes,function(h){h.nodeType===1&&(d==="*"||h.tagName.toLowerCase()===d)&&p.push(h)}),p},l.prototype.contains=function(d){return i(this,function(p){return d===p})||!1}}),o_=vt(function(t,e){La();var i=kp();e.exports=a;function a(r){if(!Ca(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),l_=vt(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),d_=vt(function(t,e){La();var i=gp(),a=r_(),r=n_(),n=kp(),s=o_(),o=l_(),l=yp(),d=Tp(),p=Ap();e.exports=h;function h(){if(!Ca(this,h))return new h;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var u=h.prototype;u.createTextNode=function(c){return new r(c,this)},u.createElementNS=function(c,f){var b=c===null?null:String(c);return new n(f,this,b)},u.createElement=function(c){return new n(c,this)},u.createDocumentFragment=function(){return new s(this)},u.createEvent=function(c){return new o(c)},u.createComment=function(c){return new a(c,this)},u.getElementById=function(c){c=String(c);var f=i(this.childNodes,function(b){if(String(b.id)===c)return b});return f||null},u.getElementsByClassName=n.prototype.getElementsByClassName,u.getElementsByTagName=n.prototype.getElementsByTagName,u.contains=n.prototype.contains,u.removeEventListener=p,u.addEventListener=d,u.dispatchEvent=l}),u_=vt(function(t,e){var i=d_();e.exports=new i}),c_=vt(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=u_(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function h_(t){if(Array.isArray(t))return t}function m_(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function p_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function Sp(t,e){if(t){if(typeof t=="string")return hd(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return hd(t,e)}}function at(t,e){return h_(t)||m_(t,e)||Sp(t,e)||p_()}var v_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{},q=v_,f_={now:function(){var t=q.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},He=f_,Hn=function(){var t,e,i;if(typeof((t=q.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),q.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var d=l==="x"?i[n]:i[n]&3|8;return n++,d.toString(16)});var s=He.now(),o=s==null?void 0:s.toString(16).substring(3);return o?e.substring(0,28)+o:e},wp=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},Ct=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=wp()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),(e==null?void 0:e.muxId)||t},Po=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=Ct(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function E_(t){if(Array.isArray(t))return hd(t)}function __(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function b_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(t){return E_(t)||__(t)||Sp(t)||b_()}var fa={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},g_=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,Lt(o)),d=(a=console.info).bind.apply(a,Lt(o)),p=(r=console.debug).bind.apply(r,Lt(o)),h=(n=console.warn).bind.apply(n,Lt(o)),u=(s=console.error).bind.apply(s,Lt(o)),c=e;return{trace:function(){for(var f=arguments.length,b=new Array(f),E=0;E<f;E++)b[E]=arguments[E];if(!(c>fa.TRACE))return l.apply(void 0,Lt(b))},debug:function(){for(var f=arguments.length,b=new Array(f),E=0;E<f;E++)b[E]=arguments[E];if(!(c>fa.DEBUG))return p.apply(void 0,Lt(b))},info:function(){for(var f=arguments.length,b=new Array(f),E=0;E<f;E++)b[E]=arguments[E];if(!(c>fa.INFO))return d.apply(void 0,Lt(b))},warn:function(){for(var f=arguments.length,b=new Array(f),E=0;E<f;E++)b[E]=arguments[E];if(!(c>fa.WARN))return h.apply(void 0,Lt(b))},error:function(){for(var f=arguments.length,b=new Array(f),E=0;E<f;E++)b[E]=arguments[E];if(!(c>fa.ERROR))return u.apply(void 0,Lt(b))},get level(){return c},set level(f){f!==this.level&&(c=f??e)}}},G=g_("[mux]");function md(){var t=q.doNotTrack||q.navigator&&q.navigator.doNotTrack;return t==="1"}function H(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}La();function me(t,e){if(!Ca(t,e))throw new TypeError("Cannot call a class as a function")}function Oh(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function nt(t,e,i){return e&&Oh(t.prototype,e),i&&Oh(t,i),t}function A(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function wr(t){return wr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},wr(t)}function y_(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=wr(t),t!==null););return t}function As(t,e,i){return typeof Reflect<"u"&&Reflect.get?As=Reflect.get:As=function(a,r,n){var s=y_(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},As(t,e,i||t)}function pd(t,e){return pd=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},pd(t,e)}function Hu(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pd(t,e)}function T_(t,e){if(t==null)return{};var i={},a=Object.keys(t),r,n;for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function A_(t,e){if(t==null)return{};var i=T_(t,e),a,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function k_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}$u();function S_(t,e){return e&&(Uu(e)==="object"||typeof e=="function")?e:H(t)}function Bu(t){var e=k_();return function(){var i=wr(t),a;if(e){var r=wr(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return S_(this,a)}}var $t=function(t){return Bn(t)[0]},Bn=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},w_={exists:function(){var t=q.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=q.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=q.performance,e=t&&t.timing;return e&&e.navigationStart}},Uo=w_;function Oe(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function tt(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){A(t,r,i[r])})}return t}function I_(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function Wu(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I_(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var R_=["x-cdn","content-type"],Ip=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],C_=R_.concat(Ip);function Fu(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(C_.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function $o(t){if(t){var e=Ip.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var L_=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},Rp=L_,M_=function(t){return!!t&&typeof t=="object"&&"length"in t&&typeof t.length=="number"},D_=function(t){return!!t&&typeof t=="object"&&"addEventListener"in t&&typeof t.addEventListener=="function"&&"removeEventListener"in t&&typeof t.removeEventListener=="function"},Nh=["addtrack","removetrack","change"],x_=1,Ku=function(t,e){try{if(t&&e in t){var i=t[e];if(M_(i)&&D_(i))return i}}catch(a){G.warn("Unable to access `"+e+"` on the media element.",a)}},Vu=function(t,e,i){if(!(t.readyState<x_))return Array.prototype.find.call(e,i)||null},Cp=function(t,e,i,a){var r=Ku(t,e);if(r){var n,s=function(){try{var l=Vu(t,r,i);l!==void 0&&l!==n&&(n=l,a(n))}catch(d){G.warn("Exception while checking `"+e+"` for changes.",d)}},o=function(){try{t.removeEventListener("loadedmetadata",s),t.removeEventListener("emptied",s),Nh.forEach(function(l){return r.removeEventListener(l,s)})}catch(l){G.warn("Unable to stop monitoring `"+e+"`.",l)}};try{Nh.forEach(function(l){return r.addEventListener(l,s)}),t.addEventListener("loadedmetadata",s),t.addEventListener("emptied",s)}catch(l){G.warn("Unable to monitor `"+e+"`.",l),o();return}return{refresh:s,destroy:o}}},qu=function(t){switch(t){case 1:return"mono";case 2:return"stereo";case 6:return"5.1";case 8:return"7.1"}return String(t)},Lp=function(t){var e,i;if(!t)return{player_audio_track_enabled:!1};var a={player_audio_track_enabled:!0};return t.label&&(a.player_audio_track_name=t.label),t.language&&(a.player_audio_track_language=t.language),!((e=t.configuration)===null||e===void 0)&&e.codec&&(a.player_audio_track_codec=t.configuration.codec),!((i=t.configuration)===null||i===void 0)&&i.numberOfChannels&&(a.player_audio_track_channels=qu(t.configuration.numberOfChannels)),a},Mp=function(t){return t.enabled},O_=function(t){var e=Ku(t,"audioTracks");if(e){var i=Vu(t,e,Mp);return i===void 0?void 0:Lp(i)}if("mozHasAudio"in t&&typeof t.mozHasAudio=="boolean")return{player_audio_track_enabled:t.mozHasAudio}},N_=function(t){var e=t.mediaElement,i=t.onChange;return Cp(e,"audioTracks",Mp,function(a){return i(Lp(a))})},Dp=function(t){switch(t){case"captions":return"cc";case"subtitles":case"forced":return"subtitles"}},xp=function(t){return t.mode==="showing"&&Dp(t.kind)!==void 0},P_=function(t,e){return Array.prototype.some.call(e.querySelectorAll("track"),function(i){return i.track===t})},U_=function(t,e){if(P_(t,e))return"webvtt"},Op=function(t,e){if(!t)return{player_text_track_enabled:!1};var i={player_text_track_enabled:!0},a=Dp(t.kind);a&&(i.player_text_track_type=a);var r=U_(t,e);return r&&(i.player_text_track_format=r),t.label&&(i.player_text_track_name=t.label),t.language&&(i.player_text_track_language=t.language),i},$_=function(t){var e=Ku(t,"textTracks");if(e){var i=Vu(t,e,xp);if(i!==void 0)return Op(i,t)}},H_=function(t){var e=t.mediaElement,i=t.onChange;return Cp(e,"textTracks",xp,function(a){return i(Op(a,e))})},Np=function(t,e){var i=Object.keys(t),a=Object.keys(e);return i.length===a.length&&i.every(function(r){return Object.prototype.hasOwnProperty.call(e,r)&&t[r]===e[r]})},B_=function(t){if(t){if(t=String(t),t.endsWith("/JOC"))return"atmos";var e=parseInt(t,10);return String(e)===t?qu(e):t}},W_=function(t){if(t.length)return t[0].player_audio_track_enabled?t.reduce(function(e,i){return tt({},i,e)}):{player_audio_track_enabled:!1}},F_=function(t){var e,i={player_audio_track_enabled:!0};t.name&&(i.player_audio_track_name=t.name),t.lang&&(i.player_audio_track_language=t.lang),t.audioCodec&&(i.player_audio_track_codec=t.audioCodec);var a=t.channels||((e=t.attrs)===null||e===void 0?void 0:e.CHANNELS),r=a&&B_(a);return r&&(i.player_audio_track_channels=r),i},K_=["mp4a","ac-3","ec-3","ac-4","opus","flac","alac"],V_=function(t){return t.split(",").map(function(e){return e.trim()}).find(function(e){return K_.indexOf(e.slice(0,4).toLowerCase())!==-1})},q_=function(t){var e,i={player_audio_track_enabled:!0};if(t.codec){var a=t.id==="audio"?t.codec:V_(t.codec);a&&(i.player_audio_track_codec=a)}if(!((e=t.metadata)===null||e===void 0)&&e.channelCount){var r;i.player_audio_track_channels=qu((r=t.metadata)===null||r===void 0?void 0:r.channelCount)}return i},Y_=function(t){var e=t.find(function(a){return a.audio});if(e)return e.audio;var i=t.find(function(a){return a.audiovideo});return i==null?void 0:i.audiovideo},G_=function(t,e){var i=["player_audio_track_name","player_audio_track_language"],a=!1,r=!0,n=!1,s=void 0;try{for(var o=i[Symbol.iterator](),l;!(r=(l=o.next()).done);r=!0){var d=l.value,p=t[d],h=e[d];if(p&&h){if(p!==h)return!1;a=!0}}}catch(u){n=!0,s=u}finally{try{!r&&o.return!=null&&o.return()}finally{if(n)throw s}}return a},j_=(function(){function t(e){var i=e.hls,a=e.Hls,r=e.onAudioTrackChange,n=this;me(this,t),A(this,"hls",void 0),A(this,"audioSwitchIsPlayheadBased",!1),A(this,"listeners",[]),A(this,"onAudioTrackChange",void 0),A(this,"previousEvent",void 0),A(this,"transition",void 0),this.onAudioTrackChange=r;var s=at(String(a==null?void 0:a.version).split("."),2),o=s[0],l=s[1];if(o!=="1"){G.warn("Unsupported hls.js version "+(a==null?void 0:a.version)+" for audiotrackchange detection. Audio track changes are only reported from the media element.");return}var d=parseInt(l);isFinite(d)&&d>=7&&(this.audioSwitchIsPlayheadBased=!0);var p=a.Events||{},h,u=(h={},A(h,p.LEVEL_SWITCHING,this.onLevelSwitching),A(h,p.LEVEL_SWITCHED,this.onLevelSwitched),A(h,p.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching),A(h,p.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched),A(h,p.BUFFER_CODECS,this.onBufferCodecs),A(h,p.MANIFEST_LOADING,this.onManifestLoading),A(h,p.MEDIA_ATTACHED,this.onMediaAttached),A(h,p.MEDIA_DETACHING,this.onMediaDetaching),A(h,p.ERROR,this.onError),h);this.hls=i,this.addMediaElementMonitorOverride(),Object.keys(u).forEach(function(c){var f=u[c],b=function(E,T){try{f.call(n,E,T)}catch(v){G.warn("Exception in hls.js "+E+" handler for audiotrackchange.",v)}};n.listeners.push([c,b]),i.on(c,b)})}return nt(t,[{key:"addMediaElementMonitorOverride",value:function(){var e=this,i,a;!((a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0)&&i.mux&&(this.hls.media.mux.audioTrackChangeHandler=function(r){return e.onMediaElementMonitorEvent(r)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,i,a;(a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0||(e=i.mux)===null||e===void 0||delete e.audioTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.transition=void 0,this.listeners.forEach(function(i){var a=at(i,2),r=a[0],n=a[1];return e.off(r,n)}),this.listeners=[])}},{key:"onMediaElementMonitorEvent",value:function(e){this.transition&&(this.transition.mediaElementMonitorEvent=e)}},{key:"onManifestLoading",value:function(){this.transition=void 0}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.transition=void 0,this.previousEvent=void 0}},{key:"onError",value:function(e,i){i!=null&&i.fatal&&(this.transition=void 0)}},{key:"onLevelSwitching",value:function(e,i){this.transition=this.transition||{},this.transition.levelSwitching=tt({},i),this.transition.levelSwitched&&(this.transition.levelSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onLevelSwitched",value:function(e,i){this.transition&&(this.transition.levelSwitched=tt({},i),this.checkTransitionFinished())}},{key:"onBufferCodecs",value:function(e,i){this.transition&&(this.transition.bufferCodecs=this.transition.bufferCodecs||[],this.transition.bufferCodecs.push(tt({},i)))}},{key:"onAudioTrackSwitching",value:function(e,i){var a,r,n;this.transition=this.transition||{},this.transition.audioTrackSwitching=tt({},i);var s=typeof(i==null?void 0:i.id)=="number"?i.id:(a=this.hls)===null||a===void 0?void 0:a.audioTrack;this.transition.audioTrackObj=(n=this.hls)===null||n===void 0||(r=n.audioTracks)===null||r===void 0?void 0:r[s],this.transition.audioTrackSwitched&&(this.transition.audioTrackSwitched=void 0,this.transition.bufferCodecs=void 0)}},{key:"onAudioTrackSwitched",value:function(e,i){this.transition&&(this.transition.audioTrackSwitched=tt({},i),this.checkTransitionFinished())}},{key:"checkTransitionFinished",value:function(){var e,i,a,r=this.transition;if(r&&!(r.audioTrackSwitching&&!r.audioTrackSwitched)&&!(r.levelSwitching&&!r.levelSwitched)){this.transition=void 0;var n=r.audioTrackObj||((i=this.hls)===null||i===void 0||(e=i.audioTracks)===null||e===void 0?void 0:e[this.hls.audioTrack]),s=((a=r.bufferCodecs)===null||a===void 0?void 0:a.length)&&Y_(r.bufferCodecs);if(!(n&&!r.audioTrackSwitched&&!s&&!r.mediaElementMonitorEvent)){var o=[],l=n&&F_(n);l&&o.push(l),s&&o.push(q_(s));var d=r.mediaElementMonitorEvent;if(!d){var p,h=(p=this.hls)===null||p===void 0?void 0:p.media;h&&(this.audioSwitchIsPlayheadBased||r.levelSwitched)&&(d=O_(h))}d&&(!l||G_(d,l))&&o.push(d);var u=W_(o);if(u){var c=this.previousEvent,f=!c||!!r.audioTrackSwitched||!Np(c,u);f&&(this.previousEvent=u,this.onAudioTrackChange(tt({},u)))}}}}}]),t})(),z_=["public.accessibility.transcribes-spoken-dialog","public.accessibility.describes-music-and-sound"],Q_=function(t){if(t){var e=t.split(",").map(function(i){return i.trim()});if(z_.every(function(i){return e.indexOf(i)!==-1}))return"cc"}return"subtitles"},Z_=function(t){if(t)return t==="wvtt"?"webvtt":t.indexOf("stpp")===0?"ttml":t},X_=function(t){var e,i={player_text_track_enabled:!0},a=Q_(t.characteristics||((e=t.attrs)===null||e===void 0?void 0:e.CHARACTERISTICS));a&&(i.player_text_track_type=a);var r=Z_(t.textCodec);return r&&(i.player_text_track_format=r),t.name&&(i.player_text_track_name=t.name),t.lang&&(i.player_text_track_language=t.lang),i},J_=(function(){function t(e){var i=e.hls,a=e.Hls,r=e.onTextTrackChange,n=this;me(this,t),A(this,"hls",void 0),A(this,"listeners",[]),A(this,"onTextTrackChange",void 0),A(this,"levelSwitched",!1),A(this,"previousEvent",void 0),this.onTextTrackChange=r;var s=at(String(a==null?void 0:a.version).split("."),1),o=s[0];if(o!=="1"){G.warn("Unsupported hls.js version "+(a==null?void 0:a.version)+" for texttrackchange detection. Text track changes are only reported from the media element.");return}var l=a.Events||{},d=[[l.LEVEL_SWITCHED,this.onLevelSwitched],[l.SUBTITLE_TRACKS_UPDATED,this.refresh],[l.SUBTITLE_TRACKS_CLEARED,this.refresh],[l.SUBTITLE_TRACK_SWITCH,this.refresh],[l.MEDIA_ATTACHED,this.onMediaAttached],[l.MEDIA_DETACHING,this.onMediaDetaching]];this.hls=i,this.addMediaElementMonitorOverride(),d.forEach(function(p){var h=at(p,2),u=h[0],c=h[1];if(u){var f=function(b){try{c.call(n)}catch(E){G.warn("Exception in hls.js "+b+" handler for texttrackchange.",E)}};n.listeners.push([u,f]),i.on(u,f)}}),this.refresh()}return nt(t,[{key:"addMediaElementMonitorOverride",value:function(){var e=this,i,a;!((a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0)&&i.mux&&(this.hls.media.mux.textTrackChangeHandler=function(r){return e.onMediaElementMonitorEvent(r)})}},{key:"removeMediaElementMonitorOverride",value:function(){var e,i,a;(a=this.hls)===null||a===void 0||(i=a.media)===null||i===void 0||(e=i.mux)===null||e===void 0||delete e.textTrackChangeHandler}},{key:"destroy",value:function(){var e=this.hls;e&&(this.removeMediaElementMonitorOverride(),this.hls=void 0,this.listeners.forEach(function(i){var a=at(i,2),r=a[0],n=a[1];return e.off(r,n)}),this.listeners=[])}},{key:"getSelectedSubtitleTrack",value:function(){var e,i=this.hls;if(!(!i||typeof i.subtitleTrack!="number"||i.subtitleTrack<0))return(e=i.subtitleTracks)===null||e===void 0?void 0:e[i.subtitleTrack]}},{key:"onMediaElementMonitorEvent",value:function(e){try{if(this.getSelectedSubtitleTrack())return;this.emit(e)}catch(i){G.warn("Exception handling a media element text track change for hls.js.",i)}}},{key:"onLevelSwitched",value:function(){this.levelSwitched=!0,this.refresh()}},{key:"onMediaAttached",value:function(){this.addMediaElementMonitorOverride(),this.getSelectedSubtitleTrack()&&this.refresh()}},{key:"onMediaDetaching",value:function(){this.removeMediaElementMonitorOverride(),this.previousEvent=void 0}},{key:"isLevelSwitched",value:function(){var e,i=(e=this.hls)===null||e===void 0?void 0:e.currentLevel;return this.levelSwitched||typeof i=="number"&&i>=0}},{key:"refresh",value:function(){try{var e=this.hls;if(!e||!this.isLevelSwitched())return;var i=this.getSelectedSubtitleTrack();if(i){this.emit(X_(i));return}var a=e.media&&$_(e.media);a&&this.emit(a)}catch(r){G.warn("Exception while refreshing the hls.js text track state.",r)}}},{key:"emit",value:function(e){this.previousEvent&&Np(this.previousEvent,e)||(this.previousEvent=e,this.onTextTrackChange(tt({},e)))}}]),t})(),rs=function(t){if(!t)return{};var e=Uo.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},Br=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return Fu(t.getAllResponseHeaders())},eb=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(v){var y=parseInt(a.version),w;return y===1&&v.programDateTime!==null&&(w=v.programDateTime),y===0&&v.pdt!==null&&(w=v.pdt),w};if(!Uo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(v,y){return t.emit(e,v,y)},l=function(v,y){var w=y.levels,k=y.audioTracks,L=y.url,I=y.stats,U=y.networkDetails,Y=y.sessionData,W={},F={};w.forEach(function(Ce,Le){W[Le]={width:Ce.width,height:Ce.height,bitrate:Ce.bitrate,attrs:Ce.attrs}}),k.forEach(function(Ce,Le){F[Le]={name:Ce.name,language:Ce.lang,bitrate:Ce.bitrate}});var de=rs(I),ue=de.bytesLoaded,Ke=de.requestStart,st=de.responseStart,ot=de.responseEnd;o("requestcompleted",Wu(tt({},Rp(Y)),{request_event_type:v,request_bytes_loaded:ue,request_start:Ke,request_response_start:st,request_response_end:ot,request_type:"manifest",request_hostname:$t(L),request_response_headers:Br(U),request_rendition_lists:{media:W,audio:F,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(v,y){var w=y.details,k=y.level,L=y.networkDetails,I=y.stats,U=rs(I),Y=U.bytesLoaded,W=U.requestStart,F=U.responseStart,de=U.responseEnd,ue=w.fragments[w.fragments.length-1],Ke=s(ue)+n(ue.duration);o("requestcompleted",{request_event_type:v,request_bytes_loaded:Y,request_start:W,request_response_start:F,request_response_end:de,request_current_level:k,request_type:"manifest",request_hostname:$t(w.url),request_response_headers:Br(L),video_holdback:w.holdBack&&n(w.holdBack),video_part_holdback:w.partHoldBack&&n(w.partHoldBack),video_part_target_duration:w.partTarget&&n(w.partTarget),video_target_duration:w.targetduration&&n(w.targetduration),video_source_is_live:w.live,player_manifest_newest_program_time:isNaN(Ke)?void 0:Ke})};i.on(a.Events.LEVEL_LOADED,d);var p=function(v,y){var w=y.details,k=y.networkDetails,L=y.stats,I=rs(L),U=I.bytesLoaded,Y=I.requestStart,W=I.responseStart,F=I.responseEnd;o("requestcompleted",{request_event_type:v,request_bytes_loaded:U,request_start:Y,request_response_start:W,request_response_end:F,request_type:"manifest",request_hostname:$t(w.url),request_response_headers:Br(k)})};i.on(a.Events.AUDIO_TRACK_LOADED,p);var h=function(v,y){var w=y.stats,k=y.networkDetails,L=y.frag;w=w||L.stats;var I=rs(w),U=I.bytesLoaded,Y=I.requestStart,W=I.responseStart,F=I.responseEnd,de=k?Br(k):void 0,ue={request_event_type:v,request_bytes_loaded:U,request_start:Y,request_response_start:W,request_response_end:F,request_hostname:k?$t(k.responseURL):void 0,request_id:de?$o(de):void 0,request_response_headers:de,request_media_duration:L.duration,request_url:k==null?void 0:k.responseURL};L.type==="main"?(ue.request_type="media",ue.request_current_level=L.level,ue.request_video_width=(i.levels[L.level]||{}).width,ue.request_video_height=(i.levels[L.level]||{}).height,ue.request_labeled_bitrate=(i.levels[L.level]||{}).bitrate):ue.request_type=L.type,o("requestcompleted",ue)};i.on(a.Events.FRAG_LOADED,h);var u=function(v,y){var w=y.frag,k=w.start,L=s(w),I={currentFragmentPDT:L,currentFragmentStart:n(k)};o("fragmentchange",I)};i.on(a.Events.FRAG_CHANGED,u);var c=function(v,y){var w=y.type,k=y.details,L=y.response,I=y.fatal,U=y.frag,Y=y.networkDetails,W=(U==null?void 0:U.url)||y.url||"",F=Y?Br(Y):void 0;if((k===a.ErrorDetails.MANIFEST_LOAD_ERROR||k===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||k===a.ErrorDetails.FRAG_LOAD_ERROR||k===a.ErrorDetails.FRAG_LOAD_TIMEOUT||k===a.ErrorDetails.LEVEL_LOAD_ERROR||k===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||k===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||k===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||k===a.ErrorDetails.SUBTITLE_LOAD_ERROR||k===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||k===a.ErrorDetails.KEY_LOAD_ERROR||k===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:k,request_url:W,request_hostname:$t(W),request_id:F?$o(F):void 0,request_type:k===a.ErrorDetails.FRAG_LOAD_ERROR||k===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":k===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||k===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":k===a.ErrorDetails.SUBTITLE_LOAD_ERROR||k===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":k===a.ErrorDetails.KEY_LOAD_ERROR||k===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:L==null?void 0:L.code,request_error_text:L==null?void 0:L.text}),I){var de,ue="".concat(W?"url: ".concat(W,`
`):"")+"".concat(L&&(L.code||L.text)?"response: ".concat(L.code,", ").concat(L.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((de=y.err)===null||de===void 0?void 0:de.message,`
`):"");o("error",{player_error_code:w,player_error_message:k,player_error_context:ue})}};i.on(a.Events.ERROR,c);var f=function(v,y){var w=y.frag,k=w&&w._url||"";o("requestcanceled",{request_event_type:v,request_url:k,request_type:"media",request_hostname:$t(k)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,f);var b=function(v,y){var w=y.level,k=i.levels[w];if(k&&k.attrs&&k.attrs.BANDWIDTH){var L=k.attrs.BANDWIDTH,I,U=parseFloat(k.attrs["FRAME-RATE"]);isNaN(U)||(I=U),L?o("renditionchange",{video_source_fps:I,video_source_bitrate:L,video_source_width:k.width,video_source_height:k.height,video_source_rendition_name:k.name,video_source_codec:k==null?void 0:k.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b);var E=new j_({hls:i,Hls:a,onAudioTrackChange:function(v){o("audiotrackchange",v)}}),T=new J_({hls:i,Hls:a,onTextTrackChange:function(v){o("texttrackchange",v)}});i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,p),i.off(a.Events.FRAG_LOADED,h),i.off(a.Events.FRAG_CHANGED,u),i.off(a.Events.ERROR,c),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,f),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),E.destroy(),T.destroy(),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},tb=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Ph=function(t,e){if(!t||!t.requestEndDate)return{};var i=$t(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,d=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),p;d.length>0&&(p=Fu(d[d.length-1]._responseHeaders||""));var h=p?$o(p):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:p,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:h}},ib=function(t,e){if(typeof e.getCurrentRepresentationForType=="function"){var i=e.getCurrentRepresentationForType(t);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=e.getQualityFor(t),r=e.getCurrentTrackFor(t).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},ab=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},rb=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},nb=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=rb(i),n=function(v,y){return t.emit(e,v,y)},s=function(v){var y=v.type,w=v.data,k=(w||{}).url;n("requestcompleted",{request_event_type:y,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:$t(k),request_url:k})};i.on("manifestLoaded",s);var o={},l=function(v){if(typeof v.getRequests!="function")return null;var y=v.getRequests({state:"executed"});return y.length===0?null:y[y.length-1]},d=function(v){var y=v.type,w=v.fragmentModel,k=v.chunk,L=l(w);p({type:y,request:L,chunk:k})},p=function(v){var y=v.type,w=v.chunk,k=v.request,L=(w||{}).mediaInfo,I=L||{},U=I.type,Y=I.bitrateList;Y=Y||[];var W={};Y.forEach(function(lt,Ne){W[Ne]={},W[Ne].width=lt.width,W[Ne].height=lt.height,W[Ne].bitrate=lt.bandwidth,W[Ne].attrs={}}),U==="video"?o.video=W:U==="audio"?o.audio=W:o.media=W;var F=Ph(k,i),de=F.requestStart,ue=F.requestResponseStart,Ke=F.requestResponseEnd,st=F.requestResponseHeaders,ot=F.requestMediaDuration,Ce=F.requestHostname,Le=F.requestUrl,St=F.requestId;n("requestcompleted",{request_event_type:y,request_start:de,request_response_start:ue,request_response_end:Ke,request_bytes_loaded:-1,request_type:U+"_init",request_response_headers:st,request_hostname:Ce,request_id:St,request_url:Le,request_media_duration:ot,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",p):i.on("initFragmentLoaded",d);var h=function(v){var y=v.type,w=v.fragmentModel,k=v.chunk,L=l(w);u({type:y,request:L,chunk:k})},u=function(v){var y=v.type,w=v.chunk,k=v.request,L=w||{},I=L.mediaInfo,U=L.start,Y=I||{},W=Y.type,F=Ph(k,i),de=F.requestStart,ue=F.requestResponseStart,Ke=F.requestResponseEnd,st=F.requestBytesLoaded,ot=F.requestResponseHeaders,Ce=F.requestMediaDuration,Le=F.requestHostname,St=F.requestUrl,lt=F.requestId,Ne=ib(W,i),ci=Ne.currentLevel,Ve=Ne.renditionWidth,je=Ne.renditionHeight,hi=Ne.renditionBitrate;n("requestcompleted",{request_event_type:y,request_start:de,request_response_start:ue,request_response_end:Ke,request_bytes_loaded:st,request_type:W,request_response_headers:ot,request_hostname:Le,request_id:lt,request_url:St,request_media_start_time:U,request_media_duration:Ce,request_current_level:ci,request_labeled_bitrate:hi,request_video_width:Ve,request_video_height:je})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",h);var c={video:void 0,audio:void 0,totalBitrate:void 0},f=function(){if(c.video&&typeof c.video.bitrate=="number"){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var v=c.video.bitrate;if(c.audio&&typeof c.audio.bitrate=="number"&&(v+=c.audio.bitrate),v!==c.totalBitrate)return c.totalBitrate=v,{video_source_bitrate:v,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ab(c.video.codec)}}},b=function(v,y,w){var k=v.mediaType;if(k==="audio"||k==="video"){var L;if(typeof i.getRepresentationsByType=="function")if(v.newRepresentation)L={bitrate:v.newRepresentation.bandwidth,width:v.newRepresentation.width,height:v.newRepresentation.height,qualityIndex:v.newRepresentation.absoluteIndex};else{var I=i.getRepresentationsByType(k);if(I&&typeof v.newQuality=="number"){var U=I.find(function(W){return W.absoluteIndex===v.newQuality||W.index===v.newQuality});U&&(L={bitrate:U.bandwidth,width:U.width,height:U.height,qualityIndex:v.newQuality})}}else{if(typeof v.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",v);return}L=i.getBitrateInfoListFor(k).find(function(W){var F=W.qualityIndex;return F===v.newQuality})}if(!(L&&typeof L.bitrate=="number")){a.warn("missing bitrate info for ".concat(k));return}c[k]=Wu(tt({},L),{codec:i.getCurrentTrackFor(k).codec});var Y=f();Y&&n("renditionchange",Y)}};i.on("qualityChangeRendered",b);var E=function(v){var y=v.request,w=v.mediaType;y=y||{},n("requestcanceled",{request_event_type:y.type+"_"+y.action,request_url:y.url,request_type:w,request_hostname:$t(y.url)})};i.on("fragmentLoadingAbandoned",E);var T=function(v){var y=v.error,w,k,L=(y==null||(w=y.data)===null||w===void 0?void 0:w.request)||{},I=(y==null||(k=y.data)===null||k===void 0?void 0:k.response)||{};(y==null?void 0:y.code)===27&&n("requestfailed",{request_error:L.type+"_"+L.action,request_url:L.url,request_hostname:$t(L.url),request_type:L.mediaType,request_error_code:I.status,request_error_text:I.statusText});var U="".concat(L!=null&&L.url?"url: ".concat(L.url,`
`):"")+"".concat(I!=null&&I.status||I!=null&&I.statusText?"response: ".concat(I==null?void 0:I.status,", ").concat(I==null?void 0:I.statusText,`
`):"");n("error",{player_error_code:y==null?void 0:y.code,player_error_message:y==null?void 0:y.message,player_error_context:U})};i.on("error",T),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",p),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",b),i.off("error",T),i.off("fragmentLoadingAbandoned",E),delete i._stopMuxMonitor}},sb=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},Uh=0,ob=(function(){function t(){me(this,t),A(this,"_listeners",void 0)}return nt(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++Uh,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++Uh;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before"+e]||[],n=this._listeners["before*"]||[],s=this._listeners[e]||[],o=this._listeners["after"+e]||[],l=function(d,p){d=d.slice(),d.forEach(function(h){h.call(a,{type:e},p)})};l(r,i),l(n,i),l(s,i),l(o,i)}}}]),t})(),lb=ob,db=(function(){function t(e){var i=this;me(this,t),A(this,"_playbackHeartbeatInterval",void 0),A(this,"_playheadShouldBeProgressing",void 0),A(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(q.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return nt(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=q.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(q.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),ub=db,cb=function t(e){var i=this;me(this,t),A(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},hb=cb,mb=(function(){function t(e){me(this,t),A(this,"_watchTimeTrackerLastCheckedTime",void 0),A(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return nt(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),Oe(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),pb=mb,vb=(function(){function t(e){var i=this;me(this,t),A(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),A(this,"_lastTime",void 0),A(this,"_isAdPlaying",void 0),A(this,"_callbackUpdatePlaybackTime",void 0),A(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=He.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,e.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};e.on("seeked",r),e.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",n),e.on("seeking",n),e.on("rebufferstart",n),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=He.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return nt(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=He.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,i=He.now(),a=i-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=a),r>0&&r<=1e3&&Oe(this.pm.data,"view_content_playback_time",r),this._callbackUpdatePlaybackTime!==null&&a>0&&a<=1e3&&(this._isAdPlaying&&Oe(this.pm.data,"ad_playing_time_ms_cumulative",a),Oe(this.pm.data,"view_playing_time_ms_cumulative",a)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),fb=vb,Eb=(function(){function t(e){me(this,t),A(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return nt(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),_b=Eb,$h=300*1e3,bb=function t(e){if(me(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;Oe(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>$h&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat($h,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(Oe(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},gb=bb,yb=(function(){function t(e){var i=this;me(this,t),A(this,"_lastCheckedTime",void 0),A(this,"_lastPlayheadTime",void 0),A(this,"_lastPlayheadTimeUpdatedTime",void 0),A(this,"_rebuffering",void 0),A(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:He.now()})}))}return nt(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),Tb=yb,Ab=(function(){function t(e){var i=this;me(this,t),A(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||He.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return nt(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),t})(),kb=Ab,Sb=function t(e){var i=this;me(this,t),A(this,"_lastPlayerHeight",void 0),A(this,"_lastPlayerWidth",void 0),A(this,"_lastPlayheadPosition",void 0),A(this,"_lastSourceHeight",void 0),A(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"],r=["playing","hb","renditionchange","orientationchange","playbackmodechange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),d=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,d),Oe(e.data,"view_total_content_playback_time",s),Oe(e.data,"view_total_upscaling",l*s),Oe(e.data,"view_total_downscaling",d*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},wb=Sb,Ib=2e3,Rb=function t(e){var i=this;me(this,t),A(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=He.now(),s=(e.data.viewer_time||n)-(a||n);Oe(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=Ib){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,Oe(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},Cb=Rb,Hh=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},Lb=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],Mb=(function(){function t(e){var i=this;me(this,t),A(this,"_adHasPlayed",void 0),A(this,"_adRequests",void 0),A(this,"_adResponses",void 0),A(this,"_currentAdRequestNumber",void 0),A(this,"_currentAdResponseNumber",void 0),A(this,"_prerollPlayTime",void 0),A(this,"_wouldBeNewAdPlay",void 0),A(this,"isAdBreak",void 0),A(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),Lb.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),Hh(i._adRequests,n),Oe(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||Oe(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),Hh(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&Oe(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,Oe(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||Oe(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||Oe(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return nt(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=at(Bn(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=at(Bn(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=i==null?void 0:i.ad_asset_url,this.pm.data.ad_tag_url=i==null?void 0:i.ad_tag_url,this.pm.data.ad_creative_id=i==null?void 0:i.ad_creative_id,this.pm.data.ad_id=i==null?void 0:i.ad_id,this.pm.data.ad_universal_id=i==null?void 0:i.ad_universal_id,i!=null&&i.ad_type&&(this.pm.data.ad_type=i==null?void 0:i.ad_type)}}]),t})(),Db=Mb,xb=function t(e){var i=this;me(this,t),A(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=He.now(),e.on("before*",r)},r=function(n){var s=He.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},Ob=xb,Pp=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var d=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,h=0;h<d.length;h++){var u=d[h].split("="),c=u.slice(1).join("=");c.charAt(0)==='"'&&(c=c.slice(1,-1));try{var f=u[0].replace(p,decodeURIComponent);if(c=i.read?i.read(c,f):i(c,f)||c.replace(p,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch{}if(r===f){o=c;break}r||(o[f]=c)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),Up="muxData",Nb=function(t){return Object.entries(t).map(function(e){var i=at(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},Pb=function(t){return t.split("&").reduce(function(e,i){var a=at(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},$p=function(){var t;try{t=Pb(Pp.get(Up)||"")}catch{t={}}return t},Hp=function(t){try{Pp.set(Up,Nb(t),{expires:365})}catch{}},Ub=function(){var t=$p();return t.mux_viewer_id=t.mux_viewer_id||Hn(),t.msn=t.msn||Math.random(),Hp(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},$b=function(){var t=$p(),e=He.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Hn(),t.sst=e),t.sex=e+1500*1e3,Hp(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function Hb(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i){var r=/localhost(?::\d+)?$/.test(i)?"http://":"https://";return r+i}t=t||"inferred";var n=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+n:"https://img.litix.io/a.gif"}var Bb={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},Wb=Bp(Bb),Fb={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",cj:"channels",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",si:"sid",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tr:"track",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},Bh=Bp(Fb);function Bp(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function vd(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=Wb[s];o||(G.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),Bh[l]?o+=Bh[l]:Number.isInteger(Number(l))?o+=l:(G.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var Kb=a_(c_()),Vb=typeof document<"u"?document:Kb.default,Ha=Vb,qb={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},Yb=56*1024,Gb=["hb","requestcompleted","requestfailed","requestcanceled"],jb="https://img.litix.io",Ri=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||jb,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},qb,e)};Ri.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};Ri.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};Ri.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),q.clearTimeout(this._sendTimeout)};Ri.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],vd({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);Wp(this._beaconUrl,i,!0,function(){})};Ri.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=He.now();Wp(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,G.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=He.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};Ri.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};Ri.prototype._startBeaconSending=function(){var t=this;q.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=q.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};Ri.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(He.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(G.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return Gb.indexOf(l.e)===-1}),s()),o()||(G.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var d in l){var p=l[d],h=50*1024;typeof p=="string"&&p.length>h&&(l[d]=p.substring(0,h))}}),s()),a};var zb=typeof Ha.exitPictureInPicture=="function"?function(t){return t.length<=Yb}:function(t){return!1},Wp=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(q.fetch){q.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:zb(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(q.XMLHttpRequest){var r=new q.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},Qb=Ri,Zb=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],Xb=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],Jb=["ad_id","ad_creative_id","ad_universal_id"],eg=["viewstart","error","ended","viewend"],tg=600*1e3,ig=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};me(this,t);var r,n,s,o,l,d,p,h,u,c,f,b;A(this,"mux",void 0),A(this,"envKey",void 0),A(this,"options",void 0),A(this,"eventQueue",void 0),A(this,"sampleRate",void 0),A(this,"disableCookies",void 0),A(this,"respectDoNotTrack",void 0),A(this,"previousBeaconData",void 0),A(this,"lastEventTime",void 0),A(this,"rateLimited",void 0),A(this,"pageLevelData",void 0),A(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new Qb(Hb(this.envKey,this.options));var E;this.sampleRate=(E=this.options.sampleRate)!==null&&E!==void 0?E:1;var T;this.disableCookies=(T=this.options.disableCookies)!==null&&T!==void 0?T:!1;var v;this.respectDoNotTrack=(v=this.options.respectDoNotTrack)!==null&&v!==void 0?v:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(p=this.options.platform)===null||p===void 0||(d=p.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(u=this.options.platform)===null||u===void 0||(h=u.os)===null||h===void 0?void 0:h.architecture,viewer_os_version:(f=this.options.platform)===null||f===void 0||(c=f.os)===null||c===void 0?void 0:c.version,page_url:q==null||(b=q.location)===null||b===void 0?void 0:b.href},this.viewerData=this.disableCookies?{}:Ub()}return nt(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&md())return G.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return G.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:$b(),r=Wu(tt({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=vd(o);if(this.lastEventTime=this.mux.utils.now(),s)return G.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||G.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited)if(G.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e==="hb")this.eventQueue.flushEvents(!0);else if(eg.indexOf(e)>=0){if(e==="error"&&i.player_error_severity==="warning")return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event="eventrateexceeded",l=vd(r),this.eventQueue.queueEvent(r.event,l),G.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=tg)r=tt({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=at(o,2),d=l[0],p=l[1];a.previousBeaconData&&(p!==a.previousBeaconData[d]||Zb.indexOf(d)>-1||a.objectHasChanged(s,d,p,a.previousBeaconData[d])||a.eventRequiresKey(e,d))&&(r[d]=p,a.previousBeaconData[d]=p)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){switch(e){case"audiotrackchange":if(i.startsWith("player_audio_track_"))return!0;break;case"playbackmodechange":if(i.startsWith("player_playback_mode"))return!0;break;case"renditionchange":if(i.startsWith("video_source_"))return!0;break;case"texttrackchange":if(i.startsWith("player_text_track_"))return!0;break}return!!(Jb.includes(i)&&Xb.includes(e))}}]),t})(),ag=function t(e){me(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,d=function(u,c){var f=c.request_start,b=c.request_response_start,E=c.request_response_end,T=c.request_bytes_loaded;n++;var v,y;if(b?(v=b-(f??0),y=(E??0)-b):y=(E??0)-(f??0),y>0&&T&&T>0){var w=T/y*8e3;s++,a+=T,r+=y,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,w),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,v>0&&(i+=v,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,v),e.data.view_average_request_latency=i/s)}},p=function(u,c){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},h=function(u,c){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",d),e.on("requestfailed",p),e.on("requestcanceled",h)},rg=ag,ng=3600*1e3,sg=function t(e){var i=this;me(this,t),A(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=He.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>ng){var l=Object.keys(e.data).reduce(function(p,h){return h.indexOf("video_")===0?Object.assign(p,A({},h,e.data[h])):p},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=d,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},og=sg,lg=function t(e){me(this,t);var i=function(o){var l=dg(o),d=ug(o);if(l!=null&&!Wh(l,n)&&s<=d){n=l,s=d;var p={video_cdn:l};e.emit("cdnchange",p)}},a=null,r=null,n=null,s=0;e.on("viewinit",function(){a=null,r=null,n=null,s=0}),e.on("beforecdnchange",function(o,l){var d=l==null?void 0:l.video_cdn;d&&(typeof l.video_previous_cdn>"u"||l.video_previous_cdn===null)&&(Wh(d,r)?l.video_previous_cdn=a??void 0:(l.video_previous_cdn=r??void 0,a=r,r=d))}),e.on("requestcompleted",function(o,l){i(l)})};function Wh(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}function dg(t){var e;return t!=null&&t.request_type&&(t.request_type==="media"||t.request_type==="video")&&!((e=t.request_response_headers)===null||e===void 0)&&e["x-cdn"]?t.request_response_headers["x-cdn"]:t!=null&&t.video_cdn?t.video_cdn:null}function ug(t){return t!=null&&t.request_start?t.request_start:t!=null&&t.viewer_time?t.viewer_time:Date.now()}var cg=lg,hg=function(t){try{return JSON.parse(t),!0}catch{return!1}},mg=function t(e){var i=this;me(this,t),A(this,"_emittingAutomaticEvent",!1),A(this,"_hasInitialized",!1),A(this,"_currentMode","standard"),e.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=e.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,e.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),e.on("viewend",function(){i._hasInitialized=!1}),e.on("playbackmodechange",function(a,r){i._emittingAutomaticEvent||(r.player_playback_mode_data?hg(r.player_playback_mode_data)||(e.mux.log.warn("Invalid JSON string for player_playback_mode_data"),r.player_playback_mode_data="{}"):r.player_playback_mode_data="{}",e.data.player_playback_mode_data=r.player_playback_mode_data,e.data.player_playback_mode=r.player_playback_mode,i._currentMode=r.player_playback_mode)})},pg=mg,vg=(function(){function t(e){me(this,t),A(this,"pm",void 0),A(this,"_currentRangeStart",void 0),A(this,"_lastPlayheadTime",void 0),this.pm=e,this._currentRangeStart=null,this._lastPlayheadTime=null,e.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),e.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return nt(t,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var i=this.pm.data.player_playhead_time||0;e[e.length-1][1]=i}}},{key:"_updatePlaybackRange",value:function(){var e,i=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!((e=this.pm.adTracker)===null||e===void 0)&&e.isAdBreak&&this._lastPlayheadTime!==null&&i<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null){var a=Math.abs(i-this._lastPlayheadTime);if(a>1e3){var r=this.pm.data.video_playback_ranges;r&&r.length>0&&(r[r.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}}if(this._currentRangeStart===null){var n=this.pm.data.video_playback_ranges||[];n.length>0&&n[n.length-1][1]===i?this._currentRangeStart=n[n.length-1][0]:(this._currentRangeStart=i,n.push([i,i])),this.pm.data.video_playback_ranges=n}else this._updateLastRangeEnd();this._lastPlayheadTime=i}}},{key:"_endPlaybackRange",value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),t})(),fg=vg;$u();var Fp=function t(e,i,a){var r=this;me(this,t),A(this,"_lastPayload",null),A(this,"_seenThisView",!1),A(this,"_emittingAutomaticEvent",!1);var n=function(l){var d={};return Object.keys(l).forEach(function(p){p.startsWith(a)&&(d[p]=l[p])}),d},s=function(){Object.keys(e.data).forEach(function(l){l.startsWith(a)&&delete e.data[l]})};e.on("viewinit",function(){r._seenThisView=!1,s()}),e.on("viewstart",function(){r._lastPayload&&!r._seenThisView&&(r._emittingAutomaticEvent=!0,e.emit(i,tt({},r._lastPayload)),r._emittingAutomaticEvent=!1)});var o=a+"enabled";e.on("before"+i,function(l,d){var p=d[o];if(typeof p!="boolean"){var h=Object.keys(d).some(function(u){return u!==o&&u.startsWith(a)&&d[u]!==void 0});d[o]=h,e.mux.log.warn("Expected a boolean for ".concat(o," on ").concat(i,", got ").concat(typeof p>"u"?"undefined":Uu(p)," ")+"(".concat(String(p),"); inferred as ").concat(h," from the payload."))}r._emittingAutomaticEvent||(r._seenThisView=!0,r._lastPayload=n(d)),s()})},Eg=(function(t){Hu(i,t);var e=Bu(i);function i(a){return me(this,i),e.call(this,a,"texttrackchange","player_text_track_")}return i})(Fp),_g=(function(t){Hu(i,t);var e=Bu(i);function i(a){return me(this,i),e.call(this,a,"audiotrackchange","player_audio_track_")}return i})(Fp),ei=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),bg=function(t){if(!t)return ei.UNKNOWN;switch(t){case"cellular":case"wimax":return ei.CELLULAR;case"wifi":return ei.WIFI;case"ethernet":return ei.WIRED;case"none":return ei.NO_CONNECTION;case"bluetooth":case"other":return ei.OTHER;case"unknown":return ei.UNKNOWN;default:return ei.OTHER}},gg=function(t){return typeof t=="object"&&"connection"in t&&typeof t.connection=="object"},yg=(function(){function t(e){var i=this;me(this,t),A(this,"pm",void 0),A(this,"lastType",void 0),A(this,"lastLowDataMode",void 0),this.pm=e,this.pm.one("viewinit",function(){var a,r=i.emit.bind(i);r(),q.addEventListener("online",r),q.addEventListener("offline",r),(a=t.connection)===null||a===void 0||a.addEventListener("change",r),i.pm.on("destroy",function(){var n;(n=t.connection)===null||n===void 0||n.removeEventListener("change",r),q.removeEventListener("online",r),q.removeEventListener("offline",r)})})}return nt(t,[{key:"type",get:function(){var e,i;return((e=q.navigator)===null||e===void 0?void 0:e.onLine)===!1?ei.NO_CONNECTION:!((i=t.connection)===null||i===void 0)&&i.type?bg(t.connection.type):ei.UNKNOWN}},{key:"lowDataMode",get:function(){var e;return(e=t.connection)===null||e===void 0?void 0:e.saveData}},{key:"emit",value:function(){var e=this.type,i=this.lowDataMode;e===this.lastType&&i===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=i,this.pm.emit("networkchange",tt({viewer_connection_type:e},i!==void 0&&{viewer_connection_low_data_mode:i})))}}],[{key:"connection",get:function(){return gg(q.navigator)?q.navigator.connection:null}}]),t})(),Tg=yg,Ag=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange","texttrackchange","audiotrackchange"],kg=new Set(["requestcompleted","requestfailed","requestcanceled"]),Sg=(function(t){Hu(i,t);var e=Bu(i);function i(a,r,n){me(this,i);var s;s=e.call(this),A(H(s),"pageLoadEndTime",void 0),A(H(s),"pageLoadInitTime",void 0),A(H(s),"_destroyed",void 0),A(H(s),"_heartBeatTimeout",void 0),A(H(s),"adTracker",void 0),A(H(s),"dashjs",void 0),A(H(s),"data",void 0),A(H(s),"disablePlayheadRebufferTracking",void 0),A(H(s),"disableRebufferTracking",void 0),A(H(s),"disableAdPlaybackRangeFiltering",void 0),A(H(s),"errorTracker",void 0),A(H(s),"errorTranslator",void 0),A(H(s),"emitTranslator",void 0),A(H(s),"getAdData",void 0),A(H(s),"getPlayheadTime",void 0),A(H(s),"getStateData",void 0),A(H(s),"stateDataTranslator",void 0),A(H(s),"hlsjs",void 0),A(H(s),"id",void 0),A(H(s),"longResumeTracker",void 0),A(H(s),"minimumRebufferDuration",void 0),A(H(s),"mux",void 0),A(H(s),"playbackEventDispatcher",void 0),A(H(s),"playbackHeartbeat",void 0),A(H(s),"playbackHeartbeatTime",void 0),A(H(s),"playheadTime",void 0),A(H(s),"seekingTracker",void 0),A(H(s),"sustainedRebufferThreshold",void 0),A(H(s),"watchTimeTracker",void 0),A(H(s),"currentFragmentPDT",void 0),A(H(s),"currentFragmentStart",void 0),s.pageLoadInitTime=Uo.navigationStart(),s.pageLoadEndTime=Uo.domContentLoadedEventEnd();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(u){return u},emitTranslator:function(){for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];return c},stateDataTranslator:function(u){return u}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),G.level=n.debug?fa.DEBUG:fa.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.disableAdPlaybackRangeFiltering=n.disableAdPlaybackRangeFiltering,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new ig(a,n.data.env_key,n),s.data={player_instance_id:Hn(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(H(s));if(s.on("viewinit",function(u,c){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,c),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(u,c){this._resetView(c)}),s.on("programchange",function(u,c){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(c,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(u,c){this.currentFragmentPDT=c.currentFragmentPDT,this.currentFragmentStart=c.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var u=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",u&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var p=function(u){u.persisted||s.destroy()};window.addEventListener("pagehide",p,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",p)})}s.on("playerready",function(u,c){Object.assign(this.data,c)}),Ag.forEach(function(u){s.on(u,function(c,f){u.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,f),this._sanitizeData()}),s.on("after"+u,function(){(u!=="error"||this.errorTracker.viewErrored)&&this.send(u)})}),s.on("viewend",function(u,c){Object.assign(s.data,c)});var h=function(u){var c=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=c-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",h),s.longResumeTracker=new og(H(s)),s.errorTracker=new hb(H(s)),new Ob(H(s)),s.seekingTracker=new Cb(H(s)),s.playheadTime=new _b(H(s)),s.playbackHeartbeat=new ub(H(s)),new wb(H(s)),s.watchTimeTracker=new pb(H(s)),new fb(H(s)),new fg(H(s)),s.adTracker=new Db(H(s)),new Tb(H(s)),new gb(H(s)),new kb(H(s)),new rg(H(s)),new cg(H(s)),new pg(H(s)),new Eg(H(s)),new _g(H(s)),new Tg(H(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return nt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=As(wr(i.prototype),"emit",this)).call.apply(n,[this].concat(Lt(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=at(Bn(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,r.video_playback_ranges&&(r.video_playback_range=JSON.stringify(r.video_playback_ranges.filter(function(d){return d[0]!==d[1]}).map(function(d){return"".concat(d[0],":").concat(d[1])})),delete r.video_playback_ranges),this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,kg.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a,r=this.getStateData();if(typeof this.stateDataTranslator=="function")try{r=this.stateDataTranslator(r)}catch(s){this.mux.log.warn("Exception in stateDataTranslator translator callback.",s)}if(!((a=this.data)===null||a===void 0)&&a.video_cdn&&r!=null&&r.video_cdn){r.video_cdn;var n=A_(r,["video_cdn"]);r=n}Object.assign(this.data,r),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate","player_audio_track_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Hn(),n=function(){r===a.data.view_id&&Oe(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,eb(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(tb(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,nb(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(sb(this.dashjs),this.dashjs=void 0)}}]),i})(lb),wg=Sg;function ql(){return Ha&&!!(Ha.fullscreenElement||Ha.webkitFullscreenElement||Ha.mozFullScreenElement||Ha.msFullscreenElement)}var Ig=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],Rg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function Cg(t,e,i){var a=at(Po(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,d=t.utils.secondsToMs,p={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var h={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var T,v,y,w=((T=(v=this).getPlayheadTime)===null||T===void 0?void 0:T.call(v))||d(r.currentTime),k=this.hlsjs&&this.hlsjs.url,L=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),I={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:ql(),video_poster_url:r.poster,video_source_url:k||L||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(y=r.getVideoPlaybackQuality)===null||y===void 0?void 0:y.call(r).droppedVideoFrames};if(r.getStartDate&&w>0){var U=r.getStartDate();if(U&&typeof U.getTime=="function"&&U.getTime()){var Y=U.getTime();if(I.player_program_time=Y+w,r.seekable.length>0){var W=Y+r.seekable.end(r.seekable.length-1);I.player_live_edge_program_time=W}}}return I}};i=Object.assign(p,i,h),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(T,v){t.emit(n,T,v)},r.mux.updateData=function(T){r.mux.emit("hb",T)};var u,c,f=function(){u&&(u.destroy(),u=void 0),c&&(c.destroy(),c=void 0)},b=function(){f(),u=N_({mediaElement:r,onChange:function(T){var v;!((v=r.mux)===null||v===void 0)&&v.audioTrackChangeHandler?r.mux.audioTrackChangeHandler(T):t.emit(n,"audiotrackchange",T)}}),u==null||u.refresh(),c=H_({mediaElement:r,onChange:function(T){var v;!((v=r.mux)===null||v===void 0)&&v.textTrackChangeHandler?r.mux.textTrackChangeHandler(T):t.emit(n,"texttrackchange",T)}}),c==null||c.refresh()},E=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){f(),Object.keys(r.mux.listeners).forEach(function(T){r.removeEventListener(T,r.mux.listeners[T],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=E,r.mux.swapElement=E,r.mux.emit=E,r.mux.addHLSJS=E,r.mux.addDashJS=E,r.mux.removeHLSJS=E,r.mux.removeDashJS=E,r.mux.updateData=E,r.mux.setEmitTranslator=E,r.mux.setStateDataTranslator=E,r.mux.setGetPlayheadTime=E,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(T){var v=at(Po(T),3),y=v[0],w=v[1],k=v[2];if(y){if(k!=="video"&&k!=="audio")return t.log.error("The element of `"+w+"` was not a media element.")}else return t.log.error("No element was found with the `"+w+"` query selector.");y.muxId=r.muxId,delete r.muxId,y.mux=y.mux||{},y.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(y.mux.listeners).forEach(function(L){r.removeEventListener(L,y.mux.listeners[L],!1),y.addEventListener(L,y.mux.listeners[L],!1)}),y.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,y.mux.swapElement=r.mux.swapElement,y.mux.destroy=r.mux.destroy,delete r.mux,r=y,b()},r.mux.addHLSJS=function(T){t.addHLSJS(n,T)},r.mux.addDashJS=function(T){t.addDashJS(n,T)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(T){t.setEmitTranslator(n,T)},r.mux.setStateDataTranslator=function(T){t.setStateDataTranslator(n,T)},r.mux.setGetPlayheadTime=function(T){T||(T=i.getPlayheadTime),t.setGetPlayheadTime(n,T)},t.init(n,i),t.emit(n,"playerready"),b(),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},Ig.forEach(function(T){T==="error"&&!i.automaticErrorTracking||(r.mux.listeners[T]=function(){var v={};if(T==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=Rg[r.error.code]||r.error.message}t.emit(n,T,v)},r.addEventListener(T,r.mux.listeners[T],!1))}),r.mux.listeners.enterpictureinpicture=function(){t.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var T=ql()?"fullscreen":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:T,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var T=ql(),v=document.fullscreenElement;if(T&&(v===r||v!=null&&v.contains(r)))t.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!T){var y=document.pictureInPictureElement===r,w=y?"pip":"standard";t.emit(n,"playbackmodechange",{player_playback_mode:w,player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}function Lg(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){G.info("safeCall error",n)}return r}var Ba;q&&q.WeakMap&&(Ba=new WeakMap);function Mg(t,e){if(!t||!e||!q||typeof q.getComputedStyle!="function")return"";var i;return Ba&&Ba.has(t)&&(i=Ba.get(t)),i||(i=q.getComputedStyle(t,null),Ba&&Ba.set(t,i)),i.getPropertyValue(e)}function Dg(t){return Math.floor(t*1e3)}var aa={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},gl=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};gl.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};gl.prototype.processLine=function(t){var e=t.indexOf(":"),i=Pg(t,e),a=i[0],r=i.length===2?Yu(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case aa.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case aa.PART_INF:{Yl(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case aa.SERVER_CONTROL:{Yl(this.manifest,i),this.setHoldBack();break}case aa.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case aa.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case aa.VERSION:{Yl(this.manifest,i);break}case aa.SESSION_DATA:{var o=Ug(i[1]),l=Rp(o);Object.assign(this.manifest.sessionData,l)}}};gl.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var Yl=function(t,e){var i=Kp(e[0].replace("#EXT-X-","")),a;Ng(e[1])?(a={},a=Object.assign(Og(e[1]),a)):a=Yu(e[1]),t[i]=a},Kp=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},Yu=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},xg=function(t){var e={},i=t.split("=");if(i.length>1){var a=Kp(i[0]);e[a]=Yu(i[1])}return e},Og=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=xg(r);i=Object.assign(n,i)}return i},Ng=function(t){return t.indexOf("=")>-1},Pg=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},Ug=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),d=0;d<l.length;d++)l[d]==="DATA-ID"&&(e["DATA-ID"]=l[1-d]),l[d]==="VALUE"&&(e.VALUE=l[1-d])}),{data:e}}},$g=gl,Hg={safeCall:Lg,safeIncrement:Oe,getComputedStyle:Mg,secondsToMs:Dg,assign:Object.assign,headersStringToObject:Fu,cdnHeadersToRequestId:$o,extractHostnameAndDomain:Bn,extractHostname:$t,manifestParser:$g,generateShortID:wp,generateUUID:Hn,now:He.now,findMediaElement:Po},Bg=Hg,Wg={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",TEXT_TRACK_CHANGE:"texttrackchange",AUDIO_TRACK_CHANGE:"audiotrackchange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},Fg=Wg,Kg="mux-embed",Vg="5.19.0",qg="2.1",Se={},Zi=function(t){var e=arguments;typeof t=="string"?Zi.hasOwnProperty(t)?q.setTimeout(function(){e=Array.prototype.splice.call(e,1),Zi[t].apply(null,e)},0):G.warn("`"+t+"` is an unknown task"):typeof t=="function"?q.setTimeout(function(){t(Zi)},0):G.warn("`"+t+"` is invalid.")},Yg={loaded:He.now(),NAME:Kg,VERSION:Vg,API_VERSION:qg,PLAYER_TRACKED:!1,monitor:function(t,e){return Cg(Zi,t,e)},destroyMonitor:function(t){var e=at(Po(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():G.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=Ct(t);Se[i]?Se[i].addHLSJS(e):G.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=Ct(t);Se[i]?Se[i].addDashJS(e):G.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=Ct(t);Se[e]?Se[e].removeHLSJS():G.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=Ct(t);Se[e]?Se[e].removeDashJS():G.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){md()&&e&&e.respectDoNotTrack&&G.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=Ct(t);Se[i]=new wg(Zi,i,e)},emit:function(t,e,i){var a=Ct(t);Se[a]?(Se[a].emit(e,i),e==="destroy"&&delete Se[a]):G.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=Ct(t);Se[i]?Se[i].emit("hb",e):G.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=Ct(t);Se[i]?Se[i].emitTranslator=e:G.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=Ct(t);Se[i]?Se[i].stateDataTranslator=e:G.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=Ct(t);Se[i]?Se[i].getPlayheadTime=e:G.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:md,log:G,utils:Bg,events:Fg,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Zi,Yg);typeof q<"u"&&typeof q.addEventListener=="function"&&q.addEventListener("pagehide",function(t){t.persisted||(Zi.WINDOW_UNLOADING=!0)},!1);var Gu=Zi;/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var K=jE,te={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},P={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_RECONNECTING:2000003,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},yl=t=>t===te.VIDEO?"playback":t,Di=class Qr extends Error{constructor(e,i=Qr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=Qr.MEDIA_ERR_NETWORK&&i<=Qr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=Qr.defaultMessages[this.code])!=null?n:"")}};Di.MEDIA_ERR_ABORTED=1,Di.MEDIA_ERR_NETWORK=2,Di.MEDIA_ERR_DECODE=3,Di.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Di.MEDIA_ERR_ENCRYPTED=5,Di.MEDIA_ERR_CUSTOM=100,Di.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var M=Di,Gg=t=>t==null,ju=(t,e)=>Gg(e)?!1:t in e,fd={ANY:"any",MUTED:"muted"},ie={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},si={MSE:"mse",NATIVE:"native"},Zr={HEADER:"header",QUERY:"query",NONE:"none"},Ho=Object.values(Zr),Si={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},Fh={HLS:Si.M3U8};[...Object.values(Si)];var vw={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},fw={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},Ew={DESCENDING:"desc"},jg="en",Ed={code:jg},zg=t=>{let e=t;for(;e;){if(e.hasAttribute("lang"))return e.getAttribute("lang")||void 0;let i=e.getRootNode();e=i instanceof ShadowRoot?i.host:void 0}},Qg=t=>{var e,i,a;let r=(a=(e=globalThis.navigator)==null?void 0:e.languages)!=null?a:[(i=globalThis.navigator)==null?void 0:i.language];return[zg(t),...r].filter(n=>!!n)},ge=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function Zg(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var zu=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},Tl=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return ju(i,Fh)?Fh[i]:e}return Xg(t)},Vp=t=>t==="VOD"?ie.ON_DEMAND:ie.LIVE,qp=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,Xg=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=Al(e).pathname}catch{console.error("Invalid url when trying to infer mime type",e)}let a=i.lastIndexOf(".");if(a<0)return t0(t)?Si.M3U8:"";let r=i.slice(a+1).toUpperCase();return ju(r,Si)?Si[r]:""},_d=t=>{try{return new URL(t),!1}catch{return!0}},Jg=t=>t.split(`
`).find((e,i,a)=>i>0&&a[i-1].startsWith("#EXT-X-STREAM-INF")),Al=(t,e)=>{var i;if(!_d(t))return new URL(t);let a=(i=window==null?void 0:window.location)==null?void 0:i.href,r=e??a;return e&&_d(e.toString())&&(r=new URL(e,a)),new URL(t,r)},e0="mux.com",t0=({src:t,customDomain:e=e0})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},vr=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},i0=({exp:t},e=Date.now())=>!t||t*1e3<e,a0=({sub:t},e)=>t!==e,r0=({aud:t},e)=>!t,n0=({aud:t},e)=>t!==e,Yp="en";function N(t,e=!0){var i,a;let r=e&&(a=(i=Ed)==null?void 0:i[t])!=null?a:t,n=e?Ed.code:Yp;return new s0(r,n)}var s0=class{constructor(e,i=(a=>(a=Ed)!=null?a:Yp)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},o0=Object.values(fd),Kh=t=>typeof t=="boolean"||typeof t=="string"&&o0.includes(t),l0=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=Kh(a)?a:!!a,o=()=>{r||ge(e,"playing",()=>{r=!0},{once:!0})};if(o(),ge(e,"loadstart",()=>{r=!1,o(),Gl(e,s)},{once:!0}),ge(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==ie.UNKNOWN?n=t.streamType===ie.LIVE:n=!Number.isFinite(e.duration)),Gl(e,s)},{once:!0}),i&&i.once(K.Events.LEVEL_LOADED,(l,d)=>{var p;t.streamType&&t.streamType!==ie.UNKNOWN?n=t.streamType===ie.LIVE:n=(p=d.details.live)!=null?p:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&ge(e,"play",()=>{e.preload==="metadata"?i.once(K.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=Kh(l)?l:!!l,Gl(e,s))}},Gl=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case fd.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case fd.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},d0=({preload:t,src:e},i,a)=>{let r=h=>{h!=null&&["","none","metadata","auto"].includes(h)?i.setAttribute("preload",h):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=h=>{r(h);let u=h??i.preload;s||u==="none"||(u==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),p())},p=()=>{!n&&e&&(n=!0,a.loadSource(e))};return ge(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,p()},{once:!0}),d(t),d},u0=(t,e,i)=>{let{minPreloadSegments:a}=t;if(a==null||a<=0||!i)return;let r=0,n=!1,s=e.playbackRate||1,o=()=>{e.playbackRate!==0&&(s=e.playbackRate,e.playbackRate=0)};e.playbackRate=0,ge(e,"ratechange",o);let l=(d,{frag:p})=>{n||p.type!=="main"||(r++,r>=a&&(n=!0,e.removeEventListener("ratechange",o),e.playbackRate=s))};i.on(K.Events.FRAG_BUFFERED,l),e.addEventListener("teardown",()=>{n||(n=!0,i.off(K.Events.FRAG_BUFFERED,l),e.playbackRate=s)},{once:!0})},c0=(t,e,i)=>{let{initialEstimateSegments:a}=t;if(a==null||a<=0||!i)return;let r=0;i.on(K.Events.FRAG_BUFFERED,(n,{frag:s})=>{s.type==="main"&&(r++,r<a&&i.abrController.resetEstimator(i.config.abrEwmaDefaultEstimate))})};function h0(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(K.Events.MANIFEST_PARSED,function(d,p){l();let h=t.addVideoTrack("main");h.selected=!0;for(let[u,c]of p.levels.entries()){let f=h.addRendition(c.url[0],c.width,c.height,c.videoCodec,c.bitrate);a.set(c,`${u}`),f.id=`${u}`}}),e.on(K.Events.AUDIO_TRACKS_UPDATED,function(d,p){o();for(let h of p.audioTracks){let u=h.default?"main":"alternative",c=t.addAudioTrack(u,h.name,h.lang);c.id=`${h.id}`,h.default&&(c.enabled=!0)}});let r=()=>{var d;let p=+((d=[...t.audioTracks].find(u=>u.enabled))==null?void 0:d.id),h=e.audioTracks.map(u=>u.id);p!=e.audioTrack&&h.includes(p)&&(e.audioTrack=p)};t.audioTracks.addEventListener("change",r),e.on(K.Events.LEVELS_UPDATED,function(d,p){var h;let u=t.videoTracks[(h=t.videoTracks.selectedIndex)!=null?h:0];if(!u)return;let c=p.levels.map(f=>a.get(f));for(let f of t.videoRenditions)f.id&&!c.includes(f.id)&&u.removeRendition(f)});let n=d=>{let p=d.target.selectedIndex;p!=e.nextLevel&&(e.nextLevel=p)};(i=t.videoRenditions)==null||i.addEventListener("change",n);let s=()=>{for(let d of t.videoTracks)t.removeVideoTrack(d)},o=()=>{for(let d of t.audioTracks)t.removeAudioTrack(d)},l=()=>{s(),o()};e.once(K.Events.DESTROYING,()=>{var d,p;l(),(d=t.audioTracks)==null||d.removeEventListener("change",r),(p=t.videoRenditions)==null||p.removeEventListener("change",n)})}var Vh=t=>t.split("-")[0],ks=({language:t})=>typeof t=="string"?t.toLowerCase():void 0;function m0(t,e){var i,a;let r=e.toLowerCase(),n=Vh(r);return(a=(i=t.find(s=>ks(s)===r))!=null?i:t.find(s=>ks(s)===n))!=null?a:t.find(s=>{let o=ks(s);return o!==void 0&&Vh(o)===n})}function p0(t,e){var i;let a=(Array.isArray(t)?t:[]).filter(r=>typeof(r==null?void 0:r.title)=="string"&&r.title!=="");if(!a.length)return"";for(let r of e){let n=m0(a,r);if(n)return n.title}return((i=a.find(r=>ks(r)==="und"))!=null?i:a[0]).title}function v0(t,e=[]){return Array.isArray(t)?t.filter(i=>typeof(i==null?void 0:i["start-time"])=="number").map((i,a,r)=>{var n;let s=i["start-time"],o=(n=r[a+1])==null?void 0:n["start-time"],l=typeof i.duration=="number"?s+i.duration:typeof o=="number"?o:void 0;return{startTime:s,...l!=null?{endTime:l}:{},value:p0(i.titles,e)}}).filter(i=>i.value!==""):[]}var Gp=Number.MAX_SAFE_INTEGER,jl=t=>"time"in t?t.time:t.startTime;function f0(t,e){e.on(K.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let d=(o=s.subtitleTrack)!=null?o:s.closedCaptions,p=e.subtitleTracks.findIndex(({lang:u,name:c,type:f})=>u==(d==null?void 0:d.lang)&&c===s.label&&f.toLowerCase()===s.kind),h=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${p}`;Qu(t,s.kind,s.label,d==null?void 0:d.lang,h,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||(r==null?void 0:r.id)!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:d,type:p,default:h})=>r.id==="default"&&h||l==r.language&&d===r.label&&p.toLowerCase()===r.kind);e.subtitleTrack=o}(r==null?void 0:r.id)===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(K.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(d=>{var p;(p=o.cues)!=null&&p.getCueById(d.id)||o.addCue(d)}),l&&(o.mode="disabled")}),e.once(K.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let s="track";r.kind&&(s+=`[kind="${r.kind}"]`),r.label&&(s+=`[label="${r.label}"]`);let o=t.querySelector(s),l=o==null?void 0:o.getAttribute("src");o&&l&&(o.removeAttribute("src"),setTimeout(()=>{o.setAttribute("src",l)},0))}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(K.Events.MANIFEST_LOADED,a),e.once(K.Events.MEDIA_ATTACHED,a)}function Qu(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function E0(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i==null||i.remove()}function es(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}var zl=new WeakMap;async function Zu(t,e,i){let a=es(t,e,i);if(a){let s=zl.get(a);return s&&await s,a}let r=Qu(t,i,e);r.mode="hidden";let n=new Promise(s=>setTimeout(s,0));return zl.set(r,n),await n,zl.delete(r),r}async function _0(t,e,i,a){let r=await Zu(t,i,a);return Xu(t,r,e,a),r}function Xu(t,e,i,a){e.mode!=="hidden"&&(e.mode="hidden"),[...i].sort((r,n)=>jl(n)-jl(r)).forEach(r=>{var n,s;let o=r.value,l=jl(r);if("endTime"in r&&r.endTime!=null&&Number.isFinite(r.endTime))e==null||e.addCue(new VTTCue(l,r.endTime,a==="chapters"?o:JSON.stringify(o??null)));else{let d=Array.prototype.findIndex.call(e==null?void 0:e.cues,c=>c.startTime>=l),p=(n=e==null?void 0:e.cues)==null?void 0:n[d],h=p?p.startTime:Number.isFinite(t.duration)&&t.duration>0?t.duration:Gp,u=(s=e==null?void 0:e.cues)==null?void 0:s[d-1];u&&(u.endTime=l),e==null||e.addCue(new VTTCue(l,h,a==="chapters"?o:JSON.stringify(o??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}var Ju="cuepoints",jp=Object.freeze({label:Ju});async function zp(t,e,i=jp){return _0(t,e,i.label,"metadata")}var bd=t=>({time:t.startTime,value:JSON.parse(t.text)});function b0(t,e={label:Ju}){let i=es(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>bd(a)):[]}function Qp(t,e={label:Ju}){var i,a;let r=es(t,e.label,"metadata");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return bd(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return bd(s||r.activeCues[0])}async function g0(t,e=jp){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await zp(t,[],e);ge(t,"cuechange",()=>{let r=Qp(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var ec="chapters",tc=Object.freeze({label:ec}),gd=(t,e)=>{let{duration:i}=e,a=Number.isFinite(i)&&i>0?Math.min(t.endTime,i):t.endTime>=Gp?1/0:t.endTime;return{startTime:t.startTime,endTime:a,value:t.text}},yd=new WeakSet;function Zp(t){var e;Array.from((e=t.cues)!=null?e:[]).filter(i=>yd.has(i)).forEach(i=>t.removeCue(i))}async function Xp(t,e,i=tc){let a=await Zu(t,i.label,"chapters");return e.length&&Zp(a),Xu(t,a,e,"chapters"),a}async function y0(t,e,i,a=tc){var r,n;let s=await Zu(t,a.label,"chapters");return i!=null&&i.aborted||Array.from((r=s.cues)!=null?r:[]).some(o=>!yd.has(o))||(Zp(s),Xu(t,s,e,"chapters"),Array.from((n=s.cues)!=null?n:[]).forEach(o=>yd.add(o))),s}function T0(t,e={label:ec}){var i;let a=es(t,e.label,"chapters");return(i=a==null?void 0:a.cues)!=null&&i.length?Array.from(a.cues,r=>gd(r,t)):[]}function Jp(t,e={label:ec}){var i,a;let r=es(t,e.label,"chapters");if(!((i=r==null?void 0:r.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return gd(r.activeCues[0],t);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return gd(s||r.activeCues[0],t)}async function A0(t,e=tc){return new Promise(i=>{ge(t,"loadstart",async()=>{let a=await Xp(t,[],e);ge(t,"cuechange",()=>{let r=Jp(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function k0(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function S0(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var kn={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},w0=t=>{if(t===te.VIDEO)return kn.VIDEO;if(t===te.DRM)return kn.DRM},I0=(t,e)=>{var i,a;let r=yl(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:ju(n,e)?e[n]:void 0},Bo=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s;if(n){let E=N("Your device appears to be offline",r),T,v=M.MEDIA_ERR_NETWORK,y=new M(E,v,!1,T);return y.errorCategory=e,y.muxCode=P.NETWORK_OFFLINE,y.data=t,y}let o="status"in t?t.status:t.code,l=Date.now(),d=M.MEDIA_ERR_NETWORK;if(o===200)return;let p=yl(e),h=I0(e,i),u=w0(e),[c]=zu((s=i.playbackId)!=null?s:"");if(!o||!c)return;let f=vr(h);if(h&&!f){let E=N("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),T=N("Compact JWT string: {token}",r).format({token:h}),v=new M(E,d,!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_TOKEN_MALFORMED,v.data=t,v}if(o>=500){let E=new M("",d,a??!0);return E.errorCategory=e,E.muxCode=P.NETWORK_UNKNOWN_ERROR,E}if(o===403)if(f){if(i0(f,l)){let E={timeStyle:"medium",dateStyle:"medium"},T=N("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),v=new Intl.DateTimeFormat("en",E).format(l),y=f.exp?N("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",E).format(f.exp*1e3),currentDate:v}):N("The {tokenNamePrefix}-token has no exp value. Current time: {currentDate}.",r).format({tokenNamePrefix:p,currentDate:v}),w=new M(T,d,!0,y);return w.errorCategory=e,w.muxCode=P.NETWORK_TOKEN_EXPIRED,w.data=t,w}if(a0(f,c)){let E=N("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),T=N("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:c,tokenPlaybackId:f.sub}),v=new M(E,d,!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_TOKEN_SUB_MISMATCH,v.data=t,v}if(r0(f)){let E=N("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=N("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u}),v=new M(E,d,!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_TOKEN_AUD_MISSING,v.data=t,v}if(n0(f,u)){let E=N("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:u,aud:f.aud}),v=new M(E,d,!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_TOKEN_AUD_MISMATCH,v.data=t,v}}else{let E=N("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),T=N("Specified playback ID: {playbackId}",r).format({playbackId:c}),v=new M(E,d,a??!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_TOKEN_MISSING,v.data=t,v}if(o===412){let E=N("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=N("Specified playback ID: {playbackId}",r).format({playbackId:c}),v=new M(E,d,a??!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_NOT_READY,v.streamType=i.streamType===ie.LIVE?"live":i.streamType===ie.ON_DEMAND?"on-demand":"unknown",v.data=t,v}if(o===404){let E=N("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=N("Specified playback ID: {playbackId}",r).format({playbackId:c}),v=new M(E,d,a??!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_NOT_FOUND,v.data=t,v}if(o===400){let E=N("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=N("Specified playback ID: {playbackId}",r).format({playbackId:c}),v=new M(E,d,a??!0,T);return v.errorCategory=e,v.muxCode=P.NETWORK_INVALID_URL,v.data=t,v}let b=new M("",d,a??!0);return b.errorCategory=e,b.muxCode=P.NETWORK_UNKNOWN_ERROR,b.data=t,b},Td=K.DefaultConfig.capLevelController;Td||console.error("MinCapLevelController - hls.js DefaultConfig.capLevelController is unavailable");var R0={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function C0(t){let e=t.toLowerCase().trim();return R0[e]}var Ad=class Xr extends Td{constructor(e){super(e)}static setMaxAutoResolution(e,i){i?Xr.maxAutoResolution.set(e,i):Xr.maxAutoResolution.delete(e)}getMaxAutoResolution(){var e;let i=this.hls;return(e=Xr.maxAutoResolution.get(i))!=null?e:void 0}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevelCapped(e){let i=this.getValidLevels(e),a=this.getMaxAutoResolution();if(!a)return super.getMaxLevel(e);let r=C0(a);if(!r)return super.getMaxLevel(e);let n=i.filter(l=>l.width*l.height<=r),s=n.findIndex(l=>l.width*l.height===r);if(s!==-1){let l=n[s];return i.findIndex(d=>d===l)}if(n.length===0)return 0;let o=n[n.length-1];return i.findIndex(l=>l===o)}getMaxLevel(e){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(e);let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Xr.minMaxResolution;return r>=n?i:Td.getMaxLevelByMediaSize(a,n*(16/9),n)}};Ad.minMaxResolution=720,Ad.maxAutoResolution=new WeakMap;var L0=Ad,kd=L0,M0="com.apple.fps.1_0",D0="application/vnd.apple.mpegurl",x0=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in t)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let u=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),c=new M(u,M.MEDIA_ERR_ENCRYPTED,!0);return c.errorCategory=te.DRM,c.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,c),()=>{}}let n=t,s=e(),o=null,l=u=>{(async()=>{try{n.webkitKeys||d();let c=await s;if(u.initData===null||c==null)return;let f=O0(u.initData,c);p(f)}catch(c){console.error("Could not start encrypted playback due to exception",c),a(n,c)}})()},d=()=>{try{let u=new WebKitMediaKeys(M0);n.webkitSetMediaKeys(u),r()}catch{let u="Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",c=new M(u,M.MEDIA_ERR_ENCRYPTED,!0);throw c.errorCategory=te.DRM,c.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,c}},p=u=>{let c=n.webkitKeys.createSession(D0,u),f=async T=>{try{let v=T.message,y=await i(v);c.update(y)}catch(v){console.error("Error on FairPlay session message",v),a(t,v)}},b=T=>{let v=T.target.error;if(!v)return;console.error(`Internal Webkit Key Session Error - sysCode: ${v.systemCode} code: ${v.code}`);let y=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser."),w=new M(y,M.MEDIA_ERR_ENCRYPTED,!0);w.errorCategory=te.DRM,w.muxCode=P.ENCRYPTED_CDM_ERROR,a(t,w)},E=()=>{c.removeEventListener("webkitkeymessage",f),c.removeEventListener("webkitkeyerror",b),t.removeEventListener("teardown",E),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",E),o=null;try{c.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",E,{once:!0}),c.addEventListener("webkitkeymessage",f),c.addEventListener("webkitkeyerror",b),t.addEventListener("teardown",E),o=E},h=()=>{t.removeEventListener("webkitneedkey",l),t.removeEventListener("teardown",h),o==null||o();try{n.webkitSetMediaKeys(null)}catch{}};return t.addEventListener("webkitneedkey",l),t.addEventListener("teardown",h,{once:!0}),h},O0=(t,e)=>{let i=P0(N0(t)),a=new Uint8Array(t),r=new Uint8Array(i),n=new Uint8Array(e),s=a.byteLength+4+n.byteLength+4+r.byteLength,o=new Uint8Array(s),l=0,d=h=>{o.set(h,l),l+=h.byteLength},p=h=>{let u=new DataView(o.buffer),c=h.byteLength;u.setUint32(l,c,!0),l+=4,d(h)};return d(a),p(r),p(n),o},N0=t=>new TextDecoder("utf-16le").decode(t).replace("skd://","").slice(1);function P0(t){let e=new ArrayBuffer(t.length*2),i=new DataView(e);for(let a=0;a<t.length;a++)i.setUint16(a*2,t.charCodeAt(a),!0);return e}var U0=({mediaEl:t,getAppCertificate:e,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async h=>{try{let u=h.initDataType;if(u!=="skd"){console.error(`Received unexpected initialization data type "${u}"`);return}t.mediaKeys||await l(u);let c=h.initData;if(c==null){console.error(`Could not start encrypted playback due to missing initData in ${h.type} event`);return}await d(u,c)}catch(u){a(t,u);return}},l=async h=>{let u=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[h],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(f=>(r(),f)).catch(()=>{let f=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),b=new M(f,M.MEDIA_ERR_ENCRYPTED,!0);b.errorCategory=te.DRM,b.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(t,b)});if(!u)return;let c=await u.createMediaKeys();try{let f=await e();await c.setServerCertificate(f).catch(()=>{let b=N("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),E=new M(b,M.MEDIA_ERR_ENCRYPTED,!0);return E.errorCategory=te.DRM,E.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(E)})}catch(f){a(t,f);return}await t.setMediaKeys(c)},d=async(h,u)=>{let c=t.mediaKeys.createSession(),f=async T=>{let v=T.message,y=await i(v);try{await c.update(y)}catch{let w=N("Failed to update DRM license. This may be an issue with the player or your protected content."),k=new M(w,M.MEDIA_ERR_ENCRYPTED,!0);k.errorCategory=te.DRM,k.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED,a(t,k)}},b=()=>{let T=v=>{let y;if(v==="internal-error"){let w=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");y=new M(w,M.MEDIA_ERR_ENCRYPTED,!0),y.errorCategory=te.DRM,y.muxCode=P.ENCRYPTED_CDM_ERROR}else if(v==="output-restricted"||v==="output-downscaled"){let w=N("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");y=new M(w,M.MEDIA_ERR_ENCRYPTED,!1),y.errorCategory=te.DRM,y.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}y&&a(t,y)};c.keyStatuses.forEach(v=>T(v))};c.addEventListener("keystatuseschange",b),c.addEventListener("message",f);let E=async()=>{c.removeEventListener("keystatuseschange",b),c.removeEventListener("message",f),"webkitCurrentPlaybackTargetIsWireless"in t&&t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",E),t.removeEventListener("teardown",E),await c.close().catch(T=>{console.warn("There was an error when closing EME session",T)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in t&&t.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",E,{once:!0}),t.addEventListener("teardown",E,{once:!0}),s=E,await c.generateRequest(h,u).catch(async T=>{if(T.name==="NotSupportedError"&&"webkitCurrentPlaybackTargetIsWireless"in t&&t.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),n==null||n();else{let v=N("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),y=new M(v,M.MEDIA_ERR_ENCRYPTED,!0);return y.errorCategory=te.DRM,y.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",T),Promise.reject(y)}})},p=async()=>{t.removeEventListener("encrypted",o),t.removeEventListener("teardown",p),s&&await s(),await t.setMediaKeys(null).catch(()=>{})};return t.addEventListener("encrypted",o),t.addEventListener("teardown",p,{once:!0}),p},$0=({hls:t,mediaEl:e,src:i,muxMediaState:a,saveAndDispatchError:r,maxRetries:n})=>{var s;let o,l=0,d=!1,p=!1,h=!1,u=()=>{o!=null&&(clearTimeout(o),o=void 0)},c=I=>(I==null?void 0:I.muxCode)===P.NETWORK_RECONNECTING,f=()=>!e.paused&&e.readyState<HTMLMediaElement.HAVE_FUTURE_DATA,b=()=>{let I=a.get(e);if(c(I==null?void 0:I.error))return;let U=new M(N("Attempting to reconnect..."),M.MEDIA_ERR_NETWORK,!1);U.errorCategory=te.VIDEO,U.muxCode=P.NETWORK_RECONNECTING,I&&(I.error=U),e.dispatchEvent(new CustomEvent("error",{detail:U}))},E=()=>{if(!h&&i){t.loadSource(i);return}t.startLoad(e.currentTime)},T=()=>{d=!1,p=!0,u();let I=new M(N("Network error, try reloading."),M.MEDIA_ERR_NETWORK,!0);I.errorCategory=te.VIDEO,I.reload=!0,r(e,I)},v=()=>{if(o!=null||d)return;if(l>=n){T();return}d=!0;let I=Math.min(1e3*2**l,3e4);o=setTimeout(()=>{o=void 0,l+=1,E()},I)},y=()=>{let I=a.get(e);!(I!=null&&I.networkError)||p||f()&&(b(),v())},w=()=>{let I=a.get(e);I&&(I.networkError=!0),d=!1,y()},k=()=>{let I=a.get(e);I!=null&&I.networkError&&(l=0,p=!1,u(),d=!0,E())};(s=globalThis.addEventListener)==null||s.call(globalThis,"online",k);let L=()=>{let I=a.get(e);I&&(!I.networkError&&!c(I.error)||(I.networkError=!1,d=!1,l=0,p=!1,u(),I.error&&(I.error=null,e.dispatchEvent(new Event("emptied")))))};return t.on(K.Events.FRAG_BUFFERED,L),ge(e,"playing",()=>{let I=a.get(e);I!=null&&I.networkError&&(d=!1,l=0,p=!1,u(),I.error&&(I.error=null))}),ge(e,"waiting",y),e.addEventListener("teardown",()=>{var I;(I=globalThis.removeEventListener)==null||I.call(globalThis,"online",k),u()},{once:!0}),{handleHlsError:(I,U)=>{var Y,W;if(I.type!==K.ErrorTypes.NETWORK_ERROR)return!1;let F=(W=(Y=I.response)==null?void 0:Y.code)!=null?W:0;return(U.muxCode===P.NETWORK_OFFLINE||F===0||F>=500)&&I.fatal?(w(),!0):!1},onManifestLoaded:()=>{h=!0,d=!1,u()}}},Ss={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},H0=t=>{if(t.includes("fps"))return Ss.FAIRPLAY;if(t.includes("playready"))return Ss.PLAYREADY;if(t.includes("widevine"))return Ss.WIDEVINE},B0=(t,e,i)=>{let a=Jg(t);if(!a)return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));if(_d(a)&&!e)return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));let r;try{r=Al(a,e)}catch(n){return Promise.reject(n)}return fetch(r,{signal:i}).then(n=>n.status!==200?Promise.reject(n):n.text())},W0=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=K0(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},F0=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function K0(t){let e=[...t.matchAll(F0)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var V0=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=Vp(n),o=qp(n),l;if(s===ie.LIVE){let d=r.find(p=>p.startsWith("#EXT-X-PART-INF"));if(d)l=+d.split(":")[1].split("=")[1]*2;else{let p=r.find(u=>u.startsWith("#EXT-X-TARGETDURATION")),h=(a=p==null?void 0:p.split(":"))==null?void 0:a[1];l=+(h??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},q0=async(t,e,i)=>{if(e===Si.MP4)return{streamType:ie.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0};if(e===Si.M3U8){let a=await fetch(t,{signal:i});if(!a.ok)return Promise.reject(a);let r=await a.text(),n=a.url||t,s=await B0(r,n,i);return{...W0(r),...V0(s),playlistUrl:n}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0,playlistUrl:void 0}},Y0=async(t,e,i=Tl({src:t}),a=kl(e))=>{var r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:p,playlistUrl:h}=await q0(t,i,a);if(a.aborted)return;let u=ev(p==null?void 0:p["com.apple.hls.chapters"],h??t);u&&av(u,e,a),((r=ae.get(e))!=null?r:{}).liveEdgeStartOffset=d,((n=ae.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=ae.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ev=(t,e)=>{var i;let a=(t==null?void 0:t.URI)||((i=t==null?void 0:t.VALUE)!=null&&i.toLocaleLowerCase().startsWith("http")?t.VALUE:void 0);if(a)try{return Al(a,e).toString()}catch{return}},kl=t=>{let e=new AbortController;return t.addEventListener("teardown",()=>e.abort(),{once:!0}),e.signal},tv=async(t,e)=>{try{let i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to fetch ${t}: ${i.status} ${i.statusText}`);let a=await i.json();return e.aborted?void 0:a}catch(i){e.aborted||console.error(i);return}},iv=(t,e)=>{var i,a;if(!Array.isArray((i=t==null?void 0:t[0])==null?void 0:i.metadata))return;let r={};for(let s of t[0].metadata)s!=null&&s.key&&s!=null&&s.value&&(r[s.key]=s.value);((a=ae.get(e))!=null?a:{}).metadata=r;let n=new CustomEvent("muxmetadata");e.dispatchEvent(n)},G0=async(t,e,i=kl(e))=>{let a=await tv(t,i);a!==void 0&&iv(a,e)},av=async(t,e,i=kl(e))=>{let a=await tv(t,i);a!==void 0&&(iv(a,e),await y0(e,v0(a,Qg(e)),i))},j0=t=>{var e;let i=t.type,a=Vp(i),r=qp(i),n,s=!!((e=t.partList)!=null&&e.length);return a===ie.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},z0=(t,e,i)=>{var a,r,n,s,o,l,d,p;let{streamType:h,targetLiveWindow:u,liveEdgeStartOffset:c,lowLatency:f}=j0(t);if(h===ie.LIVE){f?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let b=Object.freeze({get length(){return e.seekable.length},start(E){return e.seekable.start(E)},end(E){var T;return E>this.length||E<0||Number.isFinite(e.duration)?e.seekable.end(E):(T=i.liveSyncPosition)!=null?T:e.seekable.end(E)}});((o=ae.get(e))!=null?o:{}).seekable=b}((l=ae.get(e))!=null?l:{}).liveEdgeStartOffset=c,((d=ae.get(e))!=null?d:{}).targetLiveWindow=u,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((p=ae.get(e))!=null?p:{}).streamType=h,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},qh,Yh,rv=(Yh=(qh=globalThis==null?void 0:globalThis.navigator)==null?void 0:qh.userAgent)!=null?Yh:"",Gh,jh,zh,Q0=(zh=(jh=(Gh=globalThis==null?void 0:globalThis.navigator)==null?void 0:Gh.userAgentData)==null?void 0:jh.platform)!=null?zh:"",Z0=rv.toLowerCase().includes("android")||["x11","android"].some(t=>Q0.toLowerCase().includes(t)),X0=t=>/^((?!chrome|android).)*safari/i.test(rv)&&!!t.canPlayType("application/vnd.apple.mpegurl"),ae=new WeakMap,wi="mux.com",Qh,Zh,nv=(Zh=(Qh=K).isSupported)==null?void 0:Zh.call(Qh),J0=t=>Z0||!X0(t),ic=()=>{if(typeof window<"u")return Gu.utils.now()},ey=Gu.utils.generateUUID,Sd=({playbackId:t,customDomain:e=wi,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:p=d}={},extraSourceParams:h={}}={})=>{if(!t)return;let[u,c=""]=zu(t),f=new URL(`https://stream.${e}/${u}.m3u8${c}`);return p||f.searchParams.has("token")?(f.searchParams.forEach((b,E)=>{E!="token"&&f.searchParams.delete(E)}),p&&f.searchParams.set("token",p)):(i&&f.searchParams.set("max_resolution",i),a&&(f.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&f.searchParams.set("rendition_order",r),n&&f.searchParams.set("program_start_time",`${n}`),s&&f.searchParams.set("program_end_time",`${s}`),o&&f.searchParams.set("asset_start_time",`${o}`),l&&f.searchParams.set("asset_end_time",`${l}`),Object.entries(h).forEach(([b,E])=>{E!=null&&f.searchParams.set(b,E)})),f.toString()},Sl=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},ac=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},ty=t=>{var e,i,a;return(e=t==null?void 0:t.metadata)!=null&&e.video_id?t.metadata.video_id:pv(t)&&(a=(i=Sl(t.playbackId))!=null?i:ac(t.src))!=null?a:t.src},sv=t=>{var e;return(e=ae.get(t))==null?void 0:e.error},iy=t=>{var e;return(e=ae.get(t))==null?void 0:e.metadata},wd=t=>{var e,i;return(i=(e=ae.get(t))==null?void 0:e.streamType)!=null?i:ie.UNKNOWN},ay=t=>{var e,i;return(i=(e=ae.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},rc=t=>{var e,i;return(i=(e=ae.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},ry=t=>{var e;let i=(e=ae.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=rc(t);return a.length?a.end(a.length-1)-i:Number.NaN},ny=t=>{var e;return(e=ae.get(t))==null?void 0:e.coreReference},nc=.034,sy=(t,e,i=nc)=>Math.abs(t-e)<=i,ov=(t,e,i=nc)=>t>e||sy(t,e,i),oy=(t,e=nc)=>t.paused&&ov(t.currentTime,t.duration,e),lv=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(h=>!!h.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=t.buffered.start(t.buffered.length-1),p=t.buffered.end(t.buffered.length-1);return l>d&&l<p},dv=(t,e)=>t.ended||t.loop?t.ended:e&&lv(t,e)?!0:oy(t),uv=(t,e,i)=>{cv(e,i,t);let{metadata:a={}}=t,{view_session_id:r=ey()}=a,n=ty(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=u=>{var c;(c=e.mux)==null||c.emit("hb",{view_drm_type:u})};t.drmTypeCb=s,t.fallbackToWebkitFairplay=async()=>{var u;let c=!e.paused,f=e.currentTime;t.useWebkitFairplay=!0;let b=t.muxDataKeepSession;t.muxDataKeepSession=!0;let E=(u=ae.get(e))==null?void 0:u.coreReference;uv(t,e,E),t.muxDataKeepSession=b,t.useWebkitFairplay=!1,c&&await e.play().then(()=>{e.currentTime=f}).catch(()=>{}),e.currentTime=f},ae.set(e,{retryCount:0});let o=cy(t,e),l=d0(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?K:void 0}):vv(t,e,o),_y(t,e,o),g0(e),A0(e);let d=l0(t,e,o);u0(t,e,o),c0(t,e,o);let p={engine:o,setAutoplay:d,setPreload:l},h=ae.get(e);return h&&(h.coreReference=p),p},ly=()=>{let t=new Date(0).toUTCString(),e=new Set(["muxData"]);document.cookie.split(";").forEach(i=>{let a=i.split("=")[0].trim();a.startsWith("muxData")&&e.add(a)}),e.forEach(i=>{document.cookie=`${i}=;expires=${t};path=/`})},Ql=new WeakMap,dy=(t,e,i)=>{e&&(e.mux&&(e.mux.deleted||e.mux.destroy(),delete e.mux),!Ql.has(e)&&Ql.set(e,Promise.resolve().then(()=>{var a,r;Ql.delete(e);let n=ae.get(e);if(!n||e.mux&&!e.mux.deleted)return;let s=(r=(a=n.coreReference)!=null?a:i)==null?void 0:r.engine;vv(t,e,s)})))},uy=(t,e,i)=>{if(!e)return;let a=!!t.disableCookies,r=ae.get(e);!r||r.muxDataDisableCookies===a||(dy(t,e,i),a&&Promise.resolve().then(()=>{t.disableCookies&&ly()}))},cv=(t,e,i)=>{let a=e==null?void 0:e.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",Ev),t.removeEventListener("error",Id),t.removeEventListener("durationchange",fv),ae.delete(t),t.dispatchEvent(new Event("teardown")))};function hv(t,e){var i;let a=Tl(t);if(a!==Si.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===si.MSE,o=n===si.NATIVE,l=nv&&(s||J0(e));return r&&(o||!l)}var cy=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l,initialBandwidthEstimateKbps:d}=t,p=Tl(t)===Si.M3U8,h=hv(t,e);if(p&&!h&&nv){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...d!=null?{abrEwmaDefaultEstimate:d*1e3}:{}},c=hy(a),f=my(t),b=[Zr.QUERY,Zr.HEADER].includes(s)?{useHeaders:s===Zr.HEADER,sessionId:n==null?void 0:n.view_session_id,contentId:n==null?void 0:n.video_id}:void 0,E=Ey(t),T=new K({debug:i,startPosition:r,cmcd:b,xhrSetup:(v,y)=>{var w,k;if(s&&s!==Zr.QUERY)return;let L=Al(y);if(!L.searchParams.has("CMCD"))return;let I=((k=(w=L.searchParams.get("CMCD"))==null?void 0:w.split(","))!=null?k:[]).filter(U=>U.startsWith("sid")||U.startsWith("cid")).join(",");L.searchParams.set("CMCD",I),v.open("GET",L)},...u,...E,...c,...f,...o});return E.capLevelController===kd&&l!==void 0&&kd.setMaxAutoResolution(T,l),T.on(K.Events.MANIFEST_LOADED,async function(v,y){var w;let k=ev((w=y.sessionData)==null?void 0:w["com.apple.hls.chapters"],y.url);k&&av(k,e)}),T}},hy=t=>t===ie.LIVE?{backBufferLength:8}:{},my=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=Sl(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ws(t,"fairplay"),serverCertificateUrl:mv(t,"fairplay")},"com.widevine.alpha":{licenseUrl:ws(t,"widevine")},"com.microsoft.playready":{licenseUrl:ws(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let d=(l=o.videoCapabilities)==null?void 0:l.map(p=>({...p,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=H0(n);return a==null||a(l),o}))}},py=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},vy=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},fy=(t,e)=>{let i={mediaEl:e,getAppCertificate:()=>py(mv(t,"fairplay")).catch(a=>{if(a instanceof Response){let r=Bo(a,te.DRM,t);return console.error("mediaError",r==null?void 0:r.message,r==null?void 0:r.context),r?Promise.reject(r):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(a)}),getLicenseKey:a=>vy(a,ws(t,"fairplay")).catch(r=>{if(r instanceof Response){let n=Bo(r,te.DRM,t);return console.error("mediaError",n==null?void 0:n.message,n==null?void 0:n.context),n?Promise.reject(n):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(r)}),saveAndDispatchError:yi,drmTypeCb:()=>{var a;(a=t.drmTypeCb)==null||a.call(t,Ss.FAIRPLAY)}};if(t.useWebkitFairplay)x0(i);else{let a={fallbackToWebkitFairplay:async()=>{var n;await r(),(n=t.fallbackToWebkitFairplay)==null||n.call(t)},...i},r=U0(a)}},ws=({playbackId:t,tokens:{drm:e}={},customDomain:i=wi},a)=>{let r=Sl(t);return`https://license.${i.toLocaleLowerCase().endsWith(wi)?i:wi}/license/${a}/${r}?token=${e}`},mv=({playbackId:t,tokens:{drm:e}={},customDomain:i=wi},a)=>{let r=Sl(t);return`https://license.${i.toLocaleLowerCase().endsWith(wi)?i:wi}/appcert/${a}/${r}?token=${e}`},pv=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window==null?void 0:window.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(wi)||!!i&&r.includes(i.toLocaleLowerCase())},Ey=(t,e)=>{let i={};return i.capLevelToPlayerSize=t.capRenditionToPlayerSize,i.capLevelToPlayerSize==null?(i.capLevelController=kd,i.capLevelToPlayerSize=!0):i.capLevelController=zE,i},vv=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Gu,muxDataSDKOptions:o={}}=t,l=pv(t),d=ae.get(e);if(d&&(d.muxDataDisableCookies=!!t.disableCookies),!n&&(r||l)){let{playerInitTime:p,playerSoftwareName:h,playerSoftwareVersion:u,beaconCollectionDomain:c,debug:f,disableCookies:b}=t,E={...t.metadata,video_title:((a=t==null?void 0:t.metadata)==null?void 0:a.video_title)||void 0},T=v=>typeof v.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(v):v;s.monitor(e,{debug:f,beaconCollectionDomain:c,hlsjs:i,Hls:i?K:void 0,automaticErrorTracking:!1,errorTranslator:T,disableCookies:b,...o,data:{...r?{env_key:r}:{},player_software_name:h,player_software:h,player_software_version:u,player_init_time:p,...E}})}},_y=(t,e,i)=>{var a,r,n;let s=hv(t,e),{src:o,customDomain:l=wi}=t,d=()=>{e.ended||t.disablePseudoEnded||!dv(e,i)||(lv(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},p,h,u=()=>{let c=rc(e),f,b;c.length>0&&(f=c.start(0),b=c.end(0)),(h!==b||p!==f)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),p=f,h=b};if(ge(e,"durationchange",u),e&&s){let c=Tl(t);if(typeof o=="string"){if(o.endsWith(".mp4")&&o.includes(l)){let E=ac(o),T=new URL(`https://stream.${l}/${E}/metadata.json`);G0(T.toString(),e)}let f=()=>{if(wd(e)!==ie.LIVE||Number.isFinite(e.duration))return;let E=setInterval(u,1e3);e.addEventListener("teardown",()=>{clearInterval(E)},{once:!0}),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(E)})},b=async()=>{let E=kl(e);return Y0(o,e,c,E).then(()=>{E.aborted||f()}).catch(T=>{if(T instanceof Response){let v=Bo(T,te.VIDEO,t);if(v){yi(e,v);return}}})};if(e.preload==="none"){let E=()=>{b(),e.removeEventListener("loadedmetadata",T)},T=()=>{b(),e.removeEventListener("play",E)};ge(e,"play",E,{once:!0}),ge(e,"loadedmetadata",T,{once:!0})}else b();(a=t.tokens)!=null&&a.drm?fy(t,e):ge(e,"encrypted",()=>{let E=N("Attempting to play DRM-protected content without providing a DRM token."),T=new M(E,M.MEDIA_ERR_ENCRYPTED,!0);T.errorCategory=te.DRM,T.muxCode=P.ENCRYPTED_MISSING_TOKEN,yi(e,T)},{once:!0}),e.setAttribute("src",o),t.startTime&&(((r=ae.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",fv,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",Ev),e.addEventListener("error",Id),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(f=>{f.remove()})},{once:!0}),ge(e,"pause",d),ge(e,"seeked",d),ge(e,"play",()=>{e.ended||ov(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else if(i&&o){i.once(K.Events.LEVEL_LOADED,(b,E)=>{z0(E.details,e,i),u(),wd(e)===ie.LIVE&&!Number.isFinite(e.duration)&&(i.on(K.Events.LEVEL_UPDATED,u),ge(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(K.Events.LEVELS_UPDATED,u)}))});let c=(n=t.maxReconnectRetries)!=null?n:0,f=c>0?$0({hls:i,mediaEl:e,src:o,muxMediaState:ae,saveAndDispatchError:yi,maxRetries:c}):void 0;i.on(K.Events.ERROR,(b,E)=>{var T,v;let y=by(E,t);if(y.muxCode===P.NETWORK_NOT_READY){let w=(T=ae.get(e))!=null?T:{},k=(v=w.retryCount)!=null?v:0;if(k<6){let L=k===0?5e3:6e4,I=new M(`Retrying in ${L/1e3} seconds...`,y.code,y.fatal);Object.assign(I,y),yi(e,I);let U=setTimeout(()=>{w.retryCount=k+1,E.details==="manifestLoadError"&&E.url&&i.loadSource(E.url)},L);e.addEventListener("teardown",()=>clearTimeout(U),{once:!0});return}else{w.retryCount=0;let L=new M("Network error, try reloading.",y.code,y.fatal);Object.assign(L,y),L.reload=!0,yi(e,L);return}}f!=null&&f.handleHlsError(E,y)||yi(e,y)}),i.on(K.Events.MANIFEST_LOADED,()=>{f==null||f.onManifestLoaded();let b=ae.get(e);b!=null&&b.networkError||b&&b.error&&(b.error=null,b.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",Id),ge(e,"waiting",d),h0(t,i),f0(e,i),i.attachMedia(e)}else console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function fv(t){var e;let i=t.target,a=(e=ae.get(i))==null?void 0:e.startTime;if(a&&Zg(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function Ev(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new M(i,a);if(e.src&&a===M.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=sv(e))!=null?n:e.error;(s==null?void 0:s.code)===M.MEDIA_ERR_SRC_NOT_SUPPORTED&&yi(e,r)},500);return}if(e.src&&(a!==M.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}yi(e,r)}function yi(t,e){var i;e.fatal&&(((i=ae.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function Id(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof M))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=ae.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var by=(t,e)=>{var i,a,r;t.fatal?console.error("getErrorFromHlsErrorData()",t):e.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",t);let n={[K.ErrorTypes.NETWORK_ERROR]:M.MEDIA_ERR_NETWORK,[K.ErrorTypes.MEDIA_ERROR]:M.MEDIA_ERR_DECODE,[K.ErrorTypes.KEY_SYSTEM_ERROR]:M.MEDIA_ERR_ENCRYPTED},s=p=>[K.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(p.details)?M.MEDIA_ERR_NETWORK:n[p.type],o=p=>{if(p.type===K.ErrorTypes.KEY_SYSTEM_ERROR)return te.DRM;if(p.type===K.ErrorTypes.NETWORK_ERROR)return te.VIDEO},l,d=s(t);if(d===M.MEDIA_ERR_NETWORK&&t.response){let p=(i=o(t))!=null?i:te.VIDEO;l=(a=Bo(t.response,p,e,t.fatal))!=null?a:new M("",d,t.fatal)}else if(d===M.MEDIA_ERR_ENCRYPTED)if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let p=N("Attempting to play DRM-protected content without providing a DRM token.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_MISSING_TOKEN}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let p=N("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===K.ErrorDetails.KEY_SYSTEM_NO_SESSION){let p=N("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let p=N("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let p=N("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let p=N("The DRM Content Decryption Module system had an internal failure. Try reloading the page, updating your browser, or playing in another browser.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_CDM_ERROR}else if(t.details===K.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let p=N("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new M(p,M.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_OUTPUT_RESTRICTED}else l=new M(t.error.message,M.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=P.ENCRYPTED_ERROR;else l=new M("",d,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},_v=t=>{throw TypeError(t)},sc=(t,e,i)=>e.has(t)||_v("Cannot "+i),ye=(t,e,i)=>(sc(t,e,"read from private field"),i?i.call(t):e.get(t)),_t=(t,e,i)=>e.has(t)?_v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ot=(t,e,i,a)=>(sc(t,e,"write to private field"),e.set(t,i),i),ns=(t,e,i)=>(sc(t,e,"access private method"),i),gy=()=>{try{return"0.31.6"}catch{}return"UNKNOWN"},yy=gy(),Ty=()=>yy,Ay=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;function ky(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var _={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",MAX_RECONNECT_RETRIES:"max-reconnect-retries",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size",INITIAL_BANDWIDTH_ESTIMATE_KBPS:"initial-bandwidth-estimate-kbps",INITIAL_ESTIMATE_SEGMENTS:"initial-estimate-segments",MIN_PRELOAD_SEGMENTS:"min-preload-segments"},Sy=Object.values(_),Xh=Ty(),Jh="mux-video",Jr,Is,en,Rs,Cs,Ls,Ms,Ds,tn,xs,ht,xi,Os,an,wy=class extends as{constructor(){super(),_t(this,ht),_t(this,Jr),_t(this,Is),_t(this,en,{}),_t(this,Rs,{}),_t(this,Cs),_t(this,Ls),_t(this,Ms),_t(this,Ds),_t(this,tn,""),_t(this,xs,e=>{var i;let a=iy(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},(a==null?void 0:a["com.mux.video.branding"])==="mux-free-plan"&&(Ot(this,tn,"default"),this.updateLogo())}),_t(this,Os),Ot(this,Is,ic())}static get NAME(){return Jh}static get VERSION(){return Xh}static get observedAttributes(){var e;return[...Sy,...(e=as.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?Ay:`<img part="logo" src="${ky(e)}" />`}static getTemplateHTML(e={}){var i;return`
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
        ${this.getLogoHTML((i=e[_.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(_.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?Ho.includes(e)?this.setAttribute(_.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${Ho.join()}`):this.removeAttribute(_.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?+this.getAttribute(_.PLAYER_INIT_TIME):ye(this,Is)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=ye(this,Ms))!=null?e:Jh}set playerSoftwareName(e){Ot(this,Ms,e)}get playerSoftwareVersion(){var e;return(e=ye(this,Ls))!=null?e:Xh}set playerSoftwareVersion(e){Ot(this,Ls,e)}get _hls(){var e;return(e=ye(this,ht,xi))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=sv(this.nativeEl))!=null?e:null}get errorTranslator(){return ye(this,Ds)}set errorTranslator(e){Ot(this,Ds,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(_.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(_.TYPE,e):this.removeAttribute(_.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(_.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG))}get disableTracking(){return this.hasAttribute(_.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(_.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(_.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(_.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(_.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(_.DISABLE_PSEUDO_ENDED))}get maxReconnectRetries(){let e=this.getAttribute(_.MAX_RECONNECT_RETRIES);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set maxReconnectRetries(e){e!==this.maxReconnectRetries&&(e==null?this.removeAttribute(_.MAX_RECONNECT_RETRIES):this.setAttribute(_.MAX_RECONNECT_RETRIES,`${e}`))}get startTime(){let e=this.getAttribute(_.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(_.START_TIME):this.setAttribute(_.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(_.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(_.MIN_PRELOAD_SEGMENTS);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){var e;return this.hasAttribute(_.PLAYBACK_ID)?this.getAttribute(_.PLAYBACK_ID):(e=ac(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(_.PLAYBACK_ID,e):this.removeAttribute(_.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(_.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(_.MAX_RESOLUTION,e):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(_.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(_.MIN_RESOLUTION,e):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var e;return(e=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?e:void 0}set maxAutoResolution(e){e==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return(e=this.getAttribute(_.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(_.RENDITION_ORDER,e):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(_.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(_.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(_.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(_.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(_.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(_.CUSTOM_DOMAIN,e):this.removeAttribute(_.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return((e=this._hlsConfig)==null?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:ye(this,Os)}set capRenditionToPlayerSize(e){Ot(this,Os,e)}get drmToken(){var e;return(e=this.getAttribute(_.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(_.DRM_TOKEN,e):this.removeAttribute(_.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(_.PLAYBACK_TOKEN))return(e=this.getAttribute(_.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(_.PLAYBACK_ID)){let[,n]=zu((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(_.PLAYBACK_TOKEN,e):this.removeAttribute(_.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(_.PLAYBACK_TOKEN),i=this.getAttribute(_.DRM_TOKEN);return{...ye(this,Rs),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){Ot(this,Rs,e??{})}get ended(){return dv(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(_.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(_.ENV_KEY,e):this.removeAttribute(_.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(_.STREAM_TYPE))!=null?e:wd(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(_.STREAM_TYPE,e):this.removeAttribute(_.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(_.TARGET_LIVE_WINDOW)?+this.getAttribute(_.TARGET_LIVE_WINDOW):ay(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(_.TARGET_LIVE_WINDOW):this.setAttribute(_.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(_.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return ry(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(_.LIVE_EDGE_OFFSET))return+this.getAttribute(_.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(_.LIVE_EDGE_OFFSET):this.setAttribute(_.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return rc(this.nativeEl)}async addCuePoints(e){return this.nativeEl.currentSrc||console.warn("addCuePoints() was called before the media element has loaded. Wait for the loadstart event before calling addCuePoints()."),zp(this.nativeEl,e)}get activeCuePoint(){return Qp(this.nativeEl)}get cuePoints(){return b0(this.nativeEl)}async addChapters(e){return this.nativeEl.currentSrc||console.warn("addChapters() was called before the media element has loaded. Wait for the loadstart event before calling addChapters()."),Xp(this.nativeEl,e)}get activeChapter(){return Jp(this.nativeEl)}get chapters(){return T0(this.nativeEl)}getStartDate(){return k0(this.nativeEl,this._hls)}get currentPdt(){return S0(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(_.PREFER_PLAYBACK);if(e===si.MSE||e===si.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===si.MSE||e===si.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,e):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![_.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...ye(this,en)}}set metadata(e){Ot(this,en,e??{}),this.mux&&this.mux.emit("hb",ye(this,en))}get _hlsConfig(){return ye(this,Cs)}set _hlsConfig(e){Ot(this,Cs,e)}get logo(){var e;return(e=this.getAttribute(_.LOGO))!=null?e:ye(this,tn)}set logo(e){e?this.setAttribute(_.LOGO,e):this.removeAttribute(_.LOGO)}load(){uv(this,this.nativeEl,ye(this,ht,xi))}unload(){cv(this.nativeEl,ye(this,ht,xi),this)}attributeChangedCallback(e,i,a){var r,n;switch(as.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case _.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case _.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?ns(this,ht,an).call(this):s&&!o?this.unload():s&&o&&(this.unload(),ns(this,ht,an).call(this));break}case"autoplay":if(a===i)break;(r=ye(this,ht,xi))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=ye(this,ht,xi))==null||n.setPreload(a);break;case _.PLAYBACK_ID:case _.CUSTOM_DOMAIN:case _.MAX_RESOLUTION:case _.MIN_RESOLUTION:case _.RENDITION_ORDER:case _.PROGRAM_START_TIME:case _.PROGRAM_END_TIME:case _.ASSET_START_TIME:case _.ASSET_END_TIME:case _.PLAYBACK_TOKEN:this.hasAttribute(_.PLAYBACK_ID)&&(this.src=Sd(this));break;case _.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case _.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case _.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case _.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case _.LOGO:(a==null||a!==i)&&this.updateLogo();break;case _.DISABLE_TRACKING:{if(a==null||a!==i){let s=this.currentTime,o=this.paused;this.unload(),ns(this,ht,an).call(this).then(()=>{this.currentTime=s,o||this.play()})}break}case _.DISABLE_COOKIES:{(a==null||a!==i)&&uy(this,this.nativeEl,ye(this,ht,xi));break}case _.CAP_RENDITION_TO_PLAYER_SIZE:(a==null||a!==i)&&(this.capRenditionToPlayerSize=a!=null?!0:void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(ye(this,tn)||this.logo);e.innerHTML=i}connectedCallback(){var e,i;(e=super.connectedCallback)==null||e.call(this),(i=this.nativeEl)==null||i.addEventListener("muxmetadata",ye(this,xs)),this.nativeEl&&this.src&&!ye(this,ht,xi)&&ns(this,ht,an).call(this)}disconnectedCallback(){var e,i;(e=this.nativeEl)==null||e.removeEventListener("muxmetadata",ye(this,xs)),this.unload(),(i=super.disconnectedCallback)==null||i.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Jr=new WeakMap,Is=new WeakMap,en=new WeakMap,Rs=new WeakMap,Cs=new WeakMap,Ls=new WeakMap,Ms=new WeakMap,Ds=new WeakMap,tn=new WeakMap,xs=new WeakMap,ht=new WeakSet,xi=function(){return ny(this.nativeEl)},Os=new WeakMap,an=async function(){ye(this,Jr)||(await Ot(this,Jr,Promise.resolve()),Ot(this,Jr,null),this.load())};const Xi=new WeakMap;class Zl extends Error{}class Iy extends Error{}const Ry=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Cy=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function Ly(t){var e,i,a;(i=(e=globalThis.chrome)==null?void 0:e.cast)!=null&&i.isAvailable?(a=globalThis.cast)!=null&&a.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function My(){return globalThis.chrome}function Dy(){var i;const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if((i=globalThis.chrome)!=null&&i.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function zi(){var t,e;return(e=(t=globalThis.cast)==null?void 0:t.framework)==null?void 0:e.CastContext.getInstance()}function oc(){var t;return(t=zi())==null?void 0:t.getCurrentSession()}function lc(){var t;return(t=oc())==null?void 0:t.getSessionObj().media[0]}function xy(t){return new Promise((e,i)=>{lc().editTracksInfo(t,e,i)})}function Oy(t){return new Promise((e,i)=>{lc().getStatus(t,e,i)})}function em(t){return zi().setOptions({...bv(),...t})}function bv(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function tm(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function Ny(t){for(const e of t.split(`
`)){const i=e.trim();if(i.startsWith("#EXT-X-MEDIA")&&/TYPE=AUDIO/i.test(i)){const a=i.match(/URI="([^"]+)"/i);if(a)return a[1]}}}function Py(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function im(t){const i=t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="");return i==null?void 0:i.trim()}async function Uy(t){if(!t)return!1;if(/\.m3u8?(\?.*)?$/i.test(t))return!0;if(t.startsWith("blob:"))return!1;try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return Ry.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function $y(t){if(!t||t.startsWith("blob:"))return{videoFormat:void 0,audioFormat:void 0};try{const e=await(await fetch(t)).text();let i=e;const a=Py(e);if(a.length>0){const l=new URL(a[0],t).toString();i=await(await fetch(l)).text()}const r=im(i),n=tm(r),s=Ny(e);let o=n;if(s)try{const l=new URL(s,t).toString(),d=await(await fetch(l)).text(),p=im(d);o=tm(p)??n}catch(l){console.error("Error while trying to parse the audio rendition playlist",l)}return{videoFormat:n,audioFormat:o}}catch(e){return console.error("Error while trying to parse the manifest playlist",e),{videoFormat:void 0,audioFormat:void 0}}}const Ns=new Cy,mi=new WeakSet;let De;Ly(()=>{var t,e,i,a;if(!((e=(t=globalThis.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)){console.debug("chrome.cast.isAvailable",(a=(i=globalThis.chrome)==null?void 0:i.cast)==null?void 0:a.isAvailable);return}De||(De=cast.framework,zi().addEventListener(De.CastContextEventType.CAST_STATE_CHANGED,r=>{Ns.forEach(n=>{var s,o;return(o=(s=Xi.get(n)).onCastStateChanged)==null?void 0:o.call(s,r)})}),zi().addEventListener(De.CastContextEventType.SESSION_STATE_CHANGED,r=>{Ns.forEach(n=>{var s,o;return(o=(s=Xi.get(n)).onSessionStateChanged)==null?void 0:o.call(s,r)})}),Ns.forEach(r=>{var n,s;return(s=(n=Xi.get(r)).init)==null?void 0:s.call(n)}))});let am=0;var Z,Sr,Qe,Ut,Ta,Aa,ji,bl,Jn,ce,da,gv,yv,Rd,Tv,Cd,Av,Ld;class Hy extends EventTarget{constructor(i){super();qe(this,ce);qe(this,Z);qe(this,Sr);qe(this,Qe);qe(this,Ut);qe(this,Ta,"disconnected");qe(this,Aa,!1);qe(this,ji,new Set);qe(this,bl,new WeakMap);qe(this,Jn,()=>Et(this,ce,Ld).call(this));Xe(this,Z,i),Ns.add(this),Xi.set(this,{init:()=>Et(this,ce,Cd).call(this),onCastStateChanged:()=>Et(this,ce,Rd).call(this),onSessionStateChanged:()=>Et(this,ce,Tv).call(this),getCastPlayer:()=>S(this,ce,da)}),Et(this,ce,Cd).call(this)}destroy(){var i,a,r;(a=(i=S(this,Z))==null?void 0:i.textTracks)==null||a.removeEventListener("change",S(this,Jn)),S(this,Ut)&&((r=S(this,Qe))!=null&&r.controller)&&Object.entries(S(this,Ut)).forEach(([n,s])=>{S(this,Qe).controller.removeEventListener(n,s)}),S(this,Z)&&mi.delete(S(this,Z)),Xe(this,Sr,!1)}get state(){return S(this,Ta)}async watchAvailability(i){if(S(this,Z).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");return S(this,bl).set(i,++am),S(this,ji).add(i),queueMicrotask(()=>i(Et(this,ce,yv).call(this))),am}async cancelWatchAvailability(i){if(S(this,Z).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");i?S(this,ji).delete(i):S(this,ji).clear()}async prompt(){var a,r,n,s;if(S(this,Z).disableRemotePlayback)throw new Zl("disableRemotePlayback attribute is present.");if(!((r=(a=globalThis.chrome)==null?void 0:a.cast)!=null&&r.isAvailable))throw new Iy("The RemotePlayback API is disabled on this platform.");const i=mi.has(S(this,Z));mi.add(S(this,Z)),em(S(this,Z).castOptions),Object.entries(S(this,Ut)).forEach(([o,l])=>{S(this,Qe).controller.addEventListener(o,l)});try{await zi().requestSession()}catch(o){if(i||mi.delete(S(this,Z)),o==="cancel")return;throw new Error(o)}(s=(n=Xi.get(S(this,Z)))==null?void 0:n.loadOnPrompt)==null||s.call(n)}}Z=new WeakMap,Sr=new WeakMap,Qe=new WeakMap,Ut=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,ji=new WeakMap,bl=new WeakMap,Jn=new WeakMap,ce=new WeakSet,da=function(){if(mi.has(S(this,Z)))return S(this,Qe)},gv=function(){mi.has(S(this,Z))&&(Object.entries(S(this,Ut)).forEach(([i,a])=>{S(this,Qe).controller.removeEventListener(i,a)}),mi.delete(S(this,Z)),S(this,Z).muted=S(this,Qe).isMuted,S(this,Z).currentTime=S(this,Qe).savedPlayerState.currentTime,S(this,Qe).savedPlayerState.isPaused===!1&&S(this,Z).play())},yv=function(){var a;const i=(a=zi())==null?void 0:a.getCastState();return i&&i!=="NO_DEVICES_AVAILABLE"},Rd=function(){const i=zi().getCastState();if(mi.has(S(this,Z))&&i==="CONNECTING"&&(Xe(this,Ta,"connecting"),this.dispatchEvent(new Event("connecting"))),!S(this,Aa)&&(i!=null&&i.includes("CONNECT"))){Xe(this,Aa,!0);for(let a of S(this,ji))a(!0)}else if(S(this,Aa)&&(!i||i==="NO_DEVICES_AVAILABLE")){Xe(this,Aa,!1);for(let a of S(this,ji))a(!1)}},Tv=async function(){var a;const{SESSION_RESUMED:i}=De.SessionState;if(zi().getSessionState()===i&&S(this,Z).castSrc===((a=lc())==null?void 0:a.media.contentId)){mi.add(S(this,Z)),Object.entries(S(this,Ut)).forEach(([r,n])=>{S(this,Qe).controller.addEventListener(r,n)});try{await Oy(new chrome.cast.media.GetStatusRequest)}catch(r){console.error(r)}S(this,Ut)[De.RemotePlayerEventType.IS_PAUSED_CHANGED](),S(this,Ut)[De.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},Cd=function(){!De||S(this,Sr)||(Xe(this,Sr,!0),em(S(this,Z).castOptions),S(this,Z).textTracks.addEventListener("change",S(this,Jn)),Et(this,ce,Rd).call(this),Xe(this,Qe,new De.RemotePlayer),new De.RemotePlayerController(S(this,Qe)),Xe(this,Ut,{[De.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:i})=>{i===!0?(Xe(this,Ta,"connected"),this.dispatchEvent(new Event("connect"))):(Et(this,ce,gv).call(this),Xe(this,Ta,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[De.RemotePlayerEventType.DURATION_CHANGED]:()=>{S(this,Z).dispatchEvent(new Event("durationchange"))},[De.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{S(this,Z).dispatchEvent(new Event("volumechange"))},[De.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{S(this,Z).dispatchEvent(new Event("volumechange"))},[De.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var i;(i=S(this,ce,da))!=null&&i.isMediaLoaded&&S(this,Z).dispatchEvent(new Event("timeupdate"))},[De.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{S(this,Z).dispatchEvent(new Event("resize"))},[De.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{S(this,Z).dispatchEvent(new Event(this.paused?"pause":"play"))},[De.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var i,a;((i=S(this,ce,da))==null?void 0:i.playerState)!==chrome.cast.media.PlayerState.PAUSED&&S(this,Z).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[(a=S(this,ce,da))==null?void 0:a.playerState]))},[De.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var i;(i=S(this,ce,da))!=null&&i.isMediaLoaded&&(await Promise.resolve(),Et(this,ce,Av).call(this))}}))},Av=function(){Et(this,ce,Ld).call(this)},Ld=async function(){var u,c,f;if(!S(this,ce,da))return;const a=(((u=S(this,Qe).mediaInfo)==null?void 0:u.tracks)??[]).filter(({type:b})=>b===chrome.cast.media.TrackType.TEXT),r=[...S(this,Z).textTracks].filter(({kind:b})=>b==="subtitles"||b==="captions"),n=a.map(({language:b,name:E,trackId:T})=>{const{mode:v}=r.find(y=>y.language===b&&y.label===E)??{};return v?{mode:v,trackId:T}:!1}).filter(Boolean),o=n.filter(({mode:b})=>b!=="showing").map(({trackId:b})=>b),l=n.find(({mode:b})=>b==="showing"),d=((f=(c=oc())==null?void 0:c.getSessionObj().media[0])==null?void 0:f.activeTrackIds)??[];let p=d;if(d.length&&(p=p.filter(b=>!o.includes(b))),l!=null&&l.trackId&&(p=[...p,l.trackId]),p=[...new Set(p)],!((b,E)=>b.length===E.length&&b.every(T=>E.includes(T)))(d,p))try{const b=new chrome.cast.media.EditTracksInfoRequest(p);await xy(b)}catch(b){console.error(b)}};const By=t=>{var e,i,a,r,n,s,X,kv;return e=class extends t{constructor(){super(...arguments);qe(this,s);qe(this,i,{paused:!1});qe(this,a,bv());qe(this,r);qe(this,n)}get remote(){return S(this,n)?S(this,n):My()?this.isConnected?(this.disableRemotePlayback||Dy(),Xi.set(this,{loadOnPrompt:()=>Et(this,s,kv).call(this)}),Xe(this,n,new Hy(this))):void 0:super.remote}disconnectedCallback(){var h,u;(h=S(this,n))==null||h.destroy(),Xe(this,n,null),Xi.delete(this),(u=super.disconnectedCallback)==null||u.call(this)}attributeChangedCallback(h,u,c){if(super.attributeChangedCallback(h,u,c),h==="cast-receiver"&&c){S(this,a).receiverApplicationId=c;return}if(S(this,s,X))switch(h){case"cast-stream-type":case"cast-src":this.load();break}}async load(){var T;if(!S(this,s,X))return super.load();const h=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);h.customData=this.castCustomData;const u=[...this.querySelectorAll("track")].filter(({kind:v,src:y})=>y&&(v==="subtitles"||v==="captions")),c=[];let f=0;if(u.length&&(h.tracks=u.map(v=>{const y=++f;c.length===0&&v.track.mode==="showing"&&c.push(y);const w=new chrome.cast.media.Track(y,chrome.cast.media.TrackType.TEXT);return w.trackContentId=v.src,w.trackContentType="text/vtt",w.subtype=v.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,w.name=v.label,w.language=v.srclang,w})),this.castStreamType==="live"?h.streamType=chrome.cast.media.StreamType.LIVE:h.streamType=chrome.cast.media.StreamType.BUFFERED,h.metadata=new chrome.cast.media.GenericMediaMetadata,h.metadata.title=this.title,h.metadata.images=[{url:this.poster}],await Uy(this.castSrc)){h.contentType||(h.contentType="application/x-mpegURL");const{videoFormat:v,audioFormat:y}=await $y(this.castSrc);(v==null?void 0:v.includes("m4s"))||(v==null?void 0:v.includes("mp4"))||(v==null?void 0:v.includes("m4a"))?(h.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,h.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):y!=null&&y.includes("aac")?(h.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.AAC,h.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS):(v!=null&&v.includes("ts")||y!=null&&y.includes("ts"))&&(h.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,h.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS)}const E=new chrome.cast.media.LoadRequest(h);E.currentTime=super.currentTime??0,E.autoplay=!S(this,i).paused,E.activeTrackIds=c,await((T=oc())==null?void 0:T.loadMedia(E)),this.dispatchEvent(new Event("volumechange"))}play(){var h;if(S(this,s,X)){S(this,s,X).isPaused&&((h=S(this,s,X).controller)==null||h.playOrPause());return}return super.play()}pause(){var h;if(S(this,s,X)){S(this,s,X).isPaused||(h=S(this,s,X).controller)==null||h.playOrPause();return}super.pause()}get castOptions(){return S(this,a)}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(h){this.castReceiver!=h&&this.setAttribute("cast-receiver",`${h}`)}get castSrc(){var c;const h=this.currentSrc,u=h!=null&&h.startsWith("blob:")?void 0:h;return this.getAttribute("cast-src")??((c=this.querySelector("source"))==null?void 0:c.src)??u??this.getAttribute("src")??void 0}set castSrc(h){this.castSrc!=h&&this.setAttribute("cast-src",`${h}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(h){this.setAttribute("cast-content-type",`${h}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(h){this.setAttribute("cast-stream-type",`${h}`)}get castCustomData(){return S(this,r)}set castCustomData(h){const u=typeof h;if(!["object","undefined"].includes(u)){console.error(`castCustomData must be nullish or an object but value was of type ${u}`);return}Xe(this,r,h)}get readyState(){if(S(this,s,X))switch(S(this,s,X).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return S(this,s,X)?S(this,s,X).isPaused:super.paused}get muted(){var h;return S(this,s,X)?(h=S(this,s,X))==null?void 0:h.isMuted:super.muted}set muted(h){var u;if(S(this,s,X)){(h&&!S(this,s,X).isMuted||!h&&S(this,s,X).isMuted)&&((u=S(this,s,X).controller)==null||u.muteOrUnmute());return}super.muted=h}get volume(){var h;return S(this,s,X)?((h=S(this,s,X))==null?void 0:h.volumeLevel)??1:super.volume}set volume(h){var u;if(S(this,s,X)){S(this,s,X).volumeLevel=+h,(u=S(this,s,X).controller)==null||u.setVolumeLevel();return}super.volume=h}get duration(){var h,u;return S(this,s,X)&&((h=S(this,s,X))!=null&&h.isMediaLoaded)?((u=S(this,s,X))==null?void 0:u.duration)??NaN:super.duration}get currentTime(){var h,u;return S(this,s,X)&&((h=S(this,s,X))!=null&&h.isMediaLoaded)?((u=S(this,s,X))==null?void 0:u.currentTime)??0:super.currentTime}set currentTime(h){var u;if(S(this,s,X)){S(this,s,X).currentTime=h,(u=S(this,s,X).controller)==null||u.seek();return}super.currentTime=h}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,X=function(){var h,u;return(u=(h=Xi.get(S(this,n)))==null?void 0:h.getCastPlayer)==null?void 0:u.call(h)},kv=async function(){S(this,i).paused=is(e.prototype,this,"paused"),is(e.prototype,this,"pause").call(this),this.muted=is(e.prototype,this,"muted");try{await this.load()}catch(h){console.error(h)}},xh(e,"observedAttributes",[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),e};var Sv=t=>{throw TypeError(t)},wv=(t,e,i)=>e.has(t)||Sv("Cannot "+i),Wy=(t,e,i)=>(wv(t,e,"read from private field"),i?i.call(t):e.get(t)),Fy=(t,e,i)=>e.has(t)?Sv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ky=(t,e,i,a)=>(wv(t,e,"write to private field"),e.set(t,i),i),Iv=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends Iv{}globalThis.DocumentFragment=t}var Vy=class extends Iv{},qy={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Vy)}},Yy={customElements:qy},Gy=typeof window>"u"||typeof globalThis.customElements>"u",Xl=Gy?Yy:globalThis,Ps,rm=class extends By(QE(wy)){constructor(){super(...arguments),Fy(this,Ps)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=Wy(this,Ps))!=null?t:this.muxCastCustomData}set castCustomData(t){Ky(this,Ps,t)}};Ps=new WeakMap;Xl.customElements.get("mux-video")||(Xl.customElements.define("mux-video",rm),Xl.MuxVideoElement=rm);const x={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},ee={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Rv={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Cv=Object.entries(Rv),m=Cv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),jy={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},ui=Cv.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...jy});Object.entries(ui).reduce((t,[e,i])=>{const a=m[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const zy=Object.entries(m).reduce((t,[e,i])=>{const a=ui[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),li={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},fr={DISABLED:"disabled",SHOWING:"showing"},Jl={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},ut={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ii={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Qy={FULLSCREEN:"fullscreen"};function Zy(t){return t==null?void 0:t.map(Jy).join(" ")}function Xy(t){return t==null?void 0:t.split(/\s+/).map(e1)}function Jy(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function e1(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function t1(t){return t==null?void 0:t.map(a1).join(" ")}function i1(t){return t==null?void 0:t.split(/\s+/).map(r1)}function a1(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function r1(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function n1(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function dc(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function Lv(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Mv=t=>new Promise(e=>setTimeout(e,t)),s1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ed(t){return String(t).replace(/[&<>"']/g,e=>s1[e])}const o1={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var nm;const Sn={en:o1};let Er=((nm=globalThis.navigator)==null?void 0:nm.language)||"en";const l1=t=>{Er=t},d1=t=>{var e,i,a;const[r]=Er.split("-");return((e=Sn[Er])==null?void 0:e[t])||((i=Sn[r])==null?void 0:i[t])||((a=Sn.en)==null?void 0:a[t])||t},u1=()=>{const[t]=Er.split("-");return Sn[Er]?Er:Sn[t]?t:"en"},D=(t,e={})=>d1(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),sm=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],om=(t,e)=>{const i=D(t===1?sm[e].singular:sm[e].plural);return`${t} ${i}`},wn=t=>{if(!dc(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((s,o)=>s&&om(s,o)).filter(s=>s).join(", ");return i?D("{time} remaining",{time:n}):e===0?om(0,2):n};function Ji(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}let Dv=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class xv extends Dv{}let lm=class extends xv{constructor(){super(...arguments),this.role=null}};class c1{observe(){}unobserve(){}disconnect(){}}const Ov={createElement:function(){return new Wn.HTMLElement},createElementNS:function(){return new Wn.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Wn={ResizeObserver:c1,document:Ov,Node:xv,Element:lm,HTMLElement:class extends lm{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Wn.DocumentFragment}},DocumentFragment:class extends Dv{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Nv="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",Pv=Object.keys(Wn).every(t=>t in globalThis),g=Nv&&!Pv?Wn:globalThis,Re=Nv&&!Pv?Ov:globalThis.document,dm=new WeakMap,uc=t=>{let e=dm.get(t);return e||dm.set(t,e=new Set),e},Uv=new g.ResizeObserver(t=>{for(const e of t)for(const i of uc(e.target))i(e)});function Ir(t,e){uc(t).add(e),Uv.observe(t)}function Rr(t,e){const i=uc(t);i.delete(e),i.size||Uv.unobserve(t)}function ft(t){const e={};for(const i of t)e[i.name]=i.value;return e}function rt(t){var e;return(e=Md(t))!=null?e:xr(t,"media-controller")}function Md(t){var e;const{MEDIA_CONTROLLER:i}=ee,a=t.getAttribute(i);if(a)return(e=wl(t))==null?void 0:e.getElementById(a)}const $v=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},h1=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Hv=(t,e)=>h1(t,e)[0],Ci=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Ci(t,e.getRootNode().host),xr=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||xr(t.getRootNode().host,e)};function cc(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=cc(i.shadowRoot))!=null?e:i:null}function wl(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Bv(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function m1(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function xe(t,e){const i=p1(t,a=>a===e);return i||hc(t,e)}function p1(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function hc(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r==null?void 0:r[r.length-1];if(!(n!=null&&n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const s=n==null?void 0:n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[s]}function oe(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function be(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}oe(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function z(t,e){return t.hasAttribute(e)}function Q(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}z(t,e)!=i&&t.toggleAttribute(e,i)}function he(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function le(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;he(t,e,void 0)!==a&&t.setAttribute(e,a)}var Wv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},It=(t,e,i)=>(Wv(t,e,"read from private field"),i?i.call(t):e.get(t)),v1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ss=(t,e,i,a)=>(Wv(t,e,"write to private field"),e.set(t,i),i),Fe;function f1(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Il extends g.HTMLElement{constructor(){if(super(),v1(this,Fe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ee.MEDIA_CONTROLLER,m.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ee.MEDIA_CONTROLLER&&(i&&((n=(r=It(this,Fe))==null?void 0:r.unassociateElement)==null||n.call(r,this),ss(this,Fe,null)),a&&this.isConnected&&(ss(this,Fe,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=It(this,Fe))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ss(this,Fe,E1(this)),this.getAttribute(ee.MEDIA_CONTROLLER)&&((i=(e=It(this,Fe))==null?void 0:e.associateElement)==null||i.call(e,this)),It(this,Fe)&&(It(this,Fe).addEventListener("pointerdown",this),It(this,Fe).addEventListener("click",this),It(this,Fe).hasAttribute("tabindex")||(It(this,Fe).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(ee.MEDIA_CONTROLLER)&&((i=(e=It(this,Fe))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=It(this,Fe))==null||a.removeEventListener("pointerdown",this),(r=It(this,Fe))==null||r.removeEventListener("click",this),ss(this,Fe,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:d,height:p}=this.getBoundingClientRect(),h=n-o,u=s-l;if(h<0||u<0||h>d||u>p||d===0&&p===0)return;const c=this._pointerType||"mouse";if(this._pointerType=void 0,c===Jl.TOUCH){this.handleTap(e);return}else if(c===Jl.MOUSE||c===Jl.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return z(this,m.MEDIA_PAUSED)}set mediaPaused(e){Q(this,m.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(i,{composed:!0,bubbles:!0}))}}Fe=new WeakMap;Il.shadowRootOptions={mode:"open"};Il.getTemplateHTML=f1;function E1(t){var e;const i=t.getAttribute(ee.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):xr(t,"media-controller")}g.customElements.get("media-gesture-receiver")||g.customElements.define("media-gesture-receiver",Il);var um=Il,mc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Te=(t,e,i)=>(mc(t,e,"read from private field"),i?i.call(t):e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Mt=(t,e,i,a)=>(mc(t,e,"write to private field"),e.set(t,i),i),Bt=(t,e,i)=>(mc(t,e,"access private method"),i),rn,Wo,Wa,Cr,ur,Dd,Fa,Us,xd,Fv,Od,Kv,Fn,Rl,Cl,pc,Lr,Kn,Oi,$s;const $={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function _1(t){return`
    <style>
      
      :host([${m.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
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

      
      :host([${$.USER_INACTIVE}]:not([${m.MEDIA_PAUSED}]):not([${m.MEDIA_IS_AIRPLAYING}]):not([${m.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${$.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${$.USER_INACTIVE}]:not([${$.NO_AUTOHIDE}]):not([${m.MEDIA_PAUSED}]):not([${m.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${$.USER_INACTIVE}][${$.AUTOHIDE_OVER_CONTROLS}]:not([${$.NO_AUTOHIDE}]):not([${m.MEDIA_PAUSED}]):not([${m.MEDIA_IS_CASTING}]):not([${$.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${$.AUDIO}])[${m.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${$.AUDIO}])[${m.MEDIA_STREAM_TYPE}="${ii.ON_DEMAND}"][${m.MEDIA_CURRENT_TIME}]:not([${m.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
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
        <template shadowrootmode="${um.shadowRootOptions.mode}">
          ${um.getTemplateHTML({})}
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
  `}const b1=Object.values(m),g1="sm:384 md:576 lg:768 xl:960";function y1(t){Vv(t.target,t.contentRect.width)}function Vv(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute($.BREAKPOINTS))!=null?i:g1,r=T1(a),n=A1(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(ui.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(ui.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function T1(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function A1(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class Ll extends g.HTMLElement{constructor(){if(super(),ze(this,xd),ze(this,Od),ze(this,Fn),ze(this,Cl),ze(this,Lr),ze(this,rn,void 0),ze(this,Wo,0),ze(this,Wa,null),ze(this,Cr,null),ze(this,ur,void 0),this.breakpointsComputed=!1,ze(this,Dd,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const n of r){if(n.slot!="media"||a.target!=this)continue;let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!i)this.mediaUnsetCallback(n);else{let o=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(n)}}if(i)for(const n of a.addedNodes)n===i&&this.handleMediaUpdated(i)}}),ze(this,Fa,!1),ze(this,Us,e=>{Te(this,Fa)||(setTimeout(()=>{y1(e),Mt(this,Fa,!1)},0),Mt(this,Fa,!0))}),ze(this,Oi,void 0),ze(this,$s,()=>{if(!Te(this,Oi).assignedElements({flatten:!0}).length){Te(this,Wa)&&this.mediaUnsetCallback(Te(this,Wa));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}Mt(this,rn,new MutationObserver(Te(this,Dd)))}static get observedAttributes(){return[$.AUTOHIDE,$.GESTURES_DISABLED].concat(b1).filter(e=>![m.MEDIA_RENDITION_LIST,m.MEDIA_AUDIO_TRACK_LIST,m.MEDIA_CHAPTERS_CUES,m.MEDIA_WIDTH,m.MEDIA_HEIGHT,m.MEDIA_ERROR,m.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==$.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Mt(this,Wa,e),e.localName.includes("-")&&await g.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;Te(this,rn).observe(this,{childList:!0,subtree:!0}),Ir(this,Te(this,Us));const i=this.getAttribute($.AUDIO)!=null,a=D(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute($.USER_INACTIVE,""),Vv(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(Mt(this,Oi,r),Te(this,Oi).addEventListener("slotchange",Te(this,$s))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=g.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Rr(this,Te(this,Us)),clearTimeout(Te(this,Cr)),Te(this,rn).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=g.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),Te(this,Oi)&&(Te(this,Oi).removeEventListener("slotchange",Te(this,$s)),Mt(this,Oi,null)),Mt(this,Fa,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){Mt(this,Wa,null)}handleEvent(e){switch(e.type){case"pointerdown":Mt(this,Wo,e.timeStamp);break;case"pointermove":Bt(this,xd,Fv).call(this,e);break;case"pointerup":Bt(this,Od,Kv).call(this,e);break;case"mouseleave":Bt(this,Fn,Rl).call(this);break;case"mouseup":this.removeAttribute($.KEYBOARD_CONTROL);break;case"keyup":Bt(this,Lr,Kn).call(this),this.setAttribute($.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Mt(this,ur,isNaN(i)?0:i)}get autohide(){return(Te(this,ur)===void 0?2:Te(this,ur)).toString()}get breakpoints(){return he(this,$.BREAKPOINTS)}set breakpoints(e){le(this,$.BREAKPOINTS,e)}get audio(){return z(this,$.AUDIO)}set audio(e){Q(this,$.AUDIO,e)}get gesturesDisabled(){return z(this,$.GESTURES_DISABLED)}set gesturesDisabled(e){Q(this,$.GESTURES_DISABLED,e)}get keyboardControl(){return z(this,$.KEYBOARD_CONTROL)}set keyboardControl(e){Q(this,$.KEYBOARD_CONTROL,e)}get noAutohide(){return z(this,$.NO_AUTOHIDE)}set noAutohide(e){Q(this,$.NO_AUTOHIDE,e)}get autohideOverControls(){return z(this,$.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){Q(this,$.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return z(this,$.USER_INACTIVE)}set userInteractive(e){Q(this,$.USER_INACTIVE,e)}}rn=new WeakMap;Wo=new WeakMap;Wa=new WeakMap;Cr=new WeakMap;ur=new WeakMap;Dd=new WeakMap;Fa=new WeakMap;Us=new WeakMap;xd=new WeakSet;Fv=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-Te(this,Wo)<250)return;Bt(this,Cl,pc).call(this),clearTimeout(Te(this,Cr));const e=this.hasAttribute($.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&Bt(this,Lr,Kn).call(this)};Od=new WeakSet;Kv=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute($.USER_INACTIVE);[this,this.media].includes(t.target)&&e?Bt(this,Fn,Rl).call(this):Bt(this,Lr,Kn).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&Bt(this,Lr,Kn).call(this)};Fn=new WeakSet;Rl=function(){if(Te(this,ur)<0||this.hasAttribute($.USER_INACTIVE))return;this.setAttribute($.USER_INACTIVE,"");const t=new g.CustomEvent(ui.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Cl=new WeakSet;pc=function(){if(!this.hasAttribute($.USER_INACTIVE))return;this.removeAttribute($.USER_INACTIVE);const t=new g.CustomEvent(ui.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Lr=new WeakSet;Kn=function(){Bt(this,Cl,pc).call(this),clearTimeout(Te(this,Cr));const t=parseInt(this.autohide);t<0||Mt(this,Cr,setTimeout(()=>{Bt(this,Fn,Rl).call(this)},t*1e3))};Oi=new WeakMap;$s=new WeakMap;Ll.shadowRootOptions={mode:"open"};Ll.getTemplateHTML=_1;g.customElements.get("media-container")||g.customElements.define("media-container",Ll);var vc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ka=(t,e,i)=>(vc(t,e,"read from private field"),e.get(t)),pi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fc=(t,e,i,a)=>(vc(t,e,"write to private field"),e.set(t,i),i),ra=(t,e,i)=>(vc(t,e,"access private method"),i),Fo,Vn,Ra,Hs,Nd,Pd,qv,Ud,Yv,$d,Gv,Hd,jv,Bd,zv;function k1(t){return`
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
  `}function S1(t){return`
    <slot id="content"></slot>
  `}const Wr={OPEN:"open",ANCHOR:"anchor"};class Or extends g.HTMLElement{constructor(){super(),pi(this,Hs),pi(this,Pd),pi(this,Ud),pi(this,$d),pi(this,Hd),pi(this,Bd),pi(this,Fo,!1),pi(this,Vn,null),pi(this,Ra,null)}static get observedAttributes(){return[Wr.OPEN,Wr.ANCHOR]}get open(){return z(this,Wr.OPEN)}set open(e){Q(this,Wr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":ra(this,$d,Gv).call(this,e);break;case"focusout":ra(this,Hd,jv).call(this,e);break;case"keydown":ra(this,Bd,zv).call(this,e);break}}connectedCallback(){ra(this,Hs,Nd).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){ra(this,Hs,Nd).call(this),e===Wr.OPEN&&a!==i&&(this.open?ra(this,Pd,qv).call(this):ra(this,Ud,Yv).call(this))}focus(){fc(this,Vn,cc());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}Fo=new WeakMap;Vn=new WeakMap;Ra=new WeakMap;Hs=new WeakSet;Nd=function(){if(!ka(this,Fo)&&(fc(this,Fo,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=xe(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Pd=new WeakSet;qv=function(){var t;(t=ka(this,Ra))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Ud=new WeakSet;Yv=function(){var t;(t=ka(this,Ra))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};$d=new WeakSet;Gv=function(t){fc(this,Ra,t.relatedTarget),Ci(this,t.relatedTarget)||(this.open=!this.open)};Hd=new WeakSet;jv=function(t){var e;Ci(this,t.relatedTarget)||((e=ka(this,Vn))==null||e.focus(),ka(this,Ra)&&ka(this,Ra)!==t.relatedTarget&&this.open&&(this.open=!1))};Bd=new WeakSet;zv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;o||l||d||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=ka(this,Vn))==null||n.focus(),this.open=!1))};Or.shadowRootOptions={mode:"open"};Or.getTemplateHTML=k1;Or.getSlotTemplateHTML=S1;g.customElements.get("media-chrome-dialog")||g.customElements.define("media-chrome-dialog",Or);var w1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Li=(t,e,i)=>(w1(t,e,"read from private field"),i?i.call(t):e.get(t)),cm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ka,Va;const nn={HOTKEYS:"hotkeys"},I1=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function Ec(t){return t===" "?"nospace":`no${t.toLowerCase()}`}function R1(t){const e=new Set(t==null?void 0:t.split(/\s+/));return I1.map(({keys:i,description:a})=>({keys:i.filter(({key:r})=>!e.has(Ec(r))),description:a})).filter(({keys:i})=>i.length)}function C1(t){return`
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
      ${Qv(t[nn.HOTKEYS])}
    </slot>
  `}function Qv(t){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${R1(t).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:n,label:s=n},o)=>o>0?`<span class="key-separator">or</span><span class="key">${s}</span>`:`<span class="key">${s}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}class Zv extends Or{constructor(){super(...arguments),cm(this,Ka,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),n=r[0]===this||r.includes(this),s=r.includes(a);n&&!s&&(this.open=!1)}),cm(this,Va,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,nn.HOTKEYS]}get hotkeys(){var e;return(e=he(this,nn.HOTKEYS))!=null?e:void 0}set hotkeys(e){le(this,nn.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Li(this,Ka)),document.addEventListener("keydown",Li(this,Va)))}disconnectedCallback(){this.removeEventListener("click",Li(this,Ka)),document.removeEventListener("keydown",Li(this,Va))}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),e==="open")this.open?(this.addEventListener("click",Li(this,Ka)),document.addEventListener("keydown",Li(this,Va))):(this.removeEventListener("click",Li(this,Ka)),document.removeEventListener("keydown",Li(this,Va)));else if(e===nn.HOTKEYS&&a!==i){const n=(r=this.shadowRoot)==null?void 0:r.querySelector("#content");n&&(n.innerHTML=Qv(a))}}}Ka=new WeakMap;Va=new WeakMap;Zv.getSlotTemplateHTML=C1;g.customElements.get("media-keyboard-shortcuts-dialog")||g.customElements.define("media-keyboard-shortcuts-dialog",Zv);var Xv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$e=(t,e,i)=>(Xv(t,e,"read from private field"),i?i.call(t):e.get(t)),Fr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},os=(t,e,i,a)=>(Xv(t,e,"write to private field"),e.set(t,i),i),qa,Ya,Ko,_a,fi,Ni;class _c{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Fr(this,fi),Fr(this,qa,void 0),Fr(this,Ya,void 0),Fr(this,Ko,void 0),Fr(this,_a,new Set),os(this,qa,e),os(this,Ya,i),os(this,Ko,new Set(a))}[Symbol.iterator](){return $e(this,fi,Ni).values()}get length(){return $e(this,fi,Ni).size}get value(){var e;return(e=[...$e(this,fi,Ni)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(os(this,_a,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...$e(this,fi,Ni)][e]}values(){return $e(this,fi,Ni).values()}forEach(e,i){$e(this,fi,Ni).forEach(e,i)}add(...e){var i,a;e.forEach(r=>$e(this,_a).add(r)),!(this.value===""&&!((i=$e(this,qa))!=null&&i.hasAttribute(`${$e(this,Ya)}`)))&&((a=$e(this,qa))==null||a.setAttribute(`${$e(this,Ya)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>$e(this,_a).delete(a)),(i=$e(this,qa))==null||i.setAttribute(`${$e(this,Ya)}`,`${this.value}`)}contains(e){return $e(this,fi,Ni).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}qa=new WeakMap;Ya=new WeakMap;Ko=new WeakMap;_a=new WeakMap;fi=new WeakSet;Ni=function(){return $e(this,_a).size?$e(this,_a):$e(this,Ko)};const L1=(t="")=>t.split(/\s+/),Jv=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?li.CAPTIONS:li.SUBTITLES,language:i,label:r}},Ml=(t="",e={})=>L1(t).map(i=>{const a=Jv(i);return{...e,...a}}),ef=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Jv(e):e):typeof t=="string"?Ml(t):[t]:[],Wd=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,qn=(t=[])=>Array.prototype.map.call(t,Wd).join(" "),M1=(t,e)=>i=>i[t]===e,tf=t=>{const e=Object.entries(t).map(([i,a])=>M1(i,a));return i=>e.every(a=>a(i))},In=(t,e=[],i=[])=>{const a=ef(i).map(tf),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Dl=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:tf(e);return Array.from(t.textTracks).filter(i)},af=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(m.MEDIA_SUBTITLES_SHOWING)},D1=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},hm="exitFullscreen"in Re?"exitFullscreen":"webkitExitFullscreen"in Re?"webkitExitFullscreen":"webkitCancelFullScreen"in Re?"webkitCancelFullScreen":void 0,x1=t=>{var e;const{documentElement:i}=t;if(hm){const a=(e=i==null?void 0:i[hm])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},sn="fullscreenElement"in Re?"fullscreenElement":"webkitFullscreenElement"in Re?"webkitFullscreenElement":void 0,O1=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[sn];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Qy.FULLSCREEN?i:a},N1=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=O1(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(sn in s))return Ci(n,r);for(;s!=null&&s[sn];){if(s[sn]===r)return!0;s=(e=s[sn])==null?void 0:e.shadowRoot}}return!1},P1="fullscreenEnabled"in Re?"fullscreenEnabled":"webkitFullscreenEnabled"in Re?"webkitFullscreenEnabled":void 0,U1=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[P1])||i&&"webkitSupportsFullscreen"in i};let ls;const bc=()=>{var t,e;return ls||(ls=(e=(t=Re)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),ls)},$1=async(t=bc())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([H1(t,i.signal),B1(t,e)]);return i.abort(),a},H1=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),B1=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Mv(10)}return t.volume!==e},W1=/.*Version\/.*Safari\/.*/.test(g.navigator.userAgent),rf=(t=bc())=>g.matchMedia("(display-mode: standalone)").matches&&W1?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",nf=(t=bc())=>U1({documentElement:Re,media:t}),F1=nf(),K1=rf(),V1=!!g.WebKitPlaybackTargetAvailabilityEvent,q1=!!g.chrome,Vo=t=>Dl(t.media,e=>[li.SUBTITLES,li.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),sf=t=>Dl(t.media,e=>e.mode===fr.SHOWING&&[li.SUBTITLES,li.CAPTIONS].includes(e.kind)),of=(t,e)=>{const i=Vo(t),a=sf(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)In(fr.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!(s!=null&&s.noSubtitlesLangPref)){const p=g.localStorage.getItem("media-chrome-pref-subtitles-lang"),h=p?[p,...g.navigator.languages]:g.navigator.languages,u=i.filter(c=>h.some(f=>c.language.toLowerCase().startsWith(f.split("-")[0]))).sort((c,f)=>{const b=h.findIndex(T=>c.language.toLowerCase().startsWith(T.split("-")[0])),E=h.findIndex(T=>f.language.toLowerCase().startsWith(T.split("-")[0]));return b-E});u[0]&&(n=u[0])}const{language:o,label:l,kind:d}=n;In(fr.DISABLED,i,a),In(fr.SHOWING,i,[{language:o,label:l,kind:d}])}}},gc=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Y1(t,e):Object.entries(t).every(([i,a])=>i in e&&gc(a,e[i])),Y1=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>gc(r,e[n])):!0},G1=Object.values(ii);let qo;const j1=$1().then(t=>(qo=t,qo)),z1=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof g.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=g.customElements.get(i);a&&e instanceof a||(await g.customElements.whenDefined(i),g.customElements.upgrade(e))}))},Q1=new g.DOMParser,Z1=t=>t&&(Q1.parseFromString(t,"text/html").body.textContent||t),on={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=g.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&g.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;g.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=g.localStorage.getItem("media-chrome-pref-muted")==="true";on.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?g.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&g.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=g.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;on.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!dc(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ii.LIVE,ii.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(G1.includes(r))return r===ii.UNKNOWN?a:r;const n=e.duration;return n===1/0?ii.LIVE:Number.isFinite(n)?ii.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=on.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ii.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(on.mediaStreamType.get(t)===ii.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Vo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return sf(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![li.CAPTIONS,li.SUBTITLES].includes((l=o==null?void 0:o.track)==null?void 0:l.kind)||of(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Dl(i,{kind:li.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:Z1(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),n==null||n.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),n==null||n.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Ci(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!Re.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else Re.pictureInPictureElement&&Re.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return N1(t)},set(t,e,i){var a,r;t?(D1(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):x1(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&g.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!F1||!nf(e))return ut.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!K1||!rf(e))return ut.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return ut.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(qo===!1||(e==null?void 0:e.volume)==null)return ut.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{qo==null&&j1.then(e=>t(e?void 0:ut.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!q1||!((i=a==null?void 0:a.remote)!=null&&i.state))return ut.UNSUPPORTED;if(!(e==null||e==="available"))return ut.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!V1)return ut.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return ut.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a==null?void 0:a.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return ut.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return ut.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return ut.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return ut.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},X1={[x.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,d;if(s&&o!=null){const[c]=Dl(s,{kind:li.METADATA,label:"thumbnails"}),f=Array.prototype.find.call((a=c==null?void 0:c.cues)!=null?a:[],(b,E,T)=>E===0?b.endTime>o:E===T.length-1?b.startTime<=o:b.startTime<=o&&b.endTime>o);if(f){const b=/'^(?:[a-z]+:)?\/\//i.test(f.text)||(r=s==null?void 0:s.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,E=new URL(f.text,b);d=new URLSearchParams(E.hash).get("#xywh").split(",").map(v=>+v),l=E.href}}const p=t.mediaDuration.get(e);let u=(n=t.mediaChaptersCues.get(e).find((c,f,b)=>f===b.length-1&&p===c.endTime?c.startTime<=o&&c.endTime>=o:c.startTime<=o&&c.endTime>o))==null?void 0:n.text;return i!=null&&u==null&&(u=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:d,mediaPreviewChapter:u}},[x.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[x.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===ii.LIVE,d=!((i=e.options)!=null&&i.noAutoSeekToLive),p=t.mediaTargetLiveWindow.get(e)>0;if(l&&d&&!p){const h=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(h){const u=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,c=h-u;t.mediaCurrentTime.set(c,e)}}t[s].set(!1,e)},[x.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[x.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[x.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[x.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[x.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[x.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[x.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[x.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Vo(e),s=ef(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&g.localStorage.setItem("media-chrome-pref-subtitles-lang",o),In(fr.SHOWING,n,s)},[x.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Vo(e),r=i??[];In(fr.DISABLED,a,r)},[x.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){of(e,i)},[x.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[x.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[x.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[x.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[x.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[x.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[x.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[x.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},J1=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=on,requestMap:r=X1,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const p=b=>{b!=null&&(gc(b,d)||(d=Object.freeze({...d,...b}),o.forEach(E=>E(d))))},h=()=>{const b=Object.entries(a).reduce((E,[T,{get:v}])=>(E[T]=v(l),E),{});p(b)},u={};let c;const f=async(b,E)=>{var T,v,y,w,k,L,I,U,Y,W,F,de,ue,Ke,st,ot;const Ce=!!c;if(c={...l,...c??{},...b},Ce)return;await z1(...Object.values(b));const Le=o.length>0&&E===0&&s,St=l.media!==c.media,lt=((T=l.media)==null?void 0:T.textTracks)!==((v=c.media)==null?void 0:v.textTracks),Ne=((y=l.media)==null?void 0:y.videoRenditions)!==((w=c.media)==null?void 0:w.videoRenditions),ci=((k=l.media)==null?void 0:k.audioTracks)!==((L=c.media)==null?void 0:L.audioTracks),Ve=((I=l.media)==null?void 0:I.remote)!==((U=c.media)==null?void 0:U.remote),je=l.documentElement!==c.documentElement,hi=!!l.media&&(St||Le),$r=!!((Y=l.media)!=null&&Y.textTracks)&&(lt||Le),yh=!!((W=l.media)!=null&&W.videoRenditions)&&(Ne||Le),Th=!!((F=l.media)!=null&&F.audioTracks)&&(ci||Le),Ah=!!((de=l.media)!=null&&de.remote)&&(Ve||Le),kh=!!l.documentElement&&(je||Le),Kl=hi||$r||yh||Th||Ah||kh,Ma=o.length===0&&E===1&&s,Sh=!!c.media&&(St||Ma),wh=!!((ue=c.media)!=null&&ue.textTracks)&&(lt||Ma),Ih=!!((Ke=c.media)!=null&&Ke.videoRenditions)&&(Ne||Ma),Rh=!!((st=c.media)!=null&&st.audioTracks)&&(ci||Ma),Ch=!!((ot=c.media)!=null&&ot.remote)&&(Ve||Ma),Lh=!!c.documentElement&&(je||Ma),Mh=Sh||wh||Ih||Rh||Ch||Lh;if(!(Kl||Mh)){Object.entries(c).forEach(([re,Hr])=>{l[re]=Hr}),h(),c=void 0;return}Object.entries(a).forEach(([re,{get:Hr,mediaEvents:UE=[],textTracksEvents:$E=[],videoRenditionsEvents:HE=[],audioTracksEvents:BE=[],remoteEvents:WE=[],rootEvents:FE=[],stateOwnersUpdateHandlers:KE=[]}])=>{u[re]||(u[re]={});const dt=fe=>{const ke=Hr(l,fe);p({[re]:ke})};let Pe;Pe=u[re].mediaEvents,UE.forEach(fe=>{Pe&&hi&&(l.media.removeEventListener(fe,Pe),u[re].mediaEvents=void 0),Sh&&(c.media.addEventListener(fe,dt),u[re].mediaEvents=dt)}),Pe=u[re].textTracksEvents,$E.forEach(fe=>{var ke,wt;Pe&&$r&&((ke=l.media.textTracks)==null||ke.removeEventListener(fe,Pe),u[re].textTracksEvents=void 0),wh&&((wt=c.media.textTracks)==null||wt.addEventListener(fe,dt),u[re].textTracksEvents=dt)}),Pe=u[re].videoRenditionsEvents,HE.forEach(fe=>{var ke,wt;Pe&&yh&&((ke=l.media.videoRenditions)==null||ke.removeEventListener(fe,Pe),u[re].videoRenditionsEvents=void 0),Ih&&((wt=c.media.videoRenditions)==null||wt.addEventListener(fe,dt),u[re].videoRenditionsEvents=dt)}),Pe=u[re].audioTracksEvents,BE.forEach(fe=>{var ke,wt;Pe&&Th&&((ke=l.media.audioTracks)==null||ke.removeEventListener(fe,Pe),u[re].audioTracksEvents=void 0),Rh&&((wt=c.media.audioTracks)==null||wt.addEventListener(fe,dt),u[re].audioTracksEvents=dt)}),Pe=u[re].remoteEvents,WE.forEach(fe=>{var ke,wt;Pe&&Ah&&((ke=l.media.remote)==null||ke.removeEventListener(fe,Pe),u[re].remoteEvents=void 0),Ch&&((wt=c.media.remote)==null||wt.addEventListener(fe,dt),u[re].remoteEvents=dt)}),Pe=u[re].rootEvents,FE.forEach(fe=>{Pe&&kh&&(l.documentElement.removeEventListener(fe,Pe),u[re].rootEvents=void 0),Lh&&(c.documentElement.addEventListener(fe,dt),u[re].rootEvents=dt)});const ts=u[re].stateOwnersUpdateHandlers;if(ts&&Kl&&(Array.isArray(ts)?ts:[ts]).forEach(ke=>{typeof ke=="function"&&ke()}),Mh){const fe=KE.map(ke=>ke(dt,c)).filter(ke=>typeof ke=="function");u[re].stateOwnersUpdateHandlers=fe.length===1?fe[0]:fe}else Kl&&(u[re].stateOwnersUpdateHandlers=void 0)}),Object.entries(c).forEach(([re,Hr])=>{l[re]=Hr}),h(),c=void 0};return f({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(b){const{type:E,detail:T}=b;if(r[E]&&d.mediaErrorCode==null){p(r[E](a,l,b));return}E==="mediaelementchangerequest"?f({media:T}):E==="fullscreenelementchangerequest"?f({fullscreenElement:T}):E==="documentelementchangerequest"?f({documentElement:T}):E==="optionschangerequest"&&(Object.entries(T??{}).forEach(([v,y])=>{l.options[v]=y}),h())},getState(){return d},subscribe(b){return f({},o.length+1),o.push(b),b(d),()=>{const E=o.indexOf(b);E>=0&&(f({},o.length-1),o.splice(E,1))}}}};var yc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O=(t,e,i)=>(yc(t,e,"read from private field"),i?i.call(t):e.get(t)),ct=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Dt=(t,e,i,a)=>(yc(t,e,"write to private field"),e.set(t,i),i),Pi=(t,e,i)=>(yc(t,e,"access private method"),i),Ti,ln,j,pt,dn,Yt,Bs,un,Ws,Fd,Sa,Fs,Kd,Rn,Yo,Vd,lf;const df=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],mm=10,pm=.025,vm=.25,eT=.25,tT=2,C={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class uf extends Ll{constructor(){super(),ct(this,Ws),ct(this,Fs),ct(this,Rn),ct(this,Vd),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ct(this,Ti,new _c(this,C.HOTKEYS)),ct(this,ln,void 0),ct(this,j,void 0),ct(this,pt,null),ct(this,dn,void 0),ct(this,Yt,void 0),ct(this,Bs,i=>{var a;(a=O(this,j))==null||a.dispatch(i)}),ct(this,un,void 0),ct(this,Sa,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||df.includes(a))){this.removeEventListener("keyup",O(this,Sa));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};Dt(this,dn,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new g.CustomEvent(zy[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(C.NO_HOTKEYS,C.HOTKEYS,C.DEFAULT_STREAM_TYPE,C.DEFAULT_SUBTITLES,C.DEFAULT_DURATION,C.NO_MUTED_PREF,C.NO_VOLUME_PREF,C.LANG,C.LOOP,C.LIVE_EDGE_OFFSET,C.SEEK_TO_LIVE_OFFSET,C.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return O(this,j)}set mediaStore(e){var i,a;if(O(this,j)&&((i=O(this,Yt))==null||i.call(this),Dt(this,Yt,void 0)),Dt(this,j,e),!O(this,j)&&!this.hasAttribute(C.NO_DEFAULT_STORE)){Pi(this,Ws,Fd).call(this);return}Dt(this,Yt,(a=O(this,j))==null?void 0:a.subscribe(O(this,dn)))}get fullscreenElement(){var e;return(e=O(this,ln))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(C.FULLSCREEN_ELEMENT)&&this.removeAttribute(C.FULLSCREEN_ELEMENT),Dt(this,ln,e),(i=O(this,j))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return z(this,C.DEFAULT_SUBTITLES)}set defaultSubtitles(e){Q(this,C.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return he(this,C.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){le(this,C.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return oe(this,C.DEFAULT_DURATION)}set defaultDuration(e){be(this,C.DEFAULT_DURATION,e)}get noHotkeys(){return z(this,C.NO_HOTKEYS)}set noHotkeys(e){Q(this,C.NO_HOTKEYS,e)}get keysUsed(){return he(this,C.KEYS_USED)}set keysUsed(e){le(this,C.KEYS_USED,e)}get liveEdgeOffset(){return oe(this,C.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){be(this,C.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return z(this,C.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){Q(this,C.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return z(this,C.NO_VOLUME_PREF)}set noVolumePref(e){Q(this,C.NO_VOLUME_PREF,e)}get noMutedPref(){return z(this,C.NO_MUTED_PREF)}set noMutedPref(e){Q(this,C.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return z(this,C.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){Q(this,C.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return z(this,C.NO_DEFAULT_STORE)}set noDefaultStore(e){Q(this,C.NO_DEFAULT_STORE,e)}get resolvedLang(){return u1()}attributeChangedCallback(e,i,a){var r,n,s,o,l,d,p,h,u,c,f,b;if(super.attributeChangedCallback(e,i,a),e===C.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(C.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys(),Pi(this,Rn,Yo).call(this);else if(e===C.HOTKEYS)O(this,Ti).value=a,Pi(this,Rn,Yo).call(this);else if(e===C.DEFAULT_SUBTITLES&&a!==i)(r=O(this,j))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(C.DEFAULT_SUBTITLES)}});else if(e===C.DEFAULT_STREAM_TYPE)(s=O(this,j))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(C.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===C.LIVE_EDGE_OFFSET&&a!==i)(o=O(this,j))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(C.LIVE_EDGE_OFFSET)?+this.getAttribute(C.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(C.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(C.SEEK_TO_LIVE_OFFSET):this.hasAttribute(C.LIVE_EDGE_OFFSET)?+this.getAttribute(C.LIVE_EDGE_OFFSET):void 0}});else if(e===C.SEEK_TO_LIVE_OFFSET&&a!==i)(l=O(this,j))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(C.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(C.SEEK_TO_LIVE_OFFSET):this.hasAttribute(C.LIVE_EDGE_OFFSET)?+this.getAttribute(C.LIVE_EDGE_OFFSET):void 0}});else if(e===C.NO_AUTO_SEEK_TO_LIVE)(d=O(this,j))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(C.NO_AUTO_SEEK_TO_LIVE)}});else if(e===C.FULLSCREEN_ELEMENT){const E=a?(p=this.getRootNode())==null?void 0:p.getElementById(a):void 0;Dt(this,ln,E),(h=O(this,j))==null||h.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===C.LANG&&a!==i?(l1(a),(u=O(this,j))==null||u.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===C.LOOP&&a!==i?(c=O(this,j))==null||c.dispatch({type:x.MEDIA_LOOP_REQUEST,detail:a!=null}):e===C.NO_VOLUME_PREF&&a!==i?(f=O(this,j))==null||f.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(C.NO_VOLUME_PREF)}}):e===C.NO_MUTED_PREF&&a!==i&&((b=O(this,j))==null||b.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(C.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!O(this,j)&&!this.hasAttribute(C.NO_DEFAULT_STORE)&&Pi(this,Ws,Fd).call(this),(e=O(this,j))==null||e.dispatch({type:"documentelementchangerequest",detail:Re}),(i=O(this,j))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),O(this,j)&&!O(this,Yt)&&Dt(this,Yt,(a=O(this,j))==null?void 0:a.subscribe(O(this,dn))),O(this,un)!==void 0&&O(this,j)&&this.media&&setTimeout(()=>{var r,n,s;(n=(r=this.media)==null?void 0:r.textTracks)!=null&&n.length&&((s=O(this,j))==null||s.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:O(this,un)}))},0),this.hasAttribute(C.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,n,s;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),O(this,j)){const o=O(this,j).getState();Dt(this,un,!!((i=o.mediaSubtitlesShowing)!=null&&i.length)),(a=O(this,j))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=O(this,j))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=O(this,j))==null||n.dispatch({type:x.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}O(this,Yt)&&((s=O(this,Yt))==null||s.call(this),Dt(this,Yt,void 0)),this.unassociateElement(this),O(this,pt)&&(O(this,pt).remove(),Dt(this,pt,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=O(this,j))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=O(this,j))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){_m(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=oT(e,a,r);Object.values(x).forEach(s=>{e.addEventListener(s,O(this,Bs))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(x).forEach(r=>{e.removeEventListener(r,O(this,Bs))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),O(this,j)&&Object.entries(O(this,j).getState()).forEach(([r,n])=>{_m([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Pi(this,Fs,Kd))}disableHotkeys(){this.removeEventListener("keydown",Pi(this,Fs,Kd)),this.removeEventListener("keyup",O(this,Sa))}get hotkeys(){return O(this,Ti)}set hotkeys(e){le(this,C.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l,d,p;const h=e.target;if(((r=(a=(i=h.getAttribute(C.KEYS_USED))==null?void 0:i.split(" "))!=null?a:h==null?void 0:h.keysUsed)!=null?r:[]).map(T=>T==="Space"?" ":T).filter(Boolean).includes(e.key))return;let c,f,b;if(!(O(this,Ti).contains(Ec(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&O(this,Ti).contains("noshift+/")))switch(e.key){case" ":case"k":c=O(this,j).getState().mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new g.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"m":c=this.mediaStore.getState().mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST,this.dispatchEvent(new g.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"f":c=this.mediaStore.getState().mediaIsFullscreen?x.MEDIA_EXIT_FULLSCREEN_REQUEST:x.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new g.CustomEvent(c,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new g.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const T=this.hasAttribute(C.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(C.KEYBOARD_BACKWARD_SEEK_OFFSET):mm;f=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-T,0),b=new g.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case"ArrowRight":case"l":{const T=this.hasAttribute(C.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(C.KEYBOARD_FORWARD_SEEK_OFFSET):mm;f=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+T,0),b=new g.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case"ArrowUp":{const T=this.hasAttribute(C.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(C.KEYBOARD_UP_VOLUME_STEP):pm;f=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+T,1),b=new g.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case"ArrowDown":{const T=this.hasAttribute(C.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(C.KEYBOARD_DOWN_VOLUME_STEP):pm;f=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-T,0),b=new g.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case"<":{const T=(d=this.mediaStore.getState().mediaPlaybackRate)!=null?d:1;f=Math.max(T-vm,eT).toFixed(2),b=new g.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case">":{const T=(p=this.mediaStore.getState().mediaPlaybackRate)!=null?p:1;f=Math.min(T+vm,tT).toFixed(2),b=new g.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(b);break}case"/":case"?":{e.shiftKey&&Pi(this,Vd,lf).call(this);break}case"p":{c=this.mediaStore.getState().mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST,b=new g.CustomEvent(c,{composed:!0,bubbles:!0}),this.dispatchEvent(b);break}}}}Ti=new WeakMap;ln=new WeakMap;j=new WeakMap;pt=new WeakMap;dn=new WeakMap;Yt=new WeakMap;Bs=new WeakMap;un=new WeakMap;Ws=new WeakSet;Fd=function(){var t;this.mediaStore=J1({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(C.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(C.DEFAULT_DURATION)?+this.getAttribute(C.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(C.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(C.LIVE_EDGE_OFFSET)?+this.getAttribute(C.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(C.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(C.SEEK_TO_LIVE_OFFSET):this.hasAttribute(C.LIVE_EDGE_OFFSET)?+this.getAttribute(C.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(C.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(C.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(C.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(C.NO_SUBTITLES_LANG_PREF)}})};Sa=new WeakMap;Fs=new WeakSet;Kd=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:n}=t,s=n&&(r==="/"||r==="?");if(s&&((e=O(this,pt))!=null&&e.open)){this.removeEventListener("keyup",O(this,Sa));return}if(i||a||!s&&!df.includes(r)){this.removeEventListener("keyup",O(this,Sa));return}const o=t.target,l=o instanceof HTMLElement&&(o.tagName.toLowerCase()==="media-volume-range"||o.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!O(this,Ti).contains(Ec(r))&&!l&&t.preventDefault(),this.addEventListener("keyup",O(this,Sa),{once:!0})};Rn=new WeakSet;Yo=function(){O(this,pt)&&(O(this,pt).hotkeys=O(this,Ti).value||void 0,(this.noHotkeys||O(this,Ti).contains("noshift+/"))&&(O(this,pt).open=!1))};Vd=new WeakSet;lf=function(){O(this,pt)||(Dt(this,pt,Re.createElement("media-keyboard-shortcuts-dialog")),Pi(this,Rn,Yo).call(this),this.appendChild(O(this,pt))),O(this,pt).open=!0};const iT=Object.values(m),aT=Object.values(Rv),cf=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(g.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,ee.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>iT.includes(o)):[]},rT=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&g.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof g.customElements.get(t.nodeName.toLowerCase()))&&g.customElements.upgrade(t),aT.some(a=>a in t)},qd=t=>rT(t)||!!cf(t).length,fm=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},Em={[m.MEDIA_SUBTITLES_LIST]:qn,[m.MEDIA_SUBTITLES_SHOWING]:qn,[m.MEDIA_SEEKABLE]:fm,[m.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(fm).join(" "),[m.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[m.MEDIA_RENDITION_LIST]:Zy,[m.MEDIA_AUDIO_TRACK_LIST]:t1},nT=async(t,e,i)=>{var a,r;if(t.isConnected||await Mv(0),typeof i=="boolean"||i==null)return Q(t,e,i);if(typeof i=="number")return be(t,e,i);if(typeof i=="string")return le(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=Em[e])==null?void 0:a.call(Em,i))!=null?r:i;return t.setAttribute(e,n)},sT=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},ua=(t,e)=>{if(sT(t))return;const i=(r,n)=>{var s,o;qd(r)&&n(r);const{children:l=[]}=r??{},d=(o=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...d].forEach(h=>ua(h,n))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!qd(t)){g.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},_m=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=cf(a),n=e.toLowerCase();r.includes(n)&&nT(a,n,i)})},oT=(t,e,i)=>{ua(t,e);const a=p=>{var h;const u=(h=p==null?void 0:p.composedPath()[0])!=null?h:p.target;e(u)},r=p=>{var h;const u=(h=p==null?void 0:p.composedPath()[0])!=null?h:p.target;i(u)};t.addEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=p=>{p.forEach(h=>{const{addedNodes:u=[],removedNodes:c=[],type:f,target:b,attributeName:E}=h;f==="childList"?(Array.prototype.forEach.call(u,T=>ua(T,e)),Array.prototype.forEach.call(c,T=>ua(T,i))):f==="attributes"&&E===ee.MEDIA_CHROME_ATTRIBUTES&&(qd(b)?e(b):i(b))})};let s=[];const o=p=>{const h=p.target;h.name!=="media"&&(s.forEach(u=>ua(u,i)),s=[...h.assignedElements({flatten:!0})],s.forEach(u=>ua(u,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{ua(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(x.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(x.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};g.customElements.get("media-controller")||g.customElements.define("media-controller",uf);var lT=uf;const Da={PLACEMENT:"placement",BOUNDS:"bounds"};function dT(t){return`
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
  `}class xl extends g.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Bv(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=xr(this,"#"+this.bounds))!=null?e:rt(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=o+l,p=n+s,h=a.getPropertyValue("--media-tooltip-offset-x"),u=h?parseFloat(h.replace("px","")):0,c=a.getPropertyValue("--media-tooltip-container-margin"),f=c?parseFloat(c.replace("px","")):0,b=o-n+u-f,E=d-p+u+f;if(b<0){this.style.setProperty("--media-tooltip-offset-x",`${b}px`);return}if(E>0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Da.PLACEMENT,Da.BOUNDS]}get placement(){return he(this,Da.PLACEMENT)}set placement(e){le(this,Da.PLACEMENT,e)}get bounds(){return he(this,Da.BOUNDS)}set bounds(e){le(this,Da.BOUNDS,e)}}xl.shadowRootOptions={mode:"open"};xl.getTemplateHTML=dT;g.customElements.get("media-tooltip")||g.customElements.define("media-tooltip",xl);var bm=xl,Tc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},we=(t,e,i)=>(Tc(t,e,"read from private field"),i?i.call(t):e.get(t)),na=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ds=(t,e,i,a)=>(Tc(t,e,"write to private field"),e.set(t,i),i),gm=(t,e,i)=>(Tc(t,e,"access private method"),i),Gt,cr,Yd,hf,Gi,Ga,Ks,Gd,mf;const Mi={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function uT(t,e={}){return`
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
        <template shadowrootmode="${bm.shadowRootOptions.mode}">
          ${bm.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function cT(t,e){return`
    <slot></slot>
  `}function hT(){return""}class Be extends g.HTMLElement{constructor(){if(super(),na(this,Yd),na(this,Gd),na(this,Gt,void 0),this.preventClick=!1,this.tooltipEl=null,na(this,cr,e=>{this.preventClick||this.handleClick(e),setTimeout(we(this,Gi),0)}),na(this,Gi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),na(this,Ga,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",we(this,Ga));return}this.preventClick||this.handleClick(e)}),na(this,Ks,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",we(this,Ga));return}this.addEventListener("keyup",we(this,Ga),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Mi.TOOLTIP_PLACEMENT,ee.MEDIA_CONTROLLER,m.MEDIA_LANG]}enable(){this.addEventListener("click",we(this,cr)),this.addEventListener("keydown",we(this,Ks)),this.tabIndex=0}disable(){this.removeEventListener("click",we(this,cr)),this.removeEventListener("keydown",we(this,Ks)),this.removeEventListener("keyup",we(this,Ga)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ee.MEDIA_CONTROLLER?(i&&((n=(r=we(this,Gt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ds(this,Gt,null)),a&&this.isConnected&&(ds(this,Gt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=we(this,Gt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Mi.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===m.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),gm(this,Yd,hf).call(this)&&we(this,Gi).call(this)}connectedCallback(){var e,i,a;const{style:r}=xe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(ee.MEDIA_CONTROLLER);n&&(ds(this,Gt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=we(this,Gt))==null?void 0:i.associateElement)==null||a.call(i,this)),g.customElements.whenDefined("media-tooltip").then(()=>gm(this,Gd,mf).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=we(this,Gt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ds(this,Gt,null),this.removeEventListener("mouseenter",we(this,Gi)),this.removeEventListener("focus",we(this,Gi)),this.removeEventListener("click",we(this,cr))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return he(this,Mi.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){le(this,Mi.TOOLTIP_PLACEMENT,e)}get mediaController(){return he(this,ee.MEDIA_CONTROLLER)}set mediaController(e){le(this,ee.MEDIA_CONTROLLER,e)}get disabled(){return z(this,Mi.DISABLED)}set disabled(e){Q(this,Mi.DISABLED,e)}get noTooltip(){return z(this,Mi.NO_TOOLTIP)}set noTooltip(e){Q(this,Mi.NO_TOOLTIP,e)}handleClick(e){}}Gt=new WeakMap;cr=new WeakMap;Yd=new WeakSet;hf=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};Gi=new WeakMap;Ga=new WeakMap;Ks=new WeakMap;Gd=new WeakSet;mf=function(){this.addEventListener("mouseenter",we(this,Gi)),this.addEventListener("focus",we(this,Gi)),this.addEventListener("click",we(this,cr));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};Be.shadowRootOptions={mode:"open"};Be.getTemplateHTML=uT;Be.getSlotTemplateHTML=cT;Be.getTooltipContentHTML=hT;g.customElements.get("media-chrome-button")||g.customElements.define("media-chrome-button",Be);const ym=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function mT(t){return`
    <style>
      :host([${m.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${m.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ym}</slot>
      <slot name="exit">${ym}</slot>
    </slot>
  `}function pT(){return`
    <slot name="tooltip-enter">${D("start airplay")}</slot>
    <slot name="tooltip-exit">${D("stop airplay")}</slot>
  `}const Tm=t=>{const e=t.mediaIsAirplaying?D("stop airplay"):D("start airplay");t.setAttribute("aria-label",e)};class Ac extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_IS_AIRPLAYING,m.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Tm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_IS_AIRPLAYING&&Tm(this)}get mediaIsAirplaying(){return z(this,m.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){Q(this,m.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return he(this,m.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){le(this,m.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new g.CustomEvent(x.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Ac.getSlotTemplateHTML=mT;Ac.getTooltipContentHTML=pT;g.customElements.get("media-airplay-button")||g.customElements.define("media-airplay-button",Ac);const vT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,fT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function ET(t){return`
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
      <slot name="on">${vT}</slot>
      <slot name="off">${fT}</slot>
    </slot>
  `}function _T(){return`
    <slot name="tooltip-enable">${D("Enable captions")}</slot>
    <slot name="tooltip-disable">${D("Disable captions")}</slot>
  `}const Am=t=>{t.setAttribute("aria-checked",af(t).toString())};class kc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_SUBTITLES_LIST,m.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",D("closed captions")),Am(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_SUBTITLES_SHOWING&&Am(this)}get mediaSubtitlesList(){return km(this,m.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Sm(this,m.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return km(this,m.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Sm(this,m.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new g.CustomEvent(x.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}kc.getSlotTemplateHTML=ET;kc.getTooltipContentHTML=_T;const km=(t,e)=>{const i=t.getAttribute(e);return i?Ml(i):[]},Sm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-button")||g.customElements.define("media-captions-button",kc);const bT='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',gT='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function yT(t){return`
    <style>
      :host([${m.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${m.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${bT}</slot>
      <slot name="exit">${gT}</slot>
    </slot>
  `}function TT(){return`
    <slot name="tooltip-enter">${D("Start casting")}</slot>
    <slot name="tooltip-exit">${D("Stop casting")}</slot>
  `}const wm=t=>{const e=t.mediaIsCasting?D("stop casting"):D("start casting");t.setAttribute("aria-label",e)};class Sc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_IS_CASTING,m.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),wm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_IS_CASTING&&wm(this)}get mediaIsCasting(){return z(this,m.MEDIA_IS_CASTING)}set mediaIsCasting(e){Q(this,m.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return he(this,m.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){le(this,m.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?x.MEDIA_EXIT_CAST_REQUEST:x.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Sc.getSlotTemplateHTML=yT;Sc.getTooltipContentHTML=TT;g.customElements.get("media-cast-button")||g.customElements.define("media-cast-button",Sc);var wc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ee=(t,e,i)=>(wc(t,e,"read from private field"),i?i.call(t):e.get(t)),We=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ui=(t,e,i,a)=>(wc(t,e,"write to private field"),e.set(t,i),i),Nt=(t,e,i)=>(wc(t,e,"access private method"),i),jt,Ol,Vs,qs,Pt,Go,Ys,Gs,js,Ic,pf,zs,jd,Qs,zd,jo,Rc,Qd,vf,Zd,ff,Xd,Ef,Jd,_f;function AT(t){return`
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
  `}function kT(t){return""}class Nr extends g.HTMLElement{constructor(){if(super(),We(this,Ic),We(this,zs),We(this,Qs),We(this,jo),We(this,Qd),We(this,Zd),We(this,Xd),We(this,Jd),We(this,jt,void 0),We(this,Ol,void 0),We(this,Vs,void 0),We(this,qs,void 0),We(this,Pt,{}),We(this,Go,[]),We(this,Ys,()=>{if(this.range.matches(":focus-visible")){const{style:e}=xe(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),We(this,Gs,()=>{const{style:e}=xe(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),We(this,js,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),Ui(this,Vs,this.shadowRoot.querySelector("#startpoint")),Ui(this,qs,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",ee.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ee.MEDIA_CONTROLLER?(i&&((n=(r=Ee(this,jt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ui(this,jt,null)),a&&this.isConnected&&(Ui(this,jt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Ee(this,jt))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Nt(this,zs,jd).call(this)):(this.range.setAttribute(e,a),Nt(this,Qs,zd).call(this)))}connectedCallback(){var e,i,a;const{style:r}=xe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),Ee(this,Pt).pointer=xe(this.shadowRoot,"#pointer"),Ee(this,Pt).progress=xe(this.shadowRoot,"#progress"),Ee(this,Pt).thumb=xe(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),Ee(this,Pt).activeSegment=xe(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(ee.MEDIA_CONTROLLER);n&&(Ui(this,jt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Ee(this,jt))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",Ee(this,Ys)),this.shadowRoot.addEventListener("focusout",Ee(this,Gs)),Nt(this,zs,jd).call(this),Ir(this.container,Ee(this,js))}disconnectedCallback(){var e,i;Nt(this,Qs,zd).call(this),(i=(e=Ee(this,jt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ui(this,jt,null),this.shadowRoot.removeEventListener("focusin",Ee(this,Ys)),this.shadowRoot.removeEventListener("focusout",Ee(this,Gs)),Rr(this.container,Ee(this,js))}updatePointerBar(e){var i;(i=Ee(this,Pt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=Ee(this,Pt).progress)==null||e.style.setProperty("width",`${a}%`),(i=Ee(this,Pt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];Ui(this,Go,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],d=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,h=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,u=Re.createElementNS("http://www.w3.org/2000/svg","rect"),c=hc(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);c.style.setProperty("x",d),c.style.setProperty("width",h),i.append(u)}}getPointerRatio(e){return m1(e.clientX,e.clientY,Ee(this,Vs).getBoundingClientRect(),Ee(this,qs).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Nt(this,Jd,_f).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Nt(this,Qd,vf).call(this,e);break;case"pointerdown":Nt(this,jo,Rc).call(this,e);break;case"pointerup":Nt(this,Zd,ff).call(this);break;case"pointerleave":Nt(this,Xd,Ef).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}jt=new WeakMap;Ol=new WeakMap;Vs=new WeakMap;qs=new WeakMap;Pt=new WeakMap;Go=new WeakMap;Ys=new WeakMap;Gs=new WeakMap;js=new WeakMap;Ic=new WeakSet;pf=function(t){const e=Ee(this,Pt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${Ee(this,Go).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};zs=new WeakSet;jd=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Qs=new WeakSet;zd=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=g.window)==null||t.removeEventListener("pointerup",this),(e=g.window)==null||e.removeEventListener("pointermove",this)};jo=new WeakSet;Rc=function(t){var e;Ui(this,Ol,t.composedPath().includes(this.range)),(e=g.window)==null||e.addEventListener("pointerup",this,{once:!0})};Qd=new WeakSet;vf=function(t){var e;t.pointerType!=="mouse"&&Nt(this,jo,Rc).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=g.window)==null||e.addEventListener("pointermove",this)};Zd=new WeakSet;ff=function(){var t;(t=g.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Xd=new WeakSet;Ef=function(){var t,e;this.removeEventListener("pointerleave",this),(t=g.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=Ee(this,Pt).activeSegment)==null||e.style.removeProperty("transform")};Jd=new WeakSet;_f=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Nt(this,Ic,pf).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!Ee(this,Ol))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Nr.shadowRootOptions={mode:"open"};Nr.getTemplateHTML=AT;Nr.getContainerTemplateHTML=kT;g.customElements.get("media-chrome-range")||g.customElements.define("media-chrome-range",Nr);var bf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},us=(t,e,i)=>(bf(t,e,"read from private field"),i?i.call(t):e.get(t)),ST=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cs=(t,e,i,a)=>(bf(t,e,"write to private field"),e.set(t,i),i),zt;function wT(t){return`
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
  `}class Cc extends g.HTMLElement{constructor(){if(super(),ST(this,zt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ee.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ee.MEDIA_CONTROLLER&&(i&&((n=(r=us(this,zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),cs(this,zt,null)),a&&this.isConnected&&(cs(this,zt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=us(this,zt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(ee.MEDIA_CONTROLLER);r&&(cs(this,zt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=us(this,zt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=us(this,zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),cs(this,zt,null)}}zt=new WeakMap;Cc.shadowRootOptions={mode:"open"};Cc.getTemplateHTML=wT;g.customElements.get("media-control-bar")||g.customElements.define("media-control-bar",Cc);var gf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hs=(t,e,i)=>(gf(t,e,"read from private field"),i?i.call(t):e.get(t)),IT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ms=(t,e,i,a)=>(gf(t,e,"write to private field"),e.set(t,i),i),Qt;function RT(t,e={}){return`
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
  `}function CT(t,e){return`
    <slot></slot>
  `}class ta extends g.HTMLElement{constructor(){if(super(),IT(this,Qt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ee.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ee.MEDIA_CONTROLLER&&(i&&((n=(r=hs(this,Qt))==null?void 0:r.unassociateElement)==null||n.call(r,this),ms(this,Qt,null)),a&&this.isConnected&&(ms(this,Qt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=hs(this,Qt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=xe(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(ee.MEDIA_CONTROLLER);n&&(ms(this,Qt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=hs(this,Qt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=hs(this,Qt))==null?void 0:e.unassociateElement)==null||i.call(e,this),ms(this,Qt,null)}}Qt=new WeakMap;ta.shadowRootOptions={mode:"open"};ta.getTemplateHTML=RT;ta.getSlotTemplateHTML=CT;g.customElements.get("media-text-display")||g.customElements.define("media-text-display",ta);var yf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Im=(t,e,i)=>(yf(t,e,"read from private field"),i?i.call(t):e.get(t)),LT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},MT=(t,e,i,a)=>(yf(t,e,"write to private field"),e.set(t,i),i),cn;function DT(t,e){return`
    <slot>${Ji(e.mediaDuration)}</slot>
  `}class Tf extends ta{constructor(){var e;super(),LT(this,cn,void 0),MT(this,cn,this.shadowRoot.querySelector("slot")),Im(this,cn).textContent=Ji((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===m.MEDIA_DURATION&&(Im(this,cn).textContent=Ji(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return oe(this,m.MEDIA_DURATION)}set mediaDuration(e){be(this,m.MEDIA_DURATION,e)}}cn=new WeakMap;Tf.getSlotTemplateHTML=DT;g.customElements.get("media-duration-display")||g.customElements.define("media-duration-display",Tf);const xT={2:D("Network Error"),3:D("Decode Error"),4:D("Source Not Supported"),5:D("Encryption Error")},OT={2:D("A network error caused the media download to fail."),3:D("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:D("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:D("The media is encrypted and there are no keys to decrypt it.")},Lc=t=>{var e,i;return t.code===1?null:{title:(e=xT[t.code])!=null?e:`Error ${t.code}`,message:(i=OT[t.code])!=null?i:t.message}};var Af=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},NT=(t,e,i)=>(Af(t,e,"read from private field"),i?i.call(t):e.get(t)),PT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},UT=(t,e,i,a)=>(Af(t,e,"write to private field"),e.set(t,i),i),Zs;function $T(t){const e=+t.mediaerrorcode;return`
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
      ${kf({code:e,message:t.mediaerrormessage})}
    </slot>
  `}function HT(t){return t.code&&Lc(t)!==null}function kf(t){var e;const{title:i,message:a}=(e=Lc(t))!=null?e:{},r=ed(t.code);let n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${ed(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${ed(a)}</p></slot>`),n}const Rm=[m.MEDIA_ERROR_CODE,m.MEDIA_ERROR_MESSAGE];class Nl extends Or{constructor(){super(...arguments),PT(this,Zs,null)}static get observedAttributes(){return[...super.observedAttributes,...Rm]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!Rm.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=HT(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){const{title:s}=Lc(n);s&&this.setAttribute("aria-label",s)}}get mediaError(){return NT(this,Zs)}set mediaError(e){UT(this,Zs,e)}get mediaErrorCode(){return oe(this,"mediaerrorcode")}set mediaErrorCode(e){be(this,"mediaerrorcode",e)}get mediaErrorMessage(){return he(this,"mediaerrormessage")}set mediaErrorMessage(e){le(this,"mediaerrormessage",e)}}Zs=new WeakMap;Nl.getSlotTemplateHTML=$T;Nl.formatErrorMessage=kf;g.customElements.get("media-error-dialog")||g.customElements.define("media-error-dialog",Nl);var Sf=Nl,wf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},BT=(t,e,i)=>(wf(t,e,"read from private field"),e.get(t)),WT=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},FT=(t,e,i,a)=>(wf(t,e,"write to private field"),e.set(t,i),i),Xs;const KT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,VT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function qT(t){return`
    <style>
      :host([${m.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${m.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${m.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${KT}</slot>
      <slot name="exit">${VT}</slot>
    </slot>
  `}function YT(){return`
    <slot name="tooltip-enter">${D("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${D("Exit fullscreen mode")}</slot>
  `}const Cm=t=>{const e=t.mediaIsFullscreen?D("exit fullscreen mode"):D("enter fullscreen mode");t.setAttribute("aria-label",e)};class Mc extends Be{constructor(){super(...arguments),WT(this,Xs,null)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_IS_FULLSCREEN,m.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Cm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_IS_FULLSCREEN&&Cm(this)}get mediaFullscreenUnavailable(){return he(this,m.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){le(this,m.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return z(this,m.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){Q(this,m.MEDIA_IS_FULLSCREEN,e)}handleClick(e){FT(this,Xs,e);const i=BT(this,Xs)instanceof PointerEvent,a=this.mediaIsFullscreen?new g.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new g.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}Xs=new WeakMap;Mc.getSlotTemplateHTML=qT;Mc.getTooltipContentHTML=YT;g.customElements.get("media-fullscreen-button")||g.customElements.define("media-fullscreen-button",Mc);const{MEDIA_TIME_IS_LIVE:Js,MEDIA_PAUSED:Cn}=m,{MEDIA_SEEK_TO_LIVE_REQUEST:GT,MEDIA_PLAY_REQUEST:jT}=x,zT='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function QT(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Js}]:not([${Cn}])) slot[name=indicator] > *,
      :host([${Js}]:not([${Cn}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Js}]:not([${Cn}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${zT}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${D("live")}</slot>
  `}const Lm=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=D(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=D("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class If extends Be{static get observedAttributes(){return[...super.observedAttributes,Js,Cn]}connectedCallback(){super.connectedCallback(),Lm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Lm(this)}get mediaPaused(){return z(this,m.MEDIA_PAUSED)}set mediaPaused(e){Q(this,m.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return z(this,m.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){Q(this,m.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new g.CustomEvent(GT,{composed:!0,bubbles:!0})),this.hasAttribute(Cn)&&this.dispatchEvent(new g.CustomEvent(jT,{composed:!0,bubbles:!0})))}}If.getSlotTemplateHTML=QT;g.customElements.get("media-live-button")||g.customElements.define("media-live-button",If);var Rf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Kr=(t,e,i)=>(Rf(t,e,"read from private field"),i?i.call(t):e.get(t)),Mm=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Vr=(t,e,i,a)=>(Rf(t,e,"write to private field"),e.set(t,i),i),Zt,eo;const ps={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Cf=500,ZT=`
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
`;function XT(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Cf}ms);
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

      :host([${m.MEDIA_LOADING}]:not([${m.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${m.MEDIA_LOADING}]:not([${m.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${m.MEDIA_LOADING}]:not([${m.MEDIA_PAUSED}])) #status {
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

    <slot name="icon">${ZT}</slot>
    <div id="status" role="status" aria-live="polite">${D("media loading")}</div>
  `}class Dc extends g.HTMLElement{constructor(){if(super(),Mm(this,Zt,void 0),Mm(this,eo,Cf),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ee.MEDIA_CONTROLLER,m.MEDIA_PAUSED,m.MEDIA_LOADING,ps.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===ps.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===ee.MEDIA_CONTROLLER&&(i&&((n=(r=Kr(this,Zt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Vr(this,Zt,null)),a&&this.isConnected&&(Vr(this,Zt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Kr(this,Zt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(ee.MEDIA_CONTROLLER);r&&(Vr(this,Zt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Kr(this,Zt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Kr(this,Zt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Vr(this,Zt,null)}get loadingDelay(){return Kr(this,eo)}set loadingDelay(e){Vr(this,eo,e);const{style:i}=xe(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return z(this,m.MEDIA_PAUSED)}set mediaPaused(e){Q(this,m.MEDIA_PAUSED,e)}get mediaLoading(){return z(this,m.MEDIA_LOADING)}set mediaLoading(e){Q(this,m.MEDIA_LOADING,e)}get mediaController(){return he(this,ee.MEDIA_CONTROLLER)}set mediaController(e){le(this,ee.MEDIA_CONTROLLER,e)}get noAutohide(){return z(this,ps.NO_AUTOHIDE)}set noAutohide(e){Q(this,ps.NO_AUTOHIDE,e)}}Zt=new WeakMap;eo=new WeakMap;Dc.shadowRootOptions={mode:"open"};Dc.getTemplateHTML=XT;g.customElements.get("media-loading-indicator")||g.customElements.define("media-loading-indicator",Dc);const JT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Dm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,eA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function tA(t){return`
    <style>
      :host(:not([${m.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${m.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${m.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${m.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${m.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${m.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${m.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${JT}</slot>
      <slot name="low">${Dm}</slot>
      <slot name="medium">${Dm}</slot>
      <slot name="high">${eA}</slot>
    </slot>
  `}function iA(){return`
    <slot name="tooltip-mute">${D("Mute")}</slot>
    <slot name="tooltip-unmute">${D("Unmute")}</slot>
  `}const xm=t=>{const e=t.mediaVolumeLevel==="off",i=D(e?"unmute":"mute");t.setAttribute("aria-label",i)};class xc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),xm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_VOLUME_LEVEL&&xm(this)}get mediaVolumeLevel(){return he(this,m.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){le(this,m.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?x.MEDIA_UNMUTE_REQUEST:x.MEDIA_MUTE_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}xc.getSlotTemplateHTML=tA;xc.getTooltipContentHTML=iA;g.customElements.get("media-mute-button")||g.customElements.define("media-mute-button",xc);const Om=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function aA(t){return`
    <style>
      :host([${m.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${m.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${m.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${m.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Om}</slot>
      <slot name="exit">${Om}</slot>
    </slot>
  `}function rA(){return`
    <slot name="tooltip-enter">${D("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${D("Exit picture in picture mode")}</slot>
  `}const Nm=t=>{const e=t.mediaIsPip?D("exit picture in picture mode"):D("enter picture in picture mode");t.setAttribute("aria-label",e)};class Oc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_IS_PIP,m.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Nm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_IS_PIP&&Nm(this)}get mediaPipUnavailable(){return he(this,m.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){le(this,m.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return z(this,m.MEDIA_IS_PIP)}set mediaIsPip(e){Q(this,m.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?x.MEDIA_EXIT_PIP_REQUEST:x.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Oc.getSlotTemplateHTML=aA;Oc.getTooltipContentHTML=rA;g.customElements.get("media-pip-button")||g.customElements.define("media-pip-button",Oc);var nA=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},xa=(t,e,i)=>(nA(t,e,"read from private field"),i?i.call(t):e.get(t)),sA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$i;const td={RATES:"rates"},Lf=[1,1.2,1.5,1.7,2],hr=1;function ea(t){return Math.round(t*100)/100}function oA(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?ea(+t.mediaplaybackrate):hr}x</slot>
  `}function lA(){return D("Playback rate")}class Nc extends Be{constructor(){var e;super(),sA(this,$i,new _c(this,td.RATES,{defaultValue:Lf})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ea((e=this.mediaPlaybackRate)!=null?e:hr)}x`}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PLAYBACK_RATE,td.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===td.RATES&&(xa(this,$i).value=a),e===m.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=ea(Number.isNaN(r)?hr:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return xa(this,$i)}set rates(e){e?Array.isArray(e)?xa(this,$i).value=e.join(" "):typeof e=="string"&&(xa(this,$i).value=e):xa(this,$i).value=""}get mediaPlaybackRate(){return oe(this,m.MEDIA_PLAYBACK_RATE,hr)}set mediaPlaybackRate(e){be(this,m.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(xa(this,$i).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:hr,n=new g.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}$i=new WeakMap;Nc.getSlotTemplateHTML=oA;Nc.getTooltipContentHTML=lA;g.customElements.get("media-playback-rate-button")||g.customElements.define("media-playback-rate-button",Nc);const dA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,uA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function cA(t){return`
    <style>
      :host([${m.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${m.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${m.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${m.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${dA}</slot>
      <slot name="pause">${uA}</slot>
    </slot>
  `}function hA(){return`
    <slot name="tooltip-play">${D("Play")}</slot>
    <slot name="tooltip-pause">${D("Pause")}</slot>
  `}const Pm=t=>{const e=t.mediaPaused?D("play"):D("pause");t.setAttribute("aria-label",e)};class Pc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PAUSED,m.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Pm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===m.MEDIA_PAUSED||e===m.MEDIA_LANG)&&Pm(this)}get mediaPaused(){return z(this,m.MEDIA_PAUSED)}set mediaPaused(e){Q(this,m.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?x.MEDIA_PLAY_REQUEST:x.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new g.CustomEvent(e,{composed:!0,bubbles:!0}))}}Pc.getSlotTemplateHTML=cA;Pc.getTooltipContentHTML=hA;g.customElements.get("media-play-button")||g.customElements.define("media-play-button",Pc);const Ft={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function mA(t){return`
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
  `}const pA=t=>{t.style.removeProperty("background-image")},vA=(t,e)=>{t.style["background-image"]=`url('${e}')`};class Uc extends g.HTMLElement{static get observedAttributes(){return[Ft.PLACEHOLDER_SRC,Ft.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Ft.SRC&&(a==null?this.image.removeAttribute(Ft.SRC):this.image.setAttribute(Ft.SRC,a)),e===Ft.PLACEHOLDER_SRC&&(a==null?pA(this.image):vA(this.image,a))}get placeholderSrc(){return he(this,Ft.PLACEHOLDER_SRC)}set placeholderSrc(e){le(this,Ft.SRC,e)}get src(){return he(this,Ft.SRC)}set src(e){le(this,Ft.SRC,e)}}Uc.shadowRootOptions={mode:"open"};Uc.getTemplateHTML=mA;g.customElements.get("media-poster-image")||g.customElements.define("media-poster-image",Uc);var Mf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fA=(t,e,i)=>(Mf(t,e,"read from private field"),i?i.call(t):e.get(t)),EA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_A=(t,e,i,a)=>(Mf(t,e,"write to private field"),e.set(t,i),i),to;class bA extends ta{constructor(){super(),EA(this,to,void 0),_A(this,to,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PREVIEW_CHAPTER,m.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===m.MEDIA_PREVIEW_CHAPTER||e===m.MEDIA_LANG)&&a!==i&&a!=null)if(fA(this,to).textContent=a,a!==""){const r=D("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return he(this,m.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){le(this,m.MEDIA_PREVIEW_CHAPTER,e)}}to=new WeakMap;g.customElements.get("media-preview-chapter-display")||g.customElements.define("media-preview-chapter-display",bA);var Df=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},vs=(t,e,i)=>(Df(t,e,"read from private field"),i?i.call(t):e.get(t)),gA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fs=(t,e,i,a)=>(Df(t,e,"write to private field"),e.set(t,i),i),Xt;function yA(t){return`
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
  `}class Pl extends g.HTMLElement{constructor(){if(super(),gA(this,Xt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[ee.MEDIA_CONTROLLER,m.MEDIA_PREVIEW_IMAGE,m.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(ee.MEDIA_CONTROLLER);r&&(fs(this,Xt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=vs(this,Xt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=vs(this,Xt))==null?void 0:e.unassociateElement)==null||i.call(e,this),fs(this,Xt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[m.MEDIA_PREVIEW_IMAGE,m.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===ee.MEDIA_CONTROLLER&&(i&&((n=(r=vs(this,Xt))==null?void 0:r.unassociateElement)==null||n.call(r,this),fs(this,Xt,null)),a&&this.isConnected&&(fs(this,Xt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=vs(this,Xt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return he(this,m.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,m.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(m.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(m.MEDIA_PREVIEW_COORDS);return}this.setAttribute(m.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:d,maxHeight:p,minWidth:h,minHeight:u}=l,c=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let f,b;if(c==="fill"){const L=parseInt(d)/n,I=parseInt(p)/s,U=parseInt(h)/n,Y=parseInt(u)/s;f=L<1?L:Math.max(L,U),b=I<1?I:Math.max(I,Y)}else{const L=Math.min(parseInt(d)/n,parseInt(p)/s),I=Math.max(parseInt(h)/n,parseInt(u)/s),Y=L<1?L:I>1?I:1;f=Y,b=Y}const{style:E}=xe(this.shadowRoot,":host"),T=xe(this.shadowRoot,"img").style,v=this.shadowRoot.querySelector("img"),w=Math.min(f,b)<1?"min":"max";E.setProperty(`${w}-width`,"initial","important"),E.setProperty(`${w}-height`,"initial","important"),E.width=`${n*f}px`,E.height=`${s*b}px`;const k=()=>{T.width=`${this.imgWidth*f}px`,T.height=`${this.imgHeight*b}px`,T.display="block"};v.src!==o&&(v.onload=()=>{this.imgWidth=v.naturalWidth,this.imgHeight=v.naturalHeight,k(),v.onload=null},v.src=o,k()),k(),T.transform=`translate(-${a*f}px, -${r*b}px)`}}Xt=new WeakMap;Pl.shadowRootOptions={mode:"open"};Pl.getTemplateHTML=yA;g.customElements.get("media-preview-thumbnail")||g.customElements.define("media-preview-thumbnail",Pl);var Um=Pl,xf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$m=(t,e,i)=>(xf(t,e,"read from private field"),i?i.call(t):e.get(t)),TA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},AA=(t,e,i,a)=>(xf(t,e,"write to private field"),e.set(t,i),i),hn;class kA extends ta{constructor(){super(),TA(this,hn,void 0),AA(this,hn,this.shadowRoot.querySelector("slot")),$m(this,hn).textContent=Ji(0)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_PREVIEW_TIME&&a!=null&&($m(this,hn).textContent=Ji(parseFloat(a)))}get mediaPreviewTime(){return oe(this,m.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){be(this,m.MEDIA_PREVIEW_TIME,e)}}hn=new WeakMap;g.customElements.get("media-preview-time-display")||g.customElements.define("media-preview-time-display",kA);const Oa={SEEK_OFFSET:"seekoffset"},id=30,SA=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function wA(t,e){return`
    <slot name="icon">${SA(e.seekOffset)}</slot>
  `}const IA=(t,e)=>{t.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:e}))};function RA(){return D("Seek backward")}const CA=0;class $c extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_CURRENT_TIME,Oa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,Oa.SEEK_OFFSET,id)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),IA(this,this.seekOffset),e===Oa.SEEK_OFFSET&&(this.seekOffset=oe(this,Oa.SEEK_OFFSET,id))}get seekOffset(){return oe(this,Oa.SEEK_OFFSET,id)}set seekOffset(e){be(this,Oa.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),$v(Hv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,m.MEDIA_CURRENT_TIME,CA)}set mediaCurrentTime(e){be(this,m.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new g.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}$c.getSlotTemplateHTML=wA;$c.getTooltipContentHTML=RA;g.customElements.get("media-seek-backward-button")||g.customElements.define("media-seek-backward-button",$c);const Na={SEEK_OFFSET:"seekoffset"},ad=30,LA=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function MA(t,e){return`
    <slot name="icon">${LA(e.seekOffset)}</slot>
  `}const DA=(t,e)=>{t.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:e}))};function xA(){return D("Seek forward")}const OA=0;class Hc extends Be{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_CURRENT_TIME,Na.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=oe(this,Na.SEEK_OFFSET,ad)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),DA(this,this.seekOffset),e===Na.SEEK_OFFSET&&(this.seekOffset=oe(this,Na.SEEK_OFFSET,ad))}get seekOffset(){return oe(this,Na.SEEK_OFFSET,ad)}set seekOffset(e){be(this,Na.SEEK_OFFSET,e),this.setAttribute("aria-label",D("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),$v(Hv(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return oe(this,m.MEDIA_CURRENT_TIME,OA)}set mediaCurrentTime(e){be(this,m.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new g.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Hc.getSlotTemplateHTML=MA;Hc.getTooltipContentHTML=xA;g.customElements.get("media-seek-forward-button")||g.customElements.define("media-seek-forward-button",Hc);var Bc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ht=(t,e,i)=>(Bc(t,e,"read from private field"),i?i.call(t):e.get(t)),sa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wc=(t,e,i,a)=>(Bc(t,e,"write to private field"),e.set(t,i),i),Vi=(t,e,i)=>(Bc(t,e,"access private method"),i),ja,di,Ul,Fc,Of,zo,Kc,mn,io,ao,eu;const Hi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Hm=[...Object.values(Hi),m.MEDIA_CURRENT_TIME,m.MEDIA_DURATION,m.MEDIA_SEEKABLE],Nf=["Enter"," "],NA="&nbsp;/&nbsp;",tu=(t,{timesSep:e=NA}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Ji(0-(s-r)):Ji(r);return t.showDuration?`${o}${e}${Ji(s)}`:o},PA=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",D("video not loaded, unknown time."));return}const n=t.remaining?wn(0-(r-i)):wn(i);if(!t.showDuration){t.setAttribute("aria-description",n);return}const s=wn(r),o=D("{currentTime} of {totalTime}",{currentTime:n,totalTime:s});t.setAttribute("aria-description",o)};function UA(t,e){return`
    <slot>${tu(e)}</slot>
  `}const $A=t=>{t.setAttribute("aria-label",D("playback time"))};class Pf extends ta{constructor(){super(),sa(this,Fc),sa(this,zo),sa(this,mn),sa(this,ao),sa(this,ja,void 0),sa(this,di,null),sa(this,Ul,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!Nf.includes(r)){this.removeEventListener("keyup",Ht(this,di));return}this.addEventListener("keyup",Ht(this,di))}),Wc(this,ja,this.shadowRoot.querySelector("slot")),Ht(this,ja).innerHTML=`${tu(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Hm,"disabled"]}connectedCallback(){const{style:e}=xe(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",D("playback time")),Vi(this,mn,io).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Vi(this,zo,Kc).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){$A(this),Hm.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Vi(this,mn,io).call(this):Vi(this,ao,eu).call(this):e===Hi.NO_TOGGLE&&a!==i&&(this.noToggle?Vi(this,ao,eu).call(this):Vi(this,mn,io).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return z(this,Hi.REMAINING)}set remaining(e){Q(this,Hi.REMAINING,e)}get showDuration(){return z(this,Hi.SHOW_DURATION)}set showDuration(e){Q(this,Hi.SHOW_DURATION,e)}get noToggle(){return z(this,Hi.NO_TOGGLE)}set noToggle(e){Q(this,Hi.NO_TOGGLE,e)}get mediaDuration(){return oe(this,m.MEDIA_DURATION)}set mediaDuration(e){be(this,m.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,m.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){be(this,m.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(m.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(m.MEDIA_SEEKABLE);return}this.setAttribute(m.MEDIA_SEEKABLE,e.join(":"))}update(){const e=tu(this);PA(this),e!==Ht(this,ja).innerHTML&&(Ht(this,ja).innerHTML=e)}}ja=new WeakMap;di=new WeakMap;Ul=new WeakMap;Fc=new WeakSet;Of=function(){Ht(this,di)||(Wc(this,di,t=>{const{key:e}=t;if(!Nf.includes(e)){this.removeEventListener("keyup",Ht(this,di));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Ht(this,Ul)),this.addEventListener("click",this.toggleTimeDisplay))};zo=new WeakSet;Kc=function(){Ht(this,di)&&(this.removeEventListener("keyup",Ht(this,di)),this.removeEventListener("keydown",Ht(this,Ul)),this.removeEventListener("click",this.toggleTimeDisplay),Wc(this,di,null))};mn=new WeakSet;io=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Vi(this,Fc,Of).call(this))};ao=new WeakSet;eu=function(){this.removeAttribute("role"),this.disable(),Vi(this,zo,Kc).call(this)};Pf.getSlotTemplateHTML=UA;g.customElements.get("media-time-display")||g.customElements.define("media-time-display",Pf);var Uf=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ue=(t,e,i)=>(Uf(t,e,"read from private field"),e.get(t)),Kt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},mt=(t,e,i,a)=>(Uf(t,e,"write to private field"),e.set(t,i),i),HA=(t,e,i,a)=>({set _(r){mt(t,e,r)},get _(){return Ue(t,e)}}),za,ro,Qa,pn,no,so,oo,Za,ca,lo;class BA{constructor(e,i,a){Kt(this,za,void 0),Kt(this,ro,void 0),Kt(this,Qa,void 0),Kt(this,pn,void 0),Kt(this,no,void 0),Kt(this,so,void 0),Kt(this,oo,void 0),Kt(this,Za,void 0),Kt(this,ca,0),Kt(this,lo,(r=performance.now())=>{mt(this,ca,requestAnimationFrame(Ue(this,lo))),mt(this,pn,performance.now()-Ue(this,Qa));const n=1e3/this.fps;if(Ue(this,pn)>n){mt(this,Qa,r-Ue(this,pn)%n);const s=1e3/((r-Ue(this,ro))/++HA(this,no)._),o=(r-Ue(this,so))/1e3/this.duration;let l=Ue(this,oo)+o*this.playbackRate;l-Ue(this,za).valueAsNumber>0?mt(this,Za,this.playbackRate/this.duration/s):(mt(this,Za,.995*Ue(this,Za)),l=Ue(this,za).valueAsNumber+Ue(this,Za)),this.callback(l)}}),mt(this,za,e),this.callback=i,this.fps=a}start(){Ue(this,ca)===0&&(mt(this,Qa,performance.now()),mt(this,ro,Ue(this,Qa)),mt(this,no,0),Ue(this,lo).call(this))}stop(){Ue(this,ca)!==0&&(cancelAnimationFrame(Ue(this,ca)),mt(this,ca,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Ue(this,za).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.5/i||n>=.5)&&this.callback(e),mt(this,oo,e),mt(this,so,performance.now()),this.duration=i,this.playbackRate=a}}za=new WeakMap;ro=new WeakMap;Qa=new WeakMap;pn=new WeakMap;no=new WeakMap;so=new WeakMap;oo=new WeakMap;Za=new WeakMap;ca=new WeakMap;lo=new WeakMap;var Vc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ve=(t,e,i)=>(Vc(t,e,"read from private field"),i?i.call(t):e.get(t)),Me=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gt=(t,e,i,a)=>(Vc(t,e,"write to private field"),e.set(t,i),i),At=(t,e,i)=>(Vc(t,e,"access private method"),i),Xa,qi,Qo,Ln,Zo,uo,Yn,Gn,Ja,er,vn,iu,$f,au,Xo,qc,Jo,Yc,el,Gc,ru,Hf,jn,tl,nu,Bf;const WA=t=>{const e=t.range,i=wn(+Wf(t)),a=wn(+t.mediaSeekableEnd),r=i&&a?D("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):D("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function FA(t){return`
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

      :host(:is([${m.MEDIA_PREVIEW_IMAGE}], [${m.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${m.MEDIA_PREVIEW_IMAGE}], [${m.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
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

      :host([${m.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${m.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${m.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${m.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${m.MEDIA_PREVIEW_TIME}]:hover) {
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

      :host([${m.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${m.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${m.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${m.MEDIA_PREVIEW_CHAPTER}]) {
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

      :host([${m.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${m.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${m.MEDIA_PREVIEW_TIME}]:hover) {
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
          <template shadowrootmode="${Um.shadowRootOptions.mode}">
            ${Um.getTemplateHTML({})}
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
  `}const Es=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Wf=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class jc extends Nr{constructor(){super(),Me(this,iu),Me(this,Xo),Me(this,Jo),Me(this,el),Me(this,ru),Me(this,jn),Me(this,nu),Me(this,Xa,null),Me(this,qi,void 0),Me(this,Qo,void 0),Me(this,Ln,void 0),Me(this,Zo,void 0),Me(this,uo,void 0),Me(this,Yn,void 0),Me(this,Gn,void 0),Me(this,Ja,void 0),Me(this,er,void 0),Me(this,vn,()=>{At(this,iu,$f).call(this)?ve(this,qi).start():ve(this,qi).stop()}),Me(this,au,a=>{this.dragging||(dc(a)&&(this.range.valueAsNumber=a),ve(this,er)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),gt(this,Qo,this.shadowRoot.querySelectorAll('[part~="box"]')),gt(this,Zo,this.shadowRoot.querySelector('[part~="preview-box"]')),gt(this,uo,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);gt(this,Yn,parseInt(i.getPropertyValue("--media-box-padding-left"))),gt(this,Gn,parseInt(i.getPropertyValue("--media-box-padding-right"))),gt(this,qi,new BA(this.range,ve(this,au),60))}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PAUSED,m.MEDIA_DURATION,m.MEDIA_SEEKABLE,m.MEDIA_CURRENT_TIME,m.MEDIA_PREVIEW_IMAGE,m.MEDIA_PREVIEW_TIME,m.MEDIA_PREVIEW_CHAPTER,m.MEDIA_BUFFERED,m.MEDIA_PLAYBACK_RATE,m.MEDIA_LOADING,m.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",D("seek")),ve(this,vn).call(this),gt(this,Xa,this.getRootNode()),(e=ve(this,Xa))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ve(this,qi).stop(),(e=ve(this,Xa))==null||e.removeEventListener("transitionstart",this),gt(this,Xa,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===m.MEDIA_CURRENT_TIME||e===m.MEDIA_PAUSED||e===m.MEDIA_ENDED||e===m.MEDIA_LOADING||e===m.MEDIA_DURATION||e===m.MEDIA_SEEKABLE?(ve(this,qi).update({start:Es(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ve(this,vn).call(this),WA(this)):e===m.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===m.MEDIA_DURATION||e===m.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ve(this,Ja),this.updateBar()))}get mediaChaptersCues(){return ve(this,Ja)}set mediaChaptersCues(e){var i;gt(this,Ja,e),this.updateSegments((i=ve(this,Ja))==null?void 0:i.map(a=>({start:Es(this,a.startTime),end:Es(this,a.endTime)})))}get mediaPaused(){return z(this,m.MEDIA_PAUSED)}set mediaPaused(e){Q(this,m.MEDIA_PAUSED,e)}get mediaLoading(){return z(this,m.MEDIA_LOADING)}set mediaLoading(e){Q(this,m.MEDIA_LOADING,e)}get mediaDuration(){return oe(this,m.MEDIA_DURATION)}set mediaDuration(e){be(this,m.MEDIA_DURATION,e)}get mediaCurrentTime(){return oe(this,m.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){be(this,m.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return oe(this,m.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){be(this,m.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(m.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(m.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(m.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(m.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(m.MEDIA_SEEKABLE);return}this.setAttribute(m.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return he(this,m.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){le(this,m.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return oe(this,m.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){be(this,m.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return z(this,m.MEDIA_ENDED)}set mediaEnded(e){Q(this,m.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=Es(this,s)}const{style:r}=xe(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=xe(this.shadowRoot,"#current-rail"),a=xe(this.shadowRoot,'[part~="current-box"]'),r=At(this,Xo,qc).call(this,ve(this,uo)),n=At(this,Jo,Yc).call(this,r,this.range.valueAsNumber),s=At(this,el,Gc).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":At(this,nu,Bf).call(this);break;case"pointermove":At(this,ru,Hf).call(this,e);break;case"pointerup":ve(this,er)&&gt(this,er,!1);break;case"pointerdown":gt(this,er,!0);break;case"pointerleave":At(this,jn,tl).call(this,null);break;case"transitionstart":Ci(e.target,this)&&setTimeout(()=>ve(this,vn).call(this),0);break}}}Xa=new WeakMap;qi=new WeakMap;Qo=new WeakMap;Ln=new WeakMap;Zo=new WeakMap;uo=new WeakMap;Yn=new WeakMap;Gn=new WeakMap;Ja=new WeakMap;er=new WeakMap;vn=new WeakMap;iu=new WeakSet;$f=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Bv(this)};au=new WeakMap;Xo=new WeakSet;qc=function(t){var e;const a=((e=this.getAttribute("bounds")?xr(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};Jo=new WeakSet;Yc=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};el=new WeakSet;Gc=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ve(this,Yn)){const s=t.range.left-t.bounds.left-ve(this,Yn);return`${n-i/2+s}px`}if(n>r-ve(this,Gn)){const s=t.bounds.right-t.range.right-ve(this,Gn);return`${n+i/2-s-t.range.width}px`}return 0};ru=new WeakSet;Hf=function(t){const e=[...ve(this,Qo)].some(p=>t.composedPath().includes(p));if(!this.dragging&&(e||!t.composedPath().includes(this))){At(this,jn,tl).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=xe(this.shadowRoot,"#preview-rail"),r=xe(this.shadowRoot,'[part~="preview-box"]'),n=At(this,Xo,qc).call(this,ve(this,Zo));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=At(this,Jo,Yc).call(this,n,s),l=At(this,el,Gc).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(ve(this,Ln))-Math.round(s*i);Math.abs(d)<1&&s>.01&&s<.99||(gt(this,Ln,s*i),At(this,jn,tl).call(this,ve(this,Ln)))};jn=new WeakSet;tl=function(t){this.dispatchEvent(new g.CustomEvent(x.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};nu=new WeakSet;Bf=function(){ve(this,qi).stop();const t=Wf(this);this.dispatchEvent(new g.CustomEvent(x.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};jc.shadowRootOptions={mode:"open"};jc.getContainerTemplateHTML=FA;g.customElements.get("media-time-range")||g.customElements.define("media-time-range",jc);var KA=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bm=(t,e,i)=>(KA(t,e,"read from private field"),i?i.call(t):e.get(t)),VA=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},co;const qA=1,YA=t=>t.mediaMuted?0:t.mediaVolume,GA=t=>`${Math.round(t*100)}%`;class jA extends Nr{constructor(){super(...arguments),VA(this,co,()=>{const e=this.range.value,i=new g.CustomEvent(x.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_VOLUME,m.MEDIA_MUTED,m.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",D("volume")),this.range.addEventListener("input",Bm(this,co))}disconnectedCallback(){this.range.removeEventListener("input",Bm(this,co)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===m.MEDIA_VOLUME||e===m.MEDIA_MUTED)&&(this.range.valueAsNumber=YA(this),this.range.setAttribute("aria-valuetext",GA(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return oe(this,m.MEDIA_VOLUME,qA)}set mediaVolume(e){be(this,m.MEDIA_VOLUME,e)}get mediaMuted(){return z(this,m.MEDIA_MUTED)}set mediaMuted(e){Q(this,m.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return he(this,m.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){le(this,m.MEDIA_VOLUME_UNAVAILABLE,e)}}co=new WeakMap;g.customElements.get("media-volume-range")||g.customElements.define("media-volume-range",jA);function zA(t){return`
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

        :host([${m.MEDIA_LOOP}]) #checked-indicator {
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
    `}function QA(){return D("Loop")}class zc extends Be{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=D("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return z(this,m.MEDIA_LOOP)}set mediaLoop(e){Q(this,m.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new g.CustomEvent(x.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}zc.getSlotTemplateHTML=zA;zc.getTooltipContentHTML=QA;g.customElements.get("media-loop-button")||g.customElements.define("media-loop-button",zc);var Ff=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(Ff(t,e,"read from private field"),i?i.call(t):e.get(t)),ri=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ki=(t,e,i,a)=>(Ff(t,e,"write to private field"),e.set(t,i),i),tr,ho,ha,fn,Bi,Wi,Fi,ma,ir,mo,xt;const Wm=1,Fm=0,ZA=1,XA={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Wt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Wt?r.element[r.attributeName]=n:r.value=n}}}};class $l extends g.DocumentFragment{constructor(e,i,a=XA){var r;super(),ri(this,tr,void 0),ri(this,ho,void 0),this.append(e.content.cloneNode(!0)),ki(this,tr,Kf(this)),ki(this,ho,a),(r=a.createCallback)==null||r.call(a,this,V(this,tr),i),a.processCallback(this,V(this,tr),i)}update(e){V(this,ho).processCallback(this,V(this,tr),e)}}tr=new WeakMap;ho=new WeakMap;const Kf=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new ek;for([i,a]of Vm(r.value))if(!i)n.append(a);else{const s=new Wt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===Wm&&!(r instanceof HTMLTemplateElement))Kf(r,e);else{const n=r.data;if(r.nodeType===Wm||n.includes("{{")){const s=[];if(n)for([i,a]of Vm(n))if(!i)s.push(new Text(a));else{const o=new Pr(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new Yf(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},Km={},Vm=t=>{let e="",i=0,a=Km[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([Fm,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([ZA,e.trim()]),e="",r++):e+=n||"";return e&&a.push([Fm,(i>0?"{{":"")+e]),Km[t]=a},JA=11;class Vf{get value(){return""}set value(e){}toString(){return this.value}}const qf=new WeakMap;class ek{constructor(){ri(this,ha,[])}[Symbol.iterator](){return V(this,ha).values()}get length(){return V(this,ha).length}item(e){return V(this,ha)[e]}append(...e){for(const i of e)i instanceof Wt&&qf.set(i,this),V(this,ha).push(i)}toString(){return V(this,ha).join("")}}ha=new WeakMap;class Wt extends Vf{constructor(e,i,a){super(),ri(this,ma),ri(this,fn,""),ri(this,Bi,void 0),ri(this,Wi,void 0),ri(this,Fi,void 0),ki(this,Bi,e),ki(this,Wi,i),ki(this,Fi,a)}get attributeName(){return V(this,Wi)}get attributeNamespace(){return V(this,Fi)}get element(){return V(this,Bi)}get value(){return V(this,fn)}set value(e){V(this,fn)!==e&&(ki(this,fn,e),!V(this,ma,ir)||V(this,ma,ir).length===1?e==null?V(this,Bi).removeAttributeNS(V(this,Fi),V(this,Wi)):V(this,Bi).setAttributeNS(V(this,Fi),V(this,Wi),e):V(this,Bi).setAttributeNS(V(this,Fi),V(this,Wi),V(this,ma,ir).toString()))}get booleanValue(){return V(this,Bi).hasAttributeNS(V(this,Fi),V(this,Wi))}set booleanValue(e){if(!V(this,ma,ir)||V(this,ma,ir).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}fn=new WeakMap;Bi=new WeakMap;Wi=new WeakMap;Fi=new WeakMap;ma=new WeakSet;ir=function(){return qf.get(this)};class Pr extends Vf{constructor(e,i){super(),ri(this,mo,void 0),ri(this,xt,void 0),ki(this,mo,e),ki(this,xt,i?[...i]:[new Text])}get replacementNodes(){return V(this,xt)}get parentNode(){return V(this,mo)}get nextSibling(){return V(this,xt)[V(this,xt).length-1].nextSibling}get previousSibling(){return V(this,xt)[0].previousSibling}get value(){return V(this,xt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===JA?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),ki(this,xt,tk(V(this,xt)[0].parentNode,V(this,xt),i,this.nextSibling))}}mo=new WeakMap;xt=new WeakMap;class Yf extends Pr{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function tk(t,e,i,a=null){let r=0,n,s,o,l=i.length,d=e.length;for(;r<l&&r<d&&e[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==e[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<d;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const qm={string:t=>String(t)};class Gf{constructor(e){this.template=e,this.state=void 0}}const ba=new WeakMap,ga=new WeakMap,su={partial:(t,e)=>{e[t.expression]=new Gf(t.template)},if:(t,e)=>{var i;if(jf(t.expression,e))if(ba.get(t)!==t.template){ba.set(t,t.template);const a=new $l(t.template,e,Qc);t.replace(a),ga.set(t,a)}else(i=ga.get(t))==null||i.update(e);else t.replace(""),ba.delete(t),ga.delete(t)}},ik=Object.keys(su),Qc={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof Yf){if(!s.directive){const l=ik.find(d=>s.template.hasAttribute(d));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=su[s.directive])==null||a.call(su,s,i);continue}let o=jf(n,i);if(o instanceof Gf){ba.get(s)!==o.template?(ba.set(s,o.template),o=new $l(o.template,o.state,Qc),s.value=o,ga.set(s,o)):(r=ga.get(s))==null||r.update(o.state);continue}o?(s instanceof Wt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof Wt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,ba.delete(s),ga.delete(s))):s instanceof Wt?s.value=void 0:(s.value=void 0,ba.delete(s),ga.delete(s))}}},Ym={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=qm[e])==null?void 0:i.call(qm,t)}};function ak(t){return rk(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function jf(t,e={}){var i,a,r,n,s,o,l;const d=ak(t);if(d.length===0||d.some(({type:p})=>!p))return qr(t);if(((i=d[0])==null?void 0:i.token)===">"){const p=e[(a=d[1])==null?void 0:a.token];if(!p)return qr(t);const h={...e};p.state=h;const u=d.slice(2);for(let c=0;c<u.length;c+=3){const f=(r=u[c])==null?void 0:r.token,b=(n=u[c+1])==null?void 0:n.token,E=(s=u[c+2])==null?void 0:s.token;f&&b==="="&&(h[f]=Yr(E,e))}return p}if(d.length===1)return _s(d[0])?Yr(d[0].token,e):qr(t);if(d.length===2){const p=(o=d[0])==null?void 0:o.token,h=Ym[p];if(!h||!_s(d[1]))return qr(t);const u=Yr(d[1].token,e);return h(u)}if(d.length===3){const p=(l=d[1])==null?void 0:l.token,h=Ym[p];if(!h||!_s(d[0])||!_s(d[2]))return qr(t);const u=Yr(d[0].token,e);if(p==="|")return h(u,d[2].token);const c=Yr(d[2].token,e);return h(u,c)}}function qr(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function _s({type:t}){return["number","boolean","string","param"].includes(t)}function Yr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Lv(t)?parseFloat(t):e[t]}function rk(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Zc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ki=(t,e,i)=>(Zc(t,e,"read from private field"),i?i.call(t):e.get(t)),oa=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ai=(t,e,i,a)=>(Zc(t,e,"write to private field"),e.set(t,i),i),rd=(t,e,i)=>(Zc(t,e,"access private method"),i),_r,po,br,ar,ou,zf,vo,lu,En;const nd={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Qf=Re.createElement("template");Qf.innerHTML=`
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
`;class Hl extends g.HTMLElement{constructor(){super(),oa(this,ou),oa(this,vo),oa(this,_r,void 0),oa(this,po,void 0),oa(this,br,void 0),oa(this,ar,void 0),oa(this,En,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),Ai(this,ar,new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(nd[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()})),Ai(this,En,this.render.bind(this)),rd(this,ou,zf).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Ki(this,_r))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(Ai(this,_r,e),Ai(this,br,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>nd[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=nd[s.name])!=null?a:n1(s.name);let{value:l}=s;l!=null?(Lv(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&rd(this,vo,lu).call(this)}connectedCallback(){this.addEventListener(ui.BREAKPOINTS_COMPUTED,Ki(this,En)),Ki(this,ar).observe(this,{attributes:!0}),Ki(this,ar).observe(this.renderRoot,{attributes:!0,subtree:!0}),rd(this,vo,lu).call(this)}disconnectedCallback(){this.removeEventListener(ui.BREAKPOINTS_COMPUTED,Ki(this,En)),Ki(this,ar).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Ki(this,po)&&(Ai(this,po,this.template),this.renderer=new $l(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Qf.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}_r=new WeakMap;po=new WeakMap;br=new WeakMap;ar=new WeakMap;ou=new WeakSet;zf=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};vo=new WeakSet;lu=function(){var t;const e=this.getAttribute("template");if(!e||e===Ki(this,br))return;const i=this.getRootNode(),a=(t=i==null?void 0:i.getElementById)==null?void 0:t.call(i,e);if(a){Ai(this,br,e),Ai(this,_r,a),this.createRenderer();return}nk(e)&&(Ai(this,br,e),sk(e).then(r=>{const n=Re.createElement("template");n.innerHTML=r,Ai(this,_r,n),this.createRenderer()}).catch(console.error))};En=new WeakMap;Hl.observedAttributes=["template"];Hl.processor=Qc;function nk(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function sk(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}g.customElements.get("media-theme")||g.customElements.define("media-theme",Hl);function ok({anchor:t,floating:e,placement:i}){const a=lk({anchor:t,floating:e}),{x:r,y:n}=uk(a,i);return{x:r,y:n}}function lk({anchor:t,floating:e}){return{anchor:dk(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function dk(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e==null?void 0:e.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function uk({anchor:t,floating:e},i){const a=ck(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Zf(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let d;switch(n){case"top":d={x:s,y:t.y-e.height};break;case"bottom":d={x:s,y:t.y+t.height};break;case"right":d={x:t.x+t.width,y:o};break;case"left":d={x:t.x-e.width,y:o};break;default:d={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":d[a]-=l;break;case"end":d[a]+=l;break}return d}function Zf(t){return t.split("-")[0]}function ck(t){return["top","bottom"].includes(Zf(t))?"y":"x"}class Xc extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class hk extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var Jc=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},J=(t,e,i)=>(Jc(t,e,"read from private field"),i?i.call(t):e.get(t)),ne=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yt=(t,e,i,a)=>(Jc(t,e,"write to private field"),e.set(t,i),i),se=(t,e,i)=>(Jc(t,e,"access private method"),i),Jt,Qi,Ii,fo,_n,wa,zn,du,Xf,il,eh,al,Eo,uu,cu,Jf,hu,eE,mu,tE,gr,yr,Tr,Qn,rl,th,pu,iE,ih,aE,vu,rE,ah,nE,fu,sE,Eu,oE,Mn,nl,_u,lE,Dn,sl,_o,bu;function Mr({type:t,text:e,value:i,checked:a}){const r=Re.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=Re.createElement("span");return n.textContent=e,r.append(n),r}function Ia(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if((i==null?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function mk(t){return`
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
  `}const la={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class kt extends g.HTMLElement{constructor(){if(super(),ne(this,du),ne(this,il),ne(this,Eo),ne(this,cu),ne(this,hu),ne(this,mu),ne(this,Tr),ne(this,rl),ne(this,pu),ne(this,ih),ne(this,vu),ne(this,ah),ne(this,fu),ne(this,Eu),ne(this,Mn),ne(this,_u),ne(this,Dn),ne(this,_o),ne(this,Jt,null),ne(this,Qi,null),ne(this,Ii,null),ne(this,fo,new Set),ne(this,_n,void 0),ne(this,wa,!1),ne(this,zn,null),ne(this,al,()=>{const e=J(this,fo),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));yt(this,fo,i)}),ne(this,gr,()=>{se(this,Tr,Qn).call(this),se(this,rl,th).call(this,!1)}),ne(this,yr,()=>{se(this,Tr,Qn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),yt(this,_n,new MutationObserver(J(this,al)))}static get observedAttributes(){return[la.DISABLED,la.HIDDEN,la.STYLE,la.ANCHOR,ee.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":se(this,du,Xf).call(this,e);break;case"invoke":se(this,cu,Jf).call(this,e);break;case"click":se(this,pu,iE).call(this,e);break;case"toggle":se(this,vu,rE).call(this,e);break;case"focusout":se(this,fu,sE).call(this,e);break;case"keydown":se(this,Eu,oE).call(this,e);break}}connectedCallback(){var e,i;J(this,_n).observe(this.defaultSlot,{childList:!0}),yt(this,zn,hc(this.shadowRoot,":host")),se(this,Eo,uu).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),yt(this,Jt,Md(this)),(i=(e=J(this,Jt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(Ir(Zn(this),J(this,gr)),Ir(this,J(this,yr))),se(this,il,eh).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,i;J(this,_n).disconnect(),Rr(Zn(this),J(this,gr)),Rr(this,J(this,yr)),this.disable(),(i=(e=J(this,Jt))==null?void 0:e.unassociateElement)==null||i.call(e,this),yt(this,Jt,null),yt(this,Qi,null),yt(this,Ii,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,i,a){var r,n,s,o;e===la.HIDDEN&&a!==i?(J(this,wa)||yt(this,wa,!0),this.hidden?se(this,mu,tE).call(this):se(this,hu,eE).call(this),this.dispatchEvent(new hk({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===ee.MEDIA_CONTROLLER?(i&&((n=(r=J(this,Jt))==null?void 0:r.unassociateElement)==null||n.call(r,this),yt(this,Jt,null)),a&&this.isConnected&&(yt(this,Jt,Md(this)),(o=(s=J(this,Jt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===la.DISABLED&&a!==i?a==null?this.enable():this.disable():e===la.STYLE&&a!==i&&se(this,Eo,uu).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=wl(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(pk)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&se(this,_o,bu).call(this,i)}focus(){if(yt(this,Qi,cc()),this.items.length){se(this,Dn,sl).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e==null||e.focus()}handleSelect(e){var i;const a=se(this,Mn,nl).call(this,e);a&&(se(this,_o,bu).call(this,a,a.type==="checkbox"),J(this,Ii)&&!this.hidden&&((i=J(this,Qi))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=se(this,Mn,nl).call(this,e))!=null?i:se(this,_u,lE).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),se(this,Dn,sl).call(this,n[l]),n[l].focus()}}Jt=new WeakMap;Qi=new WeakMap;Ii=new WeakMap;fo=new WeakMap;_n=new WeakMap;wa=new WeakMap;zn=new WeakMap;du=new WeakSet;Xf=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&se(this,il,eh).call(this),e.name||J(this,al).call(this)};il=new WeakSet;eh=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};al=new WeakMap;Eo=new WeakSet;uu=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};cu=new WeakSet;Jf=function(t){yt(this,Ii,t.relatedTarget),Ci(this,t.relatedTarget)||(this.hidden=!this.hidden)};hu=new WeakSet;eE=function(){var t;(t=J(this,Ii))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Ir(Zn(this),J(this,gr)),Ir(this,J(this,yr))};mu=new WeakSet;tE=function(){var t;(t=J(this,Ii))==null||t.setAttribute("aria-expanded","false"),Rr(Zn(this),J(this,gr)),Rr(this,J(this,yr))};gr=new WeakMap;yr=new WeakMap;Tr=new WeakSet;Qn=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=ok({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Zn(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=J(this,zn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),p=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),h=r.height-p-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${h}px`)};rl=new WeakSet;th=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e==null?void 0:e.querySelector('[role="menu"]'),{style:a}=J(this,zn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),se(this,Tr,Qn).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),se(this,Tr,Qn).call(this);a.removeProperty("--media-menu-transition-in")};pu=new WeakSet;iE=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(J(this,ih,aE))){(e=J(this,Qi))==null||e.focus(),this.hidden=!0;return}const i=se(this,Mn,nl).call(this,t);!i||i.hasAttribute("disabled")||(se(this,Dn,sl).call(this,i),this.handleSelect(t))};ih=new WeakSet;aE=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};vu=new WeakSet;rE=function(t){if(t.target===this)return;se(this,ah,nE).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Xc({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);se(this,rl,th).call(this,!0)};ah=new WeakSet;nE=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};fu=new WeakSet;sE=function(t){var e;Ci(this,t.relatedTarget)||(J(this,wa)&&((e=J(this,Qi))==null||e.focus()),J(this,Ii)&&J(this,Ii)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};Eu=new WeakSet;oE=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;if(!(o||l||d)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(J(this,wa)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=J(this,Qi))==null||n.focus(),J(this,wa)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};Mn=new WeakSet;nl=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};_u=new WeakSet;lE=function(){return this.items.find(t=>t.tabIndex===0)};Dn=new WeakSet;sl=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};_o=new WeakSet;bu=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};kt.shadowRootOptions={mode:"open"};kt.getTemplateHTML=mk;function pk(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t==null?void 0:t.role)}function Zn(t){var e;return(e=t.getAttribute("bounds")?xr(t,`#${t.getAttribute("bounds")}`):rt(t)||t.parentElement)!=null?e:t}g.customElements.get("media-chrome-menu")||g.customElements.define("media-chrome-menu",kt);var rh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ze=(t,e,i)=>(rh(t,e,"read from private field"),i?i.call(t):e.get(t)),vi=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sd=(t,e,i,a)=>(rh(t,e,"write to private field"),e.set(t,i),i),mr=(t,e,i)=>(rh(t,e,"access private method"),i),bo,xn,gu,dE,ol,nh,sh,uE,oi,rr,yu,go,Tu;function vk(t){return`
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
  `}function fk(t){return""}const bt={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class ia extends g.HTMLElement{constructor(){if(super(),vi(this,gu),vi(this,ol),vi(this,sh),vi(this,go),vi(this,bo,!1),vi(this,xn,void 0),vi(this,oi,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r==null?void 0:r.dataset.description)!=null?i:r==null?void 0:r.text,s=Re.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),vi(this,rr,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",Ze(this,rr));return}this.handleClick(e)}),vi(this,yu,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",Ze(this,rr));return}this.addEventListener("keyup",Ze(this,rr),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ft(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[bt.TYPE,bt.DISABLED,bt.CHECKED,bt.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Gr(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":mr(this,gu,dE).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":Ze(this,yu).call(this,e);break;case"keyup":Ze(this,rr).call(this,e);break}}attributeChangedCallback(e,i,a){e===bt.CHECKED&&Gr(this)&&!Ze(this,bo)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===bt.TYPE&&a!==i?this.role="menuitem"+a:e===bt.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(bt.DISABLED)||this.enable(),this.role="menuitem"+this.type,sd(this,xn,Au(this,this.parentNode)),mr(this,go,Tu).call(this),this.submenuElement&&mr(this,ol,nh).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),mr(this,go,Tu).call(this),sd(this,xn,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=wl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(bt.TYPE))!=null?e:""}set type(e){this.setAttribute(bt.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(bt.VALUE))!=null?e:this.text}set value(e){this.setAttribute(bt.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Gr(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Gr(this)&&(sd(this,bo,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Gr(this)||this.invokeTargetElement&&Ci(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Xc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}bo=new WeakMap;xn=new WeakMap;gu=new WeakSet;dE=function(t){const e=t.target;if(!(e!=null&&e.name))for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?mr(this,ol,nh).call(this):mr(this,sh,uE).call(this))};ol=new WeakSet;nh=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Ze(this,oi)),this.submenuElement.addEventListener("addmenuitem",Ze(this,oi)),this.submenuElement.addEventListener("removemenuitem",Ze(this,oi)),Ze(this,oi).call(this)};sh=new WeakSet;uE=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Ze(this,oi)),this.submenuElement.removeEventListener("addmenuitem",Ze(this,oi)),this.submenuElement.removeEventListener("removemenuitem",Ze(this,oi)),Ze(this,oi).call(this)};oi=new WeakMap;rr=new WeakMap;yu=new WeakMap;go=new WeakSet;Tu=function(){var t;const e=(t=Ze(this,xn))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i==null||i.setAttribute("aria-checked","true")};ia.shadowRootOptions={mode:"open"};ia.getTemplateHTML=vk;ia.getSuffixSlotInnerHTML=fk;function Gr(t){return t.type==="radio"||t.type==="checkbox"}function Au(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Au(t,i):e!=null&&e.items?e:Au(e,e==null?void 0:e.parentNode)}g.customElements.get("media-chrome-menu-item")||g.customElements.define("media-chrome-menu-item",ia);function Ek(t){return`
    ${kt.getTemplateHTML(t)}
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
  `}class cE extends kt{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-settings-menu-button")}}cE.getTemplateHTML=Ek;g.customElements.get("media-settings-menu")||g.customElements.define("media-settings-menu",cE);function _k(t){return`
    ${ia.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function bk(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class Bl extends ia{}Bl.shadowRootOptions={mode:"open"};Bl.getTemplateHTML=_k;Bl.getSuffixSlotInnerHTML=bk;g.customElements.get("media-settings-menu-item")||g.customElements.define("media-settings-menu-item",Bl);class Ur extends Be{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=wl(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Xc({relatedTarget:this}))}}g.customElements.get("media-chrome-menu-button")||g.customElements.define("media-chrome-menu-button",Ur);function gk(){return`
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
  `}function yk(){return D("Settings")}class oh extends Ur{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-settings-menu")}}oh.getSlotTemplateHTML=gk;oh.getTooltipContentHTML=yk;g.customElements.get("media-settings-menu-button")||g.customElements.define("media-settings-menu-button",oh);var lh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hE=(t,e,i)=>(lh(t,e,"read from private field"),i?i.call(t):e.get(t)),bs=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ku=(t,e,i,a)=>(lh(t,e,"write to private field"),e.set(t,i),i),gs=(t,e,i)=>(lh(t,e,"access private method"),i),bn,ll,yo,Su,To,wu;class Tk extends kt{constructor(){super(...arguments),bs(this,yo),bs(this,To),bs(this,bn,[]),bs(this,ll,void 0)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_AUDIO_TRACK_LIST,m.MEDIA_AUDIO_TRACK_ENABLED,m.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===m.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(ku(this,bn,i1(a??"")),gs(this,yo,Su).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",gs(this,To,wu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",gs(this,To,wu))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=rt(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return hE(this,bn)}set mediaAudioTrackList(e){ku(this,bn,e),gs(this,yo,Su).call(this)}get mediaAudioTrackEnabled(){var e;return(e=he(this,m.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,m.MEDIA_AUDIO_TRACK_ENABLED,e)}}bn=new WeakMap;ll=new WeakMap;yo=new WeakSet;Su=function(){if(hE(this,ll)===JSON.stringify(this.mediaAudioTrackList))return;ku(this,ll,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Mr({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(a)}};To=new WeakSet;wu=function(){if(this.value==null)return;const t=new g.CustomEvent(x.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-audio-track-menu")||g.customElements.define("media-audio-track-menu",Tk);const Ak=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function kk(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ak}</slot>
  `}function Sk(){return D("Audio")}const Gm=t=>{const e=D("Audio");t.setAttribute("aria-label",e)};class dh extends Ur{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_AUDIO_TRACK_ENABLED,m.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Gm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_LANG&&Gm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=rt(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=he(this,m.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){le(this,m.MEDIA_AUDIO_TRACK_ENABLED,e)}}dh.getSlotTemplateHTML=kk;dh.getTooltipContentHTML=Sk;g.customElements.get("media-audio-track-menu-button")||g.customElements.define("media-audio-track-menu-button",dh);var uh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},wk=(t,e,i)=>(uh(t,e,"read from private field"),e.get(t)),od=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ik=(t,e,i,a)=>(uh(t,e,"write to private field"),e.set(t,i),i),ys=(t,e,i)=>(uh(t,e,"access private method"),i),dl,Ao,Iu,ko,Ru;const Rk=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Ck(t){return`
    ${kt.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${Rk}</slot>
  `}class mE extends kt{constructor(){super(...arguments),od(this,Ao),od(this,ko),od(this,dl,void 0)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_SUBTITLES_LIST,m.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_SUBTITLES_LIST&&i!==a?ys(this,Ao,Iu).call(this):e===m.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a||"",ys(this,Ao,Iu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ys(this,ko,Ru))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ys(this,ko,Ru))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return jm(this,m.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){zm(this,m.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return jm(this,m.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){zm(this,m.MEDIA_SUBTITLES_SHOWING,e)}}dl=new WeakMap;Ao=new WeakSet;Iu=function(){var t;const e=wk(this,dl)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(m.MEDIA_SUBTITLES_SHOWING);if(!e&&!i)return;Ik(this,dl,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Mr({type:"radio",text:this.formatMenuItemText(D("Off")),value:"off",checked:a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const s of n){const o=Mr({type:"radio",text:this.formatMenuItemText(s.label,s),value:Wd(s),checked:this.value==Wd(s)});o.prepend(Ia(this,"checked-indicator")),((t=s.kind)!=null?t:"subs")==="captions"&&o.append(Ia(this,"captions-indicator")),this.defaultSlot.append(o)}};ko=new WeakSet;Ru=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(m.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t!=null&&t.length&&i&&this.dispatchEvent(new g.CustomEvent(x.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new g.CustomEvent(x.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};mE.getTemplateHTML=Ck;const jm=(t,e)=>{const i=t.getAttribute(e);return i?Ml(i):[]},zm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-menu")||g.customElements.define("media-captions-menu",mE);const Lk=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Mk=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Dk(){return`
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
      <slot name="on">${Lk}</slot>
      <slot name="off">${Mk}</slot>
    </slot>
  `}function xk(){return D("Captions")}const Qm=t=>{t.setAttribute("data-captions-enabled",af(t).toString())},Zm=t=>{t.setAttribute("aria-label",D("closed captions"))};class ch extends Ur{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_SUBTITLES_LIST,m.MEDIA_SUBTITLES_SHOWING,m.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Zm(this),Qm(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_SUBTITLES_SHOWING?Qm(this):e===m.MEDIA_LANG&&Zm(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=rt(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Xm(this,m.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Jm(this,m.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Xm(this,m.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Jm(this,m.MEDIA_SUBTITLES_SHOWING,e)}}ch.getSlotTemplateHTML=Dk;ch.getTooltipContentHTML=xk;const Xm=(t,e)=>{const i=t.getAttribute(e);return i?Ml(i):[]},Jm=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=qn(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};g.customElements.get("media-captions-menu-button")||g.customElements.define("media-captions-menu-button",ch);var pE=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},nr=(t,e,i)=>(pE(t,e,"read from private field"),i?i.call(t):e.get(t)),ld=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pa=(t,e,i)=>(pE(t,e,"access private method"),i),Yi,sr,gn,So,Cu;const dd={RATES:"rates"};class Ok extends kt{constructor(){super(),ld(this,sr),ld(this,So),ld(this,Yi,new _c(this,dd.RATES,{defaultValue:Lf})),Pa(this,sr,gn).call(this)}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PLAYBACK_RATE,dd.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===m.MEDIA_PLAYBACK_RATE&&i!=a?(this.value=a,Pa(this,sr,gn).call(this)):e===dd.RATES&&i!=a&&(nr(this,Yi).value=a,Pa(this,sr,gn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Pa(this,So,Cu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Pa(this,So,Cu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-playback-rate-menu-button")}get rates(){return nr(this,Yi)}set rates(e){e?Array.isArray(e)?nr(this,Yi).value=e.join(" "):typeof e=="string"&&(nr(this,Yi).value=e):nr(this,Yi).value="",Pa(this,sr,gn).call(this)}get mediaPlaybackRate(){return oe(this,m.MEDIA_PLAYBACK_RATE,hr)}set mediaPlaybackRate(e){be(this,m.MEDIA_PLAYBACK_RATE,e)}}Yi=new WeakMap;sr=new WeakSet;gn=function(){this.defaultSlot.textContent="";const t=ea(this.mediaPlaybackRate),e=new Set(Array.from(nr(this,Yi)).map(a=>ea(Number(a))));t>0&&!e.has(t)&&e.add(t);const i=Array.from(e).sort((a,r)=>a-r);for(const a of i){const r=Mr({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:t===a});r.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(r)}};So=new WeakSet;Cu=function(){if(!this.value)return;const t=new g.CustomEvent(x.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-playback-rate-menu")||g.customElements.define("media-playback-rate-menu",Ok);const wo=1;function Nk(t){return`
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
    <slot name="icon">${t.mediaplaybackrate?ea(+t.mediaplaybackrate):wo}x</slot>
  `}function Pk(){return D("Playback rate")}class hh extends Ur{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ea((e=this.mediaPlaybackRate)!=null?e:wo)}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===m.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=ea(Number.isNaN(r)?wo:r);this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",D("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return oe(this,m.MEDIA_PLAYBACK_RATE,wo)}set mediaPlaybackRate(e){be(this,m.MEDIA_PLAYBACK_RATE,e)}}hh.getSlotTemplateHTML=Nk;hh.getTooltipContentHTML=Pk;g.customElements.get("media-playback-rate-menu-button")||g.customElements.define("media-playback-rate-menu-button",hh);var mh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ei=(t,e,i)=>(mh(t,e,"read from private field"),i?i.call(t):e.get(t)),Ts=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ep=(t,e,i,a)=>(mh(t,e,"write to private field"),e.set(t,i),i),Ua=(t,e,i)=>(mh(t,e,"access private method"),i),yn,ti,or,Tn,Io,Lu;class Uk extends kt{constructor(){super(...arguments),Ts(this,or),Ts(this,Io),Ts(this,yn,[]),Ts(this,ti,{})}static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_RENDITION_LIST,m.MEDIA_RENDITION_SELECTED,m.MEDIA_RENDITION_UNAVAILABLE,m.MEDIA_HEIGHT,m.MEDIA_WIDTH]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),i!==a)switch(e){case m.MEDIA_RENDITION_SELECTED:this.value=a??"auto",Ua(this,or,Tn).call(this);break;case m.MEDIA_RENDITION_LIST:ep(this,yn,Xy(a)),Ua(this,or,Tn).call(this);break;case m.MEDIA_HEIGHT:case m.MEDIA_WIDTH:Ua(this,or,Tn).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ua(this,Io,Lu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ua(this,Io,Lu))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:rt(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Ei(this,yn)}set mediaRenditionList(e){ep(this,yn,e),Ua(this,or,Tn).call(this)}get mediaRenditionSelected(){return he(this,m.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,m.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,m.MEDIA_HEIGHT)}set mediaHeight(e){be(this,m.MEDIA_HEIGHT,e)}get mediaWidth(){return oe(this,m.MEDIA_WIDTH)}set mediaWidth(e){be(this,m.MEDIA_WIDTH,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}yn=new WeakMap;ti=new WeakMap;or=new WeakSet;Tn=function(){const t=!this.mediaRenditionSelected;if(Ei(this,ti).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Ei(this,ti).mediaHeight===this.mediaHeight&&Ei(this,ti).mediaWidth===this.mediaWidth&&Ei(this,ti).isAuto===t)return;Ei(this,ti).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Ei(this,ti).mediaHeight=this.mediaHeight,Ei(this,ti).mediaWidth=this.mediaWidth,Ei(this,ti).isAuto=t;const e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=e.find(s=>s.id===this.mediaRenditionSelected);for(const s of e)s.selected=s===i;this.defaultSlot.textContent="";for(const s of e){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Mr({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!t});l.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(l)}const a=i&&this.showRenditionBitrate(i);let r;t&&(i?r=this.formatMenuItemText(`${D("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${D("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(D("Auto")));const n=Mr({type:"radio",text:r,value:"auto",checked:t});n.dataset.description=r,n.prepend(Ia(this,"checked-indicator")),this.defaultSlot.append(n)};Io=new WeakSet;Lu=function(){if(this.value==null)return;const t=new g.CustomEvent(x.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};g.customElements.get("media-rendition-menu")||g.customElements.define("media-rendition-menu",Uk);const $k=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Hk(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${$k}</slot>
  `}function Bk(){return D("Quality")}class ph extends Ur{static get observedAttributes(){return[...super.observedAttributes,m.MEDIA_RENDITION_SELECTED,m.MEDIA_RENDITION_UNAVAILABLE,m.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",D("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:rt(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return he(this,m.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){le(this,m.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return oe(this,m.MEDIA_HEIGHT)}set mediaHeight(e){be(this,m.MEDIA_HEIGHT,e)}}ph.getSlotTemplateHTML=Hk;ph.getTooltipContentHTML=Bk;g.customElements.get("media-rendition-menu-button")||g.customElements.define("media-rendition-menu-button",ph);var vh=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ai=(t,e,i)=>(vh(t,e,"read from private field"),i?i.call(t):e.get(t)),Vt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vE=(t,e,i,a)=>(vh(t,e,"write to private field"),e.set(t,i),i),Tt=(t,e,i)=>(vh(t,e,"access private method"),i),Dr,Xn,Wl,Ea,pr,fh,fE,Ro,Mu,Co,Du,EE,ul,cl,Lo;function Wk(t){return`
      ${kt.getTemplateHTML(t)}
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
    `}class _E extends kt{constructor(){super(),Vt(this,Xn),Vt(this,Ea),Vt(this,fh),Vt(this,Ro),Vt(this,Du),Vt(this,Dr,!1),Vt(this,Co,e=>{const i=e.target,a=(i==null?void 0:i.nodeName)==="VIDEO",r=Tt(this,Ro,Mu).call(this,i);(a||r)&&(ai(this,Dr)?Tt(this,Ea,pr).call(this):Tt(this,Du,EE).call(this,e))}),Vt(this,ul,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=(i==null?void 0:i.nodeName)==="VIDEO",s=Tt(this,Ro,Mu).call(this,i);a||r&&(n||s)||Tt(this,Ea,pr).call(this)}),Vt(this,cl,e=>{e.key==="Escape"&&Tt(this,Ea,pr).call(this)}),Vt(this,Lo,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}Tt(this,Ea,pr).call(this)}),this.setAttribute("noautohide",""),Tt(this,Xn,Wl).call(this)}connectedCallback(){super.connectedCallback(),rt(this).addEventListener("contextmenu",ai(this,Co)),this.addEventListener("click",ai(this,Lo))}disconnectedCallback(){super.disconnectedCallback(),rt(this).removeEventListener("contextmenu",ai(this,Co)),this.removeEventListener("click",ai(this,Lo)),document.removeEventListener("mousedown",ai(this,ul)),document.removeEventListener("keydown",ai(this,cl))}}Dr=new WeakMap;Xn=new WeakSet;Wl=function(){this.hidden=!ai(this,Dr)};Ea=new WeakSet;pr=function(){vE(this,Dr,!1),Tt(this,Xn,Wl).call(this)};fh=new WeakSet;fE=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&Tt(i=e,Ea,pr).call(i)})};Ro=new WeakSet;Mu=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};Co=new WeakMap;Du=new WeakSet;EE=function(t){t.preventDefault(),Tt(this,fh,fE).call(this),vE(this,Dr,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,Tt(this,Xn,Wl).call(this),document.addEventListener("mousedown",ai(this,ul),{once:!0}),document.addEventListener("keydown",ai(this,cl),{once:!0})};ul=new WeakMap;cl=new WeakMap;Lo=new WeakMap;_E.getTemplateHTML=Wk;g.customElements.get("media-context-menu")||g.customElements.define("media-context-menu",_E);function Fk(t){return`
    ${ia.getTemplateHTML.call(this,t)}
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
  `}class Eh extends ia{}Eh.shadowRootOptions={mode:"open"};Eh.getTemplateHTML=Fk;g.customElements.get("media-context-menu-item")||g.customElements.define("media-context-menu-item",Eh);var bE=t=>{throw TypeError(t)},_h=(t,e,i)=>e.has(t)||bE("Cannot "+i),B=(t,e,i)=>(_h(t,e,"read from private field"),i?i.call(t):e.get(t)),Ie=(t,e,i)=>e.has(t)?bE("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),it=(t,e,i,a)=>(_h(t,e,"write to private field"),e.set(t,i),i),Ae=(t,e,i)=>(_h(t,e,"access private method"),i),Fl=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Fl{}globalThis.DocumentFragment=t}var bh=class extends Fl{},Kk=class extends Fl{},Vk={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(bh)}},Mo,qk=class{constructor(t,e={}){Ie(this,Mo),it(this,Mo,e==null?void 0:e.detail)}get detail(){return B(this,Mo)}initCustomEvent(){}};Mo=new WeakMap;function Yk(t,e){return new bh}var gE={document:{createElement:Yk},DocumentFragment,customElements:Vk,CustomEvent:qk,EventTarget:Fl,HTMLElement:bh,HTMLVideoElement:Kk},yE=typeof window>"u"||typeof globalThis.customElements>"u",ni=yE?gE:globalThis,hl=yE?gE.document:globalThis.document;function $a(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Gk(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${xu(i)}: ${a}; `)}),e?e.trim():void 0}function xu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function TE(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ge(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function AE(t){let e=jk(t).toString();return e?"?"+e:""}function jk(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var kE=(t,e)=>!t||!e?!1:t.contains(e)?!0:kE(t,e.getRootNode().host),SE="mux.com",zk=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},Qk=zk(),wE=()=>Qk,Zk=(t,{token:e,customDomain:i=SE,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=vr(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${AE({token:e,time:s,program_time:r})}`},Xk=(t,{token:e,customDomain:i=SE,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=vr(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${AE({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},gh=t=>{if(t){if([ie.LIVE,ie.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return ie.LIVE}},Jk={crossorigin:"crossOrigin",playsinline:"playsInline"};function eS(t){var e;return(e=Jk[t])!=null?e:TE(t)}var lr,dr,Je,tS=class{constructor(e,i){Ie(this,lr),Ie(this,dr),Ie(this,Je,[]),it(this,lr,e),it(this,dr,i)}[Symbol.iterator](){return B(this,Je).values()}get length(){return B(this,Je).length}get value(){var e;return(e=B(this,Je).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(it(this,Je,[]),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return B(this,Je)[e]}values(){return B(this,Je).values()}keys(){return B(this,Je).keys()}forEach(e){B(this,Je).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||B(this,Je).push(r)}),!(this.value===""&&!((i=B(this,lr))!=null&&i.hasAttribute(`${B(this,dr)}`)))&&((a=B(this,lr))==null||a.setAttribute(`${B(this,dr)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{B(this,Je).splice(B(this,Je).indexOf(a),1)}),(i=B(this,lr))==null||i.setAttribute(`${B(this,dr)}`,`${this.value}`)}contains(e){return B(this,Je).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};lr=new WeakMap,dr=new WeakMap,Je=new WeakMap;var IE=`[mux-player ${wE()}]`;function _i(...t){console.warn(IE,...t)}function et(...t){console.error(IE,...t)}function tp(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${N("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),_i(i)}var Ye={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},pa={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},ip=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),iS=Object.values(Ye).filter(t=>Ye.PLAYSINLINE!==t),aS=Object.values(pa),rS=[...iS,...aS],nS=class extends ni.HTMLElement{static get observedAttributes(){return rS}constructor(){super()}attributeChangedCallback(e,i,a){var r,n;switch(e){case pa.MUTED:{this.media&&(this.media.muted=a!=null,this.media.defaultMuted=a!=null);return}case pa.VOLUME:{let s=(r=Ge(a))!=null?r:1;this.media&&(this.media.volume=s);return}case pa.PLAYBACKRATE:{let s=(n=Ge(a))!=null?n:1;this.media&&(this.media.playbackRate=s,this.media.defaultPlaybackRate=s);return}}}play(){var e,i;return(i=(e=this.media)==null?void 0:e.play())!=null?i:Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,i;return(i=(e=this.media)==null?void 0:e.paused)!=null?i:!0}get duration(){var e,i;return(i=(e=this.media)==null?void 0:e.duration)!=null?i:NaN}get ended(){var e,i;return(i=(e=this.media)==null?void 0:e.ended)!=null?i:!1}get buffered(){var e,i;return(i=(e=this.media)==null?void 0:e.buffered)!=null?i:ip}get seekable(){var e,i;return(i=(e=this.media)==null?void 0:e.seekable)!=null?i:ip}get readyState(){var e,i;return(i=(e=this.media)==null?void 0:e.readyState)!=null?i:0}get videoWidth(){var e,i;return(i=(e=this.media)==null?void 0:e.videoWidth)!=null?i:0}get videoHeight(){var e,i;return(i=(e=this.media)==null?void 0:e.videoHeight)!=null?i:0}get currentSrc(){var e,i;return(i=(e=this.media)==null?void 0:e.currentSrc)!=null?i:""}get currentTime(){var e,i;return(i=(e=this.media)==null?void 0:e.currentTime)!=null?i:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,i;return(i=(e=this.media)==null?void 0:e.volume)!=null?i:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,i;return(i=(e=this.media)==null?void 0:e.playbackRate)!=null?i:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return(e=Ge(this.getAttribute(pa.PLAYBACKRATE)))!=null?e:1}set defaultPlaybackRate(e){e!=null?this.setAttribute(pa.PLAYBACKRATE,`${e}`):this.removeAttribute(pa.PLAYBACKRATE)}get crossOrigin(){return jr(this,Ye.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Ye.CROSSORIGIN,`${e}`)}get autoplay(){return jr(this,Ye.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(Ye.AUTOPLAY,typeof e=="string"?e:""):this.removeAttribute(Ye.AUTOPLAY)}get loop(){return jr(this,Ye.LOOP)!=null}set loop(e){e?this.setAttribute(Ye.LOOP,""):this.removeAttribute(Ye.LOOP)}get muted(){var e,i;return(i=(e=this.media)==null?void 0:e.muted)!=null?i:!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return jr(this,Ye.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(Ye.MUTED,""):this.removeAttribute(Ye.MUTED)}get playsInline(){return jr(this,Ye.PLAYSINLINE)!=null}set playsInline(e){et("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Ye.PRELOAD,e):this.removeAttribute(Ye.PRELOAD)}};function jr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var ap=nS,sS=`:host {
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
`,zr=new WeakMap,oS=class RE{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=zr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=zr.get(this.element);i&&i.delete(this.type)}}static for(e){zr.has(e.element)||zr.set(e.element,new Map);let i=e.attributeName.slice(2),a=zr.get(e.element);return a&&a.has(i)?a.get(i):new RE(e.element,i)}};function lS(t,e){return t instanceof Wt&&t.attributeName.startsWith("on")?(oS.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function dS(t,e){return e instanceof CE&&t instanceof Pr?(e.renderInto(t),!0):!1}function uS(t,e){return e instanceof DocumentFragment&&t instanceof Pr?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function cS(t,e){if(t instanceof Wt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function hS(t,e){if(t instanceof Wt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function mS(t,e){if(typeof e=="boolean"&&t instanceof Wt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function pS(t,e){return e===!1&&t instanceof Pr?(t.replace(""),!0):!1}function vS(t,e){hS(t,e)||mS(t,e)||lS(t,e)||pS(t,e)||dS(t,e)||uS(t,e)||cS(t,e)}var ud=new Map,rp=new WeakMap,np=new WeakMap,CE=class{constructor(t,e,i){this.strings=t,this.values=e,this.processor=i,this.stringsKey=this.strings.join("")}get template(){if(ud.has(this.stringsKey))return ud.get(this.stringsKey);{let t=hl.createElement("template"),e=this.strings.length-1;return t.innerHTML=this.strings.reduce((i,a,r)=>i+a+(r<e?`{{ ${r} }}`:""),""),ud.set(this.stringsKey,t),t}}renderInto(t){var e;let i=this.template;if(rp.get(t)!==i){rp.set(t,i);let r=new $l(i,this.values,this.processor);np.set(t,r),t instanceof Pr?t.replace(...r.children):t.appendChild(r);return}let a=np.get(t);(e=a==null?void 0:a.update)==null||e.call(a,this.values)}},fS={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";vS(n,s)}}}};function Do(t,...e){return new CE(t,e,fS)}function ES(t,e){t.renderInto(e)}var _S=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},bS=t=>Do`
  <style>
    ${_S(t)}
    ${sS}
  </style>
  ${AS(t)}
`,gS=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return gh(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},yS={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},TS=Object.values(yS).join(", "),AS=t=>{var e,i,a,r,n,s,o,l,d,p,h,u,c,f,b,E,T,v,y,w,k,L,I,U,Y,W,F,de,ue,Ke,st,ot,Ce,Le,St,lt,Ne,ci,Ve,je,hi,$r;return Do`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${gS(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(ie.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=Gk({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(d=t.defaultDuration)!=null?d:!1}"
    hideduration="${(p=t.hideDuration)!=null?p:!1}"
    title="${(h=t.title)!=null?h:!1}"
    videotitle="${(u=t.videoTitle)!=null?u:!1}"
    proudlydisplaymuxbadge="${(c=t.proudlyDisplayMuxBadge)!=null?c:!1}"
    exportparts="${TS}"
  >
    <mux-video
      slot="media"
      inert="${(f=t.noHotKeys)!=null?f:!1}"
      target-live-window="${(b=t.targetLiveWindow)!=null?b:!1}"
      stream-type="${(E=gh(t.streamType))!=null?E:!1}"
      crossorigin="${(T=t.crossOrigin)!=null?T:""}"
      playsinline
      autoplay="${(v=t.autoplay)!=null?v:!1}"
      muted="${(y=t.muted)!=null?y:!1}"
      loop="${(w=t.loop)!=null?w:!1}"
      preload="${(k=t.preload)!=null?k:!1}"
      debug="${(L=t.debug)!=null?L:!1}"
      prefer-cmcd="${(I=t.preferCmcd)!=null?I:!1}"
      disable-tracking="${(U=t.disableTracking)!=null?U:!1}"
      disable-cookies="${(Y=t.disableCookies)!=null?Y:!1}"
      prefer-playback="${(W=t.preferPlayback)!=null?W:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      initial-bandwidth-estimate-kbps="${t.initialBandwidthEstimateKbps!=null?t.initialBandwidthEstimateKbps:!1}"
      initial-estimate-segments="${t.initialEstimateSegments!=null?t.initialEstimateSegments:!1}"
      min-preload-segments="${t.minPreloadSegments!=null?t.minPreloadSegments:!1}"
      beacon-collection-domain="${(F=t.beaconCollectionDomain)!=null?F:!1}"
      player-init-time="${(de=t.playerInitTime)!=null?de:!1}"
      player-software-name="${(ue=t.playerSoftwareName)!=null?ue:!1}"
      player-software-version="${(Ke=t.playerSoftwareVersion)!=null?Ke:!1}"
      env-key="${(st=t.envKey)!=null?st:!1}"
      custom-domain="${(ot=t.customDomain)!=null?ot:!1}"
      src="${t.src?t.src:t.playbackId?Sd(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?Sd(t):!1}"
      cast-receiver="${(Ce=t.castReceiver)!=null?Ce:!1}"
      drm-token="${(St=(Le=t.tokens)==null?void 0:Le.drm)!=null?St:!1}"
      playback-token="${(Ne=(lt=t.tokens)==null?void 0:lt.playback)!=null?Ne:!1}"
      exportparts="video"
      disable-pseudo-ended="${(ci=t.disablePseudoEnded)!=null?ci:!1}"
      max-reconnect-retries="${(Ve=t.maxReconnectRetries)!=null?Ve:!1}"
      max-auto-resolution="${(je=t.maxAutoResolution)!=null?je:!1}"
      cap-rendition-to-player-size="${(hi=t.capRenditionToPlayerSize)!=null?hi:!1}"
    >
      ${t.storyboard?Do`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:Do``}
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
`},LE=t=>t.charAt(0).toUpperCase()+t.slice(1),kS=(t,e=!1)=>{var i,a;if(t.muxCode){let r=LE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:te.VIDEO);if(t.muxCode===P.NETWORK_OFFLINE)return N("Your device appears to be offline",e);if(t.muxCode===P.NETWORK_RECONNECTING)return N("Reconnecting...",e);if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return N("{category} URL has expired",e).format({category:r});if([P.NETWORK_TOKEN_SUB_MISMATCH,P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING,P.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return N("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===P.NETWORK_TOKEN_MISSING)return N("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===P.NETWORK_NOT_FOUND)return N("{category} does not exist",e).format({category:r});if(t.muxCode===P.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return N("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===M.MEDIA_ERR_NETWORK)return N("Network Error",e);if(t.code===M.MEDIA_ERR_DECODE)return N("Media Error",e);if(t.code===M.MEDIA_ERR_SRC_NOT_SUPPORTED)return N("Source Not Supported",e)}return N("Error",e)},SS=(t,e=!1)=>{var i,a;if(t.reload)return"";if(t.muxCode){let r=LE((i=t.errorCategory)!=null?i:"video"),n=yl((a=t.errorCategory)!=null?a:te.VIDEO);return t.muxCode===P.NETWORK_OFFLINE?N("Check your internet connection and try reloading this video.",e):t.muxCode===P.NETWORK_RECONNECTING?N("Your connection was interrupted. Attempting to resume playback...",e):t.muxCode===P.NETWORK_TOKEN_EXPIRED?N("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH?N("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_TOKEN_MALFORMED?N("{category} URL is formatted incorrectly",e).format({category:r}):[P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?N("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[P.NETWORK_TOKEN_MISSING,P.NETWORK_INVALID_URL].includes(t.muxCode)?N("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===P.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===M.MEDIA_ERR_NETWORK||t.code===M.MEDIA_ERR_DECODE||(t.code,M.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},wS=(t,e=!1)=>{let i=kS(t,e).toString(),a=SS(t,e).toString();return{title:i,message:a,reload:!!t.reload}},IS=t=>{if(t.muxCode){if(t.muxCode===P.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===P.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([P.NETWORK_TOKEN_AUD_MISMATCH,P.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===P.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===P.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===P.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===P.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===M.MEDIA_ERR_NETWORK)return"";if(t.code===M.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===M.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},ME=(t,e)=>{let i=IS(t);return{message:t.message,context:t.context,file:i}},RS=`<template id="media-theme-gerwig">
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
`,Ou=hl.createElement("template");"innerHTML"in Ou&&(Ou.innerHTML=RS);var sp,op,DE=class extends Hl{};DE.template=(op=(sp=Ou.content)==null?void 0:sp.children)==null?void 0:op[0];ni.customElements.get("media-theme-gerwig")||ni.customElements.define("media-theme-gerwig",DE);var CS="gerwig",bi={SRC:"src",POSTER:"poster"},R={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Nu=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function LS(t,e){var i,a,r;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:((i=t.media)==null?void 0:i.currentSrc)&&t.storyboard,storyboardSrc:t.getAttribute(R.STORYBOARD_SRC),fullscreenElement:t.getAttribute(R.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:DS(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(R.NOHOTKEYS),hotKeys:t.getAttribute(R.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,maxAutoResolution:t.maxAutoResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,initialBandwidthEstimateKbps:t.initialBandwidthEstimateKbps,initialEstimateSegments:t.initialEstimateSegments,minPreloadSegments:t.minPreloadSegments,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(_.TARGET_LIVE_WINDOW),streamType:gh(t.getAttribute(_.STREAM_TYPE)),primaryColor:t.getAttribute(R.PRIMARY_COLOR),secondaryColor:t.getAttribute(R.SECONDARY_COLOR),accentColor:t.getAttribute(R.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:xS(t),playbackRates:t.getAttribute(R.PLAYBACK_RATES),customDomain:(a=t.getAttribute(_.CUSTOM_DOMAIN))!=null?a:void 0,title:t.getAttribute(R.TITLE),videoTitle:(r=t.getAttribute(R.VIDEO_TITLE))!=null?r:t.getAttribute(R.TITLE),novolumepref:t.hasAttribute(R.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(R.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(R.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(R.DISABLE_PSEUDO_ENDED),maxReconnectRetries:t.maxReconnectRetries,capRenditionToPlayerSize:t.capRenditionToPlayerSize,...e,extraSourceParams:t.extraSourceParams}}var MS=Sf.formatErrorMessage;Sf.formatErrorMessage=t=>{var e,i,a;if(t instanceof M){let r=wS(t,!1);return r!=null&&r.reload?`
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
    `}return MS(t)};function DS(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=ni.customElements.get(a);if(n!=null&&n.template)return n.template}}function xS(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function An(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var OS=Object.values(_),NS=Object.values(bi),PS=Object.values(R),lp=wE(),dp="mux-player",up={isDialogOpen:!1},US={redundant_streams:!0},xo,On,Oo,va,No,Nn,ml,pl,Ar,vl,fl,El,Pn,kr,_l,_e,gi,xE,Pu,ya,cp,hp,mp,pp,$S=class extends ap{constructor(){super(),Ie(this,_e),Ie(this,xo),Ie(this,On,!1),Ie(this,Oo,{}),Ie(this,va,!0),Ie(this,No,new tS(this,"hotkeys")),Ie(this,Nn),Ie(this,ml,()=>Ae(this,_e,ya).call(this)),Ie(this,pl,()=>Ae(this,_e,ya).call(this)),Ie(this,Ar,()=>Ae(this,_e,ya).call(this)),Ie(this,vl,t=>{t.composedPath().find(e=>{var i;return(i=e==null?void 0:e.hasAttribute)==null?void 0:i.call(e,"data-mux-reload")})&&(t.preventDefault(),window.location.reload())}),Ie(this,fl,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&Ae(this,_e,Pu).call(this,{isDialogOpen:!1})}),Ie(this,El,t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(kE(this,hl.activeElement)||t.preventDefault())}),Ie(this,Pn),Ie(this,kr,{...up}),Ie(this,_l,t=>{var e;let i=(e=this.media)==null?void 0:e.error;if(!(i instanceof M)){let{message:r,code:n}=i??{};i=new M(r,n)}if(!(i!=null&&i.fatal)){_i(i),i.data&&_i(`${i.name} data:`,i.data);return}let a=ME(i);a.message&&tp(a),et(i),i.data&&et(`${i.name} data:`,i.data),Ae(this,_e,Pu).call(this,{isDialogOpen:!0})}),it(this,xo,ic()),this.attachShadow({mode:"open"}),Ae(this,_e,xE).call(this),this.isConnected&&Ae(this,_e,gi).call(this)}static get NAME(){return dp}static get VERSION(){return lp}static get observedAttributes(){var t;return[...(t=ap.observedAttributes)!=null?t:[],...NS,...OS,...PS]}setAttribute(t,e){super.setAttribute(t,e),t.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}removeAttribute(t){super.removeAttribute(t),t.startsWith("metadata-")&&this.media&&(this.media.metadata=An(this))}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){Ae(this,_e,gi).call(this);let t=this.media;t&&(t.metadata=An(this))}disconnectedCallback(){var t,e,i,a,r,n,s,o,l,d;(t=B(this,Nn))==null||t.disconnect(),(e=this.media)==null||e.removeEventListener("streamtypechange",B(this,ml)),(i=this.media)==null||i.removeEventListener("loadstart",B(this,pl)),this.removeEventListener("error",B(this,_l)),this.removeEventListener("click",B(this,vl)),(a=this.mediaTheme)==null||a.removeEventListener("close",B(this,fl)),(r=this.mediaTheme)==null||r.removeEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=void 0),(s=(n=this.media)==null?void 0:n.textTracks)==null||s.removeEventListener("addtrack",B(this,Ar)),(l=(o=this.media)==null?void 0:o.textTracks)==null||l.removeEventListener("removetrack",B(this,Ar)),(d=B(this,Pn))==null||d.call(this),it(this,Pn,void 0),it(this,On,!1)}attributeChangedCallback(t,e,i){switch(Ae(this,_e,gi).call(this),super.attributeChangedCallback(t,e,i),t){case R.HOTKEYS:B(this,No).value=i;break;case R.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&_i(N("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case R.THUMBNAIL_TOKEN:{if(i){let a=vr(i);if(a){let{aud:r}=a,n=kn.THUMBNAIL;r!==n&&_i(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case R.STORYBOARD_TOKEN:{if(i){let a=vr(i);if(a){let{aud:r}=a,n=kn.STORYBOARD;r!==n&&_i(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case R.DRM_TOKEN:{if(i){let a=vr(i);if(a){let{aud:r}=a,n=kn.DRM;r!==n&&_i(N("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case _.PLAYBACK_ID:{i!=null&&i.includes("?token")&&et(N("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case _.STREAM_TYPE:{i&&![ie.LIVE,ie.ON_DEMAND,ie.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:tp({file:"invalid-stream-type.md",message:N("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===ie.LIVE?this.getAttribute(R.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case R.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=hl.getElementById(i),r=a==null?void 0:a.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}case _.CAP_RENDITION_TO_PLAYER_SIZE:{(i==null||i!==e)&&(this.capRenditionToPlayerSize=i!=null?!0:void 0);break}case _.MAX_RECONNECT_RETRIES:{(i==null||i!==e)&&(this.maxReconnectRetries=Number(i));break}}[_.PLAYBACK_ID,bi.SRC,R.PLAYBACK_TOKEN].includes(t)&&e!==i&&it(this,kr,{...B(this,kr),...up}),Ae(this,_e,ya).call(this,{[eS(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(m.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new ni.CustomEvent(x.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(ui.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(m.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new ni.CustomEvent(x.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(ui.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(_.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?Ho.includes(t)?this.setAttribute(_.PREFER_CMCD,t):_i(`Invalid value for preferCmcd. Must be one of ${Ho.join()}`):this.removeAttribute(_.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(m.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(m.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(R.THEME))!=null?t:CS}set theme(t){this.setAttribute(R.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(Nu.includes(i))continue;let a=t.getAttribute(i);e[TE(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;Ae(this,_e,gi).call(this);let a={...this.themeProps,...t};for(let r in a){if(Nu.includes(r))continue;let n=t==null?void 0:t[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(xu(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(xu(r),n)}}get playbackId(){var t;return(t=this.getAttribute(_.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(_.PLAYBACK_ID,t):this.removeAttribute(_.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=qt(this,bi.SRC))!=null?t:void 0:(e=this.getAttribute(bi.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(bi.SRC,t):this.removeAttribute(bi.SRC)}get poster(){var t;let e=this.getAttribute(bi.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){_i("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return Zk(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(bi.POSTER,t):this.removeAttribute(bi.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(R.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(R.STORYBOARD_SRC,t):this.removeAttribute(R.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[ie.LIVE,ie.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return Xk(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(R.AUDIO)}set audio(t){if(!t){this.removeAttribute(R.AUDIO);return}this.setAttribute(R.AUDIO,"")}get hotkeys(){return B(this,No)}get nohotkeys(){return this.hasAttribute(R.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(R.NOHOTKEYS);return}this.setAttribute(R.NOHOTKEYS,"")}get thumbnailTime(){return Ge(this.getAttribute(R.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(R.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(R.VIDEO_TITLE))!=null?t:this.getAttribute(R.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(R.VIDEO_TITLE,t):this.removeAttribute(R.VIDEO_TITLE))}get placeholder(){var t;return(t=qt(this,R.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(R.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(R.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ni.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(R.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(R.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ni.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(R.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(R.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=ni.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(R.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(R.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(R.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(R.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(R.PLAYBACK_RATES))return this.getAttribute(R.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(R.PLAYBACK_RATES);return}this.setAttribute(R.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Ge(this.getAttribute(R.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(R.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Ge(this.getAttribute(R.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(R.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(R.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(R.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(R.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ge(this.getAttribute(R.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(R.DEFAULT_DURATION):this.setAttribute(R.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(_.PLAYER_INIT_TIME)?Ge(this.getAttribute(_.PLAYER_INIT_TIME)):B(this,xo)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(_.PLAYER_INIT_TIME):this.setAttribute(_.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(_.PLAYER_SOFTWARE_NAME))!=null?t:dp}get playerSoftwareVersion(){var t;return(t=this.getAttribute(_.PLAYER_SOFTWARE_VERSION))!=null?t:lp}get beaconCollectionDomain(){var t;return(t=this.getAttribute(_.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(_.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(_.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(_.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(_.MAX_RESOLUTION,t):this.removeAttribute(_.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(_.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(_.MIN_RESOLUTION,t):this.removeAttribute(_.MIN_RESOLUTION))}get maxAutoResolution(){var t;return(t=this.getAttribute(_.MAX_AUTO_RESOLUTION))!=null?t:void 0}set maxAutoResolution(t){t==null?this.removeAttribute(_.MAX_AUTO_RESOLUTION):this.setAttribute(_.MAX_AUTO_RESOLUTION,t)}get renditionOrder(){var t;return(t=this.getAttribute(_.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(_.RENDITION_ORDER,t):this.removeAttribute(_.RENDITION_ORDER))}get programStartTime(){return Ge(this.getAttribute(_.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(_.PROGRAM_START_TIME):this.setAttribute(_.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Ge(this.getAttribute(_.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(_.PROGRAM_END_TIME):this.setAttribute(_.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Ge(this.getAttribute(_.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(_.ASSET_START_TIME):this.setAttribute(_.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Ge(this.getAttribute(_.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(_.ASSET_END_TIME):this.setAttribute(_.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(R.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(R.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):US}set extraSourceParams(t){t==null?this.removeAttribute(R.EXTRA_SOURCE_PARAMS):this.setAttribute(R.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(_.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(_.CUSTOM_DOMAIN,t):this.removeAttribute(_.CUSTOM_DOMAIN))}get envKey(){var t;return(t=qt(this,_.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(_.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(R.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(R.NO_VOLUME_PREF,""):this.removeAttribute(R.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(R.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(R.NO_MUTED_PREF,""):this.removeAttribute(R.NO_MUTED_PREF)}get debug(){return qt(this,_.DEBUG)!=null}set debug(t){t?this.setAttribute(_.DEBUG,""):this.removeAttribute(_.DEBUG)}get disableTracking(){return qt(this,_.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(_.DISABLE_TRACKING,!!t)}get disableCookies(){return qt(this,_.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(_.DISABLE_COOKIES,""):this.removeAttribute(_.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(_.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:ie.UNKNOWN}set streamType(t){this.setAttribute(_.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(R.DEFAULT_STREAM_TYPE))!=null?i:ie.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(R.DEFAULT_STREAM_TYPE,t):this.removeAttribute(R.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(R.TARGET_LIVE_WINDOW)?+this.getAttribute(R.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(R.TARGET_LIVE_WINDOW):this.setAttribute(R.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Ge(qt(this,_.START_TIME))}set startTime(t){this.setAttribute(_.START_TIME,`${t}`)}get initialBandwidthEstimateKbps(){return Ge(qt(this,_.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(t){t==null?this.removeAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(_.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${t}`)}get initialEstimateSegments(){return Ge(qt(this,_.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(t){t==null?this.removeAttribute(_.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(_.INITIAL_ESTIMATE_SEGMENTS,`${t}`)}get minPreloadSegments(){return Ge(qt(this,_.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(t){t==null?this.removeAttribute(_.MIN_PRELOAD_SEGMENTS):this.setAttribute(_.MIN_PRELOAD_SEGMENTS,`${t}`)}get preferPlayback(){let t=this.getAttribute(_.PREFER_PLAYBACK);if(t===si.MSE||t===si.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===si.MSE||t===si.NATIVE?this.setAttribute(_.PREFER_PLAYBACK,t):this.removeAttribute(_.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(Ae(this,_e,gi).call(this),!this.media){et("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...An(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(Ae(this,_e,gi).call(this),!this.media){et("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(Ae(this,_e,gi).call(this),!this.media){et("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(Ae(this,_e,gi).call(this),!this.media){et("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(R.PLAYBACK_TOKEN),e=this.getAttribute(R.DRM_TOKEN),i=this.getAttribute(R.THUMBNAIL_TOKEN),a=this.getAttribute(R.STORYBOARD_TOKEN);return{...B(this,Oo),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){it(this,Oo,t??{})}get playbackToken(){var t;return(t=this.getAttribute(R.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(R.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(R.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(R.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(R.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(R.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(R.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(R.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Qu(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return E0(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(R.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(R.CAST_RECEIVER,t):this.removeAttribute(R.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){et("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(R.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(R.NO_TOOLTIPS);return}this.setAttribute(R.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(R.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(R.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(R.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var t;return(t=this.media)==null?void 0:t.capRenditionToPlayerSize}set capRenditionToPlayerSize(t){if(!this.media){et("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=t}get maxReconnectRetries(){var t;return(t=this.media)==null?void 0:t.maxReconnectRetries}set maxReconnectRetries(t){if(!this.media){et("underlying media element missing when trying to set maxReconnectRetries");return}this.media.maxReconnectRetries=t}};xo=new WeakMap,On=new WeakMap,Oo=new WeakMap,va=new WeakMap,No=new WeakMap,Nn=new WeakMap,ml=new WeakMap,pl=new WeakMap,Ar=new WeakMap,vl=new WeakMap,fl=new WeakMap,El=new WeakMap,Pn=new WeakMap,kr=new WeakMap,_l=new WeakMap,_e=new WeakSet,gi=function(){var t,e,i,a;if(!B(this,On)){it(this,On,!0),Ae(this,_e,ya).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof ni.HTMLElement))throw""}catch{et("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{et("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof lT))throw""}catch{et("<media-controller> failed to upgrade!")}Ae(this,_e,cp).call(this),Ae(this,_e,hp).call(this),Ae(this,_e,mp).call(this),it(this,va,(e=(t=this.mediaController)==null?void 0:t.hasAttribute($.USER_INACTIVE))!=null?e:!0),Ae(this,_e,pp).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",B(this,ml)),(a=this.media)==null||a.addEventListener("loadstart",B(this,pl)),this.media&&(this.media.metadata=An(this))}},xE=function(){var t,e;try{(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Pu=function(t){Object.assign(B(this,kr),t),Ae(this,_e,ya).call(this)},ya=function(t={}){ES(bS(LS(this,{...B(this,kr),...t})),this.shadowRoot)},cp=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(Nu.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};it(this,Nn,new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)})),B(this,Nn).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},hp=function(){var t,e;this.addEventListener("error",B(this,_l)),this.addEventListener("click",B(this,vl)),(t=this.mediaTheme)==null||t.addEventListener("close",B(this,fl)),(e=this.mediaTheme)==null||e.addEventListener("focusin",B(this,El)),this.media&&(this.media.errorTranslator=(i={})=>{var a,r,n;if(!(((a=this.media)==null?void 0:a.error)instanceof M))return i;let s=ME((r=this.media)==null?void 0:r.error);return{player_error_code:(n=this.media)==null?void 0:n.error.code,player_error_message:s.message?String(s.message):i.player_error_message,player_error_context:s.context?String(s.context):i.player_error_context}})},mp=function(){var t,e,i,a;(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",B(this,Ar)),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",B(this,Ar))},pp=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===ie.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(d,p,h=!1)=>{r()||Array.from(d&&d.activeCues||[]).forEach(u=>{if(!(!u.snapToLines||u.line<-5||u.line>=0&&u.line<10))if(!p||this.paused){let c=u.text.split(`
`).length,f=-3;this.streamType===ie.LIVE&&(f=-2);let b=f-c;if(u.line===b&&!h)return;a.has(u)||a.set(u,u.line),u.line=b}else setTimeout(()=>{u.line=a.get(u)||"auto"},500)})},s=()=>{var d,p;n(i,(p=(d=this.mediaController)==null?void 0:d.hasAttribute($.USER_INACTIVE))!=null?p:!1)},o=()=>{var d,p;let h=Array.from(((p=(d=this.mediaController)==null?void 0:d.media)==null?void 0:p.textTracks)||[]).filter(u=>["subtitles","captions"].includes(u.kind)&&u.mode==="showing")[0];h!==i&&(i==null||i.removeEventListener("cuechange",s)),i=h,i==null||i.addEventListener("cuechange",s),n(i,B(this,va))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o);let l=()=>{var d,p;let h=(p=(d=this.mediaController)==null?void 0:d.hasAttribute($.USER_INACTIVE))!=null?p:!0;B(this,va)!==h&&(it(this,va,h),n(i,B(this,va)))};this.addEventListener("userinactivechange",l),it(this,Pn,()=>{var d,p;i==null||i.removeEventListener("cuechange",s),(d=this.textTracks)==null||d.removeEventListener("change",o),(p=this.textTracks)==null||p.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};function qt(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var vp=$S,OE=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends OE{}globalThis.DocumentFragment=t}var HS=class extends OE{},BS={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(HS)}},WS={customElements:BS},FS=typeof window>"u"||typeof globalThis.customElements>"u",cd=FS?WS:globalThis;cd.customElements.get("mux-player")||(cd.customElements.define("mux-player",vp),cd.MuxPlayerElement=vp);var NE=parseInt(Un.version)>=19,fp={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},KS=t=>t==null,VS=(t,e)=>KS(e)?!1:t in e,qS=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),YS=(t,e)=>{if(!(!NE&&typeof e=="boolean"&&!e)){if(VS(t,fp))return fp[t];if(typeof e<"u")return/[A-Z]/.test(t)?qS(t):t}},GS=(t,e)=>!NE&&typeof t=="boolean"?"":t,jS=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=YS(r,n);if(!s)return a;let o=GS(n);return a[s]=o,a},{})};function Ep(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function zS(...t){return e=>{let i=!1,a=t.map(r=>{let n=Ep(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Ep(t[r],null)}}}}function QS(...t){return $n.useCallback(zS(...t),t)}var ZS=Object.prototype.hasOwnProperty,XS=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!ZS.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},PE=(t,e,i)=>!XS(e,t[i]),JS=(t,e,i)=>{t[i]=e},ew=(t,e,i,a=JS,r=PE)=>$n.useEffect(()=>{let n=i==null?void 0:i.current;n&&r(n,e,t)&&a(n,e,t)},[i==null?void 0:i.current,e]),Rt=ew,tw=()=>{try{return"3.14.1"}catch{}return"UNKNOWN"},iw=tw(),aw=()=>iw,pe=(t,e,i)=>$n.useEffect(()=>{let a=e==null?void 0:e.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e==null?void 0:e.current,i,t]),rw=Un.forwardRef(({children:t,...e},i)=>Un.createElement("mux-player",{suppressHydrationWarning:!0,...jS(e),ref:i},t)),nw=(t,e)=>{var i;let{onAbort:a,onCanPlay:r,onCanPlayThrough:n,onEmptied:s,onLoadStart:o,onLoadedData:l,onLoadedMetadata:d,onProgress:p,onDurationChange:h,onVolumeChange:u,onRateChange:c,onResize:f,onWaiting:b,onPlay:E,onPlaying:T,onTimeUpdate:v,onPause:y,onSeeking:w,onSeeked:k,onStalled:L,onSuspend:I,onEnded:U,onError:Y,onCuePointChange:W,onChapterChange:F,metadata:de,tokens:ue,paused:Ke,playbackId:st,playbackRates:ot,currentTime:Ce,themeProps:Le,extraSourceParams:St,castCustomData:lt,_hlsConfig:Ne,...ci}=e;return Rt("tokens",ue,t),Rt("playbackId",st,t),Rt("playbackRates",ot,t),Rt("metadata",de,t),Rt("disableCookies",(i=e.disableCookies)!=null?i:!1,t),Rt("extraSourceParams",St,t),Rt("_hlsConfig",Ne,t),Rt("themeProps",Le,t),Rt("castCustomData",lt,t),Rt("paused",Ke,t,(Ve,je)=>{je!=null&&(je?Ve.pause():Ve.play())},(Ve,je,hi)=>Ve.hasAttribute("autoplay")&&!Ve.hasPlayed?!1:PE(Ve,je,hi)),Rt("currentTime",Ce,t,(Ve,je)=>{je!=null&&(Ve.currentTime=je)}),pe("abort",t,a),pe("canplay",t,r),pe("canplaythrough",t,n),pe("emptied",t,s),pe("loadstart",t,o),pe("loadeddata",t,l),pe("loadedmetadata",t,d),pe("progress",t,p),pe("durationchange",t,h),pe("volumechange",t,u),pe("ratechange",t,c),pe("resize",t,f),pe("waiting",t,b),pe("play",t,E),pe("playing",t,T),pe("timeupdate",t,v),pe("pause",t,y),pe("seeking",t,w),pe("seeked",t,k),pe("stalled",t,L),pe("suspend",t,I),pe("ended",t,U),pe("error",t,Y),pe("cuepointchange",t,W),pe("chapterchange",t,F),[ci]},sw=aw(),ow="mux-player-react",lw=Un.forwardRef((t,e)=>{var i;let a=$n.useRef(null),r=QS(a,e),[n]=nw(a,t),[s]=$n.useState((i=t.playerInitTime)!=null?i:ic());return Un.createElement(rw,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:ow,playerSoftwareVersion:sw,playerInitTime:s,...n})}),Cw=lw;export{vw as MaxResolution,M as MediaError,fw as MinResolution,Ew as RenditionOrder,Cw as default,ic as generatePlayerInitTime,ow as playerSoftwareName,sw as playerSoftwareVersion};
