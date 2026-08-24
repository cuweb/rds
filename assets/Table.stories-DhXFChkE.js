import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Table-ClqUCS19.js";var s;function c(){return(c=e((()=>{s=[{id:1,title:`End-of-Year Reflections and Resolutions for Our Web Services Team`,description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.`},{id:2,title:`Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps`,description:`Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.`},{id:3,title:`Captivating Captions: Why We Use Captions on Videos`,description:`Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.`},{id:4,title:`End-of-Year Reflections and Resolutions for Our Web Services Team`,description:`Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.`},{id:5,title:`How to Write for the Web`,description:`Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.`}]})))()}var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),c(),a(),r(),l=n(),u={title:`Components/Table`,component:o,tags:[`autodocs`],parameters:{controls:{sort:`requiredFirst`}}},d=s.map(e=>{let t=`http://thing/`+e.id;return{...e,link:(0,l.jsx)(`a`,{href:t,children:`Edit`})}}),f=[{key:`id`,header:`ID`,sort:{sortable:!0},order:`descending`,default:!0},{key:`title`,header:`Title`,sort:{sortable:!0}},{key:`description`,header:`Description`,sort:{sortable:!1}},{key:`link`,header:`Edit`,sort:{sortable:!1}}],p=[{key:`id`,header:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`label`,{className:`sr-only`,htmlFor:`select-all-checkbox`,children:`Select all for bulk action`}),(0,l.jsx)(`input`,{type:`checkbox`,id:`select-all-checkbox`,name:`checked`,value:`all`})]})},{key:`title`,header:`Title`,sort:{sortable:!0}},{key:`description`,header:`Description`,sort:{sortable:!1}},{key:`link`,header:`Edit`,sort:{sortable:!1}}],m={args:{data:d,columns:f,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e})})},h={args:{data:d,columns:f,colgroup:[10,30,40,20],hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e})})},g={args:{data:d,columns:p,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e})})},_={args:{data:d,columns:f,hasStripes:!1,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e})})},v={args:{data:d,columns:f,hasStripes:!0,noWordBreak:!1,range:[1,-1],enableRowHeader:!0},render:e=>(0,l.jsx)(i,{children:(0,l.jsx)(o,{...e})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`CustomColumnsWidth`,`ReactNodeInColumn`,`RowHeader`,`HasStripes`]})))()}b();export{h as CustomColumnsWidth,v as HasStripes,m as Primary,g as ReactNodeInColumn,_ as RowHeader,y as __namedExportsOrder,u as default};