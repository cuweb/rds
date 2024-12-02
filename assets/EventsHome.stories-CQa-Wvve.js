import{j as e}from"./jsx-runtime-B9B14buI.js";import{S as h}from"./Section-4kh7xz3r.js";import{M as y}from"./Main-UnEI4AkY.js";import{F as N}from"./FooterStandard-B-wyooKo.js";import{W as k}from"./WideImage-CqyyqZKr.js";import{N as n}from"./Nav-BNCtWcyE.js";import{B as F}from"./ButtonGroup-D5p79LjI.js";import{B as g}from"./Button-Bil94z9c.js";import{P as C}from"./PageHeader-BUPvw8ct.js";import{C as x}from"./Column-BXVzsNdk.js";import{S as T}from"./StackedList-DFdQu14J.js";import{A as S}from"./Aside-Ch6vWtj9.js";import{C as t}from"./Card-gwlPtaL3.js";import{L as a}from"./Listing-CwA3Uh6g.js";import{F as E}from"./Filter-DbtzBvpB.js";import{P as W}from"./Pagination-D2AzNLEF.js";import{M as B}from"./MultiDayCalendar-DBBx7AXc.js";import{F as L}from"./FilterData-BWFYJ5nS.js";import{N as M}from"./NavData-EgWmcfkt.js";import{E as j}from"./EventData-DPPkmqkE.js";import{F as P}from"./MagnifyingGlassIcon-C7RLA2QC.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FooterLogoLinks-DeIOA-zG.js";import"./useLinkContext-Bwn02r_3.js";import"./propClasses-DiIY1iW4.js";import"./Avatar-FMDDR7_g.js";import"./Icon-BTbDxzPp.js";import"./parseISO-BQ4LyrE0.js";import"./format-Dt71a7ij.js";import"./isSameDay-Dpgs3O9f.js";import"./getDate-BoVmdanq.js";import"./parse-gVNmX4me.js";import"./index-C0VAv7oJ.js";import"./iframe-DG1IdxLz.js";import"../sb-preview/runtime.js";import"./index-BKNjMPK8.js";import"./transition-DAvnCJ28.js";import"./use-server-handoff-complete-yi65jfDX.js";import"./portal-DAmNxAVq.js";import"./index-BnopnzSw.js";import"./ChevronDownIcon-D0gv-xn_.js";import"./ChevronRightIcon-CCsIXVIj.js";import"./startOfToday-D0O5DQ5P.js";import"./isToday-CPeHlImM.js";const Fe={title:"Prototypes/Projects"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsxs(n.Primary,{children:[e.jsx(n.Logo,{title:"Events Calendar",link:"https://events.carleton.ca"}),e.jsx(n.Aside,{menu:M,children:e.jsx("button",{"aria-label":"search",className:"not-prose",children:e.jsx(P,{className:"w-5 h-5 cursor-pointer text-cu-black-300 left-4","aria-hidden":"true"})})})]})}),e.jsxs(y,{children:[e.jsx(h,{maxWidth:"7xl",children:e.jsxs(k,{title:"True Leaders Challenge What's Possible",headerType:"h1",isType:"image",maxWidth:"max",image:"https://picsum.photos/1600/700",hasWave:!0,children:[e.jsx("p",{children:"True leaders don't just accept challenges. They challenge the status quo. Join us on May 8th for Carleton's Challenge Conference."}),e.jsxs(F,{children:[e.jsx(g,{title:"Register Now"}),e.jsx(g,{color:"grey",title:"Request Information"})]})]})}),e.jsxs(h,{maxWidth:"7xl",children:[e.jsx(C,{as:"h2",header:"Featured Events",size:"md"}),e.jsx(x,{cols:"4",maxWidth:"7xl",children:j.slice(0,4).map(({id:l,title:d,link:c,image:s,alt:r,startDate:i,endDate:o,on_campus:u,on_campus_building:p,on_campus_room_number:D,event_address:_})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s,alt:r,width:400,height:175})}),e.jsx(t.DateThumb,{startDate:i,endDate:o}),e.jsx(t.Header,{title:d}),e.jsx(t.Body,{children:e.jsx(t.EventMeta,{startDateTime:i,endDateTime:o,onCampus:u,onCampusBuilding:p,onCampusRoomNumber:D,eventAddress:_})}),e.jsx(t.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},l))})]}),e.jsxs(h,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(C,{as:"h2",header:"Upcoming Events",size:"md"}),e.jsx(E,{filters:L.filters,callback:()=>{}}),e.jsxs(x,{cols:"2/3",maxWidth:"7xl",children:[e.jsxs(x.Content,{children:[e.jsx(T,{children:j.slice(0,6).map(({id:l,title:d,link:c,startDate:s,endDate:r,on_campus:i,on_campus_building:o,on_campus_room_number:u,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.DateThumb,{startDate:s,endDate:r}),e.jsxs(a.Body,{children:[e.jsx(a.Header,{title:d}),e.jsx(a.EventMeta,{startDateTime:s,endDateTime:r,onCampus:i,onCampusBuilding:o,onCampusRoomNumber:u,eventAddress:p}),e.jsx(a.Footer,{children:e.jsx("a",{href:c,className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]},l))}),e.jsx(W,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),e.jsx(S,{isSticky:!0,topSpace:105,children:e.jsx(B,{events:[],callback:()=>{},defaultDate:""})})]})]})]}),e.jsx(N,{})]})};var b,f,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(f=m.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Te=["EventsHome"];export{m as EventsHome,Te as __namedExportsOrder,Fe as default};
