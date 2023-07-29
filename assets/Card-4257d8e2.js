import{j as a}from"./jsx-runtime-daf202a7.js";import{r as C}from"./index-ec8b93d8.js";import{R as J}from"./index-ac609b0f.js";import{p as y,f as i,i as N}from"./index-ee226d2b.js";import{g as _,M as K,C as Q,a as X}from"./index-65142971.js";import{B as Y}from"./Badge-fe05d228.js";const d={card:"not-prose relative flex flex-col cu-card overflow-hidden rounded-lg bg-white shadow-lg @container md:max-w-lg",link:"group duration-300 ease-in hover:scale-105 cursor-pointer",border:"border-l-8",content:"flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative",header:"text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl leading-6 @sm:md:leading-8",excerpt:"text-base text-cu-black-600",more:"font-semibold text-cu-red group-hover:text-cyan-600",badges:"pb-6 mt-auto px-7"},x={figure:"relative",round:"pt-8 pb-2 px-6"},s={wrapper:"space-y-1.5 @sm:md:space-y-2",item:"text-sm text-cu-black-600 @sm:md:text-base",itemLarge:"text-base text-cu-black-600 @sm:md:text-lg",italic:"italic",bold:"font-semibold text-cyan-600",alignIcon:"flex",redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},m={dateBox:"z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red",dateBoxMonth:"text-xs font-bold uppercase text-cu-red group-hover:text-white",dateBoxDay:"text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white"},g={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},u={header:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red @sm:md:text-4xl",desc:"text-base text-cu-black-600 @sm:md:text-lg",flexCol:"flex flex-col gap-2",flexColReverse:"flex flex-col-reverse gap-2"},b=({children:e,isRound:t})=>{const r=t?`cu-figure--round ${x.round}`:"";return a.jsx("figure",{className:`cu-figure ${r} ${x.figure}`,children:e})};b.displayName="Card.Figure";try{Card.Figure.displayName="Card.Figure",Card.Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const M=({source:e})=>{const[t,r]=C.useState(!1);return C.useEffect(()=>{r(!0)},[]),t?a.jsx("div",{className:g.container,children:a.jsx(J,{url:e,className:g.player,width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:g.container,children:a.jsx("p",{className:"hidden",children:"Loading video"})})};M.displayName="Card.Video";try{Card.Video.displayName="Card.Video",Card.Video.__docgenInfo={description:"",displayName:"Card.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const j=({children:e})=>a.jsx("div",{className:d.content,children:e});j.displayName="Card.Content";try{Card.Content.displayName="Card.Content",Card.Content.__docgenInfo={description:"",displayName:"Card.Content",props:{}}}catch{}const v=({startDate:e,endDate:t})=>{const r=y(e,"yyyy-MM-dd HH:mm:ss",new Date),l=y(t,"yyyy-MM-dd HH:mm:ss",new Date),c=i(r,"MMM"),p=_(r),n=!N(r,l);return a.jsx("div",{className:m.dateBox,children:n?a.jsxs(a.Fragment,{children:[a.jsx("p",{className:m.dateBoxMonth,children:"Multi"}),a.jsx("p",{className:m.dateBoxDay,children:"Day"})]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:m.dateBoxMonth,children:c}),a.jsx("p",{className:m.dateBoxDay,children:p})]})})};v.displayName="Card.DateBox";try{Card.DateBox.displayName="Card.DateBox",Card.DateBox.__docgenInfo={description:"",displayName:"Card.DateBox",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}}}}}catch{}const D=({text:e})=>a.jsx("h2",{className:d.header,children:e});D.displayName="Card.Header";try{Card.Header.displayName="Card.Header",Card.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const V=({text:e})=>a.jsxs("p",{className:d.excerpt,children:[e.length>170?`${e.substring(0,170)}...`:e,a.jsx("span",{className:d.more,children:" Read more"})]});V.displayName="Card.Excerpt";try{Card.Excerpt.displayName="Card.Excerpt",Card.Excerpt.__docgenInfo={description:"",displayName:"Card.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const $=({tags:e})=>{var t;return a.jsx("div",{className:d.badges,children:(t=e==null?void 0:e.category)==null?void 0:t.map(r=>a.jsx(Y,{children:r.name},r.id))})};$.displayName="Card.Badges";try{Card.Badges.displayName="Card.Badges",Card.Badges.__docgenInfo={description:"",displayName:"Card.Badges",props:{tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const I=({date:e})=>{const t=e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return a.jsx("time",{className:`${s.item} ${s.italic}`,children:t})};I.displayName="Card.PostMeta";try{Card.PostMeta.displayName="Card.PostMeta",Card.PostMeta.__docgenInfo={description:"",displayName:"Card.PostMeta",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const B=({startDateTime:e,endDateTime:t,onCampus:r,onCampusBuilding:l,onCampusRoomNumber:c,eventAddress:p})=>{const n=y(e,"yyyy-MM-dd HH:mm:ss",new Date),S=i(n,"MMMM"),E=_(n),H=n.getHours()%12||12,P=i(n,"mm"),R=i(n,"a"),o=y(t,"yyyy-MM-dd HH:mm:ss",new Date),F=i(o,"MMMM"),L=_(o),T=o.getHours()%12||12,A=i(o,"mm"),W=i(o,"a"),z=`${H}:${P} ${R}`,O=`${T}:${A} ${W}`,U=N(n,o),G=()=>U?a.jsxs(a.Fragment,{children:[a.jsx(X,{className:s.redIcon,"aria-hidden":"true"}),`${z} — ${O}`]}):a.jsxs(a.Fragment,{children:[a.jsx(Q,{className:s.redIcon,"aria-hidden":"true"}),`${S} ${E} — ${F} ${L}`]});return a.jsxs("ul",{className:s.wrapper,children:[a.jsx("li",{className:`${s.item} ${s.alignIcon}`,children:G()}),a.jsxs("li",{className:`${s.item} ${s.alignIcon}`,children:[a.jsx(K,{className:s.redIcon,"aria-hidden":"true"}),r?c+" "+l:p]})]})};B.displayName="Card.EventMeta";try{Card.EventMeta.displayName="Card.EventMeta",Card.EventMeta.__docgenInfo={description:"",displayName:"Card.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const q=({jobTitle:e,email:t,phone:r})=>a.jsxs("ul",{className:s.wrapper,children:[e&&a.jsx("li",{className:`${s.item} ${s.itemLarge} ${s.italic}`,children:e}),t&&a.jsx("li",{className:s.item,children:a.jsx("strong",{className:s.bold,children:t})}),r&&a.jsx("li",{className:s.item,children:r})]});q.displayName="Card.PeopleMeta";try{Card.PeopleMeta.displayName="Card.PeopleMeta",Card.PeopleMeta.__docgenInfo={description:"",displayName:"Card.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const w=({initials:e})=>a.jsx("figure",{className:`cu-figure cu-figure--round ${x.round} ${x.figure}`,children:a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),a.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-cu-black-50 text-2xl text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:e})]})});w.displayName="Card.Initials";try{Card.Initials.displayName="Card.Initials",Card.Initials.__docgenInfo={description:"",displayName:"Card.Initials",props:{initials:{defaultValue:null,description:"",name:"initials",required:!0,type:{name:"string"}}}}}catch{}const k=({stat:e,desc:t,reverse:r})=>{const l=r?u.flexColReverse:u.flexCol;return a.jsxs("div",{className:l,children:[a.jsx("p",{className:`${u.desc}`,children:t}),a.jsx("h2",{className:u.header,children:e})]})};k.displayName="Card.Stats";try{Card.Stats.displayName="Card.Stats",Card.Stats.__docgenInfo={description:"",displayName:"Card.Stats",props:{stat:{defaultValue:null,description:"",name:"stat",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const f=({children:e,isCenter:t,hasBorder:r,noLink:l})=>{const c=l?"cu-card--nolink":d.link,p=t?"text-center":"",n=r?`border-cu-red ${d.border}`:"";return a.jsx("div",{className:`cu-card ${d.card} ${n} ${p} ${c}`,children:e})},h=Object.assign(f,{Figure:b,Video:M,Content:j,DateBox:v,Header:D,Excerpt:V,Badges:$,PostMeta:I,EventMeta:B,PeopleMeta:q,Initials:w,Stats:k});try{f.displayName="CardWrapper",f.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="Card",h.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C,j as a};
//# sourceMappingURL=Card-4257d8e2.js.map
