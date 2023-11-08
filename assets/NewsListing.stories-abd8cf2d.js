import{j as t}from"./jsx-runtime-7ce7b810.js";import{M as S}from"./Main-6cf1ae56.js";import{S as v}from"./Section-da2bba19.js";import{C as g}from"./Container-a3dd8cc7.js";import{S as h}from"./StackedList-704a5aaf.js";import{T as c}from"./TopBar-78f0bb84.js";import{F as C}from"./FooterBasic-e3be93f6.js";import{L as e}from"./Listing-01fb594f.js";import{a as m}from"./NewsData-8fa2e9af.js";import{H as p}from"./Heading-801e6a26.js";import{H as j}from"./HeroTextImage-8fd2230d.js";import{T as f}from"./TopBarData-62ad3a12.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-7ab87be3.js";import"./Panel-14f35d17.js";import"./optionClasses-8b995f37.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";import"./FooterLogoLinks-c2f03113.js";import"./Link-2e43080b.js";import"./iframe-cb7c96a4.js";import"../sb-preview/runtime.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-4d59305e.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";import"./ButtonGroup-1dfe70f1.js";import"./Button-c1d196ed.js";import"./Icon-857a786a.js";const ht={title:"Examples/Projects/cutheme"},u=()=>t.jsx(t.Fragment,{children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl."})}),L=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),x={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(c,{children:[t.jsxs(c.Primary,{children:[t.jsx(c.Logo,{title:"Raven Design System",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(c.Aside,{})]}),t.jsx(c.Secondary,{children:t.jsx(c.Menu,{children:f.map((i,s)=>t.jsxs(t.Fragment,{children:[!i.submenu&&t.jsx("a",{href:i.href,className:"cu-topbar--parent-link",children:i.title},s),i.submenu&&t.jsx(c.SubMenu,{label:i.title,children:i.submenu.map((n,a)=>t.jsx("a",{href:n.href,className:"cu-topbar--more-nav",children:n.title},a))})]}))})})]}),t.jsx(S,{children:t.jsxs(v,{hasProse:!0,children:[t.jsx(j,{maxWidth:"5xl",hasBorder:!0,children:t.jsx(j.Content,{title:"News Listing Examples",headerType:"h1"})}),t.jsx(L,{}),t.jsx("h2",{children:"News Listing Block"}),t.jsx(u,{}),t.jsxs(g,{maxWidth:"5xl",children:[t.jsx(p,{text:"Basic News Listing Block"}),t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})]}),t.jsx(L,{}),t.jsx("h2",{children:"News Listing Block with Grey Bg"}),t.jsx(u,{}),t.jsxs(g,{isGrey:!0,children:[t.jsx(p,{text:"News Listing Block with Grey Bg"}),t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})]}),t.jsx("h2",{children:"Consecutive News Listing Block"}),t.jsx(u,{}),t.jsx(g,{children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx(g,{children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx("h2",{children:"Consecutive News Listing Block with Grey Bg"}),t.jsx(u,{}),t.jsx(g,{isGrey:!0,children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})}),t.jsx(g,{isGrey:!0,children:t.jsx(h,{hasBorder:!0,hasShadow:!0,children:m.map(({id:i,title:s,link:n,image:a,alt:r,date:o,excerpt:d,tags:l})=>t.jsx(e,{children:t.jsxs("a",{href:n,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:a,alt:r,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:o}),t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:d}),t.jsx(e.Badges,{tags:l})]})]})},i))})})]})}),t.jsx(C,{})]})};var B,w,k;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(w=x.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const mt=["NewsListings"];export{x as NewsListings,mt as __namedExportsOrder,ht as default};
//# sourceMappingURL=NewsListing.stories-abd8cf2d.js.map
