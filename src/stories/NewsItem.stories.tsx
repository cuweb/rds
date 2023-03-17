
import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { NewsItem } from '../components/Listings/NewsItem/NewsItem'
import { NewsItemData as data } from '../components/Listings/NewsItem/NewsItemData'
import { StackedList } from '../layouts/StackedList/StackedList'

export default {
  title: 'Cards & Lists/Lists/NewsItem',
  component: NewsItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof NewsItem>

type Story = StoryObj<typeof NewsItem>

export const Default: Story = {}

Default.args = {
  title: 'News item title',
  link: 'https://carleton.ca',
  date: 'January 7, 2020',
  image: 'https://source.unsplash.com/random/400x300',
  alt: 'This is the alt tag for the card image',
  excerpt:
    'Tenetur libero voluptatem rerum occaecati qui est molestia exercitationem. Voluptate quisquam iure assumenda consequatur exet recusandae dignissim sodales feugiat. Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
}

export const SingleItemList: Story = {
  render: (args) => (
    <Column maxWidth="5xl">
      <StackedList hasBorder>
        <NewsItem {...args} />
      </StackedList>
    </Column>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <Column maxWidth="5xl">
      <StackedList header="News listing" hasBorder hasShadow>
        {data.map(({ id, title, link, image, alt, date, excerpt }) => (
          <NewsItem key={id} image={image} alt={alt} title={title} link={link} date={date} excerpt={excerpt} />
        ))}
      </StackedList>
    </Column>
  ),
}
