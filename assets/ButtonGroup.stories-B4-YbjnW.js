import{j as t}from"./jsx-runtime-BCpRbbnP.js";import{B as n}from"./ButtonGroup-BsPBKN7t.js";import{B as o}from"./Button-DGBLLvAz.js";import{M as c}from"./Main-Bayr7No4.js";import"./iframe-DjN94EKf.js";import"./preload-helper-Dp1pzeXC.js";import"./propClasses-CJUCiil5.js";import"./Icon-5Ajs_gWr.js";const h={title:"Components/Button Group",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},r={args:{gap:"5",align:"start"},render:s=>t.jsx(c,{children:t.jsxs(n,{...s,children:[t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Primary Red"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Dark Grey",color:"dark-grey"}),t.jsx(o,{onClick:()=>{alert("You clicked the button")},title:"Light Grey",color:"grey"})]})})};var e,a,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["Primary"];export{r as Primary,B as __namedExportsOrder,h as default};
