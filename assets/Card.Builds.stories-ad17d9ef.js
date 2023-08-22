import{j as e}from"./jsx-runtime-7ce7b810.js";import{C as t}from"./Card-93bcf12b.js";import{N as n}from"./NewsData-8fa2e9af.js";import{E as r}from"./EventData-b03b4866.js";import{P as a}from"./PeopleData-bf986c6a.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./index-aec1b651.js";import"./index-9d475cdf.js";import"./index-1f616cc0.js";import"./isNativeReflectConstruct-0525dbfe.js";import"./index-c052a674.js";import"./Badge-e7299724.js";const s={id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},Pe={title:"Components/Card/Examples",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var p,g,u,C,h;const i={args:{children:e.jsxs("a",{href:(p=n)==null?void 0:p.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(g=n)==null?void 0:g.image,alt:(u=n)==null?void 0:u.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(C=n)==null?void 0:C.date}),e.jsx(t.Header,{text:(h=n)==null?void 0:h.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]})]})}};var x,j,v,P,b,E,N,f,w,D,_,T;const o={args:{children:e.jsxs("a",{href:(x=r)==null?void 0:x.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(j=r)==null?void 0:j.image,alt:(v=r)==null?void 0:v.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:(P=r)==null?void 0:P.startDate,endDate:(b=r)==null?void 0:b.endDate}),e.jsx(t.Header,{text:(E=r)==null?void 0:E.title}),e.jsx(t.EventMeta,{startDateTime:(N=r)==null?void 0:N.startDate,endDateTime:(f=r)==null?void 0:f.endDate,onCampus:(w=r)==null?void 0:w.on_campus,onCampusBuilding:(D=r)==null?void 0:D.on_campus_building,onCampusRoomNumber:(_=r)==null?void 0:_.on_campus_room_number,eventAddress:(T=r)==null?void 0:T.event_address})]})]})}};var k,F,H,M,S,y,$,B;const l={args:{isCenter:!0,children:e.jsxs("a",{href:(k=a)==null?void 0:k.link,children:[e.jsx(t.Figure,{isRound:!0,children:e.jsx("img",{src:(F=a)==null?void 0:F.image,alt:(H=a)==null?void 0:H.alt,width:280,height:280})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(M=a)==null?void 0:M.firstName} ${(S=a)==null?void 0:S.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(y=a)==null?void 0:y.jobTitle,email:($=a)==null?void 0:$.email,phone:(B=a)==null?void 0:B.phone})]})]})}};var I,R,L,U,q,V;const d={args:{isCenter:!0,children:e.jsxs("a",{href:(I=a)==null?void 0:I.link,children:[e.jsx(t.Initials,{initials:"CU"}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(R=a)==null?void 0:R.firstName} ${(L=a)==null?void 0:L.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(U=a)==null?void 0:U.jobTitle,email:(q=a)==null?void 0:q.email,phone:(V=a)==null?void 0:V.phone})]})]})}},m={args:{children:e.jsxs("div",{children:[e.jsx(t.Video,{source:s==null?void 0:s.source}),e.jsx(t.Content,{children:e.jsx(t.Header,{text:s==null?void 0:s.title})})]})}},c={args:{hasBorder:!0,noLink:!0,children:e.jsx(t.Content,{children:e.jsx(t.Stats,{stat:"3,000+",desc:"Number of Employees"})})}};var A,O,G;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <a href={singleNews?.link}>
        <Card.Figure>
          <img src={singleNews?.image} alt={singleNews?.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={singleNews?.date} />
          <Card.Header text={singleNews?.title} />
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Content>
      </a>
  }
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var z,J,K;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <a href={singleEvent?.link}>
        <Card.Figure>
          <img src={singleEvent?.image} alt={singleEvent?.alt} width={400} height={175} />
        </Card.Figure>
        <Card.Content>
          <Card.DateBox startDate={singleEvent?.startDate} endDate={singleEvent?.endDate} />
          <Card.Header text={singleEvent?.title} />
          <Card.EventMeta startDateTime={singleEvent?.startDate} endDateTime={singleEvent?.endDate} onCampus={singleEvent?.on_campus} onCampusBuilding={singleEvent?.on_campus_building} onCampusRoomNumber={singleEvent?.on_campus_room_number} eventAddress={singleEvent?.event_address} />
        </Card.Content>
      </a>
  }
}`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isCenter: true,
    children: <a href={singlePeople?.link}>
        <Card.Figure isRound>
          <img src={singlePeople?.image} alt={singlePeople?.alt} width={280} height={280} />
        </Card.Figure>
        <Card.Content>
          <Card.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Card.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Card.Content>
      </a>
  }
}`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isCenter: true,
    children: <a href={singlePeople?.link}>
        <Card.Initials initials="CU" />
        <Card.Content>
          <Card.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Card.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Card.Content>
      </a>
  }
}`,...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
      </div>
  }
}`,...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,ie;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    noLink: true,
    children: <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
  }
}`,...(ie=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const be=["NewsCard","EventCard","PeopleCard","PeopleCardInitials","VideoCard","StatCard"];export{o as EventCard,i as NewsCard,l as PeopleCard,d as PeopleCardInitials,c as StatCard,m as VideoCard,be as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Card.Builds.stories-ad17d9ef.js.map
