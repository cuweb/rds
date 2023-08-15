import{j as e}from"./jsx-runtime-daf202a7.js";import{r as u,R as D}from"./index-ec8b93d8.js";import{$ as q}from"./transition-cad67125.js";import{X as F,C as R,S as M,E as V,I as O}from"./XMarkIcon-72c6d1e1.js";import"./_commonjsHelpers-042e6b4d.js";import"./open-closed-aa2934ca.js";const X=({children:r})=>e.jsx("div",{"aria-live":"assertive",className:"cu-alert not-prose top-20",children:e.jsx("div",{className:"w-full items-center space-y-4 sm:items-end",children:r})}),k=({children:r})=>e.jsx("h3",{className:"font-medium ",children:r}),w=({children:r})=>e.jsx("div",{className:"mt-2 ",children:r}),z=({children:r,type:s,textSize:d="small",isPersistent:I=!1})=>{const[_,$]=u.useState(!0),E=d==="small"?"text-sm":"text-lg",P=d==="small"?"h-5 w-5":"h-8 w-8",n={success:{icon:R,text:"text-green-600",bg:"bg-green-50"},warning:{icon:M,text:"text-yellow-600",bg:"bg-yellow-50"},error:{icon:V,text:"text-cu-red-600",bg:"bg-cu-red-50"},info:{icon:O,text:"text-blue-600",bg:"bg-blue-50"}};return e.jsx(q,{show:_,as:u.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`rounded-md ${n[s].bg} p-4`,children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:D.createElement(n[s].icon,{className:`${P} ${n[s].text}`,"aria-hidden":"true"})}),e.jsx("div",{className:`ml-3 ${n[s].text} ${E}`,children:r}),e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("div",{className:"-mx-1.5 -my-1.5",children:!I&&e.jsxs("button",{type:"button",className:`inline-flex rounded-md ${n[s].bg} p-1.5 ${n[s].text} hover:${n[s].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`,onClick:()=>{$(!1)},children:[e.jsx("span",{className:"sr-only",children:"Dismiss"}),e.jsx(F,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})})};z.displayName="Alert";k.displayName="Alert.Title";w.displayName="Alert.Content";const t=Object.assign(z,{Alerter:X,Title:k,Content:w});try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},textSize:{defaultValue:{value:"small"},description:"",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},isPersistent:{defaultValue:{value:"false"},description:"",name:"isPersistent",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},Y=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],l={render:r=>e.jsx(t.Alerter,{children:e.jsx(t,{type:r.type,children:e.jsx(t.Title,{children:"Success"})},111)})};l.args={type:"success"};const a={render:r=>e.jsx(t.Alerter,{children:e.jsxs(t,{type:r.type,children:[e.jsx(t.Title,{children:"Success"}),e.jsx(t.Content,{children:"Successfully created"})]},111)})};a.args={type:"success"};const o={render:()=>e.jsx(t.Alerter,{children:Y.map((r,s)=>e.jsxs(t,{type:r.type,children:[e.jsx(t.Title,{children:r.title}),e.jsx(t.Content,{children:r.content})]},s))})},c={render:r=>e.jsx(t.Alerter,{children:e.jsxs(t,{type:r.type,isPersistent:!0,textSize:r.textSize,children:[e.jsx(t.Title,{children:"Success"}),e.jsx(t.Content,{children:"Successfully created"})]},111)})};c.args={type:"success"};const i={render:r=>e.jsx(t.Alerter,{children:e.jsxs(t,{type:r.type,isPersistent:!0,children:[e.jsx(t.Title,{children:"Success"}),e.jsx(t.Content,{children:"Successfully created"})]},111)})};i.args={type:"success",textSize:"large"};var m,p,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
      </Alert>
    </Alert.Alerter>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var A,y,f;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Alert.Alerter>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>;
    })}
    </Alert.Alerter>
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,v,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent textSize={args.textSize}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,b,N;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const L=["Default","Multiline","Stacked","Persistant","DifferentTextSize"];export{l as Default,i as DifferentTextSize,a as Multiline,c as Persistant,o as Stacked,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Alert.stories-745a2260.js.map
