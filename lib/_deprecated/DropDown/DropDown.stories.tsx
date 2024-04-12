import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { DropDown } from './DropDown'
import { DropDownItemData as listItems } from '../../data/DropDownData'
import { Button } from '../../components/Button/Button'

const meta: Meta<typeof DropDown> = {
  title: 'Deprecated/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof DropDown>

export const Default: Story = {
  render: (args) => (
    <DropDown {...args} listItems={listItems}>
      {args.children}
    </DropDown>
  ),
}

Default.args = {
  text: 'Dropdown',
}

export const Outline: Story = {
  render: (args) => (
    <DropDown {...args} listItems={listItems} hasBorder>
      {args.children}
    </DropDown>
  ),
}

Outline.args = {
  text: 'Outline Dropdown',
}

export const ButtonDropdown: Story = {
  render: (args) => (
    <DropDown {...args} listItems={listItems}>
      {args.children}
    </DropDown>
  ),
}

ButtonDropdown.args = {
  children: <Button title="Dropdown Button" />,
}
