import{j as e}from"./jsx-runtime-7ce7b810.js";import{S as c}from"./Section-4e633831.js";import{C as i}from"./Container-4cc53a7b.js";import{M as u}from"./Main-6cf1ae56.js";import{F as m}from"./FooterBasic-d2efbe9c.js";import{H as o}from"./HeroTextImage-ac625ba6.js";import{T as s}from"./TopBar-37ea6862.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-fe633af6.js";import"./FooterLogoLinks-a12d02ed.js";import"./Link-7dcfc271.js";import"./iframe-65e11c39.js";import"../sb-preview/runtime.js";import"./ButtonGroup-1bb23590.js";import"./Button-bad4dfeb.js";import"./Icon-163d2856.js";import"./optionClasses-c898b830.js";import"./ChevronDownIcon-2780c6ad.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";const _={title:"Examples/Templates"},d=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),r=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(s.Primary,{children:[e.jsx(s.Logo,{link:"https://carleton.ca/webservices",children:e.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[e.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),e.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),e.jsx(s.Aside,{})]})}),e.jsx(u,{children:e.jsxs(c,{hasProse:!0,children:[e.jsx(o,{maxWidth:"5xl",hasBorder:!0,children:e.jsx(o.Content,{title:"With Containers",headerType:"h1"})}),e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{}),e.jsx("h3",{children:"Heading Three"}),e.jsx(d,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{})]}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{})]}),e.jsx("h2",{children:"Heading Two"}),e.jsx(r,{}),e.jsxs(i,{isGrey:!0,children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]}),e.jsxs(i,{children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]}),e.jsxs(i,{children:[e.jsx("h3",{children:"Heading Three"}),e.jsx(r,{})]})]})}),e.jsx(m,{})]})};var n,a,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const O=["WithContainers"];export{t as WithContainers,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=WithContainers.stories-4de1611f.js.map
