import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{W as s}from"./WideImage-U7tOYPzv.js";import{B as o}from"./Button-BURiWGZI.js";import{B as d}from"./ButtonGroup-DECQb6k8.js";import{M as u}from"./Main-BJPC97L3.js";import{S as g}from"./Section-tPQgJeD2.js";import"./index-C9rmetsa.js";import"./PageHeader-C4-CI7At.js";import"./parseISO-BQ4LyrE0.js";import"./format-Dt71a7ij.js";import"./isSameDay-Dpgs3O9f.js";import"./propClasses-BYrQ2lXe.js";import"./Icon-UcZbim36.js";const k={title:"Components/Wide Image",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{as:"section",title:"Wide Image",image:"https://picsum.photos/id/381/600/400",headerType:"h1",maxWidth:"7xl",opacity:60,focalPointX:50,focalPointY:50,isType:"light",hasWave:!1,hasScroll:!1},render:a=>r.jsx(u,{children:r.jsx(s,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})},t={args:{...e.args,as:"div"},render:a=>r.jsx(g,{children:r.jsx(s,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'section',
    title: 'Wide Image',
    image: 'https://picsum.photos/id/381/600/400',
    headerType: 'h1',
    maxWidth: '7xl',
    opacity: 60,
    focalPointX: 50,
    focalPointY: 50,
    isType: 'light',
    hasWave: false,
    hasScroll: false
  },
  render: args => {
    return <Main>
        <WideImage {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideImage>
      </Main>;
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    as: 'div'
  },
  render: args => {
    return <Section>
        <WideImage {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideImage>
      </Section>;
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const v=["Primary","InsideSection"];export{t as InsideSection,e as Primary,v as __namedExportsOrder,k as default};
