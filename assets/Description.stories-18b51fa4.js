import{j as t}from"./jsx-runtime-daf202a7.js";import{r as x}from"./index-ec8b93d8.js";import{C as T}from"./ChevronRightIcon-f8484a56.js";import{p as z}from"./globalClasses-7b5d8244.js";import"./_commonjsHelpers-042e6b4d.js";const s={base:"grid border-b border-cu-black-200 last:border-none first:pt-0 pt-8 pb-8 md:pt-8 md:pb-8",flexRow:"md:grid-cols-left260 gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold text-lg md:text-xl pb-3",def:"text-base md:text-lg",accordion:"flex flex-col gap-2"},E=({term:e,children:u})=>{const[m,g]=x.useState(!1),[F,R]=x.useState(!0),[L,W]=x.useState(!0),O=()=>{g(n=>!n),R(n=>!n),W(n=>!n)},H=e.toLowerCase().replace(/ +/g,"-");return t.jsxs("div",{className:`${s.base} ${s.accordion}`,children:[t.jsx("dt",{className:s.term,children:t.jsxs("button",{className:s.button,id:H,"aria-expanded":m,onClick:O,children:[e,t.jsx(T,{className:`${s.chevron} ${F?"rotate-0":"rotate-90"}`})]})}),t.jsx("dd",{hidden:L,children:u})]})};E.displayName="Description.Accordion";try{Description.Accordion.displayName="Description.Accordion",Description.Accordion.__docgenInfo={description:"",displayName:"Description.Accordion",props:{term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}}}}}catch{}const I=({term:e,children:u,useColumns:m})=>{const g=m?s.flexRow:s.flexCol;return t.jsxs("div",{className:`${s.base} ${g}`,children:[t.jsx("dt",{className:s.term,children:e}),t.jsx("dd",{className:`${s.def} ${z.base}`,children:u})]})};I.displayName="Description.Meta";try{Description.Meta.displayName="Description.Meta",Description.Meta.__docgenInfo={description:"",displayName:"Description.Meta",props:{term:{defaultValue:null,description:"",name:"term",required:!1,type:{name:"string"}},useColumns:{defaultValue:null,description:"",name:"useColumns",required:!1,type:{name:"boolean"}}}}}catch{}const h=({children:e})=>t.jsx("dl",{className:"cu-description",children:e}),r=Object.assign(h,{Accordion:E,Meta:I});try{h.displayName="DescriptionWrapper",h.__docgenInfo={description:"",displayName:"DescriptionWrapper",props:{}}}catch{}try{r.displayName="Description",r.__docgenInfo={description:"",displayName:"Description",props:{}}}catch{}const i=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],U={title:"Components/Description",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={};a.args={children:t.jsx(r.Meta,{term:i[0].term,children:i[0].details})};const o={};o.args={children:t.jsx(r.Meta,{term:i[0].term,useColumns:!0,children:i[0].details})};const c={};c.args={children:t.jsx(r.Accordion,{term:i[0].term,children:i[0].details})};const d={render:()=>t.jsx(t.Fragment,{children:t.jsx(r,{children:i.map(e=>t.jsxs(r.Meta,{term:e==null?void 0:e.term,children:[t.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),t.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),t.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},e==null?void 0:e.id))})})},p={render:()=>t.jsx(t.Fragment,{children:t.jsx(r,{children:i.map(e=>t.jsxs(r.Meta,{term:e==null?void 0:e.term,useColumns:!0,children:[t.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),t.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),t.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},e==null?void 0:e.id))})})},l={render:()=>t.jsx(t.Fragment,{children:t.jsx(r,{children:i.map(e=>t.jsx(r.Accordion,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})})};var v,j,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var _,D,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var M,b,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var N,S,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
      <Description>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non.
            </p>
            <p>
              Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec
              elit ultricies, sed tempus diam dignissim.
            </p>
            <p>
              Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
              orci vulputate, eget vulputate neque porttitor.
            </p>
          </Description.Meta>)}
      </Description>
    </>
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var q,V,k;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <>
      <Description>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
            <p>
              Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil
              voluptatem non.
            </p>
            <p>
              Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec
              elit ultricies, sed tempus diam dignissim.
            </p>
            <p>
              Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
              orci vulputate, eget vulputate neque porttitor.
            </p>
          </Description.Meta>)}
      </Description>
    </>
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var P,$,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <>
      <Description>
        {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>)}
      </Description>
    </>
}`,...(w=($=l.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const X=["Stacked","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{c as Accordion,o as Columns,l as MultipleAccordions,p as MultipleColumns,d as MultipleStacked,a as Stacked,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Description.stories-18b51fa4.js.map
