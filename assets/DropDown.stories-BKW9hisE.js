import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{D as n}from"./DropDown-DRSZw-i4.js";import{B as h}from"./Button-DPTI0u98.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-ZcFOsVdi.js";import"./Icon-CS9Mqat_.js";import"./optionClasses-C1xmOtGn.js";import"./useLinkContext-CZLCmVqQ.js";import"./popover-DDyjg4ay.js";import"./use-root-containers-D3GjGQxH.js";import"./transition-N1W5q1s7.js";import"./index-BOkhicXD.js";const i=[{href:"/profile",title:"Profile"},{title:"Settings",onClick:()=>alert("Dropdown for settings has been clicked ")},{href:"/signout",title:"Sign out "}],C={title:"Deprecated/DropDown",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};e.args={text:"Dropdown"};const t={render:r=>s.jsx(n,{...r,listItems:i,hasBorder:!0,children:r.children})};t.args={text:"Outline Dropdown"};const o={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};o.args={children:s.jsx(h,{title:"Dropdown Button"})};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <DropDown {...args} listItems={listItems}>
      {args.children}
    </DropDown>
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DropDown {...args} listItems={listItems} hasBorder>
      {args.children}
    </DropDown>
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var D,u,g;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <DropDown {...args} listItems={listItems}>
      {args.children}
    </DropDown>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const F=["Default","Outline","ButtonDropdown"];export{o as ButtonDropdown,e as Default,t as Outline,F as __namedExportsOrder,C as default};
