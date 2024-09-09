import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{m as C}from"./propClasses-Im8HJTiC.js";import{S as c}from"./Section-CO2ge5vF.js";import{C as j}from"./Column-C-Kl8V-m.js";import{P}from"./PageHeader-Bj7phANz.js";import{C as a}from"./Card-DVbx-dk8.js";import{E as u}from"./Embed-NbKN7nPb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./getDate-BfMQ2h7Y.js";import"./parse-BUkWBRrt.js";import"./MapPinIcon-BRhUovLd.js";import"./index-B7Ff8Yhu.js";import"./iframe-z61afcXm.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const d=({children:i,maxWidth:o="7xl",imageUrl:l,imageZoom:s=0,focalPointX:n="50",focalPointY:m="50"})=>{const v={backgroundImage:`url(${l})`,backgroundPosition:`${n}% ${m}%`,transform:`scale(1.${s})`};return e.jsxs("section",{className:"cu-imagecover relative pt-4 md:pt-6 lg:pt-12 xl:pt-16 pb-24 md:pb-44 lg:pb-56 px-6 md:px-8 lg:px-10 bg-cover bg-no-repeat cu-no-browsers-edge not-contained",style:v,children:[e.jsx("div",{className:`relative ${C[o]} mx-auto z-30`,children:i}),e.jsx("div",{className:"absolute z-10 top-0 left-0 w-full h-full bg-white/85 bg-cu-waves-repeating-bottom-red bg-[length:195px] md:bg-[length:319px] lg:bg-[length:402px] bg-repeat-x bg-bottom"})]})};d.__docgenInfo={description:"",methods:[],displayName:"ImageCover",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'7xl'",computed:!1}},imageUrl:{required:!0,tsType:{name:"string"},description:""},imageZoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},focalPointX:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}},focalPointY:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}}}};const y=[{id:1,title:"Undergradaute Admissions",link:"#",image:"/data-images/attend-1-thumb.jpg",badge:"News",alt:"Image alt text",excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",date:"2022-12-23 10:27:31"},{id:2,title:"Gradaute Admissions",link:"#",image:"/data-images/attend-2-thumb.jpg",badge:"Research",alt:"Image alt text",excerpt:"Proin placerat non nisl sed ullamcorper ultrices.",date:"2022-12-14 10:27:31"},{id:3,title:"Continuin Studies",link:"#",image:"/data-images/attend-3-thumb.jpg",badge:"Story",alt:"Image alt text",excerpt:"Donec dolor sapien, aliquet eu nibh vel, laoreet aliquam arcu.",date:"2022-11-25 10:27:31"},{id:4,title:"Professional Development & Executive Education",link:"#",image:"/data-images/attend-4-thumb.jpg",badge:"Success",alt:"Image alt text",excerpt:"Proin placerat non nisl sed ullamcorper diam a lorem.",date:"2022-12-14 10:27:31"}],U={title:"Layouts/Image Cover",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={children:"",maxWidth:"7xl",imageUrl:"https://picsum.photos/id/516/1600/1200",imageZoom:0,focalPointX:"50",focalPointY:"50"};const r={args:{...t.args},render:i=>e.jsxs(d,{...i,children:[e.jsxs(c,{as:"div",maxWidth:"7xl",children:[e.jsx(P,{as:"h2",header:"Attend Carleton",size:"md"}),e.jsx(j,{cols:"4",maxWidth:"7xl",children:y.slice(0,4).map(({id:o,link:l,title:s,image:n,alt:m})=>e.jsxs(a,{noHover:!0,children:[e.jsx(a.Figure,{children:e.jsx("img",{src:n,alt:m,width:"200",height:"133"})}),e.jsx(a.Header,{title:s}),e.jsx(a.Footer,{children:e.jsx("a",{href:l,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},o))})]}),e.jsx(c,{as:"div",maxWidth:"7xl",children:e.jsx(u,{maxWidth:"7xl",children:e.jsx(u.YouTube,{title:"test",url:"https://www.youtube.com/watch?v=ZISHr6sPNCE"})})})]})};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Primary.args
  },
  render: args => <ImageCover {...args}>
      <Section as="div" maxWidth="7xl">
        <PageHeader as="h2" header="Attend Carleton" size="md" />
        <Column cols="4" maxWidth="7xl">
          {PromoData.slice(0, 4).map(({
          id,
          link,
          title,
          image,
          alt
        }) => <Card key={id} noHover>
              <Card.Figure>
                <img src={image} alt={alt} width="200" height="133" />
              </Card.Figure>
              <Card.Header title={title} />
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  More info
                </a>
              </Card.Footer>
            </Card>)}
        </Column>
      </Section>
      <Section as="div" maxWidth="7xl">
        <Embed maxWidth="7xl">
          <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=ZISHr6sPNCE" />
        </Embed>
      </Section>
    </ImageCover>
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const L=["Primary","WithChildren"];export{t as Primary,r as WithChildren,L as __namedExportsOrder,U as default};
