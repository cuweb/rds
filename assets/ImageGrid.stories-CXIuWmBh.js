import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as a}from"./ImageGrid-DjvWHXwk.js";import{S as l}from"./Section-BA8VpE3g.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-DxtanR7D.js";import"./useLinkContext-Bz4KtVj9.js";const t=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"}],T={title:"Components/ImageGrid",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m={args:{maxWidth:"5xl",gridGap:"2",cols:"3"},render:s=>{const{cols:i}=s,r=i!=="1/3"&&i!=="2/3"?Number(i):1;return e.jsx(l,{children:e.jsx(a,{...s,children:t.slice(0,r).map(({id:k,image:w})=>e.jsx(a.Image,{imageUrl:w},k))})})}},o={args:{...m.args,cols:"4"},render:s=>e.jsx(l,{children:e.jsxs(a,{...s,children:[e.jsx(a.Image,{imageUrl:t[0].image,colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),t.slice(0,4).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})},c={args:{cols:"4"},render:s=>e.jsx(l,{children:e.jsxs(a,{...s,children:[t.slice(0,1).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i)),e.jsx(a.Image,{imageUrl:t[0].image,colSpan:"3",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"}),t.slice(1,6).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})},n={args:{cols:"4"},render:s=>e.jsx(l,{children:e.jsxs(a,{...s,children:[e.jsx(a.Image,{imageUrl:t[0].image,colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),e.jsx(a.Image,{imageUrl:t[0].image,colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds"}),t.slice(2,6).map(({id:i,image:r})=>e.jsx(a.Image,{imageUrl:r},i))]})})};var g,u,p;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <Section>
        <ImageGrid {...args}>
          {imageData.slice(0, setCols).map(({
          id,
          image
        }) => <ImageGrid.Image key={id} imageUrl={image} />)}
        </ImageGrid>
      </Section>;
  }
}`,...(p=(u=m.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,I,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    cols: '4'
  },
  render: args => <Section>
      <ImageGrid {...args}>
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        {imageData.slice(0, 4).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
      </ImageGrid>
    </Section>
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var h,x,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    cols: '4'
  } as ImageGridProps,
  render: args => <Section>
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
    </Section>
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,G,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cols: '4'
  } as ImageGridProps,
  render: args => <Section>
      <ImageGrid {...args}>
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        <ImageGrid.Image imageUrl={imageData[0].image} colSpan="2" rowSpan="2" title="Ottawa Tulip Festival" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds" />
        {imageData.slice(2, 6).map(({
        id,
        image
      }) => <ImageGrid.Image key={id} imageUrl={image} />)}
      </ImageGrid>
    </Section>
}`,...(j=(G=n.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const L=["Primary","ColSpan2","ColSpan3","StackedTwoFour"];export{o as ColSpan2,c as ColSpan3,m as Primary,n as StackedTwoFour,L as __namedExportsOrder,T as default};
