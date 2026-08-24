import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-IpA8Qn9U.js";import{t as r}from"./jsx-runtime-CA2T8_y1.js";import{n as i,t as a}from"./Main-DtoD-bKX.js";import{n as o,t as s}from"./FooterStandard-DhpEjNYJ.js";import{n as c,t as l}from"./Nav-BHKwQ0XU.js";import{n as u,t as d}from"./ButtonGroup-D8089_T6.js";import{o as f,r as p}from"./NavData-ahBUZ0C_.js";import{n as m,t as h}from"./Button-CyTkV0p8.js";import{n as g,t as _}from"./PageHeader-BfMqWfqW.js";import{n as v,t as y}from"./Dialog-BhLa6YZy.js";var b,x,S,C,w,T;function E(){return(E=e((()=>{b=t(n(),1),i(),o(),g(),v(),c(),f(),m(),u(),x=r(),S={title:`Components/Dialog/Examples`,parameters:{layout:`fullscreen`}},C=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(`p`,{children:`Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.`})}),w={render:()=>{let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l,{children:(0,x.jsxs)(l.Top,{children:[(0,x.jsx)(l.Logo,{title:`Raven Design System`,link:`/`}),(0,x.jsx)(l.Aside,{children:(0,x.jsx)(l.Buttons,{menu:p})})]})}),(0,x.jsxs)(a,{maxWidth:`5xl`,children:[(0,x.jsx)(_,{as:`h1`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,header:`Dialog Examples`,size:`lg`}),(0,x.jsx)(C,{}),(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{id:`basicModal`,title:`Open Basic Dialog`,onClick:()=>t(!0)}),(0,x.jsx)(h,{id:`modalButton`,title:`Dialog with Close`,color:`dark-grey`,onClick:()=>r(!0)})]}),(0,x.jsx)(C,{}),(0,x.jsx)(C,{})]}),(0,x.jsx)(y,{title:`Click to Open Dialog`,isOpen:e,setIsOpen:t}),(0,x.jsx)(y,{title:`Click to Open Dialog`,description:`Description inside the dialog box`,isOpen:n,setIsOpen:r,children:(0,x.jsx)(h,{isSmall:!0,title:`Confirm`})}),(0,x.jsx)(s,{})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
            <Button id="basicModal" title="Open Basic Dialog" onClick={() => setBasicDialogOpen(true)} />
            <Button id="modalButton" title="Dialog with Close" color="dark-grey" onClick={() => setConfirmDialogOpen(true)} />
          </ButtonGroup>

          <SinglePara />
          <SinglePara />
        </Main>

        <Dialog title="Click to Open Dialog" isOpen={BasicDialogOpen} setIsOpen={setBasicDialogOpen} />

        <Dialog title="Click to Open Dialog" description="Description inside the dialog box" isOpen={ConfirmDialogOpen} setIsOpen={setConfirmDialogOpen}>
          <Button isSmall title="Confirm" />
        </Dialog>

        <FooterStandard />
      </>;
  }
}`,...w.parameters?.docs?.source}}},T=[`LayoutExamples`]})))()}E();export{w as LayoutExamples,T as __namedExportsOrder,S as default};