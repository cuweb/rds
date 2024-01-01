import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{T as r}from"./TopBar-xywG3lse.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./ChevronDownIcon-WJjzl-Lh.js";import"./ChevronRightIcon-XyhEQFMv.js";import"./menu-oFeCtKpM.js";import"./transition-8qPHkook.js";import"./use-root-containers-7zw4BiR7.js";import"./index-jmm5gWkb.js";import"./use-tracked-pointer-EZY5uaCR.js";import"./use-resolve-button-type-kFzmZbAv.js";import"./disclosure-LLQX-sEi.js";import"./MagnifyingGlassIcon-vfrtgMO8.js";import"./popover-tP4paLqk.js";const d=[{href:"/link-1",title:"Link1"},{href:"/link-2",title:"Link2",submenu:[{href:"/link-2.1",title:"Link2.1"},{href:"/link-2.2",title:"Link2.2"},{href:"/link-2.3",title:"Link2.3"}]},{href:"/link-3",title:"Link3"},{href:"/link-4",title:"Link4",submenu:[{href:"/link-4.1",title:"Link4.1"},{href:"/link-4.2",title:"Link4.2"},{href:"/link-4.3",title:"Link4.3"}]},{href:"/link-5",title:"Link5"},{href:"/link-6",title:"Link6"}],M={title:"Components/TopBar",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:()=>e.jsx(r,{children:e.jsxs(r.Primary,{children:[e.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:e.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[e.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Carleton University logo"}),e.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Carleton University logo"})]})}),e.jsx(r.Menu,{children:d.map((o,n)=>e.jsxs(e.Fragment,{children:[!o.submenu&&e.jsx("a",{href:o.href,className:"cu-topbar--parent-link",children:o.title},n),o.submenu&&e.jsx(r.SubMenu,{label:o.title,children:o.submenu.map((s,i)=>e.jsx("a",{href:s.href,className:"cu-topbar--more-nav",children:s.title},i))})]}))}),e.jsx(r.Aside,{})]})})},t={render:()=>e.jsxs(r,{children:[e.jsxs(r.Primary,{children:[e.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices",children:e.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[e.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),e.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),e.jsx(r.Aside,{})]}),e.jsx(r.Secondary,{children:e.jsx(r.Menu,{children:d.map((o,n)=>e.jsxs(e.Fragment,{children:[!o.submenu&&e.jsx("a",{href:o.href,className:"cu-topbar--parent-link",children:o.title},n),o.submenu&&e.jsx(r.SubMenu,{label:o.title,children:o.submenu.map((s,i)=>e.jsx("a",{href:s.href,className:"cu-topbar--more-nav",children:s.title},i))})]}))})})]})};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const D=["Default","Double"];export{a as Default,t as Double,D as __namedExportsOrder,M as default};
