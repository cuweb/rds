import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Bvnp1rP5.js";import{M as g}from"./Main-DrtR39EU.js";import{F as v}from"./FooterStandard-BQzRl8Yv.js";import{N as i}from"./Nav-Dj4LbvL4.js";import{N as h}from"./NavData-DGjf4Von.js";import{P as x}from"./PageHeader-AQx-PO11.js";import{M as o}from"./Modal-imtuGgE9.js";import{B as q}from"./ButtonGroup-nDP0Iyj2.js";import{B as u}from"./Button-BySeDZ53.js";import{A as f}from"./ArticleData-8weIOt6R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FooterLogoLinks-Bj-B-7w1.js";import"./useLinkContext-CYMXyvMi.js";import"./FooterStandardData-3_746QZ9.js";import"./Avatar-C6A5BXA1.js";import"./Icon-z0nuAvuJ.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-CJUCiil5.js";const w={title:"Components/Modal/Examples",parameters:{layout:"fullscreen"}},t=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),a={render:()=>{const[c,s]=r.useState(!1),[p,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs(i.Top,{children:[e.jsx(i.Logo,{title:"Raven Design System",link:"/"}),e.jsx(i.Aside,{children:e.jsx(i.Buttons,{menu:h})})]})}),e.jsxs(g,{maxWidth:"5xl",children:[e.jsx(x,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Dialog Examples",size:"lg"}),e.jsx(t,{}),e.jsxs(q,{children:[e.jsx(u,{id:"basicModal",title:"Click to Open Modal",onClick:()=>s(!0)}),e.jsx(u,{id:"modalButton",title:"Modal w/Content as Prop",color:"dark-grey",onClick:()=>n(!0)})]}),e.jsx(t,{}),e.jsx(t,{})]}),e.jsxs(o,{isOpen:c,setIsOpen:s,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.",children:[e.jsx("h2",{children:"H2 Heading"}),e.jsx("p",{children:"Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien."}),e.jsxs("p",{children:["Faucibus commodo massa rhoncus, volutpat.",e.jsx("strong",{children:"Dignissim"})," sed ",e.jsx("strong",{children:"eget risus enim"}),". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.",e.jsx("a",{href:"#",children:"Mattis mauris semper"})," sed amet vitae sed turpis id."]})]}),e.jsx(o,{isOpen:p,content:f,setIsOpen:n,ariaLabel:"H2 Heading",ariaDescription:" Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem."}),e.jsx(v,{})]})}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["LayoutExamples"];export{a as LayoutExamples,z as __namedExportsOrder,w as default};
