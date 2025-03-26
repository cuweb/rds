import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as p}from"./Section-B-CCKZVd.js";import{M as b}from"./Main-BqxOGoMS.js";import{C as d}from"./Column-Dlks7Fvl.js";import{F as N}from"./FooterStandard-CssxRqDU.js";import{N as o}from"./Nav-SygODVcC.js";import{N as P}from"./NavData-EgWmcfkt.js";import{C as e}from"./Card-BawpGPWc.js";import{P as u}from"./PageHeader-DzCXmVKC.js";import{N as m}from"./NewsData-DpAyc1JF.js";import{P as c}from"./Pagination-ogVR_8oH.js";import"./index-yBjzXJbu.js";import"./propClasses-BYrQ2lXe.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Avatar-R8Sfo5dY.js";import"./ButtonGroup-CVkrxlV-.js";import"./parse-CXxdJvFO.js";import"./format-BDD0as5c.js";import"./getDate-DcT4OotK.js";import"./isSameDay-C9OCNg_L.js";import"./MapPinIcon-DKh9k5f_.js";import"./iframe-C6k08xqr.js";import"./index-Chjiymov.js";import"./parseISO-Z6eZh0wm.js";const V={title:"Components/Pagination/Examples",parameters:{layout:"fullscreen"}},s=()=>a.jsx(a.Fragment,{children:a.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),l={render:()=>a.jsxs(a.Fragment,{children:[a.jsx(o,{children:a.jsxs(o.Top,{children:[a.jsx(o.Logo,{title:"Raven Design System",link:"/"}),a.jsx(o.Aside,{children:a.jsx(o.Buttons,{menu:P})})]})}),a.jsxs(b,{maxWidth:"5xl",children:[a.jsxs(p,{maxWidth:"7xl",children:[a.jsx(u,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Card Grid Layouts",size:"lg"}),a.jsx(d,{cols:"4",children:m.slice(0,8).map(({id:t,link:n,title:i,image:r,alt:C,date:j})=>a.jsxs(e,{children:[a.jsx(e.Figure,{children:a.jsx("img",{src:r,alt:C,width:"400",height:"300"})}),a.jsx(e.Header,{title:i,date:j}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(c,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]}),a.jsx(s,{}),a.jsx(s,{}),a.jsx(u,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"3",children:m.slice(0,6).map(({id:t,link:n,title:i,date:r})=>a.jsxs(e,{children:[a.jsx(e.Header,{title:i,date:r}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(c,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48}),a.jsx(s,{}),a.jsx(s,{}),a.jsxs(p,{maxWidth:"7xl",isGrey:!0,children:[a.jsx(u,{header:"Card Grid Layouts",size:"md"}),a.jsx(d,{cols:"4",children:m.slice(0,8).map(({id:t,link:n,title:i,date:r})=>a.jsxs(e,{children:[a.jsx(e.Header,{title:i,date:r}),a.jsx(e.Footer,{children:a.jsx("a",{href:n,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),a.jsx(c,{callback:()=>{},callbackPage:()=>{},pageSize:5,siblingCount:1,totalCount:48})]})]}),a.jsx(N,{})]})};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const X=["LayoutExamples"];export{l as LayoutExamples,X as __namedExportsOrder,V as default};
