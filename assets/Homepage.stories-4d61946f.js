import{a as r,F as C,j as o}from"./jsx-runtime-9d2cd5de.js";import{M as v}from"./Main-1a5ad365.js";import{S as h}from"./Section-94207df0.js";import{C as f}from"./Container-95591aef.js";import{C as e}from"./Column-59a5f743.js";import{P as x}from"./Panel-efd3b932.js";import{A as b}from"./Aside-e0966e93.js";import{T as k}from"./TopNav-8b0ab521.js";import{B as E}from"./Banner-ffd29f76.js";import{F as T}from"./FooterBasic-d5768680.js";import{E as P,a as D}from"./EventCardData-c4bfcbdb.js";import{E as S,a as W}from"./EventItemData-05029e8d.js";import{P as F}from"./Pagination-fcd12c9d.js";import{C as B}from"./Calendar-aa9e3dfb.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./globalClasses-11956bde.js";import"./optionClasses-9f612ec7.js";import"./index-e08e05bb.js";import"./Avatar-2496aec3.js";import"./DropDown-744e650e.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-98794453.js";import"./Link-44b0899b.js";import"./popover-761b7829.js";import"./open-closed-6ab898d8.js";import"./keyboard-46ff6cb9.js";import"./use-resolve-button-type-6b4df908.js";import"./use-event-listener-a3eb1d61.js";import"./transition-ad75749a.js";import"./Search-25f63c88.js";import"./dialog-82995df1.js";import"./platform-ae94fb3f.js";import"./index-1eb27dd0.js";import"./combobox-00d1fd7e.js";import"./use-tracked-pointer-511c0c47.js";import"./disclosure-76f74e80.js";import"./FooterWave-b91f29cc.js";import"./index-380dde4c.js";import"./Badge-30ab9511.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";import"./index-1ae60351.js";import"./Button-40091c81.js";import"./index-e2ec86ea.js";const Ea={title:"Examples/Projects/Event Calendar/Homepage"},t={render:()=>r(C,{children:[o(k,{title:"Events Calendar"}),o(E,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),o(v,{hasOverlap:!0,children:r(h,{children:[o(e,{cols:"3",maxWidth:"7xl",children:P.map(a=>o(D,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,startDateTime:a==null?void 0:a.start_date,endDateTime:a==null?void 0:a.end_date,featuredImage:a==null?void 0:a.featured_image,eventAddress:a==null?void 0:a.event_address,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,tags:a==null?void 0:a.tags},a.id))}),r(f,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[o("h2",{children:"Upcoming Events"}),r(e,{cols:"2/3",maxWidth:"7xl",children:[r("div",{children:[o(x,{hasShadow:!0,children:S.map(({id:a,title:l,start_date:m,end_date:d,event_address:p,on_campus:c,on_campus_building:u,on_campus_room_number:_,tags:g})=>o(W,{as:"div",link:"#",title:l,startDateTime:m,endDateTime:d,event_address:p,on_campus:c,on_campus_building:u,on_campus_room_number:_,tags:g},a))}),o(F,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),o(b,{children:o(B,{callback:()=>{console.log("Calendar")}})})]})]})]})}),o(T,{})]})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <>
      <TopNav title="Events Calendar" />
      <Banner title="Featured Events" align="left" isType="dark-wave" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="3" maxWidth="7xl">
            {dataCard.map(item => <EventCard key={item.id} title={item?.title} link={item?.link} startDateTime={item?.start_date} endDateTime={item?.end_date} featuredImage={item?.featured_image} eventAddress={item?.event_address} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} tags={item?.tags} />)}
          </Column>

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
        </Section>
      </Main>

      <FooterBasic />
    </>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Ta=["Homepage"];export{t as Homepage,Ta as __namedExportsOrder,Ea as default};
//# sourceMappingURL=Homepage.stories-4d61946f.js.map
