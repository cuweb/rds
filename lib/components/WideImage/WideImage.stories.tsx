import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WideImage } from './WideImage'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Main } from '../../layouts/Main/Main'
import { Section } from '../../layouts/Section/Section'

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
    focalPointX: 50,
    focalPointY: 50,
    isType: 'light',
    hasWave: false,
    hasScroll: false,
  },
  render: (args) => {
    return (
      <Main>
        <WideImage {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideImage>
      </Main>
    )
  },
}

export const InsideSection: Story = {
  args: {
    ...Primary.args,
    as: 'div',
  },
  render: (args) => {
    return (
      <Section>
        <WideImage {...args}>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button title="Request Information" color="dark-grey" />
          </ButtonGroup>
        </WideImage>
      </Section>
    )
  },
}
