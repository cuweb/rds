import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{M as p}from"./Main-BJPC97L3.js";import{S as d}from"./Section-tPQgJeD2.js";import{S as m}from"./StackedList-BYXG9-5u.js";import"./index-C9rmetsa.js";import"./propClasses-BYrQ2lXe.js";const L={title:"Layouts/StackedList",component:m,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={};i.args={children:"Stacked list component",as:"ul",cols:"2",listType:"posts",maxWidth:"5xl"};const r={args:{...i.args},render:l=>s.jsx(p,{children:s.jsx(d,{children:s.jsxs(m,{...l,children:[s.jsx("li",{className:"p-6",children:"This is a list item"}),s.jsx("li",{className:"p-6",children:"This is a list item"}),s.jsx("li",{className:"p-6",children:"This is a list item"})]})})})};var e,t,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(a=(t=i.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    return <Main>
        <Section>
          <StackedList {...args}>
            <li className="p-6">This is a list item</li>
            <li className="p-6">This is a list item</li>
            <li className="p-6">This is a list item</li>
          </StackedList>
        </Section>
      </Main>;
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const T=["Primary","WithListItems"];export{i as Primary,r as WithListItems,T as __namedExportsOrder,L as default};
