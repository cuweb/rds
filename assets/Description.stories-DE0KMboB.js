import{j as t}from"./jsx-runtime-CKrituN3.js";import{p as w}from"./globalClasses-GmQrI9Vi.js";import{C as R}from"./ChevronRightIcon-CNwURrwD.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const i={base:"grid border-b border-cu-black-200",spacing:"pt-8 pb-8 md:pt-8 md:pb-8 first:pt-0",accordion:"pt-4 pb-3 md:pt-6 md:pb-5 first:border-t",flexRow:"md:grid-cols-left-260 gap-2 md:gap-6",flexCol:"grid-row gap-2",button:"flex items-center w-full",chevron:"w-5 h-5 ml-auto text-cu-black-500 transition-transform",term:"font-semibold pb-2 mt-0 md:mt-0 mb-0",desc:"p-0 md:p-0 mt-0 md:mt-0 [&>*:first-child]:mt-0 md:[&>*:first-child]:mt-0 [&>*:last-child]:mb-2 md:[&>*:last-child]:mb-2"},W=e=>{const a=e.currentTarget,r=a.querySelector(".accordion__icon"),p=a.closest(".accordion"),u=p?p.querySelector(".accordion__content"):null,v=u!=null?u.hidden:null;v?(a.setAttribute("aria-expanded","true"),r&&(r.classList.remove("rotate-0"),r.classList.add("rotate-90"))):(a.setAttribute("aria-expanded","false"),r&&(r.classList.add("rotate-0"),r.classList.remove("rotate-90"))),u&&(u.hidden=!v)},F=({term:e,children:a})=>{const r=e&&typeof e=="string"?"accordion-"+e.toLowerCase().replace(/ +/g,"-"):"";return t.jsx(t.Fragment,{children:t.jsxs("div",{className:`accordion ${i.base} ${i.accordion}`,children:[t.jsx("dt",{className:`${i.term} ${w.base}`,children:t.jsxs("button",{className:`accordion__button ${i.button}`,"aria-expanded":"false","aria-controls":r,onClick:W,children:[e,t.jsx(R,{className:`accordion__icon ${i.chevron} rotate-0}`})]})}),t.jsx("dd",{className:`accordion__content ${i.desc}`,hidden:!0,id:r,children:a})]})})};F.displayName="Description.Accordion";try{Description.Accordion.displayName="Description.Accordion",Description.Accordion.__docgenInfo={description:"",displayName:"Description.Accordion",props:{term:{defaultValue:null,description:"",name:"term",required:!0,type:{name:"string"}}}}}catch{}const I=({term:e,children:a,useColumns:r})=>{const p=r?i.flexRow:i.flexCol;return t.jsxs("div",{className:`${i.base} ${p} ${i.spacing}`,children:[t.jsx("dt",{className:`${i.term}`,children:e}),t.jsx("dd",{className:`${i.desc}`,children:a})]})};I.displayName="Description.Meta";try{Description.Meta.displayName="Description.Meta",Description.Meta.__docgenInfo={description:"",displayName:"Description.Meta",props:{term:{defaultValue:null,description:"",name:"term",required:!1,type:{name:"string"}},useColumns:{defaultValue:null,description:"",name:"useColumns",required:!1,type:{name:"boolean"}}}}}catch{}const h=({children:e})=>t.jsx("dl",{className:`cu-description ${w.base}`,children:e}),s=Object.assign(h,{Accordion:F,Meta:I});try{h.displayName="DescriptionWrapper",h.__docgenInfo={description:"",displayName:"DescriptionWrapper",props:{}}}catch{}try{s.displayName="Description",s.__docgenInfo={description:"",displayName:"Description",props:{}}}catch{}const n=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],G={title:"Components/Description",component:s,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={};o.args={children:t.jsx(s.Meta,{term:n[0].term,children:n[0].details})};const c={};c.args={children:t.jsx(s.Meta,{term:n[0].term,useColumns:!0,children:n[0].details})};const d={};d.args={children:t.jsx(s.Accordion,{term:n[0].term,children:n[0].details})};const l={render:()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:n.map(e=>t.jsxs(s.Meta,{term:e==null?void 0:e.term,children:[t.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),t.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),t.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},e==null?void 0:e.id))})})},m={render:()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:n.map(e=>t.jsxs(s.Meta,{term:e==null?void 0:e.term,useColumns:!0,children:[t.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),t.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),t.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},e==null?void 0:e.id))})})},g={render:()=>t.jsx(t.Fragment,{children:t.jsx(s,{children:n.map(e=>t.jsxs(s.Accordion,{term:e==null?void 0:e.term,children:[t.jsx("p",{children:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."}),t.jsx("p",{children:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."}),t.jsx("p",{children:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."})]},e==null?void 0:e.id))})})};var x,_,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(_=o.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var f,D,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(D=c.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var y,A,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var q,N,S;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,C,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var $,k,L;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const H=["Stacked","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{d as Accordion,c as Columns,g as MultipleAccordions,m as MultipleColumns,l as MultipleStacked,o as Stacked,H as __namedExportsOrder,G as default};
