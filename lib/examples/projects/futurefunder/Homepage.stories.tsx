import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { FooterDept } from '../../../components/Footer/FooterDept/FooterDept'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { FullBanner } from '../../../components/FullBanner/FullBanner'
import { ButtonGroup } from '../../../components/ButtonGroup/ButtonGroup'
import { Button } from '../../../components/Button/Button'
import { Column } from '../../../layouts/Column/Column'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { FooterCookie } from '../../../components/Footer/FooterCookie/FooterCookie'
import { Section } from '../../../layouts/Section/Section'
import { Card } from '../../../components/Card/Card'
import { NewsData } from '../../../data/NewsData'
import { NavButtonsData, NavFutureFunder } from '../../../data/NavData'

const meta: Meta = {
  title: 'Projects/FutureFunder',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Homepage: Story = {
  render: () => {
    return (
      <>
        <Nav>
          <Nav.Top>
            <Nav.Logo title="FutureFunder" link="https://graduate.carleton.ca" />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Top>
          <Nav.Bottom>
            <Nav.Menu menu={NavFutureFunder} />
            <Nav.Buttons menu={NavButtonsData} isSearch onClickSearch={() => {}} />
          </Nav.Bottom>
        </Nav>

        <Main>
          <FullBanner>
            <FullBanner.Image>
              <img alt="Top down view of a desk" src="https://picsum.photos/id/565/1920/840" />
            </FullBanner.Image>
            <FullBanner.Content headerType="h1" title="Welcome to the FutureFunder">
              <p>Your platform to make lasting change through higher education!</p>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="grey" title="Request Information" />
              </ButtonGroup>
            </FullBanner.Content>
          </FullBanner>

          <Section maxWidth="7xl" isGrey>
            <PageHeader as="h2" header="Featured Campaigns" size="md" />
            <Column cols="4">
              {NewsData.slice(0, 8).map(({ id, title, link, image, alt }) => (
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

          <Section>
            <PageHeader as="h2" header="Why Give?" size="md" isCenter />
            <Column cols="2">
              <Column.Content>
                <p>
                  Since its founding moments Carleton has had a mandate to serve the community, providing citizens with
                  education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are
                  Here for Good.
                </p>
              </Column.Content>
              <Column.Content>
                <p>
                  Your gift to Carleton brings real change to your community. If you share our conviction that there are
                  good things to be done, we could use your help. Collaborate with us and do good things for the world.
                </p>
              </Column.Content>
            </Column>
            <ButtonGroup align="center" gap="5">
              <Button onClick={() => {}} title="Learn More" />
            </ButtonGroup>
          </Section>

          <Section isGrey>
            <PageHeader
              as="h2"
              header="Browse by Department"
              size="md"
              content="Add design for browsing by category."
              isCenter
            />
          </Section>
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
