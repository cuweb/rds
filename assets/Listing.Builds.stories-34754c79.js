import{j as e}from"./jsx-runtime-daf202a7.js";import{L as t}from"./Listing-81189b80.js";import{N as n}from"./NewsData-8fa2e9af.js";import{E as i}from"./EventData-d8bdaec8.js";import{P as s}from"./PeopleData-bf986c6a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-37505e40.js";import"./index-dfffa903.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";const Pe={title:"Components/Listing/Examples",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var m,p,d,c,x,u,h;const a={args:{children:e.jsxs("a",{href:(m=n)==null?void 0:m.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(p=n)==null?void 0:p.image,alt:(d=n)==null?void 0:d.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(c=n)==null?void 0:c.date}),e.jsx(t.Header,{text:(x=n)==null?void 0:x.title}),e.jsx(t.Excerpt,{text:(u=n)==null?void 0:u.excerpt}),e.jsx(t.Badges,{tags:(h=n)==null?void 0:h.tags})]})]})}};var L,j,P,N,C,E,v,f,w,D;const r={args:{children:e.jsxs("a",{href:(L=i)==null?void 0:L.link,children:[e.jsx(t.DateBox,{startDate:(j=i)==null?void 0:j.startDate}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:(P=i)==null?void 0:P.title}),e.jsx(t.EventMeta,{startDateTime:(N=i)==null?void 0:N.startDate,endDateTime:(C=i)==null?void 0:C.endDate,onCampus:(E=i)==null?void 0:E.on_campus,onCampusBuilding:(v=i)==null?void 0:v.on_campus_building,onCampusRoomNumber:(f=i)==null?void 0:f.on_campus_room_number,eventAddress:(w=i)==null?void 0:w.event_address}),e.jsx(t.Badges,{tags:(D=i)==null?void 0:D.tags})]})]})}};var b,B,_,T,k,H,M,S,I;const l={args:{children:e.jsxs("a",{href:(b=s)==null?void 0:b.link,children:[e.jsx(t.Figure,{size:"small",children:e.jsx("img",{src:(B=s)==null?void 0:B.image,alt:(_=s)==null?void 0:_.alt,width:"200",height:"200"})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(T=s)==null?void 0:T.firstName} ${(k=s)==null?void 0:k.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(H=s)==null?void 0:H.jobTitle,email:(M=s)==null?void 0:M.email,phone:(S=s)==null?void 0:S.phone}),e.jsx(t.Badges,{tags:(I=s)==null?void 0:I.tags})]})]})}};var $,F,R,z,A,U,q;const o={args:{children:e.jsxs("a",{href:($=s)==null?void 0:$.link,children:[e.jsx(t.Initials,{initials:"CU"}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(F=s)==null?void 0:F.firstName} ${(R=s)==null?void 0:R.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(z=s)==null?void 0:z.jobTitle,email:(A=s)==null?void 0:A.email,phone:(U=s)==null?void 0:U.phone}),e.jsx(t.Badges,{tags:(q=s)==null?void 0:q.tags})]})]})}};var y,O,G,J;const g={args:{noLink:!0,children:e.jsxs(t.Content,{isSmall:!0,children:[e.jsx(t.PostMeta,{date:(y=n)==null?void 0:y.date}),e.jsx(t.Header,{text:(O=n)==null?void 0:O.title}),e.jsx(t.Excerpt,{text:(G=n)==null?void 0:G.excerpt}),e.jsx(t.Badges,{tags:(J=n)==null?void 0:J.tags})]})}};var K,Q,V;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Y;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=r.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,ie;o.parameters={...o.parameters,docs:{...(se=o.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=o.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,re,le;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content isSmall>
        <Listing.PostMeta date={singleNews?.date} />
        <Listing.Header text={singleNews?.title} />
        <Listing.Excerpt text={singleNews?.excerpt} />
        <Listing.Badges tags={singleNews?.tags} />
      </Listing.Content>
  }
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Ne=["NewsItem","EventListing","PeopleListing","PeopleListingInitials","BulletinItem"];export{g as BulletinItem,r as EventListing,a as NewsItem,l as PeopleListing,o as PeopleListingInitials,Ne as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Listing.Builds.stories-34754c79.js.map
