import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./Details-CZlq_0Ds.js";import{M as n}from"./Main-DrtR39EU.js";const c={title:"Components/Details",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{as:"ul",hasDividers:!1},render:o=>e.jsx(n,{children:e.jsxs(s,{...o,children:[e.jsx(s.Item,{isBold:!0,children:"Hybrid Event"}),e.jsx(s.Item,{children:"Raven's Nest, 1125 Colonel By Drive"}),e.jsx(s.Item,{children:e.jsx("a",{href:"/",children:"Teams meeting link"})}),e.jsxs(s.Item,{iconName:"cat",children:[e.jsx("strong",{children:"Cost:"})," $20 per adult, $15 for youth/senior"]})]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    as: 'ul',
    hasDividers: false
  },
  render: args => {
    return <Main>
        <Details {...args}>
          <Details.Item isBold>Hybrid Event</Details.Item>
          <Details.Item>Raven's Nest, 1125 Colonel By Drive</Details.Item>
          <Details.Item>
            <a href="/">Teams meeting link</a>
          </Details.Item>
          <Details.Item iconName="cat">
            <strong>Cost:</strong> $20 per adult, $15 for youth/senior
          </Details.Item>
        </Details>
      </Main>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const D=["Primary"];export{r as Primary,D as __namedExportsOrder,c as default};
