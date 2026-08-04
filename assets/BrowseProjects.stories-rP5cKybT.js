import{j as t}from"./jsx-runtime-Ceqrl5vW.js";import{M as f}from"./Main-DbtIf-ri.js";import{S as o}from"./Section-D15gsLPN.js";import{C as s}from"./Column-CApwGGHQ.js";import{F as g}from"./FooterStandard-BpQrpQ9b.js";import{N as r}from"./Nav-Cms5K54z.js";import{C as e}from"./Card-41xfzEU5.js";import{F as i}from"./FilterPanel-BoqG_ZXu.js";import{W as S}from"./WideImage-CFbPCeUm.js";import{P as v}from"./Pagination-DlWyP9d-.js";import{a as n,b as B}from"./NavData-BCA87AC2.js";import{F as l}from"./FilterData-D1ec_lJy.js";import{N as F}from"./NewsData-CjZsRozh.js";import"./iframe-C8-j20Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./propClasses-CJUCiil5.js";import"./FooterLogoLinks-D1zUhVuI.js";import"./useLinkContext-DXhFVb_m.js";import"./FooterStandardData-CLyJH8hw.js";import"./Avatar-BXTpJRH6.js";import"./ButtonGroup-C2yo-PV8.js";import"./Icon-D4fNep_P.js";import"./parse-CXxdJvFO.js";import"./format-BDD0as5c.js";import"./getDate-DcT4OotK.js";import"./isSameDay-C9OCNg_L.js";import"./formatCurrency-BUDOERuc.js";import"./useScrollReveal-S5oyKPmD.js";import"./Button-BTjjPwdH.js";import"./PageHeader-tz7d4xYA.js";import"./parseISO-BGl-MJHo.js";const et={title:"Projects/FutureFunder",parameters:{layout:"fullscreen"}},a={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(r,{children:[t.jsxs(r.Top,{children:[t.jsx(r.Logo,{title:"FutureFunder",link:"https://futurefunder.carleton.ca"}),t.jsx(r.Buttons,{menu:n,isSearch:!0,onClickSearch:()=>{}})]}),t.jsxs(r.Bottom,{children:[t.jsx(r.Menu,{menu:B}),t.jsx(r.Buttons,{menu:n,isSearch:!0,onClickSearch:()=>{}})]})]}),t.jsxs(f,{children:[t.jsx(o,{maxWidth:"7xl",children:t.jsx(S,{focalPointX:50,focalPointY:50,headerType:"h1",isType:"image",opacity:60,title:"Browse the Campaigns",image:"https://picsum.photos/id/381/1920/840"})}),t.jsxs(o,{maxWidth:"7xl",children:[t.jsxs(i,{children:[t.jsx(i.Top,{sortOptions:l.sortOptions,filterOptions:l.filters}),t.jsx(i.Bottom,{})]}),t.jsx(s,{cols:"4",children:F.slice(0,8).map(({id:u,link:p,title:h,image:x,alt:C,date:j})=>t.jsxs(e,{children:[t.jsx(e.Figure,{children:t.jsx("img",{src:x,alt:C,width:"400",height:"300"})}),t.jsx(e.Header,{title:h,link:p,date:j}),t.jsx(e.Body,{children:t.jsx(e.Excerpt,{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris."})})]},u))}),t.jsx(v,{totalCount:48,siblingCount:1,pageSize:5,callback:()=>{},callbackPage:()=>{}})]}),t.jsx(o,{maxWidth:"7xl",isGrey:!0,children:t.jsxs(s,{cols:"4",children:[t.jsx(e,{leftBorder:!0,noHover:!0,children:t.jsx(e.Stats,{desc:"Student Population",stat:"30,500+"})}),t.jsx(e,{leftBorder:!0,noHover:!0,children:t.jsx(e.Stats,{desc:"Clubs & Societies",stat:"170+"})}),t.jsx(e,{leftBorder:!0,noHover:!0,children:t.jsx(e.Stats,{desc:"Scholarships & Bursaries",stat:"85.4 M+"})}),t.jsx(e,{leftBorder:!0,noHover:!0,children:t.jsx(e.Stats,{desc:"Research Funding",stat:"$116 M"})})]})})]}),t.jsx(g,{})]})};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <>
      <Nav>
        <Nav.Top>
          <Nav.Logo title="FutureFunder" link="https://futurefunder.carleton.ca" />
          <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
        </Nav.Top>
        <Nav.Bottom>
          <Nav.Menu menu={NavFutureFunder} />
          <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
        </Nav.Bottom>
      </Nav>

      <Main>
        <Section maxWidth="7xl">
          <WideImage focalPointX={50} focalPointY={50} headerType="h1" isType="image" opacity={60} title="Browse the Campaigns" image="https://picsum.photos/id/381/1920/840" />
        </Section>

        <Section maxWidth="7xl">
          <FilterPanel>
            <FilterPanel.Top sortOptions={FilterPanelData.sortOptions} filterOptions={FilterPanelData.filters} />
            <FilterPanel.Bottom />
          </FilterPanel>
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
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                </Card.Body>
              </Card>)}
          </Column>
          <Pagination totalCount={48} siblingCount={1} pageSize={5} callback={() => undefined} callbackPage={() => undefined} />
        </Section>

        <Section maxWidth="7xl" isGrey>
          <Column cols="4">
            <Card leftBorder noHover>
              <Card.Stats desc="Student Population" stat="30,500+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Clubs & Societies" stat="170+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Scholarships & Bursaries" stat="85.4 M+" />
            </Card>
            <Card leftBorder noHover>
              <Card.Stats desc="Research Funding" stat="$116 M" />
            </Card>
          </Column>
        </Section>
      </Main>

      <FooterStandard />
    </>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const rt=["BrowseProjects"];export{a as BrowseProjects,rt as __namedExportsOrder,et as default};
