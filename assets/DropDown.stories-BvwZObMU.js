import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{D as n}from"./DropDown-5ZxwNFut.js";import{B as h}from"./Button-D3PZeFyC.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-ZcFOsVdi.js";import"./Icon-Ducrj9hH.js";import"./optionClasses-BoR2qQUj.js";import"./useLinkContext-CZLCmVqQ.js";import"./popover-D5GXIzwP.js";import"./index-BOkhicXD.js";import"./transition-DRn1e8LJ.js";const a=[{href:"/profile",title:"Profile"},{title:"Settings",onClick:()=>alert("Dropdown for settings has been clicked ")},{href:"/signout",title:"Sign out "}],q={title:"Deprecated/DropDown",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:r=>s.jsx(n,{...r,listItems:a,children:r.children})};e.args={text:"Dropdown"};const t={render:r=>s.jsx(n,{...r,listItems:a,hasBorder:!0,children:r.children})};t.args={text:"Outline Dropdown"};const o={render:r=>s.jsx(n,{...r,listItems:a,children:r.children})};o.args={children:s.jsx(h,{title:"Dropdown Button"})};var i,p,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const C=["Default","Outline","ButtonDropdown"];export{o as ButtonDropdown,e as Default,t as Outline,C as __namedExportsOrder,q as default};
