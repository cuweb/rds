import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{M as u}from"./Main-6yTdoHTQ.js";import{S as d}from"./Section-273f7e_u.js";import{T as e}from"./TopBar-GlvJDD4t.js";import{F as h}from"./FooterBasic-6u1Mqdhz.js";import{T as g}from"./TopBarData-Bofc7drK.js";import{T as i}from"./TextImage-6WQT2kNB.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./globalClasses-EYtDdY2O.js";import"./ChevronDownIcon-qyckNURu.js";import"./ChevronRightIcon-U-mlqZiw.js";import"./menu-oFeCtKpM.js";import"./transition-8qPHkook.js";import"./use-root-containers-7zw4BiR7.js";import"./index-jmm5gWkb.js";import"./use-tracked-pointer-EZY5uaCR.js";import"./use-resolve-button-type-kFzmZbAv.js";import"./disclosure-LLQX-sEi.js";import"./MagnifyingGlassIcon-5GODM8Pf.js";import"./popover-tP4paLqk.js";import"./FooterLogoLinks-Je7ul8fK.js";import"./Link-h_Jb3-bs.js";import"./iframe-qxjRL-cl.js";import"../sb-preview/runtime.js";import"./Button-jLOfSZVe.js";import"./Icon-MkcnZ0Qb.js";import"./optionClasses-BVitpQvL.js";import"./ButtonGroup-34C6VEr-.js";const _={title:"Examples/Projects/cutheme"},o=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),a={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsxs(e.Primary,{children:[t.jsx(e.Logo,{title:"Raven Design System",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(e.Aside,{})]}),t.jsx(e.Secondary,{children:t.jsx(e.Menu,{children:g.map((s,m)=>t.jsxs(t.Fragment,{children:[!s.submenu&&t.jsx("a",{href:s.href,className:"cu-topbar--parent-link",children:s.title},m),s.submenu&&t.jsx(e.SubMenu,{label:s.title,children:s.submenu.map((r,p)=>t.jsx("a",{href:r.href,className:"cu-topbar--more-nav",children:r.title},p))})]}))})})]}),t.jsx(u,{children:t.jsxs(d,{hasProse:!0,children:[t.jsx(i,{flexRow:"md",flipYsm:!0,children:t.jsx(i.Event,{title:"Capital Hoops Classic",eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:"March 21st, 2023 at 6:00pm",location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",primaryButtonUrl:"https://carleton.ca",secondaryButtonUrl:"https://carleton.ca/webservices",secondaryButtonText:"More Information",children:t.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/sample-imgs/event-img.jpg",alt:"Event supporting graphic",width:"350",height:"153"})})}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{})]})}),t.jsx(h,{})]})};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
