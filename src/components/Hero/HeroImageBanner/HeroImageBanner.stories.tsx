import type { Meta, StoryObj } from '@storybook/react'
import { HeroImageBanner } from './HeroImageBanner'
import { Button } from '../../Button/Button'
import { ButtonGroup } from '../../ButtonGroup/ButtonGroup'

const meta: Meta<typeof HeroImageBanner> = {
  title: 'Components/Hero/Hero Image Banner',
  component: HeroImageBanner,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof HeroImageBanner>

export const Default: Story = {
  render: () => <HeroImageBanner title="Hero Image Banner" />,
}

export const WithButton: Story = {
  render: () => (
    <HeroImageBanner title="Hero Image Banner">
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
    </HeroImageBanner>
  ),
}

export const HasImage: Story = {
  render: () => (
    <HeroImageBanner title="Hero Image Banner" image="https://picsum.photos/1600/700">
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
    </HeroImageBanner>
  ),
}
