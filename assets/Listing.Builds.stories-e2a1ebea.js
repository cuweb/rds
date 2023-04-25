import{j as e}from"./jsx-runtime-3aeb2321.js";import{L as t}from"./Listing-0947242a.js";import{N as s,P as i}from"./PeopleData-116cc4f1.js";import{E as n}from"./EventData-b52e2b87.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-313e0162.js";import"./index-ac9ed659.js";const me={title:"Cards & Lists/Listing Builds",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var l,m,d,p,c,x,u;const a={args:{children:e.jsxs("a",{href:(l=s)==null?void 0:l.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(m=s)==null?void 0:m.image,alt:(d=s)==null?void 0:d.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(p=s)==null?void 0:p.date}),e.jsx(t.Header,{text:(c=s)==null?void 0:c.title}),e.jsx(t.Excerpt,{text:(x=s)==null?void 0:x.excerpt}),e.jsx(t.Badges,{tags:(u=s)==null?void 0:u.tags})]})]})}};var h,L,j,E,N,v,C,P,w,D;const r={args:{children:e.jsxs("a",{href:(h=n)==null?void 0:h.link,children:[e.jsx(t.DateBox,{startDate:(L=n)==null?void 0:L.startDate}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:(j=n)==null?void 0:j.title}),e.jsx(t.EventMeta,{startDateTime:(E=n)==null?void 0:E.startDate,endDateTime:(N=n)==null?void 0:N.endDate,onCampus:(v=n)==null?void 0:v.on_campus,onCampusBuilding:(C=n)==null?void 0:C.on_campus_building,onCampusRoomNumber:(P=n)==null?void 0:P.on_campus_room_number,eventAddress:(w=n)==null?void 0:w.event_address}),e.jsx(t.Badges,{tags:(D=n)==null?void 0:D.tags})]})]})}};var _,B,f,b,S,T,k,H,M;const g={args:{children:e.jsxs("a",{href:(_=i)==null?void 0:_.link,children:[e.jsx(t.Figure,{size:"small",children:e.jsx("img",{src:(B=i)==null?void 0:B.image,alt:(f=i)==null?void 0:f.alt,width:"200",height:"200"})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(b=i)==null?void 0:b.firstName} ${(S=i)==null?void 0:S.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(T=i)==null?void 0:T.jobTitle,email:(k=i)==null?void 0:k.email,phone:(H=i)==null?void 0:H.phone}),e.jsx(t.Badges,{tags:(M=i)==null?void 0:M.tags})]})]})}};var F,I,$,R;const o={args:{noLink:!0,children:e.jsxs(t.Content,{isSmall:!0,children:[e.jsx(t.PostMeta,{date:(F=s)==null?void 0:F.date}),e.jsx(t.Header,{text:(I=s)==null?void 0:I.title}),e.jsx(t.Excerpt,{text:($=s)==null?void 0:$.excerpt}),e.jsx(t.Badges,{tags:(R=s)==null?void 0:R.tags})]})}};var z,A,q;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(q=(A=a.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var y,O,G;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(G=(O=r.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,W;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content isSmall>
        <Listing.PostMeta date={singleNews?.date} />
        <Listing.Header text={singleNews?.title} />
        <Listing.Excerpt text={singleNews?.excerpt} />
        <Listing.Badges tags={singleNews?.tags} />
      </Listing.Content>
  }
}`,...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const de=["NewsItem","EventListing","PeopleListing","BulletinItem"];export{o as BulletinItem,r as EventListing,a as NewsItem,g as PeopleListing,de as __namedExportsOrder,me as default};
//# sourceMappingURL=Listing.Builds.stories-e2a1ebea.js.map
