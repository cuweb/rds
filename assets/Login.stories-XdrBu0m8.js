import{j as r}from"./jsx-runtime-DmnAw2-i.js";import{L as o}from"./Login-Cx2a9WMI.js";import{S as i}from"./Section-B_q5jLx6.js";import"./index-BTEhrml1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Alert-DRAIVji-.js";import"./ShieldExclamationIcon-BKF2D1n-.js";import"./Button-C0F-bFFp.js";import"./Icon-FQliOu_9.js";import"./propClasses-eUIJeOi9.js";import"./ButtonGroup-OpO7ynmo.js";const V={title:"Components/Login",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},k=()=>{console.log("HEllo")},f=()=>{console.log("GOOGLE")},h=()=>{console.log("LINKEDIN")},P=()=>{console.log("TWITTER")},T={default:k,google:f,linkedIn:h,twitter:P},s={args:{useSocial:!0,onClickHandler:T},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},t={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},a={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})};var c,l,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
