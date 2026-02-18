import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CallOut } from './CallOut'
import { Main } from '../../layouts/Main/Main'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta<typeof CallOut> = {
  title: 'Components/Call Out',
  component: CallOut,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof CallOut>

export const Primary: Story = {
  args: {
    title: 'Open House',
    maxWidth: '4xl',
    justify: 'center',
  },
  render: (args) => {
    return (
      <Main>
        <CallOut {...args}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta magna. Fusce id viverra mi. Etiam
            mollis feugiat nisl, sit amet tempor ante scelerisque vitae. Proin non bibendum dolor.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </CallOut>
      </Main>
    )
  },
}
