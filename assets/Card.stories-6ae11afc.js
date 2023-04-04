import{j as t,a}from"./jsx-runtime-9d2cd5de.js";import{C as e}from"./Card-740a33ba.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-a2f60250.js";import"./index-9180d5e9.js";import"./index-25f79a82.js";import"./Badge-30ab9511.js";import"./index-03b14371.js";const G={title:"Cards & Lists/Card",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"https://source.unsplash.com/random/400x266",alt:"Required alt text",date:"2022-12-16",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},n={render:()=>t(e,{children:t(e.Content,{children:t(e.Header,{text:r.title})})})};n.args={};const o={render:()=>t(e,{children:t("a",{href:r.link,children:a(e.Content,{children:[t(e.PostMeta,{date:r.date}),t(e.Header,{text:r.title})]})})})},s={render:()=>t(e,{children:a(e.Content,{children:[t(e.PostMeta,{date:r.date}),t(e.Header,{text:r.title}),t(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]})})},d={render:()=>a(e,{children:[a(e.Content,{children:[t(e.PostMeta,{date:r.date}),t(e.Header,{text:r.title})]}),t(e.Badges,{tags:r.tags})]})},i={render:()=>a(e,{children:[t(e.Figure,{children:t("img",{src:r.image,alt:r.alt,width:"400",height:"266"})}),a(e.Content,{children:[t(e.PostMeta,{date:r.date}),t(e.Header,{text:r.title}),t(e.Excerpt,{text:r.excerpt})]})]})},c={render:()=>a(e,{isCenter:!0,children:[t(e.Figure,{isRound:!0,children:t("img",{src:r.image,alt:r.alt,width:"400",height:"266"})}),a(e.Content,{children:[t(e.PostMeta,{date:r.date}),t(e.Header,{text:r.title}),t(e.Excerpt,{text:r.excerpt})]})]})},l={render:()=>a(e,{children:[t(e.Video,{source:r.video}),t(e.Content,{children:t(e.Header,{text:r.title})})]})};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Content>
        <Card.Header text={content.title} />
      </Card.Content>
    </Card>
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,g,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card>
      <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
    </Card>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,H,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Content>
    </Card>
}`,...(b=(H=s.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var v,E,W;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
      </Card.Content>
      <Card.Badges tags={content.tags} />
    </Card>
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var f,w,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Figure>
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text={content.excerpt} />
      </Card.Content>
    </Card>
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,S,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Card isCenter>
      <Card.Figure isRound>
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text={content.excerpt} />
      </Card.Content>
    </Card>
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var q,F,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Video source={content.video} />
      <Card.Content>
        <Card.Header text={content.title} />
      </Card.Content>
    </Card>
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const J=["Primary","WithLink","WithExcerpt","WithBadges","WithImage","WithRoundImage","WithVideo"];export{n as Primary,d as WithBadges,s as WithExcerpt,i as WithImage,o as WithLink,c as WithRoundImage,l as WithVideo,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Card.stories-6ae11afc.js.map
