import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../../../components/Card/Card'

const meta: Meta<typeof Card> = {
  title: 'Cards & Lists/Card',
  component: Card,
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
  image: 'https://source.unsplash.com/random/400x266',
  alt: 'Required alt text',
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

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: () => (
    <Card>
      <Card.Content>
        <Card.Header text={content.title} />
      </Card.Content>
    </Card>
  ),
}

Primary.args = {}

export const WithLink: Story = {
  render: () => (
    <Card>
      <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
    </Card>
  ),
}

export const WithExcerpt: Story = {
  render: () => (
    <Card>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
      </Card.Content>
    </Card>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <Card>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
      </Card.Content>
      <Card.Badges tags={content.tags} />
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card>
      <Card.Figure>
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text={content.excerpt} />
      </Card.Content>
    </Card>
  ),
}

export const WithRoundImage: Story = {
  render: () => (
    <Card isCenter>
      <Card.Figure isRound>
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </Card.Figure>
      <Card.Content>
        <Card.PostMeta date={content.date} />
        <Card.Header text={content.title} />
        <Card.Excerpt text={content.excerpt} />
      </Card.Content>
    </Card>
  ),
}

export const WithVideo: Story = {
  render: () => (
    <Card>
      <Card.Video source={content.video} />
      <Card.Content>
        <Card.Header text={content.title} />
      </Card.Content>
    </Card>
  ),
}
