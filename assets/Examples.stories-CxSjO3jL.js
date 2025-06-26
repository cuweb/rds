import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as a}from"./Section-CKcqyDpo.js";import{M as c}from"./Main-BqxOGoMS.js";import{F as p}from"./FooterStandard-CssxRqDU.js";import{C as n}from"./Column-Cg3Th2-V.js";import{N as i}from"./Nav-CVMHpBTf.js";import{B as u}from"./ButtonGroup-CDph2TDA.js";import{B as r}from"./Button-BVR6zcW4.js";import{N as x}from"./NavData-EgWmcfkt.js";import{C as s}from"./Carleton360-HeVAeWn0.js";import{P as h}from"./PageHeader-TwiRoOCv.js";import"./index-yBjzXJbu.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./propClasses-X8soStUg.js";import"./Avatar-R8Sfo5dY.js";import"./Icon-C1WGhw-n.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";const E={title:"Components/Carleton360/Examples",parameters:{layout:"fullscreen"}},t=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),o={args:{maxWidth:"5xl",flexRow:"lg",flipX:!1,flipYsm:!1},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs(i.Top,{children:[e.jsx(i.Logo,{title:"Raven Design System",link:"/"}),e.jsx(i.Aside,{children:e.jsx(i.Buttons,{menu:x})})]})}),e.jsxs(c,{maxWidth:"5xl",children:[e.jsx(a,{children:e.jsx(h,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Page Header",size:"lg"})}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(s,{children:e.jsxs(u,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{color:"dark-grey",title:"Request Information"})]})}),e.jsx(s,{}),e.jsx(s,{}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsxs(a,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(t,{}),e.jsx(t,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsxs(a,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(t,{}),e.jsx(t,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsxs(n,{cols:"2",children:[e.jsx(n.Content,{children:e.jsx("p",{children:"Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."})}),e.jsx(n.Content,{children:e.jsx("p",{children:"Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit."})})]}),e.jsx(a,{maxWidth:"max",children:e.jsx(s,{children:e.jsxs(u,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{color:"dark-grey",title:"Request Information"})]})})})]}),e.jsx(p,{})]})};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    maxWidth: '5xl',
    flexRow: 'lg',
    flipX: false,
    flipYsm: false
  },
  render: () => {
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
          <Section>
            <PageHeader as="h1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." header="Page Header" size="lg" />
          </Section>

          <h2>Header Two</h2>
          <SinglePara />

          <Carleton360>
            <ButtonGroup>
              <Button title="Apply Now" />
              <Button color="dark-grey" title="Request Information" />
            </ButtonGroup>
          </Carleton360>

          <Carleton360 />
          <Carleton360 />

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Section>
            <h2>White Background</h2>
            <SinglePara />
            <SinglePara />
          </Section>

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Section>
            <h2>White Background</h2>
            <SinglePara />
            <SinglePara />
          </Section>

          <h2>Header Two</h2>
          <SinglePara />
          <SinglePara />

          <Column cols="2">
            <Column.Content>
              <p>
                Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
            </Column.Content>
            <Column.Content>
              <p>
                Right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae
                viverra in, egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed
                malesuada metus, et tristique dolor. Suspendisse vestibulum hendrerit.
              </p>
            </Column.Content>
          </Column>

          <Section maxWidth="max">
            <Carleton360>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="dark-grey" title="Request Information" />
              </ButtonGroup>
            </Carleton360>
          </Section>
        </Main>

        <FooterStandard />
      </>;
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const F=["LayoutExamples"];export{o as LayoutExamples,F as __namedExportsOrder,E as default};
