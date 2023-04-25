import{j as e}from"./jsx-runtime-3aeb2321.js";import{C as a,a as S}from"./Card-5483ab2c.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a36e5b94.js";import"./index-4d501b15.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-313e0162.js";import"./index-d638a58e.js";import"./index-ac9ed659.js";const K={title:"Cards & Lists/Card",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"https://source.unsplash.com/random/400x266",alt:"Required alt text",date:"2022-12-16",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},r={};r.args={children:e.jsx(S,{children:e.jsx(a.Header,{text:t.title})})};const s={args:{children:e.jsx("a",{href:t.link,children:e.jsxs(a.Content,{children:[e.jsx(a.PostMeta,{date:t.date}),e.jsx(a.Header,{text:t.title})]})})}},n={args:{children:e.jsxs("a",{href:t.link,children:[e.jsxs(a.Content,{children:[e.jsx(a.PostMeta,{date:t.date}),e.jsx(a.Header,{text:t.title})]}),e.jsx(a.Badges,{tags:t.tags})]})}},i={args:{children:e.jsxs("a",{href:t.link,children:[e.jsxs(a.Content,{children:[e.jsx(a.PostMeta,{date:t.date}),e.jsx(a.Header,{text:t.title}),e.jsx(a.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]}),e.jsx(a.Badges,{tags:t.tags})]})}},o={args:{children:e.jsxs("a",{href:t.link,children:[e.jsx(a.Figure,{children:e.jsx("img",{src:t.image,alt:t.alt,width:"400",height:"266"})}),e.jsxs(a.Content,{children:[e.jsx(a.PostMeta,{date:t.date}),e.jsx(a.Header,{text:t.title}),e.jsx(a.Excerpt,{text:t.excerpt})]}),e.jsx(a.Badges,{tags:t.tags})]})}},d={args:{isCenter:!0,children:e.jsxs("a",{href:t.link,children:[e.jsx(a.Figure,{isRound:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"400",height:"266"})}),e.jsxs(a.Content,{children:[e.jsx(a.PostMeta,{date:t.date}),e.jsx(a.Header,{text:t.title}),e.jsx(a.Excerpt,{text:t.excerpt})]}),e.jsx(a.Badges,{tags:t.tags})]})}},c={args:{children:e.jsxs("a",{href:t.link,children:[e.jsx(a.Video,{source:t.video}),e.jsx(a.Content,{children:e.jsx(a.Header,{text:t.title})}),e.jsx(a.Badges,{tags:t.tags})]})}};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,C,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,k,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var v,E,H;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var B,W,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var M,P,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Video source={content.video} />
        <Card.Content>
          <Card.Header text={content.title} />
        </Card.Content>
        <Card.Badges tags={content.tags} />
      </a>
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const T=["Primary","WithLink","WithBadges","WithExcerpt","WithImage","WithRoundImage","WithVideo"];export{r as Primary,n as WithBadges,i as WithExcerpt,o as WithImage,s as WithLink,d as WithRoundImage,c as WithVideo,T as __namedExportsOrder,K as default};
//# sourceMappingURL=Card.stories-8a0accb6.js.map
