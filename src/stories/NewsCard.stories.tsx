import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'
import { NewsCard } from '../components/Cards/NewsCard/NewsCard'
import { NewsCardData as data } from '../components/Cards/NewsCard/NewsCardData'
const meta: Meta<typeof NewsCard> = {
  title: 'Cards & Lists/Cards/News Card',
  component: NewsCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof NewsCard>

export const Default: Story = {}

Default.args = {
  title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  link: '#',
  image: 'https://source.unsplash.com/random/400x266',
  alt: 'Sample image alt tag',
  date: '2022-12-16',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.',
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

export const GridCards: Story = {
  render: () => (
    <Column cols="3" maxWidth="7xl">
      {data.map((item) => (
        <NewsCard
          key={567}
          title={item?.title}
          link={item?.link}
          image={item?.image}
          date={item?.date}
          excerpt={item?.excerpt}
          tags={item?.tags}
        />
      ))}
    </Column>
  ),
}

export const NoExcerpt: Story = {
  render: () => (
    <Column cols="3" maxWidth="7xl">
      {data.map((item) => (
        <NewsCard
          key={567}
          title={item?.title}
          link={item?.link}
          image={item?.image}
          date={item?.date}
          tags={item?.tags}
        />
      ))}
    </Column>
  ),
}

export const NoImage: Story = {
  render: () => (
    <Column cols="3" maxWidth="7xl">
      {data.map((item) => (
        <NewsCard
          key={567}
          title={item?.title}
          link={item?.link}
          date={item?.date}
          excerpt={item?.excerpt}
          tags={item?.tags}
        />
      ))}
    </Column>
  ),
}

export const BareMinimum: Story = {
  render: () => (
    <Column cols="3" maxWidth="7xl">
      {data.map((item) => (
        <NewsCard key={567} title={item?.title} link={item?.link} />
      ))}
    </Column>
  ),
}
