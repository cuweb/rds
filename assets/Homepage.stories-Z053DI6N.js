import{j as n}from"./jsx-runtime-CKrituN3.js";import{M as D}from"./Main-CDNSDx3Q.js";import{S as b}from"./Section-NPasMOYw.js";import{C as f}from"./Container-RiGWcZGq.js";import{C as o}from"./Column-BO1nOrR9.js";import{S as _}from"./StackedList-CI2PlhbK.js";import{A as S}from"./Aside-DEn3p2ef.js";import{B as y}from"./Banner-B9wwwgrN.js";import{N as r,a as k,b as F}from"./NavData-vyVZcnVp.js";import{P as N}from"./PageHeaders-VKmCL-HC.js";import{F as L}from"./FooterBasic-B1EMWKaj.js";import{C as e}from"./Card-DwU8iaY7.js";import{L as t}from"./Listing-BknD3NBK.js";import{P as T}from"./Pagination-BjNEwF_w.js";import{C as B}from"./Calendar-DU7-h1Wy.js";import{F as W,a as l}from"./FilterData-9sNHmkLz.js";import{a as m}from"./EventData-Suzp3opJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./optionClasses-DTKwxNj-.js";import"./useLinkContext-Ch0lwH8X.js";import"./Avatar-2ZHJOB-7.js";import"./Button-B8ezYJYl.js";import"./Icon-CLJm1zrA.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./FooterLogoLinks-Dl9zUNVy.js";import"./getDate-BAl1yPiw.js";import"./parse-BfiLtjV-.js";import"./index-CSruxiLR.js";import"./iframe-BJ046iUZ.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";import"./ChevronRightIcon-CNwURrwD.js";import"./startOfToday-DfCrUBno.js";import"./dialog-BHhb4iix.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./index-BtM5VmRH.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";import"./popover-Dxe09Nil.js";const ba={title:"Projects/Event Calendar"},s={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(r,{children:n.jsxs(r.Primary,{children:[n.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),n.jsx(r.Menu,{menu:k}),n.jsx(r.Aside,{menu:F})]})}),n.jsx(y,{title:"Featured Events",align:"left",isType:"light-grey",maxWidth:"7xl",hasOverlap:!0}),n.jsx(D,{hasOverlap:!0,children:n.jsxs(b,{children:[n.jsx(o,{cols:"4",maxWidth:"7xl",children:m.slice(0,4).map(a=>n.jsxs(e,{hasShadow:"onCard",children:[n.jsx(e.Figure,{children:n.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),n.jsx(e.DateThumb,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),n.jsx(e.Header,{children:a==null?void 0:a.title}),n.jsx(e.Body,{children:n.jsx(e.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})}),n.jsx(e.Footer,{isType:"button",children:n.jsx("a",{href:a==null?void 0:a.link,children:"More info"})})]},a==null?void 0:a.id))}),n.jsxs(f,{maxWidth:"7xl",isGrey:!0,children:[n.jsx(N,{header:"Upcoming Events",maxWidth:"7xl"}),n.jsx(o,{maxWidth:"7xl",children:n.jsx(W,{filters:l.filters,callback:()=>{},sortOptions:l.sortOptions})}),n.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[n.jsxs("div",{children:[n.jsx(_,{hasShadow:!0,children:m.map(({id:a,title:h,link:x,startDate:i,endDate:d,event_address:g,on_campus:C,on_campus_building:v,on_campus_room_number:j})=>n.jsx(t,{children:n.jsxs("a",{href:x,children:[n.jsx(t.DateThumb,{startDate:i,endDate:d}),n.jsxs(t.Body,{children:[n.jsx(t.Header,{children:h}),n.jsx(t.EventMeta,{startDateTime:i,endDateTime:d,onCampus:C,onCampusBuilding:v,onCampusRoomNumber:j,eventAddress:g})]})]})},a))}),n.jsx(T,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),n.jsx(S,{isSticky:!0,topSpace:"10",children:n.jsx(B,{callback:()=>{console.log("Calendar")}})})]})]})]})}),n.jsx(L,{})]})};var p,c,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

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
            <PageHeaders header="Upcoming Events" maxWidth="7xl" />

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
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const fa=["Homepage"];export{s as Homepage,fa as __namedExportsOrder,ba as default};
