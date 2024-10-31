import{j as e}from"./jsx-runtime-B9B14buI.js";import{T as a}from"./Table-BBSM5zw4.js";import{S as i}from"./Section-4kh7xz3r.js";import"./index-DxDX2vOa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-D0gv-xn_.js";const y=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],B={title:"Components/Table",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},l=y.map(r=>{const R="http://thing/"+r.id;return{...r,link:e.jsx("a",{className:"font-semibold text-cu-red",href:R,children:"Edit"})}}),d=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],v=[{key:"id",header:e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"sr-only",htmlFor:"select-all-checkbox",children:"Select all for bulk action"}),e.jsx("input",{type:"checkbox",id:"select-all-checkbox",name:"checked",value:"all"})]})},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],s={args:{data:l,columns:d,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:r=>e.jsx(i,{children:e.jsx(a,{...r})})},t={args:{data:l,columns:d,colgroup:[10,30,40,20],hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(i,{children:e.jsx(a,{...r})})},n={args:{data:l,columns:v,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(i,{children:e.jsx(a,{...r})})},o={args:{data:l,columns:d,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(i,{children:e.jsx(a,{...r})})};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,f,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columnsWithReactNode,
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
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,x,W;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(x=o.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};const E=["Primary","CustomColumnsWidth","ReactNodeInColumn","RowHeader"];export{t as CustomColumnsWidth,s as Primary,n as ReactNodeInColumn,o as RowHeader,E as __namedExportsOrder,B as default};
