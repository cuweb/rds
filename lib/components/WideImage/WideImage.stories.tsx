import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideImage } from './WideImage'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

const meta: Meta<typeof WideImage> = {
  title: 'Components/Wide Image',
  component: WideImage,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof WideImage>

export const Primary: Story = {
  args: {
    as: 'section',
    title: 'Wide Image',
    image: 'https://picsum.photos/id/381/600/400',
    headerType: 'h1',
    maxWidth: '7xl',
    opacity: 60,
    focalPointX: '50',
    focalPointY: '50',
    isType: 'light',
    hasWave: false,
  },
  render: (args) => {
    return (
      <WideImage {...args}>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </WideImage>
    )
  },
}
