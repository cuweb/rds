import type { Meta, StoryObj } from '@storybook/react'
import { Listing } from './Listing'

const meta: Meta<typeof Listing> = {
  title: 'Cards & Lists/Listing',
  component: Listing,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

const content = {
  title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  link: 'https://carleton.ca/webservices',
  video: 'https://www.youtube.com/watch?v=gtEJtKwUGiU',
  //   image: 'https://source.unsplash.com/random/400x266',
  image: './sample-imgs/news-img.jpg',
  alt: 'Required alt text',
  date: '2022-12-16',
  startDate: '2023-03-31 20:00:00',
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

export default meta
type Story = StoryObj<typeof Listing>

export const Primary: Story = {}

Primary.args = {
  children: (
    <a href={content.link}>
      <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
    </a>
  ),
}

export const SmallHeader: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content isSmall>
          <Listing.Header text={content.title} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithoutLink: Story = {
  args: {
    noLink: true,
    children: (
      <Listing.Content>
        <Listing.Header text={content.title} />
      </Listing.Content>
    ),
  },
}

export const WithDate: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithBadges: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithExcerpt: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithImage: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.Figure>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Listing.Figure>
        <Listing.Content>
          <Listing.PostMeta date={content.date} />
          <Listing.Header text={content.title} />
          <Listing.Excerpt text={content.excerpt} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
    ),
  },
}

export const WithDatebox: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Listing.DateBox startDate={content.startDate} />
        <Listing.Content>
          <Listing.Header text={content.title} />
          <Listing.Badges tags={content.tags} />
        </Listing.Content>
      </a>
    ),
  },
}
