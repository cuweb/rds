import{j as n}from"./jsx-runtime-CKrituN3.js";import{M as D}from"./Main-CJHjqGYv.js";import{S as b}from"./Section-CVJtbDHu.js";import{C as f}from"./Container-CMmfm5fp.js";import{C as o}from"./Column-Ci_0zuDg.js";import{S as _}from"./StackedList-DGrgHzif.js";import{A as S}from"./Aside-D_akTa4g.js";import{B as y}from"./Banner-DLn8e_N_.js";import{N as r,a as k,b as F}from"./NavData-BypxiLo-.js";import{H as N}from"./Heading-C_7F1f88.js";import{F as L}from"./FooterBasic-8HvW0oVK.js";import{C as e}from"./Card-hq0iqVuw.js";import{L as t}from"./Listing-D3qXNsFm.js";import{P as T}from"./Pagination-lMSSgyk2.js";import{C as B}from"./Calendar-TLP8IKaP.js";import{F as W,a as l}from"./FilterData-Ce5z177R.js";import{a as m}from"./EventData-Suzp3opJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./optionClasses-nRtJeGr9.js";import"./useLinkContext-B6ulR7Vg.js";import"./Avatar-DjV_X37D.js";import"./FooterLogoLinks-sEvdyT2V.js";import"./getDate-BAl1yPiw.js";import"./parse-BfiLtjV-.js";import"./index-CJ2JU5QM.js";import"./iframe--bsHIGk3.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";import"./ChevronRightIcon-CNwURrwD.js";import"./Button-DZIOirHR.js";import"./Icon-DPQQEofx.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./startOfToday-C7FXxczV.js";import"./XMarkIcon-iOOrpGul.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./index-BtM5VmRH.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";import"./dialog-BHhb4iix.js";import"./disclosure-Dfcqdy2E.js";import"./popover-Dxe09Nil.js";const _a={title:"Projects/Event Calendar"},s={render:()=>n.jsxs(n.Fragment,{children:[n.jsx(r,{children:n.jsxs(r.Primary,{children:[n.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),n.jsx(r.Menu,{menu:k}),n.jsx(r.Aside,{menu:F})]})}),n.jsx(y,{title:"Featured Events",align:"left",isType:"light-grey",maxWidth:"7xl",hasOverlap:!0}),n.jsx(D,{hasOverlap:!0,children:n.jsxs(b,{children:[n.jsx(o,{cols:"4",maxWidth:"7xl",children:m.slice(0,4).map(a=>n.jsxs(e,{hasShadow:"onCard",children:[n.jsx(e.Figure,{children:n.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),n.jsx(e.DateThumb,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),n.jsx(e.Header,{children:a==null?void 0:a.title}),n.jsx(e.Body,{children:n.jsx(e.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})}),n.jsx(e.Footer,{isType:"button",children:n.jsx("a",{href:a==null?void 0:a.link,children:"More info"})})]},a==null?void 0:a.id))}),n.jsxs(f,{maxWidth:"7xl",isGrey:!0,children:[n.jsx(N,{text:"Upcoming Events",maxWidth:"7xl"}),n.jsx(o,{maxWidth:"7xl",children:n.jsx(W,{filters:l.filters,callback:()=>{},sortOptions:l.sortOptions})}),n.jsxs(o,{cols:"2/3",maxWidth:"7xl",children:[n.jsxs("div",{children:[n.jsx(_,{hasShadow:!0,children:m.map(({id:a,title:x,link:h,startDate:i,endDate:d,event_address:g,on_campus:C,on_campus_building:v,on_campus_room_number:j})=>n.jsx(t,{children:n.jsxs("a",{href:h,children:[n.jsx(t.DateThumb,{startDate:i,endDate:d}),n.jsxs(t.Body,{children:[n.jsx(t.Header,{children:x}),n.jsx(t.EventMeta,{startDateTime:i,endDateTime:d,onCampus:C,onCampusBuilding:v,onCampusRoomNumber:j,eventAddress:g})]})]})},a))}),n.jsx(T,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),n.jsx(S,{isSticky:!0,topSpace:"10",children:n.jsx(B,{callback:()=>{console.log("Calendar")}})})]})]})]})}),n.jsx(L,{})]})};var p,c,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Sa=["Homepage"];export{s as Homepage,Sa as __namedExportsOrder,_a as default};
