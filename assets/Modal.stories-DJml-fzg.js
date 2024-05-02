import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{B as i}from"./Button-BgXB67LW.js";import{f as k}from"./optionClasses-D-XbMsDd.js";import{q as d}from"./transition-Dz28ezoH.js";import{_ as p}from"./dialog-DfwZEzHn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-DOs3VExa.js";import"./use-root-containers-BTVk_dtv.js";import"./index-BtM5VmRH.js";const r=({children:s,title:t,description:j,noButton:v,isOpen:C,setIsOpen:c,hasOverlay:N=!1})=>{const B=a.useRef(null);return e.jsx(d.Root,{show:C,as:a.Fragment,children:e.jsxs(p,{as:"div",className:"relative z-10 cu-modal not-prose",initialFocus:B,onClose:()=>c(!1),children:[e.jsx(d.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`fixed inset-0 ${N?k:""}  bg-opacity-60 transition-opacity`})}),e.jsx("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:e.jsx("div",{className:"flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0",children:e.jsx(d.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(p.Panel,{className:"relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg",children:[e.jsx("div",{className:"px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4",children:e.jsx("div",{className:"sm:flex sm:items-start",children:e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx(p.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:t}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:j})})]})})}),e.jsxs("div",{className:"grid gap-4 px-4 py-3 sm:flex sm:w-auto sm:flex-row-reverse sm:px-6 sm:text-sm",children:[s,!v&&e.jsx(i,{onClick:()=>{c(!1)},title:"Cancel",isSmall:!0,color:"grey"})]})]})})})})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},noButton:{required:!1,tsType:{name:"boolean"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""},hasOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const P={title:"Components/Modal",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Click to Open Modal",onClick:()=>t(!0)}),e.jsx(r,{title:"Modal Title",description:"Description inside the modal",isOpen:s,setIsOpen:t,children:e.jsx(i,{title:"Delete",isSmall:!0,onClick:()=>{alert(" delete are you sure you want to delete it"),t(!1)}})})]})},o=()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"modalButton",title:" Click to Open Modal",onClick:()=>t(!0)}),e.jsx(r,{title:"Modal Title",description:"Description inside the modal",isOpen:s,setIsOpen:t,noButton:!0,hasOverlay:!0,children:e.jsx(i,{title:"Delete",isSmall:!0,onClick:()=>{alert(" delete are you sure you want to delete it"),t(!1)}})})]})},l=()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"modalButton",title:" Click to Open Modal",onClick:()=>t(!0)}),e.jsx(r,{title:"Printing Press",description:"This is an image of a printing press",isOpen:s,setIsOpen:t,noButton:!0,hasOverlay:!0,children:e.jsx("img",{src:"http://localhost:6006/sample-imgs/news-img.jpg",alt:"A printing press"})})]})};n.storyName="Default Modal";o.storyName="No Button on Modal";l.storyName="Add Children to Modal";n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"NoButton"};l.__docgenInfo={description:"",methods:[],displayName:"WithChildren"};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal title="Modal Title" description={'Description inside the modal'} isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <Button title="Delete" isSmall onClick={() => {
        alert(' delete are you sure you want to delete it');
        setModalOpen(false);
      }} />
      </Modal>
    </>;
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal title="Modal Title" description={'Description inside the modal'} isOpen={ModalOpen} setIsOpen={setModalOpen} noButton hasOverlay>
        <Button title="Delete" isSmall onClick={() => {
        alert(' delete are you sure you want to delete it');
        setModalOpen(false);
      }} />
      </Modal>
    </>;
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var O,g,M;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal title="Printing Press" description={'This is an image of a printing press'} isOpen={ModalOpen} setIsOpen={setModalOpen} noButton hasOverlay>
        <img src="http://localhost:6006/sample-imgs/news-img.jpg" alt="A printing press"></img>
      </Modal>
    </>;
}`,...(M=(g=l.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const A=["Default","NoButton","WithChildren"];export{n as Default,o as NoButton,l as WithChildren,A as __namedExportsOrder,P as default};
