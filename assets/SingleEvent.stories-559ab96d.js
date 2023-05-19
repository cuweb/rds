import{j as t}from"./jsx-runtime-daf202a7.js";import{M as u}from"./Main-ffb90dea.js";import{S as p}from"./Section-41118051.js";import{C as o}from"./Column-985b9376.js";import{S as c}from"./StackedList-4165f68e.js";import{A as d}from"./Aside-76f6731d.js";import{A as v}from"./Article-f0efb876.js";import{T as g}from"./TopNav-23efb17b.js";import{B as x}from"./Banner-075a2cd7.js";import{F as h}from"./FooterBasic-8463de1f.js";import{a as j,D as e}from"./DetailsItemData-84ba5a8c.js";import{B as r}from"./Button-fe53c57d.js";import{M as f}from"./index-e4ae510c.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-044468c0.js";import"./optionClasses-767b8be6.js";import"./Panel-7a739c47.js";import"./index-12b82ffd.js";import"./Avatar-80b16ccb.js";import"./DropDown-0540f52a.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-78ba648b.js";import"./Link-40e8b64d.js";import"./iframe-18d13cc1.js";import"../sb-preview/runtime.js";import"./popover-509b60ee.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-event-listener-e14079c9.js";import"./transition-4429edf0.js";import"./Search-14c52cfb.js";import"./dialog-12422483.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./combobox-b5286f3e.js";import"./use-tracked-pointer-b81bf215.js";import"./TopNavLoader-2924a9dd.js";import"./disclosure-dd40256e.js";import"./FooterWave-9c1bbae3.js";const lt={title:"Examples/Projects/Event Calendar/Single Event"},S=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"Events Calendar"}),t.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t.jsx(u,{children:t.jsx(p,{children:t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsx(v,{children:t.jsx(S,{})}),t.jsxs(d,{isSticky:!0,topSpace:"10",children:[t.jsxs(o,{cols:"1",gridGap:"5",children:[t.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),t.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t.jsx(c,{hasShadow:!0,children:j.map(({title:s,description:m})=>t.jsxs(e,{children:[t.jsx(e.Icon,{icon:f}),t.jsxs(e.Content,{children:[t.jsx(e.Title,{title:s}),t.jsx(e.Description,{description:m})]})]},s))})]})]})})}),t.jsx(h,{})]})};var a,n,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
//# sourceMappingURL=SingleEvent.stories-559ab96d.js.map
