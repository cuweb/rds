import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../../layouts/Main/Main'
import { SocialIcons } from './SocialIcons'
import { socialServices } from './SocialServices'
import { SocialIconsItem } from './SocialIconsItem'

const meta: Meta<typeof SocialIcons> = {
  title: 'Components/Social Icons',
  component: SocialIcons,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof SocialIcons>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return (
      <Main>
        <SocialIcons {...args}>
          {Object.entries(socialServices).map(([key]) => (
            <SocialIconsItem key={key} socialService={key as keyof typeof socialServices} socialLink="#" />
          ))}
        </SocialIcons>
      </Main>
    )
  },
}
