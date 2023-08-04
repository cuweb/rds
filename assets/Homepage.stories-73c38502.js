import{j as t}from"./jsx-runtime-daf202a7.js";import{M as D}from"./Main-5f2ff1fc.js";import{S as _}from"./Section-ef2e0364.js";import{C as f}from"./Container-8b4fd470.js";import{C as o}from"./Column-3275c103.js";import{S as b}from"./StackedList-8c4e48ed.js";import{A as k}from"./Aside-2b834af7.js";import{T as B}from"./TopNav-aaff934b.js";import{B as S}from"./Banner-deb6756e.js";import{H as E}from"./Heading-6baa9162.js";import{F}from"./FooterBasic-4ed930f0.js";import{C as r}from"./Card-cec3ae4f.js";import{L as e}from"./Listing-a272ef52.js";import{P as L}from"./Pagination-690f959c.js";import{C as T}from"./Calendar-801a09ec.js";import{F as W,a as d}from"./FilterData-e41113f0.js";import{a as l}from"./EventData-52b40cb0.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-db4baf10.js";import"./optionClasses-fb4783dc.js";import"./Panel-37af6d59.js";import"./Avatar-4f8b6b20.js";import"./DropDown-9e9b272f.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-a2a3354a.js";import"./Link-19c33014.js";import"./iframe-5b8b938a.js";import"../sb-preview/runtime.js";import"./popover-5930d8ab.js";import"./open-closed-aa2934ca.js";import"./keyboard-0f6663c0.js";import"./use-resolve-button-type-b6561d60.js";import"./use-root-containers-aa30d9e9.js";import"./index-73f8b247.js";import"./transition-cad67125.js";import"./Search-41a9e331.js";import"./dialog-e3720377.js";import"./platform-42294b71.js";import"./combobox-393d016a.js";import"./use-tracked-pointer-7104e2e3.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-f401fb37.js";import"./FooterLogoLinks-4f1bd8be.js";import"./index-ac609b0f.js";import"./index-58d3fd43.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-65142971.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";import"./Button-9a118519.js";import"./index-14d09e4e.js";import"./XMarkIcon-81eef1c8.js";const Ha={title:"Examples/Projects/Event Calendar"},s={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{title:"Events Calendar"}),t.jsx(S,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),t.jsx(D,{hasOverlap:!0,children:t.jsxs(_,{children:[t.jsx(o,{cols:"3",maxWidth:"7xl",children:l.slice(0,3).map(a=>t.jsx(r,{children:t.jsxs("a",{href:a==null?void 0:a.link,children:[t.jsx(r.Figure,{children:t.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),t.jsxs(r.Content,{children:[t.jsx(r.DateBox,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),t.jsx(r.Header,{text:a==null?void 0:a.title}),t.jsx(r.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),t.jsx(r.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),t.jsxs(f,{maxWidth:"7xl",isGrey:!0,children:[t.jsx(E,{text:"Upcoming Events",maxWidth:"7xl"}),t.jsx(o,{maxWidth:"7xl",children:t.jsx(W,{filters:d.filters,callback:()=>{},sortOptions:d.sortOptions})}),t.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[t.jsxs("div",{children:[t.jsx(b,{hasShadow:!0,children:l.map(({id:a,title:x,link:u,startDate:n,endDate:i,event_address:g,on_campus:C,on_campus_building:h,on_campus_room_number:j,tags:v})=>t.jsx(e,{children:t.jsxs("a",{href:u,children:[t.jsx(e.DateBox,{startDate:n,endDate:i}),t.jsxs(e.Content,{children:[t.jsx(e.Header,{text:x}),t.jsx(e.EventMeta,{startDateTime:n,endDateTime:i,onCampus:C,onCampusBuilding:h,onCampusRoomNumber:j,eventAddress:g}),t.jsx(e.Badges,{tags:v})]})]})},a))}),t.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),t.jsx(k,{isSticky:!0,topSpace:"10",children:t.jsx(T,{callback:()=>{console.log("Calendar")}})})]})]})]})}),t.jsx(F,{})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
                    <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
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
                          <Listing.DateBox startDate={startDate} endDate={endDate} />
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
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Oa=["Homepage"];export{s as Homepage,Oa as __namedExportsOrder,Ha as default};
//# sourceMappingURL=Homepage.stories-73c38502.js.map
