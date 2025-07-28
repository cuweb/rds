import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideBanner } from './WideBanner'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'

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
    as: 'section',
    title: 'Wide Image',
    image: 'https://picsum.photos/id/381/600/400',
    headerType: 'h1',
    maxWidth: '7xl',
    opacity: 60,
    focalPointX: 50,
    focalPointY: 50,
    isType: 'light',
    hasWave: false,
    hasScroll: false,
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

export const InsideSection: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    return (
      <Section>
        <WideBanner {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideBanner>
      </Section>
    )
  },
}
