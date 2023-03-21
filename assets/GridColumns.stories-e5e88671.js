import{a as i,F as a,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as d}from"./Main-a4fc807a.js";import{C as n}from"./Container-30f2fe44.js";import{C as o}from"./Column-6f70111f.js";import{T as p}from"./TopNav-2f13134e.js";import{B as c}from"./Banner-41a7d95f.js";import{F as h}from"./FooterBasic-d5768680.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./index-e08e05bb.js";import"./Avatar-c7823a04.js";import"./DropDown-883a9694.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06d25453.js";import"./Link-44b0899b.js";import"./popover-761b7829.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-a3eb1d61.js";import"./transition-ad75749a.js";import"./dialog-82995df1.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./use-tracked-pointer-511c0c47.js";import"./disclosure-76f74e80.js";import"./FooterWave-b91f29cc.js";const I={title:"Examples/Templates/Grid Columns"},r=()=>e(a,{children:i("p",{children:[e("strong",{children:"Single Paragraph:"})," Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."]})}),s=()=>i(a,{children:[i("p",{children:[e("strong",{children:"Double Paragraph:"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),t={render:()=>i(a,{children:[e(p,{title:"Carleton University"}),e(c,{title:"Grid Layouts and Columns",paragraph:"This template uses the same layout configuration as the basic markup and grey section template examples and adds examples for a two and three column content layout"}),i(d,{children:[i(n,{hasProse:!0,children:[e(r,{}),e("h2",{children:"This is a header two"}),i(o,{cols:"2",children:[e("div",{children:e(r,{})}),e("div",{children:e(r,{})})]}),e(s,{})]}),i(n,{bgColor:"grey",hasProse:!0,children:[e("h2",{children:"This is a header two"}),e(s,{}),i(o,{cols:"3",children:[i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]}),i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]}),i("div",{children:[e("h3",{children:"Header three"}),e(r,{})]})]})]})]}),e(h,{})]})};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const J=["GridColumns"];export{t as GridColumns,J as __namedExportsOrder,I as default};
//# sourceMappingURL=GridColumns.stories-e5e88671.js.map
