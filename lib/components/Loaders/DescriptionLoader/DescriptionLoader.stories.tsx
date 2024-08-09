import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DescriptionLoader } from './DescriptionLoader'

const meta: Meta<typeof DescriptionLoader> = {
  title: 'Components/Load Screens/Description Loader',
  component: DescriptionLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof DescriptionLoader>

export const Primary: Story = {
  render: (args) => (
    <DescriptionLoader {...args}>
      <DescriptionLoader.Meta rows={2}></DescriptionLoader.Meta>
    </DescriptionLoader>
  ),
}

export const WithColumn: Story = {
  render: (args) => (
    <DescriptionLoader {...args}>
      <DescriptionLoader.Meta rows={2} useColumns></DescriptionLoader.Meta>
    </DescriptionLoader>
  ),
}

export const Accordion: Story = {
  render: (args) => (
    <DescriptionLoader {...args}>
      <DescriptionLoader.Accordion rows={2}></DescriptionLoader.Accordion>
    </DescriptionLoader>
  ),
}
