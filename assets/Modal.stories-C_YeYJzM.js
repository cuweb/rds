import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as l}from"./index-uCp2LrAq.js";import{B as r}from"./Button-DPTI0u98.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-CS9Mqat_.js";import"./optionClasses-C1xmOtGn.js";const d=({children:s,isOpen:t,setIsOpen:C,noOutsideClose:v=!1})=>{const n=l.useRef(null);l.useEffect(()=>{var c,u,p,m;(c=n.current)!=null&&c.open&&!t?(u=n.current)==null||u.close():!((p=n.current)!=null&&p.open)&&t&&((m=n.current)==null||m.showModal())},[t]);const k=c=>{!v&&c.target===n.current&&C(!1)};return e.jsx(e.Fragment,{children:e.jsx("dialog",{ref:n,className:"cu-modal relative z-10 not-prose",onClick:k,children:e.jsx("div",{className:"relative sm:w-full sm:max-w-lg p-6 min-h-full",children:s})})})};d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""},noOutsideClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const R={title:"Components/Modal",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a=()=>{const[s,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Click to Open Modal",onClick:()=>t(!0)}),e.jsx(d,{isOpen:s,setIsOpen:t,children:e.jsxs("div",{className:"space-y-4 justify-center text-center",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Example Heading"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel, pulvinar dignissim augue."}),e.jsx(r,{title:"Close",isSmall:!0,onClick:()=>{t(!1)}})]})})]})},i=()=>{const[s,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"modalButton",title:" Click to Open Modal",onClick:()=>t(!0)}),e.jsx(d,{isOpen:s,setIsOpen:t,children:e.jsxs("div",{className:"space-y-4 justify-center text-center",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Example Heading"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel, pulvinar dignissim augue."})]})})]})},o=()=>{const[s,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"modalButton",title:" Click to Open Modal",onClick:()=>t(!0)}),e.jsx(d,{isOpen:s,setIsOpen:t,noOutsideClose:!0,children:e.jsxs("div",{className:"space-y-4 justify-center text-center",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Example Heading"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel, pulvinar dignissim augue."}),e.jsx(r,{title:"Close",isSmall:!0,onClick:()=>{t(!1)}})]})})]})};a.storyName="Default Modal";i.storyName="No Button on Modal";o.storyName="No Outside Closing of Modal";a.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"NoButton"};o.__docgenInfo={description:"",methods:[],displayName:"NoOutsideClose"};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
          <Button title="Close" isSmall onClick={() => {
          setModalOpen(false);
        }} />
        </div>
      </Modal>
    </>;
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var O,M,h;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
        </div>
      </Modal>
    </>;
}`,...(h=(M=i.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var j,y,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button id="modalButton" title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen} noOutsideClose>
        <div className="space-y-4 justify-center text-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Example Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mi, sollicitudin pharetra ipsum vel,
            pulvinar dignissim augue.
          </p>
          <Button title="Close" isSmall onClick={() => {
          setModalOpen(false);
        }} />
        </div>
      </Modal>
    </>;
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const H=["Default","NoButton","NoOutsideClose"];export{a as Default,i as NoButton,o as NoOutsideClose,H as __namedExportsOrder,R as default};
