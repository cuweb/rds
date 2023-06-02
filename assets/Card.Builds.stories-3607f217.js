import{j as e}from"./jsx-runtime-daf202a7.js";import{C as t}from"./Card-f2f8b6b6.js";import{N as n}from"./NewsData-8fa2e9af.js";import{E as a}from"./EventData-b52e2b87.js";import{P as s}from"./PeopleData-bf986c6a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-767b8be6.js";import"./index-cd8fc8bc.js";import"./index-58d3fd43.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-e4228aaf.js";import"./Badge-4cc04c38.js";import"./index-ac9ed659.js";import"./MapPinIcon-9333a58a.js";const r={id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},he={title:"Cards & Lists/Card Builds",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var g,c,p,u,C,h;const i={args:{children:e.jsxs("a",{href:(g=n)==null?void 0:g.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(c=n)==null?void 0:c.image,alt:(p=n)==null?void 0:p.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(u=n)==null?void 0:u.date}),e.jsx(t.Header,{text:(C=n)==null?void 0:C.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),e.jsx(t.Badges,{tags:(h=n)==null?void 0:h.tags})]})}};var x,j,v,b,E,N,w,P,f,_,B,D;const o={args:{children:e.jsxs("a",{href:(x=a)==null?void 0:x.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(j=a)==null?void 0:j.image,alt:(v=a)==null?void 0:v.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:(b=a)==null?void 0:b.startDate}),e.jsx(t.Header,{text:(E=a)==null?void 0:E.title}),e.jsx(t.EventMeta,{startDateTime:(N=a)==null?void 0:N.startDate,endDateTime:(w=a)==null?void 0:w.endDate,onCampus:(P=a)==null?void 0:P.on_campus,onCampusBuilding:(f=a)==null?void 0:f.on_campus_building,onCampusRoomNumber:(_=a)==null?void 0:_.on_campus_room_number,eventAddress:(B=a)==null?void 0:B.event_address})]}),e.jsx(t.Badges,{tags:(D=a)==null?void 0:D.tags})]})}};var F,T,y,k,H,M,R,L,S;const d={args:{isCenter:!0,children:e.jsxs("a",{href:(F=s)==null?void 0:F.link,children:[e.jsx(t.Figure,{isRound:!0,children:e.jsx("img",{src:(T=s)==null?void 0:T.image,alt:(y=s)==null?void 0:y.alt,width:280,height:280})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(k=s)==null?void 0:k.firstName} ${(H=s)==null?void 0:H.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(M=s)==null?void 0:M.jobTitle,email:(R=s)==null?void 0:R.email,phone:(L=s)==null?void 0:L.phone})]}),e.jsx(t.Badges,{tags:(S=s)==null?void 0:S.tags})]})}},l={args:{children:e.jsxs("div",{children:[e.jsx(t.Video,{source:r==null?void 0:r.source}),e.jsx(t.Content,{children:e.jsx(t.Header,{text:r==null?void 0:r.title})}),e.jsx(t.Badges,{tags:r==null?void 0:r.tags})]})}},m={args:{border:"red",noLink:!0,children:e.jsx(t.Content,{children:e.jsx(t.Stats,{stat:"3,000+",desc:"Number of Employees"})})}};var $,q,A;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <Card.Badges tags={singleNews?.tags} />
      </a>
  }
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var I,O,U;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <a href={singleEvent?.link}>
        <Card.Figure>
          <img src={singleEvent?.image} alt={singleEvent?.alt} width={400} height={175} />
        </Card.Figure>
        <Card.Content>
          <Card.DateBox startDate={singleEvent?.startDate} />
          <Card.Header text={singleEvent?.title} />
          <Card.EventMeta startDateTime={singleEvent?.startDate} endDateTime={singleEvent?.endDate} onCampus={singleEvent?.on_campus} onCampusBuilding={singleEvent?.on_campus_building} onCampusRoomNumber={singleEvent?.on_campus_room_number} eventAddress={singleEvent?.event_address} />
        </Card.Content>
        <Card.Badges tags={singleEvent?.tags} />
      </a>
  }
}`,...(U=(O=o.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var V,G,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <Card.Badges tags={singlePeople?.tags} />
      </a>
  }
}`,...(z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
        <Card.Badges tags={singleVideo?.tags} />
      </div>
  }
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    border: 'red',
    noLink: true,
    children: <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const xe=["NewsCard","EventCard","PeopleCard","VideoCard","NumberCard"];export{o as EventCard,i as NewsCard,m as NumberCard,d as PeopleCard,l as VideoCard,xe as __namedExportsOrder,he as default};
//# sourceMappingURL=Card.Builds.stories-3607f217.js.map
