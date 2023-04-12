import { Meta, StoryObj } from '@storybook/react'
import { Accordian } from './Accordion'

const meta: Meta<typeof Accordian> = {
  title: 'Components/Accordian',
  component: Accordian,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordian>

export const Default: Story = {
  render: (args) => <Accordian />,
}

Default.args = {}
