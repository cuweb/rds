import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-DDmFEvuO.js";import{M as g}from"./Main-BqxOGoMS.js";import{F as x}from"./FooterStandard-CssxRqDU.js";import{P as D}from"./PageHeader-DczponrD.js";import{D as l}from"./Dialog-BrbIgQLg.js";import{N as i}from"./Nav-VDayoL1O.js";import{N as O}from"./NavData-DGjf4Von.js";import{B as o}from"./Button-BKQbqh7D.js";import{B as f}from"./ButtonGroup-BemJm4Dh.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-B5Ri1ApJ.js";import"./Avatar-R8Sfo5dY.js";import"./Icon-DX9EykPo.js";const T={title:"Components/Dialog/Examples",parameters:{layout:"fullscreen"}},a=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),t={render:()=>{const[c,n]=r.useState(!1),[d,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs(i.Top,{children:[e.jsx(i.Logo,{title:"Raven Design System",link:"/"}),e.jsx(i.Aside,{children:e.jsx(i.Buttons,{menu:O})})]})}),e.jsxs(g,{maxWidth:"5xl",children:[e.jsx(D,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Dialog Examples",size:"lg"}),e.jsx(a,{}),e.jsxs(f,{children:[e.jsx(o,{id:"basicModal",title:"Open Basic Dialog",onClick:()=>n(!0)}),e.jsx(o,{id:"modalButton",title:"Dialog with Close",color:"dark-grey",onClick:()=>s(!0)})]}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsx(l,{title:"Click to Open Dialog",isOpen:c,setIsOpen:n}),e.jsx(l,{title:"Click to Open Dialog",description:"Description inside the dialog box",isOpen:d,setIsOpen:s,children:e.jsx(o,{isSmall:!0,title:"Confirm"})}),e.jsx(x,{})]})}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const w=["LayoutExamples"];export{t as LayoutExamples,w as __namedExportsOrder,T as default};
