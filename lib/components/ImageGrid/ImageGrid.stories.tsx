import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageGrid } from './ImageGrid'

const meta: Meta<typeof ImageGrid> = {
  title: 'Components/ImageGrid',
  component: ImageGrid,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof ImageGrid>

export const Default: Story = () => {
  return <ImageGrid />
}

Default.storyName = 'Default ImageGrid'
