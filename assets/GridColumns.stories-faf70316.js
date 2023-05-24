import{j as e}from"./jsx-runtime-daf202a7.js";import{M as d}from"./Main-ffb90dea.js";import{S as h}from"./Section-399033d9.js";import{C as s}from"./Container-42eb7417.js";import{C as i}from"./Column-985b9376.js";import{T as u}from"./TopNav-52f0e393.js";import{B as m}from"./Banner-2ef25b74.js";import{F as c}from"./FooterBasic-d95a57ec.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-74916236.js";import"./optionClasses-767b8be6.js";import"./index-12b82ffd.js";import"./Avatar-80b16ccb.js";import"./DropDown-92c419e7.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-78ba648b.js";import"./Link-fe849928.js";import"./iframe-0c8f577d.js";import"../sb-preview/runtime.js";import"./popover-509b60ee.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-event-listener-e14079c9.js";import"./transition-4429edf0.js";import"./Search-4135922b.js";import"./dialog-12422483.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./combobox-b5286f3e.js";import"./use-tracked-pointer-b81bf215.js";import"./TopNavLoader-2924a9dd.js";import"./disclosure-dd40256e.js";import"./FooterWave-fb338ea8.js";const W={title:"Examples/Templates/Grid Columns"},r=()=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Carleton University"}),e.jsx(m,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),e.jsx(d,{children:e.jsxs(h,{children:[e.jsxs(s,{hasProse:!0,children:[e.jsx(r,{}),e.jsx("h2",{children:"This is a header two"}),e.jsxs(i,{cols:"2",children:[e.jsx("div",{children:e.jsx(r,{})}),e.jsx("div",{children:e.jsx(r,{})})]}),e.jsx(t,{})]}),e.jsxs(s,{bgColor:"grey",hasProse:!0,children:[e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsxs(i,{cols:"3",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]})]}),e.jsxs(s,{hasProse:!0,children:[e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsxs(i,{cols:"2",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]}),e.jsxs(i,{cols:"3",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]})]})]})}),e.jsx(c,{})]})};var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />
      <Banner title="Grid Layouts and Columns" paragraph="This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout" />

      <Main>
        <Section>
          <Container hasProse>
            <SinglePara />
            <h2>This is a header two</h2>

            <Column cols="2">
              <div>
                <SinglePara />
              </div>
              <div>
                <SinglePara />
              </div>
            </Column>

            <DoublePara />
          </Container>

          <Container bgColor="grey" hasProse>
            <h2>This is a header two</h2>
            <DoublePara />
            <Column cols="3">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
          </Container>

          <Container hasProse>
            <h2>This is a header two</h2>
            <DoublePara />
            <Column cols="2">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
            <Column cols="3">
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
              <div>
                <h3>Header three</h3>
                <SinglePara />
              </div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const X=["GridColumns"];export{n as GridColumns,X as __namedExportsOrder,W as default};
//# sourceMappingURL=GridColumns.stories-faf70316.js.map
