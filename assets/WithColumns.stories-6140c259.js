import{j as n}from"./jsx-runtime-daf202a7.js";import{S as a}from"./Section-ef2e0364.js";import{C as o}from"./Container-8b4fd470.js";import{M as m}from"./Main-5f2ff1fc.js";import{T as u}from"./TopNav-f559b7d1.js";import{B as c}from"./Banner-deb6756e.js";import{F as C}from"./FooterBasic-cef01e90.js";import{C as e}from"./Column-3275c103.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./Avatar-4f8b6b20.js";import"./optionClasses-fb4783dc.js";import"./DropDown-08947760.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-dc6e8637.js";import"./iframe-3b29fd1e.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-deee5ede.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-a05c4efd.js";const K={title:"Examples/Templates/Layouts"},t=()=>n.jsx(n.Fragment,{children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),p=()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Carleton University"}),n.jsx(c,{title:"With Columns",align:"left"}),n.jsx(m,{children:n.jsxs(a,{hasProse:!0,children:[n.jsx("h2",{children:"Not in a container"}),n.jsx(p,{}),n.jsx("h2",{children:"Not in a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(o,{children:[n.jsx("h2",{children:"This is a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsx(t,{})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(o,{isGrey:!0,children:[n.jsx("h2",{children:"This is a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsx(t,{})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]})]})}),n.jsx(C,{})]})};var s,r,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />
      <Banner title="With Columns" align="left" />

      <Main>
        <Section hasProse>
          <h2>Not in a container</h2>
          <DoublePara />
          <h2>Not in a container</h2>
          <SinglePara />

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>

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

          <Column cols="2">
            <Column.Content>
              <SinglePara />
            </Column.Content>
            <Column.Content>
              <SinglePara />
            </Column.Content>
          </Column>

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

      <FooterBasic />
    </>
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Q=["WithColumns"];export{i as WithColumns,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=WithColumns.stories-6140c259.js.map
