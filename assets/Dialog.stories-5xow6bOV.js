import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Button-CyTkV0p8.js";import{n as a,t as o}from"./Dialog-BhLa6YZy.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),a(),r(),s=t(),c=n(),l={title:`Components/Dialog`,component:o,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},u={args:{title:`Click to Open Dialog`,description:`Description inside the dialog box`},render:e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{id:`modalButton`,title:`Click to Open Dialog`,onClick:()=>n(!0)}),(0,c.jsx)(o,{...e,isOpen:t,setIsOpen:n})]})}},d={args:{...u.args},render:e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{id:`modalButton`,title:`Click to Open Dialog`,onClick:()=>n(!0)}),(0,c.jsx)(o,{...e,isOpen:t,setIsOpen:n,children:(0,c.jsx)(i,{title:`Confirm`,isSmall:!0})})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`ConfirmButton`]})))()}p();export{d as ConfirmButton,u as Primary,f as __namedExportsOrder,l as default};