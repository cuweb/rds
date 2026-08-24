import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-IpA8Qn9U.js";import{t as r}from"./jsx-runtime-CA2T8_y1.js";import{n as i,t as a}from"./Button-CyTkV0p8.js";import{n as o,t as s}from"./Modal-DaW2DDbb.js";import{n as c,t as l}from"./ArticleData-CQNK5pX2.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(n(),1),o(),i(),c(),d=r(),f={title:`Components/Modal`,component:s,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},p=()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Click to Open Modal`,onClick:()=>t(!0)}),(0,d.jsxs)(s,{isOpen:e,setIsOpen:t,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`,onClose:()=>{console.log(`Modal closed outside using onCloseOutsideClick`)},children:[(0,d.jsx)(`h2`,{children:`H2 Heading`}),(0,d.jsx)(`p`,{children:`Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.`}),(0,d.jsxs)(`p`,{children:[`Faucibus commodo massa rhoncus, volutpat.`,(0,d.jsx)(`strong`,{children:`Dignissim`}),` sed `,(0,d.jsx)(`strong`,{children:`eget risus enim`}),`. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.`,(0,d.jsx)(`a`,{href:`#`,children:`Mattis mauris semper`}),` sed amet vitae sed turpis id.`]})]})]})},p.storyName=`Default Modal`,m={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Click to Open Modal`,onClick:()=>t(!0)}),(0,d.jsxs)(s,{isOpen:e,setIsOpen:t,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`,preventOutsideClick:!0,hideCloseButton:!0,onClose:()=>{console.log(`Modal closed`)},children:[(0,d.jsx)(`h2`,{children:`H2 Heading`}),(0,d.jsx)(`p`,{children:`Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.`}),(0,d.jsxs)(`p`,{children:[`Faucibus commodo massa rhoncus, volutpat.`,(0,d.jsx)(`strong`,{children:`Dignissim`}),` sed `,(0,d.jsx)(`strong`,{children:`eget risus enim`}),`. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.`,(0,d.jsx)(`a`,{href:`#`,children:`Mattis mauris semper`}),` sed amet vitae sed turpis id.`]}),(0,d.jsx)(a,{title:`Close Modal`,onClick:()=>t(!1)})]})]})}},h=()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Click to Open Modal`,onClick:()=>t(!0)}),(0,d.jsx)(s,{isOpen:e,setIsOpen:t,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`,content:l})]})},h.storyName=`Content as Prop`,g=()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Click to Open Modal`,onClick:()=>t(!0)}),(0,d.jsxs)(s,{isOpen:e,setIsOpen:t,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`,alignTop:!0,children:[(0,d.jsx)(`h2`,{children:`H2 Heading`}),(0,d.jsx)(`p`,{children:`Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.`}),(0,d.jsxs)(`p`,{children:[`Faucibus commodo massa rhoncus, volutpat.`,(0,d.jsx)(`strong`,{children:`Dignissim`}),` sed `,(0,d.jsx)(`strong`,{children:`eget risus enim`}),`. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.`,(0,d.jsx)(`a`,{href:`#`,children:`Mattis mauris semper`}),` sed amet vitae sed turpis id.`]})]})]})},g.storyName=`Top Aligned Modal`,p.__docgenInfo={description:``,methods:[],displayName:`Default`},h.__docgenInfo={description:``,methods:[],displayName:`ContentProp`},g.__docgenInfo={description:``,methods:[],displayName:`AlignedTop`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [modalOpen, setModalOpen] = useState(false);
  return <>
      <Button title="Click to Open Modal" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." content={contentData} />
    </>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`PreventModalClose`,`ContentProp`,`AlignedTop`]})))()}v();export{g as AlignedTop,h as ContentProp,p as Default,m as PreventModalClose,_ as __namedExportsOrder,f as default};