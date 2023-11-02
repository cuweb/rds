import{j as e}from"./jsx-runtime-7ce7b810.js";import{r as $,R as q}from"./index-37ba2b57.js";import{X as R,C as D,S as F,E as M,I as V}from"./ShieldExclamationIcon-329ffa93.js";import{t as L}from"./transition-271b59c1.js";import"./_commonjsHelpers-de833af9.js";const O=({children:t})=>e.jsx("div",{"aria-live":"assertive",className:"cu-alert not-prose top-20",children:e.jsx("div",{className:"w-full items-center space-y-4 sm:items-end",children:t})}),b=({children:t})=>e.jsx("h3",{className:"font-medium ",children:t}),N=({children:t})=>e.jsx("div",{className:"mt-2 ",children:t}),P=({children:t,type:s,textSize:d="small",isPersistent:k=!1})=>{const[w,I]=$.useState(!0),_=d==="small"?"text-sm":"text-lg",E=d==="small"?"h-5 w-5":"h-8 w-8",n={success:{icon:D,text:"text-green-600",bg:"bg-green-50"},warning:{icon:F,text:"text-yellow-600",bg:"bg-yellow-50"},error:{icon:M,text:"text-cu-red-600",bg:"bg-cu-red-50"},info:{icon:V,text:"text-blue-600",bg:"bg-blue-50"}};return e.jsx(L,{show:w,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`rounded-md ${n[s].bg} p-4`,children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:q.createElement(n[s].icon,{className:`${E} ${n[s].text}`,"aria-hidden":"true"})}),e.jsx("div",{className:`ml-3 ${n[s].text} ${_}`,children:t}),e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("div",{className:"-mx-1.5 -my-1.5",children:!k&&e.jsxs("button",{type:"button",className:`inline-flex rounded-md ${n[s].bg} p-1.5 ${n[s].text} hover:${n[s].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`,onClick:()=>{I(!1)},children:[e.jsx("span",{className:"sr-only",children:"Dismiss"}),e.jsx(R,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})})};P.displayName="Alert";b.displayName="Alert.Title";N.displayName="Alert.Content";const r=Object.assign(P,{Alerter:O,Title:b,Content:N});try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},textSize:{defaultValue:{value:"small"},description:"",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},isPersistent:{defaultValue:{value:"false"},description:"",name:"isPersistent",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Alert",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},X=[{type:"success",title:"Success!",content:"Records have been updated.",textSize:"small",isPersistent:!1},{type:"error",title:"Error!",content:"Unable to save record.",textSize:"small",isPersistent:!1},{type:"warning",title:"Warning",content:"You have lost internet connectivity",textSize:"small",isPersistent:!1},{type:"info",title:"Information",content:"You look like you need some coffee.",textSize:"small",isPersistent:!1}],l={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,isPersistent:t.isPersistent,textSize:t.textSize,children:[e.jsx(r.Title,{children:"Title"}),e.jsx(r.Content,{children:"Content goes here"})]},111)})};l.args={type:"success"};const a={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};a.args={type:"success"};const o={render:()=>e.jsx(r.Alerter,{children:X.map((t,s)=>e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:t.title}),e.jsx(r.Content,{children:t.content})]},s))})},i={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,isPersistent:!0,textSize:t.textSize,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};i.args={type:"success"};const c={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,textSize:t.textSize,isPersistent:!0,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};c.args={type:"success",textSize:"large"};var u,m,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent={args.isPersistent} textSize={args.textSize}>
        <Alert.Title>Title</Alert.Title>
        <Alert.Content>Content goes here</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,A,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(y=(A=a.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var g,h,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Alert.Alerter>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>;
    })}
    </Alert.Alerter>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,j,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent textSize={args.textSize}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,T,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} textSize={args.textSize} isPersistent>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const J=["Default","Multiline","Stacked","Persistant","LargeText"];export{l as Default,c as LargeText,a as Multiline,i as Persistant,o as Stacked,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Alert.stories-cb0a1864.js.map
