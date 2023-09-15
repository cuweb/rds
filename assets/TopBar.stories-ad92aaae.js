import{j as o}from"./jsx-runtime-7ce7b810.js";import{T as s}from"./TopBar-488a5b7c.js";import{T as d}from"./TopBarData-62ad3a12.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./menu-cdec7704.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-tracked-pointer-a7a12abc.js";import"./use-resolve-button-type-39f07965.js";import"./ChevronDownIcon-2780c6ad.js";import"./transition-85fd6845.js";import"./disclosure-bb587eb4.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-8c0ae301.js";import"./use-root-containers-6a924b7d.js";import"./index-4da2af8c.js";const A={title:"Components/TopBar",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={render:()=>o.jsx(s,{children:o.jsxs(s.Primary,{children:[o.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:o.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[o.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),o.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),o.jsx(s.Menu,{children:d.map((a,n)=>o.jsxs(o.Fragment,{children:[!a.submenu&&o.jsx("a",{href:a.href,className:"cu-topbar--parent-link",children:a.title},n),a.submenu&&o.jsx(s.SubMenu,{label:a.title,children:a.submenu.map((r,c)=>o.jsx("a",{href:r.href,className:"cu-topbar--more-nav",children:r.title},c))})]}))}),o.jsx(s.Aside,{})]})})},t={render:()=>o.jsxs(s,{children:[o.jsxs(s.Primary,{children:[o.jsx(s.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:o.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[o.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),o.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),o.jsx(s.Aside,{})]}),o.jsx(s.Secondary,{children:o.jsx(s.Menu,{children:d.map((a,n)=>o.jsxs(o.Fragment,{children:[!a.submenu&&o.jsx("a",{href:a.href,className:"cu-topbar--parent-link",children:a.title},n),a.submenu&&o.jsx(s.SubMenu,{label:a.title,children:a.submenu.map((r,c)=>o.jsx("a",{href:r.href,className:"cu-topbar--more-nav",children:r.title},c))})]}))})})]})};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <TopBar>
      <TopBar.Primary>
        <TopBar.Logo title="Web Services" link="https://carleton.ca/webservices">
          <a href="https://carleton.ca" className="cu-topbar--logo">
            <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
            <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
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
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const W=["Default","Double"];export{e as Default,t as Double,W as __namedExportsOrder,A as default};
//# sourceMappingURL=TopBar.stories-ad92aaae.js.map
