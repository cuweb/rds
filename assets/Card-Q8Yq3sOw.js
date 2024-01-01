import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{p as m,f as c,i as C}from"./index-bkt57PaO.js";import{g,M as z,C as W,a as O}from"./index-J1scOhqY.js";import{r as b}from"./index-4g5l5LRQ.js";import{R as U}from"./index-Dz6QmSFC.js";const v=({children:a})=>e.jsx("div",{className:"flex flex-col px-6",children:a});v.displayName="Card.Body";try{Card.Body.displayName="Card.Body",Card.Body.__docgenInfo={description:"",displayName:"Card.Body",props:{}}}catch{}const N=({startDate:a,endDate:r})=>{const t=m(a,"yyyy-MM-dd HH:mm:ss",new Date),s=m(r,"yyyy-MM-dd HH:mm:ss",new Date),n=c(t,"MMM"),l=g(t),d=!C(t,s);return e.jsx("div",{className:"z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-16 bg-white rounded-md shadow-md",children:d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:"Multi"}),e.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:"Day"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:n}),e.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:l})]})})};N.displayName="Card.DateThumb";try{Card.DateThumb.displayName="Card.DateThumb",Card.DateThumb.__docgenInfo={description:"",displayName:"Card.DateThumb",props:{startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}}}}}catch{}const w=({text:a,hasMore:r})=>e.jsxs("p",{className:"text-base text-cu-black-600",children:[a.length>170?`${a.substring(0,170)}...`:a,r&&e.jsx("span",{className:"font-semibold",children:" More"})]});w.displayName="Card.Excerpt";try{Card.Excerpt.displayName="Card.Excerpt",Card.Excerpt.__docgenInfo={description:"",displayName:"Card.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},hasMore:{defaultValue:null,description:"",name:"hasMore",required:!1,type:{name:"boolean"}}}}}catch{}const j=({startDateTime:a,endDateTime:r,onCampus:t,onCampusBuilding:s,onCampusRoomNumber:n,eventAddress:l})=>{const d=m(a,"yyyy-MM-dd HH:mm:ss",new Date),o=c(d,"MMMM"),p=g(d),y=d.getHours()%12||12,h=c(d,"mm"),S=c(d,"a"),u=m(r,"yyyy-MM-dd HH:mm:ss",new Date),H=c(u,"MMMM"),B=g(u),E=u.getHours()%12||12,F=c(u,"mm"),R=c(u,"a"),P=`${y}:${h} ${S}`,A=`${E}:${F} ${R}`,L=C(d,u),f={redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},G=()=>L?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:f.redIcon,"aria-hidden":"true"}),`${P} — ${A}`]}):e.jsxs(e.Fragment,{children:[e.jsx(W,{className:f.redIcon,"aria-hidden":"true"}),`${o} ${p} — ${H} ${B}`]});return e.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[e.jsx("li",{className:"flex",children:G()}),e.jsxs("li",{className:"flex",children:[e.jsx(z,{className:f.redIcon,"aria-hidden":"true"}),t?n+" "+s:l]})]})};j.displayName="Card.EventMeta";try{Card.EventMeta.displayName="Card.EventMeta",Card.EventMeta.__docgenInfo={description:"",displayName:"Card.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const M=({children:a,isRound:r})=>{const t=r?"cu-figure--round pt-8 pb-2 px-6":"";return e.jsx("figure",{className:`mb-2 overflow-hidden rounded-t-lg ${t}`,children:a})};M.displayName="Card.Figure";try{Card.Figure.displayName="Card.Figure",Card.Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const V=({children:a,isType:r,buttonType:t="solid",buttonStyle:s="red"})=>{const n=r==="button"?"cu-card-button":"",l=r==="button"&&t?`cu-card-button-${t}`:"cu-card-button-solid",d=r==="button"&&s?`cu-card-button-${s}`:"cu-card-button-red";return e.jsx("footer",{className:`px-6 pt-3 mt-auto text-white md:pt-5 ${n} ${d} ${l}`,children:a})};V.displayName="Card.Footer";try{Card.Footer.displayName="Card.Footer",Card.Footer.__docgenInfo={description:"",displayName:"Card.Footer",props:{isType:{defaultValue:null,description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"badge"'}]}},buttonType:{defaultValue:{value:"solid"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},buttonStyle:{defaultValue:{value:"red"},description:"",name:"buttonStyle",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"white"'}]}}}}}catch{}const D=({children:a,as:r="h2",date:t})=>{const s=r,n=t?new Date(t).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return e.jsx("header",{className:"px-6 first:mt-6",children:e.jsxs(s,{className:"text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8",children:[t&&e.jsx("time",{className:"block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:n}),a]})})};D.displayName="Card.Header";try{Card.Header.displayName="Card.Header",Card.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'}]}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}}}}}catch{}const I=({icon:a,bgType:r="red",hasShadow:t,svgPath:s})=>{const n=!s||s.includes("carleton.ca")?"https://cdn.carleton.ca/rds/assets/graphics/":s,l=t?"shadow-md":"";let d,o;switch(r){case"none":d="w-10 h-10",o="w-10 h-10 fill-cu-red";break;case"red":d="w-16 h-16 bg-cu-red rounded-md",o="w-9 h-9 fill-white";break;case"white":d="w-16 h-16 bg-white rounded-md",o="w-9 h-9 fill-cu-red";break;default:d="",o="";break}return e.jsx("figure",{className:`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${d} ${l}`,children:e.jsx("svg",{className:o,children:e.jsx("use",{xlinkHref:`${n}fontawesome-light.svg#${a}`})})})};I.displayName="Card.IconThumb";try{Card.IconThumb.displayName="Card.IconThumb",Card.IconThumb.__docgenInfo={description:"",displayName:"Card.IconThumb",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},bgType:{defaultValue:{value:"red"},description:"",name:"bgType",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"white"'},{value:'"none"'}]}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},svgPath:{defaultValue:null,description:"",name:"svgPath",required:!1,type:{name:"string"}}}}}catch{}const J={figure:"relative",round:"pt-8 pb-2 px-6",imgThumb:"mx-6 mt-6 mb-2 overflow-hidden max-w-[45%] @xl:md:max-w-[25%] rounded-md"},q=({children:a})=>e.jsx("figure",{className:J.imgThumb,children:a});q.displayName="Card.ImageThumb";try{Card.ImageThumb.displayName="Card.ImageThumb",Card.ImageThumb.__docgenInfo={description:"",displayName:"Card.ImageThumb",props:{}}}catch{}const T=({jobTitle:a,children:r,phone:t})=>e.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[a&&e.jsx("li",{className:"text-base @sm:md:text-lg italic",children:a}),r&&e.jsx("li",{children:e.jsx("strong",{className:"font-semibold break-all text-cyan-700 hover:text-cu-red-700",children:r})}),t&&e.jsx("li",{children:t})]});T.displayName="Card.PeopleMeta";try{Card.PeopleMeta.displayName="Card.PeopleMeta",Card.PeopleMeta.__docgenInfo={description:"",displayName:"Card.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const $=({stat:a,desc:r,reverse:t})=>{const s=t?"flex flex-col-reverse gap-2":"flex flex-col gap-2";return e.jsxs("div",{className:`${s} cu-card-stats px-6 py-4 overflow-hidden`,children:[e.jsx("p",{className:"text-base text-cu-black-600 @sm:md:text-lg",children:r}),e.jsx("h2",{className:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red md:text-3xl @xs:lg:text-4xl",children:a})]})};$.displayName="Card.Stats";try{Card.Stats.displayName="Card.Stats",Card.Stats.__docgenInfo={description:"",displayName:"Card.Stats",props:{stat:{defaultValue:null,description:"",name:"stat",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const k=({source:a})=>{const[r,t]=b.useState(!1);return b.useEffect(()=>{t(!0)},[]),r?e.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:e.jsx(U,{url:a,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0})}):e.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:e.jsx("p",{className:"hidden",children:"Loading video"})})};k.displayName="Card.Video";try{Card.Video.displayName="Card.Video",Card.Video.__docgenInfo={description:"",displayName:"Card.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const i={card:"",whiteBg:"bg-white",greyBg:"bg-cu-black-25",shadow:"shadow-md shadow-cu-black-100",shadowHover:"hover:shadow-lg hover:shadow-cu-black-200",center:"text-center",redBorder:"border-l-8 border-l-cu-red",zoom:"group duration-300 ease-in hover:scale-[1.04]"},x=({children:a,isCenter:r,noLink:t,hasShadow:s,hasRedBorder:n,isGrey:l})=>{const d=l?i.greyBg:i.whiteBg,o=s==="onCard"?`${i.shadow} ${t?"":i.shadowHover}`:s==="onHover"&&!t?i.shadowHover:"",p=n?i.redBorder:"",y=r?i.center:"",h=t?"":i.zoom;return e.jsx("div",{className:`not-prose cu-card rounded-lg @container md:max-w-lg flex flex-col gap-3 ${p} ${o} ${y} ${h} ${d}`,children:a})},_=Object.assign(x,{Figure:M,DateThumb:N,IconThumb:I,ImageThumb:q,Video:k,Header:D,Body:v,Footer:V,Excerpt:w,EventMeta:j,PeopleMeta:T,Stats:$});try{x.displayName="CardWrapper",x.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"enum",value:[{value:'"onCard"'},{value:'"onHover"'}]}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="Card",_.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noLink:{defaultValue:null,description:"",name:"noLink",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"enum",value:[{value:'"onCard"'},{value:'"onHover"'}]}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as C};
