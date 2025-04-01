import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as h}from"./Section-B-CCKZVd.js";import{M as y}from"./Main-BqxOGoMS.js";import{F as T}from"./FooterStandard-CssxRqDU.js";import{W as S}from"./WideImage-bVcGwQlo.js";import{N as n}from"./Nav-SygODVcC.js";import{B}from"./ButtonGroup-CVkrxlV-.js";import{B as x}from"./Button-Cv42MwLr.js";import{P as C}from"./PageHeader-DzCXmVKC.js";import{C as g}from"./Column-Dlks7Fvl.js";import{S as k}from"./StackedList-BrbqRWOC.js";import{A as F}from"./Aside-B_fS2uf7.js";import{C as t}from"./Card-CezwH0-n.js";import{L as a}from"./Listing-BlT1lsLv.js";import{F as N}from"./Filter-DlELebW4.js";import{P as E}from"./Pagination-ogVR_8oH.js";import{M as L}from"./MultiDayCalendar-COyCq4aw.js";import{F as M}from"./FilterData-CJRC9GJQ.js";import{N as W}from"./NavData-EgWmcfkt.js";import{E as j}from"./EventData-DQzocGgI.js";import"./index-yBjzXJbu.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Avatar-R8Sfo5dY.js";import"./propClasses-BYrQ2lXe.js";import"./Icon-Cq1ojZpE.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./MapPinIcon-DKh9k5f_.js";import"./iframe-BBYjbYuh.js";import"./index-Chjiymov.js";import"./transition-2iKsdwk0.js";import"./use-server-handoff-complete-DXjT3LgW.js";import"./portal-FaMVLbt2.js";import"./index-D9S4NuzN.js";import"./index-fNjTmf9T.js";import"./ChevronDownIcon-Cnmsopfh.js";import"./ChevronRightIcon-DYD_tMS6.js";import"./startOfToday-Cy5rH-mn.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const ke={title:"Prototypes/Projects",parameters:{layout:"fullscreen"}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n.Top,{children:[e.jsx(n.Logo,{title:"Raven Design System",link:"/"}),e.jsx(n.Aside,{children:e.jsx(n.Buttons,{menu:W})})]}),e.jsxs(y,{children:[e.jsx(h,{maxWidth:"max",children:e.jsxs(S,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(B,{children:[e.jsx(x,{title:"Register Now"}),e.jsx(x,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(C,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(g,{cols:"4",children:j.slice(0,4).map(({id:d,title:l,link:u,image:s,alt:o,startDate:i,endDate:r,on_campus:c,on_campus_building:p,on_campus_room_number:D,event_address:_})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s,alt:o,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:i,endDate:r}),e.jsx(t.Header,{title:l}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:i,endDateTime:r,onCampus:c,onCampusBuilding:p,onCampusRoomNumber:D,eventAddress:_})}),e.jsx(t.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},d))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(C,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsx(N,{filters:M.filters,callback:()=>{}}),e.jsxs(g,{cols:"2/3",children:[e.jsxs(g.Content,{children:[e.jsx(k,{children:j.slice(0,6).map(({id:d,title:l,link:u,startDate:s,endDate:o,on_campus:i,on_campus_building:r,on_campus_room_number:c,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:s,endDate:o}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:l}),e.jsx(a.EventMeta,{startDateTime:s,endDateTime:o,onCampus:i,onCampusBuilding:r,onCampusRoomNumber:c,eventAddress:p}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},d))}),e.jsx(E,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(F,{isSticky:!0,topSpace:105,children:e.jsx(L,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(T,{})]})};var f,v,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <Nav.Top>
        <Nav.Logo title="Raven Design System" link="/" />
        <Nav.Aside>
          <Nav.Buttons menu={NavButtonsData} />
        </Nav.Aside>
      </Nav.Top>

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
          <Filter filters={FilterData.filters} callback={() => undefined} />
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
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Fe=["EventsHome"];export{m as EventsHome,Fe as __namedExportsOrder,ke as default};
