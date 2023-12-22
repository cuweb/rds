import type { Meta, StoryObj } from '@storybook/react'
import { CardOld as Card } from './Card'
import { CardContent } from './CardContent'
import { content } from '../../data/CardData'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {}

Primary.args = {
  children: (
    <CardContent>
      <Card.Header text={content.title} />
    </CardContent>
  ),
}

export const WithLink: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
    ),
  },
}

export const WithBadges: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
        </Card.Content>
      </a>
    ),
  },
}

export const WithExcerpt: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
        </Card.Content>
      </a>
    ),
  },
}

export const WithImage: Story = {
  args: {
    children: (
      <a href={content.link}>
        <Card.Figure>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text={content.excerpt} />
        </Card.Content>
      </a>
    ),
  },
}

export const WithRoundImage: Story = {
  args: {
    isCenter: true,
    children: (
      <a href={content.link}>
        <Card.Figure isRound>
          <img src={content.image} alt={content.alt} width="400" height="266" />
        </Card.Figure>
        <Card.Content>
          <Card.PostMeta date={content.date} />
          <Card.Header text={content.title} />
          <Card.Excerpt text={content.excerpt} />
        </Card.Content>
      </a>
    ),
  },
}

export const WithVideo: Story = {
  args: {
    children: (
      <>
        <Card.Video source={content.video} />
        <Card.Content>
          <Card.Header text={content.title} />
        </Card.Content>
      </>
    ),
  },
}

export const WithVideoNoHover = {
  args: {
    noLink: true,
    children: (
      <>
        <Card.Video source={content.video} />
        <Card.Content>
          <Card.Header text={content.title} hasTitleHover={false} />
        </Card.Content>
      </>
    ),
  },
}

export const WithBorder: Story = {
  args: {
    hasRedBorder: true,
    children: (
      <Card.Content>
        <Card.Stats stat="3,000+" desc="Number of Employees" />
      </Card.Content>
    ),
  },
}
