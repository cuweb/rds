import{j as e}from"./jsx-runtime-B9B14buI.js";const t=({children:a,imageUrl:l,imageZoom:s=0,focalPointX:d=50,focalPointY:m=50})=>{const r={backgroundImage:`url(${l})`,backgroundPosition:`${d}% ${m}%`,transform:`scale(1.${s})`};return e.jsx("div",{className:"cu-testimonial md:py-8",children:e.jsx("div",{className:"bg-cu-black-50 rounded-xl",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col-reverse gap-5 md:gap-10 lg:gap-16 items-center md:pl-8 md:pr-12 md:flex-row md:items-stretch",children:[e.jsx("div",{className:"w-full md:-my-8 hidden md:block md:flex-[0_0_30%] bg-cu-black-25 rounded-lg bg-cover",style:r}),e.jsx("div",{className:"w-full md:max-w-none md:flex-auto py-6 px-6 md:px-0 md:py-16 lg:py-20",children:a})]})})})};t.__docgenInfo={description:"",methods:[],displayName:"Testimonial",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},imageZoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},focalPointX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},focalPointY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}}}};export{t as T};