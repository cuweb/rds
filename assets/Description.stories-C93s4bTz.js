import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{M as o}from"./Main-BqxOGoMS.js";import{P as l}from"./PageHeader-dKVTA0_m.js";import{D as s}from"./Description-7PqddSt2.js";import{D as n}from"./DescriptionData-BUiyB3_e.js";import"./index-yBjzXJbu.js";import"./parseISO-53XxuXUY.js";import"./format-CoDaAjhx.js";import"./isSameDay-D4TUG8v2.js";import"./propClasses-BYrQ2lXe.js";import"./ChevronRightIcon-N0nNh_hJ.js";import"./index-7sdMIo0z.js";import"./_commonjsHelpers-BosuxZz1.js";const L={title:"Components/Description",component:s,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},i={render:a=>r.jsx(o,{children:r.jsx(s,{...a,children:r.jsx(s.Meta,{term:n[0].term,children:n[0].details})})})},t={render:a=>r.jsx(o,{children:r.jsx(s,{...a,children:r.jsx(s.Meta,{term:n[0].term,useColumns:!0,children:n[0].details})})})},c={render:a=>r.jsx(o,{children:r.jsx(s,{...a,children:r.jsx(s.Accordion,{term:n[0].term,children:n[0].details})})})},d={render:a=>r.jsxs(o,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...a,children:n.map(e=>r.jsx(s.Meta,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})},p={render:a=>r.jsxs(o,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...a,children:n.map(e=>r.jsx(s.Meta,{term:e==null?void 0:e.term,useColumns:!0,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})},m={render:a=>r.jsxs(o,{children:[r.jsx(l,{as:"h2",header:"Description header",size:"md"}),r.jsx(s,{...a,children:n.map(e=>r.jsx(s.Accordion,{term:e==null?void 0:e.term,children:e==null?void 0:e.details},e==null?void 0:e.id))})]})};var u,M,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
      </Description>
    </Main>
}`,...(h=(M=i.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var D,x,g;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term} useColumns>
          {descMeta[0].details}
        </Description.Meta>
      </Description>
    </Main>
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,A,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
      </Description>
    </Main>
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var S,P,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Main>
}`,...(f=(P=d.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var y,z,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Main>
}`,...(k=(z=p.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var H,E,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>)}
      </Description>
    </Main>
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const N=["Primary","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{c as Accordion,t as Columns,m as MultipleAccordions,p as MultipleColumns,d as MultipleStacked,i as Primary,N as __namedExportsOrder,L as default};
