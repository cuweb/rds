import{j as t}from"./jsx-runtime-7ce7b810.js";import{M as u}from"./Main-6cf1ae56.js";import{S as d}from"./Section-0b894742.js";import{T as e}from"./TopBar-78f0bb84.js";import{F as h}from"./FooterBasic-c37f4bd3.js";import{T as g}from"./TopBarData-62ad3a12.js";import{T as i}from"./TextImage-d2afd766.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-ae4f1421.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";import"./FooterLogoLinks-be06d239.js";import"./Link-07cbf833.js";import"./iframe-8bd67882.js";import"../sb-preview/runtime.js";import"./Button-c1d196ed.js";import"./Icon-857a786a.js";import"./optionClasses-8b995f37.js";import"./ButtonGroup-1dfe70f1.js";const _={title:"Examples/Projects/cutheme"},o=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),a={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsxs(e.Primary,{children:[t.jsx(e.Logo,{title:"Raven Design System",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(e.Aside,{})]}),t.jsx(e.Secondary,{children:t.jsx(e.Menu,{children:g.map((s,m)=>t.jsxs(t.Fragment,{children:[!s.submenu&&t.jsx("a",{href:s.href,className:"cu-topbar--parent-link",children:s.title},m),s.submenu&&t.jsx(e.SubMenu,{label:s.title,children:s.submenu.map((r,p)=>t.jsx("a",{href:r.href,className:"cu-topbar--more-nav",children:r.title},p))})]}))})})]}),t.jsx(u,{children:t.jsxs(d,{hasProse:!0,children:[t.jsx(i,{flexRow:"md",flipYsm:!0,children:t.jsx(i.Event,{title:"Capital Hoops Classic",eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:"March 21st, 2023 at 6:00pm",location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",primaryButtonUrl:"https://carleton.ca",secondaryButtonUrl:"https://carleton.ca/webservices",secondaryButtonText:"More Information",children:t.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/sample-imgs/event-img.jpg",alt:"Event supporting graphic",width:"350",height:"153"})})}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{})]})}),t.jsx(h,{})]})};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Raven Design System" link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
              <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
        <TopBar.Secondary>
          <TopBar.Menu>
            {TopBarDataSingle.map((topBarLink, i) => <>
                {!topBarLink.submenu && <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                    {topBarLink.title}
                  </a>}
                {topBarLink.submenu && <TopBar.SubMenu label={topBarLink.title}>
                    {topBarLink.submenu.map((topBarSubLink, s) => <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                        {topBarSubLink.title}
                      </a>)}
                  </TopBar.SubMenu>}
              </>)}
          </TopBar.Menu>
        </TopBar.Secondary>
      </TopBar>

      <Main>
        <Section hasProse>
          <TextImage flexRow="md" flipYsm>
            <TextImage.Event title="Capital Hoops Classic" eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate="March 21st, 2023 at 6:00pm" location="Raven's Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234" primaryButtonUrl="https://carleton.ca" secondaryButtonUrl="https://carleton.ca/webservices" secondaryButtonText="More Information">
              <img src="https://cu-production.s3.amazonaws.com/rds/sample-imgs/event-img.jpg" alt="Event supporting graphic" width="350" height="153" />
            </TextImage.Event>
          </TextImage>

          <DoublePara />
          <DoublePara />
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const O=["EventDetails"];export{a as EventDetails,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=EventDetails.stories-f8a2e316.js.map
