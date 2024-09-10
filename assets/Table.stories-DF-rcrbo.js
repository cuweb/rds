import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{T as a}from"./Table-NP7JXxpG.js";import{S as c}from"./Section-BA8VpE3g.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-gc4pqSrO.js";const b=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],y={title:"Components/Table",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},m=b.map(e=>{const f="http://thing/"+e.id;return{...e,link:r.jsx("a",{className:"font-semibold text-cu-red",href:f,children:"Edit"})}}),p=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],t={args:{data:m,columns:p,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:e=>r.jsx(c,{children:r.jsx(a,{...e})})},s={args:{data:m,columns:p,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>r.jsx(c,{children:r.jsx(a,{...e})})};var o,i,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1]
  },
  render: args => {
    return <Section>
        <Table {...args} />
      </Section>;
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true
  },
  render: args => {
    return <Section>
        <Table {...args} />
      </Section>;
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Primary","RowHeader"];export{t as Primary,s as RowHeader,T as __namedExportsOrder,y as default};
