import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{L as n}from"./Login-7BnuGNz7.js";import{M as i}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./Alert-CpHcwsef.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./ShieldExclamationIcon-nzn-m4Ck.js";import"./Button-DcXLR8Nr.js";import"./Icon-BmxWTTPC.js";import"./propClasses-Dlt7SDjn.js";import"./ButtonGroup-B_KZtxM2.js";const V={title:"Components/Login",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},k=()=>{console.log("HEllo")},M=()=>{console.log("GOOGLE")},f=()=>{console.log("LINKEDIN")},h=()=>{console.log("TWITTER")},P={default:k,google:M,linkedIn:f,twitter:h},s={args:{useSocial:!0,onClickHandler:P},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},a={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},t={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
