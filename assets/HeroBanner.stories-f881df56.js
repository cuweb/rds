import{j as e}from"./jsx-runtime-daf202a7.js";import{M as m}from"./Main-5f2ff1fc.js";import{S as u}from"./Section-559dedcc.js";import{T as p}from"./TopNav-14419c2c.js";import{F as d}from"./FooterBasic-667ade5a.js";import{B as t}from"./Button-a8ed5a4d.js";import{H as n}from"./HeroBanner-3660c07a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-7b5d8244.js";import"./Avatar-413548b1.js";import"./optionClasses-dcd0a1d3.js";import"./DropDown-5cb546e5.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-fdae82d0.js";import"./Link-fed110ca.js";import"./iframe-b5927f6f.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-a872dd80.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterWave-d46fc3c0.js";const I={title:"Examples/Projects/cutheme/Blocks"},r=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Carleton University"}),e.jsx(m,{children:e.jsxs(u,{hasProse:!0,children:[e.jsx(n,{hasBorder:!0,children:e.jsxs(n.Content,{title:"Hero Banner: Content",image:"https://picsum.photos/400/266",imageAngle:!0,children:[e.jsx(r,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(n,{maxWidth:"5xl",hasBorder:!0,children:e.jsxs(n.Content,{title:"Hero Banner: Content",children:[e.jsx(r,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(n,{maxWidth:"5xl",children:e.jsxs(n.Content,{title:"Hero Banner: Content",children:[e.jsx(r,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(n,{children:e.jsxs(n.Content,{title:"Hero Banner: Content",image:"https://picsum.photos/400/266",imageAngle:!0,children:[e.jsx(r,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{})]})}),e.jsx(d,{})]})};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />

      <Main>
        <Section hasProse>
          <HeroBanner hasBorder>
            <HeroBanner.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner maxWidth="5xl" hasBorder>
            <HeroBanner.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner maxWidth="5xl">
            <HeroBanner.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />

          <HeroBanner>
            <HeroBanner.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroBanner.Content>
          </HeroBanner>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const J=["Banners"];export{o as Banners,J as __namedExportsOrder,I as default};
//# sourceMappingURL=HeroBanner.stories-f881df56.js.map
