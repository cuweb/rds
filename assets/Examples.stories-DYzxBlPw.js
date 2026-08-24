import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-IpA8Qn9U.js";import{t as r}from"./jsx-runtime-CA2T8_y1.js";import{n as i,t as a}from"./Main-DtoD-bKX.js";import{n as o,t as s}from"./FooterStandard-DhpEjNYJ.js";import{n as c,t as l}from"./Nav-BHKwQ0XU.js";import{n as u,t as d}from"./ButtonGroup-D8089_T6.js";import{o as f,r as p}from"./NavData-ahBUZ0C_.js";import{n as m,t as h}from"./Button-CyTkV0p8.js";import{n as g,t as _}from"./PageHeader-BfMqWfqW.js";import{n as v,t as y}from"./Modal-DaW2DDbb.js";import{n as b,t as x}from"./ArticleData-CQNK5pX2.js";var S,C,w,T,E,D;function O(){return(O=e((()=>{S=t(n(),1),i(),o(),c(),f(),g(),v(),u(),m(),b(),C=r(),w={title:`Components/Modal/Examples`,parameters:{layout:`fullscreen`}},T=()=>(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(`p`,{children:`Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.`})}),E={render:()=>{let[e,t]=(0,S.useState)(!1),[n,r]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l,{children:(0,C.jsxs)(l.Top,{children:[(0,C.jsx)(l.Logo,{title:`Raven Design System`,link:`/`}),(0,C.jsx)(l.Aside,{children:(0,C.jsx)(l.Buttons,{menu:p})})]})}),(0,C.jsxs)(a,{maxWidth:`5xl`,children:[(0,C.jsx)(_,{as:`h1`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,header:`Dialog Examples`,size:`lg`}),(0,C.jsx)(T,{}),(0,C.jsxs)(d,{children:[(0,C.jsx)(h,{id:`basicModal`,title:`Click to Open Modal`,onClick:()=>t(!0)}),(0,C.jsx)(h,{id:`modalButton`,title:`Modal w/Content as Prop`,color:`dark-grey`,onClick:()=>r(!0)})]}),(0,C.jsx)(T,{}),(0,C.jsx)(T,{})]}),(0,C.jsxs)(y,{isOpen:e,setIsOpen:t,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`,children:[(0,C.jsx)(`h2`,{children:`H2 Heading`}),(0,C.jsx)(`p`,{children:`Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.`}),(0,C.jsxs)(`p`,{children:[`Faucibus commodo massa rhoncus, volutpat.`,(0,C.jsx)(`strong`,{children:`Dignissim`}),` sed `,(0,C.jsx)(`strong`,{children:`eget risus enim`}),`. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.`,(0,C.jsx)(`a`,{href:`#`,children:`Mattis mauris semper`}),` sed amet vitae sed turpis id.`]})]}),(0,C.jsx)(y,{isOpen:n,content:x,setIsOpen:r,ariaLabel:`H2 Heading`,ariaDescription:` Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.`}),(0,C.jsx)(s,{})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [BasicDialogOpen, setBasicDialogOpen] = useState(false);
    const [ConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
    return <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="Raven Design System" link="/" />
            {/* <Nav.Menu menu={NavDataSingle} /> */}
            <Nav.Aside>
              <Nav.Buttons menu={NavButtonsData} />
            </Nav.Aside>
          </Nav.Top>
        </Nav>

        <Main maxWidth="5xl">
          <PageHeader as="h1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." header="Dialog Examples" size="lg" />
          <SinglePara />

          <ButtonGroup>
            <Button id="basicModal" title="Click to Open Modal" onClick={() => setBasicDialogOpen(true)} />
            <Button id="modalButton" title="Modal w/Content as Prop" color="dark-grey" onClick={() => setConfirmDialogOpen(true)} />
          </ButtonGroup>

          <SinglePara />
          <SinglePara />
        </Main>

        <Modal isOpen={BasicDialogOpen} setIsOpen={setBasicDialogOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.">
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

        <Modal isOpen={ConfirmDialogOpen} content={contentData} setIsOpen={setConfirmDialogOpen} ariaLabel="H2 Heading" ariaDescription=" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem." />

        <FooterStandard />
      </>;
  }
}`,...E.parameters?.docs?.source}}},D=[`LayoutExamples`]})))()}O();export{E as LayoutExamples,D as __namedExportsOrder,w as default};