import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as C}from"./Section-CVJtbDHu.js";import{C as s}from"./Container-CMmfm5fp.js";import{M as y}from"./Main-CJHjqGYv.js";import{F as b}from"./FooterStandard-BQm2B3eI.js";import{N as i,a as j,b as g}from"./NavData-CqsycEVO.js";import{H as d}from"./Heading-C_7F1f88.js";import{T as u}from"./TextImage-CbXbQHYg.js";import{C as c}from"./Column-Ci_0zuDg.js";import{a as l}from"./IconData-CM3vwWZs.js";import{C as t}from"./Card-BzCwulYc.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-GmQrI9Vi.js";import"./FooterLogoLinks-sEvdyT2V.js";import"./useLinkContext-B6ulR7Vg.js";import"./Avatar-DjV_X37D.js";import"./optionClasses-nRtJeGr9.js";import"./getDate-BAl1yPiw.js";import"./parse-BfiLtjV-.js";import"./index-B4QbOosm.js";import"./iframe-C6hZg7UW.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const z={title:"Examples/Blocks"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs(i.Primary,{children:[e.jsx(i.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(i.Menu,{menu:j}),e.jsx(i.Aside,{menu:g})]})}),e.jsx(y,{children:e.jsxs(C,{hasProse:!0,children:[e.jsx(u,{children:e.jsx(u.Content,{headerType:"h1",title:"Icon Cards",children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})}),e.jsxs(s,{children:[e.jsx(d,{text:"Icon Cards: Shadow on Static & Hover"}),e.jsx(c,{cols:"3",children:l.slice(0,6).map(({id:r,link:n,title:o,icon:a})=>e.jsxs(t,{hasShadow:"onCard",noHover:!0,children:[e.jsx(t.IconThumb,{icon:a}),e.jsx(t.Header,{children:o}),e.jsx(t.Body,{children:e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(t.Footer,{isType:"button",buttonStyle:"grey",children:e.jsx("a",{href:n,children:"More info"})})]},r))})]}),e.jsxs(s,{children:[e.jsx(d,{text:"Icon Cards: Shadow on Static & Hover with Grey Bg"}),e.jsx(c,{cols:"3",children:l.slice(0,6).map(({id:r,link:n,title:o,icon:a})=>e.jsxs(t,{isGrey:!0,noHover:!0,children:[e.jsx(t.IconThumb,{icon:a,bgType:"white",hasShadow:!0}),e.jsx(t.Header,{children:o}),e.jsx(t.Body,{children:e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(t.Footer,{isType:"button",buttonType:"outline",buttonStyle:"dark-grey",children:e.jsx("a",{href:n,children:"More info"})})]},r))})]}),e.jsxs(s,{isGrey:!0,children:[e.jsx(d,{text:"Icon Cards: Shadow on Static & Hover"}),e.jsx(c,{cols:"3",children:l.slice(0,6).map(({id:r,link:n,title:o,icon:a})=>e.jsxs(t,{noHover:!0,children:[e.jsx(t.IconThumb,{icon:a,bgType:"none"}),e.jsx(t.Header,{children:o}),e.jsx(t.Body,{children:e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(t.Footer,{isType:"button",buttonStyle:"grey",children:e.jsx("a",{href:n,children:"More info"})})]},r))})]}),e.jsxs(s,{isGrey:!0,children:[e.jsx(d,{text:"Icon Cards: Shadow on Static & Hover with Grey Bg"}),e.jsx(c,{cols:"3",children:l.slice(0,6).map(({id:r,link:n,title:o,icon:a})=>e.jsxs(t,{isGrey:!0,hasShadow:"onCard",noHover:!0,children:[e.jsx(t.IconThumb,{icon:a}),e.jsx(t.Header,{children:o}),e.jsx(t.Body,{children:e.jsx(t.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(t.Footer,{isType:"button",buttonType:"outline",buttonStyle:"dark-grey",children:e.jsx("a",{href:n,children:"More info"})})]},r))})]})]})}),e.jsx(b,{})]})};var h,p,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          <TextImage>
            <TextImage.Content headerType="h1" title="Icon Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="Icon Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({
              id,
              link,
              title,
              icon
            }) => <Card key={id} hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>)}
            </Column>
          </Container>

          <Container>
            <Heading text="Icon Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({
              id,
              link,
              title,
              icon
            }) => <Card key={id} isGrey noHover>
                  <Card.IconThumb icon={icon} bgType="white" hasShadow />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Icon Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({
              id,
              link,
              title,
              icon
            }) => <Card key={id} noHover>
                  <Card.IconThumb icon={icon} bgType="none" />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonStyle="grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>)}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Icon Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {IconData.slice(0, 6).map(({
              id,
              link,
              title,
              icon
            }) => <Card key={id} isGrey hasShadow="onCard" noHover>
                  <Card.IconThumb icon={icon} />
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                  </Card.Body>
                  <Card.Footer isType="button" buttonType="outline" buttonStyle="dark-grey">
                    <a href={link}>More info</a>
                  </Card.Footer>
                </Card>)}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(x=(p=m.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const J=["IconCards"];export{m as IconCards,J as __namedExportsOrder,z as default};
