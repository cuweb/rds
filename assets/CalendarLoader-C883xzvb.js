import{j as e}from"./jsx-runtime-B9B14buI.js";import{B as i}from"./ButtonLoader-qJ5P2_hF.js";import{r as m}from"./index-DxDX2vOa.js";import{F as x}from"./ChevronLeftIcon-CD-MK-pl.js";import{F as u}from"./ChevronRightIcon-BJuDmZXS.js";import{s as h,e as p,a as j,g as f,i as b}from"./startOfToday-D0O5DQ5P.js";import{f as y}from"./format-Dt71a7ij.js";import{p as v}from"./parse-gVNmX4me.js";const s={prevNextArrows:"flex items-center justify-center flex-none p-2 text-cu-black-800 hover:text-cu-red",calendarGrid:"grid grid-cols-7 gap-px mt-4 text-center",element:"w-8 h-8 bg-cu-black-200 rounded-full "},N=(...t)=>t.filter(Boolean).join(" "),g=({showClearButton:t})=>{const a=h(),[o]=m.useState(y(a,"MMM-yyyy")),n=v(o,"MMM-yyyy",new Date),c=["","col-start-2","col-start-3","col-start-4","col-start-5","col-start-6","col-start-7"],l=p({start:n,end:j(n)});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"animate-pulse",children:e.jsxs("div",{className:"cu-calendar cu-component not-prose",children:[e.jsxs("div",{className:"flex items-center py-2 mb-6 bg-white border rounded-lg border-cu-black-100",children:[e.jsxs("button",{type:"button",className:`${s.prevNextArrows}`,children:[e.jsx("span",{className:"text-base sr-only",children:"Previous month"}),e.jsx(x,{className:"w-5 h-5","aria-hidden":"true"})]}),e.jsx("div",{className:"flex items-center justify-center   mx-auto",children:e.jsx("span",{className:"block h-6 w-48 rounded-md bg-cu-black-200"})}),e.jsxs("button",{type:"button",className:`${s.prevNextArrows}`,children:[e.jsx("span",{className:"text-base sr-only",children:"Next month"}),e.jsx(u,{className:"w-5 h-5","aria-hidden":"true"})]})]}),e.jsxs("div",{className:`${s.calendarGrid} text-xs text-cu-black-600`,children:[e.jsx("div",{children:"S"}),e.jsx("div",{children:"M"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"W"}),e.jsx("div",{children:"T"}),e.jsx("div",{children:"F"}),e.jsx("div",{children:"S"})]}),e.jsx("div",{className:`${s.calendarGrid} isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50 text-sm`,children:l.map((r,d)=>e.jsxs("div",{className:N(d===0&&c[f(r)],"bg-white py-2"),children:[e.jsx("button",{type:"button",disabled:b(r,a),children:e.jsx("div",{className:s.element})}),e.jsx("div",{className:"w-1 h-1 mx-auto mt-1"})]},r.toString()))}),t&&e.jsx("div",{className:"mt-4 flex justify-center items-center",children:e.jsx(i,{number:1,isSmall:!0})})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"CalendarLoader",props:{showClearButton:{required:!1,tsType:{name:"boolean"},description:""}}};export{g as C};
