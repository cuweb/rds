import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{M as t}from"./Main-BqxOGoMS.js";import{S as c,s as m,a as p}from"./SocialIcons-B4K45rvu.js";import"./index-yBjzXJbu.js";import"./useLinkContext-NG2HLdE9.js";import"./index-7sdMIo0z.js";import"./_commonjsHelpers-BosuxZz1.js";const y={title:"Components/Social Icons",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{},render:n=>e.jsx(t,{children:e.jsx(c,{...n,children:Object.entries(m).map(([s])=>e.jsx(p,{socialService:s,socialLink:"#"},s))})})};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Main>
        <SocialIcons {...args}>
          {Object.entries(socialServices).map(([key]) => <SocialIconsItem key={key} socialService={key as keyof typeof socialServices} socialLink="#" />)}
        </SocialIcons>
      </Main>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Primary"];export{r as Primary,f as __namedExportsOrder,y as default};
