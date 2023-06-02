import{j as e}from"./jsx-runtime-daf202a7.js";import{M as u}from"./Main-ffb90dea.js";import{S as p}from"./Section-399033d9.js";import{C as o}from"./Column-985b9376.js";import{S as c}from"./StackedList-4165f68e.js";import{A as d}from"./Aside-76f6731d.js";import{A as v}from"./Article-5dcbb8e2.js";import{T as g}from"./TopNav-acfd88d9.js";import{B as x}from"./Banner-2ef25b74.js";import{F as h}from"./FooterBasic-a5b76aa4.js";import{a as j,D as t}from"./DetailsItemData-bfe07784.js";import{B as r}from"./Button-fe53c57d.js";import{M as f}from"./MapPinIcon-9333a58a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-74916236.js";import"./optionClasses-767b8be6.js";import"./Panel-7a739c47.js";import"./Avatar-80b16ccb.js";import"./DropDown-7419f3f0.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-78ba648b.js";import"./Link-20450862.js";import"./iframe-d9a4d6b3.js";import"../sb-preview/runtime.js";import"./popover-509b60ee.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-event-listener-e14079c9.js";import"./transition-4429edf0.js";import"./Search-a7e0055b.js";import"./dialog-12422483.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./combobox-b5286f3e.js";import"./use-tracked-pointer-b81bf215.js";import"./TopNavLoader-2924a9dd.js";import"./disclosure-dd40256e.js";import"./FooterWave-bd7dc3c5.js";const ne={title:"Examples/Projects/Event Calendar/Single Event"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Events Calendar"}),e.jsx(x,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),e.jsx(u,{children:e.jsx(p,{children:e.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[e.jsx(v,{children:e.jsx(S,{})}),e.jsxs(d,{isSticky:!0,topSpace:"10",children:[e.jsxs(o,{cols:"1",gridGap:"5",children:[e.jsx(r,{isType:"solid",onClick:()=>{console.log("click")},title:"Remove from my events"}),e.jsx(r,{isType:"solid",color:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),e.jsx(c,{hasShadow:!0,children:j.map(({title:s,description:m})=>e.jsxs(t,{children:[e.jsx(t.Icon,{icon:f}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:s}),e.jsx(t.Description,{description:m})]})]},s))})]})]})})}),e.jsx(h,{})]})};var a,n,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const le=["SingleEvent"];export{i as SingleEvent,le as __namedExportsOrder,ne as default};
//# sourceMappingURL=SingleEvent.stories-190f9a1e.js.map
