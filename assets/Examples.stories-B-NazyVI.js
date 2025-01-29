import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{S as s}from"./Section-CXftxL_u.js";import{M as m}from"./Main-DnchB6dp.js";import{F as c}from"./FooterStandard-BxfPwtrB.js";import{N as r}from"./Nav-9qkYbb_u.js";import{N as h}from"./NavData-EgWmcfkt.js";import{P as p}from"./PageHeader-BGlivhYS.js";import{T as t}from"./Table-DG6g3oNv.js";import"./index-C9rmetsa.js";import"./FooterLogoLinks-CnDlqYII.js";import"./useLinkContext-Fm1c2FUv.js";import"./index-yDOeu_rT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Avatar-CioYPBez.js";import"./ButtonGroup-DECQb6k8.js";import"./propClasses-BYrQ2lXe.js";import"./parseISO-BQ4LyrE0.js";import"./format-Dt71a7ij.js";import"./isSameDay-Dpgs3O9f.js";import"./ChevronDownIcon-DMPw03UM.js";const q={title:"Components/Table/Examples",parameters:{layout:"fullscreen"}},a=()=>e.jsx(e.Fragment,{children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})}),n=[{default:!0,header:"ID",key:"id",order:"descending",sort:{sortable:!0}},{header:"Title",key:"title",sort:{sortable:!0}},{header:"Description",key:"description",sort:{sortable:!1}},{header:"Edit",key:"link",sort:{sortable:!1}}],i=[{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper dolor non dui vestibulum, et efficitur leo interdum.",id:1,link:e.jsx("a",{href:"http://thing/1",children:"Edit"}),title:"End-of-Year Reflections and Resolutions for Our Web Services Team"},{description:"Vestibulum sed eleifend lorem. Curabitur lacinia consectetur consectetur.",id:2,link:e.jsx("a",{href:"http://thing/2",children:"Edit"}),title:"Testing an incredibly long title that should span multiple lines so we can always have eye on the overall width of a table to make sure long text like this wraps"},{description:"Suspendisse commodo metus augue, non malesuada lorem vestibulum sit amet. Quisque posuere lectus sed diam sagittis, quis vehicula urna commodo.",id:3,link:e.jsx("a",{href:"http://thing/3",children:"Edit"}),title:"Captivating Captions: Why We Use Captions on Videos"},{description:"Aliquam vel eleifend erat, vel interdum metus. Phasellus sed tortor posuere, iaculis justo a, accumsan risus. Duis pretium dignissim orci.",id:4,link:e.jsx("a",{href:"http://thing/4",children:"Edit"}),title:"End-of-Year Reflections and Resolutions for Our Web Services Team"},{description:"Vivamus sodales leo ut nisl rutrum viverra. Nullam et dui at libero malesuada vestibulum.",id:5,link:e.jsx("a",{href:"http://thing/5",children:"Edit"}),title:"How to Write for the Web"}],l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(r.Top,{children:[e.jsx(r.Logo,{title:"Raven Design System",link:"/"}),e.jsx(r.Aside,{children:e.jsx(r.Buttons,{menu:h})})]})}),e.jsxs(m,{maxWidth:"5xl",children:[e.jsxs(s,{maxWidth:"7xl",children:[e.jsx(p,{as:"h1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.",header:"Table Examples",size:"lg"}),e.jsx(t,{columns:n,data:i,range:[1,-1]})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(t,{columns:n,data:i,range:[1,-1]}),e.jsx(t,{columns:n,data:i,range:[1,-1],enableRowHeader:!0,hasStripes:!0}),e.jsx("h2",{children:"Header Two"}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(t,{columns:n,data:i,range:[1,-1]}),e.jsx(s,{maxWidth:"7xl",isGrey:!0,children:e.jsx(t,{columns:n,data:i,range:[1,-1],enableRowHeader:!0,hasStripes:!0})}),e.jsxs(s,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(t,{columns:n,data:i,range:[1,-1]}),e.jsx(s,{maxWidth:"7xl",children:e.jsx(t,{columns:n,data:i,range:[1,-1],enableRowHeader:!0,hasStripes:!0})}),e.jsxs(s,{children:[e.jsx("h2",{children:"White Background"}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsx("h2",{children:"Header Two"}),e.jsx(a,{}),e.jsx(a,{}),e.jsx(s,{maxWidth:"full",isGrey:!0,children:e.jsx(t,{columns:n,data:i,range:[1,-1]})})]}),e.jsx(c,{})]})};var o,d,u;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const L=["LayoutExamples"];export{l as LayoutExamples,L as __namedExportsOrder,q as default};
