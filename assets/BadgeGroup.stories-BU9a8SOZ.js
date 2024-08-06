import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as r}from"./Badge-i49i-v5I.js";import{g}from"./propClasses-BCnilxRx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";const t=({children:o,gap:p="2"})=>e.jsx("div",{className:`cu-badgegroup cu-component flex flex-wrap md:flex-1 ${g[p]}`,children:o});t.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"union",raw:"keyof typeof gridGapClasses",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'2'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'2'",computed:!1}}}};const B={title:"Components/Badge Group",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={args:{gap:"2"},render:o=>e.jsxs(t,{...o,children:[e.jsx(r,{text:"Grey Badge",color:"grey"}),e.jsx(r,{text:"Green Badge",color:"green"}),e.jsx(r,{text:"Red Badge",color:"red"}),e.jsx(r,{text:"Yellow Badge",color:"yellow"}),e.jsx(r,{text:"Blue Badge",color:"blue"}),e.jsx(r,{text:"Purple Badge",color:"purple"})]})};var l,s,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    gap: '2'
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
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Primary"];export{a as Primary,f as __namedExportsOrder,B as default};
