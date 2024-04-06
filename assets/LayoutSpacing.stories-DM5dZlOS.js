import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as m}from"./Section-DghQq1W4.js";import{C as i}from"./Container-BfoqXE9Z.js";import{M as d}from"./Main-CDNSDx3Q.js";import{F as h}from"./FooterStandard-BpVCKnJF.js";import{C as a}from"./Column-C9WJhcA9.js";import{N as s,a as p,b as x}from"./NavData-DcaDM_IY.js";import{T as o}from"./TextImage-jGJ98Puo.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-DjGLNohy.js";import"./FooterLogoLinks-DnK0H4f0.js";import"./useLinkContext-Ch0lwH8X.js";import"./optionClasses-D-XbMsDd.js";import"./Avatar-2ZHJOB-7.js";const L={title:"Examples/Layouts"},n=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(s.Primary,{children:[e.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(s.Menu,{menu:p}),e.jsx(s.Aside,{menu:x})]})}),e.jsx(d,{children:e.jsxs(m,{hasProse:!0,children:[e.jsx(o,{children:e.jsx(o.Content,{headerType:"h1",title:"Layout Spacing",children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})}),e.jsx("h2",{children:"Not in a container"}),e.jsx(t,{}),e.jsx("h2",{children:"Not in a container"}),e.jsx(n,{}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(n,{}),e.jsxs(a,{cols:"2",children:[e.jsx(a.Content,{children:e.jsx(n,{})}),e.jsx(a.Content,{children:e.jsx(n,{})})]}),e.jsx(n,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(n,{}),e.jsxs(a,{cols:"2",children:[e.jsx(a.Content,{children:e.jsx(n,{})}),e.jsx(a.Content,{children:e.jsx(n,{})})]}),e.jsx(n,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsx("h2",{children:"Not in a container"}),e.jsx(t,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]})]})}),e.jsx(h,{})]})};var u,l,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section hasProse>
          <TextImage>
            <TextImage.Content headerType="h1" title="Layout Spacing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <h2>Not in a container</h2>
          <DoublePara />
          <h2>Not in a container</h2>
          <SinglePara />

          <Container>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <h2>Not in a container</h2>
          <DoublePara />

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const A=["LayoutSpacing"];export{r as LayoutSpacing,A as __namedExportsOrder,L as default};
