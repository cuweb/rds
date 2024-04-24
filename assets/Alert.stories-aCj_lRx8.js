import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as F}from"./index-CBqU2yxZ.js";import{C as N,S as $,E as H,I as q}from"./ShieldExclamationIcon-DAL5Y3Xj.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({title:t,content:o,type:r,textSize:p="small"})=>{const u=p==="small"?"text-sm":"text-lg",E=p==="small"?"w-5 h-5":"w-8 h-8",s={success:{icon:N,alertHeading:"text-green-700",alertSubhead:"cu-black-600",background:"bg-green-50"},warning:{icon:$,alertHeading:"text-yellow-700",alertSubhead:"cu-black-600",background:"bg-yellow-50"},error:{icon:H,alertHeading:"text-cu-red-700",alertSubhead:"cu-black-600",background:"bg-cu-red-50"},info:{icon:q,alertHeading:"text-blue-700",alertSubhead:"cu-black-600",background:"bg-blue-50"}};return e.jsxs("div",{className:`flex cu-alert cu-alert--${r} rounded-md p-4 my-2 not-prose ${s[r].background}`,children:[F.createElement(s[r].icon,{className:`${E} ${s[r].alertHeading}`,"aria-hidden":"true"}),e.jsxs("div",{className:`${p=="large"?"mt-0.5":""} ml-3 space-y-2 w-full`,children:[e.jsx("p",{className:`${u} ${s[r].alertHeading} my-0 font-semibold`,children:t}),o&&e.jsx("p",{className:`${u} ${s[r].alertSubhead}`,children:o})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:""},textSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};const O={title:"Components/Alert",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},_=[{type:"success",title:"Success",content:"Records have been updated.",textSize:"small"},{type:"error",title:"Error",content:"Unable to save record.",textSize:"small"},{type:"warning",title:"Warning",content:"You have lost internet connectivity",textSize:"small"},{type:"info",title:"Information",content:"You look like you need some coffee.",textSize:"small"}],i={render:t=>e.jsx(n,{type:t.type,textSize:t.textSize,title:"Title",content:"Content goes here"},111)};i.args={type:"success"};const c={render:()=>e.jsx(e.Fragment,{children:_.map((t,o)=>e.jsx(n,{type:t.type,title:t.title||"Title",content:t.content},o))})},l={render:()=>e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("strong",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},m={render:()=>e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("em",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"success",title:"Success",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"error",title:"Error",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"warning",title:"Warning",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)]})},a={render:t=>e.jsx(n,{type:t.type,textSize:t.textSize,title:"Success",content:"Succesfully created"},111)};a.args={type:"success",textSize:"large"};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Title" content="Content goes here" />
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,h,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type} title={alert.title || 'Title'} content={alert.content} />;
    })}
    </>
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,k,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var I,L,w;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,z,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var v,T,R;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Success" content="Succesfully created" />
}`,...(R=(T=a.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const U=["Default","Stacked","ContentBold","ContentItalics","ContentLink","LargeText"];export{l as ContentBold,m as ContentItalics,d as ContentLink,i as Default,a as LargeText,c as Stacked,U as __namedExportsOrder,O as default};
