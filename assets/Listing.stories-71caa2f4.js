import{j as t}from"./jsx-runtime-daf202a7.js";import{L as e}from"./Listing-04d16e61.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ee226d2b.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-65142971.js";import"./Badge-fe05d228.js";import"./ChevronRightIcon-f8484a56.js";const n={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"./sample-imgs/news-img.jpg",alt:"Required alt text",date:"2022-12-16",startDate:"2023-03-31 20:00:00",endDate:"2023-03-31 21:00:00",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},K={title:"Components/Listing",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={};s.args={children:t.jsx("a",{href:n.link,children:t.jsx(e.Content,{children:t.jsx(e.Header,{text:n.title})})})};const a={args:{children:t.jsx("a",{href:n.link,children:t.jsx(e.Content,{isSmall:!0,children:t.jsx(e.Header,{text:n.title})})})}},i={args:{noLink:!0,children:t.jsx(e.Content,{children:t.jsx(e.Header,{text:n.title})})}},r={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})})}},o={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})})}},c={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),t.jsx(e.Badges,{tags:n.tags})]})})}},d={args:{children:t.jsxs("a",{href:n.link,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:n.image,alt:n.alt,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Excerpt,{text:n.excerpt}),t.jsx(e.Badges,{tags:n.tags})]})]})}},l={args:{children:t.jsxs("a",{href:n.link,children:[t.jsx(e.DateBox,{startDate:n.startDate,endDate:n.endDate}),t.jsxs(e.Content,{children:[t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})]})}};var g,m,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,x,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content isSmall>
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var L,j,C;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    noLink: true,
    children: <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var f,k,H;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(H=(k=r.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var D,b,B;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(v=(W=c.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var E,w,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,q,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} endDate={content.endDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const T=["Primary","SmallHeader","WithoutLink","WithDate","WithBadges","WithExcerpt","WithImage","WithDatebox"];export{s as Primary,a as SmallHeader,o as WithBadges,r as WithDate,l as WithDatebox,c as WithExcerpt,d as WithImage,i as WithoutLink,T as __namedExportsOrder,K as default};
//# sourceMappingURL=Listing.stories-71caa2f4.js.map
