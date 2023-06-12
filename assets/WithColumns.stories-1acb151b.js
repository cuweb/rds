import{j as n}from"./jsx-runtime-daf202a7.js";import{S as a}from"./Section-559dedcc.js";import{C as o}from"./Container-42168418.js";import{M as m}from"./Main-5f2ff1fc.js";import{T as u}from"./TopNav-05c11680.js";import{B as c}from"./Banner-161003c9.js";import{F as C}from"./FooterBasic-b90c8c4e.js";import{C as e}from"./Column-f4705f13.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-7b5d8244.js";import"./Avatar-413548b1.js";import"./optionClasses-dcd0a1d3.js";import"./DropDown-4ff52ed8.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-fdae82d0.js";import"./Link-41a096c5.js";import"./iframe-609b6b1c.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-ad31892e.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterWave-705b2904.js";const K={title:"Examples/Templates/Layouts"},t=()=>n.jsx(n.Fragment,{children:n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),p=()=>n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),n.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Carleton University"}),n.jsx(c,{title:"With Columns",align:"left"}),n.jsx(m,{children:n.jsxs(a,{hasProse:!0,children:[n.jsx("h2",{children:"Not in a container"}),n.jsx(p,{}),n.jsx("h2",{children:"Not in a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(o,{children:[n.jsx("h2",{children:"This is a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsx(t,{})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(o,{isGrey:!0,children:[n.jsx("h2",{children:"This is a container"}),n.jsx(t,{}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsx(t,{})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]}),n.jsxs(e,{cols:"2",children:[n.jsx(e.Content,{children:n.jsx(t,{})}),n.jsx(e.Content,{children:n.jsx(t,{})})]})]})}),n.jsx(C,{})]})};var s,r,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=WithColumns.stories-1acb151b.js.map
