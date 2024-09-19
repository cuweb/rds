import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as u}from"./Section-BA8VpE3g.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const y=({date:t,title:s,description:m})=>e.jsxs("li",{className:"timeline-list-item",children:[e.jsx("span",{className:"timeline-date",children:t}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h3",{className:"timeline-title",children:s}),e.jsx("p",{className:"timeline-description",children:m})]})]}),i=({events:t})=>e.jsx("div",{className:"timeline-wrapper",children:e.jsx("ul",{className:"timeline-ul",children:t.map((s,m)=>e.jsx(y,{date:s.date,title:s.title,description:s.description},m))})});y.__docgenInfo={description:"",methods:[],displayName:"TimelineEvent",props:{date:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineEventProps"}],raw:"TimelineEventProps[]"},description:""}}};const j={title:"Components/Timeline",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},h=[{date:"3rd January 2020",title:"What Is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},{date:"21st June 2019",title:"What Is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{date:"15th April 2018",title:"What Is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{date:"22nd March 2017",title:"What Is Lorem Ipsum?",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}],r={args:{events:h},render:t=>e.jsx(u,{children:e.jsx(i,{...t})})},n={args:{events:[]},render:t=>e.jsx(u,{children:e.jsx(i,{...t})})};var a,o,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    events: sampleEvents
  },
  render: args => {
    return <Section>
        <Timeline {...args} />
      </Section>;
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    events: []
  },
  render: args => {
    return <Section>
        <Timeline {...args} />
      </Section>;
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const v=["Primary","EmptyTimeline"];export{n as EmptyTimeline,r as Primary,v as __namedExportsOrder,j as default};
