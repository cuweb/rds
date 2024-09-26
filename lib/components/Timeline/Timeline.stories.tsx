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
          <Timeline.Item key={index} aside={event.aside} title={event.title}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sapien, gravida ut libero sed,
              blandit suscipit ligula. Donec egestas leo non magna efficitur, ac egestas eros euismod. Etiam egestas
              turpis faucibus facilisis porttitor. Donec non turpis ac eros aliquam mattis. Nullam aliquet porttitor
              posuere.
            </p>
            <ul>
              <li>Phasellus at dapibus arcu, non eleifend purus.</li>
              <li>Sed libero magna, consequat id dignissim a, venenatis quis urna.</li>
              <li>Mauris varius lectus augue, et viverra quam vestibulum ut.</li>
            </ul>
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  ),
}
