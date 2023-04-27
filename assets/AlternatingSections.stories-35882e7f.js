import{j as e}from"./jsx-runtime-3aeb2321.js";import{M as h}from"./Main-111d48bd.js";import{S as l}from"./Section-df772d5f.js";import{C as r}from"./Container-aafed24d.js";import{T as u}from"./TopNav-439105fe.js";import{B as d}from"./Banner-08720241.js";import{F as m}from"./FooterBasic-3d1561f9.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./index-31110fe0.js";import"./Avatar-00c77d2e.js";import"./optionClasses-767b8be6.js";import"./DropDown-4b689ec1.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06152386.js";import"./Link-d122182d.js";import"./iframe-4f592a94.js";import"../sb-preview/runtime.mjs";import"./popover-3492950b.js";import"./open-closed-2007ab4d.js";import"./keyboard-7b7aa261.js";import"./use-resolve-button-type-acf5cd20.js";import"./use-event-listener-4e982338.js";import"./transition-4a057a81.js";import"./Search-7d7a6649.js";import"./dialog-40633ea3.js";import"./platform-cc7c4922.js";import"./index-1eb27dd0.js";import"./combobox-d55c58b7.js";import"./use-tracked-pointer-88919d7e.js";import"./TopNavLoader-ce221ba9.js";import"./disclosure-ec71063b.js";import"./FooterWave-397ee285.js";const K={title:"Examples/Templates/Alternating Sections"},i=()=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Carleton University"}),e.jsx(d,{title:"Alternating Sections Containers",paragraph:"This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds"}),e.jsx(h,{children:e.jsxs(l,{children:[e.jsxs(r,{hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{bgColor:"grey",hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{bgColor:"grey",hasProse:!0,children:[e.jsx("h2",{children:"2nd consecutive grey container"}),e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{hasProse:!0,children:[e.jsx("h2",{children:"2nd consecutive white container"}),e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]})]})}),e.jsx(m,{})]})};var a,n,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />
      <Banner title="Alternating Sections Containers" paragraph="This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds" />

      <Main>
        <Section>
          <Container hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>

          <Container bgColor="grey" hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
          <Container bgColor="grey" hasProse>
            <h2>2nd consecutive grey container</h2>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>

          <Container hasProse>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
          <Container hasProse>
            <h2>2nd consecutive white container</h2>
            <SinglePara />
            <h2>This is a header two</h2>
            <DoublePara />
            <h3>This is a header three</h3>
            <SinglePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const Q=["AlternatingSections"];export{s as AlternatingSections,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=AlternatingSections.stories-35882e7f.js.map
