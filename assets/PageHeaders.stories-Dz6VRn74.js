import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as a}from"./PageHeaders-ht5JwO97.js";import{F as l}from"./Figure-fzf2xxIv.js";import{B as R}from"./ButtonGroup-G95_qJes.js";import{E as t}from"./EventData-BT2hBXGJ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-BlHLKr18.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./index-DKy2iYlg.js";import"./iframe-C_4F3ft5.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const X={title:"Components/PageHeaders",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s={};s.args={header:"Large page header",size:"lg",as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",isWhite:!1,isCenter:!1};const c={args:{header:"Page header centre",size:"lg",as:"h1",isCenter:!0}},d={args:{header:"Large header with content",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",size:"lg",as:"h1"}},u={args:{header:"Large center header with content",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",size:"lg",as:"h1",isCenter:!0}},i={render:r=>e.jsxs(a,{...r,children:[e.jsx(l,{size:"sm",align:"right",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.endDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(R,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})};i.args={header:"Upcoming Single Day Event"};const o={render:r=>e.jsxs(a,{...r,children:[e.jsx(l,{size:"sm",align:"right",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.multiDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(R,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})};o.args={header:"Event with Date Range"};const n={render:r=>e.jsxs(a,{...r,children:[e.jsx(l,{size:"sm",align:"right",children:e.jsx("img",{src:"https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k",alt:"Required alt text",width:"200",height:"133"})}),e.jsx(a.People,{jobTitle:"Jedi Master & Jedi Council Member",degrees:"Certificate, Padawan Academy of Jedi Arts",building:"Onraed",room:"Sector A29",email:"greely@thejediyouseek.com",phone:"613-520-2600",phoneExt:"1234",resume:"#",website:"#",linkedin:"#",twitter:"#",facebook:"#"})]})};n.args={header:"People Profile",pronoun:"He/Him"};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,v,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    header: 'Page header centre',
    size: 'lg',
    as: 'h1',
    isCenter: true
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,y,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    header: 'Large header with content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    size: 'lg',
    as: 'h1'
  }
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var j,P,x;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    header: 'Large center header with content',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    size: 'lg',
    as: 'h1',
    isCenter: true
  }
}`,...(x=(P=u.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var H,E,w;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <PageHeaders {...args}>
      <Figure size="sm" align="right" noMobile>
        <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
      </Figure>
      <PageHeaders.Event eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate={eventData.startDate} endDate={eventData.endDate} location="Raven's Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234">
        <ButtonGroup>
          <a href="https://carleton.ca" className="cu-button cu-button--red">
            Register Now
          </a>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
            Add to My Events
          </a>
        </ButtonGroup>
      </PageHeaders.Event>
    </PageHeaders>
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var N,C,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <PageHeaders {...args}>
      <Figure size="sm" align="right" noMobile>
        <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
      </Figure>
      <PageHeaders.Event eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate={eventData.startDate} endDate={eventData.multiDate} location="Raven's Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234">
        <ButtonGroup>
          <a href="https://carleton.ca" className="cu-button cu-button--red">
            Register Now
          </a>
          <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
            Add to My Events
          </a>
        </ButtonGroup>
      </PageHeaders.Event>
    </PageHeaders>
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var z,B,M;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <PageHeaders {...args}>
      <Figure size="sm" align="right">
        <img src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k" alt="Required alt text" width="200" height="133" />
      </Figure>
      <PageHeaders.People jobTitle="Jedi Master & Jedi Council Member" degrees="Certificate, Padawan Academy of Jedi Arts" building="Onraed" room="Sector A29" email="greely@thejediyouseek.com" phone="613-520-2600" phoneExt="1234" resume="#" website="#" linkedin="#" twitter="#" facebook="#" />
    </PageHeaders>
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const _=["Default","PageHeaderCentre","DefaultWithContent","CenterWithContent","EventHeader","EventHeaderMultiday","PeopleHeader"];export{u as CenterWithContent,s as Default,d as DefaultWithContent,i as EventHeader,o as EventHeaderMultiday,c as PageHeaderCentre,n as PeopleHeader,_ as __namedExportsOrder,X as default};
