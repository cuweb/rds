import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as o}from"./index-CBqU2yxZ.js";import{F as I}from"./ChevronDownIcon-CBYqtwAX.js";import"./_commonjsHelpers-BosuxZz1.js";function G({title:r,titleId:a,...i},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},i),r?o.createElement("title",{id:a},r):null,o.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}const U=o.forwardRef(G);function Z({title:r,titleId:a,...i},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},i),r?o.createElement("title",{id:a},r):null,o.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))}const M=o.forwardRef(Z),Y=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],d={tableGlobal:"p-3 md:p-4 text-left align-text-top",tableHeaderRow:"font-semibold text-sm md:text-base",tableBodyRow:"text-sm md:text-base",borders:"border-b border-cu-black-100 last:border-none",striped:"odd:bg-white even:bg-cu-black-25",cellWidth:"min-w-48"},V=({columns:r,noWordBreak:a,sortData:i})=>{const[s,n]=o.useState(!0),[l,u]=o.useState(""),c=a?"whitespace-nowrap":"",m=e=>{const w=e;let b=!0;e===l&&(b=!s),u(w),n(b),i(w,b)},p=r.map((e,w)=>{var T,k,S,j,R;const b=(T=e==null?void 0:e.sort)!=null&&T.sortable?"hover:cursor-pointer":"hover:cursor-auto";return t.jsx("th",{scope:"col",className:`${d.tableGlobal} ${d.tableHeaderRow} ${b} ${c} ${e.header.length>20?d.cellWidth:""}`,onClick:()=>{var C;return(C=e==null?void 0:e.sort)!=null&&C.sortable?m(e.key):void 0},"aria-sort":e.key===l&&s?"descending":e.key===l&&!s?"ascending":void 0,children:(k=e.sort)!=null&&k.sortable?t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{children:e.header}),e.key===l&&s?t.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(S=e==null?void 0:e.sort)!=null&&S.sortable?"Sort "+e.key+" by ascending order":void 0,children:t.jsx(I,{className:"inline-block"})}):e.key===l&&!s?t.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(j=e==null?void 0:e.sort)!=null&&j.sortable?"Sort "+e.key+" by descending order":void 0,children:t.jsx(M,{className:"inline-block"})}):t.jsx("button",{className:"block w-4 h-full ml-2","aria-label":(R=e==null?void 0:e.sort)!=null&&R.sortable?"Sort by "+e.key:void 0,children:t.jsx(U,{className:"inline-block"})})]}):e.header},`headerCell-${w}`)});return t.jsx("thead",{className:"border-b border-cu-black-200 bg-cu-black-50",children:t.jsx("tr",{children:p})})};V.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},noWordBreak:{required:!0,tsType:{name:"boolean"},description:""},sortData:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: string, s: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"a"},{type:{name:"boolean"},name:"s"}],return:{name:"void"}}},description:""}}};const F=({data:r,columns:a,striped:i})=>{const s=i?`${d.striped} ${d.borders}`:d.borders,n=r.map((l,u)=>t.jsx("tr",{className:s,children:a.map((c,m)=>{const p=l[c.key],e=typeof p=="string"&&p.length>20;return t.jsx("td",{className:`${d.tableGlobal} ${d.tableBodyRow} ${e?d.cellWidth:""}`,children:p},`cell-${m}`)})},`row-${u}`));return t.jsx("tbody",{children:n})};F.__docgenInfo={description:"",methods:[],displayName:"TableRows",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},striped:{required:!0,tsType:{name:"boolean"},description:""},range:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const B=r=>{const[a,i]=o.useState(r);return o.useEffect(()=>{i(r)},[r]),[a,(n,l)=>{if(n){const u=[...a].sort((c,m)=>c[n]===null?1:m[n]===null?-1:c[n]===null&&m[n]===null?0:c[n].toString().localeCompare(m[n].toString(),"en",{numeric:!0})*(l?1:-1));i(u)}}]},H=({data:r,columns:a,hasStripes:i=!1,noWordBreak:s=!1,range:n=[1,-1]})=>{const[l,u]=B(r);return t.jsx("div",{className:"not-prose overflow-x-auto rounded-lg shadow-lg",children:t.jsxs("table",{className:"min-w-full table-auto cu-table",children:[t.jsx(V,{columns:a,noWordBreak:s,sortData:u}),t.jsx(F,{data:l,columns:a,striped:i,range:n})]})})};H.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [k: string]: string | number | JSX.Element
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"string | number | JSX.Element",elements:[{name:"string"},{name:"number"},{name:"JSX.Element"}],required:!0}}]}}],raw:`{
  [k: string]: string | number | JSX.Element
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDefinitionType"}],raw:"ColumnDefinitionType[]"},description:""},hasStripes:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noWordBreak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},range:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[1, -1]",computed:!1}}}};const ee={title:"Components/Table",component:H,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v=Y.map(r=>{const a="http://thing/"+r.id;return{...r,link:t.jsx("a",{className:"font-semibold text-cu-red",href:a,children:"Edit"})}}),x=[{key:"id",header:"ID",sort:{sortable:!0}},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],f={};f.args={data:v,columns:x,hasStripes:!1};const g={};g.args={data:v,columns:x,hasStripes:!0};const h={};h.args={data:v,columns:x,hasStripes:!1,range:[1,3]};const y={};y.args={data:v,columns:x,hasStripes:!1,range:[4,5]};var D,E,q;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(q=(E=f.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var N,W,$;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...($=(W=g.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var A,J,X;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var _,O,L;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(L=(O=y.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const te=["Default","WithStripes","WithRangeOne","WithRangeTwo"];export{f as Default,h as WithRangeOne,y as WithRangeTwo,g as WithStripes,te as __namedExportsOrder,ee as default};
