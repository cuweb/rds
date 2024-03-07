import{j as a}from"./jsx-runtime-CKrituN3.js";import{g,M as O,C as U,a as J}from"./getDate-BAl1yPiw.js";import{p as y,f as u,i as v}from"./parse-BfiLtjV-.js";import{r as _}from"./index-CBqU2yxZ.js";import{R as K}from"./index-r97fwey1.js";const N=({children:e})=>a.jsx("div",{className:"flex flex-col px-6",children:e});N.displayName="Card.Body";try{Card.Body.displayName="Card.Body",Card.Body.__docgenInfo={description:"",displayName:"Card.Body",props:{}}}catch{}const w=({as:e="h2",startDate:t,endDate:r})=>{const n=e,d=y(t,"yyyy-MM-dd HH:mm:ss",new Date),l=y(r,"yyyy-MM-dd HH:mm:ss",new Date),s=u(d,"MMM"),i=g(d),c=!v(d,l);return a.jsx(n,{className:"z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-16 bg-white rounded-md shadow-md",children:c?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:"Multi"}),a.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:"Day"})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:s}),a.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:i})]})})};w.displayName="Card.DateThumb";try{Card.DateThumb.displayName="Card.DateThumb",Card.DateThumb.__docgenInfo={description:"",displayName:"Card.DateThumb",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'}]}},startDate:{defaultValue:null,description:"",name:"startDate",required:!0,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!0,type:{name:"string"}}}}}catch{}const j=({text:e,hasMore:t})=>a.jsxs("p",{className:"text-base text-cu-black-700",children:[e&&e.length>170?`${e.substring(0,170)}...`:e,t&&a.jsx("span",{className:"font-semibold",children:" More"})]});j.displayName="Card.Excerpt";try{Card.Excerpt.displayName="Card.Excerpt",Card.Excerpt.__docgenInfo={description:"",displayName:"Card.Excerpt",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},hasMore:{defaultValue:null,description:"",name:"hasMore",required:!1,type:{name:"boolean"}}}}}catch{}const I=({startDateTime:e,endDateTime:t,onCampus:r,onCampusBuilding:n,onCampusRoomNumber:d,eventAddress:l})=>{const s=y(e,"yyyy-MM-dd HH:mm:ss",new Date),i=u(s,"MMMM"),c=g(s),p=s.getHours()%12||12,h=u(s,"mm"),B=u(s,"a"),m=y(t,"yyyy-MM-dd HH:mm:ss",new Date),E=u(m,"MMMM"),F=g(m),P=m.getHours()%12||12,R=u(m,"mm"),A=u(m,"a"),z=`${p}:${h} ${B}`,G=`${P}:${R} ${A}`,W=v(s,m),f={redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},L=()=>W?a.jsxs(a.Fragment,{children:[a.jsx(J,{className:f.redIcon,"aria-hidden":"true"}),`${z} — ${G}`]}):a.jsxs(a.Fragment,{children:[a.jsx(U,{className:f.redIcon,"aria-hidden":"true"}),`${i} ${c} — ${E} ${F}`]});return a.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[a.jsx("li",{className:"flex",children:L()}),a.jsxs("li",{className:"flex",children:[a.jsx(O,{className:f.redIcon,"aria-hidden":"true"}),r?d+" "+n:l]})]})};I.displayName="Card.EventMeta";try{Card.EventMeta.displayName="Card.EventMeta",Card.EventMeta.__docgenInfo={description:"",displayName:"Card.EventMeta",props:{startDateTime:{defaultValue:null,description:"",name:"startDateTime",required:!0,type:{name:"string"}},endDateTime:{defaultValue:null,description:"",name:"endDateTime",required:!0,type:{name:"string"}},onCampus:{defaultValue:null,description:"",name:"onCampus",required:!0,type:{name:"boolean"}},onCampusBuilding:{defaultValue:null,description:"",name:"onCampusBuilding",required:!1,type:{name:"string | null"}},onCampusRoomNumber:{defaultValue:null,description:"",name:"onCampusRoomNumber",required:!1,type:{name:"string | null"}},eventAddress:{defaultValue:null,description:"",name:"eventAddress",required:!1,type:{name:"string"}}}}}catch{}const V=({children:e,isRound:t})=>{const r=t?"cu-figure--round pt-8 pb-2 px-6":"";return a.jsx("figure",{className:`mb-2 overflow-hidden rounded-t-lg ${r}`,children:e})};V.displayName="Card.Figure";try{Card.Figure.displayName="Card.Figure",Card.Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}}}}}catch{}const M=({children:e,isType:t,buttonType:r="solid",buttonStyle:n="red"})=>{const d=t==="button"?"cu-card-button":"",l=t==="button"&&r?`cu-card-button-${r}`:"cu-card-button-solid",s=t==="button"&&n?`cu-card-button-${n}`:"cu-card-button-red";return a.jsx("footer",{className:`px-6 pt-3 mt-auto text-white md:pt-5 ${d} ${s} ${l}`,children:e})};M.displayName="Card.Footer";try{Card.Footer.displayName="Card.Footer",Card.Footer.__docgenInfo={description:"",displayName:"Card.Footer",props:{isType:{defaultValue:null,description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"badge"'}]}},buttonType:{defaultValue:{value:"solid"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},buttonStyle:{defaultValue:{value:"red"},description:"",name:"buttonStyle",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"white"'}]}}}}}catch{}const q=({children:e,as:t="h2",date:r,datePrefix:n,datePosition:d="top"})=>{const l=t,s=r?new Date(r).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return a.jsxs("header",{className:"px-6 first:mt-6",children:[r&&d==="top"&&a.jsxs("time",{className:"block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[n&&`${n} `,s]}),a.jsx(l,{className:"text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8",children:e}),r&&d==="bottom"&&a.jsxs("time",{className:"block mt-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[n&&`${n} `,s]})]})};q.displayName="Card.Header";try{Card.Header.displayName="Card.Header",Card.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'}]}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string | Date"}},datePrefix:{defaultValue:null,description:"",name:"datePrefix",required:!1,type:{name:"string"}},datePosition:{defaultValue:{value:"top"},description:"",name:"datePosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const D=({icon:e,bgType:t="red",hasShadow:r})=>{const d=`https://cdn.carleton.ca/rds/assets/font-awesome/${e}.svg`,l=r?"shadow-md":"";let s;switch(t){case"none":s="w-10 h-10";break;case"red":s="w-16 h-16 bg-cu-red rounded-md";break;case"white":s="w-16 h-16 bg-white rounded-md";break;default:s="";break}const i={filter:"invert(100%) sepia(5%) saturate(0%) hue-rotate(29deg) brightness(106%) contrast(107%)"},c={filter:"invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)"},p=e?e.replace(/-/g," "):"";return a.jsx("figure",{className:`flex items-center justify-center mx-6 mt-6 mb-2 overflow-hidden ${s} ${l}`,children:a.jsx("img",{src:d,alt:`An icon of a ${p}`,className:`cu-icon-thumb ${t==="none"?"":"p-3"}`,style:t==="red"?i:c})})};D.displayName="Card.IconThumb";try{Card.IconThumb.displayName="Card.IconThumb",Card.IconThumb.__docgenInfo={description:"",displayName:"Card.IconThumb",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},bgType:{defaultValue:{value:"red"},description:"",name:"bgType",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"white"'},{value:'"none"'}]}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}const x={figure:"relative",round:"pt-8 pb-2 px-6",imgThumb:"mx-6 mt-6 mb-2 overflow-hidden max-w-[45%] @xl:md:max-w-[25%] rounded-md"},$=({children:e,isSquare:t})=>{const r=t?"aspect-square":"aspect-[4/2.7]";return a.jsx("figure",{className:`${x.imgThumb} ${r}`,children:e})};$.displayName="Card.ImageThumb";try{Card.ImageThumb.displayName="Card.ImageThumb",Card.ImageThumb.__docgenInfo={description:"",displayName:"Card.ImageThumb",props:{isSquare:{defaultValue:null,description:"",name:"isSquare",required:!1,type:{name:"boolean"}}}}}catch{}const T=({initials:e})=>a.jsx("figure",{className:`cu-figure cu-figure--round ${x.round} ${x.figure}`,children:a.jsxs("div",{className:"relative",children:[a.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),a.jsx("div",{className:"absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:e})]})});T.displayName="Card.Initials";try{Card.Initials.displayName="Card.Initials",Card.Initials.__docgenInfo={description:"",displayName:"Card.Initials",props:{initials:{defaultValue:null,description:"",name:"initials",required:!0,type:{name:"string"}}}}}catch{}const k=({jobTitle:e,children:t,phone:r})=>a.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[e&&a.jsx("li",{className:"text-base @sm:md:text-lg italic",children:e}),t&&a.jsx("li",{children:a.jsx("strong",{className:"font-semibold break-all text-cyan-700 hover:text-cu-red-700",children:t})}),r&&a.jsx("li",{children:r})]});k.displayName="Card.PeopleMeta";try{Card.PeopleMeta.displayName="Card.PeopleMeta",Card.PeopleMeta.__docgenInfo={description:"",displayName:"Card.PeopleMeta",props:{jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}}}}}catch{}const S=({stat:e,desc:t,reverse:r})=>{const n=r?"flex flex-col-reverse gap-2":"flex flex-col gap-2";return a.jsxs("div",{className:`${n} cu-card-stats px-6 py-4 overflow-hidden`,children:[a.jsx("p",{className:"text-base text-cu-black-600 @sm:md:text-lg",children:t}),a.jsx("p",{className:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red md:text-3xl @xs:lg:text-4xl",children:e})]})};S.displayName="Card.Stats";try{Card.Stats.displayName="Card.Stats",Card.Stats.__docgenInfo={description:"",displayName:"Card.Stats",props:{stat:{defaultValue:null,description:"",name:"stat",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!0,type:{name:"string"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const H=({source:e})=>{const[t,r]=_.useState(!1);return _.useEffect(()=>{r(!0)},[]),t?a.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:a.jsx(K,{url:e,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:a.jsx("p",{className:"hidden",children:"Loading video"})})};H.displayName="Card.Video";try{Card.Video.displayName="Card.Video",Card.Video.__docgenInfo={description:"",displayName:"Card.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const o={card:"",whiteBg:"bg-white",greyBg:"bg-cu-black-25",shadow:"shadow-md shadow-cu-black-100",shadowHover:"hover:shadow-lg hover:shadow-cu-black-200",center:"text-center",redBorder:"border-l-8 border-l-cu-red",zoom:"group duration-300 ease-in hover:scale-[1.04]"},b=({children:e,isCenter:t,noHover:r,hasShadow:n,hasRedBorder:d,isGrey:l})=>{const s=l?o.greyBg:o.whiteBg,i=n==="onCard"?`${o.shadow} ${r?"":o.shadowHover}`:n==="onHover"&&!r?o.shadowHover:"",c=d?o.redBorder:"",p=t?o.center:"",h=r?"":o.zoom;return a.jsx("div",{className:`not-prose cu-card rounded-lg @container md:max-w-lg flex flex-col gap-3 ${c} ${i} ${p} ${h} ${s}`,children:e})},C=Object.assign(b,{Figure:V,DateThumb:w,IconThumb:D,ImageThumb:$,Initials:T,Video:H,Header:q,Body:N,Footer:M,Excerpt:j,EventMeta:I,PeopleMeta:k,Stats:S});try{b.displayName="CardWrapper",b.__docgenInfo={description:"",displayName:"CardWrapper",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"enum",value:[{value:'"onCard"'},{value:'"onHover"'}]}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="Card",C.__docgenInfo={description:"",displayName:"Card",props:{isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},noHover:{defaultValue:null,description:"",name:"noHover",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"enum",value:[{value:'"onCard"'},{value:'"onHover"'}]}},isGrey:{defaultValue:null,description:"",name:"isGrey",required:!1,type:{name:"boolean"}},hasRedBorder:{defaultValue:null,description:"",name:"hasRedBorder",required:!1,type:{name:"boolean"}}}}}catch{}export{C};
