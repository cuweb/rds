import{j as e,a as d}from"./jsx-runtime-9d2cd5de.js";import{C as I}from"./Column-6f70111f.js";import{R as v}from"./index-580b8df0.js";import{L as y,d as b}from"./index-e40656e9.js";import{a as z}from"./tailwindClasses-b7ef87ec.js";import{L as N}from"./Link-a8ece75e.js";import{S as C}from"./StackedList-630778db.js";import{C as _}from"./Container-58f67975.js";import"./_commonjsHelpers-042e6b4d.js";const o=({as:t="div",children:a,link:r})=>e(t,{children:d(N,{href:r,className:"not-prose group relative flex h-full cursor-pointer items-center gap-2 p-6 hover:bg-gray-50 focus:outline-none",children:[d("div",{className:"flex items-center gap-1",children:[e("div",{className:"w-auto flex-none",children:e(y,{className:"mr-2 h-4 w-4 flex-none text-cu-red"})}),a]}),e(b,{className:"ml-auto h-5 w-5 flex-none text-cu-black-300","aria-hidden":"true"})]})}),x=({children:t})=>e("div",{className:"flex flex-auto flex-col gap-2",children:t}),S=({as:t="h3",fontSize:a="base",title:r})=>v.createElement(t,{className:`text-sm font-semibold text-cu-black group-hover:text-cu-red ${z[a]}`},r);o.defaultProps={as:"li"};o.displayName="LinkItem";x.displayName="LinkItem.Content";S.displayName="LinkItem.Title";const n=Object.assign(o,{Content:x,Title:S});try{n.displayName="LinkItem",n.__docgenInfo={description:"",displayName:"LinkItem",props:{as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"li"'}]}},fontSize:{defaultValue:{value:"base"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}const T=[{id:1,title:"Carleton 360",link:"#"},{id:2,title:"Carleton Central",link:"#"},{id:3,title:"Events Calendar and add stuff that makes it a long title",link:"#"},{id:4,title:"Travel & Expenses",link:"#"},{id:5,title:"Brightspace",link:"#"},{id:6,title:"eShop",link:"#"}],F={title:"Cards & Lists/Lists/Link Item",component:n,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={render:t=>e(n,{as:"div",link:t.link,children:e(n.Content,{children:e(n.Title,{as:"h2",fontSize:t.fontSize,title:t.title})})})};i.args={fontSize:"base",title:"Job item title",link:"https://carleton.ca"};const l={render:t=>e(I,{maxWidth:"5xl",children:e(C,{hasBorder:!0,children:e(n,{as:"div",link:t.link,children:e(n.Content,{children:e(n.Title,{as:"h3",fontSize:t.fontSize,title:t.title})})})})})};l.args={...i.args};const s={render:()=>e(_,{bgColor:"grey",children:e(I,{maxWidth:"5xl",children:e(C,{header:"Link listing",hasBorder:!0,hasShadow:!0,children:T.map(({id:t,title:a,link:r})=>e(n,{children:e(n.Content,{children:e(n.Title,{title:a,link:r})})},t))})})})};var m,c,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <LinkItem as="div" link={args.link}>
      <LinkItem.Content>
        <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      </LinkItem.Content>
    </LinkItem>
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,k,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Column maxWidth="5xl">
      <StackedList hasBorder>
        <LinkItem as="div" link={args.link}>
          <LinkItem.Content>
            <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          </LinkItem.Content>
        </LinkItem>
      </StackedList>
    </Column>
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,L,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Container bgColor="grey">
      <Column maxWidth="5xl">
        <StackedList header="Link listing" hasBorder hasShadow>
          {data.map(({
          id,
          title,
          link
        }) => <LinkItem key={id}>
              <LinkItem.Content>
                <LinkItem.Title title={title} link={link} />
              </LinkItem.Content>
            </LinkItem>)}
        </StackedList>
      </Column>
    </Container>
}`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};const M=["Default","SingleItemList","MultiItemList"];export{i as Default,s as MultiItemList,l as SingleItemList,M as __namedExportsOrder,F as default};
//# sourceMappingURL=LinkItem.stories-928cf148.js.map
