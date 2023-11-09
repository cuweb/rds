import{j as s}from"./jsx-runtime-7ce7b810.js";import{M as f}from"./Main-6cf1ae56.js";import{S as _}from"./Section-da2bba19.js";import{C as b}from"./Container-a3dd8cc7.js";import{C as i}from"./Column-7e40cf32.js";import{S as B}from"./StackedList-704a5aaf.js";import{A as k}from"./Aside-14733e36.js";import{B as L}from"./Banner-70bf5466.js";import{T as r}from"./TopBar-78f0bb84.js";import{H as T}from"./Heading-801e6a26.js";import{F as S}from"./FooterBasic-8ca55b0e.js";import{C as t}from"./Card-d46f2352.js";import{L as o}from"./Listing-01fb594f.js";import{P as w}from"./Pagination-d729ff2e.js";import{C as E}from"./Calendar-5262f9c4.js";import{F,a as d}from"./FilterData-7bda7bde.js";import{b as c}from"./EventData-b03b4866.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./globalClasses-7ab87be3.js";import"./optionClasses-8b995f37.js";import"./Panel-14f35d17.js";import"./menu-8eae4fbd.js";import"./transition-271b59c1.js";import"./use-root-containers-8cc2decd.js";import"./index-4da2af8c.js";import"./use-tracked-pointer-7dc0618c.js";import"./use-resolve-button-type-967b1172.js";import"./ChevronDownIcon-2780c6ad.js";import"./disclosure-3192912c.js";import"./ChevronRightIcon-8ad439f2.js";import"./MagnifyingGlassIcon-97d62ca3.js";import"./popover-3ff197fb.js";import"./FooterLogoLinks-cfe1ab92.js";import"./Link-d4ea7279.js";import"./iframe-322fa5ce.js";import"../sb-preview/runtime.js";import"./index-2b34b02c.js";import"./index-9d475cdf.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-4d59305e.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";import"./Button-c1d196ed.js";import"./Icon-857a786a.js";import"./index-fb25e841.js";import"./XMarkIcon-d71bb9d6.js";import"./dialog-93abb88f.js";const Ta={title:"Examples/Projects/Event Calendar"},e={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(r,{children:s.jsxs(r.Primary,{children:[s.jsx(r.Logo,{title:"Events Calendar",link:"https://carleton.ca/webservices",children:s.jsxs("a",{href:"https://carleton.ca",className:"cu-topbar--logo",children:[s.jsx("img",{className:"culogo",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"130",height:"35",alt:"Logo"}),s.jsx("img",{className:"cushield",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"28",height:"35",alt:"Logo"})]})}),s.jsx(r.Aside,{})]})}),s.jsx(L,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),s.jsx(f,{hasOverlap:!0,children:s.jsxs(_,{children:[s.jsx(i,{cols:"3",maxWidth:"7xl",children:c.slice(0,3).map(a=>s.jsx(t,{children:s.jsxs("a",{href:a==null?void 0:a.link,children:[s.jsx(t.Figure,{children:s.jsx("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:400,height:175})}),s.jsxs(t.Content,{children:[s.jsx(t.DateBox,{startDate:a==null?void 0:a.startDate,endDate:a==null?void 0:a.endDate}),s.jsx(t.Header,{text:a==null?void 0:a.title}),s.jsx(t.EventMeta,{startDateTime:a==null?void 0:a.startDate,endDateTime:a==null?void 0:a.endDate,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,eventAddress:a==null?void 0:a.event_address})]}),s.jsx(t.Badges,{tags:a==null?void 0:a.tags})]})},a==null?void 0:a.id))}),s.jsxs(b,{maxWidth:"7xl",isGrey:!0,children:[s.jsx(T,{text:"Upcoming Events",maxWidth:"7xl"}),s.jsx(i,{maxWidth:"7xl",children:s.jsx(F,{filters:d.filters,callback:()=>{},sortOptions:d.sortOptions})}),s.jsxs(i,{cols:"2/3",maxWidth:"7xl",children:[s.jsxs("div",{children:[s.jsx(B,{hasShadow:!0,children:c.map(({id:a,title:u,link:h,startDate:n,endDate:l,event_address:x,on_campus:C,on_campus_building:j,on_campus_room_number:v,tags:D})=>s.jsx(o,{children:s.jsxs("a",{href:h,children:[s.jsx(o.DateBox,{startDate:n,endDate:l}),s.jsxs(o.Content,{children:[s.jsx(o.Header,{text:u}),s.jsx(o.EventMeta,{startDateTime:n,endDateTime:l,onCampus:C,onCampusBuilding:j,onCampusRoomNumber:v,eventAddress:x}),s.jsx(o.Badges,{tags:D})]})]})},a))}),s.jsx(w,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),s.jsx(k,{isSticky:!0,topSpace:"10",children:s.jsx(E,{callback:()=>{console.log("Calendar")}})})]})]})]})}),s.jsx(S,{})]})};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const Sa=["Homepage"];export{e as Homepage,Sa as __namedExportsOrder,Ta as default};
//# sourceMappingURL=Homepage.stories-685a59f5.js.map
