import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as i}from"./index-uCp2LrAq.js";import{b as k}from"./optionClasses-C1xmOtGn.js";import{p as C}from"./globalClasses-BlHLKr18.js";import{B as O}from"./Button-BbqjxLtd.js";import{A as w}from"./ArticleData-8weIOt6R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-CS9Mqat_.js";const d=({children:o,content:s,isOpen:r,setIsOpen:u,maxWidth:y="3xl",noProse:q=!1})=>{const t=i.useRef(null),c=q?"":C.base;i.useEffect(()=>{var l,m,p,f;(l=t.current)!=null&&l.open&&!r?(m=t.current)==null||m.close():!((p=t.current)!=null&&p.open)&&r&&((f=t.current)==null||f.showModal())},[r]),i.useEffect(()=>(r?document.body.classList.add("cu-no-body-scroll"):document.body.classList.remove("cu-no-body-scroll"),()=>{document.body.classList.remove("cu-no-body-scroll")}),[r]);const j=l=>{l.target===t.current&&u(!1)};return e.jsxs("dialog",{ref:t,className:`cu-dialog ${c} md:px-8 md:py-6 px-12 py-10 z-10 w-11/12 ${k[y]} shadow-md rounded-md p-3.5`,onClick:j,children:[e.jsxs("button",{className:"absolute top-2 right-2 p-1 rounded-full bg-cu-black-50 text-cu-black-900 hover:bg-cu-red hover:text-white",onClick:()=>u(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]}),e.jsx("div",{className:`cu-dialog-content ${c}`,dangerouslySetInnerHTML:s?{__html:s}:void 0,children:!s&&o})]})};d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'3xl' | '4xl' | '5xl' | '6xl' | '7xl'",elements:[{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"}]},description:"",defaultValue:{value:"'3xl'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},noProse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""}}};const R={title:"Components/Modal",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a=()=>{const[o,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(d,{isOpen:o,setIsOpen:s,children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};a.storyName="Default Modal";const n=()=>{const[o,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsx(d,{isOpen:o,content:w,setIsOpen:s})]})};n.storyName="Content as Prop";a.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"ContentProp"};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={ModalOpen} setIsOpen={setModalOpen}>
        <h2>H2 Heading</h2>
        <p>
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
          aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
          egestas fringilla sapien.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat.
          <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed
          turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
          <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
        </p>
      </Modal>
    </>;
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,M,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={ModalOpen} content={contentData} setIsOpen={setModalOpen} />
    </>;
}`,...(b=(M=n.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const T=["Default","ContentProp"];export{n as ContentProp,a as Default,T as __namedExportsOrder,R as default};