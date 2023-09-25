import{j as e}from"./jsx-runtime-7ce7b810.js";import{S as c}from"./Section-4cb79e22.js";import{C as i}from"./Container-c95d903c.js";import{M as u}from"./Main-6cf1ae56.js";import{F as m}from"./FooterBasic-e1fdf5ee.js";import{H as o}from"./HeroTextImage-f40f7d7a.js";import{T as t}from"./TopBar-488a5b7c.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-d1a81871.js";import"./FooterLogoLinks-16b0d5fe.js";import"./Link-0d87bc20.js";import"./iframe-88ca5cb6.js";import"../sb-preview/runtime.js";import"./ButtonGroup-de72952e.js";import"./Button-4f82987c.js";import"./Icon-163d2856.js";import"./optionClasses-c898b830.js";import"./ChevronDownIcon-2780c6ad.js";import"./menu-cdec7704.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-tracked-pointer-a7a12abc.js";import"./use-resolve-button-type-39f07965.js";import"./transition-85fd6845.js";import"./disclosure-bb587eb4.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-8c0ae301.js";import"./use-root-containers-6a924b7d.js";import"./index-4da2af8c.js";const R={title:"Examples/Templates"},d=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),r=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs(t.Primary,{children:[e.jsx(t.Logo,{link:"https://carleton.ca/webservices",children:e.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[e.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),e.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),e.jsx(t.Aside,{})]})}),e.jsx(u,{children:e.jsxs(c,{hasProse:!0,children:[e.jsx(o,{maxWidth:"5xl",hasBorder:!0,children:e.jsx(o.Content,{title:"With Containers",headerType:"h1"})}),e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{}),e.jsx("h3",{children:"Heading Three"}),e.jsx(d,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{})]}),e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]}),e.jsxs(i,{children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]}),e.jsxs(i,{children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]})]})}),e.jsx(m,{})]})};var n,a,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
              <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="With Containers" headerType="h1" />
          </HeroTextImage>
          <h2>Heading Two</h2>
          <DoublePara />
          <h3>Heading Three</h3>
          <SinglePara />

          <Container isGrey>
            <h2>Heading Two</h2>
            <DoublePara />
          </Container>

          <Container isGrey>
            <h2>Heading Two</h2>
            <DoublePara />
          </Container>

          <h2>Heading Two</h2>
          <DoublePara />

          <Container isGrey>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>

          <Container>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>

          <Container>
            <h3>Heading Three</h3>
            <DoublePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const V=["WithContainers"];export{s as WithContainers,V as __namedExportsOrder,R as default};
//# sourceMappingURL=WithContainers.stories-3c0dfaa9.js.map
