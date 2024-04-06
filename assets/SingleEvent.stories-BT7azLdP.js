import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as c}from"./Main-CDNSDx3Q.js";import{S as d}from"./Section-NPasMOYw.js";import{C as a}from"./Column-D0XSJzRa.js";import{S as p}from"./StackedList-Bl2k4Uix.js";import{A as v}from"./Aside-auLqIbcH.js";import{A as g}from"./Article-CC2_AOgI.js";import{B as x}from"./Banner-CWW7TnU4.js";import{N as t,a as h,b as j}from"./NavData-DcaDM_IY.js";import{F as S}from"./FooterBasic-B1EMWKaj.js";import{B as r}from"./Button-C2NVVlb8.js";import{L as i}from"./Listing-BknD3NBK.js";import{b as f}from"./EventData-Suzp3opJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./optionClasses-DqDyLBcN.js";import"./useLinkContext-Ch0lwH8X.js";import"./Avatar-2ZHJOB-7.js";import"./FooterLogoLinks-Dl9zUNVy.js";import"./Icon-D5n7_2V-.js";import"./parse-BfiLtjV-.js";import"./getDate-BAl1yPiw.js";import"./ChevronRightIcon-CNwURrwD.js";const J={title:"Projects/Event Calendar"},y=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs(t.Primary,{children:[e.jsx(t.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(t.Menu,{menu:h}),e.jsx(t.Aside,{menu:j})]})}),e.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),e.jsx(c,{children:e.jsx(d,{children:e.jsxs(a,{cols:"2/3",maxWidth:"7xl",children:[e.jsx(g,{children:e.jsx(y,{})}),e.jsxs(v,{isSticky:!0,topSpace:"10",children:[e.jsxs(a,{cols:"1",gridGap:"5",children:[e.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),e.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),e.jsx(p,{hasShadow:!0,children:f.map(({title:n,description:m})=>e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx(i.Header,{children:n}),e.jsx(i.Excerpt,{text:m})]})},n))})]})]})})}),e.jsx(S,{})]})};var o,l,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

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
              }) => <Listing key={title}>
                    <Listing.Body>
                      <Listing.Header>{title}</Listing.Header>
                      <Listing.Excerpt text={description} />
                    </Listing.Body>
                  </Listing>)}
              </StackedList>
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const K=["SingleEvent"];export{s as SingleEvent,K as __namedExportsOrder,J as default};
