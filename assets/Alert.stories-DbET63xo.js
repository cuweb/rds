import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as $}from"./index-CBqU2yxZ.js";import{C as N,S as T,E as H,I as q}from"./ShieldExclamationIcon-DAL5Y3Xj.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({title:t,content:d,type:r,textSize:u="small"})=>{const p=u==="small"?"text-sm":"text-lg",F=u==="small"?"w-5 h-5":"w-8 h-8",s={success:{icon:N,alertHeading:"text-green-700",alertSubhead:"cu-black-600",background:"bg-green-50"},warning:{icon:T,alertHeading:"text-yellow-700",alertSubhead:"cu-black-600",background:"bg-yellow-50"},error:{icon:H,alertHeading:"text-cu-red-700",alertSubhead:"cu-black-600",background:"bg-cu-red-50"},info:{icon:q,alertHeading:"text-blue-700",alertSubhead:"cu-black-600",background:"bg-blue-50"}};return e.jsxs("div",{className:`flex cu-alert cu-alert-${r} rounded-md p-4 my-2 not-prose ${s[r].background}`,children:[$.createElement(s[r].icon,{className:`${F} ${s[r].alertHeading}`,"aria-hidden":"true"}),e.jsxs("div",{className:`${u=="large"?"mt-0.5":""} ml-3 space-y-2 w-full`,children:[e.jsx("p",{className:`${p} ${s[r].alertHeading} my-0 font-semibold`,children:t}),e.jsx("p",{className:`${p} ${s[r].alertSubhead}`,children:d})]})]})};try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},textSize:{defaultValue:{value:"small"},description:"",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const Y={title:"Components/Alert",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},R=[{type:"success",title:"Success",content:"Records have been updated.",textSize:"small"},{type:"error",title:"Error",content:"Unable to save record.",textSize:"small"},{type:"warning",title:"Warning",content:"You have lost internet connectivity",textSize:"small"},{type:"info",title:"Information",content:"You look like you need some coffee.",textSize:"small"}],i={render:t=>e.jsx(n,{type:t.type,textSize:t.textSize,title:"Title",content:"Content goes here"},111)};i.args={type:"success"};const o={render:()=>e.jsx(e.Fragment,{children:R.map((t,d)=>e.jsx(n,{type:t.type,title:t.title||"Title",content:t.content},d))})},c={render:()=>e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("strong",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},l={render:()=>e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("em",{children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{type:"success",title:"Success",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"error",title:"Error",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"warning",title:"Warning",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111),e.jsx(n,{type:"info",title:"Information",content:e.jsxs(e.Fragment,{children:["Lorem ipsum dolor sit amet, ",e.jsx("a",{href:"https://carleton.ca",children:"consectetur adipiscing"})," elit. Suspendisse in enim ipsum."]})},111)]})},a={render:t=>e.jsx(n,{type:t.type,textSize:t.textSize,title:"Success",content:"Succesfully created"},111)};a.args={type:"success",textSize:"large"};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Title" content="Content goes here" />
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,h,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
      {AlertStory.map((alert, index) => {
      return <Alert key={index} type={alert.type} title={alert.title || 'Title'} content={alert.content} />;
    })}
    </>
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,k,b;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var I,A,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Alert key={111} type="info" title="Information" content={<>
          Lorem ipsum dolor sit amet, <em>consectetur adipiscing</em> elit. Suspendisse in enim ipsum.
        </>} />
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var v,z,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var w,_,E;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Alert key={111} type={args.type} textSize={args.textSize} title="Success" content="Succesfully created" />
}`,...(E=(_=a.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const O=["Default","Stacked","ContentBold","ContentItalics","ContentLink","LargeText"];export{c as ContentBold,l as ContentItalics,m as ContentLink,i as Default,a as LargeText,o as Stacked,O as __namedExportsOrder,Y as default};
