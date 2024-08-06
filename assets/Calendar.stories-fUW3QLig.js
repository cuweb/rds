import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{B as O}from"./Button-BZxQyZm9.js";import{s as $,e as A,F as B,a as _,i as s,b as v}from"./startOfToday-C2GAHaUs.js";import{f as o,i as u}from"./format-DUBvZ7C8.js";import{p as G}from"./parse-BUkWBRrt.js";import{e as I,g as P,i as R,a as y}from"./isSameMonth-B8gVtgtL.js";import{i as a}from"./isEqual-Bg9VHVhb.js";import{p as U}from"./parseISO-CHcXfkHQ.js";import{C as W}from"./CalendarData-D-nF6TMW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-B6CsUj99.js";import"./propClasses-BCnilxRx.js";const x={prevNextArrows:"flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red",calendarGrid:"grid grid-cols-7 gap-px mt-4 text-center"},j=(...n)=>n.filter(Boolean).join(" "),h=({events:n,callback:l,defaultDate:d})=>{const m=$(),[r,b]=c.useState(d?new Date(d):new Date),[w,g]=c.useState(o(m,"MMM-yyyy")),[N,f]=c.useState(!1),i=G(w,"MMM-yyyy",new Date),S=["","col-start-2","col-start-3","col-start-4","col-start-5","col-start-6","col-start-7"],C=A({start:i,end:I(i)}),q=()=>{const e=v(i,{months:-1});g(o(e,"MMM-yyyy"))},T=()=>{const e=v(i,{months:1});g(o(e,"MMM-yyyy"))};return c.useEffect(()=>{l(r)},[r,l]),t.jsxs("div",{className:"cu-calendar cu-component not-prose",children:[t.jsxs("div",{className:"flex items-center py-2 mb-6 bg-white border rounded-lg not-prose border-cu-black-100",children:[t.jsxs("button",{type:"button",onClick:q,className:`${x.prevNextArrows}`,children:[t.jsx("span",{className:"text-base sr-only",children:"Previous month"}),t.jsx(B,{className:"w-5 h-5","aria-hidden":"true"})]}),t.jsx("h2",{className:"flex-auto text-base font-semibold text-center text-cu-black-900",children:o(i,"MMMM yyyy")}),t.jsxs("button",{onClick:T,type:"button",className:`${x.prevNextArrows}`,children:[t.jsx("span",{className:"text-base sr-only",children:"Next month"}),t.jsx(_,{className:"w-5 h-5","aria-hidden":"true"})]})]}),t.jsxs("div",{className:`${x.calendarGrid} text-xs text-cu-black-600`,children:[t.jsx("div",{children:"S"}),t.jsx("div",{children:"M"}),t.jsx("div",{children:"T"}),t.jsx("div",{children:"W"}),t.jsx("div",{children:"T"}),t.jsx("div",{children:"F"}),t.jsx("div",{children:"S"})]}),t.jsx("div",{className:`${x.calendarGrid} isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50 text-sm`,children:C.map((e,E)=>t.jsxs("div",{className:j(E===0&&S[P(e)],"bg-white py-2"),children:[t.jsx("button",{type:"button",disabled:R(e,m),onClick:()=>{b(e),f(!0)},className:j(a(e,r)&&"text-white",u(e,r)&&"text-white",!a(e,r)&&s(e)&&"text-cu-red",!a(e,r)&&!s(e)&&y(e,i)&&"text-cu-black-900",!a(e,r)&&!s(e)&&!y(e,i)&&"text-cu-black-400",a(e,r)&&s(e)&&"bg-cu-red",a(e,r)&&!s(e)&&"bg-cu-red",u(e,r)&&s(e)&&"bg-cu-red",u(e,r)&&!s(e)&&"bg-cu-red",!a(e,r)&&"hover:bg-cu-red hover:text-white",(a(e,r)||s(e))&&"font-semibold","mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:bg-cu-black-50 disabled:text-cu-black-900"),children:t.jsx("time",{dateTime:o(e,"yyyy-MM-dd"),children:o(e,"d")})}),t.jsx("div",{className:"w-1 h-1 mx-auto mt-1",children:(n==null?void 0:n.some(F=>u(U(F.startDatetime),e)))&&t.jsx("div",{className:"w-1 h-1 rounded-full bg-sky-500"})})]},e.toString()))}),N&&t.jsx("div",{className:"mt-4",children:t.jsx(O,{title:"Clear Calendar",isSmall:!0,onClick:()=>{b(new Date),f(!1)}})})]})};h.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{events:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number
  name: string
  imageUrl: string
  startDatetime: string
  endDatetime: string
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"imageUrl",value:{name:"string",required:!0}},{key:"startDatetime",value:{name:"string",required:!0}},{key:"endDatetime",value:{name:"string",required:!0}}]}}],raw:`{
  id: number
  name: string
  imageUrl: string
  startDatetime: string
  endDatetime: string
}[]`},description:""},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(d: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"d"}],return:{name:"void"}}},description:""},defaultDate:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Components/Calendar",component:h,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},p={args:{events:W.events},render:n=>{const[,l]=c.useState(new Date),d=c.useCallback(m=>{l(m)},[l]);return t.jsx(h,{events:n.events,callback:d})}};var D,M,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    events: CalendarData.events
  },
  render: args => {
    const [, setSelectedDate] = useState(new Date());
    const callbackcal = useCallback((itemSelected: Date) => {
      setSelectedDate(itemSelected);
    }, [setSelectedDate]);
    return <Calendar events={args.events} callback={callbackcal} />;
  }
}`,...(k=(M=p.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const ae=["Primary"];export{p as Primary,ae as __namedExportsOrder,se as default};
