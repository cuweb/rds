import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{T as o}from"./Table-Bk0fooYZ.js";import{S as l}from"./Section-CO2ge5vF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ChevronDownIcon-gc4pqSrO.js";const u=[{id:1,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum."},{id:2,title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps",description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur."},{id:3,title:"Captivating Captions: Why We Use Captions on Videos",description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo."},{id:4,title:"End-of-Year Reflections and Resolutions for Our Web Services Team",description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci."},{id:5,title:"How to Write for the Web",description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum."}],v={title:"Components/Table",component:o,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},d=u.map(e=>{const n="http://thing/"+e.id;return{...e,link:s.jsx("a",{className:"font-semibold text-cu-red",href:n,children:"Edit"})}}),m=[{key:"id",header:"ID",sort:{sortable:!0},order:"descending",default:!0},{key:"title",header:"Title",sort:{sortable:!0}},{key:"description",header:"Description",sort:{sortable:!1}},{key:"link",header:"Edit",sort:{sortable:!1}}],t={args:{data:d,columns:m,hasStripes:!1,noWordBreak:!1,range:[1,-1]},render:e=>s.jsx(l,{children:s.jsx(o,{...e})})};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const k=["Primary"];export{t as Primary,k as __namedExportsOrder,v as default};
