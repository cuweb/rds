import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideBanner } from './WideBanner'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof WideBanner> = {
  title: 'Components/Wide Banner',
  component: WideBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof WideBanner>

export const Primary: Story = {
  args: {
    title: 'Wide Image',
    image: 'https://picsum.photos/id/381/1920/840',
    headerType: 'h1',
    opacity: 60,
  },
  render: (args) => {
    return (
      <Main>
        <WideBanner {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideBanner>
      </Main>
    )
  },
}
