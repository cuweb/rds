import{j as e}from"./jsx-runtime-CNeqT_Xp.js";import{M as f}from"./Main-C0OPEoZu.js";import{N as r}from"./Nav-CRExxIrZ.js";import{P as j}from"./PageHeader-Bmq-AvFR.js";import{F as o}from"./FullBanner-MZQXOUnW.js";import{C as F}from"./CallOut-BELHtAAB.js";import{B as i}from"./ButtonGroup-C2wgXyJL.js";import{B as a}from"./Button-WIPGpqJJ.js";import{C as s}from"./Column-BxGDHsJc.js";import{F as B}from"./FooterStandard-ClB4Wrn6.js";import{F as S}from"./FooterCookie-BR58mfsn.js";import{S as d}from"./Section-hfTkhf23.js";import{C as t}from"./Card-DLq5wKl6.js";import{N as v}from"./NewsData-CjZsRozh.js";import{a as u,b as y}from"./NavData-BCA87AC2.js";import"./iframe-CuBvZbuR.js";import"./preload-helper-Dp1pzeXC.js";import"./useLinkContext-kb_Rokh-.js";import"./Avatar-CYgP1Q1F.js";import"./Icon-DrFt80np.js";import"./parseISO-BGl-MJHo.js";import"./format-BDD0as5c.js";import"./isSameDay-C9OCNg_L.js";import"./propClasses-CJUCiil5.js";import"./useVideoBanner-BBGKIUE3.js";import"./FooterLogoLinks-B1Va8UuK.js";import"./FooterStandardData-CLyJH8hw.js";import"./parse-CXxdJvFO.js";import"./getDate-DcT4OotK.js";import"./formatCurrency-QXkoQu3z.js";import"./useScrollReveal-Dq_CoIb_.js";const re={title:"Projects/FutureFunder",parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsxs(r.Top,{children:[e.jsx(r.Logo,{title:"FutureFunder",link:"https://futurefunder.carleton.ca"}),e.jsx(r.Buttons,{menu:u,isSearch:!0,onClickSearch:()=>{}})]}),e.jsxs(r.Bottom,{children:[e.jsx(r.Menu,{menu:y}),e.jsx(r.Buttons,{menu:u,isSearch:!0,onClickSearch:()=>{}})]})]}),e.jsxs(f,{children:[e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx("img",{alt:"Top down view of a desk",src:"https://picsum.photos/id/566/1920/840"})}),e.jsxs(o.Content,{headerType:"h1",title:"Welcome to the FutureFunder",children:[e.jsx("p",{children:"Your platform to make lasting change through higher education!"}),e.jsxs(i,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{color:"grey",title:"Request Information"})]})]})]}),e.jsxs(d,{maxWidth:"7xl",children:[e.jsx(j,{as:"h2",header:"Featured Campaigns",size:"md"}),e.jsx(s,{cols:"4",children:v.slice(0,8).map(({id:h,title:p,link:g,image:x,alt:C})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:x,alt:C,width:"400",height:"300"})}),e.jsx(t.Header,{extraText:"Athletics, Science",title:p,link:g}),e.jsx(t.Footer,{children:e.jsx(t.FundingMeta,{raised:1234,goal:2e3,daysLeft:30})})]},h))})]}),e.jsxs(F,{justify:"center",maxWidth:"4xl",title:"Why give?",children:[e.jsx("p",{children:"Since its founding moments Carleton has had a mandate to serve the community, providing citizens with education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are Here for Good."}),e.jsx("p",{children:"Your gift to Carleton brings real change to your community. If you share our conviction that there are good things to be done, we could use your help. Collaborate with us and do good things for the world."}),e.jsx(i,{align:"center",gap:"5",children:e.jsx(a,{onClick:()=>{},title:"Learn More"})})]}),e.jsx(d,{maxWidth:"7xl",isGrey:!0,children:e.jsxs(s,{cols:"4",children:[e.jsx(t,{leftBorder:!0,noHover:!0,children:e.jsx(t.Stats,{desc:"Student Population",stat:"30,500+"})}),e.jsx(t,{leftBorder:!0,noHover:!0,children:e.jsx(t.Stats,{desc:"Clubs & Societies",stat:"170+"})}),e.jsx(t,{leftBorder:!0,noHover:!0,children:e.jsx(t.Stats,{desc:"Scholarships & Bursaries",stat:"85.4 M+"})}),e.jsx(t,{leftBorder:!0,noHover:!0,children:e.jsx(t.Stats,{desc:"Research Funding",stat:"$116 M"})})]})})]}),e.jsx(B,{}),e.jsx(S,{})]})};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="FutureFunder" link="https://futurefunder.carleton.ca" />
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
              <img alt="Top down view of a desk" src="https://picsum.photos/id/566/1920/840" />
            </FullBanner.Image>
            <FullBanner.Content headerType="h1" title="Welcome to the FutureFunder">
              <p>Your platform to make lasting change through higher education!</p>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="grey" title="Request Information" />
              </ButtonGroup>
            </FullBanner.Content>
          </FullBanner>

          <Section maxWidth="7xl">
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

          <CallOut justify="center" maxWidth="4xl" title="Why give?">
            <p>
              Since its founding moments Carleton has had a mandate to serve the community, providing citizens with
              education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are Here
              for Good.
            </p>
            <p>
              Your gift to Carleton brings real change to your community. If you share our conviction that there are
              good things to be done, we could use your help. Collaborate with us and do good things for the world.
            </p>
            <ButtonGroup align="center" gap="5">
              <Button onClick={() => {}} title="Learn More" />
            </ButtonGroup>
          </CallOut>

          <Section maxWidth="7xl" isGrey>
            <Column cols="4">
              <Card leftBorder noHover>
                <Card.Stats desc="Student Population" stat="30,500+" />
              </Card>
              <Card leftBorder noHover>
                <Card.Stats desc="Clubs & Societies" stat="170+" />
              </Card>
              <Card leftBorder noHover>
                <Card.Stats desc="Scholarships & Bursaries" stat="85.4 M+" />
              </Card>
              <Card leftBorder noHover>
                <Card.Stats desc="Research Funding" stat="$116 M" />
              </Card>
            </Column>
          </Section>
        </Main>

        <FooterStandard />
        <FooterCookie />
      </>;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ne=["Homepage"];export{n as Homepage,ne as __namedExportsOrder,re as default};
