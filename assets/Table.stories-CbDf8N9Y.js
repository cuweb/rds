import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{T as n}from"./Table-CbtzeBll.js";import{S as o}from"./Section-BA8VpE3g.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-gc4pqSrO.js";const k=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],y={title:"Components/Table",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i=k.map(e=>{const S="http://thing/"+e.id;return{...e,link:r.jsx("a",{className:"font-semibold text-cu-red",href:S,children:"Edit"})}}),l=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],a={args:{data:i,columns:l,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:e=>r.jsx(o,{children:r.jsx(n,{...e})})},s={args:{data:i,columns:l,colgroup:[10,30,40,20],hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>r.jsx(o,{children:r.jsx(n,{...e})})},t={args:{data:i,columns:l,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>r.jsx(o,{children:r.jsx(n,{...e})})};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    colgroup: [10, 30, 40, 20],
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
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const C=["Primary","CustomColumnsWidth","RowHeader"];export{s as CustomColumnsWidth,a as Primary,t as RowHeader,C as __namedExportsOrder,y as default};
