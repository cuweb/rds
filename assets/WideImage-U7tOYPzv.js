import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{B as b}from"./Button-BURiWGZI.js";import{P as y}from"./PageHeader-C4-CI7At.js";const c=({buttonText:l="Submit Email"})=>e.jsxs("div",{className:"w-full max-w-xl space-y-5 cu-wideimage-signup",children:[e.jsxs("div",{className:"flex gap-2.5",children:[e.jsx("label",{htmlFor:"email",className:"sr-only",children:"Enter you email address"}),e.jsx("input",{type:"text",id:"email",name:"email",required:!0,placeholder:"Enter you email address",className:"flex-1 rounded px-3.5 py-2 focus:ring-1 focus:ring-inset"}),e.jsx(b,{title:l||"Subscribe"})]}),e.jsxs("div",{className:"flex items-start flex-none gap-2 ml-1 text-left",children:[e.jsx("input",{name:"favcharacters",id:"optin",type:"checkbox",className:"mt-0.5 border rounded-sm",value:"name"}),e.jsxs("label",{htmlFor:"optin",className:"text-sm font-light",children:["I agree to receive email from Carleton University. Read our"," ",e.jsx("a",{className:"font-bold border-b border-white border-px",href:"https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/",target:"_blank",rel:"noreferrer",children:"Privacy Statement"}),"."]})]})]});c.displayName="WideImage.Signup";c.__docgenInfo={description:"",methods:[],displayName:"WideImage.Signup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Submit Email'",computed:!1}}}};const u=Array.from({length:21},(l,t)=>60+t),v=(l="",t,s)=>({backgroundImage:`url(${l})`,backgroundPosition:`${t}% ${s}%`}),w=l=>({opacity:`0.${l}`}),j=()=>{window.scroll({top:document.body.offsetHeight,left:0,behavior:"smooth"})},N=(l,t)=>t&&l==="image"?"relative bg-opacity-50 bg-cover bg-cu-black-50":l==="dark"?"bg-cu-black-900":"bg-cu-black-50",d=({children:l,title:t,image:s,headerType:r="h2",opacity:n=70,focalPointX:m=50,focalPointY:p=50,isType:a="light",hasScroll:f,hasWave:o})=>{u.includes(n)||console.warn(`Invalid opacity value: ${n}. It should be one of ${u.join(", ")}.`);const g=v(s,m,p),x=w(n),h=N(a,s);let i;switch(a){case"light":case"dark":i="pt-10 pb-12";break;case"image":i="py-24 md:py-28 lg:py-36 xl:py-48";break;default:i="py-10 pb-12";break}return o&&a==="image"&&s?i="pt-24 pb-32 md:pt-28 md:pb-44 lg:pt-36 lg:pb-60 xl:pt-48 xl:pb-72":o&&(i="pt-20 pb-24 md:pb-32 lg:pb-40 xl:pb-48"),e.jsxs("div",{style:a==="image"?g:void 0,className:`cu-wideimage relative flex items-center justify-center mx-auto px-8 overflow-hidden md:px-16 rounded-xl not-prose my-6 md:my-12 first:mt-0 ${h} ${i}`,children:[o&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute bottom-0 w-full z-[1]",fill:"none",viewBox:"0 0 1280 312",children:[e.jsx("path",{fill:"#fff",d:"M26.412 315.608c-.602-.268-6.655-2.412-13.524-4.769a1943.84 1943.84 0 0 1-14.682-5.144l-2.276-.858v-5.358c0-4.876.086-5.358.773-5.09 1.674.643 21.38 5.84 34.646 9.109 14.682 3.59 28.935 6.858 45.936 10.449l9.874 2.089H57.322c-16.4 0-30.31-.16-30.91-.428ZM460.019 315.233c42.974-10.074 75.602-19.88 132.443-39.867 76.16-26.791 152.063-57.709 222.385-90.663 16.7-7.823 21.336-10.074 44.262-21.273 85.004-41.688 134.719-64.193 195.291-88.413 66.55-26.577 145.2-53.584 194.27-66.765C1258.5 5.626 1281.34 0 1282.24 0c.17 0 .34 27.596.34 61.3v61.299l-2.23.375c-84.7 13.718-165.93 35.955-310.736 84.931-46.494 15.753-65.427 22.076-96.166 32.15-9.102 3-24.814 8.198-34.989 11.574-107.543 35.954-153.008 50.422-196.626 62.639l-6.74 1.876-89.126-.054c-78.135-.054-88.782-.161-85.948-.857ZM729.628 312.875c33.229-10.985 69.248-23.523 127.506-44.207 118.705-42.223 164.596-57.709 217.446-73.302 2.62-.75 8.29-2.465 12.67-3.751 56.19-16.772 126.94-33.597 184.17-43.671 5.07-.91 9.66-1.768 10.22-1.875l.94-.161v170.236l-281.28-.054H719.968l9.66-3.215ZM246.864 313.411c-65.041-2.251-143.047-12.11-208.432-26.256-18.375-3.965-41.73-9.538-42.202-10.074-.171-.214-.257-21.38-.214-47.046l.129-46.618 6.654 3.697c57.313 32.043 118.491 56.531 197.699 79.143 40.313 11.521 83.459 18.058 138.669 21.059 15.584.857 65.685.857 81.14 0 33.744-1.876 61.306-4.93 88.396-9.806 6.396-1.126 11.634-1.983 11.722-1.929.255.375-20.48 7.769-30.999 11.038-28.592 8.948-59.288 15.646-91.873 20.147-26.36 3.59-50.015 5.627-78.35 6.698-15.584.59-55.209.59-72.339-.053Z"}),e.jsx("path",{fill:"#fff",d:"M-3.066 295.067 32.06 304.1v9.033H-3.066v-18.066Z"})]}),s&&a==="image"&&e.jsx("div",{className:"absolute top-0 w-full h-screen bg-black",style:x}),e.jsxs("div",{className:`relative z-[2] max-w-4xl w-full flex flex-col items-center gap-2 cu-wideimage-${a} cu-zero-first-last`,children:[e.jsx(y,{header:t,as:r,size:r==="h1"?"lg":"md",isWhite:a!=="light",isCenter:!0,noUnderline:!0,children:l}),f&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"w-12 h-12 cursor-pointer fill-white hover:bg-cu-red rounded-full p-2 pt-2.5",onClick:j,children:e.jsx("path",{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"})})})]}),a==="dark"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute bottom-0 w-full opacity-10",fill:"none",viewBox:"0 0 1280 260",children:[e.jsx("g",{filter:"url(#a)",children:e.jsx("ellipse",{cx:"646",cy:"260",fill:"#fff",rx:"640",ry:"200"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"a",width:"1400",height:"520",x:"-54",y:"0",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{result:"effect1_foregroundBlur_6_9",stdDeviation:"30"})]})})]})]})},$=Object.assign(d,{Signup:c});d.displayName="WideImage";d.__docgenInfo={description:"",methods:[],displayName:"WideImage",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},headerType:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},opacity:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof opacityValues)[number]"},description:"",defaultValue:{value:"70",computed:!1}},focalPointX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},focalPointY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},isType:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'image'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'image'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},hasWave:{required:!1,tsType:{name:"boolean"},description:""},hasScroll:{required:!1,tsType:{name:"boolean"},description:""}}};export{$ as W};
