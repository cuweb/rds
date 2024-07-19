import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as v}from"./Section-BvwVsgGu.js";import{M as f}from"./Main-B8uQ0PDb.js";import{F as y}from"./FooterDept-zvIRYwAI.js";import{N as r,a as k,b as N}from"./NavData-BNb7tmZ4.js";import{F as S}from"./FooterStandard-Qr3Pr6Y8.js";import{F as b}from"./FooterCookie-zBmvFIM7.js";import{T as d}from"./TextImage-DQnBN6U6.js";import{A as p}from"./Alert-ihfMe_-R.js";import{B as L}from"./ButtonGroup-CP3XHqUd.js";import{B as c}from"./Button-D5JFhw15.js";import{C as F}from"./Column-BoA3N6UJ.js";import{S as B}from"./StackedList-Bg2dAhlr.js";import{L as t}from"./Listing-875un3NV.js";import{C as i}from"./Card-CkPBbydc.js";import{a as u}from"./NewsData-DZeLrR9d.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-BlHLKr18.js";import"./useLinkContext-Bz4KtVj9.js";import"./Avatar-DmMiCzKE.js";import"./FooterLogoLinks-wi3yy42J.js";import"./optionClasses-BoR2qQUj.js";import"./ShieldExclamationIcon-Dq6tIaUn.js";import"./Icon-DDs_3nyd.js";import"./parse-BUkWBRrt.js";import"./format-DUBvZ7C8.js";import"./getDate-BfMQ2h7Y.js";import"./MapPinIcon-BRhUovLd.js";import"./index-Bq8ajHfg.js";import"./iframe-Dw8VPxAf.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const me={title:"Examples/Blocks"},T=()=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies,"," ",e.jsx("a",{href:"https://carleton.ca",children:"sed tempus diam dignissim"}),". Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna."]})}),o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(r.Primary,{children:[e.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(r.Menu,{menu:k}),e.jsx(r.Aside,{menu:N})]})}),e.jsx(f,{children:e.jsxs(v,{hasProse:!0,children:[e.jsx(d,{children:e.jsx(d.Content,{headerType:"h1",title:"Component Spacing"})}),e.jsx(T,{}),e.jsx(p,{content:"Content goes here",title:"Title",type:"success"}),e.jsx(p,{content:"Content goes here",title:"Title",type:"error"}),e.jsxs(L,{children:[e.jsx(c,{onClick:()=>{},title:"Primary Red"}),e.jsx(c,{color:"dark-grey",onClick:()=>{},title:"Dark Grey"}),e.jsx(c,{color:"grey",onClick:()=>{},title:"Light Grey"})]}),e.jsx(F,{cols:"3",children:u.slice(0,3).map(({id:a,link:s,title:n,image:l,alt:m})=>e.jsxs(i,{children:[e.jsx(i.ImageThumb,{children:e.jsx("img",{src:l,alt:m,width:"400",height:"266"})}),e.jsx(i.Header,{title:n}),e.jsx(i.Body,{children:e.jsx(i.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst."})}),e.jsx(i.Footer,{children:e.jsx("a",{href:s,className:"cu-button cu-button--red",children:"More info"})})]},a))}),e.jsx(B,{children:u.slice(0,4).map(({id:a,title:s,link:n,excerpt:l,date:m,image:j,alt:C})=>e.jsxs(t,{children:[e.jsx(t.Figure,{children:e.jsx("img",{src:j,alt:C,width:"400",height:"266"})}),e.jsxs(t.Body,{children:[e.jsx(t.Header,{title:s,date:m}),e.jsx(t.Excerpt,{text:l}),e.jsx(t.Footer,{children:e.jsx("a",{href:n,className:"cu-button cu-button--red",children:"Read more"})})]})]},a))})]})}),e.jsx(y,{buildingName:"Pigiarvik (ᐱᒋᐊᕐᕕᒃ)",deptName:"Information Technology Services",email:"noreply@carleton.ca",footerButtons:[{id:1,title:"Contact support",url:"#"},{id:2,title:"Recent alerts",url:"#"}],officeNumber:"400",phone:"613-520-2600"}),e.jsx(S,{}),e.jsx(b,{})]})};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
            <TextImage.Content headerType="h1" title="Component Spacing"></TextImage.Content>
          </TextImage>

          <SinglePara />

          <Alert content="Content goes here" title="Title" type="success" />
          <Alert content="Content goes here" title="Title" type="error" />

          <ButtonGroup>
            <Button onClick={() => {}} title="Primary Red" />
            <Button color="dark-grey" onClick={() => {}} title="Dark Grey" />
            <Button color="grey" onClick={() => {}} title="Light Grey" />
          </ButtonGroup>

          <Column cols="3">
            {NewsData.slice(0, 3).map(({
            id,
            link,
            title,
            image,
            alt
          }) => <Card key={id}>
                <Card.ImageThumb>
                  <img src={image} alt={alt} width="400" height="266" />
                </Card.ImageThumb>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red">
                    More info
                  </a>
                </Card.Footer>
              </Card>)}
          </Column>

          <StackedList>
            {NewsData.slice(0, 4).map(({
            id,
            title,
            link,
            excerpt,
            date,
            image,
            alt
          }) => <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="266" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header title={title} date={date} />
                  <Listing.Excerpt text={excerpt} />
                  <Listing.Footer>
                    <a href={link} className="cu-button cu-button--red">
                      Read more
                    </a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>)}
          </StackedList>
        </Section>
      </Main>

      <FooterDept buildingName="Pigiarvik (ᐱᒋᐊᕐᕕᒃ)" deptName="Information Technology Services" email="noreply@carleton.ca" footerButtons={[{
      id: 1,
      title: 'Contact support',
      url: '#'
    }, {
      id: 2,
      title: 'Recent alerts',
      url: '#'
    }]} officeNumber="400" phone="613-520-2600" />

      <FooterStandard />
      <FooterCookie />
    </>
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ce=["ComponentSpacing"];export{o as ComponentSpacing,ce as __namedExportsOrder,me as default};
