import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{o as d,r as f}from"./NavData-ahBUZ0C_.js";import{n as p,t as m}from"./Column-H93DtrCl.js";import{n as h,t as g}from"./PageHeader-BfMqWfqW.js";import{n as _,t as v}from"./Card-BZZdNcM_.js";import{n as y,t as b}from"./NewsData-K3vFfbTS.js";import{n as x,t as S}from"./Pagination-BBTqqN8q.js";var C,w,T,E,D;function O(){return(O=e((()=>{t(),a(),r(),p(),s(),l(),d(),_(),h(),y(),x(),C=n(),w={title:`Components/Pagination/Examples`,parameters:{layout:`fullscreen`}},T=()=>(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(`p`,{children:`Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.`})}),E={render:()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{children:(0,C.jsxs)(u.Top,{children:[(0,C.jsx)(u.Logo,{title:`Raven Design System`,link:`/`}),(0,C.jsx)(u.Aside,{children:(0,C.jsx)(u.Buttons,{menu:f})})]})}),(0,C.jsxs)(i,{maxWidth:`5xl`,children:[(0,C.jsxs)(o,{maxWidth:`7xl`,children:[(0,C.jsx)(g,{as:`h1`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,header:`Card Grid Layouts`,size:`lg`}),(0,C.jsx)(m,{cols:`4`,children:b.slice(0,8).map(({id:e,link:t,title:n,image:r,alt:i,date:a})=>(0,C.jsxs)(v,{children:[(0,C.jsx)(v.Figure,{children:(0,C.jsx)(`img`,{src:r,alt:i,width:`400`,height:`300`})}),(0,C.jsx)(v.Header,{title:n,link:t,date:a})]},e))}),(0,C.jsx)(S,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]}),(0,C.jsx)(T,{}),(0,C.jsx)(T,{}),(0,C.jsx)(g,{header:`Card Grid Layouts`,size:`md`}),(0,C.jsx)(m,{cols:`3`,children:b.slice(0,6).map(({id:e,link:t,title:n,date:r})=>(0,C.jsx)(v,{children:(0,C.jsx)(v.Header,{title:n,link:t,date:r})},e))}),(0,C.jsx)(S,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48}),(0,C.jsx)(T,{}),(0,C.jsx)(T,{}),(0,C.jsxs)(o,{maxWidth:`7xl`,isGrey:!0,children:[(0,C.jsx)(g,{header:`Card Grid Layouts`,size:`md`}),(0,C.jsx)(m,{cols:`4`,children:b.slice(0,8).map(({id:e,link:t,title:n,date:r})=>(0,C.jsx)(v,{children:(0,C.jsx)(v.Header,{title:n,link:t,date:r})},e))}),(0,C.jsx)(S,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]})]}),(0,C.jsx)(c,{})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="Raven Design System" link="/" />
          {/* <Nav.Menu menu={NavDataSingle} /> */}
          <Nav.Aside>
            <Nav.Buttons menu={NavButtonsData} />
          </Nav.Aside>
        </Nav.Top>
      </Nav>

      <Main maxWidth="5xl">
        <Section maxWidth="7xl">
          <PageHeader as="h1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." header="Card Grid Layouts" size="lg" />
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
              </Card>)}
          </Column>
          <Pagination callback={() => {}} callbackPage={() => {}} pageSize={5} siblingCount={1} totalCount={48} />
        </Section>

        <SinglePara />
        <SinglePara />

        <PageHeader header="Card Grid Layouts" size="md" />
        <Column cols="3">
          {NewsData.slice(0, 6).map(({
          id,
          link,
          title,
          date
        }) => <Card key={id}>
              <Card.Header title={title} link={link} date={date} />
            </Card>)}
        </Column>
        <Pagination callback={() => {}} callbackPage={() => {}} pageSize={5} siblingCount={1} totalCount={48} />

        <SinglePara />
        <SinglePara />

        <Section maxWidth="7xl" isGrey>
          <PageHeader header="Card Grid Layouts" size="md" />
          <Column cols="4">
            {NewsData.slice(0, 8).map(({
            id,
            link,
            title,
            date
          }) => <Card key={id}>
                <Card.Header title={title} link={link} date={date} />
              </Card>)}
          </Column>
          <Pagination callback={() => {}} callbackPage={() => {}} pageSize={5} siblingCount={1} totalCount={48} />
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...E.parameters?.docs?.source}}},D=[`LayoutExamples`]})))()}O();export{E as LayoutExamples,D as __namedExportsOrder,w as default};