import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as a}from"./PageHeader-B-rx26w8.js";import{F as c}from"./Figure-DyZYQdzE.js";import{B as j}from"./ButtonGroup-DcsTpBqd.js";import{a as t}from"./EventData-DPPkmqkE.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./propClasses-BCnilxRx.js";import"./index-BysjpEpO.js";import"./iframe-B-cGZJwO.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const J={title:"Components/PageHeader",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},o={};o.args={header:"Page Header",as:"h1",size:"lg",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",isWhite:!1,isCenter:!1,noUnderline:!1};const s={render:r=>e.jsxs(a,{...r,children:[e.jsx(c,{size:"sm",align:"right",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.endDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(j,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})};s.args={header:"Upcoming Single Day Event"};const i={render:r=>e.jsxs(a,{...r,children:[e.jsx(c,{size:"sm",align:"right",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.multiDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(j,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})};i.args={header:"Event with Date Range"};const n={render:r=>e.jsxs(a,{...r,children:[e.jsx(c,{size:"sm",align:"right",children:e.jsx("img",{src:"https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k",alt:"Required alt text",width:"200",height:"133"})}),e.jsx(a.People,{jobTitle:"Jedi Master & Jedi Council Member",degrees:"Certificate, Padawan Academy of Jedi Arts",building:"Onraed",room:"Sector A29",email:"greely@thejediyouseek.com",phone:"613-520-2600",phoneExt:"1234",resume:"#",website:"#",linkedin:"#",twitter:"#",facebook:"#"})]})};n.args={header:"People Profile",pronoun:"He/Him"};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,h,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <PageHeader {...args}>
      <Figure size="sm" align="right" noMobile>
        <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
      </Figure>
      <PageHeader.Event eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate={eventData.startDate} endDate={eventData.endDate} location="Raven's Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234">
        <ButtonGroup>
          <a href="https://carleton.ca" className="cu-button cu-button--red">
            Register Now
          </a>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
            Add to My Events
          </a>
        </ButtonGroup>
      </PageHeader.Event>
    </PageHeader>
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <PageHeader {...args}>
      <Figure size="sm" align="right" noMobile>
        <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
      </Figure>
      <PageHeader.Event eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate={eventData.startDate} endDate={eventData.multiDate} location="Raven's Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234">
        <ButtonGroup>
          <a href="https://carleton.ca" className="cu-button cu-button--red">
            Register Now
          </a>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
            Add to My Events
          </a>
        </ButtonGroup>
      </PageHeader.Event>
    </PageHeader>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,D,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <PageHeader {...args}>
      <Figure size="sm" align="right">
        <img src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k" alt="Required alt text" width="200" height="133" />
      </Figure>
      <PageHeader.People jobTitle="Jedi Master & Jedi Council Member" degrees="Certificate, Padawan Academy of Jedi Arts" building="Onraed" room="Sector A29" email="greely@thejediyouseek.com" phone="613-520-2600" phoneExt="1234" resume="#" website="#" linkedin="#" twitter="#" facebook="#" />
    </PageHeader>
}`,...(f=(D=n.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const z=["Primary","EventHeader","EventHeaderMultiday","PeopleHeader"];export{s as EventHeader,i as EventHeaderMultiday,n as PeopleHeader,o as Primary,z as __namedExportsOrder,J as default};
