import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as l}from"./Carleton360-HeVAeWn0.js";import{M as S}from"./Main-BqxOGoMS.js";import{B as h}from"./ButtonGroup-BemJm4Dh.js";import{B as a}from"./Button-ONf9ZU8q.js";import{r as m}from"./index-DDmFEvuO.js";import{S as v}from"./circle-check-C9GFwXaK.js";import{S as B}from"./Section-CKcqyDpo.js";import"./index-yBjzXJbu.js";import"./propClasses-B5Ri1ApJ.js";import"./Icon-nlNQucdT.js";import"./_commonjsHelpers-D6-XlEtG.js";var u;function c(){return c=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)({}).hasOwnProperty.call(s,i)&&(o[i]=s[i])}return o},c.apply(null,arguments)}var j=function(t){return m.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t),u||(u=m.createElement("path",{fill:"currentColor",d:"M128 128v64h192v-64c0-53-43-96-96-96s-96 43-96 96m-32 64v-64C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80zm-64 80v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48"})))};const b={title:"Components/Carleton360",component:l,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={render:()=>r.jsx(S,{children:r.jsx(l,{children:r.jsxs(h,{children:[r.jsx(a,{icon:v,title:"Sign up for 360"}),r.jsx(a,{icon:j,title:"Login to 360",color:"dark-grey"})]})})})},e={args:{...n.args},render:o=>r.jsx(B,{maxWidth:"7xl",children:r.jsx(l,{...o,children:r.jsxs(h,{children:[r.jsx(a,{icon:v,title:"Sign up for 360"}),r.jsx(a,{icon:j,title:"Login to 360",color:"dark-grey"})]})})})};var p,d,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,C,f;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(C=e.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const H=["Primary","WideCarleton360"];export{n as Primary,e as WideCarleton360,H as __namedExportsOrder,b as default};
