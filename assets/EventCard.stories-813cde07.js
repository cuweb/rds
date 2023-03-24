import{j as s}from"./jsx-runtime-9d2cd5de.js";import{C as m}from"./Column-59a5f743.js";import{a as l,E as g}from"./EventCardData-c4bfcbdb.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-9f612ec7.js";import"./index-380dde4c.js";import"./Badge-30ab9511.js";import"./Link-44b0899b.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";const k={title:"Cards & Lists/Cards/Event Card",component:l,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={};r.args={heading:"h3",title:"Lived Experience Luncheon Series with Dr. Alex Auerbach",link:"#",startDateTime:"2022-12-16 01:48:41",endDateTime:"2022-12-16 02:45:41",eventAddress:"405 Robertson Hall",onCampus:!1,tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}],audience:[{id:1,name:"Student",slug:"student"},{id:2,name:"Faculty",slug:"faculty"}]}};const e={render:()=>s(m,{cols:"3",maxWidth:"7xl",children:g.map((a,c)=>s(l,{title:a==null?void 0:a.title,link:a==null?void 0:a.link,startDateTime:a==null?void 0:a.start_date,endDateTime:a==null?void 0:a.end_date,featuredImage:a==null?void 0:a.featured_image,eventAddress:a==null?void 0:a.event_address,onCampus:a==null?void 0:a.on_campus,onCampusBuilding:a==null?void 0:a.on_campus_building,onCampusRoomNumber:a==null?void 0:a.on_campus_room_number,tags:a==null?void 0:a.tags},c))})};var o,n,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Column cols="3" maxWidth="7xl">
      {data.map((item, index) => <EventCard key={index} title={item?.title} link={item?.link} startDateTime={item?.start_date} endDateTime={item?.end_date} featuredImage={item?.featured_image} eventAddress={item?.event_address} onCampus={item?.on_campus} onCampusBuilding={item?.on_campus_building} onCampusRoomNumber={item?.on_campus_room_number} tags={item?.tags} />)}
    </Column>
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const A=["Default","GridCards"];export{r as Default,e as GridCards,A as __namedExportsOrder,k as default};
//# sourceMappingURL=EventCard.stories-813cde07.js.map
