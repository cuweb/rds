import{j as e}from"./jsx-runtime-7ce7b810.js";import{M as u}from"./Main-6cf1ae56.js";import{S as d}from"./Section-0b894742.js";import{T as t}from"./TopBar-78f0bb84.js";import{F as h}from"./FooterBasic-9b084d5f.js";import{T as g}from"./TopBarData-62ad3a12.js";import{T as a}from"./TextImage-9ffe4a3c.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-ae4f1421.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";import"./FooterLogoLinks-619d46ce.js";import"./Link-f6ec55f1.js";import"./iframe-0355eb71.js";import"../sb-preview/runtime.js";import"./Button-1e094554.js";import"./Icon-4051eb46.js";import"./optionClasses-08da3512.js";import"./ButtonGroup-1dfe70f1.js";const V={title:"Examples/Projects/cutheme"},i=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsxs(t.Primary,{children:[e.jsx(t.Logo,{title:"Raven Design System",link:"https://carleton.ca/webservices",children:e.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[e.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),e.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),e.jsx(t.Aside,{})]}),e.jsx(t.Secondary,{children:e.jsx(t.Menu,{children:g.map((r,c)=>e.jsxs(e.Fragment,{children:[!r.submenu&&e.jsx("a",{href:r.href,className:"cu-topbar--parent-link",children:r.title},c),r.submenu&&e.jsx(t.SubMenu,{label:r.title,children:r.submenu.map((s,p)=>e.jsx("a",{href:s.href,className:"cu-topbar--more-nav",children:s.title},p))})]}))})})]}),e.jsx(u,{children:e.jsxs(d,{hasProse:!0,children:[e.jsx(a,{flexRow:"md",flipYsm:!0,children:e.jsx(a.People,{designation:"Mr. ",pronoun:"he/him",name:"Greely Wrinkle",jobTitle:"Jedi Master & Jedi Council Member",degrees:"Certificate, Padawan Academy of Jedi Arts",building:"Onraed",room:"Sector A29",email:"greely@thejediyouseek.com",phone:"613-520-2600",phoneExt:"1234",resume:"#",linkedin:"#",twitter:"#",facebook:"#",children:e.jsx("img",{src:"https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k",alt:"People profile graphic",width:"350",height:"350"})})}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{})]})}),e.jsx(h,{})]})};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <TextImage.People designation="Mr. " pronoun="he/him" name="Greely Wrinkle" jobTitle="Jedi Master & Jedi Council Member" degrees="Certificate, Padawan Academy of Jedi Arts" building="Onraed" room="Sector A29" email="greely@thejediyouseek.com" phone="613-520-2600" phoneExt="1234" resume="#" linkedin="#" twitter="#" facebook="#">
              <img src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k" alt="People profile graphic" width="350" height="350" />
            </TextImage.People>
          </TextImage>

          <DoublePara />
          <DoublePara />
          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const U=["PeopleProfile"];export{o as PeopleProfile,U as __namedExportsOrder,V as default};
//# sourceMappingURL=PeopleProfile.stories-a57274db.js.map
