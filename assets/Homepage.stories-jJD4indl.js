import{j as e}from"./jsx-runtime-pdLcmAzh.js";import{M as j}from"./Main-DwsfdQTZ.js";import{F}from"./FooterDept-B1ThA0n0.js";import{N as t}from"./Nav-BqjyoZMq.js";import{P as a}from"./PageHeader-C6A48cNv.js";import{F as i}from"./FullBanner-CTPToHMo.js";import{B as u}from"./ButtonGroup-rywSWvx8.js";import{B as s}from"./Button-CO0H2_0O.js";import{C as r}from"./Column-DT5tjaZZ.js";import{F as y}from"./FooterStandard-YIQXhq3z.js";import{F as B}from"./FooterCookie-CB3W8uQf.js";import{S as l}from"./Section-BULSrFRe.js";import{C as o}from"./Card-DZ1R0EZ7.js";import{N as v}from"./NewsData-CjZsRozh.js";import{N as d,b as N}from"./NavData-VxU6Oijv.js";import"./iframe-B_DE8Sck.js";import"./preload-helper-Dp1pzeXC.js";import"./useLinkContext-F_GHM8Je.js";import"./Avatar-DK957Hmx.js";import"./Icon-C82VDYlE.js";import"./parseISO-BGl-MJHo.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-620uA3Rh.js";import"./useVideoBanner-CxUFIfGS.js";import"./FooterLogoLinks-BNtPoUNt.js";import"./FooterStandardData-3_746QZ9.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./formatCurrency-ByxSms_v.js";const te={title:"Projects/FutureFunder",parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsxs(t.Top,{children:[e.jsx(t.Logo,{title:"FutureFunder",link:"https://graduate.carleton.ca"}),e.jsx(t.Buttons,{menu:d,isSearch:!0,onClickSearch:()=>{}})]}),e.jsxs(t.Bottom,{children:[e.jsx(t.Menu,{menu:N}),e.jsx(t.Buttons,{menu:d,isSearch:!0,onClickSearch:()=>{}})]})]}),e.jsxs(j,{children:[e.jsxs(i,{children:[e.jsx(i.Image,{children:e.jsx("img",{alt:"Top down view of a desk",src:"https://picsum.photos/id/565/1920/840"})}),e.jsxs(i.Content,{headerType:"h1",title:"Welcome to the FutureFunder",children:[e.jsx("p",{children:"Your platform to make lasting change through higher education!"}),e.jsxs(u,{children:[e.jsx(s,{title:"Apply Now"}),e.jsx(s,{color:"grey",title:"Request Information"})]})]})]}),e.jsxs(l,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(a,{as:"h2",header:"Featured Campaigns",size:"md"}),e.jsx(r,{cols:"4",children:v.slice(0,8).map(({id:p,title:g,link:x,image:C,alt:f})=>e.jsxs(o,{children:[e.jsx(o.Figure,{children:e.jsx("img",{src:C,alt:f,width:"400",height:"300"})}),e.jsx(o.Header,{extraText:"Athletics, Science",title:g,link:x}),e.jsx(o.Footer,{children:e.jsx(o.FundingMeta,{raised:1234,goal:2e3,daysLeft:30})})]},p))})]}),e.jsxs(l,{children:[e.jsx(a,{as:"h2",header:"Why Give?",size:"md",isCenter:!0}),e.jsxs(r,{cols:"2",children:[e.jsx(r.Content,{children:e.jsx("p",{children:"Since its founding moments Carleton has had a mandate to serve the community, providing citizens with education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are Here for Good."})}),e.jsx(r.Content,{children:e.jsx("p",{children:"Your gift to Carleton brings real change to your community. If you share our conviction that there are good things to be done, we could use your help. Collaborate with us and do good things for the world."})})]}),e.jsx(u,{align:"center",gap:"5",children:e.jsx(s,{onClick:()=>{},title:"Learn More"})})]}),e.jsx(l,{isGrey:!0,children:e.jsx(a,{as:"h2",header:"Browse by Department",size:"md",content:"Add design for browsing by category.",isCenter:!0})})]}),e.jsx(F,{buildingName:"Pigiarvik (ᐱᒋᐊᕐᕕᒃ)",deptName:"Information Technology Services",email:"noreply@carleton.ca",footerButtons:[{id:1,title:"Contact support",url:"#"},{id:2,title:"Recent alerts",url:"#"}],officeNumber:"400",phone:"613-520-2600"}),e.jsx(y,{}),e.jsx(B,{})]})};var m,c,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="FutureFunder" link="https://graduate.carleton.ca" />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavFutureFunder} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Bottom>
        </Nav>

        <Main>
          <FullBanner>
            <FullBanner.Image>
              <img alt="Top down view of a desk" src="https://picsum.photos/id/565/1920/840" />
            </FullBanner.Image>
            <FullBanner.Content headerType="h1" title="Welcome to the FutureFunder">
              <p>Your platform to make lasting change through higher education!</p>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="grey" title="Request Information" />
              </ButtonGroup>
            </FullBanner.Content>
          </FullBanner>

          <Section maxWidth="7xl" isGrey>
            <PageHeader as="h2" header="Featured Campaigns" size="md" />
            <Column cols="4">
              {NewsData.slice(0, 8).map(({
              id,
              title,
              link,
              image,
              alt
            }) => <Card key={id}>
                  <Card.Figure>
                    <img src={image} alt={alt} width="400" height="300" />
                  </Card.Figure>
                  <Card.Header extraText="Athletics, Science" title={title} link={link} />
                  <Card.Footer>
                    <Card.FundingMeta raised={1234} goal={2000} daysLeft={30} />
                  </Card.Footer>
                </Card>)}
            </Column>
          </Section>

          <Section>
            <PageHeader as="h2" header="Why Give?" size="md" isCenter />
            <Column cols="2">
              <Column.Content>
                <p>
                  Since its founding moments Carleton has had a mandate to serve the community, providing citizens with
                  education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are
                  Here for Good.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Your gift to Carleton brings real change to your community. If you share our conviction that there are
                  good things to be done, we could use your help. Collaborate with us and do good things for the world.
                </p>
              </Column.Content>
            </Column>
            <ButtonGroup align="center" gap="5">
              <Button onClick={() => {}} title="Learn More" />
            </ButtonGroup>
          </Section>

          <Section isGrey>
            <PageHeader as="h2" header="Browse by Department" size="md" content="Add design for browsing by category." isCenter />
          </Section>
        </Main>

        <FooterDept buildingName="Pigiarvik (ᐱᒋᐊᕐᕕᒃ)" deptName="Information Technology Services" email="noreply@carleton.ca" footerButtons={[{
        id: 1,
        title: 'Contact support',
        url: '#'
      }, {
        id: 2,
        title: 'Recent alerts',
        url: '#'
      }]} officeNumber="400" phone="613-520-2600" />

        <FooterStandard />
        <FooterCookie />
      </>;
  }
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const oe=["Homepage"];export{n as Homepage,oe as __namedExportsOrder,te as default};
