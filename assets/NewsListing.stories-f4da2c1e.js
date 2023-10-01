import{j as t}from"./jsx-runtime-7ce7b810.js";import{M as S}from"./Main-6cf1ae56.js";import{S as v}from"./Section-4e633831.js";import{C as g}from"./Container-4cc53a7b.js";import{S as h}from"./StackedList-fb3cb31c.js";import{T as c}from"./TopBar-488a5b7c.js";import{F as C}from"./FooterBasic-45c0e4c7.js";import{L as e}from"./Listing-cd494030.js";import{a as m}from"./NewsData-8fa2e9af.js";import{H as x}from"./Heading-2ea8d2e3.js";import{H as j}from"./HeroTextImage-12c22aa7.js";import{T as f}from"./TopBarData-62ad3a12.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-fe633af6.js";import"./Panel-60389fd2.js";import"./optionClasses-c898b830.js";import"./menu-cdec7704.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-tracked-pointer-a7a12abc.js";import"./use-resolve-button-type-39f07965.js";import"./ChevronDownIcon-2780c6ad.js";import"./transition-85fd6845.js";import"./disclosure-bb587eb4.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-8c0ae301.js";import"./use-root-containers-6a924b7d.js";import"./index-4da2af8c.js";import"./FooterLogoLinks-48f037d7.js";import"./Link-4c248cb3.js";import"./iframe-f26811cf.js";import"../sb-preview/runtime.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-4d59305e.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";import"./ButtonGroup-1bb23590.js";import"./Button-bad4dfeb.js";import"./Icon-163d2856.js";const ut={title:"Examples/Projects/cutheme/Blocks"},u=()=>t.jsx(t.Fragment,{children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl."})}),L=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),p={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(c,{children:[t.jsxs(c.Primary,{children:[t.jsx(c.Logo,{title:"Raven Design System",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(c.Aside,{})]}),t.jsx(c.Secondary,{children:t.jsx(c.Menu,{children:f.map((i,s)=>t.jsxs(t.Fragment,{children:[!i.submenu&&t.jsx("a",{href:i.href,className:"cu-topbar--parent-link",children:i.title},s),i.submenu&&t.jsx(c.SubMenu,{label:i.title,children:i.submenu.map((n,a)=>t.jsx("a",{href:n.href,className:"cu-topbar--more-nav",children:n.title},a))})]}))})})]}),t.jsx(S,{children:t.jsxs(v,{hasProse:!0,children:[t.jsx(j,{maxWidth:"5xl",hasBorder:!0,children:t.jsx(j.Content,{title:"News Listing Examples",headerType:"h1"})}),t.jsx(L,{}),t.jsx("h2",{children:"News Listing Block"}),t.jsx(u,{}),t.jsxs(g,{maxWidth:"5xl",children:[t.jsx(x,{text:"Basic News Listing Block"}),t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})]}),t.jsx(L,{}),t.jsx("h2",{children:"News Listing Block with Grey Bg"}),t.jsx(u,{}),t.jsxs(g,{isGrey:!0,children:[t.jsx(x,{text:"News Listing Block with Grey Bg"}),t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})]}),t.jsx("h2",{children:"Consecutive News Listing Block"}),t.jsx(u,{}),t.jsx(g,{children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx(g,{children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx("h2",{children:"Consecutive News Listing Block with Grey Bg"}),t.jsx(u,{}),t.jsx(g,{isGrey:!0,children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx(g,{isGrey:!0,children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})})]})}),t.jsx(C,{})]})};var B,w,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="News Listing Examples" headerType="h1" />
          </HeroTextImage>

          <DoublePara />

          <h2>News Listing Block</h2>
          <SinglePara />

          <Container maxWidth="5xl">
            <Heading text="Basic News Listing Block" />
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>

          <DoublePara />

          <h2>News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container isGrey>
            <Heading text="News Listing Block with Grey Bg" />
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block</h2>
          <SinglePara />

          <Container>
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>

          <Container>
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>

          <h2>Consecutive News Listing Block with Grey Bg</h2>
          <SinglePara />

          <Container isGrey>
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>

          <Container isGrey>
            <StackedList hasBorder hasShadow>
              {data.map(({
              id,
              title,
              link,
              image,
              alt,
              date,
              excerpt,
              tags
            }) => <Listing key={id}>
                  <a href={link}>
                    <Listing.Figure>
                      <img src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </a>
                </Listing>)}
            </StackedList>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const pt=["NewsListings"];export{p as NewsListings,pt as __namedExportsOrder,ut as default};
//# sourceMappingURL=NewsListing.stories-f4da2c1e.js.map
