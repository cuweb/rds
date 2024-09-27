import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageSlider } from './ImageSlider'

const meta: Meta<typeof ImageSlider> = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageSlider>

export const Primary: Story = {
  args: {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
  },
  render: (args) => {
    return <ImageSlider {...args} />
  },
}
