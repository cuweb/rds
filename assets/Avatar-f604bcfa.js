import{a as g,F as b,j as f}from"./jsx-runtime-9d2cd5de.js";import{d as w,e as k,f as _}from"./optionClasses-9f612ec7.js";const s={core:"not-prose inline-block bg-cu-black-50 text-cu-black-800 overflow-hidden focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2","no-image":"bg-cu-black-100 flex items-center justify-center font-semibold",shadow:"shadow-lg"},p={xs:"text-xs h-8 w-8",sm:"text-base h-16 w-16",md:"text-lg h-24 w-24",lg:"text-2xl h-32 w-32",xl:"text-4xl h-40 w-40","2xl":"text-6xl h-48 w-48","4xl":"text-7xl h-56 w-56"},x=({size:o="xl",rounded:n,borderWidth:u,borderColor:i,hasShadow:h,user:$,onClick:y})=>{const{firstName:e,lastName:a,image:t}=$;let l;e&&a?l=`${e.split("")[0]}${a.split("")[0]}`:e?l=`${e.split("")[0]}`:a?l=`${a.split("")[0]}`:l="CU";const d=h?s.shadow:"",c=n?w[n]:"",m=u?k[u]:"",r=i?_[i]:"",v=y?"cursor-pointer":"";return g(b,{children:[t&&f("img",{className:`${s.core} ${p[o]} ${c} ${m} ${r} ${r} ${d} ${v}`,src:t.src,alt:t.alt||`Avatar of ${e} ${a}`,"aria-hidden":"true"}),!t&&f("div",{className:`${s.core} ${s["no-image"]} ${p[o]} ${c} ${m} ${r} ${r} ${d} ${v}`,children:l})]})};try{x.displayName="Avatar",x.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'},{value:'"sm"'},{value:'"xs"'},{value:'"md"'},{value:'"2xl"'},{value:'"4xl"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"lg"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"4"'},{value:'"8"'}]}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"grey"'},{value:'"black"'},{value:'"red"'},{value:'"dark-grey"'}]}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"UserInfoType"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{x as A};
//# sourceMappingURL=Avatar-f604bcfa.js.map
