import type { Meta, StoryObj } from '@storybook/react'
import { Description } from './Description'

const meta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Description>

const AccordianData = [
  {
    title: 'Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Item 2',
    content:
      'Vestibulum facilisis, risus nec tincidunt dignissim, quam odio consectetur felis, at consectetur mauris mauris eget libero. Vestibulum facilisis, risus nec tincidunt dignissim, quam odio consectetur felis, at consectetur mauris mauris eget libero.Vestibulum facilisis, risus nec tincidunt dignissim, quam odio consectetur felis, at consectetur mauris mauris eget libero.Vestibulum facilisis, risus nec tincidunt dignissim, quam odio consectetur felis, at consectetur mauris mauris eget libero.',
  },
  {
    title: 'Item 3',
    content:
      'Sed fermentum, lacus vel hendrerit congue, nibh mauris malesuada nibh, sit amet porttitor arcu nunc non risus.Sed fermentum, lacus vel hendrerit congue, nibh mauris malesuada nibh, sit amet porttitor arcu nunc non risus.Sed fermentum, lacus vel hendrerit congue, nibh mauris malesuada nibh, sit amet porttitor arcu nunc non risus.Sed fermentum, lacus vel hendrerit congue, nibh mauris malesuada nibh, sit amet porttitor arcu nunc non risus.',
  },
]

export const Single: Story = {}

Single.args = {
  children: (
    <Description>
      <Description.Accordian title={'Accordian Title '}>The paragraph of accordian</Description.Accordian>
    </Description>
  ),
}

export const Multiple: Story = {
  render: () => (
    <>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {AccordianData.map((item) => (
          <Description key={item?.title} className="pt-6">
            <Description.Accordian title={item.title}>{item.content}</Description.Accordian>
          </Description>
        ))}
      </dl>
    </>
  ),
}
