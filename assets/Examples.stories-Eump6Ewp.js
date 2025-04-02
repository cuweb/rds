import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as x}from"./Section-CKcqyDpo.js";import{M as v}from"./Main-BqxOGoMS.js";import{C as d}from"./Column-D9RQLqlL.js";import{F as N}from"./FooterStandard-CssxRqDU.js";import{N as s}from"./Nav-CKFyIwuZ.js";import{N as k}from"./NavData-EgWmcfkt.js";import{C as a}from"./Card-BYo2xrcx.js";import{P as c}from"./PageHeader-DmLaumFu.js";import{N as m}from"./NewsData-DpAyc1JF.js";import{F as u}from"./Filter-DlELebW4.js";import"./index-yBjzXJbu.js";import"./propClasses-Dlt7SDjn.js";import"./FooterLogoLinks-CPWKd5Ho.js";import"./useLinkContext-B51pPRuk.js";import"./index-DDmFEvuO.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Avatar-R8Sfo5dY.js";import"./ButtonGroup-B_KZtxM2.js";import"./parse-CXxdJvFO.js";import"./format-BDD0as5c.js";import"./getDate-DcT4OotK.js";import"./isSameDay-C9OCNg_L.js";import"./MapPinIcon-DKh9k5f_.js";import"./iframe-CkUQqpv-.js";import"./index-Chjiymov.js";import"./parseISO-Z6eZh0wm.js";import"./transition-2iKsdwk0.js";import"./use-server-handoff-complete-DXjT3LgW.js";import"./portal-FaMVLbt2.js";import"./index-D9S4NuzN.js";import"./index-fNjTmf9T.js";import"./ChevronDownIcon-Cnmsopfh.js";const re={title:"Components/Filter/Examples",parameters:{layout:"fullscreen"}},l=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),p=[{id:"audience",name:"Audience",options:[{checked:!1,label:"Staff",value:"staff"},{checked:!1,label:"Student",value:"student"}]},{id:"tags",name:"Tags",options:[{checked:!1,label:"General",value:"general"},{checked:!1,label:"Online/Virtual",value:"online/virtual"},{checked:!1,label:"Finances",value:"finances"},{checked:!1,label:"Healthy Workplace",value:"healthyworkplace"}]}],h=[{current:"[Circular]",href:"#",name:"Daily"},{current:"[Circular]",href:"#",name:"Weekly"},{current:"[Circular]",href:"#",name:"Monthly"}],o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(s.Top,{children:[e.jsx(s.Logo,{title:"Raven Design System",link:"/"}),e.jsx(s.Aside,{children:e.jsx(s.Buttons,{menu:k})})]})}),e.jsxs(v,{maxWidth:"5xl",children:[e.jsxs(x,{maxWidth:"7xl",children:[e.jsx(c,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Card Grid Layouts",size:"lg"}),e.jsx(u,{callback:()=>{},filters:p,sortOptions:h}),e.jsx(d,{cols:"4",children:m.slice(0,8).map(({id:t,link:r,title:n,image:i,alt:g,date:b})=>e.jsxs(a,{children:[e.jsx(a.Figure,{children:e.jsx("img",{src:i,alt:g,width:"400",height:"300"})}),e.jsx(a.Header,{title:n,date:b}),e.jsx(a.Footer,{children:e.jsx("a",{href:r,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))})]}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(c,{header:"Card Grid Layouts",size:"md"}),e.jsx(u,{callback:()=>{},filters:p,sortOptions:h}),e.jsx(d,{cols:"3",children:m.slice(0,6).map(({id:t,link:r,title:n,date:i})=>e.jsxs(a,{children:[e.jsx(a.Header,{title:n,date:i}),e.jsx(a.Footer,{children:e.jsx("a",{href:r,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))}),e.jsx(l,{}),e.jsx(l,{}),e.jsxs(x,{maxWidth:"7xl",isGrey:!0,children:[e.jsx(c,{header:"Card Grid Layouts",size:"md"}),e.jsx(u,{callback:()=>{},filters:p,sortOptions:h}),e.jsx(d,{cols:"4",children:m.slice(0,8).map(({id:t,link:r,title:n,date:i})=>e.jsxs(a,{children:[e.jsx(a.Header,{title:n,date:i}),e.jsx(a.Footer,{children:e.jsx("a",{href:r,className:"cu-button cu-button--red cu-button--small",children:"Read more"})})]},t))})]})]}),e.jsx(N,{})]})};var f,j,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
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
        </Section>

        <SinglePara />
        <SinglePara />

        <PageHeader header="Card Grid Layouts" size="md" />
        <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
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

        <SinglePara />
        <SinglePara />

        <Section maxWidth="7xl" isGrey>
          <PageHeader header="Card Grid Layouts" size="md" />
          <Filter callback={() => {}} filters={filterData} sortOptions={filterSort} />
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
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const ne=["LayoutExamples"];export{o as LayoutExamples,ne as __namedExportsOrder,re as default};
