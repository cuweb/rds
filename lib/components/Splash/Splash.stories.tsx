import type { Meta, StoryObj } from '@storybook/react'
import { Splash } from './Splash'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta<typeof Splash> = {
  title: 'Components/Splash',
  component: Splash,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof Splash>

export const Primary: Story = {
  args: {
    image: 'https://cu-production.s3.us-east-1.amazonaws.com/rds/assets/bg-images/splash-athletics.png',
    eyebrow: 'Welcome to',
    header: 'Carleton Athletics',
  },
  render: (args) => {
    return (
      <Splash {...args}>
        <ButtonGroup>
          <Button type="button" title="Varsity" />
          <Button type="button" title="Community" />
          <Button type="button" title="Students" />
        </ButtonGroup>
      </Splash>
    )
  },
}
