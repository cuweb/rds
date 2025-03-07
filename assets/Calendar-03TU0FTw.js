import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-7sdMIo0z.js";import{B as A}from"./Button-Cv42MwLr.js";import{s as B,e as F,a as I,i as O,g as G}from"./startOfToday-DeT6s1iW.js";import{t as u,f as o}from"./format-CoDaAjhx.js";import{p as R}from"./parse-BKaVvLnB.js";import{F as U,a as W}from"./ChevronRightIcon-GLw6KIlN.js";import{p as M}from"./parseISO-53XxuXUY.js";import{i as m}from"./isSameDay-D4TUG8v2.js";import{i as n,a as w,b as D}from"./isToday-m3KsBfIu.js";function i(a,c){return+u(a)==+u(c)}function _(a,c,s){const d=+u(a,s==null?void 0:s.in),[r,x]=[+u(c.start,s==null?void 0:s.in),+u(c.end,s==null?void 0:s.in)].sort((g,h)=>g-h);return d>=r&&d<=x}const f={prevNextArrows:"flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red",calendarGrid:"grid grid-cols-7 gap-px mt-4 text-center"},N=(...a)=>a.filter(Boolean).join(" "),P=({events:a,callback:c,defaultDate:s})=>{const d=B(),[r,x]=b.useState(s?new Date(s):new Date),[g,h]=b.useState(o(d,"MMM-yyyy")),[k,p]=b.useState(!1),l=R(g,"MMM-yyyy",new Date),C=["","col-start-2","col-start-3","col-start-4","col-start-5","col-start-6","col-start-7"],S=F({start:l,end:I(l)}),T=()=>{const e=D(l,{months:-1});h(o(e,"MMM-yyyy"))},q=()=>{const e=D(l,{months:1});h(o(e,"MMM-yyyy"))};return b.useEffect(()=>{c(r)},[r,c]),t.jsxs("div",{className:"cu-calendar cu-component-updated not-prose",children:[t.jsxs("div",{className:"flex items-center py-2 mb-6 bg-white border rounded-lg border-cu-black-100",children:[t.jsxs("button",{type:"button",onClick:T,className:`${f.prevNextArrows}`,children:[t.jsx("span",{className:"text-base sr-only",children:"Previous month"}),t.jsx(U,{className:"w-5 h-5","aria-hidden":"true"})]}),t.jsx("h2",{className:"flex-auto text-base font-semibold text-center text-cu-black-900",children:o(l,"MMMM yyyy")}),t.jsxs("button",{onClick:q,type:"button",className:`${f.prevNextArrows}`,children:[t.jsx("span",{className:"text-base sr-only",children:"Next month"}),t.jsx(W,{className:"w-5 h-5","aria-hidden":"true"})]})]}),t.jsxs("div",{className:`${f.calendarGrid} text-xs text-cu-black-600`,children:[t.jsx("div",{children:"S"}),t.jsx("div",{children:"M"}),t.jsx("div",{children:"T"}),t.jsx("div",{children:"W"}),t.jsx("div",{children:"T"}),t.jsx("div",{children:"F"}),t.jsx("div",{children:"S"})]}),t.jsx("div",{className:`${f.calendarGrid} isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50 text-sm`,children:S.map((e,E)=>{const $=a==null?void 0:a.some(j=>{const y=M(j.startDatetime),v=M(j.endDatetime);return m(y,e)||m(v,e)||_(e,{start:y,end:v})});return t.jsxs("div",{className:N(E===0&&C[G(e)],"bg-white py-2"),children:[t.jsx("button",{type:"button",disabled:O(e,d),onClick:()=>{x(e),p(!0)},className:N(i(e,r)&&"text-white",m(e,r)&&"text-white",!i(e,r)&&n(e)&&"text-cu-red",!i(e,r)&&!n(e)&&w(e,l)&&"text-cu-black-900",!i(e,r)&&!n(e)&&!w(e,l)&&"text-cu-black-400",i(e,r)&&n(e)&&"bg-cu-red",i(e,r)&&!n(e)&&"bg-cu-red",m(e,r)&&n(e)&&"bg-cu-red",m(e,r)&&!n(e)&&"bg-cu-red",!i(e,r)&&"hover:bg-cu-red hover:text-white",(i(e,r)||n(e))&&"font-semibold","mx-auto flex h-8 w-8 items-center justify-center rounded-full disabled:bg-cu-black-50 disabled:text-cu-black-900"),children:t.jsx("time",{dateTime:o(e,"yyyy-MM-dd"),children:o(e,"d")})}),$&&t.jsx("div",{className:"w-1.5 h-1.5 mx-auto mt-1 rounded-full bg-cu-red"})]},e.toString())})}),k&&t.jsx("div",{className:"mt-4",children:t.jsx(A,{title:"Clear Calendar",isSmall:!0,onClick:()=>{x(new Date),p(!1)}})})]})};P.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{events:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(d: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"d"}],return:{name:"void"}}},description:""},defaultDate:{required:!1,tsType:{name:"string"},description:""}}};export{P as C};
