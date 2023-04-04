import type { Meta, StoryObj } from '@storybook/react'
import { MarketplaceItem } from './MarketplaceItem'
import { MarketplaceItemData as data } from './MarketplaceItemData'
import { StackedList } from '../../../layouts/StackedList/StackedList'

export default {
  title: 'Cards & Lists/Lists/Marketplace Item',
  component: MarketplaceItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof MarketplaceItem>

type Story = StoryObj<typeof MarketplaceItem>

export const Default: Story = {
  render: (args) => (
    <MarketplaceItem as="div" link={args.link}>
      <MarketplaceItem.Image image={args.image} alt={args.alt} />
      <MarketplaceItem.Content>
        <MarketplaceItem.Title as="h2" fontSize={args.fontSize} title={args.title} link={args.link} cost={args.cost} />
        <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
        <MarketplaceItem.Category category={args.category} />
      </MarketplaceItem.Content>
    </MarketplaceItem>
  ),
}

Default.args = {
  fontSize: 'base',
  title: 'Marketplace item title',
  link: 'https://carleton.ca',
  cost: '$100.00',
  condition: 'Like New',
  image: 'https://source.unsplash.com/random/400x300',
  category: 'Category',
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <MarketplaceItem as="li" link={args.link}>
        <MarketplaceItem.Image image={args.image} alt={args.alt} />
        <MarketplaceItem.Content>
          <MarketplaceItem.Title
            as="h2"
            fontSize={args.fontSize}
            title={args.title}
            link={args.link}
            cost={args.cost}
          />
          <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
          <MarketplaceItem.Category category={args.category} />
        </MarketplaceItem.Content>
      </MarketplaceItem>
    </StackedList>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="Marketplace listing" hasBorder hasShadow>
      {data.map(({ id, title, link, image, alt, condition, cost, category }) => (
        <MarketplaceItem key={id} as="li" link={link}>
          <MarketplaceItem.Image image={image} alt={alt} />
          <MarketplaceItem.Content>
            <MarketplaceItem.Title title={title} link={link} />
            <MarketplaceItem.Details condition={condition} cost={cost} />
            <MarketplaceItem.Category category={category} />
          </MarketplaceItem.Content>
        </MarketplaceItem>
      ))}
    </StackedList>
  ),
}
