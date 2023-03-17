import{a as i,F as a,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as m}from"./Main-87487803.js";import{C as n}from"./Container-30f2fe44.js";import{C as s}from"./Column-6f70111f.js";import{T as p}from"./TopNav-c1e4a496.js";import{B as c}from"./Banner-41a7d95f.js";import{F as h}from"./FooterBasic-767c7072.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./index-31110fe0.js";import"./Avatar-c7823a04.js";import"./DropDown-a9cd7bbc.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06d25453.js";import"./Link-a8ece75e.js";import"./popover-828cbb50.js";import"./transition-3d9bc4c7.js";import"./use-event-listener-402fdd3a.js";import"./dialog-77319903.js";import"./index-1eb27dd0.js";import"./disclosure-fb670083.js";import"./FooterWave-49fe559c.js";const A={title:"Examples/Templates/Grid Columns"},r=()=>e(a,{children:i("p",{children:[e("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),o=()=>i(a,{children:[i("p",{children:[e("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),t={render:()=>i(a,{children:[e(p,{title:"Carleton University"}),e(c,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),i(m,{children:[i(n,{hasProse:!0,children:[e(r,{}),e("h2",{children:"This is a header two"}),i(s,{cols:"2",children:[e("div",{children:e(r,{})}),e("div",{children:e(r,{})})]}),e(o,{})]}),i(n,{bgColor:"grey",hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(o,{}),i(s,{cols:"3",children:[i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]}),i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]}),i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]})]})]})]}),e(h,{})]})};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />
      <Banner title="Grid Layouts and Columns" paragraph="This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout" />

      <Main>
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
      </Main>

      <FooterBasic />
    </>
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const U=["GridColumns"];export{t as GridColumns,U as __namedExportsOrder,A as default};
//# sourceMappingURL=GridColumns.stories-a5a14a89.js.map
