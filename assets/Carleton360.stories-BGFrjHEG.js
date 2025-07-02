import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as i}from"./Carleton360-HeVAeWn0.js";import{M as j}from"./Main-BqxOGoMS.js";import{B as g}from"./ButtonGroup-BA84YDld.js";import{B as a}from"./Button-B6LFRtIH.js";import{S as B}from"./Section-CKcqyDpo.js";import{F as f}from"./CheckCircleIcon-CyPy8vXU.js";import{r as n}from"./index-DDmFEvuO.js";import"./index-yBjzXJbu.js";import"./propClasses-F0UBY6lR.js";import"./Icon-C5ia6qUS.js";import"./_commonjsHelpers-D6-XlEtG.js";function v({title:e,titleId:s,...C},h){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:h,"aria-labelledby":s},C),e?n.createElement("title",{id:s},e):null,n.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}const x=n.forwardRef(v),b={title:"Components/Carleton360",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={render:()=>r.jsx(j,{children:r.jsx(i,{children:r.jsxs(g,{children:[r.jsx(a,{icon:f,title:"Sign up for 360"}),r.jsx(a,{icon:x,title:"Login to 360",color:"dark-grey"})]})})})},t={args:{...o.args},render:e=>r.jsx(B,{maxWidth:"7xl",children:r.jsx(i,{...e,children:r.jsxs(g,{children:[r.jsx(a,{icon:f,title:"Sign up for 360"}),r.jsx(a,{icon:x,title:"Login to 360",color:"dark-grey"})]})})})};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <Main>
        <Carleton360>
          <ButtonGroup>
            <Button icon={CheckCircleIcon} title="Sign up for 360" />
            <Button icon={LockClosedIcon} title="Login to 360" color="dark-grey" />
          </ButtonGroup>
        </Carleton360>
      </Main>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    return <Section maxWidth="7xl">
        <Carleton360 {...args}>
          <ButtonGroup>
            <Button icon={CheckCircleIcon} title="Sign up for 360" />
            <Button icon={LockClosedIcon} title="Login to 360" color="dark-grey" />
          </ButtonGroup>
        </Carleton360>
      </Section>;
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const P=["Primary","WideCarleton360"];export{o as Primary,t as WideCarleton360,P as __namedExportsOrder,b as default};
