import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{m as b,c as T}from"./propClasses-BCnilxRx.js";const s={underline:"relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-6",media:"relative flex-1 w-full h-full bg-no-repeat bg-cover min-h-[360px] lg:min-h-[220px]"},m=({children:n,title:a,headerType:t="h2",isCenter:i,imageUrl:l,contentWidth:r=50,imageZoom:o=0,focalPointX:x="50",focalPointY:g="50",hasMobileImage:h})=>{const v=l?"md:mb-4":"",y=i?"justify-center":"";let u,c,f,p;return l&&(u=s.media,c=h?"":"hidden lg:block",u&&(f={flex:`0 0 ${r}%`},p={backgroundImage:`url(${l})`,backgroundPosition:`${x}% ${g}%`,transform:`scale(1.${o})`})),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content md:pt-4 ${v} ${y} ${t==="h1"?"cu-prose cu-prose-light":"cu-prose"}`,style:f,children:[a&&t==="h1"&&e.jsx("h1",{className:`font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose ${s.underline}`,children:a}),a&&t==="h2"&&e.jsx("h2",{className:`font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-cu-black-700 not-prose ${s.underline}`,children:a}),n]}),l&&e.jsx("div",{className:`relative flex-1 overflow-hidden rounded ${c}`,children:e.jsx("div",{className:s.media,style:p})})]})};m.displayName="TextImage.Content";m.__docgenInfo={description:"",methods:[],displayName:"TextImage.Content",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},headerType:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},isCenter:{required:!1,tsType:{name:"boolean"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},imageZoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},focalPointX:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}},focalPointY:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50'",computed:!1}},hasMobileImage:{required:!1,tsType:{name:"boolean"},description:""}}};const d=({children:n,maxWidth:a="5xl",flexRow:t="lg",flipX:i,flipYsm:l})=>{const r=i?"lg:flex-row-reverse":"",o=l?"flex-col-reverse sm:flex-row":"";return e.jsx("div",{className:`cu-textimage cu-component not-contained flex flex-col lg:flex-row gap-6 mx-auto cu-textimage lg:gap-10 ${b[a]} ${T[t]} ${r} ${o}`,children:n})},$=Object.assign(d,{Content:m});d.displayName="TextImage";d.__docgenInfo={description:"",methods:[],displayName:"TextImage",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof maxWidthClasses",elements:[{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'5xl'"},{name:"literal",value:"'6xl'"},{name:"literal",value:"'7xl'"},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},flexRow:{required:!1,tsType:{name:"union",raw:"keyof typeof flexRowClasses",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},flipX:{required:!1,tsType:{name:"boolean"},description:""},flipYsm:{required:!1,tsType:{name:"boolean"},description:""}}};export{$ as T};
