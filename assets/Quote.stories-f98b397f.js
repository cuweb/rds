import{j as e}from"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const o={container:"relative cu-quote",graphic:{border:"border-l-4 pl-4 rounded-s fill-red-600 border-red-600",quote:"bg-cu-quote-icon bg-no-repeat bg-[length:1.5em]	bg-[left_top] border-none pt-8 pl-8"},align:{default:"max-w-3xl mr-auto",middle:"max-w-3xl mx-auto"},cite:"block mt-2"},a=({children:i,cite:n,graphic:p="border",isCenter:h})=>{const g=h?"max-w-3xl mx-auto":"max-w-3xl mr-auto";return e.jsx(e.Fragment,{children:e.jsx("div",{className:"not-prose",children:e.jsxs("blockquote",{className:`${o.container} ${o.graphic[p]} ${g}`,children:[i,n&&e.jsx("cite",{className:`${o.cite}`,children:n})]})})})};try{a.displayName="Quote",a.__docgenInfo={description:"",displayName:"Quote",props:{cite:{defaultValue:null,description:"",name:"cite",required:!1,type:{name:"string"}},graphic:{defaultValue:{value:"border"},description:"",name:"graphic",required:!1,type:{name:"enum",value:[{value:'"border"'},{value:'"quote"'}]}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}}}catch{}const f={title:"Components/Quote",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={args:{cite:"John Doe",children:e.jsx("p",{children:"Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."})}},r={args:{cite:"John Doe",graphic:"quote",children:e.jsx("p",{children:"Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."})}};var s,c,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cite: 'John Doe',
    children: <p>
        Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cite: 'John Doe',
    graphic: 'quote',
    children: <p>
        Obis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus.
      </p>
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["Default","QuoteMark"];export{t as Default,r as QuoteMark,v as __namedExportsOrder,f as default};
//# sourceMappingURL=Quote.stories-f98b397f.js.map
