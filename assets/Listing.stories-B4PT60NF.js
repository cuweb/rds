import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as t}from"./Listing-CVDzuYn2.js";import{I as d}from"./IconData-CmGgWEcq.js";import{E as a,P as s}from"./PeopleData-DAgl9gKI.js";import{N as i}from"./NewsData-DZeLrR9d.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./parse-BfiLtjV-.js";import"./getDate-BAl1yPiw.js";const C={title:"Components/Listing",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{children:e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:"How to Write for the Web"}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red",children:"More info"})})]})}},n={render:()=>e.jsxs(t,{children:[e.jsx(t.DateThumb,{startDate:a.startDate,endDate:a.endDate}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:a.title}),e.jsx(t.EventMeta,{startDateTime:a.startDate,endDateTime:a.endDate,onCampus:a.on_campus,onCampusBuilding:a.on_campus_building,onCampusRoomNumber:a.on_campus_room_number,eventAddress:a.event_address}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red",children:"Event details"})})]})]})},o={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:i.image,alt:i.alt,width:"400",height:"266"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:i.title,date:i.date}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red",children:"Read more"})})]})]})},c={render:()=>e.jsxs(t,{children:[e.jsx(t.IconThumb,{icon:d.icon}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:d.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red",children:"Get informed"})})]})]})},l={render:()=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:s.image,alt:s.alt,width:"280",height:"280"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:`${s.firstName} ${s.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:s.jobTitle,phone:s.phone,children:e.jsx("a",{href:`mailto:${s.email}`,children:s.email})}),e.jsx(t.Footer,{children:e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--red",children:"View profile"})})]})]})};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Listing.Body>
        <Listing.Header title="How to Write for the Web" />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            More info
          </a>
        </Listing.Footer>
      </Listing.Body>
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Listing.Body>
        <Listing.Header title={eventData.title} />
        <Listing.EventMeta startDateTime={eventData.startDate} endDateTime={eventData.endDate} onCampus={eventData.on_campus} onCampusBuilding={eventData.on_campus_building} onCampusRoomNumber={eventData.on_campus_room_number} eventAddress={eventData.event_address} />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Event details
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var L,x,D;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="266" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={newsData.title} date={newsData.date} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Read more
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var j,v,f;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.IconThumb icon={iconData.icon} />
      <Listing.Body>
        <Listing.Header title={iconData.title} />
        <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            Get informed
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var w,N,F;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Listing>
      <Listing.Figure>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Listing.Figure>
      <Listing.Body>
        <Listing.Header title={\`\${peopleData.firstName} \${peopleData.lastName}\`} />
        <Listing.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={\`mailto:\${peopleData.email}\`}>{peopleData.email}</a>
        </Listing.PeopleMeta>
        <Listing.Footer>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--red">
            View profile
          </a>
        </Listing.Footer>
      </Listing.Body>
    </Listing>
}`,...(F=(N=l.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const P=["Default","EventListItem","NewsListing","IconListing","PeopleListing"];export{r as Default,n as EventListItem,c as IconListing,o as NewsListing,l as PeopleListing,P as __namedExportsOrder,C as default};
