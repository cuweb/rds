import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{S as h}from"./Section-DrmBlyt5.js";import{M as N}from"./Main-CgLTKl-s.js";import{F as f}from"./FooterStandard-DHM6uugp.js";import{C}from"./Column-D2Jk6PXX.js";import{N as r,a as T,b as M}from"./NavData-DRu1MbK0.js";import{P as x}from"./PageHeaders-DmchAU6R.js";import{C as a}from"./Card-C47GYi1W.js";import{T as j}from"./TextImage-BLBj5nVh.js";import{a as v}from"./EventData-BT2hBXGJ.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./globalClasses-BlHLKr18.js";import"./FooterLogoLinks-xDaj2ZDi.js";import"./useLinkContext-CZLCmVqQ.js";import"./optionClasses-BoR2qQUj.js";import"./Avatar-BORvOmmK.js";import"./parseISO-CHcXfkHQ.js";import"./format-DUBvZ7C8.js";import"./getDate-BfMQ2h7Y.js";import"./parse-BFmE_n72.js";import"./MapPinIcon-CRQ4FDTI.js";import"./index-o0i_esKO.js";import"./iframe-D7mlFWP-.js";import"../sb-preview/runtime.js";import"./index-Dk74W0Oi.js";const $={title:"Examples/Blocks"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(r.Primary,{children:[e.jsx(r.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(r.Menu,{menu:T}),e.jsx(r.Aside,{menu:M})]})}),e.jsxs(N,{children:[e.jsx(h,{children:e.jsx(j,{hasBorder:!0,children:e.jsx(j.Content,{headerType:"h1",title:"Card Examples",children:e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor."})})})}),e.jsxs(h,{children:[e.jsx(x,{header:"Original",as:"h2",size:"md"}),e.jsx(C,{cols:"3",children:v.slice(0,3).map(({id:i,title:o,link:m,image:g,alt:d,startDate:n,endDate:t,on_campus:u,on_campus_building:l,on_campus_room_number:c,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.Figure,{children:e.jsx("img",{src:g,alt:d,width:400,height:175})}),e.jsx(a.DateThumb,{startDate:n,endDate:t}),e.jsx(a.Header,{title:o}),e.jsx(a.Body,{children:e.jsx(a.EventMeta,{startDateTime:n,endDateTime:t,onCampus:u,onCampusBuilding:l,onCampusRoomNumber:c,eventAddress:p})}),e.jsx(a.Footer,{children:e.jsx("a",{href:m,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},i))})]}),e.jsxs(h,{children:[e.jsx(x,{header:"Matching News Cards",as:"h2",size:"md"}),e.jsx(C,{cols:"3",children:v.slice(0,3).map(({id:i,title:o,link:m,image:g,alt:d,startDate:n,endDate:t,on_campus:u,on_campus_building:l,on_campus_room_number:c,event_address:p})=>e.jsxs(a,{children:[e.jsx(a.Figure,{children:e.jsx("img",{src:"http://localhost:6006/sample-imgs/news-img.jpg",alt:d,width:"400",height:"266"})}),e.jsx(a.DateThumb,{startDate:n,endDate:t}),e.jsx(a.Header,{title:o}),e.jsx(a.Body,{children:e.jsx(a.EventMeta,{startDateTime:n,endDateTime:t,onCampus:u,onCampusBuilding:l,onCampusRoomNumber:c,eventAddress:p})}),e.jsx(a.Footer,{children:e.jsx("a",{href:m,className:"cu-button cu-button--red cu-button--small",children:"More info"})})]},i))})]})]}),e.jsx(f,{})]})};var b,D,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="Card Examples">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>
        </Section>

        <Section>
          <PageHeaders header="Original" as="h2" size="md" />
          <Column cols="3">
            {EventData.slice(0, 3).map(({
            id,
            title,
            link,
            image,
            alt,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address
          }) => <Card key={id}>
                  <Card.Figure>
                    <img src={image} alt={alt} width={400} height={175} />
                  </Card.Figure>
                  <Card.DateThumb startDate={startDate} endDate={endDate} />
                  <Card.Header title={title} />
                  <Card.Body>
                    <Card.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                  </Card.Body>
                  <Card.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      More info
                    </a>
                  </Card.Footer>
                </Card>)}
          </Column>
        </Section>

        <Section>
          <PageHeaders header="Matching News Cards" as="h2" size="md" />
          <Column cols="3">
            {EventData.slice(0, 3).map(({
            id,
            title,
            link,
            image,
            alt,
            startDate,
            endDate,
            on_campus,
            on_campus_building,
            on_campus_room_number,
            event_address
          }) => <Card key={id}>
                  <Card.Figure>
                    <img src="http://localhost:6006/sample-imgs/news-img.jpg" alt={alt} width="400" height="266" />
                    {/* <img src={image} alt={alt} width={400} height={175} /> */}
                  </Card.Figure>
                  <Card.DateThumb startDate={startDate} endDate={endDate} />
                  <Card.Header title={title} />
                  <Card.Body>
                    <Card.EventMeta startDateTime={startDate} endDateTime={endDate} onCampus={on_campus} onCampusBuilding={on_campus_building} onCampusRoomNumber={on_campus_room_number} eventAddress={event_address} />
                  </Card.Body>
                  <Card.Footer>
                    <a href={link} className="cu-button cu-button--red cu-button--small">
                      More info
                    </a>
                  </Card.Footer>
                </Card>)}
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ee=["EventCards"];export{s as EventCards,ee as __namedExportsOrder,$ as default};
