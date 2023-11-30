import{j as a}from"./jsx-runtime-7ce7b810.js";import{d as p,g}from"./optionClasses-8b995f37.js";const e={baseBg:"flex items-center justify-center mx-auto px-4 mb-6 overflow-hidden md:px-8 md:mb-12 rounded-xl not-contained not-prose",noImage:"py-20 bg-cu-black-50",imageBg:"relative py-24 bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48",imageOverlay:"absolute w-full h-full bg-black",content:"relative z-10 flex flex-col items-center w-full gap-5 max-w-7xl md:gap-10",header:"font-semibold text-center",headerOne:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",headerTwo:"text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"},s=({children:t,title:n,image:l,headerType:i="h2",maxWidth:d="max",opacity:u=70,focalPointX:m="50",focalPointY:o="50"})=>{const c={backgroundImage:`url(${l})`,backgroundPosition:`${m}% ${o}%`},x=l?e.imageBg:e.noImage,r=l?"text-white":"text-cu-black-700";return a.jsxs("div",{style:c,className:`${e.baseBg} ${p[d]} ${x}`,children:[l&&a.jsx("div",{className:`${e.imageOverlay} ${g[u]}`}),a.jsxs("div",{className:e.content,children:[i==="h1"&&a.jsx("h1",{className:`${e.header} ${e.headerOne} ${r}`,children:n}),i==="h2"&&a.jsx("h2",{className:`${e.header} ${e.headerTwo} ${r}`,children:n}),t]})]})};try{s.displayName="WideImage",s.__docgenInfo={description:"",displayName:"WideImage",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},maxWidth:{defaultValue:{value:"max"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'},{value:'"max"'}]}},opacity:{defaultValue:{value:"70"},description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"40"},{value:"50"},{value:"60"},{value:"70"},{value:"80"}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}}}}}catch{}export{s as W};
//# sourceMappingURL=WideImage-d8423cc4.js.map
