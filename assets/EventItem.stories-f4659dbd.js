import{j as a}from"./jsx-runtime-9d2cd5de.js";import{E as o,a as k}from"./EventItemData-466c7516.js";import{S as i}from"./StackedList-def3e0c3.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./Link-a35d851d.js";import"./iframe-e1df8f04.js";import"../sb-preview/runtime.mjs";import"./index-03b14371.js";import"./Badge-30ab9511.js";import"./index-bdbff7f3.js";import"./index-9180d5e9.js";import"./index-ac9ed659.js";import"./index-86906ac0.js";import"./index-3d4b39e4.js";import"./optionClasses-c5aec0a8.js";const O={title:"Cards & Lists/Lists/Event Item",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={fontSize:"base",title:"Event item title",link:"https://carleton.ca",event_address:"Robertson Hall",startDateTime:"2022-12-16 01:48:41",endDateTime:"2022-12-18 05:22:15",on_campus:!0,on_campus_building:"Robertson Hall",on_campus_room_number:"407",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}],audience:[{id:1,name:"Student",slug:"student"},{id:2,name:"Faculty",slug:"faculty"}]}};const s={render:e=>a(i,{hasBorder:!0,children:a(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags})})};s.args={...t.args};const n={render:e=>a(i,{hasShadow:!0,children:k.map(()=>a(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})};n.args={...t.args};const r={render:e=>a(i,{cols:"2",hasShadow:!0,children:k.map(()=>a(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})};r.args={...t.args};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var _,c,p;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <EventItem as="li" link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />
    </StackedList>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,S;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <StackedList hasShadow>
      {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
    </StackedList>
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var b,D,T;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <StackedList cols="2" hasShadow>
      {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
    </StackedList>
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const R=["Default","SingleItemList","MultiItemList","MultiItemColumns"];export{t as Default,r as MultiItemColumns,n as MultiItemList,s as SingleItemList,R as __namedExportsOrder,O as default};
//# sourceMappingURL=EventItem.stories-f4659dbd.js.map
