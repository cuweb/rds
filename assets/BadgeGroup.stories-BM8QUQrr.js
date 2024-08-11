import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as o}from"./Badge-CWg_qOxM.js";import{g as x}from"./propClasses-CbluzEXK.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";const B=(t,s,a,l)=>{const r={};return t!==void 0&&(r.top=`${t}px`),s!==void 0&&(r.right=`${s}px`),a!==void 0&&(r.bottom=`${a}px`),l!==void 0&&(r.left=`${l}px`),r},i=({children:t,gap:s="2",isAbsolute:a=!1,top:l=0,right:r,bottom:c,left:m=0})=>{const g=a?"absolute":"",f=a?B(l,r,c,m):{};return e.jsx("div",{className:`cu-badgegroup cu-component flex flex-wrap md:flex-1 ${g} ${x[s]}`,style:f,children:t})};i.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"union",raw:"keyof typeof gridGapClasses",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'2'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'2'",computed:!1}},isAbsolute:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},top:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},right:{required:!1,tsType:{name:"number"},description:""},bottom:{required:!1,tsType:{name:"number"},description:""},left:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const w={title:"Components/Badge Group",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d={args:{gap:"2",isAbsolute:!1,top:0,right:0,bottom:0,left:0},render:t=>e.jsxs(i,{...t,children:[e.jsx(o,{text:"Grey Badge",color:"grey"}),e.jsx(o,{text:"Green Badge",color:"green"}),e.jsx(o,{text:"Red Badge",color:"red"}),e.jsx(o,{text:"Yellow Badge",color:"yellow"}),e.jsx(o,{text:"Blue Badge",color:"blue"}),e.jsx(o,{text:"Purple Badge",color:"purple"})]})};var p,u,n;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    gap: '2',
    isAbsolute: false,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  render: args => {
    return <BadgeGroup {...args}>
        <Badge text="Grey Badge" color="grey" />
        <Badge text="Green Badge" color="green" />
        <Badge text="Red Badge" color="red" />
        <Badge text="Yellow Badge" color="yellow" />
        <Badge text="Blue Badge" color="blue" />
        <Badge text="Purple Badge" color="purple" />
      </BadgeGroup>;
  }
}`,...(n=(u=d.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};const R=["Primary"];export{d as Primary,R as __namedExportsOrder,w as default};
