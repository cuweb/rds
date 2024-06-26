import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Embed } from './Embed'

const meta: Meta<typeof Embed> = {
  title: 'Components/Embed',
  component: Embed,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Embed>

export const Youtube: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=seBWI1EkEfw" />
    </Embed>
  ),
}

export const Vimeo: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.Vimeo title="test" url="https://vimeo.com/106595658" />
    </Embed>
  ),
}

export const Kaltura: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.Kaltura
        title="test"
        url="https://mediaspace.carleton.ca/media/WorkshopA+5+Quick+Ways+to+Make+Your+Course+More+Accessible/1_oq0u8l23"
      />
    </Embed>
  ),
}

export const Powerbi: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.PowerBi
        title="test"
        url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1"
      />
    </Embed>
  ),
}

export const TED: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.TED
        title="test"
        url="https://www.ted.com/talks/jennifer_doudna_crispr_s_next_advance_is_bigger_than_you_think"
      />
    </Embed>
  ),
}

export const SoundCloud: Story = {
  render: (args) => (
    <Embed {...args}>
      <Embed.SoundCloud title="test" url="https://soundcloud.com/elephanttree/try" />
    </Embed>
  ),
}
