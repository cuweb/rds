import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as t}from"./index-BwDkhjyp.js";import{R as p}from"./index-mRFE0sXG.js";import{f,b as g}from"./propClasses-BCnilxRx.js";const n={container:"relative pt-[56.25%] bg-cu-black-900"},l=({source:i})=>{const[a,s]=t.useState(!1);return t.useEffect(()=>{s(!0)},[]),a?e.jsx("div",{className:n.container,children:e.jsx(p,{url:i,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0})}):e.jsx("div",{className:n.container,children:e.jsx("p",{className:"hidden",children:"Loading video"})})};l.displayName="Figure.Video";l.__docgenInfo={description:"",methods:[],displayName:"Figure.Video",props:{source:{required:!0,tsType:{name:"string"},description:""}}};const r=({children:i,caption:a,isRound:s,noMobile:o,size:d="full",align:u="none"})=>{const c=s?"rounded-full":"rounded-lg",m=o?"hidden md:block":"block";return e.jsx("figure",{className:`cu-figure cu-component ${m}`,children:e.jsxs("div",{className:`not-prose overflow-hidden bg-white shadow-lg ${c} ${f[d]} ${g[u]}`,children:[i,a&&e.jsx("figcaption",{className:"px-5 py-4 text-base italic text-cu-black-700",children:a})]})})},b=Object.assign(r,{Video:l});r.displayName="Figure";r.__docgenInfo={description:"",methods:[],displayName:"Figure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof figureSizeClasses",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'full'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"keyof typeof figureAlignClasses",elements:[{name:"literal",value:"left"},{name:"literal",value:"right"},{name:"literal",value:"center"},{name:"literal",value:"none"}]},description:"",defaultValue:{value:"'none'",computed:!1}},isRound:{required:!1,tsType:{name:"boolean"},description:""},noMobile:{required:!1,tsType:{name:"boolean"},description:""}}};export{b as F};
