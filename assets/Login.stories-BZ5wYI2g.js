import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{L as o}from"./Login-NhZKai5V.js";import{M as i}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./Alert-Bc0KxKlk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./circle-check-C9GFwXaK.js";import"./shield-exclamation-DhNgZCM5.js";import"./Button-ONf9ZU8q.js";import"./Icon-nlNQucdT.js";import"./propClasses-B5Ri1ApJ.js";import"./ButtonGroup-BemJm4Dh.js";const _={title:"Components/Login",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{useSocial:!1},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},k=()=>{console.log("HEllo")},M=()=>{console.log("GOOGLE")},f=()=>{console.log("LINKEDIN")},h=()=>{console.log("TWITTER")},P={default:k,google:M,linkedIn:f,twitter:h},s={args:{useSocial:!0,onClickHandler:P},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},a={args:{errorTitle:"Error: Please Contact Site Administrator"},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})},t={args:{errorTitle:"Login Error",errorDesc:"Please ensure you are connected to the VPN and try again."},render:e=>r.jsx(i,{children:r.jsx(o,{...e})})};var c,l,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    useSocial: false
  },
  render: args => {
    return <Main>
        <Login {...args} />
      </Main>;
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const q=["Primary","SocialLogins","LoginErrorShort","LoginErrorDescription"];export{t as LoginErrorDescription,a as LoginErrorShort,n as Primary,s as SocialLogins,q as __namedExportsOrder,_ as default};
