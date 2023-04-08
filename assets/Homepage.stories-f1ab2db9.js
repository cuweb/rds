import{a as r,F as v,j as t}from"./jsx-runtime-9d2cd5de.js";import{M as f}from"./Main-1a5ad365.js";import{S as D}from"./Section-94207df0.js";import{C as b}from"./Container-95591aef.js";import{C as i}from"./Column-16e6c206.js";import{S as k}from"./StackedList-e6936170.js";import{A as B}from"./Aside-e4499107.js";import{T as E}from"./TopNav-695fe47c.js";import{B as L}from"./Banner-c27b125a.js";import{H as S}from"./Heading-c9b3f003.js";import{F as T}from"./FooterBasic-3334a409.js";import{C as o}from"./Card-a662c21d.js";import{L as e}from"./Listing-04b781a4.js";import{P as F}from"./Pagination-ab93f864.js";import{C as W}from"./Calendar-96ee2b22.js";import{a as H}from"./EventData-cb779fb8.js";import{E as A}from"./EventItemData-9f2c19c4.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-c5aec0a8.js";import"./Panel-29a4fec1.js";import"./index-31110fe0.js";import"./Avatar-dd6afa4b.js";import"./DropDown-2d6dee0b.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-791be62e.js";import"./Link-7cc92a43.js";import"./iframe-5aa4b0a2.js";import"../sb-preview/runtime.mjs";import"./popover-6662df09.js";import"./open-closed-6ab898d8.js";import"./keyboard-09f27566.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-87065351.js";import"./transition-ad75749a.js";import"./Search-dbb7d37f.js";import"./dialog-37dabc7d.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-6d6ee991.js";import"./use-tracked-pointer-40c2495e.js";import"./TopNavLoader-e6c62d54.js";import"./disclosure-251f59c3.js";import"./FooterWave-b851680e.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-30ab9511.js";import"./index-d638a58e.js";import"./index-ac9ed659.js";import"./index-f976a069.js";import"./Button-13be17a3.js";import"./index-aff6d42c.js";import"./index-bdbff7f3.js";const ya={title:"Examples/Projects/Event Calendar/Homepage"},n={render:()=>r(v,{children:[t(E,{title:"Events Calendar"}),t(L,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),t(f,{hasOverlap:!0,children:r(D,{children:[t(i,{cols:"3",maxWidth:"7xl",children:H.slice(0,3).map(a=>t(o,{children:r("a",{href:a==null?void 0:a.link,children:[t(o.Figure,{children:t("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),r(o.Content,{children:[t(o.DateBox,{startDate:a==null?void 0:a.startDate}),t(o.Header,{text:a==null?void 0:a.title}),t(o.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),t(o.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),r(b,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[t(S,{text:"Upcoming Events",maxWidth:"7xl"}),r(i,{cols:"2/3",maxWidth:"7xl",children:[r("div",{children:[t(k,{hasShadow:!0,children:A.map(({id:a,title:p,link:c,start_date:s,end_date:g,event_address:u,on_campus:C,on_campus_building:h,on_campus_room_number:x,tags:_})=>t(e,{children:r("a",{href:c,children:[t(e.DateBox,{startDate:s}),r(e.Content,{children:[t(e.Header,{text:p}),t(e.EventMeta,{startDateTime:s,endDateTime:g,onCampus:C,onCampusBuilding:h,onCampusRoomNumber:x,eventAddress:u}),t(e.Badges,{tags:_})]})]})},a))}),t(F,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),t(B,{children:t(W,{callback:()=>{console.log("Calendar")}})})]})]})]})}),t(T,{})]})};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
                <StackedList hasShadow>
                  {dataList.map(({
                  id,
                  title,
                  link,
                  start_date,
                  end_date,
                  event_address,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  tags
                }) => <Listing key={id}>
                        <a href={link}>
                          <Listing.DateBox startDate={start_date} />
                          <Listing.Content>
                            <Listing.Header text={title} />
                            <Listing.EventMeta startDateTime={start_date} endDateTime={end_date} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                            <Listing.Badges tags={tags} />
                          </Listing.Content>
                        </a>
                      </Listing>)}
                </StackedList>

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
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Na=["Homepage"];export{n as Homepage,Na as __namedExportsOrder,ya as default};
//# sourceMappingURL=Homepage.stories-f1ab2db9.js.map
