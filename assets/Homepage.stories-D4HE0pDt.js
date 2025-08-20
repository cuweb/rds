import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as h}from"./Section-CKcqyDpo.js";import{M as F}from"./Main-BqxOGoMS.js";import{F as B}from"./FooterStandard-CssxRqDU.js";import{W as S}from"./WideImage-DSeJO8YF.js";import{N as n}from"./Nav-CLa65ZJB.js";import{B as N}from"./ButtonGroup-BemJm4Dh.js";import{B as C}from"./Button-BKQbqh7D.js";import{P as j}from"./PageHeader-DczponrD.js";import{C as g}from"./Column-BSC44NdV.js";import{S as P}from"./StackedList-C7Lk8KH7.js";import{A as k}from"./Aside-B_fS2uf7.js";import{C as t}from"./Card-D306FwQ7.js";import{L as a}from"./Listing-CGCEda9H.js";import{F as x}from"./FilterPanel-AFkBSfIl.js";import{P as L}from"./Pagination-BT_sZNlC.js";import{M as E}from"./MultiDayCalendar-KnqCmkGG.js";import{F as f}from"./FilterData-D1ec_lJy.js";import{N as M}from"./NavData-DGjf4Von.js";import{E as v}from"./EventData-DQzocGgI.js";import"./index-yBjzXJbu.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Avatar-R8Sfo5dY.js";import"./propClasses-B5Ri1ApJ.js";import"./Icon-DX9EykPo.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./MapPinIcon-DKh9k5f_.js";import"./iframe-CNrQuwjk.js";import"./index-Chjiymov.js";import"./ChevronRightIcon-DYD_tMS6.js";import"./startOfToday-Cy5rH-mn.js";import"./isBefore-7pHfX-56.js";import"./isToday-BCVIkF8O.js";import"./isSameMonth-aULO67Zy.js";const De={title:"Prototypes/Projects/Event Calendar",parameters:{layout:"fullscreen"}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n.Top,{children:[e.jsx(n.Logo,{title:"Raven Design System",link:"/"}),e.jsx(n.Aside,{children:e.jsx(n.Buttons,{menu:M})})]}),e.jsxs(F,{children:[e.jsx(h,{maxWidth:"max",children:e.jsxs(S,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(N,{children:[e.jsx(C,{title:"Register Now"}),e.jsx(C,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(j,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(g,{cols:"4",children:v.slice(0,4).map(({id:l,title:d,link:u,image:s,alt:o,startDate:i,endDate:r,on_campus:p,on_campus_building:c,on_campus_room_number:y,event_address:T})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s,alt:o,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:i,endDate:r}),e.jsx(t.Header,{title:d}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:i,endDateTime:r,onCampus:p,onCampusBuilding:c,onCampusRoomNumber:y,eventAddress:T})}),e.jsx(t.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(j,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsxs(x,{children:[e.jsx(x.Top,{sortOptions:f.sortOptions,filterOptions:f.filters}),e.jsx(x.Bottom,{})]}),e.jsxs(g,{cols:"2/3",children:[e.jsxs(g.Content,{children:[e.jsx(P,{children:v.slice(0,6).map(({id:l,title:d,link:u,startDate:s,endDate:o,on_campus:i,on_campus_building:r,on_campus_room_number:p,event_address:c})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:s,endDate:o}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:s,endDateTime:o,onCampus:i,onCampusBuilding:r,onCampusRoomNumber:p,eventAddress:c}),e.jsx(a.Footer,{children:e.jsx("a",{href:u,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(L,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(k,{isSticky:!0,topSpace:105,children:e.jsx(E,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(B,{})]})};var b,D,_;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const _e=["Homepage"];export{m as Homepage,_e as __namedExportsOrder,De as default};
