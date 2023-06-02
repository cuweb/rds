import{j as e}from"./jsx-runtime-daf202a7.js";import{M as v}from"./Main-5f2ff1fc.js";import{S as j}from"./Section-18a61592.js";import{C as _}from"./Container-f09c5764.js";import{C as o}from"./Column-e7066854.js";import{S as k}from"./StackedList-248cc77c.js";import{A as b}from"./Aside-946bb825.js";import{T as D}from"./TopNav-8e0dc56e.js";import{B as S}from"./Banner-90fcfa00.js";import{H as B}from"./Heading-6241fb61.js";import{F as E}from"./FooterBasic-e97d2b0e.js";import{C as t}from"./Card-01eb838a.js";import{L as r}from"./Listing-84adc86e.js";import{P as F}from"./Pagination-690f959c.js";import{C as L}from"./Calendar-80224ec0.js";import{F as T}from"./Filter-08119531.js";import{a as W}from"./EventData-b52e2b87.js";import{E as y}from"./EventItemData-9f2c19c4.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-f623d047.js";import"./optionClasses-62a5285f.js";import"./Panel-e4f49686.js";import"./Avatar-8e222a3d.js";import"./DropDown-a9918ef3.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-c9972b31.js";import"./Link-d4bc1413.js";import"./iframe-c2d523f0.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-c90cdd56.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterWave-abf00434.js";import"./index-cd8fc8bc.js";import"./index-58d3fd43.js";import"./index-37505e40.js";import"./index-77a8d5d4.js";import"./Badge-fe05d228.js";import"./MapPinIcon-9333a58a.js";import"./ChevronRightIcon-f8484a56.js";import"./Button-c2c2d7e1.js";import"./XMarkIcon-81eef1c8.js";const i={title:"Filter",classname:".filter",sortOptions:[{name:"Daily",href:"#",current:!1},{name:"Weekly",href:"#",current:!1},{name:"Monthly",href:"#",current:!1}],filters:[{id:"audience",name:"Audience",options:[{value:"staff",label:"Staff",checked:!1},{value:"student",label:"Student",checked:!1}]},{id:"tags",name:"Tags",options:[{value:"general",label:"General",checked:!1},{value:"online/virtual",label:"Online/Virtual",checked:!1},{value:"finances",label:"Finances",checked:!1},{value:"healthyworkplace",label:"Healthy Workplace",checked:!1}]}]},Oa={title:"Examples/Projects/Event Calendar"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Events Calendar"}),e.jsx(S,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),e.jsx(v,{hasOverlap:!0,children:e.jsxs(j,{children:[e.jsx(o,{cols:"3",maxWidth:"7xl",children:W.slice(0,3).map(a=>e.jsx(t,{children:e.jsxs("a",{href:a==null?void 0:a.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:a==null?void 0:a.startDate}),e.jsx(t.Header,{text:a==null?void 0:a.title}),e.jsx(t.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),e.jsx(t.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),e.jsxs(_,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(B,{text:"Upcoming Events",maxWidth:"7xl"}),e.jsx(o,{maxWidth:"7xl",children:e.jsx(T,{filters:i.filters,callback:()=>{},sortOptions:i.sortOptions})}),e.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[e.jsxs("div",{children:[e.jsx(k,{hasShadow:!0,children:y.map(({id:a,title:p,link:c,start_date:n,end_date:u,event_address:x,on_campus:g,on_campus_building:h,on_campus_room_number:C,tags:f})=>e.jsx(r,{children:e.jsxs("a",{href:c,children:[e.jsx(r.DateBox,{startDate:n}),e.jsxs(r.Content,{children:[e.jsx(r.Header,{text:p}),e.jsx(r.EventMeta,{startDateTime:n,endDateTime:u,onCampus:g,onCampusBuilding:h,onCampusRoomNumber:C,eventAddress:x}),e.jsx(r.Badges,{tags:f})]})]})},a))}),e.jsx(F,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),e.jsx(b,{isSticky:!0,topSpace:"10",children:e.jsx(L,{callback:()=>{console.log("Calendar")}})})]})]})]})}),e.jsx(E,{})]})};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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

          <Container maxWidth="7xl" isGrey>
            <Heading text="Upcoming Events" maxWidth="7xl" />

            <Column maxWidth="7xl">
              <Filter filters={dataFilter.filters} callback={() => undefined} sortOptions={dataFilter.sortOptions} />
            </Column>

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
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ha=["Homepage"];export{s as Homepage,Ha as __namedExportsOrder,Oa as default};
//# sourceMappingURL=Homepage.stories-bc3a4b16.js.map
