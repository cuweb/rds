const __vite__fileDeps=["./index-DSz_1G2r.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./iframe-BzhvZibi.js";import{R as t,r as p}from"./index-CBqU2yxZ.js";import{r as l,u}from"./react-18-D8cruF67.js";import{C as h,A as E,H as d,D as x}from"./index-BzF6_-Q_.js";var D={code:h,a:E,...d},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-DSz_1G2r.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};