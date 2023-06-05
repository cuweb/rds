import{j as t}from"./jsx-runtime-daf202a7.js";import{M as u}from"./Main-5f2ff1fc.js";import{S as p}from"./Section-a4a11e56.js";import{C as o}from"./Column-87b3cdac.js";import{S as c}from"./StackedList-3f25871c.js";import{A as d}from"./Aside-ba522de4.js";import{A as v}from"./Article-606deab2.js";import{T as g}from"./TopNav-1bcdf8e4.js";import{B as x}from"./Banner-43cb0331.js";import{F as h}from"./FooterBasic-f71e4183.js";import{B as r}from"./Button-a8ed5a4d.js";import{L as e}from"./Listing-ce27a3e7.js";import{b as j}from"./EventData-d8bdaec8.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-cd3c66b4.js";import"./optionClasses-dcd0a1d3.js";import"./Panel-333855da.js";import"./Avatar-413548b1.js";import"./DropDown-cfc9df07.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-fdae82d0.js";import"./Link-b6e0c9e9.js";import"./iframe-f6de70b0.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-1ffab8d8.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterWave-08a685f9.js";import"./index-37505e40.js";import"./index-dfffa903.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";const ut={title:"Examples/Projects/Event Calendar"},S=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Events Calendar"}),t.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t.jsx(u,{children:t.jsx(p,{children:t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsx(v,{children:t.jsx(S,{})}),t.jsxs(d,{isSticky:!0,topSpace:"10",children:[t.jsxs(o,{cols:"1",gridGap:"5",children:[t.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),t.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t.jsx(c,{hasShadow:!0,children:j.map(({title:s,description:m})=>t.jsx(e,{noLink:!0,children:t.jsxs(e.Content,{isSmall:!0,children:[t.jsx(e.Header,{text:s}),t.jsx(e.Excerpt,{text:m})]})},s))})]})]})})}),t.jsx(h,{})]})};var a,n,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const pt=["SingleEvent"];export{i as SingleEvent,pt as __namedExportsOrder,ut as default};
//# sourceMappingURL=SingleEvent.stories-80eeccf3.js.map
