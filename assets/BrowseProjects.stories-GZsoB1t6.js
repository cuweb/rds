import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{a as d,o as f,r as p}from"./NavData-ahBUZ0C_.js";import{n as m,t as h}from"./Column-H93DtrCl.js";import{n as g,t as _}from"./Card-BZZdNcM_.js";import{n as v,t as y}from"./NewsData-K3vFfbTS.js";import{n as b,t as x}from"./FilterPanel-B6DHPQRc.js";import{n as S,t as C}from"./FilterData-CWzcXHfA.js";import{n as w,t as T}from"./Pagination-BBTqqN8q.js";import{n as E,t as D}from"./WideImage-DmvnSeJE.js";var O,k,A,j;function M(){return(M=e((()=>{t(),r(),a(),m(),s(),l(),g(),b(),E(),w(),f(),S(),v(),O=n(),k={title:`Projects/FutureFunder`,parameters:{layout:`fullscreen`}},A={render:()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(u,{children:[(0,O.jsxs)(u.Top,{children:[(0,O.jsx)(u.Logo,{title:`FutureFunder`,link:`https://futurefunder.carleton.ca`}),(0,O.jsx)(u.Buttons,{menu:p,isSearch:!0,onClickSearch:()=>{}})]}),(0,O.jsxs)(u.Bottom,{children:[(0,O.jsx)(u.Menu,{menu:d}),(0,O.jsx)(u.Buttons,{menu:p,isSearch:!0,onClickSearch:()=>{}})]})]}),(0,O.jsxs)(i,{children:[(0,O.jsx)(o,{maxWidth:`7xl`,children:(0,O.jsx)(D,{focalPointX:50,focalPointY:50,headerType:`h1`,isType:`image`,opacity:60,title:`Browse the Campaigns`,image:`https://picsum.photos/id/381/1920/840`})}),(0,O.jsxs)(o,{maxWidth:`7xl`,children:[(0,O.jsxs)(x,{children:[(0,O.jsx)(x.Top,{sortOptions:C.sortOptions,filterOptions:C.filters}),(0,O.jsx)(x.Bottom,{})]}),(0,O.jsx)(h,{cols:`4`,children:y.slice(0,8).map(({id:e,link:t,title:n,image:r,alt:i,date:a})=>(0,O.jsxs)(_,{children:[(0,O.jsx)(_.Figure,{children:(0,O.jsx)(`img`,{src:r,alt:i,width:`400`,height:`300`})}),(0,O.jsx)(_.Header,{title:n,link:t,date:a}),(0,O.jsx)(_.Body,{children:(0,O.jsx)(_.Excerpt,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris.`})})]},e))}),(0,O.jsx)(T,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>void 0,callbackPage:()=>void 0})]}),(0,O.jsx)(o,{maxWidth:`7xl`,isGrey:!0,children:(0,O.jsxs)(h,{cols:`4`,children:[(0,O.jsx)(_,{leftBorder:!0,noHover:!0,children:(0,O.jsx)(_.Stats,{desc:`Student Population`,stat:`30,500+`})}),(0,O.jsx)(_,{leftBorder:!0,noHover:!0,children:(0,O.jsx)(_.Stats,{desc:`Clubs & Societies`,stat:`170+`})}),(0,O.jsx)(_,{leftBorder:!0,noHover:!0,children:(0,O.jsx)(_.Stats,{desc:`Scholarships & Bursaries`,stat:`85.4 M+`})}),(0,O.jsx)(_,{leftBorder:!0,noHover:!0,children:(0,O.jsx)(_.Stats,{desc:`Research Funding`,stat:`$116 M`})})]})})]}),(0,O.jsx)(c,{})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <>
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
        <Section maxWidth="7xl">
          <WideImage focalPointX={50} focalPointY={50} headerType="h1" isType="image" opacity={60} title="Browse the Campaigns" image="https://picsum.photos/id/381/1920/840" />
        </Section>

        <Section maxWidth="7xl">
          <FilterPanel>
            <FilterPanel.Top sortOptions={FilterPanelData.sortOptions} filterOptions={FilterPanelData.filters} />
            <FilterPanel.Bottom />
          </FilterPanel>
          <Column cols="4">
            {NewsData.slice(0, 8).map(({
            id,
            link,
            title,
            image,
            alt,
            date
          }) => <Card key={id}>
                <Card.Figure>
                  <img src={image} alt={alt} width="400" height="300" />
                </Card.Figure>
                <Card.Header title={title} link={link} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
              </Card>)}
          </Column>
          <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} callbackPage={() => undefined} />
        </Section>

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
    </>
}`,...A.parameters?.docs?.source}}},j=[`BrowseProjects`]})))()}M();export{A as BrowseProjects,j as __namedExportsOrder,k as default};