import{j as e}from"./jsx-runtime-B9B14buI.js";import{D as a}from"./Dialog-Dq_lkz6i.js";import{B as i}from"./Button-BR2m1Fdu.js";import{r as d}from"./index-DxDX2vOa.js";import"./ButtonGroup-C4GoXbWj.js";import"./propClasses-BhZSwrl0.js";import"./Icon-CH-bQ53q.js";import"./_commonjsHelpers-BosuxZz1.js";const S={title:"Components/Dialog",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={args:{title:"Click to Open Dialog",description:"Description inside the dialog box"},render:s=>{const[n,t]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"modalButton",title:"Click to Open Dialog",onClick:()=>t(!0)}),e.jsx(a,{...s,isOpen:n,setIsOpen:t})]})}},r={args:{...o.args},render:s=>{const[n,t]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"modalButton",title:"Click to Open Dialog",onClick:()=>t(!0)}),e.jsx(a,{...s,isOpen:n,setIsOpen:t,children:e.jsx(i,{title:"Confirm",isSmall:!0})})]})}};var l,p,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Click to Open Dialog',
    description: 'Description inside the dialog box'
  },
  render: args => {
    const [DialogOpen, setDialogOpen] = useState(false);
    return <>
        <Button id="modalButton" title="Click to Open Dialog" onClick={() => setDialogOpen(true)} />
        <Dialog {...args} isOpen={DialogOpen} setIsOpen={setDialogOpen} />
      </>;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    const [DialogOpen, setDialogOpen] = useState(false);
    return <>
        <Button id="modalButton" title="Click to Open Dialog" onClick={() => setDialogOpen(true)} />
        <Dialog {...args} isOpen={DialogOpen} setIsOpen={setDialogOpen}>
          <Button title="Confirm" isSmall />
        </Dialog>
      </>;
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const h=["Primary","ConfirmButton"];export{r as ConfirmButton,o as Primary,h as __namedExportsOrder,S as default};
