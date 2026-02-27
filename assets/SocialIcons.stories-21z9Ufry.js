import{j as e}from"./jsx-runtime-pdLcmAzh.js";import{M as t}from"./Main-DwsfdQTZ.js";import{S as c,s as m,a as l}from"./SocialIcons-flP5acpA.js";import"./iframe-B_DE8Sck.js";import"./preload-helper-Dp1pzeXC.js";import"./useLinkContext-F_GHM8Je.js";const x={title:"Components/Social Icons",component:c,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={args:{},render:n=>e.jsx(t,{children:e.jsx(c,{...n,children:Object.entries(m).map(([s])=>e.jsx(l,{socialService:s,socialLink:"#"},s))})})};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Main>
        <SocialIcons {...args}>
          {Object.entries(socialServices).map(([key]) => <SocialIconsItem key={key} socialService={key as keyof typeof socialServices} socialLink="#" />)}
        </SocialIcons>
      </Main>;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Primary"];export{r as Primary,y as __namedExportsOrder,x as default};
