import{a as e,F as u,j as t}from"./jsx-runtime-9d2cd5de.js";import{M as c}from"./Main-1a5ad365.js";import{S as d}from"./Section-94207df0.js";import{C as a}from"./Column-16e6c206.js";import{S as v}from"./StackedList-e6936170.js";import{A as g}from"./Aside-e4499107.js";import{A as h}from"./Article-2474715e.js";import{T as f}from"./TopNav-3c45640d.js";import{B as S}from"./Banner-c27b125a.js";import{F as q}from"./FooterBasic-3d4a6fb8.js";import{a as x,D as i}from"./DetailsItemData-ceac1fc8.js";import{B as r}from"./Button-fcf6b045.js";import{M as C}from"./index-03b14371.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-c5aec0a8.js";import"./Panel-29a4fec1.js";import"./index-31110fe0.js";import"./Avatar-dd6afa4b.js";import"./DropDown-33fab3d4.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-791be62e.js";import"./Link-0bf51af8.js";import"./iframe-0f25c0de.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-4532c056.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-5cb5f62e.js";const ut={title:"Examples/Projects/Event Calendar/Single Event"},k=()=>e(u,{children:[t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),t("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),t("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>e(u,{children:[t(f,{title:"Events Calendar"}),t(S,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),t(c,{children:t(d,{children:e(a,{cols:"2/3",maxWidth:"7xl",children:[t(h,{children:t(k,{})}),e(g,{isSticky:!0,topSpace:"8",children:[e(a,{cols:"1",gridGap:"5",children:[t(r,{onClick:()=>{console.log("click")},title:"Remove from my events"}),t(r,{isType:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),t(v,{hasShadow:!0,children:x.map(({title:s,description:p})=>e(i,{children:[t(i.Icon,{icon:C}),e(i.Content,{children:[t(i.Title,{title:s}),t(i.Description,{description:p})]})]},s))})]})]})})}),t(q,{})]})};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Single Event Post Template" align="left" maxWidth="7xl" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" />

      <Main>
        <Section>
          <Column cols="2/3" maxWidth="7xl">
            <Article>
              <EventContent />
            </Article>

            <Aside isSticky topSpace="8">
              <Column cols="1" gridGap="5">
                <Button onClick={() => {
                console.log('click');
              }} title="Remove from my events" />
                <Button isType="grey" onClick={() => {
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const pt=["SingleEvent"];export{o as SingleEvent,pt as __namedExportsOrder,ut as default};
//# sourceMappingURL=SingleEvent.stories-08f3a07b.js.map
