import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{p,f as o,i as h}from"./index-bkt57PaO.js";import{g as u,M as z,C as O,a as U}from"./index-9aHumogv.js";import{B as y}from"./Badge-Zsxsg5ql.js";import{C as G}from"./ChevronRightIcon-slJogYDx.js";const l={base:"not-prose relative overflow-hidden @container bg-white",content:"flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5",header:"text-lg font-semibold text-cu-black line-clamp-3 group-hover:text-cu-red @xl:md:text-xl @3xl:lg:text-2xl",excerpt:"text-sm text-cu-black-900 md:text-base @xl:md:text-lg",more:"font-semibold text-cu-red",badges:"mt-auto",arrowArea:"absolute -mt-3 top-1/2 right-4",arrowIcon:"flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red"},J={baseLink:"group hover:bg-slate-50",headerLink:" "},f={figure:"flex-none rounded-md max-w-[40%] @xl:md:max-w-[25%]"},a={wrapper:"flex flex-col flex-wrap gap-2",item:"text-sm text-cu-black-600 @2xl:md:text-base",itemLarge:"text-base text-cu-black-600 @sm:md:text-lg",italic:"italic",bold:"font-semibold",alignIcon:"flex",redIcon:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300",wrap:"break-all"},c={dateBox:"h-20 w-20 @4xl:lg:h-32 @4xl:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex",dateBoxMonth:"block text-xs @4xl:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white",dateBoxDay:"block text-2xl @4xl:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white"},L=({children:e})=>t.jsx("figure",{className:`cu-figure ${f.figure}`,children:e});L.displayName="Listing.Figure";try{Listing.Figure.displayName="Listing.Figure",Listing.Figure.__docgenInfo={description:"",displayName:"Listing.Figure",props:{}}}catch{}const N=({initials:e})=>t.jsx("figure",{className:`cu-figure ${f.figure}`,children:t.jsxs("div",{className:"relative",children:[t.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),t.jsx("div",{className:"absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:e})]})});N.displayName="Listing.Initials";try{Listing.Initials.displayName="Listing.Initials",Listing.Initials.__docgenInfo={description:"",displayName:"Listing.Initials",props:{initials:{defaultValue:null,description:"",name:"initials",required:!0,type:{name:"string"}}}}}catch{}const M=({children:e,isSmall:s})=>{const n=s?"cu-listing--small":"";return t.jsx("div",{className:`${l.content} ${n}`,children:e})};M.displayName="Listing.Content";try{Listing.Content.displayName="Listing.Content",Listing.Content.__docgenInfo={description:"",displayName:"Listing.Content",props:{isSmall:{defaultValue:null,description:"",name:"isSmall",required:!1,type:{name:"boolean"}}}}}catch{}const b=({startDate:e,endDate:s})=>{const n=p(e,"yyyy-MM-dd HH:mm:ss",new Date),i=p(s,"yyyy-MM-dd HH:mm:ss",new Date),m=o(n,"MMM"),g=u(n),r=!h(n,i);return t.jsx("h3",{className:c.dateBox,children:r?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:c.dateBoxMonth,children:"Multi"}),t.jsx("span",{className:c.dateBoxDay,children:"Day"})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:c.dateBoxMonth,children:m}),t.jsx("span",{className:c.dateBoxDay,children:g})]})})};b.displayName="Listing.DateBox";try{Listing.DateBox.displayName="Listing.DateBox",Listing.DateBox.__docgenInfo={description:"",displayName:"Listing.DateBox",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}}}}}catch{}const j=({text:e})=>t.jsx("h3",{className:l.header,children:e});j.displayName="Listing.Header";try{Listing.Header.displayName="Listing.Header",Listing.Header.__docgenInfo={description:"",displayName:"Listing.Header",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const D=({text:e})=>t.jsxs("p",{className:l.excerpt,children:[e.length>170?`${e.substring(0,170)}...`:e,t.jsx("span",{className:l.more,children:" Read more"})]});D.displayName="Listing.Excerpt";try{Listing.Excerpt.displayName="Listing.Excerpt",Listing.Excerpt.__docgenInfo={description:"",displayName:"Listing.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const I=({tags:e})=>{var s,n;return t.jsxs("div",{className:l.badges,children:[(s=e==null?void 0:e.audience)==null?void 0:s.map(i=>t.jsx(y,{children:i.name},i.id)),(n=e==null?void 0:e.category)==null?void 0:n.map(i=>t.jsx(y,{children:i.name},i.id))]})};I.displayName="Listing.Badges";try{Listing.Badges.displayName="Listing.Badges",Listing.Badges.__docgenInfo={description:"",displayName:"Listing.Badges",props:{tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const v=({date:e})=>{const s=e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return t.jsx("time",{className:`${a.item} ${a.italic}`,children:s})};v.displayName="Listing.PostMeta";try{Listing.PostMeta.displayName="Listing.PostMeta",Listing.PostMeta.__docgenInfo={description:"",displayName:"Listing.PostMeta",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const $=({startDateTime:e,endDateTime:s,onCampus:n,onCampusBuilding:i,onCampusRoomNumber:m,eventAddress:g})=>{const r=p(e,"yyyy-MM-dd HH:mm:ss",new Date),B=o(r,"MMMM"),k=u(r),q=r.getHours()%12||12,H=o(r,"mm"),V=o(r,"a"),d=p(s,"yyyy-MM-dd HH:mm:ss",new Date),C=o(d,"MMMM"),E=u(d),P=d.getHours()%12||12,S=o(d,"mm"),F=o(d,"a"),T=`${q}:${H} ${V}`,A=`${P}:${S} ${F}`,R=h(r,d),W=()=>R?t.jsxs(t.Fragment,{children:[t.jsx(U,{className:a.redIcon,"aria-hidden":"true"}),`${T} — ${A}`]}):t.jsxs(t.Fragment,{children:[t.jsx(O,{className:a.redIcon,"aria-hidden":"true"}),`${B} ${k} — ${C} ${E}`]});return t.jsxs("ul",{className:a.wrapper,children:[t.jsx("li",{className:`${a.item} ${a.alignIcon}`,children:W()}),t.jsxs("li",{className:`${a.item} ${a.alignIcon}`,children:[t.jsx(z,{className:a.redIcon,"aria-hidden":"true"}),n?m+" "+i:g]})]})};$.displayName="Listing.EventMeta";try{Listing.EventMeta.displayName="Listing.EventMeta",Listing.EventMeta.__docgenInfo={description:"",displayName:"Listing.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const w=({jobTitle:e,email:s,phone:n})=>t.jsxs("ul",{className:a.wrapper,children:[e&&t.jsx("li",{className:`${a.itemLarge} ${a.italic}`,children:e}),s&&t.jsx("li",{className:a.item,children:t.jsx("strong",{className:`${a.bold} ${a.wrap}`,children:s})}),n&&t.jsx("li",{className:a.item,children:n})]});w.displayName="Listing.PeopleMeta";try{Listing.PeopleMeta.displayName="Listing.PeopleMeta",Listing.PeopleMeta.__docgenInfo={description:"",displayName:"Listing.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const x=({children:e,noLink:s})=>{const n=s?"cu-listing--nolink  p-8":J.baseLink;return t.jsxs("li",{className:`cu-listing ${l.base} ${n}`,children:[e,!s&&t.jsx("div",{className:l.arrowArea,children:t.jsx(G,{className:l.arrowIcon,"aria-hidden":"true"})})]})},_=Object.assign(x,{Figure:L,Content:M,DateBox:b,Header:j,Excerpt:D,Badges:I,PostMeta:v,EventMeta:$,PeopleMeta:w,Initials:N});try{x.displayName="ListingWrapper",x.__docgenInfo={description:"",displayName:"ListingWrapper",props:{noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="Listing",_.__docgenInfo={description:"",displayName:"Listing",props:{noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as L};
