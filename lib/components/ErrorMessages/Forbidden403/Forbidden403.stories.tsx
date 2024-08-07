import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Forbidden403 } from './Forbidden403'
import { Section } from '../../../layouts/Section/Section'

const meta: Meta<typeof Forbidden403> = {
  title: 'Components/ErrorMessages/Forbidden403',
  component: Forbidden403,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Forbidden403>

export const Primary: Story = {
  render: () => {
    return (
      <Section maxWidth="7xl">
        <Forbidden403 />
      </Section>
    )
  },
}
