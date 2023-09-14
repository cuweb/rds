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

export const PowerBi: Story = {}
PowerBi.args = {
  children: (
    <Embed.PowerBi
      title="test"
      url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1"
    />
  ),
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
