import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormLoader, RowLoader } from './FormLoader'

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

export const Default: Story = {
  render: () => (
    <FormLoader>
      <RowLoader cols={1} />
      <RowLoader cols={3} />
    </FormLoader>
  ),
}
