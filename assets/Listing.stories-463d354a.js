import{j as t,a}from"./jsx-runtime-9d2cd5de.js";import{L as e}from"./Listing-bacf84e5.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./index-f3821225.js";import"./index-9180d5e9.js";import"./index-ea76b77d.js";import"./index-3d4b39e4.js";import"./Badge-b3d0e778.js";import"./index-ac9ed659.js";const z={title:"Cards & Lists/Listing",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"./sample-imgs/news-img.jpg",alt:"Required alt text",date:"2022-12-16",startDate:"2023-03-31 20:00:00",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},i={};i.args={children:t("a",{href:n.link,children:t(e.Content,{children:t(e.Header,{text:n.title})})})};const r={args:{children:t("a",{href:n.link,children:t(e.Content,{isSmall:!0,children:t(e.Header,{text:n.title})})})}},s={args:{noLink:!0,children:t(e.Content,{children:t(e.Header,{text:n.title})})}},o={args:{children:t("a",{href:n.link,children:a(e.Content,{children:[t(e.PostMeta,{date:n.date}),t(e.Header,{text:n.title}),t(e.Badges,{tags:n.tags})]})})}},c={args:{children:t("a",{href:n.link,children:a(e.Content,{children:[t(e.PostMeta,{date:n.date}),t(e.Header,{text:n.title}),t(e.Badges,{tags:n.tags})]})})}},d={args:{children:t("a",{href:n.link,children:a(e.Content,{children:[t(e.PostMeta,{date:n.date}),t(e.Header,{text:n.title}),t(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),t(e.Badges,{tags:n.tags})]})})}},l={args:{children:a("a",{href:n.link,children:[t(e.Figure,{children:t("img",{src:n.image,alt:n.alt,width:"400",height:"266"})}),a(e.Content,{children:[t(e.PostMeta,{date:n.date}),t(e.Header,{text:n.title}),t(e.Excerpt,{text:n.excerpt}),t(e.Badges,{tags:n.tags})]})]})}},g={args:{children:a("a",{href:n.link,children:[t(e.DateBox,{startDate:n.startDate}),a(e.Content,{children:[t(e.Header,{text:n.title}),t(e.Badges,{tags:n.tags})]})]})}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,L,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content isSmall>
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
  }
}`,...(x=(L=r.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var C,f,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var H,b,B;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var S,W,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(v=(W=c.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,w,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,P,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var j,N,y;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(y=(N=g.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const A=["Primary","SmallHeader","WithoutLink","WithDate","WithBadges","WithExcerpt","WithImage","WithDatebox"];export{i as Primary,r as SmallHeader,c as WithBadges,o as WithDate,g as WithDatebox,d as WithExcerpt,l as WithImage,s as WithoutLink,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Listing.stories-463d354a.js.map
