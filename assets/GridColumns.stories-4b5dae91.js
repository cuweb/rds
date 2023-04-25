import{j as e}from"./jsx-runtime-3aeb2321.js";import{M as d}from"./Main-111d48bd.js";import{S as h}from"./Section-df772d5f.js";import{C as s}from"./Container-aafed24d.js";import{C as i}from"./Column-d1b07449.js";import{T as u}from"./TopNav-ec0ab1e3.js";import{B as m}from"./Banner-6b216d50.js";import{F as c}from"./FooterBasic-0a276ef3.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-4f7b0afb.js";import"./index-31110fe0.js";import"./Avatar-ed8d0223.js";import"./DropDown-161203ec.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-12c54893.js";import"./Link-75c77b79.js";import"./iframe-150550ae.js";import"../sb-preview/runtime.mjs";import"./popover-3492950b.js";import"./open-closed-2007ab4d.js";import"./keyboard-7b7aa261.js";import"./use-resolve-button-type-acf5cd20.js";import"./use-event-listener-4e982338.js";import"./transition-4a057a81.js";import"./Search-85189e1c.js";import"./dialog-40633ea3.js";import"./platform-cc7c4922.js";import"./index-1eb27dd0.js";import"./combobox-d55c58b7.js";import"./use-tracked-pointer-88919d7e.js";import"./TopNavLoader-ce221ba9.js";import"./disclosure-ec71063b.js";import"./FooterWave-7961a681.js";const W={title:"Examples/Templates/Grid Columns"},r=()=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),t=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Carleton University"}),e.jsx(m,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),e.jsx(d,{children:e.jsxs(h,{children:[e.jsxs(s,{hasProse:!0,children:[e.jsx(r,{}),e.jsx("h2",{children:"This is a header two"}),e.jsxs(i,{cols:"2",children:[e.jsx("div",{children:e.jsx(r,{})}),e.jsx("div",{children:e.jsx(r,{})})]}),e.jsx(t,{})]}),e.jsxs(s,{bgColor:"grey",hasProse:!0,children:[e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsxs(i,{cols:"3",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]})]}),e.jsxs(s,{hasProse:!0,children:[e.jsx("h2",{children:"This is a header two"}),e.jsx(t,{}),e.jsxs(i,{cols:"2",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]}),e.jsxs(i,{cols:"3",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Header three"}),e.jsx(r,{})]})]})]})]})}),e.jsx(c,{})]})};var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=GridColumns.stories-4b5dae91.js.map
