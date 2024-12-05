import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FullBanner } from './FullBanner'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { FullBannerImage } from './FullBannerImage'

const meta: Meta<typeof FullBanner> = {
  title: 'Components/Full Banner',
  component: FullBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof FullBanner>

export const Primary: Story = {
  args: {
    as: 'section',
  },
  render: (args) => {
    return (
      <FullBanner {...args}>
        <FullBanner.Image>
          <img src="https://picsum.photos/id/20/1600/700" className="rounded-none w-full h-auto" />
        </FullBanner.Image>
        <FullBanner.Content title="The nostalgia is real." headerType="h1">
          <p>
            The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
            revolutionized how the world consumes music on the move!
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </FullBanner.Content>
      </FullBanner>
    )
  },
}

export const Video: Story = {
  args: {
    as: 'section',
  },
  render: (args) => {
    return (
      <FullBanner {...args}>
        <FullBanner.Video videoName="timelapse-quad" />
        <FullBanner.Content title="The nostalgia is real." headerType="h1">
          <p>
            The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
            revolutionized how the world consumes music on the move!
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </FullBanner.Content>
      </FullBanner>
    )
  },
}
