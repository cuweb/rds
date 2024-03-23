import{j as t}from"./jsx-runtime-CKrituN3.js";import{S as x}from"./Section-NPasMOYw.js";import{C as s}from"./Container-RiGWcZGq.js";import{M as S}from"./Main-CDNSDx3Q.js";import{F as p}from"./FooterStandard-BOS4OBS4.js";import{C as o}from"./Column-DjMg3X4c.js";import{N as c,a as j,b as v}from"./NavData-C4a936Cd.js";import{H as d}from"./Heading-DYyMpwX9.js";import{C as e}from"./Card-Ck8nB9Su.js";import{a as i}from"./StatData-d_ly4bLo.js";import{T as m}from"./TextImage-BFzbVXZO.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./FooterLogoLinks-CAjEydaX.js";import"./useLinkContext-Ch0lwH8X.js";import"./optionClasses-nRtJeGr9.js";import"./Avatar-DXtcxLaY.js";import"./getDate-BAl1yPiw.js";import"./parse-BfiLtjV-.js";import"./index-zoJhGQjf.js";import"./iframe-CBL5Pj_-.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const z={title:"Examples/Blocks"},l={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(c,{children:t.jsxs(c.Primary,{children:[t.jsx(c.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),t.jsx(c.Menu,{menu:j}),t.jsx(c.Aside,{menu:v})]})}),t.jsx(S,{children:t.jsxs(x,{hasProse:!0,children:[t.jsx(m,{hasBorder:!0,children:t.jsx(m.Content,{headerType:"h1",title:"Stat Cards",children:t.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})}),t.jsxs(s,{children:[t.jsx(d,{text:"Stat Cards: Default"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{hasRedBorder:!0,noHover:!0,children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{children:[t.jsx(d,{text:"Stat Cards: Shadow on Static"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{hasRedBorder:!0,noHover:!0,hasShadow:"onCard",children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{children:[t.jsx(d,{text:"Stat Cards: Default with Grey Bg"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{isGrey:!0,hasRedBorder:!0,noHover:!0,children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{children:[t.jsx(d,{text:"Stat Cards: Shadow on Static"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{isGrey:!0,hasRedBorder:!0,noHover:!0,hasShadow:"onCard",children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{isGrey:!0,children:[t.jsx(d,{text:"Stat Cards: Default"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{hasRedBorder:!0,noHover:!0,children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{isGrey:!0,children:[t.jsx(d,{text:"Stat Cards: Shadow on Static"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{hasRedBorder:!0,noHover:!0,hasShadow:"onCard",children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{isGrey:!0,children:[t.jsx(d,{text:"Stat Cards: Default with Grey Bg"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{isGrey:!0,hasRedBorder:!0,noHover:!0,children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]}),t.jsxs(s,{isGrey:!0,children:[t.jsx(d,{text:"Stat Cards: Shadow on Static"}),t.jsx(o,{cols:"3",children:i.slice(0,3).map(({id:a,stat:n,desc:r})=>t.jsx(e,{isGrey:!0,hasRedBorder:!0,noHover:!0,hasShadow:"onCard",children:t.jsx(e.Stats,{stat:n,desc:r})},a))})]})]})}),t.jsx(p,{})]})};var u,C,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section hasProse>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Stat Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Stat Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} isGrey hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} isGrey hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Default" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Default with Grey Bg" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} isGrey hasRedBorder noHover>
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Stat Cards: Shadow on Static" />
            <Column cols="3">
              {StatData.slice(0, 3).map(({
              id,
              stat,
              desc
            }) => <Card key={id} isGrey hasRedBorder noHover hasShadow="onCard">
                  <Card.Stats stat={stat} desc={desc} />
                </Card>)}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(h=(C=l.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const J=["StatCards"];export{l as StatCards,J as __namedExportsOrder,z as default};
