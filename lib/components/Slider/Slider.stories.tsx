import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { imageData } from '../../data/ImageData'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Primary: Story = {
  args: {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
  },
  render: (args) => {
    return <Slider {...args} images={imageData} />
  },
}
