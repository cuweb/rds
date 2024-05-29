import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as i}from"./index-uCp2LrAq.js";import{b as C}from"./optionClasses-C1xmOtGn.js";import{p as k}from"./globalClasses-BlHLKr18.js";import{B as M}from"./Button-BbqjxLtd.js";import{A as D}from"./ArticleData-8weIOt6R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-CS9Mqat_.js";const d=({children:r,content:s,isOpen:o,setIsOpen:O,maxWidth:q="5xl",noProse:y=!1})=>{const t=i.useRef(null),b=y?"":k.base;i.useEffect(()=>{var l,u,c,m;(l=t.current)!=null&&l.open&&!o?(u=t.current)==null||u.close():!((c=t.current)!=null&&c.open)&&o&&((m=t.current)==null||m.showModal())},[o]),i.useEffect(()=>(o?document.body.classList.add("cu-no-body-scroll"):document.body.classList.remove("cu-no-body-scroll"),()=>{document.body.classList.remove("cu-no-body-scroll")}),[o]);const j=l=>{l.target===t.current&&O(!1)};return e.jsx(e.Fragment,{children:e.jsx("dialog",{ref:t,className:`cu-dialog ${b} md:px-8 md:py-6 px-12 py-10 z-10 w-11/12 ${C[q]} shadow-md rounded-md p-3.5`,onClick:j,children:s?e.jsx("div",{className:"cu-dialog-content",dangerouslySetInnerHTML:{__html:s}}):r})})};d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'3xl' | '4xl' | '5xl' | '6xl' | '7xl'",elements:[{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},noProse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"k"}],return:{name:"void"}}},description:""}}};const w={title:"Components/Modal",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a=()=>{const[r,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(d,{isOpen:r,setIsOpen:s,children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};a.storyName="Default Modal";const n=()=>{const[r,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsx(d,{isOpen:r,content:D,setIsOpen:s})]})};n.storyName="Content as Prop";a.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"ContentProp"};var p,f,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,h,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [ModalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={ModalOpen} content={contentData} setIsOpen={setModalOpen} />
    </>;
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const A=["Default","ContentProp"];export{n as ContentProp,a as Default,A as __namedExportsOrder,w as default};
