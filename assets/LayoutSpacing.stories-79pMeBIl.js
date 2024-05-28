import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{S as i}from"./Section-DrmBlyt5.js";import{M as m}from"./Main-CgLTKl-s.js";import{F as d}from"./FooterStandard-DHM6uugp.js";import{C as s}from"./Column-Dw5OiQ1f.js";import{N as a,a as h,b as p}from"./NavData-DRu1MbK0.js";import{T as o}from"./TextImage-B32QZuFd.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-BlHLKr18.js";import"./FooterLogoLinks-xDaj2ZDi.js";import"./useLinkContext-CZLCmVqQ.js";import"./optionClasses-C1xmOtGn.js";import"./Avatar-BORvOmmK.js";const M={title:"Examples/Layouts"},n=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.Primary,{children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Menu,{menu:h}),e.jsx(a.Aside,{menu:p})]})}),e.jsxs(m,{children:[e.jsx(i,{children:e.jsx(o,{children:e.jsx(o.Content,{headerType:"h1",title:"Layout Spacing",children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})})}),e.jsx("h2",{children:"Not in a container"}),e.jsx(t,{}),e.jsx("h2",{children:"Not in a container"}),e.jsx(n,{}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(n,{}),e.jsxs(s,{cols:"2",children:[e.jsx(s.Content,{children:e.jsx(n,{})}),e.jsx(s.Content,{children:e.jsx(n,{})})]}),e.jsx(n,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(n,{}),e.jsxs(s,{cols:"2",children:[e.jsx(s.Content,{children:e.jsx(n,{})}),e.jsx(s.Content,{children:e.jsx(n,{})})]}),e.jsx(n,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsx("h2",{children:"Not in a container"}),e.jsx(t,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"This is a container"}),e.jsx(t,{})]})]}),e.jsx(d,{})]})};var l,u,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <TextImage>
            <TextImage.Content headerType="h1" title="Layout Spacing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <h2>Not in a container</h2>
        <DoublePara />
        <h2>Not in a container</h2>
        <SinglePara />

        <Section>
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
        </Section>

        <Section isGrey>
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
        </Section>

        <Section isGrey>
          <h2>This is a container</h2>
          <DoublePara />
        </Section>

        <Section isGrey>
          <h2>This is a container</h2>
          <DoublePara />
        </Section>

        <h2>Not in a container</h2>
        <DoublePara />

        <Section isGrey>
          <h2>This is a container</h2>
          <DoublePara />
        </Section>

        <Section>
          <h2>This is a container</h2>
          <DoublePara />
        </Section>

        <Section>
          <h2>This is a container</h2>
          <DoublePara />
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const G=["LayoutSpacing"];export{r as LayoutSpacing,G as __namedExportsOrder,M as default};
