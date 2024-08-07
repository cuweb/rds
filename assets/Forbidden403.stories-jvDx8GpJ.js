import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as u}from"./ButtonGroup-DcsTpBqd.js";import{P as l}from"./PageHeader-DL2nKhuN.js";import{u as g}from"./useLinkContext-Bz4KtVj9.js";import{S as h}from"./Section-JfbkAvfr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-BCnilxRx.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";const o=({isCenter:r=!0})=>{const n=g();return e.jsxs(e.Fragment,{children:[e.jsx(l,{as:"h1",header:"403 – Forbidden",content:"Apologies, but you do not have permission to access this page",size:"lg",isCenter:!!r}),e.jsx("p",{className:r?"text-center":"text-left",children:"Please use the site navigation located at the top of this page or search the site using the search field icon in the far right side of the navigation."}),e.jsxs(u,{align:r?"center":"start",children:[e.jsx(n,{href:"/",className:"cu-button cu-button--red",children:"Site Homepage"}),e.jsx(n,{href:"https://carleton.ca",className:"cu-button cu-button--grey",children:"Carleton Homepage"})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Forbidden403",props:{isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const N={title:"Components/Error Messages/403 Forbidden",component:o,argTypes:{},tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={args:{isCenter:!0},render:r=>e.jsx(o,{...r})},s={args:{isCenter:!1},render:r=>e.jsx(h,{children:e.jsx(o,{...r})})};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isCenter: true
  },
  render: args => {
    return <Forbidden403 {...args} />;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isCenter: false
  },
  render: args => {
    return <Section>
        <Forbidden403 {...args} />
      </Section>;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _=["Primary","SectionWrapper"];export{t as Primary,s as SectionWrapper,_ as __namedExportsOrder,N as default};
