import{j as e}from"./jsx-runtime-daf202a7.js";import{L as t}from"./Listing-04d16e61.js";import{N as i}from"./NewsData-8fa2e9af.js";import{E as n}from"./EventData-52b40cb0.js";import{P as s}from"./PeopleData-bf986c6a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-65142971.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";const Ce={title:"Components/Listing/Examples",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var m,d,p,c,x,u,h;const a={args:{children:e.jsxs("a",{href:(m=i)==null?void 0:m.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(d=i)==null?void 0:d.image,alt:(p=i)==null?void 0:p.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(c=i)==null?void 0:c.date}),e.jsx(t.Header,{text:(x=i)==null?void 0:x.title}),e.jsx(t.Excerpt,{text:(u=i)==null?void 0:u.excerpt}),e.jsx(t.Badges,{tags:(h=i)==null?void 0:h.tags})]})]})}};var L,j,P,N,C,E,D,v,f,w,b;const r={args:{children:e.jsxs("a",{href:(L=n)==null?void 0:L.link,children:[e.jsx(t.DateBox,{startDate:(j=n)==null?void 0:j.startDate,endDate:(P=n)==null?void 0:P.endDate}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:(N=n)==null?void 0:N.title}),e.jsx(t.EventMeta,{startDateTime:(C=n)==null?void 0:C.startDate,endDateTime:(E=n)==null?void 0:E.endDate,onCampus:(D=n)==null?void 0:D.on_campus,onCampusBuilding:(v=n)==null?void 0:v.on_campus_building,onCampusRoomNumber:(f=n)==null?void 0:f.on_campus_room_number,eventAddress:(w=n)==null?void 0:w.event_address}),e.jsx(t.Badges,{tags:(b=n)==null?void 0:b.tags})]})]})}};var B,_,T,k,H,M,S,I,$;const l={args:{children:e.jsxs("a",{href:(B=s)==null?void 0:B.link,children:[e.jsx(t.Figure,{size:"small",children:e.jsx("img",{src:(_=s)==null?void 0:_.image,alt:(T=s)==null?void 0:T.alt,width:"200",height:"200"})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(k=s)==null?void 0:k.firstName} ${(H=s)==null?void 0:H.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(M=s)==null?void 0:M.jobTitle,email:(S=s)==null?void 0:S.email,phone:(I=s)==null?void 0:I.phone}),e.jsx(t.Badges,{tags:($=s)==null?void 0:$.tags})]})]})}};var F,R,z,A,U,q,y;const o={args:{children:e.jsxs("a",{href:(F=s)==null?void 0:F.link,children:[e.jsx(t.Initials,{initials:"CU"}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(R=s)==null?void 0:R.firstName} ${(z=s)==null?void 0:z.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(A=s)==null?void 0:A.jobTitle,email:(U=s)==null?void 0:U.email,phone:(q=s)==null?void 0:q.phone}),e.jsx(t.Badges,{tags:(y=s)==null?void 0:y.tags})]})]})}};var O,G,J,K;const g={args:{noLink:!0,children:e.jsxs(t.Content,{isSmall:!0,children:[e.jsx(t.PostMeta,{date:(O=i)==null?void 0:O.date}),e.jsx(t.Header,{text:(G=i)==null?void 0:G.title}),e.jsx(t.Excerpt,{text:(J=i)==null?void 0:J.excerpt}),e.jsx(t.Badges,{tags:(K=i)==null?void 0:K.tags})]})}};var Q,V,W;a.parameters={...a.parameters,docs:{...(Q=a.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(V=a.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: <a href={singleEvent?.link}>
        <Listing.DateBox startDate={singleEvent?.startDate} endDate={singleEvent?.endDate} />
        <Listing.Content>
          <Listing.Header text={singleEvent?.title} />
          <Listing.EventMeta startDateTime={singleEvent?.startDate} endDateTime={singleEvent?.endDate} onCampus={singleEvent?.on_campus} onCampusBuilding={singleEvent?.on_campus_building} onCampusRoomNumber={singleEvent?.on_campus_room_number} eventAddress={singleEvent?.event_address} />
          <Listing.Badges tags={singleEvent?.tags} />
        </Listing.Content>
      </a>
  }
}`,...(Z=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=l.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,ie,ae;o.parameters={...o.parameters,docs:{...(ne=o.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: <a href={singlePeople?.link}>
        <Listing.Initials initials="CU" />
        <Listing.Content>
          <Listing.Header text={\`\${singlePeople?.firstName} \${singlePeople?.lastName}\`} />
          <Listing.PeopleMeta jobTitle={singlePeople?.jobTitle} email={singlePeople?.email} phone={singlePeople?.phone} />
          <Listing.Badges tags={singlePeople?.tags} />
        </Listing.Content>
      </a>
  }
}`,...(ae=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,le,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content isSmall>
        <Listing.PostMeta date={singleNews?.date} />
        <Listing.Header text={singleNews?.title} />
        <Listing.Excerpt text={singleNews?.excerpt} />
        <Listing.Badges tags={singleNews?.tags} />
      </Listing.Content>
  }
}`,...(oe=(le=g.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const Ee=["NewsItem","EventListing","PeopleListing","PeopleListingInitials","BulletinItem"];export{g as BulletinItem,r as EventListing,a as NewsItem,l as PeopleListing,o as PeopleListingInitials,Ee as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Listing.Builds.stories-748e43c7.js.map
