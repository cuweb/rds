import{a as t,F as u,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as c}from"./Main-a4fc807a.js";import{C as d}from"./Container-30f2fe44.js";import{C as a}from"./Column-cfe3ae90.js";import{P as v}from"./Panel-2bd23c0a.js";import{A as g}from"./Aside-700d3640.js";import{A as h}from"./Article-8a395ee7.js";import{T as f}from"./TopNav-10215eba.js";import{B as C}from"./Banner-a9250963.js";import{F as q}from"./FooterBasic-d5768680.js";import{D as x,a as i}from"./DetailsItemData-5885bde4.js";import{B as r}from"./Button-a7044143.js";import{M as S}from"./index-e40656e9.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-8ecc16b7.js";import"./index-e08e05bb.js";import"./Avatar-aaee875c.js";import"./DropDown-9cebabe4.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-f125d8c8.js";import"./Link-44b0899b.js";import"./popover-761b7829.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-a3eb1d61.js";import"./transition-ad75749a.js";import"./Search-f3be5d0a.js";import"./dialog-82995df1.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./use-tracked-pointer-511c0c47.js";import"./disclosure-76f74e80.js";import"./FooterWave-b91f29cc.js";const ae={title:"Examples/Projects/Event Calendar/Single Event"},P=()=>t(u,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."}),e("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",alt:"",width:"1310",height:"873"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]}),o={render:()=>t(u,{children:[e(f,{title:"Events Calendar"}),e(C,{title:"Single Event Post Template",align:"left",maxWidth:"7xl",isType:"image",image:"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"}),e(c,{children:e(d,{as:"section",children:t(a,{cols:"2/3",maxWidth:"7xl",children:[e(h,{children:e(P,{})}),t(g,{isSticky:!0,topSpace:"8",children:[t(a,{cols:"1",gridGap:"5",children:[e(r,{onClick:()=>{console.log("click")},title:"Remove from my events"}),e(r,{isType:"grey",onClick:()=>{console.log("click")},title:"Add to my events"})]}),e(v,{hasShadow:!0,children:x.map(({title:s,description:p})=>t(i,{children:[e(i.Icon,{icon:S}),t(i.Content,{children:[e(i.Title,{title:s}),e(i.Description,{description:p})]})]},s))})]})]})})}),e(q,{})]})};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Single Event Post Template" align="left" maxWidth="7xl" isType="image" image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg" />

      <Main>
        <Container as="section">
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
              <Panel hasShadow>
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
              </Panel>
            </Aside>
          </Column>
        </Container>
      </Main>

      <FooterBasic />
    </>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const re=["SingleEvent"];export{o as SingleEvent,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=SingleEvent.stories-47fd5c79.js.map
