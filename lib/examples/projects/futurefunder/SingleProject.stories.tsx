import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../../components/Nav/Nav'
import { PageHeader } from '../../../components/PageHeader/PageHeader'
import { FundingDetails } from '../../../components/FundingDetails/FundingDetails'
import { NavButtonsData, NavFutureFunder } from '../../../data/NavData'

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
        velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
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
        <Section as="div" maxWidth="7xl">
          <FundingDetails
            title="Annual Musical Production 2026"
            endDate="2027-09-01"
            raised={45250}
            goal={75000}
            categories={['Community', 'Health', 'Student Experience']}
            imageUrl="https://fastly.picsum.photos/id/237/1200/800.jpg?hmac=Zig5Q0Oa_5oSGNOhgbpE-lgHzdREZIxTf94rVP1-uCg"
            imageAlt="Black labrador puppy looking up"
          />
        </Section>

        <PageHeader as="h2" header="The Overview" size="md" />
        <SinglePara />

        <PageHeader as="h2" header="The Background" size="md" />
        <SinglePara />

        <PageHeader as="h2" header="The Rollout" size="md" />
        <SinglePara />

        <PageHeader as="h2" header="The Impact" size="md" />
        <SinglePara />

        <PageHeader as="h2" header="Fund this campaign" size="md" />
        <p>The primary donation form would be placed here.</p>
      </Main>

      <FooterStandard />
    </>
  ),
}
