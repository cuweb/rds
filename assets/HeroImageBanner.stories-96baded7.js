import{j as e}from"./jsx-runtime-7ce7b810.js";import{B as l}from"./Button-bad4dfeb.js";import{B as y}from"./ButtonGroup-1dfe70f1.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-163d2856.js";import"./optionClasses-c898b830.js";import"./ChevronDownIcon-2780c6ad.js";const o={baseBg:"flex items-center justify-center mx-auto mb-6 overflow-hidden md:mb-12 rounded-xl not-contained not-prose max-w-screen-2xl",noImage:"py-20 bg-cu-black-50",imageBg:"relative py-24 bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48",imageOverlay:"absolute w-full h-full bg-black/60"},t=({children:i,title:I,image:r,focalPointX:h="50",focalPointY:H="50"})=>{const b={backgroundImage:`url(${r})`,backgroundPosition:`${h}% ${H}%`},j=r?o.imageBg:o.noImage,v=r?"text-white":"text-cu-black-700";return e.jsxs("div",{style:b,className:`${o.baseBg} ${j}`,children:[r&&e.jsx("div",{className:o.imageOverlay}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-5 px-2 md:gap-10 md:px-4",children:[e.jsx("h2",{className:`text-4xl font-semibold md:text-5xl xl:text-6xl ${v}`,children:I}),i]})]})};try{t.displayName="HeroImageBanner",t.__docgenInfo={description:"",displayName:"HeroImageBanner",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}}}}}catch{}const P={title:"Components/Hero/Hero Image Banner",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={render:()=>e.jsx(t,{title:"Hero Image Banner"})},n={render:()=>e.jsx(t,{title:"Hero Image Banner",children:e.jsxs(y,{children:[e.jsx(l,{title:"Apply Now"}),e.jsx(l,{title:"Request Information",color:"dark-grey"})]})})},s={render:()=>e.jsx(t,{title:"Hero Image Banner",image:"https://picsum.photos/1600/700",children:e.jsxs(y,{children:[e.jsx(l,{title:"Apply Now"}),e.jsx(l,{title:"Request Information",isType:"outline",color:"white"})]})})};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <HeroImageBanner title="Hero Image Banner" />
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <HeroImageBanner title="Hero Image Banner">
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    </HeroImageBanner>
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,B,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <HeroImageBanner title="Hero Image Banner" image="https://picsum.photos/1600/700">
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
    </HeroImageBanner>
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const R=["Default","WithButton","HasImage"];export{a as Default,s as HasImage,n as WithButton,R as __namedExportsOrder,P as default};
//# sourceMappingURL=HeroImageBanner.stories-96baded7.js.map
