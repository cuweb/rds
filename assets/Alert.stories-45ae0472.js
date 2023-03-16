import{j as e,a as c}from"./jsx-runtime-9d2cd5de.js";import{r as i,R as C}from"./index-580b8df0.js";import{C as T,S as k,E as w,I as _}from"./index-ec3aab99.js";import{X as I}from"./index-1e5daa9b.js";import{t as E}from"./transition-3ed9bc97.js";import"./_commonjsHelpers-042e6b4d.js";const $=({children:t})=>e("div",{"aria-live":"assertive",className:"not-prose top-20",children:e("div",{className:"w-full items-center space-y-4 sm:items-end",children:t})}),x=({children:t})=>e("h3",{className:"text-sm font-medium",children:t}),v=({children:t})=>e("div",{className:"mt-2 text-sm",children:t}),b=({children:t,type:n})=>{const[N,S]=i.useState(!0),s={success:{icon:T,text:"text-green-600",bg:"bg-green-50"},warning:{icon:k,text:"text-yellow-600",bg:"bg-yellow-50"},error:{icon:w,text:"text-cu-red-600",bg:"bg-cu-red-50"},info:{icon:_,text:"text-blue-600",bg:"bg-blue-50"}};return e(E,{show:N,as:i.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:`rounded-md ${s[n].bg} p-4`,children:c("div",{className:"flex",children:[e("div",{className:"flex-shrink-0",children:C.createElement(s[n].icon,{className:`h-5 w-5 ${s[n].text}`,"aria-hidden":"true"})}),e("div",{className:`ml-3 ${s[n].text}`,children:t}),e("div",{className:"ml-auto pl-3",children:e("div",{className:"-mx-1.5 -my-1.5",children:c("button",{type:"button",className:`inline-flex rounded-md ${s[n].bg} p-1.5 ${s[n].text} hover:${s[n].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`,onClick:()=>{S(!1)},children:[e("span",{className:"sr-only",children:"Dismiss"}),e(I,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})})};b.displayName="Alert";x.displayName="Alert.Title";v.displayName="Alert.Content";const r=Object.assign(b,{Alerter:$,Title:x,Content:v});try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const X={title:"Components/Alert",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},j=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],a={render:t=>e(r.Alerter,{children:e(r,{type:t.type,children:e(r.Title,{children:"Success"})},111)})};a.args={type:"success"};const l={render:t=>e(r.Alerter,{children:c(r,{type:t.type,children:[e(r.Title,{children:"Success"}),e(r.Content,{children:"Successfully created"})]},111)})};l.args={type:"success"};const o={render:()=>e(r.Alerter,{children:j.map((t,n)=>c(r,{type:t.type,children:[e(r.Title,{children:t.title}),e(r.Content,{children:t.content})]},n))})};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
      </Alert>
    </Alert.Alerter>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,y,A;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert.Alerter>
      {AlertStory.map((alert: any, index: number) => {
      return <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>;
    })}
    </Alert.Alerter>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Y=["Default","Multiline","Stacked"];export{a as Default,l as Multiline,o as Stacked,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Alert.stories-45ae0472.js.map
