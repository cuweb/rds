import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{P as a}from"./PageHeader-C5TDJi7F.js";import{F as d}from"./Figure-DThWmfrv.js";import{B as x}from"./ButtonGroup-02ebpWXM.js";import{S as c}from"./Section-BA8VpE3g.js";import{a as t}from"./EventData-DPPkmqkE.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLinkContext-Bz4KtVj9.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./propClasses-C1Ju-ucV.js";import"./index-BiUgQ6xk.js";import"./iframe-DnJgUTUZ.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const J={title:"Components/PageHeader",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},i={args:{header:"Page Header",as:"h1",size:"lg",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",isWhite:!1,isCenter:!1,noUnderline:!1},render:r=>e.jsx(c,{children:e.jsx(a,{...r})})},o={render:r=>e.jsx(c,{children:e.jsxs(a,{...r,children:[e.jsx(d,{size:"sm",align:"right",rounded:"lg",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.endDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(x,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})})};o.args={header:"Upcoming Single Day Event"};const s={render:r=>e.jsx(c,{children:e.jsxs(a,{...r,children:[e.jsx(d,{size:"sm",align:"right",noMobile:!0,children:e.jsx("img",{src:t.image,alt:t.alt,width:"200",height:"133"})}),e.jsx(a.Event,{eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:t.startDate,endDate:t.multiDate,location:"Raven's Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",children:e.jsxs(x,{children:[e.jsx("a",{href:"https://carleton.ca",className:"cu-button cu-button--red",children:"Register Now"}),e.jsx("a",{href:"https://carleton.ca/webservices",className:"cu-button cu-button--grey",children:"Add to My Events"})]})})]})})};s.args={header:"Event with Date Range"};const n={render:r=>e.jsx(c,{children:e.jsxs(a,{...r,children:[e.jsx(d,{size:"sm",align:"right",children:e.jsx("img",{src:"https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k",alt:"Required alt text",width:"200",height:"133"})}),e.jsx(a.People,{jobTitle:"Jedi Master & Jedi Council Member",degrees:"Certificate, Padawan Academy of Jedi Arts",building:"Onraed",room:"Sector A29",email:"greely@thejediyouseek.com",phone:"613-520-2600",phoneExt:"1234",orcidID:"1234",resume:"#",website:"#website",linkedin:"#linkedin",twitter:"#twitter",facebook:"#facebook",instagram:"#instagram"})]})})};n.args={header:"People Profile",pronoun:"He/Him"};var l,u,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    header: 'Page Header',
    as: 'h1',
    size: 'lg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isWhite: false,
    isCenter: false,
    noUnderline: false
  },
  render: args => {
    return <Section>
        <PageHeader {...args} />
      </Section>;
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader {...args}>
        <Figure size="sm" align="right" rounded="lg" noMobile>
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
    </Section>
}`,...(p=(h=o.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader {...args}>
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
    </Section>
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,D,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Section>
      <PageHeader {...args}>
        <Figure size="sm" align="right">
          <img src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k" alt="Required alt text" width="200" height="133" />
        </Figure>
        <PageHeader.People jobTitle="Jedi Master & Jedi Council Member" degrees="Certificate, Padawan Academy of Jedi Arts" building="Onraed" room="Sector A29" email="greely@thejediyouseek.com" phone="613-520-2600" phoneExt="1234" orcidID="1234" resume="#" website="#website" linkedin="#linkedin" twitter="#twitter" facebook="#facebook" instagram="#instagram" />
      </PageHeader>
    </Section>
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const G=["Primary","EventHeader","EventHeaderMultiday","PeopleHeader"];export{o as EventHeader,s as EventHeaderMultiday,n as PeopleHeader,i as Primary,G as __namedExportsOrder,J as default};
