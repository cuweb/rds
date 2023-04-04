import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../../layouts/Column/Column'
import { Card } from '../../../components/Card/Card'
import { VideoData as data } from '../../../data/VideoData'

const meta: Meta<typeof Card> = {
  title: 'Cards & Lists/Card/Videos',
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

export const Primary: Story = {
  render: () => (
    <Column cols="2">
      {data.slice(0, 1).map((item) => (
        <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>
      ))}
    </Column>
  ),
}

export const TwoColumn: Story = {
  render: () => (
    <Column cols="2">
      {data.slice(0, 2).map((item) => (
        <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>
      ))}
    </Column>
  ),
}

export const ThreeColumn: Story = {
  render: () => (
    <Column cols="3">
      {data.slice(0, 3).map((item) => (
        <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>
      ))}
    </Column>
  ),
}

export const SixCardGrid: Story = {
  render: () => (
    <Column cols="3">
      {data.slice(0, 6).map((item) => (
        <Card key={item?.id}>
          <Card.Video source={item?.source} />
          <Card.Content>
            <Card.Header text={item?.title} />
          </Card.Content>
          <Card.Badges tags={item?.tags} />
        </Card>
      ))}
    </Column>
  ),
}
