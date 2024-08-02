import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as B,r as D,g as _,m as $,a as V}from"./propClasses-CZStXSR9.js";import{u as W}from"./useLinkContext-Bz4KtVj9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const F=({children:a,colSpan:r="1",rowSpan:m="1",title:t,content:i,link:l})=>{const n=W();return e.jsxs("div",{className:`relative overflow-hidden ${B[r]} ${D[m]} rounded-lg bg-cu-black-200`,children:[a,(t||i)&&e.jsx("div",{className:"bg-cu-black-900/80 text-white absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-md line-clamp-2",children:l?e.jsxs(n,{href:l,className:"cursor-pointer block",children:[t&&t,i&&i]}):e.jsxs(e.Fragment,{children:[t&&t,i&&i]})})]})};F.__docgenInfo={description:"",methods:[],displayName:"ImageGridItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof colSpanClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},rowSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof rowSpanClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};const R=({children:a,maxWidth:r="5xl",gridGap:m="5",cols:t="3"})=>e.jsx("div",{className:`cu-imagegrid cu-imagegrid-${t} grid
        ${_[t]}
        ${$[r]} ${V[m]}
      `,children:a}),s=Object.assign(R,{Item:F});R.__docgenInfo={description:"",methods:[],displayName:"ImageGridWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof gridColumnClasses",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"},{name:"literal",value:"'1/3'"},{name:"literal",value:"'2/3'"}]},description:"",defaultValue:{value:"'3'",computed:!1}},gridGap:{required:!1,tsType:{name:"union",raw:"keyof typeof gridGapClasses",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'5'",computed:!1}}}};const I=[{id:1,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"}],K={title:"Components/ImageGrid",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},c={render:a=>e.jsx(s,{...a,children:I.slice(0,3).map(({id:r,link:m,title:t,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:t,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},g={args:{cols:"4"},render:a=>e.jsx(s,{...a,children:I.slice(0,4).map(({id:r,link:m,title:t,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:t,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},o={args:{cols:"2"},render:a=>e.jsx(s,{...a,children:I.slice(0,2).map(({id:r,link:m,title:t,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:t,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},p={args:{cols:"4"},render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})},d={args:{cols:"4"},render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{colSpan:"3",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})},u={args:{cols:"4"},render:a=>e.jsxs(s,{...a,children:[e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})};var j,x,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ImageGrid {...args}>
      {imageData.slice(0, 3).map(({
      id,
      link,
      title,
      content,
      image,
      alt
    }) => <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>)}
    </ImageGrid>
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var G,f,h;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
      {imageData.slice(0, 4).map(({
      id,
      link,
      title,
      content,
      image,
      alt
    }) => <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>)}
    </ImageGrid>
}`,...(h=(f=g.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,S,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: ({
    cols: '2'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
      {imageData.slice(0, 2).map(({
      id,
      link,
      title,
      content,
      image,
      alt
    }) => <ImageGrid.Item key={id} title={title} content={content} link={link}>
          <img src={image} alt={alt} />
        </ImageGrid.Item>)}
    </ImageGrid>
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,q,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
      <ImageGrid.Item colSpan="2" rowSpan="2" title="Ottawa Bluefest 30" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!">
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
}`,...(C=(q=p.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var b,T,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item colSpan="3" rowSpan="2" title="Ottawa Bluefest 30" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!">
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var L,O,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: ({
    cols: '4'
  } as ImageGridProps),
  render: args => <ImageGrid {...args}>
      <ImageGrid.Item colSpan="2" rowSpan="2" title="Ottawa Bluefest 30" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!">
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item colSpan="2" rowSpan="2" title="Ottawa Tulip Festival" content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!">
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
      <ImageGrid.Item>
        <img src="./sample-imgs/news-img.jpg" alt="test" />
      </ImageGrid.Item>
    </ImageGrid>
}`,...(N=(O=u.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const M=["Default","FourColumns","TwoColumns","ColSpan2","ColSpan3","StackedTwoFour"];export{p as ColSpan2,d as ColSpan3,c as Default,g as FourColumns,u as StackedTwoFour,o as TwoColumns,M as __namedExportsOrder,K as default};
