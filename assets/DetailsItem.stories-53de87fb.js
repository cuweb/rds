import{a as r,j as e}from"./jsx-runtime-9d2cd5de.js";import{a as t,D as x}from"./DetailsItemData-f413cc9b.js";import{C as L}from"./Container-58f67975.js";import{C}from"./Column-6f70111f.js";import{S as g}from"./StackedList-630778db.js";import{M as f}from"./index-e40656e9.js";import"./index-580b8df0.js";import"./_commonjsHelpers-042e6b4d.js";import"./tailwindClasses-b7ef87ec.js";import"./Icon-06d25453.js";const O={title:"Cards & Lists/Lists/Details Item",component:t,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={render:i=>r(t,{as:"div",children:[i.icon&&e(t.Icon,{icon:i.icon}),r(t.Content,{children:[e(t.Title,{title:i.title}),e(t.Description,{description:i.description})]})]})};n.args={title:"405 Robertson Hall",description:"1125 Colonel By Drive, Ottawa, ON, K1A 4A4",icon:f};const s={render:i=>e(C,{maxWidth:"5xl",children:e(g,{hasBorder:!0,children:r(t,{as:"div",children:[i.icon&&e(t.Icon,{icon:i.icon}),r(t.Content,{children:[e(t.Title,{title:i.title}),e(t.Description,{description:i.description})]})]})})})};s.args={...n.args};const o={render:()=>e(L,{bgColor:"grey",children:e(C,{maxWidth:"5xl",children:e(g,{header:"Details listing",hasBorder:!0,hasShadow:!0,children:x.map(({title:i,description:S,icon:a})=>r(t,{children:[a&&e(t.Icon,{icon:a}),r(t.Content,{children:[e(t.Title,{title:i}),e(t.Description,{description:S})]})]},i))})})})};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <DetailsItem as="div">
      {args.icon && <DetailsItem.Icon icon={args.icon} />}

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,D;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Column maxWidth="5xl">
      <StackedList hasBorder>
        <DetailsItem as="div">
          {args.icon && <DetailsItem.Icon icon={args.icon} />}
          <DetailsItem.Content>
            <DetailsItem.Title title={args.title} />
            <DetailsItem.Description description={args.description} />
          </DetailsItem.Content>
        </DetailsItem>
      </StackedList>
    </Column>
}`,...(D=(p=s.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};var I,h,u;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Container bgColor="grey">
      <Column maxWidth="5xl">
        <StackedList header="Details listing" hasBorder hasShadow>
          {data.map(({
          title,
          description,
          icon
        }) => <DetailsItem key={title}>
              {icon && <DetailsItem.Icon icon={icon} />}
              <DetailsItem.Content>
                <DetailsItem.Title title={title} />
                <DetailsItem.Description description={description} />
              </DetailsItem.Content>
            </DetailsItem>)}
        </StackedList>
      </Column>
    </Container>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const _=["Default","SingleItemList","MultiItemList"];export{n as Default,o as MultiItemList,s as SingleItemList,_ as __namedExportsOrder,O as default};
//# sourceMappingURL=DetailsItem.stories-53de87fb.js.map
