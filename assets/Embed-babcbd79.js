import{j as l}from"./jsx-runtime-7ce7b810.js";import{d as p}from"./optionClasses-c898b830.js";const o={base:"relative w-full pb-[56.25%] overflow-hidden border border-cu-black-100",powerBi:"absolute top-0 left-0 w-full h-full",kaltura:"absolute top-0 left-0 w-full h-full"},n=({title:e,url:a})=>l.jsx("iframe",{title:e,src:a,className:o.powerBi});n.displayName="Embed.PowerBi";try{Embed.PowerBi.displayName="Embed.PowerBi",Embed.PowerBi.__docgenInfo={description:"",displayName:"Embed.PowerBi",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const u=({title:e,url:a})=>{let i="",r="";if(a){const d=a.split("/");r=d[d.length-1],i=`https://mediaspace.carleton.ca/embed/secure/iframe/entryId/${r}/uiConfId/36153741/st/0`}return l.jsx("iframe",{id:`kmsembed-${r}`,title:e,src:i,className:`kmsembed ${o.kaltura}`,allowFullScreen:!0,allow:"autoplay *; fullscreen *; encrypted-media *",referrerPolicy:"no-referrer-when-downgrade",sandbox:"allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"})};u.displayName="Embed.Kaltura";try{Embed.Kaltura.displayName="Embed.Kaltura",Embed.Kaltura.__docgenInfo={description:"",displayName:"Embed.Kaltura",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}}}catch{}const t=({children:e,maxWidth:a="5xl"})=>l.jsx("figure",{className:`not-contained mx-auto ${p[a]}`,children:l.jsx("div",{className:`${o.base}`,children:e})}),s=Object.assign(t,{PowerBi:n,Kaltura:u});try{t.displayName="EmbedWrapper",t.__docgenInfo={description:"",displayName:"EmbedWrapper",props:{maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}}}}}catch{}try{s.displayName="Embed",s.__docgenInfo={description:"",displayName:"Embed",props:{maxWidth:{defaultValue:{value:"5xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}}}}}catch{}export{s as E};
//# sourceMappingURL=Embed-babcbd79.js.map
