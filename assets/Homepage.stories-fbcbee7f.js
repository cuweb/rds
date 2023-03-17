import{a as s,j as a,F as R}from"./jsx-runtime-9d2cd5de.js";import{M as B}from"./Main-87487803.js";import{C as w}from"./Container-58f67975.js";import{C as I}from"./Column-6f70111f.js";import{P as $}from"./Panel-2bd23c0a.js";import{A as L}from"./Aside-cab7f661.js";import{T as W}from"./TopNav-e8cbf2a6.js";import{B as A}from"./Banner-41a7d95f.js";import{F}from"./FooterBasic-767c7072.js";import{E as M,a as O}from"./EventCardData-8c7030f9.js";import{E as j,a as q}from"./EventItemData-c82f1d96.js";import{r as N}from"./index-580b8df0.js";import{C as V,a as H}from"./index-0bd8f571.js";import{C as U}from"./Calendar-4cf134e3.js";import"./tailwindClasses-b7ef87ec.js";import"./index-31110fe0.js";import"./Avatar-c7823a04.js";import"./DropDown-46408ca9.js";import"./ChevronDownIcon-4154b4bc.js";import"./Icon-06d25453.js";import"./Link-a8ece75e.js";import"./popover-2558df07.js";import"./transition-df23ef1c.js";import"./use-event-listener-472363b9.js";import"./dialog-0b8813e1.js";import"./index-1eb27dd0.js";import"./_commonjsHelpers-042e6b4d.js";import"./disclosure-bc7b7f17.js";import"./FooterWave-49fe559c.js";import"./index-e40656e9.js";import"./Badge-30ab9511.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";import"./Button-6b13d90f.js";import"./index-e2ec86ea.js";const f="...",v=(e,d)=>{const t=d-e+1;return Array.from({length:t},(c,l)=>l+e)},z=(e,d,t=1,c)=>N.useMemo(()=>{const n=Math.ceil(e/d);if(t+5>=n)return v(1,n);const m=Math.max(c-t,1),o=Math.min(c+t,n),p=m>2,g=o<n-2,_=1,k=n;if(!p&&g){const u=3+2*t;return[...v(1,u),f,n]}if(p&&!g){const u=3+2*t,h=v(n-u+1,n);return[_,f,...h]}if(p&&g){const u=v(m,o);return[_,f,...u,f,k]}},[e,d,t,c]),i={border:"py-5 border-t border-cu-black-100",spacing:"pl-6 pr-5",mobileButtons:"relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50",pageListNumbers:"flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50",pageListArrows:"text-cu-black-400 px-2.5"},y=({hasBorder:e,hasSpacing:d,totalCount:t,siblingCount:c,pageSize:l,callback:n})=>{const[r,m]=N.useState(1),o=z(t,l,c,r),p=()=>{r<P&&m(r+1)},g=()=>{r>1&&m(r-1)},_=b=>{m(Number(b))},k=e?i.border:"",u=d?i.spacing:"",h=(r-1)*l+1;let x=t,P=0;return N.useEffect(()=>{n([h,x])},[h,x,n]),t>r*l&&(x=r*l),o!==void 0&&(P=Number(o[o.length-1])),r===0||o!==void 0&&o.length<2?null:s("div",{className:`not-prose mt-8 flex items-center justify-between first:mt-0 ${k} ${u}`,children:[s("div",{className:"flex flex-1 justify-between sm:hidden",children:[a("button",{onClick:g,className:`${i.mobileButtons}`,children:"Previous"}),a("button",{onClick:p,className:`${i.mobileButtons}`,children:"Next"})]}),s("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[s("p",{className:"text-sm text-cu-black-800",children:["Showing ",a("span",{className:"font-semibold",children:h})," to"," ",a("span",{className:"font-semibold",children:x})," of ",a("span",{className:"font-semibold",children:t})," ","results"]}),a("nav",{"aria-label":"Pagination",children:s("ul",{className:"inline-flex overflow-hidden rounded-md border border-cu-black-100",children:[s("li",{className:`${i.pageListNumbers} ${i.pageListArrows}`,role:"presentation",onClick:g,children:[a("span",{className:"sr-only",children:"Previous"}),a(V,{className:"h-5 w-5","aria-hidden":"true"})]}),o!==void 0&&o.map((b,E)=>b===f?a("li",{className:`${i.pageListNumbers}`,children:"…"},E):a("li",{role:"presentation",className:`${i.pageListNumbers} ${Number(b)===r?"bg-cu-black-50 font-semibold":""}`,onClick:()=>_(Number(b)),children:b},E)),s("li",{className:`${i.pageListNumbers} ${i.pageListArrows}`,role:"presentation",onClick:p,children:[a("span",{className:"sr-only",children:"Next"}),a(H,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})};try{y.displayName="Pagination",y.__docgenInfo={description:"",displayName:"Pagination",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},hasSpacing:{defaultValue:null,description:"",name:"hasSpacing",required:!1,type:{name:"boolean"}},totalCount:{defaultValue:null,description:"",name:"totalCount",required:!0,type:{name:"number"}},siblingCount:{defaultValue:null,description:"",name:"siblingCount",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(k: [number, number]) => void"}}}}}catch{}const Se={title:"Examples/Projects/Event Calendar/Homepage"},C={render:()=>s(R,{children:[a(W,{title:"Events Calendar"}),a(A,{title:"Featured Events",align:"left",isType:"dark-wave",maxWidth:"7xl",hasOverlap:!0}),s(B,{hasOverlap:!0,children:[a(w,{maxWidth:"7xl",children:a(I,{cols:"3",maxWidth:"7xl",children:M.map(e=>a(O,{title:e==null?void 0:e.title,link:e==null?void 0:e.link,startDateTime:e==null?void 0:e.start_date,endDateTime:e==null?void 0:e.end_date,featuredImage:e==null?void 0:e.featured_image,eventAddress:e==null?void 0:e.event_address,onCampus:e==null?void 0:e.on_campus,onCampusBuilding:e==null?void 0:e.on_campus_building,onCampusRoomNumber:e==null?void 0:e.on_campus_room_number,tags:e==null?void 0:e.tags},e.id))})}),s(w,{bgColor:"grey",maxWidth:"7xl",hasProse:!0,children:[a("h2",{children:"Upcoming Events"}),s(I,{cols:"2/3",maxWidth:"7xl",children:[s("div",{children:[a($,{hasShadow:!0,children:j.map(({id:e,title:d,start_date:t,end_date:c,event_address:l,on_campus:n,on_campus_building:r,on_campus_room_number:m,tags:o})=>a(q,{as:"div",link:"#",title:d,startDateTime:t,endDateTime:c,event_address:l,on_campus:n,on_campus_building:r,on_campus_room_number:m,tags:o},e))}),a(y,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{console.log("Pagination")}})]}),a(L,{children:a(U,{callback:()=>{console.log("Calendar")}})})]})]})]}),a(F,{})]})};var S,T,D;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(T=C.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Te=["Homepage"];export{C as Homepage,Te as __namedExportsOrder,Se as default};
//# sourceMappingURL=Homepage.stories-fbcbee7f.js.map
