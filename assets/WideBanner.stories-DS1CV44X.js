import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{W as n}from"./WideBanner-BFoKrX38.js";import{B as o}from"./Button-B6LFRtIH.js";import{B as d}from"./ButtonGroup-BA84YDld.js";import{M as u}from"./Main-BqxOGoMS.js";import{S as g}from"./Section-CKcqyDpo.js";import"./index-yBjzXJbu.js";import"./PageHeader-CDscqI5U.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-F0UBY6lR.js";import"./inlineImage-D3oyzuQa.js";import"./Icon-C5ia6qUS.js";const w={title:"Components/Wide Banner",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={args:{as:"section",title:"Wide Image",image:"https://picsum.photos/id/381/600/400",headerType:"h1",maxWidth:"7xl",opacity:60,focalPointX:50,focalPointY:50,isType:"light",hasWave:!1,hasScroll:!1},render:a=>r.jsx(u,{children:r.jsx(n,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})},e={args:{...t.args},render:a=>r.jsx(g,{children:r.jsx(n,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})};var s,i,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        <WideBanner {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideBanner>
      </Main>;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => {
    return <Section>
        <WideBanner {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideBanner>
      </Section>;
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const A=["Primary","InsideSection"];export{e as InsideSection,t as Primary,A as __namedExportsOrder,w as default};
