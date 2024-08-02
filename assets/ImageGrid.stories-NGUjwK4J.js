import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as B,g as D,c as _,b as $,d as V}from"./optionClasses-BBJ5-s7M.js";import{u as W}from"./useLinkContext-Bz4KtVj9.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const N=({children:t,colSpan:r="1",rowSpan:m="1",title:a,content:i,link:l})=>{const n=W();return e.jsxs("div",{className:`relative overflow-hidden ${B[r]} ${D[m]} rounded-lg bg-cu-black-200`,children:[t,(a||i)&&e.jsx("div",{className:"bg-cu-black-900/80 text-white absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-md line-clamp-2",children:l?e.jsxs(n,{href:l,className:"cursor-pointer block",children:[a&&a,i&&i]}):e.jsxs(e.Fragment,{children:[a&&a,i&&i]})})]})};N.__docgenInfo={description:"",methods:[],displayName:"ImageGridItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof rdsColSpan",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},rowSpan:{required:!1,tsType:{name:"union",raw:"keyof typeof rdsRowSpan",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'1'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};const F=({children:t,maxWidth:r="5xl",gridGap:m="5",cols:a="3"})=>e.jsx("div",{className:`cu-imagegrid cu-imagegrid-${a} grid
        ${_[a]}
        ${$[r]} ${V[m]}
      `,children:t}),s=Object.assign(F,{Item:N});F.__docgenInfo={description:"",methods:[],displayName:"ImageGridWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'5xl' | '7xl'",elements:[{name:"literal",value:"'5xl'"},{name:"literal",value:"'7xl'"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},gridGap:{required:!1,tsType:{name:"union",raw:"'0' | '5' | '10'",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'5'"},{name:"literal",value:"'10'"}]},description:"",defaultValue:{value:"'5'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"'2' | '3' | '4'",elements:[{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"}]},description:"",defaultValue:{value:"'3'",computed:!1}}}};const I=[{id:1,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement",span:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"},{id:2,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement"},{id:3,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement"},{id:4,image:"https://picsum.photos/640/400",link:"#",alt:"Image requirement",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"}],J={title:"Components/ImageGrid",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},c={render:t=>e.jsx(s,{...t,children:I.slice(0,3).map(({id:r,link:m,title:a,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:a,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},g={args:{cols:"4"},render:t=>e.jsx(s,{...t,children:I.slice(0,4).map(({id:r,link:m,title:a,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:a,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},o={args:{cols:"2"},render:t=>e.jsx(s,{...t,children:I.slice(0,2).map(({id:r,link:m,title:a,content:i,image:l,alt:n})=>e.jsx(s.Item,{title:a,content:i,link:m,children:e.jsx("img",{src:l,alt:n})},r))})},p={args:{cols:"4"},render:t=>e.jsxs(s,{...t,children:[e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})},d={args:{cols:"4"},render:t=>e.jsxs(s,{...t,children:[e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{colSpan:"3",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})},u={args:{cols:"4"},render:t=>e.jsxs(s,{...t,children:[e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Bluefest 30",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{colSpan:"2",rowSpan:"2",title:"Ottawa Tulip Festival",content:"Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!",children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})}),e.jsx(s.Item,{children:e.jsx("img",{src:"./sample-imgs/news-img.jpg",alt:"test"})})]})};var j,w,x;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var G,f,h;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var q,y,b;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,P,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var L,O,R;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const K=["Default","FourColumns","TwoColumns","ColSpan2","ColSpan3","StackedTwoFour"];export{p as ColSpan2,d as ColSpan3,c as Default,g as FourColumns,u as StackedTwoFour,o as TwoColumns,K as __namedExportsOrder,J as default};
