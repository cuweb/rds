import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{r as c}from"./index-yDOeu_rT.js";import{u as p}from"./useLinkContext-Fm1c2FUv.js";import{F as d}from"./MagnifyingGlassIcon-B8ROMLFy.js";const u=({resultsData:r})=>{const[s,n]=c.useState(!0),o=e=>{if(e){const a=String(e.url);window.location.href=a,n(!1)}};c.useEffect(()=>{function e(a){a.key==="k"&&(a.metaKey||a.ctrlKey)&&n(!s)}return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[s]);const l=p();return t.jsx(t.Fragment,{children:s&&t.jsx(t.Fragment,{children:r&&r.length>0&&t.jsx("ul",{className:"py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2",children:r.map(e=>t.jsx("li",{className:"px-4 py-2 cursor-default select-none hover:bg-cu-black-50 hover:rounded-md text-cu-black-800",onClick:()=>o(e),children:t.jsx(l,{href:`${e.url}`,onClick:()=>n(!1),children:e.title})},e.id))})})})};u.displayName="SearchInput.Results";u.__docgenInfo={description:"",methods:[],displayName:"SearchInput.Results",props:{resultsData:{required:!0,tsType:{name:"Array",elements:[{name:"SourceDataProps"}],raw:"SourceDataProps[]"},description:""}}};const i=({callback:r,placeholder:s="Search",children:n})=>{const[o,l]=c.useState(""),e=a=>{l(a.target.value)};return c.useEffect(()=>{r(o)},[o,r]),t.jsxs("div",{className:"cu-search cu-component-updated relative items-center not-prose",children:[t.jsx(d,{className:"absolute top-3 w-5 h-5 left-4 text-cu-black-300","aria-hidden":"true"}),t.jsx("input",{className:"w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11 text-cu-black-800 placeholder-cu-black-300 focus:border-cu-black-300 focus:ring-0",id:"search__input",name:"search",type:"search",autoComplete:"off",placeholder:s,onChange:e,value:o}),t.jsx("div",{className:"relative w-full",children:n})]})},x=Object.assign(i,{Results:u});i.displayName="Search Input";i.__docgenInfo={description:"",methods:[],displayName:"Search Input",props:{callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(k: string) => void",signature:{arguments:[{type:{name:"string"},name:"k"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{x as S};
