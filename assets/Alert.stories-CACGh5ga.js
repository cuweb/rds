import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{A as t}from"./Alert-ihfMe_-R.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ShieldExclamationIcon-Dq6tIaUn.js";const B={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},T=[{type:"success",title:"Success",content:"Records have been updated.",textSize:"small"},{type:"error",title:"Error",content:"Unable to save record.",textSize:"small"},{type:"warning",title:"Warning",content:"You have lost internet connectivity",textSize:"small"},{type:"info",title:"Information",content:"You look like you need some coffee.",textSize:"small"}],r={render:n=>e.jsx(t,{type:n.type,textSize:n.textSize,title:"Title",content:"Content goes here"},111)};r.args={type:"success"};const i={render:()=>e.jsx(e.Fragment,{children:T.map((n,I)=>e.jsx(t,{type:n.type,title:n.title||"Title",content:n.content},I))})},o={render:()=>e.jsx(t,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("strong",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},c={render:()=>e.jsx(t,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("em",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"success",title:"Success",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(t,{type:"error",title:"Error",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(t,{type:"warning",title:"Warning",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(t,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)]})},s={render:n=>e.jsx(t,{type:n.type,textSize:n.textSize,title:"Success",content:"Succesfully created"},111)};s.args={type:"success",textSize:"large"};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Title" content="Content goes here" />
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type} title={alert.title || 'Title'} content={alert.content} />;
    })}
    </>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,f,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var L,k,A;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <Alert key={111} type="success" title="Success" content={<>
            Lorem ipsum dolor sit amet, <a href="https://carleton.ca">consectetur adipiscing</a> elit. Suspendisse in
            enim ipsum.
          </>} />
      <Alert key={111} type="error" title="Error" content={<>
            Lorem ipsum dolor sit amet, <a href="https://carleton.ca">consectetur adipiscing</a> elit. Suspendisse in
            enim ipsum.
          </>} />
      <Alert key={111} type="warning" title="Warning" content={<>
            Lorem ipsum dolor sit amet, <a href="https://carleton.ca">consectetur adipiscing</a> elit. Suspendisse in
            enim ipsum.
          </>} />
      <Alert key={111} type="info" title="Information" content={<>
            Lorem ipsum dolor sit amet, <a href="https://carleton.ca">consectetur adipiscing</a> elit. Suspendisse in
            enim ipsum.
          </>} />
    </>
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var z,C,F;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Success" content="Succesfully created" />
}`,...(F=(C=s.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const D=["Default","Stacked","ContentBold","ContentItalics","ContentLink","LargeText"];export{o as ContentBold,c as ContentItalics,a as ContentLink,r as Default,s as LargeText,i as Stacked,D as __namedExportsOrder,B as default};
