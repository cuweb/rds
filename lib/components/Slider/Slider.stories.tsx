import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { sliderData } from '../../data/SliderData'

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
    slidesPerViewDesktop: 3,
    slidesPerViewTablet: 2,
    slidesPerViewMobile: 1,
  },
  render: (args) => {
    return (
      <Slider {...args}>
        {sliderData.map((image, index) => {
          const { image: imageUrl, title, link, focalPointX, focalPointY, aspectRatio } = image
          return (
            <Slider.Slide key={index}>
              <>
                {index}
                <Slider.Image
                  key={index}
                  imageUrl={imageUrl}
                  title={title}
                  link={link}
                  focalPointX={focalPointX}
                  focalPointY={focalPointY}
                  aspectRatio={aspectRatio}
                />
              </>
            </Slider.Slide>
          )
        })}
      </Slider>
    )
  },
}
