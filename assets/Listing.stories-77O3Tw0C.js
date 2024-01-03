import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as t}from"./Listing-r5Cjsr2I.js";import{E as a}from"./EventData-sFsgDJMI.js";import{N as s}from"./NewsData-coxflhgV.js";import{P as i}from"./PeopleData-c2Gem1PR.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-bkt57PaO.js";import"./isNativeReflectConstruct-3LOYyi5T.js";import"./index-J1scOhqY.js";import"./ChevronRightIcon-SDCOpH6f.js";const M={title:"Components/Listing",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{children:e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:"How to Write for the Web"}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:"https://carleton.ca/webservices",children:"More info"})})]})}},n={render:()=>e.jsxs(t,{children:[e.jsx(t.DateThumb,{startDate:a.startDate,endDate:a.endDate}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:a.title}),e.jsx(t.EventMeta,{startDateTime:a.startDate,endDateTime:a.endDate,onCampus:a.on_campus,onCampusBuilding:a.on_campus_building,onCampusRoomNumber:a.on_campus_room_number,eventAddress:a.event_address}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:a.link,children:"Event details"})})]})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s.image,alt:s.alt,width:"400",height:"266"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{date:s.date,children:s.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:s.link,children:"Read more"})})]})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:i.image,alt:i.alt,width:"280",height:"280"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{children:`${i.firstName} ${i.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:i.jobTitle,phone:i.phone,children:e.jsx("a",{href:`mailto:${i.email}`,children:i.email})}),e.jsx(t.Footer,{isType:"button",children:e.jsx("a",{href:i.link,children:"View profile"})})]})]})};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Listing.Body>
        <Listing.Header>How to Write for the Web</Listing.Header>
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer isType="button">
          <a href="https://carleton.ca/webservices">More info</a>
        </Listing.Footer>
      </Listing.Body>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,L,D;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var x,b,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const C=["Default","EventListItem","NewsListing","PeopleListing"];export{r as Default,n as EventListItem,o as NewsListing,l as PeopleListing,C as __namedExportsOrder,M as default};
