import type { Meta, StoryObj } from '@storybook/react'
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
  hasShadow: false,
  hasBorder: false,
}

export const HasShadow: Story = {
  render: () => (
    <>
      <StackedList hasShadow>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
  ),
}

export const HasBorder: Story = {
  render: () => (
    <>
      <StackedList hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
  ),
}

export const ShadowBorder: Story = {
  name: 'Shadow & Border',
  render: () => (
    <>
      <StackedList hasShadow hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <>
      <StackedList header="Stacked list header" hasShadow hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
  ),
}

export const WithListItems: Story = {
  render: () => (
    <>
      <StackedList hasShadow hasBorder>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
    </>
  ),
}

export const Testing: Story = {
  render: () => (
    <>
      <StackedList header="Post Listing" hasShadow>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
        <li className="p-6">This is a list item</li>
      </StackedList>
      <StackedList header="Container" as="div" cols="1" listType="toc" hasShadow>
        <p>This is a div container</p>
      </StackedList>
    </>
  ),
}
