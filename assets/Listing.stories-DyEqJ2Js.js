import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as t}from"./Listing-DATyQjq4.js";import{I as m}from"./IconData-CM3vwWZs.js";import{E as i}from"./EventData-Suzp3opJ.js";import{N as s}from"./NewsData-DZeLrR9d.js";import{P as a}from"./PeopleData-CBSert5W.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./parse-BfiLtjV-.js";import"./getDate-BAl1yPiw.js";import"./ChevronRightIcon-CNwURrwD.js";const P={title:"Components/Listing",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{children:e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:"How to Write for the Web"}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:"https://carleton.ca/webservices",children:"More info"})})]})}},n={render:()=>e.jsxs(t,{children:[e.jsx(t.DateThumb,{startDate:i.startDate,endDate:i.endDate}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:i.title}),e.jsx(t.EventMeta,{startDateTime:i.startDate,endDateTime:i.endDate,onCampus:i.on_campus,onCampusBuilding:i.on_campus_building,onCampusRoomNumber:i.on_campus_room_number,eventAddress:i.event_address}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:i.link,children:"Event details"})})]})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s.image,alt:s.alt,width:"400",height:"266"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{date:s.date,children:s.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:s.link,children:"Read more"})})]})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(t.IconThumb,{icon:m.icon}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:m.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."}),e.jsx(t.Footer,{isType:"button",buttonStyle:"grey",children:e.jsx("a",{href:m.link,children:"Get informed"})})]})]})},d={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:a.image,alt:a.alt,width:"280",height:"280"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:`${a.firstName} ${a.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:a.jobTitle,phone:a.phone,children:e.jsx("a",{href:`mailto:${a.email}`,children:a.email})}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:a.link,children:"View profile"})})]})]})};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Listing.Body>
        <Listing.Header>How to Write for the Web</Listing.Header>
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer isType="button">
          <a href="https://carleton.ca/webservices">More info</a>
        </Listing.Footer>
      </Listing.Body>
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,L;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Listing.Body>
        <Listing.Header>{eventData.title}</Listing.Header>
        <Listing.EventMeta startDateTime={eventData.startDate} endDateTime={eventData.endDate} onCampus={eventData.on_campus} onCampusBuilding={eventData.on_campus_building} onCampusRoomNumber={eventData.on_campus_room_number} eventAddress={eventData.event_address} />
        <Listing.Footer isType="button">
          <a href={eventData.link}>Event details</a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var x,D,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="266" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header date={newsData.date}>{newsData.title}</Listing.Header>
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer isType="button">
          <a href={newsData.link}>Read more</a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var j,f,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.IconThumb icon={iconData.icon} />
      <Listing.Body>
        <Listing.Header>{iconData.title}</Listing.Header>
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
        <Listing.Footer isType="button" buttonStyle="grey">
          <a href={iconData.link}>Get informed</a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,F,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.Figure>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header>{\`\${peopleData.firstName} \${peopleData.lastName}\`}</Listing.Header>
        <Listing.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={\`mailto:\${peopleData.email}\`}>{peopleData.email}</a>
        </Listing.PeopleMeta>
        <Listing.Footer isType="button">
          <a href={peopleData.link}>View profile</a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const U=["Default","EventListItem","NewsListing","IconListing","PeopleListing"];export{r as Default,n as EventListItem,l as IconListing,o as NewsListing,d as PeopleListing,U as __namedExportsOrder,P as default};
