import{j as e}from"./jsx-runtime-eOzXlZ80.js";import{S as h}from"./Section-Baw48jLC.js";import{M as B}from"./Main-Cr5ykI4L.js";import{F as S}from"./FooterStandard-Cs__sh2R.js";import{W as F}from"./WideImage-BeRnFaaX.js";import{N as s}from"./Nav-35ap9-_J.js";import{B as k}from"./ButtonGroup-BCu8KKnm.js";import{B as C}from"./Button-Be0silVz.js";import{P as j}from"./PageHeader-DDEX1wQ6.js";import{C as g}from"./Column-QpueVMfx.js";import{S as N}from"./StackedList-eJd_Rb2S.js";import{A as P}from"./Aside-CHH5dpRx.js";import{C as t}from"./Card-BX3UQVK6.js";import{L as a}from"./Listing-BcWPhzY7.js";import{F as x}from"./FilterPanel-D78bKDUG.js";import{P as L}from"./Pagination-CQY2j4vi.js";import{M as E}from"./MultiDayCalendar-BVOuTpxm.js";import{F as v}from"./FilterData-D1ec_lJy.js";import{a as W}from"./NavData-BCA87AC2.js";import{E as f}from"./EventData-B4eRm20-.js";import"./iframe-gnYg0nzl.js";import"./preload-helper-Dp1pzeXC.js";import"./FooterLogoLinks-wpJNVdYP.js";import"./useLinkContext-J9KLRP-6.js";import"./FooterStandardData-CLyJH8hw.js";import"./Avatar-B3kki3VQ.js";import"./Icon-CAUP9Abx.js";import"./propClasses-CJUCiil5.js";import"./parseISO-BGl-MJHo.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./formatCurrency-BszBARnq.js";import"./useScrollReveal-Dhfj922u.js";import"./startOfToday-Cy5rH-mn.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const fe={title:"Projects/Event Calendar",parameters:{layout:"fullscreen"}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(s.Top,{children:[e.jsx(s.Logo,{title:"Raven Design System",link:"/"}),e.jsx(s.Aside,{children:e.jsx(s.Buttons,{menu:W})})]})}),e.jsxs(B,{children:[e.jsx(h,{maxWidth:"max",children:e.jsxs(F,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(k,{children:[e.jsx(C,{title:"Register Now"}),e.jsx(C,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(j,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(g,{cols:"4",children:f.slice(0,4).map(({id:l,title:d,link:u,image:i,alt:o,startDate:r,endDate:n,on_campus:p,on_campus_building:c,on_campus_room_number:y,event_address:T})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:i,alt:o,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:r,endDate:n}),e.jsx(t.Header,{title:d,link:u}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:r,endDateTime:n,onCampus:p,onCampusBuilding:c,onCampusRoomNumber:y,eventAddress:T})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(j,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsxs(x,{children:[e.jsx(x.Top,{sortOptions:v.sortOptions,filterOptions:v.filters}),e.jsx(x.Bottom,{})]}),e.jsxs(g,{cols:"2/3",children:[e.jsxs(g.Content,{children:[e.jsx(N,{children:f.slice(0,6).map(({id:l,title:d,link:u,startDate:i,endDate:o,on_campus:r,on_campus_building:n,on_campus_room_number:p,event_address:c})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:i,endDate:o}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:i,endDateTime:o,onCampus:r,onCampusBuilding:n,onCampusRoomNumber:p,eventAddress:c}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(P,{isSticky:!0,topSpace:105,children:e.jsx(E,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(S,{})]})};var D,b,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main>
        <Section maxWidth="max">
          <WideImage title="True Leaders Challenge What's Possible" headerType="h1" isType="image" image="https://picsum.photos/1600/700" hasWave>
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
          <Column cols="4">
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
                  <Card.Header title={title} link={link} />
                  <Card.Body>
                    <Card.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                  </Card.Body>
                </Card>)}
          </Column>
        </Section>

        <Section maxWidth="7xl" isGrey>
          <PageHeader as="h2" header="Upcoming Events" size="md" />
          <FilterPanel>
            <FilterPanel.Top sortOptions={FilterPanelData.sortOptions} filterOptions={FilterPanelData.filters} />
            <FilterPanel.Bottom />
          </FilterPanel>
          <Column cols="2/3">
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
}`,...(_=(b=m.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const De=["Homepage"];export{m as Homepage,De as __namedExportsOrder,fe as default};
