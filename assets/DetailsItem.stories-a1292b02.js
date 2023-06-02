import{j as e}from"./jsx-runtime-daf202a7.js";import{D as t,a as h}from"./DetailsItemData-0bc37007.js";import{S as u}from"./StackedList-248cc77c.js";import{M as g}from"./MapPinIcon-9333a58a.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-62a5285f.js";import"./Icon-c9972b31.js";import"./Panel-e4f49686.js";const w={title:"Deprecated/Details Item",component:t,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={render:i=>e.jsxs(t,{as:"div",children:[i.icon&&e.jsx(t.Icon,{icon:i.icon}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:i.title}),e.jsx(t.Description,{description:i.description})]})]})};s.args={title:"405 Robertson Hall",description:"1125 Colonel By Drive, Ottawa, ON, K1A 4A4",icon:g};const n={render:i=>e.jsx(u,{hasBorder:!0,children:e.jsxs(t,{as:"li",children:[i.icon&&e.jsx(t.Icon,{icon:i.icon}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:i.title}),e.jsx(t.Description,{description:i.description})]})]})})};n.args={...s.args};const r={render:()=>e.jsx(u,{header:"Details listing",hasBorder:!0,hasShadow:!0,children:h.map(({title:i,description:j,icon:o})=>e.jsxs(t,{as:"li",children:[o&&e.jsx(t.Icon,{icon:o}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:i}),e.jsx(t.Description,{description:j})]})]},i))})};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <DetailsItem as="div">
      {args.icon && <DetailsItem.Icon icon={args.icon} />}

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <DetailsItem as="li">
        {args.icon && <DetailsItem.Icon icon={args.icon} />}
        <DetailsItem.Content>
          <DetailsItem.Title title={args.title} />
          <DetailsItem.Description description={args.description} />
        </DetailsItem.Content>
      </DetailsItem>
    </StackedList>
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var D,I,x;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <StackedList header="Details listing" hasBorder hasShadow>
      {data.map(({
      title,
      description,
      icon
    }) => <DetailsItem as="li" key={title}>
          {icon && <DetailsItem.Icon icon={icon} />}
          <DetailsItem.Content>
            <DetailsItem.Title title={title} />
            <DetailsItem.Description description={description} />
          </DetailsItem.Content>
        </DetailsItem>)}
    </StackedList>
}`,...(x=(I=r.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const y=["Default","SingleItemList","MultiItemList"];export{s as Default,r as MultiItemList,n as SingleItemList,y as __namedExportsOrder,w as default};
//# sourceMappingURL=DetailsItem.stories-a1292b02.js.map
