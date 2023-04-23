import{a,j as t}from"./jsx-runtime-9d2cd5de.js";import{L as e}from"./Listing-53abf324.js";import{N as n,P as i}from"./PeopleData-116cc4f1.js";import{E as s}from"./EventData-b52e2b87.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-b3d0e778.js";import"./index-ac9ed659.js";const de={title:"Cards & Lists/Listing Builds",component:e,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var m,d,p,c,u,h,L;const r={args:{children:a("a",{href:(m=n)==null?void 0:m.link,children:[t(e.Figure,{children:t("img",{src:(d=n)==null?void 0:d.image,alt:(p=n)==null?void 0:p.alt,width:"400",height:"266"})}),a(e.Content,{children:[t(e.PostMeta,{date:(c=n)==null?void 0:c.date}),t(e.Header,{text:(u=n)==null?void 0:u.title}),t(e.Excerpt,{text:(h=n)==null?void 0:h.excerpt}),t(e.Badges,{tags:(L=n)==null?void 0:L.tags})]})]})}};var x,E,N,v,C,P,w,D,_,B;const g={args:{children:a("a",{href:(x=s)==null?void 0:x.link,children:[t(e.DateBox,{startDate:(E=s)==null?void 0:E.startDate}),a(e.Content,{children:[t(e.Header,{text:(N=s)==null?void 0:N.title}),t(e.EventMeta,{startDateTime:(v=s)==null?void 0:v.startDate,endDateTime:(C=s)==null?void 0:C.endDate,onCampus:(P=s)==null?void 0:P.on_campus,onCampusBuilding:(w=s)==null?void 0:w.on_campus_building,onCampusRoomNumber:(D=s)==null?void 0:D.on_campus_room_number,eventAddress:(_=s)==null?void 0:_.event_address}),t(e.Badges,{tags:(B=s)==null?void 0:B.tags})]})]})}};var f,b,S,T,k,H,M,j,F;const o={args:{children:a("a",{href:(f=i)==null?void 0:f.link,children:[t(e.Figure,{size:"small",children:t("img",{src:(b=i)==null?void 0:b.image,alt:(S=i)==null?void 0:S.alt,width:"200",height:"200"})}),a(e.Content,{children:[t(e.Header,{text:`${(T=i)==null?void 0:T.firstName} ${(k=i)==null?void 0:k.lastName}`}),t(e.PeopleMeta,{jobTitle:(H=i)==null?void 0:H.jobTitle,email:(M=i)==null?void 0:M.email,phone:(j=i)==null?void 0:j.phone}),t(e.Badges,{tags:(F=i)==null?void 0:F.tags})]})]})}};var I,$,z,A;const l={args:{noLink:!0,children:a(e.Content,{isSmall:!0,children:[t(e.PostMeta,{date:(I=n)==null?void 0:I.date}),t(e.Header,{text:($=n)==null?void 0:$.title}),t(e.Excerpt,{text:(z=n)==null?void 0:z.excerpt}),t(e.Badges,{tags:(A=n)==null?void 0:A.tags})]})}};var R,q,y;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <a href={singleNews?.link}>
        <Listing.Figure>
          <img src={singleNews?.image} alt={singleNews?.alt} width="400" height="266" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={singleNews?.date} />
          <Listing.Header text={singleNews?.title} />
          <Listing.Excerpt text={singleNews?.excerpt} />
          <Listing.Badges tags={singleNews?.tags} />
        </Listing.Content>
      </a>
  }
}`,...(y=(q=r.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var O,G,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <a href={singleEvent?.link}>
        <Listing.DateBox startDate={singleEvent?.startDate} />
        <Listing.Content>
          <Listing.Header text={singleEvent?.title} />
          <Listing.EventMeta startDateTime={singleEvent?.startDate} endDateTime={singleEvent?.endDate} onCampus={singleEvent?.on_campus} onCampusBuilding={singleEvent?.on_campus_building} onCampusRoomNumber={singleEvent?.on_campus_room_number} eventAddress={singleEvent?.event_address} />
          <Listing.Badges tags={singleEvent?.tags} />
        </Listing.Content>
      </a>
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: <a href={singlePeople?.link}>
        <Listing.Figure size="small">
          <img src={singlePeople?.image} alt={singlePeople?.alt} width="200" height="200" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Listing.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
          <Listing.Badges tags={singlePeople?.tags} />
        </Listing.Content>
      </a>
  }
}`,...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content isSmall>
        <Listing.PostMeta date={singleNews?.date} />
        <Listing.Header text={singleNews?.title} />
        <Listing.Excerpt text={singleNews?.excerpt} />
        <Listing.Badges tags={singleNews?.tags} />
      </Listing.Content>
  }
}`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const pe=["NewsItem","EventListing","PeopleListing","BulletinItem"];export{l as BulletinItem,g as EventListing,r as NewsItem,o as PeopleListing,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=Listing.Builds.stories-3f88c93b.js.map
