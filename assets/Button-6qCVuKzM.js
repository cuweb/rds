import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{I as m}from"./Icon-DMbNrQi4.js";const p=({color:s="red",title:e,icon:a,type:n="button",isSmall:u,isFull:r,isDisabled:o,ariaLabel:l="aria-label",...d})=>{const c=o?"cu-button--disabled":`cu-button--${s}`,f=r?"cu-button--full":"",b=u?"cu-button--small":"",i=u?4:6;return t.jsxs("button",{type:n,"aria-label":l||e,className:`cu-button not-prose ${c} ${b} ${f}`,disabled:!!o,...d,children:[a&&t.jsx("span",{className:e?"mr-0.5":"",children:t.jsx(m,{icon:a,size:i})}),e]})};p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{defaultValue:{value:"'red'",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},ariaLabel:{defaultValue:{value:"'aria-label'",computed:!1},required:!1}}};export{p as B};
