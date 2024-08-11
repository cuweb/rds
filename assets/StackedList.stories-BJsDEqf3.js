import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{M as p}from"./Main-D47U7TOX.js";import{S as d}from"./Section-JfbkAvfr.js";import{S as c}from"./StackedList-BTTFm2es.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-CbluzEXK.js";const T={title:"Layouts/StackedList",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={};i.args={children:"Stacked list component",as:"ul",cols:"2",listType:"posts",maxWidth:"5xl"};const r={args:{...i.args},render:l=>s.jsx(p,{children:s.jsx(d,{children:s.jsxs(c,{...l,children:[s.jsx("li",{className:"p-6",children:"This is a list item"}),s.jsx("li",{className:"p-6",children:"This is a list item"}),s.jsx("li",{className:"p-6",children:"This is a list item"})]})})})};var t,e,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(e=i.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var o,n,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const N=["Primary","WithListItems"];export{i as Primary,r as WithListItems,N as __namedExportsOrder,T as default};
