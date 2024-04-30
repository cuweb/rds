import{j as s}from"./jsx-runtime-CKrituN3.js";import{D as n}from"./DropDown-IrLwK0RM.js";import{B as h}from"./Button-BgXB67LW.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-CBYqtwAX.js";import"./Icon-DOs3VExa.js";import"./optionClasses-D-XbMsDd.js";import"./useLinkContext-Ch0lwH8X.js";import"./popover-CSDbDXUQ.js";import"./use-root-containers-kr68Shp_.js";import"./transition-Dz28ezoH.js";import"./index-Cr93UcJR.js";import"./use-resolve-button-type-BHDntMkD.js";const i=[{href:"/profile",title:"Profile"},{title:"Settings",onClick:()=>alert("Dropdown for settings has been clicked ")},{href:"/signout",title:"Sign out "}],F={title:"Deprecated/DropDown",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};e.args={text:"Dropdown"};const t={render:r=>s.jsx(n,{...r,listItems:i,hasBorder:!0,children:r.children})};t.args={text:"Outline Dropdown"};const o={render:r=>s.jsx(n,{...r,listItems:i,children:r.children})};o.args={children:s.jsx(h,{title:"Dropdown Button"})};var a,p,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const P=["Default","Outline","ButtonDropdown"];export{o as ButtonDropdown,e as Default,t as Outline,P as __namedExportsOrder,F as default};
