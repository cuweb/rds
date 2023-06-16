import { Meta, StoryObj } from '@storybook/react'
import { DropDown } from './DropDown'
import { DropDownItemData as listItems } from '../../data/DropDownData'
import { Button } from '../Button/Button'

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
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
  buttonText: 'Basic Drop Down',
}

export const WithButton: Story = {}
WithButton.args = {
  children: <Button title="Button Dropdown" />,
}

export const WithButtonArrow: Story = {}
WithButtonArrow.args = {
  children: <Button isSmall title="Button Dropdown" hasDropDown />,
}
