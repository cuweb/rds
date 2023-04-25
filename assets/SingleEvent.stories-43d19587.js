import{j as t}from"./jsx-runtime-3aeb2321.js";import{M as u}from"./Main-111d48bd.js";import{S as p}from"./Section-df772d5f.js";import{C as o}from"./Column-d1b07449.js";import{S as c}from"./StackedList-27cedeba.js";import{A as d}from"./Aside-0838546c.js";import{A as v}from"./Article-9ae88f23.js";import{T as g}from"./TopNav-95f736ca.js";import{B as x}from"./Banner-6b216d50.js";import{F as h}from"./FooterBasic-1584f8e9.js";import{a as j,D as e}from"./DetailsItemData-3a3632a5.js";import{B as r}from"./Button-6c722b26.js";import{M as f}from"./index-d638a58e.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-4f7b0afb.js";import"./Panel-ba0c9a84.js";import"./index-31110fe0.js";import"./Avatar-ed8d0223.js";import"./DropDown-d906bb64.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-12c54893.js";import"./Link-60692ad3.js";import"./iframe-4aef7246.js";import"../sb-preview/runtime.mjs";import"./popover-3492950b.js";import"./open-closed-2007ab4d.js";import"./keyboard-7b7aa261.js";import"./use-resolve-button-type-acf5cd20.js";import"./use-event-listener-4e982338.js";import"./transition-4a057a81.js";import"./Search-4cb1a07a.js";import"./dialog-40633ea3.js";import"./platform-cc7c4922.js";import"./index-1eb27dd0.js";import"./combobox-d55c58b7.js";import"./use-tracked-pointer-88919d7e.js";import"./TopNavLoader-ce221ba9.js";import"./disclosure-ec71063b.js";import"./FooterWave-bc72adf2.js";const lt={title:"Examples/Projects/Event Calendar/Single Event"},S=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Events Calendar"}),t.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t.jsx(u,{children:t.jsx(p,{children:t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsx(v,{children:t.jsx(S,{})}),t.jsxs(d,{isSticky:!0,topSpace:"10",children:[t.jsxs(o,{cols:"1",gridGap:"5",children:[t.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),t.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t.jsx(c,{hasShadow:!0,children:j.map(({title:s,description:m})=>t.jsxs(e,{children:[t.jsx(e.Icon,{icon:f}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{title:s}),t.jsx(e.Description,{description:m})]})]},s))})]})]})})}),t.jsx(h,{})]})};var a,n,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
              }) => <DetailsItem key={title}>
                    <DetailsItem.Icon icon={MapPinIcon} />
                    <DetailsItem.Content>
                      <DetailsItem.Title title={title} />
                      <DetailsItem.Description description={description} />
                    </DetailsItem.Content>
                  </DetailsItem>)}
              </StackedList>
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const mt=["SingleEvent"];export{i as SingleEvent,mt as __namedExportsOrder,lt as default};
//# sourceMappingURL=SingleEvent.stories-43d19587.js.map
