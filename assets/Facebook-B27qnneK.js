import{g as I}from"./_commonjsHelpers-BosuxZz1.js";import{r as w}from"./index-C9rmetsa.js";import{r as x,a as L}from"./Card-051xuptK.js";function M(p,o){for(var u=0;u<o.length;u++){const i=o[u];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in p)){const c=Object.getOwnPropertyDescriptor(i,n);c&&Object.defineProperty(p,n,c.get?c:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var h,v;function A(){if(v)return h;v=1;var p=Object.create,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,D=(r,e,t)=>e in r?o(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e)o(r,t,{get:e[t],enumerable:!0})},b=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of i(e))!c.call(r,s)&&s!==t&&o(r,s,{get:()=>e[s],enumerable:!(a=u(e,s))||a.enumerable});return r},k=(r,e,t)=>(t=r!=null?p(n(r)):{},b(!r||!r.__esModule?o(t,"default",{value:r,enumerable:!0}):t,r)),F=r=>b(o({},"__esModule",{value:!0}),r),l=(r,e,t)=>(D(r,typeof e!="symbol"?e+"":e,t),t),d={};E(d,{default:()=>y}),h=F(d);var _=k(w()),f=x(),S=L();const P="https://connect.facebook.net/en_US/sdk.js",g="FB",m="fbAsyncInit",j="facebook-player-";class y extends _.Component{constructor(){super(...arguments),l(this,"callPlayer",f.callPlayer),l(this,"playerID",this.props.config.playerId||`${j}${(0,f.randomString)()}`),l(this,"mute",()=>{this.callPlayer("mute")}),l(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){if(t){(0,f.getSDK)(P,g,m).then(a=>a.XFBML.parse());return}(0,f.getSDK)(P,g,m).then(a=>{a.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),a.Event.subscribe("xfbml.render",s=>{this.props.onLoaded()}),a.Event.subscribe("xfbml.ready",s=>{s.type==="video"&&s.id===this.playerID&&(this.player=s.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config,t={width:"100%",height:"100%"};return _.default.createElement("div",{style:t,id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}return l(y,"displayName","Facebook"),l(y,"canPlay",S.canPlay.facebook),l(y,"loopOnEnded",!0),h}var O=A();const B=I(O),C=M({__proto__:null,default:B},[O]);export{C as F};
