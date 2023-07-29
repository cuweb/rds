import{j as e}from"./jsx-runtime-daf202a7.js";import{C as t,a as y}from"./Card-c8b09d83.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ac609b0f.js";import"./index-58d3fd43.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-65142971.js";import"./Badge-fe05d228.js";const r={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"./sample-imgs/news-img.jpg",alt:"Required alt text",date:"2022-12-16",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},T={title:"Components/Card",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={};a.args={children:e.jsx(y,{children:e.jsx(t.Header,{text:r.title})})};const n={args:{children:e.jsx("a",{href:r.link,children:e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:r.date}),e.jsx(t.Header,{text:r.title})]})})}},s={args:{children:e.jsx("a",{href:r.link,children:e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:r.date}),e.jsx(t.Header,{text:r.title})]})})}},i={args:{children:e.jsx("a",{href:r.link,children:e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:r.date}),e.jsx(t.Header,{text:r.title}),e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})]})})}},o={args:{children:e.jsxs("a",{href:r.link,children:[e.jsx(t.Figure,{children:e.jsx("img",{src:r.image,alt:r.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:r.date}),e.jsx(t.Header,{text:r.title}),e.jsx(t.Excerpt,{text:r.excerpt})]})]})}},d={args:{isCenter:!0,children:e.jsxs("a",{href:r.link,children:[e.jsx(t.Figure,{isRound:!0,children:e.jsx("img",{src:r.image,alt:r.alt,width:"400",height:"266"})}),e.jsxs(t.Content,{children:[e.jsx(t.PostMeta,{date:r.date}),e.jsx(t.Header,{text:r.title}),e.jsx(t.Excerpt,{text:r.excerpt})]})]})}},c={args:{children:e.jsxs("a",{href:r.link,children:[e.jsx(t.Video,{source:r.video}),e.jsx(t.Content,{children:e.jsx(t.Header,{text:r.title})})]})}},l={args:{hasBorder:!0,children:e.jsx(t.Content,{children:e.jsx(t.Stats,{stat:"3,000+",desc:"Number of Employees"})})}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,x,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,j,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var k,b,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Content>
      </a>
  }
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var W,v,H;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      </a>
  }
}`,...(H=(v=o.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var w,M,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      </a>
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var S,R,q;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Card.Video source={content.video} />
        <Card.Content>
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var B,F,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    hasBorder: true,
    children: <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
  }
}`,...(N=(F=l.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const Y=["Primary","WithLink","WithBadges","WithExcerpt","WithImage","WithRoundImage","WithVideo","WithBorder"];export{a as Primary,s as WithBadges,l as WithBorder,i as WithExcerpt,o as WithImage,n as WithLink,d as WithRoundImage,c as WithVideo,Y as __namedExportsOrder,T as default};
//# sourceMappingURL=Card.stories-6136cd64.js.map
