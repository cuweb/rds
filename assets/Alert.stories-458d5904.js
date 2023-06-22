import{j as e}from"./jsx-runtime-daf202a7.js";import{r as c,R as b}from"./index-ec8b93d8.js";import{$ as S}from"./transition-cad67125.js";import{X as C,C as T,S as k,E as w,I as _}from"./XMarkIcon-72c6d1e1.js";import"./_commonjsHelpers-042e6b4d.js";import"./open-closed-aa2934ca.js";const I=({children:t})=>e.jsx("div",{"aria-live":"assertive",className:"cu-alert not-prose top-20",children:e.jsx("div",{className:"w-full items-center space-y-4 sm:items-end",children:t})}),g=({children:t})=>e.jsx("h3",{className:"text-sm font-medium",children:t}),f=({children:t})=>e.jsx("div",{className:"mt-2 text-sm",children:t}),j=({children:t,type:s})=>{const[v,N]=c.useState(!0),n={success:{icon:T,text:"text-green-600",bg:"bg-green-50"},warning:{icon:k,text:"text-yellow-600",bg:"bg-yellow-50"},error:{icon:w,text:"text-cu-red-600",bg:"bg-cu-red-50"},info:{icon:_,text:"text-blue-600",bg:"bg-blue-50"}};return e.jsx(S,{show:v,as:c.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:`rounded-md ${n[s].bg} p-4`,children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:b.createElement(n[s].icon,{className:`h-5 w-5 ${n[s].text}`,"aria-hidden":"true"})}),e.jsx("div",{className:`ml-3 ${n[s].text}`,children:t}),e.jsx("div",{className:"ml-auto pl-3",children:e.jsx("div",{className:"-mx-1.5 -my-1.5",children:e.jsxs("button",{type:"button",className:`inline-flex rounded-md ${n[s].bg} p-1.5 ${n[s].text} hover:${n[s].bg} focus:outline-none focus:ring-2 focus:ring-offset-2`,onClick:()=>{N(!1)},children:[e.jsx("span",{className:"sr-only",children:"Dismiss"}),e.jsx(C,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})})};j.displayName="Alert";g.displayName="Alert.Title";f.displayName="Alert.Content";const r=Object.assign(j,{Alerter:I,Title:g,Content:f});try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const O={title:"Components/Alert",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},E=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],a={render:t=>e.jsx(r.Alerter,{children:e.jsx(r,{type:t.type,children:e.jsx(r.Title,{children:"Success"})},111)})};a.args={type:"success"};const l={render:t=>e.jsx(r.Alerter,{children:e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:"Success"}),e.jsx(r.Content,{children:"Successfully created"})]},111)})};l.args={type:"success"};const o={render:()=>e.jsx(r.Alerter,{children:E.map((t,s)=>e.jsxs(r,{type:t.type,children:[e.jsx(r.Title,{children:t.title}),e.jsx(r.Content,{children:t.content})]},s))})};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
      </Alert>
    </Alert.Alerter>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var y,A,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert.Alerter>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>;
    })}
    </Alert.Alerter>
}`,...(h=(A=o.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const X=["Default","Multiline","Stacked"];export{a as Default,l as Multiline,o as Stacked,X as __namedExportsOrder,O as default};
//# sourceMappingURL=Alert.stories-458d5904.js.map
