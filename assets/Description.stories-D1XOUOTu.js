import{j as e}from"./jsx-runtime-CKrituN3.js";import{p as L}from"./globalClasses-GmQrI9Vi.js";import{C as F}from"./ChevronRightIcon-CNwURrwD.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const i={base:"grid border-b border-cu-black-200",spacing:"pt-8 pb-8 md:pt-8 md:pb-8 first:pt-0",accordion:"pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",flexRow:"md:grid-cols-left-260 gap-2 md:gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold pb-2 mt-0 md:mt-0 mb-0",desc:"p-0 md:p-0 mt-0 md:mt-0 [&>*:first-child]:mt-0 md:[&>*:first-child]:mt-0 [&>*:last-child]:mb-2 md:[&>*:last-child]:mb-2"},I=t=>{const a=t.currentTarget,s=a.querySelector(".accordion__icon"),u=a.closest(".accordion"),p=u?u.querySelector(".accordion__content"):null,x=p!=null?p.hidden:null;x?(a.setAttribute("aria-expanded","true"),s&&(s.classList.remove("rotate-0"),s.classList.add("rotate-90"))):(a.setAttribute("aria-expanded","false"),s&&(s.classList.add("rotate-0"),s.classList.remove("rotate-90"))),p&&(p.hidden=!x)},h=({term:t,children:a})=>{const s=t&&typeof t=="string"?"accordion-"+t.toLowerCase().replace(/ +/g,"-"):"";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:`accordion ${i.base} ${i.accordion}`,children:[e.jsx("dt",{className:`${i.term} ${L.base}`,children:e.jsxs("button",{className:`accordion__button ${i.button}`,"aria-expanded":"false","aria-controls":s,onClick:I,children:[t,e.jsx(F,{className:`accordion__icon ${i.chevron} rotate-0}`})]})}),e.jsx("dd",{className:`accordion__content ${i.desc}`,hidden:!0,id:s,children:a})]})})};h.displayName="Description.Accordion";h.__docgenInfo={description:"",methods:[],displayName:"Description.Accordion",props:{term:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v=({term:t,children:a,useColumns:s})=>{const u=s?i.flexRow:i.flexCol;return e.jsxs("div",{className:`${i.base} ${u} ${i.spacing}`,children:[e.jsx("dt",{className:`${i.term}`,children:t}),e.jsx("dd",{className:`${i.desc}`,children:a})]})};v.displayName="Description.Meta";v.__docgenInfo={description:"",methods:[],displayName:"Description.Meta",props:{term:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},useColumns:{required:!1,tsType:{name:"boolean"},description:""}}};const T=({children:t})=>e.jsx("dl",{className:`cu-description ${L.base}`,children:t}),r=Object.assign(T,{Accordion:h,Meta:v});T.__docgenInfo={description:"",methods:[],displayName:"DescriptionWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const n=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],G={title:"Components/Description",component:r,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={};o.args={children:e.jsx(r.Meta,{term:n[0].term,children:n[0].details})};const c={};c.args={children:e.jsx(r.Meta,{term:n[0].term,useColumns:!0,children:n[0].details})};const d={};d.args={children:e.jsx(r.Accordion,{term:n[0].term,children:n[0].details})};const m={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{children:n.map(t=>e.jsxs(r.Meta,{term:t==null?void 0:t.term,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})},l={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{children:n.map(t=>e.jsxs(r.Meta,{term:t==null?void 0:t.term,useColumns:!0,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})},g={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{children:n.map(t=>e.jsxs(r.Accordion,{term:t==null?void 0:t.term,children:[e.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),e.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),e.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},t==null?void 0:t.id))})})};var j,f,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var q,D,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,N,S;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var y,_,R;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var C,P,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var $,k,w;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(w=(k=g.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const H=["Stacked","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{d as Accordion,c as Columns,g as MultipleAccordions,l as MultipleColumns,m as MultipleStacked,o as Stacked,H as __namedExportsOrder,G as default};
