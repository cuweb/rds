import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Main } from '../Main/Main'
import { Section } from '../Section/Section'
import { StackedList } from './StackedList'

const meta: Meta<typeof StackedList> = {
  title: 'Layouts/StackedList',
  component: StackedList,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof StackedList>

export const Primary: Story = {}

Primary.args = {
  children: `Stacked list component`,
  as: 'ul',
  cols: '2',
  listType: 'posts',
  maxWidth: '5xl',
  noShadow: false,
}

export const WithListItems: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    return (
      <Main>
        <Section>
          <StackedList {...args}>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
          </StackedList>
        </Section>
      </Main>
    )
  },
}

export const NoShadow: Story = {
  args: {
    ...Primary.args,
    noShadow: true,
  },
  render: (args) => {
    return (
      <Main>
        <Section>
          <StackedList {...args}>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
            <li className="not-prose p-6 md:p-8 !my-0">This is a list item</li>
          </StackedList>
        </Section>
      </Main>
    )
  },
}
