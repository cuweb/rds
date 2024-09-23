import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Timeline, TimelineEventProps } from './Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Timeline>

const sampleEvents: TimelineEventProps[] = [
  {
    date: '3rd January 2020',
    title: 'What Is Lorem Ipsum?',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    date: '21st June 2019',
    title: 'What Is Lorem Ipsum?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    date: '15th April 2018',
    title: 'What Is Lorem Ipsum?',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    date: '22nd March 2017',
    title: 'What Is Lorem Ipsum?',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
]

export const Primary: Story = {
  args: {
    events: sampleEvents,
  },
  render: (args) => {
    return (
      <Section>
        <Timeline {...args} />
      </Section>
    )
  },
}

export const EmptyTimeline: Story = {
  args: {
    events: [],
  },
  render: (args) => {
    return (
      <Section>
        <Timeline {...args} />
      </Section>
    )
  },
}
