import{j as a}from"./jsx-runtime-daf202a7.js";import{i as G}from"./optionClasses-dcd0a1d3.js";import{r as C}from"./index-ec8b93d8.js";import{R as J}from"./index-cd8fc8bc.js";import{p as g,f as o,i as K}from"./index-37505e40.js";import{g as _,M as Q,C as X,a as Y}from"./index-dfffa903.js";import{B as Z}from"./Badge-fe05d228.js";const d={card:"not-prose relative flex flex-col cu-card overflow-hidden rounded-lg bg-white shadow-lg @container md:max-w-lg",link:"group duration-300 ease-in hover:scale-105 cursor-pointer",border:"border-l-8",content:"flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative",header:"text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl leading-6 @sm:md:leading-8",excerpt:"text-base text-cu-black-600",more:"font-semibold text-cu-red group-hover:text-cyan-600",badges:"pb-6 mt-auto px-7"},p={figure:"relative",round:"pt-8 pb-2 px-6"},s={wrapper:"space-y-1.5 @sm:md:space-y-2",item:"text-sm text-cu-black-600 @sm:md:text-base",itemLarge:"text-base text-cu-black-600 @sm:md:text-lg",italic:"italic",bold:"font-semibold text-cyan-600",alignIcon:"flex",redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},y={dateBox:"z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red",dateBoxMonth:"text-xs font-bold uppercase text-cu-red group-hover:text-white",dateBoxDay:"text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white"},x={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},c={header:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red @sm:md:text-4xl",desc:"text-base text-cu-black-600 @sm:md:text-lg",flexCol:"flex flex-col gap-2",flexColReverse:"flex flex-col-reverse gap-2"},N=({children:e,isRound:t})=>{const r=t?`cu-figure--round ${p.round}`:"";return a.jsx("figure",{className:`cu-figure ${r} ${p.figure}`,children:e})};N.displayName="Card.Figure";try{Card.Figure.displayName="Card.Figure",Card.Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const v=({source:e})=>{const[t,r]=C.useState(!1);return C.useEffect(()=>{r(!0)},[]),t?a.jsx("div",{className:x.container,children:a.jsx(J,{url:e,className:x.player,width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:x.container,children:a.jsx("p",{className:"hidden",children:"Loading video"})})};v.displayName="Card.Video";try{Card.Video.displayName="Card.Video",Card.Video.__docgenInfo={description:"",displayName:"Card.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const b=({children:e})=>a.jsx("div",{className:d.content,children:e});b.displayName="Card.Content";try{Card.Content.displayName="Card.Content",Card.Content.__docgenInfo={description:"",displayName:"Card.Content",props:{}}}catch{}const M=({startDate:e})=>{const t=g(e,"yyyy-MM-dd HH:mm:ss",new Date),r=o(t,"MMM"),l=_(t);return a.jsxs("div",{className:y.dateBox,children:[a.jsx("p",{className:y.dateBoxMonth,children:r}),a.jsx("p",{className:y.dateBoxDay,children:l})]})};M.displayName="Card.DateBox";try{Card.DateBox.displayName="Card.DateBox",Card.DateBox.__docgenInfo={description:"",displayName:"Card.DateBox",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}}}}}catch{}const j=({text:e})=>a.jsx("h2",{className:d.header,children:e});j.displayName="Card.Header";try{Card.Header.displayName="Card.Header",Card.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const $=({text:e})=>a.jsxs("p",{className:d.excerpt,children:[e.length>170?`${e.substring(0,170)}...`:e,a.jsx("span",{className:d.more,children:" Read more"})]});$.displayName="Card.Excerpt";try{Card.Excerpt.displayName="Card.Excerpt",Card.Excerpt.__docgenInfo={description:"",displayName:"Card.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const D=({tags:e})=>{var t;return a.jsx("div",{className:d.badges,children:(t=e==null?void 0:e.category)==null?void 0:t.map(r=>a.jsx(Z,{children:r.name},r.id))})};D.displayName="Card.Badges";try{Card.Badges.displayName="Card.Badges",Card.Badges.__docgenInfo={description:"",displayName:"Card.Badges",props:{tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const I=({date:e})=>{const t=e?new Date(e).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return a.jsx("time",{className:`${s.item} ${s.italic}`,children:t})};I.displayName="Card.PostMeta";try{Card.PostMeta.displayName="Card.PostMeta",Card.PostMeta.__docgenInfo={description:"",displayName:"Card.PostMeta",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const V=({startDateTime:e,endDateTime:t,onCampus:r,onCampusBuilding:l,onCampusRoomNumber:u,eventAddress:m})=>{const n=g(e,"yyyy-MM-dd HH:mm:ss",new Date),w=o(n,"MMMM"),S=_(n),E=n.getHours()%12||12,P=o(n,"mm"),H=o(n,"a"),i=g(t,"yyyy-MM-dd HH:mm:ss",new Date),R=o(i,"MMMM"),F=_(i),L=i.getHours()%12||12,T=o(i,"mm"),A=o(i,"a"),W=`${E}:${P} ${H}`,z=`${L}:${T} ${A}`,O=K(n,i),U=()=>O?a.jsxs(a.Fragment,{children:[a.jsx(Y,{className:s.redIcon,"aria-hidden":"true"}),`${W} — ${z}`]}):a.jsxs(a.Fragment,{children:[a.jsx(X,{className:s.redIcon,"aria-hidden":"true"}),`${w} ${S} — ${R} ${F}`]});return a.jsxs("ul",{className:s.wrapper,children:[a.jsx("li",{className:`${s.item} ${s.alignIcon}`,children:U()}),a.jsxs("li",{className:`${s.item} ${s.alignIcon}`,children:[a.jsx(Q,{className:s.redIcon,"aria-hidden":"true"}),r?u+" "+l:m]})]})};V.displayName="Card.EventMeta";try{Card.EventMeta.displayName="Card.EventMeta",Card.EventMeta.__docgenInfo={description:"",displayName:"Card.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const B=({jobTitle:e,email:t,phone:r})=>a.jsxs("ul",{className:s.wrapper,children:[e&&a.jsx("li",{className:`${s.item} ${s.itemLarge} ${s.italic}`,children:e}),t&&a.jsx("li",{className:s.item,children:a.jsx("strong",{className:s.bold,children:t})}),r&&a.jsx("li",{className:s.item,children:r})]});B.displayName="Card.PeopleMeta";try{Card.PeopleMeta.displayName="Card.PeopleMeta",Card.PeopleMeta.__docgenInfo={description:"",displayName:"Card.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const q=({initials:e})=>a.jsx("figure",{className:`cu-figure cu-figure--round ${p.round} ${p.figure}`,children:a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),a.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-cu-black-50 text-2xl text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:e})]})});q.displayName="Card.Initials";try{Card.Initials.displayName="Card.Initials",Card.Initials.__docgenInfo={description:"",displayName:"Card.Initials",props:{initials:{defaultValue:null,description:"",name:"initials",required:!0,type:{name:"string"}}}}}catch{}const k=({stat:e,desc:t,reverse:r})=>{const l=r?c.flexColReverse:c.flexCol;return a.jsxs("div",{className:l,children:[a.jsx("p",{className:`${c.desc}`,children:t}),a.jsx("h2",{className:c.header,children:e})]})};k.displayName="Card.Stats";try{Card.Stats.displayName="Card.Stats",Card.Stats.__docgenInfo={description:"",displayName:"Card.Stats",props:{stat:{defaultValue:null,description:"",name:"stat",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const f=({children:e,isCenter:t,border:r,noLink:l})=>{const u=l?"cu-card--nolink":d.link,m=t?"text-center":"",n=r?`${G[r]} ${d.border}`:"";return a.jsx("div",{className:`cu-card ${d.card} ${n} ${m} ${u}`,children:e})},h=Object.assign(f,{Figure:N,Video:v,Content:b,DateBox:M,Header:j,Excerpt:$,Badges:D,PostMeta:I,EventMeta:V,PeopleMeta:B,Initials:q,Stats:k});try{f.displayName="CardWrapper",f.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"green"'},{value:'"yellow"'}]}}}}}catch{}try{h.displayName="Card",h.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"green"'},{value:'"yellow"'}]}}}}}catch{}export{h as C,b as a};
//# sourceMappingURL=Card-cc28f1ed.js.map
