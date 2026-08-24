import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./PageHeader-BfMqWfqW.js";import{n as s,t as c}from"./Description-DoBmGBGx.js";import{n as l,t as u}from"./DescriptionData-Bk7cIwAQ.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),r(),a(),s(),l(),d=n(),f={title:`Components/Description`,component:c,tags:[`autodocs`],argTypes:{},parameters:{controls:{sort:`requiredFirst`}}},p={render:e=>(0,d.jsx)(i,{children:(0,d.jsx)(c,{...e,children:(0,d.jsx)(c.Meta,{term:u[0].term,children:u[0].details})})})},m={render:e=>(0,d.jsx)(i,{children:(0,d.jsx)(c,{...e,children:(0,d.jsx)(c.Meta,{term:u[0].term,useColumns:!0,children:u[0].details})})})},h={render:e=>(0,d.jsx)(i,{children:(0,d.jsx)(c,{...e,children:(0,d.jsx)(c.Accordion,{term:u[0].term,children:u[0].details})})})},g={render:e=>(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{as:`h2`,header:`Description header`,size:`md`}),(0,d.jsx)(c,{...e,children:u.map(e=>(0,d.jsx)(c.Meta,{term:e?.term,children:e?.details},e?.id))})]})},_={render:e=>(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{as:`h2`,header:`Description header`,size:`md`}),(0,d.jsx)(c,{...e,children:u.map(e=>(0,d.jsx)(c.Meta,{term:e?.term,useColumns:!0,children:e?.details},e?.id))})]})},v={render:e=>(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{as:`h2`,header:`Description header`,size:`md`}),(0,d.jsx)(c,{...e,children:u.map(e=>(0,d.jsx)(c.Accordion,{term:e?.term,children:e?.details},e?.id))})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
      </Description>
    </Main>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term} useColumns>
          {descMeta[0].details}
        </Description.Meta>
      </Description>
    </Main>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <Description {...args}>
        <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
      </Description>
    </Main>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Main>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>)}
      </Description>
    </Main>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map(item => <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>)}
      </Description>
    </Main>
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`Columns`,`Accordion`,`MultipleStacked`,`MultipleColumns`,`MultipleAccordions`]})))()}b();export{h as Accordion,m as Columns,v as MultipleAccordions,_ as MultipleColumns,g as MultipleStacked,p as Primary,y as __namedExportsOrder,f as default};