import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { NewsData } from '../../data/NewsData'
import { EventData } from '../../data/EventData'
import { PeopleData } from '../../data/PeopleData'
import { VideoData } from '../../data/VideoData'
import { StatData } from '../../data/StatData'

const meta: Meta = {
  title: 'Examples/Templates',
}

export default meta
type Story = StoryObj

const DoublePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const CardsOverview: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <img
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="All the Cards" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="News Cards" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with white background</li>
              <li>Row 2: White background and a drop shadow on hover</li>
              <li>Row 3: White background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadowHover>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="News Cards w/Grey BG" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with grey background</li>
              <li>Row 2: Grey background and a drop shadow on hover</li>
              <li>Row 3: Grey background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadowHover>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {NewsData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Event Cards" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with white background</li>
              <li>Row 2: White background and a drop shadow on hover</li>
              <li>Row 3: White background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadowHover>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasShadow>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Event Cards w/Grey BG" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with grey background</li>
              <li>Row 2: Grey background and a drop shadow on hover</li>
              <li>Row 3: Grey background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadowHover>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {EventData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasShadow>
                  <a href={item?.link}>
                    <Card.Figure>
                      <img src={item?.image} alt={item?.alt} width={400} height={175} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.DateBox startDate={item?.startDate} endDate={item?.endDate} />
                      <Card.Header text={item?.title} />
                      <Card.EventMeta
                        startDateTime={item?.startDate}
                        endDateTime={item?.endDate}
                        onCampus={item?.on_campus}
                        onCampusBuilding={item?.on_campus_building}
                        onCampusRoomNumber={item?.on_campus_room_number}
                        eventAddress={item?.event_address}
                      />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="People Cards" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with white background</li>
              <li>Row 2: White background and a drop shadow on hover</li>
              <li>Row 3: White background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadowHover>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isCenter hasShadow>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="People Cards w/Grey BG" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with grey background</li>
              <li>Row 2: Grey background and a drop shadow on hover</li>
              <li>Row 3: Grey background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadowHover>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {PeopleData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey isCenter hasShadow>
                  <a href={item?.link}>
                    <Card.Figure isRound>
                      <img src={item?.image} alt={item?.alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${item?.firstName} ${item?.lastName}`} />
                      <Card.PeopleMeta jobTitle={item?.jobTitle} email={item?.email} phone={item?.phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Video Cards" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with white background</li>
              <li>Row 2: White background and a drop shadow on hover</li>
              <li>Row 3: White background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} noLink>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} noLink hasShadowHover>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} noLink hasShadow>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Video Cards w/Grey BG" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with grey background</li>
              <li>Row 2: Grey background and a drop shadow on hover</li>
              <li>Row 3: Grey background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey noLink>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey noLink hasShadowHover>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {VideoData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey noLink hasShadow>
                  <Card.Video source={item?.source} />
                  <Card.Content>
                    <Card.Header text={item?.title} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Stat Cards" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with white background</li>
              <li>Row 2: White background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {StatData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={item?.stat} desc={item?.desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {StatData.slice(0, 3).map((item) => (
                <Card key={item?.id} hasRedBorder noLink hasShadow>
                  <Card.Content>
                    <Card.Stats stat={item?.stat} desc={item?.desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <Container>
            <Heading text="Stat Cards w/Grey BG" />
            <p>The card examples below feature a variety of configuration option. They are as follows:</p>
            <ul>
              <li>Row 1: Defaults with grey background</li>
              <li>Row 2: Grey background with a drop shadow</li>
            </ul>
            <br />
            <Column cols="3">
              {StatData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasRedBorder noLink>
                  <Card.Content>
                    <Card.Stats stat={item?.stat} desc={item?.desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
            <Column cols="3">
              {StatData.slice(0, 3).map((item) => (
                <Card key={item?.id} isGrey hasRedBorder noLink hasShadow>
                  <Card.Content>
                    <Card.Stats stat={item?.stat} desc={item?.desc} />
                  </Card.Content>
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
