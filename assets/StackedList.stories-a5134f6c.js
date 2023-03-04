import{a as c,j as e,F as q}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const a={wrapper:"cu-panel not-prose overflow-hidden rounded-lg bg-white",title:"px-6 py-4 text-base md:text-xl font-semibold border-b rounded-t-lg bg-gray-50 text-cu-black-800",grid:"grid overflow-hidden [&>*]:border-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0",border:"border border-cu-black-100",shadow:"shadow-lg"},m={oneCol:"md:grid-cols-1",twoCol:"md:grid-cols-2 md:odd:[&>*]:border-r"},s=({children:n,cols:C="1",header:h,hasBorder:V,hasShadow:W})=>{const j=V?a.border:"",F=W?a.shadow:"",I=C==="1"?m.oneCol:m.twoCol;return c("div",{className:`${a.wrapper} ${j} ${F}`,children:[h&&e("h2",{className:`${a.title}`,children:h}),e("ul",{className:`${a.grid} ${I}`,children:n})]})};try{s.displayName="StackedList",s.__docgenInfo={description:"",displayName:"StackedList",props:{cols:{defaultValue:{value:"1"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"string"}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Layouts/StackedList",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},r={};r.args={children:"Stacked list component",hasShadow:!1,hasBorder:!1};const t={args:{children:"Stacked list component",hasShadow:!0,hasBorder:!1}},o={args:{children:"Stacked list component",hasShadow:!1,hasBorder:!0}},d={name:"Has Shadow & Border",args:{children:"Stacked list component",hasShadow:!0,hasBorder:!0}},i={render:()=>e(q,{children:c(s,{header:"Stacked list header",hasShadow:!0,hasBorder:!0,children:[e("li",{className:"p-6",children:"This is a list item"}),e("li",{className:"p-6",children:"This is a list item"}),e("li",{className:"p-6",children:"This is a list item"})]})})},l={render:()=>e(q,{children:c(s,{hasShadow:!0,hasBorder:!0,children:[e("li",{className:"p-6",children:"This is a list item"}),e("li",{className:"p-6",children:"This is a list item"}),e("li",{className:"p-6",children:"This is a list item"})]})})};var p,u,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var g,w,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: \`Stacked list component\`,
    hasShadow: true,
    hasBorder: false
  }
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,k,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: \`Stacked list component\`,
    hasShadow: false,
    hasBorder: true
  }
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var y,N,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Has Shadow & Border',
  args: {
    children: \`Stacked list component\`,
    hasShadow: true,
    hasBorder: true
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,_,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
      <StackedList header="Stacked list header" hasShadow hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var H,v,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <>
      <StackedList hasShadow hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
}`,...($=(v=l.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const A=["Primary","HasShadow","HasBorder","ShadowBorder","WithHeader","WithListItems"];export{o as HasBorder,t as HasShadow,r as Primary,d as ShadowBorder,i as WithHeader,l as WithListItems,A as __namedExportsOrder,z as default};
//# sourceMappingURL=StackedList.stories-a5134f6c.js.map
