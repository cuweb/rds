import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{p as d}from"./parse-BUkWBRrt.js";import{f as l,i as L}from"./format-DUBvZ7C8.js";import{g as p}from"./getDate-BfMQ2h7Y.js";import{F as P,a as A,b as C}from"./MapPinIcon-BRhUovLd.js";const u=({children:t,isSquare:a})=>{const s=a?"aspect-square":"aspect-[3/2]";return e.jsx("figure",{className:`flex-none max-w-[45%] @xl:md:max-w-[30%] ${s}`,children:t})};u.displayName="Listing.Figure";u.__docgenInfo={description:"",methods:[],displayName:"Listing.Figure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isSquare:{required:!1,tsType:{name:"boolean"},description:""}}};const g=({children:t})=>e.jsx("div",{className:"flex flex-col flex-1 gap-3",children:t});g.displayName="Listing.Body";g.__docgenInfo={description:"",methods:[],displayName:"Listing.Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x=({title:t="No title available",as:a="h2",date:s,datePrefix:i,datePosition:r="top"})=>{const o=a,n=s?new Date(s).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return e.jsxs("header",{children:[s&&r==="top"&&e.jsxs("time",{className:"block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[i&&`${i} `,n]}),e.jsx(o,{className:"line-clamp-3 text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8",children:t}),s&&r==="bottom"&&e.jsxs("time",{className:"block mt-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[i&&`${i} `,n]})]})};x.displayName="Listing.Header";x.__docgenInfo={description:"",methods:[],displayName:"Listing.Header",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No title available'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},date:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},datePrefix:{required:!1,tsType:{name:"string"},description:""},datePosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const h=({text:t,hasMore:a})=>e.jsxs("p",{className:"text-base text-cu-black-700",children:[t&&t.length>200?`${t.substring(0,200)}...`:t,a&&e.jsx("span",{className:"font-semibold",children:" More"})]});h.displayName="Listing.Excerpt";h.__docgenInfo={description:"",methods:[],displayName:"Listing.Excerpt",props:{text:{required:!1,tsType:{name:"string"},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:""}}};const y=({startDate:t,endDate:a})=>{const s=d(t,"yyyy-MM-dd HH:mm:ss",new Date),i=d(a,"yyyy-MM-dd HH:mm:ss",new Date),r=l(s,"MMM"),o=p(s),n=!L(s,i);return e.jsxs("h3",{className:"h-20 w-20 @4xl:lg:h-32 @4xl:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex",children:[e.jsx("span",{className:"block text-xs @4xl:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white",children:n?"Multi":r}),e.jsx("span",{className:"block text-2xl @4xl:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white",children:n?"Day":o})]})};y.displayName="Listing.DateThumb";y.__docgenInfo={description:"",methods:[],displayName:"Listing.DateThumb",props:{startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""}}};const f=({icon:t})=>{const a="https://cdn.carleton.ca/rds/assets/font-awesome/",s=t&&t.startsWith("file-")&&t.endsWith("x")?t.substring(0,t.length-1):t,i=`${a}${s}.svg`,r=s?s.replace(/-/g," "):"",o={filter:"invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)"};return e.jsx("figure",{className:"flex items-center justify-center w-12 h-12",children:e.jsx("img",{src:i,alt:`An icon of a ${r}`,className:"object-cover max-h-full cu-icon-thumb max-w-none",style:o})})};f.displayName="Listing.IconThumb";f.__docgenInfo={description:"",methods:[],displayName:"Listing.IconThumb",props:{icon:{required:!1,tsType:{name:"string"},description:""}}};const N=({initials:t})=>e.jsx("figure",{className:"cu-figure flex-none rounded-md max-w-[40%] @xl:md:max-w-[25%]",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),e.jsx("div",{className:"absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:t})]})});N.displayName="Listing.Initials";N.__docgenInfo={description:"",methods:[],displayName:"Listing.Initials",props:{initials:{required:!0,tsType:{name:"string"},description:""}}};const m={redIcon:"mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300"},b=({startDateTime:t,endDateTime:a,onCampus:s,onCampusBuilding:i,onCampusRoomNumber:r,eventAddress:o})=>{const n=d(t,"yyyy-MM-dd HH:mm:ss",new Date),M=l(n,"MMMM"),v=p(n),D=n.getHours()%12||12,q=l(n,"mm"),I=l(n,"a"),c=d(a,"yyyy-MM-dd HH:mm:ss",new Date),R=l(c,"MMMM"),_=p(c),$=c.getHours()%12||12,H=l(c,"mm"),k=l(c,"a"),F=`${D}:${q} ${I}`,E=`${$}:${H} ${k}`,S=L(n,c),B=()=>S?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:m.redIcon,"aria-hidden":"true"}),`${F} — ${E}`]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{className:m.redIcon,"aria-hidden":"true"}),`${M} ${v} — ${R} ${_}`]});return e.jsxs("ul",{className:"space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none",children:[e.jsx("li",{className:"flex",children:B()}),e.jsxs("li",{className:"flex",children:[e.jsx(P,{className:m.redIcon,"aria-hidden":"true"}),s?r+" "+i:o]})]})};b.displayName="Listing.EventMeta";b.__docgenInfo={description:"",methods:[],displayName:"Listing.EventMeta",props:{startDateTime:{required:!0,tsType:{name:"string"},description:""},endDateTime:{required:!0,tsType:{name:"string"},description:""},onCampus:{required:!0,tsType:{name:"boolean"},description:""},onCampusBuilding:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onCampusRoomNumber:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},eventAddress:{required:!1,tsType:{name:"string"},description:""}}};const j=({jobTitle:t,children:a,phone:s})=>e.jsxs("ul",{className:"space-y-3 text-sm text-cu-black-600 @sm:md:text-base list-none",children:[t&&e.jsx("li",{className:"text-base @sm:md:text-lg italic",children:t}),a&&e.jsx("li",{children:e.jsx("strong",{className:"font-semibold break-all hover:cursor-pointer hover:underline text-cu-red-700",children:a})}),s&&e.jsx("li",{children:s})]});j.displayName="Listing.PeopleMeta";j.__docgenInfo={description:"",methods:[],displayName:"Listing.PeopleMeta",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},jobTitle:{required:!1,tsType:{name:"string"},description:""},phone:{required:!1,tsType:{name:"string"},description:""}}};const w=({children:t})=>e.jsx("footer",{className:"pt-5 mt-auto text-white",children:t});w.displayName="Listing.Footer";w.__docgenInfo={description:"",methods:[],displayName:"Listing.Footer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=({children:t})=>e.jsx("li",{className:"cu-listing not-prose relative overflow-hidden @container bg-white p-6 md:p-8",children:e.jsx("div",{className:"flex flex-col @lg:md:flex-row gap-5 @lg:md:gap-7 h-full",children:t})}),G=Object.assign(T,{Figure:u,Body:g,Header:x,Excerpt:h,DateThumb:y,IconThumb:f,Initials:N,EventMeta:b,PeopleMeta:j,Footer:w});T.displayName="Listing";T.__docgenInfo={description:"",methods:[],displayName:"Listing",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{G as L};
