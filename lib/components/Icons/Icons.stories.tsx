import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { iconNames } from '../../assets/font-awesome/icon-list.js'
import { Icon } from '../Icon/Icon'

const meta: Meta = {
  title: 'Resources/Icons',
}

export default meta
type Story = StoryObj

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-20 px-12 mx-auto my-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 max-w-screen-2xl">
      {iconNames.map((icon) => (
        <div key={icon.value} className="flex flex-col items-center">
          <Icon name={icon.value} size={40} color="#E91C24" className="mb-2" aria-label={icon.label} />
          <p className="mt-4 text-xs text-center">{icon.label}</p>
        </div>
      ))}
    </div>
  ),
}
