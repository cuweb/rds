import{j as e}from"./jsx-runtime-7ce7b810.js";import{d as H,k as E}from"./optionClasses-6d59d7f7.js";import{B as r}from"./Button-6bb20ebc.js";import{B as c}from"./ButtonGroup-1dfe70f1.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-798e3e5e.js";import"./ChevronDownIcon-2780c6ad.js";const a={baseBg:"flex items-center justify-center mx-auto px-4 mb-6 overflow-hidden md:px-8 md:mb-12 rounded-xl not-contained not-prose",noImage:"py-20 bg-cu-black-50",imageBg:"relative py-24 bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48",imageOverlay:"absolute w-full h-full bg-black",content:"relative z-10 flex flex-col items-center w-full gap-5 max-w-7xl md:gap-10",header:"font-semibold text-center",headerOne:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",headerTwo:"text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"},d=({children:m,title:p,image:o,headerType:g="h2",maxWidth:R="max",opacity:S=70,focalPointX:A="50",focalPointY:D="50"})=>{const V={backgroundImage:`url(${o})`,backgroundPosition:`${A}% ${D}%`},P=o?a.imageBg:a.noImage,h=o?"text-white":"text-cu-black-700";return e.jsxs("div",{style:V,className:`${a.baseBg} ${H[R]} ${P}`,children:[o&&e.jsx("div",{className:`${a.imageOverlay} ${E[S]}`}),e.jsxs("div",{className:a.content,children:[g==="h1"&&e.jsx("h1",{className:`${a.header} ${a.headerOne} ${h}`,children:p}),g==="h2"&&e.jsx("h2",{className:`${a.header} ${a.headerTwo} ${h}`,children:p}),m]})]})};try{d.displayName="WideImage",d.__docgenInfo={description:"",displayName:"WideImage",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},maxWidth:{defaultValue:{value:"max"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'},{value:'"max"'}]}},opacity:{defaultValue:{value:"70"},description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"40"},{value:"50"},{value:"60"},{value:"70"},{value:"80"}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/Wide Image",component:d,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={title:"Wide image block with buttons and background image"};const s={args:{...t.args,headerType:"h1"}},l={args:{...t.args,children:e.jsxs(c,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{title:"Request Information",color:"dark-grey"})]})}},n={args:{...t.args,headerType:"h1",children:e.jsxs(c,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{title:"Request Information",color:"dark-grey"})]})}},i={args:{...t.args,image:"https://picsum.photos/1600/700",children:e.jsxs(c,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{title:"Request Information",isType:"outline",color:"white"})]})}},u={args:{...t.args,image:"https://picsum.photos/1600/700",maxWidth:"5xl",children:e.jsxs(c,{children:[e.jsx(r,{title:"Apply Now"}),e.jsx(r,{title:"Request Information",isType:"outline",color:"white"})]})}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,v,b;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerType: 'h1'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,w,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var q,N,W;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerType: 'h1',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
  }
}`,...(W=(N=n.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var $,k,T;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: 'https://picsum.photos/1600/700',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var O,_,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: 'https://picsum.photos/1600/700',
    maxWidth: '5xl',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const Q=["Default","HeaderOne","WithButtons","HeaderOneButtons","BgImage","Width5xl"];export{i as BgImage,t as Default,s as HeaderOne,n as HeaderOneButtons,u as Width5xl,l as WithButtons,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=WideImage.stories-c5553276.js.map
