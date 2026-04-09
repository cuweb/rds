import{j as e}from"./jsx-runtime-ePDKBRzk.js";import{S as h}from"./Section-BhUgClhw.js";import{M as F}from"./Main-BL7nx622.js";import{F as B}from"./FooterStandard-BtiKlxTw.js";import{W as N}from"./WideImage-Da98sY36.js";import{N as s}from"./Nav-DHjdANAi.js";import{B as S}from"./ButtonGroup-C3OWKS58.js";import{B as C}from"./Button-D6D_HN_2.js";import{P as j}from"./PageHeader-CPwm3Moc.js";import{C as g}from"./Column-DL35kihx.js";import{S as P}from"./StackedList-DFkNM6Yv.js";import{A as k}from"./Aside-Rreo-KLK.js";import{C as t}from"./Card-BI2dydzY.js";import{L as a}from"./Listing-D1LbVTGo.js";import{F as x}from"./FilterPanel-CuaNNaLj.js";import{P as L}from"./Pagination-Dx95t98u.js";import{M as E}from"./MultiDayCalendar-OKzEhLC9.js";import{F as f}from"./FilterData-D1ec_lJy.js";import{N as M}from"./NavData-VxU6Oijv.js";import{E as v}from"./EventData-B4eRm20-.js";import"./iframe-XjKzupMV.js";import"./preload-helper-Dp1pzeXC.js";import"./FooterLogoLinks-BmGAqN_w.js";import"./useLinkContext-DMB8tzDS.js";import"./FooterStandardData-3_746QZ9.js";import"./Avatar-CyVMc9U-.js";import"./Icon-D-vcXEaH.js";import"./propClasses-620uA3Rh.js";import"./parseISO-BGl-MJHo.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./formatCurrency-CqiB3uY1.js";import"./startOfToday-Cy5rH-mn.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const fe={title:"Projects/Event Calendar",parameters:{layout:"fullscreen"}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(s.Top,{children:[e.jsx(s.Logo,{title:"Raven Design System",link:"/"}),e.jsx(s.Aside,{children:e.jsx(s.Buttons,{menu:M})})]})}),e.jsxs(F,{children:[e.jsx(h,{maxWidth:"max",children:e.jsxs(N,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(S,{children:[e.jsx(C,{title:"Register Now"}),e.jsx(C,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(j,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(g,{cols:"4",children:v.slice(0,4).map(({id:l,title:d,link:u,image:o,alt:i,startDate:r,endDate:n,on_campus:c,on_campus_building:p,on_campus_room_number:y,event_address:T})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:o,alt:i,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:r,endDate:n}),e.jsx(t.Header,{title:d}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:r,endDateTime:n,onCampus:c,onCampusBuilding:p,onCampusRoomNumber:y,eventAddress:T})}),e.jsx(t.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(j,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsxs(x,{children:[e.jsx(x.Top,{sortOptions:f.sortOptions,filterOptions:f.filters}),e.jsx(x.Bottom,{})]}),e.jsxs(g,{cols:"2/3",children:[e.jsxs(g.Content,{children:[e.jsx(P,{children:v.slice(0,6).map(({id:l,title:d,link:u,startDate:o,endDate:i,on_campus:r,on_campus_building:n,on_campus_room_number:c,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:o,endDate:i}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:o,endDateTime:i,onCampus:r,onCampusBuilding:n,onCampusRoomNumber:c,eventAddress:p}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(k,{isSticky:!0,topSpace:105,children:e.jsx(E,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(B,{})]})};var b,D,_;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ve=["Homepage"];export{m as Homepage,ve as __namedExportsOrder,fe as default};
