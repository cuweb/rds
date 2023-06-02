import{j as e}from"./jsx-runtime-daf202a7.js";import{M as h}from"./Main-ffb90dea.js";import{S as l}from"./Section-399033d9.js";import{C as r}from"./Container-42eb7417.js";import{T as u}from"./TopNav-acfd88d9.js";import{B as d}from"./Banner-2ef25b74.js";import{F as m}from"./FooterBasic-a5b76aa4.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-74916236.js";import"./Avatar-80b16ccb.js";import"./optionClasses-767b8be6.js";import"./DropDown-7419f3f0.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-78ba648b.js";import"./Link-20450862.js";import"./iframe-d9a4d6b3.js";import"../sb-preview/runtime.js";import"./popover-509b60ee.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-event-listener-e14079c9.js";import"./transition-4429edf0.js";import"./Search-a7e0055b.js";import"./dialog-12422483.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./combobox-b5286f3e.js";import"./use-tracked-pointer-b81bf215.js";import"./TopNavLoader-2924a9dd.js";import"./disclosure-dd40256e.js";import"./FooterWave-bd7dc3c5.js";const J={title:"Examples/Templates/Alternating Sections"},i=()=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Carleton University"}),e.jsx(d,{title:"Alternating Sections Containers",paragraph:"This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds"}),e.jsx(h,{children:e.jsxs(l,{children:[e.jsxs(r,{hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{bgColor:"grey",hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{bgColor:"grey",hasProse:!0,children:[e.jsx("h2",{children:"2nd consecutive grey container"}),e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{hasProse:!0,children:[e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]}),e.jsxs(r,{hasProse:!0,children:[e.jsx("h2",{children:"2nd consecutive white container"}),e.jsx(i,{}),e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsx("h3",{children:"This is a header three"}),e.jsx(i,{})]})]})}),e.jsx(m,{})]})};var a,n,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const K=["AlternatingSections"];export{s as AlternatingSections,K as __namedExportsOrder,J as default};
//# sourceMappingURL=AlternatingSections.stories-4b0bba89.js.map
