import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{C as a}from"./Card-CfFQGJTW.js";import{E as r}from"./EventData-sFsgDJMI.js";import{I as h}from"./IconData-uRKBBYhx.js";import{N as o}from"./NewsData-coxflhgV.js";import{P as t}from"./PeopleData-c2Gem1PR.js";import{S as u}from"./StatData-L3sWsfTb.js";import{V as C}from"./VideoData-ZDqbeZG0.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-bkt57PaO.js";import"./isNativeReflectConstruct-3LOYyi5T.js";import"./index-J1scOhqY.js";import"./index-V4ZghitJ.js";import"./iframe-gLcvdBak.js";import"../sb-preview/runtime.js";import"./index-VFMbf6KQ.js";const te={title:"Components/Card",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:"How to Write for the Web"}),e.jsx(a.Body,{children:e.jsx(a.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})}),e.jsx(a.Footer,{isType:"button",children:e.jsx("a",{href:"https://carleton.ca/webservices",children:"More info"})})]})}},d={render:()=>e.jsxs(a,{hasShadow:"onCard",children:[e.jsx(a.Figure,{children:e.jsx("img",{src:r.image,alt:r.alt,width:"400",height:"175"})}),e.jsx(a.DateThumb,{startDate:r.startDate,endDate:r.endDate}),e.jsx(a.Header,{children:r.title}),e.jsx(a.Body,{children:e.jsx(a.EventMeta,{startDateTime:r.startDate,endDateTime:r.endDate,onCampus:r.on_campus,onCampusBuilding:r.on_campus_building,onCampusRoomNumber:r.on_campus_room_number,eventAddress:r.event_address})}),e.jsx(a.Footer,{isType:"button",children:e.jsx("a",{href:r.link,children:"Event details"})})]})},n={render:()=>e.jsxs(a,{hasShadow:"onCard",children:[e.jsx(a.Figure,{children:e.jsx("img",{src:o.image,alt:o.alt,width:"400",height:"266"})}),e.jsx(a.Header,{date:o.date,children:o.title}),e.jsx(a.Body,{children:e.jsx(a.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})}),e.jsx(a.Footer,{isType:"button",children:e.jsx("a",{href:o.link,children:"Read more"})})]})},i={render:()=>e.jsxs(a,{hasShadow:"onCard",noHover:!0,children:[e.jsx(a.IconThumb,{icon:h.icon}),e.jsx(a.Header,{children:h.title}),e.jsx(a.Body,{children:e.jsx(a.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(a.Footer,{isType:"button",buttonStyle:"grey",children:e.jsx("a",{href:h.link,children:"Get informed"})})]})},l={render:()=>e.jsxs(a,{hasShadow:"onCard",isCenter:!0,children:[e.jsx(a.Figure,{isRound:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"280",height:"280"})}),e.jsx(a.Header,{children:`${t.firstName} ${t.lastName}`}),e.jsx(a.Body,{children:e.jsx(a.PeopleMeta,{jobTitle:t.jobTitle,phone:t.phone,children:e.jsx("a",{href:`mailto:${t.email}`,children:t.email})})}),e.jsx(a.Footer,{isType:"button",children:e.jsx("a",{href:t.link,children:"View profile"})})]})},c={render:()=>e.jsxs(a,{hasShadow:"onCard",noHover:!0,children:[e.jsx(a.ImageThumb,{children:e.jsx("img",{src:o.image,alt:o.alt,width:"200",height:"133"})}),e.jsx(a.Header,{children:o.title}),e.jsx(a.Body,{children:e.jsx(a.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(a.Footer,{isType:"button",buttonStyle:"grey",children:e.jsx("a",{href:o.link,children:"Get informed"})})]})},m={render:()=>e.jsx(a,{hasShadow:"onCard",hasRedBorder:!0,noHover:!0,children:e.jsx(a.Stats,{stat:u.stat,desc:u.desc})})},p={render:()=>e.jsxs(a,{hasShadow:"onCard",children:[e.jsx(a.Video,{source:C.source}),e.jsx(a.Header,{children:C.title})]})};var g,x,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <Card.Header>How to Write for the Web</Card.Header>
        <Card.Body>
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Body>
        <Card.Footer isType="button">
          <a href="https://carleton.ca/webservices">More info</a>
        </Card.Footer>
      </>
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var j,b,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard">
      <Card.Figure>
        <img src={eventData.image} alt={eventData.alt} width="400" height="175" />
      </Card.Figure>
      <Card.DateThumb startDate={eventData.startDate} endDate={eventData.endDate} />
      <Card.Header>{eventData.title}</Card.Header>
      <Card.Body>
        <Card.EventMeta startDateTime={eventData.startDate} endDateTime={eventData.endDate} onCampus={eventData.on_campus} onCampusBuilding={eventData.on_campus_building} onCampusRoomNumber={eventData.on_campus_room_number} eventAddress={eventData.event_address} />
      </Card.Body>
      <Card.Footer isType="button">
        <a href={eventData.link}>Event details</a>
      </Card.Footer>
    </Card>
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,S,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard">
      <Card.Figure>
        <img src={newsData.image} alt={newsData.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Header date={newsData.date}>{newsData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Body>
      <Card.Footer isType="button">
        <a href={newsData.link}>Read more</a>
      </Card.Footer>
    </Card>
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,F,H;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard" noHover>
      <Card.IconThumb icon={iconData.icon} />
      <Card.Header>{iconData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
      </Card.Body>
      <Card.Footer isType="button" buttonStyle="grey">
        <a href={iconData.link}>Get informed</a>
      </Card.Footer>
    </Card>
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var T,B,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard" isCenter>
      <Card.Figure isRound>
        <img src={peopleData.image} alt={peopleData.alt} width="280" height="280" />
      </Card.Figure>
      <Card.Header>{\`\${peopleData.firstName} \${peopleData.lastName}\`}</Card.Header>
      <Card.Body>
        <Card.PeopleMeta jobTitle={peopleData.jobTitle} phone={peopleData.phone}>
          <a href={\`mailto:\${peopleData.email}\`}>{peopleData.email}</a>
        </Card.PeopleMeta>
      </Card.Body>
      <Card.Footer isType="button">
        <a href={peopleData.link}>View profile</a>
      </Card.Footer>
    </Card>
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,_,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard" noHover>
      <Card.ImageThumb>
        <img src={newsData.image} alt={newsData.alt} width="200" height="133" />
      </Card.ImageThumb>
      <Card.Header>{newsData.title}</Card.Header>
      <Card.Body>
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
      </Card.Body>
      <Card.Footer isType="button" buttonStyle="grey">
        <a href={newsData.link}>Get informed</a>
      </Card.Footer>
    </Card>
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,k,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard" hasRedBorder noHover>
      <Card.Stats stat={statData.stat} desc={statData.desc} />
    </Card>
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,U,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Card hasShadow="onCard">
      <Card.Video source={videoData.source} />
      <Card.Header>{videoData.title}</Card.Header>
    </Card>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const oe=["Default","EventCard","NewsCard","IconCard","PeopleCard","SpotlightCard","StatCard","VideoCard"];export{s as Default,d as EventCard,i as IconCard,n as NewsCard,l as PeopleCard,c as SpotlightCard,m as StatCard,p as VideoCard,oe as __namedExportsOrder,te as default};
