import{j as r}from"./jsx-runtime-B9B14buI.js";import{L as o}from"./Login-CodBROJh.js";import{S as i}from"./Section-4kh7xz3r.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Alert-BqVvJvdA.js";import"./ShieldExclamationIcon-kuBH7ZuJ.js";import"./Button-OjvGf8Ar.js";import"./Icon-CRy5uQ6V.js";import"./propClasses-C1Ju-ucV.js";import"./ButtonGroup-DjN0qtko.js";const V={title:"Components/Login",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},k=()=>{console.log("HEllo")},f=()=>{console.log("GOOGLE")},h=()=>{console.log("LINKEDIN")},P=()=>{console.log("TWITTER")},T={default:k,google:f,linkedIn:h,twitter:P},s={args:{useSocial:!0,onClickHandler:T},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},t={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},a={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})};var c,l,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    useSocial: false
  },
  render: args => {
    return <Section>
        <Login {...args} />
      </Section>;
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    useSocial: true,
    onClickHandler: clickHandlers
  },
  render: args => {
    return <Section>
        <Login {...args} />
      </Section>;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,S,L;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Error: Please Contact Site Administrator'
  },
  render: args => {
    return <Section>
        <Login {...args} />
      </Section>;
  }
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var E,x,j;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Login Error',
    errorDesc: 'Please ensure you are connected to the VPN and try again.'
  },
  render: args => {
    return <Section>
        <Login {...args} />
      </Section>;
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const _=["Primary","SocialLogins","LoginErrorShort","LoginErrorDescription"];export{a as LoginErrorDescription,t as LoginErrorShort,n as Primary,s as SocialLogins,_ as __namedExportsOrder,V as default};
