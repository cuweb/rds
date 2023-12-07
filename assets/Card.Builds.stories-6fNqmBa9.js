import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{C as t}from"./Card-j95xA1bM.js";import{N as s}from"./NewsData-IVt9b4UK.js";import{E as r}from"./EventData-sFsgDJMI.js";import{P as a}from"./PeopleData-c2Gem1PR.js";import{V as c}from"./VideoData-ZDqbeZG0.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-hXDENwr6.js";import"./index-VFMbf6KQ.js";import"./index-bkt57PaO.js";import"./isNativeReflectConstruct-3LOYyi5T.js";import"./index-9aHumogv.js";import"./Badge-Zsxsg5ql.js";const Ne={title:"Components/Card/Examples",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}};var p,g,u,C,h;const n={args:{children:e.jsxs("a",{href:(p=s)==null?void 0:p.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(g=s)==null?void 0:g.image,alt:(u=s)==null?void 0:u.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:(C=s)==null?void 0:C.date}),e.jsx(t.Header,{text:(h=s)==null?void 0:h.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]})]})}};var x,j,v,P,E,b,N,D,f,_,w,S;const i={args:{children:e.jsxs("a",{href:(x=r)==null?void 0:x.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:(j=r)==null?void 0:j.image,alt:(v=r)==null?void 0:v.alt,width:400,height:175})}),e.jsxs(t.Content,{children:[e.jsx(t.DateBox,{startDate:(P=r)==null?void 0:P.startDate,endDate:(E=r)==null?void 0:E.endDate}),e.jsx(t.Header,{text:(b=r)==null?void 0:b.title}),e.jsx(t.EventMeta,{startDateTime:(N=r)==null?void 0:N.startDate,endDateTime:(D=r)==null?void 0:D.endDate,onCampus:(f=r)==null?void 0:f.on_campus,onCampusBuilding:(_=r)==null?void 0:_.on_campus_building,onCampusRoomNumber:(w=r)==null?void 0:w.on_campus_room_number,eventAddress:(S=r)==null?void 0:S.event_address})]})]})}};var T,k,F,H,M,V,$,B;const o={args:{isCenter:!0,children:e.jsxs("a",{href:(T=a)==null?void 0:T.link,children:[e.jsx(t.Figure,{isRound:!0,children:e.jsx("img",{src:(k=a)==null?void 0:k.image,alt:(F=a)==null?void 0:F.alt,width:280,height:280})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(H=a)==null?void 0:H.firstName} ${(M=a)==null?void 0:M.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(V=a)==null?void 0:V.jobTitle,email:($=a)==null?void 0:$.email,phone:(B=a)==null?void 0:B.phone})]})]})}};var I,R,L,U,q,y;const l={args:{isCenter:!0,children:e.jsxs("a",{href:(I=a)==null?void 0:I.link,children:[e.jsx(t.Initials,{initials:"CU"}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{text:`${(R=a)==null?void 0:R.firstName} ${(L=a)==null?void 0:L.lastName}`}),e.jsx(t.PeopleMeta,{jobTitle:(U=a)==null?void 0:U.jobTitle,email:(q=a)==null?void 0:q.email,phone:(y=a)==null?void 0:y.phone})]})]})}};var A,O;const d={args:{children:e.jsxs("div",{children:[e.jsx(t.Video,{source:(A=c)==null?void 0:A.source}),e.jsx(t.Content,{children:e.jsx(t.Header,{text:(O=c)==null?void 0:O.title})})]})}},m={args:{hasBorder:!0,noLink:!0,children:e.jsx(t.Content,{children:e.jsx(t.Stats,{stat:"3,000+",desc:"Number of Employees"})})}};var z,G,J;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(G=n.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,W;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,ne;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
      </div>
  }
}`,...(ne=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,oe,le;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    noLink: true,
    children: <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
  }
}`,...(le=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const De=["NewsCard","EventCard","PeopleCard","PeopleCardInitials","VideoCard","StatCard"];export{i as EventCard,n as NewsCard,o as PeopleCard,l as PeopleCardInitials,m as StatCard,d as VideoCard,De as __namedExportsOrder,Ne as default};
