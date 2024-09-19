import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { PageHeader } from '../PageHeader/PageHeader'
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

export const Primary: Story = {
  render: (args) => (
    <Section>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
      </Description>
    </Section>
  ),
}

export const Columns: Story = {
  render: (args) => (
    <Section>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term} useColumns>
          {descMeta[0].details}
        </Description.Meta>
      </Description>
    </Section>
  ),
}

export const Accordion: Story = {
  render: (args) => (
    <Section>
      <Description {...args}>
        <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
      </Description>
    </Section>
  ),
}

export const MultipleStacked: Story = {
  render: (args) => (
    <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </Section>
  ),
}

export const MultipleColumns: Story = {
  render: (args) => (
    <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </Section>
  ),
}

export const MultipleAccordions: Story = {
  render: (args) => (
    <Section>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>
        ))}
      </Description>
    </Section>
  ),
}
