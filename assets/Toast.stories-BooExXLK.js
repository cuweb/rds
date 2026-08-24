import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Toast-CUHf2gCk.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),a=n(),o={title:`Components/Toast`,component:i,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},s=[{type:`success`,title:`Success!`,content:`Records have been updated.`},{type:`error`,title:`Error!`,content:`Unable to save record.`},{type:`warning`,title:`Warning`,content:`You have lost internet connectivity`},{type:`info`,title:`Information`,content:`You look like you need some coffee.`}],c={render:e=>(0,a.jsx)(i.Toaster,{children:(0,a.jsxs)(i,{type:e.type,children:[(0,a.jsx)(i.Title,{children:`Success`}),(0,a.jsx)(i.Content,{children:`Successfully created`})]},111)})},c.args={type:`success`},l={render:()=>(0,a.jsx)(i.Toaster,{children:s.map((e,t)=>(0,a.jsxs)(i,{type:e.type,children:[(0,a.jsx)(i.Title,{children:e.title}),(0,a.jsx)(i.Content,{children:e.content})]},t))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Toast.Toaster>
      <Toast key={111} type={args.type}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Successfully created</Toast.Content>
      </Toast>
    </Toast.Toaster>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Toast.Toaster>
      {ToastStory.map((toast, index) => {
      return <Toast key={index} type={toast.type}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Content>{toast.content}</Toast.Content>
          </Toast>;
    })}
    </Toast.Toaster>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Multiple`]})))()}d();export{c as Default,l as Multiple,u as __namedExportsOrder,o as default};