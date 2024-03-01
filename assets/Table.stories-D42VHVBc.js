import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";import{C as Q}from"./ChevronDownIcon-DCf8Nrl_.js";import"./_commonjsHelpers-BosuxZz1.js";function X({title:a,titleId:t,...o},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},o),a?l.createElement("title",{id:t},a):null,l.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}const ee=l.forwardRef(X),ae=ee;function re({title:a,titleId:t,...o},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},o),a?l.createElement("title",{id:t},a):null,l.createElement("path",{fillRule:"evenodd",d:"M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",clipRule:"evenodd"}))}const te=l.forwardRef(re),se=te,oe=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team"},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps"},{id:3,title:"Captivating Captions: Why We Use Captions on Videos"},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team"},{id:5,title:"How to Write for the Web"}],i={table:"not-prose min-w-full border-collapse overflow-hidden rounded-lg",shadow:"shadow-lg",border:"border border-cu-black-300/50",thead:"bg-cu-black-50 font-semibold text-cu-black-900 border-b border-cu-black-300/50",tbody:"divide-y divide-cu-black-300/50 bg-white",td:"px-4 py-3.5 text-sm text-cu-black-600",striped:"odd:bg-white even:bg-cu-black-50/50 border-none"},x=({columns:a,sortData:t})=>{const[o,n]=l.useState(!0),[s,c]=l.useState(""),u=e=>{const m=e;let b=!0;e===s&&(b=!o),c(m),n(b),t(m,b)},d=a.map((e,m)=>{var j,C,R;const b=(j=e==null?void 0:e.sort)!=null&&j.sortable?"hover:cursor-pointer":"hover:cursor-auto";return r.jsx("th",{scope:"col",className:`${i.thead} ${i.td} ${b}`,onClick:()=>{var N;return(N=e==null?void 0:e.sort)!=null&&N.sortable?u(e.key):void 0},"aria-sort":e.key===s&&o?"descending":e.key===s&&!o?"ascending":void 0,"aria-label":(C=e==null?void 0:e.sort)!=null&&C.sortable?"Sort by "+e.key:void 0,children:(R=e.sort)!=null&&R.sortable?r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{children:e.header}),e.key===s&&o?r.jsx(Q,{className:"ml-2 inline-block h-4 w-4"}):e.key===s&&!o?r.jsx(se,{className:"ml-2 inline-block h-4 w-4"}):r.jsx(ae,{className:"ml-2 inline-block h-4 w-4"})]}):e.header},`headerCell-${m}`)});return r.jsx("thead",{className:i.thead,children:r.jsx("tr",{children:d})})};try{x.displayName="TableHeader",x.__docgenInfo={description:"",displayName:"TableHeader",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnDefinitionType[]"}},sortData:{defaultValue:null,description:"",name:"sortData",required:!0,type:{name:"(a: string, s: boolean) => void"}}}}}catch{}const k=({data:a,columns:t,striped:o})=>{const n=o?i.striped:"",s=a.map((c,u)=>r.jsx("tr",{className:`${n}`,children:t.map((d,e)=>r.jsx("td",{className:`${i.td}`,children:r.jsx(r.Fragment,{children:c[d.key]})},`cell-${e}`))},`row-${u}`));return r.jsx("tbody",{className:i.tbody,children:s})};try{k.displayName="TableRows",k.__docgenInfo={description:"",displayName:"TableRows",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ [k: string]: string | number | Element; }[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnDefinitionType[]"}},striped:{defaultValue:null,description:"",name:"striped",required:!0,type:{name:"boolean"}},range:{defaultValue:null,description:"",name:"range",required:!0,type:{name:"number[]"}}}}}catch{}const T=a=>{const[t,o]=l.useState(a);return l.useEffect(()=>{o(a)},[a]),[t,(s,c)=>{if(s){const u=[...t].sort((d,e)=>d[s]===null?1:e[s]===null?-1:d[s]===null&&e[s]===null?0:d[s].toString().localeCompare(e[s].toString(),"en",{numeric:!0})*(c?1:-1));o(u)}}]};try{T.displayName="useSortableTable",T.__docgenInfo={description:"",displayName:"useSortableTable",props:{}}}catch{}const D=({data:a,columns:t,hasStripes:o=!1,hasShadow:n,hasBorder:s,range:c=[1,-1]})=>{const[u,d]=T(a),e=s?i.border:"",m=n?i.shadow:"";return r.jsxs("table",{className:`cu-table ${i.table} ${e} ${m}`,children:[r.jsx(x,{columns:t,sortData:d}),r.jsx(k,{data:u,columns:t,striped:o,range:c})]})};try{D.displayName="Table",D.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ [k: string]: string | number | Element; }[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnDefinitionType[]"}},hasStripes:{defaultValue:{value:"false"},description:"",name:"hasStripes",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},range:{defaultValue:{value:"[1, -1]"},description:"",name:"range",required:!1,type:{name:"number[]"}}}}}catch{}const ce={title:"Components/Table",component:D,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},p=oe.map(a=>{const t="http://thing/"+a.id;return{...a,link:r.jsx(r.Fragment,{children:r.jsx("a",{className:"text-cu-red",href:t,children:"Edit"})})}}),h=[{key:"id",header:"ID",sort:{sortable:!0}},{key:"title",header:"Title",sort:{sortable:!0}},{key:"link",header:"Edit",sort:{sortable:!1}}],f={};f.args={data:p,columns:h,hasStripes:!1,hasBorder:!1,hasShadow:!1};const g={};g.args={data:p,columns:h,hasStripes:!0,hasBorder:!1,hasShadow:!1};const w={};w.args={data:p,columns:h,hasStripes:!1,hasBorder:!1,hasShadow:!0};const y={};y.args={data:p,columns:h,hasStripes:!0,hasBorder:!0,hasShadow:!1};const S={};S.args={data:p,columns:h,hasStripes:!0,hasBorder:!0,hasShadow:!0};const v={};v.args={data:p,columns:h,hasStripes:!1,hasBorder:!1,hasShadow:!1,range:[1,3]};const _={};_.args={data:p,columns:h,hasStripes:!1,hasBorder:!1,hasShadow:!1,range:[4,5]};var E,W,$;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,V,B;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(B=(V=g.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var I,O,F;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(F=(O=w.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var U,A,H;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(H=(A=y.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,Z,M;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(M=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var Y,z,G;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,P;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(P=(K=_.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ue=["Default","WithStripes","WithShadow","WithBorder","ShadowAndBorder","WithRangeOne","WithRangeTwo"];export{f as Default,S as ShadowAndBorder,y as WithBorder,v as WithRangeOne,_ as WithRangeTwo,w as WithShadow,g as WithStripes,ue as __namedExportsOrder,ce as default};