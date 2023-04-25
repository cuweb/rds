import{j as e}from"./jsx-runtime-3aeb2321.js";import{C as t}from"./Card-5483ab2c.js";import{N as n,P as s}from"./PeopleData-116cc4f1.js";import{E as a}from"./EventData-b52e2b87.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-313e0162.js";import"./index-d638a58e.js";import"./index-ac9ed659.js";const r={id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},me={title:"Cards & Lists/Card Builds",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var m,g,c,p,u,C;const i={args:{children:e.jsxs("a",{href:(m=n)==null?void 0:m.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(g=n)==null?void 0:g.image,alt:(c=n)==null?void 0:c.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(p=n)==null?void 0:p.date}),e.jsx(t.Header,{text:(u=n)==null?void 0:u.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),e.jsx(t.Badges,{tags:(C=n)==null?void 0:C.tags})]})}};var h,x,j,v,E,w,b,N,P,_,f,B;const o={args:{children:e.jsxs("a",{href:(h=a)==null?void 0:h.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(x=a)==null?void 0:x.image,alt:(j=a)==null?void 0:j.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:(v=a)==null?void 0:v.startDate}),e.jsx(t.Header,{text:(E=a)==null?void 0:E.title}),e.jsx(t.EventMeta,{startDateTime:(w=a)==null?void 0:w.startDate,endDateTime:(b=a)==null?void 0:b.endDate,onCampus:(N=a)==null?void 0:N.on_campus,onCampusBuilding:(P=a)==null?void 0:P.on_campus_building,onCampusRoomNumber:(_=a)==null?void 0:_.on_campus_room_number,eventAddress:(f=a)==null?void 0:f.event_address})]}),e.jsx(t.Badges,{tags:(B=a)==null?void 0:B.tags})]})}};var D,F,T,H,M,y,k,R,$;const d={args:{isCenter:!0,children:e.jsxs("a",{href:(D=s)==null?void 0:D.link,children:[e.jsx(t.Figure,{isRound:!0,children:e.jsx("img",{src:(F=s)==null?void 0:F.image,alt:(T=s)==null?void 0:T.alt,width:280,height:280})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(H=s)==null?void 0:H.firstName} ${(M=s)==null?void 0:M.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(y=s)==null?void 0:y.jobTitle,email:(k=s)==null?void 0:k.email,phone:(R=s)==null?void 0:R.phone})]}),e.jsx(t.Badges,{tags:($=s)==null?void 0:$.tags})]})}},l={args:{children:e.jsxs("div",{children:[e.jsx(t.Video,{source:r==null?void 0:r.source}),e.jsx(t.Content,{children:e.jsx(t.Header,{text:r==null?void 0:r.title})}),e.jsx(t.Badges,{tags:r==null?void 0:r.tags})]})}};var q,L,A;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(L=i.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,O,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(O=o.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var U,V,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var z,J,K;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
        <Card.Badges tags={singleVideo?.tags} />
      </div>
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["NewsCard","EventCard","PeopleCard","VideoCard"];export{o as EventCard,i as NewsCard,d as PeopleCard,l as VideoCard,ge as __namedExportsOrder,me as default};
//# sourceMappingURL=Card.Builds.stories-d83e7576.js.map
