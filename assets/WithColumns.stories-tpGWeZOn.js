import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{S as c}from"./Section-Dk-hgYcw.js";import{C as a}from"./Container-Bc-AL_sJ.js";import{M as d}from"./Main-Dv6Cy-24.js";import{F as C}from"./FooterStandard-DHM6uugp.js";import{C as t}from"./Column-DT1AgB0i.js";import{N as s,a as p,b as x}from"./NavData-DRu1MbK0.js";import{T as r}from"./TextImage-C0-6Vquv.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-DjGLNohy.js";import"./FooterLogoLinks-xDaj2ZDi.js";import"./useLinkContext-CZLCmVqQ.js";import"./optionClasses-CrMjbTV6.js";import"./Avatar-BORvOmmK.js";const F={title:"Examples/Layouts"},e=()=>n.jsx(n.Fragment,{children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),o=()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(s,{children:n.jsxs(s.Primary,{children:[n.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),n.jsx(s.Menu,{menu:p}),n.jsx(s.Aside,{menu:x})]})}),n.jsx(d,{children:n.jsxs(c,{hasProse:!0,children:[n.jsx(r,{children:n.jsx(r.Content,{headerType:"h1",title:"Columned Content",children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})}),n.jsx("h2",{children:"Header Two"}),n.jsx(o,{}),n.jsx("h3",{children:"Header Three"}),n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsxs(t.Content,{children:[n.jsx(o,{}),n.jsx(e,{})]}),n.jsxs(t.Content,{children:[n.jsx(e,{}),n.jsx(o,{})]})]}),n.jsxs(a,{isGrey:!0,children:[n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{})]}),n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{}),n.jsxs(a,{isGrey:!0,children:[n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{})]}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]})]})}),n.jsx(C,{})]})};var l,u,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
            <TextImage.Content headerType="h1" title="Columned Content">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <h2>Header Two</h2>
          <DoublePara />

          <h3>Header Three</h3>
          <SinglePara />

          <Column cols="2">
            <Column.Content>
              <DoublePara />
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
              <DoublePara />
            </Column.Content>
          </Column>

          <Container isGrey>
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

          <Container isGrey>
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

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["WithColumns"];export{i as WithColumns,I as __namedExportsOrder,F as default};
