import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FullBanner } from './FullBanner'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

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
    title: 'The nostalgia is real.',
    headerType: 'h1',
    image: 'https://picsum.photos/id/20/1600/700',
    opacity: 80,
    justify: 'start',
  },
  render: (args) => {
    return (
      <FullBanner {...args}>
        <p>
          The launch of the iPod revolutionized how the world consumes music on the move! The launch of the iPod
          revolutionized how the world consumes music on the move!
        </p>
        <ButtonGroup align={args.justify}>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </FullBanner>
    )
  },
}
