const __vite__fileDeps=["./index-CRbi4mQH.js","./index-uCp2LrAq.js","./_commonjsHelpers-BosuxZz1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./iframe-C0NDCRIY.js";import{R as t,r as p}from"./index-uCp2LrAq.js";import{r as l,u}from"./react-18-DAjhTQGP.js";import{C as h,A as E,H as d,D as x}from"./index-DIBd-lLC.js";var D={code:h,a:E,...d},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-CRbi4mQH.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};