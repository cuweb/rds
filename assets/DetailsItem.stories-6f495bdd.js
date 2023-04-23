import{a as n,j as i}from"./jsx-runtime-9d2cd5de.js";import{D as e,a as C}from"./DetailsItemData-43a848e7.js";import{S as g}from"./StackedList-62c14f64.js";import{M as L}from"./index-d638a58e.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./optionClasses-4f7b0afb.js";import"./Icon-a1a9e118.js";import"./Panel-84231987.js";const y={title:"Cards & Lists/Lists (Deprecated)/Details Item",component:e,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={render:t=>n(e,{as:"div",children:[t.icon&&i(e.Icon,{icon:t.icon}),n(e.Content,{children:[i(e.Title,{title:t.title}),i(e.Description,{description:t.description})]})]})};s.args={title:"405 Robertson Hall",description:"1125 Colonel By Drive, Ottawa, ON, K1A 4A4",icon:L};const r={render:t=>i(g,{hasBorder:!0,children:n(e,{as:"li",children:[t.icon&&i(e.Icon,{icon:t.icon}),n(e.Content,{children:[i(e.Title,{title:t.title}),i(e.Description,{description:t.description})]})]})})};r.args={...s.args};const a={render:()=>i(g,{header:"Details listing",hasBorder:!0,hasShadow:!0,children:C.map(({title:t,description:S,icon:o})=>n(e,{as:"li",children:[o&&i(e.Icon,{icon:o}),n(e.Content,{children:[i(e.Title,{title:t}),i(e.Description,{description:S})]})]},t))})};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DetailsItem as="div">
      {args.icon && <DetailsItem.Icon icon={args.icon} />}

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,D;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <StackedList hasBorder>
      <DetailsItem as="li">
        {args.icon && <DetailsItem.Icon icon={args.icon} />}
        <DetailsItem.Content>
          <DetailsItem.Title title={args.title} />
          <DetailsItem.Description description={args.description} />
        </DetailsItem.Content>
      </DetailsItem>
    </StackedList>
}`,...(D=(p=r.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};var I,u,h;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const O=["Default","SingleItemList","MultiItemList"];export{s as Default,a as MultiItemList,r as SingleItemList,O as __namedExportsOrder,y as default};
//# sourceMappingURL=DetailsItem.stories-6f495bdd.js.map
