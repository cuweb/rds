import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as a}from"./Table-CsDjN1pi.js";import{M as s}from"./Main-BqxOGoMS.js";import"./index-yBjzXJbu.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";const T=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],q={title:"Components/Table",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},n=T.map(r=>{const w="http://thing/"+r.id;return{...r,link:e.jsx("a",{href:w,children:"Edit"})}}),u=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],H=[{key:"id",header:e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"sr-only",htmlFor:"select-all-checkbox",children:"Select all for bulk action"}),e.jsx("input",{type:"checkbox",id:"select-all-checkbox",name:"checked",value:"all"})]})},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],t={args:{data:n,columns:u,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:r=>e.jsx(s,{children:e.jsx(a,{...r})})},o={args:{data:n,columns:u,colgroup:[10,30,40,20],hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(s,{children:e.jsx(a,{...r})})},i={args:{data:n,columns:H,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(s,{children:e.jsx(a,{...r})})},l={args:{data:n,columns:u,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(s,{children:e.jsx(a,{...r})})},d={args:{data:n,columns:u,hasStripes:!0,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:r=>e.jsx(s,{children:e.jsx(a,{...r})})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1]
  },
  render: args => {
    return <Main>
        <Table {...args} />
      </Main>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    return <Main>
        <Table {...args} />
      </Main>;
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,k,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columnsWithReactNode,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true
  },
  render: args => {
    return <Main>
        <Table {...args} />
      </Main>;
  }
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,W,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    hasStripes: false,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true
  },
  render: args => {
    return <Main>
        <Table {...args} />
      </Main>;
  }
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var j,y,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: tableData,
    columns: columns,
    hasStripes: true,
    noWordBreak: false,
    range: [1, -1],
    enableRowHeader: true
  },
  render: args => {
    return <Main>
        <Table {...args} />
      </Main>;
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const F=["Primary","CustomColumnsWidth","ReactNodeInColumn","RowHeader","HasStripes"];export{o as CustomColumnsWidth,d as HasStripes,t as Primary,i as ReactNodeInColumn,l as RowHeader,F as __namedExportsOrder,q as default};
