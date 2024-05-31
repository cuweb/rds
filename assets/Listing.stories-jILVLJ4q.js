import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{L as t}from"./Listing-CbKebI-L.js";import{I as d}from"./IconData-CmGgWEcq.js";import{E as s}from"./EventData-BT2hBXGJ.js";import{N as r}from"./NewsData-DZeLrR9d.js";import{P as i}from"./PeopleData-CBSert5W.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./parse-BFmE_n72.js";import"./format-DUBvZ7C8.js";import"./getDate-BfMQ2h7Y.js";import"./MapPinIcon-CRQ4FDTI.js";const q={title:"Components/Listing",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={render:a=>e.jsx(t,{...a,children:e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:"How to Write for the Web"}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red cu-button--small",children:"More info"})})]})})},o={render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:r.image,alt:r.alt,width:"400",height:"300"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:r.title,date:r.date}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]})]})},c={render:a=>e.jsxs(t,{...a,children:[e.jsx(t.DateThumb,{startDate:s.startDate,endDate:s.endDate}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:s.title}),e.jsx(t.EventMeta,{startDateTime:s.startDate,endDateTime:s.endDate,onCampus:s.on_campus,onCampusBuilding:s.on_campus_building,onCampusRoomNumber:s.on_campus_room_number,eventAddress:s.event_address}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red cu-button--small",children:"Event details"})})]})]})},l={render:a=>e.jsxs(t,{...a,children:[e.jsx(t.IconThumb,{icon:d.icon}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:d.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red cu-button--small",children:"Get informed"})})]})]})},m={render:a=>e.jsxs(t,{...a,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:i.image,alt:i.alt,width:"280",height:"280"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:`${i.firstName} ${i.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:i.jobTitle,phone:i.phone,children:e.jsx("a",{href:`mailto:${i.email}`,children:i.email})}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red cu-button--small",children:"View profile"})})]})]})};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Listing {...args}>
      <Listing.Body>
        <Listing.Header title="How to Write for the Web" />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
            More info
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,L;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Listing {...args}>
      <Listing.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="300" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={newsData.title} date={newsData.date} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
            Read more
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var x,D,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Listing {...args}>
      <Listing.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Listing.Body>
        <Listing.Header title={eventData.title} />
        <Listing.EventMeta startDateTime={eventData.startDate} endDateTime={eventData.endDate} onCampus={eventData.on_campus} onCampusBuilding={eventData.on_campus_building} onCampusRoomNumber={eventData.on_campus_room_number} eventAddress={eventData.event_address} />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
            Event details
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var v,f,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Listing {...args}>
      <Listing.IconThumb icon={iconData.icon} />
      <Listing.Body>
        <Listing.Header title={iconData.title} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
            Get informed
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,F,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Listing {...args}>
      <Listing.Figure>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={\`\${peopleData.firstName} \${peopleData.lastName}\`} />
        <Listing.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={\`mailto:\${peopleData.email}\`}>{peopleData.email}</a>
        </Listing.PeopleMeta>
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red cu-button--small">
            View profile
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(B=(F=m.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const R=["Default","NewsListing","EventListItem","IconListing","PeopleListing"];export{n as Default,c as EventListItem,l as IconListing,o as NewsListing,m as PeopleListing,R as __namedExportsOrder,q as default};
