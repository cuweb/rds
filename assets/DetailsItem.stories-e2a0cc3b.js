import{j as e}from"./jsx-runtime-daf202a7.js";import{D as t,a as h}from"./DetailsItemData-84ba5a8c.js";import{S as u}from"./StackedList-4165f68e.js";import{M as g}from"./index-e4ae510c.js";import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-767b8be6.js";import"./Icon-78ba648b.js";import"./Panel-7a739c47.js";const w={title:"Cards & Lists/Lists (Deprecated)/Details Item",component:t,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={render:s=>e.jsxs(t,{as:"div",children:[s.icon&&e.jsx(t.Icon,{icon:s.icon}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:s.title}),e.jsx(t.Description,{description:s.description})]})]})};i.args={title:"405 Robertson Hall",description:"1125 Colonel By Drive, Ottawa, ON, K1A 4A4",icon:g};const n={render:s=>e.jsx(u,{hasBorder:!0,children:e.jsxs(t,{as:"li",children:[s.icon&&e.jsx(t.Icon,{icon:s.icon}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:s.title}),e.jsx(t.Description,{description:s.description})]})]})})};n.args={...i.args};const r={render:()=>e.jsx(u,{header:"Details listing",hasBorder:!0,hasShadow:!0,children:h.map(({title:s,description:j,icon:a})=>e.jsxs(t,{as:"li",children:[a&&e.jsx(t.Icon,{icon:a}),e.jsxs(t.Content,{children:[e.jsx(t.Title,{title:s}),e.jsx(t.Description,{description:j})]})]},s))})};var o,c,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <DetailsItem as="div">
      {args.icon && <DetailsItem.Icon icon={args.icon} />}

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(I=r.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const y=["Default","SingleItemList","MultiItemList"];export{i as Default,r as MultiItemList,n as SingleItemList,y as __namedExportsOrder,w as default};
//# sourceMappingURL=DetailsItem.stories-e2a0cc3b.js.map
