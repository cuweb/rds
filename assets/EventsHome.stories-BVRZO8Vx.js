import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as h}from"./Section-BA8VpE3g.js";import{M as y}from"./Main-CJV9MMXx.js";import{F as N}from"./FooterStandard-CJ9Aao2X.js";import{W as k}from"./WideImage-gq_hDHPD.js";import{N as n}from"./Nav-CMBLrc0M.js";import{B as F}from"./ButtonGroup-02ebpWXM.js";import{B as g}from"./Button-BYp47ypw.js";import{P as C}from"./PageHeader-PuVLkLqK.js";import{C as x}from"./Column-BXgQPcQc.js";import{S as T}from"./StackedList-DDof0v6E.js";import{A as S}from"./Aside-rh2hnwrm.js";import{C as t}from"./Card-Ds7Zk2AJ.js";import{L as a}from"./Listing-B1CoWU_5.js";import{F as E}from"./Filter-leqlQlbL.js";import{P as W}from"./Pagination-BlUdGCCF.js";import{M as B}from"./MultiDayCalendar-BWrf3b_3.js";import{F as L}from"./FilterData-BWFYJ5nS.js";import{N as M}from"./NavData-EgWmcfkt.js";import{E as j}from"./EventData-DPPkmqkE.js";import{F as P}from"./MagnifyingGlassIcon-CTArdofi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FooterLogoLinks-wi3yy42J.js";import"./useLinkContext-Bz4KtVj9.js";import"./propClasses-C1Ju-ucV.js";import"./Avatar-DmMiCzKE.js";import"./Icon-BUuzH75X.js";import"./parseISO-B7ihSCno.js";import"./format-IKGLl-Aq.js";import"./getDate-B4BU6gpK.js";import"./parse-Dkc84rVP.js";import"./index-Be5LegDI.js";import"./iframe-B_Cw2l2w.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";import"./transition-Bps0ZTOD.js";import"./use-server-handoff-complete-DH8D_X5a.js";import"./portal-Dw89jnLn.js";import"./index-Drt3gf4w.js";import"./ChevronDownIcon-gc4pqSrO.js";import"./startOfToday-Db96OknS.js";const ye={title:"Prototypes/Projects"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(n.Primary,{children:[e.jsx(n.Logo,{title:"Events Calendar",link:"https://events.carleton.ca"}),e.jsx(n.Aside,{menu:M,children:e.jsx("button",{"aria-label":"search",className:"not-prose",children:e.jsx(P,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})}),e.jsxs(y,{children:[e.jsx(h,{maxWidth:"7xl",children:e.jsxs(k,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",maxWidth:"max",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(F,{children:[e.jsx(g,{title:"Register Now"}),e.jsx(g,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(C,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(x,{cols:"4",maxWidth:"7xl",children:j.slice(0,4).map(({id:l,title:d,link:c,image:s,alt:r,startDate:i,endDate:o,on_campus:u,on_campus_building:p,on_campus_room_number:D,event_address:_})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s,alt:r,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:i,endDate:o}),e.jsx(t.Header,{title:d}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:i,endDateTime:o,onCampus:u,onCampusBuilding:p,onCampusRoomNumber:D,eventAddress:_})}),e.jsx(t.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(C,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsx(E,{filters:L.filters,callback:()=>{}}),e.jsxs(x,{cols:"2/3",maxWidth:"7xl",children:[e.jsxs(x.Content,{children:[e.jsx(T,{children:j.slice(0,6).map(({id:l,title:d,link:c,startDate:s,endDate:r,on_campus:i,on_campus_building:o,on_campus_room_number:u,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:s,endDate:r}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:s,endDateTime:r,onCampus:i,onCampusBuilding:o,onCampusRoomNumber:u,eventAddress:p}),e.jsx(a.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(W,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(S,{isSticky:!0,topSpace:105,children:e.jsx(B,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(N,{})]})};var b,f,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ne=["EventsHome"];export{m as EventsHome,Ne as __namedExportsOrder,ye as default};
