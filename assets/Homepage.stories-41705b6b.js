import{a as o,F as h,j as e}from"./jsx-runtime-9d2cd5de.js";import{M as v}from"./Main-a4fc807a.js";import{C as t}from"./Container-30f2fe44.js";import{C as n}from"./Column-6f70111f.js";import{P as x}from"./Panel-2bd23c0a.js";import{A as f}from"./Aside-cab7f661.js";import{T as b}from"./TopNav-78a08f09.js";import{B as k}from"./Banner-41a7d95f.js";import{F as E}from"./FooterBasic-b40fc0a5.js";import{E as T,a as P}from"./EventCardData-2955c1e2.js";import{E as W,a as D}from"./EventItemData-a0fe9ebc.js";import{P as F}from"./Pagination-fcd12c9d.js";import{C as B}from"./Calendar-4ca2e489.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./index-31110fe0.js";import"./Avatar-c7823a04.js";import"./DropDown-14485295.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06d25453.js";import"./Link-1ff70fee.js";import"./popover-828cbb50.js";import"./transition-3d9bc4c7.js";import"./use-event-listener-402fdd3a.js";import"./dialog-77319903.js";import"./index-1eb27dd0.js";import"./disclosure-fb670083.js";import"./FooterWave-def567b6.js";import"./index-e40656e9.js";import"./Badge-30ab9511.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";import"./index-1ae60351.js";import"./Button-3310c0ae.js";import"./index-e2ec86ea.js";const ca={title:"Examples/Projects/Event Calendar/Homepage"},r={render:()=>o(h,{children:[e(b,{title:"Events Calendar"}),e(k,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),o(v,{hasOverlap:!0,children:[e(t,{maxWidth:"7xl",children:e(n,{cols:"3",maxWidth:"7xl",children:T.map(a=>e(P,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,startDateTime:a==null?void 0:a.start_date,endDateTime:a==null?void 0:a.end_date,featuredImage:a==null?void 0:a.featured_image,eventAddress:a==null?void 0:a.event_address,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,tags:a==null?void 0:a.tags},a.id))})}),o(t,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[e("h2",{children:"Upcoming Events"}),o(n,{cols:"2/3",maxWidth:"7xl",children:[o("div",{children:[e(x,{hasShadow:!0,children:W.map(({id:a,title:d,start_date:m,end_date:p,event_address:u,on_campus:c,on_campus_building:_,on_campus_room_number:g,tags:C})=>e(D,{as:"div",link:"#",title:d,startDateTime:m,endDateTime:p,event_address:u,on_campus:c,on_campus_building:_,on_campus_room_number:g,tags:C},a))}),e(F,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),e(f,{children:e(B,{callback:()=>{console.log("Calendar")}})})]})]})]}),e(E,{})]})};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Featured Events" align="left" isType="dark-wave" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Container maxWidth="7xl">
          <Column cols="3" maxWidth="7xl">
            {dataCard.map(item => <EventCard key={item.id} title={item?.title} link={item?.link} startDateTime={item?.start_date} endDateTime={item?.end_date} featuredImage={item?.featured_image} eventAddress={item?.event_address} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} tags={item?.tags} />)}
          </Column>
        </Container>

        <Container bgColor="grey" maxWidth="7xl" hasProse>
          <h2>Upcoming Events</h2>

          {/* <Column maxWidth="7xl">
            <Filter filters={data.filters} callback={callbackfilter} sortOptions={data.sortOptions} />
           </Column> */}

          <Column cols="2/3" maxWidth="7xl">
            <div>
              <Panel hasShadow>
                {dataList.map(({
                id,
                title,
                // link,
                start_date,
                end_date,
                event_address,
                on_campus,
                on_campus_building,
                on_campus_room_number,
                tags
              }) => <EventItem key={id} as="div" link="#" title={title} startDateTime={start_date} endDateTime={end_date} event_address={event_address} on_campus={on_campus} on_campus_building={on_campus_building} on_campus_room_number={on_campus_room_number} tags={tags} />)}
              </Panel>

              <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => {
              console.log('Pagination');
            }} />
            </div>

            <Aside>
              <Calendar callback={() => {
              console.log('Calendar');
            }} />
            </Aside>
          </Column>
        </Container>
      </Main>

      <FooterBasic />
    </>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const _a=["Homepage"];export{r as Homepage,_a as __namedExportsOrder,ca as default};
//# sourceMappingURL=Homepage.stories-41705b6b.js.map
