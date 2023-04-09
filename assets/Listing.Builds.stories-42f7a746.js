import{a,j as t}from"./jsx-runtime-9d2cd5de.js";import{L as e}from"./Listing-befebdd0.js";import{N as i,P as s}from"./PeopleData-116cc4f1.js";import{E as n}from"./EventData-cb779fb8.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-30ab9511.js";import"./index-ac9ed659.js";const se={title:"Cards & Lists/Listing Builds",component:e,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var l,m,d,p,c,u,h;const r={args:{children:a("a",{href:(l=i)==null?void 0:l.link,children:[t(e.Figure,{children:t("img",{src:(m=i)==null?void 0:m.image,alt:(d=i)==null?void 0:d.alt,width:"400",height:"266"})}),a(e.Content,{children:[t(e.PostMeta,{date:(p=i)==null?void 0:p.date}),t(e.Header,{text:(c=i)==null?void 0:c.title}),t(e.Excerpt,{text:(u=i)==null?void 0:u.excerpt}),t(e.Badges,{tags:(h=i)==null?void 0:h.tags})]})]})}};var L,v,E,x,D,N,P,C,_,w;const g={args:{children:a("a",{href:(L=n)==null?void 0:L.link,children:[t(e.DateBox,{startDate:(v=n)==null?void 0:v.startDate}),a(e.Content,{children:[t(e.Header,{text:(E=n)==null?void 0:E.title}),t(e.EventMeta,{startDateTime:(x=n)==null?void 0:x.startDate,endDateTime:(D=n)==null?void 0:D.endDate,onCampus:(N=n)==null?void 0:N.on_campus,onCampusBuilding:(P=n)==null?void 0:P.on_campus_building,onCampusRoomNumber:(C=n)==null?void 0:C.on_campus_room_number,eventAddress:(_=n)==null?void 0:_.event_address}),t(e.Badges,{tags:(w=n)==null?void 0:w.tags})]})]})}};var f,b,B,T,j,F,k,H,M;const o={args:{children:a("a",{href:(f=s)==null?void 0:f.link,children:[t(e.Figure,{size:"small",children:t("img",{src:(b=s)==null?void 0:b.image,alt:(B=s)==null?void 0:B.alt,width:"200",height:"200"})}),a(e.Content,{children:[t(e.Header,{text:`${(T=s)==null?void 0:T.firstName} ${(j=s)==null?void 0:j.lastName}`}),t(e.PeopleMeta,{jobTitle:(F=s)==null?void 0:F.jobTitle,email:(k=s)==null?void 0:k.email,phone:(H=s)==null?void 0:H.phone}),t(e.Badges,{tags:(M=s)==null?void 0:M.tags})]})]})}};var S,$,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=($=r.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var A,I,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,y,O;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(y=o.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const ie=["NewsItem","EventListing","PeopleListing"];export{g as EventListing,r as NewsItem,o as PeopleListing,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=Listing.Builds.stories-42f7a746.js.map
