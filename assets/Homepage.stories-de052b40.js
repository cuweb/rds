import{j as t}from"./jsx-runtime-7ce7b810.js";import{M as f}from"./Main-6cf1ae56.js";import{S as _}from"./Section-4e633831.js";import{C as b}from"./Container-4cc53a7b.js";import{C as i}from"./Column-9bf4cf3a.js";import{S as B}from"./StackedList-fb3cb31c.js";import{A as k}from"./Aside-d3d5e2c5.js";import{B as L}from"./Banner-3f531bcd.js";import{T as r}from"./TopBar-488a5b7c.js";import{H as T}from"./Heading-2ea8d2e3.js";import{F as S}from"./FooterBasic-a349f548.js";import{C as s}from"./Card-c193b065.js";import{L as o}from"./Listing-cd494030.js";import{P as w}from"./Pagination-d729ff2e.js";import{C as E}from"./Calendar-cdcc1494.js";import{F,a as d}from"./FilterData-7ced25a5.js";import{b as c}from"./EventData-b03b4866.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-fe633af6.js";import"./optionClasses-c898b830.js";import"./Panel-60389fd2.js";import"./menu-cdec7704.js";import"./open-closed-452e92a4.js";import"./use-owner-127f86a6.js";import"./use-tracked-pointer-a7a12abc.js";import"./use-resolve-button-type-39f07965.js";import"./ChevronDownIcon-2780c6ad.js";import"./transition-85fd6845.js";import"./disclosure-bb587eb4.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-8c0ae301.js";import"./use-root-containers-6a924b7d.js";import"./index-4da2af8c.js";import"./FooterLogoLinks-0aa3ecae.js";import"./Link-1b47f55f.js";import"./iframe-258bb573.js";import"../sb-preview/runtime.js";import"./index-2b34b02c.js";import"./index-9d475cdf.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-4d59305e.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";import"./Button-4f82987c.js";import"./Icon-163d2856.js";import"./index-fb25e841.js";import"./XMarkIcon-d71bb9d6.js";import"./dialog-3333e5af.js";import"./platform-c0b4c731.js";const Ea={title:"Examples/Projects/Event Calendar"},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(r,{children:t.jsxs(r.Primary,{children:[t.jsx(r.Logo,{title:"Events Calendar",link:"https://carleton.ca/webservices",children:t.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[t.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),t.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),t.jsx(r.Aside,{})]})}),t.jsx(L,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),t.jsx(f,{hasOverlap:!0,children:t.jsxs(_,{children:[t.jsx(i,{cols:"3",maxWidth:"7xl",children:c.slice(0,3).map(a=>t.jsx(s,{children:t.jsxs("a",{href:a==null?void 0:a.link,children:[t.jsx(s.Figure,{children:t.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),t.jsxs(s.Content,{children:[t.jsx(s.DateBox,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),t.jsx(s.Header,{text:a==null?void 0:a.title}),t.jsx(s.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),t.jsx(s.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),t.jsxs(b,{maxWidth:"7xl",isGrey:!0,children:[t.jsx(T,{text:"Upcoming Events",maxWidth:"7xl"}),t.jsx(i,{maxWidth:"7xl",children:t.jsx(F,{filters:d.filters,callback:()=>{},sortOptions:d.sortOptions})}),t.jsxs(i,{cols:"2/3",maxWidth:"7xl",children:[t.jsxs("div",{children:[t.jsx(B,{hasShadow:!0,children:c.map(({id:a,title:u,link:h,startDate:n,endDate:l,event_address:x,on_campus:C,on_campus_building:j,on_campus_room_number:v,tags:D})=>t.jsx(o,{children:t.jsxs("a",{href:h,children:[t.jsx(o.DateBox,{startDate:n,endDate:l}),t.jsxs(o.Content,{children:[t.jsx(o.Header,{text:u}),t.jsx(o.EventMeta,{startDateTime:n,endDateTime:l,onCampus:C,onCampusBuilding:j,onCampusRoomNumber:v,eventAddress:x}),t.jsx(o.Badges,{tags:D})]})]})},a))}),t.jsx(w,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),t.jsx(k,{isSticky:!0,topSpace:"10",children:t.jsx(E,{callback:()=>{console.log("Calendar")}})})]})]})]})}),t.jsx(S,{})]})};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Events Calendar" link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img className="culogo" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg" width="130" height="35" alt="Logo" />
              <img className="cushield" src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg" width="28" height="35" alt="Logo" />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Banner title="Featured Events" align="left" isType="dark-wave" maxWidth="7xl" hasOverlap />

      <Main hasOverlap>
        <Section>
          <Column cols="3" maxWidth="7xl">
            {dataCard.slice(0, 3).map(item => <Card key={item?.id}>
                <a href={item?.link}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width={400} height={175} />
                  </Card.Figure>
                  <Card.Content>
                    <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                    <Card.Header text={item?.title} />
                    <Card.EventMeta startDateTime={item?.startDate} endDateTime={item?.endDate} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} eventAddress={item?.event_address} />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </a>
              </Card>)}
          </Column>

          <Container maxWidth="7xl" isGrey>
            <Heading text="Upcoming Events" maxWidth="7xl" />

            <Column maxWidth="7xl">
              <Filter filters={dataFilter.filters} callback={() => undefined} sortOptions={dataFilter.sortOptions} />
            </Column>

            <Column cols="2/3" maxWidth="7xl">
              <div>
                <StackedList hasShadow>
                  {dataList.map(({
                  id,
                  title,
                  link,
                  startDate,
                  endDate,
                  event_address,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  tags
                }) => <Listing key={id}>
                        <a href={link}>
                          <Listing.DateBox startDate={startDate} endDate={endDate} />
                          <Listing.Content>
                            <Listing.Header text={title} />
                            <Listing.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                            <Listing.Badges tags={tags} />
                          </Listing.Content>
                        </a>
                      </Listing>)}
                </StackedList>

                <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => {
                console.log('Pagination');
              }} />
              </div>

              <Aside isSticky topSpace="10">
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
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const Fa=["Homepage"];export{e as Homepage,Fa as __namedExportsOrder,Ea as default};
//# sourceMappingURL=Homepage.stories-de052b40.js.map
