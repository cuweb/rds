import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{M as f}from"./Main-6yTdoHTQ.js";import{S as D}from"./Section-273f7e_u.js";import{C as _}from"./Container-gVUWVoze.js";import{C as e}from"./Column-YPGoCv6X.js";import{S as b}from"./StackedList-sQ1MOSVA.js";import{A as B}from"./Aside-lzkQ14X1.js";import{B as L}from"./Banner-R_5McoO7.js";import{T as s}from"./TopBar-qqY8VxNg.js";import{H as T}from"./Heading-e9K0UJNj.js";import{F as k}from"./FooterBasic-SSg2LFox.js";import{C as o}from"./Card-KQ7PB6Gi.js";import{L as t}from"./Listing-k_HTu7wq.js";import{P as S}from"./Pagination-SW9FLYUC.js";import{C as y}from"./Calendar-mbh6a74V.js";import{F,a as d}from"./FilterData-q20jmqwa.js";import{a as c}from"./EventData-sFsgDJMI.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./globalClasses-EYtDdY2O.js";import"./optionClasses-ccrz1VfO.js";import"./menu-oFeCtKpM.js";import"./transition-8qPHkook.js";import"./use-root-containers-7zw4BiR7.js";import"./index-jmm5gWkb.js";import"./use-tracked-pointer-EZY5uaCR.js";import"./use-resolve-button-type-kFzmZbAv.js";import"./ChevronDownIcon-qyckNURu.js";import"./ChevronRightIcon-U-mlqZiw.js";import"./disclosure-LLQX-sEi.js";import"./MagnifyingGlassIcon-5GODM8Pf.js";import"./popover-tP4paLqk.js";import"./FooterLogoLinks-8aTGfz_A.js";import"./Link-vFzDdz9n.js";import"./iframe-JE-Jvi96.js";import"../sb-preview/runtime.js";import"./index-bkt57PaO.js";import"./isNativeReflectConstruct-3LOYyi5T.js";import"./index-9aHumogv.js";import"./index-hXDENwr6.js";import"./index-VFMbf6KQ.js";import"./Badge-Zsxsg5ql.js";import"./ChevronRightIcon-slJogYDx.js";import"./Button-p6vP9p68.js";import"./Icon-WcGhYRcv.js";import"./index-0f3231Fw.js";import"./XMarkIcon-ABUcTHhH.js";import"./dialog-WdIYZETR.js";const La={title:"Projects/Event Calendar"},r={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(s,{children:n.jsxs(s.Primary,{children:[n.jsx(s.Logo,{title:"Events Calendar",link:"https://carleton.ca/webservices",children:n.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[n.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),n.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),n.jsx(s.Aside,{})]})}),n.jsx(L,{title:"Featured Events",align:"left",isType:"light-grey",maxWidth:"7xl",hasOverlap:!0}),n.jsx(f,{hasOverlap:!0,children:n.jsxs(D,{children:[n.jsx(e,{cols:"4",maxWidth:"7xl",children:c.slice(0,4).map(a=>n.jsxs(o,{hasShadow:"onCard",children:[n.jsx(o.Figure,{children:n.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),n.jsx(o.DateBox,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),n.jsx(o.Header,{children:a==null?void 0:a.title}),n.jsx(o.Body,{children:n.jsx(o.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})}),n.jsx(o.Footer,{isType:"button",children:n.jsx("a",{href:a==null?void 0:a.link,children:"More info"})})]},a==null?void 0:a.id))}),n.jsxs(_,{maxWidth:"7xl",isGrey:!0,children:[n.jsx(T,{text:"Upcoming Events",maxWidth:"7xl"}),n.jsx(e,{maxWidth:"7xl",children:n.jsx(F,{filters:d.filters,callback:()=>{},sortOptions:d.sortOptions})}),n.jsxs(e,{cols:"2/3",maxWidth:"7xl",children:[n.jsxs("div",{children:[n.jsx(b,{hasShadow:!0,children:c.map(({id:a,title:h,link:g,startDate:i,endDate:l,event_address:x,on_campus:C,on_campus_building:j,on_campus_room_number:v})=>n.jsx(t,{children:n.jsxs("a",{href:g,children:[n.jsx(t.DateBox,{startDate:i,endDate:l}),n.jsxs(t.Content,{children:[n.jsx(t.Header,{text:h}),n.jsx(t.EventMeta,{startDateTime:i,endDateTime:l,onCampus:C,onCampusBuilding:j,onCampusRoomNumber:v,eventAddress:x})]})]})},a))}),n.jsx(S,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),n.jsx(B,{isSticky:!0,topSpace:"10",children:n.jsx(y,{callback:()=>{console.log("Calendar")}})})]})]})]})}),n.jsx(k,{})]})};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Events Calendar" link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
              <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Banner title="Featured Events" align="left" isType="light-grey" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="4" maxWidth="7xl">
            {dataCard.slice(0, 4).map(item => <Card key={item?.id} hasShadow="onCard">
                <Card.Figure>
                  <img src={item?.image} alt={item?.alt} width={400} height={175} />
                </Card.Figure>
                <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                <Card.Header>{item?.title}</Card.Header>
                <Card.Body>
                  <Card.EventMeta startDateTime={item?.startDate} endDateTime={item?.endDate} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} eventAddress={item?.event_address} />
                </Card.Body>
                <Card.Footer isType="button">
                  <a href={item?.link}>More info</a>
                </Card.Footer>
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
                  // tags,
                  on_campus_room_number
                }) => <Listing key={id}>
                        <a href={link}>
                          <Listing.DateBox startDate={startDate} endDate={endDate} />
                          <Listing.Content>
                            <Listing.Header text={title} />
                            <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                            {/* <Listing.Badges tags={tags} /> */}
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ta=["Homepage"];export{r as Homepage,Ta as __namedExportsOrder,La as default};
