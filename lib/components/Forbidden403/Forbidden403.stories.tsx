import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Forbidden403 } from './Forbidden403'
import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof Forbidden403> = {
  title: 'Components/Error Messages/403 Forbidden',
  component: Forbidden403,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Forbidden403>

export const Primary: Story = {
  args: {
    isCenter: true,
  },
  render: (args) => {
    return <Forbidden403 {...args} />
  },
}

export const SectionWrapper: Story = {
  args: {
    isCenter: false,
  },
  render: (args) => {
    return (
      <Section>
        <Forbidden403 {...args} />
      </Section>
    )
  },
}
