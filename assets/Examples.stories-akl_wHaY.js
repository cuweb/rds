import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as i}from"./Section-CKcqyDpo.js";import{M as S}from"./Main-BqxOGoMS.js";import{F as k}from"./FooterStandard-CssxRqDU.js";import{N as r}from"./Nav-DxWUn6z5.js";import{N as L}from"./NavData-DGjf4Von.js";import{C as t}from"./Calendar-BLHf2CmS.js";import{S as h}from"./StackedList-DcOVo2ig.js";import{L as a}from"./Listing-rJG8ZfpY.js";import{C as v}from"./Column-Bhqy_FO7.js";import{C as b}from"./CalendarData-BedOMcSF.js";import{E as f}from"./EventData-DQzocGgI.js";import"./index-yBjzXJbu.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Avatar-R8Sfo5dY.js";import"./ButtonGroup-Bw2xFjvQ.js";import"./propClasses-CJUCiil5.js";import"./Icon-DABLV-Gt.js";import"./Button-D5KqXcUb.js";import"./startOfToday-Cy5rH-mn.js";import"./format-BDD0as5c.js";import"./parse-CXxdJvFO.js";import"./isBefore-7pHfX-56.js";import"./parseISO-Z6eZh0wm.js";import"./isSameDay-C9OCNg_L.js";import"./isWithinInterval-D1IBTSIx.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";import"./getDate-DcT4OotK.js";const ae={title:"Components/Calendar/Examples",parameters:{layout:"fullscreen"}},n=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),s=[...b.events],j=[...f],l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(r.Top,{children:[e.jsx(r.Logo,{title:"Raven Design System",link:"/"}),e.jsx(r.Aside,{children:e.jsx(r.Buttons,{menu:L})})]})}),e.jsxs(S,{maxWidth:"5xl",children:[e.jsx(i,{maxWidth:"7xl",children:e.jsx(t,{callback:()=>{},events:s})}),e.jsx("h2",{children:"Header Two"}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(t,{callback:()=>{},events:s}),e.jsx(t,{callback:()=>{},events:s}),e.jsx("h2",{children:"Header Two"}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(t,{callback:()=>{},events:s}),e.jsx(i,{maxWidth:"7xl",isGrey:!0,children:e.jsx(t,{callback:()=>{},events:s})}),e.jsxs(i,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(t,{callback:()=>{},events:s}),e.jsx(i,{maxWidth:"3xl",children:e.jsx(t,{callback:()=>{},events:s})}),e.jsxs(i,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(n,{}),e.jsx(n,{}),e.jsx(t,{callback:()=>{},events:s}),e.jsxs(i,{maxWidth:"7xl",children:[e.jsx("h2",{children:"Event Listings Layout 1"}),e.jsxs(v,{cols:"1/3",reverse:!1,children:[e.jsx(h,{cols:"1",children:j.slice(0,2).map(({id:o,title:d,startDate:c,endDate:m,event_address:x,link:u})=>e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:c,endDateTime:m,eventAddress:x,onCampus:!1}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})},o))}),e.jsx(t,{callback:()=>{},events:s})]})]}),e.jsxs(i,{maxWidth:"7xl",children:[e.jsx("h2",{children:"Event Listings Layout 2"}),e.jsxs(v,{cols:"1/3",reverse:!0,children:[e.jsx(h,{cols:"1",children:j.slice(0,2).map(({id:o,title:d,startDate:c,endDate:m,event_address:x,link:u})=>e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:c,endDateTime:m,eventAddress:x,onCampus:!1}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})},o))}),e.jsx(t,{callback:()=>{},events:s})]})]})]}),e.jsx(k,{})]})};var p,g,D;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <Section maxWidth="7xl">
          <h2>Event Listings Layout 1</h2>
          <Column cols="1/3" reverse={false}>
            <StackedList cols="1">
              {listingEventData.slice(0, 2).map(({
              id,
              title,
              startDate,
              endDate,
              event_address,
              link
            }) => <Listing key={id}>
                  {/* <Listing.DateThumb startDate={startDate} endDate={endDate} /> */}
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
        </Section>

        {/* ADDED: StackedList for event listings */}
        <Section maxWidth="7xl">
          <h2>Event Listings Layout 2</h2>
          <Column cols="1/3" reverse={true}>
            <StackedList cols="1">
              {listingEventData.slice(0, 2).map(({
              id,
              title,
              startDate,
              endDate,
              event_address,
              link
            }) => <Listing key={id}>
                  {/* <Listing.DateThumb startDate={startDate} endDate={endDate} /> */}
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
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(D=(g=l.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const se=["LayoutExamples"];export{l as LayoutExamples,se as __namedExportsOrder,ae as default};
