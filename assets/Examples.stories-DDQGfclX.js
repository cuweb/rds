import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-IpA8Qn9U.js";import{t as n}from"./jsx-runtime-CA2T8_y1.js";import{n as r,t as i}from"./Main-DtoD-bKX.js";import{n as a,t as o}from"./Section-B2tWnTV2.js";import{n as s,t as c}from"./FooterStandard-DhpEjNYJ.js";import{n as l,t as u}from"./Nav-BHKwQ0XU.js";import{o as d,r as f}from"./NavData-ahBUZ0C_.js";import{n as p,t as m}from"./PageHeader-BfMqWfqW.js";import{n as h,t as g}from"./Table-ClqUCS19.js";var _,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),a(),r(),s(),l(),d(),p(),h(),_=n(),v={title:`Components/Table/Examples`,parameters:{layout:`fullscreen`}},y=()=>(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(`p`,{children:`Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.`})}),b=[{default:!0,header:`ID`,key:`id`,order:`descending`,sort:{sortable:!0}},{header:`Title`,key:`title`,sort:{sortable:!0}},{header:`Description`,key:`description`,sort:{sortable:!1}},{header:`Edit`,key:`link`,sort:{sortable:!1}}],x=[{description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.`,id:1,link:(0,_.jsx)(`a`,{href:`http://thing/1`,children:`Edit`}),title:`End-of-Year Reflections and Resolutions for Our Web Services Team`},{description:`Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.`,id:2,link:(0,_.jsx)(`a`,{href:`http://thing/2`,children:`Edit`}),title:`Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps`},{description:`Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.`,id:3,link:(0,_.jsx)(`a`,{href:`http://thing/3`,children:`Edit`}),title:`Captivating Captions: Why We Use Captions on Videos`},{description:`Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.`,id:4,link:(0,_.jsx)(`a`,{href:`http://thing/4`,children:`Edit`}),title:`End-of-Year Reflections and Resolutions for Our Web Services Team`},{description:`Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.`,id:5,link:(0,_.jsx)(`a`,{href:`http://thing/5`,children:`Edit`}),title:`How to Write for the Web`}],S={render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{children:(0,_.jsxs)(u.Top,{children:[(0,_.jsx)(u.Logo,{title:`Raven Design System`,link:`/`}),(0,_.jsx)(u.Aside,{children:(0,_.jsx)(u.Buttons,{menu:f})})]})}),(0,_.jsxs)(i,{maxWidth:`5xl`,children:[(0,_.jsxs)(o,{maxWidth:`7xl`,children:[(0,_.jsx)(m,{as:`h1`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.`,header:`Table Examples`,size:`lg`}),(0,_.jsx)(g,{columns:b,data:x,range:[1,-1]})]}),(0,_.jsx)(`h2`,{children:`Header Two`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{}),(0,_.jsx)(g,{columns:b,data:x,range:[1,-1]}),(0,_.jsx)(g,{columns:b,data:x,range:[1,-1],enableRowHeader:!0,hasStripes:!0}),(0,_.jsx)(`h2`,{children:`Header Two`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{}),(0,_.jsx)(g,{columns:b,data:x,range:[1,-1]}),(0,_.jsx)(o,{maxWidth:`7xl`,isGrey:!0,children:(0,_.jsx)(g,{columns:b,data:x,range:[1,-1],enableRowHeader:!0,hasStripes:!0})}),(0,_.jsxs)(o,{children:[(0,_.jsx)(`h2`,{children:`White Background`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{})]}),(0,_.jsx)(`h2`,{children:`Header Two`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{}),(0,_.jsx)(g,{columns:b,data:x,range:[1,-1]}),(0,_.jsx)(o,{maxWidth:`7xl`,children:(0,_.jsx)(g,{columns:b,data:x,range:[1,-1],enableRowHeader:!0,hasStripes:!0})}),(0,_.jsxs)(o,{children:[(0,_.jsx)(`h2`,{children:`White Background`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{})]}),(0,_.jsx)(`h2`,{children:`Header Two`}),(0,_.jsx)(y,{}),(0,_.jsx)(y,{}),(0,_.jsx)(o,{maxWidth:`full`,isGrey:!0,children:(0,_.jsx)(g,{columns:b,data:x,range:[1,-1]})})]}),(0,_.jsx)(c,{})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
          <PageHeader as="h1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis." header="Table Examples" size="lg" />
          <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />

        <Section maxWidth="7xl" isGrey>
          <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Table columns={tableColumns} data={tableData} range={[1, -1]} />

        <Section maxWidth="7xl">
          <Table columns={tableColumns} data={tableData} range={[1, -1]} enableRowHeader hasStripes />
        </Section>

        <Section>
          <h2>White Background</h2>
          <SinglePara />
          <SinglePara />
        </Section>

        <h2>Header Two</h2>
        <SinglePara />
        <SinglePara />

        <Section maxWidth="full" isGrey>
          <Table columns={tableColumns} data={tableData} range={[1, -1]} />
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...S.parameters?.docs?.source}}},C=[`LayoutExamples`]})))()}w();export{S as LayoutExamples,C as __namedExportsOrder,v as default};