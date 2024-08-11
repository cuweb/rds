import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as C,r as T,a as N,m as P,g as L}from"./propClasses-CbluzEXK.js";import{u as O}from"./useLinkContext-Bz4KtVj9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const p=({children:i,colSpan:s="1",rowSpan:r="1",title:a,content:l,link:m})=>{const q=O();return e.jsxs("div",{className:`relative not-prose overflow-hidden ${C[s]} ${T[r]} rounded-lg bg-black`,children:[i,(a||l)&&e.jsx("div",{className:`bg-black/75 text-white absolute bottom-2 left-2 right-2 px-4 py-2.5 rounded-md ${m?"hover:bg-cu-red/85":""}`,children:m?e.jsxs(q,{href:m,className:"cursor-pointer block hover-bg-cu-red",children:[e.jsx("p",{className:"text-sm md:text-base font-semibold line-clamp-2",children:a&&a?a:"Please add a title"}),l&&e.jsx("p",{className:"text-sm font-light pt-0.5 line-clamp-2",children:l})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-sm md:text-base font-semibold line-clamp-2",children:a&&a?a:"Please add a title"}),l&&e.jsx("p",{className:"text-sm font-light pt-0.5 line-clamp-2",children:l})]})})]})};p.displayName="ImageGrid.Image";p.__docgenInfo={description:"",methods:[],displayName:"ImageGrid.Image",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof colSpanClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},rowSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof rowSpanClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};const g=({children:i,maxWidth:s="5xl",gridGap:r="5",cols:a="3"})=>e.jsx("div",{className:`cu-imagegrid cu-imagegrid-${a} grid
        ${N[a]}
        ${P[s]} ${L[r]}
      `,children:i}),t=Object.assign(g,{Image:p});g.displayName="ImageGrid";g.__docgenInfo={description:"",methods:[],displayName:"ImageGrid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof gridColumnClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"},{name:"literal",value:"'1/3'"},{name:"literal",value:"'2/3'"}]},description:"",defaultValue:{value:"'3'",computed:!1}},gridGap:{required:!1,tsType:{name:"union",raw:"keyof typeof gridGapClasses",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'2'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'5'",computed:!1}}}};const o=[{id:1,image:"https://picsum.photos/id/531/600/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/id/626/600/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/id/381/600/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/id/691/600/400",link:"#",alt:"Image requirement"},{id:5,image:"https://picsum.photos/id/163/600/400",link:"#",alt:"Image requirement"},{id:6,image:"https://picsum.photos/id/482/600/400",link:"#",alt:"Image requirement"}],_={title:"Components/ImageGrid",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n={args:{maxWidth:"5xl",gridGap:"2",cols:"3"},render:i=>{const{cols:s}=i,r=s!=="1/3"&&s!=="2/3"?Number(s):1;return e.jsx(t,{...i,children:o.slice(0,r).map(({id:a,image:l,alt:m})=>e.jsx(t.Image,{children:e.jsx("img",{src:l,alt:m})},a))})}},c={args:{...n.args,cols:"4"},render:i=>e.jsxs(t,{...i,children:[e.jsx(t.Image,{colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/337/600/400",alt:"test"})}),o.slice(0,4).map(({id:s,image:r,alt:a})=>e.jsx(t.Image,{children:e.jsx("img",{src:r,alt:a})},s))]})},d={args:{cols:"4"},render:i=>e.jsxs(t,{...i,children:[o.slice(0,1).map(({id:s,image:r,alt:a})=>e.jsx(t.Image,{children:e.jsx("img",{src:r,alt:a})},s)),e.jsx(t.Image,{colSpan:"3",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"https://picsum.photos/id/74/1200/800",alt:"test"})}),o.slice(1,6).map(({id:s,image:r,alt:a})=>e.jsx(t.Image,{children:e.jsx("img",{src:r,alt:a})},s))]})},u={args:{cols:"4"},render:i=>e.jsxs(t,{...i,children:[e.jsx(t.Image,{colSpan:"2",rowSpan:"2",title:"Overlay Image Title",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/143/600/400",alt:"test"})}),e.jsx(t.Image,{colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",link:"https://github.com/cuweb/rds",children:e.jsx("img",{src:"https://picsum.photos/id/572/600/400",alt:"test"})}),o.slice(2,6).map(({id:s,image:r,alt:a})=>e.jsx(t.Image,{children:e.jsx("img",{src:r,alt:a})},s))]})};var I,h,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    return <ImageGrid {...args}>
        {imageData.slice(0, setCols).map(({
        id,
        image,
        alt
      }) => <ImageGrid.Image key={id}>
            <img src={image} alt={alt} />
          </ImageGrid.Image>)}
      </ImageGrid>;
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,v,G;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    cols: '4'
  },
  render: args => <ImageGrid {...args}>
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
}`,...(G=(v=c.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var y,b,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
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
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,w,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
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
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const V=["Primary","ColSpan2","ColSpan3","StackedTwoFour"];export{c as ColSpan2,d as ColSpan3,n as Primary,u as StackedTwoFour,V as __namedExportsOrder,_ as default};
