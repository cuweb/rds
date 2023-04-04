import{j as o,a as d}from"./jsx-runtime-9d2cd5de.js";import{C as c}from"./Column-16e6c206.js";import{C as e}from"./Card-740a33ba.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-c5aec0a8.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-a2f60250.js";import"./index-9180d5e9.js";import"./index-25f79a82.js";import"./Badge-30ab9511.js";import"./index-03b14371.js";const l=[{id:1,title:"5 Great Reasons to Choose Carleton",source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:2,title:"Return to Campus",source:"https://www.youtube.com/watch?v=V2vTFG0zfL8",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:3,title:"Carleton University - A Place Like No Other",source:"https://www.youtube.com/watch?v=3PUK_wRVzHI",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:4,title:"Carleton University campus",source:"https://vimeo.com/106595658",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:5,title:"Stories from Carleton Students Abroad: Olivia",source:"https://www.youtube.com/watch?v=bh2x91LLcEY",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:6,title:"New Carleton University home page overview",source:"https://vimeo.com/108970526",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}}],R={title:"Cards & Lists/Card/Videos",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:()=>o(c,{cols:"2",children:l.slice(0,1).map(r=>d(e,{children:[o(e.Video,{source:r==null?void 0:r.source}),o(e.Content,{children:o(e.Header,{text:r==null?void 0:r.title})}),o(e.Badges,{tags:r==null?void 0:r.tags})]},r==null?void 0:r.id))})},t={render:()=>o(c,{cols:"2",children:l.slice(0,2).map(r=>d(e,{children:[o(e.Video,{source:r==null?void 0:r.source}),o(e.Content,{children:o(e.Header,{text:r==null?void 0:r.title})}),o(e.Badges,{tags:r==null?void 0:r.tags})]},r==null?void 0:r.id))})},s={render:()=>o(c,{cols:"3",children:l.slice(0,3).map(r=>d(e,{children:[o(e.Video,{source:r==null?void 0:r.source}),o(e.Content,{children:o(e.Header,{text:r==null?void 0:r.title})}),o(e.Badges,{tags:r==null?void 0:r.tags})]},r==null?void 0:r.id))})},n={render:()=>o(c,{cols:"3",children:l.slice(0,6).map(r=>d(e,{children:[o(e.Video,{source:r==null?void 0:r.source}),o(e.Content,{children:o(e.Header,{text:r==null?void 0:r.title})}),o(e.Badges,{tags:r==null?void 0:r.tags})]},r==null?void 0:r.id))})};var C,g,u;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Column cols="2">
      {data.slice(0, 1).map(item => <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>)}
    </Column>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var i,p,y;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Column cols="2">
      {data.slice(0, 2).map(item => <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>)}
    </Column>
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var w,h,m;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Column cols="3">
      {data.slice(0, 3).map(item => <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>)}
    </Column>
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,v,V;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Column cols="3">
      {data.slice(0, 6).map(item => <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>)}
    </Column>
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const _=["Primary","TwoColumn","ThreeColumn","SixCardGrid"];export{a as Primary,n as SixCardGrid,s as ThreeColumn,t as TwoColumn,_ as __namedExportsOrder,R as default};
//# sourceMappingURL=CardVideos.stories-2e1909b0.js.map
