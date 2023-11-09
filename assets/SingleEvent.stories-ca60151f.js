import{j as t}from"./jsx-runtime-7ce7b810.js";import{M as u}from"./Main-6cf1ae56.js";import{S as p}from"./Section-da2bba19.js";import{C as r}from"./Column-7e40cf32.js";import{S as d}from"./StackedList-704a5aaf.js";import{A as g}from"./Aside-14733e36.js";import{A as h}from"./Article-ca074b84.js";import{B as v}from"./Banner-70bf5466.js";import{T as e}from"./TopBar-78f0bb84.js";import{F as x}from"./FooterBasic-8ca55b0e.js";import{B as a}from"./Button-c1d196ed.js";import{L as i}from"./Listing-01fb594f.js";import{a as j}from"./EventData-b03b4866.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-7ab87be3.js";import"./optionClasses-8b995f37.js";import"./Panel-14f35d17.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";import"./FooterLogoLinks-cfe1ab92.js";import"./Link-d4ea7279.js";import"./iframe-322fa5ce.js";import"../sb-preview/runtime.js";import"./Icon-857a786a.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-4d59305e.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";const rt={title:"Examples/Projects/Event Calendar"},f=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{children:t.jsxs(e.Primary,{children:[t.jsx(e.Logo,{title:"Events Calendar",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(e.Aside,{})]})}),t.jsx(v,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t.jsx(u,{children:t.jsx(p,{children:t.jsxs(r,{cols:"2/3",maxWidth:"7xl",children:[t.jsx(h,{children:t.jsx(f,{})}),t.jsxs(g,{isSticky:!0,topSpace:"10",children:[t.jsxs(r,{cols:"1",gridGap:"5",children:[t.jsx(a,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),t.jsx(a,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t.jsx(d,{hasShadow:!0,children:j.map(({title:o,description:m})=>t.jsx(i,{noLink:!0,children:t.jsxs(i.Content,{isSmall:!0,children:[t.jsx(i.Header,{text:o}),t.jsx(i.Excerpt,{text:m})]})},o))})]})]})})}),t.jsx(x,{})]})};var l,n,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Events Calendar" link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
              <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Banner title="Single Event Post Template" align="left" maxWidth="7xl" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" />

      <Main>
        <Section>
          <Column cols="2/3" maxWidth="7xl">
            <Article>
              <EventContent />
            </Article>

            <Aside isSticky topSpace="10">
              <Column cols="1" gridGap="5">
                <Button isType="solid" onClick={() => {
                console.log('click');
              }} title="Remove from my events" />
                <Button isType="solid" color="grey" onClick={() => {
                console.log('click');
              }} title="Add to my events" />
              </Column>
              <StackedList hasShadow>
                {data.map(({
                title,
                description
              }) => <Listing key={title} noLink>
                    <Listing.Content isSmall>
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={description} />
                    </Listing.Content>
                  </Listing>)}
              </StackedList>
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const at=["SingleEvent"];export{s as SingleEvent,at as __namedExportsOrder,rt as default};
//# sourceMappingURL=SingleEvent.stories-ca60151f.js.map
