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
  video: 'https://www.youtube.com/watch?v=gtEJtKwUGiU',
  image: './sample-imgs/news-img.jpg',
  imageSquare: './sample-imgs/people-img.jpg',
  alt: 'Required alt text',
}

export default meta
type Story = StoryObj<typeof Figure>

export const Image: Story = {
  args: {
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageRounded: Story = {
  args: {
    isRound: true,
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageCircular: Story = {
  args: {
    isCircle: true,
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageWithCaption: Story = {
  args: {
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const Video: Story = {
  args: {
    children: <Figure.Video source={content.video} />,
  },
}

export const VideoWithCaption: Story = {
  args: {
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />,
  },
}
