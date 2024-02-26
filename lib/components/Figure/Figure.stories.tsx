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

export const ImageFull: Story = {
  args: {
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageLarge: Story = {
  args: {
    size: 'lg',
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageMedium: Story = {
  args: {
    size: 'md',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageSmall: Story = {
  args: {
    size: 'sm',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageRounded: Story = {
  args: {
    size: 'md',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageCircular: Story = {
  args: {
    size: 'sm',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageWithCaption: Story = {
  args: {
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageWithShadow: Story = {
  args: {
    hasShadow: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    size: 'md',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageFloatLeft: Story = {
  args: {
    align: 'left',
    hasShadow: true,
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageFloatRight: Story = {
  args: {
    align: 'right',
    hasShadow: true,
    size: 'md',
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageCenterAlign: Story = {
  args: {
    align: 'center',
    hasShadow: true,
    size: 'md',
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
    size: 'md',
    hasShadow: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />,
  },
}
