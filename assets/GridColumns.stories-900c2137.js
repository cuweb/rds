import{a as r,F as s,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as u}from"./Main-1a5ad365.js";import{S as m}from"./Section-94207df0.js";import{C as a}from"./Container-95591aef.js";import{C as n}from"./Column-9ab858f8.js";import{T as c}from"./TopNav-fcac5650.js";import{B as p}from"./Banner-cd0269e4.js";import{F as v}from"./FooterBasic-6d1c12ea.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-bf4cba96.js";import"./index-31110fe0.js";import"./Avatar-3b67c872.js";import"./DropDown-e7acaeeb.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-e730db9c.js";import"./Link-1e63bdc2.js";import"./iframe-d5852501.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-9061b86c.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-ab48adbe.js";const Y={title:"Examples/Templates/Grid Columns"},i=()=>e(s,{children:r("p",{children:[e("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),o=()=>r(s,{children:[r("p",{children:[e("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),t={render:()=>r(s,{children:[e(c,{title:"Carleton University"}),e(p,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),e(u,{children:r(m,{children:[r(a,{hasProse:!0,children:[e(i,{}),e("h2",{children:"This is a header two"}),r(n,{cols:"2",children:[e("div",{children:e(i,{})}),e("div",{children:e(i,{})})]}),e(o,{})]}),r(a,{bgColor:"grey",hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(o,{}),r(n,{cols:"3",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]})]}),r(a,{hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(o,{}),r(n,{cols:"2",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]}),r(n,{cols:"3",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]})]})]})}),e(v,{})]})};var l,d,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Z=["GridColumns"];export{t as GridColumns,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=GridColumns.stories-900c2137.js.map
