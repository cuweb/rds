import{j as o}from"./jsx-runtime-7ce7b810.js";import{T as r}from"./TopBar-78f0bb84.js";import{T as d}from"./TopBarData-62ad3a12.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";const D={title:"Components/TopBar",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:()=>o.jsx(r,{children:o.jsxs(r.Primary,{children:[o.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:o.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[o.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Carleton University logo"}),o.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Carleton University logo"})]})}),o.jsx(r.Menu,{children:d.map((s,n)=>o.jsxs(o.Fragment,{children:[!s.submenu&&o.jsx("a",{href:s.href,className:"cu-topbar--parent-link",children:s.title},n),s.submenu&&o.jsx(r.SubMenu,{label:s.title,children:s.submenu.map((a,c)=>o.jsx("a",{href:a.href,className:"cu-topbar--more-nav",children:a.title},c))})]}))}),o.jsx(r.Aside,{})]})})},t={render:()=>o.jsxs(r,{children:[o.jsxs(r.Primary,{children:[o.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:o.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[o.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),o.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),o.jsx(r.Aside,{})]}),o.jsx(r.Secondary,{children:o.jsx(r.Menu,{children:d.map((s,n)=>o.jsxs(o.Fragment,{children:[!s.submenu&&o.jsx("a",{href:s.href,className:"cu-topbar--parent-link",children:s.title},n),s.submenu&&o.jsx(r.SubMenu,{label:s.title,children:s.submenu.map((a,c)=>o.jsx("a",{href:a.href,className:"cu-topbar--more-nav",children:a.title},c))})]}))})})]})};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <TopBar>
      <TopBar.Primary>
        <TopBar.Logo title="Web Services" link="https://carleton.ca/webservices">
          <a href="https://carleton.ca" className="cu-topbar--logo">
            <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Carleton University logo" />
            <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Carleton University logo" />
          </a>
        </TopBar.Logo>
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
        <TopBar.Aside />
      </TopBar.Primary>
    </TopBar>
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TopBar>
      <TopBar.Primary>
        <TopBar.Logo title="Web Services" link="https://carleton.ca/webservices">
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
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["Default","Double"];export{e as Default,t as Double,P as __namedExportsOrder,D as default};
//# sourceMappingURL=TopBar.stories-528da3ff.js.map
