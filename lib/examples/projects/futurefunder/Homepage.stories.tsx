import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { FooterDept } from '../../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { Carleton360 } from '../../../components/Carleton360/Carleton360'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'
import { Column } from '../../../layouts/Column/Column'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../../components/Footer/FooterCookie/FooterCookie'
import { Section } from '../../../layouts/Section/Section'
import { WideBanner } from '../../../components/WideBanner/WideBanner'
import { Card } from '../../../components/Card/Card'
import { NewsData } from '../../../data/NewsData'
import { NavFutureFunder, NavDataSingle } from '../../../data/NavData'

const meta: Meta = {
  title: 'Projects/FutureFunder',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
        malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
        sapien in urna. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien
        in urna. Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctioaut
        reprehenderit ducimus. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum malesuada lectus.
      </p>
    </>
  )
}

export const Homepage: Story = {
  render: () => {
    return (
      <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="FutureFunder" link="https://graduate.carleton.ca" />
            <Nav.Buttons menu={NavFutureFunder} isSearch onClickSearch={() => {}} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavDataSingle} />
            <Nav.Buttons menu={NavFutureFunder} isSearch onClickSearch={() => {}} />
          </Nav.Bottom>
        </Nav>

        <Main>
          <Section maxWidth="max">
            <WideBanner
              headerType="h1"
              image="https://picsum.photos/id/565/1920/840"
              opacity={80}
              title="Welcome to the FutureFunder"
            >
              <p>Your platform to make lasting change through higher education!</p>
            </WideBanner>
          </Section>

          <Section maxWidth="7xl">
            <PageHeader as="h2" header="Featured Campaigns" size="md" />
            <Column cols="4">
              {NewsData.slice(0, 4).map(({ id, title, link, image, alt }) => (
                <Card key={id}>
                  <Card.Figure>
                    <img src={image} alt={alt} width="400" height="300" />
                  </Card.Figure>
                  <Card.Header extraText="Athletics, Science" title={title} link={link} />
                  <Card.Footer>
                    <Card.FundingMeta raised={1234} goal={2000} daysLeft={30} />
                  </Card.Footer>
                </Card>
              ))}
            </Column>
          </Section>

          <SinglePara />

          <h2>Heading Three</h2>
          <SinglePara />

          <Carleton360>
            <ButtonGroup>
              <Button title="Sign up for 360" />
              <Button title="Login to 360" color="dark-grey" />
            </ButtonGroup>
          </Carleton360>

          <h2>Heading Three</h2>
          <SinglePara />

          <h2>Heading Three</h2>
          <SinglePara />
        </Main>

        <FooterDept
          buildingName="Pigiarvik (ᐱᒋᐊᕐᕕᒃ)"
          deptName="Information Technology Services"
          email="noreply@carleton.ca"
          footerButtons={[
            {
              id: 1,
              title: 'Contact support',
              url: '#',
            },
            {
              id: 2,
              title: 'Recent alerts',
              url: '#',
            },
          ]}
          officeNumber="400"
          phone="613-520-2600"
        />

        <FooterStandard />
        <FooterCookie />
      </>
    )
  },
}
