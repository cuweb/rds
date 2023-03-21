import{a as r,F as h,j as o}from"./jsx-runtime-9d2cd5de.js";import{M as v}from"./Main-a4fc807a.js";import{C as e}from"./Container-30f2fe44.js";import{C as n}from"./Column-6f70111f.js";import{P as x}from"./Panel-2bd23c0a.js";import{A as f}from"./Aside-cab7f661.js";import{T as b}from"./TopNav-2f13134e.js";import{B as k}from"./Banner-41a7d95f.js";import{F as E}from"./FooterBasic-d5768680.js";import{E as T,a as P}from"./EventCardData-9017e517.js";import{E as W,a as D}from"./EventItemData-eabf9a1e.js";import{P as F}from"./Pagination-fcd12c9d.js";import{C as B}from"./Calendar-c63bbf7b.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./index-e08e05bb.js";import"./Avatar-c7823a04.js";import"./DropDown-883a9694.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06d25453.js";import"./Link-44b0899b.js";import"./popover-761b7829.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-a3eb1d61.js";import"./transition-ad75749a.js";import"./dialog-82995df1.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./use-tracked-pointer-511c0c47.js";import"./disclosure-76f74e80.js";import"./FooterWave-b91f29cc.js";import"./index-e40656e9.js";import"./Badge-30ab9511.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";import"./index-1ae60351.js";import"./Button-051dafa4.js";import"./index-e2ec86ea.js";const xa={title:"Examples/Projects/Event Calendar/Homepage"},t={render:()=>r(h,{children:[o(b,{title:"Events Calendar"}),o(k,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),r(v,{hasOverlap:!0,children:[o(e,{maxWidth:"7xl",children:o(n,{cols:"3",maxWidth:"7xl",children:T.map(a=>o(P,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,startDateTime:a==null?void 0:a.start_date,endDateTime:a==null?void 0:a.end_date,featuredImage:a==null?void 0:a.featured_image,eventAddress:a==null?void 0:a.event_address,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,tags:a==null?void 0:a.tags},a.id))})}),r(e,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[o("h2",{children:"Upcoming Events"}),r(n,{cols:"2/3",maxWidth:"7xl",children:[r("div",{children:[o(x,{hasShadow:!0,children:W.map(({id:a,title:m,start_date:d,end_date:p,event_address:u,on_campus:c,on_campus_building:_,on_campus_room_number:g,tags:C})=>o(D,{as:"div",link:"#",title:m,startDateTime:d,endDateTime:p,event_address:u,on_campus:c,on_campus_building:_,on_campus_room_number:g,tags:C},a))}),o(F,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),o(f,{children:o(B,{callback:()=>{console.log("Calendar")}})})]})]})]}),o(E,{})]})};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const fa=["Homepage"];export{t as Homepage,fa as __namedExportsOrder,xa as default};
//# sourceMappingURL=Homepage.stories-21bd2f98.js.map
