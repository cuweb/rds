import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{F as M}from"./ChevronDownIcon-gc4pqSrO.js";import"./_commonjsHelpers-BosuxZz1.js";function G({title:t,titleId:r,...n},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}const U=s.forwardRef(G);function Z({title:t,titleId:r,...n},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))}const Y=s.forwardRef(Z),B=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],m={tableGlobal:"p-3 md:p-4 text-left align-text-top",tableHeaderRow:"font-semibold text-sm md:text-base",tableBodyRow:"text-sm md:text-base",borders:"border-b border-cu-black-100 last:border-none",striped:"odd:bg-white even:bg-cu-black-25",cellWidth:"min-w-48"},F=({columns:t,noWordBreak:r,sortData:n})=>{const[i,o]=s.useState(!0),[d,c]=s.useState(""),u=r?"whitespace-nowrap":"",l=e=>{const b=e;let f=!0;e===d&&(f=!i),c(b),o(f),n(b,f)},p=s.useRef(!1);s.useEffect(()=>{if(!p.current){const e=t.find(b=>b.default);e&&(c(e.key),o((e==null?void 0:e.order)==="ascending"),n(e.key,(e==null?void 0:e.order)==="ascending")),p.current=!0}},[t,n]);const x=t.map((e,b)=>{var T,S,R,j,E;const f=(T=e==null?void 0:e.sort)!=null&&T.sortable?"hover:cursor-pointer":"hover:cursor-auto";return a.jsx("th",{scope:"col",className:`${m.tableGlobal} ${m.tableHeaderRow} ${f} ${u} ${e.header.length>20?m.cellWidth:""}`,onClick:()=>{var D;return(D=e==null?void 0:e.sort)!=null&&D.sortable?l(e.key):void 0},"aria-sort":e.key===d&&i?"descending":e.key===d&&!i?"ascending":void 0,children:(S=e.sort)!=null&&S.sortable?a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{children:e.header}),e.key===d&&i?a.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(R=e==null?void 0:e.sort)!=null&&R.sortable?"Sort "+e.key+" by ascending order":void 0,children:a.jsx(M,{className:"inline-block"})}):e.key===d&&!i?a.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(j=e==null?void 0:e.sort)!=null&&j.sortable?"Sort "+e.key+" by descending order":void 0,children:a.jsx(Y,{className:"inline-block"})}):a.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(E=e==null?void 0:e.sort)!=null&&E.sortable?"Sort by "+e.key:void 0,children:a.jsx(U,{className:"inline-block"})})]}):e.header},`headerCell-${b}`)});return a.jsx("thead",{className:"border-b border-cu-black-200 bg-cu-black-50",children:a.jsx("tr",{children:x})})};F.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},noWordBreak:{required:!0,tsType:{name:"boolean"},description:""},sortData:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: string, s: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"a"},{type:{name:"boolean"},name:"s"}],return:{name:"void"}}},description:""}}};const H=({data:t,columns:r,striped:n})=>{const i=n?`${m.striped} ${m.borders}`:m.borders,o=t.map((d,c)=>a.jsx("tr",{className:i,children:r.map((u,l)=>{const p=d[u.key],x=typeof p=="string"&&p.length>20;return a.jsx("td",{className:`${m.tableGlobal} ${m.tableBodyRow} ${x?m.cellWidth:""}`,children:p},`cell-${l}`)})},`row-${c}`));return a.jsx("tbody",{children:o})};H.__docgenInfo={description:"",methods:[],displayName:"TableRows",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},striped:{required:!0,tsType:{name:"boolean"},description:""},range:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const P=t=>{const[r,n]=s.useState(t);return s.useEffect(()=>{n(t)},[t]),[r,(o,d)=>{if(o){const c=[...r].sort((u,l)=>u[o]===null?1:l[o]===null?-1:u[o]===null&&l[o]===null?0:u[o].toString().localeCompare(l[o].toString(),"en",{numeric:!0})*(d?1:-1));n(c)}}]},I=({data:t,columns:r,hasStripes:n=!1,noWordBreak:i=!1,range:o=[1,-1]})=>{const[d,c]=P(t),u=s.useRef(!1);return s.useEffect(()=>{if(!u.current){const l=r.find(p=>p.default);l&&c(l.key,(l==null?void 0:l.order)==="ascending"),u.current=!0}},[r,c]),a.jsx("div",{className:"cu-table cu-component-spacing not-prose overflow-x-auto rounded-lg shadow-lg",children:a.jsxs("table",{className:"min-w-full table-auto cu-table",children:[a.jsx(F,{columns:r,noWordBreak:i,sortData:c}),a.jsx(H,{data:d,columns:r,striped:n,range:o})]})})};I.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},hasStripes:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noWordBreak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},range:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[1, -1]",computed:!1}}}};const te={title:"Components/Table",component:I,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=B.map(t=>{const r="http://thing/"+t.id;return{...t,link:a.jsx("a",{className:"font-semibold text-cu-red",href:r,children:"Edit"})}}),k=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],g={};g.args={data:v,columns:k,hasStripes:!1};const h={};h.args={data:v,columns:k,hasStripes:!0};const y={};y.args={data:v,columns:k,hasStripes:!1,range:[1,3]};const w={};w.args={data:v,columns:k,hasStripes:!1,range:[4,5]};var C,q,N;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(N=(q=g.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var W,$,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var J,X,_;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(_=(X=y.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var O,L,V;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(V=(L=w.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const re=["Default","WithStripes","WithRangeOne","WithRangeTwo"];export{g as Default,y as WithRangeOne,w as WithRangeTwo,h as WithStripes,re as __namedExportsOrder,te as default};
