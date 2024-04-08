import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageHeaders } from './PageHeaders'
import { Figure } from '../Figure/Figure'

const meta: Meta<typeof PageHeaders> = {
  title: 'Components/PageHeaders',
  component: PageHeaders,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeaders>

export const Default: Story = {}

Default.args = {
  header: 'Large page header',
  size: 'lg',
  as: 'h1',
}

export const PageHeaderCentre: Story = {
  args: {
    header: 'Page header centre',
    size: 'lg',
    as: 'h1',
    isCenter: true,
  },
}

export const DefaultWithContent: Story = {
  args: {
    header: 'Large header with content',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    size: 'lg',
    as: 'h1',
  },
}

export const CenterWithContent: Story = {
  args: {
    header: 'Large center header with content',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    size: 'lg',
    as: 'h1',
    isCenter: true,
  },
}

export const EventPageHeader: Story = {
  args: {
    header: 'Upcoming Event Header',
    children: (
      <>
        <Figure size="sm" align="right" hasShadow noMobile>
          <img
            src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
            alt="Required alt text"
            width="200"
            height="133"
          />
        </Figure>
        <PageHeaders.Event
          eventType="Hybrid"
          virtualType="Teams"
          virtualUrl="https://events.carleton.ca"
          startDate="March 21st, 2023 at 6:00pm"
          location="Raven's Nest, 1125 Colonel By Drive"
          cost="$20 per adult, $15 for youth/senior"
          contactName="John Doe"
          contactEmail="johndoe@test.com"
          contactPhone="613-520-2600 x1234"
          primaryButtonUrl="https://carleton.ca"
          secondaryButtonUrl="https://carleton.ca/webservices"
          secondaryButtonText="More Information"
        />
      </>
    ),
  },
}

export const PeoplePageHeader: Story = {
  args: {
    header: 'People Profile Header',
    pronoun: 'He/Him',
    children: (
      <>
        <Figure size="sm" align="right" hasShadow>
          <img
            src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
            alt="Required alt text"
            width="200"
            height="133"
          />
        </Figure>
        <PageHeaders.People
          jobTitle="Jedi Master & Jedi Council Member"
          degrees="Certificate, Padawan Academy of Jedi Arts"
          building="Onraed"
          room="Sector A29"
          email="greely@thejediyouseek.com"
          phone="613-520-2600"
          phoneExt="1234"
          resume="#"
          website="#"
          linkedin="#"
          twitter="#"
          facebook="#"
        />
      </>
    ),
  },
}
