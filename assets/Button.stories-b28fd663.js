import{a as b,F as ee,j as s}from"./jsx-runtime-9d2cd5de.js";import{I as B,C,L as re}from"./Link-0896e667.js";import{r as te}from"./index-580b8df0.js";import"./tailwindClasses-ecd93873.js";import"./_commonjsHelpers-042e6b4d.js";const o={core:"not-prose inline-flex gap-1 items-center justify-center font-medium rounded-md focus:outline-none",default:"bg-cu-red text-white hover:bg-cu-black-600",ghost:"border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white",grey:"text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white","dark-grey":"text-white bg-cu-black-600 hover:bg-cu-red hover:text-white",white:"text-cu-black bg-white hover:bg-cu-black hover:text-white",shadow:"shadow-md",disabled:"disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600"},D={sm:"px-3 py-2 text-sm",base:"px-4 py-3 text-base",lg:"px-6 py-4 text-xl"},y=({isType:t="default",size:a="base",title:e,icon:r,hasShadow:Q,isFull:U,isCenter:X,url:g,hasDropDown:f,...Z})=>{const w=Q?o.shadow:"",v=U?"w-full":"",x=X?"relative left-1/2 -translate-x-1/2 ":"",k=a==="base"?"6":"4";return b(ee,{children:[!g&&b("button",{type:"button","aria-label":e||"Icon button",className:`${o.core}  ${o[t]}  ${D[a]} ${w} ${v} ${x}  `,disabled:t==="disabled",...Z,children:[r&&s("span",{className:r&&e?"mr-0.5":"",children:s(B,{icon:r,size:k})}),e,f&&s(C,{className:"mt-1 ml-1 -mr-1 h-4 w-4","aria-hidden":"true"})]}),g&&b(re,{href:g,className:`${o.core}  ${o[t]}  ${D[a]} ${w} ${v} ${x}  `,children:[r&&s("span",{className:r&&e?"mr-0.5":"",children:s(B,{icon:r,size:k})}),e,f&&s(C,{className:"mt-1 ml-1 -mr-1 h-4 w-4","aria-hidden":"true"})]})]})};try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},isType:{defaultValue:{value:"default"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'},{value:'"ghost"'},{value:'"grey"'},{value:'"dark-grey"'},{value:'"white"'}]}},size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'}]}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}},isFull:{defaultValue:null,description:"",name:"isFull",required:!1,type:{name:"boolean"}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},hasDropDown:{defaultValue:null,description:"",name:"hasDropDown",required:!1,type:{name:"boolean"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}}}}}catch{}const h=te;function ae({title:t,titleId:a,...e},r){return h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},e),t?h.createElement("title",{id:a},t):null,h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}const se=h.forwardRef(ae);var oe=se,ne=oe;const me={title:"Components/Button",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}},parameters:{controls:{sort:"requiredFirst"}}},n={};n.args={title:"Primary Red",isType:"default",size:"base",url:"",hasShadow:!1,isFull:!1,isCenter:!1,hasDropDown:!1,isDisabled:!1,onClick:()=>{alert("You clicked the button")}};const l={args:{title:"Dark Grey Button",isType:"dark-grey"}},i={args:{title:"Light Grey Button",isType:"grey"}},c={args:{title:"White Button",isType:"white"}},u={args:{title:"Ghost Button",isType:"ghost"}},d={args:{title:"Centered Button",isCenter:!0}},m={args:{title:"Full Width Button",isFull:!0}},p={args:{title:"Icon Button",icon:ne}};var S,F,$;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...($=(F=n.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var G,I,q;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Dark Grey Button',
    isType: 'dark-grey'
  }
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var _,T,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Light Grey Button',
    isType: 'grey'
  }
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var W,L,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'White Button',
    isType: 'white'
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var j,z,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Ghost Button',
    isType: 'ghost'
  }
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var A,R,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Centered Button',
    isCenter: true
  }
}`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var H,M,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Full Width Button',
    isFull: true
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var Y,J,K;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Icon Button',
    icon: ArrowDownCircleIcon
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const pe=["Primary","DarkGrey","LightGrey","White","Ghost","Center","FullWidth","HasIcon"];export{d as Center,l as DarkGrey,m as FullWidth,u as Ghost,p as HasIcon,i as LightGrey,n as Primary,c as White,pe as __namedExportsOrder,me as default};
//# sourceMappingURL=Button.stories-b28fd663.js.map
