import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormLoader } from './FormLoader'

const meta: Meta<typeof FormLoader> = {
  title: 'Components/Load Screens/Form Loader',
  component: FormLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof FormLoader>

export const OneColumn: Story = {
  render: () => <FormLoader numCol={1} />,
}

export const TwoColumn: Story = {
  render: () => <FormLoader numCol={2} />,
}

export const ThreeColumn: Story = {
  render: () => <FormLoader numCol={3} />,
}
