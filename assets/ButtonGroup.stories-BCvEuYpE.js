import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{B as n}from"./ButtonGroup-DcsTpBqd.js";import{B as o}from"./Button-BZxQyZm9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-BCnilxRx.js";import"./Icon-B6CsUj99.js";const k={title:"Components/ButtonGroup",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},r={args:{gap:"2",align:"start"},render:s=>t.jsxs(n,{...s,children:[t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Primary Red"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Dark Grey",color:"dark-grey"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Light Grey",color:"grey"})]})};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    gap: '2',
    align: 'start'
  },
  render: args => {
    return <ButtonGroup {...args}>
        <Button onClick={() => {
        alert('You clicked the button');
      }} title="Primary Red" />
        <Button onClick={() => {
        alert('You clicked the button');
      }} title="Dark Grey" color="dark-grey" />
        <Button onClick={() => {
        alert('You clicked the button');
      }} title="Light Grey" color="grey" />
      </ButtonGroup>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Primary"];export{r as Primary,y as __namedExportsOrder,k as default};
