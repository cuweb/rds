import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{h as z,l as C}from"./optionClasses-ccrz1VfO.js";import{B as a}from"./Button-vGHki37U.js";import{B as o}from"./ButtonGroup-34C6VEr-.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Icon-WcGhYRcv.js";import"./ChevronDownIcon-WJjzl-Lh.js";const r={baseBg:"flex items-center justify-center mx-auto px-4 mb-6 overflow-hidden md:px-8 md:mb-12 rounded-xl not-contained not-prose",noImage:"py-20 bg-cu-black-50",imageBg:"relative py-24 bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48",imageOverlay:"absolute w-full h-full bg-black",content:"relative z-10 flex flex-col items-center w-full gap-5 max-w-7xl md:gap-10",header:"font-semibold text-center",headerOne:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",headerTwo:"text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"},m=({children:d,title:g,image:s,headerType:h="h2",maxWidth:V="max",opacity:H=70,focalPointX:P="50",focalPointY:E="50"})=>{const X={backgroundImage:`url(${s})`,backgroundPosition:`${P}% ${E}%`},Y=s?r.imageBg:r.noImage,x=s?"text-white":"text-cu-black-700";return e.jsxs("div",{style:X,className:`${r.baseBg} ${z[V]} ${Y}`,children:[s&&e.jsx("div",{className:`${r.imageOverlay} ${C[H]}`}),e.jsxs("div",{className:r.content,children:[h==="h1"&&e.jsx("h1",{className:`${r.header} ${r.headerOne} ${x}`,children:g}),h==="h2"&&e.jsx("h2",{className:`${r.header} ${r.headerTwo} ${x}`,children:g}),d]})]})};try{m.displayName="WideImage",m.__docgenInfo={description:"",displayName:"WideImage",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},maxWidth:{defaultValue:{value:"max"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"max"'},{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},opacity:{defaultValue:{value:"70"},description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"50"},{value:"40"},{value:"60"},{value:"70"},{value:"80"}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/Wide Image",component:m,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={title:"Wide image block with buttons and background image"};const n={args:{...t.args,headerType:"h1"}},l={args:{...t.args,children:e.jsxs(o,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",color:"dark-grey"})]})}},i={args:{...t.args,image:"https://picsum.photos/1600/700",children:e.jsxs(o,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",isType:"outline",color:"white"})]})}},u={args:{...t.args,headerType:"h1",children:e.jsxs(o,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",color:"dark-grey"})]})}},c={args:{...t.args,headerType:"h1",image:"https://picsum.photos/1600/700",children:e.jsxs(o,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",isType:"outline",color:"white"})]})}},p={args:{...t.args,image:"https://picsum.photos/1600/700",maxWidth:"5xl",children:e.jsxs(o,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",isType:"outline",color:"white"})]})}};var y,f,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,w,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerType: 'h1'
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var I,b,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
  }
}`,...(q=(b=l.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var N,T,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: 'https://picsum.photos/1600/700',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var $,k,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerType: 'h1',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var G,R,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerType: 'h1',
    image: 'https://picsum.photos/1600/700',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var S,_,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: 'https://picsum.photos/1600/700',
    maxWidth: '5xl',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const te=["Default","HeaderOne","WithButtons","BgImage","HeaderOneButtons","BgImageHeaderOne","Width5xl"];export{i as BgImage,c as BgImageHeaderOne,t as Default,n as HeaderOne,u as HeaderOneButtons,p as Width5xl,l as WithButtons,te as __namedExportsOrder,ee as default};
