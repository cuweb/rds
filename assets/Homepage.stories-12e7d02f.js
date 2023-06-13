import{j as e}from"./jsx-runtime-daf202a7.js";import{M as j}from"./Main-5f2ff1fc.js";import{S as _}from"./Section-559dedcc.js";import{C as k}from"./Container-42168418.js";import{C as o}from"./Column-f4705f13.js";import{S as D}from"./StackedList-3f25871c.js";import{A as b}from"./Aside-ba522de4.js";import{T as S}from"./TopNav-42aefc31.js";import{B}from"./Banner-161003c9.js";import{H as F}from"./Heading-3a13edf8.js";import{F as E}from"./FooterBasic-c94fed36.js";import{C as t}from"./Card-26e3c0d5.js";import{L as r}from"./Listing-ce27a3e7.js";import{P as L}from"./Pagination-690f959c.js";import{C as T}from"./Calendar-f8c90d38.js";import{F as W}from"./Filter-9d293185.js";import{a as i}from"./EventData-d8bdaec8.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-7b5d8244.js";import"./optionClasses-dcd0a1d3.js";import"./Panel-333855da.js";import"./Avatar-413548b1.js";import"./DropDown-48647bb7.js";import"./ChevronDownIcon-bf1ca2d9.js";import"./Icon-fdae82d0.js";import"./Link-5f7482ae.js";import"./iframe-e35c0241.js";import"../sb-preview/runtime.js";import"./popover-836cad03.js";import"./open-closed-50e7a81e.js";import"./keyboard-c534a18f.js";import"./use-resolve-button-type-5514e10c.js";import"./use-root-containers-cd4bc64b.js";import"./index-73f8b247.js";import"./transition-6ad8d931.js";import"./Search-3e1d88fe.js";import"./dialog-0a893a82.js";import"./platform-18d24fa4.js";import"./combobox-6144e67a.js";import"./use-tracked-pointer-50f23cfa.js";import"./TopNavLoader-62ff9509.js";import"./disclosure-bf3185ec.js";import"./FooterWave-8d5eeabc.js";import"./index-cd8fc8bc.js";import"./index-58d3fd43.js";import"./index-37505e40.js";import"./index-dfffa903.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";import"./Button-a8ed5a4d.js";import"./XMarkIcon-81eef1c8.js";const l={title:"Filter",classname:".filter",sortOptions:[{name:"Daily",href:"#",current:!1},{name:"Weekly",href:"#",current:!1},{name:"Monthly",href:"#",current:!1}],filters:[{id:"audience",name:"Audience",options:[{value:"staff",label:"Staff",checked:!1},{value:"student",label:"Student",checked:!1}]},{id:"tags",name:"Tags",options:[{value:"general",label:"General",checked:!1},{value:"online/virtual",label:"Online/Virtual",checked:!1},{value:"finances",label:"Finances",checked:!1},{value:"healthyworkplace",label:"Healthy Workplace",checked:!1}]}]},Ta={title:"Examples/Projects/Event Calendar"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Events Calendar"}),e.jsx(B,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),e.jsx(j,{hasOverlap:!0,children:e.jsxs(_,{children:[e.jsx(o,{cols:"3",maxWidth:"7xl",children:i.slice(0,3).map(a=>e.jsx(t,{children:e.jsxs("a",{href:a==null?void 0:a.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:a==null?void 0:a.startDate}),e.jsx(t.Header,{text:a==null?void 0:a.title}),e.jsx(t.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),e.jsx(t.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),e.jsxs(k,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(F,{text:"Upcoming Events",maxWidth:"7xl"}),e.jsx(o,{maxWidth:"7xl",children:e.jsx(W,{filters:l.filters,callback:()=>{},sortOptions:l.sortOptions})}),e.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[e.jsxs("div",{children:[e.jsx(D,{hasShadow:!0,children:i.map(({id:a,title:c,link:u,startDate:n,endDate:x,event_address:g,on_campus:h,on_campus_building:C,on_campus_room_number:f,tags:v})=>e.jsx(r,{children:e.jsxs("a",{href:u,children:[e.jsx(r.DateBox,{startDate:n}),e.jsxs(r.Content,{children:[e.jsx(r.Header,{text:c}),e.jsx(r.EventMeta,{startDateTime:n,endDateTime:x,onCampus:h,onCampusBuilding:C,onCampusRoomNumber:f,eventAddress:g}),e.jsx(r.Badges,{tags:v})]})]})},a))}),e.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),e.jsx(b,{isSticky:!0,topSpace:"10",children:e.jsx(T,{callback:()=>{console.log("Calendar")}})})]})]})]})}),e.jsx(E,{})]})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Wa=["Homepage"];export{s as Homepage,Wa as __namedExportsOrder,Ta as default};
//# sourceMappingURL=Homepage.stories-12e7d02f.js.map
