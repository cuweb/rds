import{j as s}from"./jsx-runtime-X2b_N9AH.js";import{D as e,a as o}from"./DescriptionData-72y6YGdY.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-BlHLKr18.js";const v={title:"Components/Description",component:e,tags:["autodocs"],argTypes:{},parameters:{controls:{sort:"requiredFirst"}}},n={render:a=>s.jsx(e,{...a,children:s.jsx(e.Meta,{term:o[0].term,children:o[0].details})})},t={render:a=>s.jsx(e,{...a,children:s.jsx(e.Meta,{term:o[0].term,useColumns:!0,children:o[0].details})})},c={render:a=>s.jsx(e,{...a,children:s.jsx(e.Accordion,{term:o[0].term,children:o[0].details})})},i={render:a=>s.jsx(e,{...a,children:o.map(r=>s.jsx(e.Meta,{term:r==null?void 0:r.term,children:r==null?void 0:r.details},r==null?void 0:r.id))})},d={render:a=>s.jsx(e,{...a,children:o.map(r=>s.jsx(e.Meta,{term:r==null?void 0:r.term,useColumns:!0,children:r==null?void 0:r.details},r==null?void 0:r.id))})},p={render:a=>s.jsx(e,{...a,children:o.map(r=>s.jsx(e.Accordion,{term:r==null?void 0:r.term,children:r==null?void 0:r.details},r==null?void 0:r.id))})};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
    </Description>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var D,M,g;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      <Description.Meta term={descMeta[0].term} useColumns>
        {descMeta[0].details}
      </Description.Meta>
    </Description>
}`,...(g=(M=t.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var x,j,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
    </Description>
}`,...(h=(j=c.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var A,C,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
          {item?.details}
        </Description.Meta>)}
    </Description>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var f,k,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
          {item?.details}
        </Description.Meta>)}
    </Description>
}`,...(y=(k=d.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,_,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Description {...args}>
      {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
          {item?.details}
        </Description.Accordion>)}
    </Description>
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const w=["Default","Columns","Accordion","MultipleStacked","MultipleColumns","MultipleAccordions"];export{c as Accordion,t as Columns,n as Default,p as MultipleAccordions,d as MultipleColumns,i as MultipleStacked,w as __namedExportsOrder,v as default};
