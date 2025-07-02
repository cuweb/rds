import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-DDmFEvuO.js";import{M as o}from"./Modal-BL9OrfCy.js";import{B as r}from"./Button-B6LFRtIH.js";import{A as C}from"./ArticleData-8weIOt6R.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./propClasses-F0UBY6lR.js";import"./Icon-C5ia6qUS.js";const B={title:"Components/Modal",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t=()=>{const[i,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(o,{isOpen:i,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",onClose:()=>{console.log("Modal closed outside using onCloseOutsideClick")},children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};t.storyName="Default Modal";const u={render:()=>{const[i,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(o,{isOpen:i,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",preventOutsideClick:!0,hideCloseButton:!0,onClose:()=>{console.log("Modal closed")},children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]}),e.jsx(r,{title:"Close Modal",onClick:()=>s(!1)})]})]})}},a=()=>{const[i,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsx(o,{isOpen:i,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",content:C})]})};a.storyName="Content as Prop";const n=()=>{const[i,s]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsxs(o,{isOpen:i,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",alignTop:!0,children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]})]})};n.storyName="Top Aligned Modal";t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"ContentProp"};n.__docgenInfo={description:"",methods:[],displayName:"AlignedTop"};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." onClose={() => {
      console.log('Modal closed outside using onCloseOutsideClick');
    }}>
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,q;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);
    return <>
        <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." preventOutsideClick hideCloseButton onClose={() => {
        console.log('Modal closed');
      }}>
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
          <Button title="Close Modal" onClick={() => setModalOpen(false)} />
        </Modal>
      </>;
  }
}`,...(q=(g=u.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var h,v,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." content={contentData} />
    </>;
}`,...(O=(v=a.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var M,f,b;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const E=["Default","PreventModalClose","ContentProp","AlignedTop"];export{n as AlignedTop,a as ContentProp,t as Default,u as PreventModalClose,E as __namedExportsOrder,B as default};
