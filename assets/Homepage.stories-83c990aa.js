import{j as t}from"./jsx-runtime-daf202a7.js";import{M as _}from"./Main-5f2ff1fc.js";import{S as f}from"./Section-ef2e0364.js";import{C as D}from"./Container-8b4fd470.js";import{C as o}from"./Column-7a58bf42.js";import{S as b}from"./StackedList-c0ddfd38.js";import{A as k}from"./Aside-ba522de4.js";import{T as B}from"./TopNav-687958b7.js";import{B as S}from"./Banner-0a263258.js";import{H as E}from"./Heading-3a13edf8.js";import{F}from"./FooterBasic-2fe3f8cd.js";import{C as r}from"./Card-cc28f1ed.js";import{L as s}from"./Listing-81189b80.js";import{P as L}from"./Pagination-690f959c.js";import{C as T}from"./Calendar-a6218e7e.js";import{F as W,a as i}from"./FilterData-196dcbe4.js";import{a as d}from"./EventData-d8bdaec8.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./optionClasses-dcd0a1d3.js";import"./Panel-334a5eaa.js";import"./Avatar-413548b1.js";import"./DropDown-9ee00072.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-fdae82d0.js";import"./Link-bdfc3ab8.js";import"./iframe-6e7cce92.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-badb5238.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterLogoLinks-1e2458fa.js";import"./index-cd8fc8bc.js";import"./index-58d3fd43.js";import"./index-37505e40.js";import"./index-dfffa903.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";import"./Button-60a97d3b.js";import"./XMarkIcon-81eef1c8.js";const Ta={title:"Examples/Projects/Event Calendar"},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{title:"Events Calendar"}),t.jsx(S,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),t.jsx(_,{hasOverlap:!0,children:t.jsxs(f,{children:[t.jsx(o,{cols:"3",maxWidth:"7xl",children:d.slice(0,3).map(a=>t.jsx(r,{children:t.jsxs("a",{href:a==null?void 0:a.link,children:[t.jsx(r.Figure,{children:t.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),t.jsxs(r.Content,{children:[t.jsx(r.DateBox,{startDate:a==null?void 0:a.startDate}),t.jsx(r.Header,{text:a==null?void 0:a.title}),t.jsx(r.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),t.jsx(r.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),t.jsxs(D,{maxWidth:"7xl",isGrey:!0,children:[t.jsx(E,{text:"Upcoming Events",maxWidth:"7xl"}),t.jsx(o,{maxWidth:"7xl",children:t.jsx(W,{filters:i.filters,callback:()=>{},sortOptions:i.sortOptions})}),t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsxs("div",{children:[t.jsx(b,{hasShadow:!0,children:d.map(({id:a,title:c,link:x,startDate:n,endDate:u,event_address:g,on_campus:C,on_campus_building:h,on_campus_room_number:j,tags:v})=>t.jsx(s,{children:t.jsxs("a",{href:x,children:[t.jsx(s.DateBox,{startDate:n}),t.jsxs(s.Content,{children:[t.jsx(s.Header,{text:c}),t.jsx(s.EventMeta,{startDateTime:n,endDateTime:u,onCampus:C,onCampusBuilding:h,onCampusRoomNumber:j,eventAddress:g}),t.jsx(s.Badges,{tags:v})]})]})},a))}),t.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),t.jsx(k,{isSticky:!0,topSpace:"10",children:t.jsx(T,{callback:()=>{console.log("Calendar")}})})]})]})]})}),t.jsx(F,{})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
                  startDate,
                  endDate,
                  event_address,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  tags
                }) => <Listing key={id}>
                        <a href={link}>
                          <Listing.DateBox startDate={startDate} />
                          <Listing.Content>
                            <Listing.Header text={title} />
                            <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Wa=["Homepage"];export{e as Homepage,Wa as __namedExportsOrder,Ta as default};
//# sourceMappingURL=Homepage.stories-83c990aa.js.map
