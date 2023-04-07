import{j as a,a as n}from"./jsx-runtime-9d2cd5de.js";import{L as t}from"./Listing-46f972c1.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-30ab9511.js";import"./index-ac9ed659.js";const R={title:"Cards & Lists/Listing",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"./sample-imgs/news-img.jpg",alt:"Required alt text",date:"2022-12-16",startDate:"2023-03-31 20:00:00",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},i={};i.args={children:a("a",{href:e.link,children:n(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title})]})})};const s={args:{noLink:!0,children:n(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title})]})}},r={args:{children:a("a",{href:e.link,children:n(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Badges,{tags:e.tags})]})})}},o={args:{children:a("a",{href:e.link,children:n(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),a(t.Badges,{tags:e.tags})]})})}},c={args:{children:n("a",{href:e.link,children:[a(t.Figure,{children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}),n(t.Content,{children:[a(t.PostMeta,{date:e.date}),a(t.Header,{text:e.title}),a(t.Excerpt,{text:e.excerpt}),a(t.Badges,{tags:e.tags})]})]})}},d={args:{children:n("a",{href:e.link,children:[a(t.DateBox,{startDate:e.startDate}),n(t.Content,{children:[a(t.Header,{text:e.title}),a(t.Badges,{tags:e.tags})]})]})}};var l,g,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content>
        <Listing.PostMeta date={content.date} />
        <Listing.Header text={content.title} />
      </Listing.Content>
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var L,x,f;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,b,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var B,v,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Figure>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text={content.excerpt} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(H=(v=c.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var w,E,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const O=["Primary","WithoutLink","WithBadges","WithExcerpt","WithImage","WithDatebox"];export{i as Primary,r as WithBadges,d as WithDatebox,o as WithExcerpt,c as WithImage,s as WithoutLink,O as __namedExportsOrder,R as default};
//# sourceMappingURL=Listing.stories-848431fd.js.map
