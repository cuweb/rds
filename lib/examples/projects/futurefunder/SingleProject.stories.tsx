import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { FooterFutureFunder } from '../../../components/Footer/FooterFutureFunder/FooterFutureFunder'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { Figure } from '../../../components/Figure/Figure'
import { CampaignBanner } from '../../../components/CampaignBanner/CampaignBanner'
import { NavButtonsData, NavFutureFunder } from '../../../data/NavData'
import { Section } from '../../../layouts/Section/Section'

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
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies. Suspendisse condimentum magna vel orci
        vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus vehicula
        nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam luctus,
        velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna. Vivamus imperdiet
        turpis nec elit ultricies. Suspendisse condimentum magna vel orci vulputate, eget vulputate neque porttitor.
      </p>
    </>
  )
}

export const SingleProject: Story = {
  render: () => (
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
        <CampaignBanner>
          <CampaignBanner.Top>
            <CampaignBanner.Content
              title="The Music Award"
              tags={[
                { name: 'Music', link: 'https://example.com/music' },
                { name: 'Arts', link: 'https://example.com/arts' },
              ]}
              categories={[
                { name: 'Arts', link: 'https://example.com/arts' },
                { name: 'Arts & Social Sciences', link: 'https://example.com/arts-social-sciences' },
                { name: 'Student Experience', link: 'https://example.com/student-experience' },
                { name: 'Scholarships', link: 'https://example.com/scholarships' },
                { name: 'Giving Day', link: 'https://example.com/giving-day' },
                { name: 'Healthcare', link: 'https://example.com/healthcare' },
              ]}
            >
              <p>
                The Music Award for Indigenous, Black and Racialized Students is awarded annually to a student who is
                entering or continuing in the undergraduate Music program.
              </p>
            </CampaignBanner.Content>
            <CampaignBanner.Image>
              <img src="https://picsum.photos/id/15/1600/900" alt="placeholder" />
            </CampaignBanner.Image>
          </CampaignBanner.Top>
          <CampaignBanner.Stats raised={1349} goal={5000} endDate="2026-08-27" />
        </CampaignBanner>
        <Section maxWidth="5xl">
          <PageHeader as="h2" header="The Overview" size="md" />
          <SinglePara />
          <Figure align="right" noMobile={false} rounded="lg" size="md">
            <img
              alt="Sample for figure stories file"
              height="266"
              src="https://picsum.photos/id/15/1600/900"
              width="400"
            />
          </Figure>

          <PageHeader as="h2" header="The Background" size="md" />
          <SinglePara />

          <PageHeader as="h2" header="The Rollout" size="md" />
          <SinglePara />

          <PageHeader as="h2" header="The Impact" size="md" />
          <SinglePara />

          <PageHeader as="h2" header="Fund this campaign" size="md" />
          <p>The primary donation form would be placed here.</p>
        </Section>
      </Main>

      <FooterFutureFunder />
    </>
  ),
}
