import{j as e}from"./jsx-runtime-daf202a7.js";import{r as v}from"./index-ec8b93d8.js";import{p as l}from"./globalClasses-7b5d8244.js";import{C as z}from"./ChevronRightIcon-f8484a56.js";import"./_commonjsHelpers-042e6b4d.js";const s={base:"grid border-b border-cu-black-200",spacing:"pt-8 pb-8 md:pt-8 md:pb-8 first:pt-0",accordion:"pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",accordionDef:"pb-4 pt-2",flexRow:"md:grid-cols-left260 gap-2 md:gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold pb-2"},I=({term:t,children:m})=>{const[g,h]=v.useState(!1),[R,L]=v.useState(!0),[W,O]=v.useState(!0),H=()=>{h(n=>!n),L(n=>!n),O(n=>!n)},T=t.toLowerCase().replace(/ +/g,"-");return e.jsxs("div",{className:`${s.base} ${s.accordion}`,children:[e.jsx("dt",{className:`${s.term} ${l.base}`,children:e.jsxs("button",{className:s.button,id:T,"aria-expanded":g,onClick:H,children:[t,e.jsx(z,{className:`${s.chevron} ${R?"rotate-0":"rotate-90"}`})]})}),e.jsx("dd",{className:`${l.base} ${s.accordionDef}`,hidden:W,children:m})]})};I.displayName="Description.Accordion";try{Description.Accordion.displayName="Description.Accordion",Description.Accordion.__docgenInfo={description:"",displayName:"Description.Accordion",props:{term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}}}}}catch{}const F=({term:t,children:m,useColumns:g})=>{const h=g?s.flexRow:s.flexCol;return e.jsxs("div",{className:`${s.base} ${h} ${s.spacing}`,children:[e.jsx("dt",{className:`${s.term} ${l.base}`,children:t}),e.jsx("dd",{className:l.base,children:m})]})};F.displayName="Description.Meta";try{Description.Meta.displayName="Description.Meta",Description.Meta.__docgenInfo={description:"",displayName:"Description.Meta",props:{term:{defaultValue:null,description:"",name:"term",required:!1,type:{name:"string"}},useColumns:{defaultValue:null,description:"",name:"useColumns",required:!1,type:{name:"boolean"}}}}}catch{}const x=({children:t})=>e.jsx("dl",{className:"cu-description",children:t}),i=Object.assign(x,{Accordion:I,Meta:F});try{x.displayName="DescriptionWrapper",x.__docgenInfo={description:"",displayName:"DescriptionWrapper",props:{}}}catch{}try{i.displayName="Description",i.__docgenInfo={description:"",displayName:"Description",props:{}}}catch{}const r=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],U={title:"Components/Description",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},a={};a.args={children:e.jsx(i.Meta,{term:r[0].term,children:r[0].details})};const o={};o.args={children:e.jsx(i.Meta,{term:r[0].term,useColumns:!0,children:r[0].details})};const c={};c.args={children:e.jsx(i.Accordion,{term:r[0].term,children:r[0].details})};const p={render:()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:r.map(t=>e.jsxs(i.Meta,{term:t==null?void 0:t.term,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})},d={render:()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:r.map(t=>e.jsxs(i.Meta,{term:t==null?void 0:t.term,useColumns:!0,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})},u={render:()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:r.map(t=>e.jsxs(i.Accordion,{term:t==null?void 0:t.term,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})};var j,f,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var _,b,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var M,A,S;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(S=(A=c.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,q,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(q=p.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var V,P,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(P=d.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var k,w,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Description>
        {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
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
          </Description.Accordion>)}
      </Description>
    </>
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const X=["Stacked","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{c as Accordion,o as Columns,u as MultipleAccordions,d as MultipleColumns,p as MultipleStacked,a as Stacked,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Description.stories-c5421b53.js.map
