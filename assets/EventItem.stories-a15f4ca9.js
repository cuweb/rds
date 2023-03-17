import{j as t}from"./jsx-runtime-9d2cd5de.js";import{C as i}from"./Column-6f70111f.js";import{a as o,E as f}from"./EventItemData-a0fe9ebc.js";import{S as m}from"./StackedList-630778db.js";import{C as k}from"./Container-30f2fe44.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./Link-1ff70fee.js";import"./index-e40656e9.js";import"./Badge-30ab9511.js";import"./index-ae1f7f2c.js";import"./index-0ba33c7b.js";import"./index-36152d80.js";const H={title:"Cards & Lists/Lists/Event Item",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={};a.args={fontSize:"base",title:"Event item title",link:"https://carleton.ca",event_address:"Robertson Hall",startDateTime:"2022-12-16 01:48:41",endDateTime:"2022-12-18 05:22:15",on_campus:!0,on_campus_building:"Robertson Hall",on_campus_room_number:"407",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}],audience:[{id:1,name:"Student",slug:"student"},{id:2,name:"Faculty",slug:"faculty"}]}};const n={render:e=>t(i,{maxWidth:"5xl",children:t(m,{hasBorder:!0,children:t(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags})})})};n.args={...a.args};const s={render:e=>t(k,{children:t(i,{maxWidth:"5xl",children:t(m,{hasShadow:!0,children:f.map(()=>t(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})})})};s.args={...a.args};const r={render:e=>t(k,{children:t(i,{maxWidth:"5xl",children:t(m,{cols:"2",hasShadow:!0,children:f.map(()=>t(o,{as:"li",link:e.link,fontSize:e.fontSize,title:e.title,startDateTime:e.startDateTime,endDateTime:e.endDateTime,event_address:e.event_address,on_campus:e.on_campus,on_campus_building:e.on_campus_building,on_campus_room_number:e.on_campus_room_number,tags:e.tags},567))})})})};r.args={...a.args};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,_,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Column maxWidth="5xl">
      <StackedList hasBorder>
        <EventItem as="li" link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />
      </StackedList>
    </Column>
}`,...(p=(_=n.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};var g,S,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Container>
      <Column maxWidth="5xl">
        <StackedList hasShadow>
          {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
        </StackedList>
      </Column>
    </Container>
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,T,h;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Container>
      <Column maxWidth="5xl">
        <StackedList cols="2" hasShadow>
          {data.map(() => <EventItem as="li" key={567} link={args.link} fontSize={args.fontSize} title={args.title} startDateTime={args.startDateTime} endDateTime={args.endDateTime} event_address={args.event_address} on_campus={args.on_campus} on_campus_building={args.on_campus_building} on_campus_room_number={args.on_campus_room_number} tags={args.tags} />)}
        </StackedList>
      </Column>
    </Container>
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const O=["Default","SingleItemList","MultiItemList","MultiItemColumns"];export{a as Default,r as MultiItemColumns,s as MultiItemList,n as SingleItemList,O as __namedExportsOrder,H as default};
//# sourceMappingURL=EventItem.stories-a15f4ca9.js.map
