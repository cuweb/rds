import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";const r=({children:s,as:l="li",isBold:t=!1,iconName:a})=>{const i=l,o=t?"font-bold":"",n=`https://cdn.carleton.ca/rds/assets/font-awesome/${a}.svg`;return e.jsx(i,{className:`${o} ${a?"flex align-top":""}`,children:a?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"block w-6 flex-none mr-4",children:e.jsx("img",{src:n,alt:`${a} icon`,className:"w-6 h-6 mt-1.5"})}),e.jsx("p",{children:s})]}):s})};r.displayName="Details.Item";r.__docgenInfo={description:"",methods:[],displayName:"Details.Item",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"literal",value:"'li'"},description:"",defaultValue:{value:"'li'",computed:!1}},isBold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:""}}};const d=({children:s,as:l="ul",hasDividers:t=!1,isGrey:a=!1})=>{const i=l,o=a?"bg-cu-black-50 rounded-xl py-5 px-8":"",n=t?"cu-details--dividers":"";return e.jsx(i,{className:`cu-details not-prose ${o} ${n}`,children:s})},p=Object.assign(d,{Item:r});d.displayName="Details";d.__docgenInfo={description:"",methods:[],displayName:"Details",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"union",raw:"'ul' | 'ol'",elements:[{name:"literal",value:"'ul'"},{name:"literal",value:"'ol'"}]},description:"",defaultValue:{value:"'ul'",computed:!1}},hasDividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isGrey:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{p as D};
