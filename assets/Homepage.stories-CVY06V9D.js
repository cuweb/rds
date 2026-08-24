import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{n as d,t as f}from"./ButtonGroup-D8089_T6.js";import{a as p,o as m,r as h}from"./NavData-ahBUZ0C_.js";import{n as g,t as _}from"./Button-CyTkV0p8.js";import{n as v,t as y}from"./Column-H93DtrCl.js";import{n as b,t as x}from"./PageHeader-BfMqWfqW.js";import{n as S,t as C}from"./CallOut-CA5WARBs.js";import{n as w,t as T}from"./Card-BZZdNcM_.js";import{n as E,t as D}from"./NewsData-K3vFfbTS.js";import{n as O,t as k}from"./FooterCookie-CJF8JyGF.js";import{n as A,t as j}from"./FullBanner-Cc_3r2jZ.js";var M,N,P,F;function I(){return(I=e((()=>{t(),r(),l(),b(),A(),S(),d(),g(),v(),s(),O(),a(),w(),E(),m(),M=n(),N={title:`Projects/FutureFunder`,parameters:{layout:`fullscreen`}},P={render:()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(u,{children:[(0,M.jsxs)(u.Top,{children:[(0,M.jsx)(u.Logo,{title:`FutureFunder`,link:`https://futurefunder.carleton.ca`}),(0,M.jsx)(u.Buttons,{menu:h,isSearch:!0,onClickSearch:()=>{}})]}),(0,M.jsxs)(u.Bottom,{children:[(0,M.jsx)(u.Menu,{menu:p}),(0,M.jsx)(u.Buttons,{menu:h,isSearch:!0,onClickSearch:()=>{}})]})]}),(0,M.jsxs)(i,{children:[(0,M.jsxs)(j,{children:[(0,M.jsx)(j.Image,{children:(0,M.jsx)(`img`,{alt:`Top down view of a desk`,src:`https://picsum.photos/id/566/1920/840`})}),(0,M.jsxs)(j.Content,{headerType:`h1`,title:`Welcome to the FutureFunder`,children:[(0,M.jsx)(`p`,{children:`Your platform to make lasting change through higher education!`}),(0,M.jsxs)(f,{children:[(0,M.jsx)(_,{title:`Apply Now`}),(0,M.jsx)(_,{color:`grey`,title:`Request Information`})]})]})]}),(0,M.jsxs)(o,{maxWidth:`7xl`,children:[(0,M.jsx)(x,{as:`h2`,header:`Featured Campaigns`,size:`md`}),(0,M.jsx)(y,{cols:`4`,children:D.slice(0,8).map(({id:e,title:t,link:n,image:r,alt:i})=>(0,M.jsxs)(T,{children:[(0,M.jsx)(T.Figure,{children:(0,M.jsx)(`img`,{src:r,alt:i,width:`400`,height:`300`})}),(0,M.jsx)(T.Header,{extraText:`Athletics, Science`,title:t,link:n}),(0,M.jsx)(T.Footer,{children:(0,M.jsx)(T.FundingMeta,{raised:1234,goal:2e3,daysLeft:30})})]},e))})]}),(0,M.jsxs)(C,{justify:`center`,maxWidth:`4xl`,title:`Why give?`,children:[(0,M.jsx)(`p`,{children:`Since its founding moments Carleton has had a mandate to serve the community, providing citizens with education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are Here for Good.`}),(0,M.jsx)(`p`,{children:`Your gift to Carleton brings real change to your community. If you share our conviction that there are good things to be done, we could use your help. Collaborate with us and do good things for the world.`}),(0,M.jsx)(f,{align:`center`,gap:`5`,children:(0,M.jsx)(_,{onClick:()=>{},title:`Learn More`})})]}),(0,M.jsx)(o,{maxWidth:`7xl`,isGrey:!0,children:(0,M.jsxs)(y,{cols:`4`,children:[(0,M.jsx)(T,{leftBorder:!0,noHover:!0,children:(0,M.jsx)(T.Stats,{desc:`Student Population`,stat:`30,500+`})}),(0,M.jsx)(T,{leftBorder:!0,noHover:!0,children:(0,M.jsx)(T.Stats,{desc:`Clubs & Societies`,stat:`170+`})}),(0,M.jsx)(T,{leftBorder:!0,noHover:!0,children:(0,M.jsx)(T.Stats,{desc:`Scholarships & Bursaries`,stat:`85.4 M+`})}),(0,M.jsx)(T,{leftBorder:!0,noHover:!0,children:(0,M.jsx)(T.Stats,{desc:`Research Funding`,stat:`$116 M`})})]})})]}),(0,M.jsx)(c,{}),(0,M.jsx)(k,{})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Homepage`]})))()}I();export{P as Homepage,F as __namedExportsOrder,N as default};