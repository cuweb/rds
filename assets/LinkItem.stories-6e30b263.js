import{j as t}from"./jsx-runtime-daf202a7.js";import{r as o,R as j}from"./index-ec8b93d8.js";import{r as C}from"./optionClasses-62a5285f.js";import{L as y}from"./Link-d4bc1413.js";import{C as b}from"./ChevronRightIcon-f8484a56.js";import{S as g}from"./StackedList-248cc77c.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-c2d523f0.js";import"../sb-preview/runtime.js";import"./Panel-e4f49686.js";function w({title:e,titleId:i,...a},v){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:v,"aria-labelledby":i},a),e?o.createElement("title",{id:i},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"}))}const z=o.forwardRef(w),N=z,d=({as:e="div",children:i,link:a})=>t.jsx(e,{children:t.jsxs(y,{href:a,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("div",{className:"w-auto flex-none",children:t.jsx(N,{className:"mr-2 h-4 w-4 flex-none text-cu-red"})}),i]}),t.jsx(b,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),I=({children:e})=>t.jsx("div",{className:"flex flex-auto flex-col gap-2",children:e}),S=({as:e="h3",fontSize:i="base",title:a})=>j.createElement(e,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${C[i]}`},a);d.defaultProps={as:"li"};d.displayName="LinkItem";I.displayName="LinkItem.Content";S.displayName="LinkItem.Title";const n=Object.assign(d,{Content:I,Title:S});try{n.displayName="LinkItem",n.__docgenInfo={description:"",displayName:"LinkItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}const _=[{id:1,title:"Carleton 360",link:"#"},{id:2,title:"Carleton Central",link:"#"},{id:3,title:"Events Calendar and add stuff that makes it a long title",link:"#"},{id:4,title:"Travel & Expenses",link:"#"},{id:5,title:"Brightspace",link:"#"},{id:6,title:"eShop",link:"#"}],$={title:"Deprecated/Link Item",component:n,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={render:e=>t.jsx(n,{as:"div",link:e.link,children:t.jsx(n.Content,{children:t.jsx(n.Title,{as:"h2",fontSize:e.fontSize,title:e.title})})})};r.args={fontSize:"base",title:"Job item title",link:"https://carleton.ca"};const s={render:e=>t.jsx(g,{hasBorder:!0,children:t.jsx(n,{as:"li",link:e.link,children:t.jsx(n.Content,{children:t.jsx(n.Title,{as:"h3",fontSize:e.fontSize,title:e.title})})})})};s.args={...r.args};const l={render:()=>t.jsx(g,{header:"Link listing",hasBorder:!0,hasShadow:!0,children:_.map(({id:e,title:i,link:a})=>t.jsx(n,{as:"li",link:a,children:t.jsx(n.Content,{children:t.jsx(n.Title,{title:i,link:a})})},e))})};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <LinkItem as="div" link={args.link}>
      <LinkItem.Content>
        <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      </LinkItem.Content>
    </LinkItem>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,k,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <LinkItem as="li" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </StackedList>
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var h,L,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <StackedList header="Link listing" hasBorder hasShadow>
      {data.map(({
      id,
      title,
      link
    }) => <LinkItem key={id} as="li" link={link}>
          <LinkItem.Content>
            <LinkItem.Title title={title} link={link} />
          </LinkItem.Content>
        </LinkItem>)}
    </StackedList>
}`,...(x=(L=l.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const J=["Default","SingleItemList","MultiItemList"];export{r as Default,l as MultiItemList,s as SingleItemList,J as __namedExportsOrder,$ as default};
//# sourceMappingURL=LinkItem.stories-6e30b263.js.map
