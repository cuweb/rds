import{j as e}from"./jsx-runtime-daf202a7.js";import{R as S}from"./index-ec8b93d8.js";import{L as v,d as j}from"./index-e4ae510c.js";import{d as C}from"./optionClasses-767b8be6.js";import{L as y}from"./Link-97245677.js";import{S as x}from"./StackedList-4165f68e.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-ae998749.js";import"../sb-preview/runtime.js";import"./Panel-7a739c47.js";const o=({as:t="div",children:s,link:i})=>e.jsx(t,{children:e.jsxs(y,{href:i,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-auto flex-none",children:e.jsx(v,{className:"mr-2 h-4 w-4 flex-none text-cu-red"})}),s]}),e.jsx(j,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),g=({children:t})=>e.jsx("div",{className:"flex flex-auto flex-col gap-2",children:t}),I=({as:t="h3",fontSize:s="base",title:i})=>S.createElement(t,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${C[s]}`},i);o.defaultProps={as:"li"};o.displayName="LinkItem";g.displayName="LinkItem.Content";I.displayName="LinkItem.Title";const n=Object.assign(o,{Content:g,Title:I});try{n.displayName="LinkItem",n.__docgenInfo={description:"",displayName:"LinkItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'},{value:'"base"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}const z=[{id:1,title:"Carleton 360",link:"#"},{id:2,title:"Carleton Central",link:"#"},{id:3,title:"Events Calendar and add stuff that makes it a long title",link:"#"},{id:4,title:"Travel & Expenses",link:"#"},{id:5,title:"Brightspace",link:"#"},{id:6,title:"eShop",link:"#"}],V={title:"Cards & Lists/Lists (Deprecated)/Link Item",component:n,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:t=>e.jsx(n,{as:"div",link:t.link,children:e.jsx(n.Content,{children:e.jsx(n.Title,{as:"h2",fontSize:t.fontSize,title:t.title})})})};a.args={fontSize:"base",title:"Job item title",link:"https://carleton.ca"};const r={render:t=>e.jsx(x,{hasBorder:!0,children:e.jsx(n,{as:"li",link:t.link,children:e.jsx(n.Content,{children:e.jsx(n.Title,{as:"h3",fontSize:t.fontSize,title:t.title})})})})};r.args={...a.args};const l={render:()=>e.jsx(x,{header:"Link listing",hasBorder:!0,hasShadow:!0,children:z.map(({id:t,title:s,link:i})=>e.jsx(n,{as:"li",link:i,children:e.jsx(n.Content,{children:e.jsx(n.Title,{title:s,link:i})})},t))})};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <LinkItem as="div" link={args.link}>
      <LinkItem.Content>
        <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      </LinkItem.Content>
    </LinkItem>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <LinkItem as="li" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </StackedList>
}`,...(k=(p=r.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,L,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(L=l.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const F=["Default","SingleItemList","MultiItemList"];export{a as Default,l as MultiItemList,r as SingleItemList,F as __namedExportsOrder,V as default};
//# sourceMappingURL=LinkItem.stories-ff5612dd.js.map
