import{a as r,F as s,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as u}from"./Main-1a5ad365.js";import{S as m}from"./Section-94207df0.js";import{C as a}from"./Container-95591aef.js";import{C as n}from"./Column-59a5f743.js";import{T as c}from"./TopNav-328e0389.js";import{B as p}from"./Banner-ffd29f76.js";import{F as v}from"./FooterBasic-f0fca50d.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-9f612ec7.js";import"./index-31110fe0.js";import"./Avatar-f604bcfa.js";import"./DropDown-744e650e.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-98794453.js";import"./Link-44b0899b.js";import"./popover-761b7829.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-a3eb1d61.js";import"./transition-ad75749a.js";import"./Search-25f63c88.js";import"./dialog-82995df1.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./use-tracked-pointer-511c0c47.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-76f74e80.js";import"./FooterWave-6324fbc4.js";const W={title:"Examples/Templates/Grid Columns"},i=()=>e(s,{children:r("p",{children:[e("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),o=()=>r(s,{children:[r("p",{children:[e("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),t={render:()=>r(s,{children:[e(c,{title:"Carleton University"}),e(p,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),e(u,{children:r(m,{children:[r(a,{hasProse:!0,children:[e(i,{}),e("h2",{children:"This is a header two"}),r(n,{cols:"2",children:[e("div",{children:e(i,{})}),e("div",{children:e(i,{})})]}),e(o,{})]}),r(a,{bgColor:"grey",hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(o,{}),r(n,{cols:"3",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]})]}),r(a,{hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(o,{}),r(n,{cols:"2",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]}),r(n,{cols:"3",children:[r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]}),r("div",{children:[e("h3",{children:"Header three"}),e(i,{})]})]})]})]})}),e(v,{})]})};var l,d,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const X=["GridColumns"];export{t as GridColumns,X as __namedExportsOrder,W as default};
//# sourceMappingURL=GridColumns.stories-d6a9d741.js.map
