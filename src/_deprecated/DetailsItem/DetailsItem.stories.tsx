import { Meta, StoryObj } from '@storybook/react'
import { DetailsItem } from './DetailsItem'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { DetailsItemData as data } from './DetailsItemData'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Deprecated/Details Item',
  component: DetailsItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof DetailsItem>

type Story = StoryObj<typeof DetailsItem>

export const Default: Story = {
  render: (args) => (
    <DetailsItem as="div">
      {args.icon && <DetailsItem.Icon icon={args.icon} />}

      <DetailsItem.Content>
        <DetailsItem.Title title={args.title} />
        <DetailsItem.Description description={args.description} />
      </DetailsItem.Content>
    </DetailsItem>
  ),
}

Default.args = {
  title: '405 Robertson Hall',
  description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
  icon: MapPinIcon,
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <DetailsItem as="li">
        {args.icon && <DetailsItem.Icon icon={args.icon} />}
        <DetailsItem.Content>
          <DetailsItem.Title title={args.title} />
          <DetailsItem.Description description={args.description} />
        </DetailsItem.Content>
      </DetailsItem>
    </StackedList>
  ),
}

SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="Details listing" hasBorder hasShadow>
      {data.map(({ title, description, icon }) => (
        <DetailsItem as="li" key={title}>
          {icon && <DetailsItem.Icon icon={icon} />}
          <DetailsItem.Content>
            <DetailsItem.Title title={title} />
            <DetailsItem.Description description={description} />
          </DetailsItem.Content>
        </DetailsItem>
      ))}
    </StackedList>
  ),
}
