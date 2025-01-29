import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{L as n}from"./Login-Bd9_2ZMP.js";import{M as i}from"./Main-DnchB6dp.js";import"./index-C9rmetsa.js";import"./Alert-B9De8mpz.js";import"./index-yDOeu_rT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ShieldExclamationIcon-pesWzjV_.js";import"./Button-BURiWGZI.js";import"./Icon-UcZbim36.js";import"./propClasses-BYrQ2lXe.js";import"./ButtonGroup-DECQb6k8.js";const V={title:"Components/Login",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},k=()=>{console.log("HEllo")},M=()=>{console.log("GOOGLE")},f=()=>{console.log("LINKEDIN")},h=()=>{console.log("TWITTER")},P={default:k,google:M,linkedIn:f,twitter:h},s={args:{useSocial:!0,onClickHandler:P},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},a={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},t={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    useSocial: false
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    useSocial: true,
    onClickHandler: clickHandlers
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,L,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Error: Please Contact Site Administrator'
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(E=(L=a.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var S,x,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    errorTitle: 'Login Error',
    errorDesc: 'Please ensure you are connected to the VPN and try again.'
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const _=["Primary","SocialLogins","LoginErrorShort","LoginErrorDescription"];export{t as LoginErrorDescription,a as LoginErrorShort,o as Primary,s as SocialLogins,_ as __namedExportsOrder,V as default};
