import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Description } from './Description'
import { DescriptionData as descMeta } from '../../data/DescriptionData'

const meta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Description>

export const Default: Story = {
  render: (args) => (
    <Description {...args}>
      <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
    </Description>
  ),
}

export const Columns: Story = {
  render: (args) => (
    <Description {...args}>
      <Description.Meta term={descMeta[0].term} useColumns>
        {descMeta[0].details}
      </Description.Meta>
    </Description>
  ),
}

export const Accordion: Story = {
  render: (args) => (
    <Description {...args}>
      <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
    </Description>
  ),
}

export const MultipleStacked: Story = {
  render: (args) => (
    <Description {...args}>
      {descMeta.map((item) => (
        <Description.Meta key={item?.id} term={item?.term}>
          {item?.details}
        </Description.Meta>
      ))}
    </Description>
  ),
}

export const MultipleColumns: Story = {
  render: (args) => (
    <Description {...args}>
      {descMeta.map((item) => (
        <Description.Meta key={item?.id} term={item?.term} useColumns>
          {item?.details}
        </Description.Meta>
      ))}
    </Description>
  ),
}

export const MultipleAccordions: Story = {
  render: (args) => (
    <Description {...args}>
      {descMeta.map((item) => (
        <Description.Accordion key={item?.id} term={item?.term}>
          {item?.details}
        </Description.Accordion>
      ))}
    </Description>
  ),
}
