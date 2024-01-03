import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{M as f}from"./Main-6yTdoHTQ.js";import{S as D}from"./Section-273f7e_u.js";import{C as b}from"./Container-gVUWVoze.js";import{C as e}from"./Column-doTN8sIO.js";import{S as _}from"./StackedList-9DnVSzTy.js";import{A as T}from"./Aside-hMhqAZGb.js";import{B}from"./Banner-xGSsIKlB.js";import{T as r}from"./TopBar-xywG3lse.js";import{H as y}from"./Heading-3VgvRISV.js";import{F as L}from"./FooterBasic-zrLxMlUK.js";import{C as o}from"./Card-onU4V2n6.js";import{L as s}from"./Listing-KOKN9buh.js";import{P as k}from"./Pagination-jBf_JyhX.js";import{C as S}from"./Calendar-fo7iB8Qi.js";import{F,a as l}from"./FilterData-VyeWUZBb.js";import{a as c}from"./EventData-sFsgDJMI.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./globalClasses-EYtDdY2O.js";import"./optionClasses-BVitpQvL.js";import"./ChevronDownIcon-WJjzl-Lh.js";import"./ChevronRightIcon-XyhEQFMv.js";import"./menu-oFeCtKpM.js";import"./transition-8qPHkook.js";import"./use-root-containers-7zw4BiR7.js";import"./index-jmm5gWkb.js";import"./use-tracked-pointer-EZY5uaCR.js";import"./use-resolve-button-type-kFzmZbAv.js";import"./disclosure-LLQX-sEi.js";import"./MagnifyingGlassIcon-vfrtgMO8.js";import"./popover-tP4paLqk.js";import"./FooterLogoLinks-XXlVvpOs.js";import"./Link-XFLo9fOj.js";import"./iframe-ye32JjY8.js";import"../sb-preview/runtime.js";import"./index-bkt57PaO.js";import"./isNativeReflectConstruct-3LOYyi5T.js";import"./index-J1scOhqY.js";import"./index-3ZVvTIVE.js";import"./index-VFMbf6KQ.js";import"./ChevronRightIcon-SDCOpH6f.js";import"./Button-nuiw8dah.js";import"./Icon-XxUdtgof.js";import"./index-MuSv-8eu.js";import"./XMarkIcon--HSMUJz7.js";import"./dialog-WdIYZETR.js";const Ta={title:"Projects/Event Calendar"},t={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(r,{children:n.jsxs(r.Primary,{children:[n.jsx(r.Logo,{title:"Events Calendar",link:"https://carleton.ca/webservices",children:n.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[n.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),n.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),n.jsx(r.Aside,{})]})}),n.jsx(B,{title:"Featured Events",align:"left",isType:"light-grey",maxWidth:"7xl",hasOverlap:!0}),n.jsx(f,{hasOverlap:!0,children:n.jsxs(D,{children:[n.jsx(e,{cols:"4",maxWidth:"7xl",children:c.slice(0,4).map(a=>n.jsxs(o,{hasShadow:"onCard",children:[n.jsx(o.Figure,{children:n.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),n.jsx(o.DateThumb,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),n.jsx(o.Header,{children:a==null?void 0:a.title}),n.jsx(o.Body,{children:n.jsx(o.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})}),n.jsx(o.Footer,{isType:"button",children:n.jsx("a",{href:a==null?void 0:a.link,children:"More info"})})]},a==null?void 0:a.id))}),n.jsxs(b,{maxWidth:"7xl",isGrey:!0,children:[n.jsx(y,{text:"Upcoming Events",maxWidth:"7xl"}),n.jsx(e,{maxWidth:"7xl",children:n.jsx(F,{filters:l.filters,callback:()=>{},sortOptions:l.sortOptions})}),n.jsxs(e,{cols:"2/3",maxWidth:"7xl",children:[n.jsxs("div",{children:[n.jsx(_,{hasShadow:!0,children:c.map(({id:a,title:h,link:g,startDate:i,endDate:d,event_address:x,on_campus:C,on_campus_building:j,on_campus_room_number:v})=>n.jsx(s,{children:n.jsxs("a",{href:g,children:[n.jsx(s.DateThumb,{startDate:i,endDate:d}),n.jsxs(s.Body,{children:[n.jsx(s.Header,{children:h}),n.jsx(s.EventMeta,{startDateTime:i,endDateTime:d,onCampus:C,onCampusBuilding:j,onCampusRoomNumber:v,eventAddress:x})]})]})},a))}),n.jsx(k,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),n.jsx(T,{isSticky:!0,topSpace:"10",children:n.jsx(S,{callback:()=>{console.log("Calendar")}})})]})]})]})}),n.jsx(L,{})]})};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
                <Card.DateThumb startDate={item?.startDate} endDate={item?.endDate} />
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
                          <Listing.DateThumb startDate={startDate} endDate={endDate} />
                          <Listing.Body>
                            <Listing.Header>{title}</Listing.Header>
                            <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                          </Listing.Body>
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Ba=["Homepage"];export{t as Homepage,Ba as __namedExportsOrder,Ta as default};
