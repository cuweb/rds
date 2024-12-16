import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button/Button'
import { Section } from '../../layouts/Section/Section'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
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
    gap: '2',
    align: 'start',
  },
  render: (args) => {
    return (
      <Section>
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
      </Section>
    )
  },
}
