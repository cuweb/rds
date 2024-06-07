import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as o}from"./index-uCp2LrAq.js";import{M as r}from"./Modal-DhBMBVS9.js";import{B as u}from"./Button-D3PZeFyC.js";import{A as O}from"./ArticleData-8weIOt6R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./optionClasses-BoR2qQUj.js";import"./globalClasses-BlHLKr18.js";import"./Icon-Ducrj9hH.js";const I={title:"Components/Modal",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i=()=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(r,{isOpen:n,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};i.storyName="Default Modal";const t=()=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsx(r,{isOpen:n,content:O,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem."})]})};t.storyName="Content as Prop";const a=()=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(r,{isOpen:n,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",alignTop:!0,children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};a.storyName="Top Aligned Modal";i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"ContentProp"};a.__docgenInfo={description:"",methods:[],displayName:"AlignedTop"};var l,m,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.">
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
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} content={contentData} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." />
    </>;
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var q,h,v;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." alignTop>
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const k=["Default","ContentProp","AlignedTop"];export{a as AlignedTop,t as ContentProp,i as Default,k as __namedExportsOrder,I as default};
