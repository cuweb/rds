import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageHeader } from './PageHeader'
import { Main } from '../../layouts/Main/Main'

const meta: Meta<typeof PageHeader> = {
  title: 'Components/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Primary: Story = {
  args: {
    header: 'Page Header',
    as: 'h1',
    size: 'lg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis.',
    isWhite: false,
    isCenter: false,
    noUnderline: false,
  },
  render: (args) => {
    return (
      <Main>
        <PageHeader {...args} />
      </Main>
    )
  },
}
