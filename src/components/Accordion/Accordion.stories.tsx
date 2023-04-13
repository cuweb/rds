import { Meta, StoryObj } from '@storybook/react'
import AccordionData from './AccordionData.json'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

const singleAccordionData = [
  {
    title: 'Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

// export const Default: Story = {
//   render: (args) => (
//     <>
//       <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
//         <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
//           <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Accordion Titles</h2>
//           <Accordion {...args} />
//         </div>
//       </div>
//     </>
//   ),
// }

export const Default: Story = {}

Default.args = {
  data: singleAccordionData,
}

export const MultipleItems: Story = {
  args: {
    data: AccordionData,
  },
}

export const AccordianWithInComponent: Story = {
  args: {
    data: AccordionData,
  },
  render: (args) => (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Accordion Titles</h2>
          <Accordion {...args} />
        </div>
      </div>
    </>
  ),
}
