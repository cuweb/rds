import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageSlider } from './ImageSlider'
import { sliderData } from '../../data/SliderData'
import { Main } from '../../layouts/Main/Main'

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
    slidesPerViewDesktop: 3,
    slidesPerViewTablet: 2,
    slidesPerViewMobile: 1,
  },
  render: (args) => {
    return (
      <Main>
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
              />
            )
          })}
        </ImageSlider>
      </Main>
    )
  },
}
