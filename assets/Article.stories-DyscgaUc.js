import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{M as h}from"./Main-CJV9MMXx.js";import{S as q}from"./Section-BA8VpE3g.js";import{A as x}from"./ArticleData-8weIOt6R.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const a=({children:t,content:n})=>e.jsxs(e.Fragment,{children:[n&&e.jsx("article",{className:"cu-article",dangerouslySetInnerHTML:{__html:n}}),!n&&e.jsx("article",{className:"cu-article",children:t})]});a.__docgenInfo={description:"",methods:[],displayName:"Article",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Layouts/Article",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={};s.args={children:"Article HTML5 tag as component",content:""};const i={args:{},render:t=>e.jsx(h,{children:e.jsx(q,{children:e.jsxs(a,{...t,children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."}),e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})]})})})},r={name:"Content as a Prop",args:{content:x},render:t=>e.jsx(h,{children:e.jsx(q,{children:e.jsx(a,{...t})})})};var o,u,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,m,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {} as ArticleProps,
  render: args => <Main>
      <Section>
        <Article {...args}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
            sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
        </Article>
      </Section>
    </Main>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Content as a Prop',
  args: {
    content: data
  },
  render: args => <Main>
      <Section>
        <Article {...args} />
      </Section>
    </Main>
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const N=["Primary","WithMainAndSection","ContentProp"];export{r as ContentProp,s as Primary,i as WithMainAndSection,N as __namedExportsOrder,y as default};
