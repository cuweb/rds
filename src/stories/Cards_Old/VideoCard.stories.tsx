import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../../layouts/Column/Column'
import { VideoCard } from '../../components/Cards_Deprecated/VideoCard/VideoCard'
import { VideoCardData as data } from '../../components/Cards_Deprecated/VideoCard/VideoCardData'
const meta: Meta<typeof VideoCard> = {
  title: 'Cards & Lists/Cards (Deprecated)/Video Card',
  component: VideoCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof VideoCard>

export const YouTube: Story = {
  render: () => (
    <VideoCard
      source="https://www.youtube.com/watch?v=3PUK_wRVzHI"
      tags={{
        category: [
          {
            id: 1,
            name: 'Category One',
            slug: 'category-one',
          },
          {
            id: 2,
            name: 'Category Two',
            slug: 'category-two',
          },
        ],
      }}
    />
  ),
}

export const Vimeo: Story = {
  render: () => (
    <VideoCard
      source="https://vimeo.com/106595658"
      tags={{
        category: [
          {
            id: 1,
            name: 'Category One',
            slug: 'category-one',
          },
          {
            id: 2,
            name: 'Category Two',
            slug: 'category-two',
          },
        ],
      }}
    />
  ),
}

export const GridCards: Story = {
  render: () => (
    <Column cols="3" gridGap="10" maxWidth="7xl">
      {data.map((item) => (
        <VideoCard key={11} source={item?.source} tags={item?.tags} />
      ))}
    </Column>
  ),
}
