import{j as e}from"./jsx-runtime-daf202a7.js";import{r as u,R as q}from"./index-ec8b93d8.js";import{$ as F}from"./transition-cad67125.js";import{X as R,C as D,S as M,E as V,I as L}from"./XMarkIcon-72c6d1e1.js";import"./_commonjsHelpers-042e6b4d.js";import"./open-closed-aa2934ca.js";const O=({children:t})=>e.jsx("div",{"aria-live":"assertive",className:"cu-alert not-prose top-20",children:e.jsx("div",{className:"w-full items-center space-y-4 sm:items-end",children:t})}),k=({children:t})=>e.jsx("h3",{className:"font-medium ",children:t}),w=({children:t})=>e.jsx("div",{className:"mt-2 ",children:t}),z=({children:t,type:s,textSize:d="small",isPersistent:I=!1})=>{const[_,$]=u.useState(!0),E=d==="small"?"text-sm":"text-lg",P=d==="small"?"h-5 w-5":"h-8 w-8",n={success:{icon:D,text:"text-green-600",bg:"bg-green-50"},warning:{icon:M,text:"text-yellow-600",bg:"bg-yellow-50"},error:{icon:V,text:"text-cu-red-600",bg:"bg-cu-red-50"},info:{icon:L,text:"text-blue-600",bg:"bg-blue-50"}};return e.jsx(F,{show:_,as:u.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`rounded-md ${n[s].bg} p-4`,children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:q.createElement(n[s].icon,{className:`${P} ${n[s].text}`,"aria-hidden":"true"})}),e.jsx("div",{className:`ml-3 ${n[s].text} ${E}`,children:t}),e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("div",{className:"-mx-1.5 -my-1.5",children:!I&&e.jsxs("button",{type:"button",className:`inline-flex rounded-md ${n[s].bg} p-1.5 ${n[s].text} hover:${n[s].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`,onClick:()=>{$(!1)},children:[e.jsx("span",{className:"sr-only",children:"Dismiss"}),e.jsx(R,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})})};z.displayName="Alert";k.displayName="Alert.Title";w.displayName="Alert.Content";const r=Object.assign(z,{Alerter:O,Title:k,Content:w});try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},textSize:{defaultValue:{value:"small"},description:"",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},isPersistent:{defaultValue:{value:"false"},description:"",name:"isPersistent",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Components/Alert",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},X=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],l={render:t=>e.jsx(r.Alerter,{children:e.jsx(r,{type:t.type,children:e.jsx(r.Title,{children:"Success"})},111)})};l.args={type:"success"};const a={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};a.args={type:"success"};const o={render:()=>e.jsx(r.Alerter,{children:X.map((t,s)=>e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:t.title}),e.jsx(r.Content,{children:t.content})]},s))})},c={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,isPersistent:!0,textSize:t.textSize,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};c.args={type:"success"};const i={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,textSize:t.textSize,isPersistent:!0,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};i.args={type:"success",textSize:"large"};var m,p,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
      </Alert>
    </Alert.Alerter>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var A,y,g;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,f,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert.Alerter>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>;
    })}
    </Alert.Alerter>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,v,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent textSize={args.textSize}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,b,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} textSize={args.textSize} isPersistent>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const K=["Default","Multiline","Stacked","Persistant","LargeText"];export{l as Default,i as LargeText,a as Multiline,c as Persistant,o as Stacked,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Alert.stories-a49b8002.js.map
