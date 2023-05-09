import{j as t}from"./jsx-runtime-daf202a7.js";import{M as j}from"./Main-ffb90dea.js";import{S as _}from"./Section-27455862.js";import{C as v}from"./Container-f72e3815.js";import{C as n}from"./Column-985b9376.js";import{S as f}from"./StackedList-4165f68e.js";import{A as D}from"./Aside-76f6731d.js";import{T as b}from"./TopNav-f8ab7c2a.js";import{B as k}from"./Banner-075a2cd7.js";import{H as B}from"./Heading-7e63d58e.js";import{F as E}from"./FooterBasic-1089ebf0.js";import{C as r}from"./Card-b6ddc8be.js";import{L as o}from"./Listing-909a9373.js";import{P as S}from"./Pagination-10e7c15d.js";import{C as L}from"./Calendar-ed14d246.js";import{a as T}from"./EventData-b52e2b87.js";import{E as W}from"./EventItemData-9f2c19c4.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-767b8be6.js";import"./Panel-7a739c47.js";import"./index-12b82ffd.js";import"./Avatar-80b16ccb.js";import"./DropDown-bc11e54e.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-78ba648b.js";import"./Link-3f5ea085.js";import"./iframe-732858f2.js";import"../sb-preview/runtime.js";import"./popover-509b60ee.js";import"./open-closed-aa2934ca.js";import"./keyboard-815d6eba.js";import"./use-resolve-button-type-b6561d60.js";import"./use-event-listener-e14079c9.js";import"./transition-4429edf0.js";import"./Search-234fd26b.js";import"./dialog-12422483.js";import"./platform-42294b71.js";import"./index-73f8b247.js";import"./combobox-b5286f3e.js";import"./use-tracked-pointer-b81bf215.js";import"./TopNavLoader-2924a9dd.js";import"./disclosure-dd40256e.js";import"./FooterWave-9f2988f8.js";import"./index-cd8fc8bc.js";import"./index-58d3fd43.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-4cc04c38.js";import"./index-e4ae510c.js";import"./index-ac9ed659.js";import"./index-24ac3ab7.js";import"./Button-fe53c57d.js";import"./index-aff6d42c.js";import"./index-bdbff7f3.js";const Ma={title:"Examples/Projects/Event Calendar/Homepage"},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(b,{title:"Events Calendar"}),t.jsx(k,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),t.jsx(j,{hasOverlap:!0,children:t.jsxs(_,{children:[t.jsx(n,{cols:"3",maxWidth:"7xl",children:T.slice(0,3).map(a=>t.jsx(r,{children:t.jsxs("a",{href:a==null?void 0:a.link,children:[t.jsx(r.Figure,{children:t.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),t.jsxs(r.Content,{children:[t.jsx(r.DateBox,{startDate:a==null?void 0:a.startDate}),t.jsx(r.Header,{text:a==null?void 0:a.title}),t.jsx(r.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),t.jsx(r.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),t.jsxs(v,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[t.jsx(B,{text:"Upcoming Events",maxWidth:"7xl"}),t.jsxs(n,{cols:"2/3",maxWidth:"7xl",children:[t.jsxs("div",{children:[t.jsx(f,{hasShadow:!0,children:W.map(({id:a,title:m,link:l,start_date:s,end_date:c,event_address:x,on_campus:u,on_campus_building:g,on_campus_room_number:C,tags:h})=>t.jsx(o,{children:t.jsxs("a",{href:l,children:[t.jsx(o.DateBox,{startDate:s}),t.jsxs(o.Content,{children:[t.jsx(o.Header,{text:m}),t.jsx(o.EventMeta,{startDateTime:s,endDateTime:c,onCampus:u,onCampusBuilding:g,onCampusRoomNumber:C,eventAddress:x}),t.jsx(o.Badges,{tags:h})]})]})},a))}),t.jsx(S,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),t.jsx(D,{isSticky:!0,topSpace:"10",children:t.jsx(L,{callback:()=>{console.log("Calendar")}})})]})]})]})}),t.jsx(E,{})]})};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

              <Aside isSticky topSpace="10">
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
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const Pa=["Homepage"];export{e as Homepage,Pa as __namedExportsOrder,Ma as default};
//# sourceMappingURL=Homepage.stories-b979e381.js.map
