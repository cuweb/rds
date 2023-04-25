import type { Meta, StoryObj } from '@storybook/react'
import { Description } from './Description'
import { DescriptionMeta } from './DescriptionMeta'

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
      {AccordianData.map((item) => (
        <Description key={item?.title} divider>
          <Description.Accordian title={item.title}>{item.content}</Description.Accordian>
        </Description>
      ))}
    </>
  ),
}

export const SingleMeta: Story = {}
SingleMeta.args = {
  children: (
    <Description>
      <DescriptionMeta title="First Name">Ish</DescriptionMeta>
    </Description>
  ),
}

export const SingleMetaSidebySide: Story = {}
SingleMetaSidebySide.args = {
  children: (
    <Description>
      <DescriptionMeta title="First Name" displaySide>
        Ish
      </DescriptionMeta>
    </Description>
  ),
}
