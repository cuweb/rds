import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as r}from"./Badge-BH9olHWM.js";import{g as c}from"./propClasses-BCnilxRx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const d=({children:o,gap:g="2"})=>e.jsx("div",{className:`cu-badgegroup cu-component flex flex-wrap md:flex-1 ${c[g]}`,children:o});d.__docgenInfo={description:"",methods:[],displayName:"BadgeGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},gap:{required:!1,tsType:{name:"union",raw:"keyof typeof gridGapClasses",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'2'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'2'",computed:!1}}}};const B={title:"Components/Badge Group",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={args:{gap:"2"},render:o=>e.jsxs(d,{...o,children:[e.jsx(r,{color:"grey",children:"Grey Badge"}),e.jsx(r,{color:"green",children:"Green Badge"}),e.jsx(r,{color:"red",children:"Red Badge"}),e.jsx(r,{color:"yellow",children:"Yellow Badge"}),e.jsx(r,{color:"blue",children:"Blue Badge"}),e.jsx(r,{color:"purple",children:"Purple Badge"})]})};var l,s,t;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    gap: '2'
  },
  render: args => {
    return <BadgeGroup {...args}>
        <Badge color="grey">Grey Badge</Badge>
        <Badge color="green">Green Badge</Badge>
        <Badge color="red">Red Badge</Badge>
        <Badge color="yellow">Yellow Badge</Badge>
        <Badge color="blue">Blue Badge</Badge>
        <Badge color="purple">Purple Badge</Badge>
      </BadgeGroup>;
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const x=["Primary"];export{a as Primary,x as __namedExportsOrder,B as default};
