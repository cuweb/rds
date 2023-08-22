import{j as e}from"./jsx-runtime-7ce7b810.js";import{L as t}from"./Listing-6140a3f9.js";import{N as i}from"./NewsData-8fa2e9af.js";import{E as s}from"./EventData-b03b4866.js";import{P as n}from"./PeopleData-bf986c6a.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./index-1f616cc0.js";import"./isNativeReflectConstruct-0525dbfe.js";import"./index-c052a674.js";import"./Badge-e7299724.js";import"./ChevronRightIcon-0ed75403.js";const he={title:"Components/Listing/Examples",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var m,p,d,c,x,u;const a={args:{children:e.jsxs("a",{href:(m=i)==null?void 0:m.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(p=i)==null?void 0:p.image,alt:(d=i)==null?void 0:d.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(c=i)==null?void 0:c.date}),e.jsx(t.Header,{text:(x=i)==null?void 0:x.title}),e.jsx(t.Excerpt,{text:(u=i)==null?void 0:u.excerpt})]})]})}};var h,L,j,P,C,E,N,D,v,f;const r={args:{children:e.jsxs("a",{href:(h=s)==null?void 0:h.link,children:[e.jsx(t.DateBox,{startDate:(L=s)==null?void 0:L.startDate,endDate:(j=s)==null?void 0:j.endDate}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:(P=s)==null?void 0:P.title}),e.jsx(t.EventMeta,{startDateTime:(C=s)==null?void 0:C.startDate,endDateTime:(E=s)==null?void 0:E.endDate,onCampus:(N=s)==null?void 0:N.on_campus,onCampusBuilding:(D=s)==null?void 0:D.on_campus_building,onCampusRoomNumber:(v=s)==null?void 0:v.on_campus_room_number,eventAddress:(f=s)==null?void 0:f.event_address})]})]})}};var b,w,_,T,k,H,M,S;const l={args:{children:e.jsxs("a",{href:(b=n)==null?void 0:b.link,children:[e.jsx(t.Figure,{size:"small",children:e.jsx("img",{src:(w=n)==null?void 0:w.image,alt:(_=n)==null?void 0:_.alt,width:"200",height:"200"})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(T=n)==null?void 0:T.firstName} ${(k=n)==null?void 0:k.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(H=n)==null?void 0:H.jobTitle,email:(M=n)==null?void 0:M.email,phone:(S=n)==null?void 0:S.phone})]})]})}};var I,$,F,B,R,z;const o={args:{children:e.jsxs("a",{href:(I=n)==null?void 0:I.link,children:[e.jsx(t.Initials,{initials:"CU"}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${($=n)==null?void 0:$.firstName} ${(F=n)==null?void 0:F.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(B=n)==null?void 0:B.jobTitle,email:(R=n)==null?void 0:R.email,phone:(z=n)==null?void 0:z.phone})]})]})}};var A,U,q;const g={args:{noLink:!0,children:e.jsxs(t.Content,{isSmall:!0,children:[e.jsx(t.PostMeta,{date:(A=i)==null?void 0:A.date}),e.jsx(t.Header,{text:(U=i)==null?void 0:U.title}),e.jsx(t.Excerpt,{text:(q=i)==null?void 0:q.excerpt})]})}};var y,O,G;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <a href={singleNews?.link}>
        <Listing.Figure>
          <img src={singleNews?.image} alt={singleNews?.alt} width="400" height="266" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={singleNews?.date} />
          <Listing.Header text={singleNews?.title} />
          <Listing.Excerpt text={singleNews?.excerpt} />
        </Listing.Content>
      </a>
  }
}`,...(G=(O=a.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;r.parameters={...r.parameters,docs:{...(J=r.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: <a href={singleEvent?.link}>
        <Listing.DateBox startDate={singleEvent?.startDate} endDate={singleEvent?.endDate} />
        <Listing.Content>
          <Listing.Header text={singleEvent?.title} />
          <Listing.EventMeta startDateTime={singleEvent?.startDate} endDateTime={singleEvent?.endDate} onCampus={singleEvent?.on_campus} onCampusBuilding={singleEvent?.on_campus_building} onCampusRoomNumber={singleEvent?.on_campus_room_number} eventAddress={singleEvent?.event_address} />
        </Listing.Content>
      </a>
  }
}`,...(Q=(K=r.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,W,X;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: <a href={singlePeople?.link}>
        <Listing.Figure size="small">
          <img src={singlePeople?.image} alt={singlePeople?.alt} width="200" height="200" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Listing.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Listing.Content>
      </a>
  }
}`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: <a href={singlePeople?.link}>
        <Listing.Initials initials="CU" />
        <Listing.Content>
          <Listing.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Listing.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
        </Listing.Content>
      </a>
  }
}`,...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,se;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content isSmall>
        <Listing.PostMeta date={singleNews?.date} />
        <Listing.Header text={singleNews?.title} />
        <Listing.Excerpt text={singleNews?.excerpt} />
      </Listing.Content>
  }
}`,...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Le=["NewsItem","EventListing","PeopleListing","PeopleListingInitials","BulletinItem"];export{g as BulletinItem,r as EventListing,a as NewsItem,l as PeopleListing,o as PeopleListingInitials,Le as __namedExportsOrder,he as default};
//# sourceMappingURL=Listing.Builds.stories-8c6c9902.js.map
