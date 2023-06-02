import type { Meta, StoryObj } from '@storybook/react'
import { FeedItem } from './FeedItem'
import { FeedItemData as data } from './FeedItemData'
import { StackedList } from '../../layouts/StackedList/StackedList'

export default {
  title: 'Deprecated/Feed Item',
  component: FeedItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof FeedItem>

type Story = StoryObj<typeof FeedItem>

export const Default: Story = {
  render: (args) => (
    <FeedItem as="div" link={args.link}>
      <FeedItem.Content>
        <FeedItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
        <FeedItem.Date date={args.date} />
        <FeedItem.Excerpt excerpt={args.excerpt} />
        <FeedItem.Category category={args.category} />
      </FeedItem.Content>
    </FeedItem>
  ),
}

Default.args = {
  fontSize: 'base',
  title: 'Feed item title',
  link: 'https://carleton.ca',
  date: 'November 24th, 2022',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, metus id luctus aliquam, mi libero rutrum massa, ac finibus risus velit in odio.',
  category: 'Human Resources',
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <FeedItem as="li" link={args.link}>
        <FeedItem.Content>
          <FeedItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <FeedItem.Date date={args.date} />
          <FeedItem.Excerpt excerpt={args.excerpt} />
          <FeedItem.Category category={args.category} />
        </FeedItem.Content>
      </FeedItem>
    </StackedList>
  ),
}

SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="News feed listing" hasBorder hasShadow>
      {data.map(({ id, title, link, date, excerpt, category }) => (
        <FeedItem as="li" key={id} link={link}>
          <FeedItem.Content>
            <FeedItem.Title title={title} link={link} />
            <FeedItem.Date date={date} />
            <FeedItem.Excerpt excerpt={excerpt} />
            <FeedItem.Category category={category} />
          </FeedItem.Content>
        </FeedItem>
      ))}
    </StackedList>
  ),
}
