import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as a}from"./ImageGrid-BvmqmpHi.js";import{S as g}from"./Section-CO2ge5vF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./propClasses-Im8HJTiC.js";import"./useLinkContext-Bz4KtVj9.js";const m=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"}],D={title:"Components/ImageGrid",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},c={args:{maxWidth:"5xl",gridGap:"2",cols:"3"},render:r=>{const{cols:t}=r,s=t!=="1/3"&&t!=="2/3"?Number(t):1;return e.jsx(g,{children:e.jsx(a,{...r,children:m.slice(0,s).map(({id:i,image:w,alt:v})=>e.jsx(a.Image,{children:e.jsx("img",{src:w,alt:v})},i))})})}},o={args:{...c.args,cols:"4"},render:r=>e.jsx(g,{children:e.jsxs(a,{...r,children:[e.jsx(a.Image,{colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/337/600/400",alt:"test"})}),m.slice(0,4).map(({id:t,image:s,alt:i})=>e.jsx(a.Image,{children:e.jsx("img",{src:s,alt:i})},t))]})})},n={args:{cols:"4"},render:r=>e.jsx(g,{children:e.jsxs(a,{...r,children:[m.slice(0,1).map(({id:t,image:s,alt:i})=>e.jsx(a.Image,{children:e.jsx("img",{src:s,alt:i})},t)),e.jsx(a.Image,{colSpan:"3",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"https://picsum.photos/id/74/1200/800",alt:"test"})}),m.slice(1,6).map(({id:t,image:s,alt:i})=>e.jsx(a.Image,{children:e.jsx("img",{src:s,alt:i})},t))]})})},l={args:{cols:"4"},render:r=>e.jsx(g,{children:e.jsxs(a,{...r,children:[e.jsx(a.Image,{colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/143/600/400",alt:"test"})}),e.jsx(a.Image,{colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/572/600/400",alt:"test"})}),m.slice(2,6).map(({id:t,image:s,alt:i})=>e.jsx(a.Image,{children:e.jsx("img",{src:s,alt:i})},t))]})})};var p,u,d;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          image,
          alt
        }) => <ImageGrid.Image key={id}>
              <img src={image} alt={alt} />
            </ImageGrid.Image>)}
        </ImageGrid>
      </Section>;
  }
}`,...(d=(u=c.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var I,h,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    cols: '4'
  },
  render: args => <Section>
      <ImageGrid {...args}>
        <ImageGrid.Image colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds">
          <img src="https://picsum.photos/id/337/600/400" alt="test" />
        </ImageGrid.Image>
        {imageData.slice(0, 4).map(({
        id,
        image,
        alt
      }) => <ImageGrid.Image key={id}>
            <img src={image} alt={alt} />
          </ImageGrid.Image>)}
      </ImageGrid>
    </Section>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,G,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <Section>
      <ImageGrid {...args}>
        {imageData.slice(0, 1).map(({
        id,
        image,
        alt
      }) => <ImageGrid.Image key={id}>
            <img src={image} alt={alt} />
          </ImageGrid.Image>)}
        <ImageGrid.Image colSpan="3" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!">
          <img src="https://picsum.photos/id/74/1200/800" alt="test" />
        </ImageGrid.Image>
        {imageData.slice(1, 6).map(({
        id,
        image,
        alt
      }) => <ImageGrid.Image key={id}>
            <img src={image} alt={alt} />
          </ImageGrid.Image>)}
      </ImageGrid>
    </Section>
}`,...(j=(G=n.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var b,f,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <Section>
      <ImageGrid {...args}>
        <ImageGrid.Image colSpan="2" rowSpan="2" title="Overlay Image Title" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds">
          <img src="https://picsum.photos/id/143/600/400" alt="test" />
        </ImageGrid.Image>
        <ImageGrid.Image colSpan="2" rowSpan="2" title="Ottawa Tulip Festival" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!" link="https://github.com/cuweb/rds">
          <img src="https://picsum.photos/id/572/600/400" alt="test" />
        </ImageGrid.Image>
        {imageData.slice(2, 6).map(({
        id,
        image,
        alt
      }) => <ImageGrid.Image key={id}>
            <img src={image} alt={alt} />
          </ImageGrid.Image>)}
      </ImageGrid>
    </Section>
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const F=["Primary","ColSpan2","ColSpan3","StackedTwoFour"];export{o as ColSpan2,n as ColSpan3,c as Primary,l as StackedTwoFour,F as __namedExportsOrder,D as default};
