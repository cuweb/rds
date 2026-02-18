import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Primary: Story = {
  args: {
    gap: '5',
    align: 'start',
  },
  render: (args) => {
    return (
      <Main>
        <ButtonGroup {...args}>
          <Button
            onClick={() => {
              alert('You clicked the button')
            }}
            title="Primary Red"
          />
          <Button
            onClick={() => {
              alert('You clicked the button')
            }}
            title="Dark Grey"
            color="dark-grey"
          />
          <Button
            onClick={() => {
              alert('You clicked the button')
            }}
            title="Light Grey"
            color="grey"
          />
        </ButtonGroup>
      </Main>
    )
  },
}
