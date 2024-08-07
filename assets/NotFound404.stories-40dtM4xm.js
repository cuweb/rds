import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as m}from"./ButtonGroup-DcsTpBqd.js";import{u as l}from"./useLinkContext-Bz4KtVj9.js";import{P as g}from"./PageHeader-DL2nKhuN.js";import{S as h}from"./Section-JfbkAvfr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-BCnilxRx.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";const s=({isCenter:r=!0})=>{const n=l();return e.jsxs(e.Fragment,{children:[e.jsx(g,{as:"h1",header:"404 - Page Not Found",content:"Apologies, but the page you requested could not be found.",size:"lg",isCenter:!!r}),e.jsx("p",{className:r?"text-center":"text-left",children:"Please use the site navigation located at the top of this page or search the site using the search field icon in the far right side of the navigation."}),e.jsxs(m,{align:r?"center":"start",children:[e.jsx(n,{href:"/",className:"cu-button cu-button--red",children:"Site Homepage"}),e.jsx(n,{href:"https://carleton.ca",className:"cu-button cu-button--grey",children:"Carleton Homepage"})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"NotFound404",props:{isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _={title:"Components/Error Messages/NotFound404",component:s,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},t={args:{isCenter:!0},render:r=>e.jsx(s,{...r})},o={args:{isCenter:!1},render:r=>e.jsx(h,{children:e.jsx(s,{...r})})};var a,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isCenter: true
  },
  render: args => {
    return <NotFound404 {...args} />;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isCenter: false
  },
  render: args => {
    return <Section>
        <NotFound404 {...args} />
      </Section>;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const q=["Primary","SectionWrapper"];export{t as Primary,o as SectionWrapper,q as __namedExportsOrder,_ as default};
