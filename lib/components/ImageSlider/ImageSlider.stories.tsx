import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageSlider } from './ImageSlider'
import { sliderData } from '../../data/SliderData'

const meta: Meta<typeof ImageSlider> = {
  title: 'Components/Image Slider',
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
    customClass: 'slider',
    slidesPerViewMobile: 1,
    slidesPerViewTablet: 3,
    slidesPerViewDesktop: 4,
    loop: true,
    speed: 1000,
  },
  render: (args) => {
    return (
      <ImageSlider {...args}>
        {sliderData.map((image, index) => {
          const { image: imageUrl, title, link, focalPointX, focalPointY, aspectRatio } = image
          return (
            <ImageSlider.Item
              key={index}
              imageUrl={imageUrl}
              title={title}
              link={link}
              focalPointX={focalPointX}
              focalPointY={focalPointY}
              aspectRatio={aspectRatio}
              className={index == 0 ? `swiper-slide-active` : ``}
            />
          )
        })}
      </ImageSlider>
    )
  },
}
