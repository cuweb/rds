import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as t}from"./Toast-B3c6m_QU.js";import"./index-yBjzXJbu.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Icon-DABLV-Gt.js";import"./use-server-handoff-complete-Dsuaxz_T.js";const S={title:"Components/Toast",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=[{type:"success",title:"Success!",content:"Records have been updated."},{type:"error",title:"Error!",content:"Unable to save record."},{type:"warning",title:"Warning",content:"You have lost internet connectivity"},{type:"info",title:"Information",content:"You look like you need some coffee."}],s={render:o=>e.jsx(t.Toaster,{children:e.jsxs(t,{type:o.type,children:[e.jsx(t.Title,{children:"Success"}),e.jsx(t.Content,{children:"Successfully created"})]},111)})};s.args={type:"success"};const r={render:()=>e.jsx(t.Toaster,{children:d.map((o,T)=>e.jsxs(t,{type:o.type,children:[e.jsx(t.Title,{children:o.title}),e.jsx(t.Content,{children:o.content})]},T))})};var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Toast.Toaster>
      <Toast key={111} type={args.type}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Successfully created</Toast.Content>
      </Toast>
    </Toast.Toaster>
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Toast.Toaster>
      {ToastStory.map((toast, index) => {
      return <Toast key={index} type={toast.type}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Content>{toast.content}</Toast.Content>
          </Toast>;
    })}
    </Toast.Toaster>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const g=["Default","Multiple"];export{s as Default,r as Multiple,g as __namedExportsOrder,S as default};
