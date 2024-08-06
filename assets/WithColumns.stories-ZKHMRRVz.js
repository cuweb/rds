import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{S as o}from"./Section-JfbkAvfr.js";import{M as c}from"./Main-CdpHQN4R.js";import{F as d}from"./FooterStandard-C5H7sR_p.js";import{C as t}from"./Column-DWyBvBRx.js";import{N as i,a as C,b as p}from"./NavData-DwIkGudT.js";import{T as r}from"./TextImage-DP-PYnc-.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FooterLogoLinks-wi3yy42J.js";import"./useLinkContext-Bz4KtVj9.js";import"./propClasses-BCnilxRx.js";import"./Avatar-DmMiCzKE.js";import"./ButtonGroup-DcsTpBqd.js";const D={title:"Prototypes/Layouts"},e=()=>n.jsx(n.Fragment,{children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),a=()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(i,{children:n.jsxs(i.Primary,{children:[n.jsx(i.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),n.jsx(i.Menu,{menu:C}),n.jsx(i.Aside,{menu:p})]})}),n.jsxs(c,{children:[n.jsx(o,{children:n.jsx(r,{children:n.jsx(r.Content,{headerType:"h1",title:"Columned Content",children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})})}),n.jsx("h2",{children:"Header Two"}),n.jsx(a,{}),n.jsx("h3",{children:"Header Three"}),n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsxs(t.Content,{children:[n.jsx(a,{}),n.jsx(e,{})]}),n.jsxs(t.Content,{children:[n.jsx(e,{}),n.jsx(a,{})]})]}),n.jsxs(o,{isGrey:!0,children:[n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{})]}),n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{}),n.jsxs(o,{isGrey:!0,children:[n.jsx(e,{}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsx(e,{})]}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]}),n.jsxs(t,{cols:"2",children:[n.jsx(t.Content,{children:n.jsx(e,{})}),n.jsx(t.Content,{children:n.jsx(e,{})})]})]}),n.jsx(d,{})]})};var l,u,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
            <TextImage.Content headerType="h1" title="Columned Content">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

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

        <Section isGrey>
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

        <Section isGrey>
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
      </Main>

      <FooterStandard />
    </>
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["WithColumns"];export{s as WithColumns,A as __namedExportsOrder,D as default};
