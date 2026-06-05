import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { FullBanner } from '../../../components/FullBanner/FullBanner'
import { CallOut } from '../../../components/CallOut/CallOut'
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
            <Nav.Logo title="FutureFunder" link="https://futurefunder.carleton.ca" />
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
              <img alt="Top down view of a desk" src="https://picsum.photos/id/566/1920/840" />
            </FullBanner.Image>
            <FullBanner.Content headerType="h1" title="Welcome to the FutureFunder">
              <p>Your platform to make lasting change through higher education!</p>
              <ButtonGroup>
                <Button title="Apply Now" />
                <Button color="grey" title="Request Information" />
              </ButtonGroup>
            </FullBanner.Content>
          </FullBanner>

          <Section maxWidth="7xl">
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

          <CallOut justify="center" maxWidth="4xl" title="Why give?">
            <p>
              Since its founding moments Carleton has had a mandate to serve the community, providing citizens with
              education, knowledge and opportunity. This mandate defines our promise to you as a supporter. We are Here
              for Good.
            </p>
            <p>
              Your gift to Carleton brings real change to your community. If you share our conviction that there are
              good things to be done, we could use your help. Collaborate with us and do good things for the world.
            </p>
            <ButtonGroup align="center" gap="5">
              <Button onClick={() => {}} title="Learn More" />
            </ButtonGroup>
          </CallOut>

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
        <FooterCookie />
      </>
    )
  },
}
