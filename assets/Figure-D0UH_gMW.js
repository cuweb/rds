import{j as e}from"./jsx-runtime-B9B14buI.js";import{r as t}from"./index-DxDX2vOa.js";import{R as m}from"./index-n2hssDse.js";import{f as p,b as f,d as g}from"./propClasses-DiIY1iW4.js";const n={container:"relative pt-[56.25%] bg-cu-black-900"},s=({source:l})=>{const[a,i]=t.useState(!1);return t.useEffect(()=>{i(!0)},[]),a?e.jsx("div",{className:n.container,children:e.jsx(m,{url:l,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0})}):e.jsx("div",{className:n.container,children:e.jsx("p",{className:"hidden",children:"Loading video"})})};s.displayName="Figure.Video";s.__docgenInfo={description:"",methods:[],displayName:"Figure.Video",props:{source:{required:!0,tsType:{name:"string"},description:""}}};const r=({children:l,caption:a,noMobile:i,size:o="full",align:u="none",rounded:d="none"})=>{const c=i?"hidden md:block":"block";return e.jsx("figure",{className:`cu-figure cu-component ${c}`,children:e.jsxs("div",{className:`not-prose overflow-hidden bg-white shadow-lg w-full ${p[o]} ${f[d]} ${g[u]}`,children:[l,a&&e.jsx("figcaption",{className:"px-5 py-4 text-base italic text-cu-black-700",children:a})]})})},x=Object.assign(r,{Video:s});r.displayName="Figure";r.__docgenInfo={description:"",methods:[],displayName:"Figure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof figureSizeClasses",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'full'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"keyof typeof figureAlignClasses",elements:[{name:"literal",value:"left"},{name:"literal",value:"right"},{name:"literal",value:"center"},{name:"literal",value:"none"}]},description:"",defaultValue:{value:"'none'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"keyof typeof borderRadiusClasses",elements:[{name:"literal",value:"none"},{name:"literal",value:"sm"},{name:"literal",value:"base"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'none'",computed:!1}},noMobile:{required:!1,tsType:{name:"boolean"},description:""}}};export{x as F};
