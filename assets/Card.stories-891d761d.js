import{j as a,a as r}from"./jsx-runtime-9d2cd5de.js";import{C as t,a as R}from"./Card-a878dbc1.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-30ab9511.js";import"./index-03b14371.js";import"./index-ac9ed659.js";const T={title:"Cards & Lists/Card",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"https://source.unsplash.com/random/400x266",alt:"Required alt text",date:"2022-12-16",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},n={};n.args={children:a(R,{children:a(t.Header,{text:e.title})})};const s={args:{children:a("a",{href:e.link,children:r(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title})]})})}},i={args:{children:r("a",{href:e.link,children:[r(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title})]}),a(t.Badges,{tags:e.tags})]})}},o={args:{children:r("a",{href:e.link,children:[r(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),a(t.Badges,{tags:e.tags})]})}},d={args:{children:r("a",{href:e.link,children:[a(t.Figure,{children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}),r(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Excerpt,{text:e.excerpt})]}),a(t.Badges,{tags:e.tags})]})}},c={args:{isCenter:!0,children:r("a",{href:e.link,children:[a(t.Figure,{isRound:!0,children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}),r(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Excerpt,{text:e.excerpt})]}),a(t.Badges,{tags:e.tags})]})}},l={args:{children:r("a",{href:e.link,children:[a(t.Video,{source:e.video}),a(t.Content,{children:a(t.Header,{text:e.title})}),a(t.Badges,{tags:e.tags})]})}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,h,C;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var x,f,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,v,H;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(H=(v=o.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var B,E,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Figure>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text={content.excerpt} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var w,M,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isCenter: true,
    children: <a href={content.link}>
        <Card.Figure isRound>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text={content.excerpt} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var S,q,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Video source={content.video} />
        <Card.Content>
          <Card.Header text={content.title} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const Y=["Primary","WithLink","WithBadges","WithExcerpt","WithImage","WithRoundImage","WithVideo"];export{n as Primary,i as WithBadges,o as WithExcerpt,d as WithImage,s as WithLink,c as WithRoundImage,l as WithVideo,Y as __namedExportsOrder,T as default};
//# sourceMappingURL=Card.stories-891d761d.js.map
