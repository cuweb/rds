import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./ImageGrid-Cg3QN1Ed.js";var s;function c(){return(c=e((()=>{s=[{id:1,image:`https://picsum.photos/id/531/600/400`,link:`#`,alt:`Image requirement`,span:`2`,title:`Ottawa Bluefest 30`,content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!`},{id:2,image:`https://picsum.photos/id/626/600/400`,link:`#`,alt:`Image requirement`},{id:3,image:`https://picsum.photos/id/381/600/400`,link:`#`,alt:`Image requirement`},{id:4,image:`https://picsum.photos/id/691/600/400`,link:`#`,alt:`Image requirement`},{id:5,image:`https://picsum.photos/id/163/600/400`,link:`#`,alt:`Image requirement`},{id:6,image:`https://picsum.photos/id/482/600/400`,link:`#`,alt:`Image requirement`}]})))()}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),c(),r(),l=n(),u={title:`Components/Image Grid`,component:o,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},d={args:{maxWidth:`5xl`,gridGap:`2`,cols:`3`},render:e=>{let{cols:t}=e,n=t!==`1/3`&&t!==`2/3`?Number(t):1;return(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e,children:s.slice(0,n).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e))})})}},f={args:{...d.args,cols:`4`},render:e=>(0,l.jsx)(i,{children:(0,l.jsxs)(o,{...e,children:[s.slice(0,1).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e)),(0,l.jsx)(o.Image,{imageUrl:s[0].image,colSpan:`2`,rowSpan:`2`,title:`Overlay Image Title`,content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!`,link:`https://github.com/cuweb/rds`}),s.slice(0,7).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e))]})})},p={args:{cols:`4`},render:e=>(0,l.jsx)(i,{children:(0,l.jsxs)(o,{...e,children:[s.slice(0,1).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e)),(0,l.jsx)(o.Image,{imageUrl:s[0].image,colSpan:`3`,rowSpan:`2`,title:`Overlay Image Title`,content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!`}),s.slice(1,6).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e))]})})},m={args:{cols:`4`},render:e=>(0,l.jsx)(i,{children:(0,l.jsxs)(o,{...e,children:[(0,l.jsx)(o.Image,{imageUrl:s[0].image,colSpan:`2`,rowSpan:`2`,title:`Overlay Image Title`,content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!`,link:`https://github.com/cuweb/rds`}),(0,l.jsx)(o.Image,{imageUrl:s[0].image,colSpan:`2`,rowSpan:`2`,title:`Ottawa Tulip Festival`,content:`Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!`,link:`https://github.com/cuweb/rds`}),s.slice(2,6).map(({id:e,image:t})=>(0,l.jsx)(o.Image,{imageUrl:t},e))]})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    maxWidth: '5xl',
    gridGap: '2',
    cols: '3'
  },
  render: args => {
    const {
      cols
    } = args;
    const setCols = cols !== '1/3' && cols !== '2/3' ? Number(cols) : 1;
    return <Main>
        <ImageGrid {...args}>
          {imageData.slice(0, setCols).map(({
          id,
          image
        }) => <ImageGrid.Image key={id} imageUrl={image} />)}
        </ImageGrid>
      </Main>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    cols: '4'
  },
  render: args => <Main>
      <ImageGrid {...args}>
        {imageData.slice(0, 1).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        {imageData.slice(0, 7).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
      </ImageGrid>
    </Main>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cols: '4'
  } as ImageGridProps,
  render: args => <Main>
      <ImageGrid {...args}>
        {imageData.slice(0, 1).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="3" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" />
        {imageData.slice(1, 6).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
      </ImageGrid>
    </Main>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    cols: '4'
  } as ImageGridProps,
  render: args => <Main>
      <ImageGrid {...args}>
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Ottawa Tulip Festival" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        {imageData.slice(2, 6).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
      </ImageGrid>
    </Main>
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`ColSpan2`,`ColSpan3`,`StackedTwoFour`]})))()}g();export{f as ColSpan2,p as ColSpan3,d as Primary,m as StackedTwoFour,h as __namedExportsOrder,u as default};