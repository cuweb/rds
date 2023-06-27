import{j as e}from"./jsx-runtime-daf202a7.js";import{M as p}from"./Main-5f2ff1fc.js";import{S as u}from"./Section-ef2e0364.js";import{T as d}from"./TopNav-6d98b8f2.js";import{F as c}from"./FooterBasic-4d3e3cb2.js";import{B as r}from"./Button-9a118519.js";import{H as t}from"./HeroTextImage-cc21fb2a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./Avatar-4f8b6b20.js";import"./optionClasses-fb4783dc.js";import"./DropDown-a105f420.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-02627f37.js";import"./iframe-e1315645.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-71ef95bf.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-d78e4aa9.js";const J={title:"Examples/Projects/cutheme/Blocks"},n=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
condimentum magna vel orci vulputate, eget vulputate neque porttitor.`,o=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Carleton University"}),e.jsx(p,{children:e.jsxs(u,{hasProse:!0,children:[e.jsxs(t,{hasBorder:!0,children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:n,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266"})]}),e.jsx(i,{}),e.jsx(t,{maxWidth:"5xl",hasBorder:!0,children:e.jsxs(t.Content,{title:"Hero Banner: Content",children:[e.jsx(o,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsx(t,{maxWidth:"5xl",children:e.jsxs(t.Content,{title:"Hero Banner: Content",children:[e.jsx(o,{}),e.jsxs("div",{className:"buttons flex flex-wrap gap-6 md:flex-1",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})]})}),e.jsx(i,{}),e.jsxs(t,{hasBorder:!0,children:[e.jsx(t.Content,{title:"Website and Application Development",paragraph:n,headerType:"h2",hasMediaCol:!0,children:e.jsxs("div",{className:"buttons flex flex-wrap gap-4 md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(t.Media,{image:"https://picsum.photos/400/266"})]}),e.jsx(i,{})]})}),e.jsx(c,{})]})};var s,l,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Carleton University" />

      <Main>
        <Section hasProse>
          <HeroTextImage hasBorder>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} headerType="h1" hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
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

          <HeroTextImage hasBorder>
            <HeroTextImage.Content title="Website and Application Development" paragraph={heroPara} headerType="h2" hasMediaCol>
              <div className="buttons flex flex-wrap gap-4 md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const K=["Banners"];export{a as Banners,K as __namedExportsOrder,J as default};
//# sourceMappingURL=HeroBanner.stories-497d6029.js.map
