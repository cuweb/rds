import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as x}from"./getDate-BfMQ2h7Y.js";import{p as l}from"./parse-BUkWBRrt.js";import{f as i,i as $}from"./format-DUBvZ7C8.js";import{F as L,a as O,b as U}from"./MapPinIcon-BRhUovLd.js";import{r as I}from"./index-BwDkhjyp.js";import{R as G}from"./index-6-keFHkl.js";const h=({children:t})=>e.jsx("div",{className:"flex flex-col px-6",children:t});h.displayName="Card.Body";h.__docgenInfo={description:"",methods:[],displayName:"Card.Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g=({as:t="h2",startDate:s,endDate:a})=>{const r=t,n=l(s,"yyyy-MM-dd HH:mm:ss",new Date),o=l(a,"yyyy-MM-dd HH:mm:ss",new Date),d=i(n,"MMM"),m=x(n),p=!$(n,o);return e.jsx(r,{className:"z-10 flex flex-col items-center justify-center w-20 h-20 mx-6 mb-2 -mt-16 bg-white rounded-md shadow-md",children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:"Multi"}),e.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:"Day"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block text-xs font-bold uppercase text-cu-red",children:d}),e.jsx("span",{className:"block text-2xl font-bold uppercase text-cu-black-800",children:m})]})})};g.displayName="Card.DateThumb";g.__docgenInfo={description:"",methods:[],displayName:"Card.DateThumb",props:{as:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},startDate:{required:!0,tsType:{name:"string"},description:""},endDate:{required:!0,tsType:{name:"string"},description:""}}};const f=({text:t,hasMore:s})=>e.jsxs("p",{className:"text-base text-cu-black-700",children:[t&&t.length>170?`${t.substring(0,150)}...`:t,s&&e.jsx("span",{className:"font-semibold",children:" More"})]});f.displayName="Card.Excerpt";f.__docgenInfo={description:"",methods:[],displayName:"Card.Excerpt",props:{text:{required:!1,tsType:{name:"string"},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:""}}};const y=({startDateTime:t,endDateTime:s,onCampus:a,onCampusBuilding:r,onCampusRoomNumber:n,eventAddress:o})=>{const d=l(t,"yyyy-MM-dd HH:mm:ss",new Date),m=i(d,"MMMM"),p=x(d),_=d.getHours()%12||12,k=i(d,"mm"),H=i(d,"a"),c=l(s,"yyyy-MM-dd HH:mm:ss",new Date),F=i(c,"MMMM"),S=x(c),E=c.getHours()%12||12,B=i(c,"mm"),V=i(c,"a"),P=`${_}:${k} ${H}`,A=`${E}:${B} ${V}`,W=$(d,c),u={redIcon:"flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300"},z=()=>W?e.jsxs(e.Fragment,{children:[e.jsx(U,{className:u.redIcon,"aria-hidden":"true"}),`${P} — ${A}`]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:u.redIcon,"aria-hidden":"true"}),`${m} ${p} — ${F} ${S}`]});return e.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[e.jsx("li",{className:"flex",children:z()}),e.jsxs("li",{className:"flex",children:[e.jsx(L,{className:u.redIcon,"aria-hidden":"true"}),a?n+" "+r:o]})]})};y.displayName="Card.EventMeta";y.__docgenInfo={description:"",methods:[],displayName:"Card.EventMeta",props:{startDateTime:{required:!0,tsType:{name:"string"},description:""},endDateTime:{required:!0,tsType:{name:"string"},description:""},onCampus:{required:!0,tsType:{name:"boolean"},description:""},onCampusBuilding:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onCampusRoomNumber:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},eventAddress:{required:!1,tsType:{name:"string"},description:""}}};const b=({children:t,isRound:s})=>{const a=s?"cu-figure--round pt-8 pb-2 px-6":"";return e.jsx("figure",{className:`mb-2 overflow-hidden rounded-t-lg ${a}`,children:t})};b.displayName="Card.Figure";b.__docgenInfo={description:"",methods:[],displayName:"Card.Figure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isRound:{required:!1,tsType:{name:"boolean"},description:""}}};const N=({children:t})=>e.jsx("footer",{className:"px-6 pt-3 mt-auto text-white md:pt-5",children:t});N.displayName="Card.Footer";N.__docgenInfo={description:"",methods:[],displayName:"Card.Footer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=({title:t="No title available",as:s="h2",date:a,datePrefix:r,datePosition:n="top"})=>{const o=s,d=a?new Date(a).toLocaleString("en-US",{month:"long",day:"2-digit",year:"numeric"}):null;return e.jsxs("header",{className:"px-6 first:mt-6",children:[a&&n==="top"&&e.jsxs("time",{className:"block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[r&&`${r} `,d]}),e.jsx(o,{className:"line-clamp-3 text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8",children:t}),a&&n==="bottom"&&e.jsxs("time",{className:"block mt-2 italic text-sm text-cu-black-600 @sm:md:text-base",children:[r&&`${r} `,d]})]})};T.displayName="Card.Header";T.__docgenInfo={description:"",methods:[],displayName:"Card.Header",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No title available'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},date:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},datePrefix:{required:!1,tsType:{name:"string"},description:""},datePosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const j=({icon:t})=>{const s="https://cdn.carleton.ca/rds/assets/font-awesome/",a=t&&t.startsWith("file-")&&t.endsWith("x")?t.substring(0,t.length-1):t,r=`${s}${a}.svg`,n=a?a.replace(/-/g," "):"",o={filter:"invert(20%) sepia(50%) saturate(7177%) hue-rotate(348deg) brightness(91%) contrast(100%)"};return e.jsx("figure",{className:"flex items-center justify-center w-12 h-12 mx-6 mt-5 mb-1.5 overflow-hidden",children:e.jsx("img",{src:r,alt:`An icon of a ${n}`,className:"object-cover max-h-full cu-icon-thumb max-w-none",style:o})})};j.displayName="Card.IconThumb";j.__docgenInfo={description:"",methods:[],displayName:"Card.IconThumb",props:{icon:{required:!1,tsType:{name:"string"},description:""}}};const J={imgThumb:"mx-6 mt-6 mb-2 overflow-hidden max-w-[45%] @xl:md:max-w-[25%] rounded-md"},v=({children:t,isSquare:s})=>{const a=s?"aspect-square":"aspect-[4/2.7]";return e.jsx("figure",{className:`${J.imgThumb} ${a}`,children:t})};v.displayName="Card.ImageThumb";v.__docgenInfo={description:"",methods:[],displayName:"Card.ImageThumb",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isSquare:{required:!1,tsType:{name:"boolean"},description:""}}};const D={figure:"relative",round:"pt-8 pb-2 px-6"},C=({initials:t})=>e.jsx("figure",{className:`cu-figure cu-figure--round ${D.round} ${D.figure}`,children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"https://cu-production.s3.amazonaws.com/rds/assets/graphics/grey-bg.jpg",alt:"Background grey",width:"200",height:"200"}),e.jsx("div",{className:"absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-cu-black-50 text-cu-black-700 sm:text-3xl md:text-4xl lg:text-5xl",children:t})]})});C.displayName="Card.Initials";C.__docgenInfo={description:"",methods:[],displayName:"Card.Initials",props:{initials:{required:!0,tsType:{name:"string"},description:""}}};const w=({jobTitle:t,children:s,phone:a})=>e.jsxs("ul",{className:"space-y-2 text-sm text-cu-black-600 @sm:md:text-base",children:[t&&e.jsx("li",{className:"text-base @sm:md:text-lg italic",children:t}),s&&e.jsx("li",{children:e.jsx("strong",{className:"font-semibold break-all hover:underline text-cu-red-700",children:s})}),a&&e.jsx("li",{children:a})]});w.displayName="Card.PeopleMeta";w.__docgenInfo={description:"",methods:[],displayName:"Card.PeopleMeta",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},jobTitle:{required:!1,tsType:{name:"string"},description:""},phone:{required:!1,tsType:{name:"string"},description:""}}};const q=({stat:t,desc:s,reverse:a})=>{const r=a?"flex flex-col-reverse gap-2":"flex flex-col gap-2",n=s&&s.length>80?`${s.substring(0,80)}...`:s,o=t&&t.length>60?`${t.substring(0,60)}...`:t;return e.jsxs("div",{className:`${r} cu-card-stats px-6 py-4 overflow-hidden`,children:[e.jsx("p",{className:"text-base text-cu-black-600 @sm:md:text-lg",children:n}),e.jsx("p",{className:"text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red md:text-3xl @xs:lg:text-4xl",children:o})]})};q.displayName="Card.Stats";q.__docgenInfo={description:"",methods:[],displayName:"Card.Stats",props:{stat:{required:!0,tsType:{name:"string"},description:""},desc:{required:!0,tsType:{name:"string"},description:""},reverse:{required:!1,tsType:{name:"boolean"},description:""}}};const M=({source:t})=>{const[s,a]=I.useState(!1);return I.useEffect(()=>{a(!0)},[]),s?e.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:e.jsx(G,{url:t,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0})}):e.jsx("div",{className:"relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden",children:e.jsx("p",{className:"hidden",children:"Loading video"})})};M.displayName="Card.Video";M.__docgenInfo={description:"",methods:[],displayName:"Card.Video",props:{source:{required:!0,tsType:{name:"string"},description:""}}};const R=({children:t,isCenter:s,noHover:a,leftBorder:r})=>{const n=r?"border-l-8 border-l-cu-red":"",o=s?"text-center":"",d=a?"":"group duration-300 ease-in hover:scale-[1.02] hover:shadow-cu-black-200";return e.jsx("div",{className:`not-prose cu-card rounded-lg @container md:max-w-xl flex flex-col gap-3 bg-white shadow-lg shadow-cu-black-100 ${o} ${n} ${d}`,children:t})},se=Object.assign(R,{Figure:b,DateThumb:g,IconThumb:j,ImageThumb:v,Initials:C,Video:M,Header:T,Body:h,Footer:N,Excerpt:f,EventMeta:y,PeopleMeta:w,Stats:q});R.displayName="Card";R.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:""},noHover:{required:!1,tsType:{name:"boolean"},description:""},leftBorder:{required:!1,tsType:{name:"boolean"},description:""}}};export{se as C};