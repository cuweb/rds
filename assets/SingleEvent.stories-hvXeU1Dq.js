import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as c}from"./Main-CJHjqGYv.js";import{S as p}from"./Section-CVJtbDHu.js";import{C as a}from"./Column-Ci_0zuDg.js";import{S as d}from"./StackedList-DGrgHzif.js";import{A as v}from"./Aside-D_akTa4g.js";import{A as g}from"./Article-BEabPed6.js";import{B as x}from"./Banner-DLn8e_N_.js";import{N as t,a as h,b as j}from"./NavData-BKlm5Tye.js";import{F as S}from"./FooterBasic-8HvW0oVK.js";import{B as r}from"./Button-DZIOirHR.js";import{L as i}from"./Listing-DATyQjq4.js";import{b as f}from"./EventData-Suzp3opJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./optionClasses-nRtJeGr9.js";import"./useLinkContext-B6ulR7Vg.js";import"./Avatar-DjV_X37D.js";import"./FooterLogoLinks-sEvdyT2V.js";import"./Icon-DPQQEofx.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./parse-BfiLtjV-.js";import"./getDate-BAl1yPiw.js";import"./ChevronRightIcon-CNwURrwD.js";const K={title:"Projects/Event Calendar"},y=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs(t.Primary,{children:[e.jsx(t.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(t.Menu,{menu:h}),e.jsx(t.Aside,{menu:j})]})}),e.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),e.jsx(c,{children:e.jsx(p,{children:e.jsxs(a,{cols:"2/3",maxWidth:"7xl",children:[e.jsx(g,{children:e.jsx(y,{})}),e.jsxs(v,{isSticky:!0,topSpace:"10",children:[e.jsxs(a,{cols:"1",gridGap:"5",children:[e.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),e.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),e.jsx(d,{hasShadow:!0,children:f.map(({title:n,description:m})=>e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx(i.Header,{children:n}),e.jsx(i.Excerpt,{text:m})]})},n))})]})]})})}),e.jsx(S,{})]})};var o,l,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const Q=["SingleEvent"];export{s as SingleEvent,Q as __namedExportsOrder,K as default};
