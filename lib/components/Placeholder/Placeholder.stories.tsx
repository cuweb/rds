import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Placeholder } from './Placeholder'
import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof Placeholder> = {
  title: 'Components/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Placeholder>

export const Primary: Story = {
  args: {
    name: 'Placeholder name',
    maxWidth: '5xl',
  },
  render: (args) => {
    return (
      <Section>
        <Placeholder {...args} />
      </Section>
    )
  },
}
