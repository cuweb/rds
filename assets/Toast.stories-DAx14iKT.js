import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{T as t}from"./Toast-PcQK7iTD.js";import"./index-C9rmetsa.js";import"./index-yDOeu_rT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ShieldExclamationIcon-pesWzjV_.js";import"./transition-B9O8MM7D.js";import"./use-server-handoff-complete-Vd7s5Y0y.js";const g={title:"Components/Toast",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],s={render:o=>e.jsx(t.Toaster,{children:e.jsxs(t,{type:o.type,children:[e.jsx(t.Title,{children:"Success"}),e.jsx(t.Content,{children:"Successfully created"})]},111)})};s.args={type:"success"};const r={render:()=>e.jsx(t.Toaster,{children:d.map((o,T)=>e.jsxs(t,{type:o.type,children:[e.jsx(t.Title,{children:o.title}),e.jsx(t.Content,{children:o.content})]},T))})};var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Toast.Toaster>
      <Toast key={111} type={args.type}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Successfully created</Toast.Content>
      </Toast>
    </Toast.Toaster>
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,p,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Toast.Toaster>
      {ToastStory.map((toast, index) => {
      return <Toast key={index} type={toast.type}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Content>{toast.content}</Toast.Content>
          </Toast>;
    })}
    </Toast.Toaster>
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Default","Multiple"];export{s as Default,r as Multiple,C as __namedExportsOrder,g as default};
