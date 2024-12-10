import{j as t}from"./jsx-runtime-B9B14buI.js";import{B as n}from"./ButtonGroup-C4GoXbWj.js";import{B as o}from"./Button-BR2m1Fdu.js";import{S as c}from"./Section-4kh7xz3r.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-BhZSwrl0.js";import"./Icon-CH-bQ53q.js";const h={title:"Components/ButtonGroup",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},r={args:{gap:"2",align:"start"},render:s=>t.jsx(c,{children:t.jsxs(n,{...s,children:[t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Primary Red"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Dark Grey",color:"dark-grey"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Light Grey",color:"grey"})]})})};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    gap: '2',
    align: 'start'
  },
  render: args => {
    return <Section>
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
      </Section>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["Primary"];export{r as Primary,B as __namedExportsOrder,h as default};
