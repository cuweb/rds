import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as o}from"./Testimonial-DMANVgaV.js";import{M as p}from"./Main-BqxOGoMS.js";import{Q as u}from"./Quote-4fEjSx2t.js";import"./index-yBjzXJbu.js";const P={title:"Components/Testimonial",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={args:{imageUrl:"https://picsum.photos/id/342/600/400",imageZoom:0,focalPointX:50,focalPointY:50,reverse:!1},render:t=>e.jsx(p,{children:e.jsx(o,{...t,children:e.jsx(u,{cite:"Jane Doe",graphic:"quote",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor."})})})})},r={args:{imageUrl:"https://picsum.photos/id/342/600/400",imageZoom:0,focalPointX:50,focalPointY:50,reverse:!0},render:t=>e.jsx(p,{children:e.jsx(o,{...t,children:e.jsx(u,{cite:"John Smith",graphic:"quote",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor."})})})})};var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/id/342/600/400',
    imageZoom: 0,
    focalPointX: 50,
    focalPointY: 50,
    reverse: false
  },
  render: args => {
    return <Main>
        <Testimonial {...args}>
          <Quote cite="Jane Doe" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>
      </Main>;
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://picsum.photos/id/342/600/400',
    imageZoom: 0,
    focalPointX: 50,
    focalPointY: 50,
    reverse: true
  },
  render: args => {
    return <Main>
        <Testimonial {...args}>
          <Quote cite="John Smith" graphic="quote">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
              mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
            </p>
          </Quote>
        </Testimonial>
      </Main>;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["Primary","ImageRight"];export{r as ImageRight,i as Primary,x as __namedExportsOrder,P as default};
