import type { Meta, StoryObj } from '@storybook/react'
import { Description } from './Description'
import { DescriptionData as descMeta } from '../../data/DescriptionData'

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

export const Stacked: Story = {}
Stacked.args = {
  children: <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>,
}

export const Columns: Story = {}
Columns.args = {
  children: (
    <Description.Meta term={descMeta[0].term} useColumns>
      {descMeta[0].details}
    </Description.Meta>
  ),
}

export const Accordion: Story = {}
Accordion.args = {
  children: <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>,
}

export const MultipleStacked: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </>
  ),
}

export const MultipleColumns: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </>
  ),
}

export const MultipleAccordions: Story = {
  render: () => (
    <>
      <Description>
        {descMeta.map((item) => (
          <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>
        ))}
      </Description>
    </>
  ),
}
