import{j as t}from"./jsx-runtime-daf202a7.js";import{L as e}from"./Listing-84adc86e.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-37505e40.js";import"./index-77a8d5d4.js";import"./Badge-fe05d228.js";import"./MapPinIcon-9333a58a.js";import"./ChevronRightIcon-f8484a56.js";const K={title:"Components/Listing",component:e,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={title:"End-of-Year Reflections and Resolutions for Our Web Services Team",link:"https://carleton.ca/webservices",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU",image:"./sample-imgs/news-img.jpg",alt:"Required alt text",date:"2022-12-16",startDate:"2023-03-31 20:00:00",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}},s={};s.args={children:t.jsx("a",{href:n.link,children:t.jsx(e.Content,{children:t.jsx(e.Header,{text:n.title})})})};const a={args:{children:t.jsx("a",{href:n.link,children:t.jsx(e.Content,{isSmall:!0,children:t.jsx(e.Header,{text:n.title})})})}},i={args:{noLink:!0,children:t.jsx(e.Content,{children:t.jsx(e.Header,{text:n.title})})}},r={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})})}},o={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})})}},c={args:{children:t.jsx("a",{href:n.link,children:t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."}),t.jsx(e.Badges,{tags:n.tags})]})})}},l={args:{children:t.jsxs("a",{href:n.link,children:[t.jsx(e.Figure,{children:t.jsx("img",{src:n.image,alt:n.alt,width:"400",height:"266"})}),t.jsxs(e.Content,{children:[t.jsx(e.PostMeta,{date:n.date}),t.jsx(e.Header,{text:n.title}),t.jsx(e.Excerpt,{text:n.excerpt}),t.jsx(e.Badges,{tags:n.tags})]})]})}},d={args:{children:t.jsxs("a",{href:n.link,children:[t.jsx(e.DateBox,{startDate:n.startDate}),t.jsxs(e.Content,{children:[t.jsx(e.Header,{text:n.title}),t.jsx(e.Badges,{tags:n.tags})]})]})}};var g,m,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,x,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(H=(k=r.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var b,B,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var W,v,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var E,w,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,q,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
  }
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const T=["Primary","SmallHeader","WithoutLink","WithDate","WithBadges","WithExcerpt","WithImage","WithDatebox"];export{s as Primary,a as SmallHeader,o as WithBadges,r as WithDate,d as WithDatebox,c as WithExcerpt,l as WithImage,i as WithoutLink,T as __namedExportsOrder,K as default};
//# sourceMappingURL=Listing.stories-33f06a23.js.map
