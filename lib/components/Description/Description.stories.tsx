import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../../layouts/Main/Main'
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
    <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term}>{descMeta[0].details}</Description.Meta>
      </Description>
    </Main>
  ),
}

export const Columns: Story = {
  render: (args) => (
    <Main>
      <Description {...args}>
        <Description.Meta term={descMeta[0].term} useColumns>
          {descMeta[0].details}
        </Description.Meta>
      </Description>
    </Main>
  ),
}

export const Accordion: Story = {
  render: (args) => (
    <Main>
      <Description {...args}>
        <Description.Accordion term={descMeta[0].term}>{descMeta[0].details}</Description.Accordion>
      </Description>
    </Main>
  ),
}

export const MultipleStacked: Story = {
  render: (args) => (
    <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </Main>
  ),
}

export const MultipleColumns: Story = {
  render: (args) => (
    <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Meta key={item?.id} term={item?.term} useColumns>
            {item?.details}
          </Description.Meta>
        ))}
      </Description>
    </Main>
  ),
}

export const MultipleAccordions: Story = {
  render: (args) => (
    <Main>
      <PageHeader as="h2" header="Description header" size="md" />
      <Description {...args}>
        {descMeta.map((item) => (
          <Description.Accordion key={item?.id} term={item?.term}>
            {item?.details}
          </Description.Accordion>
        ))}
      </Description>
    </Main>
  ),
}
