import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{M as c}from"./Main-CdpHQN4R.js";import{S as d}from"./Section-JfbkAvfr.js";import{P as D}from"./PageHeader-DL2nKhuN.js";import{r as M}from"./index-BwDkhjyp.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./propClasses-BCnilxRx.js";import"./_commonjsHelpers-BosuxZz1.js";function I({title:s,titleId:e,...t},o){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":e},t),s?M.createElement("title",{id:e},s):null,M.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const O=M.forwardRef(I),a={base:"grid border-b border-cu-black-100 pt-4 pb-3 md:pt-6 md:pb-5",baseMeta:"last:border-none first:pt-0 first:md:pt-0",term:"font-semibold mt-0 md:mt-0 mb-0",desc:"p-0 md:p-0 mt-0 md:mt-0"},V=s=>{const e=s.currentTarget,t=e.querySelector(".accordion__icon"),o=e.closest(".accordion"),p=o?o.querySelector(".accordion__content"):null,y=p!=null?p.hidden:null;y?(e.setAttribute("aria-expanded","true"),t&&(t.classList.remove("rotate-0"),t.classList.add("rotate-90"))):(e.setAttribute("aria-expanded","false"),t&&(t.classList.add("rotate-0"),t.classList.remove("rotate-90"))),p&&(p.hidden=!y)},j=({term:s,children:e})=>{const t=s&&typeof s=="string"?"accordion-"+s.toLowerCase().replace(/ +/g,"-"):"";return r.jsx(r.Fragment,{children:r.jsxs("div",{className:`accordion ${a.base} first:border-t`,children:[r.jsx("dt",{className:`${a.term}`,children:r.jsxs("button",{className:"flex items-center w-full accordion__button","aria-expanded":"false","aria-controls":t,onClick:V,children:[s,r.jsx(O,{className:"w-5 h-5 ml-auto transition-transform rotate-0 accordion__icon text-cu-black-500"})]})}),r.jsx("dd",{className:`accordion__content ${a.desc}`,hidden:!0,id:t,children:e})]})})};j.displayName="Description.Accordion";j.__docgenInfo={description:"",methods:[],displayName:"Description.Accordion",props:{term:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=({term:s,children:e,useColumns:t})=>{const o=t?"md:grid-cols-left-260 gap-2 md:gap-6":"grid-row gap-2";return r.jsxs("div",{className:`${a.base} ${a.baseMeta} ${o}`,children:[r.jsx("dt",{className:`${a.term}`,children:s}),r.jsx("dd",{className:`${a.desc}`,children:e})]})};f.displayName="Description.Meta";f.__docgenInfo={description:"",methods:[],displayName:"Description.Meta",props:{term:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},useColumns:{required:!1,tsType:{name:"boolean"},description:""}}};const b=({children:s})=>r.jsx("dl",{className:"cu-description cu-block-spacing",children:s}),n=Object.assign(b,{Accordion:j,Meta:f});b.displayName="Description";b.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const i=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],Z={title:"Components/Description",component:n,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},l={render:s=>r.jsx(n,{...s,children:r.jsx(n.Meta,{term:i[0].term,children:i[0].details})})},m={render:s=>r.jsx(c,{children:r.jsx(d,{children:r.jsx(n,{...s,children:r.jsx(n.Meta,{term:i[0].term,useColumns:!0,children:i[0].details})})})})},u={render:s=>r.jsx(c,{children:r.jsx(d,{children:r.jsx(n,{...s,children:r.jsx(n.Accordion,{term:i[0].term,children:i[0].details})})})})},h={render:s=>r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(D,{as:"h2",header:"Description header",size:"md"}),r.jsx(n,{...s,children:i.map(e=>r.jsx(n.Meta,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})})},g={render:s=>r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(D,{as:"h2",header:"Description header",size:"md"}),r.jsx(n,{...s,children:i.map(e=>r.jsx(n.Meta,{term:e==null?void 0:e.term,useColumns:!0,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})})},x={render:s=>r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(D,{as:"h2",header:"Description header",size:"md"}),r.jsx(n,{...s,children:i.map(e=>r.jsx(n.Accordion,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})})};var S,N,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
    </Description>
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var _,v,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Main>
      <Section>
        <Description {...args}>
          <Description.Meta term={descMeta[0].term} useColumns>
            {descMeta[0].details}
          </Description.Meta>
        </Description>
      </Section>
    </Main>
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var w,C,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Main>
      <Section>
        <Description {...args}>
          <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
        </Description>
      </Section>
    </Main>
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,L,P;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Main>
      <Section>
        <PageHeader as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Meta>)}
        </Description>
      </Section>
    </Main>
}`,...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,$,z;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Main>
      <Section>
        <PageHeader as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
              {item?.details}
            </Description.Meta>)}
        </Description>
      </Section>
    </Main>
}`,...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var E,H,F;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Main>
      <Section>
        <PageHeader as="h2" header="Description header" size="md" />
        <Description {...args}>
          {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
              {item?.details}
            </Description.Accordion>)}
        </Description>
      </Section>
    </Main>
}`,...(F=(H=x.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const ee=["Primary","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{u as Accordion,m as Columns,x as MultipleAccordions,g as MultipleColumns,h as MultipleStacked,l as Primary,ee as __namedExportsOrder,Z as default};
