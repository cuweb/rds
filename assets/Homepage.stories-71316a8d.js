import{a as t,F as _,j as r}from"./jsx-runtime-9d2cd5de.js";import{M as v}from"./Main-1a5ad365.js";import{S as x}from"./Section-94207df0.js";import{C as f}from"./Container-95591aef.js";import{C as n}from"./Column-16e6c206.js";import{P as b}from"./Panel-29a4fec1.js";import{A as D}from"./Aside-e4499107.js";import{T as E}from"./TopNav-dd8ac6d8.js";import{B as k}from"./Banner-c27b125a.js";import{H as T}from"./Heading-c9b3f003.js";import{F as P}from"./FooterBasic-7364ebaa.js";import{C as o}from"./Card-a878dbc1.js";import{a as B,E as F}from"./EventItemData-64ec8ce4.js";import{P as W}from"./Pagination-ab93f864.js";import{C as S}from"./Calendar-22f0e776.js";import{a as H}from"./EventData-cb779fb8.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-c5aec0a8.js";import"./index-31110fe0.js";import"./Avatar-dd6afa4b.js";import"./DropDown-396d94d5.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-791be62e.js";import"./Link-3b2ad248.js";import"./iframe-0ce2af75.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-152a167d.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-f7cd8690.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-30ab9511.js";import"./index-03b14371.js";import"./index-ac9ed659.js";import"./index-f976a069.js";import"./Button-e4455f28.js";import"./index-aff6d42c.js";import"./index-bdbff7f3.js";const ya={title:"Examples/Projects/Event Calendar/Homepage"},e={render:()=>t(_,{children:[r(E,{title:"Events Calendar"}),r(k,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),r(v,{hasOverlap:!0,children:t(x,{children:[r(n,{cols:"3",maxWidth:"7xl",children:H.slice(0,3).map(a=>r(o,{children:t("a",{href:a==null?void 0:a.link,children:[r(o.Figure,{children:r("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),t(o.Content,{children:[r(o.DateBox,{startDate:a==null?void 0:a.startDate}),r(o.Header,{text:a==null?void 0:a.title}),r(o.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),r(o.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),t(f,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[r(T,{text:"Upcoming Events",maxWidth:"7xl"}),t(n,{cols:"2/3",maxWidth:"7xl",children:[t("div",{children:[r(b,{hasShadow:!0,children:B.map(({id:a,title:l,start_date:m,end_date:p,event_address:c,on_campus:u,on_campus_building:g,on_campus_room_number:C,tags:h})=>r(F,{as:"div",link:"#",title:l,startDateTime:m,endDateTime:p,event_address:c,on_campus:u,on_campus_building:g,on_campus_room_number:C,tags:h},a))}),r(W,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),r(D,{children:r(S,{callback:()=>{console.log("Calendar")}})})]})]})]})}),r(P,{})]})};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Featured Events" align="left" isType="dark-wave" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="3" maxWidth="7xl">
            {dataCard.slice(0, 3).map(item => <Card key={item?.id}>
                <a href={item?.link}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width={400} height={175} />
                  </Card.Figure>
                  <Card.Content>
                    <Card.DateBox startDate={item?.startDate} />
                    <Card.Header text={item?.title} />
                    <Card.EventMeta startDateTime={item?.startDate} endDateTime={item?.endDate} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} eventAddress={item?.event_address} />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </a>
              </Card>)}
          </Column>

          <Container bgColor="grey" maxWidth="7xl" hasProse>
            <Heading text="Upcoming Events" maxWidth="7xl" />

            {/* <Column maxWidth="7xl">
             <Filter filters={data.filters} callback={callbackfilter} sortOptions={data.sortOptions} />
             </Column> */}

            <Column cols="2/3" maxWidth="7xl">
              <div>
                <Panel hasShadow>
                  {dataList.map(({
                  id,
                  title,
                  // link,
                  start_date,
                  end_date,
                  event_address,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  tags
                }) => <EventItem key={id} as="div" link="#" title={title} startDateTime={start_date} endDateTime={end_date} event_address={event_address} on_campus={on_campus} on_campus_building={on_campus_building} on_campus_room_number={on_campus_room_number} tags={tags} />)}
                </Panel>

                <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => {
                console.log('Pagination');
              }} />
              </div>

              <Aside>
                <Calendar callback={() => {
                console.log('Calendar');
              }} />
              </Aside>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const Aa=["Homepage"];export{e as Homepage,Aa as __namedExportsOrder,ya as default};
//# sourceMappingURL=Homepage.stories-71316a8d.js.map
