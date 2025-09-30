import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{B as n}from"./ButtonGroup-Bw2xFjvQ.js";import{B as o}from"./Button-CSy-LHiX.js";import{M as c}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./propClasses-CJUCiil5.js";import"./Icon-BvNIr9Qc.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";const B={title:"Components/Button Group",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},r={args:{gap:"5",align:"start"},render:s=>t.jsx(c,{children:t.jsxs(n,{...s,children:[t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Primary Red"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Dark Grey",color:"dark-grey"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Light Grey",color:"grey"})]})})};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    gap: '5',
    align: 'start'
  },
  render: args => {
    return <Main>
        <ButtonGroup {...args}>
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Primary Red" />
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Dark Grey" color="dark-grey" />
          <Button onClick={() => {
          alert('You clicked the button');
        }} title="Light Grey" color="grey" />
        </ButtonGroup>
      </Main>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Primary"];export{r as Primary,x as __namedExportsOrder,B as default};
