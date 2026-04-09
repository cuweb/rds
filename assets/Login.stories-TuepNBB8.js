import{j as r}from"./jsx-runtime-ePDKBRzk.js";import{L as n}from"./Login-CoIAsrXZ.js";import{M as i}from"./Main-BL7nx622.js";import"./iframe-XjKzupMV.js";import"./preload-helper-Dp1pzeXC.js";import"./Alert-Ch0j6EX9.js";import"./Icon-D-vcXEaH.js";import"./Button-D6D_HN_2.js";import"./ButtonGroup-C3OWKS58.js";import"./propClasses-620uA3Rh.js";const A={title:"Components/Login",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},k=()=>{console.log("HEllo")},M=()=>{console.log("GOOGLE")},f=()=>{console.log("LINKEDIN")},h=()=>{console.log("TWITTER")},P={default:k,google:M,linkedIn:f,twitter:h},s={args:{useSocial:!0,onClickHandler:P},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},a={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},t={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})};var c,l,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    useSocial: false
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    useSocial: true,
    onClickHandler: clickHandlers
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,L,E;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const R=["Primary","SocialLogins","LoginErrorShort","LoginErrorDescription"];export{t as LoginErrorDescription,a as LoginErrorShort,o as Primary,s as SocialLogins,R as __namedExportsOrder,A as default};
