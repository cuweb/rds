import{a as n,j as t}from"./jsx-runtime-9d2cd5de.js";import{C as e}from"./Card-973f9bf1.js";import{N as i,P as r}from"./PeopleData-116cc4f1.js";import{E as a}from"./EventData-cb779fb8.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-b3d0e778.js";import"./index-d638a58e.js";import"./index-ac9ed659.js";const s={id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},ge={title:"Cards & Lists/Card Builds",component:e,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var g,c,p,u,C,h;const o={args:{children:n("a",{href:(g=i)==null?void 0:g.link,children:[t(e.Figure,{children:t("img",{src:(c=i)==null?void 0:c.image,alt:(p=i)==null?void 0:p.alt,width:"400",height:"266"})}),n(e.Content,{children:[t(e.PostMeta,{date:(u=i)==null?void 0:u.date}),t(e.Header,{text:(C=i)==null?void 0:C.title}),t(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),t(e.Badges,{tags:(h=i)==null?void 0:h.tags})]})}};var v,w,E,x,b,N,P,_,f,B,D,F;const d={args:{children:n("a",{href:(v=a)==null?void 0:v.link,children:[t(e.Figure,{children:t("img",{src:(w=a)==null?void 0:w.image,alt:(E=a)==null?void 0:E.alt,width:400,height:175})}),n(e.Content,{children:[t(e.DateBox,{startDate:(x=a)==null?void 0:x.startDate}),t(e.Header,{text:(b=a)==null?void 0:b.title}),t(e.EventMeta,{startDateTime:(N=a)==null?void 0:N.startDate,endDateTime:(P=a)==null?void 0:P.endDate,onCampus:(_=a)==null?void 0:_.on_campus,onCampusBuilding:(f=a)==null?void 0:f.on_campus_building,onCampusRoomNumber:(B=a)==null?void 0:B.on_campus_room_number,eventAddress:(D=a)==null?void 0:D.event_address})]}),t(e.Badges,{tags:(F=a)==null?void 0:F.tags})]})}};var T,H,M,j,y,k,R,$,q;const l={args:{isCenter:!0,children:n("a",{href:(T=r)==null?void 0:T.link,children:[t(e.Figure,{isRound:!0,children:t("img",{src:(H=r)==null?void 0:H.image,alt:(M=r)==null?void 0:M.alt,width:280,height:280})}),n(e.Content,{children:[t(e.Header,{text:`${(j=r)==null?void 0:j.firstName} ${(y=r)==null?void 0:y.lastName}`}),t(e.PeopleMeta,{jobTitle:(k=r)==null?void 0:k.jobTitle,email:(R=r)==null?void 0:R.email,phone:($=r)==null?void 0:$.phone})]}),t(e.Badges,{tags:(q=r)==null?void 0:q.tags})]})}},m={args:{children:n("div",{children:[t(e.Video,{source:s==null?void 0:s.source}),t(e.Content,{children:t(e.Header,{text:s==null?void 0:s.title})}),t(e.Badges,{tags:s==null?void 0:s.tags})]})}};var L,A,I;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,S,U;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(S=d.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var V,G,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(G=l.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
        <Card.Badges tags={singleVideo?.tags} />
      </div>
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ce=["NewsCard","EventCard","PeopleCard","VideoCard"];export{d as EventCard,o as NewsCard,l as PeopleCard,m as VideoCard,ce as __namedExportsOrder,ge as default};
//# sourceMappingURL=Card.Builds.stories-a50e48ed.js.map
