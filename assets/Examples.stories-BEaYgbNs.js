import{j as a}from"./jsx-runtime-juvM8xiy.js";import{S as p}from"./Section-Ch3OvPPE.js";import{M as k}from"./Main-C64chqH6.js";import{C as d}from"./Column-Cfa8NTLC.js";import{F as P}from"./FooterStandard-C6QS1YaB.js";import{N as s}from"./Nav-vfFAtRrg.js";import{a as S}from"./NavData-BCA87AC2.js";import{C as e}from"./Card-FyjBYvJF.js";import{P as m}from"./PageHeader-bz8Y3c-1.js";import{N as c}from"./NewsData-CjZsRozh.js";import{P as u}from"./Pagination-B7MCDOKm.js";import"./iframe-BV6FWGzl.js";import"./preload-helper-Dp1pzeXC.js";import"./propClasses-CJUCiil5.js";import"./FooterLogoLinks-Ccsftv9X.js";import"./useLinkContext-DqdbtOuF.js";import"./FooterStandardData-BGsXqSP2.js";import"./Avatar-CINZAUQF.js";import"./ButtonGroup-CO6WfiMc.js";import"./Icon-CVS0oZgS.js";import"./parse-CXxdJvFO.js";import"./format-BDD0as5c.js";import"./getDate-DcT4OotK.js";import"./isSameDay-C9OCNg_L.js";import"./useScrollReveal-DnlH8aQL.js";import"./parseISO-BGl-MJHo.js";const Q={title:"Components/Pagination/Examples",parameters:{layout:"fullscreen"}},o=()=>a.jsx(a.Fragment,{children:a.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),l={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(s,{children:a.jsxs(s.Top,{children:[a.jsx(s.Logo,{title:"Raven Design System",link:"/"}),a.jsx(s.Aside,{children:a.jsx(s.Buttons,{menu:S})})]})}),a.jsxs(k,{maxWidth:"5xl",children:[a.jsxs(p,{maxWidth:"7xl",children:[a.jsx(m,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Card Grid Layouts",size:"lg"}),a.jsx(d,{cols:"4",children:c.slice(0,8).map(({id:i,link:t,title:n,image:r,alt:h,date:j})=>a.jsxs(e,{children:[a.jsx(e.Figure,{children:a.jsx("img",{src:r,alt:h,width:"400",height:"300"})}),a.jsx(e.Header,{title:n,link:t,date:j})]},i))}),a.jsx(u,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]}),a.jsx(o,{}),a.jsx(o,{}),a.jsx(m,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"3",children:c.slice(0,6).map(({id:i,link:t,title:n,date:r})=>a.jsx(e,{children:a.jsx(e.Header,{title:n,link:t,date:r})},i))}),a.jsx(u,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48}),a.jsx(o,{}),a.jsx(o,{}),a.jsxs(p,{maxWidth:"7xl",isGrey:!0,children:[a.jsx(m,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"4",children:c.slice(0,8).map(({id:i,link:t,title:n,date:r})=>a.jsx(e,{children:a.jsx(e.Header,{title:n,link:t,date:r})},i))}),a.jsx(u,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]})]}),a.jsx(P,{})]})};var g,x,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const V=["LayoutExamples"];export{l as LayoutExamples,V as __namedExportsOrder,Q as default};
