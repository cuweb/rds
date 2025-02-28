import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as a}from"./ImageGrid-B1zkUgNB.js";import{M as l}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./propClasses-BYrQ2lXe.js";import"./ImageCaptionOverlay-ZeS9mXso.js";import"./useLinkContext-NG2HLdE9.js";import"./index-7sdMIo0z.js";import"./_commonjsHelpers-BosuxZz1.js";const s=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"}],L={title:"Components/Image Grid",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m={args:{maxWidth:"5xl",gridGap:"2",cols:"3"},render:t=>{const{cols:i}=t,r=i!=="1/3"&&i!=="2/3"?Number(i):1;return e.jsx(l,{children:e.jsx(a,{...t,children:s.slice(0,r).map(({id:k,image:U})=>e.jsx(a.Image,{imageUrl:U},k))})})}},o={args:{...m.args,cols:"4"},render:t=>e.jsx(l,{children:e.jsxs(a,{...t,children:[s.slice(0,1).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i)),e.jsx(a.Image,{imageUrl:s[0].image,colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),s.slice(0,7).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})},c={args:{cols:"4"},render:t=>e.jsx(l,{children:e.jsxs(a,{...t,children:[s.slice(0,1).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i)),e.jsx(a.Image,{imageUrl:s[0].image,colSpan:"3",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"}),s.slice(1,6).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})},n={args:{cols:"4"},render:t=>e.jsx(l,{children:e.jsxs(a,{...t,children:[e.jsx(a.Image,{imageUrl:s[0].image,colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),e.jsx(a.Image,{imageUrl:s[0].image,colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),s.slice(2,6).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})};var g,u,p;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(p=(u=m.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,I,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(I=o.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var x,S,G;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(G=(S=c.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var b,f,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const C=["Primary","ColSpan2","ColSpan3","StackedTwoFour"];export{o as ColSpan2,c as ColSpan3,m as Primary,n as StackedTwoFour,C as __namedExportsOrder,L as default};
