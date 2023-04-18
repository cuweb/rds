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
  imageSquare: './sample-imgs/people-img.jpg',
  alt: 'Required alt text',
  video: 'https://www.youtube.com/watch?v=gtEJtKwUGiU',
}

export default meta
type Story = StoryObj<typeof Figure>

export const ImageFull: Story = {
  args: {
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageLarge: Story = {
  args: {
    size: 'large',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageMedium: Story = {
  args: {
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageSmall: Story = {
  args: {
    size: 'small',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageRounded: Story = {
  args: {
    isRound: true,
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageCircular: Story = {
  args: {
    isCircle: true,
    size: 'small',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageWithLink: Story = {
  args: {
    isRound: true,
    size: 'medium',
    children: (
      <a href="https://carleton.ca/webservices">
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </a>
    ),
  },
}
export const ImageWithCaption: Story = {
  args: {
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageFloatLeft: Story = {
  args: {
    align: 'left',
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageFloatRight: Story = {
  args: {
    align: 'right',
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />,
  },
}

export const ImageCenterAlign: Story = {
  args: {
    align: 'center',
    size: 'medium',
    isRound: true,
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
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />,
  },
}
