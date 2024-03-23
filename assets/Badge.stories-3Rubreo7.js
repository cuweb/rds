import{j as e}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const r=({children:u,color:p="grey",noWordBreak:i=!1})=>{const m=i?"whitespace-nowrap":"";let a;switch(p){case"green":a="bg-green-50 text-green-800";break;case"red":a="bg-red-50 text-red-800";break;case"yellow":a="bg-yellow-50 text-yellow-800";break;case"blue":a="bg-blue-50 text-blue-800";break;case"purple":a="bg-purple-50 text-purple-800";break;default:a="bg-cu-black-50 text-cu-black-800";break}return e.jsx("p",{className:`inline-flex px-3 py-1 mr-2 text-xs font-semibold cu-badge not-prose rounded-full last:mr-0 ${a} ${m}`,children:u})};r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"union",raw:"'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'grey'",computed:!1}},noWordBreak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},l={args:{children:"Badge Example",color:"grey",noWordBreak:!1}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"green",children:"Green Badge"}),e.jsx(r,{color:"red",children:"Red Badge"}),e.jsx(r,{color:"yellow",children:"Yellow Badge"}),e.jsx(r,{color:"blue",children:"Blue Badge"}),e.jsx(r,{color:"purple",children:"Purple Badge"}),e.jsx(r,{color:"grey",children:"Grey Badge"})]})};var d,s,t;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Badge Example',
    color: 'grey',
    noWordBreak: false
  }
}`,...(t=(s=l.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,c,g;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <Badge color="green">Green Badge</Badge>
      <Badge color="red">Red Badge</Badge>
      <Badge color="yellow">Yellow Badge</Badge>
      <Badge color="blue">Blue Badge</Badge>
      <Badge color="purple">Purple Badge</Badge>
      <Badge color="grey">Grey Badge</Badge>
    </>
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const f=["Default","MultiColors"];export{l as Default,o as MultiColors,f as __namedExportsOrder,y as default};
