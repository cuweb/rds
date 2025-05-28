import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carleton360 } from './Carleton360'
import { Main } from '../../layouts/Main/Main'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { Section } from '../../layouts/Section/Section'
import CircleCheckIcon from '../Icons/CircleCheckIcon'
import LockIcon from '../Icons/LockIcon'

const meta: Meta<typeof Carleton360> = {
  title: 'Components/Carleton360',
  component: Carleton360,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Carleton360>

export const Primary: Story = {
  render: () => {
    return (
      <Main>
        <Carleton360>
          <ButtonGroup>
            <Button icon={<CircleCheckIcon className="w-4 h-4" />} title="Sign up for 360" />
            <Button icon={<LockIcon className="w-4 h-4" />} title="Login to 360" color="dark-grey" />
          </ButtonGroup>
        </Carleton360>
      </Main>
    )
  },
}

export const WideCarleton360: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    return (
      <Section maxWidth="7xl">
        <Carleton360 {...args}>
          <ButtonGroup>
            <Button icon={<CircleCheckIcon className="w-4 h-4" />} title="Sign up for 360" />
            <Button icon={<LockIcon className="w-4 h-4" />} title="Login to 360" color="dark-grey" />
          </ButtonGroup>
        </Carleton360>
      </Section>
    )
  },
}
