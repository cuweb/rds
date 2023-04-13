import { Meta, StoryObj } from '@storybook/react'
import { Accordian } from './Accordion'
import AccordianData from './AccordianData.json'

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
  render: (args) => (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Accordian Titles</h2>
          <Accordian {...args} />
        </div>
      </div>
    </>
  ),
}

Default.args = {
  data: AccordianData,
}
