import{j as e}from"./jsx-runtime-daf202a7.js";import{M as m}from"./Main-5f2ff1fc.js";import{S as u}from"./Section-ef2e0364.js";import{T as p}from"./TopNav-49b2ae52.js";import{F as d}from"./FooterBasic-e4438379.js";import{B as t}from"./Button-9a118519.js";import{H as r}from"./HeroTextImage-7d179d22.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./Avatar-4f8b6b20.js";import"./optionClasses-fb4783dc.js";import"./DropDown-4eb919e9.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-d45c369b.js";import"./iframe-5609ef46.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-c7f3b5e7.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-ce1e418e.js";const G={title:"Examples/Projects/cutheme/Blocks"},n=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Carleton University"}),e.jsx(m,{children:e.jsxs(u,{hasProse:!0,children:[e.jsx(r,{hasBorder:!0,children:e.jsxs(r.Content,{title:"Hero Banner: Content",image:"https://picsum.photos/400/266",imageAngle:!0,children:[e.jsx(n,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(r,{maxWidth:"5xl",hasBorder:!0,children:e.jsxs(r.Content,{title:"Hero Banner: Content",children:[e.jsx(n,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(r,{maxWidth:"5xl",children:e.jsxs(r.Content,{title:"Hero Banner: Content",children:[e.jsx(n,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(r,{children:e.jsxs(r.Content,{title:"Hero Banner: Content",image:"https://picsum.photos/400/266",imageAngle:!0,children:[e.jsx(n,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(t,{title:"Primary"}),e.jsx(t,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{})]})}),e.jsx(d,{})]})};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />

      <Main>
        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage maxWidth="5xl">
            <HeroTextImage.Content title="Hero Banner: Content">
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>

          <DoublePara />

          <HeroTextImage>
            <HeroTextImage.Content title="Hero Banner: Content" image="https://picsum.photos/400/266" imageAngle>
              <SinglePara />
              <div className="buttons flex flex-wrap gap-6 md:flex-1">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
          </HeroTextImage>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const J=["Banners"];export{o as Banners,J as __namedExportsOrder,G as default};
//# sourceMappingURL=HeroBanner.stories-a4bec5fa.js.map
