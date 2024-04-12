import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Figure } from './Figure'

const meta: Meta<typeof Figure> = {
  title: 'Components/Figure',
  component: Figure,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

const content = {
  image: './sample-imgs/news-img.jpg',
  imageWide: './sample-imgs/event-img.jpg',
  imageSquare: './sample-imgs/people-img.jpg',
  alt: 'Required alt text',
  video: 'https://www.youtube.com/watch?v=gtEJtKwUGiU',
}

export default meta
type Story = StoryObj<typeof Figure>

export const Default: Story = {
  render: (args) => (
    <Figure {...args}>
      <img src={content.image} alt={content.alt} width="400" height="266" />
    </Figure>
  ),
}

export const ImageLarge = {
  ...Default,
  args: {
    size: 'lg',
  },
}

export const ImageMedium: Story = {
  ...Default,
  args: {
    size: 'md',
  },
}

export const ImageSmall: Story = {
  ...Default,
  args: {
    size: 'sm',
  },
}

export const ImageCircular: Story = {
  args: {
    isRound: true,
    size: 'sm',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageWithCaption: Story = {
  ...Default,
  args: {
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
  },
}

export const ImageFloatLeft: Story = {
  ...Default,
  args: {
    align: 'left',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
  },
}

export const ImageFloatRight: Story = {
  ...Default,
  args: {
    align: 'right',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
  },
}

export const ImageCenterAlign: Story = {
  ...Default,
  args: {
    align: 'center',
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
  },
}

export const Video: Story = {
  args: {
    children: <Figure.Video source={content.video} />,
  },
}

export const VideoWithCaption: Story = {
  args: {
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />,
  },
}
