import{j as a}from"./jsx-runtime-uTcmtBz7.js";import{S as p}from"./Section-xklsDDsX.js";import{M as b}from"./Main-BDRNRBlt.js";import{C as d}from"./Column-DG34L3j1.js";import{F as N}from"./FooterStandard-CFf9f_wd.js";import{N as o}from"./Nav-ABWYn2wS.js";import{N as P}from"./NavData-VxU6Oijv.js";import{C as e}from"./Card-VsL-XOZW.js";import{P as u}from"./PageHeader-Nk5xpDMe.js";import{N as c}from"./NewsData-CjZsRozh.js";import{P as m}from"./Pagination-9zcJQvBD.js";import"./iframe-BAAjcVMq.js";import"./preload-helper-Dp1pzeXC.js";import"./propClasses-620uA3Rh.js";import"./FooterLogoLinks-Dtv-8Ij3.js";import"./useLinkContext-9UkJLgL6.js";import"./FooterStandardData-3_746QZ9.js";import"./Avatar-DBtAM3c_.js";import"./ButtonGroup-B7rlRNr6.js";import"./Icon-BQZ3Qxlr.js";import"./parse-CXxdJvFO.js";import"./format-BDD0as5c.js";import"./getDate-DcT4OotK.js";import"./isSameDay-C9OCNg_L.js";import"./parseISO-BGl-MJHo.js";const K={title:"Components/Pagination/Examples",parameters:{layout:"fullscreen"}},s=()=>a.jsx(a.Fragment,{children:a.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),l={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(o,{children:a.jsxs(o.Top,{children:[a.jsx(o.Logo,{title:"Raven Design System",link:"/"}),a.jsx(o.Aside,{children:a.jsx(o.Buttons,{menu:P})})]})}),a.jsxs(b,{maxWidth:"5xl",children:[a.jsxs(p,{maxWidth:"7xl",children:[a.jsx(u,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Card Grid Layouts",size:"lg"}),a.jsx(d,{cols:"4",children:c.slice(0,8).map(({id:t,link:n,title:i,image:r,alt:C,date:j})=>a.jsxs(e,{children:[a.jsx(e.Figure,{children:a.jsx("img",{src:r,alt:C,width:"400",height:"300"})}),a.jsx(e.Header,{title:i,date:j}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(m,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]}),a.jsx(s,{}),a.jsx(s,{}),a.jsx(u,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"3",children:c.slice(0,6).map(({id:t,link:n,title:i,date:r})=>a.jsxs(e,{children:[a.jsx(e.Header,{title:i,date:r}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(m,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48}),a.jsx(s,{}),a.jsx(s,{}),a.jsxs(p,{maxWidth:"7xl",isGrey:!0,children:[a.jsx(u,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"4",children:c.slice(0,8).map(({id:t,link:n,title:i,date:r})=>a.jsxs(e,{children:[a.jsx(e.Header,{title:i,date:r}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(m,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]})]}),a.jsx(N,{})]})};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
                <Card.Header title={title} date={date} />
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
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
              <Card.Header title={title} date={date} />
              <Card.Footer>
                <a href={link} className="cu-button cu-button--red cu-button--small">
                  Read more
                </a>
              </Card.Footer>
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
                <Card.Header title={title} date={date} />
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red cu-button--small">
                    Read more
                  </a>
                </Card.Footer>
              </Card>)}
          </Column>
          <Pagination callback={() => {}} callbackPage={() => {}} pageSize={5} siblingCount={1} totalCount={48} />
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Q=["LayoutExamples"];export{l as LayoutExamples,Q as __namedExportsOrder,K as default};
