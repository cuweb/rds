import{j as r}from"./jsx-runtime-B9B14buI.js";import{S as n}from"./Section-4kh7xz3r.js";import{P as l}from"./PageHeader-B9jjwRYJ.js";import{D as s}from"./Description-BF1eG8MP.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bwn02r_3.js";import"./parseISO-BQ4LyrE0.js";import"./format-Dt71a7ij.js";import"./isSameDay-Dpgs3O9f.js";import"./propClasses-BhZSwrl0.js";import"./ChevronRightIcon-BJuDmZXS.js";const i=[{id:1,term:"Nobis voluptatem dolorum",details:"Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non."},{id:2,term:"Lorem ipsum",details:"Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim."},{id:3,term:"Molestiae quas dolores accusamus",details:"Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor."}],G={title:"Components/Description",component:s,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},a={render:t=>r.jsx(n,{children:r.jsx(s,{...t,children:r.jsx(s.Meta,{term:i[0].term,children:i[0].details})})})},o={render:t=>r.jsx(n,{children:r.jsx(s,{...t,children:r.jsx(s.Meta,{term:i[0].term,useColumns:!0,children:i[0].details})})})},c={render:t=>r.jsx(n,{children:r.jsx(s,{...t,children:r.jsx(s.Accordion,{term:i[0].term,children:i[0].details})})})},d={render:t=>r.jsxs(n,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...t,children:i.map(e=>r.jsx(s.Meta,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})},p={render:t=>r.jsxs(n,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...t,children:i.map(e=>r.jsx(s.Meta,{term:e==null?void 0:e.term,useColumns:!0,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})},m={render:t=>r.jsxs(n,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...t,children:i.map(e=>r.jsx(s.Accordion,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})};var u,h,D;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Section>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
      </Description>
    </Section>
}`,...(D=(h=a.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var g,M,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Section>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term} useColumns>
          {descMeta[0].details}
        </Description.Meta>
      </Description>
    </Section>
}`,...(x=(M=o.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var j,S,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Section>
      <Description {...args}>
        <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
      </Description>
    </Section>
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,P,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Section>
}`,...(v=(P=d.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var f,y,z;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Section>
}`,...(z=(y=p.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var k,q,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>)}
      </Description>
    </Section>
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const I=["Primary","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{c as Accordion,o as Columns,m as MultipleAccordions,p as MultipleColumns,d as MultipleStacked,a as Primary,I as __namedExportsOrder,G as default};
