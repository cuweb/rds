import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{B as p}from"./Button-CQG8OKj_.js";import{B as j}from"./ButtonGroup-DcsTpBqd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-B6CsUj99.js";import"./propClasses-BCnilxRx.js";const u=({children:i,title:o,description:r,isOpen:l,setIsOpen:g})=>{const n=a.useRef(null);a.useEffect(()=>{var e,s,d,f;(e=n.current)!=null&&e.open&&!l?(s=n.current)==null||s.close():!((d=n.current)!=null&&d.open)&&l&&((f=n.current)==null||f.showModal())},[l]),a.useEffect(()=>(l?document.body.classList.add("cu-no-body-scroll"):document.body.classList.remove("cu-no-body-scroll"),()=>{document.body.classList.remove("cu-no-body-scroll")}),[l]),a.useEffect(()=>{const e=n.current,s=d=>{d.preventDefault()};return e==null||e.addEventListener("cancel",s),e==null||e.addEventListener("close",s),()=>{e==null||e.removeEventListener("cancel",s),e==null||e.removeEventListener("close",s)}},[]);const h=e=>{e.target===n.current&&g(!0)};return t.jsxs("dialog",{ref:n,className:"cu-dialog z-10 not-prose w-11/12 md:w-full md:min-w-96 md:max-w-md shadow-md rounded-md p-3.5 m-auto",onClick:h,"aria-labelledby":o,"aria-describedby":r,children:[t.jsxs("div",{className:"p-3",children:[t.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900 mb-3",children:o}),r&&t.jsx("p",{className:"text-sm text-gray-500 mb-3",children:r})]}),t.jsxs(j,{align:"end",gap:"5",children:[i,t.jsx(p,{onClick:()=>{g(!1)},title:"Close",isSmall:!0,color:"grey"})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""}}};const N={title:"Components/Dialog",component:u,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},c={args:{title:"Click to Open Dialog",description:"Description inside the dialog box"},render:i=>{const[o,r]=a.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{id:"modalButton",title:"Click to Open Dialog",onClick:()=>r(!0)}),t.jsx(u,{...i,isOpen:o,setIsOpen:r})]})}},m={args:{...c.args},render:i=>{const[o,r]=a.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{id:"modalButton",title:"Click to Open Dialog",onClick:()=>r(!0)}),t.jsx(u,{...i,isOpen:o,setIsOpen:r,children:t.jsx(p,{title:"Confirm",isSmall:!0})})]})}};var D,O,x;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(O=c.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var y,C,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(C=m.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const R=["Primary","ConfirmButton"];export{m as ConfirmButton,c as Primary,R as __namedExportsOrder,N as default};
