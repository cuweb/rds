import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{W as a}from"./WideImage-CPWv3vpX.js";import{B as o}from"./Button-Dk2FY-vy.js";import{B as d}from"./ButtonGroup-CnxC-BVQ.js";import{S as u}from"./Section-BA8VpE3g.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-Im8HJTiC.js";import"./PageHeader-Bj7phANz.js";import"./useLinkContext-Bz4KtVj9.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./Icon-RboAbnkv.js";const R={title:"Components/Wide Image",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={args:{as:"section",title:"Wide Image",image:"https://picsum.photos/id/381/600/400",headerType:"h1",maxWidth:"7xl",opacity:60,focalPointX:50,focalPointY:50,isType:"light",hasWave:!1,hasScroll:!1},render:s=>r.jsx(a,{...s,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})},e={args:{...t.args,as:"div"},render:s=>r.jsx(u,{children:r.jsx(a,{...s,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})};var i,n,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    return <WideImage {...args}>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </WideImage>;
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,c,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Primary","InsideSection"];export{e as InsideSection,t as Primary,k as __namedExportsOrder,R as default};
