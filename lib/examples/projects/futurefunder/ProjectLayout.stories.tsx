import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { FooterStandard } from '../../../components/Footer/FooterStandard/FooterStandard'
import { Nav } from '../../../components/Nav/Nav'
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

export const ProjectLayout: Story = {
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
        <Section as="div" maxWidth="max">
          <FundingDetails
            status="ACTIVE CAMPAIGN"
            title="Annual Musical Production 2026"
            raised={45250}
            goal={75000}
            imageUrl="https://fastly.picsum.photos/id/237/1200/800.jpg?hmac=Zig5Q0Oa_5oSGNOhgbpE-lgHzdREZIxTf94rVP1-uCg"
            imageAlt="Black labrador puppy looking up"
          />
        </Section>

        <SinglePara />
        <SinglePara />
        <SinglePara />
      </Main>

      <FooterStandard />
    </>
  ),
}
