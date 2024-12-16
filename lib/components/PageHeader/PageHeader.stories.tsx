import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from './PageHeader'
import { Figure } from '../Figure/Figure'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Section } from '../../layouts/Section/Section'
import { EventDataSingle as eventData } from '../../data/EventData'

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Primary: Story = {
  args: {
    header: 'Page Header',
    as: 'h1',
    size: 'lg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isWhite: false,
    isCenter: false,
    noUnderline: false,
  },
  render: (args) => {
    return (
      <Section>
        <PageHeader {...args} />
      </Section>
    )
  },
}

export const EventHeader: Story = {
  render: (args) => (
    <Section>
      <PageHeader {...args}>
        <Figure size="sm" align="right" rounded="lg" noMobile>
          <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
        </Figure>
        <PageHeader.Event
          eventType="Hybrid"
          virtualType="Teams"
          virtualUrl="https://events.carleton.ca"
          startDate={eventData.startDate}
          endDate={eventData.endDate}
          location="Raven's Nest, 1125 Colonel By Drive"
          cost="$20 per adult, $15 for youth/senior"
          contactName="John Doe"
          contactEmail="johndoe@test.com"
          contactPhone="613-520-2600 x1234"
        >
          <ButtonGroup>
            <a href="https://carleton.ca" className="cu-button cu-button--red">
              Register Now
            </a>
            <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
              Add to My Events
            </a>
          </ButtonGroup>
        </PageHeader.Event>
      </PageHeader>
    </Section>
  ),
}
EventHeader.args = {
  header: 'Upcoming Single Day Event',
}

export const EventHeaderMultiday: Story = {
  render: (args) => (
    <Section>
      <PageHeader {...args}>
        <Figure size="sm" align="right" noMobile>
          <img src={eventData.image} alt={eventData.alt} width="200" height="133" />
        </Figure>
        <PageHeader.Event
          eventType="Hybrid"
          virtualType="Teams"
          virtualUrl="https://events.carleton.ca"
          startDate={eventData.startDate}
          endDate={eventData.multiDate}
          location="Raven's Nest, 1125 Colonel By Drive"
          cost="$20 per adult, $15 for youth/senior"
          contactName="John Doe"
          contactEmail="johndoe@test.com"
          contactPhone="613-520-2600 x1234"
        >
          <ButtonGroup>
            <a href="https://carleton.ca" className="cu-button cu-button--red">
              Register Now
            </a>
            <a href="https://carleton.ca/webservices" className="cu-button cu-button--grey">
              Add to My Events
            </a>
          </ButtonGroup>
        </PageHeader.Event>
      </PageHeader>
    </Section>
  ),
}
EventHeaderMultiday.args = {
  header: 'Event with Date Range',
}

export const PeopleHeader: Story = {
  render: (args) => (
    <Section>
      <PageHeader {...args}>
        <Figure size="sm" align="right">
          <img
            src="https://fastly.picsum.photos/id/1062/400/400.jpg?hmac=zaTGri35k94fGnPFBesQ7tRVfjy6BUCtXDFQdWQ3r-k"
            alt="Required alt text"
            width="200"
            height="133"
          />
        </Figure>
        <PageHeader.People
          jobTitle="Jedi Master & Jedi Council Member"
          degrees="Certificate, Padawan Academy of Jedi Arts"
          building="Onraed"
          room="Sector A29"
          email="greely@thejediyouseek.com"
          phone="613-520-2600"
          phoneExt="1234"
          orcidID="1234"
          resume="#"
          website="#website"
          linkedin="#linkedin"
          twitter="#twitter"
          facebook="#facebook"
          instagram="#instagram"
        />
      </PageHeader>
    </Section>
  ),
}
PeopleHeader.args = {
  header: 'People Profile',
  pronoun: 'He/Him',
}
