import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Timeline } from './Timeline'
import { TimelineData } from '../../data/TimelineData'

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

// Use sample data from TimelineData
const sampleEvents = TimelineData

export const Primary: Story = {
  render: () => (
    <Section>
      <Timeline>
        {sampleEvents.map((event, index) => (
          <Timeline.Item
            key={index}
            aside={event.aside} // Update to use aside instead of date
            title={event.title}
            description={event.description}
          />
        ))}
      </Timeline>
    </Section>
  ),
}
