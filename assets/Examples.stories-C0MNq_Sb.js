import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{o as d,r as f}from"./NavData-ahBUZ0C_.js";import{n as p,t as m}from"./Calendar-CCOJiscp.js";import{n as h,t as g}from"./CalendarData-BNBJlKgv.js";import{n as _,t as v}from"./StackedList-D0aNxvnA.js";import{n as y,t as b}from"./Listing-1YeHH_5i.js";import{n as x,t as S}from"./Column-H93DtrCl.js";import{n as C,t as w}from"./EventData-D5TcPYE3.js";var T,E,D,O,k,A,j;function M(){return(M=e((()=>{t(),a(),r(),s(),l(),d(),p(),_(),y(),x(),h(),C(),T=n(),E={title:`Components/Calendar/Examples`,parameters:{layout:`fullscreen`}},D=()=>(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(`p`,{children:`Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.`})}),O=[...g.events],k=[...w],A={render:()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{children:(0,T.jsxs)(u.Top,{children:[(0,T.jsx)(u.Logo,{title:`Raven Design System`,link:`/`}),(0,T.jsx)(u.Aside,{children:(0,T.jsx)(u.Buttons,{menu:f})})]})}),(0,T.jsxs)(i,{maxWidth:`5xl`,children:[(0,T.jsx)(o,{maxWidth:`7xl`,children:(0,T.jsx)(m,{callback:()=>{},events:O})}),(0,T.jsx)(`h2`,{children:`Header Two`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{}),(0,T.jsx)(m,{callback:()=>{},events:O}),(0,T.jsx)(m,{callback:()=>{},events:O}),(0,T.jsx)(`h2`,{children:`Header Two`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{}),(0,T.jsx)(m,{callback:()=>{},events:O}),(0,T.jsx)(o,{maxWidth:`7xl`,isGrey:!0,children:(0,T.jsx)(m,{callback:()=>{},events:O})}),(0,T.jsxs)(o,{children:[(0,T.jsx)(`h2`,{children:`White Background`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{})]}),(0,T.jsx)(`h2`,{children:`Header Two`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{}),(0,T.jsx)(m,{callback:()=>{},events:O}),(0,T.jsx)(o,{maxWidth:`3xl`,children:(0,T.jsx)(m,{callback:()=>{},events:O})}),(0,T.jsxs)(o,{children:[(0,T.jsx)(`h2`,{children:`White Background`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{})]}),(0,T.jsx)(`h2`,{children:`Header Two`}),(0,T.jsx)(D,{}),(0,T.jsx)(D,{}),(0,T.jsx)(m,{callback:()=>{},events:O}),(0,T.jsxs)(o,{maxWidth:`7xl`,children:[(0,T.jsx)(`h2`,{children:`Event Listings Layout 1`}),(0,T.jsxs)(S,{cols:`1/3`,reverse:!1,children:[(0,T.jsx)(v,{cols:`1`,children:k.slice(0,2).map(({id:e,title:t,startDate:n,endDate:r,event_address:i,link:a})=>(0,T.jsx)(b,{children:(0,T.jsxs)(b.Body,{children:[(0,T.jsx)(b.Header,{title:t}),(0,T.jsx)(b.EventMeta,{startDateTime:n,endDateTime:r,eventAddress:i,onCampus:!1}),(0,T.jsx)(b.Footer,{children:(0,T.jsx)(`a`,{href:a,className:`cu-button cu-button--red cu-button--small`,children:`Event details`})})]})},e))}),(0,T.jsx)(m,{callback:()=>{},events:O})]})]}),(0,T.jsxs)(o,{maxWidth:`7xl`,children:[(0,T.jsx)(`h2`,{children:`Event Listings Layout 2`}),(0,T.jsxs)(S,{cols:`1/3`,reverse:!0,children:[(0,T.jsx)(v,{cols:`1`,children:k.slice(0,2).map(({id:e,title:t,startDate:n,endDate:r,event_address:i,link:a})=>(0,T.jsx)(b,{children:(0,T.jsxs)(b.Body,{children:[(0,T.jsx)(b.Header,{title:t}),(0,T.jsx)(b.EventMeta,{startDateTime:n,endDateTime:r,eventAddress:i,onCampus:!1}),(0,T.jsx)(b.Footer,{children:(0,T.jsx)(`a`,{href:a,className:`cu-button cu-button--red cu-button--small`,children:`Event details`})})]})},e))}),(0,T.jsx)(m,{callback:()=>{},events:O})]})]})]}),(0,T.jsx)(c,{})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`LayoutExamples`]})))()}M();export{A as LayoutExamples,j as __namedExportsOrder,E as default};