import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{W as s}from"./WideImage-B2zrw-aE.js";import{B as o}from"./Button-ONf9ZU8q.js";import{B as d}from"./ButtonGroup-BemJm4Dh.js";import{M as u}from"./Main-BqxOGoMS.js";import{S as g}from"./Section-CKcqyDpo.js";import"./index-yBjzXJbu.js";import"./PageHeader-DczponrD.js";import"./parseISO-Z6eZh0wm.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-B5Ri1ApJ.js";import"./Icon-nlNQucdT.js";const k={title:"Components/Wide Image",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={args:{as:"section",title:"Wide Image",image:"https://picsum.photos/id/381/600/400",headerType:"h1",maxWidth:"7xl",opacity:60,focalPointX:50,focalPointY:50,isType:"light",hasWave:!1,hasScroll:!1},render:a=>r.jsx(u,{children:r.jsx(s,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})},t={args:{...e.args,as:"div"},render:a=>r.jsx(g,{children:r.jsx(s,{...a,children:r.jsxs(d,{children:[r.jsx(o,{title:"Apply Now"}),r.jsx(o,{title:"Request Information",color:"dark-grey"})]})})})};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
