import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{D as n}from"./DropDown-Bv-Vn74z.js";import{B as h}from"./Button-D5JFhw15.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-gc4pqSrO.js";import"./Icon-DDs_3nyd.js";import"./optionClasses-BoR2qQUj.js";import"./useLinkContext-Bz4KtVj9.js";import"./popover-BISsZrvB.js";import"./transition-C5k2oao0.js";import"./floating-ui.react-C6plbCxV.js";import"./index-B8XB3FuZ.js";const i=[{href:"/profile",title:"Profile"},{title:"Settings",onClick:()=>alert("Dropdown for settings has been clicked ")},{href:"/signout",title:"Sign out "}],C={title:"Deprecated/DropDown",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};e.args={text:"Dropdown"};const t={render:r=>s.jsx(n,{...r,listItems:i,hasBorder:!0,children:r.children})};t.args={text:"Outline Dropdown"};const o={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};o.args={children:s.jsx(h,{title:"Dropdown Button"})};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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