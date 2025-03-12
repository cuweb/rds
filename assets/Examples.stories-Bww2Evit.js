import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as l}from"./Section-B-CCKZVd.js";import{M as k}from"./Main-BqxOGoMS.js";import{F as L}from"./FooterStandard-Did9kEDy.js";import{N as o}from"./Nav-D9xZ8HkV.js";import{N as S}from"./NavData-EgWmcfkt.js";import{C as a}from"./Calendar-03TU0FTw.js";import{S as h}from"./StackedList-BrbqRWOC.js";import{L as n}from"./Listing-Vp5DDRqw.js";import{C as v}from"./Column-BriuilUc.js";import{C as b}from"./CalendarData-BedOMcSF.js";import{E as C}from"./EventData-DQzocGgI.js";import"./index-yBjzXJbu.js";import"./FooterLogoLinks-tMRqyGnd.js";import"./useLinkContext-NG2HLdE9.js";import"./index-7sdMIo0z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Avatar-R8Sfo5dY.js";import"./ButtonGroup-CVkrxlV-.js";import"./propClasses-BYrQ2lXe.js";import"./Button-Cv42MwLr.js";import"./Icon-Cq1ojZpE.js";import"./startOfToday-DeT6s1iW.js";import"./format-CoDaAjhx.js";import"./parse-BKaVvLnB.js";import"./ChevronRightIcon-GLw6KIlN.js";import"./parseISO-53XxuXUY.js";import"./isSameDay-D4TUG8v2.js";import"./isToday-m3KsBfIu.js";import"./getDate-D8TjdU5O.js";const ne={title:"Components/Calendar/Examples",parameters:{layout:"fullscreen"}},t=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),s=[...b.events],j=[...C],d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsxs(o.Top,{children:[e.jsx(o.Logo,{title:"Raven Design System",link:"/"}),e.jsx(o.Aside,{children:e.jsx(o.Buttons,{menu:S})})]})}),e.jsxs(k,{maxWidth:"5xl",children:[e.jsx(l,{maxWidth:"7xl",children:e.jsx(a,{callback:()=>{},events:s})}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(a,{callback:()=>{},events:s}),e.jsx(a,{callback:()=>{},events:s}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(a,{callback:()=>{},events:s}),e.jsx(l,{maxWidth:"7xl",isGrey:!0,children:e.jsx(a,{callback:()=>{},events:s})}),e.jsxs(l,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(t,{}),e.jsx(t,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(a,{callback:()=>{},events:s}),e.jsx(l,{maxWidth:"3xl",children:e.jsx(a,{callback:()=>{},events:s})}),e.jsxs(l,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(t,{}),e.jsx(t,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(a,{callback:()=>{},events:s}),e.jsx("h2",{children:"Event Listings Layout 1"}),e.jsxs(v,{cols:"1/3",maxWidth:"7xl",children:[e.jsx(h,{cols:"1",children:j.map(({id:c,title:m,startDate:i,endDate:r,event_address:x,link:u})=>e.jsxs(n,{children:[e.jsx(n.DateThumb,{startDate:i,endDate:r}),e.jsxs(n.Body,{children:[e.jsx(n.Header,{title:m}),e.jsx(n.EventMeta,{startDateTime:i,endDateTime:r,eventAddress:x,onCampus:!1}),e.jsx(n.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},c))}),e.jsx(a,{callback:()=>{},events:s})]}),e.jsx("h2",{children:"Event Listings Layout 2"}),e.jsxs(v,{cols:"2/3",maxWidth:"7xl",children:[e.jsx(a,{callback:()=>{},events:s}),e.jsx(h,{cols:"1",children:j.map(({id:c,title:m,startDate:i,endDate:r,event_address:x,link:u})=>e.jsxs(n,{children:[e.jsx(n.DateThumb,{startDate:i,endDate:r}),e.jsxs(n.Body,{children:[e.jsx(n.Header,{title:m}),e.jsx(n.EventMeta,{startDateTime:i,endDateTime:r,eventAddress:x,onCampus:!1}),e.jsx(n.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},c))})]})]}),e.jsx(L,{})]})};var p,g,D;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />
        <Calendar callback={() => {}} events={eventData} />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="7xl" isGrey>
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        <Section maxWidth="3xl">
          <Calendar callback={() => {}} events={eventData} />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Calendar callback={() => {}} events={eventData} />

        {/* ADDED: StackedList for event listings */}
        <h2>Event Listings Layout 1</h2>
        <Column cols="1/3" maxWidth="7xl">
          <StackedList cols="1">
            {listingEventData.map(({
            id,
            title,
            startDate,
            endDate,
            event_address,
            link
          }) => <Listing key={id}>
                <Listing.DateThumb startDate={startDate} endDate={endDate} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} eventAddress={event_address} onCampus={false} />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Event details
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>)}
          </StackedList>
          <Calendar callback={() => {}} events={eventData} />
        </Column>

        {/* ADDED: StackedList for event listings */}
        <h2>Event Listings Layout 2</h2>
        <Column cols="2/3" maxWidth="7xl">
          <Calendar callback={() => {}} events={eventData} />
          <StackedList cols="1">
            {listingEventData.map(({
            id,
            title,
            startDate,
            endDate,
            event_address,
            link
          }) => <Listing key={id}>
                <Listing.DateThumb startDate={startDate} endDate={endDate} />
                <Listing.Body>
                  <Listing.Header title={title} />
                  <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} eventAddress={event_address} onCampus={false} />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      Event details
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>)}
          </StackedList>
        </Column>
      </Main>

      <FooterStandard />
    </>
}`,...(D=(g=d.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const te=["LayoutExamples"];export{d as LayoutExamples,te as __namedExportsOrder,ne as default};
