import{a as i,j as r}from"./jsx-runtime-9d2cd5de.js";import{C as t}from"./Card-0c8a9437.js";import{E as s}from"./EventData-ee39504d.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-a2f60250.js";import"./index-9180d5e9.js";import"./index-25f79a82.js";import"./Badge-30ab9511.js";import"./index-03b14371.js";const a={id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"#",image:"https://source.unsplash.com/random/400x266",alt:"Image alt text",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam nulla eget est viverra, et tristique velit elementum. Aliquam ultrices vitae felis sit amet pharetra. Vivamus vitae dui mi. Quisque vitae nibh at orci lobortis rhoncus eu at mi. Nulla facilisi. In hac habitasse platea dictumst. Curabitur sed lectus risus.",date:"2022-12-23 10:27:31",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},e={id:1,firstName:"Carlton",lastName:"Banks",link:"#",image:"https://source.unsplash.com/random/400x400",alt:"Image needs alt text",jobTitle:"Manager, Peacock Stop",email:"carlton.banks@freshprince.tv",phone:"613-520-2600",phoneExt:"3825",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},n={id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},J={title:"Cards & Lists/Card/Card Templates",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{controls:{sort:"requiredFirst"}}},o={args:{children:i("a",{href:a==null?void 0:a.link,children:[r(t.Figure,{children:r("img",{src:a==null?void 0:a.image,alt:a==null?void 0:a.alt,width:"400",height:"266"})}),i(t.Content,{children:[r(t.PostMeta,{date:a==null?void 0:a.date}),r(t.Header,{text:a==null?void 0:a.title}),r(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),r(t.Badges,{tags:a==null?void 0:a.tags})]})}};var c,u,g,p,C,h,v,b,x,E,f,y;const d={args:{children:i("a",{href:(c=s)==null?void 0:c.link,children:[r(t.Figure,{children:r("img",{src:(u=s)==null?void 0:u.image,alt:(g=s)==null?void 0:g.alt,width:400,height:175})}),i(t.Content,{children:[r(t.DateBox,{startDate:(p=s)==null?void 0:p.startDate}),r(t.Header,{text:(C=s)==null?void 0:C.title}),r(t.EventMeta,{startDateTime:(h=s)==null?void 0:h.startDate,endDateTime:(v=s)==null?void 0:v.endDate,onCampus:(b=s)==null?void 0:b.on_campus,onCampusBuilding:(x=s)==null?void 0:x.on_campus_building,onCampusRoomNumber:(E=s)==null?void 0:E.on_campus_room_number,eventAddress:(f=s)==null?void 0:f.event_address})]}),r(t.Badges,{tags:(y=s)==null?void 0:y.tags})]})}},m={args:{isCenter:!0,children:i("a",{href:e==null?void 0:e.link,children:[r(t.Figure,{isRound:!0,children:r("img",{src:e==null?void 0:e.image,alt:e==null?void 0:e.alt,width:280,height:280})}),i(t.Content,{children:[r(t.Header,{text:`${e==null?void 0:e.firstName} ${e==null?void 0:e.lastName}`}),r(t.PeopleMeta,{jobTitle:e==null?void 0:e.jobTitle,email:e==null?void 0:e.email,phone:e==null?void 0:e.phone})]}),r(t.Badges,{tags:e==null?void 0:e.tags})]})}},l={args:{children:i("div",{children:[r(t.Video,{source:n==null?void 0:n.source}),r(t.Content,{children:r(t.Header,{text:n==null?void 0:n.title})}),r(t.Badges,{tags:n==null?void 0:n.tags})]})}};var _,T,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,k,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var M,j,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,N,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <div>
        <Card.Video source={singleVideo?.source} />
        <Card.Content>
          <Card.Header text={singleVideo?.title} />
        </Card.Content>
        <Card.Badges tags={singleVideo?.tags} />
      </div>
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const K=["NewsCard","EventCard","PeopleCard","VideoCard"];export{d as EventCard,o as NewsCard,m as PeopleCard,l as VideoCard,K as __namedExportsOrder,J as default};
//# sourceMappingURL=CardTemplates.stories-c52380ca.js.map
