import{j as t}from"./jsx-runtime-9d2cd5de.js";import{N as o,a as y}from"./NewsItemData-8daf922d.js";import{S as p}from"./StackedList-62c14f64.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d638a58e.js";import"./Badge-b3d0e778.js";import"./Link-f5eab90e.js";import"./iframe-c04524ad.js";import"../sb-preview/runtime.mjs";import"./Panel-84231987.js";import"./optionClasses-4f7b0afb.js";const J={title:"Cards & Lists/Lists (Deprecated)/NewsItem",component:o,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={};e.args={title:"News item title",link:"https://carleton.ca",date:"January 7, 2020",image:"https://source.unsplash.com/random/400x300",alt:"This is the alt tag for the card image",excerpt:"Tenetur libero voluptatem rerum occaecati qui est molestia exercitationem. Voluptate quisquam iure assumenda consequatur exet recusandae dignissim sodales feugiat. Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",tags:{category:[{id:1,name:"Breaking News",slug:"breaking-news"},{id:2,name:"Headline",slug:"headline"}]}};const r={render:a=>t(p,{hasBorder:!0,children:t(o,{as:"li",...a})})};r.args={...e.args};const s={render:()=>t(p,{header:"News listing",hasBorder:!0,hasShadow:!0,children:y.map(({id:a,title:n,link:m,image:d,alt:c,date:l,excerpt:u})=>t(o,{as:"li",image:d,alt:c,title:n,link:m,date:l,excerpt:u},a))})},i={render:()=>t(p,{cols:"2",header:"News listing",hasBorder:!0,hasShadow:!0,children:y.map(({id:a,title:n,link:m,image:d,alt:c,date:l,excerpt:u})=>t(o,{as:"li",image:d,alt:c,title:n,link:m,date:l,excerpt:u},a))})};var g,h,k;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(k=(h=e.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,S,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <NewsItem as="li" {...args} />
    </StackedList>
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var L,N,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <StackedList header="News listing" hasBorder hasShadow>
      {data.map(({
      id,
      title,
      link,
      image,
      alt,
      date,
      excerpt
    }) => <NewsItem as="li" key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />)}
    </StackedList>
}`,...(I=(N=s.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var q,f,B;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <StackedList cols="2" header="News listing" hasBorder hasShadow>
      {data.map(({
      id,
      title,
      link,
      image,
      alt,
      date,
      excerpt
    }) => <NewsItem as="li" key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />)}
    </StackedList>
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const O=["Default","SingleItemList","MultiItemList","ColumnedList"];export{i as ColumnedList,e as Default,s as MultiItemList,r as SingleItemList,O as __namedExportsOrder,J as default};
//# sourceMappingURL=NewsItem.stories-07939570.js.map
