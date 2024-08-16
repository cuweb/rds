import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as h}from"./Section-JfbkAvfr.js";import{M as y}from"./Main-D47U7TOX.js";import{F as N}from"./FooterStandard-CgWcm-9x.js";import{W as k}from"./WideImage-C_itXglo.js";import{N as n,b as F}from"./NavData-CjMJpRvt.js";import{B as T}from"./ButtonGroup-DT6aXSzN.js";import{B as g}from"./Button-CkWBH1yy.js";import{P as C}from"./PageHeader-Bdfavi75.js";import{C as x}from"./Column-DkIMngqi.js";import{S}from"./StackedList-BTTFm2es.js";import{A as E}from"./Aside-rh2hnwrm.js";import{C as t}from"./Card-BTFSq-Ry.js";import{L as a}from"./Listing-Cfj4AAWi.js";import{F as W,a as B}from"./FilterData-C0rHFOrf.js";import{P as L}from"./Pagination-BlUdGCCF.js";import{M}from"./MultiDayCalendar-Bg--JGRX.js";import{E as b}from"./EventData-DPPkmqkE.js";import{F as P}from"./MagnifyingGlassIcon-CTArdofi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FooterLogoLinks-wi3yy42J.js";import"./useLinkContext-Bz4KtVj9.js";import"./propClasses-CbluzEXK.js";import"./Avatar-DmMiCzKE.js";import"./Icon-DRoKajOt.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./getDate-BfMQ2h7Y.js";import"./parse-BUkWBRrt.js";import"./MapPinIcon-BRhUovLd.js";import"./index-BLvazNhH.js";import"./iframe-BN6x8rSV.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";import"./portal-CuwZKlIF.js";import"./use-server-handoff-complete-BHJL6XQy.js";import"./index-DxjWwZXO.js";import"./XMarkIcon-LncUE2oD.js";import"./popover-DsMiHZG3.js";import"./transition-BMZM_vaP.js";import"./ChevronDownIcon-gc4pqSrO.js";import"./startOfToday-C2GAHaUs.js";import"./isSameMonth-B8gVtgtL.js";const ke={title:"Prototypes/Projects"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(n.Primary,{children:[e.jsx(n.Logo,{title:"Events Calendar",link:"https://events.carleton.ca"}),e.jsx(n.Aside,{menu:F,children:e.jsx("button",{"aria-label":"search",className:"not-prose",children:e.jsx(P,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})}),e.jsxs(y,{children:[e.jsx(h,{maxWidth:"7xl",children:e.jsxs(k,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",maxWidth:"max",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(T,{children:[e.jsx(g,{title:"Register Now"}),e.jsx(g,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(C,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(x,{cols:"4",maxWidth:"7xl",children:b.slice(0,4).map(({id:l,title:d,link:c,image:s,alt:i,startDate:r,endDate:o,on_campus:u,on_campus_building:p,on_campus_room_number:D,event_address:_})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s,alt:i,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:r,endDate:o}),e.jsx(t.Header,{title:d}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:r,endDateTime:o,onCampus:u,onCampusBuilding:p,onCampusRoomNumber:D,eventAddress:_})}),e.jsx(t.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(C,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsx(W,{filters:B.filters,callback:()=>{}}),e.jsxs(x,{cols:"2/3",maxWidth:"7xl",children:[e.jsxs(x.Content,{children:[e.jsx(S,{children:b.slice(0,6).map(({id:l,title:d,link:c,startDate:s,endDate:i,on_campus:r,on_campus_building:o,on_campus_room_number:u,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:s,endDate:i}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:s,endDateTime:i,onCampus:r,onCampusBuilding:o,onCampusRoomNumber:u,eventAddress:p}),e.jsx(a.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(E,{isSticky:!0,topSpace:105,children:e.jsx(M,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(N,{})]})};var j,f,v;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Events Calendar" link="https://events.carleton.ca" />
          <Nav.Aside menu={NavAsideData}>
            <button aria-label="search" className="not-prose">
              <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer text-cu-black-300 left-4" aria-hidden="true" />
            </button>
          </Nav.Aside>
        </Nav.Primary>
      </Nav>

      <Main>
        <Section maxWidth="7xl">
          <WideImage title="True Leaders Challenge What's Possible" headerType="h1" isType="image" maxWidth="max" image="https://picsum.photos/1600/700" hasWave>
            <p>
              True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for
              Carleton's Challenge Conference.
            </p>
            <ButtonGroup>
              <Button title="Register Now" />
              <Button color="grey" title="Request Information" />
            </ButtonGroup>
          </WideImage>
        </Section>

        <Section maxWidth="7xl">
          <PageHeader as="h2" header="Featured Events" size="md" />
          <Column cols="4" maxWidth="7xl">
            {EventData.slice(0, 4).map(({
            id,
            title,
            link,
            image,
            alt,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address
          }) => <Card key={id}>
                  <Card.Figure>
                    <img src={image} alt={alt} width={400} height={175} />
                  </Card.Figure>
                  <Card.DateThumb startDate={startDate} endDate={endDate} />
                  <Card.Header title={title} />
                  <Card.Body>
                    <Card.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                  </Card.Body>
                  <Card.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      More info
                    </a>
                  </Card.Footer>
                </Card>)}
          </Column>
        </Section>

        <Section maxWidth="7xl" isGrey>
          <PageHeader as="h2" header="Upcoming Events" size="md" />
          <Filter filters={FilterData.filters} callback={() => undefined} />
          <Column cols="2/3" maxWidth="7xl">
            <Column.Content>
              <StackedList>
                {EventData.slice(0, 6).map(({
                id,
                title,
                link,
                startDate,
                endDate,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                event_address
              }) => <Listing key={id}>
                      <Listing.DateThumb startDate={startDate} endDate={endDate} />
                      <Listing.Body>
                        <Listing.Header title={title} />
                        <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                        <Listing.Footer>
                          <a href={link} className="cu-button cu-button--red cu-button--small">
                            Event details
                          </a>
                        </Listing.Footer>
                      </Listing.Body>
                    </Listing>)}
              </StackedList>
              <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} callbackPage={() => undefined} />
            </Column.Content>
            <Aside isSticky topSpace={105}>
              <MultiDayCalendar events={[]} callback={() => {}} defaultDate="" />
            </Aside>
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Fe=["EventsHome"];export{m as EventsHome,Fe as __namedExportsOrder,ke as default};
