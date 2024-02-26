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

export const YouTube: Story = {
  name: 'YouTube',
}
YouTube.args = {
  children: <Embed.YouTube title="test" url="https://www.youtube.com/watch?v=seBWI1EkEfw" />,
}

export const Vimeo: Story = {}
Vimeo.args = {
  children: <Embed.Vimeo title="test" url="https://vimeo.com/106595658" />,
}

export const Kaltura: Story = {}
Kaltura.args = {
  children: (
    <Embed.Kaltura
      title="test"
      url="https://mediaspace.carleton.ca/media/WorkshopA+5+Quick+Ways+to+Make+Your+Course+More+Accessible/1_oq0u8l23"
    />
  ),
}

export const PowerBi: Story = {}
PowerBi.args = {
  children: (
    <Embed.PowerBi
      title="test"
      url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1"
    />
  ),
}

export const TED: Story = {}
TED.args = {
  children: (
    <Embed.TED
      title="test"
      url="https://www.ted.com/talks/jennifer_doudna_crispr_s_next_advance_is_bigger_than_you_think"
    />
  ),
}
