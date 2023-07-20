import{j as t}from"./jsx-runtime-daf202a7.js";import{M as u}from"./Main-5f2ff1fc.js";import{S as p}from"./Section-ef2e0364.js";import{C as o}from"./Column-3275c103.js";import{S as c}from"./StackedList-8c4e48ed.js";import{A as d}from"./Aside-2b834af7.js";import{A as v}from"./Article-d6f5236b.js";import{T as g}from"./TopNav-c4254db1.js";import{B as x}from"./Banner-deb6756e.js";import{F as h}from"./FooterBasic-e51873e1.js";import{B as r}from"./Button-9a118519.js";import{L as e}from"./Listing-f798913a.js";import{b as j}from"./EventData-52b40cb0.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./optionClasses-fb4783dc.js";import"./Panel-37af6d59.js";import"./Avatar-4f8b6b20.js";import"./DropDown-ee468d5d.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-85381e98.js";import"./iframe-1bc874a7.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-5b924599.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-42369ce7.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-65142971.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";const pt={title:"Examples/Projects/Event Calendar"},S=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Events Calendar"}),t.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t.jsx(u,{children:t.jsx(p,{children:t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsx(v,{children:t.jsx(S,{})}),t.jsxs(d,{isSticky:!0,topSpace:"10",children:[t.jsxs(o,{cols:"1",gridGap:"5",children:[t.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),t.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t.jsx(c,{hasShadow:!0,children:j.map(({title:s,description:m})=>t.jsx(e,{noLink:!0,children:t.jsxs(e.Content,{isSmall:!0,children:[t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:m})]})},s))})]})]})})}),t.jsx(h,{})]})};var a,n,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
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
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const ct=["SingleEvent"];export{i as SingleEvent,ct as __namedExportsOrder,pt as default};
//# sourceMappingURL=SingleEvent.stories-fbb14880.js.map
